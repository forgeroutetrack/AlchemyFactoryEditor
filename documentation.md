# ⚗️ Alchemy Factory Editor — Projekt, Spiel-Gesetze & Mathematik

**Sprachen / Languages: 🇩🇪 Deutsch (oben) · 🇬🇧 [English ↓](#english)**

> **Inoffizieller Fan-Produktionsplaner für „Alchemy Factory“** (Steam, Early Access).
> Kein Spiel — der Planer dazu. Entstanden von einem Spieler, für Spieler.
> **Stand: Beta 1.9.57 (18.09.2026)** — Spielwerte Early Access v0.5.x, können sich mit Patches ändern.

---

## 1. Wie das Projekt entstand

Als ich **Alchemy Factory** zum ersten Mal spielte, merkte ich schnell: *Hier muss gerechnet werden.*

Die erste Frage war einfach: *„Wenn ich ein Sägewerk baue — wie viele Schleifer kann ich dann anschließen?“*
Ich wusste durch Probieren: Das Sägewerk liefert 30 Bretter/Minute, der Schleifer verarbeitet 10. Also: **3 Schleifer.** Logisch — aber Handarbeit.

Dann wurde es komplexer: Betten, Steinknacker, Schmelztiegel, ganze Ketten bis zum Dünger. Irgendwann fragte man sich nicht mehr „wie viel?“, sondern **„wie viele Maschinen brauche ich insgesamt, damit alles durchläuft — und wo staut es sich?“**

Ich suchte im Netz. Es gab Wiki-Seiten mit Zahlen, aber nichts, womit ich sagen konnte:
> *„Ich baue mein Setup virtuell nach — und sehe, was das beste Setup ist und wie viel ich wirklich anschließen kann, um eine laufende, gute Produktion zu erhalten.“*

Das gab es nicht. Also baute ich das Tool selbst. Grundlage: der **Sandbox-Modus**. Dort konnte ich jedes Item, jedes Rezept, jede Maschine ohne Folgen testen und die **echten Werte vermessen** — nicht aus einem Wiki abtippen (die Übersetzungen/Werte dort stimmen oft nicht), sondern 1:1 aus dem Spiel. Darauf habe ich großen Wert gelegt: *Das Tool soll das Spiel widerspiegeln, nicht das Wiki.*

**Nordstern des Projekts:** Das Tool soll helfen, eine Fabrik zu planen, die **ohne Stau und Engpass durchläuft**. Das war nie alleine schaffbar. Nur gemeinsam — mit euren Messungen — wird dieses Tool stark. Das Wiki ist lückenhaft. Also: raus damit, ehrlich, mit klaren Vorgaben (siehe „Mithelfen & Messen“ in der readme.md).

---

## 2. Die Reise in Zahlen

| Version | Das Wichtigste |
|---|---|
| **v0 (Basis, 31.08.2026)** | Node-Editor, 35 Geräte, DE/EN, Hell/Dunkel, animierte Bänder, Öfen, Portale, Zonen, Roadmap, Rückwärts-Rechner |
| **BETA1–2** | Heat-Rechenfehler (Faktor 60) gefunden & gefixt; Ofen-Flächenmodell mit **selbst vermessenen** Werten; Anschluss-Rechner („max X Maschinen pro Band“) |
| **BETA3–5** | 🏢 **Etagen & 🛗 Aufzüge** (vertikal planen wie im Spiel); Bedienungs-Politur; Band-Logik 🟢🟡🔴 mit Teillast-Prozent |
| **RELEASE 1.0 (31.08.)** | Ordnerstruktur mit `saves/maps` + `saves/zonen`, Hotbar-UI, Zonen-Info-Fenster |
| **1.9.x (Sep. 2026)** | Ehrlichkeits-Offensive: **Fenster-Modell** (×N-Kasten = N Einzelmaschinen, Ausgang je Port — Eingang POOL seit 1.9.62), **Stapel-Tiegel** (Hochofen 7 / Steinofen 3 Plätze, Höhe = Fenster), **Zonen-Rahmen** mit Name/Farbe, **Status-Sprung-Links**, Weichen/Merges, **Band-Cap-Motor** (1 Line = 1 Band = max 60/Min), **Rohre für Flüssigkeiten** (≈ 6.000/Min), **Ofen-Material-Check** (Steine sind kein Brennstoff!), Rückwärts-Rechner mit port-gerechter Verkabelung, **Gärtnerei = Auto-Beet mit Dünger-Pflicht** (V1.9.65, Spiel-gemessen: Salbei 20/Min · Lein 30/Min · 1 Dünger je 12s) |

Die komplette Versions-Historie mit allen Details steht im CHANGELOG des Projekt-Ordners.

---

## 3. Was der Editor kann

### Planen wie im Spiel
- **Maschinen platzieren** (35+ Geräte, Icon-Picker mit Kategorien), Stückzahl pro Box (×3 Schleifer = 1 Box mit 3 Ein- und 3 Ausgängen)
- **Verbinden per Band/Rohr**: grünen Ausgang ziehen → blauen Eingang loslassen. **Weichen** (von Linien abzweigen) und **Merges** (mehrere Bänder auf einen Eingang) wie im Spiel
- **Linien frei ausrichten**: Doppelklick auf die Linie = Wegpunkt, ziehen = verbiegen, Rechtsklick = löschen
- **Rohre** für Flüssigkeiten (eigene blauge Wellen-Optik), **Rückführungen** (Loopbacks) violett
- **🏢 Etagen & 🛗 Aufzüge**: Turm planen, Aufzug mit automatischem Gegenstück eine Etage höher, ganze Etagen per Strg+C/V kopieren
- **Öfen** (Steinofen/Hochofen): Maschinen „aufstellen“, Flächenmodell, gemischte Brennstoffe werden addiert, **Dampfheizkissen** (Tier 6, Rohr statt Brennstoff)
- **Portale**: Einkaufsportal (externe Zufuhr), Versandportal, Bankportal (Kupfer/Silber/Gold)
- **🗂️ Zonen**: Rahmen mit Name + Farbe um Abteilungen, Info-Fenster mit Netto-Bilanz, Zonen einzeln speichern & tauschen — *das kann nicht mal das Spiel selbst*

### Rechnen wie im Spiel — die Band-Gesetze (Kern des Modells)
- **1 Line = 1 Band = max 60 Stück/Min** (Basis; steigt mit Logistics-Effizienz im Spiel). Mehr Durchsatz = weitere Line (oder Merge am Ziel-Eingang)
- **Rohre für Flüssigkeiten sind praktisch unbegrenzt** (≈ 6.000/Min, Spiel-Patch Jan. 2026) — Schwefelsäure, Sole, Fruchtwein & Co. cappen NICHT bei 60
- **Der Aufzug selbst ist unbegrenzt** („oben 80 an = unten 80 raus“) — aber **JE Band hinein/daraus trägt max 60/Min**
- **EINGANG = POOL** (V1.9.62, Spiel-gemessen 18.09.): Alle Maschinen einer Box teilen sich ALLES, was ankommt — die Port-Nummer ist egal. 1 Säge + 3 Schleifer + 6 Fertigungseinheiten laufen sauber durch (30=30=30 große Zahnräder/Min ⇒ 90 kleine). EIN Band mit 10/Min an einer ×2-Box versorgt BEIDE Maschinen. Zu wenig Zulauf = ehrliche Teillast („N von M Maschinen versorgt", Fill-Order: erste Maschine läuft zuerst voll)
- **AUSGANG = 1 MASCHINE** (V1.9.59, Spiel-gemessen): 1 Ausgang einer ×N-Box trägt NUR die Rate EINER Maschine (×3-Schleifer-Kasten: 1 Ausgang = 10/Min, 3 Ausgänge = 30/Min). Für den vollen Output jeder Maschine eine Line ziehen. Nur echte Einzel-Boxen (Lager, Lift, Portal) poolen ihren Bestand
- **Maschinen ziehen nur ihren Bedarf** — der Rest staut an der Quelle (RÜCKSTAU-Anzeige). Senken (Lager/Verkauf) nehmen alles an
- **Merge**: mehrere Bänder auf EINEN Eingang (oder mehrere Eingänge einer Box) teilen sich den Gesamt-Bedarf der Box — zusammen genau 100 % (Pool)
- **3-stufige Ampel**: 🟢 voll versorgt · 🟡 Teillast mit Prozent („läuft, wartet aber zwischendurch“) · 🔴 steht — plus Überschuss-/RÜCKSTAU-Warnungen mit Lösungsvorschlag
- **🔌 Anschluss-Rechner** in jeder Maschine: „max X Maschinen pro Band (bei eingestellter Logistics-Effizienz)“

### Weitere Werkzeuge
- **Roadmap**: baut komplette Produktionsketten automatisch als Grafik
- **🎯 Rückwärts-Rechner**: Zielprodukt + Wunschmenge → kompletter Maschinenbedarf bis zum Rohstoff, per Knopfdruck als verkabelte Kette auf der Karte (port-gerecht, Boxen à max 10)
- **📊 Fabrik-Status**: Netto-Bilanz je Material über alle Etagen (erzeugt − verbraucht inkl. Ofen-Brennstoff), stehende Maschinen mit **Sprung-Links** (Klick = Etage wechseln + Maschine anzeigen)
- **Ofen-Fenster**: „Bedarf: X P/Sek“ inkl. Fabrik-Effizienz-Skalierung und Grundverbrauch; warnt bei zu wenig Brennstoff und bei unbraucharem Material auf der Linie
- **💾 Speichern**: Autosave im Browser, JSON-Export/Import, direkter Ordner-Zugriff (Chrome/Edge), Spickzettel-Bauliste

### 💰 Bewusst NICHT eingebaut: Einnahmen & Geld
Der Verkaufsraum ist als echte Endstation dabei (Stück/Min je Item) — aber der Planer rechnet **keine Münzen und keinen Gewinn**. Das ist keine Lücke, sondern eine bewusste Entscheidung:

- **Respekt vor dem Spiel:** Mit Warenströmen und Produktionsketten kommen wir dem Spiel schon sehr nahe. Würden wir auch noch den Geld-Kreislauf abbilden (Item-Preise × Verkaufsraum = Einnahmen/Min), würden wir uns zu sehr dem Spiel selbst annähern — das lehnen wir bewusst ab.
- **Deine Preise sind deine Sache:** Was ein Item wert ist, entscheidet jeder Spieler selbst nach Spielstand und Zielen. Der Planer plant FLOW — eine Fabrik, die ohne Stau läuft und deren Maschinen nie austrocknen. Dafür ist Stück/Min die ehrliche Einheit, nicht Münzen/Min.

---

## 4. Vergleich: Editor ↔ Spiel ↔ Community-Tools

### 4.1 Editor vs. Spiel
| Aspekt | Spiel | Editor |
|---|---|---|
| Bänder/Flüsse | sichtbar, stauen sich | gleiche Logik als Farben + Band-Cap 60/Min je Line |
| Öfen | Fläche + Heat + Stapel + Lift | Flächenmodell, Heat-Bilanz P/s inkl. Effizienz, Stapel-Fenster, Material-Check |
| Etagen | ja | ja (Etagen-Ansicht, Aufzüge; Band-Cap wie im Spiel, Lift selbst unbegrenzt) |
| Zonen | gehen beim Beenden verloren | **speicher- und tauschbar** (saves/zonen) |
| Rechnen | Kopf-/Zettelarbeit | alles automatisch, mit Lösungsvorschlägen |

### 4.2 Editor vs. Community-Tools (Stand 09/2026)
| Feature | **AFE (dieser)** | Codex (Jimhopper) | JoeJoes Calculator | alchemyfactorytools |
|---|---|---|---|---|
| Visueller Node-Editor | ✅ | teilweise | ❌ | ❌ |
| Offline / eine Datei | ✅ | ❌ (Web) | ✅ | ❌ |
| **Etagen & Aufzüge** | ✅ *einzigartig* | ❌ | ❌ | ❌ |
| **Zonen speichern/tauschen** | ✅ *einzigartig* | ❌ | ❌ | ❌ |
| Band-Cap 60/Min + Merge-Modell je Line | ✅ | ❌ | ❌ | ❌ |
| Band-Logik 3-stufig + Stau-/Rückstau-Warnung | ✅ | ❌ | ❌ | ❌ |
| Ökonomie-Portale (Kauf/Verkauf/Bank) | ✅ | ❌ | ✅ (Profit) | ✅ |
| Roadmap-Autobau ganzer Ketten | ✅ | ❌ | ❌ | ❌ |
| DE/EN + Hell/Dunkel | ✅ | ✅ (teils) | ❌ | ❌ |

*(„einzigartig“ = kein anderes Tool konnte das zum Redaktionsstand. Community-Tools: alchemy-factory-codex.com, joejoesgit.github.io/AlchemyFactoryCalculator, alchemyfactorytools.com)*

---

## 5. Datenqualität & Quellen

- **Basis:** eigene Vermessung im Spiel-Sandbox (jede Zahl selbst nachgeprüft)
- **Abgleich:** JoeJoes Calculator-DB (GitHub), faultyd3v-Spieldaten-Export, Alchemy-Factory-Codex (v0.5.4471)
- **Ergebnis:** ~95 % der Rezepte bestätigt, **alle Heat-Werte exakt**, alle Brennwerte (Stamm 2000, Brett 20, Holzkohle 40, Kohle 540, Koks 600 Heat/Stück)
- **Band-Cap 60/Min:** durch Community-Messungen & Steam-Diskussionen mehrfach bestätigt (Basis 60/Min, +15 je Logistics-Stufe, max 240)
- **Stufen-Leitern (V1.9.60):** Beide Forschungen haben 12 Stufen — Factory Efficiency je Stufe **+25 %** (100 % → 400 % = ×4 Tempo; User-Bestätigung 18.09. „12 Stufen, 25%-Schritte“) · Logistics je Stufe **+15/Min** (60 → 240). Die Regler in den Fabrik-Einstellungen springen genau auf diesen Werten
- **Rohr-Durchsatz:** Spiel-Patch 13.01.2026 („liquid output … capped at 6,000/min“ behoben) — Rohre praktisch unbegrenzt
- **Ofen-Grundverbrauch:** selbst gemessen (Hochofen 8, Steinofen 5 P/Sek); Tiegel-Heat skaliert mit Fabrik-Effizienz (Codex: „Factory Efficiency — Device Production, Heat Consuming Speed“)

### Bekannte Lücken (Early Access!)
- **Steel + Iron (Athanor):** Ausgabe im Editor 1 Stahl + 1 Eisen; Rezept-Notiz sagt 25 %/75 %-Chancen — **im Spiel ablesen und melden**, dann wird scharf gerechnet
- **Münz-Rezepte** (Kupfermünze 2.000/Min, Bankportal bis 6.000.000/Min): unter dem Band-Gesetz absurd — vermutlich Sondermechanik, unvermessen
- **Dampfheizkissen:** Daten (60 Dampf/std = 12 Heat) drin, aber die Wärme-Bilanz des Kissens ist noch nicht eingebaut
- **Ofen-Grundverbrauch bei LEEREM Ofen:** unvermessen (brennt ein Ofen ohne Maschinen überhaupt?)
- **Kessel-Rezepte (Cauldron):** Zeiten sind Community-Näherungen — lieber 1–2 mehr bauen als geplant
- Sternenstaub 5 vs. 50 ungeklärt · Saatbeet-Dünger-Modell wartet auf Community-Messungen

→ **Fehler und Messwerte melden ist ausdrücklich erwünscht** — siehe readme.md („Mithelfen & Messen“).

---

## 6. Die Mathematik dahinter (für Interessierte)

```
Rate/Min          = Menge × (60 ÷ Sekunden) × FactoryEfficiency
Band-Cap          = 60/Min je Line (Logistics-Effizienz) · Rohre ≈ 6.000/Min (Flüssigkeiten)
Stufen-Leitern    = beide Forschungen 12 Stufen: Factory Efficiency je +25 % (100 → 400 % = ×4) · Logistics je +15/Min (60 → 240) — die Einstellungs-Regler springen genau auf diesen Werten
Anschluss-Rechner = Bandkapazität ÷ Verbrauch pro Maschine   (z. B. 60 ÷ 15 = 4 Tiegel/Band)
Heat P/s          = Brennwert × Items/Min ÷ 60               (Bretter: 20 × 30 ÷ 60 = 10 P/s)
Ofen-Bedarf P/s   = Σ (Maschinen-Heat × Anzahl) × FactoryEfficiency + Grundverbrauch (8/5)
Ofen-Fläche       = Σ Maschinenflächen ≤ Ofenfläche (Steinofen 9 / Hochofen 42)
Teillast %        = geliefert ÷ benötigt × 100

Ausgangs-Modell (V1.9.59, User im Spiel gemessen): Eine Maschinen-Box ist ein FENSTER mit
  N EINZELMASCHINEN — Ausgang i trägt NUR Maschine i (×3-Schleifer-Kasten: 1 Ausgang = 10/Min,
  NICHT 30; 3 Ausgänge = 30/Min; die Summe aller Ausgänge = Gesamtproduktion).
  je Line = min(Rate dieser EINEN Maschine, Bedarf des Ziels, Band-Cap) — mehrere Lines vom
  selben Ausgang teilen sich die eine Maschine (Wasserfüllung λ).
  Lager/Lift/Portal (echte Einzel-Boxen) poolen ihren Bestand: jeder bekommt λ, bis sein Cap
  greift; Σ min(cap, λ) = Bestand. Maschinen-Lines werden VOR Senken/Liften bedient
  (das Band staucht sich vor der Maschine).
Merge: mehrere Lines auf dieselbe Box teilen sich den GESAMT-Bedarf (Pool).
Fenster: Eingang = POOL für alle Maschinen (V1.9.62) · Ausgang je Port = 1 Maschine (V1.9.59).
```

**Eine Zahl als Denkmal:** 1 Sol (das Endgame-Relikt) ≈ 925.000 Maschinen-Minuten Arbeit — der größte Einzelhebel ist die **Seife** (1 Seife = 200 Leinöl → Silber-Transmutation → Gold → Luna). Mit ~92 Maschinen (davon 10 Saatbeete, 38 Schleifer) baust du 1 Sol pro Woche.

---

## 7. Ordnerstruktur dieser Pakung

```
AlchemyFactoryEditor-Beta 2.0/
├── AlchemyFactoryEditor-Beta 2.0.html   ← STARTDATEI: Doppelklick = läuft (alles eingebettet,
│                                           offline, kein Server, keine Installation)
├── readme.md                             ← Kurz-Anleitung + Mithelfen & Messen (DE/EN)
├── documentation.md                      ← diese Datei
└── system/                               ← Technik-Ordner (für Entwickler / GitHub-Pages)
    ├── index.html                        ← gleicher Editor, klassisch auf Dateien verteilt
    ├── css/style.css
    ├── js/editor.js                      ← Logik + alle Spieldaten (REZEPTE oben im Objekt DEVICES)
    └── saves/maps/                       ← Beispiel-Map zum sofort Ausprobieren
```

*Maps landen beim Speichern in `saves/maps/`, Zonen in `saves/zonen/` (Ordner in Chrome/Edge verbinden — Details in der readme.md).*

---

*Fan-Projekt ohne Verbindung zu den Entwicklern von Alchemy Factory. Spielwerte: Early Access Stand September 2026 — können sich mit Patches ändern. Lizenz: MIT.*

---

# English

**Languages: 🇩🇪 [Deutsch ↑](#1-wie-das-projekt-entstand) · 🇬🇧 English (below)**

> **The unofficial fan-made production planner for “Alchemy Factory”** (Steam, Early Access).
> Not the game — the planner for it. Built by a player, for players.
> **Status: Beta 1.9.57 (Sep 18, 2026)** — game values are Early Access v0.5.x and may change with patches.

---

## 1. How this project started

When I first played **Alchemy Factory**, I quickly realized: *this game is about math.*

The first question was simple: *“If I build a table saw — how many grinders can I feed with it?”*
Trial and error gave the answer: the saw delivers 30 planks per minute, a grinder consumes 10. So: **3 grinders.** Logical — but manual work.

Then it got more complex: seed plots, stone crushers, crucibles, entire chains all the way to fertilizer. At some point the question was no longer “how much?” but **“how many machines do I need in total so everything keeps flowing — and where will it jam?”**

I searched the web. There were wiki pages with numbers, but nothing that let me say:
> *“I’ll rebuild my setup virtually — and see which layout is best and how much I can actually connect for a continuously running production.”*

That didn’t exist. So I built the tool myself. The foundation: **sandbox mode**. There I could test every item, recipe and machine without consequences and **measure the real values** — not copied from a wiki (translations and values there are often wrong), but 1:1 from the game. That mattered a lot to me: *the tool should mirror the game, not the wiki.*

**North star of this project:** the tool should help you plan a factory that **runs without jams and bottlenecks**. That was never a one-person job. Only together — with your measurements — will this tool become strong. The wiki is patchy. So: put it out there, honestly, with clear guidelines (see “Helping & Measuring” in the readme.md).

---

## 2. The journey in numbers

| Version | The essentials |
|---|---|
| **v0 (base, Aug 31, 2026)** | Node editor, 35 devices, DE/EN, light/dark, animated belts, furnaces, portals, zones, roadmap, reverse calculator |
| **BETA1–2** | Found & fixed a heat calculation error (factor 60); furnace area model with **self-measured** values; connection calculator (“max X machines per belt”) |
| **BETA3–5** | 🏢 **Floors & 🛗 elevators** (plan vertically like in-game); UX polish; belt logic 🟢🟡🔴 with partial-load percentage |
| **RELEASE 1.0 (Aug 31)** | Folder structure with `saves/maps` + `saves/zonen`, hotbar UI, zone info window |
| **1.9.x (Sep 2026)** | Honesty offensive: **window model** (a ×N box = N individual machines, one input per port), **stackable crucibles** (blast furnace 7 / stone furnace 3 slots, height = windows), **zone frames** with name/color, **status jump links**, splitters/merges, **belt-cap engine** (1 line = 1 belt = max 60/min), **pipes for liquids** (≈ 6,000/min), **furnace material check** (stones are not fuel!), reverse calculator with per-port wiring |

The complete version history with all details is in the project folder’s CHANGELOG.

---

## 3. What the editor can do

### Plan like in the game
- **Place machines** (35+ devices, icon picker with categories), quantity per box (×3 grinders = 1 box with 3 inputs and 3 outputs)
- **Connect with belts/pipes**: drag from the green output → drop on the blue input. **Splitters** (branch off existing lines) and **merges** (several belts into one input), just like the game
- **Route lines freely**: double-click a line = waypoint, drag to bend, right-click to delete
- **Pipes** for liquids (their own blue wavy look), **loopbacks** in violet
- **🏢 Floors & 🛗 elevators**: plan towers, an elevator automatically creates its counterpart one floor up, copy whole floors with Ctrl+C/V
- **Furnaces** (stone/blast): “place” machines on them, area model, mixed fuels add up, **steam heating pad** (tier 6, pipe instead of fuel)
- **Portals**: purchasing portal (external supply), dispatch portal, bank portal (copper/silver/gold)
- **🗂️ Zones**: frames with name + color around departments, info window with net balance, save & share zones individually — *even the game itself can’t do that*

### Calculate like the game — the belt laws (core of the model)
- **1 line = 1 belt = max 60 items/min** (base; rises with in-game logistics efficiency). More throughput = another line (or a merge at the target input)
- **Pipes for liquids are practically unlimited** (≈ 6,000/min, game patch Jan 2026) — sulfuric acid, brine, fruit wine etc. do NOT cap at 60
- **The elevator itself is unlimited** (“80 in at the top = 80 out at the bottom”) — but **EACH belt into or out of it carries max 60/min**
- **A window box = individual machines** (V1.9.59): one input per port = 1 machine (a ×6 box with 1 line = 1/6 running) — and **one output per port = 1 machine**: a single output of a ×N box carries only ONE machine’s rate (×3 grinder box: 1 output = 10/min, NOT 30; 3 outputs = 30/min). Only real single boxes (storage, lift, portal) pool their contents
- **Machines only pull their demand** — the rest backs up at the source (BACKPRESSURE indicator). Sinks (storage/sales) accept everything
- **Merge**: several belts into ONE input share that single machine’s demand — together exactly 100 %
- **3-stage traffic light**: 🟢 fully supplied · 🟡 partial load with percentage (“runs, but waits in between”) · 🔴 stalled — plus surplus/backpressure warnings with suggested fixes
- **🔌 Connection calculator** in every machine: “max X machines per belt (at the configured logistics efficiency)”

### More tools
- **Roadmap**: automatically builds entire production chains as a diagram
- **🎯 Reverse calculator**: pick a target product + desired rate → full machine requirement down to raw materials, placed on the map as a pre-wired chain at the click of a button (per-port wiring, boxes of max 10)
- **📊 Factory status**: net balance per material across all floors (produced − consumed incl. furnace fuel), stalled machines with **jump links** (click = switch floor + highlight the machine)
- **Furnace window**: “Demand: X P/sec” including factory-efficiency scaling and base consumption; warns about too little fuel and about useless material on the line
- **💾 Saving**: autosave in the browser, JSON export/import, direct folder access (Chrome/Edge), cheat-sheet build list

### 💰 Deliberately NOT included: money & revenue
The sales room is in as a true end station (items/min per good) — but the planner does **not** calculate coins or profit. That is not a gap, it is a deliberate decision:

- **Respect for the game:** with goods flows and production chains we already come very close to the game. Modelling the money cycle on top (item prices × sales room = income/min) would move us too close to the game itself — we deliberately refuse that.
- **Your prices are your business:** what an item is worth is decided by every player themselves, depending on savegame and goals. The planner plans FLOW — a factory that runs without jams and whose machines never run dry. For that, items/min is the honest unit, not coins/min.

---

## 4. Comparison: editor ↔ game ↔ community tools

### 4.1 Editor vs. game
| Aspect | Game | Editor |
|---|---|---|
| Belts/flows | visible, back up | same logic as colors + 60/min belt cap per line |
| Furnaces | area + heat + stacks + lift | area model, heat balance P/s incl. efficiency, stack windows, material check |
| Floors | yes | yes (floor view, elevators; belt cap like the game, the lift itself unlimited) |
| Zones | lost when you quit | **saveable & shareable** (saves/zonen) |
| Doing the math | pen and paper | all automatic, with suggested fixes |

### 4.2 Editor vs. community tools (as of 09/2026)
| Feature | **AFE (this one)** | Codex (Jimhopper) | JoeJoes Calculator | alchemyfactorytools |
|---|---|---|---|---|
| Visual node editor | ✅ | partially | ❌ | ❌ |
| Offline / one file | ✅ | ❌ (web) | ✅ | ❌ |
| **Floors & elevators** | ✅ *unique* | ❌ | ❌ | ❌ |
| **Save/share zones** | ✅ *unique* | ❌ | ❌ | ❌ |
| 60/min belt cap + per-line merge model | ✅ | ❌ | ❌ | ❌ |
| 3-stage belt logic + jam/backpressure warning | ✅ | ❌ | ❌ | ❌ |
| Economy portals (buy/sell/bank) | ✅ | ❌ | ✅ (profit) | ✅ |
| Roadmap auto-build of whole chains | ✅ | ❌ | ❌ | ❌ |
| DE/EN + light/dark | ✅ | ✅ (partly) | ❌ | ❌ |

*(“unique” = no other tool could do this at the time of writing. Community tools: alchemy-factory-codex.com, joejoesgit.github.io/AlchemyFactoryCalculator, alchemyfactorytools.com)*

---

## 5. Data quality & sources

- **Base:** own measurements in the game’s sandbox (every number verified by hand)
- **Cross-checked against:** JoeJoes Calculator DB (GitHub), faultyd3v game-data export, Alchemy-Factory-Codex (v0.5.4471)
- **Result:** ~95 % of recipes confirmed, **all heat values exact**, all fuel values (log 2000, plank 20, charcoal 40, coal 540, coke 600 heat/item)
- **Belt cap 60/min:** confirmed repeatedly by community measurements & Steam discussions (base 60/min, +15 per logistics level, max 240)
- **Pipe throughput:** game patch Jan 13, 2026 (fixed “liquid output … capped at 6,000/min”) — pipes effectively unlimited
- **Furnace base consumption:** self-measured (blast furnace 8, stone furnace 5 P/sec); crucible heat scales with factory efficiency (Codex: “Factory Efficiency — Device Production, Heat Consuming Speed”)

### Known gaps (Early Access!)
- **Steel + Iron (Athanor):** the editor outputs 1 steel + 1 iron; the recipe note says 25 %/75 % chances — **read it in-game and report**, then we’ll calculate it precisely
- **Coin recipes** (copper coin 2,000/min, bank portal up to 6,000,000/min): absurd under the belt laws — probably a special mechanic, unmeasured
- **Steam heating pad:** data included (60 steam/h = 12 heat), but the pad’s heat balance is not yet implemented
- **Base consumption of an EMPTY furnace:** unmeasured (does a furnace without machines even burn?)
- **Cauldron recipes:** times are community approximations — build 1–2 more than planned
- Star dust 5 vs. 50 unresolved · seed-plot fertilizer model awaits community measurements

→ **Reporting errors and measurements is explicitly welcome** — see readme.md (“Helping & Measuring”).

---

## 6. The mathematics behind it (for the curious)

```
Rate/min          = quantity × (60 ÷ seconds) × factoryEfficiency
Belt cap          = 60/min per line (logistics efficiency) · pipes ≈ 6,000/min (liquids)
Rank ladders      = both researches have 12 ranks: factory efficiency +25 % each (100 → 400 % = ×4) · logistics +15/min each (60 → 240) — the settings steppers snap to exactly these values
Connection calc   = belt capacity ÷ consumption per machine   (e.g. 60 ÷ 15 = 4 crucibles/belt)
Heat P/s          = fuel value × items/min ÷ 60              (planks: 20 × 30 ÷ 60 = 10 P/s)
Furnace demand    = Σ (machine heat × count) × factoryEfficiency + base consumption (8/5)
Furnace area      = Σ machine areas ≤ furnace area (stone 9 / blast 42)
Partial load %    = delivered ÷ needed × 100

Output model (V1.9.59, measured in-game by the user): a machine box is a WINDOW with
  N INDIVIDUAL machines — output i carries ONLY machine i (×3 grinder box: 1 output = 10/min,
  NOT 30; 3 outputs = 30/min; the sum of all outputs = total production).
  per line = min(that ONE machine’s rate, target demand, belt cap) — several lines from the
  same output share that one machine (water-filling λ).
  Storage/lift/portal (real single boxes) pool their contents: everyone gets λ until their
  cap bites; Σ min(cap, λ) = contents. Machine lines are served BEFORE sinks/lifts
  (the belt compresses in front of the machine).
Merge: several lines into the same input share that ONE machine’s demand.
Windows: one input per port = 1 machine (×6 with 1 line = 17 %) · one output per port = 1 machine (V1.9.59).
```

**One number as a monument:** 1 Sol (the endgame relic) ≈ 925,000 machine-minutes of work — the single biggest lever is **soap** (1 soap = 200 linseed oil → silver transmutation → gold → Luna). With ~92 machines (10 of them seed plots, 38 grinders) you build 1 Sol per week.

---

## 7. Folder structure of this package

```
AlchemyFactoryEditor-Beta 2.0/
├── AlchemyFactoryEditor-Beta 2.0.html   ← START FILE: double-click = runs (everything embedded,
│                                           offline, no server, no installation)
├── readme.md                             ← quick guide + helping & measuring (DE/EN)
├── documentation.md                      ← this file
└── system/                               ← tech folder (for developers / GitHub Pages)
    ├── index.html                        ← same editor, classic multi-file layout
    ├── css/style.css
    ├── js/editor.js                      ← logic + all game data (RECIPES at the top of DEVICES)
    └── saves/maps/                       ← example map to try immediately
```

*Maps are saved to `saves/maps/`, zones to `saves/zonen/` (connect the folder in Chrome/Edge — details in the readme.md).*

---

*Fan project, not affiliated with the developers of Alchemy Factory. Game values: Early Access as of September 2026 — subject to change with patches. License: MIT.*
