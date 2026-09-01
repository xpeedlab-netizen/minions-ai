"use client";

import { useState } from "react";
import { CheckCircle2, Clock, MailCheck, RotateCcw, AlertCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import RecaptchaField from "@/components/ui/RecaptchaField";
import { validateContact } from "@/lib/validation";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contactValue, setContactValue] = useState("");
  const [contactError, setContactError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const handleContactBlur = () => {
    if (!contactValue.trim()) {
      setContactError(null);
      return;
    }
    const result = validateContact(contactValue);
    if (!result.isValid) {
      setContactError(result.error || "Please enter a valid email or phone number.");
    } else {
      setContactError(null);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="submitted-state"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-teal/20 bg-cream p-6 sm:p-8 text-left shadow-xs flex flex-col gap-6"
        >
          {/* Success Icon & Header */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-success/15 text-success border border-success/30"
            >
              <CheckCircle2 className="size-7" />
            </motion.div>
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink">
                Thank you — message received!
              </h3>
              <p className="text-xs font-mono text-teal uppercase tracking-wide mt-0.5">
                Submission confirmed
              </p>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="rounded-xl border border-border bg-white p-5 space-y-4">
            <div className="flex items-center gap-2 text-ink font-semibold text-sm">
              <Clock className="size-4 text-teal shrink-0" />
              <span>Next steps &amp; response timeline:</span>
            </div>

            <ul className="space-y-3 text-sm text-ink/70">
              <li className="flex items-start gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream text-teal font-mono text-xs font-bold border border-border">
                  1
                </span>
                <span>
                  We&apos;ll review your details and reach out within <strong>24 hours</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream text-teal font-mono text-xs font-bold border border-border">
                  2
                </span>
                <span>
                  A specialized AI engineer will analyze your workflow needs before our call.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream text-teal font-mono text-xs font-bold border border-border">
                  3
                </span>
                <span>
                  We&apos;ll prepare a customized demo showing Minion agents in action.
                </span>
              </li>
            </ul>
          </div>

          {/* Note & Reset Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-border/60">
            <div className="flex items-center gap-2 text-xs text-ink/60 font-mono">
              <MailCheck className="size-4 text-teal shrink-0" />
              <span>Message delivered</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setContactValue("");
                setContactError(null);
                setRecaptchaToken(null);
              }}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-teal hover:text-teal-dark font-medium underline underline-offset-4 transition-colors"
            >
              <RotateCcw className="size-3.5" />
              Submit another inquiry
            </button>
          </div>
        </motion.div>
      ) : (
        <form
          key="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            setError(null);

            const name = String(data.get("name") || "").trim();
            const contact = contactValue.trim();
            const need = String(data.get("need") || "").trim();
            const botField = String(data.get("website_hp") || "");

            // Client-side contact validation
            const contactValidation = validateContact(contact);
            if (!contactValidation.isValid) {
              setContactError(contactValidation.error || "Please enter a valid email or phone number.");
              return;
            }

            setSubmitting(true);

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name,
                  contact,
                  need,
                  recaptchaToken,
                  botField,
                }),
              });

              if (!res.ok) {
                const body = await res.json().catch(() => null);
                throw new Error(body?.error || "Failed to send your message.");
              }

              form.reset();
              setContactValue("");
              setContactError(null);
              setRecaptchaToken(null);
              setSubmitted(true);
            } catch (err) {
              setError(
                err instanceof Error ? err.message : "Failed to send your message.",
              );
            } finally {
              setSubmitting(false);
            }
          }}
          className="flex flex-col gap-5"
        >
          {/* Honeypot hidden input */}
          <div className="sr-only" aria-hidden="true">
            <input
              type="text"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="min-h-12 w-full rounded-xl border border-border bg-white px-4 text-base placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="contact" className="block text-sm font-medium text-ink">
                Phone or email
              </label>
              {contactError && (
                <span className="flex items-center gap-1 text-xs text-red-600 font-medium">
                  <AlertCircle className="size-3.5" />
                  {contactError}
                </span>
              )}
            </div>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              value={contactValue}
              onChange={(e) => {
                setContactValue(e.target.value);
                if (contactError) setContactError(null);
              }}
              onBlur={handleContactBlur}
              placeholder="john@company.com"
              className={`min-h-12 w-full rounded-xl border bg-white px-4 text-base placeholder:text-ink/40 focus:outline-none focus:ring-2 ${
                contactError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-border focus:ring-teal"
              }`}
            />
          </div>

          <div>
            <label htmlFor="need" className="block text-sm font-medium text-ink mb-2">
              What do you need help with?
            </label>
            <textarea
              id="need"
              name="need"
              rows={4}
              required
              placeholder="Tell us about your current workflow..."
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-base placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          {/* reCAPTCHA verification field */}
          <div>
            <RecaptchaField
              onVerify={(token) => setRecaptchaToken(token)}
              onExpired={() => setRecaptchaToken(null)}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          <Button type="submit" showArrow className="w-full" disabled={submitting}>
            {submitting ? "Sending…" : "Send"}
          </Button>
        </form>
      )}
    </AnimatePresence>
  );
}
