import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface IndustryItem {
  id: string;
  name: string;
  /** One of the two co-primary markets — see .claude/invariants.md #3. */
  primary?: boolean;
  /** Three-to-five word descriptor. The full pitch lives on the vertical's own page. */
  meta: string;
  href: string;
}

/**
 * Ordering is site-wide and must stay in sync with `lib/data/nav.ts`, the footer, and
 * `.claude/features/industries/purpose.md`. Real Estate and Pest Control are the two
 * co-primary markets and deliberately occupy the first row, so a broker or a PCO sees
 * themselves immediately; the other four are supported but never a main focus.
 */
const industriesList: IndustryItem[] = [
  {
    id: "real-estate",
    name: "Real Estate Agencies",
    primary: true,
    meta: "Showing booking & buyer qualification",
    href: "/industries/real-estate",
  },
  {
    id: "pest-control",
    name: "Pest Control Operators",
    primary: true,
    meta: "Recurring quarterly plan capture",
    href: "/industries/pest-control",
  },
  {
    id: "hvac",
    name: "HVAC Contractors",
    meta: "Peak-season emergency dispatch",
    href: "/industries/hvac",
  },
  {
    id: "plumbing",
    name: "Plumbing & Drain",
    meta: "High-margin leak calls",
    href: "/industries/plumbing",
  },
  {
    id: "roofing",
    name: "Roofing & Exteriors",
    meta: "Storm-damage inspections",
    href: "/industries/roofing",
  },
  {
    id: "electrical",
    name: "Electrical Contractors",
    meta: "Panel upgrades & outages",
    href: "/industries/electrical",
  },
];

/**
 * Industry navigation — a dense text table.
 *
 * ARCHETYPE CHANGE. This was six equal cards, each with an icon tile, a name, a
 * two-line tagline and a bordered stat footer: 981px of vertical space and the fourth
 * consecutive three-column card grid on the page. It is a NAVIGATION ROW — its only
 * job is to let a visitor find their own vertical and click through — and it was
 * carrying the visual weight of a feature section.
 *
 * The model is the "Discover your next job" band on sme.careers: a bordered table of
 * short text tiles, no imagery, no icons, the shortest band on the page. It works as a
 * palate cleanser precisely because it has no pictures — after the stepper's portrait
 * and before the crew rail, the scroll needs somewhere to rest.
 *
 * Two things were deliberately dropped:
 * - The Lucide icons. Six generic glyphs (a flame, a bug, a wrench) were the only
 *   iconography on the page and shared no visual language with the collages.
 * - The `highlightStat` footer. The six values were semantically incompatible —
 *   "$15,000+", "$2,275", "< 3 Sec", "100%" — displayed bare with no label, so they
 *   read as a number wall rather than a claim anyone could act on. Each vertical's
 *   page states its own figure in context.
 *
 * BORDER PATTERN: the container draws top+left, every cell draws right+bottom. That
 * makes the interior hairlines single-width and lets the last column and last row
 * form the container's own right and bottom edge, with no doubling.
 */
export default function IndustriesSection() {
  return (
    <Section id="industries" tone="white" width="wide">
      <div className="max-w-2xl">
        <Eyebrow className="mb-5">Industry-Specific Dispatch</Eyebrow>
        {/* Was "Trained on your trade" — "trade" excludes real estate. */}
        <SectionHeading className="text-ink">
          Trained on your business, not a generic script.
        </SectionHeading>
      </div>

      <ul className="mt-12 grid overflow-hidden rounded-3xl border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
        {industriesList.map((ind, idx) => (
          <Reveal
            key={ind.id}
            as="li"
            delay={idx * 0.04}
            className="border-b border-r border-border"
          >
            <Link
              href={ind.href}
              className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors duration-300 hover:bg-cream sm:p-7"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-base font-bold leading-[1.3] tracking-[-0.01em] text-ink">
                    {ind.name}
                  </h3>
                  <ArrowUpRight
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{ind.meta}</p>
              </div>

              {ind.primary && (
                <span className="w-fit rounded-full bg-teal/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-teal">
                  Primary focus
                </span>
              )}
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
