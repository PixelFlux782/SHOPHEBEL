import { CheckCircle2 } from "lucide-react";

import { ContactRequestForm } from "@/components/sections/contact-request-form";

const trustPoints = [
  "Klare Prioritäten statt Bauchgefühl",
  "UX, SEO & Conversion in einem Blick",
  "Konkrete nächste Schritte statt langer Analyse-PDFs",
];

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryCta?: "quickCheck" | "premiumReport" | "optimization";
}

export function CtaSection({}: CtaSectionProps) {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#030712] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_82%_64%,rgba(34,211,238,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_26%,rgba(2,6,23,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200/80">Final Conversion Close</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.05]">
            Ihre Website hat bereits Potenzial. Die Frage ist, wie viel Umsatz gerade verloren geht.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            SHOPHEBEL zeigt, wo Nutzer abspringen, Vertrauen verloren geht und welche Optimierungen messbar mehr
            Anfragen oder Verkäufe bringen können.
          </p>

          <div className="mt-8 grid gap-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={1.8} />
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[31rem] lg:mx-0 lg:ml-auto">
          <ContactRequestForm />
        </div>
      </div>
    </section>
  );
}
