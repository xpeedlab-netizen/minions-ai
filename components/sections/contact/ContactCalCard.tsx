import Image from "next/image";
import { CalendarDays } from "lucide-react";

const CAL_LINK = "https://cal.com/xpeedlab/30min";

export default function ContactCalCard() {
  return (
    <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-full border border-border bg-teal/10 p-0.5">
            <Image src="/images/mascots/rex.png" alt="Rex" fill className="object-contain" />
          </div>
          <div>
            <p className="font-heading font-bold text-ink">Chat with Rex</p>
            <p className="font-mono text-xs text-ink/50">15 min Meeting</p>
          </div>
        </div>
        <CalendarDays className="size-5 text-teal" />
      </div>

      <iframe
        src={`${CAL_LINK}?embed=true&theme=light`}
        title="Book a call with Minions.AI"
        className="w-full h-[600px] border-0"
        loading="lazy"
      />
    </div>
  );
}
