import type { NextRequest } from "next/server";

const N8N_WEBHOOK_URL = "https://n8n.getminions.ai/webhook/rag-chat-query";
const TIMEOUT_MS = 15_000;

/**
 * The shape n8n replies with on every path — success, no-match, and error alike.
 * All of them arrive as HTTP 200; `error: true` is the only failure discriminator.
 */
type PipResponse = {
  answer: string;
  sources: { source_page?: string; heading?: string }[];
  session_id: string;
  error?: boolean;
};

/**
 * Returned when the proxy itself cannot reach n8n (network failure, timeout,
 * non-JSON body). Deliberately mirrors n8n's own error shape so the client only
 * ever has to branch on `error === true`.
 */
function proxyFallback(session_id: string): PipResponse {
  return {
    answer:
      "Let me grab a human for that — try calling (346) 626-4720 or book a call instead.",
    sources: [],
    session_id,
    error: true,
  };
}

export async function POST(request: NextRequest) {
  let question = "";
  let session_id = "";

  try {
    const body = await request.json();
    question = typeof body?.question === "string" ? body.question : "";
    session_id = typeof body?.session_id === "string" ? body.session_id : "";
  } catch {
    // Malformed client payload — still answer in the canonical shape.
    return Response.json(proxyFallback(session_id), { status: 200 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const upstream = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, session_id }),
      signal: controller.signal,
      cache: "no-store",
    });

    // n8n answers 200 on every branch. A non-2xx here means the webhook itself
    // is down or misrouted, which is a proxy-side failure, not an n8n-authored error.
    if (!upstream.ok) {
      return Response.json(proxyFallback(session_id), { status: 200 });
    }

    const data = (await upstream.json()) as PipResponse;

    // Pass n8n's payload through verbatim, backfilling session_id only if absent
    // so the client can always correlate the turn.
    return Response.json(
      { ...data, session_id: data.session_id || session_id },
      { status: 200 },
    );
  } catch {
    // Timeout, DNS/network failure, or a non-JSON body.
    return Response.json(proxyFallback(session_id), { status: 200 });
  } finally {
    clearTimeout(timeout);
  }
}
