# Shophebel Platform Roadmap

Shophebel soll sich schrittweise von einer Analyse- und Dienstleistungsseite zu einer Produktplattform für Sichtbarkeit, Vertrauen und Umsatz entwickeln. Die Roadmap ist bewusst in Phasen geschnitten, damit jede Stufe eigenständig Wert liefert.

## Phase 1: Free Audit Plattform

Ziel: Nutzer geben eine URL ein, erhalten eine erste belastbare Diagnose und können als Lead weiterqualifiziert werden.

- Website Check
- SEO/Trust/Conversion Scores
- Lead-Erfassung
- Admin-Dashboard

Ergebnis dieser Phase:

- Öffentliche Analyse-Strecke mit URL-Eingabe
- Ergebnis-Seite mit verständlichen Scores
- Kontakt- oder Report-Anfrage als Conversion
- Interne Übersicht über eingehende Leads und geprüfte Websites

## Phase 2: Premium Reports

Ziel: Aus dem kostenlosen Check wird ein bezahlbarer, konkreter Premium-Report mit priorisierten Maßnahmen.

- PDF Export
- priorisierte Maßnahmen
- Screenshot-Analyse
- Entwickler-To-dos
- Zahlungsanbindung

Ergebnis dieser Phase:

- Premium-Report als klares Produkt
- Sichtbare Upgrade-Logik nach dem Free Audit
- PDF-Ausgabe für Kunden und interne Umsetzung
- Bezahlstrecke oder manuelle Anfrage mit Zahlungsoption

## Phase 3: Monitoring

Ziel: Shophebel wird wiederkehrend nutzbar, nicht nur als Einmal-Check.

- Nutzerkonto
- gespeicherte Projekte
- monatliche Re-Checks
- Score-Verlauf
- E-Mail-Benachrichtigungen

Ergebnis dieser Phase:

- Kunden können Websites speichern
- Scores werden historisiert
- Verbesserungen und Rückschritte werden sichtbar
- Re-Checks erzeugen wiederkehrenden Produktwert

## Phase 4: Wettbewerbs- und KI-Sichtbarkeit

Ziel: Shophebel erweitert die Analyse von der eigenen Website auf Markt, Wettbewerber, lokale Sichtbarkeit und AI Visibility.

- Wettbewerber-Vergleich
- Keyword-/Content-Ideen
- Local Visibility
- KI-Sichtbarkeits-Check
- Agentur-/B2B-Angebote

Ergebnis dieser Phase:

- Vergleich statt isolierter Einzelanalyse
- Content- und Optimierungsideen mit Marktbezug
- Positionierung als moderne Visibility-Plattform
- B2B-Pakete für Agenturen, lokale Anbieter und Shops

## Technische Tasks

### Next.js

- App-Router-Struktur für `/analyse`, `/analyse/result/[id]`, `/tools`, `/tools/[slug]`, `/admin` und spätere Account-Bereiche sauber trennen.
- Ergebnis-Seite modularisieren: Score-Kacheln, Quick Wins, kritische Punkte, Premium-Lock, Screenshot-Preview, PDF-CTA.
- Tool-Seiten als wiederverwendbare Templates bauen, damit neue Free Tools schnell ergänzt werden können.
- Authentifizierte Bereiche für Nutzerkonto, Projektübersicht und Admin-Dashboard vorbereiten.
- Server Actions oder API Routes für Lead-Erfassung, Report-Anfrage, Projektverwaltung und Re-Checks definieren.

### API

- Einheitliches Analyse-Response-Modell versionieren, z. B. `analysisVersion`.
- API-Endpunkte für Analyse starten, Analyse abrufen, Premium-Report anfragen, Checkout starten und Re-Check planen.
- Rate Limiting für Free Checks ergänzen.
- Validierung für URLs, Kontaktanfragen und Report-Bestellungen zentralisieren.
- Fehlerfälle sauber unterscheiden: ungültige URL, nicht erreichbare Website, Puppeteer-Fehler, Timeout, nicht prüfbare Daten.

### Supabase

- Supabase Auth für Nutzerkonten und Admin-Zugänge prüfen oder einführen.
- Tabellen für Leads, Analysen, Projekte, Report-Anfragen und Admin-Notizen anlegen.
- Row Level Security für Nutzerprojekte und Admin-Zugriffe definieren.
- Storage-Bucket für Screenshots und PDF-Reports nutzen.
- Edge Functions optional für Benachrichtigungen oder geplante Re-Checks prüfen.

### Prisma/Postgres

- Prisma Schema für `User`, `Project`, `Analysis`, `ScoreBlock`, `Finding`, `Recommendation`, `Lead`, `ReportRequest`, `Payment` modellieren.
- Analyse-Ergebnisse relational oder als JSONB speichern, je nach Abfragebedarf.
- Migrationsstrategie festlegen, bevor Monitoring und Score-Verlauf produktiv werden.
- Indizes für `projectId`, `userId`, `createdAt`, `url`, `status` und `productType` ergänzen.
- Audit-Historie so speichern, dass Score-Verläufe und Vorher/Nachher-Vergleiche möglich sind.

### Puppeteer

- Browser-Fallback stabilisieren: Timeouts, User-Agent, Viewport-Größen und Fehlerlogging standardisieren.
- Screenshot-Erzeugung für Viewport, Full Page und Hero-Bereich absichern.
- Visuelle Signale sammeln: sichtbare CTAs, Formulare, Headings, Bilder, Sticky Header, Above-the-fold-Inhalte.
- Mobile und Desktop getrennt prüfen, sobald Performance und Layout-Risiken wichtiger werden.
- Nicht prüfbare visuelle Daten explizit als `not_checked` markieren.

### PDF-Export

- PDF-Template für Premium-Reports entwickeln: Zusammenfassung, Scores, Quick Wins, kritische Punkte, Maßnahmenplan, Screenshots, technische To-dos.
- HTML-to-PDF-Rendering mit Playwright/Puppeteer oder einer serverseitigen PDF-Library evaluieren.
- PDF-Dateien versionieren und im Storage ablegen.
- Download-Link auf Ergebnis-Seite und in E-Mail-Kommunikation bereitstellen.
- Report-Layout für A4, Druck und digitale Weitergabe testen.

### Stripe

- Stripe Checkout für Premium-Report einrichten.
- Produkte/Preise für `premium_report`, spätere Monitoring-Pläne und Agenturpakete anlegen.
- Webhook für erfolgreiche Zahlung implementieren und Report-Anfrage freischalten.
- Payment-Status in Datenbank speichern: `pending`, `paid`, `failed`, `refunded`.
- Fallback-Prozess behalten: Falls Stripe nicht konfiguriert ist, Report-Anfrage als Lead speichern.

### Monitoring

- Cron- oder Queue-System für monatliche Re-Checks einführen.
- Score-Snapshots historisieren und Trends berechnen.
- E-Mail-Benachrichtigungen bei starken Score-Veränderungen oder kritischen Fehlern versenden.
- Nutzer-Dashboard mit Projektliste, letzter Analyse, nächstem Re-Check und Score-Verlauf bauen.
- Limits pro Plan definieren: Anzahl Projekte, Re-Check-Frequenz, Reports, Nutzerplätze.

### Wettbewerbs- und KI-Sichtbarkeit

- Wettbewerber pro Projekt speichern und Vergleichsanalysen planen.
- Keyword- und Content-Ideen zunächst regelbasiert aus Seitentyp, Branche, Headings und Content-Lücken ableiten.
- Local Visibility über Google-Business-Profil-Checklisten und Standortseiten-Signale starten.
- KI-Sichtbarkeits-Check auf semantische Struktur, Schema.org, FAQ-Potenzial, Entitäten und Vertrauenssignale fokussieren.
- Keine Garantien auf KI-Erwähnungen ausgeben; nur Vorbereitung, Auffindbarkeit und Inhaltsqualität bewerten.
