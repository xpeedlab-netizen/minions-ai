"use client";

import { useSyncExternalStore } from "react";
import { currentPricingMonth } from "@/lib/current-month";

/**
 * DynamicPricingMonth — Always prints the live, current month and year.
 *
 * Ensures the date-stamp on pricing plans ("September 2026 pricing") is 100%
 * dynamic on the client and never gets stuck on a previous build month.
 *
 * Implemented with `useSyncExternalStore` rather than useState + useEffect. The value is
 * genuinely an external one — the system clock — read differently on the two sides of
 * hydration, which is exactly the split this hook exists for: `getServerSnapshot`
 * supplies the build-time month for the SSR'd/cached HTML and `getSnapshot` supplies the
 * live month on the client, so a page cached across a month boundary corrects itself on
 * hydration.
 *
 * The previous useEffect + setState version was a setState-in-effect cascade
 * (react-hooks/set-state-in-effect, a lint error): it re-rendered on every mount to
 * arrive at the value it already had on all but one day a month. A mount-flag variant
 * trips the same rule. This hook needs neither an effect nor a suppression.
 *
 * `subscribe` is a no-op returning a no-op teardown: nothing pushes clock changes, and
 * the month only needs to be correct as of hydration. A visitor whose tab is open across
 * midnight on the 1st keeps the old label until the next render — the same behaviour the
 * effect version had, and the label is a date-stamp, not a countdown.
 */
const subscribe = () => () => {};

export default function DynamicPricingMonth({
  suffix = "pricing",
}: {
  suffix?: string;
}) {
  const monthText = useSyncExternalStore(
    subscribe,
    currentPricingMonth,
    currentPricingMonth,
  );

  return (
    <span suppressHydrationWarning>
      {monthText} {suffix}
    </span>
  );
}
