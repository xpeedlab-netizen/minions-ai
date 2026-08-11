import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function GiaHeroVisual() {
  return (
    <div className="bg-white/50 p-6 sm:p-10 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px] w-full overflow-hidden select-none border-r border-[#1B8A5A]/10">
      {/* Mint/Emerald ambient light wrap */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-[#1B8A5A]/15 blur-3xl" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[#1B8A5A]/10 opacity-30" />
      </div>

      {/* Main Composited Stage */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* 3D Mascot Character Stage */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 my-2">
          {/* Ground Contact Shadow Ellipse beneath Gia */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-5 rounded-full bg-black/30 blur-md pointer-events-none" />

          {/* Transparent 3D Mascot Hero Asset */}
          <Image
            src="/images/mascots/gia.png"
            alt="Gia CRM Automation 3D Mascot"
            fill
            sizes="(max-width: 640px) 224px, 288px"
            className="object-contain drop-shadow-[0_15px_25px_rgba(27,138,90,0.2)]"
          />
        </div>

        {/* Supporting CRM Pipeline Cards */}
        <div className="mt-2 w-full space-y-2 text-xs">
          <div className="bg-white rounded-xl p-3 shadow-sm border border-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-8 rounded-full bg-vest-orange"></div>
              <div>
                <div className="text-xs font-bold text-ink">New Lead Received</div>
                <div className="text-[10px] text-ink/50 font-medium">Pipeline Stage</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-[#1B8A5A]" />
          </div>

          <div className="bg-white rounded-xl p-3 shadow-sm border border-border flex items-center justify-between ml-3 sm:ml-6">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-8 rounded-full bg-[#1B8A5A]"></div>
              <div>
                <div className="text-xs font-bold text-ink">Job Won</div>
                <div className="text-[10px] text-ink/50 font-medium">Review Request Sent</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-[#1B8A5A]" />
          </div>

          <div className="mt-2 text-center text-[9px] text-ink/40 uppercase tracking-widest font-mono font-medium">
            Example — Not Live Data
          </div>
        </div>

      </div>
    </div>
  );
}
