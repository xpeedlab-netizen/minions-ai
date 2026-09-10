"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
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
 * and doubles as navigation.
 *
 * CAPTION MODE (`variant="caption"`) renders that same list as a subtitle stage: the
 * active line large and lit, the two before it fading back, the next one queued. It is
 * a presentation of the identical DOM, not a second source of truth — everything stays
 * selectable and readable with audio off.
 *
 * No framer-motion: this ships on the homepage's critical path and a fading caption is
 * a CSS opacity transition.
 */

/**
 * Only one call may play at a time. Two recordings talking over each other is the
 * obvious failure once a page carries more than one player, and a module-level handle
 * is the whole fix — no context, no provider.
 */
let activeAudio: HTMLAudioElement | null = null;

/** Bars in the signal meter. Fixed so the layout never depends on audio decoding. */
const BAR_COUNT = 28;

function formatTime(sec: number) {
  if (!Number.isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function CallPlayer({
  recording,
  className = "",
  variant = "rail",
  size = "default",
  reserveOutcomeHeight = false,
  clickAnywhereToPlay = false,
  showBadge = true,
}: {
  recording: CallRecording;
  className?: string;
  /**
   * Make the whole card a play target, not just the button.
   *
   * A panel carrying a play button, a scrub bar and a transcript reads as a SCREENSHOT
   * of an audio player — the visual vocabulary of a marketing illustration — and cold
   * visitors are trained not to click those. Widening the target to the card is what
   * actually says "this is equipment, not a picture of equipment".
   *
   * Off by default: on the #hear-it band two players sit side by side, where a card-wide
   * target would make an errant click stop the clip the visitor is already hearing.
   */
  clickAnywhereToPlay?: boolean;
  /**
   * Reserve a fixed height for the outcome line. Only meaningful on a player whose
   * recording can SWAP under the reader (the segmented one): there, a shorter outcome
   * would shrink the card and reflow the band mid-read. On a card that never swaps the
   * reservation is just a gap, so it stays off by default.
   */
  reserveOutcomeHeight?: boolean;
  /**
   * Render the outcome badge above the title. On by default, which is every player
   * except the hero: there the badge is hoisted into the panel's own header strip and
   * shares a line with "Click to hear the AI live", so drawing it here too would
   * duplicate it and spend a row of the first screen doing so. See
   * components/segment/SegmentedHeroCallPlayer.tsx.
   */
  showBadge?: boolean;
  /** "rail" = scrolling transcript list. "caption" = YouTube-style subtitle stage. */
  variant?: "rail" | "caption";
  /** "hero" enlarges the play control and caption type for above-the-fold use. */
  size?: "default" | "hero";
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLOListElement | null>(null);
  const userScrolledRef = useRef(false);
  /** True while the follow-the-cue effect is driving the rail, so its own scroll events
      are not mistaken for the visitor grabbing the scrollbar. */
  const autoScrollingRef = useRef(false);
  const playedRef = useRef(false);
  const milestonesRef = useRef<Set<number>>(new Set());

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [levels, setLevels] = useState<number[]>(() => new Array(BAR_COUNT).fill(0));
  /** Drives the finite attention pulse. See the IntersectionObserver effect below. */
  const [pulsing, setPulsing] = useState(false);

  const duration = recording.durationSec;
  const isHero = size === "hero";

  /**
   * The invitation line under the transport, e.g. "Play a real 1:57 customer call".
   *
   * Derived from `durationSec`, never hardcoded. The hero clip SWAPS on `?for=` and the
   * two calls are different lengths (117s real estate, 74s pest), so a literal duration
   * would be wrong for every visitor arriving from a pest ad — an inaccuracy sitting
   * directly beneath the words "real recorded call", which is the one place on this page
   * a wrong number costs the most.
   */
  const inviteLabel = `Play a real ${formatTime(duration)} customer call`;

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

  /**
   * Live signal meter.
   *
   * Built lazily on first play and never before: constructing an AudioContext on mount
   * trips autoplay policy warnings, and connecting a MediaElementSource permanently
   * reroutes the element's output, so it must happen once and stay connected for the
   * element's life. Everything is wrapped — Web Audio is unavailable or blocked in
   * enough contexts (older Safari, strict privacy modes) that a throw here would take
   * the whole player down with it, and the meter is decoration.
   */
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);

  const ensureAnalyser = useCallback(() => {
    if (analyserRef.current || !audioRef.current) return;
    try {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctor) return;
      const ctx = new Ctor();
      const source = ctx.createMediaElementSource(audioRef.current);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      analyser.smoothingTimeConstant = 0.75;
      source.connect(analyser);
      analyser.connect(ctx.destination);
      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
    } catch {
      /* Meter stays flat; playback is unaffected. */
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      setLevels(new Array(BAR_COUNT).fill(0));
      return;
    }
    const analyser = analyserRef.current;
    if (!analyser) return;

    const bins = new Uint8Array(analyser.frequencyBinCount);
    const tick = () => {
      analyser.getByteFrequencyData(bins);
      // Fold the spectrum into BAR_COUNT buckets. Speech lives low, so bias the
      // sampling toward the bottom of the range or every bar reads near zero.
      const usable = Math.floor(bins.length * 0.7);
      const per = Math.max(1, Math.floor(usable / BAR_COUNT));
      const next: number[] = [];
      for (let i = 0; i < BAR_COUNT; i++) {
        let sum = 0;
        for (let j = 0; j < per; j++) sum += bins[i * per + j] ?? 0;
        next.push(Math.min(1, sum / per / 190));
      }
      setLevels(next);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [isPlaying]);

  const togglePlay = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;

    if (el.paused) {
      if (activeAudio && activeAudio !== el) activeAudio.pause();
      activeAudio = el;
      // Pressing play is an explicit "follow along" gesture: re-arm auto-scroll even if
      // the visitor had scrolled the rail by hand earlier.
      userScrolledRef.current = false;
      ensureAnalyser();
      void audioCtxRef.current?.resume();
      void el.play();
      if (!playedRef.current) {
        playedRef.current = true;
        // The invitation has done its job; from here the meter carries the motion.
        setPulsing(false);
        track("call_play", { recording_id: recording.id });
      }
    } else {
      el.pause();
    }
  }, [recording.id, ensureAnalyser]);

  const seekTo = useCallback(
    (seconds: number) => {
      const el = audioRef.current;
      if (!el) return;
      el.currentTime = seconds;
      setCurrentTime(seconds);
      userScrolledRef.current = false;
      if (el.paused) {
        if (activeAudio && activeAudio !== el) activeAudio.pause();
        activeAudio = el;
        ensureAnalyser();
        void audioCtxRef.current?.resume();
        void el.play();
      }
    },
    [ensureAnalyser],
  );

  /**
   * Follow the active cue, but stop the moment the visitor scrolls the rail themselves —
   * an auto-scroll that fights the reader is worse than none. Caption mode does not
   * scroll at all; it swaps which lines are lit.
   *
   * Two traps here, both of which silently disabled this once:
   *
   * 1. `onScroll` cannot tell a user's scroll from this effect's own. Setting
   *    `userScrolled` from a raw handler meant the FIRST auto-scroll flagged itself as
   *    manual and every later cue was ignored — the rail followed cue one and then froze.
   *    So the effect announces its own scrolls via `autoScrollingRef`, cleared once the
   *    smooth animation has settled.
   * 2. `scrollIntoView({block:"nearest"})` moves the minimum distance, which parks the
   *    active line against the rail edge under the mask fade. We set `scrollTop`
   *    directly to centre the cue, and scroll the RAIL only — `scrollIntoView` will
   *    happily scroll the page too and yank the band around mid-playback.
   */
  useEffect(() => {
    if (variant !== "rail") return;
    if (activeIndex < 0 || userScrolledRef.current) return;
    const rail = railRef.current;
    const node = rail?.children[activeIndex] as HTMLElement | undefined;
    if (!rail || !node) return;

    // Measure against the RAIL, not `offsetTop` — `offsetTop` is relative to the nearest
    // positioned ancestor (the card, several levels up), which yields values in the
    // thousands and clamps every cue to the bottom of the rail.
    const delta =
      node.getBoundingClientRect().top - rail.getBoundingClientRect().top;
    const target = Math.max(
      0,
      Math.min(
        rail.scrollTop + delta - rail.clientHeight / 2 + node.offsetHeight / 2,
        rail.scrollHeight - rail.clientHeight,
      ),
    );
    if (Math.abs(target - rail.scrollTop) < 2) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    autoScrollingRef.current = true;
    rail.scrollTo({ top: target, behavior: reduced ? "auto" : "smooth" });

    // Outlive the smooth animation, otherwise its trailing scroll events land after the
    // flag clears and get misread as the visitor taking over.
    const done = window.setTimeout(
      () => {
        autoScrollingRef.current = false;
      },
      reduced ? 50 : 700,
    );
    return () => window.clearTimeout(done);
  }, [activeIndex, variant]);

  /**
   * The resting pulse on the play button, gated to when the card is actually in view.
   *
   * CONTINUOUS, not a fixed number of beats. A finite pulse was tried and removed: it is
   * spent by the time a visitor scrolls back up to the hero after reading a band or two,
   * which is exactly the returning-attention moment the invitation exists to serve. On a
   * page selling a live voice product, a still play button reads as a screenshot.
   *
   * The observer earns its place by holding the animation until the panel is on screen
   * and stopping it once the visitor has played — at which point the meter carries the
   * motion and a pulse would just compete with it. Suppressed under prefers-reduced-motion
   * both here and via `motion-reduce:hidden` on the element.
   */
  useEffect(() => {
    const card = cardRef.current;
    if (!card || playedRef.current) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPulsing(entry.isIntersecting && !playedRef.current);
      },
      { threshold: 0.4 },
    );
    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Capture the node at mount. Reading audioRef.current inside the cleanup risks
    // it already being null, which would strand this element in the activeAudio
    // singleton and stop a later clip from pausing it.
    const el = audioRef.current;
    return () => {
      if (el && activeAudio === el) activeAudio = null;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      void audioCtxRef.current?.close();
    };
  }, []);

  const progressPct = duration > 0 ? (Math.min(currentTime, duration) / duration) * 100 : 0;

  const playButton = (
    <button
      type="button"
      onClick={togglePlay}
      aria-label={isPlaying ? `Pause ${recording.title}` : `Play ${recording.title}`}
      className={`group relative flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-coral text-ink transition-transform hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-2 ${
        isHero ? "size-20 sm:size-24" : "size-14"
      }`}
    >
      {/* The resting pulse. Continuous by design — see the note on the observer effect. */}
      {!isPlaying && pulsing && (
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-coral/40 [animation-duration:2.2s] motion-reduce:hidden"
        />
      )}
      {isPlaying ? (
        <Pause className={isHero ? "relative size-8" : "relative size-6"} strokeWidth={2.5} />
      ) : (
        <Play
          className={isHero ? "relative ml-1 size-9" : "relative ml-0.5 size-6"}
          strokeWidth={2.5}
        />
      )}
    </button>
  );

  const meter = (
    <div
      aria-hidden
      className={`flex flex-1 items-center gap-[3px] ${isHero ? "h-14" : "h-10"}`}
    >
      {levels.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-full bg-crew-rex-on-dark/70 transition-[height] duration-75 ease-out"
          style={{ height: `${Math.max(8, v * 100)}%`, minHeight: 3 }}
        />
      ))}
    </div>
  );

  const scrubber = (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min={0}
        max={duration}
        step={0.5}
        value={Math.min(currentTime, duration)}
        onChange={(e) => seekTo(Number(e.target.value))}
        aria-label={`Seek within ${recording.title}`}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-coral"
        style={{
          background: `linear-gradient(to right, var(--color-coral) ${progressPct}%, rgba(255,255,255,0.15) ${progressPct}%)`,
        }}
      />
      <span className="shrink-0 font-mono text-xs tabular-nums text-cream/70">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
    </div>
  );

  /**
   * Card-wide play, without stealing clicks from the controls inside it.
   *
   * The card already contains a play button, a range input, caption and cue buttons, and
   * selectable transcript text. A naive wrapper handler would double-fire on the play
   * button (toggling twice, so it never starts), and would restart the clip when someone
   * clicks a cue to seek. So: ignore anything originating on an interactive element, and
   * ignore a click that is really the end of a text selection.
   */
  const onCardClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!clickAnywhereToPlay) return;
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, [role='button']")) return;
      if (window.getSelection()?.toString()) return;
      togglePlay();
    },
    [clickAnywhereToPlay, togglePlay],
  );

  return (
    <div
      ref={cardRef}
      onClick={onCardClick}
      className={`group/card flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] px-5 sm:px-6 ${
        /* Vertical padding only: the hero card carries the first screen and every row of
           its own air competes with the booking CTA below it. Horizontal padding is
           untouched, and so is every other player on the site. */
        isHero ? "py-4 sm:py-5" : "py-5 sm:py-6"
      } ${
        clickAnywhereToPlay && !isPlaying ? "cursor-pointer" : ""
      } ${className}`}
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

      {/*
        min-h so a one-line and a two-line title produce the same card height; without it
        the audience toggle nudges the whole band by a few pixels.

        Two reserves, because there are two shapes. With the badge stacked above it
        (every player but the hero) the block is pill + margin + title and 4.25rem is the
        long-standing number. With the badge hoisted into the hero's header strip the
        block is the title alone, and the reserve is measured rather than guessed: the
        taller of the two hero titles ("Ants in the kitchen, booked on the first call")
        runs two lines at 46px on a 390px phone and 55px at 1440px, so 3.25rem/3.75rem
        clears both with a few px to spare and still hands ~35px back to the fold.
      */}
      <div
        className={`flex flex-col items-start ${
          showBadge ? "min-h-[4.25rem]" : "min-h-[3.25rem] sm:min-h-[3.75rem]"
        }`}
      >
        {showBadge && (
          <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-cream">
            {recording.badge}
          </span>
        )}
        <h3
          className={`font-heading font-bold tracking-[-0.01em] text-white ${
            isHero ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          {recording.title}
        </h3>
      </div>

      {/* Transport: big button, live meter, speed. */}
      <div className="mt-5 flex items-center gap-4">
        <div className="relative shrink-0">
          {playButton}
          {/*
            Desktop-only affordance, deliberately additive. There is no hover on touch,
            which is most of this page's traffic, so the hover label can never be the
            thing that tells a visitor to click — that job belongs to the always-visible
            invitation line below. This just rewards a cursor that is already there.
          */}
          {!isPlaying && (
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2.5 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-ink opacity-0 shadow-lg transition-opacity duration-150 group-hover/card:opacity-100"
            >
              Play demo
            </span>
          )}
        </div>
        {meter}
      </div>

      {/*
        The always-visible invitation. This is the element doing the real work: it names
        the action ("Play"), vouches for the artefact ("real … customer call") and prices
        the commitment (the duration) in one line, on every device, without a hover.

        It stays put during playback rather than hiding: the line is as much a label for
        what is playing as it is a prompt, and removing it mid-play collapses the card by
        its own height — a reflow under the reader at the exact moment they are listening.
      */}
      <p className="mt-3 flex items-center gap-1.5 text-[0.8125rem] text-cream/75">
        <Play aria-hidden className="size-3 fill-current" strokeWidth={0} />
        {inviteLabel}
      </p>

      <div className="mt-4">{scrubber}</div>

      {variant === "caption" ? (
        <CaptionStage
          recording={recording}
          activeIndex={activeIndex}
          onSeek={seekTo}
          isHero={isHero}
        />
      ) : (
        <ol
          ref={railRef}
          onScroll={() => {
            if (autoScrollingRef.current) return;
            userScrolledRef.current = true;
          }}
          /*
            Fixed height, not max-height. The rail always scrolls internally, so swapping
            between two recordings of different transcript lengths cannot resize the card
            — otherwise the audience toggle reflows the band under the reader's cursor.
          */
          /*
            The fade mask makes the clipped first and last lines read as "there is more
            here" rather than as a rendering fault. `mask-image` is not animated and
            degrades to no mask where unsupported, which is only a cosmetic loss.
          */
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0, #000 1.25rem, #000 calc(100% - 1.25rem), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0, #000 1.25rem, #000 calc(100% - 1.25rem), transparent 100%)",
          }}
          className="scrollbar-dark mt-5 h-72 space-y-1 overflow-y-auto py-2 pr-2"
        >
          {recording.cues.map((cue, i) => {
            const isActive = i === activeIndex;
            return (
              <li key={`${cue.t}-${i}`}>
                <button
                  type="button"
                  onClick={() => seekTo(cue.t)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex w-full cursor-pointer gap-3 rounded-lg px-3 py-2 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                    isActive ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <span className="shrink-0 pt-0.5 font-mono text-[0.6875rem] tabular-nums text-cream/70">
                    {formatTime(cue.t)}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] ${
                        cue.speaker === "agent" ? "text-coral" : "text-cream/75"
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
      )}

      {/* Absorbs any surplus height from a stretched column so it opens ABOVE the
          outcome rule rather than below the text, keeping the rule on the card's foot. */}
      <div aria-hidden className="grow" />

      {/*
        Sized for the longest outcome line rather than the shortest, but only where the
        recording can change: the audience toggle sits above this band, so a swap to a
        shorter outcome would otherwise resize the card and reflow the page under the
        reader. 5.5rem clears four wrapped lines plus the border and padding at the
        narrowest column this card is used in. A card that never swaps opts out — there
        the reserved height is 30px of empty ink above whatever follows.
      */}
      <p
        className={`mt-4 border-t border-white/10 pt-4 text-[0.8125rem] leading-[1.6] text-cream/70 ${
          reserveOutcomeHeight ? "min-h-[5.5rem]" : ""
        }`}
      >
        <span className="font-semibold text-white">What it did: </span>
        {recording.outcome}
      </p>
    </div>
  );
}

/**
 * Subtitle stage. Shows the active line plus the two before it and the one after,
 * fading with distance — the shape a viewer already knows from captions.
 *
 * Every cue stays in the DOM (the non-visible ones are clipped by the fixed-height
 * window, not removed), so the transcript is still complete for a crawler and a screen
 * reader; only its presentation changes. Height is fixed for the same reason the rail's
 * is: the band sits under an audience toggle and must not reflow on swap.
 */
function CaptionStage({
  recording,
  activeIndex,
  onSeek,
  isHero,
}: {
  recording: CallRecording;
  activeIndex: number;
  onSeek: (t: number) => void;
  isHero: boolean;
}) {
  // Before playback starts, show the opening line rather than an empty stage.
  const focus = activeIndex < 0 ? 0 : activeIndex;
  const prev = focus > 0 ? recording.cues[focus - 1] : null;
  const cue = recording.cues[focus];
  const next = recording.cues[focus + 1] ?? null;

  if (!cue) return null;

  return (
    <div
      /* Still a FIXED height at every width — that is what keeps a wrapping cue from
         reflowing the band above (see the note below). The breakpoint changes the
         number, never the fixed-ness.

         The hero's wide number is measured, not guessed: sweeping every cue of both
         recordings at 1440px puts the tallest at 178px, so 224px was leaving 46px of
         empty ink centred around the captions — the "gap" visible under the scrubber.
         11.5rem (184px) keeps a 6px cushion over the tallest cue and hands the rest
         back to the fold. The 390px number is unchanged at h-44: there the tallest cue
         measures 167px and the slack is already only 9px. */
      className={`relative mt-5 flex flex-col justify-center overflow-hidden ${
        isHero ? "h-44 sm:h-[11.5rem]" : "h-48 sm:h-52"
      }`}
    >
      {/*
        One caption at a time, with its neighbours dimmed — the shape a viewer knows
        from subtitles.

        An earlier version absolutely positioned every cue and slid the list, which
        overlapped them the moment a cue wrapped past its fixed row height (the pest
        call's prep-instructions line runs five lines). Rendering only three cues in
        normal flow means a long line simply takes the room it needs and the stage
        stays a fixed height, so the band above never reflows.

        The full transcript still reaches crawlers and screen readers through the
        visually-hidden list below — captions are a presentation of it, not a
        replacement for it.
      */}
      <div aria-hidden className="space-y-2">
        {prev && (
          <p className="line-clamp-1 text-[0.8125rem] leading-[1.5] text-cream/35">
            {prev.text}
          </p>
        )}

        <button
          type="button"
          onClick={() => onSeek(cue.t)}
          className="block w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <span
            className={`block font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] ${
              cue.speaker === "agent" ? "text-coral" : "text-cream/75"
            }`}
          >
            {cue.speaker === "agent" ? "AI receptionist" : "Caller"}
          </span>
          {/*
            Clamped to four lines. One turn in the pest call (the prep instructions)
            runs five lines at this measure and would otherwise push its neighbours out
            of the stage. The full sentence stays in the sr-only transcript below and in
            the scrolling rail on the #hear-it band, so nothing is lost — only this
            presentation is bounded.
          */}
          <span
            className={`mt-1 line-clamp-4 text-white ${
              isHero ? "text-base leading-[1.45] sm:text-lg" : "text-[0.9375rem] leading-[1.45]"
            }`}
          >
            {cue.text}
          </span>
        </button>

        {next && (
          <p className="line-clamp-1 text-[0.8125rem] leading-[1.5] text-cream/35">
            {next.text}
          </p>
        )}
      </div>

      {/* The complete transcript, for assistive tech and crawlers. */}
      <ol className="sr-only">
        {recording.cues.map((c, i) => (
          <li key={`${c.t}-${i}`} aria-current={i === focus ? "true" : undefined}>
            {c.speaker === "agent" ? "AI receptionist" : "Caller"}: {c.text}
          </li>
        ))}
      </ol>
    </div>
  );
}
