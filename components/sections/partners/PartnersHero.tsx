import Button from "@/components/ui/Button";
import Section, { Eyebrow } from "@/components/ui/Section";

/**
 * Partner hero — ink band, left-ranged.
 *
 * The approved partner document renders on a dark ground with a serif display face.
 * This page keeps that EDITORIAL STRUCTURE (wide bands, left-ranged statement type,
 * hairline grids) but takes its colour and type from the brand tokens (invariants.md
 * #8), so it reads as part of getminions.ai rather than a second visual language.
 *
 * Ink rather than cream is the one concession to the document's mood: it separates the
 * partner pitch from the customer-facing pages the moment the page loads.
 */
export default function PartnersHero() {
  return (
    <Section tone="ink" width="wide" density="feature">
      <div className="max-w-2xl">
        <Eyebrow tone="dark">Partner Program</Eyebrow>
        {/*
          Rendered as a real <h1> rather than <SectionHeading>, which only emits h2/h3.
          The class list is SectionHeading's own h2 scale, copied deliberately so the
          page has one top-level heading without widening that component's API.
        */}
        <h1 className="mt-6 type-display text-4xl sm:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.005em] text-balance">
          Your clients are missing calls. You could be the one who fixes it.
        </h1>
        <p className="mt-6 max-w-xl text-[1.0625rem] sm:text-lg leading-[1.6] text-cream/85">
          Minions.AI builds AI voice agents that answer every call, book the job and update
          the CRM — for the kind of businesses you already serve. Bring us the relationship,
          we handle the build, and you earn on every client for as long as they stay.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="#apply" size="lg">
            Apply to partner
          </Button>
          <Button
            href="#commission"
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            See what you earn
          </Button>
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.08em] text-cream/60">
          No cost to join · No volume commitment · Approval usually within 3 business days
        </p>
      </div>
    </Section>
  );
}
