import { ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export default function RexCompliance() {
  return (
    <section className="bg-teal py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white text-balance">
          How Call Recording &amp; Consent Work
        </h2>
        <p className="mt-4 text-white/80 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg">
          Recording is configurable, and recording law varies by state — including two-party-consent states like California and Illinois. We&apos;ll set this up with you during onboarding so it matches the rules where you operate. We won&apos;t quietly switch it on and leave you to find out.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="flex items-center gap-2 text-sm text-white/90 font-medium">
            <ShieldCheck className="size-4 text-white" />
            Configurable State Consent
          </span>
          <span className="flex items-center gap-2 text-sm text-white/90 font-medium">
            <FileText className="size-4 text-white" />
            Onboarding Setup Support
          </span>
          <span className="flex items-center gap-2 text-sm text-white/90 font-medium">
            <CheckCircle2 className="size-4 text-white" />
            No Silent Activation
          </span>
        </div>
      </div>
    </section>
  );
}
