import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import CallPlayer from "@/components/ui/CallPlayer";
import { getRecording, DEFAULT_RECORDING_ID } from "@/lib/data/call-recordings";

/**
 * "Hear it work" — the proof band.
 *
 * Sits immediately after TheRealCost: the visitor has just been shown the missed-lead
 * problem, and this is the first moment they can check whether the fix is real. Every
 * other claim on the page is downstream of believing this one.
 *
 * ONE PLAYER AS OF 2026-09-13, WHERE THERE WERE TWO. It previously rendered an industry
 * toggle, a per-segment player and a second "guardrail" clip in a two-column grid. All
 * three are gone, for two different reasons:
 *
 *   - The toggle and the segmented player went with the audience fork. Invariant #3 now
 *     makes real estate the sole primary market, so there is one audience and nothing
 *     to switch between.
 *
 *   - The guardrail clip (guardrail-out-of-scope) was PEST-BRANDED, and not incidentally:
 *     the agent opens "Thanks for calling Ironclad Pest Solutions" and then says "I
 *     specialize in pest control". It was the single most pest-specific thing on the
 *     homepage, sitting in the band that exists to prove the product.
 *
 * LOSING IT COSTS SOMETHING REAL, AND THE ARGUMENT FOR IT IS WORTH KEEPING. Any voice
 * vendor can demo a call that goes well; the moment a caller asks for something outside
 * the approved scope is where an AI either admits the limit or invents something, and
 * showing a refusal is a stronger safety argument than any sentence we could write.
 * That objection is now answered by the Retell band's control list instead, which is
 * weaker — an assertion rather than a recording.
 *
 * THE FIX IS A REAL-ESTATE GUARDRAIL RECORDING, NOT A REWRITTEN PEST ONE. A genuine
 * candidate: a caller asking a question the agent must not answer — a Fair Housing
 * question about the neighbourhood ("what kind of people live there?") is the textbook
 * case, and refusing it correctly is a far stronger trust signal for a brokerage than
 * declining a plumbing job ever was. When that clip exists, restore the two-column grid
 * from git history (this file, before 2026-09-13) rather than rebuilding it.
 *
 * Until then: one authentic call beats two where one is off-message. The clip is the
 * Horizon Realty showing — the same recording the hero plays, deliberately. A visitor
 * who pressed play up there gets the full scrolling transcript and the outcome line
 * here; one who did not gets a second chance at the page's strongest asset.
 */
export default function CallProofSection() {
  const recording = getRecording(DEFAULT_RECORDING_ID);

  return (
    <Section tone="ink" width="wide" id="hear-it">
      <Eyebrow tone="dark">Recorded call</Eyebrow>
      <SectionHeading className="mt-5 text-white">
        Don&apos;t take our word for it. Hear it answer.
      </SectionHeading>
      <SectionLead tone="dark">
        A real buyer inquiry, answered end to end: representation checked, financing
        confirmed, showing booked. Read the transcript, or press play.
      </SectionLead>

      {/* max-w-2xl + mx-auto: with the second card gone, a full-width player stretched
          the transcript rail to a ~1200px measure at 1440 — long enough that the eye
          loses the line between cues. Capped to roughly the width the card had as one
          half of the old two-column grid, so the rail reads the same as it always did
          and the band does not look like a layout with a missing element. */}
      <div className="mt-10 mx-auto w-full max-w-2xl">
        {recording && <CallPlayer recording={recording} />}
      </div>
    </Section>
  );
}
