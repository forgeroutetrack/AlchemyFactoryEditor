# 📏 MESSEN — so hilfst du am meisten · How to help best (zweisprachig / bilingual)

> 🇩🇪 Das Spiel ist Early Access, das Wiki lückenhaft. **Jede saubere Messung macht den Planer besser** — wir bauen jeden gemeldeten Wert ein und nennen die Quelle. So entstand der gesamte Datenbestand (Stand: spiel-gemessen September 2026).
> 🇬🇧 The game is Early Access, the wiki is patchy. **Every clean measurement makes the planner better** — we build in every reported value and name the source. That's how the entire data set was built (measured in-game, September 2026).

---

## 🥇 Die 3 Goldenen Messregeln · The 3 golden rules

1. **🇩🇪 NIE ein Lager als Quelle messen** (außer das Lager IST das Thema)! Das Lager leitet nur mit Band-Tempo durch — gemessen wird dann das BAND, nicht die Maschine. Immer **Maschine → Maschine** als Kette aufbauen, hinten ein **LEERES Lager als Zähler**.
   **🇬🇧 NEVER measure from a storage!** It only passes items at belt speed — you'd measure the BELT, not the machine. Always chain **machine → machine**, with an **empty storage as counter** at the end.

2. **🇩🇪 Vorher alles leeren** (Inventar + Zähler-Lager), **Stoppuhr** daneben, **≥ 10 Minuten** messen (Anlaufzeit verfälscht kürzere Läufe).
   **🇬🇧 Empty everything first, stopwatch ready, measure ≥ 10 minutes** (ramp-up skews short runs).

3. **🇩🇪 Nichts mittendrin umbauen** — sonst misst du zwei Setups gleichzeitig. Und: **Spiel-Anzeigen abschreiben oder fotografieren** („15/15", „9 s", „4 s") — Screenshots sind Gold.
   **🇬🇧 Don't rebuild mid-measurement** — and **copy or photograph the in-game displays** (“15/15”, “9 s”) — screenshots are gold.

---

## 🔍 Was wir aktuell am dringendsten brauchen · Most wanted right now

| Wo | Was fehlt |
|---|---|
| 🧪 Dünger-Monteur | Fenster komplett ablesen: Stück-Anzeige (X/X) **und** Sekunden je Vorgang |
| 🌿 Gärtnerei | Raten für **Johannisbeere, Lavendel, Kamille, Enzian** (aktuell geschätzt: 10 / 5 / 7,5 / 2,2 je Min) |
| 🛗 Logistik | **Band-Raten bei höheren Logistics-Stufen** (Basis 60/Min — wie viel bei Stufe 3, 4, …?) · Lift-Feinheiten |
| 🔥 Öfen | Brennt ein **leerer** Ofen Grundwärme? Dampfheizkissen-Verhalten |
| 🏪 Portale | Kauf-Verhalten bei Geldmangel, Bank-Portal |
| 📖 Allgemein | Rezept-Zeiten/Mengen mit ⚠️ im Rezept-Codex |

## 🐛 Fehler & Werte melden · Reporting bugs & values

**Der beste Weg: GitHub-Issue** (Vorlagen: 🐛 Bug · 📏 Messung · 📖 Rezept · 💡 Wunsch — einfach ausfüllen). Immer angeben:

- 🧪 **Beta-Version** (oben links im Planer)
- **Was du getan hast + was passiert ist** (Schritt für Schritt)
- **Was das Spiel anzeigt** vs. **was der Planer rechnet** (Screenshot vom Spiel-Fenster = Gold)
- 💾 **Deine Setup-Datei anhängen** (💾 Speichern → JSON) — dann bauen wir deine Fabrik 1:1 nach

**Tipp für Karten-Fehler:** Die betroffene Stelle als **rote Zone** markieren (🗂️ Zonen → Stift → Rot) und in die Beschreibung schreiben, was falsch ist. Vorbild: die **Beispiel-Map-Fehlerbericht.json** in `saves/maps/` — genau so sieht ein perfekter Bericht aus.

---

# English summary

**Golden rules:** 1. never measure from a storage — chain machine → machine with an empty storage as counter · 2. empty everything, stopwatch, ≥ 10 minutes · 3. don't rebuild mid-measurement; photograph the in-game displays. **Most wanted:** fertilizer assembler window (count + seconds) · nursery rates for redcurrant/lavender/chamomile/gentian · belt rates at higher logistics levels · empty-furnace base heat · portal behaviour. **Reporting:** GitHub issue with the templates (bug / measurement / recipe / wish) — always include the beta version, the steps, what the game shows vs. what the planner calculates, and attach your setup JSON. Mark broken spots as a **red zone** in your map (see the bug-report example map).
