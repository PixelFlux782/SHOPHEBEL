"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const scoreItems = [
  { label: "UX", value: 76, color: "bg-cyan-300" },
  { label: "Trust", value: 58, color: "bg-emerald-300" },
  { label: "Technik", value: 64, color: "bg-sky-300" },
  { label: "Conversion", value: 69, color: "bg-amber-300" },
];

const floatingKpis = [
  { label: "UX-Hebel", value: "8", position: "left-0 top-10 lg:-left-8" },
  { label: "Trust-Lücken", value: "12", position: "right-3 top-28 lg:-right-6" },
  { label: "Quick Wins", value: "27", position: "bottom-8 left-6 lg:-left-5" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
    </svg>
  );
}

export function SaasHeroSection() {
  const [url, setUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = url.trim();
    window.location.href = target ? `/analyse?url=${encodeURIComponent(target)}` : "/analyse";
  }

  return (
    <section
      id="start"
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(139,92,246,0.18),transparent_32%),linear-gradient(135deg,#06111f_0%,#0b1220_48%,#082f3d_100%)] px-5 py-12 text-white shadow-[0_34px_120px_-70px_rgba(8,17,31,0.95)] sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/14 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
            Plattform für kleine Shops, Websites und lokale Betriebe
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl">
            Sieh, warum deine Website nicht genug Vertrauen, Anfragen oder Umsatz bringt.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Shophebel verbindet visuelle Website-Analyse, UX, Technik, Trust, Conversion und AI-Sichtbarkeit mit konkreten Maßnahmen. Weniger Datenflut, mehr nächster Schritt.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-white/14 bg-white/10 p-2 shadow-[0_24px_90px_-55px_rgba(34,211,238,0.85)] backdrop-blur-xl">
            <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
              <label className="flex min-h-14 items-center gap-3 rounded-xl bg-slate-950/70 px-4 text-slate-300">
                <SearchIcon />
                <input
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                  placeholder="deine-domain.de"
                  type="text"
                  inputMode="url"
                  aria-label="Website URL"
                />
              </label>
              <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 hover:bg-cyan-200">
                Kostenlos analysieren
                <ArrowIcon />
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link href="/shophebel/report" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/18 bg-white/8 px-5 text-sm font-bold text-white hover:-translate-y-0.5 hover:bg-white/14">
              Premium Analyse starten
              <ArrowIcon />
            </Link>
            <span className="text-sm text-slate-400">Keine Logins nötig. Teaser kostenlos, Vollanalyse für 5 EUR.</span>
          </div>
        </div>

        <div className="relative min-h-[520px]">
          {floatingKpis.map((item) => (
            <div key={item.label} className={`absolute z-20 hidden rounded-2xl border border-white/14 bg-white/12 px-4 py-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:block ${item.position}`}>
              <p className="text-xs font-semibold text-slate-300">{item.label}</p>
              <p className="mt-1 text-2xl font-bold text-white">{item.value}</p>
            </div>
          ))}

          <div className="relative mx-auto max-w-xl rounded-[1.6rem] border border-white/14 bg-slate-950/75 p-4 shadow-[0_34px_120px_-60px_rgba(34,211,238,0.85)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Website Cockpit</p>
                <p className="mt-1 text-sm text-slate-400">shop-example.de</p>
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">Live Preview</div>
            </div>

            <div className="grid gap-4 py-5 sm:grid-cols-[0.78fr_1fr]">
              <div className="rounded-2xl border border-white/10 bg-white/7 p-5 text-center">
                <div className="relative mx-auto grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#67e8f9_0deg_248deg,rgba(255,255,255,0.1)_248deg_360deg)]">
                  <div className="grid h-28 w-28 place-items-center rounded-full bg-slate-950">
                    <div>
                      <p className="text-4xl font-bold">69</p>
                      <p className="text-xs text-slate-400">von 100</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-cyan-100">Konkrete Hebel offen</p>
              </div>

              <div className="space-y-3">
                {scoreItems.map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-white/7 p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-200">{item.label}</span>
                      <span className="text-slate-400">{item.value}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {["Klarheit", "Kaufvertrauen", "Mobile UX"].map((item, index) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/7 p-3">
                  <p className="text-xs text-slate-400">{item}</p>
                  <p className="mt-2 text-lg font-bold text-white">{[84, 52, 76][index]}%</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
              <p className="text-sm font-bold text-amber-100">Nächster Hebel</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">Hero klarer machen, Trust sichtbar ergänzen und mobile Ladezeit verbessern, bevor mehr Traffic eingekauft wird.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
