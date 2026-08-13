"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  RefreshCw,
  FolderCheck,
  Sparkles,
  ShieldCheck,
  ScanText,
  Play,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

const WORKFLOW_STAGES = [
  {
    id: 0,
    title: "01. Intake Form Received",
    shortName: "Intake",
    badge: "Form Captured",
    badgeBg: "bg-accent-blue/20 text-accent-blue",
    docTitle: "Commercial Contractor Intake #8402",
    client: "Apex Electrical Solutions",
    timestamp: "Just now",
    status: "Parsed from Web Form",
    detailLogs: [
      "Client intake form payload received automatically",
      "Otto created verified client folder structure",
      "Identified required attachments: W-9 & COI Insurance",
    ],
  },
  {
    id: 1,
    title: "02. AI Data Extraction",
    shortName: "OCR Extract",
    badge: "100% Extracted",
    badgeBg: "bg-teal/20 text-teal",
    docTitle: "Commercial Contractor Intake #8402",
    client: "Apex Electrical Solutions",
    timestamp: "3 seconds ago",
    status: "OCR Processing Complete",
    detailLogs: [
      "Extracted Tax ID & Entity Name from uploaded W-9 PDF",
      "Parsed Policy Expiration Date from COI Document",
      "Zero manual data entry required by administrative staff",
    ],
  },
  {
    id: 2,
    title: "03. Auto Doc Chaser",
    shortName: "Doc Chaser",
    badge: "Chaser Active",
    badgeBg: "bg-coral/20 text-coral-text",
    docTitle: "Commercial Contractor Intake #8402",
    client: "Apex Electrical Solutions",
    timestamp: "Auto-Reminder Fired",
    status: "Polite SMS & Email Sent",
    detailLogs: [
      "Missing Document Detected: State Contractor License",
      'Otto dispatched polite SMS: "Hi Mark! Mind uploading your license copy to finish intake?"',
      "Client uploaded license link in 1-click",
    ],
  },
  {
    id: 3,
    title: "04. Auto-Filed to CRM & Drive",
    shortName: "Auto-Filed",
    badge: "Filed & Synced",
    badgeBg: "bg-success/20 text-success",
    docTitle: "Commercial Contractor Intake #8402",
    client: "Apex Electrical Solutions",
    timestamp: "Complete",
    status: "Synced to ServiceTitan & Google Drive",
    detailLogs: [
      "Document routed to Google Drive / Client Folder",
      "Pushed extracted metadata into ServiceTitan / CRM",
      "Intake marked 100% COMPLETE — Zero human paperwork!",
    ],
  },
];

export default function OttoHeroAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % WORKFLOW_STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const stage = WORKFLOW_STAGES[activeStage];

  const handleStageSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setIsScanning(true);
    setActiveStage(idx);
    setTimeout(() => setIsScanning(false), 800);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setIsScanning(true);
    setActiveStage((prev) => (prev + 1) % WORKFLOW_STAGES.length);
    setTimeout(() => setIsScanning(false), 800);
  };

  const handleReset = () => {
    setIsAutoPlaying(true);
    setActiveStage(0);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-[28px] border-4 border-ink/10 bg-ink p-5 sm:p-6 shadow-2xl text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-10 -right-10 size-40 rounded-full bg-accent-blue/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-teal/20 blur-2xl pointer-events-none" />

      {/* Laser Scanner Beam Overlay */}
      {isScanning && (
        <motion.div
          initial={{ y: 0, opacity: 0.8 }}
          animate={{ y: 220, opacity: [0.8, 1, 0] }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal to-transparent shadow-[0_0_15px_#0e5c63] z-30 pointer-events-none"
        />
      )}

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex size-11 items-center justify-center rounded-2xl bg-[#2C3E50]/40 border border-white/20 p-1 shadow-inner shrink-0">
            <Image
              src="/images/mascots/otto.png"
              alt="Otto Mascot Avatar"
              width={42}
              height={42}
              className="object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-extrabold text-white text-base">Otto Back-Office AI</h3>
              <span className="flex size-2 rounded-full bg-teal animate-pulse" />
            </div>
            <p className="font-mono text-[11px] text-white/50">Paperwork &amp; Document Engine</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleNext}
            title="Advance Workflow Stage"
            className="flex items-center gap-1.5 rounded-xl border border-teal/40 bg-teal/20 px-3 py-1.5 font-mono text-xs font-bold text-teal-300 hover:bg-teal hover:text-white transition-all cursor-pointer min-h-[36px]"
          >
            <Play className="size-3.5 fill-current" />
            <span className="hidden sm:inline">Scan Next</span>
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
        {WORKFLOW_STAGES.map((s, idx) => (
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

      {/* Active Document Panel */}
      <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md space-y-3.5">
        {/* Stage Title Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <ScanText className="size-4 text-teal" />
            <span className="font-heading font-bold text-xs text-white uppercase tracking-wider">
              {stage.title}
            </span>
          </div>
          <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold ${stage.badgeBg}`}>
            {stage.badge}
          </span>
        </div>

        {/* Document Details Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {/* Intake File Info Card */}
            <div className="rounded-xl border border-white/10 bg-black/40 p-3 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-sm text-white">{stage.docTitle}</p>
                <p className="font-mono text-[11px] text-white/50">{stage.client} • {stage.timestamp}</p>
              </div>
              <span className="font-mono text-[10px] font-bold text-teal bg-teal/15 px-2.5 py-1 rounded-lg border border-teal/30">
                {stage.status}
              </span>
            </div>

            {/* Event Timeline Logs */}
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-wide text-white/40 flex items-center gap-1.5">
                <Sparkles className="size-3 text-teal" />
                Otto Autonomous Workflow Executions
              </p>

              <div className="space-y-1.5">
                {stage.detailLogs.map((log, lIdx) => (
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
          <span>0 Paperwork Backlog</span>
        </span>
        <span className="font-mono text-[11px] font-bold text-teal flex items-center gap-1">
          <span>Auto-Filed 100%</span>
          <ArrowRight className="size-3" />
        </span>
      </div>
    </div>
  );
}
