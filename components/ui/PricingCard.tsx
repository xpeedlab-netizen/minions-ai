import { Check } from "lucide-react";
import Button from "./Button";
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
      <h3 className="font-heading font-bold text-2xl">{plan.name}</h3>

      {plan.description && (
        <p
          className={`mt-2 text-xs leading-relaxed ${
            plan.popular ? "text-white/80" : "text-ink/65"
          }`}
        >
          {plan.description}
        </p>
      )}

      <div className="mt-4 pb-4 border-b border-current/10">
        <div className="flex items-baseline gap-1">
          {plan.price ? (
            <>
              <span className="font-mono text-3xl sm:text-4xl font-medium">{plan.price}</span>
              <span className={plan.popular ? "text-white/70" : "text-ink/60"}>/mo</span>
            </>
          ) : (
            <span className="font-mono text-3xl sm:text-4xl font-medium">Custom</span>
          )}
        </div>
        <p
          className={`text-xs mt-1 font-medium ${
            plan.popular ? "text-cream" : "text-teal"
          }`}
        >
          {plan.setupFee ? `+ ${plan.setupFee} one-time setup` : "Custom setup scope"}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
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
