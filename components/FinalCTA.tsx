"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { CONVERSION_OPTIMIERUNG_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center bg-white/[0.03] border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.5),0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]"
        >
          Lass deine Website nicht nur gut aussehen. <br />
          <span className="text-brand-blue">Lass sie überzeugen.</span>
        </motion.h2>

        <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Shophebel zeigt, wo Vertrauen, Klarheit und Conversion verloren gehen - und welche Maßnahmen zuerst Wirkung bringen.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href={WEBSITE_ANALYSE_URL} className="inline-flex justify-center bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-600/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/20">
            Website kostenlos analysieren
          </Link>
          <Link href={CONVERSION_OPTIMIERUNG_URL} className="inline-flex justify-center border border-white/10 bg-white/[0.04] text-white px-10 py-4 rounded-xl font-bold text-lg hover:border-blue-400/40 hover:bg-white/[0.08] transition-all">
            Conversion-Potenziale entdecken
          </Link>
        </div>
      </div>
    </section>
  );
};
