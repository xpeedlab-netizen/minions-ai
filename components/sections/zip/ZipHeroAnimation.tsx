"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, CheckCheck, Clock } from "lucide-react";

export default function ZipHeroAnimation() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(3);

  const handleSimulate = () => {
    setStep(0);
    setTimeout(() => setStep(1), 1000);
    setTimeout(() => setStep(2), 2400);
    setTimeout(() => setStep(3), 3800);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl border border-border bg-white p-6 shadow-lg overflow-hidden">
      {/* Illustration Label */}
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md bg-cream border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/60">
          Example — not a live call
        </span>
        <button
          type="button"
          onClick={handleSimulate}
          className="rounded-xl border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-xs font-semibold text-teal hover:bg-teal hover:text-white transition-colors min-h-[36px]"
        >
          Simulate Missed Call
        </button>
      </div>

      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex size-12 items-center justify-center rounded-2xl bg-[#C4472A]/10 border border-[#C4472A]/30 p-1 shadow-sm overflow-hidden shrink-0">
            <Image
              src="/images/mascots/zip.png"
              alt="Zip Mascot Avatar"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-heading font-bold text-ink text-base">Zip — Speed-to-Lead</h3>
            <p className="font-mono text-xs text-ink/50">Automatic Missed-Call Text-Back</p>
          </div>
        </div>
      </div>

      {/* Messaging Simulation Interface */}
      <div className="my-6 min-h-[250px] rounded-2xl bg-cream border border-border/70 p-4 space-y-3 flex flex-col justify-between">
        {/* Timeline Header */}
        <div className="flex items-center justify-between text-xs font-mono text-ink/50 border-b border-border/40 pb-2">
          <span className="flex items-center gap-1">
            <Clock className="size-3.5 text-teal" /> 2:05:00 PM • Missed Call
          </span>
          <span className="font-bold text-teal">Instant Text-Back</span>
        </div>

        {/* Dynamic Chat Messages */}
        <div className="space-y-3 flex-1 flex flex-col justify-end">
          {/* Notification: Missed Call */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-teal/10 border border-teal/20 px-3.5 py-2 text-xs text-teal flex items-center justify-between"
          >
            <span>🚨 You missed a call while on the ladder</span>
            <span className="font-mono text-[10px]">2:05:00 PM</span>
          </motion.div>

          {/* Zip Auto SMS (Outgoing) */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-auto max-w-[88%] rounded-2xl rounded-tr-xs bg-teal px-4 py-2.5 text-xs text-white shadow-xs"
              >
                <div className="flex items-center justify-between text-[10px] text-white/70 mb-1 font-mono">
                  <span>Zip Auto-SMS</span>
                  <span>2:05:01 PM</span>
                </div>
                <p className="leading-relaxed">
                  &ldquo;Hey! Saw we missed your call — I&apos;m finishing up a job site. What project can we help you quote today?&rdquo;
                </p>
                <div className="mt-1 text-right text-[10px] text-white/80">
                  <CheckCheck className="size-3.5 inline" /> Delivered
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Customer Incoming SMS */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mr-auto max-w-[85%] rounded-2xl rounded-tl-xs bg-white border border-border px-4 py-2.5 text-xs text-ink shadow-xs"
              >
                <div className="flex items-center justify-between text-[10px] text-ink/40 mb-1 font-mono">
                  <span>Customer</span>
                  <span>2:05:14 PM</span>
                </div>
                <p className="leading-relaxed">
                  &ldquo;Hi! Looking for an estimate. Can someone come by today?&rdquo;
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Zip Final Booking Reply */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-auto max-w-[88%] rounded-2xl rounded-tr-xs bg-teal px-4 py-2.5 text-xs text-white shadow-xs"
              >
                <p className="leading-relaxed">
                  &ldquo;You&apos;re all set! I locked in 4:00 PM today for your consultation. See you soon!&rdquo;
                </p>
                <div className="mt-1 text-right font-mono text-[10px] text-teal font-bold">
                  ✓ Appointment Scheduled
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Conversion Metric */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-xs text-ink/70">
        <span className="flex items-center gap-2 font-mono">
          <MessageSquare className="size-4 text-teal" />
          100× more likely to reach lead in 5m (MIT Study)
        </span>
        <span className="font-heading font-bold text-teal">Instant Text-Back</span>
      </div>
    </div>
  );
}
