"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

/**
 * A tel: link that reports the tap to GA4.
 *
 * Phone taps are the one conversion the site cannot otherwise see: the call leaves the
 * browser entirely, so without this event a visitor who rings the demo number is
 * indistinguishable from one who bounced. On the mobile sticky bar in particular, that
 * is a large share of real intent going unmeasured.
 *
 * Kept as a plain <a> rather than next/link because tel: is not an app route.
 */
export default function TrackedPhoneLink({
  href,
  className,
  children,
  location,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  /** Which band or bar the tap came from, e.g. "hero" or "mobile_sticky_bar". */
  location: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track("phone_click", { location })}
    >
      {children}
    </a>
  );
}
