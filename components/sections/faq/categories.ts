export const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: "HelpCircle" },
  { id: "ai-experience", label: "AI Voice & Experience", icon: "Headset" },
  { id: "setup-tech", label: "Setup & CRMs", icon: "SlidersHorizontal" },
  { id: "pricing-contracts", label: "Pricing & Terms", icon: "Receipt" },
  { id: "compliance-safety", label: "Compliance & Safety", icon: "ShieldCheck" },
  { id: "the-team", label: "Founders & Support", icon: "Users" },
] as const;

export type FaqCategoryId = (typeof FAQ_CATEGORIES)[number]["id"];

export const faqCategories = FAQ_CATEGORIES;

