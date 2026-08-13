"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Play,
  RotateCcw,
  ArrowRight,
  Bug,
  ShieldAlert,
  Flame,
} from "lucide-react";

const PEST_SCENARIOS = [
  {
    id: 0,
    title: "01. 10:45 PM Pest Panic Call",
    shortName: "10:45 PM Call",
    badge: "First Ring Answer",
    badgeBg: "bg-coral/20 text-coral-text",
    caller: "Amanda Hayes — 10:45 PM Call",
    location: "Oakridge Estates • Nursery Area",
    issue: "Yellowjacket Nest Swarming • Active Danger",
    ticketEst: "$2,500 3-Year Contract LTV Potential",
    logs: [
      "Rex answered call on 1st ring in company name",
      "Triaged emergency: Wasp nest near children's bedroom",
      "Quoted $149 initial spray & confirmed family/pet safety rules",
    ],
  },
  {
    id: 1,
    title: "02. Quarterly Plan Upsell",
    shortName: "Plan Converted",
    badge: "Recurring Upsell",
    badgeBg: "bg-teal/20 text-teal",
    caller: "Amanda Hayes — 10:45 PM Call",
    location: "Oakridge Estates • Verified Zip 90210",
    issue: "Converted: $149 Initial + $59/mo Quarterly",
    ticketEst: "$2,500 Subscription LTV Locked",
    logs: [
      'Rex: "We can include annual termite monitoring for just $59/mo!"',
      "Caller accepted Quarterly General Pest Protection Plan",
      "Rex verified route zip code for maximum technician density",
    ],
  },
  {
    id: 2,
    title: "03. FieldRoutes / PestPac Booked",
    shortName: "CRM Synced",
    badge: "Route Slot Booked",
    badgeBg: "bg-success/20 text-success",
    caller: "Amanda Hayes — 10:45 PM Call",
    location: "Oakridge Estates • Route Tech Sam",
    issue: "Booked: Tomorrow 8:30 AM Inspection",
    ticketEst: "$2,500 LTV Contract Synced",
    logs: [
      "Initial inspection locked into FieldRoutes / PestPac calendar",
      "Dispatched confirmation text with Tech arrival tracking link",
      "Assigned lead to Route Tech Sam for 8:30 AM priority slot",
    ],
  },
  {
    id: 3,
    title: "04. 5-Star Google Review",
    shortName: "5★ Review",
    badge: "Review Collected",
    badgeBg: "bg-amber-500/20 text-amber-500",
    caller: "Amanda Hayes — Initial Service Done",
    location: "Oakridge Estates • Nest Eradicated",
    issue: "Subscription Autopay Activated",
    ticketEst: "$2,500 LTV Customer Won",
    logs: [
      "Tech Sam eliminated nest & installed perimeter barrier",
      'Gia sent 1-click Google Review SMS: "Thanks Amanda!"',
      "⭐ 5-Star Google Review posted on local GMB profile",
    ],
  },
];

export default function PestHeroAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % PEST_SCENARIOS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scenario = PEST_SCENARIOS[activeStage];

  const handleStageSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveStage(idx);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveStage((prev) => (prev + 1) % PEST_SCENARIOS.length);
  };

  const handleReset = () => {
    setIsAutoPlaying(true);
    setActiveStage(0);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-[28px] border-4 border-ink/10 bg-ink p-5 sm:p-6 shadow-2xl text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-10 -right-10 size-40 rounded-full bg-teal/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-coral/20 blur-2xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex size-11 items-center justify-center rounded-2xl bg-teal/20 border border-teal/40 p-1 shadow-inner shrink-0 overflow-hidden">
            <Image
              src="/images/mascots/rex.png"
              alt="Rex Mascot Avatar"
              width={42}
              height={42}
              className="object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-extrabold text-white text-base">Rex — Pest Control Dispatcher</h3>
              <span className="flex size-2 rounded-full bg-success animate-pulse" />
            </div>
            <p className="font-mono text-[11px] text-white/50">FieldRoutes / PestPac / GorillaDesk Live Sync</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleNext}
            title="Simulate Next Scenario"
            className="flex items-center gap-1.5 rounded-xl border border-teal/40 bg-teal/20 px-3 py-1.5 font-mono text-xs font-bold text-teal-300 hover:bg-teal hover:text-white transition-all cursor-pointer min-h-[36px]"
          >
            <Play className="size-3.5 fill-current" />
            <span className="hidden sm:inline">Simulate Call</span>
          </button>
          {!isAutoPlaying && (
            <button
              type="button"
              onClick={handleReset}
              title="Resume Autoplay"
              className="flex size-9 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              <RotateCcw className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Stage Pills Switcher */}
      <div className="relative z-10 grid grid-cols-4 gap-1.5 mb-4">
        {PEST_SCENARIOS.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => handleStageSelect(idx)}
            className={`rounded-xl p-2 text-center transition-all cursor-pointer border ${
              idx === activeStage
                ? "bg-teal border-teal text-white font-bold shadow-lg scale-[1.02]"
                : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <p className="font-mono text-[10px] uppercase truncate">{s.shortName}</p>
          </button>
        ))}
      </div>

      {/* Active Call Panel */}
      <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md space-y-3.5">
        {/* Scenario Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            {activeStage === 0 ? (
              <Bug className="size-4 text-coral-text" />
            ) : activeStage === 3 ? (
              <CheckCircle2 className="size-4 text-amber-500" />
            ) : (
              <ShieldAlert className="size-4 text-teal" />
            )}
            <span className="font-heading font-bold text-xs text-white uppercase tracking-wider">
              {scenario.title}
            </span>
          </div>
          <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold ${scenario.badgeBg}`}>
            {scenario.badge}
          </span>
        </div>

        {/* Call Info Snapshot */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {/* Prospect Snapshot */}
            <div className="rounded-xl border border-white/10 bg-black/40 p-3 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-sm text-white">{scenario.caller}</p>
                <p className="font-mono text-[11px] text-white/50">{scenario.location} • {scenario.issue}</p>
              </div>
              <span className="font-mono text-[10px] font-bold text-success bg-success/15 px-2.5 py-1 rounded-lg border border-success/30">
                {scenario.ticketEst}
              </span>
            </div>

            {/* Event Timeline Logs */}
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-wide text-white/40 flex items-center gap-1.5">
                <Sparkles className="size-3 text-teal" />
                Rex Pest Dispatch Log Execution
              </p>

              <div className="space-y-1.5">
                {scenario.logs.map((log, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-start gap-2.5 rounded-lg bg-black/30 border border-white/5 px-3 py-2 text-xs font-mono text-white/80"
                  >
                    <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-teal" />
                    <span className="leading-relaxed">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Proof Bar */}
      <div className="relative z-10 mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white/70">
        <span className="font-mono flex items-center gap-2 text-[11px]">
          <ShieldCheck className="size-4 text-teal shrink-0" />
          <span>0 Missed Swarm-Season Calls</span>
        </span>
        <span className="font-mono text-[11px] font-bold text-teal flex items-center gap-1">
          <span>FieldRoutes / PestPac Synced</span>
          <ArrowRight className="size-3" />
        </span>
      </div>
    </div>
  );
}
