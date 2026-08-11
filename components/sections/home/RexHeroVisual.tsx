import Image from "next/image";
import { PhoneCall, Sparkles } from "lucide-react";

export default function RexHeroVisual() {
  return (
    <div className="bg-[#0b484e] p-6 sm:p-10 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px] w-full overflow-hidden select-none">
      {/* Soft ambient light wrap radial glow applied at placement time */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-teal/25 blur-3xl" />
        <div className="absolute w-[420px] h-[420px] rounded-full border border-teal/20 opacity-30" />
      </div>

      {/* Main Composited Stage */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* 3D Mascot Character Stage - Composited cleanly */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 my-2">
          {/* Ground Contact Shadow Ellipse beneath Rex */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-5 rounded-full bg-black/60 blur-md pointer-events-none" />

          {/* Reusable Transparent 3D Mascot Hero Asset */}
          <Image
            src="/images/mascots/rex.png"
            alt="Rex AI Voice Agent 3D Mascot"
            fill
            priority
            sizes="(max-width: 640px) 224px, 288px"
            className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Supporting Call-Transcript Card Element */}
        <div className="mt-2 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl w-full border border-border">
          <div className="flex items-center justify-between border-b border-border pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-teal" />
              <span className="font-bold text-xs text-ink tracking-wide">
                24/7 Answering Sequence
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
              </span>
              <span className="text-[10px] font-mono text-teal font-bold uppercase tracking-wider">
                Call Active
              </span>
            </div>
          </div>

          {/* Dialogue exchange */}
          <div className="space-y-2 text-xs">
            <div className="bg-cream p-2.5 rounded-xl rounded-tl-sm text-ink/80 border border-border/60 flex items-start gap-2">
              <span className="font-bold text-ink/50 text-[10px] shrink-0">CALLER:</span>
              <span>&ldquo;Hi, I need an emergency roof repair quote for tomorrow.&rdquo;</span>
            </div>
            <div className="bg-teal/10 p-2.5 rounded-xl rounded-tr-sm text-ink/90 border border-teal/20 flex items-start gap-2">
              <span className="font-bold text-teal text-[10px] shrink-0">REX:</span>
              <span>&ldquo;I can get that scheduled for you right now! Let me check availability.&rdquo;</span>
            </div>
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
