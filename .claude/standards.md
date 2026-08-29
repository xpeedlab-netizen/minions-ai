# Standards — For NEW Code Only

SCOPE RULE:
"These standards apply ONLY to code being written or directly modified for the current task. Existing code that violates them is NEVER fixed, rewritten, or 'aligned' unprompted — log it under Observations in memory.md and move on. Consistency with surrounding code beats conformance to this file. If they conflict, match the surrounding code and flag the conflict."

## Architecture Rules
- Use Next.js 16 App Router conventions (`app/` directory for routes, `components/sections/` for page sections).
- Reusable UI primitives belong in `components/ui/` (`Button.tsx`, `Reveal.tsx`).
- Product & Industry feature components belong in their respective folders (`components/sections/<feature>/`).
- Static metadata and crew data registry belong in `lib/data/`.

## Pattern Policy
- Write simple, direct React functional components with clear prop types.
- Use `framer-motion` for smooth micro-animations, with fallback checks for reduced motion preference.
- Use `lucide-react` icons for consistent, crisp UI iconography.
- Maintain responsive Tailwind CSS utility classes with flex/grid containers.

## Code Quality Tripwires (For NEW code)
- Keep components focused and modular (< 300 lines per section component).
- Avoid inline static color strings where global CSS variables or brand utility tokens exist.
- Ensure all interactive buttons and links have accessible labels and hover/active states.
- Avoid swallowing errors in API routes — return structured JSON responses with proper HTTP status codes.

## Legibility Floor (non-negotiable)

The buyer is an owner-operator in their late fifties or sixties. NAR's 2025 Member Profile
puts 44% of REALTORS at 60 or older; the average independent pest control owner is late
50s–60s; US Census ABS has 51% of all employer-business owners at 55+. Small low-contrast
text is not a style choice for this audience, it is a conversion loss.

- **Reading text** (body, card copy, hooks, bullets, captions): minimum **15px**.
  Section leads 17–18px. Never `text-sm` (14px) for a paragraph.
- **Short uppercase labels only** (eyebrows, role tags, citations): minimum **12px**
  (`text-xs`). This is the single deliberate exception to the 14px floor — an all-caps
  mono label at 14px reads as a heading and fights the real headings. Contrast still applies.
- **Contrast: 4.5:1 minimum, always.** Derived per ground, so use these and nothing lower:
  - on cream/white → `text-ink/75` (6.9:1). `ink/40`, `/50`, `/55`, `/65` are 2.4–5.0.
  - on ink `#12242a` → `text-white/75` (9.5:1). `white/40` and `/45` fail.
  - on teal `#0e5c63` → `text-white/80` (5.6:1). `white/60` and `/65` fail.
- **Crew accents on dark grounds** must use `--color-crew-*-on-dark`. The base accents
  were chosen against cream and measure 2.08–3.68:1 on ink.
- Phone numbers are real `tel:` links using `SITE_PHONE_TEL` (E.164), never a
  `.replace(/\D/g, "")` of the display string — that silently drops the country code.

Verify with a contrast calculation, not by eye. Opacity over a known ground is computable;
guessing is how `white/40` at 10px shipped.

## One Corner Radius (landing page)

The landing page shipped four card radii at once — `rounded-3xl`, `rounded-2xl`,
`rounded-xl` and a stray `rounded-[2.5rem]` — which reads as inconsistency rather than
as a system. On the homepage bands there is now exactly one:

- **Cards, panels, image frames, ROI/simulator surfaces → `rounded-2xl`.**
- **`rounded-full` only for pills, badges, avatars, dots and status indicators.**
- Nothing else. No arbitrary `rounded-[Npx]` values in homepage bands.

Industry and service pages still carry the older mixture; bring them onto this rule when
a task already has them open, not as a sweep.

## No Decorative Blur Glows (landing page)

Radial `blur-3xl` / `blur-2xl` bloom divs are removed from the homepage bands. They are
the default treatment on every competing AI site, they cost paint time on mobile for no
information, and the brief's direction is calm and legible over distinctive. FinalCta
keeps its one glow — the owner has ruled that band finished.

Do not reintroduce a glow to "add depth" to a homepage band. Use ground tone, a hairline
border, or spacing instead.

**Controls are the one deliberate exception.** Buttons and button-shaped links stay at
`rounded-xl` (12px). A 16px radius on a 44px-tall control reads as a pill and blurs the
line between a button and a badge. So the page carries exactly two radii — 16px for
surfaces, 12px for controls — plus `rounded-full` for pills and avatars.
