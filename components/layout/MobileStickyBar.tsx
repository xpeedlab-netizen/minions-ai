import { Phone, Calendar } from "lucide-react";
import TrackedLink from "@/components/ui/TrackedLink";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import { BOOKING_CALENDAR_URL, SITE_PHONE_TEL } from "@/lib/data/placeholders";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex h-14 border-t border-border bg-white shadow-lg md:hidden">
      <TrackedPhoneLink
        href={`tel:${SITE_PHONE_TEL}`}
        location="mobile_sticky_bar"
        className="flex flex-1 items-center justify-center gap-2 font-heading text-xs font-bold text-ink border-r border-border active:bg-cream/80 transition-colors"
      >
        <Phone className="size-4 text-teal" />
        Hear Live AI
      </TrackedPhoneLink>
      <TrackedLink
        href={BOOKING_CALENDAR_URL}
        event="cta_click"
        params={{ location: "mobile_sticky_bar" }}
        className="flex flex-1 items-center justify-center gap-2 font-heading text-xs font-bold text-white bg-coral hover:bg-coral-dark active:scale-[0.98] transition-all"
      >
        <Calendar className="size-4" />
        Book Setup Call
      </TrackedLink>
    </div>
  );
}
