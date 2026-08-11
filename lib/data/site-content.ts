/**
 * SINGLE SOURCE OF TRUTH FOR ALL SITE CLAIMS, STATS, AND APPROVED COPY.
 *
 * Every statistic, guarantee term, setup promise, founder story, FAQ, and trust line
 * MUST be imported from this file. Do NOT hardcode inline claims in components.
 */

export const SETUP_TIME_PROMISE = "About a week";

export const GUARANTEE = {
  days: 30,
  heading: "If it doesn't book you jobs, don't pay for it.",
  body: "Try the crew for 30 days. If it hasn't booked you work you'd otherwise have missed, we refund the month and help you forward your line back. No contract, no cancellation fee, no argument.",
  short: "No contract · Live in about a week · 30-day guarantee",
};

export const TRUST_BAR_TEXT = "New company. Month-to-month. 30-day guarantee. You can stop any time — that's the deal.";

export const PROOF_STATS = [
  {
    stat: "100×",
    description: "more likely to reach the customer if you respond in 5 minutes instead of 30.",
    source: "MIT / InsideSales Lead Response Study, 2007",
  },
  {
    stat: "21×",
    description: "more likely to qualify that lead once you reach it.",
    source: "MIT / InsideSales Lead Response Study, 2007",
  },
  {
    stat: "42 hours",
    description: "the average company's first response time to an inbound lead, across 2,241 companies studied. Many never respond at all.",
    source: "Harvard Business Review, \"The Short Life of Online Sales Leads,\" 2011",
  },
];

export const PROOF_STATS_CLOSING = "Your crew answers in seconds.";

export const FOUNDER_STORY = {
  pullQuote: "We aren't a Silicon Valley software factory.",
  heading: "Built by two engineers who got tired of watching good businesses lose good jobs.",
  body: "We're not contractors, and we're not going to pretend to be — we're software people. What we kept seeing was small shops spending real money to make the phone ring, then losing half those calls because the owner was up a ladder with both hands full. Nobody was fixing that for teams under ten techs. So we did.",
  attribution: "Rakib & Parvej, Co-founders",
};

export const HONEST_TRUTH = {
  heading: "The Honest Truth",
  body: "We're new, and we're not going to pretend otherwise. We don't have a thousand reviews or a wall of client logos yet. What we do have is a system that works, a month-to-month agreement you can walk away from, and a 30-day guarantee — so the most this can cost you is one month. Judge us on what we build for you in week one, not on a testimonial we could have written ourselves.",
};

export const INTEGRATION_COPY = {
  calendar: "Books straight into your Google Calendar.",
  phone: "Keep your number — you forward your line to us. Takes about two minutes.",
  crm: "We set up and run the CRM for you — pipeline, follow-ups, reminders, review requests.",
};

export const APPROVED_FAQS = [
  {
    id: "sound-like-robot",
    q: "Will it sound like a robot?",
    a: "It's an AI and we won't pretend otherwise. It answers immediately, holds a normal back-and-forth, and handles interruptions. Before you go live, you'll hear real test calls and sign off — if it doesn't sound right to you, it doesn't go on your line.",
  },
  {
    id: "know-its-ai",
    q: "Will my customers know it's AI?",
    a: "Some will, some won't. What they will notice is that someone picked up straight away and knew the answer. If a caller asks directly whether they're talking to an AI, it tells them the truth.",
  },
  {
    id: "wrong-price",
    q: "What if it says the wrong price?",
    a: "It only says what you've approved. We build it from your pricing and your services, you review it before launch, and you can have it changed any time.",
  },
  {
    id: "if-it-breaks",
    q: "What if it breaks?",
    a: "Calls fall back to your existing voicemail. You are never worse off than you are today — the worst case is the situation you're already in.",
  },
  {
    id: "change-number",
    q: "Do I have to change my number?",
    a: "No. You keep your number and forward it to us. It takes about two minutes and we walk you through it.",
  },
  {
    id: "how-long-setup",
    q: "How long until it's running?",
    a: "About a week. Most of that is us learning your services, your pricing and your service area properly, rather than handing you a generic bot.",
  },
  {
    id: "calls-recorded",
    q: "Are my calls recorded?",
    a: "Recording is configurable, and recording law varies by state — including two-party-consent states like California and Illinois. We'll set this up with you during onboarding so it matches the rules where you operate. We won't quietly switch it on and leave you to find out.",
  },
  {
    id: "why-trust-you",
    q: "You're new, and you're a small team overseas — why should I trust you?",
    a: "Fair question. Here's the honest answer: you work directly with the two of us, not a rep. It's month-to-month with a 30-day guarantee. And you get to hear the thing working before you commit. That's the only case we can make right now, so it's the one we're making.",
  },
];

export const WHO_THIS_IS_NOT_FOR = {
  heading: "This probably isn't for you if…",
  reasons: [
    "You already have a full-time receptionist who catches every call",
    "You take fewer than about ten calls a month",
    "You want a fully custom-built system rather than something live in a week",
    "You need someone who can come to your office in person",
  ],
  closing: "Not sure? Book fifteen minutes and we'll tell you straight.",
};

export const PIP_GREETING = "Hello! I'm Pip. How can I help you today?";
