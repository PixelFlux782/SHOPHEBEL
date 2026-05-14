import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";
import {
  ALLOWED_TOPICS,
  ContactTopic,
  mapTopicToProductType,
  saveToLocalJson,
  StoredContactRequest,
} from "@/lib/contactRequests";
import { hasSupabaseConfig, insertAuditContextSupabase, insertContactRequestSupabase } from "@/lib/supabaseAdmin";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  website?: string;
  websiteUrl?: string;
  website_url?: string;
  topic?: ContactTopic | string;
  message?: string;
  source?: string;
  industry?: string;
  targetAudience?: string;
  target_audience?: string;
  primaryGoal?: string;
  primary_goal?: string;
  currentSituation?: string;
  current_situation?: string;
  problemsAssumptions?: string;
  problems_assumptions?: string;
  desiredGoal?: string;
  desired_goal?: string;
  technicalInfo?: string;
  technical_info?: string;
  competitors?: string;
  priorityFocus?: string;
  priority_focus?: string;
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

function getAnalyseApiUrl(): string | null {
  const value = process.env.SHOPHEBEL_ANALYSE_API_URL?.trim();
  return value || null;
}

function firstText(...values: Array<string | undefined>): string {
  for (const value of values) {
    const normalized = asText(value);

    if (normalized) {
      return normalized;
    }
  }

  return "";
}

async function startAnalysisBestEffort(input: {
  websiteUrl: string;
  contactRequestId: string;
  auditContextId?: string;
  name: string;
  email: string;
  company: string;
  source: string;
  productType: string;
  topic: string;
  auditContext: {
    industry: string;
    targetAudience: string;
    primaryGoal: string;
    currentSituation: string;
    problemsAssumptions: string;
    desiredGoal: string;
    technicalInfo: string;
    competitors: string;
    priorityFocus: string;
  };
}): Promise<boolean> {
  if (!input.websiteUrl) {
    console.info("[contact-api] analysis not started because website_url is missing", {
      contactRequestId: input.contactRequestId,
      auditContextId: input.auditContextId ?? null,
    });
    return false;
  }

  const analyseApiUrl = getAnalyseApiUrl();

  if (!analyseApiUrl) {
    console.info("[contact-api] analysis not started because SHOPHEBEL_ANALYSE_API_URL is not configured", {
      contactRequestId: input.contactRequestId,
      auditContextId: input.auditContextId ?? null,
    });
    return false;
  }

  try {
    const response = await fetch(analyseApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: input.websiteUrl,
        contactRequestId: input.contactRequestId,
        auditContextId: input.auditContextId,
        leadContext: {
          name: input.name,
          email: input.email,
          company: input.company,
          source: input.source,
          productType: input.productType,
          topic: input.topic,
        },
        auditContext: {
          industry: input.auditContext.industry,
          targetAudience: input.auditContext.targetAudience,
          primaryGoal: input.auditContext.primaryGoal,
          currentSituation: input.auditContext.currentSituation,
          problemsAssumptions: input.auditContext.problemsAssumptions,
          desiredGoal: input.auditContext.desiredGoal,
          technicalInfo: input.auditContext.technicalInfo,
          competitors: input.auditContext.competitors,
          priorityFocus: input.auditContext.priorityFocus,
        },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(30_000),
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "");
      console.warn("[contact-api] analysis request failed", {
        status: response.status,
        details,
        contactRequestId: input.contactRequestId,
        auditContextId: input.auditContextId ?? null,
      });
      return false;
    }

    console.info("[contact-api] analysis request started", {
      contactRequestId: input.contactRequestId,
      auditContextId: input.auditContextId ?? null,
    });
    return true;
  } catch (error) {
    console.warn("[contact-api] analysis request threw", {
      error,
      contactRequestId: input.contactRequestId,
      auditContextId: input.auditContextId ?? null,
    });
    return false;
  }
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
  const website = firstText(payload.website, payload.websiteUrl, payload.website_url);
  const topic = asText(payload.topic) as ContactTopic;
  const message = asText(payload.message);
  const source = firstText(payload.source) || "homepage-contact";
  const auditContext = {
    industry: firstText(payload.industry),
    targetAudience: firstText(payload.targetAudience, payload.target_audience),
    primaryGoal: firstText(payload.primaryGoal, payload.primary_goal),
    currentSituation: firstText(payload.currentSituation, payload.current_situation, payload.message),
    problemsAssumptions: firstText(payload.problemsAssumptions, payload.problems_assumptions),
    desiredGoal: firstText(payload.desiredGoal, payload.desired_goal),
    technicalInfo: firstText(payload.technicalInfo, payload.technical_info),
    competitors: firstText(payload.competitors),
    priorityFocus: firstText(payload.priorityFocus, payload.priority_focus),
  };

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

      let auditContextId: string | null = null;

      if (website) {
        const nextAuditContextId = randomUUID();

        try {
          await insertAuditContextSupabase({
            id: nextAuditContextId,
            contact_request_id: entry.id,
            created_at: entry.createdAt,
            updated_at: entry.updatedAt,
            website_url: website,
            industry: auditContext.industry,
            target_audience: auditContext.targetAudience,
            primary_goal: auditContext.primaryGoal || entry.topic,
            current_situation: auditContext.currentSituation,
            problems_assumptions: auditContext.problemsAssumptions,
            desired_goal: auditContext.desiredGoal,
            technical_info: auditContext.technicalInfo,
            competitors: auditContext.competitors,
            priority_focus: auditContext.priorityFocus,
            metadata: {
              source,
              productType: entry.productType,
              topic: entry.topic,
            },
          });
          auditContextId = nextAuditContextId;
        } catch (error) {
          console.error("[contact-api] audit_contexts insert failed", {
            error,
            contactRequestId: entry.id,
            auditContextId: nextAuditContextId,
          });
        }
      } else {
        console.info("[contact-api] audit_contexts insert skipped because website_url is missing", {
          contactRequestId: entry.id,
        });
      }

      let analysisStarted = false;

      if (website && auditContextId) {
        analysisStarted = await startAnalysisBestEffort({
          websiteUrl: website,
          contactRequestId: entry.id,
          auditContextId,
          name: entry.name,
          email: entry.email,
          company: entry.company,
          source,
          productType: entry.productType,
          topic: entry.topic,
          auditContext: {
            ...auditContext,
            primaryGoal: auditContext.primaryGoal || entry.topic,
          },
        });
      } else if (website) {
        console.info("[contact-api] analysis not started because audit_contexts was not stored", {
          contactRequestId: entry.id,
        });
      }

      return NextResponse.json({
        success: true,
        id: entry.id,
        contactRequestId: entry.id,
        auditContextId,
        analysisStarted,
        storage: "supabase",
      }, { status: 201 });
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

    if (website) {
      console.info("[contact-api] analysis not started for local JSON storage because audit_contexts is not available", {
        contactRequestId: entry.id,
      });
    }

    return NextResponse.json({
      success: true,
      id: entry.id,
      contactRequestId: entry.id,
      auditContextId: null,
      analysisStarted: false,
      storage: "json",
    }, { status: 201 });
  } catch (error) {
    console.error("[contact-api] development json save failed", error);
    return NextResponse.json({ error: "Anfrage konnte nicht gespeichert werden." }, { status: 500 });
  }
}
