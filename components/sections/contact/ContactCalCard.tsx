import { CalendarDays, Clock, Video } from "lucide-react";

const CAL_LINK = "https://cal.com/minionsai/30min";

/**
 * Wraps the Cal.com embed in a branded frame.
 *
 * The header states the facts a visitor checks before committing — what the meeting
 * is, that it is free, how long it runs and how it happens — so the decision is made
 * in our own type before the foreign iframe paints. The embed repeats some of this,
 * but it loads late and unstyled; ours is server-rendered and on-brand.
 *
 * Height is a small step rather than one fixed value: the embed needs enough room to
 * show a full month without clipping a week row, which a viewport-relative cap did at
 * some heights, and 620px clears the calendar on a phone without a nested scrollbar.
 */
export default function ContactCalCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="border-b border-border px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-teal/10 text-teal">
            <CalendarDays className="size-5" aria-hidden />
          </div>
          <div>
            <p className="font-heading font-bold text-ink">Meet the implementation team</p>
            <p className="text-[15px] text-ink/75">Free, no obligation to buy</p>
          </div>
        </div>

        <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-ink/75">
          <li className="flex items-center gap-1.5">
            <Clock className="size-4 shrink-0 text-teal" aria-hidden />
            30 minutes
          </li>
          <li className="flex items-center gap-1.5">
            <Video className="size-4 shrink-0 text-teal" aria-hidden />
            Video or phone
          </li>
        </ul>
      </div>

      <iframe
        src={`${CAL_LINK}?embed=true&theme=light`}
        title="Book a call with Minions.AI"
        className="h-[620px] w-full border-0 sm:h-[660px]"
        loading="lazy"
      />
    </div>
  );
}
