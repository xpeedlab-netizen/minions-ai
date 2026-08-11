import type { Metadata } from "next";
import PricingCard from "@/components/ui/PricingCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/ui/Reveal";
import { pricingPlans, pricingFaq } from "@/lib/data/pricing";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";
import FaqSection from "@/components/sections/faq/FaqSection";

export const metadata: Metadata = {
  title: "Pricing — Flat Monthly Plans for AI Answering & Automation",
  description:
    "Professional AI, predictable pricing. Starter Crew $299, Full Crew $799, or a custom Commercial Crew plan.",
};

export default function PricingPage() {
  const secondaryHref = DEMO_VIDEO_URL ? "/live-demo" : BOOKING_CALENDAR_URL;

  return (
    <>
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-ink text-balance">
            Professional AI, predictable pricing.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            A flat monthly fee for every plan — no per-minute meter to watch. Pick the crew size
            that matches your call volume.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <PricingCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink mb-8">
            Pricing FAQ
          </h2>
          <FaqAccordion items={pricingFaq.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      <FaqSection
        title="General FAQ"
        subtitle="Common questions about setup, guarantees, and how the AI crew operates."
      />

      <FinalCta
        heading="Ready to pick a plan?"
        primaryLabel="Book a call to pick a plan"
        primaryHref={BOOKING_CALENDAR_URL}
        secondaryLabel={DEMO_VIDEO_URL ? "Hear the AI first" : "Contact Sales"}
        secondaryHref={secondaryHref}
      />
    </>
  );
}
