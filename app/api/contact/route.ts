import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  let body: { name?: unknown; contact?: unknown; need?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const contact = typeof body.contact === "string" ? body.contact.trim() : "";
  const need = typeof body.need === "string" ? body.need.trim() : "";

  if (!name || !contact || !need) {
    return Response.json(
      { error: "Name, contact, and message are all required." },
      { status: 400 },
    );
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
      replyTo: EMAIL_RE.test(contact) ? contact : undefined,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nContact: ${contact}\n\nMessage:\n${need}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Contact:</strong> ${escapeHtml(contact)}</p>
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
