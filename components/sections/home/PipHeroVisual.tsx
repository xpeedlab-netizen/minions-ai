import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function PipHeroVisual() {
  return (
    <div className="bg-[#f0f4f8] p-6 sm:p-10 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px] w-full overflow-hidden select-none border-l border-border">
      {/* Calm soft blue ambient light wrap */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-[#3A6EA5]/15 blur-3xl" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[#3A6EA5]/10 opacity-30" />
      </div>

      {/* Main Composited Stage */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* 3D Mascot Character Stage */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 my-2">
          {/* Ground Contact Shadow Ellipse beneath Pip */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-5 rounded-full bg-black/30 blur-md pointer-events-none" />

          {/* Transparent 3D Mascot Hero Asset */}
          <Image
            src="/images/mascots/pip.png"
            alt="Pip Support AI 3D Mascot"
            fill
            sizes="(max-width: 640px) 224px, 288px"
            className="object-contain drop-shadow-[0_15px_25px_rgba(58,110,165,0.2)]"
          />
        </div>

        {/* Supporting Chat Support Widget Card */}
        <div className="mt-2 bg-white rounded-2xl p-4 shadow-xl w-full border border-border">
          <div className="flex items-center gap-3 border-b border-border pb-2.5 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#3A6EA5]/10 flex items-center justify-center text-[#3A6EA5] font-bold text-xs">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-ink text-xs">Pip Support AI</div>
              <div className="text-[10px] text-ink/50 font-medium">Replies instantly • No-Guess Policy</div>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="bg-cream p-2.5 rounded-xl rounded-tl-sm text-ink/80 border border-border">
              &ldquo;Do you do free estimates for water heaters?&rdquo;
            </div>
            <div className="bg-[#3A6EA5]/10 p-2.5 rounded-xl rounded-tr-sm text-ink/90 border border-[#3A6EA5]/20">
              &ldquo;Yes! We offer free in-home estimates for all water heater replacements. Would you like me to find an available time?&rdquo;
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
