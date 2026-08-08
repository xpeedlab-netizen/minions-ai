import Button from "@/components/ui/Button";

export default function PlumbingFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-teal-dark p-10 sm:p-14 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white text-balance">
            Stop losing emergency jobs to the &quot;First Answer&quot; gap.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-2xl mx-auto">
            Apply for our Founding Client Offer. We&apos;ll run a free ROI Audit on your current
            call volume to show you exactly how many leads Rex would have saved last month.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" showArrow>
              Claim Founding Offer
            </Button>
            <Button
              href="/live-demo"
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-white/40">
            Limited to 10 plumbing companies per state
          </p>
        </div>
      </div>
    </section>
  );
}
