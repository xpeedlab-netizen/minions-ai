"use client";

import { useState, useEffect } from "react";
import {
  PhoneCall,
  CalendarCheck,
  Sparkles,
  Building2,
  Flame,
} from "lucide-react";

const scriptSteps = [
  {
    role: "caller",
    speaker: "Marcus Vance",
    text: "Hi, I'm calling about 44 Elm Street. I'd like to schedule a private showing.",
    time: "0:02",
  },
  {
    role: "agent",
    speaker: "Alex (AI Inside Sales)",
    text: "I'd love to help with 44 Elm Street! Are you currently under a signed agreement with another agent?",
    time: "0:05",
    badge: "Post-NAR Exclusivity Check",
  },
  {
    role: "caller",
    speaker: "Marcus Vance",
    text: "No, not working with anyone. Pre-approved for $600k with Chase, looking for Friday morning.",
    time: "0:11",
  },
  {
    role: "agent",
    speaker: "Alex (AI Inside Sales)",
    text: "Let me check our showing schedule... We have Friday at 9 AM or 10 AM. Which works best?",
    time: "0:16",
    badge: "87ms Live Calendar Lookup",
  },
  {
    role: "caller",
    speaker: "Marcus Vance",
    text: "Friday at 10 AM works great. My cell is 508-555-9876.",
    time: "0:21",
  },
  {
    role: "agent",
    speaker: "Alex (AI Inside Sales)",
    text: "You're all booked for Friday at 10 AM! I've just texted the showing details and confirmation pass to your cell.",
    time: "0:26",
    badge: "100-Pt Lead Score: 90/100 (Tier 1 Hot)",
  },
];

export default function RealEstateHeroAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % scriptSteps.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-[28px] border-4 border-ink/10 bg-ink p-5 sm:p-7 text-white shadow-2xl overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 size-72 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-72 rounded-full bg-coral/15 blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-success" />
          </span>
          <div>
            <p className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
              <Building2 className="size-4 text-teal" />
              Horizon Realty — Inbound Sign Call
            </p>
            <p className="font-mono text-[11px] text-white/50">Property: 44 Elm Street, Austin, TX ($575k)</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-coral/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-coral-text uppercase">
            <Flame className="size-3 text-coral-text inline" /> Tier 1 Hot
          </span>
        </div>
      </div>

      {/* Call Audio Waveform Bar */}
      <div className="relative z-10 my-4 flex items-center justify-between rounded-xl bg-white/5 px-4 py-2 border border-white/10">
        <div className="flex items-center gap-2">
          <PhoneCall className="size-4 text-teal animate-pulse" />
          <span className="font-mono text-xs text-white/80">Live Call with Alex (AI Voice)</span>
        </div>
        <div className="flex items-center gap-1">
          {[40, 75, 30, 90, 50, 80, 45, 95, 60, 35, 70, 40].map((h, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-teal transition-all duration-300"
              style={{ height: `${(h * (activeStep % 2 === 1 ? 1 : 0.4)) / 4}px` }}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-teal font-bold">{scriptSteps[activeStep].time}</span>
      </div>

      {/* Conversation Dialogue Stream */}
      <div className="relative z-10 space-y-3 min-h-[220px]">
        {scriptSteps.slice(0, activeStep + 1).slice(-3).map((s, idx) => {
          const isAgent = s.role === "agent";
          return (
            <div
              key={`${s.speaker}-${idx}`}
              className={`flex flex-col ${isAgent ? "items-start" : "items-end"} transition-all duration-500`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] font-semibold text-white/50">{s.speaker}</span>
                {s.badge && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-teal/20 px-1.5 py-0.2 font-mono text-[9px] font-bold text-teal-300 border border-teal/40">
                    <Sparkles className="size-2.5" />
                    {s.badge}
                  </span>
                )}
              </div>
              <div
                className={`max-w-[88%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  isAgent
                    ? "bg-white/10 text-white border border-white/15 backdrop-blur-sm"
                    : "bg-teal text-white font-medium shadow-md"
                }`}
              >
                {s.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Pipeline Output Sync Card */}
      <div className="relative z-10 mt-4 rounded-xl border border-success/30 bg-success/10 p-3.5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <CalendarCheck className="size-5 text-success shrink-0" />
          <div>
            <p className="font-bold text-white">Showing Confirmed: Friday @ 10:00 AM</p>
            <p className="text-[10px] text-white/60">Google Cal + EspoCRM Opportunity Linked</p>
          </div>
        </div>
        <span className="rounded-lg bg-success px-2.5 py-1 font-bold text-ink text-[11px] shadow-xs">
          Score 90/100
        </span>
      </div>
    </div>
  );
}
