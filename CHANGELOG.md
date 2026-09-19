# 📋 CHANGELOG — Alchemy Factory Editor

Alle nennenswerten Änderungen. Datum: 31.08.2026 (Projekttag 1 — von der Idee zum Release).

---

## 🎉 BETA 2.0 — GitHub-Release (19.09.2026)

**Die öffentliche Startversion auf GitHub.** Entspricht internem Build **1.9.66** (die Versionsnummer im Tool behält die 1.9.x-Struktur — „Beta 2.0" ist das öffentliche Etikett). Enthält den kompletten Stand: ehrliche Spiel-Physik (Fenster-Modell, Pool-Eingang, Band-Cap, Ofen-Heat, Gärtnerei mit Dünger-Pflicht), 9 Beispiel-Dateien, zweisprachige Oberfläche (EN-Audit: 0 deutsche Reste), BEISPIELE.md + SETUP-ANLEITUNG.md und die Video-Reihe auf YouTube (ForgeRouteTrack).

---

## [1.9.66] — „Zwei Sprachen & Beispiel-Mappen" (User-Fund 19.09.: „nicht alle Menüs sind auf Englisch — Rohstoffe & Anbau, Fortgeschritten bleiben deutsch, Fabrik-Status hat deutschen Titel")

- 🌐 **EN-AUDIT: 0 deutsche Reste.** Der User fotografierte beide Sprachen und fand Lücken — ein jsdom-Audit (komplette Oberfläche + Fenster + Maschinen-Boxen im EN-Modus) fand 15 Reste, alle behoben: Kategorien-Leiste (**Rohstoffe & Anbau · Verarbeitung · Fortgeschritten · Relikte · Portale** — mit und ohne Emoji, inkl. title-Attribute) · **❓ Hilfe** (+ „Hilfe & Tasten", „Hilfe-Abschnitt") · **📊 Fabrik-Status**-Titel · „Lager: N×"-Nummerierung · „steht — kein Zulauf" · Säge-Rezeptzeile („1 log → 200 planks"). Ursache: Emoji-Präfixe verhinderten die exakte Lexikon-Zuordnung — das Lexikon ist jetzt ergänzt (14 EXACT + 3 Regeln)
- 📁 **8 Beispiel-Dateien** (User-Maps vom 19.09., kuratiert): **6 Zonen** (Holzkohle Steinofen/Hochofen · Zahnrad-Kette/Groß-Setup · Dünger-Kette · Verkaufsraum) + **Ganze-Fabrik-Map** (3 Etagen — KORRIGIERT: das vergessene Band in der Steinofen-Zone ist ergänzt) + **Fehlerbericht-Muster-Map** mit ROTER Zone (Fehler drin, Beschreibung = Muster-Bericht — das Vorher/Nachher-Paar). Alle mit zweisprachiger Beschreibung (🇩🇪/🇬🇧), bereinigten Zonen-Namen („Säge", „Monteure", „Schmelztiegel") und Fabrik-Effizienz + Band-Kapazität IN der Datei
- 📖 **2 neue Docs:** **BEISPIELE.md** (alle Beispiel-Dateien zweisprachig beschrieben + Konvention „Was macht eine gute Datei") · **SETUP-ANLEITUNG.md** (10 Schritte zur ersten Fabrik, zweisprachig, Screenshot-Platzhalter nach User-Drehbuch: ZIP → Ordner → leere UI → Menüs → erste Line falsch/richtig → 1-Maschinen-Park → Fenster-Großaufnahmen → Maps → Spiel-vs-Tool → Lift → Lager → Verkaufsraum)
- 🎬 **Video-Verweise (19.09.):** YouTube-Kanal **ForgeRouteTrack** + TikTok (@forgeroutetrack, Marke FRT) in README (DE+EN), SETUP-ANLEITUNG und release-readme verlinkt — die Video-Serie startet Sonntag, 20.09. mittags (Englisch gesprochen, deutsche Untertitel): UI-Tour, erstes Setup mit Fehler-Erkennung, ×N-Maschinen-Fenster, Bau einer großen Maschine, Verkaufsraum. „Weitere Videos gewünscht? Schreibt es!"
- ✔ Getestet: NEUE Suite test124 **16/16** (EN-Audit 0 Reste · Einzel-Übersetzungen inkl. User-Funde · DE-Rückweg unversehrt · Beispiel-Dateien: Bilingualität, Korrektur-Line, rote Zone) · ALLE 25 Suiten GRÜN (**705 Checks** + 10 Regressionen)

---

## [1.9.65] — „Gärtnerei mit echten Zahlen" (User-Sandbox-Messung 19.09., Stufe 0 — dafür Level-4-Upgrades auf 0 zurückgestellt)

- 🌿 **GÄRTNEREI = AUTO-BEET MIT DÜNGER-PFLICHT — jetzt mit SPIEL-GEMESSENEN Zahlen:** Die Gärtnerei (Nursery) pflanzt automatisch: 1 Samen EINMALIG von Hand, dann braucht sie STÄNDIG Dünger — ohne Dünger keine Pflanze (3 Pufferplätze). Gemessen Stufe 0: **Salbei 4 je 12s = 20/Min · Lein 6 je 12s = 30/Min · jede Gärtnerei braucht 1 Dünger je 12s = 5/Min** — und alles skaliert mit Fabrik-Effizienz (Stufe 2: 30/45/7,5 — Users Live-Werte exakt). Johannisbeere/Lavendel/Kamille/Enzian am 12s-Takt geschätzt (10/5/7,5/2,2 je Min). Pflanzbeet (normales Beet) bleibt wie bisher: Samen je Ernte von Hand, KEIN Dünger
- 🧪 **Bestätigte Ketten-Bausteine:** Dünger-Monteur 1:1:1 (1 Asche + 1 Kalkpulver → 1 Basis-Dünger, Stufe 2 live 22,5/Min = Basis 15) · Asche-Tiegel 1 Salbei → 1 Asche je 3s = 20/Min (stapelbar) · Heiltrank-Fenster 60/60 (6+6 je 6s). Notizen kurz gehalten (die Box-Vorschau zeigt nur 140 Zeichen — Details stehen jetzt im ℹ️)
- ℹ️ **Neue Hinweise:** Gärtnerei-ℹ️ mit Messwerten + Faustregel „1 Dünger-Monteur (15/Min) versorgt 3 Gärtnereien" · Pflanzbeet-ℹ️ grenzt das normale Beet klar ab (kein Dünger, ~6-9 Min/Ernte)
- ✔ Getestet: NEUE Suite test123 **26/26** (Rezept-Daten · Raten Stufe 0 = Spiel-Anzeige · Raten Stufe 2 = Users Live-Messung · **Users komplette Kette reproduziert**: 7 Schleifer → 7 Dünger-Monteure → 10 Betten — 70 < 75 Dünger/Min ⇒ „ein Bett geht leer aus" exakt wie beobachtet · ℹ️-Hinweise DE/EN) · ALLE 24 Suiten GRÜN (**689 Checks** + 10 Regressionen)

---

## [1.9.64] — „Schlankes Linien-Menü" (User-Fund 18.09.: „Linien-Menü: die Buttons, der Textinhalt ist zu groß und zu viel — der Button schluckt Teile des Textes")

- 🔗 **LINIEN-MENÜ KOMPAKT — nichts wird mehr abgeschnitten:** Der Kontext-Titel war auf 300 px geklemmt (overflow:hidden = Text-Ende einfach weg) und stand in GROSSBUCHSTABEN („🔀 WEICHE SETZEN — Kreissage · Ausgang 1"). Jetzt: Titel 12,5 px (vorher 15) und fast doppelt so breit (480 px/46 vw) · „🔗 Linie — Kreissage · Ausg. 1" bzw. „🔀 Weiche — …" · Kontext-Buttons schlank (Icon 19 statt 23-25 px, Label 10 px, schmaleres Padding) · Hinweis-Zeile kurz („Ziel anklicken (🧲 Magnet hilft) · bestehende Line = 🔗 Merge · ESC = beenden") · Merge-Hinweis kurz („🔗 Merge — aus der …-Line · Punkt zieht mit"). Die Kategorien-Leiste (unten im Normalmodus) bleibt groß — sie ist die Haupt-Bedienung
- ✔ Getestet: NEUE Suite test122 **22/22** (CSS-Pins · Linien-BAU-Menü mit kurzem Titel in beiden Modi · Linien-Menü mit allen Buttons „Weiche/Punkt weg/Farbe/Linie löschen/Fertig" ohne Text-Verlust · Merge-Hinweis · Box-Kontext unangetastet) · test107-Erwartungen bewusst auf die neuen Kurztitel umgestellt · ALLE 23 Suiten GRÜN (**563 Checks** + 10 Regressionen)

---

## [1.9.63] — „Holzzahnrad" (User-Fund 18.09.: „du schreibst in der Schleifer Großes Holzrad — laut dem Spiel falsch, es heißt Holzzahnrad großes. Die anderen Angaben auch ändern bitte")

- 🏷️ **NAME LAUT SPIEL KORRIGIERT — und er war ZWEIFACH inkonsistent:** Dasselbe Item hieß bei uns im Rezept-Dropdown „Großes Holzrad" und in den Material-Zeilen „Großes Zahnrad". Jetzt überall einheitlich **„Großes Holzzahnrad"** (EN: Large Wooden Gear) — Rezept-Dropdown, Output-/Input-Zeilen, ℹ️-Hinweise (Säge, Schleifer, Fertigungseinheit), i18n
- 🧮 **DEINE 1-STAMM-MESSUNG IST JETZT BAUTEIL DES TOOLS:** 1 Säge → (Weiche) → 3 Schleifer → je (Weiche) → 2 Fertigungseinheiten → 3 Lager, GENAU 1 Stamm: **201 + 198 + 201 = 600 kleine Zahnräder** — exakt 200 Bretter × 1:1 Schleifer × 3:1 Fertiger, KEIN Verlust, Weichen teilen GERECHT (200 Bretter → 67/67/66 ⇒ Lager 201/201/198). Steht jetzt im ℹ️ der Säge und der Fertigungseinheit („Faustregel: 1 Schleifer versorgt 2 Fertigungseinheiten · 1-Stamm-Test: 600 kleine, fair verteilt")
- ✔ Getestet: NEUE Suite test121 **25/25** — dein Aufbau in **3 Bauformen** (×2-Box mit 1 Line · Weiche auf 2 Eingänge · 6 einzelne Geräte): alle rechnen EXAKT gleich (3×30=90 kleine/Min) · 1-Stamm-Batch-Mathematik aus den Rezept-Daten (200→200→600) · Weichen-Fairness (10/10/10 und 5/5) · ALLE 22 Suiten GRÜN (**541 Checks** + 10 Regressionen)

---

## [1.9.62] — „POOL AM EINGANG" (User-Spiel-Messung 18.09.: „1 Säge, 3 Schleifer, 6 Fertigungseinheiten — alles läuft sauber durch, kein Stau")

- 🧮 **EINGANGS-MODELL ERSETZT — MASCHINEN TEILEN SICH DAS BAND-MATERIAL:** Deine Messung hat das alte Modell (V1.9.36 „Eingang je Port = 1 Maschine" — nur Konsistenz-Schluss, nie gemessen) widerlegt: 3 Bänder à 10 großen Zahnrädern versorgen ALLE 6 Fertigungseinheiten (30=30=30 ⇒ 90 kleine Zahnräder/Min, kein Stau). Vorher klemmte das Tool jede eingehende Line auf den Bedarf EINER Maschine — deine Kette zeigte falsch „3 von 6 versorgt (15/30)" und 15 statt 90/Min Output. Jetzt: **alle Lines der Box speisen alle Maschinen gemeinsam** (Port-Nummer egal), Zu wenig = ehrliche Teillast „N von M versorgt" (Fill-Order: erste Maschine läuft zuerst voll). EIN Band à 10 an einer ×2-Box versorgt BEIDE
- ⚖️ **1 AUSGANG = 1 MASCHINE BLEIBT** (V1.9.59, deine Messung vom 18.09.): Der volle Output einer ×N-Box braucht weiter N Lines — Ausgang i trägt nur Maschine i. Nur der EINGANG poolt jetzt
- 🚦 **Anzeige-Ehrlichkeit am Eingang:** „✅ kommt X/Min · braucht Y/Min" (voll) · „🟡 N von M Maschinen versorgt" (Teillast, mit neuem Hinweis „Zulauf erhöhen: weitere Line oder stärkere Quelle (alle Eingänge teilen sich)") · Ports ohne Line sind keine „stehenden Maschinen" mehr — stattdessen ehrlich: „ℹ️ die vorhandenen sättigen alle Maschinen (Pool)" oder „⚠️ Zulauf deckt nicht alle Maschinen". Der Anschluss-Rechner („max 12/Band") ist jetzt KONSISTENT mit dem Motor (vorher Widerspruch im selben Fenster)
- 💡 **Processor-ℹ️ mit deinem Spiel-Wissen:** „1 Säge : 3 Schleifer : 6 Fertigungseinheiten laufen SAUBER durch (30=30=30 ⇒ 90 kleine/Min) · Faustregel: 1 Schleifer versorgt 2 Fertigungseinheiten · nur 3 Einheiten = Stau". Rezept-Daten bestätigt exakt (5 große/Min rein · 15 kleine/Min raus · 12 Sek)
- 🔧 Umgebaut: targetWant (Bedarf der GANZEN Box je Line) · effLineVal-Merge-Gerechtigkeit (Gruppe = ganze Box statt Port) · computePortSupplies/machineSupplyRatio/📊-Bilanz (Pool + Fill-Order) · connState-Line-Farben · Portal-Auslastung zählt je Ziel den Gesamt-Bedarf
- ✔ Getestet: **NEUE Suite test120 — ALLE-MASCHINEN-AUDIT (deine Forderung): 158 Checks über 26 Geräte mit Rezept-Input**, je Gerät Voll-/Halb-/Über-Versorgung (Zahlen + Anzeigen) durch eine Maschine→Maschine-Kette, plus: deine komplette Kette (30/30 ⇒ 90/90 im Lager) · Pool-Beweis ×2 am EINEN Band · Stau-Ehrlichkeit · V1.9.59-Ausgangs-Gesetz · Band-Cap 60 (×9 braucht 2 Bänder: 60/90, mit 2. Band 90/90) · Fill-Order „3 von 5" · ALLE 21 Suiten GRÜN (**516 Checks** + 10 Regressionen; test113/114/116/118-Erwartungen bewusst auf das Pool-Modell umgestellt, jede mit Begründung im Check-Text)

---

## [1.9.61] — „Zone ziehen, ehrliche Titel-Infos, schlanke Boxen" (User-Funde 18.09. nachmittags: „die Zone lässt sich nicht verschieben, ich musste sie neu markieren · beim Lift gibt es diese Info nicht · das Menü, die Buttons und der Textinhalt sind viel zu groß")

- 🗂️ **ZONE AM LABEL ZIEHEN = GANZE ZONE VERSCHIEBEN:** Vorher ließ sich nur die Label-Position ziehen — die Maschinen musste man erst umständlich neu markieren (Rahmen aufziehen), um sie gemeinsam zu bewegen. Jetzt: Ziehen am Zonen-Label verschiebt ALLE Maschinen der Zone auf der aktuellen Etage gemeinsam (inkl. Wegpunkte der inneren Linien, Raster bleibt) — und die Zone bleibt danach markiert für weiteres Ziehen. Shift+Ziehen justiert nur die Label-Position (alte Funktion). Klick ohne Zug öffnet weiterhin Bearbeiten (Name/Farbe/Hintergrund)
- 💡 **TITEL-BUTTON-INFO BEI 5 GERÄTEN WAR LEER** („🛗 Aufzug — —"): Der Titel-Button im Kontext-Menü zeigte bei **Aufzug** (User-Fund), **Infobox, Dampfheizkissen, Hochofen/Steinofen, Thermo-Extraktor und Wissensaltar** nur den Namen und zwei Striche. Jetzt mit ehrlicher Kurzerklärung: Aufzug = Transporteur zwischen 2 Etagen (EINGANG/AUSGANG · JE Line max 60/Min) · Infobox = Beschriftungsschild · Dampfheizkissen = Dampf statt Ofen (60 Dampf/std = 12 Heat) · Öfen = Heiz-Gerät, stellt nichts her (Steinofen-Grundverbrauch 5, Hochofen 8 P/Sek — vorher zeigte der Steinofen falsch 8) · Thermo-Extraktor/Wissensaltar = ehrlicher Platzhalter (Wiki lückenhaft)
- 📐 **KOMPAKTE BOXEN:** Kopfzeile (Titel 17,5→14 · ✕-Button 30→22 px), Buttons (−/×N/+/⬆/⬇ 32→26 px), Textzeilen (13,5→12 px), Rezept-Auswahl und 58 Inline-Textgrößen im Box-Inhalt verkleinert, Abstände gestrafft — bei gleicher Lesbarkeit passen deutlich mehr Boxen ins Bild. Die persönliche UI-Größe (100–200 %, Taste/Regler) bleibt unberührt
- 🌍 EN: alle neuen Texte zweisprachig (Fragment-Muster mit <b>-Zahlen — die 3 neuen Regex-Regeln griffen im verdrahteten Test nicht und wurden durch das bewährte EXACT-Fragment-Muster ersetzt) · Regeln 187 → **202 EXACT/RULES**
- ✔ Getestet: NEUE Suite test119 **33/33** (Titel-Infos aller 6 Geräte DE+EN · Zone-Ziehen per echten Mausevents: +100/+50 gerastert, unzonierte Box unberührt,_markiert bleibt · Klick öffnet Bearbeiten · Shift = nur Label) · test108 Z2 bewusst auf neues Zonen-Verhalten umgestellt · ALLE 20 Suiten + regall GRÜN (**458 Checks** + 10 Regressionen)

## [1.9.60] — „Stufen-Leitern wie im Spiel" (User-Bestätigung 18.09.: „die Stufenregelung der Fabrik, die im Spiel bis 12 Stufen raufgestellt werden kann — unsere Feststellung war, dass die 25%-Schritte sind")

- 🪜 **FABRIK-EINSTELLUNGEN AUF DIE ECHTEN SPIEL-LEITERN:** Factory Efficiency springt jetzt in **25er-Schritten von 100 bis 400 %** (12 Stufen à +25 % = max ×4 Tempo) · Logistics/Band in **15er-Schritten von 60 bis 240/Min** (12 Stufen à +15/Min) — die Pfeile treffen exakt die im Spiel erreichbaren Werte (vorher 10er-Schritte: 125 %/75/90/105 … waren nicht treffbar). Übernehmen klemmt jetzt auf die Leiter (100–400 % · 60–240/Min)
- 📖 **Dialog-Text erneuert:** statt „genaue Formel nicht zuverlässig verifizierbar" jetzt die bestätigten Leitern (beide Forschungen 12 Stufen · Factory +25 %/Stufe · Logistics +15/Min/Stufe) — Werte bleiben frei eintippbar
- 🌍 **2 EN-Lücken im Fabrikstufe-Dialog geschlossen:** „⚙️ Fabrikstufe" und „% (Spiel-Basis: 100%)" blieben im EN-Modus deutsch (vom verdrahteten EN-Test gefunden) · 2 tote I18N-Einträge (verstümmelter EN/DE-Key, matchete nie) und 2 obsolete Disclaimer-Regeln entfernt — Regelanzahl 189 → 187
- 🔖 **README-Badge + release-readme-Version** von 1.9.57 auf 1.9.60 aktualisiert (war stehen geblieben)
- ✔ Getestet: ALLE 19 Suiten + regall GRÜN (**424 Checks** + 10 Regressionen) · NEU in test118: **K1–K5** (verdrahtet — EN-Dialog 0 deutsche Reste, DOM-Regler 100/400/25 und 60/240/15, DE-Rückschaltung) und **J1–J5** (User-Kette 1:1 verriegelt: 1 Säge → 3 Wege à 10/Min → ×3-Schleifer-Box → 3 Ausgänge à 10 → Lager 30/Min, alles grün, kein Stau)

## [1.9.59] — „1 Ausgang = 1 Maschine" (User-Messung 18.09.: „ich gehe von einem Schleifer zum Lager und oh Wunder, genau 10 Stück. 3 Schleifer = 30. 3 in EINER Box an 1 Ausgang = 10, NICHT 30! Es sind Einzelmaschinen in einem Fenster")

- 🏭 **MASCHINEN-BOX = FENSTER, KEIN POOL:** Der V1.9.55-Band-Cap-Motor poolte den Ausgang einer ×N-Box auf alle gezogenen Lines (×8-Kasten → 1 Line trug bis 60). FALSCH: Jede Maschine behält ihren EIGENEN Ausgang — Ausgang i trägt NUR Maschine i (Rate × Lauf-Faktor). 1 Line von einer ×3-Schleifer-Box = 10/Min; 3 Lines = 30/Min; 9 Lines = 90/Min. Die Summe aller Ausgänge ist die Gesamt-Produktion — aber EIN Ausgang ist NIE die Summe. Nur echte Einzel-Boxen (📦 Lager, 🛗 Lift, 🛒 Portal) poolen weiterhin ihren Bestand
- 📤 **EHRLICHE AUSGANGS-HINWEISE:** „X Ausgänge ohne Line — jeder Ausgang trägt 1 Maschine (10/Min)" statt falschem RÜCKSTAU („weitere Line nötig" half nicht, wenn der Abnehmer gar nicht mehr will) · „⚠️ X Ausgänge an STEHENDER Maschine — Lines liefern nichts" (Zentrum-Fund: 2 Tiegel-Lines hingen am Ausgang der einzigen unversorgten Säge → 0, jetzt wird es laut gesagt) · echter RÜCKSTAU nur noch, wenn EIN Ausgang die Band-Cap sprengt (z. B. Portal 100/Min → 1 Line) · „Abnehmer nehmen nur X/Min — Potenzial Y/Min (N genutzte Ausgänge à 1 Maschine)"
- 🟡 **„X von Y Maschinen versorgt" statt diffuser Teillast-%:** „1 von 2 Maschinen versorgt (10.0/20.0 = 50%) — Line an einen freien Eingang ziehen" — vorher „Teillast 50% — läuft, wartet zwischendurch" (gelogen: die 2. Maschine stand komplett)
- 📤 **ÜBERSCHUSS-Box statt RÜCKSTAU-Lüge:** Säge macht 30, Abnehmer nehmen 10 → „📤 ÜBERSCHUSS: +20.0/Min — 📦 Lager / 🏪 Verkauf anschließen oder Anzahl senken" (User-Fund: bei 1 Schleifer zeigte die Säge GAR NICHTS, bei 2 „Überschuss" — jetzt konsistent ab dem ersten)
- ⛔ **MATERIAL-MISMATCH WIRD LAUT:** Säge → Schleifer auf falschem Rezept (z. B. Sand — frisst Steine) zeigte „Potenzial — noch keine Line" als gäbe es keine Verbindung. Jetzt: „⛔ Schleifmaschine (Sand) nimmt Bretter NICHT an — diese Line liefert nichts!"
- 🔢 **Fabrik-Einstellungen in 10er-Schritten** (Effizienz & Band-Kapazität, vorher 5er)
- ✔ Getestet: NEUE Suite test118 **21/21** (User-Fälle exakt: ×3-Box 1 Ausgang=10 · 3 einzelne=30 · ×9 9 Lines=90/1 Line=10 · Säge-Überschuss +20 bei ×1 · Material-Warnung · 1 von 2 versorgt · Lager→Verkauf 10/10 · Lager-Pool 60) · ALLE 19 Suiten + regall GRÜN (**413 Checks** + 10) — 19 alte Pool-Erwartungen bewusst auf das neue Modell umgestellt (test113–117) · EN-Audit: 1.895 Texte, 0 deutsche Reste, EN→DE-Rückschaltung 0 Reste
- ⚠️ **Alt-Maps:** Lines, die an Ausgängen unversorgter Maschinen hängen, zeigen jetzt ehrlich 0 (vorher Pool-Scheinwerte) — im Spiel kommt dort ebenfalls nichts an; Lines an laufende Ausgänge umziehen

## [1.9.58] — „Jetzt wirklich Englisch" (User-Fund 18.09.: D/E zeigte im EN-Modus noch deutsche Fenster — „überprüfe nun ALLE Fenster, ALLE Boxen, JEDEN Text … dies sollte nun auch perfekt sein")

- 🌍 **KOMPLETTE EN-ÜBERSETZUNG DER OBERFLÄCHE:** Vorher übersetzte der EN-Modus (Taste E) nur Daten-Namen (Rezepte/Geräte/Materialien) — jedes Fenster, jeder Tooltip, jede Statuszeile blieb deutsch. Neu: I18N-Engine (EXACT-Lexikon ~350 statische Texte + ~130 dynamische Regeln für Zahlen/Namen) übersetzt nach dem Rendern den GESAMTEN DOM — Texte, title-Tooltips UND Eingabe-Platzhalter, inkl. document.title und alert(). Ein MutationObserver übersetzt alles dynamisch Nachgezeichnete (Boxen, Dialoge, Statusleiste) sofort mit
- 🔄 **LIVE-RÜCKSCHALTUNG EN→DE:** Beim Zurückschalten auf Deutsch (Taste D) stellt ein Undo-Stack jede Original-Übersetzung wieder her + refreshAll — kein Neuladen nötig, kein Sprach-Mischmasch (gemessen: 0 EN-Reste im DE-Modus)
- 🧪 **DE-QUELLTEXT UNANGETASTET:** Die Engine greift NUR bei uiLang≠de — deutscher Modus bleibt byte-identisch (alle 18 Suiten + regall laufen unberührt grün)
- 🧹 **VERSIONS-/ÄNDERUNGS-HINWEISE RAUS AUS DEN FENSTERN (User-Ordnung):** Das Beta-Fenster ist auf die Essenz geschrumpft (Warum Beta? → Fehler melden, Details stehen in readme.md/documentation.md bzw. CHANGELOG) — „Bereits gut geprüft/In Prüfung/Messstand"-Blöcke und Beta-Nummer aus dem Hilfe-Kopf entfernt. Auch der Beta-Badge oben zeigt KEINE Versionsnummer mehr („🧪 Wird live gegen das Spiel geprüft — Fehler einfach melden"). Messwerte & Änderungshistorie leben jetzt NUR in readme/doku
- 🐛 **NEBENBEI GEFIXT:** Ein //V1.9.56-Code-Kommentar klebte unsichtbar im title-Attribut der Box (erschien im Tooltip) · &nbsp;-Texte (z. B. „z. B.") werden im EN-Modus korrekt erkannt
- ✔ Getestet: NEUES Audit /tmp/i18n_audit.js — 44 Geräte platziert, alle 23 Dialoge + Picker geöffnet, 1.825 Korpus-Texte geprüft: **439 deutsche EN-Reste vor der Engine → 0 danach** · EN→DE-Rückschaltung: 0 EN-Reste · ALLE 18 Suiten + regall GRÜN (392 Checks + 10 Regressionen)

## [1.9.57] — „Was kommt an?" (User-Fund 18.09.: Steinbrecher→Ofen zeigte GRÜNE Line, der Ofen meldete „kein Brennstoff" — „ich kann kein Stein zu Feuer machen, das geht selbst im Spiel nicht")

- 🐛 **OFEN-LINIEN PRÜFEN JETZT DAS MATERIAL:** connState rechnete für Öfen nur die Wärme-Bilanz — ohne Maschinen auf dem Ofen war JEDE Line grün, sogar eine Steinbrecher-Linie, deren Steine kein Ofen verbrennen kann. Jetzt: Ein Ofen nimmt NUR BRENNSTOFF an (Stamm, Brett, Kohle, Holzkohle, Koks, Panacea), das Dampfheizkissen NUR DAMPF (Rohr vom Dampfkessel). Quelle ohne passenden Stoff = ROT — egal ob Maschinen auf dem Ofen stehen. Per-Line-Ehrlichkeit: Am selben Ofen bleibt die Holz-Portal-Line GRÜN, während die Stein-Line ROT bleibt
- 📢 **DER TÄTER WIRD BEKANNT GEMACHT:** Ofen-Fenster: „⛔ Nichts Brennbares auf der Linie: Steinknacker (Steine) — der Ofen nimmt NUR Brennstoff an. Diese Linie bringt im Spiel nichts." Ofen-Dialog ergänzt: „kein Brennstoff — Steinknacker liefert nichts Brennbares!" — auch bei LAGERN und LIFTS als Zwischenstation (indirekt lügt nichts mehr: Lager voller Steine → Ofen = ROT, Lager mit Stämmen = GRÜN)
- 🔇 **KEIN FEHL-ALARM BEI LEEREM OFEN:** Das Fenster schrie „⚠️ ZU WENIG Brennstoff — der Ofen kühlt aus!" (Grundverbrauch), während der Dialog „✅ Bereit" sagte — jetzt konsistent: ohne Wärme-Maschinen = „✅ Bereit"/„💡 noch keine Wärme-Maschinen auf dem Ofen", der ZU-WENIG-Alarm kommt erst, wenn Maschinen stehen
- 🔥 **Brennstoff-Lieferanten werden NICHT fälschlich rot:** Laufender Tiegel (Holzkohle), Athanor (Koks+Holzkohle), Holz-Portal, Lager-Relay und Lift-Relay (Stämme zur E1) bleiben GRÜN — getestet inkl. Dampfkessel→Dampfheizkissen (Dampf ist dort der „Brennstoff")
- 📝 Bekannt & dokumentiert (bewusst nicht geändert): connState zählt nur Maschinen-Heat, das Fenster inkl. Grundverbrauch — bei knapp bemessenem Brennstoff kann die Line grün zeigen, während das Fenster warnt (Grundverbrauch bei leerem Ofen im Spiel unvermessen) · Dampfheizkissen-Wärme-Bilanz (steamPerHour/steamHeat) noch unausgebaut — für Spiel-Messung vorgemerkt
- ✔ Getestet: NEUE Suite test117 **20/20** (User-Fall leerer Ofen · mit Tiegeln · gemischt Portal+Stein · Tiegel/Athanor/Lager/Lift/Dampf-Kombi nicht fälschlich rot · Steine-Lager rot) · ALLE 18 Suiten + regall GRÜN (353 Checks)

## [1.9.56] — „Fremd-Audit & Rohre" (KI-Gutachten 17.09.: 4 von 7 Behauptungen REAL — alle gefixt, die widerlegten sauber belegt)

- 🔍 **FREMD-AUDIT VOLLSTÄNDIG GEPRÜFT — jede Behauptung gegen Code + Spiel-Daten gemessen:** ❌ WIDERLEGT: Paste-ID-Kollisionen (V1.9.44-Schutz korrekt: nextId=Max+1 + idMap-Remap — 30 Maschinen ×3 gestempelt = 120 eindeutige IDs, 0 verlorene Lines) · Senken-NaN bei >10 Lines (12 Lines in 1 Lager-Port = saubere 360/Min) · „Athanor zeigt Malachit als Salz+Sand" (beide DE-Einträge existierten) · „Rückwärts-Rechner unterzählt" (Baum rechnet je Verwendung und summiert richtig: 100 Zahnräder/Min = 10 Schleifer + 100 Plank + 0.5 Stämme, exakt). ✅ REAL & GEFIXT: Merge-Gelb · Ofen-Heat ohne Effizienz-Skalierung · Insert verkabelte auf Port 0 · >10-Maschinen-Riesenboxen (Details unten)
- 🐛 **MERGE-GERECHTIGKEIT (over-Regel war wirklich falsch):** Mehrere Lines auf DEMSELBEN Maschinen-Eingang liefen je mit dem VOLLEN Bedarfspotenzial — 4 fette Bänder auf 1 Eingang zeigten „40/Min kommen an" bei 10/Min Bedarf und schalteten die perfekt versorgte Ampel auf GELB. Jetzt teilen sie sich den Bedarf der EINEN Maschine (fair, Summe = Bedarf): 4er-Merge = je 2.5/Min GRÜN · schwach+fett gemischt = 5+5 · die Maschine nimmt nur ihren Bedarf, der Rest staut an der QUELLE (RÜCKSTAU-Anzeige bleibt)
- 💧 **ROHRE ≠ BÄNDER — Flüssigkeiten endlich ehrlich:** Bänder 60/Min, Rohre praktisch unbegrenzt (Spiel-Patch 13.01.2026: „Fixed an issue where the maximum liquid output speed of devices was capped at 6,000/min") ⇒ LIQUID_LINE_CAP = 6.000/Min. Vorher zeigte eine Schwefelsäure-Line zum Kolben 60/Min + Rückstau-Lüge (real 300/Min per Rohr!). +6 Flüssigkeiten ergänzt (Codex-Item-Seiten „Liquid" verifiziert): Fruchtwein (1.200/Min je Alembik!), Brandwein, Aqua Vitae, Quecksilber, Feenträne, Panacea — Fruchtwein & Co. gehören ins KOLBEN-Lager, nicht ins feste Lager. Stau-Farbe & Cap-Hinweise unterscheiden jetzt Rohr/Band
- 🔥 **OFEN-HEAT SKALIERT MIT FABRIK-EFFIZIENZ (Codex: „Factory Efficiency — Device Production, Heat Consuming Speed"):** Bei 200 % fressen Turbo-Tiegel doppelt so viel Wärme — die Ampel blieb vorher grün, während der Ofen im Spiel auskühlte. Ofen-GRUNDVERBRAUCH (selbst gemessen: Hochofen 8, Steinofen 5 P/Sek) bleibt fix. NEU im Ofen-Fenster: „Bedarf: X P/Sek"-Zeile — die gesamte Bedarfs-Anzeige war vorher TOTER CODE (balHtml wurde für Öfen nie gerendert!) + „⚠️ ZU WENIG Brennstoff"-Warnung. Brennstoff-Seite zählt jetzt echte Line-Werte: Portale kaufen NICHT schneller bei höherer Effizienz (vorher log calcRate die Portal-Rate mit)
- 🎯 **RÜCKWÄRTS-RECHNER (Sol-Planung!) JETZT WIRKLICH BAUBAR:** (a) Eingesetzte Ketten landeten ALLE auf Port 0 = nur Maschine 1 lief, der Rest stand rot! Jetzt bekommt JE Maschine ihre eigene Line (toPort 0..N-1, Quellen round-robin): „Stämme an die Säge → kommt 100.00/Min · braucht 100.00/Min" statt 10/100 Teillast. (b) >10 Maschinen werden auf MEHRERE Boxen à max 10 verteilt (vorher EINE ×30-Box — Ports cappen bei 10, 20 Maschinen unsichtbar unversorgt). (c) Zyklus-Warnung: Rezepte, die ihren eigenen Input recyceln (Stahl+Eisen), werden als Rohstoff-OBERGRENZE markiert. (d) Ehrlichkeits-Footer im Ergebnis: Band-Cap/Merge-Hinweis (Shaper Jupiter 120/Min Plank!), Erst-Hersteller-Regel (Salz+Sand: Steinknacker ODER Athanor), Nebenprodukte ungenutzt, Kessel-Zeiten = Community-Näherung. Wärmebedarf je Zielmenge jetzt KONSTANT über Effizienz (Wärme je Item fix — vorher halbierte er fälschlich)
- 📏 **BAND-CAP AUCH AM MASCHINEN-ZULAUF:** Shaper Jupiter braucht 120/Min Plank = 2 Bänder (Merge am Eingang), Athanor 120/Min Holzkohlepulver — vorher logen die Lines mit der vollen Menge. Alt-Dateien: Legacy-Lines jetzt konsistent auf den GESAMT-Bedarf (EIN Band sättigt den ×3-Kasten mit 30/Min — vorher auf 10 gedeckelt = falsch gelb)
- 🔧 chgCnt (×10→×5) macht jetzt Voll-Refresh (Port-Motor-Stempel + Statusleiste sofort) · Weichen-/Merge-Verweise auf gelöschte Eltern-Linien werden aufgeräumt (Fallback: Box-Port) · 4 fehlende Rezept-DE-Namen ergänzt (Lebenstrank, Uhrwerk-Vogel, Steinkohle, Dampf — System-Check: ALLE Rezept-Keys haben DE-Namen) · maxM-Tipp nennt die eingestellte Logistics-Effizienz · insertReverseChain läuft auch ohne offenen Dialog
- ✔ Getestet: NEUE Suite test116 **56/56** (je Behauptung ein Beweis: Paste 120 IDs · chgCnt-Refresh · 4er/2er/gemischter Merge · 12-Lines-Senke · Rohr 900/300/Flüssigkeit per Lift · Ofen 100→200 % flippt · Rezept-Namen komplett · Sol-Baum ×5/9 Inputs/25 Perfekte Diamanten · Insert-Ports 0–9 · ×30-Split in 3 Boxen · Zyklus-Flag · Wärme konstant · Weichen-Waise · Legacy 30/Min) · ALLE 17 Suiten + regall GRÜN (17/15/8/10/30/26/27/23/15/14/30/18/21/22/15/25/56 + 10 = 352 Checks) · Motor 64 ms kalt auf test e1.json (148 Boxen/416 Linien) — Merge-Clamp praktisch kostenlos

## [1.9.55] — „Band-Cap & Steady-State" (User-Funde 17.09.: Zentrum.json „ein Ausgang zum Lift bekommt immer noch 80" · einzeltestzone.json „wie kommt es, dass wir 5 Teile haben")

- ⚡ **BAND-CAP-MOTOR — 1 LINE = 1 BAND = MAX 60/MIN:** Die Kern-Spielregel fehlte komplett: Förderbänder tragen 60/Min (Basis; Logistics-Efficiency steigert — Steam & Codex bestätigt). Deshalb zeigte eine Line vom ×8-Schleifer-Kasten zum Lift **80 (alles!)** statt **60 (Band voll!)** — User-Messung: „dies line gibt mir 60". **Neu:** Maschinen im Fenster bleiben EINZELMASCHINEN (Eingang je Port = 1 Maschine — „10 Maschinen mit nur einer Line bringen nicht die ganze Wahrheit raus"), aber ihr Ausgang POOLT sich auf alle gezogenen Lines, jede Line trägt max 60/Min. Beispiel Zentrum: Schleifer ×8 (80/Min) → Lift-Line 60 + Processor 5+5 → **70 fließen, 10 RÜCKSTAU** → Fenster zeigt „70.0/Min · ⚠️ RÜCKSTAU 10.0/Min — 3 Lines tragen nur 70/Min (Cap 60/Line) — weitere Line nötig"
- 🥇 **BEDARF HAT VORRANG VOR SENKEN:** Maschinen-Lines werden ZUERST bedient (im Spiel staucht sich das Band vor der Maschine — sie bekommt, was sie braucht), DER REST fließt zu Lagern/Lifts/Verkauf. Sonst klaut eine Lager-Line den Maschinen den Pool (regall-Fund setup1: Säge→Tiegel wurde gelb, obwohl die Tiegel zuerst versorgt werden müssen — jetzt tragen sie ihre vollen 15, das Lager nimmt den Rest)
- 🐛 **LIFT „NIMMT AN" ZÄHLT LINE-WIRKLICHKEIT (die 80-Lüge ist tot):** Das Lift-Fenster rechnete je Line das volle Potenzial × Anzahl — ×8-Schleifer mit 1 Line = „nimmt an: 80/Min", sogar bei KOMPLETT unversorgten Sägen (Reserve nie geprüft!), und 2 Processor-Lines zeigten 60 = 2×30 doppelt gezählt. Jetzt: echte effLineVal je Line. Lift selbst: **uncapped** (User: „oben 80 an, unten 80 raus" — verfeinert die 12.09.-Annahme „Lift = Band-Tempo": nur die BÄNDER davor/dahinter cappen bei 60, der Lift leitet alles weiter)
- 🐛 **„5 TEILE" AUS EINZELTESTZONE AUFGEKLÄRT:** Portal 1 Stamm/Min → Säge → 2 einzelne Schleifer: Der Editor zeigte 15 je Line + „Überschuss 5.0/Min bleiben auf dem Band" (Transient-Zustand). Im Spiel ziehen die Schleifer je 10 (Bedarf), die Säge drosselt auf 20/Min, 10 stauen. **Jetzt:** Lines 10+10, Fenster „20.0/Min · ⚠️ RÜCKSTAU 10.0/Min", Schleifer „kommt 10.00 · braucht 10.00" — Steady-State, kein Schein-Überschuss
- 🔧 **ZUERST-BEDARF-LOGIK + WASSERFÜLLUNG:** Mehrere Lines teilen sich den Pool fair (λ-Niveau bis Cap greift); PoolServe rechnet 50 Iterationen + 1e-6-Rundung (Float-Kaskaden 0.99999999 je Hop machten Ampel fälschlich gelb) · connState-Toleranz 1e-9 → 1e-4 · thr-Rückkopplung bewusst NICHT eingebaut (doppeldrosselte Säge 13.3 statt 20 und oszillierte — Rückstau ist reine Anzeige: Potenzial − Fluss)
- 🟡 **„ZU VIEL Zulauf" warnt vom ANGEBOT:** Bisher verglich die Liefer-Rate (jetzt bedarfsgedeckelt — Warnung wäre nie gefeuert). Jetzt: Pool-Summe der Quellen vs. Bedarf — Portal-Überfluss bleibt sichtbar
- 🎨 **HELLMODUS: LIFT-KOMPLETT-PASS (User: „Buttons viel zu hell, die Zahl im Input zu hell, Eingang kaum zu lesen"):** Sämtliche Lift-Texte/Buttons/Eingaben nutzten #d8b4fe (Pastell-Lila — im Hellmodus kaum lesbar): Neustell-Dialog **📥 EINGANG**-Button, Ziel-Etage-Zahleneingabe, „🛗 dorthin springen"/„⇄ tauschen"-Buttons, NUR EINGANG/AUSGANG-Titel, Bankportal-Text. Neue CSS-Variable **--lift-accent** (dunkel #d8b4fe, hell **#6d28d9**). System-Check danach: 9× #b1bac4 → var(--text-secondary), Grün/Cyan/Blau-Hexcodes → var(--accent-*); übrig bleiben nur #fff auf festen Grün/Rot-Buttons (beide Themes korrekt)
- 📖 Lift-Hilfetext neu: „Transportiert alles weiter: oben X an = unten X raus (kein Lift-Limit) · ⚡ aber JE Band hinein/daraus trägt max 60/Min — für mehr Durchsatz mehrere Lines"
- ✔ Getestet: NEUE Suite test115 **25/25** (User-Zahlen exakt: Lift-Line 60 · Lift „nimmt an" 60 nicht 80 · Fenster 70+RÜCKSTAU 10 · Processor 5+5/30 SWG · unversorgt 0.0 statt 80 · einzeltestzone 10+10/Säge 20+Rückstau/Portal-Line 0.15 · Band-Cap 60+40 Rückstau/50+50 · Lift-Passthrough 80/80 uncapped · Pool 30 auf 1 Line · Hellmodus-Variablen) · test114/113/106/111/regall an das Pool-Modell angepasst (alte „grün"-Erwartungen beruhten z. T. auf der 25/Line-Lüge: 11×25=275 > 200 unmöglich!) · ALLE 16 Suiten + regall grün (17/15/8/10/30/26/27/23/15/14/30/18/21/22/15/25 + 10) · Motor 69 ms kalt auf test e1.json (148 Boxen, 416 Linien)

## [1.9.54] — „Ehrliche Zahlen" (User-Fund: „Schleifer zählt alles zusammen bei einer Line" · 240 im Lift)

- 🎯 **FENSTER ZEIGT, WAS DIE LINES WIRKLICH TRAGEN:** Das Maschinen-Fenster rechnete stur Rezept × Anzahl (×8 Schleifer mit 1 Line = „80/Min", obwohl die Line nur 10 trägt). Jetzt: ▶ Output = Summe der echten Line-Werte — und bei Teilbelegung steht dabei „· nur 1/8 Ausgänge belegt — Potenzial 80". **Fenster = Lager = Realität**
- 🏗️ **NEU: ITERATIVER PORT-MOTOR:** „Läuft die Maschine an Port p?" wird über 4 Durchläufe durch die ganze Kette gerechnet — eine Line trägt nur dann ihren Anteil, wenn ihre Quell-Maschine wirklich läuft. Fällt irgendwo eine Input-Line weg, reagieren Fenster, Lager, Verkauf, Lift, Ofen-Heat, 📊 und die Linien-Farben SOFORT (User-Audit-Fall: Säge-Line weg → Schleifer-Fenster 30→20, Lager 20)
- 🐛 **LIFT-DOPPELZÄHL BEHOBEN (User-Zahl 240):** Der Aufzug zählte JE LINE das volle Potenzial × Anzahl — 3 Lines vom ×8-Schleifer zeigten 240 statt 30. Jetzt zählt der Lift echte Line-Werte
- 🐛 **RÜCKSTAU ZÄHLT ZIEL NUR 1×:** 2 Lines zur selben Maschine verdoppelten deren Bedarf (need 40 statt 20) — Warnungen verschwanden bzw. logen. Plus: vergleicht jetzt effektiv produzierte statt potenzielle Mengen
- 📊 **EINE FORMEL FÜR ALLES:** Senken, Ofen-Brennstoff, 📊-Bilanz und Status zählen jetzt alle mit demselben Line-Wert (vorher: zwei widersprüchliche Motoren — 📊 sagte „90 Bretter erzeugt", real waren es 30). Dedupe-Schlüssel je PORT: 2 Lines von 2 Maschinen = 2 Lieferungen
- ✔ Getestet: NEUE Suite test114 15/15 (Fenster 10/30 je Belegung + Hinweis · Lift 30 statt 240 · Lager→Lift-Durchlauf · Upstream-Wegnahme sofort sichtbar · RÜCKSTAU +10 ohne Doppelzähl · 📊 per Port 30/20) · test111/113/106/regall an ehrliches Modell angepasst · ALLE 15 Suiten + regall grün (17/15/8/10/30/26/27/23/15/14/30/18/21/21/15 + 10) · Zahnrad-Daten gegen Spiel verifiziert (1 großes → 3 kleine, 12 s — Codex & Steam-Bestätigung)

## [1.9.53] — „Status-Sprung-Links" (User-Wunsch, 2. Mal: „ich darf die Maschine nicht selbst suchen müssen — 10 Etagen, 300+ Maschinen")

- 🎯 **KLICK AUF DIE INFO = SPRUNG ZUR MASCHINE:** Der Fabrik-Status sagt zwar, WO etwas steht oder fehlt — aber die Maschine musste man selbst suchen. Jetzt ist **jeder Maschine-Eintrag im Status ein Link**: Klick = Editor wechselt auf die richtige Etage, zentriert die Maschine, markiert sie (1,6 s blau aufblitzen) und schließt das Status-Fenster für freie Sicht
- ⏸ **NEUE „STEHT-Liste" IM STATUS:** Alle Maschinen ohne Lieferung (auch komplett Unverdrahtete) stehen jetzt gesammelt im Fabrik-Status — jede mit Fehl-Material und Etage, jede anklickbar. Bei 300+ Maschinen auf 10 Etagen ist das die Suchliste schlechthin
- 🔗 Auch anklickbar: wartende Maschinen im „🚀 Damit es losläuft"-Block + die Verkauf-Karten im Status
- ✔ Getestet: NEUE Suite test113 21/21 (Steht-Liste mit Sprung-Link + Etikett · Sprung EG→E3: Etage wechselt, Box sichtbar, markiert, Karte scrollt, Fenster schließt · Rück-Sprung E3→EG · Kontextmenü zeigt Ziel-Maschine · Real-Check Zentrum(1).json öffnet sauber, keine Steht-Maschinen, Topline korrekt) · alle Suiten grün · jsdom-Fund: Status-Topline der User-Map = „Fabrik läuft — Bretter 300/Min · Holzkohle 210/Min"

## [1.9.52] — „Augenschonend" (User-Fund: Hellmodus grell + weißer Text auf weißem Grund · Dunkelmodus zu dunkel)

- 🌗 **HELLERES DUNKEL (Vorlage: GitHub „Dark Dimmed"):** Dunkelmodus-Basis von #0d1117 auf **#22272e** angehoben (Flächen #2d333b/#373e47) — Text bleibt abgestuft weiß-grau (#cdd9e3/#98a3b0/#87929e), augenschonend ohne zu verschwimmen. Recherche-Grundlage: Dark-Mode-Standards empfehlen dunkle GRAUSTUFEN statt tiefem Schwarz und kein Reinweiß als Text
- ☀️ **HELLE GRAUSTUFE STATT GRELLWEISS:** Hellmodus-Basis von reinem #ffffff auf **#eef1f4** (Karten #f9fafb, Panels #f5f7f9) — kein greller Weiße-Strahl mehr, Boxen heben sich sanft ab
- 🐛 **WEISS AUF WEISS BEHOBEN (User: „im Hellmodus ist der Text weg"):** Die Hotbar-Kontextmenü-Buttons (Duplizieren/Kopieren/Zone/Löschen …) hatten hartkodierte Dunkelmodus-Textfarben (#f0f6fc/#e6edf3) — im Hellmodus unsichtbar. Jetzt var(--text-primary/secondary)
- 🎨 **47 INLINE-TEXTE AUF THEME-VARIABLEN UMGESETZT:** Warnungen, Chips und Dialog-Texte nutzten pastell-Hexes (z.B. #fbbf24, #34d399, #58a6ff) — im Hellmodus schwach lesbar. Sie nutzen jetzt var(--accent-*) — der Hellmodus hat dafür dunklere Akzent-Varianten (#9a6700, #1a7f37, #0969da …)
- ✔ Getestet: NEUE Suite test112 21/21 — **WCAG-Kontrast RECHNERISCH geprüft** aus der CSS: Dunkel 10.5:1/5.0:1/4.0:1 · Hell 13.9:1/7.2:1/4.9:1 (primär/sekundär/muted) · ctxb-Fix · 0 alte Pastell-Textfarben · jsdom-Rauchtest Hell↔Dunkel mit Kontextmenü · alle Suiten grün (17/15/8/10/30/26/27/23/15/14/30/18 + regall 10/10)

## [1.9.51] — „Kopieren ehrlich & Merge-Weiche" (User-Funde: Zonen-Kopien ziehen fremde Linien · Ausgang auf Linie docken)

- 🐛 **WEGPUNKTE WANDERN MIT (Zonen-Kopier-Bug, bewiesen in Zentrum.json):** Beim Duplizieren/Stempeln von Zonen und Kopien wurden Linien-Wegpunkte ABSOLUT übernommen — die Kopien erbten die Kurven-Punkte im Gebiet der ORIGINAL-Zone, ihre Linien liefen erst dorthin und zurück (bei 3 Kopien zogen 6 fremde Linien durchs Bild). Jetzt: Wegpunkte werden relativ zur Auswahl gespeichert und beim Stempeln mitverschoben — die Kopie sieht aus wie das Original, nur am neuen Ort
- 🧬 **WEICHEN & MERGES ÜBERLEBEN DAS KOPIEREN:** Abzweigungen wurden beim Kopieren zu normalen Linien (User-Fund in Zentrum.json mitgefundet). Jetzt merkt sich der Stempel die Linien-IDs und schreibt die Verweise auf die NEUEN Linien um — die Kopie verzweigt genau wie das Original
- 🔀 **MERGE-WEICHE (User-Wunsch, Variante „auf die Line klicken"):** Ausgang anklicken und **direkt AUF EINE BESTEHENDE LINE klicken** = dort andocken (mehrere Quellen, ein Band). An der Klickstelle entsteht der Dock-Punkt (grüner 🔗-Ring) — an einem vorhandenen Punkt wird der mitbenutzt. Der Dock ist ein richtiger Wegpunkt: ziehen verschiebt ihn (alle Linien folgen), löschen lässt die Merge-Linie sauber auf den Ziel-Port zurückfallen. Box-Eingänge haben weiter Vorrang (Magnet zuerst) · Linien-Menü zeigt „🔗 MERGE — mündet in die Line von …" · Bau-Hinweis erwähnt die neue Möglichkeit
- 🛠️ Stabilität: connEndpoints `ex` const→let (Merge-Ende überschreibt ihn)
- ✔ Getestet: NEUE Suite test111 18/18 (Wegpunkte 5600/3400 statt 1600/1400 · alte Linie unangetastet · Weiche/Merge-Remap auf neue connId · Merge-Erstellung/Dock-Punkt/Polylinien-Ende/Ketten-Modus bleibt an/Senke zählt beide Quellen 60/Min · Duplikat- und Selbst-Block · Dock löschen = Rückfall) · alle Suiten grün (17/15/8/10/30/26/27/23/15/14/30 + regall 10/10)

## [1.9.50] — „Fenster-Modell" (User-Realtest: 7/3 Plätze · Fenster statt blanker Höhe · Hitze-Physik geklärt)

- 🪟 **FENSTER STATT „×N BIS 10":** Ein FENSTER = eine Schicht Tiegel nebeneinander (User-Realtest: **7 nebeneinander auf dem Hochofen, 3 auf dem Steinofen**). Höhe = Anzahl Fenster auf der Box — Spiel-max 10, **Empfehlung 5** (5 Fenster à 7 = 35 Tiegel). Das Anzahl-Label heißt bei Stapel-Tiegeln jetzt „Fenster (= Höhe)"
- 🏷️ **NAMEN WIE IM OFEN:** Jeder Platz bekommt seine Tiegelfolge benannt — **„Tiegel 1 · 1a · 1b · 1c · 1d"** (Platz 1–7, Ebenen als Buchstaben, bis …3i bei 10). Steht im Ofen-Fenster je Platz UND im Fenster der Stapel-Box („5 FENSTER: Tiegel 2 · 2a · 2b … — Platz 2 von 7 · Ofen gesamt 35 Tiegel")
- 🔥 **HITZE-PHYSIK GEKLÄRT (Recherche + User-Realtest):** Es gibt **KEINE feste Ofen-Heat-Kappe** — die „210 Heat/s" aus 1.9.49 war der VERBRAUCH von 35 Tiegeln, keine Grenze (irreführende Formulierung korrigiert). Echte Regeln: Ofen-Grundverbrauch (gemessen 8 P/Sek Hochofen / 5 Steinofen) + 6 P/Sek je Stapel-Tiegel — und **Wärme wandert nur nach OBEN und nur durch ARBEITENDE Tiegel** (Steam-Bericht Okt 2025): eine Lücke unten kühlt ALLES darüber ab → Band-Stau. Community-Trick steht jetzt dabei: unten Dauer-Zulauf (z.B. Holz→Holzkohle)
- 🚦 **FENSTER-AMPEL IM OFEN-DIALOG:** „🏗️ STAPEL-FENSTER: 5 Fenster · 7 Plätze = 35 Tiegel · 🔥 218 P/Sek (35×6 + 8 Ofen)" mit Ampel 🟢 1–3 Fenster / 🟡 4–5 / 🔶 6+ („logistisch heikel — eine Lücke unten kühlt ALLES darüber ab → Band-Stau!") + Brennstoff-Einordnung: 1 Holz-Band (2000 P/Sek) reicht selbst für 10 Fenster
- 📐 **FLÄCHE KORRIGIERT: 3 STATT 4 QUADRATE** (Stapel-Tiegel ≈ 1×1,1, so groß wie ein kleiner Tiegel) — deshalb fasst der **Steinofen genau 3 Stapel** (9/9 Quadrate, Realtest bestätigt!) und der Hochofen bleibt bei 7 Plätzen (8. Platz am Ausgang bliebe geometrisch frei — bleibt absichtlich weg, steht jetzt in der Meldung). Grundfläche 1×1,1 wird im Ofen-Fenster und Geräte-Hinweis erklärt
- ✔ Getestet: NEUE Suite test110 mit 30/30 (Fläche 3 · Steinofen-Kappe 3 mit Meldung · Hochofen 7 · Fenster-Rechnung 218/95 P/Sek inkl. Ofen-Grund · Namen 1/1a/…/3i · Ampel-Stufen · Dialog-Inhalte · „210 Heat/s"-Irreführung weg · Label) · test109 angepasst 14/14 · alle Suiten grün (17/15/8/10/30/26/27/23/15/14/30 + regall 10/10)

## [1.9.49] — „Stapel-Tiegel echt" (User-Info: gleiche Werte · Heat 6 bestätigt · max 7 Stapel)

- 🏺 **STAPELBARER TIEGEL RECHNET ENDLICH MIT:** Er hatte ein HOHLES Platzhalter-Rezept („wie Schmelztiegel" ohne Werte) — in der Bilanz trug er NICHTS bei. Jetzt: dieselben 9 Rezepte wie der Schmelztiegel (Holzkohle, Koks, Branntkalk, Pflanzenasche, Barren…) — „gleiche Werte wie die normalen Tiegel" (User-Info, doppelt bestätigt durch früheren Spiel-Test)
- 🏗️ **STAPELN WIE IM SPIEL:** Höhe = Anzahl (×N) auf der Box — und die Höhe kostet KEINE Fläche mehr (vorher: ×10 Stapelbarer fraß 40 Quadrate — das Gegenteil von Stapeln!). Fläche zählt nur je STAPEL-Box. **Max 7 Stapel-Boxen je Ofen** (User-Vorgabe, 7×5 = 35 Tiegel) — beim 8. Stapel kommt eine klare Meldung
- 🔥 **HEAT 6 JE TIEGEL — BESTÄTIGT:** Stand bisher als „Wiki-Erbe, UNVERIFIZIERT" im Code — User-Info macht daraus Fakt (normaler Tiegel: 4). Ofen-Dialog warnt ehrlich: 7×5 = 35 Tiegel = 210 Heat/s — „das wird holzhungrig!"
- 📖 Geräte-Hinweis komplett zusammengeführt: gleiche Werte + Wärme wandert nur nach OBEN + Stapel-Modell + Heat
- ✔ Getestet: 14/14 (9 echte Rezepte + Rate ×5 = 75/Min · Stapel-Fläche 4 bei ×5 und ×10 · normaler Tiegel unverändert 30 bei ×10 · 7 Stapel passen/28 von 42 Quadraten · 8. blockiert mit Meldung · Dialog + Hinweis) · alle 10 Suiten grün (17/15/8/10/30/26/27/23/15/10)

## [1.9.48] — „Weiche wählbar & Zonen-Label lebendig" (User-Funde: Abzweig-Linie starr · Zonen-Box nicht bearbeitbar)

- 🔀 **ABZWEIG-LINIEN SIND JETZT VOLLE LINIEN:** `connEndpoints` kannte die Weiche nicht — die Abzweig-Linie wurde gezeichnet, aber Anklicken/Färben/Punkte-setzen rechneten mit einer UNSICHTBAREN Linie vom Box-Port (deshalb: Farbe ging nur auf die Haupt-Linie, keine Punkte möglich, „einfach starr dort"). Jetzt: Start = Abzweig-Punkt — anklicken, 🎨 färben, Doppelklick = Punkte setzen, Punkte ziehen: alles funktioniert wie bei jeder Linie
- 🗂️ **ZONEN-LABEL LEBENDIG (User: „Zonen-Box lässt sich nicht bearbeiten/verschieben"):** **Klick auf das Label** öffnet direkt den Rahmen-Dialog (Name/Farbe/Hintergrund/Auflösen) · **Ziehen verschiebt das Label** (bleibt gespeichert) · Maus-Zeiger zeigt beim Überfahren, dass hier was klickbar ist
- 💬 **WEICHEN-HINWEIS KLARER (User: „dachte, ich müsste zum Punkt zurück"):** Statusleiste, Bau-Menü und Info-Popover sagen jetzt deutlich: **„ZIEL DIREKT anklicken — die Linie startet automatisch am Abzweig-Punkt"**
- ✔ Getestet: 15/15 (connEndpoints am Abzweig-Punkt · Klick trifft Abzweig-Linie · Farbe änderbar · Punkt per Doppelklick + verschiebbar · Label Klick/Zug/Persistenz) · alle 9 Suiten grün (17/15/8/10/30/26/27/23/10) · test-e1 unverändert

## [1.9.47] — „Menü-Zentrale" (User-Feedback 16.09.: Menü ab Port-Klick · Popover statt Breite · Zone-Hintergrund wählbar)

- 🔗 **MENÜ SCHALTET BEIM PORT-KLICK UM — wie bei jedem Item:** Der Klick auf einen Ausgang macht die Leiste unten SOFORT zum Linien-BAU-Menü: „🔗 LINIE ZIEHEN — Gärtnerei · Ausgang 1" + ✖️ Abbrechen-Button + Kurz-Hinweis (vorher: nur Fadenkreuz + helle Punkte, das Menü kam erst, wenn die Line stand — User-Fund zum 3. Mal, jetzt konsequent). Kette bleibt offen = Menü bleibt im Bau-Modus; Ende (ESC/Rechtsklick/Klick daneben/Abbrechen) räumt überall auf
- 🪟 **INFO-POPOVER ÜBER DEM MENÜ (User-Idee, umgesetzt):** Der Titel-Button (Name) ist jetzt ein LINK — Klick öffnet ein Fenster direkt über der Leiste: Maschinen zeigen ▶ liefert / 📥 braucht (Senken: „Bekommt + stellt nichts her"), Linien zeigen „X/Min auf DIESER Linie · N Linien teilen den Ausgang (fair je %)" + Bedien-Hinweise, Linien-BAU zeigt Quelle + voraussichtliche Aufteilung. Die Leiste selbst ist wieder SCHLANK (Stats-Chips raus — „zu breit/unübersichtlich")
- 🗂️ **ZONEN-HINTERGRUND WÄHLBAR (User-Wunsch):** Im 🎨-Rahmen-Dialog jetzt „Hintergrund-Füllung zeigen" an/aus — aus = nur gestreifter Rand + farbige Box-Ränder, an = zusätzliche Flächen-Tönung. Beide Richtungen jederzeit änderbar. Plus ✕ Auflösen direkt im Dialog
- 📐 **Abstände poliert:** Hotbar-Buttons kompakter (Icons/Schriftzeiten harmonisiert), Maschinen-Menü (Suchfeld ↔ Item-Raster) mit gleichmäßigeren Abständen
- ✔ Getestet: 23/23 (Bau-Menü ab Klick · Kette bleibt · alle 5 Enden räumen auf · Popover in allen 3 Modi + Position + Toggle · Zone-BG beide Richtungen + Persistenz + Dialog) · alle Suiten: 17/15/8/10/30/26/27/10 · test-e1 unverändert

## [1.9.46] — „Weichen & Zonen-Rahmen" (Batzen 1 zum Beta-2.0-Weg — User: „baue alles an der Leiste")

- 🔀 **WEICHEN — DIE ABZWEIGUNG VON EINEM PUNKT:** Linie per Doppelklick mit Punkten führen (wie gehabt), jetzt aber: Punkt ANKLICKEN → Leiste unten bietet **🔀 Weiche** — die neue Linie startet GENAU an diesem Punkt (blaue ⇄-Marke auf der Karte). Der Ausgang teilt sich fair: **2 Linien = 50/50** (Rechen-Basis fairShareFromSource per-Port, seit 1.9.39 — die Weiche ist UI + Verdrahtung, die Mathe stand schon). Standard-Werte 0/1 wie gewünscht
- 🗑️ **PUNKT LÖSCHEN:** ✖️-Button im Punkt-Menü — Weichen-Verweise rücken mit oder fallen sauber auf den Port-Anschluss zurück (Eltern-Linie löschen: Weichen-Linien überleben, starten dann am Ausgang)
- 📊 **LINIEN-MENÜ SAGT ALLES:** Titel (A → B) · **echte Werte je Linie** („Bretter 15,0/Min je Linie · 🔀 2 Linien teilen diesen Ausgang") · Weiche · Punkt löschen · Farbe · Linie löschen · Fertig · Bedien-Hinweis (Doppelklick = Punkt, Punkt anklicken = Weiche). Statusleiste meldet „🔀 WEICHE SETZEN" während des Zielwählens
- 🗂️ **ZONEN-RAHMEN (2× gewünscht):** Jede Zone bekommt eine **gestreifte Hülle + Label-Chip** (Name + Maschinenzahl) direkt auf der Karte — nur auf der Etage, wo sie liegt. Im Zonen-Fenster: **🎨 Rahmen**-Button → Anzeigename (z. B. „Holz → Kohle") + **Farbe frei wählbar**; Maschinen-Ränder folgen derselben Farbe. Rahmen reist mit: Speichern/Laden, Zonen-Export/Import, localStorage
- 🛗 **LIFT ENDLICH EHRLICH:** „ohne Band-Limit" war falsch (User-Wissen + Messreihe) — jetzt: „Transportiert wie ein Förderband: Tempo = Band-Tempo (steigt mit der Fabrik-Stufe) · 1 Band-Anschluss"
- 🪨 **BRANNTKALK:** „Schnellkalk(pulver)" → **„Branntkalk(pulver)"** an allen 4 Stellen (User-Korrektur, Spiel-Benennung)
- 📥 **LAGER-DURCHLAUF-GESETZ IM TOOL:** Hinweis erklärt die User-Entdeckung: Durchlaufstelle — leitet mit Band-Tempo (60/Min) weiter, speichert nur bei Blockade, als Quelle nie schneller als 1 Band. Plus Tiegel-Hinweis mit Messfakten (1 Stein/9 s · 1 Brecher = EXAKT 3 Tiegel · 1:1 Schleifer)
- ✔ Getestet: 26/26 (Weiche von Punkt bis 50/50-Beweis — beide Tiegel-Linien 100 % bei je 15/Min · Punkt-löschen-Rückfall · Zonen-Rahmen Round-Trip inkl. JSON · alle Texte) · 17/17 Lift · 15/15 Magnet · 30/30 Stufenlos · 26/26 Geisterjäger · 10/10 Zone · 8/8 Hochofen · 10/10 Regression · test-e1 unverändert (4 historische none)

## [1.9.45] — „Geisterjäger & Menü-Klarheit" (User-Funde: Geister-Items · Box klebte im Linien-Modus an der Maus · Wegpunkte blieben beim Verschieben stehen · Punkt-Klick ohne Menü)

- 👻 **GEISTER-MENÜS WEG:** Wechselte man die Etage, blieb die alte Auswahl unsichtbar hängen — das Menü zeigte Maschinen („Sage?", „Motor?"), die auf dieser Etage gar nicht sichtbar waren. Jetzt: Etagenwechsel räumt die Auswahl ab; Aufzugs-Sprung markiert den Partner (das Menü weiß sofort, wo du bist)
- 🖱️ **BOX KLEBT NICHT MEHR AN DER MAUS (Linien-Modus):** Klick auf einen Eingangs-Port markierte die Box UND startete ihren Drag — und der Verbindungs-Abschluss übersprang die Drag-Beendigung → Box folgte dem Cursor. Jetzt: Im Linien-Modus sind Box-Klicks reine Verbindungs-Ziele (kein Markieren, kein Anfassen) + Drag-States werden IMMER zuerst aufgeräumt
- 📍 **WEGPUNKTE WANDERN MIT:** Ganzen Block verschieben = Punkte der inneren Linien wandern mit (vorher blieben sie stehen und man musste sie einzeln nachziehen, um die Fläche frei zu bekommen). Punkte einzeln verschieben geht weiterhin
- 🔗 **PUNKT-KLICK ÖFFNET DAS LINIEN-MENÜ:** Wegpunkt anklicken = Leiste unten zeigt die Linie (🎨 färben / 🗑️ löschen) + Hinweis „Ziehen verschiebt ihn" (vorher: keinerlei Reaktion)
- 📊 **HOTBAR-KURZWERTE — von weitem sehen, was los ist:** Markierte Maschine zeigt direkt in der Leiste „▶ 30 Bretter/Min · 📥 0,9 Stämme/Min" bzw. beim Lager „📥 30 Bretter/Min" — kein Hineinzoomen mehr nötig
- 📥 **LAGER/VERKAUF ENDLICH EHRLICH BESCHRIFTET:** „Stellt her ??? / Braucht ???" ist für Senken Unsinn — jetzt steht da „📥 Bekommt: 30 Bretter/Min — alles, was hier ankommt". Hinweis-Fenster同时 auf 430px verbreitert
- 🏷️ **HEADER: „▲ Menü schließen" GANZ RECHTS** mit Schrift statt Pfeil-Symbol — exakt die Stelle, wo beim Wieder-Anzeigen das ☰ sitzt (kein Suchen mehr)
- 🧪 **Beta-Fenster auf 760px** verbreitert
- ➕ **„Eigene Maschine" ENTFERNT (User-Entscheidung):** Erfundene Maschinen lassen sich nicht ehrlich in Bilanz/Rezept-Logik einbinden — lieber weglassen als falsch rechnen
- ✔ Getestet: 26/26 (connecting-Guard, Drag-Cleanup, Geister-Aufräumen, Partner-Markierung, Wegpunkte-Mitwandern, Punkt-Menü, Beta/Hdr/Sink/Hotbar) · 17/17 Lift · 15/15 Magnet · 30/30 Stufenlos · 10/10 Zone · 8/8 Hochofen · 10/10 Regression · test-e1 unverändert (4 historische none)

## [1.9.44] — „Stufenlos & Flott" (User-Entscheidung: die Größe bestimmt der USER · Marquee-BUG · Lift-Kopie · Zone-Etage · 5–10 s Lösch-Wartezeit · verschwindende Verbindungen)

- 📏 **GRÖẞE STUFENLOS — DU ENTScheidest (100–200 % in 5 %-Schritten):** Die Festwerte A/A+/A++/A+++ sind ersetzt durch ＋/－ wie beim Zoom (Seiten-Menü + Werkzeuge-Hub). Bleibt gespeichert. „Ich bin nicht die Mehrheit" — jeder stellt selbst ein, was seine Augen brauchen
- 📏 **Eingaben bei JEDER Größe nutzbar:** Währungs-Select min. 132×Größe („Kupfermünze" endlich komplett sichtbar) · alle Portal-Zahlenfelder skalieren · Lift-Ziel-Etage größer · CSS-Mindesthöhe 30×Größe für alle Zahlenfelder — die Hoch/Runter-Pfeilchen sind klickbar statt Klickspiel
- 🔵 **MARKIERUNGS-KASTEN BLEIBT AN DER KARTE (Bug):** Beim Ziehen mit Umschalt mischte der Kasten Bildschirm- und Karten-Koordinaten — scrolltest du während des Ziehens (Maschine länger als der Bildschirm), sprang er zur Ecke und markierte falsch. Jetzt: Karten-Koordinaten + **AUTO-SCROLL am Rand** — Ziehen über den Bildschirmrand hinaus zieht die Karte mit
- 🛗 **AUFZUG-KOPIE ENDLICH NÜTZLICH:** Kopieren nimmt die Partner-Hälfte AUTOMATISCH mit (auch wenn nur eine markiert war) · Richtung (Eingang/Ausgang) überlebt die Kopie · Einfügen platziert Ebenen RELATIV — Eingang auf deiner Etage, Ausgang eine höher. Vorher: Kopie plattierte alles auf eine Etage → unbrauchbar, musste gelöscht + neu gesetzt werden (User-Fund)
- 🧩 **ZONE EGAL WO EINFÜGEN:** Zonen-Import platziert RELATIV zur aktuellen Etage — auf E2 gebaut, auf E1 eingefügt = landet auf E1 (vorher: starre Etagen-Nummern aus der Datei)
- ⚡ **LÖSCHEN 5–10 SEKUNDEN → SOFORT:** 20 Boxen löschen rechnete 20× ALLES neu und schrieb 20× in den Speicher. Jetzt: einmal filtern, einmal speichern. Gleiches gilt für das Zeichnen: max. 1× pro Bildschirm-Frame (200 Maschinen scrollen flüssig) und Speichern gebündelt (viele Änderungen = 1 Schreibvorgang)
- 💾 **AUTO-SICHERUNG (User-Fund „einzelne Verbindungen weg nach Neustart"):** Alle 45 s + beim Schließen des Tabs wird automatisch gespeichert, mit 💾-Uhrzeit-Stempel unten rechts. Dazu die WURZEL des Verbindungs-Verlusts geschlossen: Neue Maschinen bekamen manchmal bereits vergebene IDs (z. B. nach dem Laden älterer Dateien) — dann fraß das Löschen einer Maschine die Verbindungen der anderen. Jetzt: ID-Vergabe prüft bei JEDEM Einfügen/Erstellen gegen vorhandene IDs (Kollisionen unmöglich) + Warnung bei doppelten IDs in Dateien
- ✔ Getestet: 30/30 (Stufenlos-Clamps, calc-Breiten, Marquee-Scroll+Auto-Scroll, Lift-Paar+Richtung+relativ, Zone-relativ, Bulk-Löschen 1 Save, Debounce 5→1, nextId 900, Dup-Warnung, Leuchten synchron) · 17/17 Lift · 15/15 Magnet · 10/10 Zonen-Round-Trip · 8/8 Hochofen · 10/10 Regression · test-e1 148 Boxen/416 Linien unverändert (4 historische none wie 1.9.41–43)

## [1.9.43] — „Lesbar ist lesbar" (User-Fund: Hochofen-Texte trotz A+++ unlesbar · Fabrik-Status zu klein · Zonen-Export fraß Portal-Einstellungen)

- 🔥 **HARTCODIERTE KLEIN-SCHRIFTEN KOMPLETT ENTFERNT:** 96 Stellen mit starrem 9–12px (Hochofen „Platz/Hitze"-Zeilen, Portal-Details, Lift, Warnungen …) — ALLE skalieren jetzt mit A/A+/A++/A+++ und sind um ~1–1,5px angehoben. Warum A+++ beim Hochofen nichts brachte: genau diese Texte standen außerhalb des Größen-Systems. Kleinste Stufe ist jetzt 10,5×Größe statt 9px-STARR
- 🎨 **DUNKELGRAU RAUS:** 40 Stellen #6e7681/#484f58/#8b949e („schwarz Bereich"-Töne, u. a. Hochofen-Hinweise, Geräte-Namen im Titel, Lift-Texte) → helle Theme-Farben (Text-Sekundär/Stumm, beide Modi) — die kleinste Schrift trägt jetzt den hellsten Ton
- 📊 **FABRIK-STATUS KLOTZIG:** Fenster-Grundfläche von 56vh auf 64vh Inhalt, Padding 14/16px, Basis-Schrift 14px, Zeilenabstand 1,65 — die Bilanz deiner Fabrik verdient Platz
- 🧩 **ZONEN-EXPORT/IMPORT — PORTAL-EINSTELLUNGEN BLEIBEN (User-Files „test gross"/„test klein" als Beweis):** Der Zonen-Speichern-Pfad warf `portalConfig` weg — Portale kamen ohne Item/Rate/Kosten zurück und lieferten NOTHING (alle Portal-Linien zeigten „keine Verbindung"). Karte speichern war lange sauber, nur Zone nicht. Jetzt: Export schreibt die Konfig mit, Import schreibt sie auf die NEUEN IDs um
- 🛗 **ZONEN-IMPORT: AUFZÜGE BLEIBEN PAARE:** Der Import remappte nie die `liftPartner`-IDs — eingefügte Aufzüge zeigten auf tote IDs. Jetzt werden beide Hälften korrekt verbunden (Partner außerhalb der Zone = sauber getrennt)
- ✔ Getestet: 10/10 Zonen-Round-Trip (Export→JSON→Import: Portal-Konfig auf neuer ID, Lift-Paar verbunden, alte Files ohne Konfig weiter kompatibel) · 8/8 Hochofen-Lesbarkeit (keine 9px-Hartcodes, A-Skalierung drin, Dunkelgrau weg) · 17/17 Lift · 15/15 Magnet · 10/10 Regression · beide User-Files laden fehlerfrei

## [1.9.42] — „Magnet & Lesbarkeit" (User-Kritikpunkte: Linien-Glückssache, kleine Schrift, Portal-Optionen, Menü reagiert zu spät)

- 🧲 **LINIEN-MAGNET:** Beim Ziehen rastet das Linienende automatisch auf den nächsten Eingang im 64px-Radius ein — in BILDSCHIRM-Pixeln, also zoom-unabhängig: Auch bei 60 % Zoom trifft man jeden Port aus der Ferne. Grüner Ring um das Ziel + Vorschau-Linie dockt am Port an
- 🎯 **DREI Wege, eine Line zu machen:** direkt auf den Port · daneben loslassen (Magnet) · irgendwo auf den BOX-KÖRPER (verbindet mit dem nächstgelegenen Eingang). „Fast getroffen" ist vorbei — besonders bei 5+ Anschlüssen
- 💡 **Eingänge leuchten im Linien-Modus auf** — unbenutzte Ports waren bisher auf 35 % Deckkraft gedimmt (fast unsichtbar), ausgerechnet die Ziele, die man anklicken wollte
- 📢 **Menü schaltet BEIM KLICK auf den Anschluss um** (vorher erst, wenn die Line schon stand) und zeigt während des Ziehens LIVE das Ziel: „🎯 ZIEL: Schmelztiegel · Eingang 2 — loslassen = verbinden"
- 🔠 **A+++ (1,75×) als neue größte Stufe** (Hub + Rand-Leiste): A / A+ / A++ / A+++ — für „A++ ist ausgeschöpft"
- 📖 **Kontrast dunkel deutlich heller:** Text primär/sekundär/stumm hochgesetzt — „dunkler Hintergrund und fast dunkle Schrift" behoben, betrifft alle Boxen
- 📖 **Kontrast hell:** Canvas sanft getönt statt blendweiß, Gitter kräftiger, Box-Ränder kräftiger — das Raster ist jetzt in BEIDEN Modi sichtbar
- 🛒 **Kaufprotokoll (Einkaufsportal) lesbar:** Alle Innen-Texte skalieren jetzt mit A/A+/A++/A+++ (vorher starre 9–12px) · Options-Liste **DEUTSCH vorne:** „Baumstämme (Logs)" statt „Logs — Baumstämme" — die Suche nach dem deutschen Wort funktioniert endlich
- 🔍 Kleineres: Port-Ziffern größer (12→13×A), Titel 16,5→17,5, Zeilenabstand in Boxen, Statuszeilen kräftiger, Port-Zähler-Kopf skaliert mit
- ✔ Getestet: 15/15 Magnet-Szenarien (Magnet-Verbindung aus der Ferne, Box-Körper-Drop, Live-Menü, Kette, A+++, DE-first) · 17/17 Lift/Platzierung · 10/10 Regression (Form A==B, Float, Kette, Leiste, Lager, setup1/setup2) · test-e1 mit 148 Boxen/416 Linien als A/B-Beweis gegen 1.9.41 (identische 4 historische none-Linien: 3× Grinder#174→Assembler#175 Testaufbau + leeres Lager#181→Gärtnerei — keine Bewertungs-Änderung durch diese Version)

## [1.9.41] — „Hotfix: Die schwebende Box blockierte sich selbst" (User-Fund: „Lift lässt sich nicht mehr setzen")

- 🚨 **HOTFIX — KEINE MASCHINE LIESS SICH MEHR ABLEGEN:** Der 1.9.40-Bubbling-Schutz blockierte auch den Klick auf die **schwebende Box selbst** — sie haftet mit dem Zeiger INNERHALB ihrer Fläche an der Maus (Offset +150/+60), d.h. im echten Browser trifft der Ablage-Klick sie selbst. Betroffen: **ALLE Maschinen**, nicht nur der Aufzug. Im jsdom-Test war der Klick direkt auf die Canvas gegangen (ohne vorherige Mausbewegung) — deshalb war er grün. Jetzt: schwebende Box + Aufzugs-Partner-Hälfte explizit ausgenommen; fremde UI (Box-Buttons, Dialoge, Menüs) bleibt geschützt
- 🧪 **Test-Lücke geschlossen:** Klicks werden jetzt auf die schwebende Box selbst dispatchet (exakt der echte Browser-Pfad) + Mausbewegung vorher, damit der Ghost real positioniert ist
- ✔ Getestet: 17/17 (Ghost-Klick platziert · Lift+Richtungs-Dialog · fremde Box/Dialog platziert NICHT · Partner-Klick · ESC · Sprung zum Partner · Etagen-Dialog „Hin") + 10/10 Regression (Form A==B, Float, Kette, Linien-Modus-Leiste, Lager, setup1/setup2)

## [1.9.40] — „Dorthin springen springt hin" (User-Bugfund: Lift/E1 — „wo sind meine Items hin?")

- 🛗 **„DORTHIN SPRINGEN" SPRINGT JETZT WIRKLICH HIN:** Der Knopf im Aufzug-Panel wechselte bisher NUR das Etagen-Etikett — ohne zu scrollen. Stand der EG-Inhalt an anderen Karten-Koordinaten als der E1-Blick, sah die Etage danach komplett leer aus („alle Items weg!"). Jetzt: Etage wechseln UND zur Aufzugs-Hälfte scrollen + Meldung, wo sie liegt. (Daten waren nie weg — reines Sichtbarkeits-Problem, im jsdom-Repro bestätigt: 0 verlorene Boxen)
- 🏬 **ETAGEN-DIALOG „HIN ↗" EBENSO:** Springt jetzt zur Mitte der Boxen der Ziel-Etage (vorher gleiches Nur-Etikett-Problem)
- 🖱️ **PLATZIERUNGS-KLICKS NIRGENDS MEHR VERLOREN (Bubbling-Fix):** Jeder Klick auf Box-Buttons/Dialoge/Menüs feuerte bisher heimlich den Platzierungs-Klick der an der Maus hängenden Box mit aus. Jetzt zählen NUR Klicks auf die leere Karte als Platzierung
- 🏗️ **PLATZIERUNG AUF DER ANGESEHENEN ETAGE:** War eine Box noch an der Maus, während du die Etage wechseltest, landete sie unsichtbar auf der ALTEN Etage — jetzt kommt sie auf die Etage, die du gerade ansiehst
- ✔ Getestet: 11/11 Lift-Szenarien (Sprung+Scroll, Bubbling, Etage-der-Platzierung, ESC räumt Lift+Partner) + 10/10 Regression (Form A==B, Float, Kette, Linien-Modus-Leiste, Lager klein, setup1/setup2 komplett grün) · jsdom-Repro des User-Berichts: Datenbestand vollständig erhalten

## [1.9.39] — „Der letzte Aggregations-Wurm" (User-Fund setup1/setup2: 94 % vs. 100 %)

- 🧮 **QUELLSEITE RECHNET JETZT AUCH PER PORT:** fairShareFromSource hat bisher die GESAMT-Leistung einer ×N-Box durch ALLE abgehenden Linien geteilt (Säge ×8 = 240/Min ÷ 17 Linien = 14,1/Min je Linie → Tiegel 94,1 % statt 100 %, ×2-Tiegel 47 %). Jetzt: JE Ausgangsport ist EINE Maschine mit voller Eigen-Rate (30/Min), die nur unter DENEN Linien geteilt wird — kompakt gebaut rechnet damit exakt wie einzeln gebaut (User-Beweis: setup1.json/setup2.json — 94,1 % → 100 %, alle Linien grün). Damit ist der Per-Maschine-Beschluss VOLLSTÄNDIG (Quell- UND Zielseite)
- 📊 **Wichtig fürs Lesen alter Karten:** Ein ×2-Tiegel mit nur 1 Linie zeigt jetzt ehrlich 50 % („1 Eingang ohne Leitung — 1 Maschine steht") — in setup1 war genau so eine Lücke drin: die 2. Leitung zum ×2-Tiegel fehlt, das Tool hatte sie durch die alte Sammel-Rechnung versteckt
- ✔ Getestet: setup1/setup2 (beide jetzt korrekt), 24/24 + 6/6 + 11/11 Regressionen, test e1.json weiterhin komplett grün (29 Linien), Syntax OK

## [1.9.38] — „Das Lager bleibt klein" (User-Bugfund: Senken wucherten)

- 📦 **LAGER/VERKAUF WACHSEN NICHT MEHR MIT LINIEN:** Seit V1.9.5 machten sich Lagerboxen mit jedem ankommenden Band selbst größer (ab der 4. Linie, 10 Linien = 10 Eingänge) — widersprach der V1.9.27-Regel „Senken-Ports folgen NUR der Anzahl". Jetzt: ×1-Lager bleibt 1 Anschluss (alle Linien docken dort an = Merge, wie im Spiel), Verkauf ×8 = 8 Anschlüsse. Alte Karten andocken weiterhin sauber (Linien zur Mitte, kein NaN)
- 🔍 **OFFEN (Users E1 aktuell): Säge→Tiegel orange, Tiegel ~89 %.** Auf test e1.json alles grün; beste Hypothese: 2 Linien auf DEMSELBEN Tiegel-Eingang (doppelte = „zu voll" gelb) + 1 Eingang leer ⇒ 9/10 versorgt = 90 %. Prüfung: ⚠️-Hinweis am ×10-Tiegel sehen / aktuellen Export schicken

## [1.9.37] — „Das Menü weiß Bescheid" (Linien-Modus dauerhaft sichtbar)

- 🔗 **LINIEN-MODUS IN DER MENÜLEISTE:** Beim Verbinden zeigt die untere Leiste jetzt dauerhaft blau hinterlegt: „🔗 LINIEN-MODUS AKTIV — Quelle: Kreissage · Ausgang 1 — weitere Ziele anklicken (Kette bleibt offen) · ESC / Rechtsklick = beenden". Übersteht refreshAll/Verbindungs-Klicke (vorher wurde die Meldung sofort überschrieben — User-Fund), topInfo behält die „✅ Verbunden"-Bestätigung. Beim Beenden springt die Leiste automatisch zurück auf „Etage: …"
- 🔍 **OFFEN: Tiegel-Orange auf Users E1 (aktuelle Karte):** Auf test e1.json und in 6 nachgebauten Säge→Tiegel-Konstellationen (einzeln/×2/×6→×10, halb verbunden, doppelt auf Port) alles grün — Reproduktion braucht den aktuellen Kartenstand (angefragt). Werkzeuge: Fadenkreuz + gestrichelte Linie + Leiste jetzt vollständig.

## [1.9.36] — „Per Maschine" (User-Beschluss umgesetzt: ×N-Box = N einzelne Maschinen · + Ketten-Verbindungsmodus)

- 🧮 **PER-PORT-RECHNUNG (ZIEL-Seite) — kompakt == einzeln, garantiert:**connState & machineSupplyRatio rechnen jetzt JE PORT (= 1 Maschine): Bedarf je Port = 1 Maschine, mehrere Linien auf demselben Port = Merge am Gerät (zählt zusammen), unverbundene Ports = stehende Maschinen. Vorher: 7 Portale einzeln gebaut = alles grün, derselbe Aufbau kompakt gebaut (Portal ×7 → Säge ×6) = gelb „zu viel Ware" — physikalisch identisch, Anzeige falsch (User-Fund, Engine-reproduziert in test93). Nachweis: Form A und Form B rechnen jetzt identisch, am User-File test e1.json geprüft (war GELB → jetzt GRÜN, Zulauf 100 %)
- 🔗 **KETTEN-VERBINDUNGSMODUS (Klick-Klick v2):** Ausgang anklicken → Modus öffnet zuverlässig (Zieh-Schwelle 6 → 10 px: Handzittern macht den Klick nicht mehr zum Drag) → Ziel-Eingang anklicken = Verbindung gebaut — und der Ausgang BLEIBT aktiv: einfach den nächsten Eingang anklicken (1 Säge → 3 Schleifer = 1 + 3 Klicke, fertig). ESC / Rechtsklick / Klick daneben beenden. Fadenkreuz-Cursor + gestrichelte Linie zeigen den aktiven Ausgang, Meldungen erklären jeden Schritt
- 📊 **EHRLICHE MASCHINEN-ZAHLEN:** ×6-Kasten mit 1 perfekter Linie = ehrlich „1 Säge läuft = 17 %" (vorher 100 %). Neue Box-Warnung „⚠️ X Eingänge ohne Leitung — X Maschinen stehen" (User-Wunsch: die NICHT gemachten Linien sehen) + „⚠️ Keine Zuleitung" bei Einzel-Boxen
- 🐛 **DREI RECHEN-BUGS GEFIXT:** (1) Float-Toleranz — exakt ausgeglichene Ketten (60 vs 59,999999…) waren gelb, jetzt grün · (2) Portal-Ehrlichkeits-Gelb zählte den Bedarf je Band mehrfach (6 Bänder = 6× Too much) — jetzt je (Ziel, Port) genau einmal · (3) Portal-Kapazität = Rate × Anzahl (×7-Portal hat 7× Rate, nicht 1× — sonst gelb ohne Grund)
- 📚 Datenstand (Messungen 12.09.): Portal-Pipeline komplett vermessen (Geld 50er-Stapel → 200 = Ware gekauft → wartet im Portal (1) → Lücke (2) → Maschine (3) = 6 Items bis Kauf-Stopp; Preis 200/Stamm bestätigt; 7,55 s für 3 Stämme Direkt-Anschluss ≈ 1 Stapel/s) · Lift = 1 Band, 60/Min, Richtung = Bauchrichtung (7:10-Test) · Säge 30/Min bestätigt (1 Brett je 2 s einzeln, 0,5 % je Brett) · Bänder = Allesfresser/Bus, Verstopfung nur am Maschinen-Eingang, falsches Item stoppt die ganze Maschine · Lager = Durchlauf, speichert erst bei Stau dahinter · Öfen: Brennstoff-Kaskade Stamm (Grundlast) + Kohle-Rücklauf (User-Kraftwerks-Design, 53,3/48 Heat ✓)
- ✔ Getestet (jsdom, 24 + 6 Checks grün): Form A == Form B (beide FULL) · ehrlicher 17 %-Zulauf + Box-Hinweis · Float grün · Portal-Gelb korrekt (ein Portal auf 6 Sägen = GELB knapp, auf 1 Säge = grün) · Merge am Port summiert · Kettenmodus komplett (öffnen → 3 Ziele → ESC, Meldungen, Kette bleibt offen) · 7-px-Zittern öffnet Modus · Infobox unangetastet · Save/Load · keine JS-Fehler

## [1.9.35] — „Die Infobox" (User-Wunsch: eigene Text-Schilder wie im Spiel)

- 📝 **NEU: INFOBOX-GERÄT:** Kategorie 🛗 Logistik & Aufzug → 📝 Infobox — eine Box OHNE Funktion, in die du deinen eigenen Text schreibst (✏️ oben rechts in der Box oder „✏️ Text bearbeiten"). Mehrzeilig erlaubt, Zeilenumbrüche bleiben erhalten, Text wird HTML-escapt. Für Abteilungs-Schilder je Stockwerk („hier ist meine Abteilung Holz") oder Erklärungen vor Maschinen-Gruppen — wie die beschreibbaren Schilder im Spiel (deren genaue Größe dort noch unvermessen: laut User-Erinnerung 2-3 spaltig, 5-6 Felder lang, 1 Feld breit — UNVERIFIZIERT)
- 🚫 **SAUBER GETRENNT:** Gestrichelter Rand als Kennzeichen · KEINE Anschluss-Punkte (lässt sich nicht verbinden) · kein Rezept-Dropdown · keine Anzahl-Buttons (Etagen-Buttons ⬆⬇ bleiben) · zählt NICHT in Bilanz, Status, Roadmap, autoChain oder Etagen-Übersicht
- ✏️ **TEXTER-EDITOR:** eigenes 520-px-Fenster (verschiebbar wie alle Fenster), Textarea mit Platzhalter-Beispiel, 💾 Speichern + Meldung · der ℹ️-/Details-Weg leitet bei Infoboxen automatisch auf den Text-Editor um
- 📖 **HILFE:** neue Sektion „📝 Infoboxen — eigene Schilder" (was sie kann, was sie bewusst NICHT tut)
- 🛗 **DATEN-UPDATE (Messungen 12.09., User):** Aufzug = 1 Band-Anschluss, Richtung = Bauchrichtung, Durchsatz = Band-Kapazität (60/Min) — gemessen per Ende-zu-Ende-Test: 1 Stamm durch 2 Lifte (je 4 Etagen) + 8 Felder Band + Säge + Lager = 7:10 (430 s), Transport ≈ 30 s · Säge 30 Bretter/Min BESTÄTIGT (alle 2 s 1 Brett einzeln aufs Band, Stamm = 0,5 % je Brett, Anzeige sagt 30/Min) — Wettrennen-Rätsel 6:50 = 400 s + Anlauf, 40/Min begraben
- ✔ Getestet (jsdom, 34 Checks grün): Gerätedefinition · Picker · Box ohne Ports/Dropdown/Anzahl-Buttons · gestrichelter Rand · Editor öffnen/speichern/schließen · HTML-Escaping ·ℹ️-Umleitung · Bilanz/Roadmap/autoChain/Etagen-Zählung ignorieren Infobox · Speichern/Laden erhält infoText · Hilfe-Sektion · keine JS-Fehler

## [1.9.34] — „Die Komfort-Sitzung" (User-4-Punkte in einer Sitzung: Klick-Klick, Box entschlackt, Zoom 5 %, Hilfe größer)

- 🔗 **KLICK-KLICK-VERBINDUNGEN (Sammel-#1):** Ausgang anklicken = Verbindung bleibt „angezogen" (Meldung: „jetzt den ZIEL-Eingang anklicken") · Ziel-Klick schließt ab · ESC oder Rechtsklick bricht ab · ZIEHEN funktioniert unverändert daneben. Box-Ziehen wird beim Zielen nicht mehr ausgelöst
- 📉 **BOXEN ENTSCHLACKEERT (Sammel-#2):** Der Hochofen trug den kompletten Forschungs-Text (unlesbar außer bei 10 % Zoom) — jetzt nur noch EINE Kernzeile (Grundverbrauch + „zum Feuern HOLZ" + Verweis). Lange Rezept-Notizen werden in der Box gekürzt (…ℹ️, voller Text als Tooltip und im Fenster)
- 🪟 **NEU: MASCHINEN-FENSTER (Sammel-#2/„Fenster zur Box"):** ℹ️ an jeder Box öffnet jetzt ein 640-px-Fenster (verschiebbar, nicht volle Breite): Kurzinfo + 📐 alle Messwerte & Forschung (Ofen-Physik, Wettrennen, Stufen-Skalierung …) + alle Rezepte mit vollen Notizen + Button „❓ Hilfe-Abschnitt" — springt direkt zum passenden Hilfe-Thema (kein Suchen mehr)
- 🔍 **HILFE GRÖSSER + LABOR-LOGBUCH:** Hilfe-Fenster 920 → min(1100 px, 94vw) · neue Sektion „🔬 Messwerte & Forschung" mit Sprungankern (Öfen/Säge/Tiegel/Rennen) · 🐛 Bonus-Fund: alte „freiwillige Spende"-Sektion ENTFERNT (verstieß gegen die eigene Non-Commercial-Regel!) — jetzt nur noch „kauf dir das Spiel"
- 🔎 **ZOOM 5 % (Sammel-#4):** Zoom-Schritte 10 % → 5 % · Min-Zoom 10 % → 5 % — große Setups passen ganz ins Bild
- ✔ Getestet (jsdom): Klick-Klick (offen/Ziel/ESC/Rechtsklick, je mit Meldung) · Drag unverändert · Zoom 0.05-Step & Clamp · Ofen-Box ohne Stufe-12-Block · Maschinen-Fenster komplett (640 px, Messwerte, Rezepte, Hilfe-Button) · Hilfe 1100px + Anker + ohne Spendenbitte · Notiz gekürzt mit Tooltip · Vollkette 30,0

## [1.9.33] — „Ornate Bird" (User-Fund: zweiter engl. Name · Gemini-Kreuzcheck bestätigt unsere Zulieferer)

- 🐦 **NAME PRÄZISIERT:** „Aufziehvogel (Ornate Bird)" — Community-Namen Ornate Bird / Clockwork Bird sind Synonyme; die Codex-Website hat zu beiden weder Item-Seite noch Rezept (geprüft)
- ✅ **KREUZCHECK GEMINI GEGEN UNSERE DATEN:** Stahl-Weg = exakt unser Athanor-Rezept (Eisenbarren + Kokspulver) ✓ · Malachit-Weg B = exakt unser Athanor-Rezept (2 Unreines Kupferpulver + 6 Tonpulver → Malachit + Rohkristall) ✓ · Malachit-Weg A (Flachs + Enzianpulver) nur Community — fehlt in unseren Daten, als prüfen markiert, NICHT eingebaut
- 📝 **Vogel-Notiz komplettiert:** Flug braucht VERWANDLUNGSTRANK konsumieren + Vogel in den Transmuter (der Verwandlungstrank steht übrigens selbst auf der Verkaufsliste!) · Rezept-Struktur jetzt „2× community-bestätigt", Mengen weiter ehrlich PLATZHALTER
- ✔ Getestet (jsdom): Name + Note-Inhalte · Version 1.9.33

## [1.9.32] — „42 von 42" (die letzten 2 Verkaufs-Items: Lebenstrank + Aufziehvogel — mit ehrlichen Platzhaltern)

- 📋 **ITEM-AUDIT KOMPLETT:** Die 2 fehlenden Items aus der Spiel-Verkaufsliste sind drin — **Lebenstrank (Life Potion)** und **Aufziehvogel (Clockwork Bird)**. Damit hat JEDES der 42 verkaufbaren Items der User-Liste einen Produzenten im Codex (jsdom-Beweis: 42/42 ✓)
- ⚠️ **EHRLICHE PLATZHALTER statt erfundener Zahlen:** Beide Rezepte nach Community-Recherche strukturiert — Lebenstrank: Brandkalkpulver + Beeren-Pressung (Fruchtwein) + Glas (Mixer? — Mengen/Zeit PLATZHALTER je 1/60s) · Aufziehvogel: Stahlbarren + Stahlzahnräder + Malachit im Fortgeschrittenen Montierer (Mengen PLATZHALTER). Beide Noten tragen großes „UNVERIFIZIERT — bitte im Spiel ablesen und melden". Kein Wiki kennt diese Rezepte
- 🐦 **BONUS-INFO (Recherche):** Der Aufziehvogel ist vor allem ein TRANSMUTER-Item — er verwandelt den Spieler in den Vogel zum Überfliegen der Fabrik (Leertaste hoch · C runter · G zurück). Flug-Notiz im Rezept
- ✔ Getestet (jsdom): beide Items + Namen · Rezept-Zutaten + UNVERIFIZIERT-Flag · Transmuter-Notiz · 42/42-Abfang · Vollkette 30,0

## [1.9.31] — „Der große Abgleich" (User lieferte die verkaufbare-Items-Liste aus dem Spiel: 42 Items geprüft)

- 📋 **ITEM-AUDIT gegen die SPIEL-LISTE (42 Einträge):** 40 von 42 im Codex vorhanden MIT Produzent ✓ · **2 FEHLEN KOMPLETT:** Leinentrank + Aufziehvogel (kein Wiki, keine Website kennt sie — Rezept-Rückfrage an den User läuft) · Lapislazuli-Rätsel gelöst: verkaufbares Item, gebaut vom Fortgeschrittenen Athanor [Lapis Lazuli + Crystal] — der Codex kannte es bereits
- 🏷️ **5 SPIEL-NAMEN KORRIGIERT (Rezept- + Item-Namen, 14 Stellen):** Kleines Holzrad → **Kleines Zahnrad** · Holzrolle → **Holzflaschenzug** · Düftseife → **Parfumseife** (+ Düftseifenpulver → Parfumseifenpulver) · Mondseife → **Mondscheinseife** · Alheilmittel → **Allheilmittel** (auch in Ofen-Badge + Weltbaum-Notiz)
- ✔ Getestet (jsdom): alle 5 neuen Namen aktiv · keine alten Namen mehr im Datenbestand · Vollkette 30,0

## [1.9.30] — „Der Dreifach-Fix" (User-Funde: verschobenes Lager · Lift-Kohle unsichtbar für Ofen · schwarze Info-Felder)

- 🐛 **LAGER WURDE VERSCHOBEN STATT NEU GEBAUT (Doppel-Bau-Bug):** Wählte man im Menü eine Maschine, während noch eine an der Maus hing (z. B. nach Menü-Klick statt Karten-Klick), blieben die alten Bewegungs-Handler aktiv — die ALTE Box wurde mit der Maus mitgeschleppt („er nimmt sich das letzte Lager, darunter ist ein neues"). Fix: Jede neue Auswahl räumt die wartende Platzierung sauber ab (alle Handler + Box). Auch der ESC-Handler leakte bisher nach dem Platzieren
- 🛗 **OFEN SAH PER AUFWUG GELIEFERTE KOHLE NICHT:** Die Brennstoff-Rechnung las nur das Roh-Rezept der Quelle — ein Aufzug hat aber kein Rezept, also kam „nichts" am Ofen an, obwohl der Lift Ware meldete. Fix: Beide Ofen-Rechnungen (Balance + Panel) nutzen jetzt bei Aufzügen die echte Ankunfts-Aggregation. Getestet: Tiegel EG → 🛗 → Ofen E2 = 10,0 Heat/Sek sichtbar ✓ · Portal-Brennstoff unverändert 33,3 ✓
- 🎨 **HELL-MODUS: SCHWARZE INFO-FELD WEG:** 31 dunkle Hardcode-Hintergründe + 20 dunkle Ränder (Einkaufsportal-, Ofen- und alle Geräte-Panels, Eingaben, Dropdowns) auf Theme-Variablen umgestellt — Hell bleibt hell, Dunkel bleibt dunkel
- ✔ Getestet (jsdom): Doppel-Auswahl räumt ab (nur 1 wartende Box, Klick platziert) · Lift-Kohle 10,0 · Portal 33,3 · Vollkette 30,0

## [1.9.29] — „Der EG-Tiegel" (User-Fund: Ofen-Panel-Knopf war der einzige Platzierweg OHNE Etage)

- 🐛 **TIEGEL VOM OFEN-MENÜ LANDETEN IM EG (endlich die Wurzel!):** Der „+ Hinzufügen"-Knopf im Ofen-Panel (addFurnaceSlot) war der EINZIGE Platzierweg im ganzen Tool, der `floor` nicht setzte — der Tiegel erschien immer im EG, egal ob der Ofen auf E1 oder E10 stand (User testete E1 und E10). Fix: Der Tiegel übernimmt die Etage seines Ofens. Grund, warum alle Tests ihn verpassten: jeder normale Bauweg (Leiste, Codex, Stempel, Drag) setzt die Etage korrekt
- ✔ Getestet (jsdom): Ofen auf E10 + 2 Panel-Tiegel → beide E10 · Ofen auf E1 + Panel-Tiegel → E1 · Tiegel im Ofen-Panel sichtbar · Vollkette 30,0

## [1.9.28] — „Laden mit Anstand" (User: „bin auf E1 und Zentrum kommt immer noch im EG")

- 📂 **KARTE LADEN FRAGT JETZT:** „Datei…" oder Ordner-Liste bei nicht-leerer Karte: **🔄 Ersetzen** (alles weg, wie früher) oder **📋 Auf Etage E1 einfügen** (User steht auf E1 → Karte hängt an der Maus, Ebenen landen RELATIV, Klick platziert, mehrfach stempelbar). Vorher ersetzte „Datei…" still alles — die geladene Karte erschien so wie gespeichert (EG), egal wo man stand
- 🛒 **PORTAL-EINSTELLUNGEN WANDERN MIT:** Kopieren/Stempeln (Auswahl, Zone, Karten-Import) nimmt jetzt die Portal-Konfiguration (Artikel, Rate, Kosten) mit — vorher verloren Portale beim Kopieren ihre Einstellung. Mit der echten User-Karte getestet: 12/12 Portale behalten ihre Konfig
- ✔ Getestet (jsdom, echte Zentrum.json): Dialog bietet „Auf Etage E1 einfügen" · 55/55 Boxen landen auf E1 · 12/12 Portal-Konfigs · Ersetzen-Pfad (55 Boxen, zurück auf EG) · Vollkette 30,0

## [1.9.27] — „Der Etagen-Stempel" (User-Funde: Zone/Tiegel landeten im EG · Zentrum-Salat · Verkaufsraum-Slots)

- 🐛 **ZONEN/VORLAGEN-STEMPEL LANDETEN IM EG (Wurzel von 3 Meldungen!):** Stempel-Modus „keep" behielt die ORIGINALEtagen — auf E1 gestempelt fiel die Zone unsichtbar zurück ins EG, exakt auf das Original-Zentrum → „alle Boxen übereinander, alles wieder gerade rücken". Fix: Stempel landet JETZT auf der aktuellen Etage, Ebenen RELATIV (EG-Inhalt auf E1 gestempelt = komplett E1 · Mehr-Etagen-Zonen behalten ihre Struktur · Lift-Paare + Ofen-Belegungen werden mitversetzt)
- ⚠️ **NEUE KOLLISIONS-WARNUNG:** Liegt eine gestempelte Maschine direkt auf einer vorhandenen, warnt das Tool laut — nie wieder stiller Salat
- 🏪 **VERKAUFSRAUM/LAGER: Slot-Selbstvermehrung ENTFERNT (User-Wunsch zurückgenommen):** Slots folgen NUR der Anzahl (×1 = 1 Slot, ×10 = 10) — wie bei allen Maschinen. Mehrere Linien dürfen weiter auf denselben Eingang laufen (Merge bleibt)
- 🩹 **Rettung fürs Zentrum:** Das Original Zentrum.json ist unbeschädigt — im Tool einfach 📂 Setup laden → Datei… → Zentrum.json (der Salat liegt nur im Browser-Speicher)
- ✔ Getestet (jsdom): Zone mit EG+E1-Inhalt auf E2 gestempelt → Ebenen 2+3, Lift-Paar verknüpft · Verkauf ×1 mit 3 Linien = 1 Port · Kollisions-Warnung · Vollkette 30,0

## [1.9.26] — „Letzter Bonus, drei Gesetze" (Sandbox Stufe 12: Produktion ×4 · Feuer ÷3 · Anzeige lügt)

- 📈 **STUFE 12 = PRODUKTION ×4:** Säge 120 Bretter/Min (0,5 Sek/Stück · 0,6 Stämme/Min · Stamm bleibt 200 Bretter) · Tiegel 60/Min (1 Sek/Stück · Puffer wächst 15→60). Kurve: L0 ×1 · L2 ×1,25 · L12 ×4 — dazwischen unklar (≈ +12 %/Stufe), Messpunkte genügen für 2 Kalibrierungen
- 🔥 **FEUER WIRD BILLIGER (These „Brennstoff konstant" BEGRABEN):** Rest-Stamm-Analyse Stufe 12: Steinofen 22 % Rest bei 200 Kohle → 1.560 P = **7,8 P je Kohle** (Stufe 0: 20,2) · Hochofen 10 % Rest → **9,0 P je Kohle** (Stufe 0: 32,8) — der Fuel-Effizienz-Skill drückt den Brennstoff-Preis je Stück auf ~⅓. Upgrades machen ALSO schneller UND sparsamer
- ❓ **ANZEIGE-RÄTSEL (offen):** Ofen-Anzeige Stufe 12: 17/20 P/Sek — real verbrannt nur ~7,8/9,0 P/Sek (aus Rest-Stamm rückgerechnet, die Anzeige IST also nicht der Verbrauch!). Klär-Test definiert: Ofen Stufe 12 ohne Tiegel (Grundverbrauch auf L12?) + mit 2 Tiegeln
- ✔ Getestet (jsdom): Stufe-12-Block komplett im Ofen-Badge (×4 · Feuer ÷3 · Anzeige-Rätsel · Klär-Tests) · Säge-/Tiegel-Noten · Vollkette 30,0

## [1.9.25] — „Bonus: Stufe 2" (Sandbox: alle Upgrades L2 = +25 % Produktion)

- 📈 **STUFE-2-MESSUNG (alle Upgrades auf 2, Sandbox):** Säge 37,5 Bretter/Min (1 Brett je 1,6 Sek · 0,19 Stämme/Min) · Tiegel 18,8/Min (3,2 Sek/Stück) — exakt **+25 %** gegenüber Stufe 0 · Ofen-Anzeigen steigen auf **Steinofen 6 · Hochofen 9 P/Sek**
- 🤔 **DOPPEL-DEUTUNG (ehrlich offen):** Steigen 6/9 wegen des Grundverbrauchs — oder ist das +1 der (skalierte) Tiegel-Hunger? Beide Lesarten passen zu den Zahlen. Sauberer Test definiert: **Ofen Stufe 2 OHNE Tiegel → 6/9 = Grundverbrauch steigt · 5/8 = Tiegel frisst 1 P/Sek auf Stufe 2**
- 💡 **SYSTEM-VERMUTUNG:** Upgrades skalieren Produktion UND Wärme gleichermaßen → Brennstoff je Stück bliebe konstant (99 Kohle je Stamm auf jeder Stufe) — elegant, aber unbewiesen
- ✔ Getestet (jsdom): Stufe-2-Block im Ofen-Badge · Säge-/Tiegel-Noten · Vollkette 30,0

## [1.9.24] — „Ofen-Physik entdeckt" (Sandbox-Messung: Öfen haben GRUNDVERBRAUCH — Steinofen 5, Hochofen 8 P/Sek)

- 🔥 **NEU ENTDECKT — OFEN-GRUNDVERBRAUCH (User-Sandbox, 0 Upgrades):** Steinofen frisst **5 P/Sek**, Hochofen **8 P/Sek** — auch ohne einzige Maschine drauf! Beweis: 1 Stamm (2000 P) = 400 Sek Feuer → 99 Kohle am Steinofen (99×4s=396s ✓) · 250 Sek → 61 Kohle am Hochofen (61×4s=244s ✓). Die Zahlen gehen exakt auf. Kein Wiki kennt diesen Wert — jetzt im Ofen-Badge mit Feuerzeit-Rechnung
- 🪚 **SÄGE ENDGÜLTIG BESTÄTIGT:** 1 Stamm → 200 Bretter in 400 Sek = 30/Min (Anzeige: 0,15 Stämme/Min · 0,5% je Vorgang) · läuft nur durch mit Abnehmer. Die 40/Min-Hypothese aus dem Wettrennen ist damit TOT — das 5:00-Ergebnis von 2 Superschl. war vermutlich eine Schätzung (sägemäßig wären ~6:50 nötig). Ehrlich korrigiert
- ⚱️ **Tiegel-Zuschlag UNKLAR (ehrlich):** Bei 1 Tiegel in der Sandbox KEIN messbarer Extra-Verbrauch — der alte Wiki-Wert „4/Sek je Tiegel" wackelt. Entscheidender Test definiert: **Hochofen + 12 Tiegel, Ofen-Anzeige ablesen → (Wert − 8) ÷ 12 = echter Tiegel-Hunger.** Spiel-Anzeige-Semantik geklärt: „15/15 in 4 Sek" = 15er-Batch, 1 Stück je 4 Sek
- ❌ **Test C (Trank-Brennwerte) nicht möglich:** Sandbox gibt keine Flüssigkeiten — Test verschoben, bis sie hergestellt sind
- ✔ Getestet (jsdom): Ofen-Badge mit Grundverbrauch/Feuerzeit/Test-Anleitung · Säge-Note · Vollkette 30,0

## [1.9.23] — „Tiegel-Examen" (User-Test: Stapeltiegel = gleich schnell, gleiche Ausgabe)

- ⚱️ **STAPELTIEGEL IM SPIEL GETESTET (User):** Geschwindigkeit und Ausgabe sind IDENTISCH mit dem Schmelztiegel — bestätigt die zwei echten Unterschiede: Platzbedarf und Stapelbarkeit. Im ℹ️-Text verewigt
- ⚠️ **EHRLICHKEIT ÜBER EIGENE DATEN:** Die Angabe „6 statt 4 Heat/Sek Hunger" ist Wiki-Erbe und bleibt UNVERIFIZIERT — als solche markiert. Wichtig: Heat-Hunger ändert nicht das Tempo (deshalb sah der User keinen Unterschied), sondern nur den Brennstoff-Verbrauch. Entscheidender Test definiert: 1 Stamm + 1 Tiegel + 200 Bretter → Kohle zählen, wenn das Feuer erlischt (~125 = 4/Sek · ~83 = 6/Sek)
- 📏 **Nebenbefund (schön):** 2 Sägen ↔ 4 Tiegel = exakt 60 Bretter/Min — der Anschluss-Rechner des Tools stimmt mit dem Spielaufbau überein
- ✔ Getestet: Syntax/Build grün · Text im Tool (grep-bewiesen)

## [1.9.22] — „Der Brennstoff-König" (User-Sandbox-Messung: Alheilmittel = 320.000 Heat)

- 👑 **ALHEILMITTEL = 320.000 HEAT — Spiel-bestätigt (User-Sandbox):** Der stärkste Brennstoff im Spiel, **160× Holz**! 1 Stück heizt einen vollen Ofen (52/Sek) ~100 Minuten. In ALLE 4 Brennstoff-Tabellen eingetragen (Portal, Balance, Ofen-Panel, Jam-Check) — der Planer rechnet jetzt damit. Es ist zugleich der beste Dünger (200.000V): Herstellung braucht Weltenbaum-Blätter (3 Fruchtbarer Katalysator + 3 Wurftrank + 12 Aqua Vitae) — Endgame-König für Feuer UND Feld
- 🏷️ **Name laut Spiel:** „Alheilmittel" statt „Panacea-Trank" (User-Fund) — Item-Name und Rezept-Name korrigiert
- ✔ Getestet (jsdom): Alheilmittel-Portal (1/Min) am Ofen → 5333.3 Heat/Sek, ✅ Reicht · Vollkette 30,0

## [1.9.21] — „Das Warum" (5-Minuten-Rätsel gelöst-Bei-Bestätigung · README erklärt den Zweck)

- 🔎 **SÄGE-HYPOTHESE (alle 3 Rennen mathematisch konsistent):** 1 Super 10:00 (÷20) · 3 kleine 6:50 (÷30) · 2 Super 5:00 (÷40) passen NUR zusammen, wenn die Säge 40 Bretter/Min liefert (200 in 300 Sek) — unser Datenblatt sagt 30/Min (400 Sek, Spiel v0.4.x). Bestätigung an der Säge-Rezeptanzeige ausstehend — DANACH wird der Datensatz korrigiert (kein Ship ohne Verifikation)
- 🔬 **OFFENE FORSCHUNG, Brennstoffe:** User-Sandbox-Fund: Items mit ~20.000 Heat (10× Holz!) — vermutlich Trank/Gemisch. Name + Wert werden nachgemessen, FUEL_HEAT-Tabelle wartet auf den Eintrag. Hinweis im Hochofen-ℹ️-Text
- 📖 **README „Warum dieses Tool?":** Die Motivation des Users festgehalten — das Spiel zeigt keine Planungs-Infos (nur „20/20 in 6 Sek" pro Anschluss), Wikis rechnen keine Ketten. Genau diese Lücke schließt der Planer
- ✔ Getestet: Syntax/Build · Vollkette 30,0 · Hypothese+Forschungstexte im Tool

## [1.9.20] — „Schuld getilgt" (Superschl.-Linie: 10:00 — Vorhersage exakt)

- 🏁 **WETTRENNEN KOMPLETT (alle 3 Setups im Spiel gemessen):** 1 Säge+3 kleine Schleifer = 6:50 · 1 Säge+1 Verbesserte = **10:00 (Vorhersage: ~10:00 — exakt)** · 1 Säge+2 Verbesserte = **~5:00 (User-Messung — schnellste Lösung)**. Komplette Tabelle jetzt im ℹ️-Text der Verbesserten Schleifmaschine
- 🕵️ **OFFENES MODELL-PUZZEL (ehrlich markiert):** 2 Verbesserte hungern 40/Min, aber die Säge liefert nur 30/Min → Modell erwartet 6:40, gemessen ~5:00. Mögliche Erklärungen: Fabrik-Effizienz-Skill > 100 % (Tool kann das einstellen) · Rest-Puffer vom vorherigen Rennen · grobe Messung — Klärung mit dem User läuft
- ✔ Getestet: Syntax/Build grün · Vollkette unverändert

## [1.9.19] — „Das Wettrennen" (Spiel-Messung bestätigt Vorhersage: 6:50 vs. 6:40)

- 🏁 **WETTRENNEN IM SPIEL DURCHGEFÜHRT (User):** 1 Säge + 3 kleine Schleifer + Lager vs. 1 Säge + Verbesserte Schleifmaschine + Lager, je 1 Baumstamm. ERGEBNIS: **3 kleine Schleifer = 200 Räder in 6:50 Min** (Vorhersage 6:40 — 2,5 % Abweichung, Anlaufzeit) · Superschleifer deutlich langsamer mit sichtbarem **Bretter-Stau** (braucht 20/Min, Säge liefert 30/Min). Beide Resultate jetzt als Lehrstück in den ℹ️-Texten von Schleifer („spiel-bestätigt") und Verbesserter Schleifmaschine („Durchsatz schlägt Einzeltempo")
- 🏷️ **Item-Name laut Spiel:** „Großes **Zahnrad**" statt „Großes Holzrad" — korrigiert (User-Fund)
- ✔ Getestet (jsdom): matName zeigt „Großes Zahnrad (Large Wooden Gear)" · Vollkette 30,0 + Demo-Kette zeigt Zahnrad

## [1.9.18] — „Verbesserte Schleifmaschine" (User-Messung: Name + Größe + 2 Rezepte)

- 🏷️ **NAME LAUT SPIEL KORRIGIERT:** „Verstärkter Schleifer" war erfunden — das Spiel nennt die Maschine **„Verbesserte Schleifmaschine"** (User-Fund). Überall korrigiert
- 📐 **Erste Feldmessung:** Die Maschine ist **3 Felder lang** (im Spiel nachgemessen) — im ℹ️-Text der Maschine verewigt, Grundlage für das spätere echte Größen-Modell
- 🧪 **Rezept-Messungen (Sep 2026):** Stein→Sand 10/10 in 6 Sek — **Datenblatt stimmt exakt** ✓ · Holz 20/20 in 3 Sek — noch unklar, welcher Output (Nachfrage beim User läuft; Codex kennt kein Holz-Rezept für die Schleifmaschine — mögliche Datenlücke!)
- ✔ Getestet (jsdom): neuer Name in Box + alter Name komplett weg · platzierbar · Vollkette 30,0

## [1.9.17] — „Die fehlende Maschine" (User-Fund: Enhanced Grinder war NICHT platzierbar!)

- 🐛 **ZWEI Maschinen fehlten in der Leiste:** Der **Enhanced Grinder** (User-Fund! — hatte alle 14 Rezepte im Codex, war aber in KEINER Leisten-Kategorie eingetragen → im Tool nicht platzierbar) und der **Knowledge Altar / Wissensaltar** (fehlt seit jeher — Community: Relikte gehören in den Altar). Beide jetzt drin: Verarbeitung bzw. Relikte
- 🧪 **Neuer Dauertest — Geräte-Vollständigkeit:** „Geräte OHNE Kategorie" muss KEINE liefern. Der Test hat sofort geliefert: Der erste Fix-Versuch war selbst kaputt (ein Kommentar verschlang die Refiner/Processor/Assembler-Zeile) — erkannt und repariert, ehe es je eine Version wurde
- 🌳 **Dünger-Nährwerte OFFIZIELL (Codex 0.5.4471):** Basis 144V/12Vs · Fortgeschritten 720V/144Vs · Wachstums-Trank 6480V/2160Vs · **Fruchtbarer Katalysator 24.000V/6000Vs** (Blog sagte 3.360 — Codex gewinnt) · Panazee 200.000V/20000Vs → Weltbaum 6M ≈ 41.667 Basis- oder nur 250 Katalysator-Dünger
- ✔ Getestet (jsdom): Tab „Verarbeitung" zeigt 6 Geräte inkl. Enhanced Grinder · Geräte ohne Kategorie: KEINE · Weltbaum-Note · Vollkette 30,0

## [1.9.16] — „Der Weltbaum-Täuschung" (Sol-Ketten-Rechnung entlarvte falsches Nutrient-Modell)

- 🌳 **NUTRIENT IST KEIN ITEM — CODEX KORRIGIERT:** Die Rückwärts-Rechnung der kompletten Sol-Kette zeigte „35 Mio Nutrient/Min — KEIN REZEPT IM CODEX!". Community-Recherche: Nutrient ist der NÄHRWERT von DÜNGER (Basis-Dünger 144 · Fruchtbarer Katalysator 3.360 je Stück), der Weltbaum wächst in Stufen (Setzling 6M · klein 5M · Max 3M ≈ zusammen 14M, Setzling frisst 10.000/Sek). Rezeptfix: Weltbaum hat keinen Band-Eingang mehr, die echte Mechanik steht im Rezept-Text
- 🧮 **Sol-Ketten-Rechnung (ehrlich):** Sol ist das END-ITEM (verbraucht NIEMAND) · Durchgehende Produktion 1 Sol/5 Min = **~104.000 Maschinen** (Haupttreiber: die Seifen-/Leinöl-Ketten für Katalysatoren — 1,08 Mio Leinöl/Min!) → Niemand baut das · **Einmal-Craft von Sol:** ~60–100 Maschinen-TYPEN + sehr viel Zeit + ~14M Nährwert (≈ 4.200 Katalysatoren oder 97.000 Basis-Dünger)
- ✔ Getestet (jsdom): Weltbaum ohne Band-Eingang · Note mit Stufen+Werten · Vollkette 30,0

## [1.9.15] — „Linien andocken richtig" (User-Funde: Ports vs. Linien, Status-Senken, Pfeiltasten, Zaun)

- 🐛 **LINIEN DOCKTEN AN FALSCHEN PUNKTEN AN (der große Fund):** Die Port-ANZEIGE und das Linien-ANDOCKEN rechneten getrennt — Senken (Verkauf/Lager) wuchsen mit ankommenden Linien (Anzeige), aber die Linien rechneten weiter mit der alten Stückzahl → Verbindungen landeten „eigentlich gar nicht" auf den Punkten. Jetzt EINE gemeinsame Funktion portCountOf() für beide — nie wieder auseinander
- 📊 **Fabrik-Status: Verkaufsraum & Lager endlich drin** (User-Wunsch): eigene Zeile je Senken-Typ — „🏪 Verkaufsraum: 2× — 45.3 Stück/Min (Bretter 30.0/Min …)" · „📦 Lager: 4× — …" · auch 🗑️ Mülltonne
- ⌨️ **Karte bewegen ohne Kopie zu verlieren — jetzt auch per PFEILTASTE:** Im Stempel-Modus bewegen ↑↓←→ die Karte (Shift = 4× schneller), die Kopie bleibt an der Maus. (Ursache des alten Problems: Klicks im Stempel-Modus nahmen der Karte den Tastatur-Fokus — Maus war mit der Kopie belegt, Tasten tot)
- 🗺️ **Fabrikzaun ehrlich eng:** Der Rand hatte +2000 px Reserve eingebaut — er wich beim Bauen immer weiter aus, man konnte scheinbar „über das Ende bauen" und die Scrollbalken meinten man sei „am Anfang". Jetzt: Zaun nur +150 px hinter dem letzten Bauwerk — er dehnt sich nur minimal aus, wächst aber weiter mit
- ✔ Getestet (jsdom): Verkauf count=1 + 3 Linien = 3 Ports in Anzeige UND portCountOf · Status zeigt Verkaufsraum/Lager mit Stück/Min · Pfeile bewegen Karte bei voller Kopie · Zaun 5650 statt 7500 · Vollkette 30,0

## [1.9.14] — „Ehrlicher Messstand" (User-Wunsch: transparent sagen, was verifiziert ist — und was nicht)

- 📐 **Messstand-Block im Beta-Dialog (🧪):** Schwarz auf weiß, welche Werte im SPIEL nachgemessen sind (Ofen-Hitze 4/Sek · Brennwerte Holz 2000/Holzkohle 40/Brett 20 · Band 1 Stück/Sek · Plätze 4/2 — an Setups bis ~55 Maschinen) — und was offen bleibt: Riesen-Fabriken (150+ Maschinen) sind im Spiel NICHT nachgebaut, dort können Zahlen abweichen. Spiel (Early Access) und Wiki stimmen nicht immer überein — Spielerberichte sind Gold
- 🔎 **Community-Daten eingeholt (Online-Recherche):** HowLongToBeat ~154–186 h Spielzeit fürs Durchspielen · Guide „First 100 Days Roadmap" (Tag 1–3 Basisproduktion, Tag 8–15 Portale, Tag 31–100 Optimierung) · Steam-Forum bestätigt das Portal-Geld-Problem (Portale nehmen unbegrenzt Münzen an, Kauf stoppt ohne Geld) — unser ehrliches Portal-Modell ist damit community-bestätigt
- ✔ Getestet (jsdom): Beta-Dialog zeigt Messstand + 150+-Hinweis + Bericht-Aufruf · Vollkette 30,0

## [1.9.13] — „Ofen-Puffer korrigiert" (User-Messung: Stämme WERDEN gespeichert — 3 Stämme = 6000 ≈ 2 Min)

- 📐 **BADGE KORRIGIERT (ehrlich bleibt ehrlich):** Die 1.9.12-Aussage „Ofen hat keinen Brennstoff-Puffer" war zu schwarz-weiß — der User hat im Spiel gemessen: gelieferte Stämme werden als Brennwert GESPEICHERT (3 Stämme = 6000 ≈ 2 Minuten bei 52/Sek). Der Puffer überbrückt Liefer-Lücken (z. B. Geld-Lücken am Portal), ersetzt aber keine Dauerlieferung — im Mittel müssen ≥ Verbrauch ankommen. Faustregel neu im Badge: **~1,6 Stämme/Min je vollem Ofen**
- 📐 **Zweite Messung:** Brennstoff-Plätze — **Hochofen 4, Steinofen 2** (mehr nimmt der Ofen nicht auf, Überfluss staut aufs Band). 4 Stämme = 8000 Heat ≈ 2,7 Min Puffer; Slots mit Kohle zu füllen ist Verschwendung (4 Kohle = 160 Heat ≈ 3 Sek)
- ✔ Getestet (jsdom): Badge korrigiert (GESPEICHERT + 1,6-Regel, alte Aussage entfernt) · Vollkette 30,0

## [1.9.12] — „Spiel-bestätigt" (User-Messung im echten Spiel: Modell trifft auf 52/Sek genau zu)

- 📐 **MESS-BADGE IM OFEN-PANEL:** Der User hat im Spiel nachgemessen — Ofen zeigt selbst 52 Hitze/Sek bei 13 Maschinen (= exakt 4/Sek je Maschine wie im Editor), Brennwerte abgelesen: Holz 2000 · Holzkohle 40 · Brett 20 (identisch mit unserer Tabelle), Band = 1 Stück/Sek. Diese verifizierten Werte stehen jetzt direkt am Ofen: „📐 Im Spiel nachgemessen (Sep 2026) … EIN Kohle-Band (max 40 Hitze/Sek) kann einen vollen Ofen (48+) NIEMALS heizen — zum Feuern: HOLZ · Ofen hat keinen Brennstoff-Puffer (Staubsauger): Hitze muss laufend ankommen"
- 🔬 **Bestätigt durch die Messung:** 2 Tiegel-Boxen (40 Hitze/Sek) zu wenig für vollen Ofen ✓ · 4 Kohle-Linien à 15/min = 40/Sek zu wenig ✓ · Stamm-Feuerung deckt alles ✓ — das Wärme-Modell bleibt unverändert, es stimmt
- ✔ Getestet (jsdom): Mess-Badge sichtbar · Tiegel-Rechnung unverändert korrekt (20.0) · Vollkette 30,0

## [1.9.11] — „Die ehrliche Hitze" (Gemini-Faktencheck legte einen echten Bug frei)

- 🐛 **HITZE ZÄHLTE DOPPELTE LINIEN DOPPELT:** Zwei Linien vom selben Tiegel an einen Ofen wurden je VOLL gezählt (z. B. Tiegel ×2 mit beiden Ausgängen am Ofen = 40 Heat/s angezeigt, real 20 — die Ware teilt sich auf die Bänder!). Das Material-Modell rechnet längst fair (fairShare), die Hitze-Rechnung nicht. Jetzt: beide Hitze-Rechnungen (Balance + Ofen-Panel) nutzen fairShare — ehrliche Zahlen
- 📊 **Auswirkung auf der User-Karte (Zentrum.json):** Ofen 4: kommt 53.3 statt 73.3 (braucht 48 → ✅ reicht, aber knapp!) · Ofen 35: kommt **20.0 statt 40.0** (braucht 48 → ⚠️ deutlich zu wenig — vorher schöngerechnet)
- 🔎 **Faktencheck externer Diagnosen (Anlass):** „Links gehen beim Speichern verloren" = falsch (Speicher schreibt alle Linien 1:1; die angeblich fehlende Linie existierte doppelt in der Datei) · „toPort 0 ist Material-Slot, braucht Fuel-Port 1" = falsch (Öfen haben keinen Material-Eingang — JEDE Linie am Ofen ist Brennstoff; toPort ist nur der docking-Kreis)
- ✔ Getestet (jsdom mit User-Karte): Ofen 4 = 53.3 ✅ / Ofen 35 = 20.0 ⚠️ · Doppellinie = 20.0 (nicht 40) · Einzelne Linie = 10.0 (halbe Ware, ehrlich) · Vollkette 30,0

## [1.9.10] — „Der Karten-Check" (User-Map Zentrum.json analysiert — Editor-Bug gefunden)

- 🐛 **RÜCKSTAU-Lösungstipp war Wahnsinn:** Bei Dünger-Überschuss schlug der Editor „132 weitereGärtnerei anschließen (oder Säge-Anzahl senken)" vor — absurde Zahl (Überschuss ÷ Winz-Verbrauch der Gärtnereien), fehlendes Leerzeichen und „Säge" festkodiert auch bei Nicht-Sägen. Jetzt: Zahlen-Vorschlag nur noch wenn er SINN ergibt (≤ 10), sonst ehrlich: „Lösung: Überschuss abnehmen — 📦 Lager / 🏪 Verkauf / 🌱 Beet (Dünger!) anschließen oder <eigenes Gerät>-Anzahl senken"
- 🔎 **Karten-Prüfung (Zentrum.json, 55 Boxen / 97 Linien):** Datengesundheit einwandfrei (keine doppelten IDs, keine defekten Linien, keine Rand-Verirrungen) · Kartenbereich bis x=12048 → alter Canvas wäre 14048² = **197 Mio Pixel** gewesen (weiße Wand bestätigt) · Ofen 35 mit 8 Hitze/Sek zu wenig · 4 Holzkohle-Tiegel ohne Ausgang · Salbei-Tiegel 27 doppelt versorgt
- ✔ Getestet (jsdom mit der echten User-Karte): kein „132"/„weitereG" mehr · sinnvoller Tipp auf Assembler + Tiegel · Vollkette 30,0

## [1.9.9] — „Portal-Liste & das Beet" (User: rohe IDs sichtbar · „Falsches Material" beim Samen-Liefern)

- 🛒 **Portal-Artikelliste sauber:** Vorher stand die rohe ID im Text („sage_seed — Salbei-Saat (Sage Seeds)") — jetzt hübsche Namen: **„Sage Seeds — Salbei-Saat"** (englischer Spiel-Name vorne wie gewünscht, deutsch dahinter; ohne Klammern: „Gold Coin — Goldmünze", „Logs — Baumstämme"). Sortierung A–Z bleibt, Auswahl bleibt
- 🌱 **Samen ans Beet: ehrlich erklärt statt angeschrien:** „❌ Falsches Material!" erschien weiter, obwohl das Beet laut Spieldaten RICHTIG liegt (Samen werden im Spiel von HAND eingesetzt, per Band nimmt das Beet nur Dünger an). Jetzt eine freundliche gelbe Info: „🌱 Samen gehören im Spiel von HAND ins Beet — per Band nimmt es nur Dünger an. Diese Linie bringt im Spiel nichts, du kannst sie entfernen." Echte Fehler (z. B. Salbei-Kraut an die Gärtnerei) bleiben rot — mit Hinweis, was richtig wäre
- ✔ Getestet (jsdom): sage_seed=„Sage Seeds — Salbei-Saat" · gold_coin/logs-Namen · A–Z + Auswahl bleiben · Beet- & Gärtnerei-Samen-Info · Kraut-Bleibt-Rot-Mit-Hinweis · Vollkette 30,0

## [1.9.8] — „Die weiße Wand" (GEFUNDEN: Riesen-Canvas überforderte den Browser)

- 🐛 **WURZEL DES WEISSEN BILDSCHIRMS GEFUNDEN:** Der Linien-Canvas lag über der ganzen Karte und wurde bei jedem Bauen/Zoomen/Laden auf die KARTE-GESAMT-Größe aufgebläht (mindestens 5000×5000 = 25 Mio Pixel, bei größeren Karten 100+ Mio). Kann der Browser dieses Riesen-Bild nicht mehr alokzieren (schwache GPU, Software-Rendering, viel Zoomen), zeigt er den Canvas als **massive weiße Fläche** über der Karte. Deshalb: KEIN JavaScript-Fehler, Selbsttest komplett grün, alle Menüs funktionieren — nur die Map ist weiß. Passt exakt zu allen Symptomen (auch nach F5: Größe wird neu berechnet → wieder weiß)
- ✨ **FIX — Viewport-Canvas:** Der Canvas ist jetzt nur noch **Fenster-groß** (max. 4096², normal ~1–2 Mio Pixel statt 25–130 Mio) und liegt wie ein Fenster über dem sichtbaren Ausschnitt: Position folgt dem Scrollen, Zoom läuft über die Zeichen-Transform. Linien, Farben, Wegpunkte, Rand — alles zeichnet wie vorher
- 🔍 **Diagnose:** zeigt jetzt auch den Canvas-Modus („Linien-Canvas: 1200×800 px (Viewport-Modus)") — künftige Berichte sehen sofort, ob der aktiv ist
- ✔ Getestet (jsdom): Canvas außerhalb des skalierten Containers · 1200×800 statt 11500² · Scroll-Fenster folgt (777/333) · Transform = Zoom+Scroll korrekt · Zoom · Vollkette 30,0 · Entf · Stempel ziehen/klicken · Magnet · Diagnose-Zeile

## [1.9.7] — „Der Praxis-Check" (User-Setup: Ofen-Warnung, Beet, Portal-Liste, Kopieren, Fabrikrand)

- 🏭 **Ofen-Warnung entwirrt:** „Gesamt: 14 Dinge angeschlossen ⚠️ Zu viel!" war irreführend — gewarnt wurde vor ZU WENIG Hitze, nicht vor zu vielen Anschlüssen! Jetzt getrennt: „🔌 Anschlüsse: 14 (12 Maschinen + 2 Brennstoff)" und „🔥 Hitze: braucht 48.0 · kommt 18.0 /Sek ⚠️ ZU WENIG Brennstoff — Tiegel stocken! (Heat/Stück: Holz 2000 · Koks 600 · Kohle 540 · Holzkohle 40)"
- 🌱 **„Falsches Material" sagt jetzt was RICHTIG wäre:** Portal liefert Salbei-Saat ans Beet → vorher nur „wird nicht benötigt". Jetzt z. B. „per Band nur DÜNGER annahmbar — Samen werden von HAND eingesetzt" (Pflanzbeet) oder „braucht: Basis-Dünger — oder beliebigen Dünger" (Gärtnerei). Die Daten waren richtig (wie im Spiel: Samen von Hand, Dünger per Band) — nur die Ansage war stumm
- 🛒 **Portal-Artikelliste A–Z:** alphabetisch sortiert nach englischem Spiel-Namen („sage_seed — Salbei-Saat (Sage Seeds)") — Artikel findet man jetzt sofort, funktioniert auch für die spätere EN-Version
- 📋 **Kopieren: Karte ziehen ohne Kopie zu verlieren:** Vorher: im Stempel-Modus platzierte jeder Klick — die Map ließ sich nicht bewegen (User-Musste-Speichern-und-Laden-Bug). Jetzt: **Klick = stempeln · ZIEHEN = Karte bewegen (Kopie bleibt an der Maus)** · ESC/rechte Maus = fertig
- 🗺️ **Fabrikrand ehrlich:** gestrichelte Grenze zeigt das Fabrikgelände pro Etage · wächst automatisch nach rechts/unten mit · Ziehen/Kopieren stoppt sauben am Rand (statt Boxen ins Nichts zu verlieren) mit Hinweis „Mehr Platz: höhere Etage + Aufzug" · **Rand-Rettung beim Laden:** zu nah am oberen/linken Rand (oder negativ) gerutschte Karten werden automatisch wieder ins Gelände geschoben
- ❓ **Hilfe:** neue Sektion „Fabrikgelände & Platz" (Faustregel ~100–200 Maschinen je Etage, dann Stockwerke + Aufzug — wie im Spiel)
- ✔ Getestet (jsdom): Ofen 48/18 + Reicht-Text · Beet-/Gärtnerei-Hinweise · Liste A–Z (adamant zuerst, Auswahl bleibt) · Ziehen ohne Stempelverlust + Klick stempelt mehrfach · Rand-Rettung Box (600,650)/Wegpunkt (800,600) · Vollkette 30,0 + Entf alles

## [1.9.6] — „Weißer-Bildschirm-Fahndung" (User: Map plötzlich komplett weg — Menüs da)

- 🔍 **VORAB:** CSS und Lade-Pfad wurden geprüft und sind intakt (Theme-Standardwerte vollständig, Klammern 227/227, Boot mit realistischem Speicherstand inkl. Zonen/Farben/Lift/Ofen läuft durch). Der weiße Bildschirm entsteht offenbar erst im Browser des Nutzers — deshalb:
- ✨ **Fehler-Fangnetz:** JEDER Laufzeitfehler wird seit Start gesammelt (mit Zeilennummer) — nichts geht mehr lautlos kaputt
- ✨ **Gesundheits-Check beim Start:** Ist eine Karte im Speicher, aber nichts sichtbar, warnt das Tool laut: „⚠️ Karte im Speicher (n Boxen), aber nichts sichtbar — 🧰 → 🔍 Selbstdiagnose!"
- ✨ **Laden darf nicht stumm scheitern:** Bisher schluckte das Laden Fehler wortlos — jetzt: Meldung + Fehlergrund in der Diagnose
- ✨ **Diagnose v2:** Zeigt jetzt zusätzlich — Theme & Etage & Zoom & Größe · Karten-Hintergrund & Grid an/aus · sichtbare Boxen · offene Fenster · **alle Fehler seit Start (letzte 5, mit Zeile)**
- ✔ Getestet: Fangnetz fängt echten Fehler mit Zeilennummer · Gesundheits-Check-Bedingung · Diagnose v2 komplett · Vollkette weiterhin grün (30,0)

## [1.9.5] — „Der große Feinschliff" (User-Liste: Magnet, Codex-Startketten, Rechtliches, Fenster, Verkauf-Wachstum)

- 🐛 **MAGNET GEFUNDEN:** Jeder Ladevorgang setzte grüne INLINE-Styles auf den 🧲-Knopf — die haben den echten Zustand dauerhaft übermalt („lässt sich nicht mehr ausschalten"). Jetzt rein klassen-basiert + Meldung „🧲 Raster-Einrasten: AN/AUS" bei jedem Klick
- ✨ **📖 Codex: 🚀 Startkette platzieren** (statt einzelner Box): Rezept anklicken → Maschine + je Zutat EIN Zulieferer, Tiegel automatisch MIT Ofen, Linien verbunden — z. B. Dünger: Assembler + Tiegel(auf Hochofen) + Schleifer. Daneben „🔧 nur diese Maschine" für den alten Weg
- 📏 **Verkauf/Lager wachsen jetzt mit ankommenden Linien** (Merge): 6 Linien = 6 Eingänge + große Box (725 px) — vorher blieben sie bei ×1 klein
- 🎨 **🎨 Farb-Fenster:** landet immer KOMPLETT im Bild (vorher: unter der Leiste unten begraben) und ist an der Titelleiste verschiebbar
- 🧹 **Header: 📖 Codex + ❓ Hilfe zurück** · ⌃-Ausblende-Knopf sauber gestaltet (blau umrandet) · 🛈 → gut lesbares ℹ️
- ⚖️ **Rechtliches & Kontakt (für GitHub-Release):** Neue Hilfe-Sektion „Über & Rechtliches" — inoffizielles, kostenloses Fan-Tool, keine Verbindung zum Hersteller, MIT-Lizenz, kein Verkauf/Werbung/Spenden. `GITHUB_URL`-Konstante ganz oben in js/editor.js: Adresse eintragen → erscheint bei „Fehler melden" und in der Selbstdiagnose
- 📏 **Fenster größer:** Status 720 px · Zonen 660 px · Hilfe 920 px
- ✔ Getestet: Magnet klasse+bildet ab · Verkauf 6 Eingänge/725 px · Farb-Fenster im Bild + drag · Dünger-Startkette 4 Boxen/Tiegel auf Ofen/2 Linien · Header komplett · Vollkette + Entf + Stempel unverändert grün

## [1.9.4] — „Ehrliches Portal-Modell" (User-Bugreport: 6 Sägen an 1 Portal kann im Spiel nicht grün sein)

- 🐛 **MODELL-LÜCKE GESCHLOSSEN — User hatte recht:** Das Tool zeigte „6 Kreissägen an 1 Einkaufsportal (Rate 1/Min)" GRÜN, obwohl das im Spiel so nicht läuft: Das Portal liefert nur, wenn 200 Gold ankommen (Geldzufluss!), die Stämme kommen EINZELN über das Band, und 6 Sägen brauchen erst 6×3=18 Stämme Puffer-Anlauf. Der User baute im Spiel deshalb 12 Portale für 12 Sägen
- ✨ **Ab 75 % Portalauslastung wird die Linie GELB** und das Portal-Panel warnt ehrlich: „🟡 PORTAL 90 % AUSGELASTET — Im Spiel streut der Geldzufluss: Die Rate ist eine Annahme, KEIN Garant! Ohne Einkommen = 0 Lieferung" — inkl. **Anlauf-Rechnung** („6 Sägen × 3 Stämme = 18 Stämme, bei 1/Min = 18 Minuten Anlaufzeit") und Profi-Build-Tipp (1 Portal direkt je Säge). Unter 75 %: grün + Auslastungs-Anzeige trotzdem sichtbar. Über 100 %: gelb/rote Teillast wie gehabt
- 🎨 **Portal-Panel sauber strukturiert** (war gequetscht auf 9px: „1 20 Goldm"): Jetzt ordentlich untereinander mit 12,5 px: „🛒 Kauf: 1 × Stamm · 💰 Kosten: 200 Goldmünze je Stück · 📊 Rate: 1 Stamm/Min"
- ✨ **🗑️ rechts jetzt selbsterklärend:** Klick öffnet ein Menü — „🗑️ Auswahl löschen (n)" und „🧹 Ganze Karte leeren" (mit n-Markierungs-Zähler; vorher war der Knopf stumm, wenn nichts markiert war — deshalb wirkte er „kaputt")
- 📏 **Rechte Seiten-Icons einheitlich groß** (44 px Knöpfe, 21 px Schrift — 🛈/🗑️/🧲 genauso groß wie EG/A+)
- ✔ Getestet: 6 Sägen→gelb+90 %-Block+18 Stämme/18 Minuten · 3 Sägen→grün+45 %+9 Stämme · 7 Sägen→gelb Teillast · Panel-Zeilen · 🗑️-Flyout mit/ohne Markierung · Löschung mit Meldung

## [1.9.3] — „Löschen spricht jetzt + 🔍 Selbstdiagnose" (User: geht immer noch nicht — jetzt jagen wir es mit Daten)

- ✨ **Jeder Löschversuch zeigt laut, was passiert:** „🗑️ 3 Maschine(n) gelöscht" · „💡 Entf: Nichts markiert — zuerst eine Maschine anklicken" · „💡 Entf tippt gerade im Eingabefeld — einmal auf die Karte klicken" (die häufigste Stolperfalle: Nach dem Tippen in Zahlenfelder/Dropdowns landet Entf dort!) · Für Linien: „für die LINIE nimm unten 🗑️ Linie löschen"
- ✨ **🔍 SELBSTDIAGNOSE (🧰-Tür und Werkzeuge):** Prüft live in DEINEM Browser — Version · Browser · Boxen Daten vs. DOM (Geister-Check) · Markierung · Fokus-Element (Eingabefeld-Falle?) · echter Löschtest mit Probe-Box · erreicht die Entf-Taste das Tool? — als kopierbarer Bericht („📋 Bericht kopieren")
- ✔ Getestet: Entf löscht + meldet Anzahl · Entf ohne Markierung erklärt sich · Entf im Eingabefeld erklärt sich · Diagnose: Version/Löschtest/Entf/Fokus alles ✓ · Hub- und 🧰-Eintrag
- 📌 Hinweis: Falls Löschen „immer noch nicht" geht, bitte zuerst den 🧪-Chip prüfen (muss **1.9.3** zeigen — alte Vorschau/Caching testen sonst die falsche Version!) und dann 🧰 → 🔍 Selbstdiagnose → Bericht kopieren und einsenden

## [1.9.2] — „Löschen: Diebe gefasst & Menü hell" (User: Icons dunkel, Löschen geht immer noch nicht)

- 🐛 **LÖSCH-BUG WIRKLICH GEFUNDEN: Box-Klicks wurden von Linien gekapert!** Auf vollen Karten (z. B. 10-Slot-Säge mit vielen Linien) konnte ein Klick auf eine Box, neben der eine Linie lag, die Auswahl zur LINIE umschwenken — das Box-Menü erschien nicht/verschwand, und Entf löschte dann nichts („Löschfunktion geht nicht"). **Klick auf eine Box hat jetzt immer Vorrang**; Linien wählst du nur noch durch Klick auf die freie Karte
- 🛡 **Drei weitere Härtungen:** Doppelte IDs alter Speicherstände werden beim Laden aussortiert & nextId springt sicher hinter die größte ID (keine Kollisionen mehr) · **syncDOM** erzwingt nach jedem Löschen 1:1 zwischen Daten und Bildschirm (Geisterboxen konstruktionsunmöglich) · resizeCanvas-Guard: Ein Start-Fehler kann nie wieder alle Maus-Handler-Anmeldungen abwürgen
- 🎨 **Kontext-Menü hell & farbig** (nichts mehr dunkel auf dunkel): Info = Blau · 🧬 Duplizieren = Grün · 📋 Kopieren = Blau · 🗂️ Zone = Violett · 🗑️ Löschen = Rot · ✔️ Fertig = neutral — helle Schrift, klare Ränder (⎘ und ✕ waren dunkle Textzeichen, jetzt echte farbige Icons)
- ✔ Getestet: Box-Klick trotz direkt daneben liegender Linie → Box bleibt markiert, Entf löscht wirklich · Linien-Wahl per Leerklick weiterhin möglich · Löschen über alle Wege konsistent (Array = DOM) · 2× Speichern→Laden→Löschen = 0 übrig · Vollkette grün (30,0)

## [1.9.1] — „Löschfunktion wirklich repariert" (User: ging immer noch nicht richtig)

- 🐛 **WURZEL GEFUNDEN & BEHOBEN: Unsichtbare DOM-Zwillinge!** Das Laden (Autospeicherung/Map) baute bei jedem Ladevorgang ein ZWEITES Element mit derselben ID über die bestehenden Boxen — Löschen entfernte dann immer nur das erste Element, der Zwilling blieb sichtbar: „Linie weg, aber Boxen stehen noch da". Zwei Fixes:
  - **makeBoxEl ist jetzt idempotent:** Existiert das Element einer Box bereits, wird es wiederverwendet statt ein Zwilling zu erzeugen — das immunisiert jede Lade-/Einfüge-Stelle
  - **loadStorage räumt vorher auf:** Vor dem Neuaufbau werden alte Elemente entfernt — doppeltes Laden kann keine Geister mehr hinterlassen
- ✔ Getestet über ALLE Löschwege (Box-✕ · Entf-Taste · Kontext-Menü · 🗑️ rechts · Karte leeren) mit realistischer 11-Boxen-Map quer über Etagen, Ofen-Besatz, Lift-Paar und Zone: Array und DOM stimmen überall überein · **Zweimal laden + Entf = 0 Boxen, 0 Elemente** (vorher 33 Elemente!) · Stempel-Kopien sauber löschbar · Lift-Partner wird mit entfernt

## [1.9.0] — „Boxen groß, Linien-Menü, Löschen kugelsicher" (User-Bugreport: Boxen zu klein, Löschen unvollständig)

- 🐛 **KRITISCH BEHOBEN: Klicks auf die leere Karte wurden verschluckt** — seit 1.7.0 überdeckte eine doppelte Linien-Suchfunktion die bewährte (Rückgabe −1 statt „nichts"), wodurch jeder Leerklick ins Leere lief: Ziehen/Pan und Abwählen gingen nicht mehr richtig („die Linie geht oft nicht so gut"). Duplikat entfernt, alte Wegpunkt-/Zoom-logik aktiv, Klick fällt jetzt sauber durch
- 📏 **Boxen deutlich breiter:** 360 → 460 px (skaliert mit A/A+/A++) + 26 px Innenabstand links/rechts — die Anschlüsse (Ankerpunkte) verdecken keine Einstellungen mehr, die Portal-Anzeige hat wieder Platz
- 📏 **10 Slots endlich ausrichtbar:** pro Anschluss 72 px (bei A+ = 90 px, vorher 52/65) — eine ×10-Kreissage ist jetzt hoch genug, um je Anschluss 3 Schleifer grafisch sauber anzudocken (10 × 3 = 30 Schleifer möglich)
- ✨ **Linien-Kontextmenü (statt Linien selbst bauen — wie besprochen erstmal so):** Linie anklicken → die Leiste unten wird das LINIEN-Menü: **[🔗 Säge → Schleifer] · 🎨 Farbe · 🗑️ Linie löschen · ✕ Fertig**. ESC/Klick auf die Karte beendet
- 🐛 **Löschen kugelsicher:** Auswahl-Löschen (Entf/🗑️/Kontext) hat jetzt ein Sicherheitsnetz — bleibt nicht mehr mittendrin stehen, Boxen können nicht übrig bleiben; Lift-Partner werden mit entfernt; „Karte leeren" saugt auch herrenlose Elemente und den Stempel-Ghost weg
- ✔ Getestet: 460px + 26px Polster · ×10-Höhe 1085 px bei A+ · Linien-Menü (Farbe/Löschen/Zurück) · Leerklick-Schutz (−1) · 6-Boxen-Löschen inkl. Lift-Paar = 0 übrig · clearAll mit Stray-Element = 0 · Demo-Kette grün (30,0)

## [1.8.0] — „Kontext-Menü & Admin-Werkzeug" (Upload-Labs-Prinzip: Ein Klick auf die Box genügt)

- ✨ **Die Leiste unten WIRD das Menü der gewählten Box** (wie beim Vorbild): Ein Klick auf eine Maschine — schon zeigt die Leiste: **[Maschinenname] · ℹ️ Info · ⎘ Duplizieren (sofort an der Maus zum Stempeln) · 📋 Kopieren · 🗂️ Zone · 🗑️ Löschen · ✕ Fertig**. Mehrfachauswahl zeigt „+n weitere". ✕/ESC/karte leeren → zurück zur Maschinen-Leiste
- ✨ **🛠️ Admin-Werkzeug (NEU: admin.html):** Eigenes, nur-localhost-Werkzeug für den Projektleiter — ließt editor.js ein (alle Geräte + Vorgaben), Vorgaben auf einer Karte anordnen (ziehen im 50er-Raster), Geräte/Rezepte/Anzahl/Ofen-Zuordnung/Verbindungen bearbeiten, Titel & Beschreibungstexte pflegen, Export als **„editor.js herunterladen"** (fertig gepatcht) oder Block-Kopieren + Zwischenstand sichern/laden. **Nicht für Nutzer bestimmt** — beim Release einfach weglassen
- 🧹 **Header-Feinschliff:** 📖 Codex & ❓ Hilfe leben NUR in der 🧰-Tür (nicht mehr oben) · Menü-Ausblenden-Knopf ist jetzt ein sauberes ⌃-Icon, Wieder-Anzeigen ein rundes ☰
- ✔ Getestet: Kontext-Leiste (alle 6 Aktionen) · Duplizieren startet Stempel-Modus · Löschen räumt auf & Leiste kehrt zurück · Mehrfachauswahl · Header ohne Codex/Hilfe · Admin: 43 Geräte + 2 Vorgaben einlesen, neue Vorgabe bauen (Tiegel-AUF-Ofen-Referenz!), Export sauber (nur device/recipe/count/dx/dy)

## [1.7.0] — „Schlaue Seiten-Icons & Linien-Farben" (User-Wünsche nach Upload-Labs-Vorbild, Menüführung)

- ✨ **Rechte Seite neu durchdacht — jedes Icon ist schlau:** A+ (Klick → A / A+ / A++ klappen SEITLICH nach links auf, Wahl leuchtet blau, das Icon zeigt die aktuelle Größe) · 🔍 (Zoom ＋/－/100 %/⛶ Alles, mit Live-Prozent) · 🧲 · ▲ **EG** ▼ (das EG-Wort öffnet die Etagen-Übersicht — spart das 🏬-Icon) · 📊 Status · 🛈 Meldungen · 📖 Codex · ❓ Hilfe · 🗑️ Auswahl löschen. Alle Icons einheitlich groß, Aufklappmenüs gehen nach LINKS (Platz!)
- ✨ **🛈 Meldungs-Icon:** Die zwei Info-Stellen (Header rechts + Pille unten links) sind eingespart — ein immer sichtbares Icon zeigt Fabrik-Meldung + Hinweis, mit Sprung zum großen 📊 Status
- ✨ **🎨 Linien einfärben:** Linie anklicken → Farb-Palette (Holz hellbraun, Eisen, Stein, Sand, Kupfer, Blau …) — zur Unterscheidung deiner Ströme. **🚦 Rot/Orange/Grün bleiben dem System vorbehalten:** Sobald eine Leitung zu wenig/Stau/falsches Material hat, übersteuert das System deine Farbe. „🔁 Systemfarbe" stellt automatisch zurück. Farbe wird im Speicher mitgenommen
- 🐛 **BEHOBEN: Holzkohle-Vorlage hatte eine Maschine zuviel** — Rechnung: 1 Tiegel braucht 15 Bretter/Min (1 Brett → 1 Kohle je 4s), also versorgt 1 Kreissage EXAKT 2 Tiegel. Vorlage jetzt: 1 Säge → Tiegel ×2 → Hochofen. Zusätzlich: Ofen-Zuordnung ist jetzt reihenfolge-unempfindlich
- 📏 **Beispiel-Kette & Vorlagen: großzügige Abstände** (Säge→Tiegel 520 px, Spalten 520–560 px) — Linien liegen sofort sauber, kein Um sortieren mehr
- 📏 **Maschinen-Leiste unten: mehr Luft** (Abstand 6→12 px, Knöpfe 64→82 px breit, Icons 22→25 px, Schrift 9,5→11 px)
- 🔧 🧰-Tür: „✕ Schließen" heißt jetzt **„Menü schließen"** (rechts, größer) · 📖 Codex + ❓ Hilfe sind wieder DIREKT erreichbar (rechte Seite) und bleiben zusätzlich in der Tür
- ✔ Getestet: 11 Seiten-Icons · Flyouts öffnen/lead/merken (A++ → uiLbl + Speicherung) · Zoom-Flyout 120 % live · 🛈 Inhalt · Hub-Label · Holzkohle 1/×2/1 mit 520er-Abständen + Tiegel AUF Ofen · Linien-Farbe setzen/speichern/zurücksetzen · Linien-Hit-Test

## [1.6.1] — „Footer wirklich weg + ℹ️ repariert" (User: Footer war noch drin, ℹ️ gingen nicht)

- 🐛 **BEHOBEN: ℹ️-Knöpfe taten nichts** — beim Sidebar-Rückbau (1.5.1) waren versehentlich die CSS-Klassen des ℹ️-Fensters mit gelöscht worden: Das Fenster öffnete sich unsichtbar. Klassen wiederhergestellt, Fenster erscheint wieder direkt neben der Maschine
- 🔥 **Footer jetzt WIRKLICH weg** (Upload-Labs-Prinzip): Unten bleibt nur die Maschinen-Leiste mit der 🧰-Tür. Links unten eine kleine Status-Pille (Meldungen wie „3 Maschinen ohne Lieferung", Klick öffnet 📊), rechts schlanke Rand-Pille mit dem Bau-Alltag: ▲ EG ▼ 🏬 ⛶. Die Karte reicht bis ganz unten
- ✨ **ANSICHT in der 🧰-Tür:** Größe A / A+ / A++ (Hub bleibt offen — Wechsel sofort sichtbar), Zoom ＋/－/100 %, 🧲 Raster — mit Live-Anzeige „Zoom aktuell: 140 %"
- 🐛 **Mitbeseitigt: Mausrad-Zoom-Crash** — die Zoom-Prozent-Anzeige des Footers war noch referenziert (2 Stellen abgesichert)
- ✔ Getestet: kein cmdbar in HTML/CSS · Pills links/rechts (5 Knöpfe) · ℹ️-Fenster position:fixed/z-index 200 · Zoom ohne Crash (1 → 1,4 → 1) · Hub-Zoom zeigt echte Zahl · Demo-Kette grün (Verkauf 30,0)

## [1.6.0] — „Das schlaue Menu" (User-Wunsch, inspiriert von Upload-Labs-Menüführung: EINE Tür, ALLES drin, kontextbewusst)

- ✨ **🧰 Werkzeuge-Tür direkt in der Maschinen-Leiste:** Ein Knopf unten — dahinter ALLES in dem einen schönen Fenster (gleiche Optik wie das Maschinen-Menü): Fabrik-Status · Zonen · Vorlagen · Erste Schritte · Codex · Roadmap · Rechner · Spickzettel · Hilfe · Eigene Maschine · Namen prüfen · Fabrik-Einstellungen · **Karte leeren** (fragt 1× nach). Nichts mehr in Untermenüs suchen
- ✨ **Kontextbewusst wie im Vorbild:** Sind Maschinen markiert, steht oben im Fenster: „✔ MARKIERT: n Maschine(n) — was willst du tun?" mit **Kopieren / Zur Zone machen / Auswahl löschen** — die Tür wird das, was du gerade ausgewählt hast
- ⌨️ **Entf-Taste löscht markierte Maschinen** (Verbindungen werden sauber mit entfernt)
- 🔀 Die 🧰-Bereichsköpfe der Befehlsleiste öffnen dieselbe Tür (ein Ort, keine Doppelstruktur)
- ✔ Getestet: 9 Leisten-Knöpfe · Hub mit 13 Karten + Karte-leeren · ohne Markierung kein Kontext-Block · mit Markierung Kopieren/Zone/Löschen · Löschen räumt Linien auf · Entf-Taste · ESC schließt · Demo-Kette weiterhin grün (30,0 im Verkauf)

## [1.5.1] — „Die Karte ist der Star" (User-Korrektur: Sidebar wieder raus!)

- 🔥 **Linke Sidebar wieder ENTFERNT** — sie wiederholte nur das unten-Menü und nahm der Karte Platz. Der Planer bleibt: Header oben (das Wichtigste) · Befehlsleiste unten (das Schnelle) · **Maschinen-Menü unten (das Zentrale)** · **frei verschiebbare Fenster** für alles andere (📊 🗂️ 🧰 — zuklappbar beim Bauen, jederzeit wieder da)
- 🗺️ **Karte jetzt in voller Breite** (auch der tote 240-px-Streifen links ist weg, den die alte Sidebar hinterlassen hatte)
- ✨ **Das Maschinen-Menü unten noch hammerer:** 1020 px breit, großzügigere Karten (118 px) und größere Icons (30 px) — mehr Geräte auf einen Blick
- ✔ Erste Schritte, ℹ️-Kurzhilfen und eigene Vorlagen aus 1.5.0 bleiben (unabhängig von der Sidebar)
- ✔ Getestet: kein leftpanel im HTML/CSS · volle Karten-Breite · Picker öffnet mit 14-px-Suche · Demo-Kette 6 Boxen/30,0 · ℹ️-Fenster · Vorlagen-Speichern · Hilfe ohne Sidebar-Text

## [1.5.0] — „Verständlich & lesbar" (User-Wunsch: Einstiegshilfe, ℹ️, Menü schlauer, Vorlagen selbst anlegen)

- ✨ **🚀 Erste Schritte:** Beim ersten Start zeigt der Planer eine kleine Anleitung wie im Spiel — Einkaufsportal → Kreissage → bis zu 3 Schleifer → Verkauf/Lager — mit Button **„Beispiel-Kette laden"**: Die fertige Kette erscheint live auf der Karte (alles grün). Auch in 🧰 Werkzeuge und ❓ Hilfe
- ✨ **ℹ️ an jeder Maschine:** Kurz-Erklärung direkt neben der Box (Kurz-Zusammenfassung mit echten Zahlen: „1 Kreissage versorgt EXAKT 3 Schleifer", Portal-Geld-Sammelei, Lift-Rollen, Kreislauf-Tipps …) + Knopf „❓ Mehr in der Hilfe"
- ✨ **Linkes Panel wiederbelebt:** Tab **🛠️ Maschinen** (Suche + Kategorien + Liste, 15 px) und Tab **🏭 Fabrik** (Maschinenanzahl, Etagen, BILANZ erzeugt−verbraucht, große Fenster auf einen Klick) — die Fabrik-Infos haben jetzt Platz statt im Footer gequetscht zu werden
- ✨ **📦 Eigene Vorlagen:** Maschinen markieren (Shift+Klick) → Name → „💾 Aus Auswahl speichern" — eigene Baugruppen im Browser gespeichert, beliebig oft per Stempel-Modus einfügen. Eingebaute Vorlagen: js/editor.js (TEMPLATES)
- 📏 **Überall lesbarer gemacht:** Hilfe 14 px/860 px breit · Werkzeugkiste 680 px mit 14,5 px · Vorlagen-Fenster 720 px · Maschinen-Auswahl unten (Karten 13 px) · Befehlsleiste 14 px · ℹ️-Fenster 14 px
- ✔ Getestet: Panel/Tabs/43 Maschinen gelistet · Onboarding-Fenster · Demo-Kette 6 Boxen/7 Linien/Verkauf 30,0 · ℹ️ öffnet mit Text · eigene Vorlage speichern→stempeln→löschen · Werkzeugkiste & Hilfe größer

## [1.4.3] — „Echte Größe statt Zoom" (User: A/A+/A++ war nur Zoom — gelacht und recht behalten)

- 🐛 **BEHOBEN: A/A+/A++ war nur ein Zoom** — jetzt wachsen **Boxen, Schriften, Dropdowns, Knöpfe und Anschlüsse WIRKLICH** (CSS-Größenfaktor), während die Karte gleich bleibt: gleiche Übersicht, aber alles lesbar. Standard ist A+ (125 %), Zoom separat per Mausrad/＋/－ wie zuvor
- ✨ **A / A+ / A++** = 100 % / 125 % / 150 % echte Größe — wird gespeichert, aktiver Knopf leuchtet blau
- 📏 **×10-Boxen: 50 % mehr Luft pro Anschluss in A++** (987 statt 658 px) — Anschlüsse sitzen prozentual verteilt, wachsen also sauber mit
- 🐛 **Magnet (🧲 Raster-Einrasten) zeigt seinen Zustand jetzt unübersehbar an:** dick grün umrandet mit Glow, wenn AN
- 🔧 **📖 Codex, 📋 Roadmap, 🎯 Rechner wieder DIREKT in der Leiste** (Gruppe FABRIK) — kein Umweg über die Werkzeugkiste mehr
- ✔ Getestet: A++ setzt --u=1,5 bei unverändertem Zoom · Speicherung + aktiver Knopf · x10-Box 987/658 px · 35 Größenregeln aktiv · Snap-Status-Klasse · Vollkette grün · Stempel-Ghost sauber

## [1.4.2] — „Aufgeräumt: Befehlsleiste unten" (User: rechte Seite zu voll, Menü unten schlauer)

- ✨ **Neue Befehlsleiste unten** statt Statusleiste — alle Funktionen in beschrifteten Gruppen, die jeder versteht: **ETAGE** (▲ EG ▼ 🏬) · **ANSICHT** (A/A+/A++ · － 130 % ＋ · ↺ ⛶ 🧲) · **FABRIK** (📊 Status · 🗂️ Zonen · 🧰 Werkzeuge · ❓ Hilfe). Links bleibt Platz für Status-Meldungen
- 🧹 **Rechte Säule KOMPLETT weg** (18 Knöpfe übereinander — oben wie unten überladen). Die Karte hat jetzt rechts wieder Luft
- 🧹 **Header schlank:** 📖 Codex, 📋 Roadmap, 🎯 Rechner sind in die 🧰 Werkzeugkiste gezogen (selten gebraucht). Oben bleiben nur Titel, 🧪 Beta, ☀️/🌙, 🌐, 💾 Speichern, 📂 Laden, ⌃ Menü
- 📏 Kategorie-Leiste (unten mittig) und Auswahl-Info rutschen über die Befehlsleiste — überlappen nichts mehr
- ✔ Getestet: 0 Seiten-Knöpfe · 16 Knöpfe in 3 Gruppen · Snap/Etage/Zoom-Aufrufe lebendig (1,3 → 1,6) · Werkzeugkiste öffnet Codex/Roadmap/Rechner · Vollkette weiterhin grün

## [1.4.1] — „Alles größer" (User: es ist immer noch alles sehr klein)

- ✨ **Größe-Presets A / A+ / A++** rechts in der Leiste (100 % / 130 % / 160 %) — die gewählte Größe wird gespeichert und beim nächsten Start wieder geladen. Feinzoom bleibt per Mausrad/Stufen wie bisher
- ✨ **Standard ist jetzt 130 %** — ohne etwas einzustellen sind Boxen und Schriften deutlich größer
- 📏 **Boxen von 300 auf 360 px breit**, mehr Innenabstand: Maschinenname 14→16,5 px · Materialzeilen 11→13 px · Statuszeilen 10→12 px · Zähler 13→15 px · [+]/[−]-Knöpfe 28→32 px
- 📏 **Dropdowns & Eingabefelder in Boxen: 14 px** (vorher 11 px) — endlich ohne Augenkneifen lesbar
- 📏 **Anschluss-Knöpfe (grün/blau) 28→34 px** — leichter zu treffen beim Verbinden
- 🕸️ **Raster halbiert: 100 → 50 px** (Hintergrundraster + Einrasten) — feineres Gitter wie besprochen, Vorbereitung für rasterfeste Boxen (nächstes Groß-Update)
- ✅ ×10-Boxen bekommen mehr Luft pro Anschluss (52 statt 44 px)
- ✔ Getestet: Raster 50 + Zoom 130 % Standard + Speicherung · A++ = 160 % gemerkt · CSS-Größen aktiv · Vollkette (Schleifer 10,0 · Verkauf 30,0 Großes Holzrad) weiterhin grün

## [1.4.0] — „Kopieren & Einfügen neu: Stempel-Modus" (Bugreport: Zone erneut einfügen = 2× Maschinen)

- 🐛 **BEHOBEN: Zonen wuchsen mit jedem Einfügen** — die eingefügten Kopien hingen sich mit in dieselbe Zone, und der nächste „Einfügen"-Klick kopierte ALLES wieder (2×, dann 4× …). Das Einfügen nimmt jetzt einen **eingefrorenen Snapshot** der Zone — beliebig oft stempeln, die Zone vergrößert sich nicht
- ✨ **Stempel-Modus (wie gewünscht):** Einfügen nimmt die Zone/Kopie **an die Maus** (Halbtransparenter Umriss folgt dem Zeiger) — **jeder Klick legt eine weitere Kopie dort ab**, ESC oder rechte Maustaste beendet. Genau richtig für „3–4 gleiche Linien"
- ✨ **Strg+C / Strg+V wie gewohnt:** Auswahl kopieren, mit Strg+V an der Maus tragen, klickweise stempeln (Einfügen erfolgt auf der aktuellen Etage — Turm-Workflow). Anschlüsse (Port 1/2/…), Stückzahl (×2 …), Ofen- und Aufzug-Paare werden mitkopiert
- ✅ **Zonen-Einfügen bleibt 1:1:** Ebenen der Zonen-Maschinen werden exakt mitgenommen (wie vorher), interne Verbindungen inkl. Anschlüsse + Wegpunkte
- 🔧 Zonen-Dialog: „⎘ Verdoppeln" heißt jetzt ehrlich **„📋 Einfügen (Stempel)"** + neuer Hilfe-Abschnitt „📋 Kopieren & Einfügen"
- ✔ Getestet: Stempel-Modus + Ghost · 1. Stempel = 6 Mitglieder · 2. Stempel = 9 (nicht 12 — Wachstums-Bug weg) · ESC räumt auf · Strg+V auf Etage 1 · Ports 0/1 erhalten · ×2 bleibt · Vollkette (Portal→Säge→3 Schleifer→Verkauf 30,0) unverändert grün

## [1.3.25] — „Alle Anschlüsse liefern" (Bugreport: Tiegel ×2 → nur 1 Kohle-Linie zum Ofen)

- 🐛 **BEHOBEN: Der „⛽ Erzeugnis liefern"-Knopf im Ofen-Dialog baute JEDE Verbindung auf Anschluss 1** — die zweite Kohle-Linie deines ×2-Tiegels landete unsichtbar doppelt auf Port 0, statt Anschluss 2 zu nutzen. Der Dialog reicht jetzt den GEWÄHLTEN Anschluss durch (steht am Knopf: „vom Anschluss 2") und legt jede Linie auf ihren eigenen Port
- ✅ **Duplikat-Schutz:** dieselbe Verbindung wird nicht zweimal angelegt
- ✔ Getestet: Tiegel ×2 (Holzkohle) → Linie von Anschluss 1 und Anschluss 2 getrennt · beide gleichzeitig da · Wiederholung legt kein Duplikat · Ofen-Panel zählt beide Linien als Brennstoff

## [1.3.24] — „Portal-Wissen aus dem Spiel" (User-Mitteilung eingearbeitet)

- ✅ **Portal-Panel erklärt jetzt das echte Verhalten:** „sammelt Geld, bis der Kauf voll ist (z.B. 200), DANN liefert es 1 Stück" — und der Profi-Tipp vom Projektleiter: **Portal DIREKT neben die Maschine (Geld-Weg 0–1 Feld), lieber mehrere Portale an einer Maschine als lange Verteilerbänder** — kein Stau, kein Rumliegen, der 3-Stämme-Puffer bleibt voll
- ✅ **Warnung bei langer Verteilung:** Hängt mehr als 3 Maschinen an EINEM Portal, warnt das Panel: „im Spiel füllen sich die hinteren Maschinen erst spät und die Ware staut auf dem Band!"
- ✔ Getestet: Erklärung + Tipp sichtbar · 4 Abnehmer → Warnung · 2 Abnehmer → keine

## [1.3.23] — „Klare Einheiten & ehrliche Linien" (Bugreport: 1 Stamm ≠ 10 Stämme)

- 🐛 **BEHOBEN: Portal stand heimlich auf 10 Stück/Min** (Standard-Rate) — deshalb „10,0 Baumstämme" und grüne Linien zu 10 Sägen, obwohl du „1 Baumstamm" eingestellt hattest. Neue Portale starten jetzt bei **1 Stück/Min**; das Feld „Menge" heißt klar „Packung (Stück je Kauf)"
- ✅ **Panel spricht Klartext:** statt „✅ Baumstämme: 10.0 ≥ 0.3" jetzt **„✅ Baumstämme: kommt 10,00/Min · braucht 0,15/Min — Überschuss 9,85/Min bleiben auf dem Band"**
- ✅ **Zu viel Zulauf = GELBE Linie + Warnung:** liefert ein Portal massiv mehr, als die Maschine essen kann („🟡 ZU VIEL Zulauf … im Spiel staut sich das Band vor der Maschine! Kauf-Rate senken") — genau der erwartete gelbe Hinweis. Normale kleine Überschüsse bleiben grün (Puffer ist ok)
- 🐛 **Geister-Linien gelöscht:** Anzahl zurücknehmen (×4 → ×3) entfernt jetzt auch die Verbindung vom verschwundenen Port — Linie bleibt nicht mehr stehen
- ✅ **Kreissage-Notiz erklärt Puffer vs. Durchsatz:** „1 Stamm → 200 Bretter in 400s = 30 Bretter/Min · lädt bis zu 3 Stämme als PUFFER (ändert den Durchsatz nicht)"
- ✔ Getestet: Standard 1/Min · Über-Lieferung gelb + Warnung · Normalfall grün ohne Warnung · ×4→×3 löscht die 4. Linie

## [1.3.22] — „Merge im Verkauf sichtbar" (Bugreport: 3 Schleifer zusammengeführt)

- 🐛 **BEHOBEN: Verkaufs-/Lager-Panel zeigte „Noch keine Line angeschlossen", obwohl mehrere Linien zusammenliefen** — das Panel nutzte den leeren Rezept-Stub statt der echten Aggregation. Jetzt zeigt die Box, was wirklich ankommt: 3 Schleifer-Linien → „Großes Holzrad 30,0/Min" + Gesamt
- ✔ Getestet die komplette User-Kette: Portal(Stämme) → Kreissage → SPLIT auf 3 Schleifer (je ✅ 10,0 Bretter/Min = 100 %, Säge ohne Rückstau) → MERGE in Verkauf #1 = 30,0 Große Holzräder/Min · zum Vergleich 6 Schleifer = Teillast 50 %

## [1.3.21] — „Band-Abzweig" (Bugreport: 1 Säge → 3 Schleifer ging nicht mehr)

- 🐛 **BEHOBEN: Die 1.3.20-Sperre war zu streng** — wie im Spiel darf ein Ausgang MEHRERE Linien haben (Band läuft entlang, Maschinen hängen sich dran). Die Sperre („Alle N Ausgänge belegt") ist raus; Anzahl/Aufzug-Regeln und wachsende Boxen bleiben
- ✅ **Dein Spiel-Beweis bestätigt das Modell exakt:** Kreissage = 1 Brett alle 2s (30/Min), Schleifer (Großes Zahnrad) isst 1 Brett alle 6s (10/Min) → 1 Säge versorgt FAIR GENAU 3 Schleifer mit 100 %. Im Tool getestet: 3 Linien vom selben Ausgang, je 10,0 Bretter/Min, kein Überschuss, ✅ überall
- ✅ **Übertreibung wie im Spiel:** Ein 4. Schleifer dazu → alle 4 fallen auf Teillast 75 % (30/Min reichen nicht für 40/Min) — genau dein „es geht, wird aber schlecht verteilt"
- 📖 Hilfe-Sektion auf das richtige Modell umgeschrieben

## [1.3.20] — „Ein Anschluss, eine Verbindung" (Spiel-Logik für Anschlüsse & Box-Größe)

- 🐛 **BEHOBEN: Vom einen Portal-Anschluss ließen sich UNENDLICH viele Maschinen abzweigen** — jetzt gilt wie im Spiel: **jeder Anschluss trägt EINE Verbindung** (ein Band pro Ausgang). Alle belegt? → Hinweis „Alle N Ausgänge belegt — Anzahl erhöhen (+) für mehr Anschlüsse". Gilt für Aus- UND Eingänge beider Seiten
- ✅ **Boxen wachsen mit der Maschinen-Anzahl:** bis ×4 kompakt wie bisher, ab ×5 wird die Box länger (1 Feld je Anschluss) — ×10 = 10 schön verteilte Anschlüsse statt 10 gequetschte Punkte. Hinweis im Port-Zähler: „↕ Box wächst mit der Anzahl"
- ✅ **Aufzug bleibt IMMER einzeln** (rauf = ein Aufzug, runter = ein zweiter — es gibt keinen Doppel-Lift); +/− zeigt diese Erklärung. Als Schacht darf er weiterhin beliebig viele Linien haben
- ✅ **Maschinen-Anzahl maximal 10 pro Box** (Zahlen & Anschlüsse bleiben dadurch sauber berechenbar)
- 📖 Neue Hilfe-Sektion „🔢 Anzahl = Maschinen = Anschlüsse" erklärt das ganze Modell
- ✔ Getestet: Portal ×1 → zweite Linie verweigert · Säge ×10 = 566px/10 Ports/Hinweis · ×4 kompakt · Lift +/− blockiert mit Erklärung · Limit 10

## [1.3.19] — „Flussrichtung & Eingaben" (2 Bugreports)

- 🐛 **BEHOBEN: Grüne Band-Linie lief falsch herum** — die 1.3.15-Richtungs-"Korrektur" hatte Bänder UND Aufzugs-Leiter gegeneinander verdreht (ein Zähler, zwei Vorzeichen). Jetzt fließen **Bänder und Aufzugs-Leitern in dieselbe Richtung: zur Ziel-Maschine**
- 🐛 **BEHOBEN: Ziel-Etage-Feld nahm keine Eingabe an** (0/1/2 nicht wählbar) — der Box-Zieh-Handler blockierte mit preventDefault ALLE Eingabefelder außer Dropdowns. Eingabefelder in Boxen (Aufzug-Ziel-Etage, Portal Menge/Kosten/Rate) sind jetzt frei bedienbar
- ✔ Getestet: Eingabefeld nimmt Fokus an · setLiftFloor(2) stellt die Partner-Hälfte auf Etage 2 · Band-Zähler sinkt (Fluss zur Ziel-Maschine)

## [1.3.18] — „Große Fenster, klare Zahlen" (Ansichts-Überarbeitung)

- ✅ **NEU: 🏪 „Lieferung an den Verkauf" im 📊-Status** — endlich die fehlende Antwort auf „was bringe ich der Verkaufsbox?": pro Verkauf (#1, #2, … mit Etage) jede Ware mit Stück/Min + Gesamt-Summe oben. Leere Verkaufsräume sagen „noch keine Ware — Line anschließen"
- ✅ **📊 Status-Fenster groß geworden:** 640px breit (vorher 390), Karten 13px, Titel 14,5px, Zeilen deutlicher — die Minizeilen-Schrift ist weg. Weiterhin frei verschiebbar
- ✅ **🗂️ Zonen-Fenster ebenfalls breiter** (560px statt 300px) mit den größeren Schriften
- ✅ **❓ Hilfe-Fenster: 780px breit** (kein Schlauch mehr) und **✕ oben rechts** zum Schließen (der untere Button bleibt)

## [1.3.17] — „Eingang oder Ausgang? Der User wählt" (wie im Spiel: rauf = ein Lift, runter = ein eigener)

- ✅ **NEU: Rollen-Dialog beim Platzieren** — „🛗 Welche Hälfte ist das HIER?" mit zwei großen Knöpfen: **📥 EINGANG** (Ware kommt hier rein, Maschinen → diese Box) oder **📤 AUSGANG** (Ware kommt hier raus, diese Box → Maschinen). Das Gegenstück wird automatisch das Gegenteil — genau wie im Spiel, wo rauf und runter je ein eigener Aufzug sind
- ✅ **Standard:** Die platzierte Hälfte ist zuerst der EINGANG (der natürliche Aufbau: Maschine → Lift daneben) — ein Klick im Dialog ändert es, falls man gerade einen Ausgang braucht
- ✅ **⇄ tauschen-Knopf im Aufzug-Panel** — Rollen jederzeit drehen, auch später
- ✅ Die Rollen-Wahl wird gespeichert (auch in Setup-Dateien); alte Aufzüge ohne Wahl bleiben wie bisher automatisch (dynamisch)
- ✔ Getestet: Säge E1 → Lift E1 (EINGANG) → Gegenstück EG (AUSGANG) liefert 30 Bretter/Min unten raus · User wählt AUSGANG für E1 → Panel & Anschlusspunkte drehen mit · ⇄-Knopf tauscht beide Hälften

## [1.3.16] — „Der Aufzug fährt auch runter" (Bugreport: 1. Stock → EG unmöglich)

- 🐛 **BEHOBEN: Aufzug-Gegenstück entstand IMMER eine Etage höher** — im 1. Stock gebaut, wurde Etage 2 angeboten (rauskommen unmöglich). Jetzt wählt der Aufzug die Richtung klug: **Steht unter dir schon die Fabrik (und über dir nichts), geht das Gegenstück NACH UNTEN** — vom EG wie bisher nach oben
- ✅ **Hinweistext sagt die echte Richtung:** „🛗 Aufzug platziert! Verbindet Etage 1 ▼ EG — drücke rechts ▼ … Andere Richtung? Ziel-Etage im Aufzug-Panel ändern." (Die Ziel-Etage bleibt frei einstellbar, 0–30 — auch direkt von Etage 5 ins EG)
- 🐛 **Rollenspiegelung für RUNTER-Aufzüge behoben:** Die obere Hälfte eines Runter-Aufzugs ist der EINGANG („NUR EINGANG", nur Anschlusspunkte links), die untere der AUSGANG — vorher standen die Rollen nur für RICHTUNG hoch richtig
- ✅ **Rollen sind jetzt dynamisch:** Die Hälfte, die Ware von Maschinen bekommt, IST der Eingang — verbinde die andere Seite, drehen die Rollen automatisch um
- ✔ Getestet: E5→EG (E5=NUR EINGANG+In-Ports, EG=NUR AUSGANG+Out-Ports) · frischer Aufzug ohne Linen: unten=IN · nach Linie auf die obere Hälfte: Rollen drehen sich

## [1.3.15] — „Der Aufzug logisch sauber" (User-Überarbeitung)

- 🐛 **Karten-Löschen fragt nur noch EINMAL** (vorher: Button-Confirm UND clearAll-Confirm = zweimal klicken)
- ✅ **Aufzug-Rollenmodell wie im Spiel:** Die untere Hälfte ist **NUR EINGANG** („nimmt an: Bretter 30,0/Min — kommt auf Etage 1 heraus"), die obere Hälfte ist **NUR AUSGANG** („gibt ab: Bretter 30,0/Min"). Kein irreführendes „Kein Input nötig" mehr
- ✅ **Passende Anschlüsse:** EG-Hälfte hat NUR Eingangs-Punkte, Etagen-Hälfte NUR Ausgangs-Punkte — verbinden geht nur in der logischen Richtung
- ✅ **Gegenstück liegt exakt am gleichen Ort** wie die EG-Hälfte (vorher 340px versetzt) — beim Etagenwechsel liegt der Aufzug direkt dort, wo man ihn hingesetzt hat
- ✅ **Band-Animation läuft jetzt IN Förderrichtung** (Vorzeichen war immer gedreht)

## [1.3.14] — „Der Aufzug erzählt, was er trägt" (Bugreport: Lift EG→E1)

- ✅ **Beide Aufzug-Hälften zeigen jetzt ihre Ladung:** „📦 Transportiert nach OBEN ⬆: Bretter 30,0/Min" — vorher stand da nichts, obwohl Waren flossen („beide Boxen sollten sehen, was sie machen"). Leerer Aufzug sagt ehrlich „noch nichts — Line anschließen"
- 🐛 **Landmine entschärft:** Ein ungültiger/alter Rezept-Schlüssel ließ die GESAMTE Bilanz abstürzen (panele leer, „nichts kommt an") — jetzt fällt der automatisch auf das erste gültige Rezept zurück
- ℹ️ **Wichtiges Verständnis:** Die Schleifmaschine hat KEIN Bretter-Rezept (sie isst Stein, Holzkohle, Koks, Kalk, Salbei, Kamille, Enzian) — Bretter oben brauchen z. B. einen Schmelztiegel (Holzkohle) oder Zahnrad-Maschinen. Rote Linie dorthin ist also korrekt!
- ℹ️ Die violette „Leiter"-Linie ist der Aufzug (mit Lauf-Markierung in Förderrichtung) — Test bestätigt: Säge→Lift EG→Lift E1→Tiegel liefert 30 Bretter/Min ✅ grün

## [1.3.13] — „Realistische Ausgänge & ehrlicher Rückstau" (Lernstunden-Bugreport)

- ✅ **Ausgänge zählen jetzt REAL:** Eine Maschine mit ×3 liefert ihre Ware auf 3 Ausgänge — nur 1 verbunden = nur 1/3 kommt an (wie im Spiel), alle 3 verbunden = volle Rate. Vorher lieferte eine einzige Linie fälschlich alles („ich verbinde eine Strecke und es kommt mein Dreifaches") — Aufzüge bleiben unbegrenzt
- ✅ **Rückstau endlich als WARNUNG sichtbar:** „📤 RÜCKSTAU: +30/Min Bretter übrig — im Spiel staut das Band! Lösung: 2 weitere Schmelztiegel anschließen (oder Säge-Anzahl senken)" — vorher hieß es „Überschuss" und klang wie gute Nachricht, während die Linie orange war
- ✅ **Neu: Band-Überlast-Prüfung** im Panel (produziert X/Min vs. Bänder Y/Min) + „Kein Ausgang verbunden — Ware staut"
- ✅ **Ofen-Fläche verständlich:** „3 Boxen belegen 9 von 42 QUADRATEN (frei: 33 ≈ 11 kleine Tiegel)" — die /42 sind Quadrate, NICHT Tiegel-Stück! 42 Quadrate = max 14 kleine Tiegel
- ✔ Getestet: 1-von-3-Ausgängen = 15/Min, alle 3 = 45/Min · Rückstau-Warnung mit Lösungs-Vorschlag · „Quadraten"-Text · Portal→Ofen direkt = 333 Hitze/Sek ✓

## [1.3.12] — „Ofen-Nummern & Ofen-Menü" (User-Design schlägt Linie)

- ✅ **Jeder Ofen hat automatisch eine Nummer** je Sorte — Hochofen 1, Hochofen 2, Steinofen 1 … — sichtbar als goldener Badge direkt im Box-Titel und im Ofen-Panel
- ✅ **NEU: Ofen-Menü an jeder Hitze-Maschine** (Schmelztiegel & Co.): „Ofen wählen:"-Dropdown listet ALLE Öfen — `Hochofen 1 — VOLL ⛔` (gesperrt), `Hochofen 2 — frei 42`, `Steinofen 1 (E1) — frei 9`. Ein Klick statt Linie ziehen — genau das richtige nach dem Zonen-Einfügen
- ✅ **Volle Öfen sind rot markiert & gesperrt** (VOLL ⛔); wer es trotzdem versucht, bekommt die Flachen-Rechnung gesagt. Etage steht dabei (E1), falls der Ofen oben steht
- ✅ Statuszeile zeigt den gewählten Ofen mit Nummer („steht auf Hochofen 2"); die Linien-Methode bleibt zusätzlich möglich
- ✔ Getestet: Nummerierung H1/H2/S1 · Dropdown zeigt VOLL/frei richtig · VOLL-Wahl → Alarm + nicht gesetzt · Hochofen 2 wählbar · Titel-Badge

## [1.3.11] — „Linie auf den Ofen" (Bugreport: Schmelztiegel nach Zone-Stellen ohne Ofen-Bezug)

- ✅ **NEU: Ofen-Bezug per Linie ziehen** — Schmelztiegel & Co. (alle Hitze-Maschinen) einfach mit einer Linie zu einem Ofen ziehen (Steinofen ODER Hochofen, egal) = er „steht darauf". Die Position im Editor ist egal — der BEZUG zählt, so wie im Spiel „der gehört auf den Ofen"
- ✅ **Bei Mehrdeutigkeit wird gefragt:** Eine Maschine, die auch Brennstoff herstellt (z. B. Holzkohle-Tiegel), fragt kurz: „🔥 Auf den Ofen stellen" oder „⛽ Erzeugnis als Brennstoff liefern" — nie mehr falsch verbunden
- ✅ Maschinen-Panel ohne Ofen zeigt jetzt den Tipp: „💡 Linie zu einem Ofen ziehen = ihn darauf stellen"
- 🐛 **Zonen-Kopie:** übernimmt jetzt auch die **Etage** und kopiert Verbindungen **1:1 inkl. Anschlüsse & Wegpunkte** (vorher gingen gebogene Linien verloren — „Verbindungen sind nicht ganz gleich") · Ofen-Bezug wird weiterhin mitkopiert, wenn der Ofen in der Zone liegt — liegt er außerhalb, einfach neu verbinden (geht jetzt per Linie)
- 🐛 Gleiches Fix für Kopieren/Einfügen (Strg+C/V)
- ✔ Getestet: Zone m. Ofen+Tiegel+E1+Wegpunkt → Kopie komplett · Tiegel-Linie→Ofen: Dialog → gestellt → Panel „steht auf Hochofen" · Säge→Ofen bleibt Brennstoff-Linie

## [1.3.10] — „Dünger fürs Beet" (Bugreport: Monteur-Basisdünger kam ROT an)

- 🚨 **BEHOBEN: Pflanzbeet wies Dünger als „falsches Material" zurück** (Band rot, Beet schimpfte) — Folge der v1.3.0-Korrektur, die den Dünger komplett entfernte. Richtig ist: **das Beet nimmt JEDEN gefertigten Dünger an** (Basis, Fortgeschritten — im Spiel gibt es noch „Fertile Catalyst")
- ✅ **Pflanzbeet neu:** Samen von Hand einsetzen (kein Anschluss nötig, kein Gemecker mehr) · JEDER Dünger per Band **optional** annehmbar — Panel zeigt grün „🌱 Dünger angenommen: Basis-Dünger X/Min — besserer Dünger = besserer Ertrag"
- ✅ **Gärtnerei neu:** Dünger ist ihr PFLICHT-Eingang (jeder Dünger zählt, auch Fortgeschrittener), Samen einmalig von Hand — ohne Dünger zeigt sie ehrlich „KEIN EINGANG" (Dünger-Menge geschätzt, im Spiel nachmessen)
- ✅ Dünger ist nie mehr „falsches Material"; Namen sauber: **Basis-Dünger** / **Fortgeschrittener Dünger**
- ✔ Getestet: Monteur(Basis)→Beet grün · Fortg. Dünger→Beet grün (beide angezeigt) · Monteur→Gärtnerei grün · Gärtnerei ohne Dünger = fordert

## [1.3.9] — „Beta-Kennzeichnung & Unterstützen"

- ✅ **🧪 Beta-Chip im Titel** (mit Versionsnummer, Klick → Info-Fenster): was schon gut geprüft ist, was in Prüfung ist, wie man Namen selbst anpasst und Fehler meldet — solange live gegen das Spiel getestet wird, heißt es hier ehrlich „Beta"
- ✅ **☕ Unterstützen:** Hinweis im ❓-Hilfefenster + README-Abschnitt (freiwillige Spende, Link-Platzhalter) + „das Spiel kaufen & bewerten hilft den Machern am meisten" — alles bleibt kostenlos, Spenden kaufen keine Funktionen
- ✅ Start des **Daten-Abgleichs** Rezepte vs. Spieldaten-Exporte (Report: verify/abgleich-report.md)

## [1.3.8] — „Der Status sieht jetzt, was läuft" (Bugreport: geschlossener Kreislauf zeigte alles auf 0)

- 🚨 **BEHOBEN: Portal-Einkauf fehlte in der Bilanz** — die gekauften Baumstämme wurden als „Defizit −0,45/Min" angezeigt, obwohl das Portal liefert! Der Einkauf ist jetzt ein gebuchter Zustrom: Karte zeigt „🛒 Einkaufsportal liefert 0,45" und die Bilanz ist ausgeglichen
- ✅ **Karten zeigen den FLUSS statt täuschendem „0,0":** „Bretter 90/Min im Umlauf ✅", „Holzkohle 30/Min im Umlauf" — Netto 0 heißt jetzt sichtbar „alles im Kreis", nicht „nichts passiert"
- ✅ **Neu: 🔥 Ofen-Brennstoff-Karte** — „90/Min brennt ✅" mit den einzelnen Brennstoffen (Bretter 60, Holzkohle 30). Ohne Brennstoff: rotes „⛔ ohne Brennstoff"
- ✅ **Oben im Header:** „✅ Fabrik läuft — Bretter 90/Min · Holzkohle 30/Min" statt „Bilanz ausgeglichen"
- ✅ Name: „Holzkohle (Charcoal)" → **Holzkohle**
- ✔ Getestet mit dem echten Aufbau (Portal → Säge ×2 → Ofen · Säge → Tiegel ×2 → Ofen): alle Zahlen exakt (90/30, 60+30 Brennstoff, 0,45 Portal-Einkauf)

## [1.3.7] — „Portal-Sprünge" (Bugreport: rotes Band trotz Baumstämme)

- 🐛 **BEHOBEN: Säge-Panel blieb nach dem Portal-Umstellen stehen** — stellte man das 🛒-Portal auf Baumstämme um, wurde nur das Portal selbst neu gezeichnet, NICHT die Maschine daneben. Die Säge zeigte weiter „Baumstämme fehlt" obwohl sie beliefert wurde. Jetzt rechnet JEDE Portal-Änderung (Ware, Menge, Kosten, Währung, Rate) sofort alle Maschinen, Bänder und den 📊-Status neu
- ✅ **Standard-Ware des Einkaufsportals ist jetzt BAUMSTÄMME** (vorher: Bretter — deshalb war die erste Verbindung rot und meinte „liefert Bretter, wird nicht benötigt"). Der klassische Start: Portal hin, Band zur Säge, läuft
- ✅ Verhalten bleibt ehrlich: Portal auf die FALSCHE Ware stellen → Band rot + „Falsches Material: liefert Bretter" (getestet: Standard ✅ grün → Bretter ⛔ rot → Baumstämme ✅ grün, sofortige Aktualisierung)

## [1.3.6] — „Ehrliche Bilanz" (keine Phantasie-Defizite mehr)

- 🚨 **BEHOBEN: „Bretter −300/Min" obwohl alles stand** — der Editor rechnete stehende Maschinen als Verbraucher weiter. Jetzt gilt: **Eine stehende Maschine verbraucht NICHTS und erzeugt NICHTS.** Keine Minuszahlen mehr, die es in Wirklichkeit nicht gibt
- ✅ **🚀 Wurzel-Block oben im 📊:** „Damit es losläuft — 🛒 **Baumstämme** … wartet: Kreissage — im Spiel kaufen oder Einkaufsportal davor". Die Wurzel wird fett genannt, nicht die Mitte der Kette
- ✅ **🔍 Ohne Lieferung:** vergessene Verbindungen (z.B. ein Tiegel ohne Band) bekommen einen eigenen blauen Block — getrennt von „kaufen/Portal"
- 🐛 **Öfen sind keine wartenden Maschinen mehr** (ihr „Baumstamm-Rezept" ist Brennstoff/Wärme, kein Waren-Eingang)
- 🐛 **Doppel-Bänder zählen überall einfach** (Ofen-Brennstoff UND Senken-Lieferung): 2 Bänder von A nach B = 1 Lieferung, fair geteilt
- ✅ Karten zeigen ehrlich: „➕ erzeugt (läuft)" / „⏸ würde laufen, wenn beliefert" — getestet mit der echten Karte „Zentrum" inkl. 🛒-Portal-Szenario (30/30 · 60/60 · 90/90 Stück/Min exakt)

## [1.3.5] — „Baumstämme & echte Ursachen" (Bugreport aus der Praxis)

- ✅ **Namen wie im Spiel:** Holz → **Baumstämme**, Brett (Plank) → **Bretter**; Ofen-Brennrezept heißt jetzt „Baumstamm" · Säge-Notiz: „3 Stämme passen gleichzeitig auf die Kreissage"
- ✅ **Maschine ohne Anschluss sagt es jetzt klar:** ⛔ **KEIN EINGANG — fehlt: Baumstämme X/Min** · Im Spiel: Ware von Hand liefern oder ein 🛒 Einkaufsportal davor setzen
- ✅ **📊-Übersicht zeigt die URSACHE statt falscher Pause:** „🔍 Defizit — Kreissage steht!" + „➕ erzeugt (theoretisch) 240" neben „🐢 effektiv 0 — Zulieferer steht". Rohstoffe ohne Erzeuger: „⚠️ Defizit — im Spiel kaufen / 🛒 Einkaufsportal"
- 🐛 **Bugfix:** Zwei Bänder von derselben Maschine in den Ofen zählten DOUBLE als Brennstoff-Verbrauch → fälschlich „Bretter fehlen". Jetzt fair geteilt
- ✅ **🛒 Einkaufsportal:** Hinweis „Eingang im Spiel: nur Münzen — im Editor wird nichts bezahlt (keine Geld-Simulation)"
- ✅ Mit der echten Speicherdatei „Zentrum" getestet: Säge ohne Eingang → rot mit Ursache; 🛒-Portal (Baumstämme) davor → Säge grün ✅, Kreislauf geschlossen

## [1.3.4] — „Der große Fix" (Kassensturz nach Bugreport)

- 🚨 **BEHOBEN: Maschinen-Boxen waren leer/winzig** (flache „Pille", ~1/4 Rasterfeld) — `matName()` und `recName()` riefen sich SELBST auf (Endlos-Rekursion aus versehentlich kaputt-ersetztem Code der v1.3.0) → jede Box-Renderung brach ab. Repariert: deutsche Namen + 🏷️-Overrides + englischer Modus funktionieren wieder
- ✅ **Erstmals automatischer Kopflauf-Test** (jsdom, 13 Geräte × 2 Sprachen): alle Box-Typen rendern vollständig — Kreissage, Schleifmaschine, Pflanzbeet, Gärtnerei, Steinofen/Hochofen (Ofen-Panel), Dampfkessel, Dampfheizkissen, Verkaufsraum/Lager/Kolben/Muelltonne mit #-Nummerierung
- Lehre: nie wieder ausbauen ohne Render-Test — der Test liegt jetzt mit drin

## [1.3.3] — „Eine Säule für alles" (UI-Aufräumung rechts)

- ✅ **Rechte Seite neu:** Zoom-Leiste (＋ % － ↺ ⛊ 🧲) und Icon-Säule (📊🗂️🧰❓🗑️ ▲EG▼🏬) waren zwei Stapel mit unterschiedlichen Button-Größen, die sich bei kleinen Fenstern IN EINANDER schoben (＋ saß im 🏬-Icon)
- ✅ Jetzt **eine einheitliche Säule, mittig rechts**: alle Knöpfe gleich groß, Icon-only („Alles"/„Raster" stehen als Erklärung im Tooltip), dünne Trennstriche zwischen Zoom / Werkzeugen / Etagen
- ✅ **Passt immer ins Fenster:** bei niedrigen Fenstern schrumpfen die Knöpfe automatisch (media queries) — kein Browser-Scrollbalken, keine Überlappung mehr
- ✅ 🧲 Raster-Knopf zeigt seinen AN-Status jetzt sauber per Klasse (auch nach dem Laden)

## [1.3.2] — „Trennschärfe: FEST vs. FLÜSSIG" (Projektleiter-Entscheid)

- ⛔ **Katapult & Kanone ENTFERNT** — nice to have, aber technisch fraglich und zu nah am Spiel-Mechanik-Nachbau. (Idee geparkt: Kanone als Sender/Empfänger-Box-Paar, das man gemeinsam setzt — nur auf ausdrücklichen Wunsch)
- ✅ **Lager-Regel wie im Spiel:** 📦 Lager-Box nimmt **NUR feste Items** — Flüssigkeiten gehören ausschließlich in die 🧪/🫧 Kolben-Lager (Rohr-Anbindung)
- ✅ **Verbotene Lieferungen werden ROT gezeichnet** und zählen nicht mehr in der Statistik; das Panel sagt klar, was wohin gehört (Verkaufsraum & 🗑️ Muelltonne nehmen wie im Spiel alles)
- ✅ **Dampf ist jetzt Flüssigkeit:** Dampfkessel-Verbindungen werden als ROHR (blaue Welle) gezeichnet; „Dampf" hat einen deutschen Namen

## [1.3.1] — „Bremse & Rückbau" (Projektleiter-Entscheid)

- ⛔ **Tankregal ENTFERNT** — es ist Spiel-Möbel im Verkaufsraum, kein Planungsgerät. Künftig gilt: Der Editor plant mit Boxen, er baut keine Spiel-Mechanik nach (kein Verkaufssystem, keine Level, keine Kasse)
- ✅ **Verkaufsraum & Lager jetzt durchgehend nummeriert** (interne IDs): „Verkaufsraum #1", „#2" … „Erlenmeyer-Kolben #1" — Reihenfolge = Bau-Reihenfolge
- ✅ **Etagen-Anzeige in jeder Sammel-Box** („📍 steht auf Etage EG/1/2…") + dezenter Spiel-Hinweis am Verkaufsraum: Waren müssen im Spiel ins EG — per 🛗 Aufzug dorthin verbinden
- Konzept-Empfehlung aufgegriffen: **EG = Verkaufsraum, Stockwerk 1 = Zentralheizung/Produktion, nach oben wachsen** — der Editor erzwingt nichts, zeigt aber den Weg

## [1.3.0] — „Die große Spiel-Anpassung" (Live-Verifizierung, 31.08.)

### Offizielle Namen II
Schleifer→**Schleifmaschine** · Saatbeet→**Pflanzbeet** · Baumschule→**Gärtnerei** · Weltbaum-Baumschule→**Weltenbaum-Gärtnerei** (Schmelztiegel-Schreibweise + **Dampfheizkissen** notiert)

### Korrekte Logik (wie im Spiel)
- **Pflanzbeet:** KEIN Eingang — selbst pflanzen & ernten, nur Samen (Dünger aus den Rezepten entfernt; Kamille/Enzian stattdessen 1 Basis-Dünger)
- **Gärtnerei:** MIT Dünger-Eingang — einmal Samen geben, dann Dünger & Co liefern, um zu ernten
- **Weltenbaum-Gärtnerei:** großes Gerät mit **9 Eingängen und 1 Ausgang** (im Picker vermerkt)

### 8 neue Geräte
| Gerät | Funktion |
|---|---|
| ♨️ **Dampfkessel** | Kohle → 54 Dampf (Rohre, unbegrenzter Durchsatz) |
| 🧯 **Dampfheizkissen** | Heizplatte 3×3, 60 Dampf/std = 12 Heat, ersetzt Öfen (Tier 6+) |
| 🧪 **Erlenmeyer-Kolben** | Flüssigkeits-LAGER (Rohre, Ein- & Ausgang) |
| 🫧 **Kugelformiger Kolben** | Flüssigkeits-Lager mit mehr Platz |
| 🗑️ **Muelltonne** | schluckt alles (Überschüsse!), kein Ausgang |
| 🍸 **Tankregal** | Schank, 4 Slots — Tränke NUR hier verkäuflich |
| 🏓 **Katapult** | klein — wirft Items in Türme, füllt Tankregal, kein Band nötig |
| 💣 **Kanone** | große Reichweite — Item-Austausch zwischen Türmen, spart Riesenbänder |

## [1.2.3] — „Offizielle Spiel-Namen I"

Live im Spiel verifiziert (deutsche UI) und als **neue Standards** übernommen:
| Editor alt | Spiel (offiziell) |
|---|---|
| Sägebank (Table Saw) | **Kreissage** |
| Montagetisch (Assembler) | **Monteur** |
| Verarbeiter (Processor) | **Fertigungseinheit** |

## [1.2.2] — „Namen-Chaos bezwungen"

- ** Warum alle Quellen streiten:** Das Spiel selbst trägt zwei Namen pro Item (intern `Wood`, angezeigt `Logs` — im Daten-Export belegt!) und seine Lokalisierung mischt EN/DE/FR (Early Access). Wiki & Tools picken sich eins raus — kein Wunder, dass nichts zusammenpasst
- **🏷️ Namen prüfen & ändern** (🧰 Werkzeuge): alle 149 Materialien + 35 Geräte mit Suchfeld, direkt editierbar — trage ein, wie es **bei dir im Spiel** heißt; gilt sofort, wird gespeichert und reist künftig **in jeder Setup-Datei mit** (Export/Import)
- 🐛 **5 Materialien hatten gar keinen deutschen Namen** und blieben Englisch: Schnellkalkpulver, Salbeipulver, Kamillenpulver, Enzianpulver, Lavendelöl — ergänzt

## [1.2.1] — „E/D ist die Sprache!"

- **🌐 Sprach-Umschalter:** Neue Header-Taste „🌐 EN/DE" + Tasten **E = English, D = Deutsch** — schaltet Geräte-, Rezept- und Materialnamen komplett um (23 Material-/8 Rezept-Stellen + Box-Titel, Picker, Codex, Zonen-, Status- und Sink-Fenster); Auswahl wird gespeichert
- **☀️/🌙 wieder nur Symbole** (Klick = Hell/Dunkel) — die Buchstaben E/D gehören jetzt der Sprache, wie vom Projektleiter beabsichtigt 😉
- Hilfe-Fenster aktualisiert

## [1.2.0] — „Senken richtig gedacht & Header-Entlastung"

### Geändert — 🏪 Verkaufsraum / 📦 Lager (Spieler-Feedback!)
- **Verkaufsraum: nur EINGÄNGE** — kein Ausgangs-Port mehr (verkaufte Ware verlässt den Raum nicht)
- **Lager: Ein- UND Ausgang** — ist jetzt ein echter **Puffer**: gibt alles wieder aus, was reinkommt (z. B. Kohle aus dem Lager in die Öfen führen)
- **Rezept-Dropdown entfernt** für beide (zeigte sinnloses `_sink`) — die Box erkennt automatisch, was ankommt
- Keine doppelten Input/Output-Zeilen mehr; Statistik-Panel + 📊 Status-Fenster tragen die Informationen (Platzgründe, wie gewünscht)

### Geändert — Header & Bedienung
- **Etagen-Widget in die rechte Icon-Säule** verlagert (▲ / EG-Zähler / ▼ / 🏬 Übersicht) — der Header ist jetzt schlank
- **E/D endlich sichtbar:** Theme-Buttons heißen jetzt „☀️ E" / „🌙 D"
- Hilfe & Aufzugs-Assistent auf neue Etagen-Bedienseite (rechts) umgeschrieben

## [1.1.1] — Hotfix „Hochofen-Fläche"

- 🐛 **Ofen-Flächen-Alarm bei 12 (falsch):** `addFurnaceSlot` übergab die Box-ID statt des Geräte-Namens an den Flächen-Lookup → Fallback 12 trat anstelle von 42 (Hochofen) — das Panel zeigte parallel richtig „12/42", der „+ Hinzufügen"-Alarm sperrte aber ab 12 Fläche. Behoben; Steinofener 9/42 gelten wieder. *Gemeldet vom Spieler-Mitentwickler beim Bau seiner Kohle-Maschine (2× Tiegel ×2 + Säge-Holzkohle-Kette = 12/42).*

## [1.1.0] — „Wirtschaft & Status"

### Neu
- **🏪 Verkaufsraum & 📦 Lager** (Kategorie „Logistik"): Endstationen für Lines — nehmen ALLES an (null Konfiguration), zählen je Item die gelieferten **Stück/Min** + Gesamtsumme in der Box. Das Ende einer Kette ist damit kein toter Punkt mehr, sondern echter Absatz/Einlagerung wie im Spiel
- **📊 Fabrik-Status-Fenster** (Icon-Säule rechts, verschiebbar): Netto-Bilanz **je Material über die ganze Fabrik** (alle Etagen): ➕ erzeugt − ➖ verbraucht (inkl. 🔥 Ofen-Brennstoff!) = frei für Verkauf/Lager; zeigt 🏪-Zustellungen und 📦-Einlagerungen; warnt bei Überschuss ohne Abfluss („staut im Spiel!") und bei Defizit („Zufuhr fehlt")
- **Icon-Säule rechts** (unter dem Header): 📊 Status · 🗂️ Zonen · 🧰 Werkzeuge · ❓ Hilfe · 🗑️ Schnell-Löschen (mit Sicherheitsfrage) — aus dem Header ausgelagert

### Geändert
- **Header entschlackt:** nur noch Titel/Badge · ☀️🌙 · Codex/Roadmap/Rechner · Speichern/Laden · Etagen · Menü — die Material-Info rechts weicht der Kurzfassung („➕ Brett +30 … 📊 Details rechts"), alles Weitere lebt im Status-Fenster
- ☀️/🌙 wieder nur Symbole (E/D als Tooltip + im ❓ Hilfe- und 📊 Status-Kontext)

*Rechenbeispiel:* Säge (30 Bretter/min) → 3 Schleifer (30) → Verkaufsraum (30 Zahnräder/min); wenn zusätzlich 2 Bretter/min im Ofen landen, zeigt der Status korrekt **−2/Min Defizit → Zufuhr fehlt**.

## [1.0.1] — Hotfix „Laufbänder & Menü"

- 🐛 **Förderband-Animation wiederhergestellt:** Der Lift-Einbau (BETA3) hatte den Band-Zweig der Zeichnung verschlungen — normale Verbindungen zeigten nur noch eine blasse Grundlinie ohne laufende Strichelung (und ohne Richtungswechsel bei Rot). Jetzt wieder: **Band läuft in Flussrichtung, bei Fehler rückwärts**, Rohre mit Wellen-Animation, Aufzüge als Leiter
- 🐛 **Verwaiste gelbe Ports** bereinigt (Teillast-Färbung blieb nach Rezeptwechsel hängen)
- 🔧 **Box-Höhen natürlich:** Inhalt bestimmt die Größe; nur bei mehreren Anschlüssen gibt es Zusatzraum für die Ports (vorher starre Norm 240 px + 60 px/Port — Sägebank & Co. wirkten leer)
- 🔧 **„☰ Menü anzeigen"**: Ausgeblendeter Header kündigt sich jetzt verständlich an (vorher „⌃ Header zeigen"); Ausblende-Button heißt „⌃ Menü"
- 🔧 **E/D sichtbar gemacht:** Theme-Buttons jetzt „☀️ E" / „🌙 D" statt nur Symbole + robuster Theme-Wechsel (Absturzschutz beim allerersten Aufruf)

## [1.0.0] — 31.08.2026 · RELEASE „Ordner-Edition"

### Neu
- **Projektstruktur:** `index.html` + `css/style.css` + `js/editor.js` + `saves/maps/` + `saves/zonen/` + README, Doku, Standalone-Version, ZIP-Paket
- **💾 Direktes Speichern in den Ordner** (File System Access API, Chrome/Edge): Maps nach `saves/maps/*.json`, Zonen nach `saves/zonen/*.json` — kein Download-Ordner mehr; Firefox/Safari: automatischer Download-Fallback
- **🧩 Zonen separat speichern & laden** — Zonen-Import fügt rechts neben die bestehende Karte ein (Map bleibt unangetastet). *Das Feature, das das Spiel selbst nicht bietet (dort sind Zonen nach dem Beenden weg).*
- **Neues UI:** Icon-**Hotbar unten** (8 Kategorien) statt Sidebar → Karte in voller Breite; Geräte-**Picker** mit großen Icons (🪚 ⚱️ 🏭 …), Heat-Badge und Suche
- **🗂️ Zonen-Info-Fenster:** schwebend + verschiebbar; pro Zone Maschinenzahl und Netto-Materialbilanz (📤 raus / 📶 rein)
- **Header einklappbar** (⌃ / ⌃ Header zeigen), Badge „Fan-Planer · nicht das Spiel"; ➕📦📝⚙️⊕🗑️ in den neuen 🧰 Werkzeuge-Dialog gewandert; Zoom-Panel unten rechts über der Hotbar
- Umbenannt: „Alchemy Factory" → **„Alchemy Factory Editor"**

### Interne Qualität
- JS-Syntax-Checks (editor.js + standalone) ✅ · Null-Guards für entfernte Sidebar-Elemente · alle 26 UI-Funktionen verifiziert

---

## [0.5.0] — BETA5 „Realistische Band-Logik"

- **3-stufige Verbindungs-Zustände** (`connState`): `full` / `partial` / `none` — Gelb = Teillast mit Prozentanzeige („läuft im Spiel, wartet aber zwischendurch"), Rot nur noch bei „steht"/falschem Material (vorher war „zu wenig" fälschlich Rot)
- **📤 Überschuss-Warnung** auf Quell-Maschinen: „+10/Min → staut sich im Spiel auf dem Band! bis zu 1 weiterer Schleifer anschließbar" (Öfen/Portale/Aufzüge ausgenommen — die schlucken alles)
- Ofen-Brennstoff-Teillast jetzt gelb statt rot · Hilfe-Fenster mit neuer Farblegende
- Getestet: 1 Säge→2/3/4 Schleifer verhalten sich exakt wie im Spiel (Überschuss/Perfekt/75 % Teillast)

## [0.4.1] — BETA4.1 „Lernbarkeit"

- ❓ **Hilfe-Fenster**: Schritt-für-Schritt (Bauen, Verbinden, Linien-Wegpunkte, Etagen & Aufzug 1–6, Etagen-Kopier-Workflow, Öfen, Tastenkürzel)
- 🏬 **Etagen-Übersicht** mit Maschinen-/Aufzugzähler je Stockwerk + Sprung-Buttons („Hin ↗")
- **Aufzugs-Assistent:** Info-Zeile nach dem Platzieren („Gegenstück auf Etage 1 — drücke 🏢▲")
- **Fix:** ESC beim Platzieren eines Aufzugs entfernte das Gegenstück nicht (Waise) — jetzt inkl. aller Verbindungen

## [0.4.0] — BETA4 „Bedienungs-Politur"

- **Anti-Markier-Fix:** `user-select:none` + `preventDefault()` (Box-Ziehen, Canvas, Ports) + `selectstart`-Blocker — kein HTML-Text-Markieren und kein Springen/Ruckeln mehr, wenn man beim Ziehen über den Fensterrand geht
- **ESC schließt den obersten Dialog** (vorher nur bei manchen)
- Größere Klick-Ziele: Ports 28 px, Anzahl-/Etagen-Buttons 28×28, Box-✕ 30×30-Hitbox mit Hover-Rot, Zoom 40×40, Topbar-Icons 40 px
- Dialoge 440 px breit, max. 88 % Fensterhöhe mit internem Scrollen; Schrift größer
- **Rezept-Codex komplett neu:** Kategorie-Chips, aufklappbare Geräte-Sektionen (Heat-Badge, Rezeptzahl), Rezept-Karten mit Menge pro Vorgang UND Rate/Minute, „+ ins Setup platzieren", Auto-Aufklappen bei Suche

## [0.3.0] — BETA3 „Turm-Modus"

- **🏢 Etagen:** `floor` pro Maschine, Topbar-Navigation (▼/EG/▲, Bild↑/Bild↓), Sichtbarkeit & Statusbar pro Etage
- **🛗 Aufzug als Bauteil** (Kategorie „Logistik"): automatisches Gegenstück eine Etage höher, Ziel-Etage 0–30 einstellbar, „dorthin springen", **kein Band-Limit** (wie Rohre im Spiel)
- **Fluss-Aggregation:** Aufzugs-Output = Summe aller Partner-Inputs (mit Rekursionsschutz), FairShare/Balance/„falsches Material" liftbewusst
- Optik: dicke violette **Leiterlinien** mit Lauf-Markierung (klar vom Band unterscheidbar)
- **Turm-Workflow:** Strg+C → Etage hoch → Strg+V = identisches Stockwerk (Lift-Paare werden neu verknüpft); ⬆⬇-Buttons je Maschine

## [0.2.0] — BETA2 „Ofen-Flächenmodell & Anschluss-Rechner"

- **Flächen statt fester Plätze:** Steinofen 9 / Hochofen 42 Fläche; kleiner Tiegel 3 (→ max. 14, alle per Band versorgbar), stapelbarer 4 (→ 10 passen, 9 per Band) — **nach eigenen In-Game-Messungen** (12 = Band-Optimum 3×4; 21 physisch platzierbar, Kettung zählt nicht als Versorgung; Türme nur per Lift; Ofen-Hinweiszeile im Panel)
- `MACHINE_AREA`/`FURNACE_AREA` im Code kommentiert & leicht anpassbar (Messwerte!)
- **🔌 Anschluss-Rechner** in jeder Maschine: „max X Maschinen pro Band" = Bandkapazität ÷ Verbrauch (Tiegel 4, Schleifer 6, Kalk-Tiegel 9 …)
- Alert bei Flächen-Überschreitung, Flächen-Anzeige im Ofen-Panel & Tooltip

## [0.1.0] — BETA1 „Wahrheits-Findung"

- **Fix Heat-Faktor-60:** `Brennwert × Items/Minute` wurde als P/s verglichen → Ofen hielt 60× zu viel Energie vor (1 Säge = 600 „P/s" statt real 10 = 2,5 Tiegel). Behoben an allen 3 Stellen (÷60)
- **Verstärkter Schleifer:** Platzhalter → 14 echte Rezepte (exakt halbe Zeiten des normalen Schleifers), Quelle JoeJoes-DB v105, u. a. Sand 6 s, Holzkohlepulver 2 s, Salbeipulver 1,5 s
- **Daten-Audit:** ~95 % der Rezepte + alle 15 Heat-Werte + alle Brennwerte gegen 2 unabhängige Quellen bestätigt; Ofen-Slots nach Spielerfahrung dokumentiert

## [0.0.0] — Basis (das Original)

Node-Editor in einer HTML-Datei: 35 Geräte (DE/EN), Dark/Light, animierte Förderbänder & Rohre, Wegpunkte, Öfen mit Maschinen-Plätzen, Buy/Sell/Bank-Portale, Zonen, Vorlagen, Roadmap-Ketten, Rückwärts-Rechner, Spickzettel, Rezept-Codex, JSON-Export/Import, localStorage-Autosave, Zoom/Pan/Mehrfachauswahl/Raster, Factory-/Logistics-Efficiency.

---

### Legende
✅ hinzugefügt · 🔧 geändert · 🐛 behoben — *Alle Versionen entstanden am 31.08.2026 in einer gemeinsamen Session (Spieler + KI-Agent).*
