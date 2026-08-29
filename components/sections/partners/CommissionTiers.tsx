import Image from "next/image";
import { Check } from "lucide-react";
import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import { partnerTiers } from "@/lib/data/partners";

/**
 * The commission band — the reason the page exists.
 *
 * EVERY FIGURE IS QUOTED FROM lib/data/partners.ts, which derives them from the
 * approved partner document. Do not hard-code a rate or a worked example here.
 *
 * The owner decided on 2026-08-29 to publish the exact figures, worked examples
 * included, rather than holding them for the intro call: partners self-qualify before
 * they book, which is worth more than the negotiating room it costs.
 */

/** Renders the **bold** spans the tier bullets use for their headline numbers. */
function Bulleted({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold text-ink">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function CommissionTiers() {
  return (
    <Section tone="white" width="full" id="commission">
      {/*
        The illustration sits BESIDE the section header rather than above the cards: the
        tier cards are dense with figures, and an image over them would compete with the
        numbers that are the whole point of this band. Hidden below lg for the same reason
        — on a narrow screen it would push the rates a full screen down.
      */}
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Eyebrow>Commission</Eyebrow>
          <SectionHeading className="mt-6">
            Three ways in, depending on how involved you want to be.
          </SectionHeading>
          <SectionLead>
            Pick the tier that matches the effort you actually want to put in. You can start
            at one and move up whenever it suits you — nothing is locked. Worked figures
            below use a typical Core Crew client: $2,500 build plus $297 a month.
          </SectionLead>
        </div>

        <div className="hidden overflow-hidden rounded-2xl lg:block">
          <Image
            src="/images/illustrations/partner-recurring-revenue.webp"
            alt="An agency owner at her desk reading a statement, beside a rising coral bar motif"
            width={1200}
            height={1200}
            sizes="35vw"
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {partnerTiers.map((tier) => (
          <div
            key={tier.id}
            className={`flex flex-col rounded-2xl border bg-white p-7 ${
              tier.popular
                ? "border-coral border-t-4 shadow-lg lg:-mt-4"
                : "border-border shadow-xs"
            }`}
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-coral">
              {tier.eyebrow}
            </p>
            <h3 className="mt-3 font-heading font-bold text-2xl text-ink">{tier.name}</h3>
            <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink/70">{tier.description}</p>

            <div className="mt-7 flex flex-wrap items-baseline gap-x-2.5">
              <span className="type-display text-4xl leading-none text-ink">{tier.rate}</span>
              {tier.rateSuffix && (
                <span className="font-mono text-sm text-ink/60">{tier.rateSuffix}</span>
              )}
            </div>
            <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink/70">{tier.rateNote}</p>

            <div className="mt-6 rounded-xl bg-cream px-4 py-3.5">
              {tier.worked.map((line) => (
                <p key={line} className="font-mono text-[0.8125rem] leading-relaxed text-teal">
                  {line}
                </p>
              ))}
            </div>

            <ul className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
              {tier.points.map((point) => (
                <li key={point} className="flex gap-3 text-[0.9375rem] leading-[1.55] text-ink/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={2.5} />
                  <span>
                    <Bulleted text={point} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
