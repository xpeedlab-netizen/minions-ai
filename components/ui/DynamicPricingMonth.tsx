"use client";

import { useEffect, useState } from "react";
import { currentPricingMonth } from "@/lib/current-month";

/**
 * DynamicPricingMonth — Always prints the live, current month and year.
 *
 * Ensures the date-stamp on pricing plans ("September 2026 pricing") is 100%
 * dynamic on the client and never gets stuck on a previous build month.
 */
export default function DynamicPricingMonth({
  suffix = "pricing",
}: {
  suffix?: string;
}) {
  const [monthText, setMonthText] = useState<string>(currentPricingMonth());

  useEffect(() => {
    try {
      const live = new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
        timeZone: "America/New_York",
      }).format(new Date());
      setMonthText(live);
    } catch {
      // Fallback to initial if Intl fails
    }
  }, []);

  return (
    <span suppressHydrationWarning>
      {monthText} {suffix}
    </span>
  );
}
