/**
 * Starter questions shown when the conversation is empty. Chosen to match the
 * knowledge base Pip is trained on (pest control), so the first click always
 * lands on a grounded answer rather than the no-match fallback. The previous
 * set came from an older plumbing mockup and included a Texas ZIP the KB
 * explicitly does not serve.
 */
export const STARTER_CHIPS = [
  "What areas do you service?",
  "What are your emergency rates?",
  "Are you licensed and insured?",
] as const;
