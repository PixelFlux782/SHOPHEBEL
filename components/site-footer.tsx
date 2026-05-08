import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-4 border-t border-white/10 bg-slate-950 py-10 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <Link href="/" className="text-lg font-bold uppercase tracking-[0.14em] text-white">
            Shophebel
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Shophebel analysiert Websites und Onlineshops, macht digitale Schwaechen sichtbar und zeigt konkrete
            Hebel fuer SEO, Vertrauen und Conversion.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Shophebel</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/shophebel" className="hover:text-white">Analyse</Link>
              <Link href="/shophebel/report" className="hover:text-white">Premium Report</Link>
              <Link href="/shophebel/optimierung" className="hover:text-white">Optimierung</Link>
              <Link href="/analyse" className="hover:text-white">Schnellcheck starten</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Rechtliches</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/impressum" className="hover:text-white">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
              <Link href="/#kontakt" className="hover:text-white">Kontakt</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-7xl px-4 text-xs text-slate-500 sm:px-6 lg:px-8">
        © Shophebel. Analyse, Report und Umsetzung fuer bessere digitale Wirkung.
      </div>
    </footer>
  );
}
