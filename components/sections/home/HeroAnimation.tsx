"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PhoneCall } from "lucide-react";

/**
 * Hero call widget.
 *
 * Replaces the old pulsing-phone-icon animation — a shape shared by nearly every
 * "AI voice agent" landing page — with the actual product moment: a call card that
 * shows who's talking, a live transcript playing out, and a running clock. This is
 * the site's answer to Stripe's code block / Linear's app preview: the thing in the
 * hero should look like the product, not like a generic icon animation.
 *
 * Not a real phone call — no telephony is wired to this component — so the footer
 * says so explicitly, matching the disclaimer already used on RexHeroVisual's
 * transcript card further down the page.
 */

type Line = { from: "caller" | "rex"; text: string };

const SCRIPT: Line[] = [
  { from: "caller", text: "Hi, I've got a burst pipe under my kitchen sink." },
  { from: "rex", text: "I can get someone out today. What's the address?" },
  { from: "caller", text: "412 Oak Street. How fast can you get here?" },
  { from: "rex", text: "Booked for 2:30 PM — you're all set." },
];

const LINE_INTERVAL_MS = 2200;
const bars = [6, 14, 20, 12, 7, 16, 9];

export default function HeroAnimation() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(1);
  const [seconds, setSeconds] = useState(14);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(SCRIPT.length);
      return;
    }
    const id = setInterval(() => {
      setVisible((v) => (v >= SCRIPT.length ? 1 : v + 1));
    }, LINE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const speaking = SCRIPT[Math.min(visible, SCRIPT.length) - 1]?.from ?? "rex";

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-teal/10 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-xl">
        {/* Header: identity + live clock */}
        <div className="flex items-center justify-between border-b border-border bg-cream px-5 py-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="size-4 text-teal" aria-hidden />
            <span className="font-mono text-xs font-bold uppercase tracking-wide text-ink">
              Rex &mdash; Answering Sequence
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span
                aria-hidden
                className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-75"
              />
              <span className="relative inline-flex size-2 rounded-full bg-teal" />
            </span>
            <span className="font-mono text-[11px] font-bold tabular-nums text-teal">
              {mm}:{ss}
            </span>
          </div>
        </div>

        {/* Waveform: reacts to who's currently "speaking" */}
        <div className="flex items-center justify-center gap-6 border-b border-border bg-cream/60 px-5 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-6 items-end gap-1">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className="w-1 origin-bottom rounded-full bg-ink/30"
                  style={{ height: h }}
                  animate={
                    reduceMotion
                      ? undefined
                      : { scaleY: speaking === "caller" ? [0.4, 1, 0.4] : 0.3 }
                  }
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wide text-ink/40">
              Caller
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-6 items-end gap-1">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className="w-1 origin-bottom rounded-full bg-teal"
                  style={{ height: h }}
                  animate={
                    reduceMotion
                      ? undefined
                      : { scaleY: speaking === "rex" ? [0.4, 1, 0.4] : 0.3 }
                  }
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wide text-teal">Rex</span>
          </div>
        </div>

        {/* Transcript */}
        <div className="flex min-h-[228px] flex-col justify-end gap-2.5 px-5 py-5">
          <AnimatePresence initial={false}>
            {SCRIPT.slice(0, visible).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${line.from === "rex" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
                    line.from === "rex"
                      ? "rounded-tr-sm bg-teal/10 text-ink"
                      : "rounded-tl-sm border border-border bg-cream text-ink/80"
                  }`}
                >
                  {line.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="border-t border-border px-5 py-3">
          <span className="font-mono text-[10px] uppercase tracking-wide text-ink/40">
            Example call &mdash; not live audio
          </span>
        </div>
      </div>
    </div>
  );
}
