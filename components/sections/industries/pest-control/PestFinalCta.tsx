import { Bug } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PestFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-10 sm:p-14 text-center shadow-sm">
          <Bug className="absolute top-6 right-6 size-10 text-ink/10" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-teal-dark text-balance">
            Stop letting seasonal leads crawl away.
          </h2>
          <p className="mt-4 text-ink/70 text-lg max-w-xl mx-auto">
            Ready to see how much revenue you&apos;re leaving on the table? Our audit analyzes your
            call logs and missed lead data.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" showArrow>
              Get a Pest-Season ROI Audit
            </Button>
            <Button href="/live-demo" variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
