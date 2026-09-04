/**
 * The homepage audience fork.
 *
 * invariants.md #3 makes pest control and real estate CO-PRIMARY with equal weight, so
 * the page cannot pick one. But a page addressed to two audiences at once reads as
 * built for neither, which is the problem the fork solves: each visitor is shown one
 * industry's proof, while both keep equal standing in the codebase and in nav.
 *
 * Carried in the URL (`?for=real-estate`) rather than context or localStorage:
 *  - localStorage resolves only after hydration, so the first paint is always the
 *    default and then swaps — a visible flash on every return visit.
 *  - Context at page level would push the whole tree client-side and cost the static
 *    render.
 *  - A URL param is shareable (a real-estate ad can link straight to its variant),
 *    server-readable, and free.
 *
 * IMPORTANT: reading this on the homepage must not break static generation. See
 * components/segment/SegmentBoundary.tsx for the Suspense rule that keeps `/`
 * prerendered — `npm run build` must keep printing `/` as ○ (Static).
 */

export type Segment = "pest" | "real-estate";

/**
 * Pest control by tiebreak only, because the page needs one static default and the
 * strongest recorded call happens to be a pest call. This is not a statement about
 * which market matters more; /industries/real-estate carries equal weight, and the
 * static HTML stays honest for both because nothing in the default copy claims the
 * visitor is in either industry.
 */
export const DEFAULT_SEGMENT: Segment = "pest";

export const SEGMENTS: Segment[] = ["pest", "real-estate"];

export function normalizeSegment(value: string | null | undefined): Segment {
  return value === "real-estate" || value === "pest" ? value : DEFAULT_SEGMENT;
}

/**
 * Copy that changes with the audience.
 *
 * Both variants are budgeted to the same rough line count at SectionLead's measure. If
 * one runs materially longer than the other, the swap after hydration reflows the band
 * — that is a copy discipline, not something the code can fix.
 */
export const SEGMENT_COPY: Record<
  Segment,
  { label: string; shortLabel: string; recordingId: string; proofLine: string }
> = {
  pest: {
    label: "I run a pest control company",
    shortLabel: "Pest control",
    recordingId: "pest-bedbug-emergency",
    proofLine:
      "A bed bug call at the end of the day — qualified, booked for the morning, prep instructions given, with nobody in the office.",
  },
  "real-estate": {
    label: "I'm in real estate",
    shortLabel: "Real estate",
    recordingId: "realestate-showing",
    proofLine:
      "A buyer calling about a listing — representation checked, lender pre-approval confirmed, showing booked, while the agent was mid-showing elsewhere.",
  },
};
