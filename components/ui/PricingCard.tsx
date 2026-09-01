import ServicePlanCard from "@/components/sections/pricing/ServicePlanCard";
import type { PricingPlan } from "@/lib/data/pricing";

/**
 * Unified PricingCard component matching the pricing page's ServicePlanCard exactly.
 */
export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return <ServicePlanCard plan={plan} />;
}
