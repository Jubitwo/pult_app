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
4. Vor dem Launch die markierten Anschrift- und Telefonangaben im Impressum sowie die Anschrift in der Datenschutzerklärung ergänzen.

Alle Website- und Asset-Pfade sind relativ zum Projekt-Root. Es gibt keine Build-Schritte, externen Skripte oder serverseitigen Funktionen.

## Website-Inhalte und Einstellungen

Die zentralen Website-Einstellungen stehen in [`config.js`](./config.js):

- **App Store:** die offiziellen Schaltflächen verwenden die Apple-Kurz-URL `https://apple.co/3SJPB01` und das bereitgestellte deutsche App-Store-Badge.
- **Kontakt:** `hallo@pult-app.de` und `@pult.app` sind in Abschluss, FAQ und Footer verknüpft.
- **Domain:** `https://pult-app.de` ist für GitHub Pages eingerichtet. Die DNS-Einträge zeigen auf GitHub Pages; HTTPS wird nach Ausstellung des Zertifikats aktiviert. Die `www`-Adresse leitet auf die Hauptdomain weiter.
- **Rechtliches:** [`datenschutz.html`](./datenschutz.html) beschreibt die Website und die App; [`impressum.html`](./impressum.html) markiert noch fehlende Angaben sichtbar. Die Datenschutzhinweise unterscheiden die ausschließlich lokale Speicherung der App-Inhalte von der indirekten Verbindung für automatische App-Updates über den App Store.
- **Hinter PULT:** Der persönliche Abschnitt erzählt von der Unterrichtspraxis, den Beweggründen für PULT und dem Leben außerhalb der Schule.
- **Screenshots:** Bildzuordnungen, Quellauflösungen und nicht verwendete Aufnahmen sind in [`assets/screenshots/README.md`](./assets/screenshots/README.md) dokumentiert. Retina-Varianten liegen bei den jeweiligen Screenshots; Screenshots lassen sich per zugänglichem `<dialog>` vergrößern.
- **Hamster:** vorhandene Figuren erscheinen in einheitlichen Kreisen mit 32, 64 oder 120 px Durchmesser. Im Sichtbereich wird höchstens ein Hamster gleichzeitig eingeblendet; der 40-px-Nach-oben-Button erscheint nach dem Scrollen.
- **Open-Graph-Bild:** Der Sitzplan-Screenshot dient vorerst als Social-Vorschaubild.
- **Favicon:** die aktuelle Logo-Datei ist als PNG eingebunden; bei Bedarf später um passende ICO-/SVG-Varianten ergänzen.
- **Berichte:** die Sektion `#berichte` kommt ohne Screenshot aus, da kein passender Berichts- oder Listen-Screenshot vorliegt.

Vor dem Launch die fehlenden Rechtsangaben ergänzen und die Rechtstexte mit dem aktuellen Stand der App abgleichen.

## Erklärvideos

Die Video-Hinweise werden über [`assets/js/videos.js`](./assets/js/videos.js) gesteuert.
Ein vorhandener Hamster wird nur ersetzt, wenn der jeweilige Slot einen Eintrag in
`PULT_VIDEOS` hat. Ohne Eintrag oder ohne JavaScript bleibt das bisherige HTML unverändert.

Ein weiteres Video ergänzen:

1. MP4-Datei (H.264, bei Ton AAC) unter `assets/videos/` ablegen.
2. In `PULT_VIDEOS` einen eindeutigen Schlüssel mit `src`, `titel`, `dauer` (z. B. `"0:55"`)
   und `hinweis` ergänzen.
3. Unter dem passenden Erklärungstext ein leeres
   `<div data-video-slot="derselbe-schluessel"></div>` ergänzen.
   Ohne konfiguriertes Video bleibt es leer und nimmt keinen zusätzlichen Platz ein.
   Alternativ kann das Attribut direkt an einem Kapitelkopf stehen.
   Direkte Kinder mit `.mascot` werden durch den Hinweis ersetzt; sonst wird er angehängt.

Alle Hinweise nutzen denselben Dialog. Die Videodatei wird erst bei einem Klick geladen;
beim Schließen wird die Wiedergabe gestoppt und die Quelle entfernt. Es werden keine
externen Player, Cookies oder Trackingdienste eingebunden. Die erste Aufnahme bleibt
in ihrer Originalqualität (1920 × 1080, rund 55 Sekunden).
