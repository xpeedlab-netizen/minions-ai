import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex h-16 border-t border-border bg-white md:hidden">
      <Link
        href="/live-demo"
        className="flex flex-1 items-center justify-center gap-2 font-heading font-bold text-ink border-r border-border"
      >
        <Phone className="size-5 text-teal" />
        Hear the AI
      </Link>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 font-heading font-bold text-ink bg-coral"
      >
        <CalendarCheck className="size-5" />
        Book a call
      </Link>
    </div>
  );
}
