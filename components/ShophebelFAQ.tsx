const faqs = [
  {
    question: "Ist die Analyse kostenlos?",
    answer:
      "Der Schnellcheck ist kostenlos. Wenn Sie eine tiefere Auswertung moechten, koennen Sie den Premium Report anfragen.",
  },
  {
    question: "Was ist im Premium Report enthalten?",
    answer:
      "Der Report prueft SEO, Technik, UX, Vertrauen und Conversion. Sie erhalten konkrete Hinweise und eine priorisierte Einschaetzung per E-Mail.",
  },
  {
    question: "Muss ich meine Zugangsdaten angeben?",
    answer:
      "Fuer den Schnellcheck und den Premium Report sind keine Zugangsdaten noetig. Fuer eine spaetere Umsetzung klaeren wir Zugriffe nur, wenn sie wirklich gebraucht werden.",
  },
  {
    question: "Fuer welche Shops ist Shophebel geeignet?",
    answer:
      "Shophebel eignet sich fuer kleine und mittelgrosse Shops, Dienstleister-Websites und Landingpages, die Sichtbarkeit, Vertrauen oder Conversion verbessern moechten.",
  },
  {
    question: "Setzt ihr die Optimierungen auch um?",
    answer:
      "Ja. Im Umsetzungspaket koennen wir priorisierte Verbesserungen an Inhalten, Struktur, Produktseiten, Technik und Vertrauen direkt bearbeiten.",
  },
  {
    question: "Wie schnell bekomme ich eine Rueckmeldung?",
    answer:
      "In der Regel melden wir uns zeitnah nach Eingang der Anfrage. Bei umfangreicheren Projekten klaeren wir zuerst den passenden Rahmen.",
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
        Haeufige Fragen zu Shophebel
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
