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
| #darstellung | `clean/modus-hell.png`, `clean/modus-dunkel.png` | Einzelansichten ohne Beschriftung und mit transparentem Außenbereich |
| Timer-Größen | Kein Bild | Einheitliche schematische Inline-SVGs statt unpassender Ganzseiten-Aufnahmen |
| Vorteile | Kein Screenshot | Vier Textkarten; ein Hamster-Icon, drei Linien-Icons |
| Datenschutz und FAQ | Kein Screenshot | Textabschnitte und Kacheln |
| Abschluss | Kein Screenshot | Der Abschluss-Hamster bleibt im Kontaktbereich sichtbar |

## Nicht verwendete Bilder

- `clean/hero-interface.png` – Hauptansicht des Sitzplans; der iPad-Rahmen ist am rechten Rand abgeschnitten. Für den Hero wird stattdessen die vollständige Aufnahme `clean/sitzplan.png` verwendet.
- `clean/whiteboard-frei.png` – zeigt ebenfalls ein Whiteboard, aber S8 soll genau ein Bild enthalten.
- `hell-dunkel-modus.png` – gemeinsame Werbegrafik mit Beschriftungen; `#darstellung` verwendet die beiden bereinigten Einzelansichten.
- `clean/pult-mark.png` – das große Doppel-Logo entfällt; das kleinere Logo bleibt im Header.
- Die vollständige Werbegrafik `4.png` wird nicht eingebunden; `timer-klein.png` enthält nur den Screenshot-Ausschnitt ohne den Text darüber.
- Beim neuen Timer-Foto wurde das iPad freigestellt; die Werbezeilen oberhalb und unterhalb sowie der Schatten wurden entfernt.
- Die nicht verwendeten Quelldateien im übergeordneten Screenshot-Ordner bleiben als Originale erhalten; für die Website werden die oben aufgeführten bereinigten Varianten verwendet. Ausnahme ist `hell-dunkel-modus.png`, die gemeinsame Darstellung für S9.

Die Timer-Größenkarten enthalten keine Screenshots: Es gibt keine drei gleichartigen Ausschnitte (klein, mittel, groß), und der kleine Timer wäre in der vorhandenen Ganzseiten-Aufnahme kaum erkennbar. Der aussagekräftige Timer-Screenshot ist stattdessen als Bühnenbild in `#timer` eingebunden.

Die Originaldateien aus `~/Downloads/Insta` sind 8538 × 6400 Pixel groß. Für die Website wurden passende Ausschnitte in hoher Auflösung erzeugt; es handelt sich nicht um hochskalierte 1x-Dateien. `index.html` bietet 1x- und 2x-Kandidaten über `srcset` an. Der Browser wählt je nach Pixeldichte die passende Datei. Für die beiden sauberen Hell-/Dunkel-Einzelansichten fehlen noch 2x-Dateien; bis dahin fällt die Seite auf die vorhandene 1x-Aufnahme zurück. Beim Timer ist die angezeigte Breite auf die Originalbreite begrenzt, damit das 782-Pixel-Bild auf 1x-Geräten nicht künstlich vergrößert wird. Ein Klick öffnet die jeweils gewählte Auflösung in der Dialog-Lightbox.

| Darstellung | Screenshots | Timer |
| --- | ---: | ---: |
| 1x | 1025 px | 782 px |
| 2x | 2050 px | 1564 px |

Die nicht verwendeten Quelldateien im übergeordneten Screenshot-Ordner bleiben erhalten. Neue Bildschirmaufnahmen hier mit beschreibenden, kleingeschriebenen Dateinamen ablegen. In `../index.html` immer relative Bildpfade, passende Alternativtexte, intrinsische `width`- und `height`-Angaben sowie die verfügbaren `srcset`-Kandidaten ergänzen.

Neue Bildschirmaufnahmen hier mit beschreibenden, kleingeschriebenen Dateinamen ablegen. In `../index.html` immer relative Bildpfade, passende Alternativtexte sowie intrinsische `width`- und `height`-Angaben ergänzen.
