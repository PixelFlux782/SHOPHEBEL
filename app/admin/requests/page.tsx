import type { Metadata } from "next";
import Link from "next/link";

import { ContactStatus, readLocalContactRequests, StoredContactRequest } from "@/lib/contactRequests";
import { hasSupabaseConfig, listContactRequestsSupabase } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

type RequestsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const statusFilters: Array<{ label: string; value: ContactStatus | "all" }> = [
  { label: "Alle", value: "all" },
  { label: "New", value: "new" },
  { label: "In progress", value: "in_progress" },
  { label: "Done", value: "done" },
];

async function loadRequests(): Promise<{ requests: StoredContactRequest[]; source: "supabase" | "json" }> {
  if (hasSupabaseConfig()) {
    try {
      const requests = await listContactRequestsSupabase();
      return { requests, source: "supabase" };
    } catch (error) {
      console.error("[admin-requests] supabase list failed, fallback to json", error);
    }
  }

  return { requests: await readLocalContactRequests(), source: "json" };
}

function formatDate(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value || "-";
  }

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminRequestsPage({ searchParams }: RequestsPageProps) {
  const params = await searchParams;
  const rawStatus = typeof params.status === "string" ? params.status : "all";
  const activeStatus = statusFilters.some((item) => item.value === rawStatus) ? rawStatus : "all";
  const { requests, source } = await loadRequests();
  const filteredRequests =
    activeStatus === "all" ? requests : requests.filter((request) => request.status === activeStatus);

  return (
    <main className="flex flex-col gap-6">
      <section className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Admin</p>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Anfragen</h1>
            <p className="mt-2 text-sm text-slate-600">
              Quelle: {source}. Angezeigt werden {filteredRequests.length} von {requests.length} Anfragen.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((filter) => (
              <Link
                key={filter.value}
                href={filter.value === "all" ? "/admin/requests" : `/admin/requests?status=${filter.value}`}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${
                  activeStatus === filter.value
                    ? "border-cyan-400 bg-cyan-100 text-slate-950"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {filter.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.14em] text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">E-Mail</th>
                <th className="px-4 py-3 font-semibold">Website</th>
                <th className="px-4 py-3 font-semibold">Product Type</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredRequests.map((request) => (
                <tr key={request.id || `${request.email}-${request.createdAt}`} className="align-top">
                  <td className="px-4 py-3 font-medium text-slate-950">{request.name || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{request.email || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">
                    {request.website ? (
                      <a href={request.website} className="text-cyan-700 hover:underline" target="_blank" rel="noreferrer">
                        {request.website}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{request.productType}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{formatDate(request.createdAt)}</td>
                </tr>
              ))}
              {filteredRequests.length === 0 ? (
                <tr>
                  <td className="px-4 py-8 text-center text-slate-500" colSpan={6}>
                    Keine Anfragen fuer diesen Filter.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
