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
 *
 *   highpass=f=80,
 *   agate=threshold=0.0056:ratio=4:attack=8:release=180:knee=4,
 *   acompressor=threshold=-24dB:ratio=3:attack=15:release=250:makeup=2,
 *   loudnorm=I=-16:TP=-1.5:LRA=7
 *
 * before a 64kbps mono encode. The raw recordings run -24 to -29 LUFS with a loudness
 * range near 16 — far too quiet, and with the caller sitting well below the agent.
 * The chain lifts them to ~-16.6 LUFS and roughly halves that range.
 *
 * THE GATE IS NOT OPTIONAL, and it must stay BEFORE the compressor. A first pass
 * shipped without it and sounded noticeably noisy: makeup gain lifts everything,
 * including the silence between turns, so a source noise floor of -61dB arrived at
 * -40dB — audible hiss that was not in the original recording. Gating first keeps
 * those gaps at -65dB while speech lands at -19dB. If you re-encode these, measure a
 * silent window (e.g. 108s in the real-estate call) as well as the LUFS: loudness
 * targets alone will not catch a raised noise floor.
 *
 * Do not ship a raw Retell export.
 *
 * CUE TIMINGS ARE THE RECORDING'S OWN. Every `t` below is the first word's start time
 * from Retell's `transcript_object` (GET /v2/get-call/<id>, which carries per-word
 * timestamps the MCP tool's response omits) — not estimated, and not derived from
 * silence detection. An earlier pass authored them by inference and drifted up to 5
 * seconds by the end of the pest call, which is plainly visible once captions run
 * against the audio. If you add a recording, pull its timings the same way.
 *
 * Transcripts are lightly tidied — filler words and false starts dropped, and turns the
 * caller interrupted rejoined into the sentence the audio actually plays — but no line
 * is invented, reordered, or improved. What the cue says is what the recording says.
 * Pure acknowledgements ("Okay.", "Yeah.") are dropped: they are sub-second turns that
 * would flash on screen without carrying meaning.
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
      { t: 0.7, speaker: "agent", text: "Thanks for calling Ironclad Pest Solutions. This is Alex. How can I help you today?" },
      { t: 5.5, speaker: "caller", text: "Hi Alex, I've been getting bites at night and I think it might be bed bugs, so I need to book an emergency visit." },
      { t: 17.2, speaker: "agent", text: "I'm sorry to hear you're dealing with that. I can certainly help you get someone out there. May I have your name?" },
      { t: 22.1, speaker: "caller", text: "It's Emily Carter." },
      { t: 29.3, speaker: "agent", text: "Okay, Emily. What's the best phone number for the appointment?" },
      { t: 29.7, speaker: "caller", text: "617-555-0123. And the address is 241 Elm Street, apartment 5B." },
      { t: 55.7, speaker: "agent", text: "Got it, 241 Elm Street. And is this a house or an apartment building?" },
      { t: 60.1, speaker: "caller", text: "It's an apartment." },
      { t: 65.6, speaker: "agent", text: "Where exactly in the apartment have you been noticing the activity?" },
      { t: 69.5, speaker: "caller", text: "In my bedroom." },
      { t: 74.0, speaker: "agent", text: "How long have you been noticing the activity in your bedroom, Emily?" },
      { t: 74.4, speaker: "caller", text: "About a week now." },
      { t: 82.7, speaker: "agent", text: "Thanks for that info. Since I have everything I need, I'll go ahead and look for the next available appointment for you." },
      { t: 88.8, speaker: "caller", text: "And you handle the scheduling here?" },
      { t: 101.1, speaker: "agent", text: "We have some openings for today, Saturday, August 22nd. We could do 8:00 AM to 9:00 AM, 9:00 AM to 10:00 AM, or 10:00 AM to 11:00 AM. Which of those works best for you?" },
      { t: 112.2, speaker: "caller", text: "10 to 11 would be great." },
      { t: 124.1, speaker: "agent", text: "Alright, you are all set! Before we finish, would you like any prep instructions?" },
      { t: 132.5, speaker: "caller", text: "That would be helpful. I don't know what to do before they arrive." },
      { t: 142.8, speaker: "agent", text: "For the visit, it's really helpful if you can clear access under your sinks and along the baseboards. Also, please make sure to keep any pets and kids away from the treated areas for a few hours, and definitely secure your pets while the technician is there. Does that make sense, or do you have any other questions?" },
      { t: 157.0, speaker: "caller", text: "No, that makes sense. Thanks for the advice." },
      { t: 163.7, speaker: "agent", text: "You're very welcome, Emily. I'm glad we could get that sorted for you today. Thanks for calling Ironclad Pest Solutions, and have a good rest of your day." },
    ],
  },
  {
    id: "realestate-showing",
    segment: "real-estate",
    src: "/media/calls/realestate-showing.mp3",
    durationSec: 117,
    badge: "Showing booked",
    title: "A buyer calling about a listing",
    outcome:
      "Checked representation, confirmed lender pre-approval, offered alternatives when the requested slot was full, and booked the showing — the qualifying an agent does by hand.",
    redactedSpans: [],
    /*
     * Re-recorded 2026-09-05 (Retell call_288b1f8ae0fc792f2471f5bc48e, call_successful:
     * true). Replaces the 2026-08-25 take, which the owner judged unusable.
     *
     * Cue `t` values are the FIRST WORD START from `transcript_object[].words`, so the
     * caption lights on the syllable. Do not hand-author these.
     *
     * Cue TEXT is lightly cleaned where Retell's ASR mis-transcribed the caller, since
     * the caption must read as what a listener hears, not as a raw ASR dump. Audio is
     * untouched — only these strings differ:
     *   43.2  "so I'm good. Into move."  -> "so I'm looking to move quickly."
     *   58.5  "Tomorrow afternoon, what's?" -> "Tomorrow afternoon, if you have it."
     *   107.7 "I'm not" (clipped false start) -> folded into the 105.6 cue, not shown.
     * Nothing here changes meaning; if you re-cut the audio, re-check these three.
     *
     * The 64.7 agent turn is the most valuable moment in the clip: the requested slot is
     * unavailable and it offers two alternatives instead of failing. Keep it.
     */
    cues: [
      { t: 0.2, speaker: "agent", text: "Hi! I'm Alex, the AI assistant for Horizon Realty on a recorded line. How can I help with your property search today?" },
      { t: 6.1, speaker: "caller", text: "Hi. I'm calling about the listing at eight oh four Elm Street. I saw it online last night, and I'd like to get in and see it." },
      { t: 18.3, speaker: "agent", text: "That is a beautiful home! Before we look at the calendar, are you currently committed under a signed exclusive agreement with another real estate agent?" },
      { t: 27.5, speaker: "caller", text: "No, not at all. I'm just starting to look." },
      { t: 31.6, speaker: "agent", text: "That's great to hear. Will this be a cash purchase, or are you already pre-approved with a lender?" },
      { t: 38.0, speaker: "caller", text: "I'm pre-approved through Chase, up to six hundred thousand." },
      { t: 42.7, speaker: "caller", text: "And my lease is up in about thirty days, so I'm looking to move quickly." },
      { t: 50.4, speaker: "agent", text: "It sounds like you're in a great position to move quickly. What day this week or upcoming weekend works best for you to view the home?" },
      { t: 58.5, speaker: "caller", text: "Tomorrow afternoon, if you have it. Let's do four o'clock." },
      { t: 64.7, speaker: "agent", text: "I'm sorry, we don't have any openings tomorrow. We do have slots this Saturday at two o'clock or three o'clock in the afternoon. Would either of those work?" },
      { t: 72.6, speaker: "caller", text: "Yeah, Saturday at two works. Let's put that down." },
      { t: 77.8, speaker: "agent", text: "Perfect. May I have your full name and the best cell phone number to send the confirmation to?" },
      { t: 84.4, speaker: "caller", text: "Sure. Marcus Vance. Five five five, zero one four seven." },
      { t: 92.5, speaker: "agent", text: "I'm getting that showing at eight oh four Elm Street scheduled for you right now. You're all booked for Saturday at two o'clock! I've just texted the showing details and confirmation pass directly to your phone." },
      { t: 105.6, speaker: "caller", text: "Okay, that's everything." },
      { t: 112.3, speaker: "agent", text: "It was a pleasure helping you today, Marcus. Thanks for calling Horizon Realty and have a wonderful day!" },
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
      { t: 19.8, speaker: "caller", text: "I have got water leaking under my kitchen sink, and it's getting worse." },
      { t: 32.9, speaker: "agent", text: "I'm sorry to hear about the leak, but since I'm with Ironclad Pest Solutions, I only handle pest-related issues." },
    ],
  },
];

/**
 * The call the HERO plays — the first thing a cold visitor hears.
 *
 * Real estate, not pest, since 2026-09-05: the pest recording is a known-bad take
 * (the agent misbehaves) and is being re-recorded once that agent is fixed. Until then
 * the hero must lead with the clip that actually demonstrates the product.
 *
 * This is deliberately NOT tied to the audience segment — the hero renders above the
 * toggle, so it needs one fixed clip. `SEGMENT_COPY[...].recordingId` in lib/segments.ts
 * still drives the per-audience player in the proof band.
 *
 * WHEN THE PEST RETAKE LANDS: point this back at the pest call only if it is genuinely
 * the stronger clip. The hero should carry the best recording, not the default industry.
 */
export const DEFAULT_RECORDING_ID = "realestate-showing";

/** The scope-discipline call, shown to every audience alongside the main one. */
export const GUARDRAIL_RECORDING_ID = "guardrail-out-of-scope";

export function getRecording(id: string): CallRecording | undefined {
  return CALL_RECORDINGS.find((r) => r.id === id);
}
