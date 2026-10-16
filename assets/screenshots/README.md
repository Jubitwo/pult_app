# App-Screenshots

Die Bildauswahl richtet sich nach dem sichtbaren Inhalt. Jede Aufnahme wird höchstens einer Sektion zugeordnet; Bilder ohne passende Sektion bleiben ungenutzt. Die bereinigten Einzelansichten liegen unter `clean/`, die Originale bleiben erhalten.

## Zuordnung

| Sektion | Bilddatei | Inhalt |
| --- | --- | --- |
| Hero | `clean/sitzplan.png` | Vollständige Sitzplanansicht auf dem iPad mit Klassenübersicht und Auslosung |
| S3 – Für die Klasse | `clean/sitzplan-auslosen.png` | Ausgeloste Person im hervorgehobenen Sitzplatz |
| S4 – Timer | `timer-arbeitsauftrag.png` | iPad mit großem Timer, Arbeitsauftrag, Sozialform und Restzeit; ohne Werbetext |
| S4 – Größenkarte Klein | `timer-klein.png` | Sitzplan-Ausschnitt mit dem kleinen Timer unten rechts |
| S4 – Größenkarten Mittel und Groß | Kein Bild | Kein weiteres passendes, eigenständiges Timer-Bild vorhanden; das Großbild steht bereits oben in S4 |
| S5 – Sitzplan | `clean/anwesenheit.png` | Anwesenheitsdialog über dem Sitzplan |
| S6 – Noten | `clean/noten.png` | Farbige Notenfelder in der Klassenverwaltung |
| S7 – Stundenplan | `clean/stundenplan.png` | Wochenansicht mit Vertretungen und freien Stunden |
| S8 – Whiteboard | `clean/whiteboard-allgemein.png` | Whiteboard mit farbig beschriftetem Tafelbild |
| S9 – Hell und Dunkel | `hell-dunkel-modus.png` | Gemeinsame Darstellung beider Modi |
| S2 – Vorteile | Kein Bild | Textband ohne Bilder |
| S10 – Datenschutz | Kein Bild | Textsektion |
| S11 – Einfach starten | Kein Bild | Text und App-Store-Schaltfläche |
| S12 – Abschluss und Footer | Kein Screenshot | Abschluss mit Hamster, danach Footer |

## Nicht verwendete Bilder

- `clean/hero-interface.png` – Hauptansicht des Sitzplans; der iPad-Rahmen ist am rechten Rand abgeschnitten. Für den Hero wird stattdessen die vollständige Aufnahme `clean/sitzplan.png` verwendet.
- `clean/whiteboard-frei.png` – zeigt ebenfalls ein Whiteboard, aber S8 soll genau ein Bild enthalten.
- `clean/modus-hell.png` und `clean/modus-dunkel.png` – Einzelansichten; S9 verwendet stattdessen die gemeinsame Darstellung.
- `clean/pult-mark.png` – das große Doppel-Logo entfällt; das kleinere Logo bleibt im Header.
- Die vollständige Werbegrafik `4.png` wird nicht eingebunden; `timer-klein.png` enthält nur den Screenshot-Ausschnitt ohne den Text darüber.
- Beim neuen Timer-Foto wurde das iPad freigestellt; die Werbezeilen oberhalb und unterhalb sowie der Schatten wurden entfernt.
- Die nicht verwendeten Quelldateien im übergeordneten Screenshot-Ordner bleiben als Originale erhalten; für die Website werden die oben aufgeführten bereinigten Varianten verwendet. Ausnahme ist `hell-dunkel-modus.png`, die gemeinsame Darstellung für S9.

Für die Timer-Karte „Klein“ wurde aus der neu bereitgestellten Grafik der iPad-Screenshot ausgeschnitten. Der kleine Timer bleibt darin unten rechts sichtbar. Die Karten „Mittel“ und „Groß“ haben kein eigenes Bild, weil es kein weiteres passendes Timer-Bild gibt und der große Timer bereits in der S4-Hauptsektion erscheint. Die Website zeigt keine „Screenshot fehlt“-Platzhalter.

Neue Bildschirmaufnahmen hier mit beschreibenden, kleingeschriebenen Dateinamen ablegen. In `../index.html` immer relative Bildpfade, passende Alternativtexte sowie intrinsische `width`- und `height`-Angaben ergänzen.
