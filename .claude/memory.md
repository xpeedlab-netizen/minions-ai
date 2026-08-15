# Memory
Budget: 120 lines max. Newest entries at top of each section.
RULE: every entry below is EXACTLY ONE LINE. No multi-line entries, no sub-bullets, no wrapped continuation lines. Compress until it fits.

## Active issues
(None currently active)

## Observations
[ASSETS] Ensure all crew mascot images use /images/mascots/*.png with object-contain.
[PORT] Local development server is configured to run at http://localhost:3050.

## Sessions
2026-08-15 | Audit & Fix Pip Chat Widget | decision: Ran e2e browser test on live getminions.ai, updated starter chips to Minions AI specific questions, identified upstream n8n RAG vector KB drift | changed: components/pip-widget/starter-chips.ts | docs: walkthrough.md | open: re-index n8n RAG vector store with Minions AI docs
2026-08-15 | Unify Gia & Otto Hero Layout | decision: Removed redundant pre-CTA cards and unified stacked headlines in GiaHero and OttoHero for complete site-wide visual consistency | changed: components/sections/{gia,otto}/*Hero.tsx | docs: walkthrough.md | open: none
2026-08-15 | Unify Industry Hero Titles | decision: Replaced 2-message stacked hero headlines with single punchy title and removed redundant pre-CTA cards across all 5 industry heroes | changed: components/sections/industries/*Hero.tsx | docs: walkthrough.md | open: none
2026-08-15 | Condense Crew Copy | decision: Streamlined copy across all 5 crew pages (Rex, Zip, Pip, Gia, Otto), eliminating repetitive customization preambles and condensing cards to 1-sentence value hooks | changed: components/sections/{rex,zip,pip,gia,otto}/* | docs: walkthrough.md | open: none
2026-08-15 | Condense Industry Copy | decision: Streamlined copy across all 5 industry pages (Pest, HVAC, Plumbing, Roofing, Electrical), reducing word count ~60% into punchy 1-sentence hooks | changed: components/sections/industries/* | docs: walkthrough.md | open: none
2026-08-14 | PageSpeed 99%+ pass (desktop+mobile) | decision: Reveal.tsx made polymorphic (as="li") to stop injecting bare <div> between ul/ol/dl and their required children; fixed TheRealCost h4->h3 heading-order skip; fixed HeroAnimation label text-ink/70 -> text-ink for color-contrast (was combining with animated opacity to fail 4.5:1) | changed: components/ui/Reveal.tsx, components/sections/home/TheRealCost.tsx, components/sections/home/HowItWorks.tsx, components/sections/home/Proof.tsx, components/sections/home/HeroAnimation.tsx | docs: none | open: none — Lighthouse (chrome-devtools-mcp) now 100/100/100/100 (a11y/best-practices/SEO/agentic) on both desktop and mobile against local build; LCP ~488-673ms lab, CLS 0.00 on both
2026-08-13 | Init .claude Architecture | decision: Created .claude context structure with CLAUDE.md, invariants.md, standards.md, memory.md, and feature docs | changed: .claude/* | docs: agenda.md | open: none
2026-08-13 | Industry Pages Overhaul | decision: Overhauled HVAC, Plumbing, Roofing, Pest Control (Flagship), and Electrical pages with Apple/Linear simulators, ROI calculators, and PNG avatars | changed: app/industries/*, components/sections/industries/* | docs: walkthrough.md, implementation_plan.md | open: none
