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
4. Vor dem Launch den noch markierten Abschnitt „Hinter PULT“ ergänzen und die Impressumsangaben vervollständigen.

Alle Website- und Asset-Pfade sind relativ zum Projekt-Root. Es gibt keine Build-Schritte, externen Skripte oder serverseitigen Funktionen.

## Website-Inhalte und Einstellungen

Die zentralen Website-Einstellungen stehen in [`config.js`](./config.js):

- **App Store:** die offiziellen Schaltflächen verwenden die Apple-Kurz-URL `https://apple.co/3SJPB01` und das bereitgestellte deutsche App-Store-Badge.
- **Kontakt:** `hallo@pult-app.de` und `@pult.app` sind in Abschluss, FAQ und Footer verknüpft.
- **Domain:** `https://pult-app.de` ist für GitHub Pages eingerichtet. Die DNS-Einträge zeigen auf GitHub Pages; HTTPS wird nach Ausstellung des Zertifikats aktiviert. Die `www`-Adresse leitet auf die Hauptdomain weiter.
- **Rechtliches:** [`datenschutz.html`](./datenschutz.html) enthält die vom Betreiber bereitgestellten Datenverarbeitungshinweise; [`impressum.html`](./impressum.html) markiert noch fehlende Angaben sichtbar. Die Datenschutzhinweise unterscheiden die ausschließlich lokale Speicherung der App-Inhalte von der indirekten Verbindung für automatische App-Updates über den App Store.
- **Hinter PULT:** In `index.html` ist der noch auszufüllende 2–3-Satz-Abschnitt gelb markiert und zusätzlich kommentiert.
- **Screenshots:** Bildzuordnungen, Quellauflösungen und nicht verwendete Aufnahmen sind in [`assets/screenshots/README.md`](./assets/screenshots/README.md) dokumentiert. Es sind derzeit keine 2x-Varianten vorhanden; Screenshots lassen sich per zugänglichem `<dialog>` vergrößern.
- **Hamster:** vorhandene Figuren erscheinen in einheitlichen Kreisen mit 32, 64 oder 120 px Durchmesser. Im Sichtbereich wird höchstens ein Hamster gleichzeitig eingeblendet; der 32-px-Nach-oben-Button erscheint nach dem Scrollen.
- **Open-Graph-Bild:** bei eingetragener Domain wird die Hero-App-Ansicht automatisch als Open-Graph-Bild verlinkt.
- **Favicon:** die aktuelle Logo-Datei ist als PNG eingebunden; bei Bedarf später um passende ICO-/SVG-Varianten ergänzen.
- **Berichte:** die Sektion `#berichte` kommt ohne Screenshot aus, da kein passender Berichts- oder Listen-Screenshot vorliegt.

Vor dem Launch den markierten persönlichen Abschnitt ergänzen, die Impressumsangaben bereitstellen und die Rechtstexte mit dem aktuellen Stand der App abgleichen.
