import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";
import {
  ALLOWED_TOPICS,
  ContactTopic,
  mapTopicToProductType,
  saveToLocalJson,
  StoredContactRequest,
} from "@/lib/contactRequests";
import { hasSupabaseConfig, insertContactRequestSupabase } from "@/lib/supabaseAdmin";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  website?: string;
  topic?: ContactTopic | string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidWebsiteUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function asText(value?: string): string {
  return (value ?? "").trim();
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ungueltige Anfrage." }, { status: 400 });
  }

  const name = asText(payload.name);
  const company = asText(payload.company);
  const email = asText(payload.email);
  const website = asText(payload.website);
  const topic = asText(payload.topic) as ContactTopic;
  const message = asText(payload.message);

  if (!name) {
    return NextResponse.json({ error: "Name ist erforderlich." }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Gueltige E-Mail ist erforderlich." }, { status: 400 });
  }

  if (website && !isValidWebsiteUrl(website)) {
    return NextResponse.json({ error: "Gueltige Website-URL ist erforderlich." }, { status: 400 });
  }

  if (!ALLOWED_TOPICS.includes(topic)) {
    return NextResponse.json({ error: "Gueltiges Anliegen ist erforderlich." }, { status: 400 });
  }

  const now = new Date().toISOString();
  const entry: StoredContactRequest = {
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
    status: "new",
    productType: mapTopicToProductType(topic),
    name,
    company,
    email,
    website,
    topic,
    message,
  };

  const canUseSupabase = hasSupabaseConfig();
  const isProduction = process.env.NODE_ENV === "production";

  if (canUseSupabase) {
    try {
      await insertContactRequestSupabase({
        id: entry.id,
        created_at: entry.createdAt,
        updated_at: entry.updatedAt,
        status: entry.status,
        product_type: entry.productType,
        name: entry.name,
        company: entry.company,
        email: entry.email,
        website: entry.website,
        topic: entry.topic,
        message: entry.message,
      });

      return NextResponse.json({ success: true, id: entry.id, storage: "supabase" }, { status: 201 });
    } catch (error) {
      console.error("[contact-api] supabase insert failed", {
        error,
        contactRequestId: entry.id,
      });
      return NextResponse.json({ error: "Anfrage konnte nicht gespeichert werden." }, { status: 500 });
    }
  }

  if (isProduction) {
    console.error("[contact-api] missing Supabase configuration in production", {
      hasSupabaseUrl: Boolean(process.env.SUPABASE_URL?.trim()),
      hasServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()),
    });
    return NextResponse.json({ error: "Anfrage konnte nicht gespeichert werden." }, { status: 500 });
  }

  try {
    await saveToLocalJson(entry);
    return NextResponse.json({ success: true, id: entry.id, storage: "json" }, { status: 201 });
  } catch (error) {
    console.error("[contact-api] development json save failed", error);
    return NextResponse.json({ error: "Anfrage konnte nicht gespeichert werden." }, { status: 500 });
  }
}
