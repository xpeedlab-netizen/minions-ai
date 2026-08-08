import Button from "@/components/ui/Button";

export default function ElectricalFinalCta() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
          Ready to never miss another emergency call?
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/live-demo" size="lg">
            Hear Rex Handle a Call
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
