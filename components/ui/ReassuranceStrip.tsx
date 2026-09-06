import { Check } from "lucide-react";

/**
 * ReassuranceStrip — the objections a cold ad visitor has, answered under the CTA.
 *
 * Lifted verbatim from the homepage hero (components/sections/home/Hero.tsx), which
 * is the standard the industry pages follow. Kept as one component so the four
 * promises cannot drift apart between pages: price, timeline and the tuning window
 * are commercial commitments, and a page quoting a stale number is worse than a page
 * quoting none.
 *
 * If any of these change, change them HERE and in the homepage hero together.
 */

const POINTS = [
  "Keep your existing number",
  "Done-for-you setup",
  "30-day tuning included",
  "From $2,500, live in 3 to 6 weeks",
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
