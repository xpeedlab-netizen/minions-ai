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
