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
  if (type === "check") return <Check className="size-5 text-teal shrink-0" aria-hidden />;
  if (type === "cross") return <X className="size-5 text-coral-text shrink-0" aria-hidden />;
  return <Minus className="size-5 text-ink/40 shrink-0" aria-hidden />;
}

export default function ComparisonTable() {
  const starterPrice = pricingPlans[0].price || "$299";

  const costRow = {
    name: "Typical cost per month",
    service: "Ongoing per-minute or per-call fees",
    voicemail: "Free",
    rex: `Flat monthly, from ${starterPrice}`,
  };

  const columns = [
    { key: "service" as const, label: "Traditional Answering Service" },
    { key: "voicemail" as const, label: "Voicemail" },
    { key: "rex" as const, label: "Rex (Minions.AI)" },
  ];

  return (
    <Section tone="white" width="wide">
      <SectionHeading className="text-ink text-center max-w-3xl mx-auto">
        Why Service Contractors Are Replacing Call Centers with Minions.AI
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
              <th className="p-4 sm:p-6 w-1/4 text-lg font-heading font-bold text-ink">
                Traditional Answering Service
              </th>
              <th className="p-4 sm:p-6 w-1/4 text-lg font-heading font-bold text-ink">
                Voicemail
              </th>
              <th className="p-4 sm:p-6 w-1/4 text-lg font-heading font-bold text-teal bg-cream rounded-t-2xl border-t border-x border-border shadow-sm">
                Rex (Minions.AI)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {features.map((f) => (
              <tr key={f.name}>
                <th scope="row" className="p-4 sm:p-6 font-medium text-ink/80 text-left">
                  {f.name}
                </th>
                <td className="p-4 sm:p-6 text-ink/70">
                  <div className="flex items-center gap-3">
                    {renderIcon(f.service.type)}
                    {f.service.text}
                  </div>
                </td>
                <td className="p-4 sm:p-6 text-ink/70">
                  <div className="flex items-center gap-3">
                    {renderIcon(f.voicemail.type)}
                    {f.voicemail.text}
                  </div>
                </td>
                <td className="p-4 sm:p-6 text-ink font-medium bg-cream border-x border-border shadow-sm">
                  <div className="flex items-center gap-3">
                    {renderIcon(f.rex.type)}
                    {f.rex.text}
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row" className="p-4 sm:p-6 font-medium text-ink/80 border-b border-border text-left">
                {costRow.name}
              </th>
              <td className="p-4 sm:p-6 text-ink/70 border-b border-border">{costRow.service}</td>
              <td className="p-4 sm:p-6 text-ink/70 border-b border-border">{costRow.voicemail}</td>
              <td className="p-4 sm:p-6 text-ink font-bold bg-cream rounded-b-2xl border-b border-x border-border shadow-sm">
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
                  ? "border-teal bg-cream shadow-sm"
                  : "border-border bg-white"
              }`}
            >
              <h3
                className={`font-heading font-bold text-lg ${
                  isRex ? "text-teal" : "text-ink"
                }`}
              >
                {col.label}
              </h3>

              <dl className="mt-4 space-y-3">
                {features.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-start justify-between gap-4 border-t border-border pt-3"
                  >
                    <dt className="text-sm font-medium text-ink/70 shrink-0">{f.name}</dt>
                    <dd className="flex items-center gap-2 text-sm text-ink text-right">
                      <span>{f[col.key].text}</span>
                      {renderIcon(f[col.key].type)}
                    </dd>
                  </div>
                ))}
                <div className="flex items-start justify-between gap-4 border-t border-border pt-3">
                  <dt className="text-sm font-medium text-ink/70 shrink-0">Cost / month</dt>
                  <dd
                    className={`text-sm text-right ${
                      isRex ? "text-ink font-bold" : "text-ink/70"
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
