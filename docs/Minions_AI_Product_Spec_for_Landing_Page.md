# Minions.AI — Product Reference for Landing Page / Content Generation

**Purpose of this document:** This is a factual reference for an AI agent (or copywriter) building landing page copy, sales content, or marketing material for Minions.AI. It explains exactly what the product does, how it works behind the scenes, and what claims are safe to make. Do not invent capabilities beyond what's described here — every feature listed is either already built (Ironclad Pest Solutions demo) or is an explicit near-term roadmap item, and those two categories are labeled separately.

**Target customer:** US home-services businesses — pest control, pressure washing, HVAC, plumbing — typically 1–10 technicians, currently losing leads to missed calls and slow follow-up.

**The core pitch in one sentence:** We give a home-services business an AI employee that answers every call and every website chat, books and manages appointments on their real calendar, and feeds every lead into a dedicated CRM pipeline they can see — so no lead ever sits in a voicemail or an unanswered chat again.

---

## 1\. The three things we sell (product surfaces)

We sell **one integrated system**, but it's built from three visible pieces. Landing page copy should present these as one product ("your AI front desk") with three capabilities, not three separate products.

### 1a. AI Voice Agent (phone)

An AI that answers the business's phone line 24/7, has a real spoken conversation with the caller, and can take real action — not just a message-taking bot.

### 1b. AI Chat Widget (website)

A chat bubble on the business's own website that answers visitor questions instantly, grounded in that business's actual service info (pricing ranges, service area, guarantees, licensing) — not generic AI guesses.

### 1c. Lead & Appointment Pipeline (the CRM)

Every call and chat interaction — booked, missed, or just a question — lands automatically in a CRM pipeline built specifically for this business. The owner can see, at a glance, every lead and where it stands, without lifting a finger to enter data.

**How to frame this for the reader:** "voice agent" and "chat widget" are the *front door* — what the customer experiences. The CRM pipeline is the *back office* — what the business owner experiences. The product's value is that these three are wired together automatically; nothing has to be typed in twice.

---

## 2\. What the Voice Agent can actually do (capability list)

This list reflects real, built functionality (demo: "Alex," for fictional client Ironclad Pest Solutions). Use these as the concrete "here's what it does" bullets on the landing page.

| Capability | Plain-English description |
| :---- | :---- |
| **Answers every call, 24/7** | No voicemail, no hold music, no missed calls. The agent picks up and has a natural conversation. |
| **Understands what the caller needs** | Classifies intent early in the call — new booking, check an existing appointment, change an appointment, cancel, or a general question — and routes the conversation accordingly. |
| **Books appointments** | Checks real-time calendar availability, offers open slots, and books the appointment directly onto the business's calendar — no double-booking, no manual entry. |
| **Modifies existing appointments** | Caller can call back and move their appointment to a new day/time; the agent finds their existing booking and updates it live. |
| **Cancels appointments** | Same idea — caller can cancel, and the calendar updates immediately. |
| **Looks up existing bookings** | If a caller says "I think I have an appointment," the agent can find it (even if they're calling from a different number than the one on file). |
| **Answers FAQs grounded in real business info** | Pricing ranges, service area, guarantees, what's included, licensing — answered from that business's actual content, not generic AI filler. Reachable at any point in the call, not just at the start. |
| **Triage/urgency handling** | For services where it matters (e.g., pest control), the agent can distinguish "emergency" from "standard" requests and handle them differently (e.g., faster follow-up path). |
| **Human handoff** | If the caller needs a real person, or the AI can't handle the request, it transfers the call to a real phone number rather than leaving the caller stuck. |
| **Speaks naturally, keeps things moving** | Short, natural turns in conversation (not long robotic monologues); doesn't talk over the caller. |
| **Never mentions internal details** | Doesn't expose internal IDs, tokens, or backend info to the caller — from the caller's side, it just sounds like a competent front-desk person. |

**What NOT to claim yet (roadmap, not live):** guaranteed multi-language support, outbound cold-calling/sales calls, payment collection over the phone. These aren't built — don't imply them.

---

## 3\. What the Chat Widget can actually do

| Capability | Plain-English description |
| :---- | :---- |
| **Instant answers on the business's own website** | A chat bubble that's available the moment a visitor lands on the site — no waiting for a human. |
| **Answers grounded in real content, not hallucinated** | The AI only answers from that business's actual service pages (pricing, service area, guarantees, treatment info) — it doesn't make up prices or promises. Answers are labeled as "verified" against source content. |
| **Resists manipulation attempts** | Tested against people trying to trick it into quoting fake prices, ignoring its instructions, or leaking data — it holds its ground. |
| **Works across devices** | Same assistant, same memory of the conversation, whether it's the floating bubble or embedded inline on a page. |
| **Rate-limited and secured** | Built with real safeguards (traffic limits, origin checks) so it can't be abused or overwhelmed — this is infrastructure, not a customer-facing bullet, but it's fair to say "secure and production-ready" on the page. |

**What NOT to claim yet:** the chat widget does not currently book appointments directly (that's the voice agent's job in the current build) — it answers questions and can hand off / direct the visitor to call or request a callback. Don't claim the chat widget can modify/cancel bookings.

---

## 4\. What happens behind the scenes: the Lead & Appointment Pipeline ("the CRM"

This is the part the business owner sees, and it's a major differentiator worth its own landing-page section. Here's how to describe it accurately:

**In plain terms:** every time someone calls, chats, or misses a call, that person and what they wanted becomes a tracked record automatically — the owner doesn't type anything in. It shows up in a clean pipeline: new lead → contacted → engaged → appointment booked → won/lost.

**What actually happens technically (for context, translate to benefits — don't expose this jargon to the customer):**

- We stand up a dedicated CRM instance for the business (we run and manage this — the client doesn't need to buy or configure separate CRM software).  
- Every phone call and chat interaction writes a real record: who called, what they wanted, whether they booked, and what stage they're at.  
- **Missed-call recovery is automatic:** if a call goes unanswered, the system immediately texts the caller back, logs them as a lead, and creates a follow-up reminder — so a missed call still turns into a tracked, recoverable lead instead of silently vanishing.  
- If nobody replies to that text within a set window, the system follows up again and flags it for a real person to call.  
- Every booking made through the voice agent — new, modified, or cancelled — updates the same lead record, so the pipeline and the calendar never disagree.  
- The business owner gets a simple view of their pipeline (lead → contacted → qualified → booked → closed), without needing to understand or touch any of the backend.

**Good landing-page language for this section:**

- "Every call becomes a tracked lead — even the ones you miss."  
- "No more sticky notes or spreadsheets. Every lead lives in one place, updated automatically."  
- "See exactly where every prospect is — from first ring to booked job — without entering a single line by hand."

**What NOT to claim yet (roadmap, not live):** a client-facing login/portal to view their own CRM directly (this is planned but not built — right now the "view" would be delivered as reporting, not self-service login). Don't promise self-serve dashboard access unless/until that's actually shipped.

---

## 5\. How the pieces connect (for anyone who wants the "how it works" diagram/section)

A simple 4-step narrative works well for a landing page "How It Works" section:

1. **A customer calls or visits the website.** The AI voice agent or chat widget engages them instantly — no wait.  
2. **The AI has a real conversation** — answers questions, checks availability, and books, moves, or cancels appointments as needed.  
3. **Everything is logged automatically** into the business's dedicated lead pipeline — no manual data entry, ever.  
4. **Missed calls don't mean lost leads.** If a call isn't answered, the system automatically texts the caller back and keeps the lead alive until a human follows up.

---

## 6\. Proof point to reference: the live demo

Minions.AI has a genuinely working, callable demo built for a fictional pest-control business ("Ironclad Pest Solutions") that prospects can call or chat with live, on a real phone number, right now. This is a strong, honest claim for the landing page: **"Don't take our word for it — call the demo yourself."**

Safe to say:

- It's a real, working phone number a prospect can call today.  
- It genuinely books, modifies, and cancels appointments on a live calendar during the call.  
- The chat widget on the site is the same live system, not a mockup.

Not yet safe to say (verify before publishing):

- That the end-to-end voice booking flow has been tested on a real live phone call (as of the last internal update, this was still the top pending verification item — web-panel testing passed, but the final live-call confirmation across all 5 functions, especially cancellation, was not yet done). If the landing page will assert "fully tested," check with the team first.

---

## 7\. Tone and positioning guidance for the content agent

- **Speak to the business owner's pain, not the tech.** They don't care about n8n, Retell, or CRMs by name — they care about "I'm losing jobs because nobody answers the phone after 5pm."  
- **Lead with recovered revenue, not features.** E.g., "One recovered $400–$3,500 job pays for the whole month" is the kind of ROI framing that resonates with this audience (per internal GTM material).  
- **Avoid CRM jargon.** Don't say "EspoCRM," "Opportunity pipeline," "n8n workflow," or similar internal/technical terms in customer-facing copy. Say "your lead pipeline," "your dashboard," "your booking system."  
- **Don't oversell AI.** This audience is skeptical of AI hype and has likely been burned by clunky chatbots before. Emphasize *reliability* and *it actually works* over novelty.  
- **Emphasize "we set it up and run it for you."** This is a done-for-you service, not a self-serve SaaS tool the owner has to configure. That's a key differentiator vs. generic AI chatbot tools.  
- **Use pest control as the concrete example when illustrating features**, since that's where the working demo lives — but keep the core copy generalizable to HVAC, plumbing, and pressure washing too, since those are equally valid target verticals.

---

## 8\. Quick-reference: what's live vs. what's roadmap

| Feature | Status |
| :---- | :---- |
| Voice agent answers calls 24/7 | ✅ Live (demo) |
| Books / modifies / cancels appointments via voice | ✅ Live (demo) — full live-phone-call E2E test still pending final confirmation |
| Voice FAQ answering | ✅ Live (demo) |
| Human call transfer | ✅ Live (demo), fallback path has a known gap being fixed |
| Website chat widget with grounded answers | ✅ Live (demo, in production on getminions.ai) |
| Missed-call auto-text-back | ✅ Built, real SMS delivery test still pending |
| Automatic lead/CRM logging from calls | ✅ Built (voice booking lifecycle wired to CRM) |
| No-reply follow-up automation | ✅ Built |
|  |  |
| Chat widget booking appointments directly | ❌ Not built — chat widget currently answers questions only,  |
| Outbound/cold calling by the AI | ❌ Not built |
|  |  |

---

*This document should be refreshed if the underlying product changes significantly. Source: internal build state as of early August 2026\.*  
