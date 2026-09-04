import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { homeFaq } from "@/lib/data/faq";

/**
 * Closing objection band.
 *
 * Sits between the guarantee and the final CTA, which is where the remaining doubts
 * actually surface: the visitor has seen the price and the terms and is deciding. The
 * questions are the APPROVED_FAQS set — robotic voice, disclosure, wrong pricing,
 * dropped calls, keeping the number, setup time, recording compliance, call centres —
 * i.e. buying questions, not general product trivia.
 *
 * `homeFaq` has existed in lib/data/faq.ts and gone unrendered; this band is mostly
 * just plumbing it in. The full knowledge base stays at /faq, linked below.
 */
export default function HomeFaq() {
  return (
    <Section tone="cream" width="default" id="faq">
      <Eyebrow>Before you book</Eyebrow>
      <SectionHeading className="mt-5 text-ink">
        The questions owners actually ask.
      </SectionHeading>
      <SectionLead>
        The eight that come up on nearly every call. If yours is not here, ask it on the
        call — we would rather answer it before you buy than after.
      </SectionLead>

      <div className="mt-12">
        <FaqAccordion items={homeFaq} defaultOpenIndex={null} />
      </div>
    </Section>
  );
}
