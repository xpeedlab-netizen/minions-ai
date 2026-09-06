"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SEGMENT_COPY, type Segment } from "@/lib/segments";

/**
 * The hero eyebrow pill, following `?for=` — added 2026-09-05.
 *
 * The clip already forked but the pill did not, so a pest control owner arriving from a
 * pest ad on `/?for=pest` heard their own trade and read "for pest control & real estate
 * owners" above it. The ad had already segmented them; making them read past another
 * industry's name is the same match-rate loss the player fork exists to close.
 *
 * THE DEFAULT STILL NAMES BOTH. With no `?for=` the pill is unchanged, because
 * invariants.md #3 makes pest control and real estate co-primary with equal weight and
 * the static homepage must not pick one. The fork narrows the pill only for a visitor
 * who has ALREADY declared a segment, so nothing about equal standing changes: both
 * variants exist, neither is the fallback, and the shared default names both.
 *
 * Deliberately reads the raw param rather than normalizeSegment(), which maps an absent
 * param to "pest" — that would silently drop "& real estate" from the default hero and
 * quietly break invariant #3. An explicit declaration is the only thing that narrows it.
 *
 * SUSPENSE IS NOT OPTIONAL. `useSearchParams` outside a boundary opts `/` out of static
 * generation, discarding `revalidate = 86400` with a build that still passes — it just
 * starts rendering per request. The fallback is the real default text, not a skeleton,
 * so prerendered HTML ships the complete pill. Same rule as SegmentedHeroCallPlayer.
 */

/** The no-param pill. Also the Suspense fallback, so static HTML is complete. */
const DEFAULT_PILL = "For pest control & real estate owners";

function useExplicitSegment(): Segment | null {
  const raw = useSearchParams().get("for");
  return raw === "pest" || raw === "real-estate" ? raw : null;
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-[0.06em] text-ink/70 shadow-sm">
      <span aria-hidden className="size-1.5 rounded-full bg-success animate-breathe" />
      {label}
    </span>
  );
}

function SegmentedPill() {
  const segment = useExplicitSegment();
  return <Pill label={segment ? SEGMENT_COPY[segment].pillLabel : DEFAULT_PILL} />;
}

export default function SegmentedHeroPill() {
  return (
    <Suspense fallback={<Pill label={DEFAULT_PILL} />}>
      <SegmentedPill />
    </Suspense>
  );
}
