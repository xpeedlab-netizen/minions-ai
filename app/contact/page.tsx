import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import ContactCalCard from "@/components/sections/contact/ContactCalCard";
import ContactTrustStrip from "@/components/sections/contact/ContactTrustStrip";

export const metadata: Metadata = {
  title: "Contact & Book a Call",
  description:
    "Book a free 15-minute call or send us a message. No complex enterprise sales cycles — just a straightforward conversation about how automation can buy back your time.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-ink text-balance">
            Let&apos;s talk. Fifteen minutes tells us both whether this fits.
          </h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            No complex enterprise sales cycles. Just a straightforward conversation about how
            automation can buy back your time.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-extrabold text-2xl text-teal">Pick a time that works.</h2>
            <p className="mt-2 text-ink/60">
              No pressure and no hard sell — just a quick chat about your business.
            </p>
            <div className="mt-6">
              <ContactCalCard />
            </div>
          </div>

          <div>
            <h2 className="font-heading font-extrabold text-2xl text-teal">Send a message</h2>
            <p className="mt-2 text-ink/60">
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
