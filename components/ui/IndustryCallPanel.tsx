import CallPlayer from "@/components/ui/CallPlayer";
import { getRecording } from "@/lib/data/call-recordings";

/**
 * A real recorded call, framed for an industry hero.
 *
 * The industry heroes shipped simulated widgets — scripted dispatch logs and SMS
 * threads on timers. They were the same credibility problem the homepage had: a page
 * selling an AI that answers the phone, showing an animation of an AI answering the
 * phone. These pages get the real recording for their own vertical instead, so a pest
 * operator hears a pest call and an agency hears a showing booked.
 *
 * Shares CallPlayer with the homepage rather than restyling one: same transport, same
 * caption stage, same analytics. Only the frame and the eyebrow differ.
 */
export default function IndustryCallPanel({
  recordingId,
  eyebrow,
}: {
  recordingId: string;
  eyebrow: string;
}) {
  const rec = getRecording(recordingId);
  if (!rec) return null;

  return (
    <div className="rounded-[1.75rem] bg-ink p-2 shadow-xl shadow-ink/10">
      <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-1">
        <span className="inline-flex items-center gap-2 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-crew-gia-on-dark">
          <span className="size-1.5 animate-pulse rounded-full bg-crew-gia-on-dark motion-reduce:animate-none" />
          {eyebrow}
        </span>
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-cream/65">
          Real recorded call
        </span>
      </div>

      <CallPlayer
        recording={rec}
        variant="caption"
        size="hero"
        className="border-0 bg-transparent"
      />
    </div>
  );
}
