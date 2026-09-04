import { Check, Sparkles, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import DynamicPricingMonth from "@/components/ui/DynamicPricingMonth";
import type { PricingPlan } from "@/lib/data/pricing";

export default function ServicePlanCard({
  plan,
  /**
   * Which surface this card is rendered on, reported with its CTA click. Defaults to
   * the pricing page because that is where the card originated; the homepage preview
   * passes its own so the two can be told apart in GA4.
   */
  analyticsLocation = "pricing_page",
}: {
  plan: PricingPlan;
  analyticsLocation?: string;
}) {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative flex h-full flex-col justify-between rounded-3xl border p-8 transition-all ${
        isPopular
          ? "border-2 border-teal bg-teal text-white shadow-xl lg:-translate-y-2"
          : "border-border bg-white text-ink shadow-sm hover:shadow-md"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cream px-4 py-1 text-xs font-heading font-bold uppercase tracking-wider text-ink shadow-sm flex items-center gap-1.5">
          <Sparkles className="size-3 text-teal" />
          {plan.badge || "Most Popular"}
        </div>
      )}

      <div>
        {/* Date stamp on the rates. Kept identical in wording to the homepage card so a
            visitor moving between the two pages sees one label, not two claims. */}
        <span
          className={`mb-3 inline-flex w-fit items-center rounded-full px-2.5 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] ${
            isPopular ? "bg-white/15 text-cream" : "border border-border bg-cream text-teal"
          }`}
        >
          <DynamicPricingMonth />
        </span>

        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-2xl">{plan.name}</h3>
        </div>

        {plan.description && (
          <p
            className={`mt-2 text-xs sm:text-sm leading-relaxed min-h-[36px] ${
              isPopular ? "text-white/80" : "text-ink/65"
            }`}
          >
            {plan.description}
          </p>
        )}

        {/* Pricing Block */}
        <div
          className={`mt-6 rounded-2xl p-5 border ${
            isPopular
              ? "bg-white/10 border-white/20"
              : "bg-cream/60 border-border/80"
          }`}
        >
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase font-mono tracking-wider font-semibold opacity-75">
              One-Time Build
            </span>
            <div className="flex items-baseline gap-2">
              {plan.price ? (
                <>
                  {/* Anchor price from the approved proposal, struck through beside the
                      current figure. Do not invent one for a plan that has no anchor. */}
                  {plan.originalPrice && (
                    <span
                      className={`font-mono text-base line-through ${
                        isPopular ? "text-white/50" : "text-ink/40"
                      }`}
                    >
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold">
                    {plan.price}
                  </span>
                </>
              ) : (
                <span className="font-mono text-3xl sm:text-4xl font-extrabold">
                  Custom
                </span>
              )}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1 opacity-80">
              <Clock className="size-3.5" /> Turnaround:
            </span>
            <span
              className={`font-bold ${
                isPopular ? "text-cream" : "text-teal"
              }`}
            >
              {plan.turnaround || "3–6 weeks"}
            </span>
          </div>
        </div>

        {/* Feature List */}
        <div className="mt-8">
          <span
            className={`text-xs font-mono uppercase tracking-wider font-semibold block mb-4 ${
              isPopular ? "text-cream" : "text-ink/60"
            }`}
          >
            Included in your build:
          </span>
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <Check
                  className={`size-4 mt-0.5 shrink-0 ${
                    isPopular ? "text-cream" : "text-success"
                  }`}
                />
                <span className={isPopular ? "text-white/90" : "text-ink/80"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button CTA */}
      <div className="mt-8 pt-4">
        <Button
          href="/contact"
          variant={isPopular ? "primary" : "outline"}
          track={{
            event: "cta_click",
            params: { location: analyticsLocation, plan: plan.name },
          }}
          className={`w-full justify-center text-center font-heading font-bold ${
            isPopular ? "bg-cream text-ink hover:bg-white border-0" : ""
          }`}
        >
          {plan.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
