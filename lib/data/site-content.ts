/**
 * SINGLE SOURCE OF TRUTH FOR ALL SITE CLAIMS, STATS, AND APPROVED COPY.
 *
 * Every statistic, guarantee term, setup promise, founder story, FAQ, and trust line
 * MUST be imported from this file. Do NOT hardcode inline claims in components.
 */

export const SETUP_TIME_PROMISE = "About 7 days";

const guaranteeDays = 30;
export const GUARANTEE = {
  days: guaranteeDays,
  heading: "100% Risk-Free: If It Doesn't Book Appointments, You Don't Pay.",
  body: `Try your AI crew on your phone line for ${guaranteeDays} days. If it doesn't capture appointments you would have otherwise lost to voicemail, we refund every penny and help you forward your line back. Zero contracts, zero cancellation fees, zero risk.`,
  short: `Zero contract · Setup in ~7 days · ${guaranteeDays}-day money-back guarantee`,
};

/* "Built for Trade & Service Businesses" excluded real estate, one of the two
   co-primary markets (invariants.md #3). Both are now named explicitly. */
export const TRUST_BAR_TEXT = `Built for Pest Control & Real Estate • 24/7 Phone Answering • Missed-Call Text Back • Website Chat • ${guaranteeDays}-Day Guarantee`;

export const CONTRACTOR_DAY_TIMELINE = [
  {
    time: "6:00 AM",
    title: "The Morning Scan & Missing Leaked Revenue",
    without: "Wake up and check phone. 2 voicemail notifications from 2:00 AM emergency calls. Neither left a name. Revenue lost to competitor.",
    with: "Rex answered at 2:14 AM on ring 1, quoted emergency rates, and scheduled a $1,200 repair straight to Google Calendar.",
    crewHero: "Rex",
  },
  {
    time: "10:30 AM",
    title: "Up a Ladder / Deep Under a Sink",
    without: "Power tools running. Phone rings 4 times in a row. Hands covered in grease. 3 callers hang up after ring 4; 1 hits voicemail.",
    with: "Rex picks up instantly, Zip sends an automated text back in 4 seconds: 'Saw you called! How can we help you today?'",
    crewHero: "Rex & Zip",
  },
  {
    time: "2:00 PM",
    title: "Field Work & Repetitive Client Distractions",
    without: "Phone blows up with 5 callers asking basic questions: 'What's your service area?', 'What are your rates?' Interrupts active billable work.",
    with: "Pip resolves routine chat inquiries 24/7 using only your verified business data, keeping active work uninterrupted.",
    crewHero: "Pip",
  },
  {
    time: "5:30 PM",
    title: "The Drive Home & Voicemail Graveyard",
    without: "Drive home returning 6 voicemails. 5 callers say: 'Oh, sorry, I already hired another contractor who answered earlier.'",
    with: "Zero voicemail callbacks needed. Every lead was qualified, logged in your CRM pipeline, and scheduled while you were on the job site.",
    crewHero: "Gia",
  },
  {
    time: "8:30 PM",
    title: "Kitchen Table Paperwork Burnout",
    without: "Exhausted at the kitchen table manually typing out quote follow-ups, appointment reminders, and client intake forms.",
    with: "Gia automates SMS follow-ups and review requests; Otto processes client intake paperwork quietly in the background.",
    crewHero: "Gia & Otto",
  },
];

export const PROOF_STATS = [
  {
    stat: "100×",
    description: "more likely to reach the customer if you respond within 5 minutes instead of 30.",
    source: "MIT / InsideSales Lead Response Study, 2007",
  },
  {
    stat: "21×",
    description: "more likely to qualify and convert that lead into a paying customer when you answer first.",
    source: "MIT / InsideSales Lead Response Study, 2007",
  },
  {
    stat: "42 hours",
    description: "the average business response time to inbound leads across 2,241 companies studied. Most never respond at all.",
    source: "Harvard Business Review, \"The Short Life of Online Sales Leads,\" 2011",
  },
];

export const PROOF_STATS_CLOSING = "Your AI crew answers incoming calls in under 3 seconds, 24/7.";

/*
 * Reworked so it speaks to both co-primary markets (invariants.md #3). The previous
 * version was trades-only — "trade business owners", "up a ladder, under a sink" —
 * which read as someone else's story to a real-estate broker. The shared truth is
 * that both businesses pay to make the phone ring and then cannot answer it: the PCO
 * is on a route, the agent is mid-showing. That is the story, and it covers both
 * without going generic.
 */
export const FOUNDER_STORY = {
  pullQuote: "We built this because owners were losing thousands in revenue while their hands were full — on a route, or in the middle of a showing.",
  heading: "Engineered to solve the #1 revenue killer: the call nobody answered.",
  body: "We're software engineers who kept seeing the same thing. A pest control operator on a route, or an agent mid-showing, spends real money to get the phone ringing — then loses half those calls because nobody could pick up. Traditional call centers put people on hold and read generic scripts. We built Minions.AI as an integrated AI front desk: voice dispatching, grounded web chat, and automatic lead logging.",
  attribution: "Rakib & Parvej, Co-founders",
};

export const HONEST_TRUTH = {
  heading: "Our Risk-Free Promise",
  body: `We don't ask for long-term contract lock-in or ask you to take our word for it. We build your custom AI front desk in 7 days, let you test live phone calls before going public, and back everything with a ${guaranteeDays}-day money-back guarantee. One recovered $400–$3,500 booking pays for your entire month.`,
};

export const INTEGRATION_COPY = {
  calendar: "Books, modifies, and cancels appointments directly on Google Calendar — no double bookings.",
  phone: "Keep your existing phone number — simple call forwarding takes under 2 minutes.",
  crm: "We configure and manage your dedicated lead pipeline — calls, chats, and missed calls logged automatically with zero manual entry.",
};

export const APPROVED_FAQS = [
  {
    id: "sound-like-robot",
    q: "Will it sound robotic to my callers?",
    a: "No. Your AI voice agent speaks with natural voice pacing, conducts realistic back-and-forth conversations, and handles interruptions smoothly. You hear full test call recordings and sign off on everything before your line ever goes live.",
  },
  {
    id: "know-its-ai",
    q: "Will callers know they are talking to AI?",
    a: "Most callers simply focus on getting their job scheduled immediately by someone who knows your exact pricing. If a caller asks directly, the AI answers honestly while seamlessly continuing to assist them.",
  },
  {
    id: "wrong-price",
    q: "What if it quotes the wrong pricing or service detail?",
    a: "The AI is strictly trained on your exact pricing schedules, service areas, and company rules. It never guesses or hallucinates details—and both voice and website chat answers are grounded in your verified data.",
  },
  {
    id: "if-it-breaks",
    q: "What happens if a call fails or is disconnected?",
    a: "If an unexpected issue occurs, calls automatically fall back to your existing phone voicemail system or warm-transfer directly to your mobile phone. You are completely protected.",
  },
  {
    id: "change-number",
    q: "Do I have to change my business phone number?",
    a: "Never. You keep your existing business phone number. You simply activate call forwarding—which takes under 2 minutes and works with any carrier.",
  },
  {
    id: "how-long-setup",
    q: "How long does setup take?",
    a: "Your entire system is fully configured and live in about 7 days. Our team handles 100% of the build, knowledge base setup, calendar sync, and CRM pipeline configuration for you.",
  },
  {
    id: "calls-recorded",
    q: "Are call logs and recordings compliant?",
    a: "Yes. Call recording and transcription are fully configurable to comply with state laws (including two-party consent states). All settings are reviewed with you during setup.",
  },
  {
    id: "why-trust-you",
    q: "Why choose Minions.AI over a traditional call center?",
    a: `Traditional call centers charge per minute, place callers on hold, and can only take basic messages. Minions.AI costs a fraction of the price, answers in under 3 seconds 24/7, quotes accurate pricing, books directly to your calendar, and logs every lead automatically—backed by a ${guaranteeDays}-day money-back guarantee.`,
  },
];

export const WHO_THIS_IS_NOT_FOR = {
  heading: "Is Minions.AI Right For Your Business?",
  reasons: [
    "You already have a dedicated 24/7 in-house receptionist catching 100% of incoming calls",
    "You receive fewer than 10 customer calls per month",
    "You prefer leaving caller leads in voicemail and risking lost job revenue",
    "You require a physical receptionist sitting at your office front desk",
  ],
  closing: "Want to see if your business qualifies? Book a 15-minute setup call.",
};

export const PIP_GREETING = "Hello! I'm Pip. How can I help you today?";
