# Industry Solutions: Rules & Component Suite

Every industry page must consume the standard 6-component suite for complete design consistency:
1. `[Industry]Hero.tsx` & `[Industry]HeroAnimation.tsx` (Split hero with active live badge & interactive dark simulator widget).
2. `[Industry]Stats.tsx` (Metric cards highlighting recovered revenue/LTV, speed, zero missed calls, and CRM sync).
3. `[Industry]Problem.tsx` (3-card revenue leak exposé grid).
4. `[Industry]CrewBento.tsx` — **primary agent + supporting automations** layout. All
   five roles (Rex/Alex, Zip, Pip, Gia, Otto) MUST remain present for that industry, so
   the page never contradicts the homepage crew band or `/how-it-works`. The voice agent
   leads in a full-width dark card; the other four are compact icon + name + one-line
   rows in a 4-up grid. (REVISED 2026-09-07. The rule previously mandated a 5-card
   equal-weight Bento grid. It was changed because on a paid-traffic landing page the
   four supporting agents answer "what else do you do?" before the visitor has decided
   "does this answer my phone?", and at equal weight they cost roughly half the band's
   height to do it. The correction is hierarchy, NOT removal: an earlier trim to two
   cards silently dropped Pip, Gia and Otto and broke this rule.)
5. `[Industry]RoiCalculator.tsx` (Interactive revenue & recurring LTV recovery slider calculator).
6. `[Industry]FinalCta.tsx` (High-converting dark gradient banner with 7-day deployment CTAs).
