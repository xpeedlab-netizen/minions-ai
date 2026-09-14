import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import ContactCalCard from "@/components/sections/contact/ContactCalCard";
import ContactTrustStrip from "@/components/sections/contact/ContactTrustStrip";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";

export const metadata: Metadata = {
  title: "Contact & Book a Call",
  description:
    "Book a free 30-minute consultation or send us a message. We will assess fit, integrations, and next steps for your workflow.",
};

/**
 * What the call actually covers.
 *
 * The page previously asked for 30 minutes without saying what happens in them, which is
 * the largest single reason a booking page loses a qualified visitor. Naming the agenda
 * converts an open-ended commitment into a known one.
 */
const agenda = [
  {
    title: "Review how your calls are handled today",
    body: "Who picks up, what happens after hours, and where buyer and seller leads are being lost.",
  },
  {
    title: "Check your CRM and calendar fit",
    body: "We confirm the integration path before anyone talks about a build.",
  },
  {
    title: "Give you a fixed price and timeline",
    body: "You leave the call knowing the number and the start date, or knowing this is not a fit.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream pt-14 pb-10 sm:pt-20 sm:pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-ink text-balance">
            Let&apos;s talk. Thirty minutes tells us both whether this fits.
          </h1>
          <p className="mt-5 text-lg text-ink/75 leading-relaxed text-balance">
            We&apos;ll assess your call flow, integration needs, and whether Minions.AI is the
            right fit before discussing a build.
          </p>

          <div className="mt-8">
            <ContactTrustStrip />
          </div>
        </div>
      </section>

      {/*
        Asymmetric 60/40, not the previous 50/50.
        Two columns at equal weight made no decision for the visitor: a booked call is
        worth far more than an inbound email, yet the email form carried the stronger
        visual anchor. Booking now leads at lg:col-span-3; the message form stays fully
        visible and one scroll away at lg:col-span-2, subordinate rather than hidden.
        Mobile order is agenda -> calendar -> form, mirroring that priority.
      */}
      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-ink">
              Book a 30-minute call
            </h2>

            <ol className="mt-6 space-y-4">
              {agenda.map((step, i) => (
                <li key={step.title} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-white font-mono text-[13px] font-bold text-teal">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-[17px] text-ink">{step.title}</p>
                    <p className="mt-1 text-[15px] text-ink/75 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <ContactCalCard />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-white/60 p-5 sm:p-6 lg:sticky lg:top-28">
              <h2 className="font-heading font-bold text-xl text-ink">
                Rather not book a time?
              </h2>
              <p className="mt-2 text-[15px] text-ink/75 leading-relaxed">
                Send a message instead and we&apos;ll reply within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>

              <p className="mt-6 border-t border-border pt-5 text-[15px] text-ink/75">
                Prefer to talk now?{" "}
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="font-semibold text-teal underline underline-offset-4 hover:text-teal-dark"
                >
                  {SITE_PHONE_NUMBER}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
