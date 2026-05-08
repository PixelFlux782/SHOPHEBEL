export default function DatenschutzPage() {
  return (
    <main className="shophebel-page">
      <section className="sh-section px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="sh-eyebrow">Rechtliches</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Datenschutz</h1>
          <div className="mt-8 space-y-6 rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm sm:p-8">
            <section>
              <h2 className="text-lg font-bold text-slate-950">Verantwortliche Stelle</h2>
              <p className="mt-3 leading-7">
                Die finalen Betreiberangaben werden vor der Live-Schaltung mit den echten Unternehmensdaten ergaenzt.
              </p>
              <p className="mt-3 leading-7">E-Mail: info@shophebel.de</p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-950">Kontakt- und Analyseformular</h2>
              <p className="mt-3 leading-7">
                Wenn du eine Anfrage sendest, werden die eingegebenen Angaben zur Bearbeitung der Anfrage gespeichert
                und zur Kontaktaufnahme verwendet.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-950">Hinweis</h2>
              <p className="mt-3 leading-7">
                Diese Datenschutzhinweise sind bewusst knapp gehalten und ersetzen keine juristische Pruefung. Vor
                Veroeffentlichung muessen Hosting, Speicherdauer, Rechtsgrundlagen und weitere Pflichtangaben final
                ergaenzt werden.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
