import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type ContactStatus = "new" | "in_progress" | "done";
export type ProductType = "quick_check" | "premium_report" | "done_for_you";

export type ContactTopic =
  | "Kostenloser Schnellcheck"
  | "Premium Report"
  | "Umsetzungspaket"
  | "Website-Check"
  | "Shop-Optimierung"
  | "Relaunch / Shop-Aufbau"
  | "Sonstiges";

export type StoredContactRequest = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: ContactStatus;
  productType: ProductType;
  name: string;
  company: string;
  email: string;
  website: string;
  topic: ContactTopic;
  message: string;
};

type LegacyContactRequest = Partial<StoredContactRequest> & {
  created_at?: string;
  updated_at?: string;
  product_type?: ProductType;
};

export const ALLOWED_TOPICS: ContactTopic[] = [
  "Kostenloser Schnellcheck",
  "Premium Report",
  "Umsetzungspaket",
  "Website-Check",
  "Shop-Optimierung",
  "Relaunch / Shop-Aufbau",
  "Sonstiges",
];

const VALID_STATUSES: ContactStatus[] = ["new", "in_progress", "done"];
const VALID_PRODUCT_TYPES: ProductType[] = ["quick_check", "premium_report", "done_for_you"];

function isContactTopic(value: unknown): value is ContactTopic {
  return typeof value === "string" && ALLOWED_TOPICS.includes(value as ContactTopic);
}

function isContactStatus(value: unknown): value is ContactStatus {
  return typeof value === "string" && VALID_STATUSES.includes(value as ContactStatus);
}

function isProductType(value: unknown): value is ProductType {
  return typeof value === "string" && VALID_PRODUCT_TYPES.includes(value as ProductType);
}

export function mapTopicToProductType(topic: ContactTopic): ProductType {
  switch (topic) {
    case "Premium Report":
      return "premium_report";
    case "Umsetzungspaket":
    case "Shop-Optimierung":
    case "Relaunch / Shop-Aufbau":
      return "done_for_you";
    case "Kostenloser Schnellcheck":
    case "Website-Check":
    case "Sonstiges":
    default:
      return "quick_check";
  }
}

function contactRequestsFilePath(): string {
  return path.join(process.cwd(), "data", "contact-requests.json");
}

export function normalizeContactRequest(raw: unknown): StoredContactRequest | null {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const entry = raw as LegacyContactRequest;
  const topic = isContactTopic(entry.topic) ? entry.topic : "Sonstiges";
  const createdAt = entry.createdAt || entry.created_at || new Date().toISOString();
  const updatedAt = entry.updatedAt || entry.updated_at || createdAt;
  const productType = isProductType(entry.productType)
    ? entry.productType
    : isProductType(entry.product_type)
      ? entry.product_type
      : mapTopicToProductType(topic);

  return {
    id: typeof entry.id === "string" ? entry.id : "",
    createdAt,
    updatedAt,
    status: isContactStatus(entry.status) ? entry.status : "new",
    productType,
    name: typeof entry.name === "string" ? entry.name : "",
    company: typeof entry.company === "string" ? entry.company : "",
    email: typeof entry.email === "string" ? entry.email : "",
    website: typeof entry.website === "string" ? entry.website : "",
    topic,
    message: typeof entry.message === "string" ? entry.message : "",
  };
}

export async function readLocalContactRequests(): Promise<StoredContactRequest[]> {
  try {
    const raw = await readFile(contactRequestsFilePath(), "utf8");
    const parsed = JSON.parse(raw) as unknown;

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.flatMap((entry) => {
      const normalized = normalizeContactRequest(entry);
      return normalized ? [normalized] : [];
    });
  } catch {
    return [];
  }
}

export async function saveToLocalJson(entry: StoredContactRequest): Promise<void> {
  const dataDir = path.dirname(contactRequestsFilePath());
  await mkdir(dataDir, { recursive: true });

  const existing = await readLocalContactRequests();
  existing.push(entry);

  // MVP/local fallback only: persist requests in JSON.
  // For production, prefer a database and transactional mail workflow.
  await writeFile(contactRequestsFilePath(), JSON.stringify(existing, null, 2), "utf8");
}
