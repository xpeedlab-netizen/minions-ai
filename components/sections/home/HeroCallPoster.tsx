import Link from "next/link";
import { Play } from "lucide-react";
import { getRecording, DEFAULT_RECORDING_ID } from "@/lib/data/call-recordings";

/**
 * Static poster for the hero's right column.
 *
 * Replaces HeroAudioPreview, which faked a call with a hardcoded array on a setInterval
 * and shipped a client island above the fold to do it. The real player is a heavier
 * component and belongs below the fold, so the hero gets a server-rendered still of the
 * same call — first two lines, real duration, outcome — that anchors down to it.
 *
 * Everything here is real and comes from the recording data, so the hero makes no claim
 * the band below cannot back up.
 */
export default function HeroCallPoster() {
  const rec = getRecording(DEFAULT_RECORDING_ID);
  if (!rec) return null;

  const preview = rec.cues.slice(0, 2);
  const mins = Math.floor(rec.durationSec / 60);
  const secs = Math.round(rec.durationSec % 60);

  return (
    <Link
      href="#hear-it"
      className="group block rounded-3xl border border-ink/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2 sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-teal/15 bg-teal/5 px-3 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-teal">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Real recorded call
        </span>
        <span className="font-mono text-xs tabular-nums text-ink/50">
          {mins}:{secs.toString().padStart(2, "0")}
        </span>
      </div>

      <ol className="mt-5 space-y-3">
        {preview.map((cue, i) => (
          <li key={i}>
            <span
              className={`block font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] ${
                cue.speaker === "agent" ? "text-teal" : "text-ink/45"
              }`}
            >
              {cue.speaker === "agent" ? "AI receptionist" : "Caller"}
            </span>
            <span className="mt-1 block text-[0.9375rem] leading-[1.55] text-ink/80">
              {cue.text}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-coral text-ink transition-transform group-hover:scale-105">
          <Play className="ml-0.5 size-4" strokeWidth={2.5} />
        </span>
        <span className="font-heading text-sm font-bold text-ink">
          Hear the full call
          <span className="mt-0.5 block font-body text-xs font-normal text-ink/60">
            {rec.badge} — booked without a human picking up
          </span>
        </span>
      </div>
    </Link>
  );
}
