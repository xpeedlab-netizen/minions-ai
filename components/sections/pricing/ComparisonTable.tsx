/**
 * Voicemail vs answering service vs Minions.
 *
 * Moved off the homepage on 2026-09-04: a text table sitting next to the price cards is
 * the same shape twice, and the category comparison belongs at the moment a visitor is
 * already comparing — which is here, not three bands before the price.
 */
import { Check, X, Minus } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import { pricingPlans } from "@/lib/data/pricing";

type Cell = { text: string; type: "check" | "cross" | "minus" };

const features: { name: string; service: Cell; voicemail: Cell; rex: Cell }[] = [
  {
    name: "Answers 24/7",
    service: { text: "Yes", type: "check" },
    voicemail: { text: "Yes", type: "check" },
    rex: { text: "Yes", type: "check" },
  },
  {
    name: "Hold time",
    service: { text: "Yes, during peak hours", type: "minus" },
    voicemail: { text: "None", type: "check" },
    rex: { text: "None, answers instantly", type: "check" },
  },
  {
    name: "Knows your prices",
    service: { text: "Rarely (reads a script)", type: "minus" },
    voicemail: { text: "No", type: "cross" },
    rex: { text: "Yes, trained on your data", type: "check" },
  },
  {
    name: "Books the job directly",
    service: { text: "No (takes a message)", type: "cross" },
    voicemail: { text: "No", type: "cross" },
    rex: { text: "Yes, into Google Calendar", type: "check" },
  },
];

function renderIcon(type: Cell["type"]) {
  /*
   * The lightened `-on-dark` tokens, not the brand ones. On the ink ground `text-teal`
   * (#0e5c63) is roughly 1.5:1 and `text-coral-text` (#c43d1e) little better — the same
   * invisibility the Eyebrow component documents. The brand tokens themselves are
   * untouched, per invariants.md #8.
   */
  if (type === "check")
    return <Check className="size-5 shrink-0 text-crew-gia-on-dark" aria-hidden />;
  if (type === "cross")
    return <X className="size-5 shrink-0 text-crew-zip-on-dark" aria-hidden />;
  return <Minus className="size-5 shrink-0 text-white/40" aria-hidden />;
}

export default function ComparisonTable() {
  // Core Crew is a ONE-TIME build fee, not a monthly rate. This column used to read
  // "Flat monthly, from <price>", which turned the build fee into a subscription.
  const corePrice = pricingPlans[0].price || "$2,500";

  const costRow = {
    name: "Typical cost per month",
    service: "Ongoing per-minute or per-call fees",
    voicemail: "Free",
    rex: `One-time build, from ${corePrice}`,
  };

  const columns = [
    { key: "service" as const, label: "Traditional Answering Service" },
    { key: "voicemail" as const, label: "Voicemail" },
    { key: "rex" as const, label: "Minions.AI" },
  ];

  return (
    <Section tone="ink" width="wide">
      <SectionHeading className="text-white text-center max-w-3xl mx-auto">
        Why owners replace call centres and voicemail with Minions.AI
      </SectionHeading>

      {/*
        Desktop: the real table. Below sm it used to force a 700px horizontal scroll —
        breaking the highest-intent comparison moment on the majority device — so the
        small screens get a stacked card per column instead.
      */}
      <div className="mt-12 hidden sm:block">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 sm:p-6 w-1/4"></th>
              <th className="p-4 sm:p-6 w-1/4 font-heading text-base font-bold tracking-[-0.01em] text-cream/70">
                Traditional Answering Service
              </th>
              <th className="p-4 sm:p-6 w-1/4 font-heading text-base font-bold tracking-[-0.01em] text-cream/70">
                Voicemail
              </th>
              <th className="p-4 sm:p-6 w-1/4 font-heading text-base font-bold tracking-[-0.01em] text-white bg-white/10 rounded-t-2xl border-t border-x border-white/15">
                Rex (Minions.AI)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {features.map((f) => (
              <tr key={f.name}>
                <th scope="row" className="p-4 sm:p-6 text-[0.9375rem] font-medium text-cream/80 text-left">
                  {f.name}
                </th>
                <td className="p-4 sm:p-6 text-[0.9375rem] text-cream/60">
                  <div className="flex items-center gap-3">
                    {renderIcon(f.service.type)}
                    {f.service.text}
                  </div>
                </td>
                <td className="p-4 sm:p-6 text-[0.9375rem] text-cream/60">
                  <div className="flex items-center gap-3">
                    {renderIcon(f.voicemail.type)}
                    {f.voicemail.text}
                  </div>
                </td>
                <td className="p-4 sm:p-6 text-[0.9375rem] text-white font-medium bg-white/10 border-x border-white/15">
                  <div className="flex items-center gap-3">
                    {renderIcon(f.rex.type)}
                    {f.rex.text}
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row" className="p-4 sm:p-6 font-medium text-cream/80 border-b border-white/10 text-left">
                {costRow.name}
              </th>
              <td className="p-4 sm:p-6 text-[0.9375rem] text-cream/60 border-b border-white/10">{costRow.service}</td>
              <td className="p-4 sm:p-6 text-[0.9375rem] text-cream/60 border-b border-white/10">{costRow.voicemail}</td>
              <td className="p-4 sm:p-6 text-[0.9375rem] text-white font-bold bg-white/10 rounded-b-2xl border-b border-x border-white/15">
                {costRow.rex}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile: one card per option, features as rows. No horizontal scroll. */}
      <div className="mt-10 space-y-4 sm:hidden">
        {columns.map((col) => {
          const isRex = col.key === "rex";
          return (
            <div
              key={col.key}
              className={`rounded-2xl border p-5 ${
                isRex
                  ? "border-white/25 bg-white/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <h3
                className={`font-heading font-bold text-lg ${
                  isRex ? "text-white" : "text-cream/80"
                }`}
              >
                {col.label}
              </h3>

              <dl className="mt-4 space-y-3">
                {features.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-start justify-between gap-4 border-t border-white/10 pt-3"
                  >
                    <dt className="text-sm font-medium text-cream/65 shrink-0">{f.name}</dt>
                    <dd className="flex items-center gap-2 text-sm text-cream text-right">
                      <span>{f[col.key].text}</span>
                      {renderIcon(f[col.key].type)}
                    </dd>
                  </div>
                ))}
                <div className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
                  <dt className="text-sm font-medium text-cream/65 shrink-0">Cost / month</dt>
                  <dd
                    className={`text-sm text-right ${
                      isRex ? "text-white font-bold" : "text-cream/65"
                    }`}
                  >
                    {costRow[col.key]}
                  </dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
