import { TRUST_BAR_TEXT } from "@/lib/data/site-content";

export default function TrustStrip() {
  return (
    <section className="bg-ink border-y border-ink/20 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-heading font-medium text-sm sm:text-base text-cream/90">
          {TRUST_BAR_TEXT}
        </p>
      </div>
    </section>
  );
}
