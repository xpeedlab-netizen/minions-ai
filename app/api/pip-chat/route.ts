import type { NextRequest } from "next/server";
import { SITE_PHONE_NUMBER } from "@/lib/data/placeholders";

const N8N_WEBHOOK_URL = "https://n8n.getminions.ai/webhook/rag-chat-query";
const TIMEOUT_MS = 15_000;

type PipResponse = {
  answer: string;
  sources: { source_page?: string; heading?: string }[];
  session_id: string;
  error?: boolean;
};

function proxyFallback(session_id: string): PipResponse {
  return {
    answer: `Let me grab a human for that — try calling ${SITE_PHONE_NUMBER} or book a call instead.`,
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
    return Response.json(proxyFallback(session_id), { status: 200 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const upstream = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // This is a trusted server-to-server call, which never carries a
        // browser Origin header. The n8n workflow's origin allow-list
        // rejects requests with no Origin (by design, to block spoofed
        // external calls), so this proxy must identify itself explicitly
        // as coming from this site.
        Origin: "https://www.getminions.ai",
      },
      body: JSON.stringify({ question, session_id }),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!upstream.ok) {
      return Response.json(proxyFallback(session_id), { status: 200 });
    }

    const data = (await upstream.json()) as PipResponse;

    return Response.json(
      { ...data, session_id: data.session_id || session_id },
      { status: 200 },
    );
  } catch {
    return Response.json(proxyFallback(session_id), { status: 200 });
  } finally {
    clearTimeout(timeout);
  }
}
