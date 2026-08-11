"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Workflow, UserCheck, Play } from "lucide-react";

const STAGES = [
  { id: 1, name: "New Lead (Web)", color: "bg-[#3A6EA5]", lead: "Sample Lead (Service Quote)" },
  { id: 2, name: "Auto SMS Sent", color: "bg-coral", lead: "Sample Lead (Confirmed)" },
  { id: 3, name: "Estimate Scheduled", color: "bg-teal", lead: "Sample Lead (Tomorrow 10 AM)" },
  { id: 4, name: "Review Sent", color: "bg-success", lead: "Sample Lead (Completed)" },
];

export default function GiaHeroAnimation() {
  const [activeStage, setActiveStage] = useState(2);

  const handleNext = () => {
    setActiveStage((prev) => (prev >= 3 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl border border-border bg-white p-6 shadow-lg overflow-hidden">
      {/* Illustration Badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md bg-cream border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/60">
          Example — not live telemetry
        </span>
        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-1.5 rounded-xl border border-success/30 bg-success/10 px-3 py-1 font-mono text-xs font-semibold text-success hover:bg-success hover:text-white transition-colors min-h-[36px]"
        >
          <Play className="size-3" fill="currentColor" /> Advance Stage
        </button>
      </div>

      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex size-10 items-center justify-center rounded-2xl bg-success text-white shadow-sm">
            <Workflow className="size-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-ink text-base">Gia — CRM Autopilot</h3>
            <p className="font-mono text-xs text-ink/50">Managed CRM Pipeline Automation</p>
          </div>
        </div>
      </div>

      {/* Kanban Pipeline Stage Animation */}
      <div className="my-5 rounded-2xl bg-cream border border-border/70 p-4 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-ink/50 border-b border-border/40 pb-2">
          <span>CRM Live Pipeline</span>
          <span className="text-success font-bold">Autopilot: Active</span>
        </div>

        {/* Pipeline Stage Pills */}
        <div className="grid grid-cols-4 gap-1.5">
          {STAGES.map((s, i) => (
            <div
              key={s.id}
              className={`rounded-lg p-1.5 text-center transition-all ${
                i === activeStage
                  ? "bg-ink text-white font-bold shadow-xs scale-[1.03]"
                  : "bg-white/80 text-ink/60 border border-border/50"
              }`}
            >
              <p className="font-mono text-[9px] truncate uppercase">{s.name}</p>
            </div>
          ))}
        </div>

        {/* Active Lead Card Moving Through Pipeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, scale: 0.96, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: 10 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-border bg-white p-4 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-ink text-sm">
                {STAGES[activeStage].lead}
              </span>
              <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] text-white ${STAGES[activeStage].color}`}>
                Stage {activeStage + 1} of 4
              </span>
            </div>

            <div className="space-y-1.5 font-mono text-xs text-ink/70 bg-cream p-3 rounded-lg border border-border/50">
              {activeStage === 0 && <p className="flex items-center gap-1.5">📩 New lead form submitted on website</p>}
              {activeStage === 1 && <p className="flex items-center gap-1.5 text-coral">⚡ Instant SMS &amp; email response dispatched</p>}
              {activeStage === 2 && <p className="flex items-center gap-1.5 text-teal">📅 Appointment synced to Google Calendar</p>}
              {activeStage === 3 && <p className="flex items-center gap-1.5 text-success">⭐ Google Review request sent automatically</p>}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-2.5 text-xs text-ink/70">
        <span className="font-mono flex items-center gap-1.5">
          <UserCheck className="size-4 text-success" />
          No rotting leads in inbox
        </span>
        <span className="font-heading font-bold text-success">Automated Follow-ups</span>
      </div>
    </div>
  );
}
