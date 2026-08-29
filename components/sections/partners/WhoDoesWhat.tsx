import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import { partnerSplit } from "@/lib/data/partners";

/**
 * The division of labour — two columns with accent rails.
 *
 * This band answers the objection that kills partner programs: that the partnership
 * quietly becomes unpaid work for the partner's team. The asymmetry is the argument —
 * "You" is four lines, "Us" is five and covers everything hard — so the columns are
 * deliberately NOT padded to equal length.
 */
export default function WhoDoesWhat() {
  return (
    <Section tone="ink" width="wide">
      <Eyebrow tone="dark">The division of labour</Eyebrow>
      <SectionHeading className="mt-6">Who does what.</SectionHeading>
      <SectionLead tone="dark">
        Worth being precise about, because the usual worry is that a partnership quietly
        becomes unpaid work for your team. It does not.
      </SectionLead>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {(
          [
            { title: "You", items: partnerSplit.you, rail: "border-l-coral" },
            { title: "Us", items: partnerSplit.us, rail: "border-l-cream" },
          ] as const
        ).map((column) => (
          <div
            key={column.title}
            className={`rounded-2xl border border-white/10 border-l-4 ${column.rail} bg-white/[0.04] p-7`}
          >
            <h3 className="font-heading font-bold text-xl text-white">{column.title}</h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {column.items.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-[1.55] text-cream/80">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-cream/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
