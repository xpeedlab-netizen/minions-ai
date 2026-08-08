import Button from "@/components/ui/Button";
import PricingCard from "@/components/ui/PricingCard";
import Reveal from "@/components/ui/Reveal";
import { pricingPlans } from "@/lib/data/pricing";

export default function PricingPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance text-center">
          Professional AI, predictable pricing.
        </h2>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/pricing" variant="text" showArrow className="text-lg">
            See full pricing details
          </Button>
        </div>
      </div>
    </section>
  );
}
