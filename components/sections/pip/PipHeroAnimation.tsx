"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, ShieldCheck, Sparkles } from "lucide-react";

const SAMPLE_QUESTIONS = [
  { q: "Do you service 77002 zip code?", a: "Yes! 77002 is in our primary service area. Standard estimate visits are 100% free with $0 upfront." },
  { q: "What are your emergency rates?", a: "After-hours emergency dispatch is flat $149 + standard labor rate. No hidden surprise fees!" },
  { q: "Can I book a tech for tomorrow?", a: "Yes! We have 2 open slots tomorrow: 9:00 AM and 2:30 PM. Which time works best for you?" },
];

export default function PipHeroAnimation() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl border border-border bg-white p-6 shadow-lg overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex size-10 items-center justify-center rounded-2xl bg-[#3A6EA5] text-white shadow-sm">
            <Bot className="size-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-ink text-base">Pip — Support AI</h3>
            <p className="font-mono text-xs text-ink/50">24/7 Web Chat &amp; Email Support</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-success bg-success/10 border border-success/20 px-3 py-1.5 rounded-xl">
          <span className="size-2 rounded-full bg-success animate-pulse" /> Online
        </span>
      </div>

      {/* Interactive Chat Window */}
      <div className="my-5 rounded-2xl bg-cream border border-border/70 p-4 space-y-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-ink/50 border-b border-border/40 pb-2">
          <span>Midnight Support Chat • 12:15 AM</span>
          <span className="text-teal font-bold flex items-center gap-1">
            <ShieldCheck className="size-3.5" /> No-Guess Policy Active
          </span>
        </div>

        {/* Chat Messages Stream */}
        <div className="space-y-3 min-h-[160px] flex flex-col justify-end">
          {/* User Question */}
          <motion.div
            key={`q-${activeIdx}`}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mr-auto max-w-[85%] rounded-2xl rounded-tl-xs bg-white border border-border px-4 py-2.5 text-xs text-ink shadow-xs"
          >
            <p className="font-mono text-[10px] text-ink/40 mb-0.5">Website Visitor</p>
            <p className="leading-relaxed">&ldquo;{SAMPLE_QUESTIONS[activeIdx].q}&rdquo;</p>
          </motion.div>

          {/* Pip Answer */}
          <motion.div
            key={`a-${activeIdx}`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="ml-auto max-w-[88%] rounded-2xl rounded-tr-xs bg-[#3A6EA5] px-4 py-2.5 text-xs text-white shadow-xs"
          >
            <div className="flex items-center justify-between text-[10px] text-white/70 mb-0.5 font-mono">
              <span className="flex items-center gap-1"><Sparkles className="size-3" /> Pip Verified Answer</span>
              <span>12:15 AM</span>
            </div>
            <p className="leading-relaxed">&ldquo;{SAMPLE_QUESTIONS[activeIdx].a}&rdquo;</p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Sample Prompt Buttons */}
      <div className="space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink/50">Try Asking Pip:</p>
        <div className="flex flex-wrap gap-2">
          {SAMPLE_QUESTIONS.map((item, idx) => (
            <button
              key={item.q}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`rounded-xl px-3 py-1.5 text-xs transition-all font-medium border ${
                activeIdx === idx
                  ? "bg-[#3A6EA5] text-white border-[#3A6EA5] shadow-xs"
                  : "bg-white text-ink/70 border-border hover:bg-cream"
              }`}
            >
              {item.q}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Proof Bar */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-cream px-4 py-2.5 text-xs text-ink/70">
        <span className="font-mono">Zero repetitive emails in your inbox</span>
        <span className="font-heading font-bold text-[#3A6EA5]">95%+ Resolution Rate</span>
      </div>
    </div>
  );
}
