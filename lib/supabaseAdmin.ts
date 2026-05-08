import { normalizeContactRequest, StoredContactRequest } from "@/lib/contactRequests";

type SupabaseContactInsert = {
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  product_type: string;
  name: string;
  company: string;
  email: string;
  website: string;
  topic: string;
  message: string;
};

function getSupabaseConfig(): { url: string; serviceRoleKey: string } | null {
  const url = process.env.SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url || !serviceRoleKey) {
    return null;
  }

  return { url, serviceRoleKey };
}

export async function insertContactRequestSupabase(entry: SupabaseContactInsert): Promise<boolean> {
  const config = getSupabaseConfig();

  if (!config) {
    return false;
  }

  const response = await fetch(`${config.url}/rest/v1/contact_requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(entry),
    cache: "no-store",
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`supabase_insert_failed: ${response.status} ${details}`);
  }

  return true;
}

export async function listContactRequestsSupabase(): Promise<StoredContactRequest[]> {
  const config = getSupabaseConfig();

  if (!config) {
    return [];
  }

  const response = await fetch(`${config.url}/rest/v1/contact_requests?select=*&order=created_at.desc`, {
    method: "GET",
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`supabase_list_failed: ${response.status} ${details}`);
  }

  const parsed = (await response.json()) as unknown;

  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed.flatMap((entry) => {
    const normalized = normalizeContactRequest(entry);
    return normalized ? [normalized] : [];
  });
}

export function hasSupabaseConfig(): boolean {
  return Boolean(process.env.SUPABASE_URL?.trim() && process.env.SUPABASE_SERVICE_ROLE_KEY?.trim());
}
