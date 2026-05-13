import Link from "next/link";

import { ContactRequestForm } from "@/components/sections/contact-request-form";
import { ANALYSE_APP_URL } from "@/lib/constants";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryCta?: "quickCheck" | "premiumReport" | "optimization";
}

const ctas = {
  quickCheck: {
    label: "Jetzt kostenlosen Check starten",
    href: ANALYSE_APP_URL,
  },
  premiumReport: {
    label: "Premium Report ansehen",
    href: "/shophebel/report",
  },
  optimization: {
    label: "Optimierung anfragen",
    href: "/shophebel/optimierung",
  },
} as const;

export function CtaSection({ title, description, primaryCta = "quickCheck" }: CtaSectionProps) {
  const orderedCtas = [
    ctas[primaryCta],
    ...Object.entries(ctas)
      .filter(([key]) => key !== primaryCta)
      .map(([, cta]) => cta),
  ];

  return (
    <section id="kontakt" className="sh-section-dark px-6 py-12 lg:px-10 lg:py-14">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div>
          <p className="sh-eyebrow sh-eyebrow-dark">Call-to-Action</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-200">{description}</p>
          <p className="mt-4 text-sm text-cyan-100">
            E-Mail: info@shophebel.de | Rueckmeldung mit dem naechsten sinnvollen Schritt
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {orderedCtas.map((cta, index) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={`${
                  index === 0
                    ? "sh-button-primary"
                    : "sh-button-secondary sh-button-ghost"
                }`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>

        <ContactRequestForm />
      </div>
    </section>
  );
}
