"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track, type AnalyticsEvent, type AnalyticsParams } from "@/lib/analytics";

/**
 * A Link that reports its click to GA4.
 *
 * Exists so that Button can stay a SERVER component. Only the buttons that actually
 * carry a `track` prop pull in this client leaf; every other button on the site
 * renders exactly as before, with no JavaScript shipped for it.
 *
 * Navigation is never blocked on the event: `track` is a synchronous no-op when gtag
 * is missing, and we do not preventDefault or await anything.
 */
export default function TrackedLink({
  href,
  className,
  children,
  event,
  params,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  event: AnalyticsEvent;
  params?: AnalyticsParams;
}) {
  return (
    <Link href={href} className={className} onClick={() => track(event, params)}>
      {children}
    </Link>
  );
}
