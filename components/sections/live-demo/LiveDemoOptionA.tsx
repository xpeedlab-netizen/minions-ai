"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, Mic, MicOff, Info, PhoneOff, Radio } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

// Spectrum bar patterns with varying heights and animation timings
const SPECTRUM_BARS = [
  { min: 0.25, max: 0.85, duration: 0.8, delay: 0.0 },
  { min: 0.3, max: 1.0, duration: 1.1, delay: 0.1 },
  { min: 0.2, max: 0.6, duration: 0.7, delay: 0.25 },
  { min: 0.4, max: 0.95, duration: 0.9, delay: 0.05 },
  { min: 0.25, max: 0.7, duration: 1.0, delay: 0.3 },
  { min: 0.35, max: 1.0, duration: 0.85, delay: 0.15 },
  { min: 0.2, max: 0.8, duration: 1.2, delay: 0.2 },
  { min: 0.45, max: 0.9, duration: 0.75, delay: 0.08 },
  { min: 0.3, max: 1.0, duration: 1.0, delay: 0.22 },
  { min: 0.25, max: 0.65, duration: 0.8, delay: 0.18 },
  { min: 0.4, max: 0.95, duration: 1.15, delay: 0.28 },
  { min: 0.2, max: 0.75, duration: 0.9, delay: 0.12 },
  { min: 0.35, max: 0.85, duration: 1.05, delay: 0.02 },
  { min: 0.25, max: 1.0, duration: 0.8, delay: 0.24 },
  { min: 0.3, max: 0.7, duration: 0.95, delay: 0.16 },
  { min: 0.2, max: 0.6, duration: 1.1, delay: 0.04 },
];

export default function LiveDemoOptionA() {
  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-full rounded-2xl border border-border bg-white p-6 sm:p-8 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="relative size-9 overflow-hidden rounded-full border border-border">
          <Image src="/images/rex-mascot.jpg" alt="Rex" fill className="object-cover" />
        </div>
        <span className="rounded-full bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-white">
          Rex recommends
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between">
        <div>

          <h2 className="mt-1 font-heading font-extrabold text-2xl sm:text-3xl text-ink">
            Talk in your browser
          </h2>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
          <Globe className="size-5" />
        </span>
      </div>

      <p className="mt-3 text-ink/60 leading-relaxed">
        The fastest way to experience Minions.AI. We&apos;ll connect your mic directly to Rex&apos;s
        voice interface.
      </p>

      <div className="flex-1" />

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="start-controls"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 mt-6"
          >
            <div className="rounded-xl border border-border bg-cream p-4 flex gap-3">
              <Info className="size-4 shrink-0 mt-0.5 text-teal" />
              <p className="text-sm text-ink/60">
                <strong className="text-ink">Important:</strong> Your browser will ask for microphone
                access. Please click &lsquo;Allow&rsquo; to start the voice conversation.
              </p>
            </div>

            <Button type="button" onClick={() => setStarted(true)} size="lg" className="w-full">
              <Mic className="size-4" />
              Start talking
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="active-session"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-6 flex flex-col gap-4"
          >
            <div className="rounded-xl border border-teal/20 bg-cream/70 p-5 flex flex-col items-center gap-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 rounded-full border border-teal/20 bg-white px-3 py-1 shadow-xs">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-success" />
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-teal">
                    Live Session Active
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-ink/60">
                  <Radio className="size-3.5 text-teal animate-pulse" />
                  <span>Rex Listening</span>
                </div>
              </div>

              <div
                className="w-full h-24 rounded-lg bg-ink/5 border border-border/60 flex items-center justify-center gap-1.5 px-4 overflow-hidden relative"
                aria-label="Active voice audio spectrum animation"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal/5 via-coral/10 to-teal/5 opacity-50" />

                {SPECTRUM_BARS.map((bar, i) => (
                  <motion.span
                    key={i}
                    className={`w-1.5 rounded-full origin-center relative z-10 ${
                      isMuted
                        ? "bg-ink/20"
                        : i % 3 === 0
                        ? "bg-teal"
                        : i % 2 === 0
                        ? "bg-teal"
                        : "bg-teal-dark"
                    }`}
                    style={{ height: "48px" }}
                    animate={
                      reduceMotion || isMuted
                        ? { scaleY: 0.15 }
                        : { scaleY: [bar.min, bar.max, bar.min] }
                    }
                    transition={
                      reduceMotion || isMuted
                        ? { duration: 0.2 }
                        : {
                            duration: bar.duration,
                            repeat: Infinity,
                            delay: bar.delay,
                            ease: "easeInOut",
                          }
                    }
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 w-full pt-1">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className={`flex items-center gap-2 rounded-lg px-3.5 py-2 font-mono text-xs transition-colors border ${
                    isMuted
                      ? "bg-teal-text/10 text-teal border-teal-text/30"
                      : "bg-white text-ink border-border hover:bg-cream"
                  }`}
                >
                  {isMuted ? (
                    <>
                      <MicOff className="size-3.5" /> Muted
                    </>
                  ) : (
                    <>
                      <Mic className="size-3.5 text-teal" /> Mute Mic
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStarted(false);
                    setIsMuted(false);
                  }}
                  className="flex items-center gap-2 rounded-lg bg-teal-text/10 border border-teal-text/20 px-3.5 py-2 font-mono text-xs text-teal hover:bg-teal-text hover:text-white transition-colors"
                >
                  <PhoneOff className="size-3.5" /> End Call
                </button>
              </div>
            </div>

            <p className="rounded-xl bg-cream px-4 py-3 text-sm text-ink/70 font-mono border border-border/50">
              This is a design preview — the live voice demo connects once our AI provider is wired
              up.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

