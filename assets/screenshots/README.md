# App-Screenshots

Die Bildauswahl richtet sich nach dem sichtbaren Inhalt. Jede Aufnahme wird höchstens einer Sektion zugeordnet; Bilder ohne passende Sektion bleiben ungenutzt. Die bereinigten Einzelansichten liegen unter `clean/`, die Originale bleiben erhalten.

## Zuordnung

| Sektion | Bilddatei | Inhalt |
| --- | --- | --- |
| Hero | `clean/sitzplan.png` | Vollständige Sitzplanansicht auf dem iPad mit Klassenübersicht und Auslosung |
| #klasse – Bühnenbild | `clean/sitzplan-auslosen.png` | Ausgeloste Person im hervorgehobenen Sitzplatz |
| #timer – Bühnenbild | `timer-arbeitsauftrag.png` | Timer mit Arbeitsauftrag, Sozialform und Restzeit |
| #sitzplan | `clean/anwesenheit.png` | Anwesenheitsdialog über dem Sitzplan |
| #noten | `clean/noten.png` | Farbige Notenfelder in der Klassenverwaltung |
| #berichte | Kein Bild | Kein passender Bericht- oder Listen-Screenshot vorhanden |
| #stundenplan | `clean/stundenplan.png` | Wochenansicht mit Vertretungen und freien Stunden |
| #whiteboard | `clean/whiteboard-allgemein.png` | Whiteboard mit farbig beschriftetem Tafelbild |
| #darstellung | `hell-dunkel-modus.png` | Gemeinsame Darstellung beider Modi |
| Timer-Größen | Kein Bild | Einheitliche schematische Inline-SVGs statt unpassender Ganzseiten-Aufnahmen |
| Vorteile | Kein Screenshot | Vier Textkarten; ein Hamster-Icon, drei Linien-Icons |
| Datenschutz und FAQ | Kein Screenshot | Textabschnitte und Kacheln |
| #hinter-pult und Abschluss | Kein Screenshot | Vorhandene Hamster als Markenbegleiter |

## Nicht verwendete Bilder

- `clean/hero-interface.png` – Hauptansicht des Sitzplans; der iPad-Rahmen ist am rechten Rand abgeschnitten. Für den Hero wird stattdessen die vollständige Aufnahme `clean/sitzplan.png` verwendet.
- `clean/whiteboard-frei.png` – zeigt ebenfalls ein Whiteboard, aber S8 soll genau ein Bild enthalten.
- `clean/modus-hell.png` und `clean/modus-dunkel.png` – Einzelansichten; S9 verwendet stattdessen die gemeinsame Darstellung.
- `clean/pult-mark.png` – das große Doppel-Logo entfällt; das kleinere Logo bleibt im Header.
- Die vollständige Werbegrafik `4.png` wird nicht eingebunden; `timer-klein.png` enthält nur den Screenshot-Ausschnitt ohne den Text darüber.
- Beim neuen Timer-Foto wurde das iPad freigestellt; die Werbezeilen oberhalb und unterhalb sowie der Schatten wurden entfernt.
- Die nicht verwendeten Quelldateien im übergeordneten Screenshot-Ordner bleiben als Originale erhalten; für die Website werden die oben aufgeführten bereinigten Varianten verwendet. Ausnahme ist `hell-dunkel-modus.png`, die gemeinsame Darstellung für S9.

Die Timer-Größenkarten enthalten keine Screenshots: Es gibt keine drei gleichartigen Ausschnitte (klein, mittel, groß), und der kleine Timer wäre in der vorhandenen Ganzseiten-Aufnahme kaum erkennbar. Der aussagekräftige Timer-Screenshot ist stattdessen als Bühnenbild in `#timer` eingebunden.

Es gibt derzeit keine 2x-Varianten. Die verwendeten Bilder werden nicht über ihre Quelldatei hinaus vergrößert; ein Klick öffnet die jeweilige Quelldatei in einer nativen Dialog-Lightbox. Alle Screenshot-Dateien im Projekt sind derzeit schmaler als 2000 px:

| Breite | Dateien |
| --- | --- |
| 1025 px | `mitarbeit-gruppen.png`, `whiteboard.png`, `stundenplan.png`, `clean/anwesenheit.png`, `clean/timer-funktionen.png`, `clean/whiteboard-frei.png`, `clean/stundenplan.png`, `clean/modus-hell.png`, `clean/noten.png`, `clean/modus-dunkel.png`, `clean/sitzplan-auslosen.png`, `clean/whiteboard-allgemein.png`, `clean/sitzplan.png`, `anwesenheit-sitzplan.png`, `notenverwaltung.png`, `arbeitsauftrag-timer.png`, `sitzplan-uebersicht.png`, `hell-dunkel-modus.png` |
| 830 px | `timer-klein.png` |
| 782 px | `timer-arbeitsauftrag.png` |
| 683 px | `hero-interface.png`, `clean/hero-interface.png` |
| 212 px | `clean/pult-mark.png`, `pult-mark.png` |

Neue Bildschirmaufnahmen hier mit beschreibenden, kleingeschriebenen Dateinamen ablegen. In `../index.html` immer relative Bildpfade, passende Alternativtexte sowie intrinsische `width`- und `height`-Angaben ergänzen.
