import { ShieldCheck } from "lucide-react";
import PipChatWidget from "@/components/pip-widget/PipChatWidget";

export default function PipHeroAnimation() {
  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl border border-border bg-white p-6 shadow-lg overflow-hidden">
      {/* The widget renders its own "Pip — Support AI / Online" header, so the
          former static header here would duplicate it. */}
      <div className="flex items-center justify-between text-[11px] font-mono text-ink/50 border-b border-border/40 pb-2">
        <span>Midnight Support Chat</span>
        <span className="text-teal font-bold flex items-center gap-1">
          <ShieldCheck className="size-3.5" /> No-Guess Policy
        </span>
      </div>

      <div className="mt-4 h-[440px]">
        <PipChatWidget variant="inline" defaultOpen />
      </div>

      {/* Bottom Proof Bar */}
      <div className="mt-4 flex items-center justify-center rounded-xl border border-border bg-cream px-4 py-2.5 text-xs text-ink/70">
        <span className="font-mono">Zero repetitive emails in your inbox</span>
      </div>
    </div>
  );
}
