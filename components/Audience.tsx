"use client";
import { motion } from "framer-motion";
import { Store, Factory, MapPin, Building2 } from "lucide-react";

const targetGroups = [
  {
    title: "Kleine Shops",
    desc: "Wachstums-Grundlagen schaffen und typische Anfängerfehler in der UX vermeiden.",
    icon: Store,
  },
  {
    title: "Hersteller mit Direktvertrieb",
    desc: "Die eigene Marke stärken und den Zwischenhandel durch exzellente D2C-Experience ergänzen.",
    icon: Factory,
  },
  {
    title: "Lokale Händler",
    desc: "Die physische Präsenz digital verlängern und Vertrauen online spürbar machen.",
    icon: MapPin,
  },
  {
    title: "B2B-Marken mit D2C-Ambition",
    desc: "Komplexe Produkte einfach verkaufen und neue Zielgruppen direkt erreichen.",
    icon: Building2,
  },
];

export const Audience = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Für wen Shophebel gebaut ist.</h2>
        <p className="text-brand-muted max-w-xl text-lg">Für Shops und Marken, die nicht mehr raten wollen, warum Besucher nicht kaufen.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {targetGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group flex flex-col h-full backdrop-blur-md"
          >
            <group.icon className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-3 tracking-tight">{group.title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed">{group.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};