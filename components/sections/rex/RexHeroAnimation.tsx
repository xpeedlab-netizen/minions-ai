"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle2, Volume2, ShieldAlert } from "lucide-react";

export default function RexHeroAnimation() {
  const [callState, setCallState] = useState<"idle" | "ringing" | "answering" | "booked">("answering");

  const handleSimulate = () => {
    setCallState("ringing");
    setTimeout(() => setCallState("answering"), 1200);
    setTimeout(() => setCallState("booked"), 3500);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl border border-border bg-white p-6 shadow-lg overflow-hidden">
      {/* Illustration Badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md bg-cream border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/60">
          Example — not a live call
        </span>
        <button
          type="button"
          onClick={handleSimulate}
          className="rounded-xl border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-xs font-semibold text-teal hover:bg-teal hover:text-white transition-colors min-h-[36px]"
        >
          Simulate Call
        </button>
      </div>

      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex size-12 items-center justify-center rounded-2xl bg-[#0b484e] border border-teal/30 p-1 shadow-sm overflow-hidden shrink-0">
            <Image
              src="/images/mascots/rex.png"
              alt="Rex Mascot Avatar"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-heading font-bold text-ink text-base">Rex — AI Dispatcher</h3>
            <p className="font-mono text-xs text-ink/50">24/7 Phone Answering &amp; Booking</p>
          </div>
        </div>
      </div>

      {/* Main Call Visual Stage */}
      <div className="my-6 min-h-[220px] flex flex-col justify-center rounded-2xl bg-ink p-5 text-white relative overflow-hidden">
        <div className="absolute -top-12 -right-12 size-40 rounded-full bg-teal/20 blur-2xl" />

        <AnimatePresence mode="wait">
          {callState === "ringing" && (
            <motion.div
              key="ringing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center text-center py-4"
            >
              <div className="relative flex size-16 items-center justify-center rounded-full bg-teal/20 text-teal animate-bounce">
                <Phone className="size-8" />
              </div>
              <p className="mt-3 font-mono text-xs text-teal tracking-wider uppercase font-semibold">
                Incoming Call • 11:42 PM
              </p>
              <p className="mt-1 font-heading font-bold text-lg text-white">
                &ldquo;Burst Pipe! Basement Flooding!&rdquo;
              </p>
            </motion.div>
          )}

          {callState === "answering" && (
            <motion.div
              key="answering"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/30 px-3 py-1 font-mono text-xs text-teal-light border border-teal/40">
                  <span className="size-2 rounded-full bg-teal animate-pulse" />
                  Answered on 1st Ring
                </span>
                <span className="font-mono text-xs text-white/50">11:42 PM</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-teal">
                  <Volume2 className="size-4 animate-pulse" />
                  <span>Rex Speaking Live:</span>
                </div>
                <p className="text-sm leading-relaxed text-white/90 italic">
                  &ldquo;Thanks for calling. Don&apos;t worry — I can take your info and get emergency service scheduled for you right away.&rdquo;
                </p>
              </div>
            </motion.div>
          )}

          {callState === "booked" && (
            <motion.div
              key="booked"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4 text-center py-2"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-success/20 text-success mx-auto">
                <CheckCircle2 className="size-7" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-xl text-white">
                  Emergency Job Scheduled!
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Details Captured &bull; Calendar Synced &bull; Confirmation Sent
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex items-center justify-center gap-1.5 h-6">
          {[0.6, 1, 0.4, 0.8, 0.3, 0.9, 0.5, 0.7, 0.4].map((h, i) => (
            <motion.span
              key={i}
              className="w-1 rounded-full bg-teal"
              animate={{
                height: callState === "answering" ? [`${h * 20}px`, `${h * 6}px`, `${h * 20}px`] : "4px",
              }}
              transition={{
                duration: 0.6 + i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-border bg-cream px-4 py-3 text-xs text-ink/70">
        <span className="flex items-center gap-2 font-mono">
          <ShieldAlert className="size-4 text-teal" />
          No missed calls while you sleep
        </span>
        <span className="font-heading font-bold text-teal">24/7 Coverage</span>
      </div>
    </div>
  );
}
