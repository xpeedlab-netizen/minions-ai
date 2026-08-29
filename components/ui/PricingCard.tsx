import { Check } from "lucide-react";
import Button from "./Button";
import { currentPricingMonth } from "@/lib/current-month";
import type { PricingPlan } from "@/lib/data/pricing";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-8 ${
        plan.popular
          ? "border-teal bg-teal text-white shadow-lg lg:-translate-y-2"
          : "border-border bg-white text-ink"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cream px-4 py-1 text-sm font-heading font-bold text-ink">
          {plan.badge || "Most popular"}
        </span>
      )}
      {/* Sits INSIDE the card above the name rather than pinned to a corner: the popular
          card already carries a badge at -top-3, and a second floating chip collided with
          it below sm. Same reason it is left-ranged — it reads as a date stamp on the
          figures below, not as a second award ribbon. */}
      <span
        className={`mb-3 inline-flex w-fit items-center rounded-full px-2.5 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] ${
          plan.popular ? "bg-white/15 text-cream" : "border border-border bg-cream text-teal"
        }`}
      >
        {currentPricingMonth()} pricing
      </span>

      <h3 className="font-heading font-bold text-2xl">{plan.name}</h3>

      {plan.description && (
        <p
          className={`mt-2 text-[0.9375rem] leading-relaxed ${
            plan.popular ? "text-white/80" : "text-ink/65"
          }`}
        >
          {plan.description}
        </p>
      )}

      <div className="mt-4 pb-4 border-b border-current/10">
        {/* THIS IS A ONE-TIME FEE, NOT A SUBSCRIPTION. This block used to append "/mo" to
            plan.price, which quoted the whole build as a monthly rate. There is no monthly
            charge in a package: ongoing care is optional, starts at $297, and is only
            raised at the 30-day review. Do not reintroduce a "/mo" suffix here. */}
        <div className="flex items-baseline gap-2">
          {plan.price ? (
            <>
              {plan.originalPrice && (
                <span
                  className={`font-mono text-lg line-through ${
                    plan.popular ? "text-white/50" : "text-ink/40"
                  }`}
                >
                  {plan.originalPrice}
                </span>
              )}
              <span className="font-mono text-3xl sm:text-4xl font-medium">{plan.price}</span>
            </>
          ) : (
            <span className="font-mono text-3xl sm:text-4xl font-medium">Custom</span>
          )}
        </div>
        <p
          className={`mt-1 text-sm font-medium ${
            plan.popular ? "text-cream" : "text-teal"
          }`}
        >
          {plan.setupFee || "Custom scope"}
          {plan.turnaround ? ` · ${plan.turnaround}` : ""}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.9375rem]">
            <Check
              className={`size-4 mt-0.5 shrink-0 ${
                plan.popular ? "text-cream" : "text-success"
              }`}
            />
            <span className={plan.popular ? "text-white/90" : "text-ink/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={plan.popular ? "primary" : "outline"}
        className="mt-6 w-full"
      >
        {plan.ctaLabel}
      </Button>
    </div>
  );
}
