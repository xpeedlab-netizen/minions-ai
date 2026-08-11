import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function FinalCta({
  heading,
  subtext,
  primaryLabel = "Book a 15-minute call",
  primaryHref = BOOKING_CALENDAR_URL,
  secondaryLabel = "Contact Support",
  secondaryHref = "/contact",
  hideSecondary = false,
}: {
  heading: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  hideSecondary?: boolean;
}) {
  return (
    <section className="bg-teal py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight text-balance">
          {heading}
        </h2>
        {subtext && <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">{subtext}</p>}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} size="lg" showArrow>
            {primaryLabel}
          </Button>
          {!hideSecondary && (
            <Button
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white/10"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
