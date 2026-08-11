import Image from "next/image";
import { FileText, CheckCircle2 } from "lucide-react";

export default function OttoHeroVisual() {
  return (
    <div className="bg-[#f4f6f8] p-6 sm:p-10 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px] w-full overflow-hidden select-none border-l border-border">
      {/* Quiet slate ambient light wrap */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-[#2C3E50]/10 blur-3xl" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[#2C3E50]/10 opacity-20" />
      </div>

      {/* Main Composited Stage */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* 3D Mascot Character Stage */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 my-2">
          {/* Muted Ground Contact Shadow Ellipse beneath Otto */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-5 rounded-full bg-black/25 blur-md pointer-events-none" />

          {/* Transparent 3D Mascot Hero Asset */}
          <Image
            src="/images/mascots/otto.png"
            alt="Otto Back-Office Automation 3D Mascot"
            fill
            sizes="(max-width: 640px) 224px, 288px"
            className="object-contain drop-shadow-[0_15px_25px_rgba(44,62,80,0.2)]"
          />
        </div>

        {/* Supporting Intake & Back-Office Document Card */}
        <div className="mt-2 bg-white rounded-2xl p-4 shadow-xl w-full border border-border">
          <div className="flex items-center justify-between border-b border-border pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#2C3E50]" />
              <span className="font-bold text-xs text-ink tracking-wide">
                Automated Form Intake & Sync
              </span>
            </div>
            <span className="bg-[#2C3E50]/10 text-[#2C3E50] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
              Otto Task
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="bg-cream p-2.5 rounded-xl border border-border flex items-center justify-between">
              <span className="text-ink/80 font-medium">Extract client intake data</span>
              <span className="text-emerald-600 font-bold text-[10px] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Done
              </span>
            </div>
            <div className="bg-cream p-2.5 rounded-xl border border-border flex items-center justify-between">
              <span className="text-ink/80 font-medium">Update status tracking</span>
              <span className="text-emerald-600 font-bold text-[10px] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Synced
              </span>
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
