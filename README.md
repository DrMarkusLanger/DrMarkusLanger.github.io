# Webseite Markus Langer

Statische Webseite, gehostet über GitHub Pages. Keine Datenbank, kein Baukasten,
keine Tracker.

## Dateien

- `index.html` — die Startseite: Einstieg und ein kurzer Abriss mit Verweisen
  auf die übrigen Seiten
- `forschung.html` — Schwerpunkte und ausgewählte Publikationen
- `oeffentlichkeit.html` — Medien, Vorträge, Politik und Wissenschaftskommunikation
- `lehre.html` — Lehrveranstaltungen, Betreuung, Themen und Anfragen
- `community.html` — Auszeichnungen, Herausgeberschaft, Konferenzen, Verbände
- `cv.html` — Stationen, Ausbildung, Projekte und Drittmittel
- `styles.css` — das gesamte Aussehen: Farben, Schriftgrößen, Abstände, Layout
- `README.md` — diese Notiz, wird auf der Webseite nicht angezeigt

## Ändern

1. Datei im lokalen Ordner bearbeiten und speichern
2. `index.html` im Browser per Doppelklick ansehen, um das Ergebnis zu prüfen
3. In GitHub Desktop eine Zusammenfassung eintragen, "Commit to main", dann
   "Push origin"

Nach etwa einer Minute ist die Änderung online.

## Einträge ergänzen

Ein Eintrag in einer Liste sieht so aus:

```html
<div class="eintrag">
  <div class="titel">Titel des Beitrags</div>
  <div class="quelle">Medium oder Ort, Jahr</div>
</div>
```

Zum Ergänzen einen vorhandenen Block kopieren, einfügen und den Text
austauschen. Die Reihenfolge auf der Seite ist die Reihenfolge im Quelltext.

Mit Link:

```html
<div class="eintrag">
  <div class="titel"><a href="https://…">Titel des Beitrags</a></div>
  <div class="quelle">Medium oder Ort, Jahr</div>
</div>
```

## Platzhalter

Alles in eckigen Klammern mit gestricheltem Rahmen ist ein Platzhalter. Zum
Ersetzen den umgebenden `class="platzhalter …"`-Teil mitsamt Klammern durch den
eigenen Text ersetzen, zum Beispiel:

```html
<p class="platzhalter">[Positionierung in 1–2 Sätzen]</p>
```

wird zu

```html
<p>Ich erforsche, wie Menschen …</p>
```

## Schriften

Die Seite nutzt nur Schriften, die auf dem Gerät vorhanden sind. Damit werden
keine Daten an Dritte übertragen, und es fehlt eine Ursache für Ärger mit der
Datenschutzerklärung.

## Jahreszahl

Die Abschlusszeile am Seitenende enthält die Jahreszahl im Klartext. Einmal im
Jahr in allen HTML-Dateien austauschen.

## Noch offen

- Porträtfoto und Abbildung der Forschungssäulen
- englische Fassung
