import { Phone, ClipboardCheck, CalendarCheck, Database } from "lucide-react";

/**
 * WorkflowDiagram — what actually happens on a call, in four steps.
 *
 * This REPLACES prose rather than decorating it: an industry visitor's real question
 * is "what does the thing do when my phone rings?", and four labelled steps answer it
 * faster than a paragraph. That is the only reason it earns its height.
 *
 * Deliberately NOT an illustration or a chart. It carries no numbers, so there is
 * nothing here to source (see the illustrative-exposure note in PestProblem.tsx), and
 * it needs no new asset, which keeps it clear of the fixed-crew-assets rule.
 *
 * Icons are lucide, not inline SVG paths, so it inherits the site's icon language.
 * The connectors are pure CSS: an SVG line set would have to be re-measured at every
 * breakpoint, and this stack has to reflow to a single column on phones.
 */

const ICONS = [Phone, ClipboardCheck, CalendarCheck, Database] as const;

export default function WorkflowDiagram({
  steps,
  heading,
}: {
  /** Exactly four: one per stage of the call. */
  steps: { title: string; body: string }[];
  heading: string;
}) {
  return (
    <div className="w-full">
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.12em] text-ink/75 sm:text-xs">
        {heading}
      </p>

      <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = ICONS[i] ?? Phone;
          return (
            <li key={s.title} className="relative flex flex-col items-center text-center">
              {/* Connector to the NEXT step. Hidden on the last item and whenever the
                  grid has wrapped, so it never points into empty space. */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-6 hidden h-px w-full bg-border lg:block"
                />
              )}

              <span className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-teal/30 bg-teal/10 text-teal">
                <Icon className="size-5" />
              </span>

              <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/50">
                Step {i + 1}
              </p>
              <h3 className="mt-1 font-heading text-base font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{s.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
