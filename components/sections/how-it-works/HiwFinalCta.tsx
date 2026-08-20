import { CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HiwFinalCta() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal text-balance">
          Ready to get your week back?
        </h2>
        <p className="mt-4 text-ink/70 text-lg">
          Take 15 minutes to find out if Minions.AI is the right fit for your service business.
        </p>
        <Button href="/contact" size="lg" className="mt-8">
          <CalendarCheck className="size-4" />
          Book your discovery call
        </Button>
      </div>
    </section>
  );
}
