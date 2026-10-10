import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import CallPlayer from "@/components/ui/CallPlayer";
import {
  getRecording,
  DEFAULT_RECORDING_ID,
  GUARDRAIL_RECORDING_ID,
} from "@/lib/data/call-recordings";

/**
 * "Hear it work" — the proof band.
 *
 * Sits immediately after TheRealCost: the visitor has just been shown the missed-lead
 * problem, and this is the first moment they can check whether the fix is real. Every
 * other claim on the page is downstream of believing this one.
 *
 * TWO SCENARIOS SIDE BY SIDE:
 *   1. Standard High-Intent Showing: qualifying pre-approval, timeline, and booking the slot.
 *   2. Investor Guardrail & Compliance: handling an assertive cash investor demanding
 *      unapproved return guarantees, explaining DLD transfer fees, and securing consultation.
 *
 * Demonstrating safety and compliance alongside speed-to-lead is the single strongest
 * trust signal for brokerage owners worried about AI hallucinations.
 */
export default function CallProofSection() {
  const showingCall = getRecording(DEFAULT_RECORDING_ID);
  const guardrailCall = getRecording(GUARDRAIL_RECORDING_ID);

  return (
    <Section tone="ink" width="wide" id="hear-it">
      <Eyebrow tone="dark">Recorded demonstrations</Eyebrow>
      <SectionHeading className="mt-5 text-white">
        Don&apos;t take our word for it. Hear it answer.
      </SectionHeading>
      <SectionLead tone="dark">
        Real buyer inquiries, answered end to end. Hear how our AI qualifies high-intent
        buyers and enforces strict brokerage compliance when investors press for unapproved guarantees.
      </SectionLead>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {showingCall && (
          <div className="flex flex-col">
            <CallPlayer recording={showingCall} className="flex-1" />
          </div>
        )}
        {guardrailCall && (
          <div className="flex flex-col">
            <CallPlayer recording={guardrailCall} className="flex-1" />
          </div>
        )}
      </div>
    </Section>
  );
}
