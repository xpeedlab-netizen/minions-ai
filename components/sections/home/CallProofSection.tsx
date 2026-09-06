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

      {/* items-stretch, not items-start: the two cards must end on the same baseline or
          the shorter one reads as unfinished. Stretching the COLUMNS and letting each
          card fill its column height keeps them aligned whatever the transcript and
          outcome lines wrap to, where matching a fixed height by hand only holds until
          one line count changes. */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {/* Follows the visitor's industry; defaults to the pest call. */}
        <SegmentedCallPlayer />

        {guardrail && (
          <div className="flex flex-col">
            {/* No caption under this card. The line that used to sit here ("it answers
                from your approved services... it does not guess") restated the outcome
                line almost word for word, after the badge and the transcript had already
                shown the same behaviour — the claim got made four times, which reads as
                not trusting the recording to land. Its one new idea, that the limit comes
                from the OWNER's approved services, moved into the outcome itself. */}
            <CallPlayer recording={guardrail} className="flex-1" />
          </div>
        )}
      </div>
    </Section>
  );
}
