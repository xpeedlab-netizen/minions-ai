import Button from "@/components/ui/Button";

export default function GiaFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#E8E1DA] p-10 sm:p-16 text-center shadow-sm">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Stop Fighting Your CRM. Start Winning More Jobs.
          </h2>
          <p className="mt-4 text-ink/70 text-lg max-w-xl mx-auto">
            Join 200+ contractors who use Gia to keep their pipelines full and their schedules
            organized.
          </p>
          <Button href="/contact" size="lg" showArrow className="mt-8">
            Book a free CRM audit
          </Button>
        </div>
      </div>
    </section>
  );
}
