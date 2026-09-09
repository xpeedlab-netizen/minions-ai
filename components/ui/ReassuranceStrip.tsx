import { Check } from "lucide-react";

/**
 * ReassuranceStrip — the objections a cold ad visitor has, answered under the CTA.
 *
 * Mirrors the homepage hero's strip (components/sections/home/Hero.tsx), which is the
 * standard the industry pages follow. Kept as one component so these promises cannot
 * drift apart between pages.
 *
 * The price/timeline line ("From $2,500, live in 3 to 6 weeks") was removed on
 * 2026-09-09, from the homepage hero first and then here, so the two stay in step. The
 * remaining three are reassurances; a price is a different kind of claim, and putting a
 * number in the first screen invites a cold visitor to judge before the page has argued
 * anything. /pricing carries it, where the reader has asked.
 *
 * If any of these change, change them HERE and in the homepage hero together.
 */

const POINTS = [
  "Keep your existing number",
  "Done-for-you setup",
  "30-day tuning included",
];

export default function ReassuranceStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-ink/70 ${className}`}>
      {POINTS.map((p) => (
        <span key={p} className="inline-flex items-center gap-1">
          <Check aria-hidden className="size-3.5 shrink-0 text-teal" /> {p}
        </span>
      ))}
    </div>
  );
}
