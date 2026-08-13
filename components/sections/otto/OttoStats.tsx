import { ShieldCheck, FileCheck, Send, Lock } from "lucide-react";

const items = [
  {
    value: "0",
    unit: "Hours",
    label: "Manual Paperwork Entry",
    sub: "Every form & PDF auto-extracted",
    icon: FileCheck,
  },
  {
    value: "< 24h",
    unit: "Intake",
    label: "Client Onboarding Time",
    sub: "Automated digital intake flows",
    icon: Send,
  },
  {
    value: "100%",
    unit: "Automated",
    label: "Document Chasing Engine",
    sub: "Polite SMS reminders for missing files",
    icon: ShieldCheck,
  },
  {
    value: "100%",
    unit: "Protected",
    label: "NDA & Privacy Compliant",
    sub: "Bank-grade encrypted file routing",
    icon: Lock,
  },
];

export default function OttoStats() {
  return (
    <section className="bg-cream-dark/60 py-12 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((s) => (
            <div
              key={s.label}
              className="relative rounded-2xl border border-border/80 bg-white p-5 shadow-xs hover:border-teal/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <s.icon className="size-4.5" />
                </span>
                <span className="font-mono text-[10px] font-bold text-teal uppercase tracking-wider bg-teal/10 px-2 py-0.5 rounded-full">
                  {s.unit}
                </span>
              </div>
              <p className="mt-4 font-mono text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 font-heading font-bold text-sm text-ink">{s.label}</p>
              <p className="mt-1 font-mono text-[11px] text-ink/60">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
