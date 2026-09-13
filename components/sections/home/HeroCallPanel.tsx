import CallPlayer from "@/components/ui/CallPlayer";
import {
  getRecording,
  DEFAULT_RECORDING_ID,
  type CallRecording,
} from "@/lib/data/call-recordings";

/**
 * The hero call panel.
 *
 * WAS A CLIENT COMPONENT FORKING ON `?for=` UNTIL 2026-09-13. It honoured an explicit
 * segment param so a pest visitor arriving from a pest ad heard a pest call. Invariant
 * #3 was rewritten that day to make real estate the sole primary market, so there is
 * one clip and nothing to fork.
 *
 * That makes this a SERVER component again. The `"use client"` directive, the Suspense
 * boundary and the `useSearchParams` read are all gone, which removes a client island
 * from the first screen — the panel is now plain prerendered HTML wrapping CallPlayer,
 * which is the only part that still needs to be interactive.
 *
 * The clip is DEFAULT_RECORDING_ID (the Horizon Realty showing). That choice predates
 * the repositioning and was made on the merits: the call is asked for an unavailable
 * slot and RECOVERS by offering alternatives, which is stronger proof than a call where
 * nothing goes wrong. See the note on DEFAULT_RECORDING_ID in lib/data/call-recordings.ts
 * before changing it — the argument to beat is the recovery moment, not the duration.
 *
 * The panel chrome below is unchanged from the client version, deliberately: the frame
 * was measured at 390px and its comments record why each value is what it is.
 */

function Panel({ recording }: { recording: CallRecording }) {
  return (
    <div className="rounded-[1.75rem] bg-ink p-2 shadow-xl shadow-ink/10">
      {/*
        The strip is a label, not a row of its own: pt-2.5/pb-0 where it used to spend
        16px of the first screen on air around a 17px line.

        THE OUTCOME BADGE LIVES HERE, not above the title inside the card (see showBadge
        in components/ui/CallPlayer.tsx). Stacked over the heading it cost the pill's own
        height plus its margin — ~40px at the very top of the first screen — and it made
        the card resize on a `?for=` swap, because a two-line title pushed that stack to
        95px against a 4.25rem reserve. On this line it costs nothing: the row already
        exists, and the right half of it was empty.

        Cream, not the crew green beside it. Both halves in the same green would read as
        one run-on label; subdued, it reads as what it is — the outcome this particular
        recording is filed under.

        10px and tighter tracking below sm, and nowrap on both halves: at 390px the two
        labels came to exactly the 310px the strip has, so the live label wrapped onto a
        second line and left the pulsing dot stranded beside it. At 0.625rem they total
        ~282px and the line still holds on a 360px phone.
      */}
      <div className="flex items-center justify-between gap-3 px-4 pt-2.5 pb-0">
        <span className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-[0.625rem] font-bold uppercase tracking-[0.06em] text-crew-gia-on-dark sm:text-[0.6875rem] sm:tracking-[0.08em]">
          <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-crew-gia-on-dark motion-reduce:animate-none" />
          Click to hear the AI live
        </span>
        <span className="shrink-0 whitespace-nowrap font-mono text-[0.625rem] font-bold uppercase tracking-[0.06em] text-cream/60 sm:text-[0.6875rem] sm:tracking-[0.08em]">
          {recording.badge}
        </span>
      </div>

      {/* reserveOutcomeHeight is kept even though the clip no longer swaps. The reserve
          also holds the line steady between the paused and playing states, and the
          caption stage above it is fixed-height for the same reason — dropping it would
          let the card resize under the reader mid-playback. */}
      {/* clickAnywhereToPlay: the hero panel is the one player with no sibling on screen,
          so widening the target costs nothing and fixes the "this is a screenshot of an
          audio player" read that keeps cold visitors from pressing anything at all. */}
      <CallPlayer
        recording={recording}
        variant="caption"
        size="hero"
        className="border-0 bg-transparent"
        reserveOutcomeHeight
        clickAnywhereToPlay
        showBadge={false}
      />
    </div>
  );
}

export default function HeroCallPanel() {
  const recording = getRecording(DEFAULT_RECORDING_ID);
  if (!recording) return null;
  return <Panel recording={recording} />;
}
