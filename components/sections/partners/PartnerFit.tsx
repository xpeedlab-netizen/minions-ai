import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import { partnerSegments } from "@/lib/data/partners";

/**
 * Who this works for — same hairline-grid archetype as PartnerValueGrid but denser
 * and iconless, so the two bands read as related without repeating each other.
 *
 * Segment ORDER lives in lib/data/partners.ts and is deliberate (invariants.md #3).
 */
export default function PartnerFit() {
  return (
    <Section tone="cream" width="wide">
      <Eyebrow>Fit</Eyebrow>
      <SectionHeading className="mt-6">Who this works best for.</SectionHeading>
      <SectionLead>
        The common thread: you already have the trust of businesses that lose money when the
        phone rings out. If that describes you, the rest is straightforward.
      </SectionLead>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {partnerSegments.map((segment) => (
          <div key={segment.title} className="bg-white p-6">
            <h3 className="font-heading font-bold text-base text-ink">{segment.title}</h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-ink/70">{segment.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
