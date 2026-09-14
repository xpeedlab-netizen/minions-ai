"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll-linked parallax image, extracted from BuiltOnRetell.tsx on 2026-09-15.
 *
 * Renders a single full-bleed background image inside its own oversized wrapper and
 * translates it vertically as the parent section scrolls through the viewport — the
 * same visual effect `background-attachment: fixed` gives on desktop, but as a
 * transform, which mobile Safari/Chrome do not disable. See BuiltOnRetell.tsx's
 * docblock for why this replaced the old `bg-scroll lg:bg-fixed` CSS-only approach.
 *
 * The wrapper is sized 120% tall and offset -10% so the translateY range (±10%) never
 * exposes an edge of the image, regardless of section height.
 */
export default function ParallaxBackground({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} aria-hidden className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 -top-[10%] h-[120%] bg-cover bg-center"
        style={{ backgroundImage: `url(${src})`, y }}
      />
    </div>
  );
}
