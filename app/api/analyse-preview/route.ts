import { NextRequest, NextResponse } from "next/server";

import { ANALYSE_TOOL_URL } from "@/lib/constants";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { url?: string };
    const url = body.url?.trim();

    if (!url) {
      return NextResponse.json({ error: "Bitte gib eine gültige URL ein." }, { status: 400 });
    }

    const response = await fetch(new URL("/api/analyse", ANALYSE_TOOL_URL), {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ url }),
      cache: "no-store",
    });

    const payload = await response.json();

    return NextResponse.json(payload, { status: response.status });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Analyse konnte nicht gestartet werden.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
