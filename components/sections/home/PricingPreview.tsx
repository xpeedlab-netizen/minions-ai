import Button from "@/components/ui/Button";
import PricingCard from "@/components/ui/PricingCard";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading, SectionLead } from "@/components/ui/Section";
import { pricingPlans, paymentMilestones } from "@/lib/data/pricing";
import { PILOT } from "@/lib/data/pilot";

/**
 * Band 08 — price and guarantee.
 *
 * TONE MOVED cream -> white on 2026-09-05. The disqualifier band that used to sit
 * between the pilot (cream) and this one was absorbed into the pilot, which would have
 * left two cream bands adjacent. Section treats the colour change as the separator, so
 * check the neighbours before retoning this again.
 *
 * The heading was "Professional AI, predictable pricing.", which leads with the
 * technology at exactly the point where the visitor is deciding about money. The brief
 * frames price against the human alternative first, then against the exit: an owner
 * heading toward a sale is buying recurring revenue, and will not sign anything that
 * complicates the books — which is why no-lock-in and the guarantee are load-bearing
 * here rather than decorative.
 *
 * REWRITTEN 2026-08-29 against the approved deployment proposal. The band used to promise
 * "one build fee, then a flat monthly" and lean on a 30-day money-back guarantee. Neither
 * survived: there is no required monthly charge (ongoing care is optional, from $297, and
 * is only raised at the 30-day review) and there is no refund promise — what is included
 * is 30 days of tuning after go-live. The no-lock-in argument still carries the band.
 *
 * Deliberately NO comparison to a cheap AI competitor, no named salary figure, and no
 * claim to be CHEAPER than a hire. A front-desk salary varies too much by market to
 * state as a fact on our own homepage, and at $2,000/mo the "cheaper" claim would not
 * survive a buyer doing the arithmetic. The comparison is to the right category, and putting someone else's $29 price on this page argues their case for
 * them.
 */
export default function PricingPreview() {
  return (
    <Section tone="white" width="wide" density="feature">
      {/* Ranged left, matching every other light content band. See the alignment
          note on SectionHeading — only the two accent bands centre. */}
      <SectionHeading className="max-w-2xl text-ink">
        One fixed fee. Then it is yours.
      </SectionHeading>
      {/*
        Cut from five lines to two. The valuation argument ("recurring revenue is the
        number an acquirer pays for") was dropped rather than compressed: band 02 already
        makes it in full, so at this point in the scroll it was a restatement costing three
        lines. What survives is the part only this band can say — the category comparison
        and the ownership terms.

        NO max-w OVERRIDE HERE. SectionLead caps itself at max-w-xl (576px) on purpose —
        see its docblock on measure — and a `max-w-2xl` passed through className loses the
        cascade to it, so the override this used to carry did nothing at all. Two lines
        means ~115 characters at that measure; budget for it rather than widening.
      */}
      {/*
        Was: "No per-minute billing, no hold music, no contract, a front-desk hire, not a
        phone bill." That read as a four-item list whose fourth item contradicted the
        fifth. The pivot had been carried by an em-dash ("no contract — a front-desk
        hire, not a phone bill") and the 2026-09-05 de-dash pass replaced it with a
        comma, which cannot do that job. Split into two sentences so the category
        argument stands on its own instead of trailing a list of negations.
      */}
      <SectionLead>
        No per-minute billing, no hold music, no contract. This is a front-desk hire, not
        a phone bill, and you own every account.
      </SectionLead>

      {/*
        The pilot line. Without it this band states $2,500 with no hint that the first
        thirty days are free — and the price cards are exactly what an ad click landing
        mid-page, or a visitor who scrolled past band 07, sees first. Anchoring the
        number to the pilot costs one line and stops the two bands contradicting each
        other in tone.

        Kept factual and deliberately NOT a refund promise: nothing is paid during a
        pilot, so there is nothing to refund. See the note in lib/data/pilot.ts before
        rewording, and never let this drift toward money-back language.
      */}
      {PILOT.slotsRemaining > 0 && (
        <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.6] text-ink/70">
          <span className="font-semibold text-ink">
            Founding pilots pay none of this for the first thirty days.
          </span>{" "}
          You only pay a build fee if you decide to keep it.{" "}
          <a
            href="#founding-pilot"
            className="font-medium text-teal underline underline-offset-4 hover:text-ink"
          >
            See the pilot terms
          </a>
          .
        </p>
      )}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08} className="h-full">
            <PricingCard plan={plan} analyticsLocation="home_pricing_preview" />
          </Reveal>
        ))}
      </div>

      {/* 40 / 40 / 20 Safe Payment Milestone Card */}
      <Reveal delay={0.2} className="mt-8 lg:mx-auto lg:max-w-4xl">
        <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-teal">
                Payment Safety
              </span>
              <h3 className="font-heading text-base font-bold text-ink sm:text-lg">
                Pay in 3 Safe Milestones: Zero Upfront Risk
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 font-mono text-xs font-semibold text-teal">
              30-day tuning window included
            </span>
          </div>

          {/*
            Sourced from `paymentMilestones` rather than retyped. These three tiles were
            hardcoded here and had already drifted from the data file ("At Working UAT"
            vs "At UAT handover"), which is how payment terms end up saying two things
            on two pages.
          */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {paymentMilestones.map((m) => (
              <div
                key={m.when}
                className="rounded-xl border border-border bg-cream p-3.5 sm:p-4"
              >
                <span className="font-mono text-base font-bold text-teal sm:text-lg">
                  {m.pct}
                </span>
                <p className="mt-0.5 font-heading text-xs font-bold text-ink sm:text-sm">
                  {m.when}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-ink/70">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 text-center">
        <Button href="/pricing" variant="text" showArrow className="min-h-[44px] text-lg">
          See full pricing details
        </Button>
      </div>
    </Section>
  );
}

