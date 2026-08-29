import Image from "next/image";
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
  image,
  imageAlt = "",
}: {
  heading: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  hideSecondary?: boolean;
  /**
   * Optional closing illustration. Off by default so the crew, industry, and about
   * pages that render their own FinalCta variants are untouched; only the home page
   * opts in, where the image is the positive resolution of the pain the page opened on.
   */
  image?: string;
  imageAlt?: string;
}) {
  const copy = (
    <>
      <h2 className="text-balance font-heading text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-6 max-w-xl text-base leading-[1.6] text-white/75 sm:text-[1.0625rem]">
          {subtext}
        </p>
      )}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
    </>
  );

  return (
    <section className="relative overflow-hidden bg-teal py-20 sm:py-28">
      {/* Same bloom device as Proof — the two teal bands bookend the page, so they
          should share a treatment. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/2 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
      />

      {image ? (
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>{copy}</div>
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8 [&_h2]:text-balance [&_p]:mx-auto [&>div]:justify-center">
          {copy}
        </div>
      )}
    </section>
  );
}
