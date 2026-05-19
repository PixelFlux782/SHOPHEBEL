export const SHOPHEBEL_HOME_URL = process.env.NEXT_PUBLIC_SHOPHEBEL_HOME_URL || "http://localhost:3000";
export const ANALYSE_APP_URL =
  process.env.NEXT_PUBLIC_ANALYSE_APP_URL ||
  process.env.NEXT_PUBLIC_ANALYSE_TOOL_URL ||
  "http://localhost:3001";
export const ANALYSE_TOOL_URL = ANALYSE_APP_URL;
export const SCOUT_TOOL_URL = process.env.NEXT_PUBLIC_SCOUT_TOOL_URL || "http://localhost:3002";
export type AnalysisStage = "free" | "full" | "premium";

export const ANALYSIS_STAGES = {
  free: "free",
  full: "full",
  premium: "premium",
} as const satisfies Record<AnalysisStage, AnalysisStage>;

export const WEBSITE_ANALYSE_URL = new URL(`/website-analyse?stage=${ANALYSIS_STAGES.free}`, ANALYSE_APP_URL).toString();
// TODO: Connect this stage to the future 5 EUR checkout without changing existing premium routes.
export const FULL_ANALYSE_URL = new URL(`/website-analyse?stage=${ANALYSIS_STAGES.full}`, ANALYSE_APP_URL).toString();
export const PREMIUM_ANALYSE_URL = "/shophebel/report";
export const CONVERSION_OPTIMIERUNG_URL = new URL("/conversion-optimierung", ANALYSE_APP_URL).toString();

export function buildAnalyseToolUrl(inputUrl?: string): string {
  const base = ANALYSE_TOOL_URL;
  const trimmed = inputUrl?.trim();

  if (!trimmed) {
    return base;
  }

  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}url=${encodeURIComponent(trimmed)}`;
}
