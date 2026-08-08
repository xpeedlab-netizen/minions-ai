export type FaqItem = { q: string; a: string };

export const homeFaq: FaqItem[] = [
  {
    q: "Will it sound like a robot?",
    a: "No. It sounds natural and responds in about half a second, so there's no awkward pause. Don't take our word for it — talk to it on our demo page and judge for yourself.",
  },
  {
    q: "Will my customers know it's AI?",
    a: "Most don't notice. What they notice is that someone answered quickly, was polite, and knew the answer. If a caller asks directly, it's honest about being an automated assistant.",
  },
  {
    q: "What if it can't answer something?",
    a: "It only answers from information you've approved. If it doesn't know, it says so and either takes a message or transfers the caller to you.",
  },
  { q: "How long does setup take?", a: "About a week from our first call to going live." },
  {
    q: "What does it cost?",
    a: "Flat monthly plans from $497, plus a one-time setup fee. Full details on our pricing page.",
  },
];

export const fullFaq: FaqItem[] = [
  ...homeFaq,
  { q: "Is there a contract?", a: "Month-to-month after setup." },
  {
    q: "Can it transfer urgent calls to me?",
    a: "Yes. You set the rules. \"No heat\" or \"burst pipe\" can ring your phone directly, with a summary of what the caller said before you even say hello.",
  },
  {
    q: "Do I have to be technical?",
    a: "Not at all. It's fully done-for-you. You forward your calls — a two-minute step we walk you through — and we handle everything else.",
  },
  {
    q: "What about call recording and privacy?",
    a: "Every call can open with a short \"this call may be recorded\" notice, which keeps you compliant in every state including two-party consent states like California and Illinois. Your data stays in your own CRM.",
  },
  {
    q: "Is it legal to use AI on phone calls?",
    a: "Yes. Inbound answering is low-risk. If you want outbound calling, we set up proper consent and do-not-call handling with you first — that part matters and we don't cut corners on it.",
  },
  {
    q: "What if my customers have strong accents, or speak Spanish?",
    a: "It handles a wide range of US regional accents and speaks 30+ languages, switching automatically to the caller's language.",
  },
  {
    q: "You're a new company, and offshore. Why should I trust you?",
    a: "Fair question. You work directly with the founders, month-to-month, and we build a live demo on your business before you pay anything. Judge us on what you hear.",
  },
  {
    q: "What happens if it goes down?",
    a: "Calls fall back to your existing voicemail or forwarding, so you're never worse off than you are today. The platform targets 99.99% uptime.",
  },
  {
    q: "Can I keep my current phone number?",
    a: "Yes. You keep your number and simply forward calls to the crew.",
  },
];
