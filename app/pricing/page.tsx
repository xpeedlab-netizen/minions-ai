import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/ui/Reveal";
import { pricingPlans, pricingFaq } from "@/lib/data/pricing";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";
import FaqSection from "@/components/sections/faq/FaqSection";
import SecurityTrustSection from "@/components/sections/home/SecurityTrustSection";
import ServicePlanCard from "@/components/sections/pricing/ServicePlanCard";
import HowItWorks3Step from "@/components/sections/pricing/HowItWorks3Step";
import CostCalculator from "@/components/sections/pricing/CostCalculator";
import { ShieldCheck, Sparkles, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — One-Time Custom Setup for AI Phone Agents | Minions AI",
  description:
    "Custom AI voice phone agents built and connected to your CRM for a one-time project fee. Starter Build $1,000, Full Crew Build $2,000. Live in 5–7 days.",
};

export default function PricingPage() {
  const secondaryHref = DEMO_VIDEO_URL ? "/live-demo" : BOOKING_CALENDAR_URL;

  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-cream py-16 sm:py-24 border-b border-border/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
            <Sparkles className="size-3.5" /> One-Time Setup • No Required Retainers
          </span>
          <h1 className="mt-4 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink text-balance">
            One setup. <br />
            <span className="text-teal">Zero technical headaches.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed text-balance max-w-2xl mx-auto">
            We build, test, connect to your CRM, and launch your custom AI phone agent for a 
            <strong> simple one-time project fee</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-mono text-ink/80">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-border">
              <Check className="size-4 text-success" /> One-Time Build Fee
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-border">
              <Check className="size-4 text-success" /> Live in 5–7 Business Days
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-border">
              <Check className="size-4 text-success" /> No Monthly Contracts Required
            </span>
          </div>
        </div>
      </section>

      {/* 2. Setup Packages */}
      <section className="bg-white py-16 sm:py-24" id="packages">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal">
              Done-For-You Implementation
            </span>
            <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-ink">
              Choose your build package
            </h2>
            <p className="mt-3 text-base text-ink/70">
              Everything is custom-engineered around your dispatch rules, price book, and trade workflows.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08} className="h-full">
                <ServicePlanCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 3-Step Process */}
      <HowItWorks3Step />

      {/* 4. Retell AI Cost Estimator */}
      <CostCalculator />

      {/* 5. Enterprise Security */}
      <SecurityTrustSection />

      {/* 6. Concise FAQ */}
      <section className="bg-cream py-16 sm:py-24 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal">
              Clear & Simple
            </span>
            <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-ink">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={pricingFaq.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      {/* 7. General FAQ */}
      <FaqSection
        title="General FAQ"
        subtitle="Common questions about CRM connections, call recording, and voice customization."
      />

      {/* 8. Final CTA */}
      <FinalCta
        heading="Ready to get your custom AI agent built?"
        primaryLabel="Book a 15-Minute Discovery Call"
        primaryHref={BOOKING_CALENDAR_URL}
        secondaryLabel={DEMO_VIDEO_URL ? "Hear the AI first" : "Contact Sales"}
        secondaryHref={secondaryHref}
      />
    </>
  );
}
