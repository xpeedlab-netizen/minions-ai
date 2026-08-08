import Button from "@/components/ui/Button";

export default function RexFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#E8E1DA] p-10 sm:p-16 text-center shadow-sm">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Stop losing jobs to your competitors&apos; voicemail.
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Put Rex on the front lines and start booking jobs while you sleep.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/live-demo" size="lg" showArrow>
              Hear Rex Now
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a Strategy Call
            </Button>
          </div>
          <p className="mt-5 font-mono text-xs text-ink/50">
            No long-term contracts. 14-day performance guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
