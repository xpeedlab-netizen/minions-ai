"use client";

import { useSearchParams } from "next/navigation";
import { normalizeSegment, type Segment } from "@/lib/segments";

/**
 * Reads the audience from `?for=`.
 *
 * MUST only be called inside a <Suspense> boundary. `useSearchParams` opts a route out
 * of static generation wherever it is not suspended, which on the homepage would kill
 * `export const revalidate = 86400` silently — the build still succeeds, it just starts
 * rendering `/` on every request. SegmentBoundary is the sanctioned way to call this.
 */
export function useSegment(): Segment {
  const params = useSearchParams();
  return normalizeSegment(params.get("for"));
}
