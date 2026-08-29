import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import { partnerSteps } from "@/lib/data/partners";

/**
 * Application to first commission — a stepper, not a card grid.
 *
 * The numbered labels are load-bearing here: this genuinely is a sequence, and the
 * order tells the partner when they get paid relative to when they do the work. That
 * is the one condition under which numbering is information rather than decoration.
 */
export default function PartnerSteps() {
  return (
    <Section tone="white" width="full">
      <Eyebrow>Getting started</Eyebrow>
      <SectionHeading className="mt-6">From application to your first commission.</SectionHeading>

      <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {partnerSteps.map((step) => (
          <li key={step.label} className="bg-white p-6">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-teal">
              {step.label}
            </p>
            <h3 className="mt-3 font-heading font-bold text-base text-ink">{step.title}</h3>
            <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-ink/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
