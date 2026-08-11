import { ShieldCheck } from "lucide-react";
import { GUARANTEE } from "@/lib/data/site-content";

export default function GuaranteeSection() {
  return (
    <section className="bg-ink py-16 sm:py-24 border-y border-ink/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-transparent opacity-50" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal/20 text-teal mb-8">
          <ShieldCheck className="size-8" />
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
          {GUARANTEE.heading}
        </h2>
        <p className="mt-6 text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto">
          {GUARANTEE.body}
        </p>
        <p className="mt-8 font-mono text-sm text-teal font-bold uppercase tracking-wide">
          {GUARANTEE.days}-Day Guarantee
        </p>
      </div>
    </section>
  );
}
