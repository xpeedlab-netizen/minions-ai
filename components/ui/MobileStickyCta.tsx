"use client";

import { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import {
  BOOKING_CALENDAR_URL,
  SITE_PHONE_NUMBER,
  SITE_PHONE_TEL,
} from "@/lib/data/placeholders";

/**
 * MobileStickyCta — Floating quick conversion trigger on mobile.
 *
 * Appears after the visitor scrolls past the hero section (450px) on mobile viewports.
 * Gives immediate access to both high-intent paths:
 *   1. Direct live phone demo test (tel:)
 *   2. 15-minute setup call booking
 */
export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center justify-between gap-2.5 rounded-2xl border border-ink/15 bg-cream/95 p-2 shadow-2xl backdrop-blur-lg">
        <a
          href={`tel:${SITE_PHONE_TEL}`}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-2 py-2 text-xs font-bold text-teal shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="size-3.5 shrink-0" />
          <span>Demo Call</span>
        </a>

        <a
          href={BOOKING_CALENDAR_URL}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-ink px-3 py-2 text-xs font-bold text-cream shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="size-3.5 shrink-0 text-coral" />
          <span>Book Setup</span>
        </a>
      </div>
    </div>
  );
}
