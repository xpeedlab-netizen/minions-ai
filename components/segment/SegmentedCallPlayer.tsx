"use client";

import { Suspense } from "react";
import CallPlayer from "@/components/ui/CallPlayer";
import { useSegment } from "@/components/segment/useSegment";
import { getRecording } from "@/lib/data/call-recordings";
import { DEFAULT_SEGMENT, SEGMENT_COPY, type Segment } from "@/lib/segments";

/**
 * The call player, following the visitor's chosen industry.
 *
 * Owns its own Suspense boundary for the same reason SegmentToggle does: without one,
 * `useSearchParams` turns the whole route dynamic and silently discards the homepage's
 * `revalidate = 86400`. A render-prop wrapper was the obvious shape here, but a server
 * component cannot hand a function to a client component, so the fork lives inside a
 * client component instead.
 *
 * The fallback is the fully-rendered DEFAULT call, never a skeleton — so the
 * prerendered HTML carries a complete, indexable transcript, and only a visitor who
 * arrived on `?for=real-estate` sees the swap.
 */
function Player({ segment }: { segment: Segment }) {
  const rec = getRecording(SEGMENT_COPY[segment].recordingId);
  // reserveOutcomeHeight: this is the ONE player whose recording swaps under the reader,
  // so its outcome line holds a fixed height or the toggle reflows the band.
  // h-full: this is a direct child of the stretched grid in CallProofSection, so the
  // card fills its column and both cards end on the same baseline.
  return rec ? (
    <CallPlayer recording={rec} reserveOutcomeHeight className="h-full" />
  ) : null;
}

function LivePlayer() {
  return <Player segment={useSegment()} />;
}

export default function SegmentedCallPlayer() {
  return (
    <Suspense fallback={<Player segment={DEFAULT_SEGMENT} />}>
      <LivePlayer />
    </Suspense>
  );
}
