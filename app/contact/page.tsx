import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import ContactCalCard from "@/components/sections/contact/ContactCalCard";
import ContactTrustStrip from "@/components/sections/contact/ContactTrustStrip";

export const metadata: Metadata = {
  title: "Contact & Book a Call",
  description:
    "Book a free 30-minute consultation or send us a message. We will assess fit, integrations, and next steps for your workflow.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-ink text-balance">
            Let&apos;s talk. Thirty minutes tells us both whether this fits.
          </h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            We&apos;ll assess your call flow, integration needs, and whether Minions.AI is the
            right fit before discussing a build.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-bold text-2xl text-teal">Pick a time that works.</h2>
            <p className="mt-2 text-ink/65">
              Meet our implementation team for a practical fit and integration review.
            </p>
            <div className="mt-6">
              <ContactCalCard />
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-teal">Send a message</h2>
            <p className="mt-2 text-ink/65">
              Prefer email? Drop us a line and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ContactTrustStrip />
    </>
  );
}
