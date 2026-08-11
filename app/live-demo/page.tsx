import type { Metadata } from "next";
import LiveDemoHero from "@/components/sections/live-demo/LiveDemoHero";
import LiveDemoOptionC from "@/components/sections/live-demo/LiveDemoOptionC";
import LiveDemoFinalCta from "@/components/sections/live-demo/LiveDemoFinalCta";
import { DEMO_VIDEO_URL, BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Product Demo & Assistant Preview — Minions.AI",
  description:
    "Watch our recorded AI video demonstration or test Pip live in browser chat.",
};

export default function LiveDemoPage() {
  const hasVideo = Boolean(DEMO_VIDEO_URL && String(DEMO_VIDEO_URL).trim() !== "");

  return (
    <>
      <LiveDemoHero />

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
          {hasVideo ? (
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-wide text-teal">Recorded Video Demo</p>
              <h2 className="mt-1 font-heading font-extrabold text-2xl text-ink">
                Watch the AI Dispatcher in Action
              </h2>
              <div className="mt-4 relative aspect-video w-full overflow-hidden rounded-xl bg-black border border-border">
                <video
                  src={DEMO_VIDEO_URL}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label="Recorded AI dispatch demonstration video"
                >
                  Your browser does not support video playback.
                </video>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block rounded-full bg-ink px-3 py-1 font-mono text-xs uppercase tracking-wide text-white">
                  Done-For-You Onboarding
                </span>
                <h2 className="mt-4 font-heading font-extrabold text-2xl sm:text-3xl text-ink">
                  Hear your custom crew before you launch
                </h2>
                <p className="mt-4 text-ink/75 leading-relaxed">
                  We don&apos;t use generic phone demos. During your onboarding week, we train the AI on your exact services, pricing, and service area. You hear real test calls on your business before your line goes live.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow className="w-full">
                  Book a 15-minute call
                </Button>
              </div>
            </div>
          )}

          <div>
            <LiveDemoOptionC />
          </div>
        </div>
      </section>

      <LiveDemoFinalCta />
    </>
  );
}
