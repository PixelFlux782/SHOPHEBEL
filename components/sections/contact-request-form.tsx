"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  websiteUrl: string;
  improvement: string;
  budgetTimeline: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  improvement?: string;
  websiteUrl?: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  email: "",
  websiteUrl: "",
  improvement: "",
  budgetTimeline: "",
};

const TRUST_POINTS = [
  "Keine Zugangsdaten noetig",
  "Erste Einschaetzung kostenlos",
  "Konkreter naechster Schritt statt Agentur-Blabla",
] as const;

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

export function ContactRequestForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(current: FormState): FormErrors {
    const nextErrors: FormErrors = {};
    const websiteUrl = current.websiteUrl.trim();

    if (!current.name.trim()) {
      nextErrors.name = "Bitte Name eingeben.";
    }

    if (!current.email.trim() || !isValidEmail(current.email.trim())) {
      nextErrors.email = "Bitte gueltige E-Mail eingeben.";
    }

    if (websiteUrl && !isValidWebsiteUrl(websiteUrl)) {
      nextErrors.websiteUrl = "Bitte gueltige Website-URL mit http:// oder https:// eingeben.";
    }

    if (!current.improvement.trim()) {
      nextErrors.improvement = "Bitte kurz beschreiben, was verbessert werden soll.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSuccessMessage(null);

    try {
      const message = [
        form.improvement.trim(),
        form.budgetTimeline.trim() ? `\nBudget/Zeitrahmen:\n${form.budgetTimeline.trim()}` : "",
      ].join("");

      const payload = {
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        website: form.websiteUrl.trim(),
        topic: "Umsetzungspaket",
        message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Anfrage konnte nicht gespeichert werden.");
      }

      setSuccessMessage(
        "Danke! Deine Anfrage ist angekommen. Ich melde mich mit einer konkreten Einschaetzung und dem naechsten sinnvollen Schritt.",
      );
      setForm(INITIAL_STATE);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Anfrage konnte nicht gespeichert werden.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(8,17,31,0.9))] p-5 text-sm shadow-[0_30px_100px_-58px_rgba(0,0,0,0.85)] backdrop-blur md:p-6"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative">
        <p className="sh-eyebrow sh-eyebrow-dark">Projektanfrage</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Lass uns den besten Hebel finden.</h3>

        <div className="mt-4 grid gap-2">
          {TRUST_POINTS.map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-3 py-2 text-xs font-medium text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <Field label="Name" required error={errors.name}>
            <input
              required
              value={form.name}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, name: event.target.value }));
                setSuccessMessage(null);
              }}
              className="sh-input"
            />
          </Field>

          <Field label="E-Mail" required error={errors.email}>
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, email: event.target.value }));
                setSuccessMessage(null);
              }}
              className="sh-input"
            />
          </Field>

          <Field label="Website-URL" error={errors.websiteUrl}>
            <input
              type="url"
              value={form.websiteUrl}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, websiteUrl: event.target.value }));
                setSuccessMessage(null);
              }}
              placeholder="https://..."
              className="sh-input"
            />
          </Field>

          <Field label="Unternehmen">
            <input
              value={form.company}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, company: event.target.value }));
                setSuccessMessage(null);
              }}
              className="sh-input"
            />
          </Field>

          <Field label="Was soll verbessert werden?" required error={errors.improvement} className="md:col-span-2">
            <textarea
              rows={5}
              required
              value={form.improvement}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, improvement: event.target.value }));
                setSuccessMessage(null);
              }}
              placeholder="z. B. Shop wirkt nicht vertrauenswuerdig, Relaunch geplant, Analyse-Ergebnisse sollen umgesetzt werden..."
              className="sh-input"
            />
          </Field>

          <Field label="Budget/Zeitrahmen optional" className="md:col-span-2">
            <textarea
              rows={3}
              value={form.budgetTimeline}
              onChange={(event) => {
                setForm((prev) => ({ ...prev, budgetTimeline: event.target.value }));
                setSuccessMessage(null);
              }}
              placeholder="z. B. Start im naechsten Monat, erstes Budget grob bekannt..."
              className="sh-input"
            />
          </Field>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="sh-button-primary mt-4 min-h-12 w-full rounded-xl px-4 py-3 disabled:opacity-70"
        >
          {isSubmitting ? "Projektanfrage wird gesendet..." : "Projektanfrage senden"}
        </button>

        {submitError ? (
          <p className="mt-4 rounded-xl border border-rose-300/50 bg-rose-400/10 px-3 py-2 text-sm text-rose-100">
            {submitError}
          </p>
        ) : null}

        {successMessage ? (
          <div className="mt-4 rounded-2xl border border-cyan-300/40 bg-cyan-300/12 p-4 shadow-[0_18px_60px_-44px_rgba(34,211,238,0.9)]">
            <p className="text-sm font-semibold text-cyan-100">Anfrage angekommen</p>
            <p className="mt-1 text-sm leading-6 text-slate-200">{successMessage}</p>
          </div>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  required = false,
  error,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
        {label} {required ? "*" : ""}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs text-rose-200">{error}</p> : null}
    </div>
  );
}
