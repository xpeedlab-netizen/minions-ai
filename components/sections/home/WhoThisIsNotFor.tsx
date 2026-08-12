import { XCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Section, { SectionHeading } from "@/components/ui/Section";
import { WHO_THIS_IS_NOT_FOR } from "@/lib/data/site-content";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function WhoThisIsNotFor() {
  return (
    <Section tone="white" width="default">
      {/*
        Disqualifier panel. Previously a double-bordered cream box holding four more
        bordered white boxes — boxes inside boxes, the densest frame count on the page
        for what is really just a short list.
        Now one soft panel with hairline-divided rows: less drawing, same content.
      */}
      <div className="rounded-3xl border border-border bg-cream p-6 sm:p-10 lg:p-12">
        <SectionHeading className="mx-auto max-w-2xl text-center text-ink">
          {WHO_THIS_IS_NOT_FOR.heading}
        </SectionHeading>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-x-10 sm:grid-cols-2">
          {WHO_THIS_IS_NOT_FOR.reasons.map((reason, idx) => (
            <li key={idx} className="flex items-start gap-3 py-3.5">
              {/* Negative markers in coral, not teal — a teal X reads as a checkmark at a glance. */}
              <XCircle
                className="mt-0.5 size-[1.125rem] shrink-0 text-coral-text"
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-[0.9375rem] font-medium leading-[1.6] text-ink/75">
                {reason}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="mb-5 font-heading text-lg font-bold tracking-[-0.01em] text-ink">
            {WHO_THIS_IS_NOT_FOR.closing}
          </p>
          <Button href={BOOKING_CALENDAR_URL} showArrow>
            Book a 15-Minute Setup Call
          </Button>
        </div>
      </div>
    </Section>
  );
}
