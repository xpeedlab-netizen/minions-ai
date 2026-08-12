import { XCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { WHO_THIS_IS_NOT_FOR } from "@/lib/data/site-content";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function WhoThisIsNotFor() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-border bg-white p-8 sm:p-12">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink text-center">
            {WHO_THIS_IS_NOT_FOR.heading}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {WHO_THIS_IS_NOT_FOR.reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-border bg-cream/50 p-4"
              >
                <XCircle className="size-5 text-teal shrink-0 mt-0.5" />
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
      </div>
    </section>
  );
}
