export type CrewMember = {
  name: string;
  role: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
  accent: string;
};

export const crew: CrewMember[] = [
  {
    name: "Rex",
    role: "24/7 AI Voice Dispatcher",
    tagline: "Answers on the first ring 24/7. Quotes pricing & books jobs.",
    description:
      "Answers every incoming call in your company name, handles custom service Q&A, quotes accurate pricing, and books appointments straight to your calendar.",
    href: "/ai-voice-agent",
    image: "/images/mascots/rex.png",
    accent: "#0E5C63",
  },
  {
    name: "Zip",
    role: "5-Second Speed-to-Lead",
    tagline: "Responds in under 5 seconds before your competitor wakes up.",
    description:
      "Instantly sends an SMS text-back to missed callers and web leads in seconds, ensuring your business is always the first responder to seal the deal.",
    href: "/speed-to-lead",
    image: "/images/mascots/zip.png",
    accent: "#C4472A",
  },
  {
    name: "Pip",
    role: "24/7 Customer Support AI",
    tagline: "Instant answers for web & email inquiries 24 hours a day.",
    description:
      "Resolves customer FAQs, pricing questions, and service availability via web chat and email using only your verified business data.",
    href: "/customer-support-ai",
    image: "/images/mascots/pip.png",
    accent: "#3A6EA5",
  },
  {
    name: "Gia",
    role: "Automated CRM & Follow-ups",
    tagline: "Automates pipeline follow-ups, reminders & 5-star reviews.",
    description:
      "Keeps your pipeline organized on autopilot — sending appointment reminders, quote follow-ups, and review requests without extra manual work.",
    href: "/crm-automation",
    image: "/images/mascots/gia.png",
    accent: "#1B8A5A",
  },
  {
    name: "Otto",
    role: "Back-Office Workflow AI",
    tagline: "Eliminates repetitive data entry, client intake & paperwork.",
    description:
      "Automates client intake, document collection, and status updates so your team spends zero hours pushing administrative paperwork.",
    href: "/back-office-automation",
    image: "/images/mascots/otto.png",
    accent: "#2C3E50",
  },
];
