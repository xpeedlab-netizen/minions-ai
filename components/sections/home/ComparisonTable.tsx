import { Check, X, Minus } from "lucide-react";
import { pricingPlans } from "@/lib/data/pricing";

const features = [
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

export default function ComparisonTable() {
  const starterPrice = pricingPlans[0].price || "$299";

  const renderIcon = (type: string) => {
    if (type === "check") return <Check className="size-5 text-teal shrink-0" />;
    if (type === "cross") return <X className="size-5 text-coral shrink-0" />;
    return <Minus className="size-5 text-ink/40 shrink-0" />;
  };

  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Why Service Contractors Are Replacing Call Centers with Minions.AI
          </h2>
        </div>

        <div className="relative overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr>
                <th className="p-4 sm:p-6 w-1/4"></th>
                <th className="p-4 sm:p-6 w-1/4 text-lg font-heading font-bold text-ink">Traditional Answering Service</th>
                <th className="p-4 sm:p-6 w-1/4 text-lg font-heading font-bold text-ink">Voicemail</th>
                <th className="p-4 sm:p-6 w-1/4 text-lg font-heading font-bold text-teal bg-white rounded-t-2xl border-t border-x border-border shadow-sm">
                  Rex (Minions.AI)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {features.map((f) => (
                <tr key={f.name}>
                  <td className="p-4 sm:p-6 font-medium text-ink/80">{f.name}</td>
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
                  <td className="p-4 sm:p-6 text-ink font-medium bg-white border-x border-border shadow-sm">
                    <div className="flex items-center gap-3">
                      {renderIcon(f.rex.type)}
                      {f.rex.text}
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-4 sm:p-6 font-medium text-ink/80 border-b border-border">Typical cost per month</td>
                <td className="p-4 sm:p-6 text-ink/70 border-b border-border">
                  Ongoing per-minute or per-call fees
                </td>
                <td className="p-4 sm:p-6 text-ink/70 border-b border-border">
                  Free
                </td>
                <td className="p-4 sm:p-6 text-ink font-bold bg-white rounded-b-2xl border-b border-x border-border shadow-sm">
                  Flat monthly, from {starterPrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
