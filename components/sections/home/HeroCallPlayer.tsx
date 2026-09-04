import { getRecording, DEFAULT_RECORDING_ID } from "@/lib/data/call-recordings";
import CallPlayer from "@/components/ui/CallPlayer";

/**
 * The hero's proof panel: a real recorded call, playable where the visitor lands.
 *
 * This replaces a static poster that only linked down to #hear-it, which in turn had
 * replaced a fake widget. The argument for playing it here is the product's own: the
 * page claims an AI can answer your phone well enough to replace a receptionist, and
 * the fastest way to settle that is to let someone hear it in the first screen rather
 * than asking them to scroll and trust a description on the way.
 *
 * It renders DARK against the cream hero deliberately — the panel is the one thing in
 * the first screen that should read as a piece of equipment rather than as page.
 *
 * Caption variant, not the scrolling rail: at hero size a 170-second transcript is a
 * wall of text, while captions put one line at a time at a readable size and carry the
 * motion that tells a visitor this is live audio, not a screenshot. The full transcript
 * is still in the DOM for crawlers and screen readers, and the #hear-it band below
 * carries the complete scrolling rail plus the guardrail call.
 */
export default function HeroCallPlayer() {
  const rec = getRecording(DEFAULT_RECORDING_ID);
  if (!rec) return null;

  return (
    <div className="rounded-[1.75rem] bg-ink p-2 shadow-xl shadow-ink/10">
      <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-1">
        <span className="inline-flex items-center gap-2 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-crew-gia-on-dark">
          <span className="size-1.5 animate-pulse rounded-full bg-crew-gia-on-dark motion-reduce:animate-none" />
          Hear the AI live
        </span>
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-cream/65">
          Real recorded call
        </span>
      </div>

      <CallPlayer recording={rec} variant="caption" size="hero" className="border-0 bg-transparent" />
    </div>
  );
}
