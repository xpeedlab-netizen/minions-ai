"use client";

import { DEMO_VIDEO_URL } from "@/lib/data/placeholders";

export default function LiveDemoSection() {
  // Per T12: When DEMO_VIDEO_URL is unset, the demo section MUST NOT render at all.
  if (!DEMO_VIDEO_URL || DEMO_VIDEO_URL.trim() === "") {
    return null;
  }

  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border" id="demo">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-6 sm:p-10 shadow-sm text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            See how the crew handles a live call
          </h2>
          <p className="mt-3 text-ink/70 leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
            Watch a 60-second walkthrough of our AI dispatcher qualifying a lead and writing the booking directly to Google Calendar.
          </p>

          <div className="mt-8 relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black">
            <video
              src={DEMO_VIDEO_URL}
              controls
              preload="metadata"
              playsInline
              className="h-full w-full object-cover"
              aria-label="Recorded demonstration video of Minions.AI handling a customer call"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
