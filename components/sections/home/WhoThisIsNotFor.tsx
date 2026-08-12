import { XCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Section, { SectionHeading } from "@/components/ui/Section";
import { WHO_THIS_IS_NOT_FOR } from "@/lib/data/site-content";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function WhoThisIsNotFor() {
  return (
    <Section tone="white" width="default">
      <div className="rounded-3xl border-2 border-border bg-cream p-8 sm:p-12">
        <SectionHeading className="text-ink text-center">
          {WHO_THIS_IS_NOT_FOR.heading}
        </SectionHeading>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {WHO_THIS_IS_NOT_FOR.reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4"
            >
              {/* Negative markers in coral, not teal — a teal X reads as a checkmark at a glance. */}
              <XCircle className="size-5 text-coral-text shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-ink/80 leading-relaxed font-medium">{reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="font-heading font-bold text-ink text-base mb-4">
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
