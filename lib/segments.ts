/**
 * Audience constants for the homepage.
 *
 * THIS WAS A TWO-AUDIENCE FORK UNTIL 2026-09-13. It carried `?for=pest` /
 * `?for=real-estate` in the URL, swapped the proof-band recording, and rendered a
 * toggle so a visitor could pick. That machinery existed to solve a real problem —
 * invariants.md #3 made pest control and real estate co-primary, and a page addressed
 * to two audiences at once reads as built for neither.
 *
 * Invariant #3 was rewritten on 2026-09-13: real estate is now the sole primary market.
 * With one audience there is nothing to fork, so the toggle, the per-segment recording
 * and the `?for=` reading are gone. What remains is the vocabulary the homepage speaks.
 *
 * WHY THE TYPE AND THE PARAM SURVIVE AT ALL
 *
 * `Segment` stays because lib/data/call-recordings.ts tags every clip with the market it
 * belongs to, and the pest recording is still in that file serving
 * /industries/pest-control. Collapsing the type would force that page's data to lie
 * about what it is.
 *
 * `?for=pest` is no longer read anywhere. It does not 404 and it does not throw — it is
 * simply ignored, which is the correct behaviour for a stale ad link or a bookmark: the
 * visitor gets the real-estate homepage rather than an error. Do not add a redirect for
 * it; there is nothing to redirect to.
 *
 * Restoring the fork means restoring SegmentToggle, SegmentedCallPlayer and the
 * `useSearchParams` boundary in components/segment/ — all of which were deleted in the
 * same commit, so git history is the reference, not this file.
 *
 * IMPORTANT: nothing here may read `useSearchParams` on the homepage. That was the
 * constraint the old fork was built around and it still governs anything that replaces
 * it — outside a Suspense boundary it opts `/` out of static generation and silently
 * discards `revalidate = 86400`. `npm run build` must keep printing `/` as ○ (Static).
 */

export type Segment = "pest" | "real-estate";

/** The homepage's only audience. */
export const PRIMARY_SEGMENT: Segment = "real-estate";

/**
 * The hero eyebrow pill. A plain constant now rather than a per-segment lookup: with
 * one audience the pill states it outright instead of hedging across two markets.
 */
export const HERO_PILL_LABEL = "AI voice agents for real estate teams";
