export type ToolStatus = "Kostenlos" | "Bald verfügbar" | "Premium";

export type ShophebelTool = {
  slug: string;
  title: string;
  benefit: string;
  status: ToolStatus;
  href: string;
  available: boolean;
  category: string;
};

export const shophebelTools: ShophebelTool[] = [
  {
    slug: "website-check",
    title: "Kostenloser Website-Check",
    benefit: "Prüfe SEO, Technik, Vertrauen und Conversion-Potenzial deiner Website in einem ersten Analyse-Teaser.",
    status: "Kostenlos",
    href: "/tools/website-check",
    available: true,
    category: "Analyse",
  },
  {
    slug: "seo-snippet-generator",
    title: "SEO-Snippet Generator",
    benefit: "Entwirf bessere Google-Snippets für Seiten, Kategorien und Produkte mit klarer Suchintention.",
    status: "Bald verfügbar",
    href: "/tools/seo-snippet-generator",
    available: false,
    category: "SEO",
  },
  {
    slug: "meta-title-description-pruefer",
    title: "Meta-Title & Description Prüfer",
    benefit: "Bewerte Länge, Klarheit, Keyword-Fokus und Klickreiz deiner wichtigsten Meta-Daten.",
    status: "Bald verfügbar",
    href: "/tools/meta-title-description-pruefer",
    available: false,
    category: "SEO",
  },
  {
    slug: "trust-check",
    title: "Trust-Check für Onlineshops",
    benefit: "Erkenne fehlende Vertrauenssignale wie Kontaktklarheit, Zahlungsarten, Siegel und Bewertungen.",
    status: "Premium",
    href: "/tools/trust-check",
    available: false,
    category: "Trust",
  },
  {
    slug: "ladezeit-schnellcheck",
    title: "Ladezeit-Schnellcheck",
    benefit: "Finde erste Performance-Bremsen, die mobile Nutzer und Kaufentscheidungen ausbremsen.",
    status: "Bald verfügbar",
    href: "/tools/ladezeit-schnellcheck",
    available: false,
    category: "Technik",
  },
  {
    slug: "google-business-profil-checkliste",
    title: "Google-Business-Profil Checkliste",
    benefit: "Prüfe lokale Pflichtfelder, Bewertungen, Leistungen, Fotos und Standortsignale für bessere lokale Sichtbarkeit.",
    status: "Kostenlos",
    href: "/tools/google-business-profil-checkliste",
    available: false,
    category: "Local",
  },
  {
    slug: "produktseiten-optimierer",
    title: "Produktseiten-Optimierer",
    benefit: "Verbessere Produktseiten mit klareren Vorteilen, Trust-Signalen, Struktur und Conversion-Hebeln.",
    status: "Premium",
    href: "/tools/produktseiten-optimierer",
    available: false,
    category: "Conversion",
  },
  {
    slug: "ki-sichtbarkeit",
    title: "KI-Sichtbarkeits-Check",
    benefit: "Bewerte, wie gut deine Inhalte für KI-Suchsysteme, strukturierte Daten und semantische Antworten vorbereitet sind.",
    status: "Bald verfügbar",
    href: "/tools/ki-sichtbarkeit",
    available: false,
    category: "AI Search",
  },
];

export function getToolBySlug(slug: string): ShophebelTool | undefined {
  return shophebelTools.find((tool) => tool.slug === slug);
}
