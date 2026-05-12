import type { AnalysisResult, AuditCheckStatus } from "@/lib/analysis-types";

export type DashboardMode = "demo" | "scanning" | "result" | "error";
export type LeverPriority = "Critical" | "High" | "Medium";

export interface DashboardLever {
  label: string;
  detail: string;
  priority: LeverPriority;
  value: number;
}

export interface DashboardSignal {
  label: string;
  value: number;
  tone: "stable" | "watch" | "risk";
}

export interface DashboardPreviewCapture {
  viewport?: string;
  mobile?: string;
  fullPage?: string;
  primary: string;
  primaryVariant: "viewport" | "mobile" | "fullPage" | "hero";
  hasMobileSignal: boolean;
}

export interface DashboardView {
  score: number;
  urlLabel: string;
  summary: string;
  conversionSignal: string;
  conversionValue: string;
  projectedLift: number;
  levers: DashboardLever[];
  signals: DashboardSignal[];
  reportHref?: string;
  preview?: DashboardPreviewCapture;
}

const demoView: DashboardView = {
  score: 84,
  urlLabel: "demo.shophebel.de",
  summary: "Beispielansicht mit verdichteten UX-, Trust- und Conversion-Signalen.",
  conversionSignal: "CTA-Hierarchie klar, Trust-Signale im ersten View ausbaufähig",
  conversionValue: "2.48%",
  projectedLift: 17,
  levers: [
    { label: "Trust früher sichtbar machen", detail: "Bewertungen und Zahlungsarten in den ersten View ziehen.", priority: "High", value: 76 },
    { label: "Mobile CTA schärfen", detail: "Primäre Handlung wiederholen und eindeutig benennen.", priority: "High", value: 68 },
    { label: "Checkout-Klarheit erhöhen", detail: "Service- und Lieferinformationen näher an Kaufmomenten zeigen.", priority: "Medium", value: 61 },
    { label: "Ladegefühl priorisieren", detail: "Bild- und Script-Bremsen vor der Optimierung prüfen.", priority: "Medium", value: 54 },
  ],
  signals: [
    { label: "Hero Trust", value: 72, tone: "watch" },
    { label: "Mobile CTA", value: 58, tone: "risk" },
    { label: "Checkout Klarheit", value: 81, tone: "stable" },
    { label: "AI Kontext", value: 69, tone: "watch" },
  ],
};

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function hostFromUrl(value?: string) {
  if (!value) return demoView.urlLabel;

  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0] || value;
  }
}

function compactText(value: string, maxLength = 118) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trim()}...`;
}

function priorityFromImpact(impact?: string): LeverPriority {
  if (impact === "high") return "High";
  if (impact === "medium") return "Medium";
  return "Medium";
}

function toneFromStatus(status: AuditCheckStatus): DashboardSignal["tone"] {
  if (status === "critical") return "risk";
  if (status === "warning" || status === "unknown" || status === "not_checked") return "watch";
  return "stable";
}

function valueFromStatus(status: AuditCheckStatus) {
  if (status === "good") return 86;
  if (status === "warning") return 58;
  if (status === "critical") return 28;
  return 44;
}

function getTopSignals(result: AnalysisResult): DashboardSignal[] {
  const namedChecks = [
    result.categories.trust.checks.find((check) => /vertrauens|kontakt|impressum/i.test(check.title)),
    result.categories.conversion.checks.find((check) => /naechster|cta|anfrage/i.test(check.title)),
    result.categories.design.checks.find((check) => /blick|visuell|lesbarkeit/i.test(check.title)),
    result.categories.aiVisibility.checks.find((check) => /ki|daten|struktur|themen/i.test(check.title)),
  ].filter((check): check is NonNullable<typeof check> => Boolean(check));

  return namedChecks.slice(0, 4).map((check) => ({
    label: check.title,
    value: valueFromStatus(check.status),
    tone: toneFromStatus(check.status),
  }));
}

function getPreviewCapture(result: AnalysisResult): DashboardPreviewCapture | undefined {
  const screenshots = result.screenshots;
  const visualPreviewAvailable = Boolean(
    result.visualPreviewAvailable ||
      result.visual_preview_available ||
      screenshots?.viewport ||
      screenshots?.mobile ||
      screenshots?.fullPage ||
      screenshots?.hero,
  );

  if (!visualPreviewAvailable || !screenshots) {
    return undefined;
  }

  const primary = screenshots.viewport || screenshots.hero || screenshots.mobile || screenshots.fullPage;

  if (!primary) {
    return undefined;
  }

  const primaryVariant = screenshots.viewport
    ? "viewport"
    : screenshots.hero
      ? "hero"
      : screenshots.mobile
        ? "mobile"
        : "fullPage";

  return {
    viewport: screenshots.viewport,
    mobile: screenshots.mobile,
    fullPage: screenshots.fullPage,
    primary,
    primaryVariant,
    hasMobileSignal: Boolean(screenshots.mobile),
  };
}

export function getDemoDashboardView(): DashboardView {
  return demoView;
}

export function mapAnalysisResultToDashboardView(result: AnalysisResult): DashboardView {
  const blockers: DashboardLever[] = result.revenueBlockers.slice(0, 4).map((blocker) => ({
    label: compactText(blocker.problem, 72),
    detail: compactText(blocker.action, 140),
    priority: blocker.estimatedImpact === "hoch" ? "High" : "Medium",
    value: clamp(92 - blocker.priority * 9),
  }));

  const recommendations: DashboardLever[] = [...result.criticalIssues, ...result.quickWins].slice(0, 4).map((item, index) => ({
    label: compactText(item.title, 72),
    detail: compactText(item.description || item.text, 140),
    priority: priorityFromImpact(item.impact),
    value: clamp(82 - index * 8),
  }));

  const levers = blockers.length > 0 ? blockers : recommendations;
  const highImpactCount =
    result.revenueBlockers.filter((item) => item.estimatedImpact === "hoch").length +
    result.criticalIssues.filter((item) => item.impact === "high").length;
  const projectedLift = clamp(8 + highImpactCount * 5 + Math.max(0, 75 - result.overallScore) / 4, 6, 34);
  const signals = getTopSignals(result);
  const conversionScore = result.categories.conversion.score;

  return {
    score: clamp(result.overallScore),
    urlLabel: hostFromUrl(result.finalUrl || result.url || result.requestedUrl),
    summary: compactText(result.categories.conversion.summary || result.categories.trust.summary, 160),
    conversionSignal: compactText(result.categories.conversion.checks[0]?.message || result.categories.conversion.summary, 150),
    conversionValue: `${clamp(conversionScore)} / 100`,
    projectedLift,
    levers: levers.length > 0 ? levers : demoView.levers,
    signals: signals.length > 0 ? signals : demoView.signals,
    reportHref: result.id ? `/analyse/result/${result.id}` : undefined,
    preview: getPreviewCapture(result),
  };
}
