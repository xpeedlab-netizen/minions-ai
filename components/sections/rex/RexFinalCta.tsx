import Button from "@/components/ui/Button";
import { GUARANTEE } from "@/lib/data/site-content";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function RexFinalCta() {
  return (
    <section className="bg-teal py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-heading font-bold text-3xl sm:text-5xl leading-tight text-balance">
          Stop Leaving Your Business&apos;s Phone Line to Chance.
        </h2>
        <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
          Deploy Rex on your phone line in about 7 days. Backed by a 100% 30-day money-back guarantee with zero contract risk.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow>
            Book Your 15-Minute Setup Call
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
        <p className="mt-6 font-mono text-xs text-white/70 font-medium">
          {GUARANTEE.short}
        </p>
      </div>
    </section>
  );
}
