"use client";

import { motion } from "framer-motion";
import { Building2, Factory, MapPin, Store } from "lucide-react";
import Link from "next/link";

import { CONVERSION_OPTIMIERUNG_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

const targetGroups = [
  {
    title: "Shops mit Wachstumspotenzial",
    desc: "Für Marken, die vorhandenen Traffic besser in Vertrauen, Warenkorb und Kaufentscheidung übersetzen wollen.",
    icon: Store,
    href: CONVERSION_OPTIMIERUNG_URL,
  },
  {
    title: "Hersteller mit Direktvertrieb",
    desc: "Für Unternehmen, die ihre Marke stärker positionieren und D2C-Erlebnisse professioneller führen wollen.",
    icon: Factory,
    href: WEBSITE_ANALYSE_URL,
  },
  {
    title: "Lokale Anbieter",
    desc: "Für Betriebe, bei denen mobile Nutzer schnell verstehen müssen, warum sie anfragen oder vorbeikommen sollten.",
    icon: MapPin,
    href: CONVERSION_OPTIMIERUNG_URL,
  },
  {
    title: "B2B-Websites",
    desc: "Für komplexe Angebote, die Klarheit, Expertenwirkung und eine bessere Anfrageführung brauchen.",
    icon: Building2,
    href: WEBSITE_ANALYSE_URL,
  },
];

export const Audience = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
          Für wen Shophebel gebaut ist.
        </h2>
        <p className="text-brand-muted max-w-2xl text-lg">
          Für Unternehmen, die nicht mehr raten wollen, warum Besucher nicht anfragen, kaufen oder Vertrauen aufbauen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {targetGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group h-full backdrop-blur-md"
          >
            <Link href={group.href} className="flex h-full flex-col p-8">
              <group.icon className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 tracking-tight">{group.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{group.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
