"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall, Volume2, CalendarCheck, Sparkles } from "lucide-react";

export default function RexAnimatedVisual() {
  const [isAnswering, setIsAnswering] = useState(false);

  // Auto-cycle state between Idle and Answering every 4.5 seconds for ambient live feel
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnswering((prev) => !prev);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0b484e] p-6 sm:p-10 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[440px] w-full overflow-hidden select-none">
      {/* Ambient background glow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-teal/20 blur-3xl animate-pulse" />
        {isAnswering && (
          <div className="absolute w-96 h-96 rounded-full border border-teal/30 animate-ping opacity-40" />
        )}
      </div>

      {/* Main Stage Grid */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* 3D Mascot Character Stage */}
        <div 
          onClick={() => setIsAnswering(!isAnswering)}
          className="relative w-56 h-56 sm:w-64 sm:h-64 cursor-pointer group transition-transform duration-300 hover:scale-105"
        >
          {/* Status Badge attached to mascot stage */}
          <div className="absolute top-2 right-2 z-20 bg-ink/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full border border-teal/40 flex items-center gap-1.5 shadow-lg">
            <span className={`w-2 h-2 rounded-full ${isAnswering ? "bg-teal animate-ping" : "bg-cream/40"}`} />
            <span>{isAnswering ? "Rex Answering Call..." : "Rex Idle (Click to test)"}</span>
          </div>

          {/* Idle 3D Render */}
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isAnswering ? "opacity-0" : "opacity-100"}`}>
            <Image
              src="/images/rex-3d-mascot-idle.jpg"
              alt="Rex AI Voice Agent 3D Mascot - Idle Pose"
              fill
              priority
              sizes="(max-width: 640px) 224px, 256px"
              className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] rounded-2xl"
            />
          </div>

          {/* Active Call-Answering 3D Render */}
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isAnswering ? "opacity-100" : "opacity-0"}`}>
            <Image
              src="/images/rex-3d-mascot-active.jpg"
              alt="Rex AI Voice Agent 3D Mascot - Active Call Answering Pose"
              fill
              sizes="(max-width: 640px) 224px, 256px"
              className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] rounded-2xl"
            />
          </div>
        </div>

        {/* Floating Call Activity Overlay */}
        <div className="mt-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl w-full border border-border transition-all duration-300">
          <div className="flex items-center justify-between border-b border-border pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <PhoneCall className={`w-4 h-4 ${isAnswering ? "text-teal animate-bounce" : "text-ink/40"}`} />
              <span className="font-bold text-xs text-ink tracking-wide">
                {isAnswering ? "Live Answering Sequence" : "24/7 Answering Standby"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Volume2 className={`w-3.5 h-3.5 ${isAnswering ? "text-teal animate-pulse" : "text-ink/30"}`} />
              <span className="text-[10px] font-mono text-teal font-bold uppercase">
                {isAnswering ? "0:04 — Call Active" : "First Ring Ready"}
              </span>
            </div>
          </div>

          {/* Dialogue exchange */}
          <div className="space-y-2 text-xs">
            <div className="bg-cream p-2.5 rounded-xl rounded-tl-sm text-ink/80 border border-border/60 flex items-start gap-2">
              <span className="font-bold text-ink/50 text-[10px] shrink-0">CALLER:</span>
              <span>&ldquo;Hi, I need an emergency roof repair quote for tomorrow.&rdquo;</span>
            </div>
            {isAnswering && (
              <div className="bg-teal/10 p-2.5 rounded-xl rounded-tr-sm text-ink/90 border border-teal/20 flex items-start gap-2 animate-fadeIn">
                <span className="font-bold text-teal text-[10px] shrink-0">REX:</span>
                <span>&ldquo;I can get that scheduled for you right now! Let me check availability.&rdquo;</span>
              </div>
            )}
          </div>

          {/* Action indicator & Mandatory telemetry compliance badge */}
          <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between">
            <span className="text-[10px] text-ink/50 font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-teal" /> Instant Calendar Sync
            </span>
            <span className="text-[9px] text-ink/40 uppercase tracking-widest font-mono font-medium">
              Example — Not Live Data
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
