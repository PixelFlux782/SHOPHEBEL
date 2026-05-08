export const SHOPHEBEL_HOME_URL = process.env.NEXT_PUBLIC_SHOPHEBEL_HOME_URL || "http://localhost:3000";
export const ANALYSE_TOOL_URL = process.env.NEXT_PUBLIC_ANALYSE_TOOL_URL || "http://localhost:3001";
export const SCOUT_TOOL_URL = process.env.NEXT_PUBLIC_SCOUT_TOOL_URL || "http://localhost:3002";

export function buildAnalyseToolUrl(inputUrl?: string): string {
  const base = ANALYSE_TOOL_URL;
  const trimmed = inputUrl?.trim();

  if (!trimmed) {
    return base;
  }

  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}url=${encodeURIComponent(trimmed)}`;
}
