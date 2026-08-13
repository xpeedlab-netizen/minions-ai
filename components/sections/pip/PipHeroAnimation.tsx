import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import PipChatWidget from "@/components/pip-widget/PipChatWidget";

export default function PipHeroAnimation() {
  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl border border-border bg-white p-6 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="relative flex size-11 items-center justify-center rounded-2xl bg-[#3A6EA5]/10 border border-[#3A6EA5]/30 p-1 shadow-sm overflow-hidden shrink-0">
            <Image
              src="/images/mascots/pip.png"
              alt="Pip Mascot Avatar"
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-heading font-bold text-ink text-sm">Pip — Support AI</h3>
            <p className="font-mono text-[11px] text-ink/50 flex items-center gap-1">
              <ShieldCheck className="size-3 text-[#3A6EA5]" /> No-Guess Policy
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono text-[#3A6EA5] font-bold bg-[#3A6EA5]/10 px-2.5 py-1 rounded-full uppercase">
          24/7 Active
        </span>
      </div>

      <div className="mt-4 h-[440px]">
        <PipChatWidget variant="inline" defaultOpen hideHeader />
      </div>

      {/* Bottom Proof Bar */}
      <div className="mt-4 flex items-center justify-center rounded-xl border border-border bg-cream px-4 py-2.5 text-xs text-ink/70">
        <span className="font-mono">Zero repetitive emails in your inbox</span>
      </div>
    </div>
  );
}
