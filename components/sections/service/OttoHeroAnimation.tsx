"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CheckCircle2, RefreshCw, FolderCheck, Sparkles } from "lucide-react";

export default function OttoHeroAnimation() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [complete, setComplete] = useState(true);

  const handleRunScanner = () => {
    setIsProcessing(true);
    setComplete(false);
    setTimeout(() => {
      setIsProcessing(false);
      setComplete(true);
    }, 2200);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl border border-border bg-white p-6 shadow-lg overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex size-10 items-center justify-center rounded-2xl bg-[#2C3E50] text-white shadow-sm">
            <FileText className="size-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-ink text-base">Otto — Back-Office AI</h3>
            <p className="font-mono text-xs text-ink/50">Paperwork &amp; Document Automation</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleRunScanner}
          disabled={isProcessing}
          className="flex items-center gap-1.5 rounded-xl border border-teal/30 bg-teal/10 px-3 py-1.5 font-mono text-xs font-semibold text-teal hover:bg-teal hover:text-white transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`size-3 ${isProcessing ? "animate-spin" : ""}`} /> Scan Intake Form
        </button>
      </div>

      {/* Document Scanner Visual Stage */}
      <div className="my-5 rounded-2xl bg-cream border border-border/70 p-5 space-y-4 relative overflow-hidden">
        {/* Animated Scanner Laser Bar */}
        {isProcessing && (
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [0, 160, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal to-transparent shadow-[0_0_12px_#0e5c63] z-20"
          />
        )}

        <div className="flex items-center justify-between text-xs font-mono text-ink/50 border-b border-border/40 pb-2">
          <span>Client Intake &bull; Order #8402</span>
          <span className="text-teal font-bold flex items-center gap-1">
            <FolderCheck className="size-3.5" /> Auto-Filed to CRM
          </span>
        </div>

        {/* Form Extraction Fields */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between rounded-xl bg-white border border-border p-3 text-xs">
            <span className="font-mono text-ink/50">Client Name:</span>
            <span className="font-heading font-bold text-ink">Commercial Contracting LLC</span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-white border border-border p-3 text-xs">
            <span className="font-mono text-ink/50">Extracted W-2 &amp; Insurance:</span>
            <span className="font-mono text-success font-semibold flex items-center gap-1">
              <CheckCircle2 className="size-3.5" /> Fully Verified
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-white border border-border p-3 text-xs">
            <span className="font-mono text-ink/50">Auto-Chaser Status:</span>
            <span className="font-mono text-teal font-semibold">No Reminders Needed (Sent Auto)</span>
          </div>
        </div>

        {/* Status Result Callout */}
        <AnimatePresence mode="wait">
          {complete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-teal/10 border border-teal/20 p-3.5 text-xs text-teal flex items-center gap-2"
            >
              <Sparkles className="size-4 shrink-0 text-teal" />
              <span>Quietly processed, verified, and routed to accounting folder.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Proof Strip */}
      <div className="flex items-center justify-center rounded-xl border border-border bg-white px-4 py-2.5 text-xs text-ink/70">
        <span className="font-mono">Zero manual data entry required</span>
      </div>
    </div>
  );
}
