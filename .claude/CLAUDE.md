# CLAUDE.md — Operating Contract

## Session Start Protocol
1. Read `.claude/memory.md`
2. Read `.claude/invariants.md`
3. Identify which feature(s) this task touches → read ONLY those features' `purpose.md` and `rules.md`.
4. If writing or modifying code: read `.claude/standards.md`.

## Before Any Code Change — Blast Radius Declaration
State in your response before editing:
- Files to modify: [...]
- Features affected: [...]
- Invariants that apply: [...]
If a change touches multiple features unexpectedly, pause and confirm design intent.

## Coding Behavior & Pragmatism
- Think before coding: state assumptions clearly; present design choices when ambiguity exists.
- Simplicity & flexibility: write clean, maintainable code. Prefer direct solutions over complex abstractions.
- Surgical edits: touch only what the task requires. Match surrounding code style.
- Goal-driven execution: verify changes using `npm run build` or runtime checks before completing.

## Anti-Refactoring & Scope Safety
- Never refactor, rename, or "clean up" unrelated code outside the task scope. Log observations in `memory.md`.
- Never delete documentation, overwrite assets, or remove comments unprompted.
- Keep instructions flexible: prioritize user goals and pragmatism over rigid pedantry.

## Fixed Crew Assets & Integration Rule
- Mascot PNG images in `/public/images/mascots/*.png` are FIXED. Never generate new crew assets or use `.jpg` placeholders.
- Integrations must reflect ServiceTitan, Housecall Pro, Jobber, FieldRoutes, PestPac, and GorillaDesk (Never GHL).

## Session End Protocol
1. Append ONE single-line entry to `memory.md` under `## Sessions`:
   `YYYY-MM-DD | <task> | decision: <summary> | changed: <files> | docs: <updated docs> | open: <none/question>`
2. If memory.md exceeds 120 lines, move oldest Session entries to `.claude/archive/memory-YYYY-MM.md`.

## Doc–Code Conflict Rule
If code contradicts docs or invariants, stop and clarify with the user. Never silently guess intent.
