import { NextRequest, NextResponse } from "next/server";

import { ANALYSE_TOOL_URL } from "@/lib/constants";

export const runtime = "nodejs";

function parseScreenshots(value: unknown) {
  if (!value) {
    return undefined;
  }

  if (typeof value === "string") {
    try {
      return parseScreenshots(JSON.parse(value));
    } catch {
      return undefined;
    }
  }

  if (typeof value !== "object" || Array.isArray(value)) {
    return undefined;
  }

  const record = value as Record<string, unknown>;
  const screenshotValue = (key: string) => {
    const candidate = record[key];
    return typeof candidate === "string" && candidate.trim() ? candidate.trim() : undefined;
  };
  const screenshots = {
    viewport: screenshotValue("viewport") ?? screenshotValue("viewportUrl"),
    fullPage: screenshotValue("fullPage") ?? screenshotValue("full_page") ?? screenshotValue("fullPageUrl"),
    mobile: screenshotValue("mobile") ?? screenshotValue("mobileUrl"),
    hero: screenshotValue("hero") ?? screenshotValue("heroUrl"),
  };

  return screenshots.viewport || screenshots.fullPage || screenshots.mobile || screenshots.hero
    ? screenshots
    : undefined;
}

function normalizePreviewPayload(payload: unknown) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return payload;
  }

  const record = payload as Record<string, unknown>;
  const screenshots = parseScreenshots(record.screenshots);

  if (!screenshots) {
    return payload;
  }

  return {
    ...record,
    screenshots,
    visualPreviewAvailable: Boolean(record.visualPreviewAvailable || record.visual_preview_available || screenshots.viewport || screenshots.fullPage || screenshots.mobile || screenshots.hero),
  };
}

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

    const payload = normalizePreviewPayload(await response.json());

    return NextResponse.json(payload, { status: response.status });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Analyse konnte nicht gestartet werden.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
