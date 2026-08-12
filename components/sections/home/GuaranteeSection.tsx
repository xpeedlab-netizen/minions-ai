import { ShieldCheck } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import { GUARANTEE, HONEST_TRUTH } from "@/lib/data/site-content";

/**
 * Guarantee band. Absorbs what used to be the standalone HonestProof section —
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
      <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-transparent opacity-50 pointer-events-none" />

      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal/20 text-teal mb-8">
        <ShieldCheck className="size-8" />
      </div>

      <SectionHeading className="text-white">{GUARANTEE.heading}</SectionHeading>

      <p className="mt-6 text-lg text-cream/80 leading-relaxed">
        {GUARANTEE.body}
      </p>

      <p className="mt-8 font-mono text-sm text-teal font-bold uppercase tracking-wide">
        {GUARANTEE.days}-Day Guarantee
      </p>

      {/* Absorbed HonestProof */}
      <div className="mt-12 pt-10 border-t border-white/10">
        <SectionHeading as="h3" className="text-white">
          {HONEST_TRUTH.heading}
        </SectionHeading>
        <p className="mt-4 text-cream/80 leading-relaxed">{HONEST_TRUTH.body}</p>
      </div>
    </Section>
  );
}
