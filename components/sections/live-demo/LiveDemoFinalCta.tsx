import Button from "@/components/ui/Button";

export default function LiveDemoFinalCta() {
  return (
    <section className="bg-[#E8ECE8] py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
          Like what you heard? We&apos;ll build one trained on your business, free.
        </h2>
        <Button href="/contact" size="lg" className="mt-8">
          Book a call
        </Button>
      </div>
    </section>
  );
}
