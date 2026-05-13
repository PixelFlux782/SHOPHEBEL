"use client";
import { Search, Shield, Eye, Smartphone, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { title: "SEO", icon: Search, desc: "Sichtbarkeit in den Momenten, in denen Kunden suchen." },
  { title: "Vertrauen", icon: Shield, desc: "Psychologische Trigger, die Kaufhürden abbauen." },
  { title: "Klarheit", icon: Eye, desc: "Botschaften, die sofort verstanden werden." },
  { title: "Mobile UX", icon: Smartphone, desc: "Nahtlose Bedienung auf dem wichtigsten Endgerät." },
  { title: "Conversion", icon: Target, desc: "Gezielte Führung des Nutzers zum Abschluss." },
  { title: "Performance", icon: Zap, desc: "Ladezeiten, die keine Absprünge provozieren." },
];

export const Features = () => {
  return (
    <section id="leistungen" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-brand-muted">Was Shophebel prüft.</h2>
        <p className="text-brand-muted max-w-xl mx-auto">Tiefgreifende Analyse der sechs wichtigsten Säulen für E-Commerce Erfolg.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.04)", y: -2 }}
            className="bg-white/[0.03] p-10 backdrop-blur-md transition-all duration-300"
          >
            <f.icon className="w-6 h-6 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
