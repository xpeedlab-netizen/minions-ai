import Image from "next/image";
import { Zap, MessageSquare } from "lucide-react";

export default function ZipHeroVisual() {
  return (
    <div className="bg-cream p-6 sm:p-10 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px] w-full overflow-hidden select-none border-r border-border">
      {/* Energetic coral/amber ambient light wrap */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-[#C4472A]/15 blur-3xl" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[#C4472A]/10 opacity-30" />
      </div>

      {/* Main Composited Stage */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* 3D Mascot Character Stage */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 my-2">
          {/* Ground Contact Shadow Ellipse beneath Zip */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-5 rounded-full bg-black/40 blur-md pointer-events-none" />

          {/* Transparent 3D Mascot Hero Asset */}
          <Image
            src="/images/mascots/zip.png"
            alt="Zip Speed-to-Lead 3D Mascot"
            fill
            sizes="(max-width: 640px) 224px, 288px"
            className="object-contain drop-shadow-[0_15px_25px_rgba(196,71,42,0.25)]"
          />
        </div>

        {/* Supporting Missed Call Alert Card */}
        <div className="mt-2 bg-white rounded-2xl p-4 shadow-xl w-full border border-border relative">
          <div className="flex items-center justify-between border-b border-border pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#C4472A]" />
              <span className="font-bold text-xs text-ink tracking-wide">
                Instant SMS Dispatch (12s response)
              </span>
            </div>
            <span className="bg-[#C4472A]/10 text-[#C4472A] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
              Speed Lead
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="bg-[#C4472A] p-2.5 rounded-xl rounded-tr-sm text-white flex items-start gap-2 shadow-sm">
              <MessageSquare className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-90" />
              <span>&ldquo;Hi, sorry we missed your call! This is Zip from the team. How can we help you today?&rdquo;</span>
            </div>
            <div className="bg-cream p-2.5 rounded-xl rounded-tl-sm text-ink/80 border border-border flex items-start gap-2">
              <span className="font-bold text-ink/50 text-[10px] shrink-0">CUSTOMER:</span>
              <span>&ldquo;I need a quote for a new AC unit. Are you available tomorrow?&rdquo;</span>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-border text-center text-[9px] text-ink/40 uppercase tracking-widest font-mono font-medium">
            Example — Not Live Data
          </div>
        </div>

      </div>
    </div>
  );
}
