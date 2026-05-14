"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ANALYSE_APP_URL } from "@/lib/constants";
import SplineHeroBackground from "./SplineHeroBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-start px-6 pt-40 pb-20 overflow-hidden">
      <SplineHeroBackground />

      {/* Subtle readability overlays above the Spline scene */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_70%_45%,rgba(37,99,235,0.10),transparent_38%),linear-gradient(90deg,rgba(2,6,23,0.35)_0%,rgba(2,6,23,0.15)_45%,rgba(2,6,23,0.05)_100%)]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,transparent_42%,rgba(2,6,23,0.24)_100%)]" />

      {/* Grain and grid preserve the existing premium SaaS texture */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.025] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_64%_52%_at_50%_35%,#000_24%,transparent_100%)] opacity-30" />
      
      {/* Light vignette for contrast without hiding the 3D scene */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]" />
      
      <div className="relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Image 
          src="/branding/logo_only_letter.jpeg" 
          alt="Shophebel Logo" 
          width={42} 
          height={42}
          className="rounded-xl shadow-2xl shadow-brand-blue/10 border border-white/5"
        />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center max-w-4xl leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
      >
        Website Intelligence für <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Shops, die wirklich skalieren.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-zinc-300/90 text-lg md:text-xl text-center max-w-2xl font-light"
      >
        Shophebel analysiert Sichtbarkeit, Vertrauen, UX und Conversion – und macht daraus konkrete Maßnahmen statt Datenflut.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative"
      >
        {/* Soft diffuse glow behind CTA buttons */}
        <div className="absolute inset-0 blur-[60px] bg-blue-500/10 pointer-events-none -z-10" />

        <Link href="#analyse" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600/90 transition-all text-center shadow-lg shadow-blue-600/20">
          Website analysieren
        </Link>
        <Link href={ANALYSE_APP_URL} className="bg-white/[0.03] border border-white/10 px-8 py-4 rounded-xl font-semibold hover:border-blue-500/50 transition-all text-center backdrop-blur">
          Premium Report ansehen
        </Link>
      </motion.div>
      </div>
    </section>
  );
};
