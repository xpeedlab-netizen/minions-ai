import type { ReactNode } from "react";

/**
 * The landing page's single layout primitive.
 *
 * Before this existed every section hand-rolled its own `mx-auto max-w-* px-4 …`,
 * which is why container widths jumped 7xl → 5xl → 6xl → 4xl → 3xl with no system
 * and why nothing on the page read as more important than anything else.
 *
 * Three axes, fixed scales, no ad-hoc values:
 * - `tone`    sets the band background. Adjacent sections must never share a tone —
 *             the colour change IS the separator (no border-t needed on top of it).
 * - `width`   sets the measure. Narrower = more intimate//statement, wider = more grid.
 * - `density` sets vertical breathing room. This is what creates rhythm: `feature`
 *             bands are the moments that must land, `compact` bands are supporting.
 */

type Tone = "cream" | "white" | "ink" | "teal";
type Width = "narrow" | "default" | "wide" | "full";
type Density = "compact" | "default" | "feature";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-white",
  teal: "bg-teal text-white",
};

const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
  full: "max-w-7xl",
};

const densities: Record<Density, string> = {
  compact: "py-12 sm:py-16",
  default: "py-16 sm:py-24",
  feature: "py-24 sm:py-32",
};

export default function Section({
  children,
  tone = "cream",
  width = "wide",
  density = "default",
  id,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  tone?: Tone;
  width?: Width;
  density?: Density;
  id?: string;
  /** Extra classes on the <section> band itself (e.g. `relative overflow-hidden`). */
  className?: string;
  /** Extra classes on the inner container (e.g. `text-center`). */
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`${tones[tone]} ${densities[density]} ${id ? "scroll-mt-20" : ""} ${className}`}
    >
      <div
        className={`mx-auto ${widths[width]} px-4 sm:px-6 lg:px-8 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * Standard section header. Enforces the one h2 scale used across the whole page,
 * so no card h3 can ever visually rival a section title.
 */
export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  /*
   * Measured against Linear (48px / weight 510 / -1.056px tracking / 1.0 line-height)
   * and Sierra (38-44px / weight 400 / ~1.1 line-height).
   *
   * Both set display type LIGHTER and TIGHTER than we did. We were shipping
   * font-extrabold with default tracking, which at 48px reads as shouting — and a page
   * where every heading shouts has no hierarchy at all. Dropping to `bold` and pulling
   * tracking in is what makes large type read as designed rather than merely big.
   */
  const scale =
    Tag === "h2"
      ? "text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]"
      : "text-xl sm:text-2xl leading-[1.15] tracking-[-0.01em]";

  return (
    <Tag className={`font-heading font-bold ${scale} text-balance ${className}`}>
      {children}
    </Tag>
  );
}

/**
 * The small uppercase mono label that introduces a section.
 *
 * Was hand-rolled five different ways across the page (different padding, different
 * radius, some with borders, some without, teal-on-teal in one place). One component
 * means one look — and it's the cheapest way to make a section feel "placed" rather
 * than dropped in, which is the trick both Sierra and Decagon lean on hardest.
 */
export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  /** `light` for cream/white bands, `dark` for ink/teal bands. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const toneClass =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-teal"
      : "border-teal/15 bg-teal/5 text-teal";

  return (
    <span
      className={`inline-block rounded-full border ${toneClass} px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.08em] ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Standard supporting paragraph under a SectionHeading.
 *
 * Linear and Sierra both cap body copy at 16px/24px with a ~576px measure. We were
 * using `text-lg` (18px) uncapped, which produces long lines that are genuinely
 * harder to scan — the "cluttered" feeling is often just an over-long measure.
 */
export function SectionLead({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const toneClass = tone === "dark" ? "text-cream/70" : "text-ink/65";
  return (
    <p
      className={`mt-5 max-w-xl text-base sm:text-[1.0625rem] leading-[1.6] ${toneClass} ${className}`}
    >
      {children}
    </p>
  );
}
