"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, CheckCircle2, Sparkles } from "lucide-react";

type Line = {
  speaker: "caller" | "rex";
  speakerLabel: string;
  text: string;
  timeSec: number;
};

const CALL_LINES: Line[] = [
  {
    speaker: "caller",
    speakerLabel: "Inbound Caller",
    text: "“Hi, I'm calling to book an appointment for this Thursday morning if you have an opening?”",
    timeSec: 3,
  },
  {
    speaker: "rex",
    speakerLabel: "Rex (AI Receptionist)",
    text: "“We have 9:30 AM or 11:00 AM open this Thursday. Which time works best for your schedule?”",
    timeSec: 8,
  },
  {
    speaker: "caller",
    speakerLabel: "Inbound Caller",
    text: "“9:30 AM works great for me, thanks.”",
    timeSec: 11,
  },
  {
    speaker: "rex",
    speakerLabel: "Rex (AI Receptionist)",
    text: "“You're all set for Thursday at 9:30 AM! I've reserved the slot on our calendar and sent a confirmation SMS to your phone.”",
    timeSec: 15,
  },
];

const BARS = [14, 28, 42, 22, 36, 48, 30, 44, 24, 38, 18, 32, 46, 26, 34, 16];

export default function HeroAudioPreview() {
  // Auto-plays and loops continuously by default
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressSec, setProgressSec] = useState(3);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentLine = CALL_LINES[currentIndex] || CALL_LINES[0];
  const isRex = currentLine.speaker === "rex";

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % CALL_LINES.length;
          setProgressSec(CALL_LINES[next].timeSec);
          return next;
        });
      }, 3500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="w-full rounded-2xl border border-ink/10 bg-white p-5 shadow-lg">
      {/* Header: Clean & Minimalist */}
      <div className="flex items-center justify-between border-b border-ink/10 pb-3.5">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-600"></span>
          </span>
          <span className="font-heading text-xs sm:text-sm font-bold text-ink">
            Live Call Sample
          </span>
          <span className="text-xs text-ink/50 font-mono">· Rex in action</span>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 font-mono text-[11px] font-bold text-teal">
          <Sparkles className="size-3" />
          Answers on Ring 1
        </span>
      </div>

      {/* Audio Playhead & Waveform Strip */}
      <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-cream/50 p-3.5 border border-border/60">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause sample call" : "Play sample call"}
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-md transition-transform hover:scale-105 active:scale-95 hover:bg-teal-dark"
          >
            {isPlaying ? (
              <Pause className="size-4 fill-current" />
            ) : (
              <Play className="ml-0.5 size-4 fill-current" />
            )}
          </button>
          <div>
            <p className="font-heading text-xs sm:text-sm font-bold text-ink">
              {isPlaying ? "Playing Live Simulation..." : "Live Call Paused"}
            </p>
            <p className="text-[11px] text-ink/65 font-mono mt-0.5">
              15s automated scheduling flow
            </p>
          </div>
        </div>

        {/* Audio Waveform Equalizer */}
        <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-border/80 shadow-2xs">
          <div className="flex items-end gap-[2.5px] h-5">
            {BARS.map((h, idx) => {
              const barHeight = isPlaying
                ? Math.max(4, (h * (idx % 2 === 0 ? 0.9 : 0.6) * (isRex ? 1.1 : 0.75)))
                : 4;
              return (
                <span
                  key={idx}
                  className={`w-[2.5px] rounded-full transition-all duration-300 ${
                    isPlaying
                      ? isRex
                        ? "bg-teal"
                        : "bg-coral"
                      : "bg-ink/20"
                  }`}
                  style={{ height: `${barHeight}px` }}
                />
              );
            })}
          </div>
          <span className="ml-1 font-mono text-[11px] font-bold text-ink/80 tabular-nums min-w-[34px] text-right">
            0:{progressSec < 10 ? `0${progressSec}` : progressSec}
          </span>
        </div>
      </div>

      {/* Spoken Quote Stream — Clean & Fixed Height for Zero Jitter */}
      <div className="mt-4 flex h-[108px] flex-col justify-between rounded-xl border border-border bg-ink/[0.02] p-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`size-2 rounded-full transition-colors duration-300 ${
                isRex ? "bg-teal" : "bg-coral"
              }`}
            />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
              {currentLine.speakerLabel}
            </span>
          </div>
          <span className="font-mono text-[11px] text-ink/40">
            {currentIndex + 1} of {CALL_LINES.length}
          </span>
        </div>

        <div className="relative my-auto flex h-[48px] items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="text-xs sm:text-sm font-medium leading-relaxed text-ink line-clamp-2"
            >
              {currentLine.text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="mt-3.5 flex items-center justify-between border-t border-ink/10 pt-3 text-[11px]">
        <div className="flex items-center gap-1.5 font-medium text-emerald-800">
          <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600" />
          <span>Locks slot on your calendar &amp; syncs to your CRM</span>
        </div>
        <span className="font-mono text-[10px] text-ink/50 uppercase">
          Simulated Call
        </span>
      </div>
    </div>
  );
}
