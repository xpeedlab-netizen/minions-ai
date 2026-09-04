"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSegment } from "@/components/segment/useSegment";
import { setAnalyticsSegment, track } from "@/lib/analytics";
import { DEFAULT_SEGMENT, SEGMENTS, SEGMENT_COPY, type Segment } from "@/lib/segments";

/**
 * The audience switch.
 *
 * Placed after the problem band rather than in the hero: asking "which industry are
 * you?" before the visitor has a reason to care is a decision with no payoff attached.
 * By this point they have just read about missed calls costing them money, so picking
 * an industry buys them something concrete — their own recorded call.
 *
 * `router.replace` rather than push, so the back button does not walk back through a
 * trail of toggles.
 */
export default function SegmentToggle() {
  /*
   * The Suspense boundary lives here rather than at the call site, because forgetting
   * it does not fail loudly — `useSearchParams` outside one turns the whole route
   * dynamic, and on this page that silently discards `revalidate = 86400`. Owning the
   * boundary means no caller can make that mistake.
   *
   * The fallback is the real toggle in its default state, not a skeleton, so the
   * prerendered HTML ships a working control.
   */
  return (
    <Suspense fallback={<ToggleButtons active={DEFAULT_SEGMENT} />}>
      <LiveToggle />
    </Suspense>
  );
}

function LiveToggle() {
  const active = useSegment();

  // Keep the module-level segment in sync so every other event carries it.
  useEffect(() => {
    setAnalyticsSegment(active);
  }, [active]);

  return <ToggleButtons active={active} />;
}

function ToggleButtons({ active }: { active: Segment }) {
  const router = useRouter();

  return (
    <div className="mt-12 flex flex-col items-start gap-3 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:gap-4">
      <span className="font-heading text-sm font-bold text-ink">
        Show me a call from my industry:
      </span>
      <div
        role="group"
        aria-label="Choose your industry"
        className="flex flex-wrap gap-2"
      >
        {SEGMENTS.map((seg) => {
          const isActive = seg === active;
          return (
            <button
              key={seg}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                track("segment_select", { segment: seg });
                router.replace(`/?for=${seg}#hear-it`, { scroll: false });
              }}
              className={`min-h-11 rounded-full border px-4 py-2 font-heading text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2 ${
                isActive
                  ? "border-teal bg-teal text-white"
                  : "border-ink/15 bg-white text-ink hover:border-teal hover:text-teal"
              }`}
            >
              {SEGMENT_COPY[seg].shortLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
