"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { track } from "@/lib/analytics";
import type { CallRecording } from "@/lib/data/call-recordings";

/**
 * Audio player for a real recorded call.
 *
 * TRANSCRIPT IS ALWAYS RENDERED. The widget this replaces showed one line at a time
 * via AnimatePresence, which meant a screen reader got a shuffling live region and a
 * visitor who never pressed play got almost nothing. Here every cue is in the DOM as a
 * button that seeks to its own timestamp, so the transcript is readable cold, indexable,
 * and doubles as navigation. The band states the outcome in text for the same reason.
 *
 * No framer-motion: this sits below the fold on a page that already ships it for
 * Reveal, and a highlight colour does not need a physics engine.
 */

/**
 * Only one call may play at a time. Two recordings talking over each other is the
 * obvious failure once a page carries more than one player, and a module-level handle
 * is the whole fix — no context, no provider.
 */
let activeAudio: HTMLAudioElement | null = null;

function formatTime(sec: number) {
  if (!Number.isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function CallPlayer({
  recording,
  className = "",
}: {
  recording: CallRecording;
  className?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const railRef = useRef<HTMLOListElement | null>(null);
  const userScrolledRef = useRef(false);
  const playedRef = useRef(false);
  const milestonesRef = useRef<Set<number>>(new Set());

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const duration = recording.durationSec;

  /**
   * Derived, not stored. A second piece of state for "which cue is active" is a second
   * thing that can drift out of sync with the audio clock.
   */
  const activeIndex = useMemo(() => {
    let idx = -1;
    for (let i = 0; i < recording.cues.length; i++) {
      if (recording.cues[i].t <= currentTime + 0.15) idx = i;
      else break;
    }
    return idx;
  }, [currentTime, recording.cues]);

  const onTimeUpdate = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    setCurrentTime(el.currentTime);

    // Listen-depth milestones. A visitor who reaches 75% of a two-minute call is the
    // highest-intent signal this page produces, so each fires exactly once.
    const pct = (el.currentTime / duration) * 100;
    for (const mark of [25, 50, 75]) {
      if (pct >= mark && !milestonesRef.current.has(mark)) {
        milestonesRef.current.add(mark);
        track("call_complete", { recording_id: recording.id, pct: mark });
      }
    }
  }, [duration, recording.id]);

  const togglePlay = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;

    if (el.paused) {
      if (activeAudio && activeAudio !== el) activeAudio.pause();
      activeAudio = el;
      void el.play();
      if (!playedRef.current) {
        playedRef.current = true;
        track("call_play", { recording_id: recording.id });
      }
    } else {
      el.pause();
    }
  }, [recording.id]);

  const seekTo = useCallback((seconds: number) => {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = seconds;
    setCurrentTime(seconds);
    if (el.paused) {
      if (activeAudio && activeAudio !== el) activeAudio.pause();
      activeAudio = el;
      void el.play();
    }
  }, []);

  /**
   * Follow the active cue, but stop the moment the visitor scrolls the rail themselves —
   * an auto-scroll that fights the reader is worse than none.
   */
  useEffect(() => {
    if (activeIndex < 0 || userScrolledRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rail = railRef.current;
    const node = rail?.children[activeIndex] as HTMLElement | undefined;
    node?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      const el = audioRef.current;
      if (el && activeAudio === el) activeAudio = null;
    };
  }, []);

  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 ${className}`}
    >
      <audio
        ref={audioRef}
        src={recording.src}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          track("call_complete", { recording_id: recording.id, pct: 100 });
        }}
        onTimeUpdate={onTimeUpdate}
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-cream">
            {recording.badge}
          </span>
          <h3 className="mt-3 font-heading text-lg font-bold tracking-[-0.01em] text-white sm:text-xl">
            {recording.title}
          </h3>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? `Pause ${recording.title}` : `Play ${recording.title}`}
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-coral text-ink transition-transform hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          {isPlaying ? (
            <Pause className="size-5" strokeWidth={2.5} />
          ) : (
            <Play className="ml-0.5 size-5" strokeWidth={2.5} />
          )}
        </button>

        <input
          type="range"
          min={0}
          max={duration}
          step={0.5}
          value={Math.min(currentTime, duration)}
          onChange={(e) => seekTo(Number(e.target.value))}
          aria-label={`Seek within ${recording.title}`}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-coral"
        />

        <span className="shrink-0 font-mono text-xs tabular-nums text-cream/70">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      {/* Transcript */}
      <ol
        ref={railRef}
        onScroll={() => {
          userScrolledRef.current = true;
        }}
        className="mt-5 max-h-72 space-y-1 overflow-y-auto pr-1"
      >
        {recording.cues.map((cue, i) => {
          const isActive = i === activeIndex;
          return (
            <li key={`${cue.t}-${i}`}>
              <button
                type="button"
                onClick={() => seekTo(cue.t)}
                aria-current={isActive ? "true" : undefined}
                className={`flex w-full gap-3 rounded-lg px-3 py-2 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                  isActive ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <span className="shrink-0 pt-0.5 font-mono text-[0.6875rem] tabular-nums text-cream/45">
                  {formatTime(cue.t)}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] ${
                      cue.speaker === "agent" ? "text-coral" : "text-cream/55"
                    }`}
                  >
                    {cue.speaker === "agent" ? "AI receptionist" : "Caller"}
                  </span>
                  <span
                    className={`mt-0.5 block text-[0.875rem] leading-[1.55] ${
                      isActive ? "text-white" : "text-cream/70"
                    }`}
                  >
                    {cue.text}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <p className="mt-4 border-t border-white/10 pt-4 text-[0.8125rem] leading-[1.6] text-cream/70">
        <span className="font-semibold text-white">What it did: </span>
        {recording.outcome}
      </p>
    </div>
  );
}
