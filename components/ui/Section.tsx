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
  const scale =
    Tag === "h2"
      ? "text-3xl sm:text-4xl lg:text-5xl"
      : "text-xl sm:text-2xl";

  return (
    <Tag
      className={`font-heading font-extrabold ${scale} text-balance leading-tight ${className}`}
    >
      {children}
    </Tag>
  );
}
