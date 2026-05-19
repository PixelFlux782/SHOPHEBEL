const faqs = [
  {
    question: "Was ist kostenlos?",
    answer:
      "Der Analyse-Teaser ist kostenlos. Er zeigt einen Gesamt-Score, eine kurze Ersteinschätzung und 1-2 Hauptprobleme.",
  },
  {
    question: "Was ist der Unterschied zwischen Vollanalyse und Premium Analyse?",
    answer:
      "Die Vollanalyse für 5 EUR ist die vollständige automatisierte Analyse. Die Premium Analyse für 49 EUR ist ein strategischer Report mit Priorisierung, Visual Audit Notes, 7-Tage-Plan und PDF Export.",
  },
  {
    question: "Muss ich meine Zugangsdaten angeben?",
    answer:
      "Für Analyse-Teaser, Vollanalyse und Premium Analyse sind keine Zugangsdaten nötig. Für eine spätere Umsetzung klären wir Zugriffe nur, wenn sie wirklich gebraucht werden.",
  },
  {
    question: "Für welche Shops ist Shophebel geeignet?",
    answer:
      "Shophebel eignet sich für kleine und mittelgroße Shops, Dienstleister-Websites und Landingpages, die Sichtbarkeit, Vertrauen oder Conversion verbessern möchten.",
  },
  {
    question: "Setzt ihr die Optimierungen auch um?",
    answer:
      "Ja. Im Umsetzungspaket können wir priorisierte Verbesserungen an Inhalten, Struktur, Produktseiten, Technik und Vertrauen direkt bearbeiten.",
  },
  {
    question: "Wie schnell bekomme ich eine Rückmeldung?",
    answer:
      "In der Regel melden wir uns zeitnah nach Eingang der Anfrage. Bei umfangreicheren Projekten klären wir zuerst den passenden Rahmen.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function ShophebelFAQ() {
  return (
    <section className="sh-section px-6 py-12 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <p className="sh-eyebrow">FAQ</p>
      <h2 className="sh-heading mt-3 max-w-3xl text-3xl">
        Häufige Fragen zu Shophebel
      </h2>
      <div className="mt-7 divide-y divide-slate-200/80">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
            <h3 className="text-base font-semibold text-slate-950">{faq.question}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
