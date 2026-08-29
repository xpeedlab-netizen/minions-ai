"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { partnerClientOptions, partnerTypeOptions } from "@/lib/data/partners";

/**
 * Partner application form.
 *
 * DELIVERY: this posts to the EXISTING /api/contact route rather than a new one
 * (owner decision, 2026-08-29) — no new mailbox, no new env vars, nothing to
 * provision before the page can go live. The route's contract is {name, contact,
 * need}, so the partner-specific fields are folded into `need` as a labelled block
 * below. That keeps the route untouched and still working for the contact page.
 *
 * The consequence worth knowing: applications land in the same inbox as customer
 * support mail. Every submission is prefixed "PARTNER APPLICATION" so it can be
 * filtered. If a real partners@ mailbox is ever provisioned, split this into its own
 * route rather than widening the contact route's schema.
 */
export default function PartnerApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fieldClass =
    "min-h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-base text-white placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream";
  const labelClass =
    "block font-mono text-xs font-bold uppercase tracking-[0.08em] text-cream/80 mb-2";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/20 bg-white/[0.06] p-8">
        <CheckCircle2 className="size-9 text-cream" strokeWidth={1.75} />
        <h3 className="mt-5 font-heading font-bold text-2xl text-white">
          Application received.
        </h3>
        <p className="mt-3 max-w-md text-[0.9375rem] leading-[1.6] text-cream/80">
          We read every application ourselves and will come back to you within three business
          days — including if the answer is that it is not the right fit.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-cream underline underline-offset-4"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setSubmitting(true);
        setError(null);

        const company = String(data.get("company") || "").trim();
        const notes = String(data.get("notes") || "").trim();

        const need = [
          "PARTNER APPLICATION",
          "",
          `Company or website: ${company || "—"}`,
          `Best describes them: ${data.get("partnerType")}`,
          `Clients this could suit: ${data.get("clientType")}`,
          "",
          "Notes:",
          notes || "—",
        ].join("\n");

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.get("name"),
              contact: data.get("email"),
              need,
            }),
          });

          if (!res.ok) {
            const body = await res.json().catch(() => null);
            throw new Error(body?.error || "Failed to send your application.");
          }

          form.reset();
          setSubmitted(true);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Failed to send your application.",
          );
        } finally {
          setSubmitting(false);
        }
      }}
      className="rounded-2xl border border-white/20 bg-white/[0.06] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className={labelClass}>
            Your name
          </label>
          <input id="partner-name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="partner-email" className={labelClass}>
            Work email
          </label>
          <input id="partner-email" name="email" type="email" required className={fieldClass} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="partner-company" className={labelClass}>
          Company or website <span className="font-normal text-cream/50">— optional</span>
        </label>
        <input id="partner-company" name="company" type="text" className={fieldClass} />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-type" className={labelClass}>
            What best describes you
          </label>
          <select id="partner-type" name="partnerType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select one
            </option>
            {partnerTypeOptions.map((option) => (
              <option key={option} value={option} className="text-ink">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="partner-clients" className={labelClass}>
            Clients this could suit
          </label>
          <select id="partner-clients" name="clientType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select one
            </option>
            {partnerClientOptions.map((option) => (
              <option key={option} value={option} className="text-ink">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="partner-notes" className={labelClass}>
          Anything you want us to know <span className="font-normal text-cream/50">— optional</span>
        </label>
        <textarea
          id="partner-notes"
          name="notes"
          rows={4}
          placeholder="The industries you serve, a client you already have in mind, or a question you want answered on the call."
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream"
        />
      </div>

      {error && (
        <p role="alert" className="mt-5 text-sm text-coral">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-7" disabled={submitting}>
        {submitting ? "Sending…" : "Send application"}
      </Button>
    </form>
  );
}
