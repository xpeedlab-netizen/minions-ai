import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import { pricingPlans, pricingFaq, pricingAddOns, paymentMilestones, carePlan } from "@/lib/data/pricing";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";
import FaqSection from "@/components/sections/faq/FaqSection";
import SecurityTrustSection from "@/components/sections/home/SecurityTrustSection";
import ServicePlanCard from "@/components/sections/pricing/ServicePlanCard";
import HowItWorks3Step from "@/components/sections/pricing/HowItWorks3Step";
import CostCalculator from "@/components/sections/pricing/CostCalculator";
import { Sparkles, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — One-Time Custom Setup for AI Phone Agents | Minions AI",
  description:
    "Custom AI voice agents built and connected to your CRM for a fixed one-time build fee. Core Crew $2,500, Full Crew $4,500. Live in 3–6 weeks.",
};

/**
 * Revalidated daily because the pricing cards print the current month (lib/current-month.ts).
 * Without this the label would freeze at whatever month the last deploy happened in, which
 * is worse than no label at all. Nothing else on the page is time-dependent.
 */
export const revalidate = 86400;

/**
 * MOVED ONTO THE SECTION SYSTEM 2026-08-30 (owner asked for the layout pass, explicitly
 * without new imagery).
 *
 * This page used to hand-roll four `<section className="bg-… py-16 sm:py-24">` blocks with
 * their own container widths and their own eyebrow markup, and centred every header. It was
 * the last major page not speaking the site's layout language, so clicking through from the
 * homepage pricing band crossed a visible seam. Everything here now goes through Section /
 * SectionHeading / SectionLead / Eyebrow, which is also what fixes the container widths
 * (they previously jumped 4xl → 6xl → 5xl → 3xl with no system).
 *
 * NO COPY, FIGURE OR DATA SOURCE CHANGED IN THAT PASS. Prices, milestones, add-ons and the
 * care plan all still come from lib/data/pricing.ts untouched.
 *
 * TONE SEQUENCE — the page has three bands it does NOT own, and they pin the alternation:
 *
 *   Hero            cream    ← this file
 *   Packages        white    ← this file
 *   Add-ons         cream    ← this file
 *   Milestones      white    ← this file
 *   HowItWorks3Step cream/50   (own component)
 *   CostCalculator  white      (own component)
 *   SecurityTrust   cream      (own component — ALSO USED BY /how-it-works, do not retone)
 *   Pricing FAQ     white    ← this file
 *   General FAQ     cream      (own component's default)
 *   FinalCta        teal       (own component)
 *
 * Before this, milestones (cream) ran straight into HowItWorks3Step (cream/50), and
 * Security / pricing-FAQ / general-FAQ were three cream bands in a row. If you insert a
 * band, re-check the whole column above — adjacent tones must differ (see Section.tsx).
 *
 * THE ADD-ONS ARE THEIR OWN BAND NOW, not a `mt-16` block inside the packages section.
 * They are a separate commercial idea — quoted separately, never folded into a package —
 * and nesting them under the packages heading argued the opposite. It also happens to be
 * what makes the tone column above alternate.
 *
 * THE HERO STAYS CENTRED, everything below it ranges left. That is not an oversight: the
 * alignment rule on SectionHeading says a band earns centring when it is a full-width
 * statement with no asymmetric partner, and with no hero image on this page that is
 * exactly what this is. Left-ranging it would leave the right half of the band empty with
 * nothing to balance it. If an illustration is ever added here, centring stops being
 * correct and the hero should move to a two-column grid like PartnersHero.
 */
export default function PricingPage() {
  const secondaryHref = DEMO_VIDEO_URL ? "/live-demo" : BOOKING_CALENDAR_URL;

  return (
    <>
      {/* 1. Hero */}
      {/* width="default" (max-w-5xl), NOT narrow. At max-w-3xl the three check pills
          below wrap 2+1 and leave "No Monthly Contracts Required" orphaned on its own
          centred row. They need ~740px to sit on one line. */}
      <Section tone="cream" width="default" density="feature" innerClassName="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
          <Sparkles className="size-3.5" /> One-Time Setup • No Required Retainers
        </span>
        {/* The teal second clause and the explicit <br /> both predate this pass and are
            both load-bearing. WITHOUT THE BREAK, text-balance splits this as
            "One setup. Zero / technical headaches." — the break lands mid-clause and the
            teal span starts on one line and finishes on the next. The break forces the
            intended two-line stack. Only the face changed here: it was font-heading
            extrabold, and is now the site's display scale so it matches every other
            page's top-level heading. */}
        <h1 className="mt-4 type-display text-4xl sm:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.005em] text-balance text-ink">
          One setup.
          <br />
          <span className="text-teal">Zero technical headaches.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] sm:text-[1.125rem] leading-[1.6] text-ink/75 text-balance">
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
      </Section>

      {/* 2. Setup packages */}
      <Section tone="white" width="wide" id="packages">
        <Eyebrow>Done-for-you implementation</Eyebrow>
        <SectionHeading className="mt-6 text-ink">Choose your build package.</SectionHeading>
        <SectionLead>
          Everything is custom-engineered around your dispatch rules, price book, and trade
          workflows.
        </SectionLead>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 items-stretch">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <ServicePlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. Add-ons — priced separately in the proposal and quoted on request, which is
             why they are their own band rather than feature bullets inside a package. */}
      <Section tone="cream" width="wide">
        <Eyebrow>Optional</Eyebrow>
        <SectionHeading className="mt-6 text-ink">Add to either package.</SectionHeading>
        <SectionLead>
          Quoted separately on the proposal. Nothing here is bundled into a build fee, and
          nothing here is required to go live.
        </SectionLead>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {pricingAddOns.map((addOn, i) => (
            <Reveal key={addOn.name} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
                <h3 className="font-heading font-bold text-base text-ink">{addOn.name}</h3>
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
      </Section>

      {/* 4. Payment milestones */}
      <Section tone="white" width="wide">
        <Eyebrow>Commercials</Eyebrow>
        <SectionHeading className="mt-6 text-ink">You pay as the work lands.</SectionHeading>
        <SectionLead>
          Under half falls due before you see anything working, and the balance is split
          across two milestones you can verify for yourself.
        </SectionLead>

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
        <div className="mt-10 rounded-2xl border border-border bg-cream p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-heading font-bold text-lg text-ink">{carePlan.heading}</h3>
            <span className="rounded-full bg-teal/10 px-3 py-1 font-mono text-xs font-bold text-teal">
              Optional Ongoing Care
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
      </Section>

      {/* 5. 3-step process */}
      <HowItWorks3Step />

      {/* 6. Retell AI cost estimator */}
      <CostCalculator />

      {/* 7. Enterprise security */}
      <SecurityTrustSection />

      {/* 8. Pricing FAQ */}
      <Section tone="white" width="narrow">
        <Eyebrow>Clear &amp; simple</Eyebrow>
        <SectionHeading className="mt-6 text-ink">Questions about the build fee.</SectionHeading>
        <div className="mt-12">
          <FaqAccordion items={pricingFaq.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </Section>

      {/* 9. General FAQ — cream by its own default, which is why the band above it was
             moved to white. Do not retone this one; it is shared with other pages. */}
      <FaqSection
        title="General FAQ"
        subtitle="Common questions about CRM connections, call recording, and voice customization."
      />

      {/* 10. Final CTA */}
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
