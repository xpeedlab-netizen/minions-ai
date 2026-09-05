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
    /*
     * The 2026-09-05 retake. Replaces "pest-bedbug-emergency", the 2026-08-22 take the
     * owner judged unusable: it ran 170s, spent its first 80 seconds collecting details
     * one field at a time, and the agent asked for the phone number before the address.
     * This one books in 77 seconds.
     *
     * Recorded on a NEW agent — "Ironclad Pest Solutions AI Dispatcher (Fast
     * Single-Prompt)" (call_6315c7b0f1fd07721cd01c36c38) — which is why it is faster:
     * it takes the address and the slot in two turns instead of six.
     *
     * EDITED FOR PACE, AND THIS IS THE ONE THING TO KNOW BEFORE RE-CUTTING IT. The
     * source is 132s of which only ~72s is speech; the rest is six inter-turn gaps of
     * 5.6-8.3s while the live agent thinks. Every gap is compressed to a 0.6s beat and
     * the tail after the confirmation is dropped, giving 77s with every spoken word
     * intact. Nothing is reordered and no speech is removed. Cue `t` values are
     * therefore NOT the source timestamps — they are recomputed on the trimmed
     * timeline, so pulling fresh timings from Retell for this call will NOT line up.
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
    durationSec: 77,
    badge: "Booked in 77 seconds",
    title: "Ants in the kitchen, booked on the first call",
    outcome:
      "Took the address, offered the next two open slots, and confirmed a Saturday morning window with prep details texted — start to finish in under 80 seconds.",
    redactedSpans: [],
    cues: [
      { t: 0.0, speaker: "agent", text: "Thanks for calling Ironclad Pest Solutions. This is Alex. How can I help you today?" },
      { t: 5.7, speaker: "caller", text: "Hi, Alex. I'd like to schedule a pest control appointment for my home. I'm noticing ants in the kitchen and would like to get someone out to inspect and treat the problem." },
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
     *
     * [AUDIO] Re-processed 2026-09-05 after the owner said the caller still sounded bad.
     * Level alone was not the problem — the caller's TONE was. Measured per band against
     * the agent, the source caller was down 21.7dB at 80-250Hz, 9.8dB at 250-1000Hz and
     * 5.2dB at 1-3kHz: a loss tilted hard against the low end, which is what a phone held
     * away from the face (or on speakerphone) sounds like. Turning it up just makes a
     * thin voice louder, so the chain now restores body before it restores level:
     *
     *   highpass 70            kill rumble the 160Hz lift would otherwise amplify
     *   agate                  BEFORE the EQ - see the trap below
     *   EQ +5 @160  +2 @300    body the caller lost to mic distance
     *      +3 @2.6k            presence, so the words cut through
     *   acompressor x2         -30dB/6:1 does the level matching (it acts far harder on
     *                          the quiet caller), then -18dB/3:1 evens the result
     *   alimiter 0.89          catch the peaks the boosts create
     *   loudnorm I=-16 LRA=6   two-pass, measured values inline below
     *
     * Result: caller -17.2..-21.1dB vs agent -15.9..-17.1dB (was a 10dB gap, now ~1.5dB);
     * 250-1000Hz matched to 0.4dB; LUFS -16.4, LRA 5.7. Gaps sit at -85dB mid-window.
     *
     * [NOISE] A further pass added broadband denoise, because the caller carried audible
     * hiss that the compression amplified along with the voice. It was NOT in the gaps —
     * the source room tone is -68..-87dB and flat, so the gate had already dealt with
     * silence. The hiss rides ON the voice: during the caller's turn the >6kHz band sat
     * 7dB HOTTER than during the agent's, and the +3dB presence lift made it worse.
     *
     * Fix: afftdn=nr=30:nf=-38:tn=1 placed after the highpass and before the gate, plus a
     * 6.5kHz lowpass and a -7dB shelf at 6kHz. Speech intelligibility lives below ~6kHz,
     * so that band is nearly all noise on a phone call.
     *
     *   caller hiss (>6kHz)     -29.4dB -> -36.0dB   (like-for-like, same loudness)
     *   caller speech-to-hiss    10.1dB ->  16.8dB   (agent's own figure is 15.9dB)
     *   caller 1-3kHz           -25.4dB -> -25.4dB   (intelligibility UNCHANGED)
     *   caller 4-6kHz           -34.5dB vs agent -33.9dB (sibilance intact)
     *
     * Those last two lines are the guard rails: aggressive denoise kills consonants
     * (s/f/t live at 4-6kHz) and dulls the 1-3kHz band. If you retune nr/nf, re-measure
     * BOTH or you will trade hiss for a muffled, lisping caller.
     *
     * Do not compare the shipped ratio against the RAW source (18.9dB) and conclude this
     * made things worse — the raw figure is taken on a signal ~14dB quieter that the
     * compressor then lifts. Only compare two fully-processed files at the same loudness.
     *
     * [TRAP] The gate must come BEFORE the EQ. Placed after, the 160Hz lift amplifies
     * low-frequency room tone past the gate's detection sensitivity and the makeup gain
     * carries it through — a 15dB noise-floor rise, the same class of regression as the
     * 21dB one on the previous pass. Also: do not judge a gap from a window average.
     * A window spanning the tail of one word and the start of the next reads ~-48dB and
     * looks broken; slice it at 0.2s and the middle is -85dB. Check the SHAPE, not the mean.
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
      "Turned down work it does not do, then pointed at what it can help with — rather than inventing an answer.",
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
 *
 * Real estate, and the pest retake did NOT change this (owner's call, 2026-09-05).
 * The earlier note here said to reconsider once a good pest take existed. One now does
 * — pest-ants-booking books in 77s against this clip's 117s — and the decision was
 * still to keep real estate, because the two clips prove different things. The ants
 * call is a clean happy path: nothing goes wrong, so nothing is tested. This one is
 * asked for a slot that is unavailable (0:64) and offers alternatives instead of
 * failing. A call where the agent RECOVERS is stronger proof than one where it is
 * never challenged, and that is worth the extra 40 seconds in the hero.
 *
 * So do not "fix" this by pointing it at the shorter clip. If you want to revisit it,
 * the argument to beat is the recovery moment, not the duration.
 *
 * This is deliberately NOT tied to the audience segment — the hero renders above the
 * toggle, so it needs one fixed clip. `SEGMENT_COPY[...].recordingId` in lib/segments.ts
 * still drives the per-audience player in the proof band, where a pest visitor gets the
 * ants call.
 */
export const DEFAULT_RECORDING_ID = "realestate-showing";

/** The scope-discipline call, shown to every audience alongside the main one. */
export const GUARDRAIL_RECORDING_ID = "guardrail-out-of-scope";

export function getRecording(id: string): CallRecording | undefined {
  return CALL_RECORDINGS.find((r) => r.id === id);
}
