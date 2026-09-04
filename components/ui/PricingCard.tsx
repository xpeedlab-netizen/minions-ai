import ServicePlanCard from "@/components/sections/pricing/ServicePlanCard";
import type { PricingPlan } from "@/lib/data/pricing";

/**
 * Unified PricingCard component matching the pricing page's ServicePlanCard exactly.
 */
export default function PricingCard({
  plan,
  analyticsLocation,
}: {
  plan: PricingPlan;
  analyticsLocation?: string;
}) {
  return <ServicePlanCard plan={plan} analyticsLocation={analyticsLocation} />;
}
