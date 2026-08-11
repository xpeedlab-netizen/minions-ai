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
    role: "AI Voice Agent",
    tagline: "Unflappable. Answers on the first ring, every time.",
    description:
      "Answers every call in your business's name, books the job, and transfers the urgent ones straight to you.",
    href: "/ai-voice-agent",
    image: "/images/rex-mascot.jpg",
    accent: "#0E5C63",
  },
  {
    name: "Zip",
    role: "Speed-to-Lead",
    tagline: "Fastest one on the crew. Already gone before you finish the sentence.",
    description:
      "Texts back every missed call and web lead in seconds, so you're the first one they hear from.",
    href: "/speed-to-lead",
    image: "/images/zip-mascot.jpg",
    accent: "#C4472A",
  },
  {
    name: "Pip",
    role: "Customer Support AI",
    tagline: "Patient. Will answer the same question at 2am without sighing.",
    description:
      "Answers customer questions by chat and email, day and night, using your own information.",
    href: "/customer-support-ai",
    image: "/images/pip-mascot.jpg",
    accent: "#3A6EA5",
  },
  {
    name: "Gia",
    role: "CRM Automation",
    tagline: "The organised one. Nothing falls through her cracks.",
    description:
      "Keeps your CRM tidy — follow-ups, reminders, review requests, all on autopilot.",
    href: "/crm-automation",
    image: "/images/gia-mascot.jpg",
    accent: "#1B8A5A",
  },
  {
    name: "Otto",
    role: "Back-Office Automation",
    tagline: "Quiet. The paperwork is just… done.",
    description:
      "Handles the paperwork — intake, documents, and data entry — for busy offices.",
    href: "/back-office-automation",
    image: "/images/otto-mascot.jpg",
    accent: "#2C3E50",
  },
];
