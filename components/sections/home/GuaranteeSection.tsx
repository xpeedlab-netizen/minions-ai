import { ShieldCheck } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import { TUNING_WINDOW, HONEST_TRUTH } from "@/lib/data/site-content";

/**
 * Trust band, unrendered on the homepage since 2026-08-29 (see app/page.tsx) but kept
 * compiling. It used to carry a money-back guarantee; that claim was retired site-wide
 * because the approved deployment proposal offers a 30-day TUNING WINDOW instead, not a
 * refund. If this band is ever restored, it must not promise money back.
 *
 * Absorbs what used to be the standalone HonestProof section —
 * two text elements that occupied an entire py-16 sm:py-24 band on their own, the
 * emptiest moment on the page. Guarantee and honest-promise are one trust statement,
 * and the ink band already had the room.
 */
export default function GuaranteeSection() {
  return (
    <Section
      tone="ink"
      width="narrow"
      className="relative overflow-hidden"
      innerClassName="relative z-10 text-center"
    >
      {/* Matches the atmosphere treatment on the call-proof band, so the page's two
          dark bands read as one deliberate device rather than two accidents. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-teal/15 blur-3xl"
      />

      <div className="mx-auto mb-8 flex size-14 items-center justify-center rounded-2xl border border-teal/25 bg-teal/10 text-teal">
        <ShieldCheck className="size-7" strokeWidth={1.75} />
      </div>

      <SectionHeading className="text-white">{TUNING_WINDOW.heading}</SectionHeading>

      <p className="mx-auto mt-6 max-w-xl text-base leading-[1.65] text-cream/70 sm:text-[1.0625rem]">
        {TUNING_WINDOW.body}
      </p>

      <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.08em] text-crew-rex-on-dark">
        {TUNING_WINDOW.days}-Day Tuning Window
      </p>

      {/* Absorbed HonestProof */}
      <div className="mt-14 border-t border-white/10 pt-12">
        <SectionHeading as="h3" className="text-white">
          {HONEST_TRUTH.heading}
        </SectionHeading>
        <p className="mx-auto mt-4 max-w-xl text-[0.9375rem] leading-[1.65] text-cream/70">
          {HONEST_TRUTH.body}
        </p>
      </div>
    </Section>
  );
}
