"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const PIPELINE_STAGES = [
  {
    id: 0,
    title: "01. Lead Captured",
    shortName: "New Lead",
    badge: "100% Captured",
    badgeBg: "bg-teal/20 text-teal",
    actionTitle: "Web / Call Intake Logged",
    leadName: "David Miller — Main Panel Repair",
    phone: "(555) 234-8901",
    timestamp: "Just now",
    value: "$1,250 Estimated",
    detailLogs: [
      "Rex / Web Chat captured prospect intake payload",
      "Gia mapped contact record to ServiceTitan pipeline",
      "Assigned to Electrical Service Queue",
    ],
  },
  {
    id: 1,
    title: "02. Auto 5-Sec SMS",
    shortName: "Text Back",
    badge: "< 5s Response",
    badgeBg: "bg-coral/20 text-coral-text",
    actionTitle: "Automated SMS Sequence Fired",
    leadName: "David Miller — Main Panel Repair",
    phone: "(555) 234-8901",
    timestamp: "2 seconds ago",
    value: "$1,250 Estimated",
    detailLogs: [
      'Dispatched SMS: "Hi David! Got your quote request. Are you free for a technician visit tomorrow at 10 AM?"',
      "Prospect replied: 'Yes 10 AM works great!'",
      "Gia parsed confirmation intent automatically",
    ],
  },
  {
    id: 2,
    title: "03. Calendar Synced",
    shortName: "Appt Booked",
    badge: "Synced to Calendar",
    badgeBg: "bg-success/20 text-success",
    actionTitle: "Google & CRM Calendar Booked",
    leadName: "David Miller — Main Panel Repair",
    phone: "(555) 234-8901",
    timestamp: "1 minute ago",
    value: "$1,250 Booked",
    detailLogs: [
      "Job locked into ServiceTitan / Google Calendar",
      "Dispatched 24-Hour & 1-Hour SMS reminder sequences",
      "Technician dispatch notification sent to field team",
    ],
  },
  {
    id: 3,
    title: "04. 5-Star Review Sent",
    shortName: "Review Sent",
    badge: "Review Triggered",
    badgeBg: "bg-warning/20 text-amber-500",
    actionTitle: "Job Completed & Review Triggered",
    leadName: "David Miller — Main Panel Repair",
    phone: "(555) 234-8901",
    timestamp: "Post-Job Complete",
    value: "$1,250 Won & Paid",
    detailLogs: [
      "Technician marked job COMPLETE in CRM",
      'Gia sent 1-click Google Review SMS: "Thanks David! Mind leaving a quick 5-star review?"',
      "⭐ 5-Star Google Review collected!",
    ],
  },
];

export default function GiaHeroAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto loop through stages when user isn't overriding manually
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const stage = PIPELINE_STAGES[activeStage];

  const handleStageSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveStage(idx);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveStage((prev) => (prev + 1) % PIPELINE_STAGES.length);
  };

  const handleReset = () => {
    setIsAutoPlaying(true);
    setActiveStage(0);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-[28px] border-4 border-ink/10 bg-ink p-5 sm:p-6 shadow-2xl text-white overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-10 -right-10 size-40 rounded-full bg-success/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-teal/20 blur-2xl pointer-events-none" />

      {/* Top Controller Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex size-11 items-center justify-center rounded-2xl bg-success/20 border border-success/40 p-1 shadow-inner shrink-0">
            <Image
              src="/images/mascots/gia.png"
              alt="Gia Mascot Avatar"
              width={42}
              height={42}
              className="object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-bold text-white text-base">Gia CRM Autopilot</h3>
              <span className="flex size-2 rounded-full bg-success animate-pulse" />
            </div>
            <p className="font-mono text-[11px] text-white/50">Live Pipeline &amp; Follow-up Engine</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleNext}
            title="Advance Stage"
            className="flex items-center gap-1.5 rounded-xl border border-success/40 bg-success/20 px-3 py-1.5 font-mono text-xs font-bold text-success hover:bg-success hover:text-white transition-all cursor-pointer min-h-[36px]"
          >
            <Play className="size-3.5 fill-current" />
            <span className="hidden sm:inline">Next Stage</span>
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

      {/* Pipeline Stage Pills Switcher */}
      <div className="relative z-10 grid grid-cols-4 gap-1.5 mb-4">
        {PIPELINE_STAGES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => handleStageSelect(idx)}
            className={`rounded-xl p-2 text-center transition-all cursor-pointer border ${
              idx === activeStage
                ? "bg-success border-success text-white font-bold shadow-lg scale-[1.02]"
                : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <p className="font-mono text-[10px] uppercase truncate">{s.shortName}</p>
          </button>
        ))}
      </div>

      {/* Active Lead Stage Panel */}
      <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md space-y-3.5">
        {/* Stage Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-success" />
            <span className="font-heading font-bold text-xs text-white uppercase tracking-wider">
              {stage.title}
            </span>
          </div>
          <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold ${stage.badgeBg}`}>
            {stage.badge}
          </span>
        </div>

        {/* Lead Card Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {/* Prospect Snapshot */}
            <div className="rounded-xl border border-white/10 bg-black/40 p-3 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-sm text-white">{stage.leadName}</p>
                <p className="font-mono text-[11px] text-white/50">{stage.phone} • {stage.timestamp}</p>
              </div>
              <span className="font-mono text-xs font-bold text-success bg-success/15 px-2.5 py-1 rounded-lg border border-success/30">
                {stage.value}
              </span>
            </div>

            {/* Gia Automated Action Logs */}
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-wide text-white/40 flex items-center gap-1.5">
                <Sparkles className="size-3 text-success" />
                Gia Autonomous Event Timeline
              </p>

              <div className="space-y-1.5">
                {stage.detailLogs.map((log, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-start gap-2.5 rounded-lg bg-black/30 border border-white/5 px-3 py-2 text-xs font-mono text-white/80"
                  >
                    <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-success" />
                    <span className="leading-relaxed">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Proof Telemetry Footer */}
      <div className="relative z-10 mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white/70">
        <span className="font-mono flex items-center gap-2 text-[11px]">
          <ShieldCheck className="size-4 text-success shrink-0" />
          <span>0 Rotting Leads in Inbox</span>
        </span>
        <span className="font-mono text-[11px] font-bold text-success flex items-center gap-1">
          <span>Autopilot 100%</span>
          <ArrowRight className="size-3" />
        </span>
      </div>
    </div>
  );
}
