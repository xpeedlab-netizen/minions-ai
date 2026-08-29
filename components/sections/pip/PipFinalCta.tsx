import Button from "@/components/ui/Button";
import { TUNING_WINDOW } from "@/lib/data/site-content";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function PipFinalCta() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-heading font-bold text-3xl sm:text-5xl leading-tight text-balance">
          Turn Your Website Into a 24/7 Revenue-Capturing Front Desk.
        </h2>
        <p className="mt-4 text-cream/80 text-lg max-w-xl mx-auto leading-relaxed">
          Add Pip&apos;s grounded website chat assistant to your build for $900 — he reuses the knowledge base and CRM mapping built for Rex, so he ships in the same cycle. A 30-day tuning window is included, with no long-term contract.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4">
          <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow>
            Add Pip To Your Build
          </Button>
          <Button
            href="/pricing"
            variant="outline"
            size="lg"
            className="!border-white !text-white hover:!bg-white/10"
          >
            See Pricing Plans
          </Button>
        </div>
        <p className="mt-6 font-mono text-xs text-cream/60 font-medium">
          {TUNING_WINDOW.short}
        </p>
      </div>
    </section>
  );
}
