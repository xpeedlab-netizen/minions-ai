import Button from "@/components/ui/Button";

export default function ResultsFinalCta() {
  return (
    <section className="bg-[#E8E1DA] py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
          Ready for the real thing?
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg" showArrow>
            Become a founding client
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Talk to a Human
          </Button>
        </div>
        <p className="mt-5 font-mono text-xs text-ink/50">
          Only 4 Founding Slots remaining for Q4.
        </p>
      </div>
    </section>
  );
}
