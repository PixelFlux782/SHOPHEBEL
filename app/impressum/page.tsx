export default function ImpressumPage() {
  return (
    <main className="shophebel-page">
      <section className="sh-section px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="sh-eyebrow">Rechtliches</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Impressum</h1>
          <div className="mt-8 space-y-6 rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm sm:p-8">
            <section>
              <h2 className="text-lg font-bold text-slate-950">Anbieterangaben</h2>
              <p className="mt-3 leading-7">
                Die vollstaendigen Anbieterangaben werden vor der Live-Schaltung mit den echten Unternehmensdaten
                ergaenzt.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-950">Kontakt</h2>
              <p className="mt-3 leading-7">E-Mail: info@shophebel.de</p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-950">Hinweis</h2>
              <p className="mt-3 leading-7">
                Diese Seite enthaelt keine erfundenen Rechts- oder Unternehmensdaten. Vor Veroeffentlichung muessen die
                finalen Pflichtangaben juristisch geprueft und ergaenzt werden.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
