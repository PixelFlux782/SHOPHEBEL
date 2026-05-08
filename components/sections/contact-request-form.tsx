"use client";

import { FormEvent, useMemo, useState } from "react";

type ConcernType =
  | ""
  | "Kostenloser Schnellcheck"
  | "Premium Report"
  | "Umsetzungspaket";

type FormState = {
  name: string;
  company: string;
  email: string;
  websiteUrl: string;
  concern: ConcernType;
  message: string;
};

type FormErrors = {
  websiteUrl?: string;
  name?: string;
  email?: string;
  concern?: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  email: "",
  websiteUrl: "",
  concern: "",
  message: "",
};

const CONCERN_HINTS: Partial<Record<ConcernType, string>> = {
  "Kostenloser Schnellcheck": "Du erh\u00e4ltst eine erste Einsch\u00e4tzung mit den wichtigsten Sofort-Hinweisen.",
  "Premium Report":
    "Der Premium Report kostet 49 \u20ac und enth\u00e4lt eine ausf\u00fchrliche SEO-, UX- und Conversion-Auswertung.",
  Umsetzungspaket:
    "F\u00fcr das Umsetzungspaket pr\u00fcfen wir zuerst deine Website und melden uns mit einer realistischen Einsch\u00e4tzung.",
};

const SUCCESS_MESSAGES: Partial<Record<ConcernType, string>> = {
  "Kostenloser Schnellcheck":
    "Danke, deine Anfrage fuer den kostenlosen Schnellcheck ist gespeichert. Wir pruefen deine Website und melden uns mit den wichtigsten Sofort-Hinweisen.",
  "Premium Report":
    "Danke, deine Anfrage fuer den Premium Report ist gespeichert. Wir melden uns zum naechsten Schritt fuer die 49-\u20ac-Auswertung.",
  Umsetzungspaket:
    "Danke, deine Anfrage fuer das Umsetzungspaket ist gespeichert. Wir pruefen deine Website und melden uns mit einer realistischen Einschaetzung.",
};

const VALUE_ARGUMENTS = [
  "Keine Zugangsdaten noetig",
  "Erste Einschaetzung statt Agentur-Blabla",
  "Konkrete Hebel fuer SEO, Vertrauen und Conversion",
] as const;

const REQUEST_TYPES: Array<{
  value: Exclude<ConcernType, "">;
  eyebrow: string;
  title: string;
  description: string;
}> = [
  {
    value: "Kostenloser Schnellcheck",
    eyebrow: "0 EUR",
    title: "Schnellcheck",
    description: "Erste Signale und Sofort-Hinweise.",
  },
  {
    value: "Premium Report",
    eyebrow: "49 EUR",
    title: "Premium Report",
    description: "Ausfuehrliche Auswertung per E-Mail.",
  },
  {
    value: "Umsetzungspaket",
    eyebrow: "ab 999 EUR",
    title: "Umsetzung",
    description: "Priorisierte Verbesserungen besprechen.",
  },
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
  const [submittedConcern, setSubmittedConcern] = useState<ConcernType>("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const concernHint = CONCERN_HINTS[form.concern];
  const successMessage = submittedConcern ? SUCCESS_MESSAGES[submittedConcern] : null;

  const mailtoLink = useMemo(() => {
    const subject = `Anfrage - ${form.concern || "Shophebel"} - ${form.company || form.name || "Kontakt"}`;
    const body = [
      `Name: ${form.name}`,
      `Firma: ${form.company || "-"}`,
      `E-Mail: ${form.email}`,
      `Website: ${form.websiteUrl || "-"}`,
      `Anliegen: ${form.concern || "-"}`,
      "",
      `Nachricht:\n${form.message || "-"}`,
    ].join("\n");

    return `mailto:info@shophebel.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function validate(current: FormState): FormErrors {
    const nextErrors: FormErrors = {};
    const websiteUrl = current.websiteUrl.trim();

    if (!current.name.trim()) {
      nextErrors.name = "Bitte Name eingeben.";
    }

    if (!websiteUrl || !isValidWebsiteUrl(websiteUrl)) {
      nextErrors.websiteUrl = "Bitte gueltige Website-URL mit http:// oder https:// eingeben.";
    }

    if (!current.email.trim() || !isValidEmail(current.email.trim())) {
      nextErrors.email = "Bitte gueltige E-Mail eingeben.";
    }

    if (!current.concern) {
      nextErrors.concern = "Bitte Anliegen waehlen.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmittedConcern("");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmittedConcern("");

    try {
      const selectedConcern = form.concern;
      const payload = {
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        website: form.websiteUrl.trim(),
        topic: form.concern,
        message: form.message.trim(),
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

      setSubmittedConcern(selectedConcern);
      setForm(INITIAL_STATE);
      console.log("Shophebel Anfrage gespeichert", payload);
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
      className="relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,17,31,0.88))] p-4 text-sm shadow-[0_30px_100px_-58px_rgba(0,0,0,0.85)] backdrop-blur md:p-5"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative">
        <p className="sh-eyebrow sh-eyebrow-dark">Analyse starten</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Dein naechster Website-Hebel beginnt hier.</h3>
        <div className="mt-4 grid gap-2">
          {VALUE_ARGUMENTS.map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-3 py-2 text-xs font-medium text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {item}
            </div>
          ))}
        </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <Field label="Website-URL" required error={errors.websiteUrl} className="md:col-span-2">
          <input
            type="url"
            required
            value={form.websiteUrl}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, websiteUrl: event.target.value }));
              setSubmittedConcern("");
            }}
            placeholder="https://..."
            className="sh-input"
          />
        </Field>

        <Field label="Name" required error={errors.name}>
          <input
            required
            value={form.name}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, name: event.target.value }));
              setSubmittedConcern("");
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
              setSubmittedConcern("");
            }}
            className="sh-input"
          />
        </Field>

        <Field label="Unternehmensname">
          <input
            value={form.company}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, company: event.target.value }));
              setSubmittedConcern("");
            }}
            className="sh-input"
          />
        </Field>

        <div className="md:col-span-2">
          <p className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
            Anfrage-Typ *
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {REQUEST_TYPES.map((type) => {
              const isSelected = form.concern === type.value;

              return (
                <label
                  key={type.value}
                  className={`cursor-pointer rounded-xl border p-3 transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-cyan-300 ${
                    isSelected
                      ? "border-cyan-300 bg-cyan-300/15 shadow-[0_18px_50px_-34px_rgba(34,211,238,0.95)]"
                      : "border-white/10 bg-white/6 hover:border-cyan-300/50 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="concern"
                    required
                    value={type.value}
                    checked={isSelected}
                    onChange={() => {
                      setForm((prev) => ({ ...prev, concern: type.value }));
                      setSubmittedConcern("");
                    }}
                    className="sr-only"
                  />
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cyan-200">
                    {type.eyebrow}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">{type.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-slate-300">{type.description}</span>
                </label>
              );
            })}
          </div>
          {errors.concern ? <p className="mt-1 text-xs text-rose-200">{errors.concern}</p> : null}
        </div>

        {concernHint ? (
          <div className="md:col-span-2 rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-3 py-3 text-sm leading-6 text-cyan-50">
            {concernHint}
          </div>
        ) : null}

        <Field label="Nachricht" className="md:col-span-2">
          <textarea
            rows={4}
            value={form.message}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, message: event.target.value }));
              setSubmittedConcern("");
            }}
            className="sh-input"
          />
        </Field>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="sh-button-primary min-h-12 w-full rounded-xl px-4 py-3 disabled:opacity-70"
        >
          {isSubmitting ? "Analyse-Anfrage wird gesendet..." : "Analyse-Anfrage starten"}
        </button>
        <a
          href={mailtoLink}
          className="inline-flex min-h-10 w-full items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
        >
          Mail mit Inhalt oeffnen
        </a>
      </div>
      <p className="mt-3 text-center text-xs leading-5 text-slate-400">
        Keine Zugangsdaten erforderlich. Deine Angaben werden nur zur Bearbeitung der Anfrage genutzt.
      </p>

      {submitError ? (
        <p className="mt-4 rounded-xl border border-rose-300/50 bg-rose-400/10 px-3 py-2 text-sm text-rose-100">
          {submitError}
        </p>
      ) : null}

      {successMessage ? (
        <div className="mt-4 rounded-2xl border border-cyan-300/40 bg-cyan-300/12 p-4 shadow-[0_18px_60px_-44px_rgba(34,211,238,0.9)]">
          <p className="text-sm font-semibold text-cyan-100">Anfrage gespeichert</p>
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
