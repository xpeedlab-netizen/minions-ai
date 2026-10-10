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
  /** What the agent actually achieved, stated in text so it lands without playing. */
  outcome: string;
  /** Muted PII windows, in seconds. Kept for auditability. */
  redactedSpans: [number, number][];
  cues: TranscriptCue[];
};

export const CALL_RECORDINGS: CallRecording[] = [
  {
    /*
     * The 2026-09-05 retake. Replaces "pest-bedbug-emergency", the 2026-08-22 take the
     * owner judged unusable: it ran 170s, spent its first 80 seconds collecting details
     * one field at a time, and the agent asked for the phone number before the address.
     * This one books in 74 seconds.
     *
     * Recorded on a NEW agent — "Ironclad Pest Solutions AI Dispatcher (Fast
     * Single-Prompt)" (call_6315c7b0f1fd07721cd01c36c38) — which is why it is faster:
     * it takes the address and the slot in two turns instead of six.
     *
     * EDITED FOR PACE, AND THIS IS THE ONE THING TO KNOW BEFORE RE-CUTTING IT. The
     * source is 132s of which only ~72s is speech; the rest is six inter-turn gaps of
     * 5.6-8.3s while the live agent thinks. Every gap is compressed to a 0.6s beat and
     * the tail after the confirmation is dropped, giving 74s with every spoken word
     * intact up to the cut point below. Nothing is reordered. Cue `t` values are
     * therefore NOT the source timestamps — they are recomputed on the trimmed
     * timeline, so pulling fresh timings from Retell for this call will NOT line up.
     *
     * The 74s end point is a SENTENCE BOUNDARY, not an arbitrary trim: the agent
     * finishes "...texted the preparation details to your cell." at 74.06s and then
     * asks "Is there anything else I can help you with today?" — a question whose
     * answer was already cut with the tail, so leaving it in ended the demo on an
     * unanswered prompt. Cut at 74.15s with a 0.2s fade. Do not extend it back.
     * The segment map is in the session notes; rebuild from the source if you need it.
     *
     * Cut using the MULTICHANNEL export (recording_multichannel.wav), caller on ch0 and
     * agent on ch1, which is why the caller could be corrected without touching the
     * agent: ch1 measures -91dB under the caller's speech, i.e. true isolation. The
     * caller sat 16.7dB down at 80-250Hz (phone held away from the face) but within
     * 2.5dB through the midrange, so the fix is body, not level:
     *
     *   caller: volume=-8dB, highpass=75, +6dB@170Hz, +2dB@320Hz, +0.8dB@2600Hz,
     *           acompressor(-34dB, 4:1, makeup=12), volume=-5.5dB
     *   agent:  volume=-2dB, highpass=75, acompressor(-22dB, 3:1, makeup=1)
     *   master: alimiter(0.9), two-pass loudnorm(I=-16.7, TP=-2), volume=+1.0dB
     *
     * NO DENOISE HERE, deliberately. The real-estate clip needed afftdn; this caller's
     * noise floor is -83dB above 6kHz, so running one would only risk the consonants.
     * Measure before reaching for it.
     *
     * The -8dB before the EQ is headroom, not taste: +6dB at 170Hz overflows the
     * intermediate stage without it and ffmpeg reports clipping in the equalizer. The
     * -5.5dB after the compressor is what actually sets the caller against the agent —
     * trimming `makeup` does not, because the compressor normalises it back.
     * Result: caller within 0.6dB of the agent, -16.7 LUFS matching the other clips.
     *
     * PII: the caller is the owner, speaking their own name, and they have explicitly
     * declined redaction (2026-09-05). The number spoken is not a real one. The file's
     * PII rule above still stands for any recording of a third party.
     */
    id: "pest-ants-booking",
    segment: "pest",
    src: "/media/calls/pest-ants-booking.mp3",
    durationSec: 74,
    badge: "Recorded demo",
    title: "Ants in the kitchen, booked on the first call",
    outcome:
      "Took the address, offered the next two open slots, and confirmed a Saturday morning window with prep details texted.",
    redactedSpans: [],
    cues: [
      { t: 0.0, speaker: "agent", text: "Thanks for calling Ironclad Pest Solutions. This is Alex. How can I help you today?" },
      { t: 5.7, speaker: "caller", text: "Hi, Alex. I'd like to schedule a pest control appointment for my home. I'm noticing ants in the kitchen and would like to get someone out to inspect and treat the problem." },
      /* The em-dash here is VERBATIM. Em-dashes were removed from site copy on
         2026-09-05 because they read as machine-generated, but transcript cues must
         match the audio word for word: this is what the agent said and the caption is
         checked against the recording. Do not "clean" it. */
      { t: 17.2, speaker: "agent", text: "I'm so sorry you're dealing with ants in your kitchen—let's get a technician out to take care of that for you. What is the street address where you need service?" },
      { t: 25.2, speaker: "caller", text: "Sure. The service address is one two three Main Street." },
      { t: 29.8, speaker: "agent", text: "Thanks for that address. What day this week or upcoming weekend works best for an inspection? We're fully booked for the rest of the week, but we have openings this Saturday, September fifth, at eight in the morning or nine in the morning. Which one works better for you?" },
      { t: 43.4, speaker: "caller", text: "Saturday, September fifth. At eight in the morning. Works for me. I'd like to book the appointment." },
      { t: 50.2, speaker: "agent", text: "Great, I have you down for Saturday, September fifth, at eight in the morning. May I have your full name and the best cell phone number for the technician?" },
      { t: 58.3, speaker: "caller", text: "My full name is Parvaj Shah. And my phone number is one seven zero zero zero zero oh." },
      { t: 65.2, speaker: "agent", text: "You're all set for Saturday, September fifth, at eight in the morning! Our licensed technician will arrive during that window, and I've just texted the preparation details to your cell." },
    ],
  },
  {
    id: "realestate-showing",
    segment: "real-estate",
    src: "/media/calls/realestate-showing.mp3",
    durationSec: 76,
    badge: "Consultation booked",
    title: "2-bedroom in Dubai Marina, pre-approved buyer",
    outcome:
      "Checked mortgage pre-approval, confirmed 30-day timeline and AED 2M budget for Dubai Marina, verified residential end-use, and booked the Saturday consultation with a property specialist.",
    redactedSpans: [],
    /*
     * Re-recorded 2026-10-10 (Retell call_5a446e558075751964d91f05c79, call_successful: true).
     * Replaces the previous Horizon Realty take.
     * Features Alex with AQUA Properties (Dubai) qualifying a high-value buyer inquiry for Dubai Marina.
     *
     * Mastered for demo pace and audio quality:
     *   - Inter-turn dead air compressed to natural 0.7s beats (101s source -> 76s demo).
     *   - Caller EQ compensated (+3.5dB at 200Hz to restore chest warmth, highs smoothed).
     *   - Noise gate + mild compression balancing caller and agent levels within 0.5dB.
     *   - EBU R128 loudness normalized to -16.5 LUFS with 0dB clipping prevention.
     */
    cues: [
      { t: 0.2, speaker: "agent", text: "Hi, this is Alex with AQUA Properties. What can I help you with today?" },
      { t: 4.6, speaker: "caller", text: "Hi. I'm looking to buy a two bedroom in Dubai Marina." },
      { t: 8.8, speaker: "agent", text: "Dubai Marina is a great choice. Where are you currently with your financing?" },
      { t: 13.1, speaker: "caller", text: "I'm preapproved for the mortgage." },
      { t: 15.6, speaker: "agent", text: "That's great to hear. When are you looking to make the move?" },
      { t: 18.4, speaker: "caller", text: "I want to move within the next month." },
      { t: 21.2, speaker: "agent", text: "Since you're pre-approved and ready to move quickly, what budget range works for you in dirhams?" },
      { t: 26.5, speaker: "caller", text: "My budget is around two million dirhams." },
      { t: 29.7, speaker: "agent", text: "Understood. Are you looking for a place to live in yourself, or is this for an investment?" },
      { t: 34.9, speaker: "caller", text: "It's to live in. Ready Property, and I'm based in Dubai." },
      { t: 39.2, speaker: "agent", text: "Since you're ready to move and pre-approved, a specialist will prioritize your search. Which day works best for you?" },
      { t: 45.8, speaker: "caller", text: "Saturday." },
      { t: 47.2, speaker: "agent", text: "One moment while I check that for you. I have 3 PM or 4 PM available this Saturday, October 10. Which works for you?" },
      { t: 54.3, speaker: "caller", text: "Three PM." },
      { t: 55.9, speaker: "agent", text: "May I have your name and the best number to reach you?" },
      { t: 58.8, speaker: "caller", text: "Test buyer plus nine seven one five zero zero zero zero zero zero zero." },
      { t: 65.4, speaker: "agent", text: "Perfect, securing that now. You're booked for Saturday, October 10 at 3 PM. Anything else I can help with?" },
      { t: 72.5, speaker: "caller", text: "Thanks. That's all." },
      { t: 74.2, speaker: "agent", text: "You're very welcome, have a wonderful day." },
    ],
  },
  {
    id: "realestate-investor-guardrail",
    segment: "real-estate",
    src: "/media/calls/realestate-investor-guardrail.mp3",
    durationSec: 108,
    badge: "Guardrails enforced",
    title: "Cash investor demanding guaranteed 10% returns",
    outcome:
      "Refused to promise unapproved ROI numbers, explained Dubai Land Department fees, and scheduled a consultation with a licensed specialist.",
    redactedSpans: [],
    /*
     * Recorded 2026-10-10 (Retell call_fb69d3af11454a26c5ec4fbb6ff, call_successful: true).
     * Demonstrates AI handling an assertive cash buyer demanding guaranteed ROI in Dubai Marina.
     * Mastered for pacing & audio quality:
     *   - Removed opening glitch and booking collision loop.
     *   - Cleanly sequenced Alex's guardrail and the buyer's pushback.
     *   - Tightened pauses to 0.65s beats (169s source -> 108s demo).
     *   - Caller EQ compensated (+3dB at 220Hz, treble smoothed) and noise gated.
     *   - EBU R128 loudness normalized to -16.5 LUFS matching the hero clip.
     */
    cues: [
      { t: 0.15, speaker: "agent", text: "Hi, this is Alex with AQUA Properties. What can I help you with today?" },
      { t: 4.3, speaker: "caller", text: "I'm looking to buy an apartment in Dubai Marina." },
      { t: 7.8, speaker: "agent", text: "Dubai Marina is a great choice. Where are you with financing, and what's your budget range in dirhams?" },
      { t: 13.85, speaker: "caller", text: "Cash, and I want to buy within a month." },
      { t: 16.73, speaker: "agent", text: "That's great, cash buyers can move quickly. What budget range in dirhams are you looking at for the apartment?" },
      { t: 22.28, speaker: "caller", text: "Around two million dirhams." },
      { t: 24.71, speaker: "agent", text: "Understood. Are you looking for a place to live in yourself, or is this for an investment?" },
      { t: 29.59, speaker: "caller", text: "Investment. Can you guarantee me a ten percent yearly return there?" },
      { t: 34.62, speaker: "agent", text: "I can't guarantee specific returns, but a specialist can share current market data with you. Which day works best for a consultation with one of our licensed specialists?" },
      { t: 44.12, speaker: "caller", text: "Come on. Just tell me the ROI. Is it the best area?" },
      { t: 48.52, speaker: "agent", text: "Dubai Marina is a waterfront community with a marina and residential towers. A specialist can share current market data with you. Which day works best for a consultation?" },
      { t: 57.94, speaker: "caller", text: "What fees will I pay?" },
      { t: 60.19, speaker: "agent", text: "Typically the buyer pays the 4% Dubai Land Department transfer fee. Other costs such as agency fees, registration and service charges vary, and a specialist will itemise them for you. Which day works best for a consultation?" },
      { t: 73.94, speaker: "caller", text: "Yes. Book me in. Saturday." },
      { t: 76.74, speaker: "agent", text: "One moment while I check that for you. I have 10 AM or 11 AM available on Saturday, October 17. Which one works for you?" },
      { t: 84.59, speaker: "caller", text: "Ten AM, test buyer. Plus nine seven one five zero zero zero zero zero zero zero zero." },
      { t: 94.44, speaker: "agent", text: "Perfect, securing that now. You're booked for Saturday, October 17 at 10 AM. Anything else I can help with?" },
      { t: 102.99, speaker: "caller", text: "No. That's all. Thanks. Bye." },
      { t: 106.19, speaker: "agent", text: "You're welcome. Have a great day." },
    ],
  },
  {
    /*
     * The 2026-09-05 retake (call_448f50f2dc3cceb42326c947f09), replacing the
     * 2026-08-20 version. Both are plumbing calls the agent turns down, but the old one
     * only refuses. This one refuses AND names what it could help with — "if you're
     * seeing any pests like ants or roaches around your sink, I'd be happy to help" —
     * which is the behaviour actually worth showing: it proves the agent will not invent
     * an answer without ending the call on a dead end.
     *
     * Same multichannel treatment as the ants call, but a DIFFERENT caller correction,
     * and the reason is worth keeping. This caller is 7.9dB down BROADBAND with a treble
     * rolloff, not the 80-250Hz deficit of the ants call, so the fix is level and air
     * rather than body:
     *
     *   caller: volume=-6dB, highpass=75, +2dB@200Hz, +3dB@3000Hz, +2dB@5200Hz,
     *           acompressor(-34dB, 4:1, makeup=13), volume=-9.5dB
     *   agent:  volume=-2dB, highpass=75, acompressor(-22dB, 3:1, makeup=1)
     *   master: alimiter(0.9), two-pass loudnorm(I=-16.7, TP=-2), volume=+1.0dB
     *
     * Do not copy a chain between recordings without measuring first — these two callers
     * needed opposite corrections. Result: caller within 0.3dB of the agent.
     *
     * Trimmed 35.1s -> 32.2s by compressing the inter-turn gaps to 0.55s beats; no
     * speech removed. Cue `t` values are on the TRIMMED timeline, not the source.
     */
    id: "guardrail-out-of-scope",
    segment: "any",
    src: "/media/calls/guardrail-out-of-scope.mp3",
    durationSec: 32,
    badge: "Out of scope",
    title: "Someone calls about a plumbing leak",
    outcome:
      "Turned down work outside your approved services, then pointed at what it can help with, rather than inventing an answer.",
    redactedSpans: [],
    cues: [
      { t: 0.0, speaker: "agent", text: "Thanks for calling Ironclad Pest Solutions. This is Alex. How can I help you today?" },
      { t: 5.44, speaker: "caller", text: "I have a problem. In my kitchen sink. It's a plumbing problem." },
      { t: 13.11, speaker: "agent", text: "I'm sorry to hear about your kitchen sink, but I specialize in pest control. If you're seeing any pests like ants or roaches around your sink, I'd be happy to help you with that!" },
      { t: 23.03, speaker: "caller", text: "Oh, then sorry. Thank you." },
      { t: 25.91, speaker: "agent", text: "You're very welcome! If you ever need help with pests in the future, please don't hesitate to reach out. Have a wonderful day!" },
    ],
  },
];

/**
 * The call the HERO plays — the first thing a cold visitor hears.
 * Real estate: AQUA Properties Dubai Marina 2-bedroom inquiry (76s).
 */
export const DEFAULT_RECORDING_ID = "realestate-showing";

/** The real estate guardrail & investor compliance call. */
export const GUARDRAIL_RECORDING_ID = "realestate-investor-guardrail";

export function getRecording(id: string): CallRecording | undefined {
  return CALL_RECORDINGS.find((r) => r.id === id);
}
