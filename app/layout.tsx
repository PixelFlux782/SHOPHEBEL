import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Shophebel | Growth OS for E-Commerce Brands",
  description: "Das Betriebssystem für ambitionierte E-Commerce Marken.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="bg-zinc-950 text-zinc-100 antialiased dark">
      <body className={`${inter.variable} font-sans bg-zinc-950 selection:bg-blue-500/30`}>
        {/* Background Grid - Holographic atmosphere */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Ambient Glow Layers - Subtile SaaS atmosphere */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-cyan-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Noise Overlay */}
        <div className="fixed inset-0 z-[1] opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
