import Button from "@/components/ui/Button";
import PricingCard from "@/components/ui/PricingCard";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading, SectionLead } from "@/components/ui/Section";
import { pricingPlans } from "@/lib/data/pricing";

/**
 * Band 06 — price and guarantee.
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
    <Section tone="cream" width="wide" density="feature">
      {/* Ranged left, matching every other light content band. See the alignment
          note on SectionHeading — only the two accent bands centre. */}
      <SectionHeading className="max-w-2xl text-ink">
        One fixed fee. Then it is yours.
      </SectionHeading>
      <SectionLead className="max-w-2xl">
        No per-minute billing, no hold music and no contract. Compare it to a front-desk
        hire rather than to a phone bill: this answers every call, every hour, and it
        exists to add recurring revenue — which is the number an acquirer pays for. You pay
        across three milestones, you own every account and phone number, and nothing here
        puts a recurring line on your books unless you later ask for one.
      </SectionLead>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08} className="h-full">
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/pricing" variant="text" showArrow className="min-h-[44px] text-lg">
          See full pricing details
        </Button>
      </div>
    </Section>
  );
}
