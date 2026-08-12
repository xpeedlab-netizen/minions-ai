"use client";

import { FOUNDER_VIDEO_URL } from "@/lib/data/placeholders";

/**
 * Founder video placeholder section.
 *
 * Dual-state — identical mechanism to LiveDemoSection (WO#02 T12):
 * - FOUNDER_VIDEO_URL = "" → returns null. No render, no empty box, no layout gap.
 * - FOUNDER_VIDEO_URL populated → renders the video with accessible controls, no
 *   autoplay-with-sound, preload="metadata", and lazy loading.
 *
 * Placement: between FoundersTrust and HonestProof — the founders' written story
 * leads directly into a video of them saying it, which is a strict trust upgrade
 * over the same section, then the written Honest Truth follows as reinforcement.
 */
export default function FounderVideoSection() {
  // Per dual-state pattern: when no URL is configured, section must not render at all.
  if (!FOUNDER_VIDEO_URL || FOUNDER_VIDEO_URL.trim() === "") {
    return null;
  }

  return (
    <section
      className="bg-cream py-16 sm:py-24 border-t border-border"
      id="founder-video"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-6 sm:p-10 shadow-sm text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            A word from the founders
          </h2>
          <p className="mt-3 text-ink/70 leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
            We built this because we kept watching small businesses lose work to voicemail. Here&apos;s
            the honest version of why, in our own words.
          </p>

          <div className="mt-8 relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black">
            <video
              src={FOUNDER_VIDEO_URL}
              controls
              preload="metadata"
              playsInline
              className="h-full w-full object-cover"
              aria-label="Founder introduction video — Rakib and Parvej explain why they built Minions.AI"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
