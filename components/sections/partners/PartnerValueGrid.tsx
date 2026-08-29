import {
  Briefcase,
  Clock,
  LayoutTemplate,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import { partnerValues, type PartnerValue } from "@/lib/data/partners";

const icons: Record<PartnerValue["icon"], LucideIcon> = {
  "trending-up": TrendingUp,
  "shield-check": ShieldCheck,
  clock: Clock,
  briefcase: Briefcase,
  megaphone: Megaphone,
  layout: LayoutTemplate,
};

/**
 * Hairline grid, not cards. The six reasons share one bordered block with 1px
 * dividers between cells, which is what makes a dense list read as a table of facts
 * rather than six things competing for attention.
 */
export default function PartnerValueGrid() {
  return (
    <Section tone="cream" width="wide">
      <Eyebrow>Why partner</Eyebrow>
      <SectionHeading className="mt-6">What you get out of it.</SectionHeading>
      <SectionLead>
        This is built to be the easiest line of revenue you add this year — because the hard
        part, the delivery, never lands on your team.
      </SectionLead>

      {/*
        Hairlines come from a 1px grid GAP over a border-coloured ground, not from
        per-cell border classes. Cell borders need nth-child rules that have to be
        rewritten at every breakpoint and silently double up; the gap works at all
        three column counts with no arithmetic.
      */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {partnerValues.map((value) => {
          const Icon = icons[value.icon];
          return (
            <div key={value.title} className="bg-white p-7">
              <Icon className="size-6 text-teal" strokeWidth={1.75} />
              <h3 className="mt-5 font-heading font-bold text-lg text-ink">{value.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-ink/70">{value.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
