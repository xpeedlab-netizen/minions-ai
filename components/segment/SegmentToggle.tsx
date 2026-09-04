"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSegment } from "@/components/segment/useSegment";
import { setAnalyticsSegment, track } from "@/lib/analytics";
import { DEFAULT_SEGMENT, SEGMENTS, SEGMENT_COPY, type Segment } from "@/lib/segments";

/**
 * The audience switch.
 *
 * Placed directly above the players it controls, inside the proof band.
 *
 * It first shipped at the FOOT of the previous band, under a `border-t`, which failed
 * for three compounding reasons the owner hit in testing: a control that sits below a
 * section's content reads as a closing note rather than something you press; the thing
 * it changes lived in the NEXT band, so cause and effect never appeared together; and
 * nothing near the players said why a pest call was showing. The band then looked like
 * pest-only content with no way out, which is exactly the wrong impression for a page
 * whose two markets are co-primary (invariants.md #3).
 *
 * `tone="dark"` renders it for the ink band. `router.replace` rather than push, so the
 * back button does not walk back through a trail of toggles.
 */
export default function SegmentToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
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
    <Suspense fallback={<ToggleButtons active={DEFAULT_SEGMENT} tone={tone} />}>
      <LiveToggle tone={tone} />
    </Suspense>
  );
}

function LiveToggle({ tone }: { tone: "light" | "dark" }) {
  const active = useSegment();

  // Keep the module-level segment in sync so every other event carries it.
  useEffect(() => {
    setAnalyticsSegment(active);
  }, [active]);

  return <ToggleButtons active={active} tone={tone} />;
}

function ToggleButtons({
  active,
  tone,
}: {
  active: Segment;
  tone: "light" | "dark";
}) {
  const router = useRouter();
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-2xl border p-4 sm:flex-row sm:justify-center sm:gap-5 ${
        isDark ? "border-white/12 bg-white/[0.04]" : "border-ink/10 bg-white"
      }`}
    >
      <span
        className={`text-center font-heading text-sm font-bold sm:text-left ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        Which call do you want to hear?
      </span>

      {/*
        A segmented control on a visible track, rather than two loose pills. The track
        is what makes it read as a switch with an unchosen side — two pills alone read
        as a heading and a button, which is how the earlier version got missed.
      */}
      <div
        role="group"
        aria-label="Choose your industry"
        className={`flex w-full gap-1 rounded-full p-1 sm:w-auto ${
          isDark ? "bg-ink/60 ring-1 ring-white/10" : "bg-cream ring-1 ring-ink/10"
        }`}
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
              className={`min-h-11 flex-1 whitespace-nowrap rounded-full px-5 py-2 font-heading text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 sm:flex-none ${
                isDark ? "focus-visible:outline-white" : "focus-visible:outline-teal"
              } ${
                isActive
                  ? "bg-coral text-ink shadow-sm"
                  : isDark
                    ? "text-cream/75 hover:bg-white/10 hover:text-white"
                    : "text-ink/70 hover:bg-white hover:text-ink"
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
