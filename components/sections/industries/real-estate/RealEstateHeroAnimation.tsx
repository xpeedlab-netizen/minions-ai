"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const scriptSteps = [
  {
    role: "caller",
    text: "Hi, I'm calling about 44 Elm Street. I'd like to schedule a private showing.",
  },
  {
    role: "agent",
    text: "I'd love to help! Are you currently under a signed agreement with another agent?",
    badge: "Exclusivity Check",
  },
  {
    role: "caller",
    text: "No, not working with anyone. Pre-approved for $600k, looking for Friday morning.",
  },
  {
    role: "agent",
    text: "Great. I have Friday at 9 AM or 10 AM available. Which works best?",
    badge: "Live Calendar Sync",
  },
  {
    role: "caller",
    text: "10 AM works great. My cell is 508-555-9876.",
  },
  {
    role: "agent",
    text: "You're all set for 10 AM! I just texted you the showing pass and details.",
  },
];

export default function RealEstateHeroAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (scriptSteps.length + 2));
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch on initial render

  const visibleSteps = scriptSteps.slice(0, Math.min(activeStep + 1, scriptSteps.length));
  const showConfirmation = activeStep >= scriptSteps.length - 1;
  const displaySteps = visibleSteps.slice(-3);

  return (
    <div className="relative w-full rounded-[24px] border border-white/10 bg-[#0F172A]/90 backdrop-blur-2xl p-4 sm:p-6 text-white shadow-2xl overflow-hidden ring-1 ring-white/5">
      <div className="absolute -top-24 -right-24 size-64 rounded-full bg-teal/20 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-teal/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-teal/20 text-teal-300">
            <Phone className="size-4 animate-pulse" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white">44 Elm Street Inquiry</p>
            <p className="text-xs text-white/50">Marcus Vance • Live AI Voice Call</p>
          </div>
        </div>
        <div className="flex items-center gap-1 opacity-70">
          {[40, 75, 30, 90, 50, 80].map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-teal transition-all duration-300"
              style={{ height: `${(h * (activeStep % 2 === 1 ? 1 : 0.4)) / 4}px` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-[260px] flex flex-col justify-end gap-4 pb-2">
        <AnimatePresence initial={false}>
          {displaySteps.map((s, idx) => {
            const isAgent = s.role === "agent";
            return (
              <motion.div
                key={s.text}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`flex flex-col ${isAgent ? "items-start pr-8 sm:pr-12" : "items-end pl-8 sm:pl-12"}`}
              >
                {isAgent && s.badge && (
                  <div className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold text-teal-300 uppercase tracking-wider">
                    <Sparkles className="size-3" />
                    {s.badge}
                  </div>
                )}
                <div
                  className={`relative px-4 py-3 text-sm leading-relaxed break-words ${
                    isAgent
                      ? "bg-white/10 text-white/95 rounded-2xl rounded-tl-sm border border-white/5 shadow-sm"
                      : "bg-teal text-white rounded-2xl rounded-tr-sm shadow-md"
                  }`}
                >
                  {s.text}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="relative z-10 mt-4 rounded-xl border border-success/20 bg-success/10 p-3.5 flex items-center justify-between shadow-lg backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-success/20 text-success">
                <CheckCircle2 className="size-4" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Showing Confirmed</p>
                <p className="text-[11px] text-white/60">Friday @ 10:00 AM • Tagged Tier 1 Hot</p>
              </div>
            </div>
            <span className="rounded-lg bg-success/20 border border-success/30 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-success shadow-sm">
              Synced
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
