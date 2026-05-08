import { redirect } from "next/navigation";

import { ANALYSE_TOOL_URL, buildAnalyseToolUrl } from "@/lib/constants";

interface AnalyseRedirectPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function AnalyseRedirectPage({ searchParams }: AnalyseRedirectPageProps) {
  const params = await searchParams;
  const urlValue = params.url;
  const inputUrl = typeof urlValue === "string" ? urlValue : undefined;

  if (inputUrl) {
    redirect(buildAnalyseToolUrl(inputUrl));
  }

  redirect(ANALYSE_TOOL_URL);
}
