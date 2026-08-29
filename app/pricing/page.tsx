import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/ui/Reveal";
import { pricingPlans, pricingFaq, pricingAddOns, paymentMilestones, carePlan } from "@/lib/data/pricing";
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
    "Custom AI voice agents built and connected to your CRM for a fixed one-time build fee. Core Crew $2,500, Full Crew $4,500. Live in 3–6 weeks.",
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
            <strong> fixed one-time build fee</strong> — agreed before we start, with no hourly
            billing and no surprise line items.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-mono text-ink/80">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-border">
              <Check className="size-4 text-success" /> One-Time Build Fee
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-border">
              <Check className="size-4 text-success" /> Live in 3–6 Weeks
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

          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 items-stretch">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08} className="h-full">
                <ServicePlanCard plan={plan} />
              </Reveal>
            ))}
          </div>

          {/* Add-ons. Priced separately in the proposal and quoted on request — never
              folded into a package, which is why they sit below the cards rather than as
              feature bullets inside them. */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="text-center">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-coral">
                Optional
              </span>
              <h3 className="mt-2 font-heading font-extrabold text-2xl sm:text-3xl text-ink">
                Add to either package
              </h3>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pricingAddOns.map((addOn, i) => (
                <Reveal key={addOn.name} delay={i * 0.05} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
                    <h4 className="font-heading font-bold text-base text-ink">{addOn.name}</h4>
                    <p className="mt-2 flex-1 text-sm text-ink/70 leading-relaxed">
                      {addOn.description}
                    </p>
                    <p className="mt-4 font-mono text-sm font-bold text-teal">
                      {addOn.setup}
                      {addOn.monthly ? <span className="text-ink/60"> · {addOn.monthly}</span> : null}
                    </p>
                    {addOn.note && (
                      <p className="mt-2 text-xs text-ink/55 leading-relaxed">{addOn.note}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2b. Payment milestones */}
      <section className="bg-cream py-16 sm:py-24 border-y border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal">
              Commercials
            </span>
            <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-ink">
              You pay as the work lands
            </h2>
            <p className="mt-3 text-base text-ink/70">
              Under half falls due before you see anything working, and the balance is split
              across two milestones you can verify for yourself.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {paymentMilestones.map((m, i) => (
              <Reveal key={m.when} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
                  <span className="font-mono text-3xl font-extrabold text-coral">{m.pct}</span>
                  <h3 className="mt-3 font-heading font-bold text-base text-ink">{m.when}</h3>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Deliberately understated: the proposal is explicit that ongoing care is
              raised at the 30-day review, not sold up front. */}
          <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-heading font-bold text-lg text-ink">{carePlan.heading}</h3>
              <span className="font-mono text-sm font-bold text-teal">
                From {carePlan.from}
                {carePlan.cadence}
              </span>
            </div>
            <p className="mt-3 max-w-3xl text-sm text-ink/70 leading-relaxed">{carePlan.body}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {carePlan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-xs text-ink/55">{carePlan.footnote}</p>
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
