"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Lite YouTube facade.
 *
 * A bare <iframe src="youtube.com/embed/…"> pulls ~1MB of YouTube JS on every page
 * load, whether or not anyone presses play. This renders only the poster image and a
 * play button; the iframe mounts on click. Cost until played: one thumbnail request.
 *
 * The thumbnail is a plain <img> rather than next/image on purpose — next/image with a
 * remote host would require whitelisting i.ytimg.com in next.config, and this is a
 * single fixed-aspect image where the optimizer buys us nothing.
 *
 * maxresdefault is not generated for every upload; onError falls back to hqdefault,
 * which YouTube always generates.
 */
export default function YouTubeEmbed({
  videoId,
  title,
  className = "",
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-ink ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }}
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/10" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-coral text-ink shadow-lg transition-transform duration-150 ease-out group-hover:scale-110 group-active:scale-[0.98]">
              <Play className="size-7 sm:size-8 translate-x-0.5" fill="currentColor" strokeWidth={0} />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
