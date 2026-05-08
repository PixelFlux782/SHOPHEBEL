import type { Metadata } from "next";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Shophebel - Website-Audit, UX, Reports und AI-Sichtbarkeit",
  description:
    "Shophebel hilft kleinen Shops, Websites und lokalen Betrieben mit visueller Analyse, konkreten Massnahmen, einfachen Reports und AI-Sichtbarkeit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <SiteHeader />
        <div className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
