import { CheckCircle2 } from "lucide-react";

const items = ["Fixed price, no lock-in", "Live in 3 to 6 weeks", "Real humans, fast replies"];

/**
 * The three standing objection-killers.
 *
 * Rendered inline under the hero rather than as its own tinted band at the foot of the
 * page: below the fold and at 14px these were read by nobody, and they answer exactly
 * the questions a visitor has while deciding whether to give up a calendar slot. Copy is
 * unchanged — only placement and legibility.
 */
export default function ContactTrustStrip() {
  return (
    <ul className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-x-8">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-[15px] text-ink/75">
          <CheckCircle2 className="size-4 shrink-0 text-success-text" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}
