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
    <section className="relative overflow-hidden bg-teal py-20 sm:py-28">
      {/* Same bloom device as Proof — the two teal bands bookend the page, so they
          should share a treatment. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/2 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-heading text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        {subtext && (
          <p className="mx-auto mt-6 max-w-xl text-base leading-[1.6] text-white/75 sm:text-[1.0625rem]">
            {subtext}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
