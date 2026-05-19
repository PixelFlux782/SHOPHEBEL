"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#030712] pt-32 pb-20 selection:bg-cyan-500/30">
      {/* Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep dark gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0f172a_0%,#030712_100%)]" />
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" 
        />

        {/* Cinematic Glowing Orbs */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] h-[35rem] w-[35rem] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[120px]"
        />
      </div>

      {/* Floating Dashboard Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute hidden lg:block top-[20%] left-[5%] xl:left-[10%] z-10"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
             <div className="relative flex h-14 w-14 items-center justify-center">
               <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
                 <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                 <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22d3ee" strokeWidth="3" strokeDasharray="92, 100" />
               </svg>
               <span className="text-sm font-bold text-white">92</span>
             </div>
             <div>
               <p className="text-xs font-medium text-slate-400">SEO Score</p>
               <p className="text-sm font-bold text-cyan-400">Exzellent</p>
             </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute hidden lg:block bottom-[25%] right-[5%] xl:right-[10%] z-10"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
               <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
             </div>
             <div>
               <p className="text-xs font-medium text-slate-400">Conversion Blocker</p>
               <p className="text-sm font-bold text-white">Trust-Badge fehlt</p>
             </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl px-5 sm:px-8 mx-auto flex flex-col items-center text-center">
        
        {/* Pre-Headline Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 shadow-xl backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Shophebel AI Platform
          </div>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-[5.5rem] leading-[1.1] max-w-5xl"
        >
          Mach sichtbar, was deinen <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500">Shop wirklich aufhält.</span>
        </motion.h1>
        
        {/* Better Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed font-light"
        >
          Starte mit einem kostenlosen Analyse-Teaser. Wenn du mehr Tiefe willst, schaltest du die Vollanalyse für 5 EUR frei oder nutzt die Premium Analyse für strategische Prioritäten.
        </motion.p>

        {/* CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto"
        >
          <Link
            href="/analyse"
            className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 text-base font-semibold text-slate-950 transition-all hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Kostenlos analysieren
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link
            href="/shophebel/report"
            className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Premium Analyse starten
          </Link>
        </motion.div>

        {/* Social Proof / Trust */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 border-t border-white/5 pt-8 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-12 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-cyan-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Keine Installation nötig
            </div>
            <div className="flex items-center gap-2">
               <svg className="h-5 w-5 text-cyan-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              KI-gestützte Insights
            </div>
            <div className="flex items-center gap-2">
               <svg className="h-5 w-5 text-cyan-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Ergebnisse in 60 Sekunden
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
