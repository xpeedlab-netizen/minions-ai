import Button from "@/components/ui/Button";
import PricingCard from "@/components/ui/PricingCard";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading } from "@/components/ui/Section";
import { pricingPlans } from "@/lib/data/pricing";

export default function PricingPreview() {
  return (
    <Section tone="cream" width="wide" density="feature">
      <SectionHeading className="text-ink text-center">
        Professional AI, predictable pricing.
      </SectionHeading>
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08} className="h-full">
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/pricing" variant="text" showArrow className="text-lg">
          See full pricing details
        </Button>
      </div>
    </Section>
  );
}
