import { ShieldCheck, Lock, FileCheck2 } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "100% HIPAA Compliant" },
  { icon: FileCheck2, label: "GDPR & TCPA Ready" },
  { icon: Lock, label: "Secure Data Encryption" },
];

export default function RexCompliance() {
  return (
    <section className="bg-teal py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white text-balance">
          Legal Hygiene is Standard
        </h2>
        <p className="mt-4 text-white/70 leading-relaxed max-w-2xl mx-auto">
          Compliance isn&apos;t an afterthought. Rex automatically includes necessary call
          recording notices and adheres to TCPA regulations. Every call is logged, recorded, and
          transcribed for your records and liability protection.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((b) => (
            <span key={b.label} className="flex items-center gap-2 text-sm text-white/80">
              <b.icon className="size-4" />
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
