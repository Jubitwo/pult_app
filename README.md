# PULT – dein digitales Lehrerpult

Statische, deutschsprachige Produktwebsite für die iPad-App PULT. Das Projekt verwendet HTML, CSS und JavaScript-Module ohne zusätzliche Abhängigkeiten und kann direkt als eigenständiges Repository über GitHub Pages veröffentlicht werden.

## Lokal ansehen

Im Ordner `pult-website` einen einfachen lokalen Webserver starten:

```sh
python3 -m http.server 8000
```

Anschließend [http://localhost:8000](http://localhost:8000) im Browser öffnen. JavaScript-Module sollten nicht über `file://` aufgerufen werden.

## GitHub Pages

1. Den **Inhalt dieses Ordners** als Root eines eigenen GitHub-Repositories veröffentlichen.
2. In GitHub unter **Settings → Pages** als Build- und Deployment-Quelle **GitHub Actions** auswählen.
3. Den Branch `main` veröffentlichen. Der Workflow in `.github/workflows/pages.yml` übernimmt den statischen Build und das Deployment.
4. Vor dem Launch die unten aufgeführten offenen Angaben ergänzen und die Änderungen veröffentlichen.

Alle Website- und Asset-Pfade sind relativ zum Projekt-Root. Es gibt keine Build-Schritte, externen Skripte oder serverseitigen Funktionen.

## Offene Punkte vor Veröffentlichung

Die zentralen Website-Einstellungen stehen in [`config.js`](./config.js):

- **App Store:** die offiziellen Schaltflächen verwenden die Apple-Kurz-URL `https://apple.co/3SJPB01` und das bereitgestellte deutsche App-Store-Badge.
- **Kontakt:** bestätigte öffentliche E-Mail-Adresse ergänzen.
- **Domain:** endgültige Domain in `config.js` eintragen; Canonical- und Open-Graph-URL werden dann ergänzt. Domain und gegebenenfalls DNS-Einstellungen vor dem Launch prüfen.
- **Impressum und Datenschutz:** erst nach Klärung von Anbieter, Verantwortlichkeit und tatsächlichen Datenverarbeitungen auf geprüfte Rechtstexte verlinken. Die Website verlinkt derzeit auf keine nicht vorhandenen Rechtsseiten.
- **Screenshots:** Bildzuordnungen und nicht verwendete Aufnahmen sind in [`assets/screenshots/README.md`](./assets/screenshots/README.md) dokumentiert. Nicht passende Timergrößen-Karten bleiben ohne Bild; es gibt keine Platzhalter.
- **Hamster:** transparente Figuren erscheinen im Hero, in den drei Praxistipps, in der Nach-oben-Navigation und im Abschluss. Von den eingebundenen Figuren wird höchstens eine gleichzeitig eingeblendet; der Nach-oben-Button erscheint nach dem Scrollen.
- **Open-Graph-Bild:** bei eingetragener Domain wird die Hero-App-Ansicht automatisch als Open-Graph-Bild verlinkt.
- **Favicon:** die aktuelle Logo-Datei ist als PNG eingebunden; bei Bedarf später um passende ICO-/SVG-Varianten ergänzen.
- **Social Media:** nur tatsächlich genutzte Profile in `config.js` ergänzen.

Profile in `socialLinks` werden als Einträge der Form `{ label: "Instagram", url: "https://…" }` angegeben. Links mit ungültigen oder unsicheren URLs werden nicht ausgegeben und in der Browser-Konsole gemeldet.

Vor dem Launch außerdem Kompatibilitätsangaben, Funktionsbeschreibungen, verfügbare Plattformen und sämtliche rechtlichen Informationen gegen den aktuellen Stand der App prüfen.
