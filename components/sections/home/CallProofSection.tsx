import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import CallPlayer from "@/components/ui/CallPlayer";
import SegmentedCallPlayer from "@/components/segment/SegmentedCallPlayer";
import SegmentToggle from "@/components/segment/SegmentToggle";
import { getRecording, GUARDRAIL_RECORDING_ID } from "@/lib/data/call-recordings";

/**
 * "Hear it work" — the proof band.
 *
 * Sits immediately after TheRealCost: the visitor has just been shown the missed-call
 * problem, and this is the first moment they can check whether the fix is real. Every
 * other claim on the page is downstream of believing this one.
 *
 * The second player is the point of the band, not a footnote. Any voice vendor can
 * demo a call that goes well; a caller asking a pest-control line about a plumbing leak
 * is where an AI either admits the limit or invents something. Showing the refusal is a
 * stronger safety argument than any sentence we could write about accuracy, and it is
 * the objection every skeptical buyer arrives with.
 */
export default function CallProofSection() {
  const guardrail = getRecording(GUARDRAIL_RECORDING_ID);

  return (
    <Section tone="ink" width="wide" id="hear-it">
      <Eyebrow tone="dark">Recorded calls</Eyebrow>
      <SectionHeading className="mt-5 text-white">
        Don&apos;t take our word for it. Hear it answer.
      </SectionHeading>
      <SectionLead tone="dark">
        Real recorded calls to our demo line, start to finish. Read the transcript,
        or press play.
      </SectionLead>

      {/* The switch sits with the thing it switches. See SegmentToggle's docblock for
          why it is not at the foot of the previous band any more. */}
      <div className="mt-10">
        <SegmentToggle tone="dark" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Follows the visitor's industry; defaults to the pest call. */}
        <SegmentedCallPlayer />

        {guardrail && (
          <div className="lg:sticky lg:top-24">
            <CallPlayer recording={guardrail} />
            <p className="mt-4 px-1 text-[0.8125rem] leading-[1.6] text-cream/60">
              It answers from your approved services and pricing. When a caller asks for
              something outside them, it says so and hands off — it does not guess.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
