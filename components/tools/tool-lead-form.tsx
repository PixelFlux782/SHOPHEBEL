"use client";

import { FormEvent, useState } from "react";

import type { ShophebelTool } from "@/lib/tools";

type FormState = {
  name: string;
  email: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  website: "",
};

export function ToolLeadForm({ tool }: { tool: ShophebelTool }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          website: form.website,
          topic: tool.status === "Premium" ? "Premium Report" : "Sonstiges",
          message: `Tool-Warteliste: ${tool.title}`,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Eintragung konnte nicht gespeichert werden.");
      }

      setStatus("sent");
      setForm(initialState);
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Eintragung konnte nicht gespeichert werden.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.35rem] border border-white/12 bg-white/8 p-5 text-sm text-white backdrop-blur-xl">
      <p className="sh-eyebrow sh-eyebrow-dark">Lead-CTA</p>
      <h2 className="mt-2 text-2xl font-bold">Benachrichtigen lassen</h2>
      <p className="mt-2 leading-6 text-slate-300">
        Trage dich ein und wir melden uns, sobald dieses Tool freigeschaltet wird oder als Premium-Modul verfügbar ist.
      </p>

      <div className="mt-5 grid gap-3">
        <label>
          <span className="mb-1 block text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">Name</span>
          <input required value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} className="sh-input" />
        </label>
        <label>
          <span className="mb-1 block text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">E-Mail</span>
          <input required type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} className="sh-input" />
        </label>
        <label>
          <span className="mb-1 block text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">Website</span>
          <input
            required
            type="url"
            placeholder="https://..."
            value={form.website}
            onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
            className="sh-input"
          />
        </label>
      </div>

      <button type="submit" disabled={status === "sending"} className="sh-button-primary mt-4 min-h-12 w-full rounded-xl disabled:opacity-70">
        {status === "sending" ? "Wird gespeichert..." : "Frühzugang anfragen"}
      </button>

      {status === "sent" ? (
        <p className="mt-3 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
          Danke, deine Anfrage wurde gespeichert.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 rounded-xl border border-rose-300/35 bg-rose-300/10 px-3 py-2 text-sm text-rose-100">{error}</p>
      ) : null}
    </form>
  );
}
