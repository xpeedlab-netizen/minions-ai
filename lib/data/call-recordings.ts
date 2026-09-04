/**
 * REAL call recordings, pulled from the Retell account and self-hosted.
 *
 * These replace the simulated hero widget that shipped until 2026-09-04 — a hardcoded
 * array cycled on a setInterval, with no <audio> element and no audio file anywhere in
 * the repo. On a page whose entire argument is "hear it answer the phone", a fake demo
 * was the single largest credibility risk on the site.
 *
 * PII — READ BEFORE ADDING A RECORDING.
 * These three calls are scripted demos: every name, number and address spoken in them
 * is invented, and the phone numbers are in the reserved 555-01XX / 555-XXXX fiction
 * range that cannot be dialled. Nothing here is muted, and the transcripts print what
 * the recording actually says (owner-confirmed 2026-09-04).
 *
 * That is a property of THESE recordings, not a policy. If you add a call where a real
 * person says a real name, number or address, you must mute the span in the mp3
 * (ffmpeg `volume=enable='between(t,a,b)':volume=0`) AND replace it with [redacted] in
 * the `cues`, recording the window in `redactedSpans`. Both halves are required:
 * redacting only the audio leaves the PII sitting in the page's HTML.
 *
 * AUDIO PROCESSING. Sources are pulled from Retell at 24kHz mono and processed with
 * `highpass=f=80, acompressor=threshold=-24dB:ratio=3, loudnorm=I=-16:TP=-1.5:LRA=7`
 * before a 64kbps mono encode. The raw recordings run -24 to -29 LUFS with a loudness
 * range near 16 — far too quiet, and with the caller sitting well below the agent.
 * The chain lifts them to ~-16.5 LUFS and roughly halves that range, which is what
 * makes the caller audible against the agent. Do not ship a raw Retell export.
 *
 * Transcripts are lightly tidied — filler words and false starts dropped where they do
 * not change meaning — but no line is invented, reordered, or improved. What the cue
 * says is what the recording says.
 *
 * `durationSec` is authored rather than read from `loadedmetadata` so the timeline
 * renders its true total in static HTML instead of shifting from 0:00 after the audio
 * loads.
 */

export type TranscriptCue = {
  /** Start time in seconds. Cues must be ordered and non-overlapping. */
  t: number;
  speaker: "caller" | "agent";
  text: string;
};

export type CallRecording = {
  id: string;
  /** Which audience this call is for. `any` plays to everyone. */
  segment: "pest" | "real-estate" | "any";
  src: string;
  durationSec: number;
  /** Short label for the call, e.g. "Emergency booking". */
  badge: string;
  title: string;
  /** What the agent actually achieved — stated in text so it lands without playing. */
  outcome: string;
  /** Muted PII windows, in seconds. Kept for auditability. */
  redactedSpans: [number, number][];
  cues: TranscriptCue[];
};

export const CALL_RECORDINGS: CallRecording[] = [
  {
    id: "pest-bedbug-emergency",
    segment: "pest",
    src: "/media/calls/pest-bedbug-emergency.mp3",
    durationSec: 170,
    badge: "Emergency booking",
    title: "A bed bug call at the end of the day",
    outcome:
      "Qualified the infestation, booked a next-morning window, and gave prep instructions — without a human picking up.",
    redactedSpans: [],
    cues: [
      { t: 0.8, speaker: "agent", text: "Thanks for calling Ironclad Pest Solutions. This is Alex. How can I help you today?" },
      { t: 6.5, speaker: "caller", text: "Hi Alex, I've been getting bites at night and I think it might be bed bugs, so I need to book an emergency visit." },
      { t: 17.2, speaker: "agent", text: "I'm sorry to hear you're dealing with that. I can certainly help you get someone out there. May I have your name?" },
      { t: 23.1, speaker: "caller", text: "Yeah, it's Emily Carter." },
      { t: 29.3, speaker: "agent", text: "What's the best phone number for the appointment?" },
      { t: 33.6, speaker: "caller", text: "617-555-0123. And the address is 241 Elm Street, apartment 5B." },
      { t: 45.5, speaker: "agent", text: "Got it. And is this a house or an apartment building?" },
      { t: 50.5, speaker: "caller", text: "It's an apartment." },
      { t: 55.7, speaker: "agent", text: "Where exactly in the apartment have you been noticing the activity?" },
      { t: 61.0, speaker: "caller", text: "In my bedroom." },
      { t: 65.6, speaker: "agent", text: "How long have you been noticing the activity in your bedroom?" },
      { t: 70.0, speaker: "caller", text: "About a week now." },
      { t: 74.0, speaker: "agent", text: "Okay, thanks for that info. Since I have everything I need, I'll go ahead and look for the next available appointment for you." },
      { t: 90.0, speaker: "agent", text: "We have some openings for today, Saturday, August 22nd. We could do 8 to 9 AM, 9 to 10, or 10 to 11. Which of those works best for you?" },
      { t: 111.3, speaker: "caller", text: "10 to 11 would be great." },
      { t: 117.5, speaker: "agent", text: "Alright, you are all set! Before we finish, would you like any prep instructions?" },
      { t: 124.2, speaker: "caller", text: "Yeah, that would be helpful. I don't know what to do before they arrive." },
      { t: 134.9, speaker: "agent", text: "Sure — it's really helpful if you can clear access under your sinks and along the baseboards. Please keep pets and kids away from the treated areas for a few hours, and secure your pets while the technician is there." },
      { t: 155.5, speaker: "caller", text: "Yeah, that makes sense. Thanks for the advice." },
      { t: 158.8, speaker: "agent", text: "You're very welcome. Thanks for calling Ironclad Pest Solutions, and have a good rest of your day." },
    ],
  },
  {
    id: "realestate-showing",
    segment: "real-estate",
    src: "/media/calls/realestate-showing.mp3",
    durationSec: 120,
    badge: "Showing booked",
    title: "A buyer calling about a listing",
    outcome:
      "Checked representation, confirmed lender pre-approval, and booked the showing — the qualifying an agent does by hand.",
    redactedSpans: [],
    cues: [
      { t: 0.5, speaker: "agent", text: "Hi! I'm Alex, the AI assistant for Horizon Realty on a recorded line. How can I help with your property search today?" },
      { t: 13.8, speaker: "caller", text: "I'm calling about 44 Elm Street in Austin. I saw the listing online, and I'd love to schedule a tour." },
      { t: 21.6, speaker: "agent", text: "That is a beautiful home! To get started, are you currently committed under a signed exclusive agreement with another real estate agent?" },
      { t: 31.0, speaker: "caller", text: "No, I'm not working with any agent right now." },
      { t: 33.8, speaker: "agent", text: "Great! Are you planning on a cash purchase, or have you already been pre-approved with a lender?" },
      { t: 42.5, speaker: "caller", text: "I'm pre-approved with my bank, up to six hundred thousand dollars." },
      { t: 52.2, speaker: "agent", text: "That is great to hear. Let me check our calendar for some available times to show you the home. It looks like our first openings are Tuesday, August twenty-fifth. Would 3 PM or 4 PM work better for you?" },
      { t: 69.2, speaker: "caller", text: "4 PM could work for me, but my lease is up in thirty days, so I'm looking to move quickly." },
      { t: 77.6, speaker: "agent", text: "I understand the urgency with your lease ending soon. May I have your full name and phone number to finalize your tour for Tuesday at 4 PM?" },
      { t: 97.6, speaker: "caller", text: "Sure. My name is Marcus Vance, and my phone number is 508-555-9876." },
      { t: 111.9, speaker: "agent", text: "You're all booked for that showing! I'm texting you a quick digital pre-tour agreement — once you tap to confirm, your appointment is locked in." },
    ],
  },
  {
    id: "guardrail-out-of-scope",
    segment: "any",
    src: "/media/calls/guardrail-out-of-scope.mp3",
    durationSec: 38,
    badge: "Out of scope",
    title: "Someone calls about a plumbing leak",
    outcome:
      "Said it only handles pest control rather than inventing an answer — the failure mode that matters most.",
    redactedSpans: [],
    cues: [
      { t: 0.8, speaker: "agent", text: "Thanks for calling Ironclad Pest Solutions. This is Alex. How can I help you today?" },
      { t: 23.6, speaker: "caller", text: "I have got water leaking under my kitchen sink, and it's getting worse." },
      { t: 26.5, speaker: "agent", text: "I'm sorry to hear about the leak, but since I'm with Ironclad Pest Solutions, I only handle pest-related issues." },
    ],
  },
];

/** The call shown by default and to the pest audience. */
export const DEFAULT_RECORDING_ID = "pest-bedbug-emergency";

/** The scope-discipline call, shown to every audience alongside the main one. */
export const GUARDRAIL_RECORDING_ID = "guardrail-out-of-scope";

export function getRecording(id: string): CallRecording | undefined {
  return CALL_RECORDINGS.find((r) => r.id === id);
}
