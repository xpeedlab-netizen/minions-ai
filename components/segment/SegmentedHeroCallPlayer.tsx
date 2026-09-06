"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CallPlayer from "@/components/ui/CallPlayer";
import {
  getRecording,
  DEFAULT_RECORDING_ID,
  type CallRecording,
} from "@/lib/data/call-recordings";
import { SEGMENT_COPY, type Segment } from "@/lib/segments";

/**
 * The hero player, following `?for=` — added 2026-09-05.
 *
 * WHY THE HERO FORKS AT ALL, AND WHY THE DEFAULT IS STILL REAL ESTATE.
 *
 * The no-param hero stays the real-estate call, because that decision was made on the
 * merits and still holds: see DEFAULT_RECORDING_ID in lib/data/call-recordings.ts. That
 * clip is asked for an unavailable slot and RECOVERS by offering alternatives, which is
 * stronger proof than a call where nothing goes wrong. Nothing here overrides it.
 *
 * What it did not cover is paid traffic. A pest control owner clicking a pest control
 * ad was landing on `/?for=pest` and hearing a real-estate showing get booked — the ad
 * had already done the segmenting, and the page threw that away and asked them to do it
 * again at a toggle further down. That is a match-rate loss on exactly the traffic this
 * fork exists to serve.
 *
 * So: the hero honours an EXPLICIT `?for=`, and falls back to the real-estate clip when
 * there is none. A visitor who declared nothing sees the strongest call; a visitor whose
 * ad declared for them hears their own trade.
 *
 * The Suspense boundary is not optional. `useSearchParams` outside one opts `/` out of
 * static generation, silently discarding `revalidate = 86400` — the build still passes,
 * it just starts rendering on every request. The fallback is the fully-rendered default
 * clip, never a skeleton, so the prerendered HTML ships a complete indexable transcript.
 */
/**
 * The dark panel and its chrome, moved here verbatim from the previous server-rendered
 * HeroCallPlayer so the frame does not change — only the clip inside it does.
 *
 * It renders DARK against the cream hero deliberately: the panel is the one thing in
 * the first screen that should read as a piece of equipment rather than as page.
 *
 * Caption variant, not the scrolling rail: at hero size a two-minute transcript is a
 * wall of text, while captions put one line at a time at a readable size and carry the
 * motion that tells a visitor this is live audio, not a screenshot. The full transcript
 * is still in the DOM for crawlers and screen readers, and the #hear-it band below
 * carries the complete scrolling rail plus the guardrail call.
 */
function Player({ recording }: { recording: CallRecording }) {
  return (
    <div className="rounded-[1.75rem] bg-ink p-2 shadow-xl shadow-ink/10">
      <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-1">
        <span className="inline-flex items-center gap-2 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-crew-gia-on-dark">
          <span className="size-1.5 animate-pulse rounded-full bg-crew-gia-on-dark motion-reduce:animate-none" />
          Hear the AI live
        </span>
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-cream/65">
          Real recorded call
        </span>
      </div>

      {/* reserveOutcomeHeight: the clip swaps on ?for=, and the two outcome lines differ
          by ~24 characters — enough to cross a line boundary and resize the hero card
          under the reader. The caption stage above is already fixed-height. */}
      <CallPlayer
        recording={recording}
        variant="caption"
        size="hero"
        className="border-0 bg-transparent"
        reserveOutcomeHeight
      />
    </div>
  );
}

/**
 * Resolves the clip for a segment, falling back to the hero default if a segment's
 * recording id ever goes missing — a bad id should degrade to the default call, not
 * blank out the hero.
 */
function recordingForSegment(segment: Segment): CallRecording | undefined {
  return (
    getRecording(SEGMENT_COPY[segment].recordingId) ??
    getRecording(DEFAULT_RECORDING_ID)
  );
}

function LiveHeroPlayer({ fallback }: { fallback: CallRecording }) {
  const segment = useExplicitSegment();
  const rec = segment ? recordingForSegment(segment) : fallback;
  return <Player recording={rec ?? fallback} />;
}

/**
 * Returns the segment ONLY when `?for=` was explicitly supplied, and null otherwise.
 *
 * The distinction matters. `useSegment()` normalises a missing param to DEFAULT_SEGMENT
 * (pest), which is correct for the toggle — it needs a value to render one side as
 * pressed — but wrong here: it would silently flip the no-param hero to the ants call
 * and undo the decision documented at the top of this file. This separates "absent"
 * from "explicitly chose pest".
 *
 * Read via `useSearchParams` rather than `window.location`, so it resolves identically
 * on the server and the client and stays correct across client-side navigation.
 */
function useExplicitSegment(): Segment | null {
  const raw = useSearchParams().get("for");
  return raw === "pest" || raw === "real-estate" ? raw : null;
}

export default function SegmentedHeroCallPlayer() {
  const fallback = getRecording(DEFAULT_RECORDING_ID);
  if (!fallback) return null;

  return (
    <Suspense fallback={<Player recording={fallback} />}>
      <LiveHeroPlayer fallback={fallback} />
    </Suspense>
  );
}
