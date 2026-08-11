export type PricingPlan = {
  name: string;
  price: string | null;
  minutes: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Crew",
    price: "$299",
    minutes: "50 Minutes Included",
    features: ["50 Minutes Included", "Basic Scheduling", "After-Hours Only"],
    ctaLabel: "Start Starter",
  },
  {
    name: "Full Crew",
    price: "$799",
    minutes: "200 Minutes Included",
    popular: true,
    features: [
      "200 Minutes Included",
      "Done-For-You CRM Setup",
      "24/7 Coverage",
      "Outbound Confirmations",
    ],
    ctaLabel: "Get Full Crew",
  },
  {
    name: "Commercial Crew",
    price: null,
    minutes: "Unlimited Minutes",
    features: ["Unlimited Minutes", "Multi-Location Support", "Custom Call Workflows"],
    ctaLabel: "Talk to Sales",
  },
];

export const pricingFaq = [
  {
    q: "Is there a contract?",
    a: "Month-to-month. We'd rather earn it every month.",
  },
  {
    q: "What if I go over my minutes?",
    a: "We'll give you a heads up before you hit your limit, then it's a fair per-minute rate. No penalties.",
  },
  { q: "Do you charge per call?", a: "No. Flat monthly." },
  { q: "Can I change plans?", a: "Any time, up or down." },
  {
    q: "What does the Commercial Crew include?",
    a: "Unlimited minutes, multi-location support, and custom call workflows for larger operations. Talk to sales for a plan built around your business.",
  },
];
