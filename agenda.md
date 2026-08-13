# Minions AI — Agenda & Agent Architecture Guide (`agenda.md`)

This document serves as the permanent operational guide, workflow contract, and context system for building, maintaining, and scaling the **Minions AI** web application and AI Crew products.

---

## 🎯 Core Operating Principles & Fixed Brand Rules

### 1. Fixed Crew Mascot Assets (NEVER Generate New Crew Images)
- The 5 Minions AI crew members are fixed canonical characters with pre-rendered, high-resolution 3D PNG portraits located in `/public/images/mascots/`:
  - **Rex** (24/7 AI Voice Dispatcher): `/images/mascots/rex.png`
  - **Zip** (5-Second Speed-to-Lead): `/images/mascots/zip.png`
  - **Pip** (24/7 Customer Support AI): `/images/mascots/pip.png`
  - **Gia** (Automated CRM & Reviews): `/images/mascots/gia.png`
  - **Otto** (Back-Office & Document AI): `/images/mascots/otto.png`
- **STRICT RULE**: **NEVER** use the `generate_image` tool to create new crew/mascot photos. **NEVER** use legacy `.jpg` mascot images (`rex-mascot.jpg`, etc.).
- **STYLING RULE**: Mascot PNGs must always be rendered with `object-contain` inside a styled avatar badge (`rounded-2xl bg-teal/20 border border-teal/40 p-1 overflow-hidden`).

### 2. Deep ICP (Ideal Customer Profile) Copy & Value Alignment
- **Primary Launch Market**: **Pest Control Operators (PCOs)** & Branch Managers (5–50 tech fleets).
- **Secondary Markets**: HVAC Contractors, Plumbing Contractors, Roofing Contractors, Electrical Contractors.
- **Pain Points Addressed**:
  - Panicked late-night calls (burst pipes, wasps near kids' rooms, arcing breakers, 98° AC breakdowns).
  - High-ticket job losses to competitors who answer first.
  - Recurring quarterly maintenance subscription conversions ($2,500+ lifetime value).
  - Zip code territory & route density filtering.
- **Integrations Contract**: Portray ServiceTitan, Housecall Pro, Jobber, FieldRoutes, PestPac, and GorillaDesk. **NEVER** reference GoHighLevel (GHL).

### 3. Modern Design Philosophy (Apple, Linear, Sierra AI, Stripe)
- High-contrast Apple/Linear dark mode simulator widget frames (`rounded-[28px] border-4 border-ink/10 bg-ink p-6 shadow-2xl text-white`).
- Curated color tokens: `--color-ink` (`#12242a`), `--color-teal` (`#0e5c63`), `--color-coral` (`#ff6b4a`), `--color-cream` (`#fff8f0`).
- Interactive dispatch simulators and real-time ROI recovery calculators on all industry and product pages.

---

## 🏛️ The `.claude` Architecture — Agent Build Guide

A step-by-step system for making an AI coding agent build and maintain its own structured context state inside any repo. Run the prompts sequentially (recommended for existing codebases) or use the single mega-prompt at the end.

Foundation: Karpathy-style behavioral guardrails (think before coding, simplicity first, surgical changes, goal-driven execution) + a curated, size-budgeted doc layer that survives across sessions.

---

### 0. Target Structure

```
.claude/
├── CLAUDE.md              ← Operating contract. Router, not encyclopedia. ≤ 80 lines.
├── invariants.md          ← Global rules the agent may NEVER override. ≤ 60 lines.
├── standards.md           ← Architecture & code-quality standards. NEW code only. ≤ 100 lines.
├── memory.md              ← Rolling continuity log. ≤ 120 lines, pruned every session.
├── archive/
│   └── memory-YYYY-MM.md  ← Evicted memory entries. Append-only. Never loaded by default.
└── features/
    └── <feature-name>/
        ├── purpose.md     ← WHY this exists. Business logic. ≤ 60 lines.
        └── rules.md       ← Constraints, edge cases, do-not-touch list. ≤ 80 lines.
```

**Core principles baked into every prompt below:**

- **Budgets, not vibes.** Every doc has a max size. Overflow goes to archive, never gets silently deleted.
- **Router pattern.** CLAUDE.md never contains feature knowledge. It tells the agent *which file to read* for which task. Context stays small and relevant.
- **Blast radius declaration.** Before editing, the agent states: files it will touch, features affected, invariants that apply. Cross-feature edits require explicit user approval.
- **Docs are load-bearing.** If code and docs disagree, the agent must stop and ask — never silently trust either side.

---

### PHASE 1 — Repo Audit & Feature Map

```text
You are setting up a structured context system for this repository.
Do NOT write any files yet. This phase is read-only analysis.

1. Scan the repository structure and identify the distinct FEATURES /
   PIPELINES / MODULES. A feature = a unit with its own business purpose,
   not just a folder. Aim for 4–12 features; if you find more, group them.

2. For each feature, output a table row:
   | Feature | Entry points (files) | What I THINK it does | Confidence (H/M/L) |

3. List every place where you are UNCERTAIN about business intent.
   Phrase each as a direct question to me. Do not guess.

4. List anything that looks like dead code, duplication, or a candidate
   for refactoring — but ONLY as observations. You will never act on
   these without explicit instruction.

Stop after this output and wait for my corrections. My corrections are
ground truth and override your inferences.
```

---

### PHASE 2 — Skeleton & Operating Contract (CLAUDE.md)

```text
Using the corrected feature map, create the .claude/ directory skeleton:

.claude/CLAUDE.md
.claude/invariants.md        (placeholder for now)
.claude/memory.md            (initialize with today's date and "System initialized")
.claude/archive/             (empty, with a .gitkeep)
.claude/features/<name>/     (one folder per confirmed feature, empty for now)

Then write CLAUDE.md as an OPERATING CONTRACT with exactly these sections.
Hard limit: 80 lines. It must contain NO feature-specific knowledge — only
protocol and pointers.

# CLAUDE.md — Operating Contract

## Session start protocol
1. Read .claude/memory.md
2. Read .claude/invariants.md
3. Identify which feature(s) this task touches → read ONLY those
   features' purpose.md and rules.md. Do not load unrelated features.

## Before any code change — Blast Radius Declaration
State in your response, before editing:
- Files I will modify: [...]
- Features affected: [...]
- Invariants that apply: [...]
If the task touches more than one feature, or any file not obviously
inside the stated feature: STOP and ask for approval first.

## Coding behavior (non-negotiable)
- Think before coding: state assumptions; if multiple interpretations
  exist, present them — never pick silently.
- Simplicity first: minimum code that solves the problem. No speculative
  abstraction, flexibility, or error handling for impossible cases.
- Surgical changes: touch only what the task requires. Never "improve"
  adjacent code, comments, or formatting. Match existing style. Remove
  only orphans YOUR change created.
- Goal-driven: define a verifiable success criterion before starting;
  loop until verified.

## Anti-refactoring guards
- Never refactor, rename, move, or "clean up" code that was not the
  explicit subject of the task. If you notice an improvement: log it in
  memory.md under "Observations" and move on.
- Never replace docs with aliases or summaries-in-place.
- Never delete any file or doc content without explicit instruction.
- Never auto-deduplicate docs or code.
- If a change improves structure but might reduce usability or break a
  consumer: stop and ask.

## Session end protocol
1. Append ONE single-line entry to memory.md's Sessions section, in the
   format: YYYY-MM-DD | task | decision: ... | changed: ... | docs: ... | open: ...
   Never write a multi-line entry. If it doesn't fit on one line,
   compress it further — don't wrap it.
2. If the change altered a feature's behavior or constraints, update
   that feature's purpose.md / rules.md and say so in the memory line.
3. Enforce budgets: if memory.md > 120 lines, move oldest Sessions
   lines (verbatim, still one line each) to
   .claude/archive/memory-YYYY-MM.md — never deleting, never merging.

## Doc–code conflict rule
If code contradicts purpose.md, rules.md, or invariants.md: STOP.
Report the contradiction. Never silently trust either side.

Output the full CLAUDE.md for my review before saving.
```

---

### PHASE 3 — invariants.md (Interview Mode)

```text
We will now write .claude/invariants.md. This file contains ONLY rules
you may NEVER override, in any session, regardless of how reasonable a
change looks locally.

Step 1 — Interview me. Ask up to 10 targeted questions to surface:
- Business rules that must never break (pricing, permissions, data
  retention, compliance, ordering of operations, etc.)
- Architectural decisions that are intentional even if they look ugly
- Integrations/contracts other systems depend on (APIs, DB schemas,
  file formats, webhooks)
- Performance or cost ceilings

Step 2 — Also propose candidate invariants you inferred from the code,
clearly marked [INFERRED — CONFIRM?]. I will approve or reject each.

Step 3 — Write invariants.md, max 60 lines, one invariant per line,
each starting with MUST or NEVER, each concrete and testable.
Bad:  "NEVER break the API"
Good: "NEVER change response field names in /api/v1/* — external
       clients depend on them"

End the file with:
"An agent may not edit this file. Changes require the human to edit
it directly."
```

---

### PHASE 4 — Per-Feature purpose.md + rules.md

```text
Write the docs for feature: <FEATURE_NAME>

Read only the files belonging to this feature (from the Phase 1 map)
plus anything it directly imports. Then produce:

--- purpose.md (max 60 lines) ---
# <Feature>: Purpose
- What business problem this solves (2–3 sentences, in domain language,
  not code language)
- Who/what consumes it (users, other features, external systems)
- The 3–5 key behaviors that define "working correctly"
- Explicit NON-goals: what this feature deliberately does NOT do
- [OPEN QUESTION] markers for anything you couldn't infer — ask me

--- rules.md (max 80 lines) ---
# <Feature>: Rules
- Local invariants (constraints true only inside this feature)
- Known edge cases and WHY they're handled the way they are
- DO NOT TOUCH list: fragile code, intentional weirdness, workarounds —
  with one line each explaining why it must stay
- Dependencies: what breaks downstream if this feature's behavior changes
- Test expectations: how to verify this feature still works

Rules for writing both files:
- Capture INTENT, not implementation. Never paraphrase code line-by-line
  — that's duplication that will rot.
- If purpose is ambiguous, ask me instead of writing something plausible.
- Every claim must be traceable to code you actually read or an answer
  I gave. No filler.

Show me both files before saving. My corrections override your drafts.
```

---

### PHASE 5 — memory.md Format & Lifecycle

```text
Initialize .claude/memory.md with this exact structure and rules:

# Memory
Budget: 120 lines max. Newest entries at top of each section.
RULE: every entry below is EXACTLY ONE LINE. No multi-line entries,
no sub-bullets, no wrapped continuation lines. Compress until it fits.

## Active issues
(one line each — remove when resolved, don't move to Sessions)

## Observations
(one line each — improvement ideas seen in passing; NEVER act on these
unprompted)
[SMELL] <file/area> — <what> — <why it matters>

## Sessions
(one line each, this exact shape:)
YYYY-MM-DD | <task> | decision: <what was decided/done> | changed: <files or features> | docs: <updated docs or "none"> | open: <unresolved question or "none">

Lifecycle rules:
1. Every session appends exactly ONE line to Sessions, in the format above.
2. When the file exceeds 120 lines: move the OLDEST session lines
   verbatim (still one line each) into .claude/archive/memory-YYYY-MM.md.
3. "Active issues" is the only section allowed to be edited — and only to delete a line once resolved.
4. Archive files are never loaded at session start. They exist for human forensics.
```

---

### PHASE 6 — standards.md (Architecture & Code Quality)

```text
We will now write .claude/standards.md — architecture and code-quality
standards. Max 100 lines.

Step 1 — Detect, don't invent. Read a representative sample of the
codebase and report the CONVENTIONS ALREADY IN USE:
- Layering / module boundaries
- Error handling style, naming style, test structure
- Dominant patterns already present
Show me this as a list marked [DETECTED]. I will confirm or correct.

Step 2 — After my confirmation, write standards.md with exactly these
sections:

# Standards — for NEW code only
SCOPE RULE (put this first, verbatim):
"These standards apply ONLY to code being written or directly modified
for the current task. Existing code that violates them is NEVER fixed,
rewritten, or 'aligned' unprompted — log it under Observations in
memory.md and move on. Consistency with surrounding code beats
conformance to this file. If they conflict, match the surrounding code
and flag the conflict."

## Architecture rules
- Layering/boundary rules as testable MUST/NEVER lines

## Pattern policy
- Default to boring, direct code.
- Rule of three: no abstraction until third concrete duplication.

## Code smell tripwires (for NEW code you are writing)
- Function > ~40 lines or nesting > 3 deep → restructure before finishing
- A class/module that knows about > N other modules → wrong boundary
- Same business rule expressed in 2+ places → stop, ask where it lives
- Boolean/flag parameters that change a function's behavior → split it
- Catch-and-ignore error handling → never

## Smell reporting protocol (for EXISTING code)
When you notice a smell in code you didn't write: log one line in
memory.md Observations — "[SMELL] file:area — what — why it matters".

Step 3 — Add ONE line to CLAUDE.md's session start protocol:
"4. If the task writes or modifies code: read .claude/standards.md"

Show me the full file before saving.
```

---

### PHASE 7 — Verification & Drift Check

```text
Run a context-system audit. Do not change any code.

1. COVERAGE: list any feature/pipeline in the codebase with no folder under .claude/features/.
2. DRIFT: for each feature, compare purpose.md + rules.md against current code.
3. BUDGETS: report line counts for CLAUDE.md (≤80), invariants.md (≤60), standards.md (≤100), memory.md (≤120), purpose.md (≤60), rules.md (≤80).
4. INVARIANT SCAN: check current code against invariants.md.
5. STANDARDS SCAN: check code changed since last audit against standards.md.

Output as a checklist. Wait for my decisions.
```

---

### The Mega-Prompt (All-in-One Alternative)

```text
Set up a structured context system for this repo in .claude/, then use
it for all future sessions.

1. Analyze the repo and identify 4–12 features. Show me the map and
   your open questions FIRST; wait for my corrections.
2. After my corrections, create:
   - .claude/CLAUDE.md — operating contract (≤80 lines): session start
     protocol (read memory.md, invariants.md, then ONLY the affected
     feature's docs); mandatory Blast Radius Declaration before edits
     (files, features, applicable invariants — multi-feature edits need
     my approval); Karpathy coding rules (state assumptions, simplicity
     first, surgical changes only, verifiable success criteria);
     anti-refactoring guards (never refactor/rename/clean up outside
     task scope, never delete or deduplicate docs, never replace docs
     with aliases, stop-and-ask when structure vs usability conflict);
     session end protocol (append to memory.md, update feature docs if
     behavior changed, enforce budgets by archiving — never deleting).
   - .claude/invariants.md (≤60 lines) — interview me first; every line
     MUST/NEVER, concrete and testable; agents may not edit this file.
   - .claude/features/<name>/purpose.md (≤60 lines: business intent,
     consumers, key behaviors, non-goals) and rules.md (≤80 lines:
     local invariants, edge cases with reasons, do-not-touch list,
     downstream dependencies, test expectations) for each feature.
     Capture intent, not code paraphrase. Ask instead of guessing.
   - .claude/standards.md (≤100 lines) — FIRST detect the conventions
     already in this repo and confirm them with me; then write:
     scope rule up top ("applies ONLY to new code in the current task;
     existing violations are logged as Observations, never fixed
     unprompted; consistency with surrounding code beats this file"),
     architecture/layering rules as MUST/NEVER lines, pattern policy
     (boring code by default, rule of three, patterns need a named
     present problem, off-list patterns require asking me), and
     concrete code-smell tripwires for new code (function length,
     nesting depth, duplicated business rules, flag parameters,
     primitive obsession, swallowed errors).
   - .claude/memory.md (≤120 lines: Active issues / Observations /
     Sessions — EVERY entry in every section is exactly one line, no
     multiline appends ever; Sessions format:
     "YYYY-MM-DD | task | decision: ... | changed: ... | docs: ... | open: ...";
     overflow archived verbatim, one line each, to .claude/archive/,
     append-only).
3. Doc–code conflict rule: if docs and code disagree, stop and report;
   never silently trust either.
4. Finish with an audit: coverage gaps, doc–code drift, budget
   compliance, invariant violations. Report only; I decide fixes.

Throughout: my answers are ground truth and override your inferences.
IMPORTANT: Crew mascot images are FIXED (`/images/mascots/{rex,zip,pip,gia,otto}.png`). Never generate new crew images.
```

---

## ⚡ Daily Operation Cheat Sheet

- **Start of session**:
  > Follow `.claude/CLAUDE.md` and `agenda.md`. Task: `<task>`. Begin with the session start protocol and your Blast Radius Declaration.

- **Out-of-scope "improvement"**:
  > Log it under Observations in `memory.md`. Do not implement.

- **Explicit refactor**:
  > Refactor `<X>`. This is the explicit subject of the task. Blast radius declaration first; `invariants.md` applies; update feature docs after.

- **Mascot assets**:
  > Always use pre-rendered 3D PNG portraits (`/images/mascots/*.png`). Never call image generation tools for crew members.
