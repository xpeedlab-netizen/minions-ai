import Image from "next/image";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { Eyebrow } from "@/components/ui/Section";
import { FOUNDER_STORY } from "@/lib/data/site-content";
import { FOUNDER_PHOTOS, FOUNDER_VIDEO_ID } from "@/lib/data/placeholders";

/**
 * Founder trust band — the written story and the founder video as ONE moment.
 *
 * Design reference: the "Our founders" pattern used by Sierra (sierra.ai/about) and
 * Decagon — both punctuate an otherwise light page with a single near-black inverted
 * band for their highest-trust content, then let one large piece of media dominate it.
 * Inversion is what makes the section feel significant; splitting the story and the
 * video across two pale bands is what made it feel incidental.
 *
 * Structure:
 *   pull-quote (oversized, editorial)  →  media (video if set, else founder photos)
 *   →  heading + body  →  founder byline with real photos
 *
 * The media slot is the hinge: with FOUNDER_VIDEO_ID set it's the video; without it,
 * the founder photos carry the same space. Either way the band is complete — there is
 * no empty container and no second pale band to explain.
 */
export default function FoundersTrust() {
  const hasVideo = Boolean(FOUNDER_VIDEO_ID && FOUNDER_VIDEO_ID.trim() !== "");

  return (
    <section
      id="founders"
      className="relative overflow-hidden bg-ink text-white py-24 sm:py-32 scroll-mt-20"
    >
      {/* Atmosphere: a soft teal bloom off-center, so the band has depth rather than
          reading as a flat black rectangle. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-teal/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow tone="dark">Why We Built This</Eyebrow>

          {/* The pull-quote leads at display scale — it is the most human line on the
              page, so it gets the typographic weight instead of a 20px italic aside. */}
          <blockquote className="mt-8 font-heading font-bold text-2xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-[-0.025em] text-white text-balance">
            &ldquo;{FOUNDER_STORY.pullQuote}&rdquo;
          </blockquote>
        </div>

        {/* Media slot */}
        <div className="mt-14">
          {hasVideo ? (
            <div className="relative">
              {/* Teal edge-glow behind the player so it sits *on* the band rather than
                  being pasted over it. */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-teal/40 to-transparent blur-xl"
              />
              <YouTubeEmbed
                videoId={FOUNDER_VIDEO_ID}
                title="Founder introduction — Rakib and Parvej explain why they built Minions.AI"
                className="relative !border-white/15 shadow-2xl"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {FOUNDER_PHOTOS.map((f) => (
                <figure
                  key={f.src}
                  className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-white/5"
                >
                  <Image
                    src={f.src}
                    alt={f.name}
                    fill
                    sizes="(min-width: 640px) 22rem, 45vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                  />
                  <figcaption className="absolute bottom-3 left-4 font-heading font-bold text-white text-sm sm:text-base">
                    {f.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>

        {/* Story */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.25fr] lg:gap-14 lg:items-baseline">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-[1.1] tracking-[-0.02em] text-white text-balance lg:sticky lg:top-24">
            {FOUNDER_STORY.heading}
          </h2>

          <div>
            <p className="max-w-xl text-base leading-[1.7] text-cream/70 sm:text-[1.0625rem]">
              {FOUNDER_STORY.body}
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              {/* When the video occupies the media slot the photos still appear here,
                  so the founders always have faces attached to the promise. */}
              {hasVideo && (
                <div className="flex -space-x-3">
                  {FOUNDER_PHOTOS.map((f) => (
                    <Image
                      key={f.src}
                      src={f.src}
                      alt={f.name}
                      width={48}
                      height={48}
                      className="size-12 rounded-full border-2 border-ink object-cover"
                    />
                  ))}
                </div>
              )}
              <p className="font-heading font-bold text-white">
                {FOUNDER_STORY.attribution}
              </p>
            </div>
          </div>
        </div>

        {/*
          Infrastructure line. Deliberately placed here and nowhere higher: naming the
          stack in the hero would make a contractor think about *how* it works at the
          moment they should be recognising their own problem, and it invites a
          "why not go direct?" comparison. Down here, next to real founder faces, it
          answers the only question a visitor still has before booking — are these
          people real engineers, or another fly-by-night agency.
        */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="font-mono text-xs uppercase leading-[1.7] tracking-[0.1em] text-cream/40 sm:text-xs">
            Built on enterprise voice infrastructure — Retell AI · n8n · Google Calendar · EspoCRM
          </p>
        </div>
      </div>
    </section>
  );
}
