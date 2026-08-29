# Global Invariants (Do Not Override)

1. MUST use pre-rendered 3D PNG crew portraits (`/images/mascots/{rex,zip,pip,gia,otto}.png`) with `object-contain`.
2. NEVER generate new mascot images using AI generation tools or use legacy `.jpg` mascot images.
3. MUST portray **Pest Control Operators (PCOs) and Real Estate Agencies as the two co-primary target markets**, given equal weight in brand-level messaging. HVAC, Plumbing, Roofing, and Electrical are genuinely supported but explicitly secondary — never presented as a main focus. Brand-level copy (metadata, footer, trust bar, pricing, founder story) MUST NOT use trades-only framing such as "blue-collar", "contractors", or "trade businesses" as its sole umbrella, because that silently excludes real estate. (Twice-revised: the original rule named PCOs alone; a 2026-08-29 revision named Real Estate alone as flagship; the user then clarified that both are main and the rest are not. This wording is the clarified intent.)
4. MUST feature ServiceTitan, Housecall Pro, Jobber, FieldRoutes, PestPac, and GorillaDesk as CRM/dispatch partners.
5. GoHighLevel (GHL) MAY be named as a supported sales-side CRM, alongside HubSpot, Salesforce, Zoho and Pipedrive. (REVISED 2026-08-29 with explicit owner approval. The original rule read "NEVER reference GoHighLevel (GHL) in any page, component, data file, or UI text." It was overturned because the approved deployment proposal names GHL first in its own CRM list. This does NOT weaken #4: the six field-service systems remain the primary integration story for pest control, and GHL must never displace them or be presented as the platform Minions.AI is built on.)
6. MUST maintain local dev server port 3050 (`next dev -p 3050`).
7. MUST verify all 25 static and dynamic pages compile cleanly via `npm run build` without TypeScript errors.
8. MUST preserve brand color tokens (`--color-ink: #12242a`, `--color-teal`, `--color-coral`, `--color-cream`).
9. MUST maintain Apple/Linear style dark simulator frames (`rounded-[28px] border-4 border-ink/10 bg-ink shadow-2xl`) for visual dispatch previews.

An agent may not edit this file without human approval.
