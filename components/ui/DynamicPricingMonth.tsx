"use client";

import { useEffect, useState } from "react";
import { currentPricingMonth } from "@/lib/current-month";

/**
 * DynamicPricingMonth — Always prints the live, current month and year.
 *
 * Ensures the date-stamp on pricing plans ("September 2026 pricing") is 100%
 * dynamic on the client and never gets stuck on a previous build month.
 *
 * The server renders the build-time month; the client recomputes on mount so a
 * page cached across a month boundary corrects itself. Both sides call
 * `currentPricingMonth`, so the string only ever changes when the month has
 * actually turned over — `suppressHydrationWarning` covers that one render.
 */
export default function DynamicPricingMonth({
  suffix = "pricing",
}: {
  suffix?: string;
}) {
  const [monthText, setMonthText] = useState<string>(currentPricingMonth);

  useEffect(() => {
    // Re-read on mount only to catch a month rollover in cached HTML. Guarded so
    // it no-ops (no re-render) on the overwhelmingly common in-month load.
    const live = currentPricingMonth();
    setMonthText((prev) => (prev === live ? prev : live));
  }, []);

  return (
    <span suppressHydrationWarning>
      {monthText} {suffix}
    </span>
  );
}
