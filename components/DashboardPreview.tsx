"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  BarChart3,
  ChevronRight,
  Loader2,
  MousePointer2,
  Scan,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { ANALYSE_TOOL_URL, buildAnalyseToolUrl } from "@/lib/constants";
import type { AnalysisResult } from "@/lib/analysis-types";
import {
  DashboardMode,
  DashboardPreviewCapture,
  DashboardView,
  getDemoDashboardView,
  mapAnalysisResultToDashboardView,
} from "@/lib/dashboard-analysis";

const weightedEase = [0.2, 0.65, 0.3, 0.9] as const;
const navigationIcons = [BarChart3, Search, ShieldCheck, Zap];
const scoreParticles = Array.from({ length: 16 }, (_, index) => ({
  angle: (360 / 16) * index,
  delay: (index % 8) * 0.16,
}));

const scanSteps = [
  "URL erreichbar prüfen",
  "Mobile Darstellung bewerten",
  "Trust-Signale erkennen",
  "CTA-Hierarchie analysieren",
  "Findings verdichten",
];

const scanningScores = [16, 31, 47, 62, 74];
const scanningBars = [32, 54, 41, 72, 48, 65, 52, 78, 58];
const demoBars = [42, 66, 48, 84, 59, 75, 53, 88, 69];
const minScanDurationMs = 2800;

export interface DashboardPreviewProps {
  mode?: DashboardMode;
  url?: string;
  result?: AnalysisResult;
  errorMessage?: string;
}

type PreviewPayload = AnalysisResult & { id?: string; error?: string };

function priorityClass(priority: string) {
  if (priority === "Critical") return "bg-red-500/[0.08] text-red-300/85";
  if (priority === "High") return "bg-white/[0.07] text-zinc-200";
  return "bg-white/[0.045] text-zinc-400";
}

function signalClass(tone: string) {
  if (tone === "risk") return "bg-red-300/45";
  if (tone === "watch") return "bg-blue-300/45";
  return "bg-zinc-200/45";
}

function reportHrefFor(result?: AnalysisResult) {
  if (!result?.id) return ANALYSE_TOOL_URL;
  return new URL(`/analyse/result/${result.id}`, ANALYSE_TOOL_URL).toString();
}

function formatScanTime(result?: AnalysisResult) {
  const raw = result?.scannedAt || result?.createdAt;
  if (!raw) return "Demo Lauf";

  try {
    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(raw));
  } catch {
    return "Live Lauf";
  }
}

function VisualCapturePreview({
  preview,
  urlLabel,
}: {
  preview: DashboardPreviewCapture;
  urlLabel: string;
}) {
  const [failedPrimaryUrl, setFailedPrimaryUrl] = useState("");
  const [failedMobileUrl, setFailedMobileUrl] = useState("");
  const showPrimaryImage = preview.primary && failedPrimaryUrl !== preview.primary;
  const showMobileImage = preview.mobileUrl && failedMobileUrl !== preview.mobileUrl;

  return (
    <div className="group relative z-10 mt-5 overflow-visible rounded-xl border border-white/[0.075] bg-[#05070b]/92 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),inset_0_0_22px_rgba(255,255,255,0.018),0_18px_54px_rgba(0,0,0,0.48)]">
      <div className="mb-2 flex items-center justify-between gap-3 px-1">
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-blue-200/68">
            Visual Capture
          </p>
          <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700">
            Above the Fold
          </p>
        </div>
        <span className="rounded-sm border border-white/[0.055] bg-white/[0.025] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-600">
          {preview.primaryVariant}
        </span>
      </div>

      <div className="relative pr-8 pb-7 sm:pr-10">
        <div className="relative aspect-[16/8.2] overflow-hidden rounded-lg border border-white/[0.065] bg-[#080a0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.045)] transition duration-300 group-hover:border-white/[0.095] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_12px_34px_rgba(0,0,0,0.32)]">
          <div className="flex h-5 items-center gap-1.5 border-b border-white/[0.055] bg-[#0c0e13] px-2" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-white/[0.16]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/[0.11]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/[0.08]" />
            <span className="ml-2 h-1.5 flex-1 rounded-full bg-white/[0.045]" />
          </div>

          {showPrimaryImage ? (
            <img
              src={preview.primary}
              alt={`Website-Vorschau von ${urlLabel}`}
              loading="lazy"
              onError={() => setFailedPrimaryUrl(preview.primary)}
              className="h-[calc(100%-1.25rem)] w-full object-cover object-top opacity-[0.86] saturate-[0.86] transition duration-500 group-hover:scale-[1.012] group-hover:opacity-[0.9]"
            />
          ) : (
            <div className="flex h-[calc(100%-1.25rem)] w-full items-center justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))]">
              <div className="w-2/3 space-y-2">
                <span className="block h-2 rounded-full bg-white/[0.06]" />
                <span className="block h-2 w-4/5 rounded-full bg-white/[0.045]" />
                <span className="block h-16 rounded-md border border-white/[0.045] bg-white/[0.018]" />
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,transparent_34%,rgba(0,0,0,0.34)_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:100%_6px]" />
          <div className="pointer-events-none absolute left-0 right-0 top-5 h-px bg-white/[0.12] opacity-55" />
        </div>

        {preview.mobileUrl && (
          <div className="absolute bottom-1 right-0 w-[72px] rounded-[14px] border border-white/[0.12] bg-[#050608] p-1 shadow-[0_16px_34px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.06)] sm:w-[84px]">
            <div className="overflow-hidden rounded-[10px] border border-white/[0.075] bg-[#090b0f]">
              <div className="flex h-3 items-center justify-center border-b border-white/[0.055] bg-white/[0.035]">
                <span className="h-0.5 w-4 rounded-full bg-white/[0.18]" />
              </div>
              {showMobileImage ? (
                <img
                  src={preview.mobileUrl}
                  alt={`Mobile Website-Signal von ${urlLabel}`}
                  loading="lazy"
                  onError={() => setFailedMobileUrl(preview.mobileUrl ?? "")}
                  className="h-[98px] max-h-[98px] w-full object-cover object-top opacity-[0.82] saturate-[0.84] sm:h-[112px] sm:max-h-[112px]"
                />
              ) : (
                <div className="flex h-[98px] max-h-[98px] w-full flex-col gap-1.5 p-2 sm:h-[112px] sm:max-h-[112px]">
                  <span className="h-1.5 rounded bg-white/[0.06]" />
                  <span className="h-1.5 w-3/4 rounded bg-white/[0.045]" />
                  <span className="mt-1 flex-1 rounded border border-white/[0.04] bg-white/[0.018]" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-[-1.15rem] flex items-center justify-between gap-3 px-1 sm:mt-[-1.25rem]">
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700">
          {preview.mobileUrl ? "Mobile Signal" : "Viewport Signal"}
        </span>
        <span className="h-px flex-1 bg-white/[0.055]" />
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-600">
          Live Render
        </span>
      </div>
    </div>
  );
}

export const DashboardPreview = ({
  mode: controlledMode,
  url: controlledUrl,
  result: controlledResult,
  errorMessage,
}: DashboardPreviewProps) => {
  const reducedMotion = useReducedMotion();
  const isControlled = controlledMode !== undefined;
  const [mode, setMode] = useState<DashboardMode>(controlledMode ?? "demo");
  const [inputUrl, setInputUrl] = useState(controlledUrl ?? "");
  const [activeUrl, setActiveUrl] = useState(controlledUrl ?? "");
  const [result, setResult] = useState<AnalysisResult | undefined>(controlledResult);
  const [localError, setLocalError] = useState("");
  const [scanIndex, setScanIndex] = useState(0);
  const [displayScore, setDisplayScore] = useState(84);
  const displayScoreRef = useRef(84);
  const currentMode = controlledMode ?? mode;
  const currentInputUrl = isControlled ? controlledUrl ?? "" : inputUrl;
  const currentActiveUrl = isControlled ? controlledUrl ?? "" : activeUrl;
  const currentResult = isControlled ? controlledResult : result;
  const currentError = isControlled ? errorMessage ?? "" : localError;

  useEffect(() => {
    if (currentMode !== "scanning" || reducedMotion) return;

    const timer = window.setInterval(() => {
      setScanIndex((index) => (index + 1) % scanSteps.length);
    }, 620);

    return () => window.clearInterval(timer);
  }, [currentMode, reducedMotion]);

  const view: DashboardView = useMemo(() => {
    if (currentMode === "result" && currentResult) return mapAnalysisResultToDashboardView(currentResult);
    if (currentMode === "scanning") {
      return {
        ...getDemoDashboardView(),
        score: scanningScores[scanIndex],
        urlLabel: currentActiveUrl || currentInputUrl || "analyse läuft",
        summary: "Live-Analyse läuft. Die Werte werden aus erreichbaren Seiten-, UX- und Trust-Signalen verdichtet.",
        conversionSignal: scanSteps[scanIndex],
        conversionValue: "scan",
        projectedLift: Math.max(6, Math.round(scanningScores[scanIndex] / 5)),
        levers: getDemoDashboardView().levers.map((lever, index) => ({
          ...lever,
          label: index <= scanIndex % 4 ? lever.label : "Signal wird geprüft",
          detail: index <= scanIndex % 4 ? lever.detail : scanSteps[(scanIndex + index) % scanSteps.length],
          value: scanningBars[(scanIndex + index) % scanningBars.length],
        })),
        signals: getDemoDashboardView().signals.map((signal, index) => ({
          ...signal,
          value: scanningBars[(scanIndex + index + 2) % scanningBars.length],
        })),
      };
    }
    return getDemoDashboardView();
  }, [currentMode, currentResult, scanIndex, currentActiveUrl, currentInputUrl]);

  useEffect(() => {
    if (reducedMotion) return;

    const start = displayScoreRef.current;
    const target = view.score;
    const startedAt = performance.now();
    const duration = 650;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextScore = Math.round(start + (target - start) * eased);
      displayScoreRef.current = nextScore;
      setDisplayScore(nextScore);
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [view.score, reducedMotion]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isControlled) return;

    const target = inputUrl.trim();
    if (!target) {
      setLocalError("Bitte gib eine gültige URL ein.");
      setMode("error");
      return;
    }

    setActiveUrl(target);
    setLocalError("");
    setResult(undefined);
    setScanIndex(0);
    setMode("scanning");
    const scanStartedAt = performance.now();

    try {
      const response = await fetch("/api/analyse-preview", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: target }),
      });
      const payload = (await response.json()) as PreviewPayload;

      if (!response.ok || payload.error) {
        throw new Error(payload.error || "Analyse konnte nicht gestartet werden.");
      }

      const elapsed = performance.now() - scanStartedAt;
      if (elapsed < minScanDurationMs) {
        await new Promise((resolve) => window.setTimeout(resolve, minScanDurationMs - elapsed));
      }

      setResult(payload);
      setMode("result");
    } catch (error) {
      const elapsed = performance.now() - scanStartedAt;
      if (elapsed < 1400) {
        await new Promise((resolve) => window.setTimeout(resolve, 1400 - elapsed));
      }

      setLocalError(error instanceof Error ? error.message : "Analyse konnte nicht gestartet werden.");
      setMode("error");
    }
  }

  const isScanning = currentMode === "scanning";
  const isDemo = currentMode === "demo";
  const isError = currentMode === "error";
  const visibleScore = reducedMotion ? view.score : displayScore;
  const progressWidth = isScanning ? `${Math.max(12, visibleScore)}%` : `${view.score}%`;
  const reportHref = currentResult?.id
    ? reportHrefFor(currentResult)
    : buildAnalyseToolUrl(currentResult?.requestedUrl || currentResult?.url || currentActiveUrl || currentInputUrl);
  const canOpenReport = currentMode === "result" && Boolean(currentResult?.id);
  const systemMeta = [
    { label: "Analyse-Zeitpunkt", value: currentMode === "result" ? formatScanTime(currentResult) : isScanning ? "jetzt" : "Demo Lauf" },
    { label: "Render-Status", value: currentMode === "result" ? currentResult?.analysisMode ?? "static" : isScanning ? scanSteps[scanIndex] : "preview" },
    { label: "Mobile clarity signal", value: `${view.signals.find((signal) => /mobile/i.test(signal.label))?.value ?? view.signals[1]?.value ?? 58}/100` },
    { label: "Above-the-fold scan", value: isScanning ? "aktiv" : currentMode === "result" ? "verdichtet" : "Demo" },
  ];
  const frictionSignals = ["Trust Gap erkannt", "CTA-Pfad geprüft", "Mobile Ansicht geprüft"];

  return (
    <section
      id="analyse"
      className="relative scroll-mt-28 overflow-hidden px-4 pb-20 pt-3 sm:px-6 sm:pb-28 lg:pt-0"
    >
      <span id="plattform" className="sr-only">
        Shophebel Plattform
      </span>
      <motion.div
        initial={reducedMotion ? false : { y: 32 }}
        whileInView={reducedMotion ? undefined : { y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease: weightedEase }}
        className="relative mx-auto max-w-[1300px] overflow-hidden rounded-xl border border-white/[0.075] bg-[#020408]/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_42px_140px_rgba(0,0,0,0.88),0_0_90px_rgba(37,99,235,0.04)] backdrop-blur-3xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_0%,rgba(37,99,235,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.035)_0%,transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.72)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(255,255,255,0.72)_0.5px,transparent_0.5px)] [background-size:32px_32px]" />

        {!reducedMotion && (
          <motion.div
            animate={{ y: ["-6%", "106%"] }}
            transition={{
              duration: isScanning ? 1.45 : 11,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: isScanning ? 0.1 : 2.4,
            }}
            className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent shadow-[0_0_24px_rgba(37,99,235,0.24)]"
          />
        )}

        <div className="relative z-10 flex flex-col gap-3 border-b border-white/[0.06] bg-white/[0.01] px-4 py-3 backdrop-blur-md sm:px-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-2 w-2 rounded-full border border-white/[0.12] bg-white/[0.06]" />
              <span className="h-2 w-2 rounded-full border border-white/[0.12] bg-white/[0.06]" />
              <span className="h-2 w-2 rounded-full border border-white/[0.12] bg-white/[0.06]" />
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.26em] text-zinc-600 sm:block">
              intelligence.shophebel.de / {view.urlLabel}
            </div>
          </div>

          {!isControlled && (
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row lg:max-w-xl">
              <input
                type="url"
                value={inputUrl}
                onChange={(event) => setInputUrl(event.target.value)}
                placeholder="https://dein-shop.de"
                disabled={isScanning}
                className="min-w-0 flex-1 rounded-lg border border-white/[0.08] bg-black/35 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-blue-300/35 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isScanning}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-300/20 bg-blue-500/[0.12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 transition hover:bg-blue-500/[0.18] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isScanning ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Scan className="h-3.5 w-3.5" />}
                Website scannen
              </button>
            </form>
          )}

          <span className="flex w-fit items-center gap-1.5 rounded-md border border-blue-400/14 bg-blue-500/[0.055] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-blue-300/80">
            <motion.span
              animate={reducedMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
              transition={{ duration: isScanning ? 0.8 : 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-1 rounded-full bg-blue-300/80"
            />
            {isDemo ? "Demo" : isScanning ? "Scanning" : isError ? "Fehler" : "Result"}
          </span>
        </div>

        <div className="relative z-10 grid min-h-[560px] grid-cols-1 md:grid-cols-[4.5rem_minmax(0,1fr)]">
          <aside className="hidden border-r border-white/[0.06] bg-black/35 p-4 md:flex md:flex-col md:items-center md:gap-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/18 bg-blue-500/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_20px_rgba(37,99,235,0.12)]">
              <Activity className="h-4 w-4 text-blue-300/80" strokeWidth={1.5} />
            </div>
            {navigationIcons.map((Icon, index) => (
              <Icon key={index} className="h-4 w-4 text-white/18" strokeWidth={1.5} aria-hidden="true" />
            ))}
          </aside>

          <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.58fr)_minmax(290px,0.82fr)] lg:p-8">
            <div className="grid gap-5">
              <div className="relative min-h-[276px] overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.032] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_20px_54px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:p-7">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-44 w-52 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.075),transparent_72%)]" />

                <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-blue-300/82">
                        Analyse-Überblick
                      </p>
                      <span className="h-px w-12 bg-white/[0.08]" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-700">
                        {isDemo ? "Beispielwerte" : view.urlLabel}
                      </span>
                    </div>

                    <div className="flex items-end gap-3">
                      <h2 className="font-mono text-6xl font-semibold leading-none text-white tabular-nums drop-shadow-[0_0_34px_rgba(255,255,255,0.045)] sm:text-7xl lg:text-8xl">
                        {visibleScore}
                      </h2>
                      <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                        /100 Klarheitsindex
                      </span>
                    </div>

                    <p className="mt-4 max-w-md text-[13px] font-light leading-relaxed text-zinc-400">
                      {isError ? currentError || "Analyse konnte nicht geladen werden." : view.summary}
                    </p>

                    {isDemo && !isControlled && (
                      <p className="mt-3 inline-flex rounded-md border border-white/[0.06] bg-white/[0.035] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                        Demo-Daten - eigene URL eingeben
                      </p>
                    )}

                    <div className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
                      {systemMeta.map((item) => (
                        <div key={item.label} className="rounded-md border border-white/[0.045] bg-black/20 px-2.5 py-2">
                          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-700">
                            {item.label}
                          </p>
                          <p className="mt-1 truncate font-mono text-[10px] text-zinc-400">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {frictionSignals.map((label, index) => (
                        <span
                          key={label}
                          className="rounded-sm border border-white/[0.045] bg-white/[0.018] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.17em] text-zinc-600"
                        >
                          OS-{index + 14} / {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative mx-auto flex h-32 w-32 shrink-0 items-center justify-center sm:mx-0 sm:h-36 sm:w-36">
                    <div className="absolute inset-0 rounded-full border border-blue-300/[0.08]" />
                    <div className="absolute inset-3 rounded-full border border-white/[0.055]" />
                    <div className="absolute inset-[1.65rem] rounded-full border border-white/[0.035]" />
                    {isScanning ? (
                      <Loader2 className="h-9 w-9 animate-spin text-blue-200/70" strokeWidth={1.5} />
                    ) : isError ? (
                      <AlertCircle className="h-9 w-9 text-red-200/58" strokeWidth={1.5} />
                    ) : (
                      <Scan className="h-9 w-9 text-blue-200/58" strokeWidth={1.5} />
                    )}

                    {!reducedMotion && !isError && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: isScanning ? 7 : 24, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                      >
                        {scoreParticles.map((particle) => (
                          <motion.span
                            key={particle.angle}
                            animate={{ opacity: [0.14, isScanning ? 0.85 : 0.62, 0.14] }}
                            transition={{ duration: isScanning ? 1.2 : 3.4, repeat: Infinity, delay: particle.delay }}
                            className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-blue-300/80 shadow-[0_0_10px_rgba(37,99,235,0.42)]"
                            style={{
                              transform: `rotate(${particle.angle}deg) translateY(-68px)`,
                              transformOrigin: "0 0",
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {isScanning && (
                  <div className="relative z-10 mt-5 rounded-lg border border-blue-300/[0.08] bg-black/25 p-3">
                    <div className="space-y-2">
                      {scanSteps.map((step, index) => {
                        const active = index === scanIndex;
                        const complete = index < scanIndex;

                        return (
                          <div key={step} className="flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                active ? "bg-blue-200/80" : complete ? "bg-zinc-300/45" : "bg-white/[0.08]"
                              }`}
                            />
                            <span
                              className={`font-mono text-[9px] uppercase tracking-[0.18em] ${
                                active ? "text-blue-100/80" : complete ? "text-zinc-400" : "text-zinc-700"
                              }`}
                            >
                              {step}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {currentMode === "result" && view.preview && (
                  <VisualCapturePreview preview={view.preview} urlLabel={view.urlLabel} />
                )}

                <div className="absolute bottom-0 left-0 h-px w-full bg-white/[0.06]">
                  <motion.div
                    animate={{ width: progressWidth }}
                    transition={{ duration: reducedMotion ? 0 : 0.75, ease: weightedEase }}
                    className="h-full bg-blue-400/70 shadow-[0_0_16px_rgba(37,99,235,0.24)]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-[0.92fr_1.08fr]">
                <div className="min-h-44 rounded-xl border border-white/[0.07] bg-white/[0.026] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_15px_42px_rgba(0,0,0,0.38)] backdrop-blur-xl">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <MousePointer2 className="h-3 w-3" strokeWidth={1.5} />
                      <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-400">
                        Conversion / UX Signal
                      </span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                      {view.conversionValue}
                    </span>
                  </div>

                  <p className="min-h-12 text-sm font-medium leading-relaxed text-zinc-200">
                    {view.conversionSignal}
                  </p>

                  <div className="mt-4 flex h-14 items-end gap-1.5 rounded-lg border border-white/[0.045] bg-white/[0.018] p-2">
                    {(isScanning ? scanningBars : demoBars).map((height, index) => (
                      <motion.span
                        key={index}
                        animate={{ height: `${isScanning ? scanningBars[(scanIndex + index) % scanningBars.length] : height}%` }}
                        transition={{ duration: reducedMotion ? 0 : 0.45 }}
                        className="flex-1 rounded-t-[1px] bg-zinc-300/28"
                      />
                    ))}
                  </div>
                </div>

                <div className="relative min-h-44 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.026] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_15px_42px_rgba(0,0,0,0.38)] backdrop-blur-xl">
                  <div className="relative z-10 mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <AlertCircle className="h-3 w-3 text-blue-300/58" strokeWidth={1.5} />
                      <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-400">
                        UX Signal Map
                      </span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                      H-07
                    </span>
                  </div>

                  <div className="relative z-10 space-y-3">
                    {view.signals.map((signal) => (
                      <div key={signal.label}>
                        <div className="h-1 overflow-hidden rounded-full bg-white/[0.04]">
                          <motion.div
                            animate={{ width: `${signal.value}%` }}
                            transition={{ duration: reducedMotion ? 0 : 0.55 }}
                            className={`h-full ${signalClass(signal.tone)}`}
                          />
                        </div>
                        <p className="mt-1.5 truncate text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                          {signal.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl border border-white/[0.07] bg-white/[0.026] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_20px_62px_rgba(0,0,0,0.56)] backdrop-blur-xl sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h4 className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.3em] text-blue-300/82">
                  <Activity className="h-3 w-3" strokeWidth={1.5} />
                  Wichtigste Hebel
                </h4>
                <Sparkles className="h-3.5 w-3.5 text-zinc-700" strokeWidth={1.5} />
              </div>

              <div className="space-y-3">
                {view.levers.slice(0, 4).map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="rounded-lg border border-white/[0.045] bg-white/[0.018] p-3 transition-colors hover:border-white/[0.085] hover:bg-white/[0.032]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className={`text-[12px] font-medium leading-snug text-zinc-300 ${isScanning ? "h-4 w-3/4 rounded bg-white/[0.06] text-transparent" : ""}`}>
                          {isScanning ? "Signal wird geprüft" : item.label}
                        </p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                          Task 0{index + 1}
                        </p>
                      </div>
                      <span className={`shrink-0 rounded-sm px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.18em] ${priorityClass(item.priority)}`}>
                        {isScanning ? "Scan" : item.priority}
                      </span>
                    </div>
                    {isScanning ? (
                      <div className="mt-3 space-y-1.5">
                        <span className="block h-1.5 w-full rounded bg-white/[0.045]" />
                        <span className="block h-1.5 w-2/3 rounded bg-white/[0.035]" />
                      </div>
                    ) : (
                      <p className="mt-2 text-[11px] leading-relaxed text-zinc-500">{item.detail}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/[0.04] pt-6">
                <a
                  href={reportHref}
                  className="group flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                      Mögliche Wirkung
                    </p>
                    <span className="font-mono text-4xl font-semibold text-white tabular-nums">
                      +{view.projectedLift}<span className="text-zinc-600">%</span>
                    </span>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] transition-transform group-hover:translate-x-1">
                    <ChevronRight className="h-4 w-4 text-zinc-500" strokeWidth={1.5} />
                  </div>
                </a>

                <p className="mt-4 text-[11px] font-light leading-relaxed text-zinc-500">
                  {isScanning
                    ? scanSteps[scanIndex]
                    : isDemo
                      ? "Demo-Daten - eigene URL eingeben. Echte Werte entstehen nach dem Website-Scan."
                      : "Abgeleitet aus Findings, Prioritäten und geschätztem Umsetzungsaufwand."}
                </p>

                {currentMode === "result" && canOpenReport && (
                  <a
                    href={reportHref}
                    className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-200/18 bg-blue-400/[0.11] px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.17em] text-blue-50 shadow-[0_0_28px_rgba(37,99,235,0.08)] transition hover:-translate-y-0.5 hover:border-blue-200/32 hover:bg-blue-400/[0.16] hover:shadow-[0_18px_54px_rgba(37,99,235,0.14)]"
                  >
                    Vollständige Analyse öffnen
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </a>
                )}

                {currentMode === "result" && !canOpenReport && (
                  <div className="mt-5 rounded-lg border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-center">
                    <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-zinc-500">
                      Vollständiger Report nicht gespeichert
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-600">
                      Die kompakte Analyse ist sichtbar. Öffne die Analyse-App mit der geprüften URL.
                    </p>
                    <a
                      href={reportHref}
                      className="mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.035] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400 transition hover:border-white/[0.14] hover:bg-white/[0.055]"
                    >
                      Analyse-App öffnen
                      <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
