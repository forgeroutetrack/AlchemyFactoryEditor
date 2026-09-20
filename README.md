# ⚗️ Alchemy Factory Editor

**Der inoffizielle Fan-Produktionsplaner für „Alchemy Factory" (Steam, Early Access).**
> ⚠️ Das hier ist **nicht das Spiel** — es ist der Planer dazu: Maschinen verbinden, Raten prüfen, Türme planen, Maps & Zonen tauschen. (Fan-Projekt, ohne Verbindung zu den Entwicklern.)

> 🔨 **ForgeRouteTrack** — *forge your route, track your flow.* · Schmiede deine Route, verfolge deinen Fluss.

![Status](https://img.shields.io/badge/Status-Beta%202.0-yellow)

**Sprachen / Languages: 🇩🇪 Deutsch (unten zuerst) · 🇬🇧 [English ↓](#english)** ![Sprache](https://img.shields.io/badge/Sprachen-Deutsch%20%2F%20English-blue) ![Offline](https://img.shields.io/badge/100%25-offline-success)

---

## ☕ Unterstützen — freiwillig & kostenlos

Der Planer ist und bleibt **kostenlos, offline, ohne Login oder Tracking**. Wenn du das Projekt unterstützen magst:

- 🎮 **Am besten: das Spiel kaufen & gut bewerten** — das hilft den echten Machern von „Alchemy Factory" am meisten.
- ☕ **Freiwillige Spende** an das Fan-Projekt: Wird Erstellt !

Spenden kaufen keinerlei Funktionen — alles im Tool ist für alle gleich.

---

## 🚀 Starten (10 Sekunden)

1. Ordner herunterladen (grüner „Code"-Button → **Download ZIP** → entpacken)
2. `index.html` doppelklicken — fertig. **Keine Installation, kein Server, läuft komplett offline.**
   *(Am besten in Chrome/Edge — nur dort kann der Editor direkt in den saves-Ordner speichern. Alle anderen Browser: automatischer Download-Fallback.)*
   - Alternative: `AlchemyFactoryEditor-standalone.html` (alles in einer Datei)

## 🎬 Video-Anleitungen

Wir bauen Video-Tutorials auf unserem YouTube-Kanal auf — **Start: Sonntag, 20.09.2026, mittags**: UI-Tour · erstes Setup mit Fehler-Erkennung & -Behebung · Maschinen-Fenster mit mehreren Ein-/Ausgängen · Bau einer großen Maschine · Verkaufsraum. Gesprochen wird Englisch, mit deutschen Untertiteln.

📺 [YouTube: ForgeRouteTrack](https://www.youtube.com/@ForgeRouteTrack) · 🎵 [TikTok: @forgeroutetrack](https://www.tiktok.com/@forgeroutetrack)

Weitere Videos gewünscht? Schreib es als GitHub-Issue oder YouTube-Kommentar!

## ✨ Was kann er?

| | Feature |
|---|---|
| 🏗️ | **Visueller Node-Editor:** Maschinen platzieren, per Band/Rohr verbinden, Linien mit Wegpunkten frei ausrichten |
| 🚦 | **Band-Logik wie im Spiel:** Grün = voll · **Gelb = Teillast mit %-Wert** · Rot = steht — plus RÜCKSTAU-Warnung. **Kern-Regel: 1 Line = 1 Band = max 60/Min** (Rohre für Flüssigkeiten ≈ 6.000/Min) |
| 🔌 | **Anschluss-Rechner:** „max 4 Schmelztiegel pro Band" — die Antwort auf die Ur-Frage jedes Spielers |
| 🔥 | **Ofen-Modell:** Flächen (Steinofen 9 / Hochofen 42), Heat-Bilanz in P/s, gemischte Brennstoffe, gemessen & verifiziert |
| 🏢🛗 | **Etagen & Aufzüge:** Türme planen wie im Spiel — oben Ware rein, unten Produkt raus. Lift selbst unbegrenzt („oben 80 an = unten 80 raus“), JE Band davor/danach trägt max 60/Min. Ganze Etagen per Strg+C/V kopieren |
| 🧩 | **Zonen speichern & tauschen** (`saves/zonen/`) — *das kann nicht mal das Spiel selbst (dort sind Zonen nach dem Beenden weg)* |
| 🗺️💾 | **Maps speichern/laden** (`saves/maps/`), Roadmap-Autobau ganzer Ketten, Rückwärts-Rechner, Rezept-Codex, Spickzettel-Bauliste |
| 🏪📦 | **Verkaufsraum** (nur Eingang — echte Endstation) & **Lager** (Ein- UND Ausgang = Puffer): Stück/Min je Item — das Ende der Line ist echter Absatz |
| 🚫 | **Bewusst NICHT dabei: Einnahmen & Geld.** Der Planer rechnet Warenströme in Stück/Min — keine Münzen, kein Gewinn. Die Wirtschaft bleibt im Spiel ([Warum](documentation.md)) |
| 📊 | **Fabrik-Status-Fenster:** Netto-Bilanz je Material (erzeugt − verbraucht inkl. Ofen-Brennstoff = frei für Verkauf/Lager), warnt bei Stau-Gefahr & Defizit |
| 🌍 | **Deutsch/Englisch**, Hell-/Dunkel-Modus (Tasten E/D), 100 % offline |

## 📁 Ordnerstruktur

```
AlchemyFactoryEditor/
├── index.html                  ← starten (oder AlchemyFactoryEditor-standalone.html: ALLES in einer Datei)
├── css/style.css               ← Optik
├── js/editor.js                ← Logik + Spieldaten (REZEPTE oben im Objekt DEVICES)
├── saves/
│   ├── maps/                   ← ganze Setups (*.json) — inkl. Beispiel-Map
│   └── zonen/                  ← einzelne Zonen zum Tauschen (*.json)
├── documentation.md            ← Projekt-Geschichte, Spiel-Gesetze, Mathematik
├── CHANGELOG.md                ← alle Versionen
```

## 📊 Abgrenzung zu Community-Tools

Es gibt großartige Community-Tools ([Codex](https://alchemy-factory-codex.com), [JoeJoes Calculator](https://joejoesgit.github.io/AlchemyFactoryCalculator/), [alchemyfactorytools.com](https://alchemyfactorytools.com)). Dieser Editor ist bewusst **anders**: visuell, offline, mit Etagen/Aufzügen, Zonen-Tausch und spielgetreuer Band-Logik. Der vollständige Vergleich steht in der [documentation.md](documentation.md#4-vergleich-editor--spiel-community-tools).

## 🐞 Fehler & Zahlen melden

Das Spiel ist Early Access — Rezepte ändern sich. Gemessene Werte (Stand 09/2026, Sandbox + Community-Abgleich): ~95 % der Rezepte verifiziert, alle Heat-Werte, alle Brennwerte, Band-Cap 60/Min je Line, Rohre ≈ 6.000/Min. **Wenn etwas nicht mit dem Spiel übereinstimmt: Issue aufmachen oder `MACHINE_AREA`/`DEVICES` in `js/editor.js` selbst anpassen** — alles ist kommentiert.

### 📏 Die 3 Goldenen Messregeln (fürs Melden)
1. **NIE ein Lager als Quelle messen** — das Lager leitet nur mit Band-Tempo durch. Immer **Maschine → Maschine** ketten, hinten ein **LEERES Lager als Zähler**.
2. **Vorher alles leeren, Stoppuhr daneben, ≥ 10 Minuten** messen (Anlaufzeit verfälscht Kurzmessungen).
3. **Nichts mittendrin umbauen** — sonst misst du zwei Setups gleichzeitig.

## 📜 Lizenz

MIT — frei nutzen, ändern, teilen. Fan-Projekt, keine Verbindung zu den Entwicklern von Alchemy Factory.



## Warum dieses Tool?
Das Spiel sagt dir erst, was eine Maschine tut, wenn sie angeschlossen ist — „20/20 in 6 Sek", mehr nicht. Wie viele Sägen brauche ich für genug Kohle? Was kommt am Ende einer Kette raus? Wird die Linie langsamer, wenn ich noch eine Maschine anhänge? Diese Fragen beantworten weder das Spiel noch die Wikis — genau das tut dieser Planer: komplette Ketten VOR dem Bau durchrechnen, mit ehrlichen Zahlen, die live gegen das echte Spiel gemessen werden.



## 🙏 Danke · Acknowledgments

Mein ausdrücklicher Dank gilt den Berechnungen und Einstellungen hinter diesem Planer — einer JavaScript-Datei von inzwischen **über 6.000 Zeilen**, die ich ohne die Hilfe eines KI-Agenten (**Arena.ai**) nicht allein bewältigt hätte. Der Agent half mir, die Berechnungen aus dem Spiel und dem Sandbox-Modus in das zu verwandeln, was heute die Version **Beta 2.0** darstellt.

Ich erwähne das bewusst, denn ich halte das für ehrlich: Am Ende wird wohl kaum jemand so einen Code komplett allein erschaffen. Die Messungen im Spiel, die Karten, die Ideen und jede Entscheidung stammen von mir — das Rechnen und das Festnageln der Daten übernahm der Agent. Mensch und Maschine, jeder das Seine.


---

# English

**The unofficial fan-made production planner for “Alchemy Factory” (Steam, Early Access).**
> ⚠️ This is **not the game** — it’s the planner for it: connect machines, check rates, plan towers, share maps & zones. (Fan project, not affiliated with the developers.)

> 🔨 **ForgeRouteTrack** — *forge your route, track your flow.*

![Status](https://img.shields.io/badge/Status-Beta%202.0-yellow) ![Language](https://img.shields.io/badge/Languages-German%20%2F%20English-blue) ![Offline](https://img.shields.io/badge/100%25-offline-success)

---

## ☕ Support — voluntary & free

The planner is and stays **free, offline, no login, no tracking**. If you’d like to support it:

- 🎮 **Best option: buy the game & leave a good review** — that helps the actual makers of “Alchemy Factory” the most.
- ☕ **Voluntary tip** to the fan project: Coming !

Tips don’t buy any features — everything in the tool is the same for everyone.

---

## 🚀 Getting started (10 seconds)

1. Download the folder (green “Code” button → **Download ZIP** → unzip)
2. Double-click `index.html` — done. **No installation, no server, runs fully offline.**
   *(Best in Chrome/Edge — only there can the editor save directly into the saves folder. Other browsers: automatic download fallback.)*
   - Alternative: `AlchemyFactoryEditor-standalone.html` (everything in one file)

## 🎬 Video tutorials

We're building video tutorials on our YouTube channel — **kicking off Sunday, Sep 20, 2026, noon**: UI tour · first setup with error detection & fixing · machine windows with multiple inputs/outputs · building one big machine · the sales room. Spoken in English, with German subtitles.

📺 [YouTube: ForgeRouteTrack](https://www.youtube.com/@ForgeRouteTrack) · 🎵 [TikTok: @forgeroutetrack](https://www.tiktok.com/@forgeroutetrack)

Want more videos? Tell us in a GitHub issue or YouTube comment!

## ✨ What can it do?

| | Feature |
|---|---|
| 🏗️ | **Visual node editor:** place machines, connect with belts/pipes, route lines with waypoints |
| 🚦 | **Belt logic like the game:** green = full · **yellow = partial load with %** · red = stalled — plus backpressure warnings. **Core rule: 1 line = 1 belt = max 60/min** (pipes for liquids ≈ 6,000/min) |
| 🔌 | **Connection calculator:** “max 4 crucibles per belt” — the answer to every player’s original question |
| 🔥 | **Furnace model:** areas (stone 9 / blast 42), heat balance in P/s, mixed fuels, measured & verified |
| 🏢🛗 | **Floors & elevators:** plan towers like in-game — goods in at the top, product out at the bottom. The lift itself is unlimited (“80 in = 80 out”), EACH belt before/after carries max 60/min. Copy whole floors with Ctrl+C/V |
| 🧩 | **Save & share zones** (`saves/zonen/`) — *even the game can’t do that (zones are gone after quitting)* |
| 🗺️💾 | **Save/load maps** (`saves/maps/`), roadmap auto-build of whole chains, reverse calculator, recipe codex, cheat-sheet build list |
| 🏪📦 | **Sales room** (input only — a true end station) & **storage** (input AND output = buffer): items/min per good — the end of the line is real offtake |
| 🚫 | **Deliberately NOT included: money & revenue.** The planner calculates goods flow in items/min — no coins, no profit. The economy stays in the game ([why](documentation.md)) |
| 📊 | **Factory status window:** net balance per material (produced − consumed incl. furnace fuel = free for sale/storage), warns of jam risk & deficits, jump links to stalled machines |
| 🌍 | **German/English**, light/dark mode, 100 % offline |

## 📁 Folder structure

```
AlchemyFactoryEditor/
├── index.html                  ← start here (or AlchemyFactoryEditor-standalone.html: everything in one file)
├── css/style.css               ← looks
├── js/editor.js                ← logic + game data (RECIPES at the top of the DEVICES object)
├── saves/
│   ├── maps/                   ← whole setups (*.json) — incl. an example map
│   └── zonen/                  ← individual zones to share (*.json)
├── documentation.md            ← project story, game laws, mathematics (DE/EN)
├── CHANGELOG.md                ← all versions
```

## 📊 How this differs from community tools

There are great community tools ([Codex](https://alchemy-factory-codex.com), [JoeJoes Calculator](https://joejoesgit.github.io/AlchemyFactoryCalculator/), [alchemyfactorytools.com](https://alchemyfactorytools.com)). This editor is deliberately **different**: visual, offline, with floors/elevators, zone sharing and game-accurate belt logic. The full comparison is in the [documentation.md](documentation.md#4-comparison-editor--game--community-tools).

## 🐞 Reporting bugs & numbers

The game is Early Access — recipes change. Measured values (as of 09/2026, sandbox): ~95 % of recipes verified, all heat values, all fuel values, 60/min belt cap per line, pipes ≈ 6,000/min. **If something doesn’t match the game: open an issue or adjust `MACHINE_AREA`/`DEVICES` in `js/editor.js` yourself** — everything is commented.

### 📏 The 3 golden measuring rules (for reports)
1. **NEVER measure from a storage** — it only passes items through at belt speed. Always chain **machine → machine**, with an **empty storage as counter** at the end.
2. **Empty everything first, stopwatch ready, measure ≥ 10 minutes** (ramp-up skews short runs).
3. **Don’t rebuild mid-measurement** — otherwise you’re measuring two setups at once.

## 📜 License

MIT — use, change, share freely. Fan project, not affiliated with the developers of Alchemy Factory.

## Why this tool?
The game only tells you what a machine does once it’s connected — “20/20 in 6 sec”, nothing more. How many saws do I need for enough coal? What comes out at the end of a chain? Does the line slow down if I attach another machine? Neither the game nor the wikis answer these — exactly what this planner does: calculate complete chains BEFORE building, with honest numbers measured live against the real game.

## 🙏 Acknowledgments

My explicit thanks go to the calculations and settings behind this planner — a JavaScript file of now **over 6,000 lines**, which I could not have managed alone without the help of an AI agent (**Arena.ai**). The agent helped me turn the calculations from the game and sandbox mode into what is now version **Beta 2.0**.

I mention this deliberately, because I believe it is the honest thing to do: in the end, hardly anyone creates such code entirely alone. The in-game measurements, the maps, the ideas and every decision are mine — the computing and pinning down of the data was the agent's part. Human and machine, each doing their share.
