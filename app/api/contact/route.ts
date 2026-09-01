import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { validateContact } from "@/lib/validation";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    // If not configured in environment, allow in local/preview environments
    return true;
  }

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await res.json();
    return Boolean(data.success);
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  let body: {
    name?: unknown;
    contact?: unknown;
    need?: unknown;
    recaptchaToken?: unknown;
    botField?: unknown;
  };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot spam check
  if (body.botField) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const contact = typeof body.contact === "string" ? body.contact.trim() : "";
  const need = typeof body.need === "string" ? body.need.trim() : "";
  const recaptchaToken =
    typeof body.recaptchaToken === "string" ? body.recaptchaToken.trim() : "";

  if (!name || !contact || !need) {
    return Response.json(
      { error: "Name, contact, and message are all required." },
      { status: 400 },
    );
  }

  // Email & phone validation
  const validation = validateContact(contact);
  if (!validation.isValid) {
    return Response.json(
      { error: validation.error || "Please provide a valid email or phone number." },
      { status: 400 },
    );
  }

  // reCAPTCHA validation
  if (process.env.RECAPTCHA_SECRET_KEY && !recaptchaToken) {
    return Response.json(
      { error: "reCAPTCHA verification is required. Please check the box." },
      { status: 400 },
    );
  }

  if (recaptchaToken) {
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return Response.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 },
      );
    }
  }

  const smtpUser = process.env.CONTACT_SMTP_USER;
  const smtpPass = process.env.CONTACT_SMTP_PASS;
  const emailTo = process.env.CONTACT_EMAIL_TO;

  if (!smtpUser || !smtpPass || !emailTo) {
    console.error("Contact form: missing SMTP env vars");
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.sendMail({
      from: `"Minions.AI Website" <${smtpUser}>`,
      to: emailTo,
      replyTo: validation.type === "email" ? contact : undefined,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nContact: ${contact} (${validation.type})\n\nMessage:\n${need}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Contact:</strong> ${escapeHtml(contact)} (<em>${validation.type}</em>)</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(need).replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return Response.json(
      { error: "Failed to send your message. Please try again." },
      { status: 502 },
    );
  }
}
