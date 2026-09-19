# 📁 Beispiel-Dateien — Maps & Zonen (zweisprachig / bilingual)

> 🇩🇪 Diese Dateien zeigen, wie eine gute Map aufgebaut ist — und wie ein guter Fehlerbericht aussieht. Alle Werte sind **im Spiel gemessen** (September 2026, Stufe 0) oder klar als geschätzt markiert.
> 🇬🇧 These files show what a well-built map looks like — and what a good bug report looks like. All values are **measured in-game** (September 2026, level 0) or clearly marked as estimates.

---

## 🗺️ Maps (ganze Fabriken) — `saves/maps/`

| Datei | Was sie zeigt |
|---|---|
| **Beispiel-Map-Erste-Schritte.json** | Die kleine Demo-Kette zum Warmwerden |
| **Beispiel-Map-Ganze-Fabrik.json** | Die komplette Beispielfabrik über 3 Etagen (unten beschrieben) |
| **Beispiel-Map-Fehlerbericht.json** | ⚠️ **Muster-Fehlerbericht**: enthält absichtlich einen Fehler in einer ROTEN Zone — der Editor findet ihn sofort (unten: so liest man ihn) |

### Beispiel-Map: Ganze Fabrik (3 Etagen)

```
Etage 2 (oben)   Dünger-Kette: Pflanzbeete + Gärtnerei → Salbei-Lager → Asche-Tiegel
                 Kalk: 2 Brecher → 6 Tiegel → 6 Schleifer → 2 Monteure = 30 Dünger/Min
                 Hochofen heizt mit Kohle (per Aufzug) + Baumstämmen
Etage 1 (mitte)  6 Zonen: 2× Zahnräder (klein + groß) · Holzkohle 2× (Steinofen UND Hochofen)
Etage 0 (EG)     Verkauf: 30 große + 45 kleine Zahnräder/Min — Ware kommt per Aufzug an
```

- Alle Raten am Maschinen-Kasten ablesbar (📤 Output / 📥 Input, Ampel 🟢🟡🔴)
- **Lern-Effekte eingebaut:** Monteur braucht nur 5 große Räder/Min → Schleifer laufen gelb (Teillast) · Tiegel-Kohle läuft als Brennstoff zurück in den Ofen (Recycling)
- Fabrik-Effizienz 100 % (Stufe 0) · Band 60/Min — beides steht in der Datei

### 🧪 So liest man den Muster-Fehlerbericht (Beispiel-Map-Fehlerbericht.json)

1. Map laden (📂 Laden → `saves/maps/`) → **rote Zone** auf Etage 1 sofort erkennen
2. Maschinen der roten Zone anklicken: Die untere **Säge** meldet „📤 kein Abnehmer", der untere **Schmelztiegel** meldet „⛔ KEIN EINGANG", das **Kohle-Lager** bleibt leer (0/Min statt 15/Min)
3. Ursache: Das Band zwischen unterer Säge und unterem Tiegel fehlt — **eine Linie nachziehen, und alles wird grün**
4. **Genau so meldest du Fehler:** Map anhängen (💾 Speichern → JSON) + dazu schreiben, was falsch ist und welcher Wert im Spiel anders ist

---

## 🧩 Zonen (einzelne Abteilungen) — `saves/zonen/`

Zonen sind einzelne Abteilungen zum Einfügen in deine eigene Map (🗂️ Zonen verwalten → 📥 Importieren) — oder einfach öffnen und angucken.

| Datei | Kette | Ergebnis (Stufe 0) |
|---|---|---|
| **Beispiel-Zone-Holzkohle-Steinofen.json** | Portal → Säge → Schmelztiegel → Steinofen + Lager | 15 Holzkohle/Min — die **kleinste** Kohle-Kette, alles grün |
| **Beispiel-Zone-Holzkohle-Hochofen.json** | 7 Portale → 7 Sägen → **14 Schmelztiegel auf dem Hochofen** | 210 Holzkohle/Min · 90/Min per Aufzug nach oben · 30/Min zurück als Brennstoff — **das Vorbild-Setup** |
| **Beispiel-Zone-Zahnrad-Kette.json** | Portal → Säge → 3 Schleifer → 3 Monteure → Lager | 45 kleine Zahnräder/Min |
| **Beispiel-Zone-Zahnrad-Gross-Setup.json** | 2 Portale → 2 Sägen → 6 Schleifer → 3 Monteure → 2 Lager | 45 kleine + 30 große Zahnräder/Min — zeigt Weichen & Merges |
| **Beispiel-Zone-Duenger-Kette.json** | Pflanzbeete + Gärtnerei → Asche-Tiegel + Kalk-Kette → 2 Monteure | 30 Dünger/Min (Bedarf nur 5) — **die komplette Dünger-Fabrik** |
| **Beispiel-Zone-Verkaufsraum.json** | 2 Aufzüge + Verkaufsraum im EG | nimmt 30 große + 45 kleine Zahnräder/Min an |

### Die wichtigsten Zahlen dahinter (spiel-gemessen, Sep. 2026)

| Maschine | Rate |
|---|---|
| Säge | 1 Stamm → 200 Bretter = 30 Bretter/Min |
| Schmelztiegel (Holzkohle) | 1 Brett je 4 s = 15/Min |
| Gärtnerei (Salbei) | 4 Salbei je 12 s = 20/Min · braucht 1 Dünger je 12 s = 5/Min |
| Gärtnerei (Lein) | 6 Lein je 12 s = 30/Min · braucht 5 Dünger/Min |
| Dünger-Monteur | 1 Asche + 1 Kalkpulver → 1 Dünger je 4 s = 15/Min |
| Pflanzbeet | 180 Salbei je Ernte (~6-9 Min), Samen von Hand, kein Dünger |

---

## 📝 Was eine gute Datei ausmacht (Konvention)

1. **Name sagt, was drin ist** — „Beispiel-Zone-Holzkohle-Hochofen" statt „Zone_1"
2. **Beschreibung (desc) zweisprachig** — 🇩🇪 zuerst, 🇬🇧 danach: Was zeigt die Map? Welche Werte? Welche Stufe?
3. **Zonen benennen den Fluss** — „Portal → Säge → 3 Schleifer → Lager" liest sich wie ein Bauplan
4. **Fehler-Dateien:** betroffene Zone **rot** färben + in die Beschreibung schreiben, was falsch ist und welcher Spiel-Wert abweicht
5. **Einstellungen mitliefern** — Fabrik-Effizienz und Band-Kapazität stehen in der Datei (ab Build 1.9.66 · Beta 2.0)

---

# English

> These files show what a well-built map looks like — and what a good bug report looks like. All values are **measured in-game** (September 2026, level 0) or clearly marked as estimates.

## Maps (whole factories) — `saves/maps/`

- **Beispiel-Map-Erste-Schritte.json** — the small demo chain to get started
- **Beispiel-Map-Ganze-Fabrik.json** — the complete example factory across 3 floors: F2 fertilizer chain (seed plots + nursery → ash crucibles + lime chain → 2 assemblers = 30 fertilizer/min) · F1 six zones (2× gears, stone-furnace AND blast-furnace coal) · GF sales (30 large + 45 small gears/min, arriving via elevators). Furnace recycling included (crucible coal runs back as fuel). Factory efficiency 100 % (level 0), belt 60/min — both stored in the file.
- **Beispiel-Map-Fehlerbericht.json** — ⚠️ **bug-report template**: deliberately contains one missing belt in a RED zone. Load it, click the machines in the red zone: the lower saw reports “no consumer”, the lower crucible “NO INPUT”, the coal storage stays empty. Attach your map + describe what is wrong and which in-game value differs — that is a good report.

## Zones (individual departments) — `saves/zonen/`

Import into your own map (🗂️ Zones → 📥 import) — or just open and look.

- **Beispiel-Zone-Holzkohle-Steinofen.json** — smallest coal chain, 15 charcoal/min, all green
- **Beispiel-Zone-Holzkohle-Hochofen.json** — the showcase: 14 crucibles on one blast furnace, 210 charcoal/min, recycling included
- **Beispiel-Zone-Zahnrad-Kette.json** — saw → 3 grinders → 3 processors, 45 small gears/min
- **Beispiel-Zone-Zahnrad-Gross-Setup.json** — with splitters/merges, 45 small + 30 large gears/min
- **Beispiel-Zone-Duenger-Kette.json** — the complete fertilizer factory, 30/min (demand only 5)
- **Beispiel-Zone-Verkaufsraum.json** — 2 lifts + sales room on the ground floor

**Key numbers (measured Sep 2026):** saw 1 log → 200 planks = 30/min · charcoal crucible 15/min · nursery sage 20/min (needs 5 fertilizer/min) · flax 30/min · fertilizer assembler 15/min · seed plot 180 sage per harvest, no fertilizer.

## What makes a good file (convention)

1. **Name says what's inside** 2. **Bilingual description** (DE first, EN after) 3. **Zones named as flows** 4. **Error files: red zone + description of what's wrong** 5. **Settings travel with the file** (factory efficiency, belt capacity — from build 1.9.66 · Beta 2.0)
