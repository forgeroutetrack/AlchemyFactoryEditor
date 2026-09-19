
// =============================================
// ECHTE SPIELDATEN von alchemy-factory-codex.com
// Alle Raten pro Minute (aus dem Wiki)
// =============================================

// ============ V1.9.6: FEHLER-FANGNETZ — nichts geht mehr lautlos kaputt ============
window.__afeErrors=[];
window.addEventListener('error',e=>{try{__afeErrors.push((e.message||'Fehler')+' @Zeile '+(e.lineno||'?'))}catch(_){}});
window.addEventListener('unhandledrejection',e=>{try{__afeErrors.push('Promise: '+((e.reason&&e.reason.message)||e.reason))}catch(_){}});

const DEVICES = {
"Table Saw": { de:"Kreissage", heat:null,
  recipes:{
    "Plank":{in:{"logs":1},out:{"plank":200},time:400,note:"1 Baumstamm → 200 Bretter in 400s = 30 Bretter/Min · lädt bis zu 3 Stämme als PUFFER (ändert den Durchsatz nicht) · im Spiel: von Hand oder 🛒 Einkaufsportal · SPIEL-BESTÄTIGT (Sandbox, Sep 2026): Anzeige 0,15 Stämme/Min · 0,5% Abbau je Vorgang · läuft nur DURCH, wenn ein Abnehmer (Lager/Verkauf) die Bretter abnimmt · Stufe 2: 37,5 Bretter/Min (1,6 Sek/Stück) · Stufe 12: 120 Bretter/Min (0,5 Sek/Stück · 0,6 Stämme/Min) = ×4 — 1 Stamm bleibt immer 200 Bretter"},
    "Gloom Fungus + Plank":{in:{"rotten_log":1},out:{"gloom_fungus":40,"plank":160},time:400,note:"1 Rotten Log → 40 Gloom Fungus + 160 Plank"}
  }
},
"Stone Crusher": { de:"Steinknacker", heat:null,
  recipes:{
    "Stone":{in:{"limestone":1},out:{"stone":150},time:450,note:"1 Limestone → 150 Stone in 450s"},
    "Coal":{in:{"coal_ore":1},out:{"coal":120},time:360,note:"1 Kohleerz → 120 Steinkohle in 360s"},
    "Crude Shard":{in:{"quartz_ore":1},out:{"crude_shard":80},time:480,note:"1 Quartz Ore → 80 Crude Shard in 480s"},
    "Salt + Sand":{in:{"rock_salt":1},out:{"salt":100,"sand":100},time:600,note:"1 Rock Salt → 100 Salt + 100 Sand in 600s"},
    "Stone + Coal (Meteorite)":{in:{"meteorite":1},out:{"stone":300,"coal":300,"iron_sand":300,"shattered_crystal":60,"obsidian":30,"adamant":7,"ruby":1,"sapphire":1,"emerald":1},time:3000,note:"1 Meteorite → alles in 3000s"}
  }
},
"Iron Smelter": { de:"Eisenschmelze", heat:9, heatUnit:null,
  recipes:{
    "Iron Ingot":{in:{"iron_ore":1},out:{"iron_ingot":100},time:600,note:"1 Iron Ore → 100 Iron Ingot in 600s"},
    "Sulfur + Iron Ingot":{in:{"pyrite_ore":1},out:{"sulfur":40,"iron_ingot":120},time:960,note:"1 Pyrite Ore → 40 Sulfur + 120 Iron Ingot in 960s"}
  }
},
"Seed Plot": { de:"Pflanzbeet", heat:null, fertIn:true,
  recipes:{
    "Flax Seeds → Flax":{in:{},out:{"flax":200},time:400,note:"Samen von Hand einsetzen (kein Anschluss nötig) → 200 Lein · JEDER Dünger per Band annehmbar (optional): besserer Dünger = besserer Ertrag"},
    "Sage Seeds → Sage":{in:{},out:{"sage":180},time:540,note:"Samen von Hand → 180 Salbei · Dünger optional (jeder)"},
    "Redcurrant Seeds":{in:{},out:{"redcurrant":150},time:900,note:"Samen von Hand → 150 Johannisbeeren · Dünger optional (jeder)"},
    "Lavender Seeds":{in:{},out:{"lavender":120},time:1440,note:"Samen von Hand → 120 Lavendel · Dünger optional (jeder)"},
    "Chamomile Seeds":{in:{},out:{"chamomile":140},time:1120,note:"Samen von Hand → 140 Kamille · Dünger optional (jeder)"},
    "Gentian Seeds":{in:{},out:{"gentian":80,"gentian_nectar":80},time:2160,note:"Samen von Hand → 80 Enzian + 80 Nektar · Dünger optional (jeder)"}
  }
},
"Nursery": { de:"Gärtnerei", heat:null, fertIn:true,
  recipes:{
    "Flax":{in:{"basic_fertilizer":1},out:{"flax":6},time:12,note:"🌿 AUTO-BEET (gemessen 19.09.): 6 Lein je 12s = 30/Min · 1 Dünger je 12s = 5/Min — Dünger-PFLICHT! Skaliert mit Fabrik-Effizienz"},
    "Sage":{in:{"basic_fertilizer":1},out:{"sage":4},time:12,note:"🌿 AUTO-BEET (gemessen 19.09.): 4 Salbei je 12s = 20/Min · 1 Dünger je 12s = 5/Min — Dünger-PFLICHT! Skaliert mit Fabrik-Effizienz"},
    "Redcurrant":{in:{"basic_fertilizer":1},out:{"redcurrant":2},time:12,note:"🌿 AUTO-BEET: 10 Johannisbeeren/Min · Dünger 1 je 12s wie Salbei/Lein (geschätzt)"},
    "Lavender":{in:{"basic_fertilizer":1},out:{"lavender":1},time:12,note:"🌿 AUTO-BEET: 5 Lavendel/Min · Dünger 1 je 12s wie Salbei/Lein (geschätzt)"},
    "Chamomile":{in:{"basic_fertilizer":2},out:{"chamomile":3},time:24,note:"🌿 AUTO-BEET: 7,5 Kamille/Min · Dünger 1 je 12s wie Salbei/Lein (geschätzt)"},
    "Gentian + Nectar":{in:{"basic_fertilizer":9},out:{"gentian":4,"gentian_nectar":4},time:108,note:"🌿 AUTO-BEET: Enzian+Nektar je 2,2/Min · Dünger 1 je 12s wie Salbei/Lein (geschätzt)"}
  }
},
"World Tree Nursery": { de:"Weltenbaum-Gärtnerei", heat:null,
  recipes:{
    "Leaf + Core":{in:{},out:{"world_tree_leaf":99,"world_tree_core":1},time:300,note:"WELTBAUM (Shop-Level 8): NÄHRWERT kommt aus DÜNGER — kein Band-Item! Stufen: Setzling 6M · kleiner Baum 5M · Max 3M (zusammen ~14M). Dünger-Nährwerte (Codex 0.5.4471, offiziell): Basis 144V/12Vs · Fortgeschritten 720V/144Vs · Wachstums-Trank 6480V/2160Vs · Fruchtbarer Katalysator 24.000V/6000Vs · Allheilmittel 200.000V/20000Vs → 6M ≈ 41.667 Basis oder nur 250 Katalysatoren. Setzling frisst 10.000/Sek, ausgewachsen ~200/Sek. Im Spiel nachmessen!"}
  }
},
"Grinder": { de:"Schleifmaschine", heat:null,
  recipes:{
    "Sand":{in:{"stone":1},out:{"sand":1},time:12,note:"1 Stone → 1 Sand in 12s"},
    "Charcoal Powder":{in:{"charcoal":1},out:{"charcoal_powder":1},time:4,note:"1 Charcoal → 1 Charcoal Powder in 4s"},
    "Coke Powder":{in:{"coke":1},out:{"coke_powder":1},time:12,note:"1 Coke → 1 Coke Powder in 12s"},
    "Quicklime Powder":{in:{"quicklime":1},out:{"quicklime_powder":1},time:9,note:"1 Quicklime → 1 Quicklime Powder in 9s"},
    "Sage Powder":{in:{"sage":1},out:{"sage_powder":1},time:3,note:"1 Sage → 1 Sage Powder in 3s"},
    "Chamomile Powder":{in:{"chamomile":1},out:{"chamomile_powder":1},time:3,note:"1 Chamomile → 1 Chamomile Powder in 3s"},
    "Gentian Powder":{in:{"gentian":1},out:{"gentian_powder":1},time:3,note:"1 Gentian → 1 Gentian Powder in 3s"},
    "Clay Powder":{in:{"clay":1},out:{"clay_powder":1},time:4,note:"1 Clay → 1 Clay Powder in 4s"},
    "Flax Fiber":{in:{"flax":1},out:{"flax_fiber":1},time:3,note:"1 Flax → 1 Flax Fiber in 3s"},
    "Large Wooden Gear":{in:{"plank":1},out:{"large_wooden_gear":1},time:6,note:"1 Plank → 1 Large Wooden Gear in 6s"},
    "Iron Sand":{in:{"iron_ingot":1},out:{"iron_sand":1},time:30,note:"1 Iron Ingot → 1 Iron Sand in 30s"},
    "Sulfur Powder":{in:{"sulfur":1},out:{"sulfur_powder":1},time:6,note:"1 Sulfur → 1 Sulfur Powder in 6s"},
    "Soap Powder":{in:{"soap":1},out:{"soap_powder":1},time:6,note:"1 Soap → 1 Soap Powder in 6s"},
    "Perfumed Soap Powder":{in:{"perfumed_soap":1},out:{"perfumed_soap_powder":1},time:8,note:"1 Perfumed Soap → 1 Perfumed Soap Powder in 8s"},
    "Copper Powder":{in:{"copper_ingot":1},out:{"copper_powder":1},time:12,note:"1 Copper Ingot → 1 Copper Powder in 12s"},
    "Silver Powder":{in:{"silver_ingot":1},out:{"silver_powder":1},time:16,note:"1 Silver Ingot → 1 Silver Powder in 16s"},
    "Pure Gold Dust":{in:{"gold_ingot":1},out:{"pure_gold_dust":1},time:40,note:"1 Gold Ingot → 1 Pure Gold Dust in 40s"},
    "Volcanic Ash":{in:{"obsidian":1},out:{"volcanic_ash":1},time:24,note:"1 Obsidian → 1 Volcanic Ash in 24s"}
  }
},
"Enhanced Grinder": { de:"Verbesserte Schleifmaschine", heat:null, // V1.9.18: Name laut SPIEL (User gemeldet) — vorher erfunden
  recipes:{
    "Sand":{in:{"stone":1},out:{"sand":1},time:6,note:"1 Stone → 1 Sand in 6s (2× schneller als Schleifer)"},
    "Quicklime Powder":{in:{"quicklime":1},out:{"quicklime_powder":1},time:4.5,note:"1 Quicklime → 1 Quicklime Powder in 4.5s"},
    "Clay Powder":{in:{"clay":1},out:{"clay_powder":1},time:2,note:"1 Clay → 1 Clay Powder in 2s"},
    "Flax Fiber":{in:{"flax":1},out:{"flax_fiber":1},time:1.5,note:"1 Flax → 1 Flax Fiber in 1.5s"},
    "Sage Powder":{in:{"sage":1},out:{"sage_powder":1},time:1.5,note:"1 Sage → 1 Sage Powder in 1.5s"},
    "Chamomile Powder":{in:{"chamomile":1},out:{"chamomile_powder":1},time:1.5,note:"1 Chamomile → 1 Chamomile Powder in 1.5s"},
    "Gentian Powder":{in:{"gentian":1},out:{"gentian_powder":1},time:1.5,note:"1 Gentian → 1 Gentian Powder in 1.5s"},
    "Soap Powder":{in:{"soap":1},out:{"soap_powder":1},time:3,note:"1 Soap → 1 Soap Powder in 3s"},
    "Perfumed Soap Powder":{in:{"perfumed_soap":1},out:{"perfumed_soap_powder":1},time:4,note:"1 Perfumed Soap → 1 Perfumed Soap Powder in 4s"},
    "Large Wooden Gear":{in:{"plank":1},out:{"large_wooden_gear":1},time:3,note:"1 Plank → 1 Large Wooden Gear in 3s"},
    "Charcoal Powder":{in:{"charcoal":1},out:{"charcoal_powder":1},time:2,note:"1 Charcoal → 1 Charcoal Powder in 2s"},
    "Coke Powder":{in:{"coke":1},out:{"coke_powder":1},time:6,note:"1 Coke → 1 Coke Powder in 6s"},
    "Iron Sand":{in:{"iron_ingot":1},out:{"iron_sand":1},time:15,note:"1 Iron Ingot → 1 Iron Sand in 15s"},
    "Sulfur Powder":{in:{"sulfur":1},out:{"sulfur_powder":1},time:3,note:"1 Sulfur → 1 Sulfur Powder in 3s"}
  }
},
"Crucible": { de:"Schmelztiegel", heat:4, heatUnit:null,
  recipes:{
    "Charcoal":{in:{"plank":1},out:{"charcoal":1},time:4,note:"1 Plank → 1 Charcoal in 4s"},
    "Coke":{in:{"coal":1},out:{"coke":1},time:6,note:"1 Steinkohle → 1 Koks in 6s"},
    "Quicklime":{in:{"stone":1},out:{"quicklime":1},time:9,note:"1 Stone → 1 Quicklime in 9s"},
    "Plant Ash":{in:{"sage":1},out:{"plant_ash":1},time:3,note:"1 Sage → 1 Plant Ash in 3s"},
    "Copper Ingot":{in:{"copper_powder":1},out:{"copper_ingot":1},time:12,note:"1 Copper Powder → 1 Copper Ingot in 12s"},
    "Bronze Ingot":{in:{"impure_copper_powder":1},out:{"bronze_ingot":1},time:12,note:"1 Impure Copper Powder → 1 Bronze Ingot in 12s"},
    "Silver Ingot":{in:{"silver_powder":1},out:{"silver_ingot":1},time:16,note:"1 Silver Powder → 1 Silver Ingot in 16s"},
    "Gold Ingot":{in:{"pure_gold_dust":1},out:{"gold_ingot":1},time:40,note:"1 Pure Gold Dust → 1 Gold Ingot in 40s"},
    "Iron Ingot (Sand)":{in:{"iron_sand":1},out:{"iron_ingot":1},time:6,note:"1 Iron Sand → 1 Iron Ingot in 6s"}
  }
},
"Stackable Crucible": { de:"Stapelbarer Schmelztiegel", heat:6, heatUnit:null,
  recipes:{
    "Charcoal":{in:{"plank":1},out:{"charcoal":1},time:4,note:"STAPELBAR — gleiche Werte wie Schmelztiegel (User-Info Sep 2026): 1 Brett → 1 Holzkohle in 4s"},
    "Coke":{in:{"coal":1},out:{"coke":1},time:6,note:"STAPELBAR — gleiche Werte wie Schmelztiegel: 1 Steinkohle → 1 Koks in 6s"},
    "Quicklime":{in:{"stone":1},out:{"quicklime":1},time:9,note:"STAPELBAR — gleiche Werte wie Schmelztiegel: 1 Stein → 1 Branntkalk in 9s"},
    "Plant Ash":{in:{"sage":1},out:{"plant_ash":1},time:3,note:"SPIEL-BESTÄTIGT 19.09.: 1 Salbei → 1 Asche je 3s = 20/Min (Stufe 2: 30) — STAPELBAR gleich"},
    "Copper Ingot":{in:{"copper_powder":1},out:{"copper_ingot":1},time:12,note:"STAPELBAR — gleiche Werte: 1 Kupferpulver → 1 Kupferbarren in 12s"},
    "Bronze Ingot":{in:{"impure_copper_powder":1},out:{"bronze_ingot":1},time:12,note:"STAPELBAR — gleiche Werte: 1 Unreines Kupferpulver → 1 Bronzebarren in 12s"},
    "Silver Ingot":{in:{"silver_powder":1},out:{"silver_ingot":1},time:16,note:"STAPELBAR — gleiche Werte: 1 Silberpulver → 1 Silberbarren in 16s"},
    "Gold Ingot":{in:{"pure_gold_dust":1},out:{"gold_ingot":1},time:40,note:"STAPELBAR — gleiche Werte: 1 Reiner Goldstaub → 1 Goldbarren in 40s"},
    "Iron Ingot (Sand)":{in:{"iron_sand":1},out:{"iron_ingot":1},time:6,note:"STAPELBAR — gleiche Werte: 1 Eisensand → 1 Eisenbarren in 6s"}
  }
},
"Extractor": { de:"Extraktor", heat:null,
  recipes:{
    "Linseed Oil":{in:{"flax":1},out:{"linseed_oil":50},time:2,note:"1 Flax → 50 Linseed Oil in 2s"},
    "Fruit Wine":{in:{"redcurrant":1},out:{"fruit_wine":10},time:6,note:"1 Redcurrant → 10 Fruit Wine in 6s"},
    "Limewater":{in:{"quicklime_powder":1},out:{"limewater":30},time:3,note:"1 Quicklime Powder → 30 Limewater in 3s"},
    "Brine":{in:{"salt":1},out:{"brine":20},time:4,note:"1 Salt → 20 Brine in 4s"},
    "Fairy Tear":{in:{"fairy_dust":1},out:{"fairy_tear":1},time:4,note:"1 Fairy Dust → 1 Fairy Tear in 4s"}
  }
},
"Thermal Extractor": { de:"Thermo-Extraktor", heat:80, heatUnit:null,
  recipes:{
    "(Platzhalter)":{in:{},out:{},time:1,note:"Benötigt Hitze-System"}
  }
},
"Refiner": { de:"Raffinerie", heat:null,
  recipes:{
    "Perfect Diamond":{in:{"diamond":2},out:{"perfect_diamond":1},time:3,note:"2 Diamond → 1 Perfect Diamond in 3s"},
    "Crude Shard (Sand)":{in:{"fully_refined_sand":2},out:{"crude_shard":1},time:3,note:"2 Fully Refined Sand → 1 Crude Shard in 3s"},
    "Broken Shard":{in:{"crude_shard":2},out:{"broken_shard":1},time:3,note:"2 Crude Shard → 1 Broken Shard in 3s"},
    "Dull Shard":{in:{"broken_shard":2},out:{"dull_shard":1},time:3,note:"2 Broken Shard → 1 Dull Shard in 3s"},
    "Shattered Crystal":{in:{"dull_shard":2},out:{"shattered_crystal":1},time:3,note:"2 Dull Shard → 1 Shattered Crystal in 3s"},
    "Crude Crystal":{in:{"shattered_crystal":2},out:{"crude_crystal":1},time:3,note:"2 Shattered Crystal → 1 Crude Crystal in 3s"},
    "Polished Crystal":{in:{"crude_crystal":2},out:{"polished_crystal":1},time:3,note:"2 Crude Crystal → 1 Polished Crystal in 3s"},
    "Adamant":{in:{"polished_crystal":2},out:{"adamant":1},time:3,note:"2 Polished Crystal → 1 Adamant in 3s"},
    "Diamond":{in:{"adamant":2},out:{"diamond":1},time:3,note:"2 Adamant → 1 Diamond in 3s"},
    "Refined Sand 1":{in:{"sand":2},out:{"refined_sand_1":1},time:3,note:"2 Sand → 1 Refined Sand 1 in 3s"},
    "Refined Sand 2":{in:{"refined_sand_1":2},out:{"refined_sand_2":1},time:3,note:"2 Refined Sand 1 → 1 Refined Sand 2 in 3s"},
    "Refined Sand 3":{in:{"refined_sand_2":2},out:{"refined_sand_3":1},time:3,note:"2 Refined Sand 2 → 1 Refined Sand 3 in 3s"},
    "Refined Sand 4":{in:{"refined_sand_3":2},out:{"refined_sand_4":1},time:3,note:"2 Refined Sand 3 → 1 Refined Sand 4 in 3s"},
    "Refined Sand 5":{in:{"refined_sand_4":2},out:{"refined_sand_5":1},time:3,note:"2 Refined Sand 4 → 1 Refined Sand 5 in 3s"},
    "Fully Refined Sand":{in:{"refined_sand_5":2},out:{"fully_refined_sand":1},time:3,note:"2 Refined Sand 5 → 1 Fully Refined Sand in 3s"},
    "Copper Powder":{in:{"impure_copper_powder":2},out:{"copper_powder":1},time:6,note:"2 Impure Copper Powder → 1 Copper Powder in 6s"},
    "Impure Silver Powder":{in:{"crude_silver_powder":2},out:{"impure_silver_powder":1},time:8,note:"2 Crude Silver Powder → 1 Impure Silver Powder in 8s"},
    "Silver Powder":{in:{"impure_silver_powder":2},out:{"silver_powder":1},time:8,note:"2 Impure Silver Powder → 1 Silver Powder in 8s"},
    "Pure Gold Dust":{in:{"gold_dust":2},out:{"pure_gold_dust":1},time:10,note:"2 Gold Dust → 1 Pure Gold Dust in 10s"},
    "Impure Gold Dust":{in:{"crude_gold_dust":2},out:{"impure_gold_dust":1},time:10,note:"2 Crude Gold Dust → 1 Impure Gold Dust in 10s"},
    "Gold Dust":{in:{"impure_gold_dust":2},out:{"gold_dust":1},time:10,note:"2 Impure Gold Dust → 1 Gold Dust in 10s"}
  }
},
"Knowledge Altar": { de:"Wissensaltar", heat:null,
  recipes:{
    "(Platzhalter)":{in:{},out:{},time:1,note:"Noch nicht vollständig"}
  }
},
"Cauldron": { de:"Kessel", heat:null,
  recipes:{
    "Ruby":{in:{"diamond":1,"pure_gold_dust":1,"resonant_catalyst":1},out:{"ruby":1},time:30.9,note:"Diamond + Pure Gold Dust + Resonant Catalyst → Ruby in 30.9s"},
    "Sapphire":{in:{"perfect_diamond":1,"world_tree_core":1,"unstable_catalyst":1},out:{"sapphire":1},time:38.2,note:"Perfect Diamond + World Tree Core + Unstable Catalyst → Sapphire in 38.2s"},
    "Emerald":{in:{"moonlit_soap":1,"lapis_lazuli":1,"fertile_catalyst":1},out:{"emerald":1},time:45.5,note:"Moonlit Soap + Lapis Lazuli + Fertile Catalyst → Emerald in 45.5s"},
    "Philosopher Stone":{in:{"ruby":1,"sapphire":1,"emerald":1},out:{"philosophers_stone":1},time:60,note:"Ruby + Sapphire + Emerald → Philosopher Stone in 60s"}
  }
},
"Paradox Crucible": { de:"Paradox-Krue", heat:1200, heatUnit:null,
  recipes:{
    "Oblivion Essence":{in:{"sage_seed":1},out:{"oblivion_essence":1},time:8.7,note:"1 Sage Seeds → 1 Oblivion Essence in 8.7s"},
    "Vitality Essence":{in:{"oblivion_essence":1},out:{"vitality_essence":1},time:5.1,note:"1 Oblivion Essence → 1 Vitality Essence in 5.1s"}
  }
},
"Processor": { de:"Fertigungseinheit", heat:null,
  recipes:{
    "Mortar":{in:{"stone":5},out:{"mortar":1},time:20,note:"5 Stone → 1 Mortar in 20s"},
    "Iron Nails":{in:{"iron_ingot":1},out:{"iron_nails":3},time:12,note:"1 Iron Ingot → 3 Iron Nails in 12s"},
    "Steel Gear":{in:{"steel_ingot":1},out:{"steel_gear":1},time:16,note:"1 Steel Ingot → 1 Steel Gear in 16s"},
    "Bronze Rivet":{in:{"bronze_ingot":1},out:{"bronze_rivet":3},time:12,note:"1 Bronze Ingot → 3 Bronze Rivet in 12s"},
    "Copper Bearing":{in:{"copper_ingot":1},out:{"copper_bearing":2},time:12,note:"1 Copper Ingot → 2 Copper Bearing in 12s"},
    "Linen Thread":{in:{"flax_fiber":3},out:{"linen_thread":1},time:3,note:"3 Flax Fiber → 1 Linen Thread in 3s"},
    "Linen Rope":{in:{"linen_thread":2},out:{"linen_rope":1},time:6,note:"2 Linen Thread → 1 Linen Rope in 6s"},
    "Small Wooden Gear":{in:{"large_wooden_gear":1},out:{"small_wooden_gear":3},time:12,note:"1 Large Wooden Gear → 3 Small Wooden Gear in 12s"},
    "Gold Coin":{in:{"gold_ingot":1},out:{"gold_coin":1},time:40,note:"1 Gold Ingot → 1 Gold Coin in 40s"},
    "Silver Coin":{in:{"silver_ingot":1},out:{"silver_coin":5},time:16,note:"1 Silver Ingot → 5 Silver Coin in 16s"},
    "Copper Coin":{in:{"copper_ingot":1},out:{"copper_coin":300},time:12,note:"1 Copper Ingot → 300 Copper Coin in 12s"}
  }
},
"Kiln": { de:"Brennofen", heat:15, heatUnit:null,
  recipes:{
    "Brick":{in:{"clay":1},out:{"brick":1},time:6,note:"1 Clay → 1 Brick in 6s"},
    "Glass":{in:{"sand":6},out:{"glass":1},time:6,note:"6 Sand → 1 Glass in 6s"},
    "Gold Ingot (Coin)":{in:{"gold_coin":3},out:{"gold_ingot":2},time:40,note:"3 Gold Coin → 2 Gold Ingot in 40s"},
    "Silver Ingot (Coin)":{in:{"silver_coin":6},out:{"silver_ingot":1},time:16,note:"6 Silver Coin → 1 Silver Ingot in 16s"},
    "Copper Ingot (Coin)":{in:{"copper_coin":400},out:{"copper_ingot":1},time:12,note:"400 Copper Coin → 1 Copper Ingot in 12s"}
  }
},
"Blender": { de:"Mischer", heat:null,
  recipes:{
    "Yeast Powder":{in:{"soap_powder":2,"fruit_wine":40},out:{"yeast_powder":1},time:4,note:"2 Soap Powder + 40 Fruit Wine → 1 Yeast Powder in 4s"},
    "Soap":{in:{"plant_ash":3,"linseed_oil":200},out:{"soap":1},time:3,note:"3 Plant Ash + 200 Linseed Oil → 1 Soap in 3s"},
    "Vitality Potion":{in:{"quicklime_powder":4,"fruit_wine":80},out:{"vitality_potion":1},time:8,note:"4 Quicklime Powder + 80 Fruit Wine → 1 Vitality Potion in 8s"},
    "Topaz":{in:{"crude_shard":1,"sulfuric_acid":30},out:{"topaz":1},time:12,note:"1 Crude Shard + 30 Sulfuric Acid → 1 Topaz in 12s"},
    "Perfumed Soap":{in:{"soap_powder":4,"lavender_essential_oil":30},out:{"perfumed_soap":1},time:8,note:"4 Soap Powder + 30 Lavender Essential Oil → 1 Perfumed Soap in 8s"},
    "Moonlit Soap":{in:{"perfumed_soap_powder":2,"moon_tear":5},out:{"moonlit_soap":1},time:10,note:"2 Perfumed Soap Powder + 5 Moon Tear → 1 Moonlit Soap in 10s"}
  }
},
"Assembler": { de:"Monteur", heat:null,
  recipes:{
    "Clay":{in:{"charcoal_powder":2,"sand":4},out:{"clay":1},time:4,note:"2 Charcoal Powder + 4 Sand → 1 Clay in 4s"},
    "Wooden Pulley":{in:{"plank":2,"linen_rope":1},out:{"wooden_pulley":1},time:4,note:"2 Plank + 1 Linen Rope → 1 Wooden Pulley in 4s"},
    "Linen":{in:{"linen_thread":10},out:{"linen":1},time:5,note:"10 Linen Thread → 1 Linen in 5s"},
    "Healing Potion":{in:{"sage_powder":6,"flax_fiber":6},out:{"healing_potion":1},time:6,note:"SPIEL-BESTÄTIGT 19.09.: Fenster 60/60 — 6+6 je 6s = 10 Trank/Min (Stufe 2: 90/90 → 15/Min)"},
    "Turquoise":{in:{"healing_potion":2,"sand":12},out:{"turquoise":1},time:12,note:"2 Healing Potion + 12 Sand → 1 Turquoise in 12s"},
    "Gloom Spores":{in:{"gloom_fungus":2,"yeast_powder":1},out:{"gloom_spores":1},time:4,note:"2 Gloom Fungus + 1 Yeast Powder → 1 Gloom Spores in 4s"},
    "Unstable Catalyst":{in:{"chamomile_powder":2,"gloom_spores":2},out:{"unstable_catalyst":1},time:4,note:"2 Chamomile Powder + 2 Gloom Spores → 1 Unstable Catalyst in 4s"},
    "Basic Fertilizer":{in:{"plant_ash":1,"quicklime_powder":1},out:{"basic_fertilizer":1},time:4,note:"SPIEL-BESTÄTIGT 19.09.: 1:1:1 — Stufe 2 live 22,5+22,5 → 22,5 Dünger/Min (Basis 15)"},
    "Advanced Fertilizer":{in:{"basic_fertilizer":1,"gloom_fungus":1},out:{"advanced_fertilizer":1},time:4,note:"1 Basic Fertilizer + 1 Gloom Fungus → 1 Advanced Fertilizer in 4s"},
    "Transformation Potion":{in:{"coke_powder":2,"gloom_spores":1},out:{"transformation_potion":1},time:6,note:"2 Coke Powder + 1 Gloom Spores → 1 Transformation Potion in 6s"},
    "Bandage":{in:{"linen":1,"healing_potion":2},out:{"bandage":1},time:10,note:"1 Linen + 2 Healing Potion → 1 Bandage in 10s"},
    "Silver Amulet":{in:{"silver_ingot":2,"lapis_lazuli":1},out:{"silver_amulet":1},time:10,note:"2 Silver Ingot + 1 Lapis Lazuli → 1 Silver Amulet in 10s"}
  }
},
"Alembic": { de:"Alembik", heat:108, heatUnit:null,
  recipes:{
    "Lavender Essential Oil":{in:{"lavender":3,"linseed_oil":300},out:{"lavender_essential_oil":15},time:3,note:"3 Lavender + 300 Linseed Oil → 15 Lavender Essential Oil in 3s"},
    "Brandy":{in:{"coke_powder":5,"fruit_wine":100},out:{"brandy":40},time:5,note:"5 Coke Powder + 100 Fruit Wine → 40 Brandy in 5s"},
    "Sulfuric Acid":{in:{"sulfur_powder":1,"brine":60},out:{"sulfuric_acid":20},time:4,note:"1 Sulfur Powder + 60 Brine → 20 Sulfuric Acid in 4s"}
  }
},
"Athanor": { de:"Athanor", heat:32, heatUnit:null,
  recipes:{
    "Coke + Charcoal":{in:{"charcoal_powder":6},out:{"coke":1,"charcoal":2},time:3,note:"6 Charcoal Powder → 1 Coke + 2 Charcoal in 3s (50%)"},
    "Steel + Iron":{in:{"iron_ingot":1,"coke_powder":1},out:{"steel_ingot":1,"iron_ingot":1},time:4,note:"1 Iron Ingot + 1 Coke Powder → 1 Steel Ingot (25%) + 1 Iron Ingot (75%) in 4s"},
    "Salt + Sand":{in:{"charcoal_powder":2,"quicklime_powder":4},out:{"salt":1,"sand":6},time:6,note:"2 Charcoal Powder + 4 Quicklime Powder → 1 Salt + 6 Sand in 6s"},
    "Copper Powder + Impure":{in:{"iron_sand":6,"soap_powder":6},out:{"copper_powder":1,"impure_copper_powder":1},time:6,note:"6 Iron Sand + 6 Soap Powder → 1 Copper Powder + 1 Impure Copper Powder in 6s"},
    "Malachite + Crude Shard":{in:{"impure_copper_powder":2,"clay_powder":6},out:{"malachite":1,"crude_shard":1},time:12,note:"2 Impure Copper Powder + 6 Clay Powder → 1 Malachite + 1 Crude Shard in 12s"}
  }
},
"Advanced Blender": { de:"Fortg. Mischer", heat:null,
  recipes:{
    "Black Powder":{in:{"sulfur_powder":1,"charcoal_powder":12,"limewater":150},out:{"black_powder":1},time:12,note:"1 Sulfur Powder + 12 Charcoal Powder + 150 Limewater → 1 Black Powder in 12s"},
    "Growth Potion":{in:{"chamomile_powder":2,"clay_powder":6,"brine":80},out:{"growth_potion":1},time:6,note:"2 Chamomile Powder + 6 Clay Powder + 80 Brine → 1 Growth Potion in 6s"},
    "Blast Potion":{in:{"oblivion_essence":1,"black_powder":1,"brandy":40},out:{"blast_potion":1},time:6,note:"1 Oblivion Essence + 1 Black Powder + 40 Brandy → 1 Blast Potion in 6s"},
    "Panacea Potion":{in:{"fertile_catalyst":3,"blast_potion":3,"aqua_vitae":12},out:{"panacea_potion":1},time:6,note:"3 Fertile Catalyst + 3 Blast Potion + 12 Aqua Vitae → 1 Panacea Potion in 6s"},
    "Fertile Catalyst":{in:{"unstable_catalyst":1,"vitality_essence":1,"lavender_essential_oil":18},out:{"fertile_catalyst":1},time:8,note:"1 Unstable + 1 Vitality Essence + 18 Lav. Oil → 1 Fertile Catalyst in 8s"},
    "Resonant Catalyst":{in:{"fertile_catalyst":1,"volcanic_ash":1,"aqua_vitae":12},out:{"resonant_catalyst":1},time:8,note:"1 Fertile Catalyst + 1 Volcanic Ash + 12 Aqua Vitae → 1 Resonant Catalyst in 8s"},
    "Life Potion":{in:{"quicklime_powder":1,"fruit_wine":1,"glass":1},out:{"life_potion":1},time:60,note:"⚠️ UNVERIFIZIERT (Community-Recherche Sep 2026, User-Liste 'Lebenstrank'): Struktur = Brandkalkpulver (Schnellkalkpulver) + Beeren-Pressung (Fruchtwein aus der Extraktor-Presse) + Glas. MENGEN + ZEIT + MASCHINE sind PLATZHALTER (je 1, 60s, Mixer?) — BITTE im Spiel ablesen und melden, dann wird scharf gerechnet!"}
  }
},
"Advanced Assembler": { de:"Fortg. Montagetisch", heat:null,
  recipes:{
    "Pocket Watch":{in:{"steel_gear":2,"copper_bearing":2,"glass":6},out:{"pocket_watch":1},time:12,note:"2 Steel Gear + 2 Copper Bearing + 6 Glass → 1 Pocket Watch in 12s"},
    "Crown":{in:{"gold_ingot":3,"ruby":1,"sapphire":1},out:{"crown":1},time:15,note:"3 Gold Ingot + 1 Ruby + 1 Sapphire → 1 Crown in 15s"},
    "Clockwork Bird":{in:{"steel_ingot":1,"steel_gear":1,"malachite":1},out:{"clockwork_bird":1},time:60,note:"⚠️ UNVERIFIZIERT — Struktur 2× community-bestätigt (Sep 2026): Stahlbarren + Stahlzahnräder + Malachit im Fortgeschrittenen Montierer · MENGEN/ZEIT weiter PLATZHALTER — im Spiel ablesen! Zulieferer verifiziert: Stahl = Athanor [Eisen + Kokspulver] ✓ · Malachit = Athanor [2 Unreines Kupferpulver + 6 Tonpulver → Malachit + Rohkristall] ✓ · 2. Malachit-Weg laut Community (Flachs + Enzianpulver) fehlt in unseren Daten — prüfen. 🐦 SPEZIAL: Verwandlungstrank KONSUMIEREN + Vogel in den TRANSMUTER legen → Fliegen über die Fabrik (Leertaste = hoch · C = runter · G = zurück). Engl. Namen: Ornate Bird / Clockwork Bird (Synonym)"}
  }
},
"Shaper": { de:"Former", heat:null,
  recipes:{
    "Jupiter":{in:{"plank":1200,"small_wooden_gear":1800,"wooden_pulley":600},out:{"jupiter":1},time:600,note:"1200 Plank + 1800 Small Wooden Gear + 600 Wooden Pulley → 1 Jupiter in 600s"},
    "Saturn":{in:{"salt":600,"brick":600,"glass":600},out:{"saturn":1},time:300,note:"600 Salt + 600 Brick + 600 Glass → 1 Saturn in 300s"},
    "Mars":{in:{"iron_nails":600,"steel_gear":300,"bronze_rivet":600,"copper_bearing":300},out:{"mars":1},time:300,note:"600 Iron Nails + 300 Steel Gear + 600 Bronze Rivet + 300 Copper Bearing → 1 Mars in 300s"}
  }
},
"Advanced Shaper": { de:"Fortg. Former", heat:null,
  recipes:{
    "Venus":{in:{"healing_potion":200,"vitality_potion":200,"transformation_potion":200,"growth_potion":200,"blast_potion":200,"sulfuric_acid":4000},out:{"venus":1},time:1200,note:"200x jedes Potion + 4000 Sulfuric Acid → 1 Venus in 1200s"},
    "Mercury":{in:{"turquoise":100,"malachite":100,"topaz":100,"obsidian":100,"lapis_lazuli":100,"quicksilver":1000},out:{"mercury":1},time:600,note:"100x jedes Juwel + 1000 Quicksilver → 1 Mercury in 600s"},
    "Luna":{in:{"steel_ingot":75,"bronze_ingot":75,"copper_ingot":75,"silver_ingot":75,"gold_ingot":75,"moon_tear":75},out:{"luna":1},time:600,note:"75x jedes Barren + 75 Moon Tear → 1 Luna in 600s"}
  }
},
"Arcane Processor": { de:"Arkane Verarbeitung", heat:null,
  recipes:{
    "Eternal Catalyst":{in:{"resonant_catalyst":15,"philosophers_stone":1},out:{"eternal_catalyst":1},time:60,note:"15 Resonant Catalyst + 1 Philosopher's Stone → 1 Eternal Catalyst in 60s"},
    "Fairy Dust":{in:{"chamomile_powder":1,"gentian_powder":1,"world_tree_leaf":1},out:{"fairy_dust":1},time:4,note:"1 Chamomile Powder + 1 Gentian Powder + 1 World Tree Leaf → 1 Fairy Dust in 4s"},
    "Star Dust":{in:{"jupiter":1,"saturn":1,"mars":1},out:{"star_dust":5},time:300,note:"1 Jupiter + 1 Saturn + 1 Mars → 5 Star Dust in 300s"}
  }
},
"Arcane Shaper": { de:"Arkane Former", heat:null,
  recipes:{
    "Sol":{in:{"jupiter":1,"saturn":1,"mars":1,"venus":1,"mercury":1,"luna":1,"perfect_diamond":25,"eternal_catalyst":5,"world_tree_core":5},out:{"sol":1},time:300,note:"1x jedes Relikt + 25 Perfect Diamond + 5 Eternal Catalyst + 5 World Tree Core → 1 Sol in 300s"}
  }
},
"Advanced Alembic": { de:"Fortg. Alembik", heat:270, heatUnit:null,
  recipes:{
    "Aqua Vitae":{in:{"gentian_nectar":1,"world_tree_leaf":1,"brandy":200},out:{"aqua_vitae":10},time:8,note:"1 Gentian Nectar + 1 World Tree Leaf + 200 Brandy → 10 Aqua Vitae in 8s"},
    "Quicksilver":{in:{"crude_silver_powder":1,"vitality_essence":1,"sulfuric_acid":80},out:{"quicksilver":10},time:8,note:"1 Crude Silver Powder + 1 Vitality Essence + 80 Sulfuric Acid → 10 Quicksilver in 8s"},
    "Moon Tear":{in:{"star_dust":1,"fairy_tear":18},out:{"moon_tear":1},time:8,note:"1 Star Dust + 18 Fairy Tear → 1 Moon Tear in 8s"}
  }
},
"Advanced Athanor": { de:"Fortg. Athanor", heat:360, heatUnit:null,
  recipes:{
    "Silver + Crude Silver":{in:{"copper_powder":4,"black_powder":2},out:{"silver_powder":1,"crude_silver_powder":1},time:6.4,note:"4 Copper Powder + 2 Black Powder → 1 Silver Powder (20%) + 1 Crude Silver Powder (80%) in 6.4s"},
    "Gold Dust + Impure Gold":{in:{"silver_powder":1,"volcanic_ash":1,"quicksilver":18},out:{"gold_dust":1,"impure_gold_dust":1,"crude_gold_dust":1},time:8,note:"1 Silver Powder + 1 Volcanic Ash + 18 Quicksilver → Gold Dust/Impure/Crude in 8s"},
    "Lapis Lazuli + Crystal":{in:{"impure_silver_powder":1,"shattered_crystal":1},out:{"lapis_lazuli":1,"shattered_crystal":1,"crude_shard":1},time:12,note:"1 Impure Silver Powder + 1 Shattered Crystal → 33%each in 12s"},
    "Obsidian + Volcanic Ash":{in:{"oblivion_essence":2,"shattered_crystal":1},out:{"obsidian":1,"volcanic_ash":1},time:6,note:"2 Oblivion Essence + 1 Shattered Crystal → 50%each Obsidian/Volcanic Ash in 6s"}
  }
},
"Stone Furnace": { de:"Steinofen", heat:1, heatUnit:null, isFurnace:true, fuelType:"mixed", maxSlots:3,
  recipes:{
    "Holz (Logs)":{in:{"logs":1},out:{},time:2000,note:"1 Baumstamm (2000 Heat) brennt 2000s → 1 Hitze/Sek. Max 1 Maschine (2 Hitze)"},
    "Brett (Plank)":{in:{"plank":1},out:{},time:20,note:"1 Brett (20 Heat) brennt 20s → 1 Hitze/Sek. Max 1 Maschine"},
    "Steinkohle (Coal)":{in:{"coal":1},out:{},time:540,note:"1 Steinkohle (540 Heat) brennt 540s → 1 Hitze/Sek. Max 1 Maschine"},
    "Holzkohle":{in:{"charcoal":1},out:{},time:40,note:"1 Holzkohle (40 Heat) brennt 40s → 1 Hitze/Sek. Max 1 Maschine"}
  }
},
"Blast Furnace": { de:"Hochofen", heat:4, heatUnit:null, isFurnace:true, fuelType:"mixed", maxSlots:12,
  recipes:{
    "Holz (Logs)":{in:{"logs":1},out:{},time:500,note:"1 Baumstamm (2000 Heat) brennt 500s → 4 Hitze/Sek. Max 1 Maschine (4 Hitze)"},
    "Brett (Plank)":{in:{"plank":1},out:{},time:5,note:"1 Brett (20 Heat) brennt 5s → 4 Hitze/Sek. Max 1 Maschine"},
    "Steinkohle (Coal)":{in:{"coal":1},out:{},time:135,note:"1 Steinkohle (540 Heat) brennt 135s → 4 Hitze/Sek. Max 1 Maschine"},
    "Holzkohle":{in:{"charcoal":1},out:{},time:10,note:"1 Holzkohle (40 Heat) brennt 10s → 4 Hitze/Sek. Max 1 Maschine"},
    "Koks (Coke)":{in:{"coke":1},out:{},time:150,note:"1 Koks (600 Heat) brennt 150s → 4 Hitze/Sek. Max 1 Maschine"}
  }
},
"Infobox": { de:"Infobox", heat:null, isInfo:true, /* V1.9.35: reines Text-Schild — keine Funktion, nur Beschriftung (Vorbild: Schilder im Spiel) */
  recipes:{
    "_text":{in:{},out:{},time:60,note:"📝 Eigener Text — nur Beschriftung, keine Funktion, keine Anschlüsse"}
  }
},
"Purchasing Portal": { de:"Einkaufsportal", heat:null, isPortal:true, portalType:'buy',
  recipes:{
    "_placeholder":{in:{},out:{"plank":1},time:60,note:"Wähle unten ein Item zum Kaufen"}
  }
},
"Bank Portal": { de:"Bankportal", heat:null, isPortal:true, portalType:'bank',
  recipes:{
    "Kupfer → Silber":{in:{"copper_coin":1000},out:{"silver_coin":1},time:1,note:"1000 Kupfermünzen → 1 Silbermünze (kostenlos)"},
    "Silber → Kupfer":{in:{"silver_coin":1},out:{"copper_coin":1000},time:1,note:"1 Silbermünze → 1000 Kupfermünzen (kostenlos)"},
    "Silber → Gold":{in:{"silver_coin":100},out:{"gold_coin":1},time:1,note:"100 Silbermünzen → 1 Goldmünze (kostenlos)"},
    "Gold → Silber":{in:{"gold_coin":1},out:{"silver_coin":100},time:1,note:"1 Goldmünze → 100 Silbermünzen (kostenlos)"},
    "Kupfer → Gold":{in:{"copper_coin":100000},out:{"gold_coin":1},time:1,note:"100.000 Kupfermünzen → 1 Goldmünze (kostenlos)"},
    "Gold → Kupfer":{in:{"gold_coin":1},out:{"copper_coin":100000},time:1,note:"1 Goldmünze → 100.000 Kupfermünzen (kostenlos)"}
  }
},
"Dispatch Portal": { de:"Versandportal", heat:null, isPortal:true, portalType:"sell",
  recipes:{
    "_placeholder":{in:{"plank":1},out:{},time:60,note:"Wähle unten ein Item zum Verkaufen"}
  }
},
"Lift": { de:"Aufzug", heat:null, isLift:true,
  recipes:{
    "Lift":{in:{},out:{},time:60,note:"Verbindet Etagen: transportiert wie ein Förderband — Tempo = Band-Tempo (steigt mit der Fabrik-Stufe), Basis 60/Min · 1 Band-Anschluss"}
  }
},
"Steam Boiler": { de:"Dampfkessel", heat:null,
  recipes:{
    "Dampf":{in:{"coal":1},out:{"steam":54},time:6,note:"1 Kohle (540 Heat) → 54 Dampf — versorgt Dampfheizkissen über Rohre (unbegrenzter Durchsatz)"}
  }
},
"Steam Heating Pad": { de:"Dampfheizkissen", heat:null, isFurnace:true, fuelType:"steam", maxSlots:2, isSteamHeat:true, steamPerHour:60, steamHeat:12,
  recipes:{
    "_steam":{in:{},out:{},time:1,note:"Rohr-Anschluss statt Brennstoff: 60 Dampf/std = 12 Heat — Heizplatte 3×3, ersetzt den Ofen (Tier 6+)"}
  }
},
"Erlenmeyer Flask": { de:"Erlenmeyer-Kolben", heat:null, isSink:true, sinkType:"storage", liquidOnly:true,
  recipes:{
    "_sink":{in:{},out:{},time:60,note:"FLÜSSIGKEITS-Lager: Rohre anschließen — erkennt automatisch, was ankommt (Ein- UND Ausgang)"}
  }
},
"Spherical Flask": { de:"Kugelformiger Kolben", heat:null, isSink:true, sinkType:"storage", liquidOnly:true, bigger:true,
  recipes:{
    "_sink":{in:{},out:{},time:60,note:"FLÜSSIGKEITS-Lager mit MEHR PLATZ — wie Erlenmeyer, größer (Ein- UND Ausgang)"}
  }
},
"Trash Bin": { de:"Muelltonne", heat:null, isSink:true, sinkType:"trash", noOut:true,
  recipes:{
    "_sink":{in:{},out:{},time:60,note:"Entsorgung: schluckt ALLES (ideal für Überschüsse) — KEIN Ausgang, nichts kommt raus"}
  }
},
"Sales Room": { de:"Verkaufsraum", heat:null, isSink:true, sinkType:"sales",
  recipes:{
    "_sink":{in:{},out:{},time:60,note:"Endstation: erkennt automatisch jede ankommende Ware — Stück/Min hier, Gesamtbilanz im 📊 Status-Fenster"}
  }
},
"Storage": { de:"Lager", heat:null, isSink:true, sinkType:"storage",
  recipes:{
    "_sink":{in:{},out:{},time:60,note:"Puffer: FESTE Items ein- und wieder auslagern (Ein- UND Ausgang). Flüssigkeiten gehören ins Kolben-Lager (Rohr). Statistik im 📊 Status-Fenster"}
  }
}
};

// =============================================
// DEUTSCHE REZEPTNAMEN für Dropdown-Menüs
// Format: "OriginalRezeptName": "Deutscher Name"
// =============================================
const RECIPE_DE = {
  // Table Saw / Sägebank
  "Plank": "Brett",
  "Gloom Fungus + Plank": "Düsterpilz + Brett",
  // Stone Crusher / Steinknacker
  "Stone": "Stein",
  "Coal": "Steinkohle",
  "Crude Shard": "Rohsplitter",
  "Salt + Sand": "Salz + Sand",
  "Stone + Coal (Meteorite)": "Stein + Steinkohle (Meteorit)",
  // Iron Smelter / Eisenschmelze
  "Iron Ingot": "Eisenbarren",
  "Sulfur + Iron Ingot": "Schwefel + Eisenbarren",
  // Seed Plot / Saatbeet
  "Flax Seeds → Flax": "Leinsaat → Lein",
  "Sage Seeds → Sage": "Salbeisaat → Salbei",
  "Redcurrant Seeds": "Johannisbeersaat",
  "Lavender Seeds": "Lavendelsaat",
  "Chamomile Seeds": "Kamillensaat",
  "Gentian Seeds": "Enziansaat",
  // Nursery / Baumschule
  "Flax": "Lein",
  "Sage": "Salbei",
  "Redcurrant": "Johannisbeere",
  "Lavender": "Lavendel",
  "Chamomile": "Kamille",
  "Gentian + Nectar": "Enzian + Nektar",
  // World Tree Nursery / Weltbaum-Baumschule
  "Leaf + Core": "Blatt + Kern",
  // Grinder / Schleifer
  "Sand": "Sand",
  "Charcoal Powder": "Holzkohlepulver",
  "Coke Powder": "Kokspulver",
  "Quicklime Powder": "Branntkalkpulver",
  "Sage Powder": "Salbeipulver",
  "Chamomile Powder": "Kamillenpulver",
  "Gentian Powder": "Enzianpulver",
  "Clay Powder": "Lehmpulver",
  "Flax Fiber": "Leinenfaser",
  "Large Wooden Gear": "Großes Holzzahnrad",
  "Iron Sand": "Eisensand",
  "Sulfur Powder": "Schwefelpulver",
  "Soap Powder": "Seifenpulver",
  "Perfumed Soap Powder": "Parfumseifenpulver",
  "Copper Powder": "Kupferpulver",
  "Silver Powder": "Silberpulver",
  "Pure Gold Dust": "Reiner Goldstaub",
  "Volcanic Ash": "Vulkanasche",
  // Enhanced Grinder
  "(Platzhalter)": "(Platzhalter)",
  // Crucible / Schmelztiegel
  "Charcoal": "Holzkohle",
  "Coke": "Koks",
  "Quicklime": "Branntkalk",
  "Plant Ash": "Pflanzenasche",
  "Copper Ingot": "Kupferbarren",
  "Bronze Ingot": "Bronzebarren",
  "Silver Ingot": "Silberbarren",
  "Gold Ingot": "Goldbarren",
  "Iron Ingot (Sand)": "Eisenbarren (Eisensand)",
  // Stackable Crucible
  "(wie Schmelztiegel)": "(wie Schmelztiegel)",
  // Extractor / Extraktor
  "Linseed Oil": "Leinöl",
  "Fruit Wine": "Fruchtwein",
  "Limewater": "Kalkwasser",
  "Brine": "Salzwasser",
  "Fairy Tear": "Feenträne",
  // Refiner / Raffinerie
  "Perfect Diamond": "Perfekter Diamant",
  "Crude Shard (Sand)": "Rohsplitter (Sand)",
  "Broken Shard": "Gebrochener Splitter",
  "Dull Shard": "Matter Splitter",
  "Shattered Crystal": "Zerschmetterter Kristall",
  "Crude Crystal": "Rohkristall",
  "Polished Crystal": "Polierter Kristall",
  "Adamant": "Adamant",
  "Diamond": "Diamant",
  "Refined Sand 1": "Gesäuberter Sand 1",
  "Refined Sand 2": "Gesäuberter Sand 2",
  "Refined Sand 3": "Gesäuberter Sand 3",
  "Refined Sand 4": "Gesäuberter Sand 4",
  "Refined Sand 5": "Gesäuberter Sand 5",
  "Fully Refined Sand": "Vollständig gesäuberter Sand",
  "Impure Silver Powder": "Unges. Silberpulver",
  "Impure Gold Dust": "Unges. Goldstaub",
  "Gold Dust": "Goldstaub",
  // Cauldron / Kessel
  "Ruby": "Rubin",
  "Sapphire": "Saphir",
  "Emerald": "Smaragd",
  "Philosopher Stone": "Stein der Weisen",
  // Paradox Crucible / Paradox-Krue
  "Oblivion Essence": "Vergessens-Essenz",
  "Vitality Essence": "Vitalitäts-Essenz",
  // Processor / Verarbeiter
  "Mortar": "Mörser",
  "Iron Nails": "Eisennägel",
  "Steel Gear": "Stahlzahnrad",
  "Bronze Rivet": "Bronzenagel",
  "Copper Bearing": "Kupferlager",
  "Linen Thread": "Leinenfaden",
  "Linen Rope": "Leinenseil",
  "Small Wooden Gear": "Kleines Zahnrad",
  "Gold Coin": "Goldmünze",
  "Silver Coin": "Silbermünze",
  "Copper Coin": "Kupfermünze",
  // Kiln / Brennofen
  "Brick": "Ziegel",
  "Glass": "Glas",
  "Gold Ingot (Coin)": "Goldbarren (Münze)",
  "Silver Ingot (Coin)": "Silberbarren (Münze)",
  "Copper Ingot (Coin)": "Kupferbarren (Münze)",
  // Bank Portal / Bankportal
  "Kupfer → Silber": "Kupfer → Silber",
  "Silber → Kupfer": "Silber → Kupfer",
  "Silber → Gold": "Silber → Gold",
  "Gold → Silber": "Gold → Silber",
  "Kupfer → Gold": "Kupfer → Gold",
  "Gold → Kupfer": "Gold → Kupfer",
  // Blender / Mischer
  "Yeast Powder": "Hefepulver",
  "Soap": "Seife",
  "Vitality Potion": "Vitalitätstrank",
  "Topaz": "Topas",
  "Perfumed Soap": "Parfumseife",
  "Moonlit Soap": "Mondscheinseife",
  // Assembler / Montagetisch
  "Clay": "Lehm",
  "Wooden Pulley": "Holzflaschenzug",
  "Linen": "Leinen",
  "Healing Potion": "Heiltrank",
  "Turquoise": "Türkis",
  "Gloom Spores": "Düstersporen",
  "Unstable Catalyst": "Instabiler Katalysator",
  "Basic Fertilizer": "Basis-Dünger",
  "Advanced Fertilizer": "Fortg. Dünger",
  "Transformation Potion": "Verwandlungstrank",
  "Bandage": "Verband",
  "Silver Amulet": "Silber-Amulett",
  // Alembic / Alembik
  "Lavender Essential Oil": "Lavendelöl",
  "Brandy": "Brandy",
  "Sulfuric Acid": "Schwefelsäure",
  // Athanor
  "Coke + Charcoal": "Koks + Holzkohle",
  "Steel + Iron": "Stahl + Eisen",
  "Salt + Sand (Athanor)": "Salz + Sand",
  "Copper Powder + Impure": "Kupferpulver + Unges.",
  "Malachite + Crude Shard": "Malachit + Rohsplitter",
  "Life Potion": "Lebenstrank", // V1.9.56: System-Check — die 4 letzten Lücken im Rezept-Namen-Dropdown
  "Clockwork Bird": "Uhrwerk-Vogel",
  "Steinkohle (Coal)": "Steinkohle (Kohle)",
  "Dampf": "Dampf",
  // Advanced Blender / Fortg. Mischer
  "Black Powder": "Schwarzpulver",
  "Growth Potion": "Wachstumstrank",
  "Blast Potion": "Explosionstrank",
  "Panacea Potion": "Allheilmittel", // V1.9.22: Spiel-Name
  "Fertile Catalyst": "Fruchtbarer Katalysator",
  "Resonant Catalyst": "Resonanter Katalysator",
  // Advanced Assembler / Fortg. Montagetisch
  "Pocket Watch": "Taschenuhr",
  "Crown": "Krone",
  // Shaper / Former
  "Jupiter": "Jupiter",
  "Saturn": "Saturn",
  "Mars": "Mars",
  // Advanced Shaper / Fortg. Former
  "Venus": "Venus",
  "Mercury": "Merkur",
  "Luna": "Luna",
  // Arcane Processor / Arkane Verarbeitung
  "Eternal Catalyst": "Ewiger Katalysator",
  "Fairy Dust": "Feenstaub",
  "Star Dust": "Sternenstaub",
  // Arcane Shaper / Arkane Former
  "Sol": "Sol",
  // Advanced Alembic / Fortg. Alembik
  "Aqua Vitae": "Aqua Vitae",
  "Quicksilver": "Quecksilber",
  "Moon Tear": "Mondträne",
  // Advanced Athanor / Fortg. Athanor
  "Silver + Crude Silver": "Silber + Rohsilber",
  "Gold Dust + Impure Gold": "Goldstaub + Unges. Gold",
  "Lapis Lazuli + Crystal": "Lapislazuli + Kristall",
  "Obsidian + Volcanic Ash": "Obsidian + Vulkanasche",
  // Steinofen / Hochofen / Ofen
  "Holz (Logs)": "Baumstamm",
  "Kohle (Coal)": "Steinkohle (Coal)",
  "Holzkohle": "Holzkohle",
  "Koks (Coke)": "Koks (Coke)",
  "Brett (Plank)": "Brett (Plank)"
};

// Deutsche Item-Namen
const MAT_DE = {
  'steam':'Dampf',
  // V1.2.2: fehlende deutsche Namen ergänzt (waren im Englischen hängen geblieben)
  "quicklime_powder":"Branntkalkpulver",
  "sage_powder":"Salbeipulver",
  "chamomile_powder":"Kamillenpulver",
  "gentian_powder":"Enzianpulver",
  "lavender_essential_oil":"Lavendelöl",
logs:"Baumstämme",plank:"Bretter",rotten_log:"Verfaulter Baum (Rotten Log)",
sage:"Salbei (Sage)",sage_seed:"Salbei-Saat (Sage Seeds)",flax:"Lein (Flax)",
flax_seed:"Lein-Saat (Flax Seeds)",redcurrant:"Johannisbeere (Redcurrant)",
redcurrant_seed:"Johannisbeer-Saat (Redcurrant Seeds)",
lavender:"Lavendel (Lavender)",lavender_seed:"Lavendel-Saat (Lavender Seeds)",
chamomile:"Kamille (Chamomile)",chamomile_seed:"Kamille-Saat (Chamomile Seeds)",
gentian:"Enzian (Gentian)",gentian_seed:"Enzian-Saat (Gentian Seeds)",
gentian_nectar:"Enzian-Nektar (Gentian Nectar)",
world_tree_leaf:"Weltbaum-Blatt (World Tree Leaf)",
world_tree_core:"Weltbaum-Kern (World Tree Core)",nutrient:"Nährstoff (Nutrient)",
limestone:"Kalkstein (Limestone)",coal_ore:"Kohleerz (Coal Ore)",
quartz_ore:"Quarzerz (Quartz Ore)",rock_salt:"Steinsalz (Rock Salt)",
iron_ore:"Eisenerz (Iron Ore)",pyrite_ore:"Pyrit-Erz (Pyrite Ore)",
meteorite:"Meteorit (Meteorite)",stone:"Stein (Stone)",coal:"Steinkohle (Coal)",
quicklime:"Branntkalk (Quicklime)",sand:"Sand",salt:"Salz (Salt)",
charcoal:"Holzkohle",charcoal_powder:"Holzkohle-Pulver (Charcoal Powder)",
coke:"Koks (Coke)",coke_powder:"Koks-Pulver (Coke Powder)",
flax_fiber:"Leinenfaser (Flax Fiber)",linen_thread:"Leinenfaden (Linen Thread)",
linen_rope:"Leinenseil (Linen Rope)",linen:"Leinen (Linen)",
iron_ingot:"Eisenbarren (Iron Ingot)",iron_sand:"Eisensand (Iron Sand)",
copper_powder:"Kupferpulver (Copper Powder)",
impure_copper_powder:"Unges. Kupferpulver (Impure Copper Powder)",
copper_ingot:"Kupferbarren (Copper Ingot)",bronze_ingot:"Bronzebarren (Bronze Ingot)",
silver_powder:"Silberpulver (Silver Powder)",
crude_silver_powder:"Rohes Silberpulver (Crude Silver Powder)",
impure_silver_powder:"Unges. Silberpulver (Impure Silver Powder)",
silver_ingot:"Silberbarren (Silver Ingot)",gold_ingot:"Goldbarren (Gold Ingot)",
pure_gold_dust:"Reiner Goldstaub (Pure Gold Dust)",
gold_dust:"Goldstaub (Gold Dust)",
impure_gold_dust:"Unges. Goldstaub (Impure Gold Dust)",
crude_gold_dust:"Rohes Goldstaub (Crude Gold Dust)",
gold_coin:"Goldmünze (Gold Coin)",silver_coin:"Silbermünze (Silver Coin)",
copper_coin:"Kupfermünze (Copper Coin)",
clay:"Lehm (Clay)",clay_powder:"Lehmpulver (Clay Powder)",brick:"Ziegel (Brick)",
glass:"Glas (Glass)",mortar:"Mörser (Mortar)",
iron_nails:"Eisennägel (Iron Nails)",steel_ingot:"Stahlbarren (Steel Ingot)",
steel_gear:"Stahlzahnrad (Steel Gear)",bronze_rivet:"Bronzenagel (Bronze Rivet)",
copper_bearing:"Kupferlager (Copper Bearing)",
large_wooden_gear:"Großes Holzzahnrad (Large Wooden Gear)", // V1.9.63: Name laut SPIEL (User 18.09.: „Holzzahnrad, großes") — V1.9.19 „Großes Zahnrad", davor „Holzrad"
small_wooden_gear:"Kleines Zahnrad (Small Wooden Gear)",
wooden_pulley:"Holzflaschenzug (Wooden Pulley)",
plant_ash:"Pflanzenasche (Plant Ash)",
basic_fertilizer:"Basis-Dünger",
advanced_fertilizer:"Fortgeschrittener Dünger",
gloom_fungus:"Düsterpilz (Gloom Fungus)",
yeast_powder:"Hefepulver (Yeast Powder)",soap:"Seife (Soap)",
soap_powder:"Seifenpulver (Soap Powder)",
perfumed_soap:"Parfumseife (Perfumed Soap)",
perfumed_soap_powder:"Parfumseifenpulver (Perfumed Soap Powder)",
moonlit_soap:"Mondscheinseife (Moonlit Soap)",linseed_oil:"Leinöl (Linseed Oil)",
fruit_wine:"Fruchtwein (Fruit Wine)",limewater:"Kalkwasser (Limewater)",
brine:"Salzwasser (Brine)",brandy:"Brandy",
sulfur:"Schwefel (Sulfur)",sulfur_powder:"Schwefelpulver (Sulfur Powder)",
sulfuric_acid:"Schwefelsäure (Sulfuric Acid)",
healing_potion:"Heiltrank (Healing Potion)",
vitality_potion:"Vitalitätstrank (Vitality Potion)",
transformation_potion:"Verwandlungstrank (Transformation Potion)",
growth_potion:"Wachstumstrank (Growth Potion)",
blast_potion:"Explosionstrank (Blast Potion)",
panacea_potion:"Allheilmittel (Panacea Potion)",
life_potion:"Lebenstrank (Life Potion)",clockwork_bird:"Aufziehvogel (Ornate Bird)", // V1.9.33: Spiel-Liste „Aufziehvogel" · Community-Namen: Ornate Bird / Clockwork Bird (Synonym) — Codex-Seite existiert nicht // V1.9.32: die 2 letzten fehlenden Verkaufs-Items (User-Liste) — Rezepte PLATZHALTER, unverifiziert // V1.9.22: Name laut SPIEL · 320.000 Heat (User-Sandbox gemessen) — Brennstoff-KÖNIG,
black_powder:"Schwarzpulver (Black Powder)",
gloom_spores:"Düstersporen (Gloom Spores)",
unstable_catalyst:"Instabiler Katalysator (Unstable Catalyst)",
fertile_catalyst:"Fruchtbarer Katalysator (Fertile Catalyst)",
resonant_catalyst:"Resonanter Katalysator (Resonant Catalyst)",
eternal_catalyst:"Ewiger Katalysator (Eternal Catalyst)",
turquoise:"Türkis (Turquoise)",topaz:"Topas (Topaz)",malachite:"Malachit (Malachite)",
obsidian:"Obsidian",lapis_lazuli:"Lapislazuli (Lapis Lazuli)",
shattered_crystal:"Zerschmetterter Kristall (Shattered Crystal)",
crude_shard:"Rohsplitter (Crude Shard)",broken_shard:"Gebrochener Splitter (Broken Shard)",
dull_shard:"Matter Splitter (Dull Shard)",crude_crystal:"Rohkristall (Crude Crystal)",
polished_crystal:"Polierter Kristall (Polished Crystal)",
adamant:"Adamant",diamond:"Diamant (Diamond)",
perfect_diamond:"Perfekter Diamant (Perfect Diamond)",
refined_sand_1:"Gesäuberter Sand 1 (Refined Sand 1)",
refined_sand_2:"Gesäuberter Sand 2 (Refined Sand 2)",
refined_sand_3:"Gesäuberter Sand 3 (Refined Sand 3)",
refined_sand_4:"Gesäuberter Sand 4 (Refined Sand 4)",
refined_sand_5:"Gesäuberter Sand 5 (Refined Sand 5)",
fully_refined_sand:"Voll. ges. Sand (Fully Refined Sand)",
gold:"Gold",silver:"Silber (Silver)",
fairy_dust:"Feenstaub (Fairy Dust)",fairy_tear:"Feenträne (Fairy Tear)",
star_dust:"Sternenstaub (Star Dust)",moon_tear:"Mondträne (Moon Tear)",
aqua_vitae:"Aqua Vitae",quicksilver:"Quecksilber (Quicksilver)",
philosophers_stone:"Stein der Weisen (Philosopher's Stone)",
oblivion_essence:"Vergessens-Essenz (Oblivion Essence)",
vitality_essence:"Vitalitäts-Essenz (Vitality Essence)",
ruby:"Rubin (Ruby)",sapphire:"Saphir (Sapphire)",emerald:"Smaragd (Emerald)",
jupiter:"Jupiter",saturn:"Saturn",mars:"Mars",venus:"Venus",
mercury:"Merkur (Mercury)",luna:"Luna",sol:"Sol",
pocket_watch:"Taschenuhr (Pocket Watch)",crown:"Krone (Crown)",
silver_amulet:"Silber-Amulett (Silver Amulet)",bandage:"Verband",
volcanic_ash:"Vulkanasche (Volcanic Ash)"
};

// ===== THEME =====
function setTheme(mode){
  if(mode==='light'){document.body.classList.add('light')}else{document.body.classList.remove('light')}
  document.getElementById('themeLight').classList.toggle('active',mode==='light');
  document.getElementById('themeDark').classList.toggle('active',mode==='dark');
  try{localStorage.setItem('afpTheme',mode)}catch(e){}
  try{drawConns()}catch(e){}
}
(function(){
  try{const t=localStorage.getItem('afpTheme');if(t==='light')setTheme('light')}catch(e){}
  document.addEventListener('keydown',e=>{
    const tag=(e.target.tagName||'').toLowerCase();
    if(tag==='input'||tag==='textarea'||tag==='select')return;
    if(e.key.toLowerCase()==='e'&&!e.ctrlKey&&!e.metaKey){setLang('en');e.preventDefault()}
    if(e.key.toLowerCase()==='d'&&!e.ctrlKey&&!e.metaKey){setLang('de');e.preventDefault()}
    if(e.key==='PageUp'){chgFloor(1);e.preventDefault()}
    if(e.key==='PageDown'){chgFloor(-1);e.preventDefault()}
    // ESC schließt immer den obersten Dialog/Roadmap
    if(e.key==='Escape'){const dl=[...document.querySelectorAll('.dlg,.roadmap')];if(dl.length){dl[dl.length-1].remove();e.preventDefault()}}
  });
})();


// ===== V1.2.1: SPRACHE UMSCHALTEN (E = English, D = Deutsch) =====
// Schaltet Namen von Geraeten, Rezepten und Materialien um.
let uiLang='de';
try{uiLang=localStorage.getItem('afeLang')||'de'}catch(e){}
function matName(m){return uiLang==='de'?((AFE_NAMES&&AFE_NAMES[m])||MAT_DE[m]||m):m}
function recName(k){return uiLang==='de'?(RECIPE_DE[k]||k):k}
function devName(d,key){return uiLang==='de'?(AFE_DEV_NAMES[key]||(d&&d.de)||key):key}
function setLang(l){
  uiLang=l;
  try{localStorage.setItem('afeLang',l)}catch(e){}
  document.title=l==='de'?'⚗️ Alchemy Factory Editor – Produktionsplaner':'⚗️ Alchemy Factory Editor — Production Planner'; // V1.9.58
  if(l!=='de')setTimeout(()=>{try{trFullDoc()}catch(e){}},0); // V1.9.58: ganze Oberfläche übersetzen
  else{try{trRestoreDoc()}catch(e){};try{refreshAll()}catch(e){}} // V1.9.58: EN->DE live zurueckschalten
  const lb=document.getElementById('langBtn');
  if(lb)lb.innerHTML=l==='de'?'🌐 EN':'🌐 DE';
  refreshAll();drawConns();
  const si=document.getElementById('searchInput');renderList(si?si.value:'');
  if(document.getElementById('codexDlg'))renderCodex();
  if(document.getElementById('zonePanel'))refreshZonePanel();
  if(document.getElementById('statusPanel'))refreshStatus();
  if(document.getElementById('machinePicker')&&openCat)fillPicker(openCat);
}



// V1.3.1: Verkaufsraum/Lager/Kolben durchgehend nummerieren (interne IDs,
// wie vom Projektleiter gewuenscht): Reihenfolge = Box-ID (stable genug zum Planen)
// V1.3.16: Aufzug-Rolle dynamisch — die Hälfte, die Ware von Maschinen BEKOMMT,
// ist der EINGANG (unten wie oben, je nach Flussrichtung). Ohne Anschlüsse:
// untere Hälfte = Eingang (Standard-Aufbau von unten nach oben).
function showLiftRoleDialog(id){
  const b=boxes.find(x=>x.id===id);if(!b||!b.liftPartner)return;
  const partner=boxes.find(x=>x.id===b.liftPartner);
  const pf=partner?(partner.floor||0):0;
  const ov=document.createElement('div');ov.className='dlg';ov.id='liftRoleDlg';
  ov.innerHTML=`<div class="box" style="width:460px">
    <h3>🛗 Welche Hälfte ist das HIER?</h3>
    <div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-secondary);margin-bottom:12px;line-height:1.6">
      Diese Box steht auf <b>${(b.floor||0)===0?'EG':'Etage '+(b.floor||0)}</b> — das Gegenstück kommt auf <b>${pf===0?'EG':'Etage '+pf}</b>.<br>
      Wie im Spiel: Rauf ist ein eigener Aufzug, runter auch. Sag, wer diese Hälfte ist:
    </div>
    <div style="display:flex;gap:8px">
      <button onclick="setLiftRole(${b.id},'in')" style="flex:1;padding:12px;background:rgba(163,113,247,.15);border:2px solid rgba(163,113,247,.5);border-radius:10px;color:var(--lift-accent);font-weight:700;cursor:pointer">📥 EINGANG<br><small style="font-weight:400">Ware kommt HIER rein<br>(Maschinen &rarr; diese Box)</small></button>
      <button onclick="setLiftRole(${b.id},'out')" style="flex:1;padding:12px;background:rgba(88,166,255,.12);border:2px solid rgba(88,166,255,.5);border-radius:10px;color:var(--accent-blue);font-weight:700;cursor:pointer">📤 AUSGANG<br><small style="font-weight:400">Ware kommt HIER raus<br>(diese Box &rarr; Maschinen)</small></button>
    </div>
    <div style="font-size:calc(var(--u,1.25) * 11.5px);color:var(--text-muted);margin-top:10px">Das Gegenstück wird automatisch das Gegenteil. Später änderbar: ⇄-Knopf im Aufzug-Panel.</div>
    <div class="cc"><button onclick="document.getElementById('liftRoleDlg').remove()">Fertig</button></div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function setLiftRole(id,role){
  const b=boxes.find(x=>x.id===id);if(!b||!b.liftPartner)return;
  const partner=boxes.find(x=>x.id===b.liftPartner);if(!partner)return;
  b.liftRole=role;partner.liftRole=role==='in'?'out':'in'; // V1.3.17: Gegenstück = Gegenteil
  const dlg=document.getElementById('liftRoleDlg');if(dlg)dlg.remove();
  refreshBox(b.id);refreshBox(partner.id);drawConns();refreshAll();saveStorage();
}
function swapLiftRoles(id){
  const b=boxes.find(x=>x.id===id);if(!b||!b.liftPartner)return;
  const partner=boxes.find(x=>x.id===b.liftPartner);if(!partner)return;
  const nr=liftRole(b)==='in'?'out':'in';
  b.liftRole=nr;partner.liftRole=nr==='in'?'out':'in';
  refreshBox(b.id);refreshBox(partner.id);drawConns();refreshAll();saveStorage();
}
function liftRole(b){
  if(b.liftRole==='in'||b.liftRole==='out')return b.liftRole; // V1.3.17: User-Wahl hat Vorrang
  const partner=boxes.find(x=>x.id===b.liftPartner);
  if(!partner)return 'in';
  const isLiftSrc=id=>{const sb=boxes.find(x=>x.id===id);return sb&&DEVICES[sb.device]&&DEVICES[sb.device].isLift};
  const iHave=connections.some(c=>c.to===b.id&&!isLiftSrc(c.from));
  const pHas=connections.some(c=>c.to===partner.id&&!isLiftSrc(c.from));
  if(iHave&&!pHas)return 'in';
  if(pHas&&!iHave)return 'out';
  return (b.floor||0)<=(partner.floor||0)?'in':'out';
}
function sinkNumber(b){
  const same=boxes.filter(x=>x.device===b.device).sort((a,c)=>a.id-c.id);
  return same.findIndex(x=>x.id===b.id)+1;
}

// ===== V1.2.2: 🏷️ NAMENS-CHECK — Namen direkt anpassen (das Spiel mischt selbst EN/DE/FR!) =====
// Überschreibungen: localStorage afeNames (Materialien) + afeDevNames (Geräte)
let AFE_NAMES={},AFE_DEV_NAMES={};
try{AFE_NAMES=JSON.parse(localStorage.getItem('afeNames')||'{}');AFE_DEV_NAMES=JSON.parse(localStorage.getItem('afeDevNames')||'{}')}catch(e){}
function saveNameOverrides(){
  try{localStorage.setItem('afeNames',JSON.stringify(AFE_NAMES));localStorage.setItem('afeDevNames',JSON.stringify(AFE_DEV_NAMES))}catch(e){}
}
let nameTab='mat';
function showNameEditor(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='nameDlg';
  ov.innerHTML=`<div class="box" style="width:560px">
    <h3>🏷️ Namen prüfen & ändern</h3>
    <p style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-secondary);margin-bottom:8px">Das Spiel mischt selbst Sprachen (intern „Wood", angezeigt „Logs", deutsch „Holz"). Trage hier ein, wie das Item <b>bei dir im Spiel heißt</b> — gilt sofort, wird gespeichert und mit jedem Setup-Export mitgegeben.</p>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <button id="ntMat" onclick="nameTab='mat';renderNameList()" style="flex:1;padding:7px;border-radius:8px;cursor:pointer;font-weight:700;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary)">📦 Materialien</button>
      <button id="ntDev" onclick="nameTab='dev';renderNameList()" style="flex:1;padding:7px;border-radius:8px;cursor:pointer;font-weight:700;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary)">🏭 Geräte</button>
      <input id="nameSearch" placeholder="🔍 suchen…" oninput="renderNameList()" style="flex:1;padding:7px 10px;background:var(--bg-primary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);outline:none">
    </div>
    <div id="nameList" style="max-height:46vh;overflow-y:auto"></div>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button onclick="AFE_NAMES={};AFE_DEV_NAMES={};saveNameOverrides();renderNameList();refreshAll()" style="flex:1;padding:8px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer;font-size:calc(var(--u,1.25) * 12.5px)">↺ Alle zurücksetzen</button>
      <button onclick="document.getElementById('nameDlg').remove()" style="flex:1;padding:8px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer;font-size:calc(var(--u,1.25) * 12.5px);font-weight:600">✕ Fertig</button>
    </div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
  renderNameList();
}
function renderNameList(){
  const list=document.getElementById('nameList');if(!list)return;
  const f=(document.getElementById('nameSearch')?.value||'').toLowerCase();
  document.getElementById('ntMat').style.borderColor=nameTab==='mat'?'var(--accent-blue)':'var(--border)';
  document.getElementById('ntDev').style.borderColor=nameTab==='dev'?'var(--accent-blue)':'var(--border)';
  let html='';
  if(nameTab==='mat'){
    Object.entries(MAT_DE).sort((a,b)=>a[1].localeCompare(b[1])).forEach(([k,de])=>{
      if(f&&!(de.toLowerCase().includes(f)||k.toLowerCase().includes(f)))return;
      const cur=AFE_NAMES[k]||de;
      html+=`<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid var(--border-light)">
        <span style="flex:1;font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-primary)">${cur}${AFE_NAMES[k]?' <small style="color:var(--accent-purple)">(geändert)</small>':''}</span>
        <small style="font-size:calc(var(--u,1.25) * 11px);color:var(--text-muted);width:110px;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k}</small>
        <input value="${String(cur).replace(/"/g,'&quot;')}" onchange="AFE_NAMES['${k}']=this.value||null;saveNameOverrides();refreshAll();renderNameList()" style="width:130px;padding:4px 7px;font-size:calc(var(--u,1.25) * 12.5px);background:var(--bg-primary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);outline:none">
      </div>`;
    });
  }else{
    Object.entries(DEVICES).sort((a,b)=>(a[1].de||'').localeCompare(b[1].de||'')).forEach(([k,d])=>{
      if(f&&!((d.de||'').toLowerCase().includes(f)||k.toLowerCase().includes(f)))return;
      const cur=AFE_DEV_NAMES[k]||d.de||k;
      html+=`<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid var(--border-light)">
        <span style="flex:1;font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-primary)">${cur}${AFE_DEV_NAMES[k]?' <small style="color:var(--accent-purple)">(geändert)</small>':''}</span>
        <small style="font-size:calc(var(--u,1.25) * 11px);color:var(--text-muted);width:110px;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k}</small>
        <input value="${String(cur).replace(/"/g,'&quot;')}" onchange="AFE_DEV_NAMES['${k}']=this.value||null;saveNameOverrides();refreshAll();renderNameList()" style="width:130px;padding:4px 7px;font-size:calc(var(--u,1.25) * 12.5px);background:var(--bg-primary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);outline:none">
      </div>`;
    });
  }
  list.innerHTML=html||'<div style="color:var(--text-muted);text-align:center;padding:12px;font-size:calc(var(--u,1.25) * 12.5px)">Kein Treffer</div>';
}

// ===== STATE =====
let boxes=[], connections=[], nextId=1, selBox=null, dragBox=null, dragOff={x:0,y:0};
// ===== ETAGEN (Turm-Modus) =====
// Boxen haben b.floor (0=EG, 1..n = Stockwerke). Die Ansicht zeigt immer nur
// eine Etage. Aufzuege (isLift) verbinden Etagen: was unten rein kommt,
// kommt beim Gegenstueck oben raus - ohne Band-Limit (wie Rohre im Spiel).
let currentFloor=0;
function setFloor(n){
  currentFloor=Math.max(0,parseInt(n)||0);
  const lbl=document.getElementById('floorLbl');
  if(lbl)lbl.textContent=currentFloor===0?'EG':'E'+currentFloor;
  applyFloorVisibility();drawConns();refreshAll();updateStatus();
  if(selectedIds.size>0||selectedConn!=null){ // V1.9.45: Geister-Menüs weg — Auswahl anderer Etagen bleibt sonst unsichtbar hängen und das Menü zeigt Maschinen, die man nicht sieht
    selectedIds=new Set();selBox=null;selectedConn=null;groupDragOffsets=null;
    if(typeof applySelectionClasses==='function')applySelectionClasses();
    updateSelInfo();
  }
}
function chgFloor(d){setFloor(currentFloor+d)}
function applyFloorVisibility(){
  boxes.forEach(b=>{
    const el=document.getElementById('box-'+b.id);
    if(el)el.style.display=((b.floor||0)===currentFloor)?'':'none';
  });
}
function moveFloor(id,d){
  const b=boxes.find(x=>x.id===id);if(!b)return;
  b.floor=Math.max(0,(b.floor||0)+d);
  applyFloorVisibility();drawConns();refreshBox(id);saveStorage();updateStatus();
}
function jumpToFloor(f){ // V1.9.40: "Hin" im Etagen-Dialog springt WIRKLICH hin — zur Mitte der Boxen dieser Etage
  setFloor(f);
  const fl=boxes.filter(b=>(b.floor||0)===f);
  if(fl.length===0)return;
  const cx=fl.reduce((s,b)=>s+b.x,0)/fl.length;
  const cy=fl.reduce((s,b)=>s+b.y,0)/fl.length;
  canvasArea.scrollLeft=Math.max(0,cx*zoomLevel-canvasArea.clientWidth/2);
  canvasArea.scrollTop=Math.max(0,cy*zoomLevel-canvasArea.clientHeight/2);
  syncCanvasPos();drawConns();
  userMsg('🏬 Zur '+(f===0?'EG':'Etage '+f)+' gesprungen — Mitte deiner '+(fl.length)+' Boxen dort');
}
function jumpToLiftPartner(id){ // V1.9.40: "dorthin springen" springt WIRKLICH hin — Etage wechseln UND zum Partner scrollen (vorher nur Etikettwechsel: bei entfernt gebautem EG sah es aus wie "alle Items weg")
  const b=boxes.find(x=>x.id===id);
  if(!b||!b.liftPartner)return;
  const p=boxes.find(x=>x.id===b.liftPartner);
  const pf=p?(p.floor||0):0;
  setFloor(pf);
  if(p){
    canvasArea.scrollLeft=Math.max(0,p.x*zoomLevel-canvasArea.clientWidth/2);
    canvasArea.scrollTop=Math.max(0,p.y*zoomLevel-canvasArea.clientHeight/2);
    syncCanvasPos();drawConns();
    userMsg('🛗 Zur Aufzugs-Hälfte auf '+(pf===0?'EG':'Etage '+pf)+' gesprungen — hier ist sie platziert');
    selectedIds=new Set([p.id]);selBox=null;selectedConn=null; // V1.9.45: Partner markieren — Menü weiß sofort, wo du bist
    if(typeof applySelectionClasses==='function')applySelectionClasses();
    updateSelInfo();
  }
}
function setLiftFloor(id,n){
  const b=boxes.find(x=>x.id===id);if(!b||!b.liftPartner)return;
  const p=boxes.find(x=>x.id===b.liftPartner);if(!p)return;
  p.floor=Math.max(0,parseInt(n)||0);
  applyFloorVisibility();refreshBox(id);refreshBox(p.id);saveStorage();
}
// Mehrfachauswahl: Boxen können per Umschalt+Klick oder Rahmen-Aufziehen (auf
// leerer Fläche mit gedrückter Umschalt-Taste) zu einer Gruppe zusammengefasst
// und dann gemeinsam verschoben werden.
let selectedIds=new Set();
let groupDragOffsets=null; // {id: {dx,dy}} relativ zur gezogenen Box
let groupWaypoints=null,groupDragStart=null; // V1.9.45: Wegpunkte der INNEREN Linien wandern mit der Gruppe mit (User-Fund: Block verschieben, Punkte blieben stehen)
let marqueeStart=null, marqueeEl=null;
let connecting=null;
let dragPanning=false, panStart={x:0,y:0};
let canvas, ctx, canvasArea;
let zoomLevel=1; // V1.4.3: Zoom wieder neutral — die Größe tragen jetzt die Boxen selbst (A/A+/A++)
try{const _sz=parseFloat(localStorage.getItem('afe_zoom2'));if(_sz>=ZOOM_MIN&&_sz<=ZOOM_MAX)zoomLevel=_sz;}catch(e){}
let UI_SCALE=1.25; // V1.4.3: ECHTE UI-Größe (Boxen, Schriften, Anschlüsse) — kein Zoom! Standard A+
try{const _u=parseFloat(localStorage.getItem('afe_uisz'));if(_u>=1&&_u<=2)UI_SCALE=Math.round(_u*20)/20;}catch(e){} // V1.9.44: stufigenlos 100–200 % — alte A/A+/A++/A+++ Werte bleiben gueltig
const ZOOM_MIN=0.05, ZOOM_MAX=3, ZOOM_STEP=0.05; // V1.9.34: 5%-Schritte + tieferer Min-Zoom (User-Wunsch — große Setups ganz ins Bild)
// Portal item configurations: {boxId: {item: 'plank', rate: 10}}
let portalConfig={};
let centerPos=null; // {x, y} or null
let centerLabel='Zentrum';
// Globale Fabrik-Stufen, wie im Spiel selbst einstellbar (siehe "Tab"-Fenster
// im Spiel unter "World"): Factory Efficiency skaliert Maschinen-Tempo/Ertrag
// UND Wärmeverbrauch gemeinsam, Logistics Efficiency skaliert die Band-
// Kapazität. Beides ist im Spiel unabhängig hochstufbar - deshalb hier als
// zwei getrennte, frei einstellbare Werte statt einer geratenen Formel.
let factoryEfficiency=100; // Prozent, Basis 100%
let beltCapacity=60; // Stück/Min pro Band (=Verbindung), Basis 60/Min

let clipboardBoxes=null; // {boxes:[...], conns:[...]} - relative Kopie der zuletzt kopierten Auswahl
const GRID_SIZE=50; // V1.4.1: Raster halbiert (100->50) — feineres Spike-Gitter, deckt sich mit dem Hintergrund-Raster
let snapEnabled=true;
function snapVal(v){return snapEnabled?Math.round(v/GRID_SIZE)*GRID_SIZE:v}
function toggleSnap(){
  snapEnabled=!snapEnabled;
  const btn=document.getElementById('snapBtn');
  if(btn)btn.classList.toggle('on',snapEnabled);
  saveStorage();
  userMsg(snapEnabled?'🧲 Raster-Einrasten: AN':'🧲 Raster-Einrasten: AUS'); // V1.9.5: immer sichtbar bestätigen
}

function copySelection(){
  if(selectedIds.size===0)return;
  const ids=[...selectedIds];
  // V1.9.44: Aufzug immer ALS PAAR kopieren — eine Hälfte allein wäre unbrauchbar (User-Fund: Kopie musste gelöscht + neu gesetzt werden)
  boxes.forEach(b=>{if(ids.includes(b.id)&&b.liftPartner&&!ids.includes(b.liftPartner)&&boxes.some(x=>x.id===b.liftPartner))ids.push(b.liftPartner)});
  const selBoxes=boxes.filter(b=>ids.includes(b.id));
  if(selBoxes.length===0)return;
  const minX=Math.min(...selBoxes.map(b=>b.x)), minY=Math.min(...selBoxes.map(b=>b.y));
  clipboardBoxes={
    boxes:selBoxes.map(b=>({device:b.device,recipe:b.recipe,count:b.count,dx:b.x-minX,dy:b.y-minY,origId:b.id,zone:b.zone,floor:b.floor||0,liftRole:b.liftRole})), // V1.9.44: liftRole mitnehmen — sonst ist die Flussrichtung der Kopie kaputt
    conns:connections.filter(c=>ids.includes(c.from)&&ids.includes(c.to)).map(c=>({from:c.from,to:c.to,fromPort:c.fromPort||0,toPort:c.toPort||0,origConnId:connId(c),branchParentId:c.branchParentId,branchWpIdx:c.branchWpIdx,mergeParentId:c.mergeParentId,mergeWpIdx:c.mergeWpIdx,waypoints:(c.waypoints&&c.waypoints.length)?c.waypoints.map(p=>({dx:p.x-minX,dy:p.y-minY})):undefined})), // V1.9.51: Wegpunkte RELATIV (vorher absolut: Kopien erbten Punkte im alten Gebiet — Zonen-Kopier-Bug Zentrum.json) + connId/Weiche/Merge für Remap
    furnaceLinks:selBoxes.filter(b=>b.furnaceId&&ids.includes(b.furnaceId)).map(b=>({boxId:b.id,furnaceId:b.furnaceId})),
    liftLinks:selBoxes.filter(b=>b.liftPartner&&ids.includes(b.liftPartner)).map(b=>({boxId:b.id,partnerId:b.liftPartner}))
  };
  clipboardBoxes.portalConfig={};selBoxes.forEach(b=>{if(portalConfig[b.id])clipboardBoxes.portalConfig[b.id]=portalConfig[b.id]}); // V1.9.28
  const info=document.getElementById('topInfo');
  if(info)info.textContent=`${selBoxes.length} Maschine(n) kopiert (Strg+V zum Einfügen)`;
}
function pasteSelection(){
  if(!clipboardBoxes||clipboardBoxes.boxes.length===0)return;
  startPasteMode(clipboardBoxes,'Auswahl'); // V1.4.0: Stempel-Modus — an der Maus tragen, Klick = platzieren, wiederholbar
}

// ============ V1.4.0: STEMPEL-MODUS (Zone/Kopie an der Maus tragen + per Klick ablegen) ============
let pasteMode=null; // {clip,label,floorMode:'keep'|'current',el}
let pasteDown=null; // V1.9.7: {x,y,moved} — Klick stempelt, ZIEHEN bewegt die Karte (Kopie bleibt!)
function startPasteMode(clip,label,floorMode){
  endPasteMode();
  if(!clip||!clip.boxes||clip.boxes.length===0)return;
  pasteMode={clip:clip,label:label||'Kopie',floorMode:floorMode||'current'};
  const g=document.createElement('div');g.id='pasteGhost';
  g.style.cssText='position:absolute;z-index:60;pointer-events:none;';
  g.innerHTML=clip.boxes.map(cb=>{
    const d=DEVICES[cb.device];
    return `<div style="position:absolute;left:${cb.dx}px;top:${cb.dy}px;min-width:${Math.round(360*UI_SCALE)}px;padding:8px 12px;background:rgba(63,185,80,.15);border:2px dashed #3fb950;border-radius:10px;font-size:12.5px;color:var(--accent-green);font-weight:600;white-space:nowrap">${d?d.de:cb.device}${(cb.count||1)>1?' ×'+cb.count:''}</div>`;
  }).join('');
  document.getElementById('boxesContainer').appendChild(g);
  pasteMode.el=g;
  const info=document.getElementById('topInfo');
  if(info)info.textContent=`📋 ${label}: ${clip.boxes.length} Maschine(n) an der Maus — Klick = platzieren auf Etage ${currentFloor===0?'EG':currentFloor} (wiederholbar) · ZIEHEN = Karte bewegen · ESC oder rechte Maus = fertig`;
}
function updatePasteGhost(wx,wy){
  if(!pasteMode||!pasteMode.el)return;
  pasteMode.el.style.left=Math.max(0,snapVal(wx))+'px';pasteMode.el.style.top=Math.max(0,snapVal(wy))+'px'; // V1.9.7: nicht über den Fabrikrand
}
function endPasteMode(){
  if(pasteMode&&pasteMode.el)pasteMode.el.remove();
  pasteMode=null;
  const info=document.getElementById('topInfo');if(info)info.textContent='';
}
function placePasteAt(wx,wy){
  if(!pasteMode)return;
  const clip=pasteMode.clip,clipLabel=pasteMode.label,keepFloor=pasteMode.floorMode==='keep';
  const idMap={};
  const baseX=snapVal(wx),baseY=snapVal(wy);
  nextId=Math.max(nextId,(boxes.length?Math.max(...boxes.map(b=>b.id)):0)+1); // V1.9.44: ID-Kollisionsschutz — nie bereits vergebene IDs erneut vergeben (Quelle für „verschwundene Verbindungen")
  // V1.9.44: Ebenen IMMER relativ zur aktuellen Etage. Gleiches Stockwerk im Kopiertem = hier platziert
  // (der V1.9.27-Fix bleibt), ABER Mehr-Etagen-Strukturen (Lift-Paare!) bleiben intakt statt plattgedrückt zu werden.
  const baseFloor=Math.min(...clip.boxes.map(cb=>cb.floor||0));
  clip.boxes.forEach(cb=>{
    const newId=nextId++;
    idMap[cb.origId]=newId;
    const nb={id:newId,device:cb.device,recipe:cb.recipe,count:cb.count,floor:currentFloor+((cb.floor||0)-baseFloor),x:snapVal(baseX+cb.dx),y:snapVal(baseY+cb.dy)};
    if(cb.zone)nb.zone=cb.zone;
    if(cb.liftRole)nb.liftRole=cb.liftRole; // V1.9.44: Eingangs-/Ausgangs-Richtung des Aufzugs überlebt das Kopieren
    if(clip.portalConfig&&clip.portalConfig[cb.origId])portalConfig[nb.id]=JSON.parse(JSON.stringify(clip.portalConfig[cb.origId])); // V1.9.28: Portal-Konfig mitnehmen
    boxes.push(nb);
  });
  (clip.liftLinks||[]).forEach(ll=>{
    if(idMap[ll.boxId]&&idMap[ll.partnerId]){
      const a=boxes.find(x=>x.id===idMap[ll.boxId]),pr=boxes.find(x=>x.id===idMap[ll.partnerId]);
      if(a)a.liftPartner=idMap[ll.partnerId];
      if(pr)pr.liftPartner=idMap[ll.boxId];
    }
  });
  (clip.furnaceLinks||[]).forEach(fl=>{
    if(idMap[fl.boxId]&&idMap[fl.furnaceId]){
      const nb=boxes.find(x=>x.id===idMap[fl.boxId]);
      if(nb)nb.furnaceId=idMap[fl.furnaceId];
    }
  });
  const connMap={}; // V1.9.51: alte connId -> neue: Weichen/Merges verweisen nach dem Kopieren auf die RICHTIGE neue Linie
  (clip.conns||[]).forEach(c=>{
    if(idMap[c.from]&&idMap[c.to]){
      const nc={from:idMap[c.from],to:idMap[c.to],fromPort:c.fromPort||0,toPort:c.toPort||0};
      if(c.waypoints&&c.waypoints.length)nc.waypoints=c.waypoints.map(p=>p.dx!==undefined?{x:snapVal(baseX+p.dx),y:snapVal(baseY+p.dy)}:{x:p.x,y:p.y}); // V1.9.51: RELATIVE Punkte mitverschieben (alte Clips mit absoluten Punkten laufen weiter)
      if(c.origConnId){nc.id=connId(nc);connMap[c.origConnId]=nc.id}
      connections.push(nc);
    }
  });
  (clip.conns||[]).forEach(c=>{ // V1.9.51: Weichen-/Merge-Verweise auf die NEUE Eltern-Linie umschreiben
    if(connMap[c.origConnId]){
      const nc=connections.find(x=>x.id===connMap[c.origConnId]);
      if(nc){
        if(c.branchParentId&&connMap[c.branchParentId]){nc.branchParentId=connMap[c.branchParentId];nc.branchWpIdx=c.branchWpIdx}
        if(c.mergeParentId&&connMap[c.mergeParentId]){nc.mergeParentId=connMap[c.mergeParentId];nc.mergeWpIdx=c.mergeWpIdx}
      }
    }
  });
  Object.values(idMap).forEach(id=>{const b=boxes.find(x=>x.id===id);if(b)makeBoxEl(b)});
  refreshAll();drawConns();saveStorage();
  // V1.9.27: Kollisions-Check — Stempel direkt auf vorhandene Maschinen? Lieber laut sagen als Salat
  const neue=boxes.filter(b2=>idMap[b2.id]);
  let koll=0;
  for(let i=0;i<neue.length;i++)for(let j=0;j<boxes.length;j++){
    if(idMap[boxes[j].id])continue;
    if(Math.abs(neue[i].x-boxes[j].x)<120&&Math.abs(neue[i].y-boxes[j].y)<120){koll++;break;}
  }
  if(koll>0)userMsg('⚠️ Achtung: '+koll+' gestempelte Maschine(n) liegen direkt auf vorhandenen — verschieben oder Entf, sonst wird es Salat!');
  const info=document.getElementById('topInfo');
  if(info)info.textContent=`✅ ${clipLabel}: ${clip.boxes.length} Maschine(n) platziert (Etage ${currentFloor===0?'EG':currentFloor}) — weiterer Klick stempelt erneut · Ziehen bewegt die Karte · ESC = fertig`;
}

document.addEventListener('keydown',e=>{ // V1.9.3: Erklärt, wenn Entf in einem Eingabefeld hängen bleibt (häufigste Stolperfalle!)
  if(e.key==='Delete'&&!e.ctrlKey&&!e.metaKey){
    const t=(e.target&&e.target.tagName||'').toLowerCase();
    if(t==='input'||t==='textarea'||t==='select')userMsg('💡 Entf tippt gerade im Eingabefeld — einmal auf die Karte klicken, dann löscht Entf die markierte Maschine');
  }
},{capture:true});
document.addEventListener('keydown',e=>{
  const tag=(e.target.tagName||'').toLowerCase();
  if(tag==='input'||tag==='textarea'||tag==='select')return; // nicht eingreifen, wenn gerade in einem Feld getippt wird
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='c'){copySelection();e.preventDefault();}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='v'){pasteSelection();e.preventDefault();}
  if(e.key==='Delete'){window.__entfSeen=true;deleteSelection();e.preventDefault();} // V1.9.3: Marker für Diagnose
  if(pasteMode&&(e.key==='ArrowLeft'||e.key==='ArrowRight'||e.key==='ArrowUp'||e.key==='ArrowDown')){ // V1.9.15: Karte mit PFEILTASTEN bewegen — Kopie bleibt an der Maus (Shift = schneller)
    const step=e.shiftKey?400:120;
    if(e.key==='ArrowLeft')canvasArea.scrollLeft-=step;
    if(e.key==='ArrowRight')canvasArea.scrollLeft+=step;
    if(e.key==='ArrowUp')canvasArea.scrollTop-=step;
    if(e.key==='ArrowDown')canvasArea.scrollTop+=step;
    syncCanvasPos();drawConns();
    e.preventDefault();return;
  }
  if(e.key==='Escape'){ // ESC (V1.9.34): offene Verbindung abbrechen > Stempel > Hub > Auswahl
    if(connecting){connecting=null;drawConns();canvasArea.style.cursor='';userMsg('🔗 Verbindung abgebrochen — Kette beendet');updateStatus();updateSelInfo();}
    else{const _th=document.getElementById('toolsHub');if(pasteMode){endPasteMode();}else if(_th){_th.remove();}else clearSelection();}
  }
});

window.addEventListener('load',()=>{
  canvas=document.getElementById('connCanvas');
  ctx=canvas.getContext('2d');
  canvasArea=document.getElementById('canvasArea');
  renderList();
  document.getElementById('boxesContainer').style.transform=`scale(${zoomLevel})`;
  const _zl=document.getElementById('zoomLevel');if(_zl)_zl.textContent=Math.round(zoomLevel*100)+'%';
  document.body.style.setProperty('--u',UI_SCALE); // V1.4.3: gespeicherte UI-Größe anwenden
  try{if(boxes.length===0&&!localStorage.getItem('afe_onboard'))setTimeout(showOnboarding,600)}catch(e){} // V1.5.0: Erste-Schritte-Fenster beim ersten Start
  document.querySelectorAll('.cmdbar button[data-ui]').forEach(b=>b.classList.toggle('active-ui',parseFloat(b.dataset.ui)===UI_SCALE));
  const _ul=document.getElementById('uiLbl');if(_ul)_ul.textContent=Math.round(UI_SCALE*100)+'%'; // V1.9.44: Prozent statt A+/A++
  loadStorage();
  resizeCanvas();
  window.addEventListener('resize',resizeCanvas);
  
  // Ansicht auf die vorhandenen Maschinen ausrichten (falls welche da sind),
  // sonst auf die Kartenmitte
  if(boxes.length>0){
    fitViewToBoxes();
  } else {
    canvasArea.scrollLeft=(MAP_SIZE-canvasArea.clientWidth)/2;
    canvasArea.scrollTop=(MAP_SIZE-canvasArea.clientHeight)/2;
  }
  
  // Zoom with mouse wheel
  canvasArea.addEventListener('contextmenu',e=>{if(pasteMode){endPasteMode();e.preventDefault();}}); // V1.4.0
  canvasArea.addEventListener('scroll',()=>{ // V1.9.8: Canvas-Fenster bewegt sich mit dem Blick mit (weiße-Wand-Fix)
    syncCanvasPos();
    if(window.__afeRaf)return;window.__afeRaf=requestAnimationFrame(()=>{window.__afeRaf=0;drawConns();});
  },{passive:true});
  window.addEventListener('resize',()=>{try{resizeCanvas()}catch(e){if(window.__afeErrors)__afeErrors.push('resize: '+(e&&e.message||e))}});
  canvasArea.addEventListener('wheel',e=>{
    e.preventDefault();
    const delta=e.deltaY>0?-ZOOM_STEP:ZOOM_STEP;
    const r=canvasArea.getBoundingClientRect();
    const mx=e.clientX-r.left, my=e.clientY-r.top;
    setZoom(zoomLevel+delta, mx, my);
  },{passive:false});
  
  document.addEventListener('mousemove',e=>{
    if(zoneLabelDrag){ // V1.9.48: Zonen-Label ziehen
      const rz=canvasArea.getBoundingClientRect();
      const mxz=(e.clientX-rz.left+canvasArea.scrollLeft)/zoomLevel;
      const myz=(e.clientY-rz.top+canvasArea.scrollTop)/zoomLevel;
      if(Math.abs(mxz-zoneLabelDrag.lx)+Math.abs(myz-zoneLabelDrag.ly)>5)zoneLabelDrag.moved=true;
      if(zoneLabelDrag.moved){
        const zc=zoneConfig[zoneLabelDrag.zn]||(zoneConfig[zoneLabelDrag.zn]={});
        const loff=zc.loff||(zc.loff={x:0,y:0});
        loff.x+=mxz-zoneLabelDrag.lx;loff.y+=myz-zoneLabelDrag.ly;
        drawConns();
      }
      zoneLabelDrag.lx=mxz;zoneLabelDrag.ly=myz;
      return;
    }
    if(zoneMoveDrag){ // V1.9.61: GANZE Zone ziehen — alle Maschinen dieser Etage + innere Wegpunkte
      const rz=canvasArea.getBoundingClientRect();
      const mxz=(e.clientX-rz.left+canvasArea.scrollLeft)/zoomLevel;
      const myz=(e.clientY-rz.top+canvasArea.scrollTop)/zoomLevel;
      if(Math.abs(mxz-zoneMoveDrag.lx)+Math.abs(myz-zoneMoveDrag.ly)>5)zoneMoveDrag.moved=true;
      if(zoneMoveDrag.moved&&zoneMoveDrag.boxes.length){
        const a=zoneMoveDrag.boxes[0];
        a.x=Math.max(0,snapVal(a.x+(mxz-zoneMoveDrag.lx)));
        a.y=Math.max(0,snapVal(a.y+(myz-zoneMoveDrag.ly)));
        const gdx=a.x-zoneMoveDrag.start[a.id].x,gdy=a.y-zoneMoveDrag.start[a.id].y;
        zoneMoveDrag.boxes.forEach(m=>{
          if(m!==a){m.x=Math.max(0,snapVal(zoneMoveDrag.start[m.id].x+gdx));m.y=Math.max(0,snapVal(zoneMoveDrag.start[m.id].y+gdy));}
          updatePos(m);
        });
        zoneMoveDrag.ways.forEach(gw=>{gw.c.waypoints=gw.orig.map(p=>({x:p.x+gdx,y:p.y+gdy}))});
        resizeCanvas();drawConns();
      }
      zoneMoveDrag.lx=mxz;zoneMoveDrag.ly=myz;
      return;
    }
    if(connecting&&e.buttons>0&&connecting.downX!==undefined&&(Math.abs(e.clientX-connecting.downX)+Math.abs(e.clientY-connecting.downY))>10)connecting.dragged=true; // V1.9.36: Schwelle 6->10px — Klick-Klick wird durch Handzittern nicht mehr zum Drag
    if(pasteMode){ // V1.4.0: Einfüge-Ghost folgt der Maus
      const r=canvasArea.getBoundingClientRect();
      updatePasteGhost((e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel,(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel);
    }
    // Wegpunkt ziehen
    if(draggingWaypoint){
      const r=canvasArea.getBoundingClientRect();
      const mx=(e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel;
      const my=(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel;
      const c=connections[draggingWaypoint.connIdx];
      if(c&&c.waypoints&&c.waypoints[draggingWaypoint.wpIdx]){
        c.waypoints[draggingWaypoint.wpIdx].x=Math.max(0,snapVal(mx));
        c.waypoints[draggingWaypoint.wpIdx].y=Math.max(0,snapVal(my));
        drawConns();
      }
      return;
    }
    // Hover-Erkennung fuer Wegpunkte
    {const r=canvasArea.getBoundingClientRect();
    const mx=(e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel;
    const my=(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel;
    const oldH=hoveredWaypoint;
    hoveredWaypoint=findWaypointAt(mx,my);
    if(JSON.stringify(oldH)!==JSON.stringify(hoveredWaypoint))drawConns();
    const zHov=zoneLabelHits.some(rr=>mx>=rr.x&&mx<=rr.x+rr.w&&my>=rr.y&&my<=rr.y+rr.h); // V1.9.48: Label-Hover = Zeiger
    const nCur=hoveredWaypoint?'grab':(zHov?'grab':(connecting?'crosshair':''));
    if(canvasArea.style.cursor!==nCur)canvasArea.style.cursor=nCur;
    }
    if(dragBox){
      const r=canvasArea.getBoundingClientRect();
      dragBox.x=Math.max(0,snapVal((e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel-dragOff.x));
      dragBox.y=Math.max(0,snapVal((e.clientY-r.top+canvasArea.scrollTop)/zoomLevel-dragOff.y));
      if(dragBox.x===0||dragBox.y===0)mapEdgeHint(); // V1.9.7: Fabrikrand
      updatePos(dragBox);
      if(groupDragOffsets){
        Object.entries(groupDragOffsets).forEach(([id,off])=>{
          if(parseInt(id)===dragBox.id)return;
          const bb=boxes.find(x=>x.id===parseInt(id));
          if(bb){bb.x=Math.max(0,snapVal(dragBox.x+off.dx));bb.y=Math.max(0,snapVal(dragBox.y+off.dy));updatePos(bb);}
        });
        if(groupWaypoints&&groupDragStart){ // V1.9.45: innere Linien führen weiter sauber zum Block — Punkte wandern mit
          const gdx=dragBox.x-groupDragStart.x,gdy=dragBox.y-groupDragStart.y;
          groupWaypoints.forEach(gw=>{gw.c.waypoints=gw.orig.map(p=>({x:p.x+gdx,y:p.y+gdy}))});
        }
      }
      resizeCanvas();
      drawConns();
    }
    if(marqueeStart){
      const r=canvasArea.getBoundingClientRect();
      // V1.9.44: AUTO-SCROLL am Rand — Auswahl über den Bildschirmrand hinausziehen (vorher: Kasten rutschte/schrumpfte, User-Fund bei 5 % Zoom)
      const ED=36,SP=18;
      if(e.clientX<r.left+ED)canvasArea.scrollLeft-=SP;else if(e.clientX>r.right-ED)canvasArea.scrollLeft+=SP;
      if(e.clientY<r.top+ED)canvasArea.scrollTop-=SP;else if(e.clientY>r.bottom-ED)canvasArea.scrollTop+=SP;
      // V1.9.44: Kasten komplett in KARTEN-Koordinaten — Bildschirm+Scroll gemischt hieß: beim Scrollen
      // während des Ziehens sprang der Kasten zur Start-Ecke und markierte falsch
      const cx=e.clientX-r.left+canvasArea.scrollLeft, cy=e.clientY-r.top+canvasArea.scrollTop;
      const x1=Math.min(marqueeStart.cx,cx), y1=Math.min(marqueeStart.cy,cy);
      const x2=Math.max(marqueeStart.cx,cx), y2=Math.max(marqueeStart.cy,cy);
      if(!marqueeEl){
        marqueeEl=document.createElement('div');marqueeEl.id='marqueeBox';
        canvasArea.appendChild(marqueeEl);
      }
      marqueeEl.style.left=x1+'px';
      marqueeEl.style.top=y1+'px';
      marqueeEl.style.width=(x2-x1)+'px';
      marqueeEl.style.height=(y2-y1)+'px';
    }
    if(connecting){
      drawConns();
      const r=canvasArea.getBoundingClientRect();
      const mx=(e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel;
      const my=(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel;
      const b=boxes.find(x=>x.id===connecting.boxId);
      if(b){
        const el=document.getElementById('box-'+b.id);
        const pc=Math.min(b.count||1,10);
        const pi=connecting.portIdx||0;
        let sx=b.x+(el?el.offsetWidth:300)+7;
        let sy;
        if(pc<=1){sy=b.y+(el?el.offsetHeight/2:50)}
        else{sy=b.y+(el?el.offsetHeight:100)*(0.08+(pi/(pc-1))*0.84)}
        if(connecting.branch){const pb=connections.find(x=>x.id===connecting.branch.parentId);if(pb&&pb.waypoints&&pb.waypoints[connecting.branch.wpIdx]){sx=pb.waypoints[connecting.branch.wpIdx].x;sy=pb.waypoints[connecting.branch.wpIdx].y}} // V1.9.46: WEICHE — Vorschau startet am Abzweig-Punkt
        const snap=findSnapPort(e.clientX,e.clientY,connecting.boxId); // V1.9.42: MAGNET
        let tx=mx,ty=my;
        if(snap){tx=((snap.rect.left+snap.rect.width/2)-r.left+canvasArea.scrollLeft)/zoomLevel;ty=((snap.rect.top+snap.rect.height/2)-r.top+canvasArea.scrollTop)/zoomLevel}
        ctx.beginPath();ctx.setLineDash([5,5]);ctx.strokeStyle=snap?'#3fb950':'#58a6ff';ctx.lineWidth=2;
        ctx.moveTo(sx,sy);ctx.lineTo(tx,ty);ctx.stroke();ctx.setLineDash([]);
        if(snap){ // V1.9.42: Ziel-Ring + Live-Info unten — das Menü sagt jederzeit, WAS gerade passiert
          ctx.beginPath();ctx.strokeStyle='#3fb950';ctx.lineWidth=2.5;ctx.arc(tx,ty,17*(UI_SCALE||1.25)+9,0,Math.PI*2);ctx.stroke();
          const tk=snap.boxId+':'+snap.portIdx;
          if(connecting._lastTgt!==tk){connecting._lastTgt=tk;
            const tb2=boxes.find(x=>x.id===snap.boxId);
            const tn=tb2?((DEVICES[tb2.device]&&DEVICES[tb2.device].de)||tb2.device):'?';
            const sbT=document.getElementById('statBar');
            if(sbT){sbT.textContent=`🔗 LINIEN-MODUS — 🎯 ZIEL: ${tn} · Eingang ${snap.portIdx+1} — loslassen = verbinden`;sbT.style.background='rgba(63,185,80,.22)';sbT.style.fontWeight='700';sbT.style.color='var(--accent-green)'}
          }
        } else if(connecting._lastTgt){connecting._lastTgt=null;setConnModeBar()}
      }
    }
    // Panning: move the map
    if(dragPanning){
      canvasArea.scrollLeft=panStart.sl-(e.clientX-panStart.x);
      canvasArea.scrollTop=panStart.st-(e.clientY-panStart.y);
      if(pasteDown&&Math.abs(e.clientX-pasteDown.x)+Math.abs(e.clientY-pasteDown.y)>4)pasteDown.moved=true; // V1.9.7: Ziehen = Karte bewegen, Kopie bleibt
    }
  });
  
  document.addEventListener('mouseup',e=>{
    if(connecting){
      dragBox=null;draggingWaypoint=null;dragPanning=false; // V1.9.45: Drag-States ZUERST aufräumen — der Verbindungs-Zweig kehrt mit return zurück, vorher blieb die Box an der Maus kleben
      const t=document.elementFromPoint(e.clientX,e.clientY);
      // V1.9.42: Ziel-Auflösung — DREI Wege, damit „fast getroffen" endlich vorbei ist:
      // 1) direkt auf einem Eingangs-Port (closest fängt Kindelemente mit)
      // 2) MAGNET: nächster Eingang im 64px-Radius — daneben reicht, aus der Ferne reicht
      // 3) Drop irgendwo auf den BOX-KÖRPER = nächstgelegener Eingang dieser Box
      let tPort=(t&&t.closest)?t.closest('.conn.inp'):null;
      if(!tPort){const sn=findSnapPort(e.clientX,e.clientY,connecting.boxId);if(sn)tPort=sn.el}
      if(!tPort&&t&&t.closest&&t.closest('.mbox')){
        const mb=t.closest('.mbox');const mbId=parseInt((mb.id||'').replace('box-',''));
        if(mbId!==connecting.boxId){ // eigene Box ist nie Ziel
          let bp=null,bd=1e9;
          document.querySelectorAll('#box-'+mbId+' .conn.inp').forEach(p=>{const r2=p.getBoundingClientRect();if(!r2)return;const d=Math.hypot(e.clientX-(r2.left+r2.width/2),e.clientY-(r2.top+r2.height/2));if(d<bd){bd=d;bp=p}});
          tPort=bp;
        }
      }
      if(tPort){
        const toId=parseInt(tPort.dataset.boxId);
        if(toId!==connecting.boxId){
          // Port-Index aus data-port extrahieren (z.B. "in:2" -> 2)
          const portStr=tPort.dataset.port||'';
          let toPortIdx=portStr.startsWith('in:')?parseInt(portStr.slice(3)):0;
          let fromPortIdx=connecting.portIdx||0;
          if(handleFurnaceDrop(connecting.boxId,toId,fromPortIdx,toPortIdx)){connecting=null;drawConns();updateSelInfo();return;} // V1.3.11+1.3.25: Linie auf Ofen — MIT gewähltem Anschluss
          // V1.3.21: Wie im Spiel darf ein Ausgang MEHRERE Linien haben (Band-Abzweig/Kette).
          // Die Menge regelt die Verteilung: 1 Säge (30 Bretter/Min) auf 3 Linien
          // = fair 10/Min je Linie -> genau 3 Schleifer (Zahnrad, 6s) laufen 100%.
          // Mehr Abnehmer als Ware? -> Teillast-Warnung (im Spiel: schlechte Verteilung).
          const dup=connections.find(c=>c.from===connecting.boxId&&c.fromPort===fromPortIdx&&c.to===toId&&c.toPort===toPortIdx);
          if(!dup){
            const nc={from:connecting.boxId,to:toId,fromPort:fromPortIdx,toPort:toPortIdx};
            if(connecting.branch){nc.branchParentId=connecting.branch.parentId;nc.branchWpIdx=connecting.branch.wpIdx} // V1.9.46: WEICHE — Abzweig startet am Punkt der Eltern-Linie
            connections.push(nc);
            refreshAll();saveStorage();
          }
          // V1.9.36: KETTEN-MODUS — Ausgang bleibt aktiv für WEITERE Ziele:
          // 1 Säge -> 3 Schleifer = Ausgang anklicken, dann 3 Eingänge klicken. Fertig.
          connecting={boxId:connecting.boxId,portIdx:fromPortIdx,downX:e.clientX,downY:e.clientY,dragged:false,done:false};
          userMsg('🔗 ✅ Verbunden! Weiteren Eingang anklicken — derselbe Ausgang (Port '+(fromPortIdx+1)+') bleibt aktiv · ESC / Rechtsklick / Klick daneben = beenden');
          setConnModeBar();updateSelInfo();
          drawConns();return;
        }
        connecting.done=true;
      }
      // V1.9.51: MERGE — Drop/Klick auf eine bestehende LINE: dort andocken (mehrere Quellen, ein Band).
      // Box-Eingänge haben immer Vorrang (Magnet/Port/Körper werden zuerst geprüft).
      if(connecting&&!tPort){
        const rM=canvasArea.getBoundingClientRect();
        const mxM=(e.clientX-rM.left+canvasArea.scrollLeft)/zoomLevel,myM=(e.clientY-rM.top+canvasArea.scrollTop)/zoomLevel;
        const mHit=findConnAt(mxM,myM);
        if(mHit>=0){
          const parent=connections[mHit];
          if(parent.from!==connecting.boxId&&parent.to!==connecting.boxId){
            const dupM=connections.find(x=>x.from===connecting.boxId&&x.fromPort===(connecting.portIdx||0)&&x.mergeParentId===connId(parent));
            if(dupM)userMsg('ℹ️ Dieser Ausgang ist schon an dieser Line angedockt');
            else{
              const wpDock=findOrInsertMergeWaypoint(parent,mxM,myM);
              if(wpDock>=0){
                const nc={from:connecting.boxId,to:parent.to,fromPort:connecting.portIdx||0,toPort:parent.toPort||0,mergeParentId:connId(parent),mergeWpIdx:wpDock};
                if(connecting.branch){nc.branchParentId=connecting.branch.parentId;nc.branchWpIdx=connecting.branch.wpIdx} // Weiche+Merge kombiniert: startet am Abzweig-Punkt, endet am Dock
                connections.push(nc);
                refreshAll();saveStorage();
                userMsg('🔗 ✅ MERGE! Ausgang mündet ab hier in die bestehende Line — alle Quellen liefern gemeinsam ans Ziel · Ausgang bleibt aktiv');
              }
            }
          } else userMsg('ℹ️ Merge geht nicht auf eine Line desselben Ausgangs/Ziels');
          connecting={boxId:connecting.boxId,portIdx:connecting.portIdx||0,downX:e.clientX,downY:e.clientY,dragged:false,done:false};
          setConnModeBar();updateSelInfo();drawConns();return;
        }
      }
      // V1.9.34: KLICK-KLICK — Maus nicht bewegt? Verbindung bleibt offen (Ziel anklicken!), sonst altes Drag-Ende
      if(connecting&&!connecting.dragged&&!connecting.done){
        userMsg('🔗 Verbindungs-Modus: ZIEL-Eingang anklicken — danach bleibt der Ausgang für WEITERE Verbindungen aktiv · ESC / Rechtsklick / Klick daneben = beenden');
        setConnModeBar();
        drawConns();
      }else{
        connecting=null;drawConns();updateStatus();updateSelInfo(); // V1.9.37+47: Menü zurücksetzen
      }
    }
    if(marqueeStart){
      if(marqueeEl){
        const mr=marqueeEl.getBoundingClientRect();
        const found=new Set();
        boxes.forEach(b=>{
          const el=document.getElementById('box-'+b.id);
          if(!el)return;
          const br=el.getBoundingClientRect();
          if(br.left<mr.right&&br.right>mr.left&&br.top<mr.bottom&&br.bottom>mr.top) found.add(b.id);
        });
        if(found.size>0){found.forEach(id=>selectedIds.add(id));applySelectionClasses();updateSelInfo();}
        marqueeEl.remove();marqueeEl=null;
      }
      marqueeStart=null;
    }
    if(pasteMode&&pasteDown){ // V1.9.7: Klick ohne Ziehen = stempeln · Ziehen hat nur die Karte bewegt
      const wasMove=pasteDown.moved;pasteDown=null;
      if(!wasMove&&e.button===0){
        const r=canvasArea.getBoundingClientRect();
        placePasteAt((e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel,(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel);
      }
    }
    if(dragBox){groupDragOffsets=null;groupWaypoints=null;groupDragStart=null;saveStorage();}
    if(zoneLabelDrag){ // V1.9.48: Label-Position (Shift-Ziehen) — Klick öffnet Bearbeiten
      const zd=zoneLabelDrag;zoneLabelDrag=null;
      if(!zd.moved)editZoneDialog(zd.zn);
      else{saveStorage();userMsg('🗂️ Label-Position verschoben — Klick öffnet Bearbeiten · Ziehen ohne Shift verschiebt die GANZE Zone')}
    }
    if(zoneMoveDrag){ // V1.9.61: Zone losgelassen — verschoben oder Bearbeiten öffnen
      const zd=zoneMoveDrag;zoneMoveDrag=null;
      if(!zd.moved)editZoneDialog(zd.zn);
      else{
        selectedIds=new Set(zd.boxes.map(b=>b.id));selBox=null;selectedConn=null;
        applySelectionClasses();updateSelInfo();
        saveStorage();
        userMsg('🗂️ Zone verschoben — alle Maschinen mitgezogen, bleibt markiert (weiter ziehbar). Shift+Ziehen verschiebt nur das Label.');
      }
    }
    if(draggingWaypoint){draggingWaypoint=null;saveStorage();}
    dragBox=null;
    dragPanning=false;
    canvasArea.style.cursor=connecting?'crosshair':''; // V1.9.36: offene Verbindung = Fadenkreuz
  });
  
  // Doppelklick auf Linie: Wegpunkt hinzufuegen
  canvasArea.addEventListener('dblclick',e=>{
    const r=canvasArea.getBoundingClientRect();
    const mx=(e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel;
    const my=(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel;
    const wpHit=findWaypointAt(mx,my);
    if(wpHit)return; // nicht auf Wegpunkt doppelklicken
    const connIdx=findConnAt(mx,my);
    if(connIdx<0)return;
    // Wegpunkt an der naehesten Position einfuegen
    const c=connections[connIdx];
    const wps=getConnWaypoints(c);
    const {outG:om,inG:im}=connGroups();
    const pts=connEndpoints(c,om,im);
    if(!pts)return;
    const allPts=[{x:pts.sx,y:pts.sy},...wps,{x:pts.ex,y:pts.ey}];
    let bestSeg=0,bestT=0.5,bestDist=Infinity;
    for(let i=0;i<allPts.length-1;i++){
      const dx=allPts[i+1].x-allPts[i].x,dy=allPts[i+1].y-allPts[i].y;
      const len2=dx*dx+dy*dy;
      if(len2===0)continue;
      let t=((mx-allPts[i].x)*dx+(my-allPts[i].y)*dy)/len2;
      t=Math.max(0,Math.min(1,t));
      const px=allPts[i].x+t*dx,py=allPts[i].y+t*dy;
      const dist=Math.sqrt((mx-px)**2+(my-py)**2);
      if(dist<bestDist){bestDist=dist;bestSeg=i;bestT=t;}
    }
    // Neuen Wegpunkt einfuegen nach dem Segment
    const insertIdx=bestSeg; // nach Segment bestSeg
    wps.splice(insertIdx,0,{x:mx,y:my});
    saveStorage();drawConns();
  });

  // Panning: mousedown on empty area (canvas, boxesContainer, or canvasArea)
  // Mit gedrückter Umschalt-Taste wird stattdessen ein Auswahlrahmen aufgezogen.
  canvasArea.addEventListener('mousedown',e=>{
    if(pasteMode){ // V1.4.0: Stempel-Modus — V1.9.7: Klick platziert, ZIEHEN bewegt die Karte, rechte Maus beendet
      if(e.button===0){
        pasteDown={x:e.clientX,y:e.clientY,moved:false};
        dragPanning=true;
        panStart={x:e.clientX,y:e.clientY,sl:canvasArea.scrollLeft,st:canvasArea.scrollTop};
        canvasArea.style.cursor='grabbing';
      } else endPasteMode();
      e.preventDefault();return;
    }
    // V1.9.2: Klick auf eine BOX hat immer Vorrang — Linien-/Wegpunkt-Erkennung nur auf freier Karte.
    // Vorher konnte ein Klick auf eine Box (mit Linie daneben) die Auswahl zur LINIE umschwenken
    // -> Entf löschte dann nichts: "Löschfunktion geht nicht richtig"
    if(e.target&&e.target.closest&&e.target.closest('.mbox'))return;
    // Pruefen ob ein Wegpunkt angeklickt wird
    if(e.button===0){
      const r=canvasArea.getBoundingClientRect();
      const mx=(e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel;
      const my=(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel;
      const zlh=zoneLabelHits.find(rr=>mx>=rr.x&&mx<=rr.x+rr.w&&my>=rr.y&&my<=rr.y+rr.h); // V1.9.48: Zonen-Label
      if(zlh){
        // V1.9.61: ZIEHEN verschiebt die GANZE Zone (User-Fund: musste vorher erst neu markieren)
        // Shift+Ziehen justiert nur die Label-Position (alte V1.9.48-Funktion)
        const mem=boxes.filter(b=>b.zone===zlh.zn&&(b.floor||0)===currentFloor);
        if(e.shiftKey||!mem.length){zoneLabelDrag={zn:zlh.zn,moved:false,lx:mx,ly:my}}
        else{
          const ids=new Set(mem.map(m=>m.id));
          zoneMoveDrag={zn:zlh.zn,moved:false,lx:mx,ly:my,boxes:mem,start:{},
            ways:connections.filter(c=>ids.has(c.from)&&ids.has(c.to)&&c.waypoints&&c.waypoints.length).map(c=>({c,orig:c.waypoints.map(p=>({x:p.x,y:p.y}))}))};
          mem.forEach(m=>zoneMoveDrag.start[m.id]={x:m.x,y:m.y});
        }
        e.preventDefault();return}
      const wpHit=findWaypointAt(mx,my);
      if(wpHit){draggingWaypoint=wpHit;selectedWaypoint=wpHit;selectConn(wpHit.connIdx);updateSelInfo();userMsg('🔗 Punkt gewählt — ZIEHEN verschiebt ihn · Leiste unten: 🔀 Weiche setzen / ✖️ Punkt löschen / 🎨 färben / 🗑️ Linie löschen');e.preventDefault();return;} // V1.9.45+46: Punkt-Klick öffnet das Menü
      // V1.9.0: Linie angeklickt -> LINIEN-MENÜ (Leiste unten wird zum Linien-Menü)
      const cHit=findConnAt(mx,my);
      if(cHit>=0){selectConn(cHit);e.preventDefault();return;} // alte findConnAt liefert -1 für "nichts" — Klick fällt durch zum Pan/Abwählen
    }
    if(e.target===canvasArea||e.target.id==='boxesContainer'||e.target.tagName==='CANVAS'){
      // Anti-Markier-Fix: Textauswahl/Auto-Scroll beim Ziehen über den Rand unterbinden
      e.preventDefault();
      if(e.shiftKey){
        const r=canvasArea.getBoundingClientRect();
        marqueeStart={cx:e.clientX-r.left+canvasArea.scrollLeft,cy:e.clientY-r.top+canvasArea.scrollTop}; // V1.9.44: KARTEN-Koordinaten — übersteht Scrollen während des Ziehens
        if(!e.ctrlKey&&!e.metaKey)clearSelection();
      } else {
        clearSelection();
        dragPanning=true;
        panStart={x:e.clientX,y:e.clientY,sl:canvasArea.scrollLeft,st:canvasArea.scrollTop};
        canvasArea.style.cursor='grabbing';
      }
    }
  });
  
  // Right-click on connection to delete it
  // Anti-Markier-Fix: Textauswahl im Arbeitsbereich komplett unterbinden
  canvasArea.addEventListener('selectstart',e=>{if(e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA')e.preventDefault()});
  canvasArea.addEventListener('contextmenu',e=>{
    e.preventDefault();
    if(connecting){connecting=null;drawConns();canvasArea.style.cursor='';userMsg('🔗 Verbindung abgebrochen — Kette beendet');updateStatus();updateSelInfo();return} // V1.9.36: Rechtsklick bricht Verbindung/Kette ab

    const r=canvasArea.getBoundingClientRect();
    const mx=(e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel;
    const my=(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel;
    // Zuerst prüfen: Ist ein Wegpunkt angeklickt?
    const wpHit=findWaypointAt(mx,my);
    if(wpHit){
      connections[wpHit.connIdx].waypoints.splice(wpHit.wpIdx,1);
      saveStorage();drawConns();return;
    }
    // Sonst: Verbindung löschen
    let closestIdx=-1, closestDist=20;
    const {outG:cmOutG,inG:cmInG}=connGroups();
    connections.forEach((c,idx)=>{
      const pts=connEndpoints(c,cmOutG,cmInG);
      if(!pts)return;
      const wps=getConnWaypoints(c);
      const allPts=[{x:pts.sx,y:pts.sy},...wps,{x:pts.ex,y:pts.ey}];
      for(let i=0;i<allPts.length-1;i++){
        const dx=allPts[i+1].x-allPts[i].x,dy=allPts[i+1].y-allPts[i].y;
        const len2=dx*dx+dy*dy;
        if(len2===0)continue;
        let t=((mx-allPts[i].x)*dx+(my-allPts[i].y)*dy)/len2;
        t=Math.max(0,Math.min(1,t));
        const px=allPts[i].x+t*dx,py=allPts[i].y+t*dy;
        const dist=Math.sqrt((mx-px)**2+(my-py)**2);
        if(dist<closestDist){closestDist=dist;closestIdx=idx;}
      }
    });
    if(closestIdx>=0){
      connections.splice(closestIdx,1);
      refreshAll();saveStorage();drawConns();
    }
  });
});

// Map is always very large so user can scroll freely in all directions
let MAP_SIZE=5000;
// Die Karte wächst automatisch mit den Maschinen mit, statt bei einer festen
// Größe abzuschneiden. Ohne das lagen Boxen/Verbindungen bei großen Setups
// (Koordinaten > 5000) außerhalb der Zeichenfläche und wurden unsichtbar
// abgeschnitten - das war die Ursache für "die Karte wird mir zu klein".
function computeMapSize(){
  let maxX=2000, maxY=2000;
  boxes.forEach(b=>{maxX=Math.max(maxX,b.x+500);maxY=Math.max(maxY,b.y+400)});
  MAP_SIZE=Math.max(5000,maxX+150,maxY+150); // V1.9.15: Zaun eng am Bauwerk — vorher +2000 Reserve: der Zaun wich immer weiter aus und man konnte scheinbar über das Ende bauen
}
function resizeCanvas(){
  if(!canvasArea||!canvas)return; // V1.9.2: Robustheits-Guard — V1.9.8: ctx darf fehlen (drawConns prüft selbst)
  computeMapSize();
  // V1.9.8: WEISSE-WAND-FIX — Canvas nur noch VIEWPORT-groß statt MAP_SIZE×MAP_SIZE (25+ Mio Pixel!).
  // So ein Riesen-Bitmap kann der Browser nicht mehr alokzieren und zeigt den Canvas dann als
  // WEISSE FLÄCHE über der Karte (kein JS-Fehler, Selbsttest bleibt grün — genau der gemeldete Fehler).
  // Neu: Bitmap max. 4096², liegt wie ein Fenster über dem sichtbaren Ausschnitt (Position folgt dem Scroll).
  const cw=Math.max(300,Math.min(4096,canvasArea.clientWidth||1200));
  const ch=Math.max(300,Math.min(4096,canvasArea.clientHeight||800));
  canvas.width=cw;canvas.height=ch;
  canvas.style.width=cw+'px';canvas.style.height=ch+'px';
  const bc=document.getElementById('boxesContainer');
  if(bc){
    bc.style.width=MAP_SIZE+'px';
    bc.style.height=MAP_SIZE+'px';
  }
  syncCanvasPos();
  drawConns();
}
function syncCanvasPos(){ // V1.9.8: Canvas-Fenster an den sichtbaren Ausschnitt heften
  if(!canvasArea||!canvas)return;
  canvas.style.left=canvasArea.scrollLeft+'px';
  canvas.style.top=canvasArea.scrollTop+'px';
}
// Zoomt/scrollt die Ansicht so, dass alle vorhandenen Maschinen sichtbar sind -
// hilft beim Überblick verlieren in großen Setups und wird u.a. nach jedem
// Laden einer Datei aufgerufen.
function fitViewToBoxes(){
  if(!canvasArea||boxes.length===0)return;
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  boxes.forEach(b=>{
    minX=Math.min(minX,b.x);minY=Math.min(minY,b.y);
    maxX=Math.max(maxX,b.x+300);maxY=Math.max(maxY,b.y+160);
  });
  const pad=200;
  minX-=pad;minY-=pad;maxX+=pad;maxY+=pad;
  const contentW=maxX-minX, contentH=maxY-minY;
  const availW=canvasArea.clientWidth, availH=canvasArea.clientHeight;
  let z=Math.min(availW/contentW, availH/contentH, ZOOM_MAX);
  z=Math.max(ZOOM_MIN, z);
  zoomLevel=z;
  document.getElementById('boxesContainer').style.transform=`scale(${zoomLevel})`;
  canvasArea.scrollLeft=minX*zoomLevel-(availW-contentW*zoomLevel)/2;
  canvasArea.scrollTop=minY*zoomLevel-(availH-contentH*zoomLevel)/2;
  const zl=document.getElementById('zoomLevel');if(zl)zl.textContent=Math.round(zoomLevel*100)+'%';
}
// Geräte-Kategorien für die Tab-Leiste links (wie in der Vergleichs-App) -
// rein UI-seitige Gruppierung, ändert nichts an den Rezeptdaten selbst.
const DEVICE_CATEGORY={
  'Table Saw':'raw','Stone Crusher':'raw','Seed Plot':'raw','Nursery':'raw',
  'World Tree Nursery':'relics',
  'Grinder':'processing','Enhanced Grinder':'processing','Extractor':'processing', // V1.9.17: Enhanced Grinder fehlte in der Leiste
  'Refiner':'processing','Processor':'processing','Assembler':'processing',
  'Iron Smelter':'heat','Crucible':'heat','Stackable Crucible':'heat','Thermal Extractor':'heat','Paradox Crucible':'heat',
  'Kiln':'heat','Alembic':'heat','Athanor':'heat','Advanced Alembic':'heat','Advanced Athanor':'heat',
  'Stone Furnace':'heat','Blast Furnace':'heat',
  'Cauldron':'alchemy','Blender':'alchemy','Advanced Blender':'alchemy',
  'Advanced Assembler':'advanced',
  'Shaper':'relics','Advanced Shaper':'relics','Knowledge Altar':'relics','Arcane Processor':'relics','Arcane Shaper':'relics',
  'Purchasing Portal':'portals','Dispatch Portal':'portals','Bank Portal':'portals','Lift':'logistics','Infobox':'logistics',
  'Sales Room':'logistics','Storage':'logistics',
  'Steam Boiler':'heat','Steam Heating Pad':'heat','Erlenmeyer Flask':'logistics','Spherical Flask':'logistics','Trash Bin':'logistics'
};
const CATEGORY_INFO={
  all:{label:'Alle',icon:'📋'},
  raw:{label:'Rohstoffe & Anbau',icon:'🌱'},
  processing:{label:'Verarbeitung',icon:'⚙️'},
  heat:{label:'Wärme & Öfen',icon:'🔥'},
  alchemy:{label:'Alchemie',icon:'🧪'},
  advanced:{label:'Fortgeschritten',icon:'⭐'},
  relics:{label:'Relikte',icon:'🔮'},
  portals:{label:'Portale',icon:'🚪'},
  logistics:{label:'Logistik & Aufzug',icon:'🛗'}
};
let activeCategory='all';
function setCategory(c){activeCategory=c;const si=document.getElementById('searchInput');renderList(si?si.value:'')}
function renderCategoryTabs(){
  const el=document.getElementById('catTabs');
  if(!el)return;
  const opts=Object.entries(CATEGORY_INFO).map(([key,info])=>
    `<option value="${key}"${activeCategory===key?' selected':''}>${info.icon} ${info.label}</option>`
  ).join('');
  el.innerHTML=`<select onchange="setCategory(this.value)">${opts}</select>`;
}
function renderList(f=''){
  renderCategoryTabs();
  const list=document.getElementById('machineList');
  if(!list)return;
  list.innerHTML='';
  const lf=f.toLowerCase();
  Object.entries(DEVICES).forEach(([key,d])=>{
    if(activeCategory!=='all'&&DEVICE_CATEGORY[key]!==activeCategory)return;
    if(lf&&!d.de.toLowerCase().includes(lf)&&!key.toLowerCase().includes(lf))return;
    const div=document.createElement('div');
    div.className='mi';
    div.innerHTML=`<div class="de">${d.de}</div><div class="en">${key}</div>`;
    div.onclick=()=>addBox(key);
    list.appendChild(div);
  });
}
function filterList(){const si=document.getElementById('searchInput');if(si)renderList(si.value)}

function calcRate(qty,time){return qty*(60/time)*(factoryEfficiency/100)}

// ============ V1.5.0: LINKES PANEL — Maschinen & Fabrik-Info (statt alles im Footer zu quetschen) ============
function setLPTab(t){return; // V1.5.1: Sidebar wieder entfernt — Karte ist der Star. Infos leben in schwebenden Fenstern (📊 🗂️ 🧰)
  m.style.display=t==='maschinen'?'':'none';f.style.display=t==='fabrik'?'':'none';
  document.getElementById('lptb-maschinen').classList.toggle('active',t==='maschinen');
  document.getElementById('lptb-fabrik').classList.toggle('active',t==='fabrik');
  if(t==='fabrik')refreshLPFabrik();
}
function refreshLPFabrik(){
  const f=document.getElementById('lp-fabrik');if(!f||f.style.display==='none')return;
  const mach=boxes.reduce((s,b)=>s+(b.count||1),0);
  const floors=new Set(boxes.map(b=>b.floor||0));
  const net={};
  boxes.forEach(b=>{
    const d=DEVICES[b.device];if(!d)return;
    const rr=getEffectiveRecipe(b);
    Object.entries(rr.out||{}).forEach(([m,q])=>{net[m]=(net[m]||0)+calcRate(q,rr.time)*(b.count||1)});
    Object.entries(rr.in||{}).forEach(([m,q])=>{net[m]=(net[m]||0)-calcRate(q,rr.time)*(b.count||1)});
  });
  const rows=Object.entries(net).filter(([,v])=>Math.abs(v)>0.05).sort((a,x)=>Math.abs(x[1])-Math.abs(a[1])).slice(0,10)
    .map(([m,v])=>`<div class="lp-frow"><span>${matName(m)}</span><span class="v ${v>0?'pos':'neg'}">${v>0?'+':''}${v.toFixed(1)}/Min</span></div>`).join('');
  f.innerHTML=`<div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-muted);margin-bottom:10px;line-height:1.5">Deine Fabrik auf einen Blick — große Bilanz im 📊 Status-Fenster.</div>
    <div class="lp-frow"><span>🏗️ Maschinen</span><span class="v">${mach}</span></div>
    <div class="lp-frow"><span>🏬 Etagen belegt</span><span class="v">${floors.size}</span></div>
    ${rows?`<div style="font-size:calc(var(--u,1.25) * 12.5px);font-weight:700;color:var(--text-muted);margin:10px 0 6px">BILANZ (erzeugt − verbraucht)</div>${rows}`:(boxes.length?'<div style="color:var(--accent-green);font-size:13.5px;margin-top:8px">✅ Bilanz ausgeglichen — alles Erzeugte wird verbraucht.</div>':'<div style="color:var(--text-muted);font-size:13.5px;margin-top:8px">Noch kein Materialfluss — baue oder lade die 🚀 Beispiel-Kette.</div>')}
    <button class="lp-fbtn" onclick="toggleStatus()">📊 Großes Status-Fenster</button>
    <button class="lp-fbtn" onclick="toggleZonePanel()">🗂️ Zonen-Info</button>
    <button class="lp-fbtn" onclick="showOnboarding()">🚀 Erste Schritte (Beispiel-Kette)</button>`;
}

// ============ V1.5.0: ℹ️ Kurz-Erklärung direkt an der Maschine ============
const DEVICE_HINTS={
 'Processor':'Verarbeitet Vorprodukte zu Bauteilen (Mörser, Nägel, Münzen, kleine Zahnräder …). 🧮 SPIEL-BESTÄTIGT (Sep 2026): 1 Säge : 3 Schleifer : 6 Fertigungseinheiten (Kleines Zahnrad) laufen SAUBER durch, kein Stau — 30 Bretter = 30 große Holzzahnräder = 30 verbraucht ⇒ 90 kleine Zahnräder/Min. Faustregel: 1 Schleifer versorgt 2 Fertigungseinheiten (Ausgang → Weiche → je 5 an 2 Einheiten). 🧪 1-STAMM-TEST: 1 Stamm ⇒ exakt 600 kleine Zahnräder, fair auf 3 Lager verteilt (201/198/201) — Kette ohne Verlust. Achtung: nur 3 Einheiten an 3 Schleifern = Stau (30 angeboten, 15 gefressen).',
 'Purchasing Portal':'Kauft Items für Münzen. Achtung: Es sammelt erst Geld, bis der Kauf voll ist — dann liefert es 1 Stück. Tipp: Direkt neben die Maschine bauen (Geld-Weg kurz) und Rate klein halten — eine Kreissage braucht z. B. nur 0,15 Stämme/Min.',
 'Table Saw':'Schneidet 1 Stamm → 200 Bretter = 30 Bretter/Min. Lädt bis zu 3 Stämme als PUFFER (ändert den Durchsatz nicht). 1 Kreissage versorgt EXAKT 3 Schleifer (Großes Holzzahnrad). 🧮 1-STAMM-TEST (Sep 2026): 200 Bretter → 200 große Holzzahnräder → 600 kleine, FAIR verteilt auf 3 Lager (201/198/201) — Weichen teilen gerecht, nichts geht verloren.',
 'Grinder':'Beispiel Großes Holzzahnrad: 1 Brett je 6s = 10/Min — 3 Schleifer passen exakt an 1 Kreissage. Mehr Schleifer = Teillast (gelbe Linie). 🏁 SPIEL-BESTÄTIGT (Wettrennen Sep 2026): Säge + 3 Schleifer = 200 Räder in 6:50 Min.',
 'Enhanced Grinder':'Verbesserte Schleifmaschine (Name laut Spiel): ~2× schneller als der Schleifer. 📐 IM SPIEL NACHGEMESSEN (Sep 2026): 3 Felder lang · Stein→Sand 10/10 in 6 Sek (Datenblatt stimmt exakt) · Holz 20/20 in 3 Sek. 🏁 WETTRENNEN, ALLE 3 SETUPS IM SPIEL GEMESSEN (Sep 2026, je 1 Stamm → 200 Räder): 3 kleine Schleifer = 6:50 · 1 Verbesserte = 10:00 (Vorhersage exakt! Bretter-Stau — braucht 20/Min, Säge liefert 30/Min) · 2 Verbesserte = schnellste Lösung (User-Schätzung ~5:00 — KORRIGIERT: Säge ist mit 30/Min bestätigt, damit ist die Linie säge-limitiert und ~5:00 wäre unmöglich; vermutlich waren es auch dort ~6:50–7:00. Durchsatz schlägt Einzeltempo!). Durchsatz schlägt Einzeltempo!',
 'Blast Furnace':'Heiz-Gerät: Schmelztiegel oben draufstellen (Fläche beachten). Brennt Holz & Kohle — Tipp Kreislauf: Tiegel mit Holzkohle liefern Brennstoff per Linie zurück. 🔬 FORSCHUNG ERGEBNIS (User-Sandbox, Sep 2026): ALHEILMITTEL = 320.000 Heat — stärkster Brennstoff im Spiel (160× Holz)! 1 Stück heizt einen vollen Ofen (52/Sek) ~100 Minuten lang. Aber: Herstellung braucht Weltenbaum-Blätter (Endgame) — und als Dünger ist es genauso stark (200.000V).',
 'Crucible':'Muss auf einen Ofen gestellt werden. Rezepte z. B. Holzkohle, Pflanzenasche, Schnellkalk. Der Ausgang kann per Linie zurück in den Ofen liefern (Brennstoff). 📖 SPIEL-ANZEIGE: 15/15 in 4 Sek = 15er-Batch, 1 Kohle je 4 Sek (15/Min) — Sandbox-Test (Sep 2026): 99 Kohle aus 1 Stamm Feuer am Steinofen, 61 am Hochofen. Stufe 2: 18,8/Min (3,2 Sek/Stück, +25%) · Stufe 12: 60/Min (1 Sek/Stück, Puffer 60) = ×4 — das Ding rennt. 📖 GEMESSEN (Sep 2026): 1 Stein/9 s — 1 Steinbrecher versorgt EXAKT 3 Tiegel · 1:1 mit Schleifmaschine (9 s = 9 s).',
 'Stackable Crucible':'Stapelbarer Tiegel: GLEICHE Werte wie der Schmelztiegel (Spiel-Test Sep 2026). Heat-Bedarf 6/s je Tiegel (User + Codex bestätigt; normaler Tiegel braucht 4). Grundfläche ≈ 1×1,1 (3 Quadrate): 7 nebeneinander auf dem Hochofen, 3 auf dem Steinofen. Höhe = Anzahl FENSTER auf der Box — Spiel-max 10 (User-Test), Empfehlung 5: 5 Fenster à 7 = 35 Tiegel = 218 P/Sek inkl. Ofen-Grundverbrauch. KEINE feste Heat-Kappe im Spiel — aber Wärme wandert nur nach OBEN und nur durch ARBEITENDE Tiegel: eine Lücke unten kühlt alles darüber ab → Band-Stau! Community-Trick: unten Dauer-Zulauf (z.B. Holz→Holzkohle). Brennstoff: 1 Holz-Band (2000 P/Sek) reicht selbst für 10 Fenster.',
 'Lift':'Verbindet 2 Etagen: untere Hälfte = EINGANG, obere = AUSGANG. Ein Lift rauf, zweiter runter. Im Spiel: R rotiert den Port, T tauscht Ein-/Ausgang. ⚡ Band-Cap: JE Line (auch zum Lift hinein) trägt max 60/Min — der Lift selbst gibt alles weiter (oben 80 an = unten 80 raus). Für 80/Min brauchst du 2 Lines.',
 'Sales Room':'Endstation: verkauft alles, was ankommt. Mehrere Linien dürfen hier zusammenlaufen (Merge) — was ankommt, zeigt das 📊 Status-Fenster.',
 'Storage':'DURCHLAUFSTELLE (im Spiel gemessen, Sep 2026): Leitet ankommende Ware sofort mit Band-Tempo (60/Min) weiter. Speichert nur, wenn das Band dahinter blockiert ist. Als Quelle gilt: NICHT schneller als 1 Band — zum Planen/Messen Maschine-zu-Maschine rechnen. Mehrere Linien dürfen zusammenlaufen.',
 'Dispatch Portal':'Verschickt Items — im Editor eine Endstation (was ankommt, zählt als versendet).',
 'Seed Plot':'PFLANZBEET (normales Beet): Samen je Ernte von Hand — KEIN Dünger nötig, ~6-9 Min Erntezeit. Für Dauerlieferung ohne Samen-Kauf: die GÄRTNEREI (Dünger-Pflicht).',
 'Nursery':'GÄRTNEREI = AUTO-BEET (Spiel-gemessen Sep 2026): 1 Samen EINMALIG von Hand, dann DÜNGER-PFLICHT — ohne Dünger keine Pflanze! Stufe 0: Salbei 20/Min · Lein 30/Min · je 1 Dünger/12s (5/Min); alles skaliert mit Fabrik-Effizienz (Stufe 2: 30/45/7,5). 3 Pufferplätze. Faustregel: 1 Dünger-Monteur (15/Min) versorgt 3 Gärtnereien — Salbei braucht zusätzlich Asche-Tiegel (1 Bett = 1 Tiegel bei 20/Min=20/Min).',
 'Steam Boiler':'Dampferzeuger (Endgame): ersetzt Brennstoff-Logistik durch Dampfleitungen — Rohre haben unbegrenzen Durchsatz.'
};
const MACHINE_RESEARCH={ // V1.9.34: Forschungs-Logbuch — volle Messwerte, in Box nur die Kurzfassung (User-Wunsch: lesbar bleiben!)
'Blast Furnace':`<b>📐 Messwerte (Sandbox, Sep 2026, 0 Upgrades):</b><br>• Grundverbrauch: Hochofen <b>8 P/Sek</b> · Steinofen <b>5 P/Sek</b> — auch ohne jede Maschine darauf!<br>• 1 Stamm (2000 P) = 250 Sek Feuer am Hochofen / 400 Sek am Steinofen — Test: <b>99 Kohle</b> (Steinofen) / <b>61 Kohle</b> (Hochofen) aus 1 Stamm, Rechnung ging exakt auf<br>• Brennwerte: Allheilmittel 320.000 (König, 160× Holz!) · Holz 2000 · Koks 600 · Kohle 540 · Holzkohle 40 · Brett 20<br>• Band = 1 Stück/Sek → EIN Kohle-Band (max 40 Heat/Sek) heizt KEINEN vollen Ofen (48+) — zum Feuern HOLZ<br>• Brennstoff-Plätze: Hochofen 4 · Steinofen 2 · Stämme werden GESPEICHERT (Puffer, 4 Stämme ≈ 2,7 Min)<br>• ⚠️ Tiegel-Zuschlag UNKLAR: bei 1 Tiegel kein messbarer Verbrauch — Test: Hochofen + 12 Tiegel, Anzeige lesen → (Wert − 8) ÷ 12<br>• ❓ ANZEIGE-RÄTSEL: Stufe-12-Anzeige 17/20 P/Sek, real verbrannt nur ~7,8/9,0 (Rest-Stamm-Rückrechnung)<br><b>📈 Upgrade-Skalierung:</b> Stufe 2 = +25 % (Säge 37,5/Min · Tiegel 3,2 s) · Stufe 12 = ×4 (Säge 120/Min · Tiegel 1 s) · Feuer wird BILLIGER: P je Kohle auf Stufe 12 nur 7,8/9,0 (Stufe 0: 20,2/32,8)`,
'Stone Furnace':`Siehe Hochofen — gleiche Physik. Werte: Grundverbrauch <b>5 P/Sek</b> · 2 Brennstoff-Plätze · 1 Stamm = 400 Sek Feuer · Fläche 9 (3 kleine Tiegel)`,
'Table Saw':`<b>📐 Spiel-bestätigt:</b> 1 Stamm → 200 Bretter in 400 Sek = 30/Min · Anzeige 0,15 Stämme/Min · 0,5 % Abbau je Vorgang · läuft nur DURCH, wenn ein Abnehmer (Lager/Verkauf) die Bretter abnimmt · lädt bis 3 Stämme als Puffer · Stufe 2: 37,5/Min (1 Brett je 1,6 s) · Stufe 12: 120/Min (0,5 s · 0,6 Stämme/Min) — 1 Stamm bleibt IMMER 200 Bretter`,
'Crucible':`<b>📖 Spiel-Anzeige „15/15 in 4 Sek":</b> 15er-Batch = 1 Stück je 4 Sek (15/Min) · 1-Stamm-Feuer-Test: 99 Kohle am Steinofen / 61 am Hochofen · Stufe 2: 18,8/Min (3,2 s) · Stufe 12: 60/Min (1 s, Puffer wächst 15→60)`,
'Stackable Crucible':`Wie Schmelztiegel (gleiche Rezepte) — Spiel-Test Sep 2026: Geschwindigkeit & Ausgabe IDENTISCH. Hunger 6/Sek je Tiegel BESTÄTIGT (User + Codex „Heat Speed 6"; normaler Tiegel 4/Sek). Platzbedarf ≈ 1×1,1 = 3 Quadrate — 7 nebeneinander auf dem Hochofen (8. Platz am Ausgang bliebe frei, bleibt absichtlich weg), 3 auf dem Steinofen. Höhe = Anzahl Fenster, Spiel-max 10, Empfehlung 5. ⚠️ Wärme wandert nur nach OBEN und nur, solange der TIEGEL DARUNTER arbeitet (Steam-Bericht Okt 2025: „no heat transfer when idle") → unten ein Dauer-Zulauf-Rezept halten, sonst kühlt der Turm oben ab!`,
'Grinder':`<b>🏁 Wettrennen (Spiel, Sep 2026, je 1 Stamm → 200 Räder):</b> Säge + 3 kleine Schleifer = <b>6:50</b> · Säge + 1 Verbesserte Schleifmaschine = <b>10:00</b> (Vorhersage exakt — Bretter-Stau, sie braucht nur 20/Min) · Säge + 2 Verbesserte = schnellste Lösung · <b>Durchsatz schlägt Einzeltempo!</b>`,
'Enhanced Grinder':`Name laut Spiel: <b>„Verbesserte Schleifmaschine"</b> · 3 Felder lang · Stein→Sand 10/10 in 6 Sek (Datenblatt exakt bestätigt) · ~2× schneller als der Schleifer (Zahnrad: 3 s statt 6 s) · 🏁 Wettrennen: 1 Säge + 1 Verbesserte = 10:00 gegen 6:50 für 3 kleine — Stau am eigenen Appetit`
};
const HELP_ANCHOR={'Blast Furnace':'hilfe-ofen','Stone Furnace':'hilfe-ofen','Table Saw':'hilfe-saege','Crucible':'hilfe-tiegel','Stackable Crucible':'hilfe-tiegel','Grinder':'hilfe-rennen','Enhanced Grinder':'hilfe-rennen'};
function showMachineDetails(id){ // V1.9.34: Maschinen-Fenster — volle Infos lesbar (640 px, verschiebbar), Box bleibt schlank
  const b=boxes.find(x=>x.id===id);if(!b)return;
  const d=DEVICES[b.device];if(!d)return;
  if(d.isInfo){showInfoBoxEditor(id);return} /* V1.9.35 */
  const old=document.getElementById('machineDetailDlg');if(old)old.remove();
  const ov=document.createElement('div');ov.className='zonepanel';ov.id='machineDetailDlg';
  ov.style.width='640px';ov.style.right='auto';ov.style.left='90px';ov.style.top='70px';
  const anch=HELP_ANCHOR[b.device];
  const recs=Object.entries(d.recipes||{}).map(([rn,r])=>`<div style="padding:7px 0;border-bottom:1px solid var(--border-light)"><b style="color:var(--accent-blue)">${rn}</b> <small style="color:var(--text-muted)">${(60/r.time).toFixed(1)}/Min je Maschine</small><br><small>${Object.entries(r.in||{}).map(([m,q])=>q+'× '+matName(m)).join(' + ')||'kein Band-Input'} → ${Object.entries(r.out||{}).map(([m,q])=>q+'× '+matName(m)).join(', ')}</small><br><small style="color:var(--text-secondary);line-height:1.7">${r.note||''}</small></div>`).join('');
  ov.innerHTML=`<div class="zp-head" id="mdHead"><b>${DEVICE_ICON[b.device]||'🔧'} ${d.de}</b><span style="flex:1"></span>
    ${anch?`<button onclick="showHelp('${anch}')" title="Hilfe öffnen und direkt zum Abschnitt dieser Maschine springen" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);padding:4px 8px;cursor:pointer">❓ Hilfe-Abschnitt</button>`:''}
    <button onclick="document.getElementById('machineDetailDlg').remove()" title="Schließen" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);padding:4px 8px;cursor:pointer">✕</button></div>
    <div class="zp-body">
      <div style="margin-bottom:10px;font-size:13px;line-height:1.8;color:var(--text-primary)">${DEVICE_HINTS[b.device]||''}</div>
      ${MACHINE_RESEARCH[b.device]?`<div style="margin-bottom:12px;padding:10px;background:rgba(251,191,36,.06);border:1px solid rgba(251,191,36,.25);border-radius:10px;font-size:12.5px;line-height:1.9">${MACHINE_RESEARCH[b.device]}</div>`:''}
      <div style="font-weight:700;font-size:13px;color:var(--accent-blue);margin:6px 0 2px">📋 Alle Rezepte (volle Notizen)</div>
      ${recs||'(keine Rezepte — z. B. Endstation)'}
    </div>`;
  document.body.appendChild(ov);
  makePanelDraggable(ov,'mdHead');
}
/* ============ V1.9.35: 📝 INFOBOX — eigenes Text-Schild (wie die Schilder im Spiel) ============ */
function showInfoBoxEditor(id){
  const b=boxes.find(x=>x.id===id);if(!b)return;
  const old=document.getElementById('infoBoxDlg');if(old)old.remove();
  const ov=document.createElement('div');ov.className='zonepanel';ov.id='infoBoxDlg';
  ov.style.width='520px';ov.style.right='auto';ov.style.left='120px';ov.style.top='80px';
  ov.innerHTML=`<div class="zp-head" id="ibHead"><b>📝 Infobox-Text</b><span style="flex:1"></span>
    <button onclick="document.getElementById('infoBoxDlg').remove()" title="Schließen" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);padding:4px 8px;cursor:pointer">✕</button></div>
    <div class="zp-body">
      <textarea id="ibText" rows="8" placeholder="z. B.: 📌 Abteilung HOLZ — Sägen &amp; Zahnrad-Bau" style="width:100%;box-sizing:border-box;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;padding:10px;font-size:13.5px;line-height:1.7;font-family:inherit;resize:vertical">${String(b.infoText||'').replace(/&/g,'&amp;').replace(/</g,'&lt;')}</textarea>
      <div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-muted);margin:8px 0;line-height:1.6">Reine Beschriftung — keine Funktion, keine Anschlüsse, zählt nicht in die Bilanz. Ideal für Abteilungs-Schilder je Stockwerk oder Erklärungen vor Maschinen-Gruppen (wie die Schilder im Spiel). Mehrzeilig erlaubt, Zeilenumbrüche bleiben erhalten.</div>
      <div style="display:flex;gap:8px">
        <button onclick="saveInfoBoxText(${b.id})" style="flex:1;padding:9px;background:#238636;border:1px solid #238636;border-radius:8px;color:#fff;font-weight:700;cursor:pointer">💾 Speichern</button>
        <button onclick="document.getElementById('infoBoxDlg').remove()" style="padding:9px 16px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer;font-weight:700">✕ Schließen</button>
      </div>
    </div>`;
  document.body.appendChild(ov);
  makePanelDraggable(ov,'ibHead');
  setTimeout(()=>{const t=document.getElementById('ibText');if(t){t.focus();if(t.setSelectionRange)t.setSelectionRange(t.value.length,t.value.length)}},50);
}
function saveInfoBoxText(id){
  const b=boxes.find(x=>x.id===id);if(!b)return;
  const t=document.getElementById('ibText');
  if(t)b.infoText=t.value;
  const dlg=document.getElementById('infoBoxDlg');if(dlg)dlg.remove();
  refreshBox(id);
  userMsg('📝 Infobox-Text gespeichert — nur Beschriftung, keine Funktion');
}
function showMachineHint(id,ev){
  const b=boxes.find(x=>x.id===id);if(!b)return;
  const d=DEVICES[b.device];if(!d)return;
  closeMachineHint();
  const rr=getEffectiveRecipe(b);
  const curated=DEVICE_HINTS[b.device];
  const outs=Object.entries(rr.out||{}).map(([m,q])=>`${matName(m)} ${(calcRate(q,rr.time)*(b.count||1)).toFixed(1)}/Min`).join(' · ')||'—';
  const ins=Object.entries(rr.in||{}).map(([m,q])=>`${matName(m)} ${(calcRate(q,rr.time)*(b.count||1)).toFixed(1)}/Min`).join(' · ')||'—';
  const _dH=DEVICES[b.device]||{};
  const _sinkLine=_dH.isSink?`📥 <b>Bekommt:</b> ${ins} — alles, was hier ankommt${_dH.sinkType==='sales'?' (und verkauft wird)':' (wird gelagert)'}`:null; // V1.9.45: Lager/Verkauf STELLT nichts her und BRAUCHT nichts — es bekommt (User-Fund)
  const pop=document.createElement('div');pop.className='hintpop';pop.id='hintPop';
  pop.innerHTML=`<h4>${DEVICE_ICON[b.device]||'🔧'} ${d.de}</h4>
    <div>${curated||_sinkLine||`Stellt her: <b>${outs}</b><br>Braucht: <b>${ins}</b>`}</div>
    ${curated?`<div style="margin-top:6px;color:var(--text-secondary)">${_sinkLine||`Stellt her: <b>${outs}</b> · Braucht: <b>${ins}</b>`}</div>`:''}
    <div style="display:flex;gap:8px;margin-top:10px">
      <button onclick="closeMachineHint();showHelp()" style="flex:1;padding:9px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer;font-size:13.5px;font-weight:700">❓ Mehr in der Hilfe</button>
      <button onclick="closeMachineHint()" style="padding:9px 14px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer;font-size:13.5px;font-weight:700">✕</button>
    </div>`;
  document.body.appendChild(pop);
  const x=Math.min((ev&&ev.clientX||300)+14,window.innerWidth-380),y=Math.max(60,(ev&&ev.clientY||300)-40);
  pop.style.left=x+'px';pop.style.top=y+'px';
  setTimeout(()=>document.addEventListener('mousedown',function h(e){if(!pop.contains(e.target)){pop.remove();document.removeEventListener('mousedown',h)}}),0);
}
function closeMachineHint(){const p=document.getElementById('hintPop');if(p)p.remove()}

// ============ V1.5.0: 🚀 ERSTE SCHRITTE — Beispiel-Kette wie im Spiel ============
function showOnboarding(){
  const old=document.getElementById('onbDlg');if(old)old.remove();
  const ov=document.createElement('div');ov.className='dlg';ov.id='onbDlg';
  ov.innerHTML=`<div class="box" style="width:680px">
    <h3>🚀 Erste Schritte — so funktioniert der Planer</h3>
    <div style="font-size:15px;line-height:1.8;color:var(--text-secondary)">
      <div style="margin:10px 0;padding:12px;background:rgba(88,166,255,.08);border-radius:10px">
        <b style="color:var(--accent-blue)">1.</b> 🛒 <b>Einkaufsportal</b> kaufen lassen (z. B. Stämme)<br>
        <b style="color:var(--accent-blue)">2.</b> 🪓 <b>Kreissage</b>: 1 Stamm → 200 Bretter = 30 Bretter/Min<br>
        <b style="color:var(--accent-blue)">3.</b> ⚙️ <b>bis zu 3 Schleifer</b> dranhängen — je 10 Bretter/Min, exakt 100 %<br>
        <b style="color:var(--accent-blue)">4.</b> 🏪 <b>Verkauf</b> (oder 📦 Lager) als Endstation — Linien dürfen zusammenlaufen<br>
        <b style="color:var(--accent-blue)">5.</b> Vom <b style="color:var(--accent-green)">grünen Kreis</b> zum <b style="color:var(--accent-blue)">blauen Kreis</b> ziehen: 🟢 versorgt · 🟡 Teillast · 🔴 fehlt etwas
      </div>
      Tipp: An jeder Maschine gibt es jetzt ein <b>ℹ️</b> mit Kurz-Erklärung. Mehr Hilfe: ❓ unten in der Leiste.
    </div>
    <div style="display:flex;gap:10px;margin-top:14px">
      <button onclick="document.getElementById('onbDlg').remove();loadDemoChain()" style="flex:1;padding:12px;background:linear-gradient(135deg,#16a34a,#22c55e);border:none;border-radius:10px;color:#fff;font-weight:800;font-size:15px;cursor:pointer">🚀 Beispiel-Kette laden und ansehen</button>
      <button onclick="document.getElementById('onbDlg').remove()" style="padding:12px 20px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:10px;color:var(--text-primary);font-weight:700;cursor:pointer">Später</button>
    </div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function loadDemoChain(){
  try{localStorage.setItem('afe_onboard','1')}catch(e){}
  let startX=2000,startY=2000;
  if(boxes.length>0){startX=Math.max(...boxes.map(b=>b.x))+500;startY=Math.min(...boxes.map(b=>b.y));}
  const demo=[
    {device:'Purchasing Portal',recipe:'Kauf',count:1,dx:0,dy:220,portal:{item:'logs',rate:0.45,batch:1}},
    {device:'Table Saw',recipe:'Plank',count:1,dx:560,dy:220},
    {device:'Grinder',recipe:'Large Wooden Gear',count:1,dx:1140,dy:0},
    {device:'Grinder',recipe:'Large Wooden Gear',count:1,dx:1140,dy:300},
    {device:'Grinder',recipe:'Large Wooden Gear',count:1,dx:1140,dy:600},
    {device:'Sales Room',recipe:'_sink',count:1,dx:1760,dy:300}
  ]; // V1.7.0: großzügige Abstände — Linien liegen sauber, nichts übereinander
  const ids=demo.map(()=>nextId++);
  demo.forEach((db,i)=>{
    const nb={id:ids[i],device:db.device,recipe:db.recipe,count:db.count,floor:currentFloor,x:startX+db.dx,y:startY+db.dy};
    boxes.push(nb);
    if(db.portal){portalConfig[db.portal.item]=portalConfig[db.portal.item]||{};}
    if(db.device==='Purchasing Portal')portalConfig[nb.id]={item:'logs',rate:0.45,batch:1};
    makeBoxEl(nb);
  });
  connections.push({from:ids[0],to:ids[1],fromPort:0,toPort:0});
  [2,3,4].forEach((gi,i)=>connections.push({from:ids[1],to:ids[gi],fromPort:i,toPort:0}));
  [2,3,4].forEach(gi=>connections.push({from:ids[gi],to:ids[5],fromPort:0,toPort:0}));
  refreshAll();drawConns();saveStorage();fitViewToBoxes();
  const info=document.getElementById('topInfo');if(info)info.textContent='🚀 Beispiel geladen: Portal → Säge → 3 Schleifer → Verkauf (alles grün?)';
}
function getMyTemplates(){try{return JSON.parse(localStorage.getItem('afe_tpls')||'[]')}catch(e){return[]}}
function saveMyTemplate(name){
  if(selectedIds.size===0){const i=document.getElementById('topInfo');if(i)i.textContent='Markiere zuerst Maschinen (Shift+Klick), dann speichern';return}
  copySelection();
  if(!clipboardBoxes)return;
  const t=getMyTemplates();t.push({name:name||('Vorlage '+(t.length+1)),clip:clipboardBoxes});
  try{localStorage.setItem('afe_tpls',JSON.stringify(t))}catch(e){}
  const dlg=document.getElementById('tplDlg');if(dlg)dlg.remove();
  showTemplates();
}
function deleteMyTemplate(i){const t=getMyTemplates();t.splice(i,1);try{localStorage.setItem('afe_tpls',JSON.stringify(t))}catch(e){}const dlg=document.getElementById('tplDlg');if(dlg)dlg.remove();showTemplates()}
function insertMyTemplate(i){
  const t=getMyTemplates();if(!t[i])return;
  const clip=JSON.parse(JSON.stringify(t[i].clip));
  const dlg=document.getElementById('tplDlg');if(dlg)dlg.remove();
  startPasteMode(clip,`Vorlage „${t[i].name}“`,'keep'); // V1.5.0: Vorlage an die Maus — klickweise stempeln
}

let pendingBoxId=null; // ID der Box die am Mauszeiger haftet
let pendingCleanup=null; // V1.9.30: räumt Handler der wartenden Platzierung ab — sonst schleppt ein alter Bewegungs-Handler die ALTE Box weiter mit (User-Fund: „letztes Lager wird mitverschoben, darunter ein neues")
function addBox(deviceKey){
  nextId=Math.max(nextId,(boxes.length?Math.max(...boxes.map(b=>b.id)):0)+1); // V1.9.44: ID-Schutz auch hier — schließt die Lücke endgültig
  const d=DEVICES[deviceKey];
  const rKey=d.isFurnace?(d.recipes['Holz (Logs)']?'Holz (Logs)':Object.keys(d.recipes)[0]):Object.keys(d.recipes)[0];
  // Box am Mauszeiger platzieren statt in der Mitte
  const viewX=canvasArea.scrollLeft+canvasArea.clientWidth/2;
  const viewY=canvasArea.scrollTop+canvasArea.clientHeight/2;
  const b={id:nextId++,device:deviceKey,recipe:rKey,count:1,floor:currentFloor,
    x:viewX/zoomLevel-150,
    y:viewY/zoomLevel-100};
  boxes.push(b);
  // Aufzug: automatisch Gegenstück eine Etage hoeher anlegen (wie im Spiel
  // unten/unten Port). Was in den Aufzug rein geht, kommt beim Partner raus.
  if(d.isLift){
    // V1.3.16: Richtungs-Wahl wie im Spiel — ein Aufzug verbindet ZWEI Etagen,
    // und zwar dahin, wo es Sinn macht: Steht unten schon die Fabrik (und oben
    // noch nichts), geht das Gegenstück NACH UNTEN. Sonst nach oben.
    // (Im Panel lässt sich die Ziel-Etage ohnehin frei einstellen, 0-30.)
    const up=currentFloor+1, dn=currentFloor-1;
    const hasUp=boxes.some(x=>(x.floor||0)===up);
    const hasDn=dn>=0&&boxes.some(x=>(x.floor||0)===dn);
    let targetFloor;
    if(dn<0)targetFloor=up;                    // vom EG geht's nur rauf
    else if(hasDn&&!hasUp)targetFloor=dn;      // unten steht schon was -> RUNTER (der Normalfall beim Türmebauen)
    else targetFloor=up;                       // sonst rauf (weiterbauen)
    const p={id:nextId++,device:deviceKey,recipe:rKey,count:1,floor:targetFloor,
      x:b.x,y:b.y,liftPartner:b.id}; // V1.3.15: gleiche Position wie untere Hälfte
    b.liftPartner=p.id;
    b.liftRole='in';p.liftRole='out'; // V1.3.17: platzierte Hälfte ist zuerst der EINGANG — im Dialog wählbar
    boxes.push(p);makeBoxEl(p);refreshBox(p.id);
    b._liftTarget=targetFloor; // für den Hinweistext nach dem Ablegen
  }
  makeBoxEl(b);
  if(pendingBoxId!==null&&pendingCleanup)pendingCleanup(true); // V1.9.30: hängt noch eine Box an der Maus? Erst sauber abräumen
  pendingBoxId=b.id;
  // Box am Mauszeiger befestigen - folgt der Maus bis zum Ablage-Klick
  const moveHandler=function(e){
    if(pendingBoxId===null)return;
    const r=canvasArea.getBoundingClientRect();
    const mx=(e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel-150;
    const my=(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel-60;
    b.x=snapVal(mx);b.y=snapVal(my);
    updatePos(b);
  };
  document.addEventListener('mousemove',moveHandler);
  // Bei Klick auf Canvas die Box dort ablegen
  const placeHandler=function(e){
    if(pendingBoxId===null)return;
    // V1.9.40/41: Klicks auf FREMDE Boxen/Dialoge/Menüs NICHT als Platzierung werten (Bubbling-Fix) —
    // vorher feuerte jeder Button-Klick (z.B. "dorthin springen") die Platzierung mit aus.
    // V1.9.41-HOTFIX: Die schwebende Box selbst ist AUSGENOMMEN — sie haftet mit dem Zeiger
    // INNERHALB ihrer Fläche an der Maus (Offset +150/+60), d.h. im echten Browser trifft der
    // Ablage-Klick SIE selbst. Der 1.9.40-Guard blockierte genau das → gar keine Maschine ließ
    // sich mehr ablegen (User-Fund: „Lift lässt sich nicht mehr setzen"). Die Partner-Hälfte
    // des Aufzugs ist ebenfalls ausgenommen, falls sie sichtbar mit am Cursor hängt.
    const tgt=e.target;
    const onGhost=tgt&&tgt.closest&&(tgt.closest('#box-'+b.id)||(b.liftPartner&&tgt.closest('#box-'+b.liftPartner)));
    if(!onGhost&&tgt&&tgt.closest&&(tgt.closest('.mbox')||tgt.closest('.dlg')||tgt.closest('.zonepanel')||tgt.closest('.machine-picker')||tgt.closest('.hintpop')||tgt.closest('.hotbar')||tgt.closest('.cmdbar')))return;
    if(pendingCleanup)pendingCleanup(); // V1.9.30: alle Handler ab (auch ESC)
    if(b.floor!==currentFloor){b.floor=currentFloor;applyFloorVisibility();} // V1.9.40: Box kommt auf die Etage, die du gerade ansiehst (vorher: unsichtbare Platzierung auf der alten Etage)
    pendingBoxId=null;
    drawConns();refreshAll();saveStorage();
    // Aufzugs-Assistent: gleich nach dem Platzieren sagen, wie es weitergeht
    if(b.device==='Lift'){
      const info=document.getElementById('topInfo');
      const partner=boxes.find(x=>x.id===b.liftPartner);
      const pf2=partner?(partner.floor||0):0;
      const pfeil=pf2>(b.floor||0)?'▲':'▼';
      if(info)info.textContent=`🛗 Aufzug platziert! Verbindet Etage ${(b.floor||0)===0?'EG':(b.floor||0)} ${pfeil} ${pf2===0?'EG':'Etage '+pf2} — drücke rechts ${pfeil} (oder Bild${pfeil}) und verbinde dort weiter.`;
      showLiftRoleDialog(b.id); // V1.3.17: Eingang oder Ausgang? User entscheidet
    }
  };
  canvasArea.addEventListener('click',placeHandler);
  // Bei Escape abbrechen
  const escHandler=function(e){
    if(e.key==='Escape'&&pendingBoxId!==null){
      if(pendingCleanup)pendingCleanup(true); // V1.9.30: zentral abräumen
      pendingBoxId=null;
    }
  };
  document.addEventListener('keydown',escHandler);
  pendingCleanup=(cancel)=>{document.removeEventListener('mousemove',moveHandler);canvasArea.removeEventListener('click',placeHandler);document.removeEventListener('keydown',escHandler);if(cancel)removeBox(b.id);pendingCleanup=null;};
  drawConns();
  refreshAll();
  saveStorage();
}

function updateSelInfo(){
  renderHotbar(); // V1.8.0: Leiste unten zeigt jetzt das Menü der Markierung
  const el=document.getElementById('selInfo');
  if(selectedIds.size>1){
    el.style.display='block';
    document.getElementById('selInfoText').textContent=`${selectedIds.size} Maschinen ausgewählt – ziehen zum gemeinsamen Verschieben`;
  } else {
    el.style.display='none';
  }
}
function clearSelection(){
  selectedConn=null;selectedWaypoint=null; // V1.9.0+46: auch Linien-/Punkt-Auswahl lösen
  selectedIds.clear();
  document.querySelectorAll('.mbox').forEach(x=>x.classList.remove('selected','groupsel'));
  updateSelInfo();
}
function applySelectionClasses(){
  document.querySelectorAll('.mbox').forEach(x=>x.classList.remove('selected','groupsel'));
  selectedIds.forEach(id=>{
    const el=document.getElementById('box-'+id);
    if(el)el.classList.add(selectedIds.size>1?'groupsel':'selected');
  });
}

function makeBoxEl(b){
  // V1.9.1: IDEMPOTENT — existiert das Element schon, wird es wiederverwendet.
  // Vorher konnte loadStorage DOM-Zwillinge erzeugen (gleiche ID!): removeBox
  // entfernte nur das erste Element, der Zwilling blieb sichtbar -> "Löschen geht nicht richtig"
  const ex=document.getElementById('box-'+b.id);
  if(ex){ex.style.left=b.x+'px';ex.style.top=b.y+'px';refreshBox(b.id);return}
  const el=document.createElement('div');
  el.className='mbox';el.id='box-'+b.id;
  el.style.left=b.x+'px';el.style.top=b.y+'px';
  el.onmousedown=e=>{
    if(pasteMode){ // V1.4.0: im Stempel-Modus platziert jeder Klick (auch auf einer bestehenden Box)
      if(e.button===0){
        const r=canvasArea.getBoundingClientRect();
        placePasteAt((e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel,(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel);
      } else endPasteMode();
      e.preventDefault();e.stopPropagation();return;
    }
    if(e.target.classList.contains('conn')||e.target.tagName==='SELECT'||e.target.tagName==='BUTTON'||e.target.tagName==='INPUT')return; // V1.3.19: INPUT erlaubt (Ziel-Etage, Portal-Zahlen …)
    if(connecting)return; // V1.9.45: Linien-Modus — Klicks auf Boxen sind VERBINDUNGS-Ziele, kein Anfassen/Markieren (User-Fund: Box klebte an der Maus, Menü sprang auf die Box)
    // Anti-Markier-Fix: verhindert Textauswahl & Auto-Scroll beim Ziehen der Box
    e.preventDefault();
    if(e.shiftKey){
      // Umschalt+Klick: Box zur Mehrfachauswahl hinzufügen/entfernen, kein Ziehen starten
      if(selectedIds.has(b.id))selectedIds.delete(b.id);else selectedIds.add(b.id);
      applySelectionClasses();updateSelInfo();
      e.stopPropagation();
      return;
    }
    const r=canvasArea.getBoundingClientRect();
    if(selectedIds.has(b.id)&&selectedIds.size>1){
      // Diese Box ist Teil einer bestehenden Gruppenauswahl -> ganze Gruppe ziehen
      groupDragOffsets={};
      groupDragStart={x:b.x,y:b.y};
      groupWaypoints=connections.filter(c=>selectedIds.has(c.from)&&selectedIds.has(c.to)&&c.waypoints&&c.waypoints.length).map(c=>({c,orig:c.waypoints.map(p=>({x:p.x,y:p.y}))})); // V1.9.45
      selectedIds.forEach(id=>{
        const bb=boxes.find(x=>x.id===id);
        if(bb)groupDragOffsets[id]={dx:bb.x-b.x,dy:bb.y-b.y};
      });
    } else {
      // Normaler Einzelklick: Auswahl auf diese Box zurücksetzen
      selectedIds=new Set([b.id]);
      groupDragOffsets=null;groupWaypoints=null;groupDragStart=null;
      applySelectionClasses();updateSelInfo();
    }
    dragBox=b;
    dragOff.x=(e.clientX-r.left+canvasArea.scrollLeft)/zoomLevel-b.x;
    dragOff.y=(e.clientY-r.top+canvasArea.scrollTop)/zoomLevel-b.y;
    selBox=b.id;
  };
  document.getElementById('boxesContainer').appendChild(el);
  refreshBox(b.id);
}

function refreshBox(id){
  const b=boxes.find(x=>x.id===id);
  if(!b)return;
  const el=document.getElementById('box-'+id);
  if(!el)return;
  // Etagen-Sichtbarkeit: nur Boxen der aktuellen Etage zeigen
  el.style.display=((b.floor||0)===currentFloor)?'':'none';
  const d=DEVICES[b.device];
  let r=d.recipes[b.recipe];
  // V1.3.8: Rezept-Schluessel nicht mehr vorhanden (z.B. alte Speicherdatei nach
  // Rezept-Umbenennung)? -> automatisch auf das erste gueltige Rezept umschalten,
  // statt die Box leer zu rendern.
  if(!r){b.recipe=Object.keys(d.recipes)[0];r=d.recipes[b.recipe];if(!r)return;}
  if(b.zone){el.classList.add('zoned');el.style.borderLeftColor=zoneColor(b.zone)}
  else{el.classList.remove('zoned');el.style.borderLeftColor=''}
  if(d.isInfo)el.style.borderStyle='dashed';else el.style.borderStyle=''; /* V1.9.35: Infobox = gestrichelt */
  // Dynamische Box-Hoehe: pro Port ~60px extra + Basis (~240px)
  let portCount=Math.min(b.count||1,10); // V1.9.38: Senken-Ports folgen NUR der Anzahl (V1.9.27-Regel konsequent) — Lager/Verkauf wachsen NICHT mehr mit ankommenden Linien; viele Linien docken am selben Port an (Merge wie im Spiel)
  // Hoehe folgt dem Inhalt; nur bei mehreren Anschlüssen gibt es-extra Platz
  // fuer die Ports (sie sitzen prozentual zwischen 8% und 92% der Hoehe).
  const boxH=portCount<=4?0:Math.round((220+(portCount-1)*72)*UI_SCALE); // V1.9.0: deutlich mehr Luft pro Anschluss — 10 Anschlüsse grafisch ausrichtbar (je 3 Linien dran)
  el.style.minHeight=boxH>0?boxH+'px':'';
  
  // Handle furnace-specific mixed fuel mode
  let effectiveRecipe=r;
  let portalHtml='';
  let infoHtml=''; /* V1.9.35: Infobox-Text */
  let liftHtml='';
  let sinkHtml='';
  if(d.isLift){
    const partner=boxes.find(x=>x.id===b.liftPartner);
    const pf=partner?(partner.floor||0):0;
    // V1.3.15: Rollen-Modell wie im Spiel — UNTERE Hälfte = NUR EINGANG,
    // OBERE Hälfte = NUR AUSGANG. Beide zeigen ihre Ladung.
    const isLiftIn=liftRole(b)==='in'; // V1.3.16: Rolle dynamisch — wer Ware bekommt, ist der EINGANG (auch bei Richtung runter!)
    const cargoIn={},cargoOut={};
    connections.filter(c=>c.to===b.id).forEach(c=>{
      const sfb=boxes.find(x=>x.id===c.from);if(!sfb)return;
      if(DEVICES[sfb.device]&&DEVICES[sfb.device].isLift)return;
      const sfr=getEffectiveRecipe(sfb);
      Object.keys(sfr.out||{}).forEach(m=>{cargoIn[m]=(cargoIn[m]||0)+effLineVal(c,m)}); // V1.9.55: LINE-Wirklichkeit statt Potenzial×count — die 80-Lüge bei einer Line ist tot
    });
    if(partner)connections.filter(c=>c.to===partner.id).forEach(c=>{
      const sfb=boxes.find(x=>x.id===c.from);if(!sfb)return;
      if(DEVICES[sfb.device]&&DEVICES[sfb.device].isLift)return;
      const sfr=getEffectiveRecipe(sfb);
      Object.keys(sfr.out||{}).forEach(m=>{cargoOut[m]=(cargoOut[m]||0)+effLineVal(c,m)}); // V1.9.55: LINE-Wirklichkeit (Partner-Seite)
    });
    const fmtL=o=>Object.entries(o).sort((a,x)=>x[1]-a[1]).map(([m,v])=>`${matName(m)} ${v.toFixed(1)}/Min`).join(' · ')||'<i style="color:var(--text-secondary)">noch nichts</i>';
    const richtung=(b.floor||0)<pf?'nach OBEN ⬆':'nach UNTEN ⬇';
    liftHtml=`<div style="margin:6px 0;padding:8px;background:rgba(163,113,247,.08);border-radius:8px;border:1px solid rgba(163,113,247,.35)">
      <div style="font-size:calc(var(--u,1.25) * 11.5px);color:var(--lift-accent);font-weight:700;margin-bottom:3px">${isLiftIn?'📥 NUR EINGANG':'📤 NUR AUSGANG'} — Aufzug ${richtung}</div>
      <div style="font-size:calc(var(--u,1.25) * 11px);color:var(--text-primary);line-height:1.6">${isLiftIn
        ?`nimmt an: <b>${fmtL(cargoIn)}</b><br><span style="color:var(--text-secondary)">…kommt auf Etage ${pf} heraus: ${fmtL(cargoOut)}</span>`
        :`gibt ab: <b>${fmtL(cargoOut)}</b><br><span style="color:var(--text-secondary)">…rein auf Etage ${pf}: ${fmtL(cargoIn)}</span>`}</div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-top:6px">
        <span style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary)">Ziel-Etage:</span>
        <input type="number" min="0" max="30" value="${pf}" style="min-width:calc(var(--u,1.25) * 64px);background:var(--bg-secondary);color:var(--lift-accent);border:1px solid rgba(163,113,247,.4);padding:3px 6px;border-radius:5px;font-size:calc(var(--u,1.25) * 11px)" onchange="setLiftFloor(${b.id},this.value)">
        <button onclick="jumpToLiftPartner(${b.id})" style="font-size:calc(var(--u,1.25) * 10px);padding:3px 8px;background:rgba(163,113,247,.15);color:var(--lift-accent);border:1px solid rgba(163,113,247,.4);border-radius:5px;cursor:pointer;font-weight:600">🛗 dorthin springen</button>
        <button onclick="swapLiftRoles(${b.id})" title="Eingang und Ausgang tauschen" style="font-size:calc(var(--u,1.25) * 10px);padding:3px 8px;background:rgba(163,113,247,.15);color:var(--lift-accent);border:1px solid rgba(163,113,247,.4);border-radius:5px;cursor:pointer;font-weight:700">⇄ tauschen</button>
      </div>
      <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary);margin-top:4px;line-height:1.5">Transportiert alles weiter: <b style="color:var(--lift-accent)">oben X an = unten X raus</b> (kein Lift-Limit) · ⚡ aber JE Band hinein/daraus trägt max ${beltCapacity}/Min — für mehr Durchsatz mehrere Lines.</div>
    </div>`;
  }
  if(d.isFurnace){
    // Furnace accepts ALL burnable items as fuel
    const FUELS={logs:2000,plank:20,coal:540,charcoal:40,coke:600,panacea_potion:320000};
    effectiveRecipe={in:{},out:{},time:1,note:'Alle Brennstoffe werden akzeptiert und addiert'};
    Object.keys(FUELS).forEach(f=>{effectiveRecipe.in[f]=0});
  }
  if(d.isPortal){
    const pc=portalConfig[b.id]||{item:'logs',rate:1};
    if(!portalConfig[b.id])portalConfig[b.id]=pc;
    const items=Object.keys(MAT_DE).filter(k=>k!=='sulfur_powder'&&k!=='sulfuric_acid').sort((a,b)=>a.localeCompare(b)); // V1.9.7: A–Z nach englischem Spiel-Namen — so findet man alles
    // Build item options
    const itemLabel=k=>{ // V1.9.9: hübsche Anzeige — englischer Spiel-Name vorne, deutsch dahinter, keine rohen IDs mehr
      const de=MAT_DE[k]||'';
      const m=de.match(/^(.*?)\s*\((.+)\)\s*$/);
      const en=m?m[2]:String(k).replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      return (uiLang==='de'&&((m&&m[1])||de)&&de!==en)?((m&&m[1])||de)+' ('+en+')':en; // V1.9.42: DEUTSCH vorne — Suche nach dem deutschen Wort geht endlich
    };
    const itemOpts=items.map(k=>`<option value="${k}"${k===pc.item?' selected':''}>${itemLabel(k)}</option>`).join('');
    
    if(d.portalType==='bank'){
      // Bankportal: Münztausch ohne Konfiguration
      effectiveRecipe={in:{'copper_coin':1000},out:{'silver_coin':1},time:1,note:'Kostenloser Münztausch'};
      portalHtml=`<div style="margin:6px 0;padding:8px;background:var(--bg-tertiary);border-radius:8px;border:1px solid rgba(168,85,247,.3)">
        <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--lift-accent);margin-bottom:4px;font-weight:600">🏦 Bankportal - Münztausch</div>
        <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-primary);line-height:1.5">
          <div>🔄 1.000 Kupfer → 1 Silber</div>
          <div>🔄 100 Silber → 1 Gold</div>
          <div>🔄 100.000 Kupfer → 1 Gold</div>
          <div style="color:var(--accent-green);margin-top:2px">✅ Tausch ist kostenlos!</div>
        </div>
      </div>`;
    } else if(d.portalType==='buy'){
      effectiveRecipe={in:{},out:{},time:60,note:`Kauft ${pc.batch||1}x ${matName(pc.item)} für ${pc.cost||200} ${matName(pc.currency)||pc.currency||'Goldmünze'}`};
      effectiveRecipe.out[pc.item]=(pc.batch||1)*pc.rate;
      portalHtml=`<div style="margin:6px 0;padding:8px;background:var(--bg-tertiary);border-radius:8px;border:1px solid rgba(34,197,94,.3)">
        <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--accent-green);margin-bottom:4px;font-weight:600">🛒 Einkaufsportal - Ware kaufen</div>
        <select onchange="setPortalItem(${b.id},this.value)" style="margin:2px 0">${itemOpts}</select>
        <div style="display:flex;gap:6px;margin-top:4px;flex-wrap:wrap">
          <div><span style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary)" title="Stück je Kauf im Spiel">Packung:</span><br><input type="number" value="${pc.batch||1}" min="1" step="1" style="width:calc(var(--u,1.25) * 56px);background:var(--bg-secondary);color:var(--accent-green);border:1px solid var(--border);padding:3px 5px;border-radius:5px;font-size:calc(var(--u,1.25) * 10.5px)" onchange="setPortalBatch(${b.id},this.value)"></div>
          <div><span style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary)">Kosten:</span><br><input type="number" value="${pc.cost||200}" min="1" step="50" style="width:calc(var(--u,1.25) * 66px);background:var(--bg-secondary);color:var(--accent-yellow);border:1px solid var(--border);padding:3px 5px;border-radius:5px;font-size:calc(var(--u,1.25) * 10.5px)" onchange="setPortalCost(${b.id},this.value)"></div>
          <div><span style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary)">Währung:</span><br><select onchange="setPortalCurrency(${b.id},this.value)" style="min-width:calc(var(--u,1.25) * 132px);background:var(--bg-secondary);color:var(--accent-yellow);border:1px solid var(--border);padding:3px 5px;border-radius:5px;font-size:calc(var(--u,1.25) * 10px)"><option value="gold_coin"${pc.currency==='gold_coin'?' selected':''}>Goldmünze</option><option value="silver_coin"${pc.currency==='silver_coin'?' selected':''}>Silbermünze</option><option value="copper_coin"${pc.currency==='copper_coin'?' selected':''}>Kupfermünze</option></select></div>
        </div>
        <div style="margin-top:6px;font-size:calc(var(--u,1.25) * 13px);line-height:1.75;color:var(--text-secondary);background:rgba(52,211,153,.06);border:1px solid rgba(52,211,153,.25);border-radius:8px;padding:8px 10px">
          <div style="display:flex;justify-content:space-between"><span>🛒 Kauf:</span><b style="color:var(--accent-green)">${pc.batch||1} × ${matName(pc.item)}</b></div>
          <div style="display:flex;justify-content:space-between"><span>💰 Kosten:</span><b style="color:var(--accent-green)">${pc.cost||200} ${matName(pc.currency)||'Goldmünze'} je Stück</b></div>
          <div style="display:flex;justify-content:space-between"><span>📊 Rate:</span><b style="color:var(--accent-green)">${pc.rate} ${matName(pc.item)}/Min</b></div>
        </div>
        ${(()=>{ // V1.9.4: EHRLICHES PORTAL-MODELL — Auslastung, Anlauf-Puffer, Geld-Hinweis
          const verbraucher=connections.filter(c=>c.from===b.id);
          if(verbraucher.length===0)return '';
          let bedarf=0,saegen=0;
          verbraucher.forEach(c=>{
            const tb2=boxes.find(x=>x.id===c.to);if(!tb2)return;
            const r2=getEffectiveRecipe(tb2);
            const q=(r2.in||{})[pc.item];
            if(q){bedarf+=calcRate(q,r2.time)*(tb2.count||1);
              if(tb2.device==='Table Saw')saegen+=(tb2.count||1);}
          });
          const auslastung=pc.rate>0?bedarf/pc.rate:99;
          const anlauf=saegen>0?`<div>📦 <b>Anlauf:</b> ${saegen} Säge(n) × 3 Stämme Puffer = <b>${saegen*3} Stämme</b>, bis alle voll arbeiten — bei ${pc.rate}/Min = ${Math.ceil(saegen*3/pc.rate)} Minuten Anlaufzeit</div>`:'';
          if(auslastung>0.75)return `<div style="margin-top:6px;font-size:calc(var(--u,1.25) * 13px);line-height:1.7;background:rgba(210,153,34,.12);border:1px solid rgba(210,153,34,.4);border-radius:8px;padding:8px 10px;color:var(--text-primary)">
            <b style="color:var(--accent-yellow)">🟡 PORTAL ${Math.round(auslastung*100)} % AUSGELASTET (${bedarf.toFixed(2)} von ${pc.rate}/Min)</b>
            <div style="margin-top:4px;color:var(--text-secondary)">⚠️ <b>Im Spiel streut der Geldzufluss:</b> Das Portal liefert nur, wenn ${pc.cost||200} Gold da sind — die Rate ${pc.rate}/Min ist eine Annahme, KEIN Garant! Ohne Einkommen = 0 Lieferung.</div>
            ${anlauf}
            <div style="margin-top:4px;color:var(--text-secondary)">💡 <b>Profi-Build:</b> 1 Portal DIREKT je Säge (kurzer Geld-Weg) statt ${verbraucher.length} Maschinen an einem Verteiler-Band.</div>
          </div>`;
          return `<div style="margin-top:6px;font-size:calc(var(--u,1.25) * 11.5px);color:var(--text-muted);line-height:1.6">📥 Eingang im Spiel: nur Münzen — das Portal sammelt ${pc.cost||200} Gold, DANN liefert es 1 Stück. Im Editor wird nichts bezahlt.<br>Auslastung aktuell: ${Math.round(auslastung*100)} %${anlauf}</div>`;
        })()}
      </div>`;
    } else {
      effectiveRecipe={in:{},out:{},time:60,note:`Verkaufe/versende ${matName(pc.item)}`};
      effectiveRecipe.in[pc.item]=pc.rate;
      portalHtml=`<div style="margin:6px 0;padding:8px;background:var(--bg-tertiary);border-radius:8px;border:1px solid rgba(248,81,73,.3)">
        <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--accent-red);margin-bottom:4px;font-weight:600">📦 Item verkaufen/versenden</div>
        <select onchange="setPortalItem(${b.id},this.value)" style="margin:2px 0">${itemOpts}</select>
        <div style="display:flex;align-items:center;gap:6px;margin-top:4px">
          <span style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary)">Rate/Min:</span>
          <input type="number" value="${pc.rate}" min="0.1" step="1" style="width:calc(var(--u,1.25) * 72px);background:var(--bg-secondary);color:var(--accent-red);border:1px solid var(--border);padding:3px 5px;border-radius:5px;font-size:calc(var(--u,1.25) * 10.5px)" onchange="setPortalRate(${b.id},this.value)">
        </div>
      </div>`;
    }
  }
  
  const outRate={}, inRate={};
  if(d.isSink){
    effectiveRecipe=getEffectiveRecipe(b); // V1.3.22: echte Aggregation — was wirklich ankommt (Merge mehrerer Linien)
    Object.entries(effectiveRecipe.in||{}).forEach(([m,q])=>{inRate[m]=q});
  } else {
  Object.entries(effectiveRecipe.out).forEach(([m,q])=>{outRate[m]=calcRate(q,effectiveRecipe.time)*b.count});
  Object.entries(effectiveRecipe.in).forEach(([m,q])=>{inRate[m]=calcRate(q,effectiveRecipe.time)*b.count});
  }
  
  // V1.3.10: Dünger-Anzeige für Beet/Gärtnerei
  let fertHtml='';
  if(d.fertIn){
    const ferts=[];
    connections.filter(c=>c.to===b.id).forEach(c=>{
      const sfb2=boxes.find(x=>x.id===c.from);if(!sfb2)return;
      const sfr2=getEffectiveRecipe(sfb2);
      Object.entries(sfr2.out||{}).forEach(([m,q])=>{
        if(FERTILIZERS.has(m))ferts.push(`${matName(m)} ${(calcRate(q,sfr2.time)*sfb2.count).toFixed(2)}/Min`);
      });
    });
    fertHtml=ferts.length
      ?`<div class="mb ok" style="background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.25)">🌱 Dünger angenommen: ${ferts.join(' · ')} — jeder Dünger zählt, besserer = besserer Ertrag</div>`
      :`<div class="mb" style="background:rgba(52,211,153,.05);border:1px solid rgba(52,211,153,.15)">🌱 Dünger: JEDER wird angenommen (optional per Band) — Samen von Hand einsetzen</div>`;
  }
  // Balance
  let balHtml='';
  const FUEL_HEAT={logs:2000,plank:20,coal:540,charcoal:40,coke:600,panacea_potion:320000};
  let fuelBreakdown=[];
  let incomingConns=connections.filter(c=>c.to===b.id);
  if(d.isFurnace){
    // Furnace: accept ALL burnable items from connections
    let totalHeat=0;
    incomingConns.forEach(c=>{
      const fb=boxes.find(x=>x.id===c.from);
      if(fb){
        let fr=DEVICES[fb.device].recipes[fb.recipe];
        if(DEVICES[fb.device].isPortal){
          const pc=portalConfig[fb.id]||{item:'logs',rate:1};
          fr={in:{},out:{},time:60};
          if(DEVICES[fb.device].portalType==='buy') fr.out[pc.item]=pc.rate;
          else fr.in[pc.item]=pc.rate;
        }
        else if(DEVICES[fb.device].isLift){fr=getEffectiveRecipe(fb);} // V1.9.30: Brennstoff per 🛗 Aufzug zählt — vorher las der Ofen nur das Roh-Rezept
        Object.entries(fr.out||{}).forEach(([mat,q])=>{
          if(FUEL_HEAT[mat]){
            const rate=effLineVal(c,mat); // V1.9.11: ehrliche Aufteilung — mehrere Linien von derselben Quelle zählen NICHT doppelt (Ware teilt sich auf die Bänder, wie beim Material-Modell)
            // FIX BETA1: Heat-Wert ist pro ITEM, calcRate liefert Items/MINUTE
            // -> durch 60 teilen fuer echten Heat/Sek (vorher Faktor 60 zu hoch)
            const heat=FUEL_HEAT[mat]*rate/60;
            totalHeat+=heat;
            fuelBreakdown.push({name:matName(mat), rate:rate, heat:heat, item:mat});
          }
        });
      }
    });
    // Also count direct fuel inputs (like from Einkaufsportal set to coal)
    incomingConns.forEach(c=>{
      const fb=boxes.find(x=>x.id===c.from);
      if(fb&&DEVICES[fb.device].isPortal){
        const pc=portalConfig[fb.id]||{item:'logs',rate:1};
        if(pc.item&&FUEL_HEAT[pc.item]){
          // Already counted above via portal fr.out
        }
      }
    });
    // Show total heat
    const fuelNames=fuelBreakdown.map(f=>`${f.name}: ${f.rate.toFixed(1)}/Min × ${FUEL_HEAT[f.item]} Heat`).join('\n');
    const placedMachines=boxes.filter(x=>x.furnaceId===b.id);
    const placedHeat=placedMachines.reduce((s,x2)=>{const md2=DEVICES[x2.device];return s+(md2&&md2.heat?md2.heat:0)*(x2.count||1)},0)*(factoryEfficiency/100)+(FURNACE_BASE_HEAT[b.device]!==undefined?FURNACE_BASE_HEAT[b.device]:0); // V1.9.56: BEDARF — Maschinen-Heat x Fabrik-Effizienz + Ofen-Grundverbrauch (gemessen Hochofen 8/Steinofen 5)
    const heatOk=totalHeat+0.05>=placedHeat;
    const uselessSrc=[]; // V1.9.57: angeschlossene Quellen ohne Brennstoff/Dampf — kräftig benennen (User-Fund: Steinbrecher→Ofen war grün)
    incomingConns.forEach(c=>{const sb=boxes.find(x=>x.id===c.from);if(!sb)return;const r2=getEffectiveRecipe(sb);const o2=Object.keys(r2.out||{});if(o2.length>0&&!o2.some(m=>furnaceFuelOK(d,m)))uselessSrc.push(devName(DEVICES[sb.device],sb.device)+' ('+o2.map(matName).slice(0,3).join(', ')+')')});
    const noMach=placedMachines.length===0;
    const cls=uselessSrc.length||(!heatOk&&!noMach)?'warn':'ok';
    balHtml=`<div class="mb ${cls}" style="background:rgba(210,153,34,.15);border:1px solid rgba(210,153,34,.3)">🔥 Gesamt-Heat: ${totalHeat.toFixed(0)} Heat/Sek · <b>Bedarf: ${placedHeat.toFixed(0)} P/Sek</b> (Maschinen-Heat × ${factoryEfficiency}% Effizienz + ${FURNACE_BASE_HEAT[b.device]||0} Ofen-Grundverbrauch)${noMach?(totalHeat>0?' — ✅ Bereit':' — 💡 noch keine Wärme-Maschinen auf dem Ofen'):(heatOk?'':'<br>⚠️ ZU WENIG Brennstoff — der Ofen kühlt aus! Mehr Lines oder ergiebigere Brennstoffe (Stamm 2000 · Koks 600 · Kohle 540)')}${uselessSrc.length?`<br>⛔ <b>Nichts Brennbares auf der Linie:</b> ${uselessSrc.join(' · ')} — der Ofen nimmt NUR ${d.isSteamHeat?'DAMPF (Rohr vom Dampfkessel)':'Brennstoff'} an. ${uselessSrc.length===1?'Diese Linie bringt':'Diese Linien bringen'} im Spiel nichts.`:''}</div>`; // V1.9.56 Bedarf · V1.9.57 Material-Ehrlichkeit + kein Fehl-Alarm bei leerem Ofen (vorher schrie das Fenster "kühlt aus", während der Dialog "Bereit" sagte)
  } else if(d.isSink){
    // Endstation: Lieferungen anzeigen (aggregiert, je Item Stück/Min)
    const liefer=Object.entries(inRate).sort((a,b)=>b[1]-a[1]);
    const total=liefer.reduce((s,x)=>s+x[1],0);
    sinkHtml=`<div style="margin:6px 0;padding:8px;background:rgba(163,113,247,.06);border-radius:8px;border:1px solid ${d.sinkType==='sales'?'rgba(63,185,80,.35)':'rgba(88,166,255,.35)'}">
      <div style="font-size:calc(var(--u,1.25) * 10px);font-weight:700;margin-bottom:4px;color:${d.sinkType==='sales'?'var(--accent-green)':'var(--accent-blue)'}">${d.sinkType==='sales'?'🏪 Verkaufsraum #'+sinkNumber(b)+' — gelieferte Ware':'📦 '+d.de+' #'+sinkNumber(b)+' — eingelagerte Ware'}</div>
      <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-muted);margin-bottom:4px">📍 steht auf Etage ${b.floor===0||!b.floor?'EG (Erdgeschoss)':b.floor} — erkennt selbst, was ankommt${d.sinkType==='sales'?' · im Spiel: Waren müssen zum Verkauf ins EG — per 🛗 Aufzug dorthin verbinden':(d.sinkType==='trash'?' · schluckt ALLES, auch Flüssigkeiten':(d.liquidOnly?' · 💧 nimmt NUR Flüssigkeiten an (Rohr-Anbindung)':' · 🧱 nimmt NUR feste Items an — Flüssigkeiten gehören ins 🧪 Kolben-Lager'))}</div>
      ${liefer.length?liefer.map(([m,v])=>`<div style="display:flex;justify-content:space-between;font-size:calc(var(--u,1.25) * 11px);padding:1px 0"><span>${matName(m)}</span><b style="color:var(--accent-green)">${v.toFixed(1)} Stück/Min</b></div>`).join(''):'<div style="font-size:calc(var(--u,1.25) * 10.5px);color:var(--text-muted)">Noch keine Line angeschlossen — Verbinde das Ende deiner Kette mit dieser Box.</div>'}
      ${liefer.length?`<div style="display:flex;justify-content:space-between;font-size:calc(var(--u,1.25) * 11.5px);margin-top:4px;padding-top:4px;border-top:1px solid var(--border-light)"><b>Gesamt</b><b style="color:var(--accent-green)">${total.toFixed(1)} Stück/Min</b></div>`:''}
    </div>`;
  } else {
    // Normal machine balance check
    const missingNoConn=[];
    Object.entries(inRate).forEach(([mat,needed])=>{
      let provided=0;
      incomingConns.forEach(c=>{
        if(d.fertIn&&FERTILIZERS.has(mat)){FERTILIZERS.forEach(f=>provided+=effLineVal(c,f))}
        else provided+=effLineVal(c,mat); // V1.9.54: effektive Zulauf-Rate
      });
      const name=matName(mat);
      if(incomingConns.length>0){
        if(provided>=needed-0.05){
          const surp=provided-needed;
          balHtml+=`<div class="mb ok">✅ ${name}: kommt ${provided.toFixed(2)}/Min · braucht ${needed.toFixed(2)}/Min${surp>0.05?` — Überschuss ${surp.toFixed(2)}/Min bleiben auf dem Band`:''}</div>`;
          let provRaw=0;const __seenS={}; // V1.9.55: ANGEBOTEN (Pool der Quellen) — Lines liefern nur den Bedarf, der Rest staut an der Quelle
          incomingConns.forEach(cc=>{if(__seenS[cc.from])return;__seenS[cc.from]=1;const sb=boxes.find(x=>x.id===cc.from);if(sb)provRaw+=sourcePool(sb,mat)});
          if(provRaw>needed*3&&provRaw>needed+2)balHtml+=`<div class="mb warn" style="background:rgba(210,153,34,.12);border:1px solid rgba(210,153,34,.35)">🟡 <b>ZU VIEL Zulauf:</b> ${provRaw.toFixed(1)}/Min werden angeboten, aber nur ${needed.toFixed(2)}/Min passen rein — im Spiel staut sich das Band vor der Maschine! Kauf-Rate am 🛒 Portal senken.</div>`;
        }
        else if(provided>0.05){ // V1.9.59: je EINGANG = 1 Maschine — wie viele laufen wirklich?
          const needOne=needed/Math.max(1,b.count||1);
          const runM=Math.min(b.count||1,Math.floor((provided+1e-9)/needOne));
          balHtml+=`<div class="mb warn">🟡 ${name}: <b>${runM} von ${b.count||1} Maschinen versorgt</b> (${provided.toFixed(1)}/${needed.toFixed(1)} = ${Math.round(provided/needed*100)}%) — Zulauf erhöhen: weitere Line oder stärkere Quelle (alle Eingänge teilen sich)</div>`; // V1.9.62: Pool
        }
        else
          balHtml+=`<div class="mb bad">⛔ ${name}: nichts kommt an — Maschine steht!</div>`;
      } else {
        missingNoConn.push(`${name} ${needed.toFixed(1)}/Min`);
      }
    });
    // V1.3.13: AUSGANGS-SEITE — produziert die Maschine mehr, als die Bänder wegtragen?
    if(!d.isSink&&!d.isFurnace&&!d.isPortal){ // V1.9.55: je MATERIAL — Pool vs. was Lines/Abnehmer wegtragen (auch zum Lift: Band cappt!)
      const aPS=(typeof __portSupply!=='undefined'&&__portSupply&&__portSupply.map[b.id])||null;
      const rf=aPS?machineRunFactor(aPS,b.count||1):1;
      Object.entries(outRate).forEach(([m,v])=>{
        const full=v*rf;
        if(full<=0.05)return;
        const lines=connections.filter(c=>c.from===b.id&&targetWant(c,m)>0);
        if(lines.length===0){balHtml+=`<div class="mb warn">📤 ${matName(m)}: Kein Abnehmer verbunden — im Spiel staut die Ware!</div>`;return;}
        // V1.9.59: Pool-RÜCKSTAU-Box ENTFERNT — "mehr Lines" war die falsche Botschaft:
        // 1 Ausgang = 1 Maschine; Überschuss/freie Ausgänge zeigt die neue Logik unten (V1.9.59-Block).
      });
    }
    if(missingNoConn.length)balHtml+=`<div class="mb bad" style="background:rgba(248,81,73,.1);border:1px solid rgba(248,81,73,.3);line-height:1.6">⛔ <b>KEIN EINGANG</b> — fehlt: ${missingNoConn.join(' · ')}<br>Im Spiel: Ware von Hand liefern oder ein 🛒 Einkaufsportal davor setzen</div>`;
    // Prüfe ob FALSCHES Material ankommt (Aufzüge nehmen alles an; Öfen prüft V1.9.57 selbst: NUR Brennstoff/Dampf)
    if(!d.isLift&&!d.isFurnace&&!d.isSink)
    incomingConns.forEach(c=>{
      const sfb=boxes.find(x=>x.id===c.from);
      if(!sfb)return;
      const sfr=getEffectiveRecipe(sfb);
      Object.keys(sfr.out||{}).forEach(mat=>{
        if(!(effectiveRecipe.in&&effectiveRecipe.in[mat]!==undefined)&&!(d.fertIn&&FERTILIZERS.has(mat))){ // V1.3.10: Dünger ist NIEMALS falsches Material
          const senderName=DEVICES[sfb.device]?DEVICES[sfb.device].de:sfb.device;
          const needList=Object.keys(effectiveRecipe.in||{}).map(m2=>matName(m2));
          const richtig=needList.length===0
            ?(d.fertIn?'per Band nur DÜNGER annahmbar (optional, besserer Ertrag) — Samen werden von HAND eingesetzt':'nimmt per Band nichts an')
            :('braucht: '+needList.join(' · ')+(d.fertIn?' — oder beliebigen Dünger':''));
          if(d.fertIn&&/_seed$/.test(mat)){ // V1.9.9: Samen ans Beet/Gärtnerei — kein Datenfehler, sondern Spiel-Mechanik: Samen gehen von HAND hinein
            balHtml+=`<div class="mb" style="background:rgba(210,153,34,.1);border:1px solid rgba(210,153,34,.3);line-height:1.6">🌱 <b>Samen gehören im Spiel von HAND ins Beet</b> — per Band nimmt es nur Dünger an. ${senderName} liefert ${matName(mat)}: Diese Linie bringt im Spiel nichts, du kannst sie entfernen. Samen 1× von Hand einsetzen — die Ernte läuft trotzdem.</div>`;
          } else {
            balHtml+=`<div class="mb bad" style="background:rgba(248,81,73,.12);border:1px solid rgba(248,81,73,.25)">❌ Falsches Material: ${senderName} liefert ${matName(mat)} — <b>${richtig}</b>!</div>`;
          }
        }
      });
    });
    // 🔌 ANSCHLUSS-RECHNER: Wie viele dieser Maschinen passt ein Band?
    if(!d.isSink&&Object.keys(effectiveRecipe.in||{}).length>0){
      const tips=Object.entries(effectiveRecipe.in).map(([m,q])=>{
        const perM=calcRate(q,effectiveRecipe.time);           // Verbrauch einer Maschine (Items/Min)
        const maxM=Math.max(1,Math.floor(beltCapacity/perM));  // Band-Kapazität ÷ Verbrauch
        return `${matName(m)}: max ${maxM}/Band (bei eingestellter Logistics-Effizienz ${beltCapacity}/Min)`;
      }).join(' · ');
      balHtml+=`<div class="mb" style="background:rgba(88,166,255,.1);border:1px solid rgba(88,166,255,.25);color:var(--accent-blue)">🔌 Anschluss-Rechner: ${tips} <small style="color:var(--text-muted)">(Band ${beltCapacity}/Min ÷ Verbrauch/Maschine)</small></div>`;
    }
    // 📤 ÜBERSCHUSS-PRÜFUNG (Bandstau wie im Spiel): Produktion > das, was die
    // angeschlossenen Verbraucher abnehmen -> im Spiel staut sich das Band und die
    // Quelle stottert. Öfen/Portale/Aufzüge schlucken alles, daher keine Warnung dort.
    if(!d.isFurnace&&!d.isPortal&&!d.isLift){
      const outs=connections.filter(c=>c.from===b.id);
      if(outs.length>0){
        Object.entries(outRate).forEach(([m,prod])=>{
          const effProd=effOutSum(b.id,m); // V1.9.54: effektiv auf den Lines (nicht Potenzial)
          let need=0,perMach=0,cName='';
          let realConsumer=false;
          const mism=[]; // V1.9.59: Ziele, die dieses Material GAR NICHT annehmen (Bug-1-Fix: Quelle darf nicht schweigen)
          const seenTgt=new Set();
          outs.forEach(c=>{
            const tb2=boxes.find(x=>x.id===c.to);if(!tb2)return;
            const dd=DEVICES[tb2.device];
            if(dd&&(dd.isFurnace||dd.isPortal||dd.isLift))return;
            if(seenTgt.has(c.to))return;seenTgt.add(c.to); // V1.9.54: je ZIEL-BOX nur 1× — vorher zählten 2 Lines zur selben Maschine doppelt (need 40 statt 20)
            realConsumer=true;
            const tr2=getEffectiveRecipe(tb2);
            if(tr2.in&&tr2.in[m]!==undefined){
              const pm=calcRate(tr2.in[m],tr2.time);
              need+=pm*(tb2.count||1);
              if(pm>perMach){perMach=pm;cName=dd?dd.de:tb2.device}
            } else if(!dd.isSink){ // V1.9.59: Maschinen-Ziel braucht dieses Material nicht
              mism.push(`${dd?dd.de:tb2.device} (${recName(tb2.recipe)})`);
            }
          });
          if(mism.length){ // V1.9.59: User-Fund 18.09. — Säge->Schleifer(Sand) zeigte NICHTS
            balHtml+=`<div class="mb bad">⛔ ${mism.join(', ')} nimmt ${matName(m)} NICHT an — diese Line liefert nichts! Rezept am Ziel wechseln oder Line lösen</div>`;
          }
          if(!d.isSink){ // V1.9.59: Maschinen-Box — 1 AUSGANG = 1 MASCHINE (kein Pool-RÜCKSTAU mehr)
            const aPS2=(typeof __portSupply!=='undefined'&&__portSupply&&__portSupply.map[b.id])||null;
            const rf2=aPS2?machineRunFactor(aPS2,b.count||1):1;
            const prodEff=prod*rf2; // laufende Produktion ALLER Maschinen
            const nP2=Math.min(b.count||1,10);
            const portsW2=new Set(outs.filter(c=>targetWant(c,m)>0).map(c=>c.fromPort||0));
            const freeP2=Math.max(0,nP2-portsW2.size); // Ausgänge ohne Line
            const perM2=prod/Math.max(1,b.count||1);
            if(freeP2>0){
              balHtml+=`<div class="mb warn">📤 <b>${freeP2} Ausgänge ohne Line:</b> ${freeP2} Maschine${freeP2>1?'n machen':' macht'} zusammen ${(freeP2*perM2).toFixed(1)}/Min ${matName(m)} — die fließen nirgendwo hin. Lines an freie Ausgänge ziehen oder Maschinen-Anzahl senken</div>`;
            } else if(prodEff>effProd+0.05){
              balHtml+=`<div class="mb warn">📤 <b>ÜBERSCHUSS:</b> +${(prodEff-effProd).toFixed(1)}/Min ${matName(m)} — Abnehmer nehmen nur ${effProd.toFixed(1)} von ${prodEff.toFixed(1)}/Min ab — 📦 Lager / 🏪 Verkauf anschließen oder Anzahl senken</div>`;
            }
          } else if(realConsumer&&need<effProd-0.05){
            const plus=effProd-need;
            const extra=perMach>0?Math.floor(plus/perMach+1e-9):0;
            const own=(DEVICES[b.device]&&DEVICES[b.device].de)||'Produktion'; // V1.9.10: eigener Gerätename statt hartkodierter "Säge"
            // V1.9.10: "132 weitere Gärtnerei"-Wahnsinn gefixt — Vorschlag nur noch wenn die Zahl SINN ergibt (<=10), sonst ehrlicher Standard-Tipp
            const tipp=(extra>0&&extra<=10&&cName)
              ?` <b>Lösung: ${extra} weitere ${cName} anschließen</b> (oder ${own}-Anzahl senken)`
              :` <b>Lösung: Überschuss abnehmen</b> — 📦 Lager / 🏪 Verkauf / 🌱 Beet (Dünger!) anschließen oder ${own}-Anzahl senken`;
            balHtml+=`<div class="mb warn" style="background:rgba(210,153,34,.12);border:1px solid rgba(210,153,34,.35)">📤 <b>RÜCKSTAU:</b> +${plus.toFixed(1)}/Min ${matName(m)} übrig — im Spiel staut das Band!${tipp}</div>`;
          }
        });
      }
    }
  }
  
  if(d.isInfo){ /* V1.9.35: Infobox — eigener Text, HTML-escapt */
    const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    infoHtml=`<div style="margin:6px 0;padding:10px 12px;background:var(--bg-tertiary);border:1px dashed var(--border);border-radius:10px;font-size:13px;line-height:1.8;color:var(--text-primary);white-space:pre-wrap;word-break:break-word">${b.infoText?esc(b.infoText):'<i style="color:var(--text-muted)">✏️ Noch kein Text — klicke oben rechts auf ✏️ und schreibe deinen Text</i>'}</div>
    <div style="display:flex;gap:6px;margin:2px 0 6px;flex-wrap:wrap">
      <button onclick="event.stopPropagation();showInfoBoxEditor(${b.id})" style="font-size:calc(var(--u,1.25) * 10.5px);padding:4px 10px;background:rgba(88,166,255,.12);border:1px solid rgba(88,166,255,.4);border-radius:6px;color:var(--accent-blue);cursor:pointer;font-weight:700">✏️ Text bearbeiten</button>
    </div>
    <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-muted);line-height:1.6">📝 Reine Beschriftung — keine Funktion, keine Anschlüsse, zählt nicht in die Bilanz. Vorbild: die beschreibbaren Schilder im Spiel.</div>`;
  }
  // Recipe select -使用 RECIPE_DE 德语显示
  const opts=Object.keys(d.recipes).map(k=>`<option value="${k}"${k===b.recipe?' selected':''}>${recName(k)}</option>`).join('');
  
  el.innerHTML=`
    <div class="mh">
      <span class="mt">${devName(d,b.device)==d.de?d.de+' <small style="color:var(--text-muted);font-weight:400">('+b.device+')</small>':b.device+' <small style="color:var(--text-muted);font-weight:400">('+d.de+')</small>'}${d.isSink?` <span style="color:var(--accent-purple);font-size:calc(var(--u,1.25) * 11px)">#${sinkNumber(b)}</span>`:''}${d.isFurnace?` <span style="color:var(--accent-yellow);font-size:calc(var(--u,1.25) * 11px);font-weight:800" title="Ofen-Nummer">${furnaceNo(b)}</span>`:''}${d.isInfo?`<span class="minfo" title="Text bearbeiten" onclick="event.stopPropagation();showInfoBoxEditor(${b.id})">✏️</span>`:`<span class="minfo" title="Infos & Messwerte dieser Maschine (vollständiges Fenster)" onclick="event.stopPropagation();showMachineDetails(${b.id})">ℹ️</span>`}</span>
      <span class="mc" onclick="removeBox(${b.id})">✕</span>
    </div>
    ${b.zone?`<div style="font-size:calc(var(--u,1.25) * 10px);color:${zoneColor(b.zone)};margin:-2px 0 4px">🗂️ Zone: ${b.zone}</div>`:''}
    ${(d.isPortal||d.isSink||d.isInfo)?'':(d.isFurnace?(d.isSteamHeat
      ?`<div style="font-size:calc(var(--u,1.25) * 10px);color:var(--accent-blue);padding:4px 8px;background:rgba(56,189,248,.08);border-radius:6px;border:1px solid rgba(56,189,248,.25);margin-bottom:4px;font-weight:500">♨️ Dampfheizkissen — Dampfkessel per ROHR anschließen (60 Dampf/std = 12 Heat), Platte 3×3, ersetzt den Ofen</div>`
      :`<div style="font-size:calc(var(--u,1.25) * 10px);color:var(--accent-yellow);padding:4px 8px;background:rgba(251,191,36,.08);border-radius:6px;border:1px solid rgba(251,191,36,.12);margin-bottom:4px;font-weight:500">🔧 Gemischter Brennstoff – alle verbundenen Brennstoffe werden addiert</div>`)
      :`<select onchange="changeRecipe(${b.id},this.value)">${opts}</select>`)}
    ${portalHtml}${liftHtml}${sinkHtml}${infoHtml}
    ${(d.isFurnace||d.isInfo)?'':`<div style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-muted);margin:2px 0" title="${String(effectiveRecipe.note||'').replace(/"/g,'&quot;')}">${String(effectiveRecipe.note||'').length>140?String(effectiveRecipe.note).slice(0,137)+'… <b style="color:var(--accent-blue)" title="volle Notiz im ℹ️-Fenster">ℹ️</b>':effectiveRecipe.note}</div>`}
    ${b.device==='Stackable Crucible'?(()=>{const fi=b.furnaceId?furnaceStackInfo(b.furnaceId):null;const idx=fi?(fi.stacks.findIndex(x=>x.id===b.id)+1):1;const nm=stackLevelNames(idx,b.count||1);return `<div style="font-size:calc(var(--u,1.25) * 10px);color:var(--accent-yellow);margin:2px 0;background:rgba(251,191,36,.08);padding:4px 8px;border-radius:6px;border:1px solid rgba(251,191,36,.25)">🏗️ <b>${(b.count||1)} FENSTER</b>: Tiegel ${nm.join(' · ')}${fi?` — Platz ${idx} von ${fi.plaetze} · Ofen gesamt ${fi.tiegel} Tiegel · ${fi.heat} P/Sek ${fensterAmpel(fi.fenster).e}`:' — noch auf keinem Ofen (Platz-Nummerierung kommt vom Ofen)'}<br><span style="color:var(--text-muted);font-size:calc(var(--u,1.25) * 10px)">Wärme wandert nur nach OBEN durch ARBEITENDE Tiegel — unten Dauer-Zulauf halten!</span></div>`})():''}
    ${d.heat&&!d.isFurnace?(()=>{
      const onFurnace=b.furnaceId&&boxes.find(fb=>fb.id===b.furnaceId&&DEVICES[fb.device]&&DEVICES[fb.device].isFurnace);
      return (onFurnace
        ?`<div style="font-size:calc(var(--u,1.25) * 10px);color:var(--accent-green);margin:2px 0;background:rgba(52,211,153,.08);padding:4px 8px;border-radius:6px;border:1px solid rgba(52,211,153,.12)">🔥 Benötigt: ${d.heat} Hitze/Sek — steht auf ${furnaceLabel(onFurnace)}</div>`
        :`<div style="font-size:calc(var(--u,1.25) * 10px);color:var(--accent-red);margin:2px 0;background:rgba(248,81,73,.08);padding:4px 8px;border-radius:6px;border:1px solid rgba(248,81,73,.12)">🔥 Benötigt: ${d.heat} Hitze/Sek — ⚠️ steht auf keinem Ofen!</div>`)
      +`<div style="display:flex;align-items:center;gap:6px;margin:2px 0 6px"><span style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-muted);font-weight:600">Ofen wählen:</span><select onchange="setFurnaceFor(${b.id},this.value)" style="font-size:calc(var(--u,1.25) * 10.5px);padding:3px 6px;background:var(--bg-secondary);color:var(--accent-yellow);border:1px solid rgba(210,153,34,.4);border-radius:6px;cursor:pointer;flex:1">${furnaceOptions(b)}</select></div>`;
    })():''}
    ${d.isFurnace?(() => {
      // Find all heat-needing machines (not furnaces, not portals)
      const heatMachines=Object.keys(DEVICES).filter(k=>DEVICES[k].heat&&!DEVICES[k].isFurnace&&!DEVICES[k].isPortal);
      const machineOpts=heatMachines.map(k=>`<option value="${k}">${DEVICES[k].de}</option>`).join('');
      const placed=boxes.filter(bo=>bo.furnaceId===b.id);
      const currentSlots=placed.length;
      const FA=furnaceAreaOf(b.device);
      const uArea=usedFurnaceArea(placed);
      const freeArea=FA-uArea;
      // Calculate heat from ALL connected fuel sources
      const FUEL_H={logs:2000,plank:20,coal:540,charcoal:40,coke:600,panacea_potion:320000};
      const incomingConns=connections.filter(c=>c.to===b.id);
      let heatPerSec=0;
      incomingConns.forEach(c=>{
        const fb=boxes.find(x=>x.id===c.from);
        if(fb){
          let fr=DEVICES[fb.device].recipes[fb.recipe];
          if(DEVICES[fb.device].isPortal){
            const pc=portalConfig[fb.id]||{item:'logs',rate:1};
            fr={in:{},out:{},time:60};
            if(DEVICES[fb.device].portalType==='buy') fr.out[pc.item]=pc.rate;
          }else if(DEVICES[fb.device].isLift){fr=getEffectiveRecipe(fb);} // V1.9.30: Aufzugs-Brennstoff zählt
          Object.entries(fr.out||{}).forEach(([mat,q])=>{
            // FIX BETA1: /60 -> echter Heat/Sek (Items/Min * Heat/Item / 60)
            // V1.9.11: fairShare — mehrere Linien von derselben Quelle zählen NICHT doppelt
            if(FUEL_H[mat]) heatPerSec+=FUEL_H[mat]*effLineVal(c,mat)/60;
          });
        }
      });
      // Each machine needs X heat/sec - multiply by count!
      const totalHeatNeeded=placed.reduce((sum,bo)=>{const md=DEVICES[bo.device];return sum+(md?md.heat:0)*(bo.count||1);},0);
      const totalMachines=placed.reduce((sum,bo)=>sum+(bo.count||1),0);
      const heatOk=heatPerSec>0?(totalHeatNeeded<=heatPerSec):true;
      const fuelCount=incomingConns.length;
      const uselessD=[]; // V1.9.57: Quellen ohne Brennstoff/Dampf im Dialog benennen
      incomingConns.forEach(c=>{const sb=boxes.find(x=>x.id===c.from);if(!sb)return;const rD=getEffectiveRecipe(sb);const oD=Object.keys(rD.out||{});if(oD.length>0&&!oD.some(m=>furnaceFuelOK(d,m)))uselessD.push(devName(DEVICES[sb.device],sb.device))});
      const totalAll=totalMachines+fuelCount;
      const slotsFull=freeArea<machineAreaOf('Crucible');
      return `<div style="margin:4px 0;padding:8px;background:var(--bg-tertiary);border-radius:8px;border:1px solid rgba(251,191,36,.2)">
        <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--accent-yellow);margin-bottom:4px;font-weight:600">🔥 ${furnaceLabel(b)}: ${heatPerSec.toFixed(1)} Hitze/Sek${heatPerSec===0?` <span style="color:var(--accent-red)">(kein Brennstoff${uselessD.length?' — '+uselessD.join(', ')+' liefert nichts Brennbares':''}!)</span>`:''}</div>
        <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary);margin-bottom:1px;font-weight:500">📦 Maschinen: ${totalMachines} (${totalHeatNeeded.toFixed(1)} Hitze) | ⛽ Brennstoff: ${fuelCount} (${heatPerSec.toFixed(0)} Heat)</div>
        <div style="font-size:calc(var(--u,1.25) * 10px);color:${slotsFull?'#f87171':'var(--text-secondary)'};margin-bottom:1px;font-weight:500">🧱 Platz: ${placed.length} Box${placed.length===1?'':'n'} belegen ${uArea} von ${FA} <b>Quadraten</b> <small style="color:var(--text-muted)">(frei: ${Math.max(0,freeArea)} Quadrate ≈ ${Math.floor(Math.max(0,freeArea)/3)} kleine Tiegel · kleiner Tiegel=3, stapelbarer=3 (≈1×1,1) — NICHT Stück!)</small></div>
        ${furnaceStackHtml(b)}
        <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-muted);margin-bottom:3px">📐 Spiel-gemessen: Grundverbrauch ${d.device==='Stone Furnace'?'5':'8'} P/Sek · Holz 2000 · Koks 600 · Kohle 540 · Holzkohle 40 Heat/Stück · <b>Kohle-Band heizt keinen vollen Ofen — zum Feuern HOLZ</b> · alle Messwerte: <b>ℹ️</b> oder ❓ Hilfe</div>
        <div style="font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary);margin-bottom:2px;font-weight:500">🔌 Anschlüsse: ${totalAll} (${totalMachines} Maschinen + ${fuelCount} Brennstoff-Zufuhren)</div>
        <div style="font-size:calc(var(--u,1.25) * 10px);color:${heatPerSec===0?(totalMachines>0?'#f87171':'#34d399'):(heatOk?'#34d399':'#f87171')};margin-bottom:4px;font-weight:500">🔥 Hitze: braucht ${totalHeatNeeded.toFixed(1)} · kommt ${heatPerSec.toFixed(1)} /Sek ${heatPerSec===0?(totalMachines>0?'⚠️ Kein Brennstoff'+(uselessD.length?' — '+uselessD.join(', ')+' liefert nichts Brennbares':'')+'!':'✅ Bereit'):(heatOk?'✅ Reicht':'⚠️ ZU WENIG Brennstoff — Tiegel stocken! Heat/Stück: Holz 2000 · Koks 600 · Kohle 540 · Holzkohle 40 — mehr oder stärkeren Brennstoff liefern')}</div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;align-items:center">
          <select id="furnaceMachineType_${b.id}" style="font-size:calc(var(--u,1.25) * 10px);padding:3px 5px;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:5px">${machineOpts}</select>
          <button ${slotsFull?'disabled':''} onclick="addFurnaceSlot(${b.id},document.getElementById('furnaceMachineType_${b.id}').value)" style="font-size:calc(var(--u,1.25) * 10px);padding:3px 8px;background:var(--bg-secondary);color:${slotsFull?'var(--text-muted)':'#34d399'};border:1px solid var(--border);border-radius:5px;cursor:${slotsFull?'not-allowed':'pointer'};font-weight:600">+ Hinzufügen</button>
          <button onclick="removeFurnaceSlot(${b.id})" style="font-size:calc(var(--u,1.25) * 10px);padding:3px 8px;background:var(--bg-secondary);color:var(--accent-red);border:1px solid var(--border);border-radius:5px;cursor:pointer;font-weight:600">- Letztes entfernen</button>
        </div>
        ${renderFurnaceSlots(b.id)}
      </div>`;
    })():''}
    ${d.isFurnace?`<div class="mr"><span class="ml">📥 Brennstoff Input:</span></div>
    ${incomingConns.length>0?fuelBreakdown.map(f=>`<div class="mr"><span class="ml">${f.name} (${FUEL_HEAT[f.item]} Heat)</span> <span class="mv inp">${f.rate.toFixed(1)}/Min → ${f.heat.toFixed(0)} Heat/Sek</span></div>`).join(''):``}${incomingConns.length===0?`<div class="mr" style="color:var(--accent-red);font-weight:500">⚠️ Kein Brennstoff verbunden!</div>`:''}`: (d.isSink||d.isLift||d.isInfo)?`` : `${Object.entries(outRate).length>0?`<div class="mr"><span class="ml">📤 Output:</span></div>${Object.entries(outRate).map(([m,v])=>{const ls=effOutSum(b.id,m);const nL=connections.filter(c=>c.from===b.id&&targetWant(c,m)>0).length;const lcM=LIQUID_MATERIALS.has(m)?LIQUID_LINE_CAP:beltCapacity;const aPS=(typeof __portSupply!=='undefined'&&__portSupply&&__portSupply.map[b.id])||null;const rf=aPS?machineRunFactor(aPS,b.count||1):1;const full=v*rf;let hint='';{const perM=v/Math.max(1,b.count||1);const nPm=Math.min(b.count||1,10);const portsW=new Set(connections.filter(cc=>cc.from===b.id&&targetWant(cc,m)>0).map(cc=>cc.fromPort||0));const freeP=Math.max(0,nPm-portsW.size);const lineMax=Math.min(perM,lcM);if(nL===0)hint=` <small style="color:var(--text-muted)">(Potenzial — noch keine Line · ${b.count||1} Maschine${(b.count||1)>1?'n':''} à ${perM.toFixed(0)}/Min)</small>`;else if(ls<=0.05)hint=` <small style="color:var(--text-muted)">· steht — kein Zulauf</small>`;else if(freeP>0)hint=` <small style="color:var(--accent-yellow)">· ${freeP} Ausgänge ohne Line — jeder Ausgang trägt 1 Maschine (${perM.toFixed(0)}/Min)</small>`;else if(aPS&&aPS.ratio&&[...portsW].some(p=>p<nPm&&aPS.ratio[p]===0)){const deadP=[...portsW].filter(p=>p<nPm&&aPS.ratio[p]===0).length;hint=` <small style="color:var(--accent-red)">· ⚠️ ${deadP} Ausgang${deadP>1?'s':''} an STEHENDER Maschine${deadP>1?'en':''} — Lines liefern nichts (Input fehlt an dieser Maschine)</small>`;}else if(ls<portsW.size*lineMax-0.5)hint=` <small style="color:var(--accent-yellow)">· Abnehmer nehmen nur ${ls.toFixed(0)}/Min — Potenzial ${(portsW.size*lineMax).toFixed(0)}/Min (${portsW.size} genutzte${portsW.size>1?' Ausgänge':'r Ausgang'} à 1 Maschine)</small>`;else if(perM>lcM+0.5)hint=` <small style="color:var(--accent-yellow)">· ⚠️ RÜCKSTAU ${(perM-ls).toFixed(1)}/Min — ${nL} Line${nL>1?'s':''} tragen nur ${ls.toFixed(0)}/Min (Cap ${LIQUID_MATERIALS.has(m)?LIQUID_LINE_CAP+'/Rohr':beltCapacity+'/Line'}, Quelle macht ${perM.toFixed(0)}/Min) — weitere Line nötig</small>`;else hint=` <small style="color:var(--accent-blue)">· ⚡ Lines voll (${ls.toFixed(0)}/${(portsW.size*lineMax).toFixed(0)})</small>`;} // V1.9.59: 1 AUSGANG = 1 MASCHINE
        return `<div class="mr"><span class="ml">${matName(m)}</span> <span class="mv out">${(ls>0?ls:v).toFixed(1)}/Min</span>${hint}</div>`}).join('')}`:''}  <div class="mr"><span class="ml">📥 Input:</span></div>
    ${Object.keys(inRate).length>0?Object.entries(inRate).map(([m,v])=>`<div class="mr"><span class="ml">${matName(m)}</span> <span class="mv inp">${v.toFixed(1)}/Min</span></div>`).join(''):`<div class="mr" style="color:var(--accent-green);font-weight:500">Kein Input nötig</div>`}`}
    ${(d.isInfo)?'':balHtml}${fertHtml}
    <div class="cc">
      ${d.isInfo?'':`<button onclick="event.stopPropagation();chgCnt(${b.id},-1)">−</button>
      <span class="cnt">×${b.count}</span>
      <button onclick="event.stopPropagation();chgCnt(${b.id},1)">+</button>
      <span class="al">${b.device==='Stackable Crucible'?'Fenster (= Höhe)':'Anzahl'}</span>`}
      <button onclick="event.stopPropagation();moveFloor(${b.id},1)" title="Eine Etage höher verschieben" style="margin-left:4px">⬆</button>
      <button onclick="event.stopPropagation();moveFloor(${b.id},-1)" title="Eine Etage tiefer verschieben">⬇</button>
      <span class="al" title="Etage dieser Maschine">🏢${(b.floor||0)===0?'EG':'E'+(b.floor||0)}</span>
    </div>
    ${(()=>{
      if(d.isInfo)return ''; /* V1.9.35: Infobox hat keine Anschlüsse */
      // Nummerierte Anschlusspunkte: 1 pro Maschine auf jeder Seite
      const pc=portCountOf(b); // V1.9.5+V1.9.15: Senken = Anzahl + ankommende Linien — GLEICHE Formel wie beim Linien-Andocken
      // Zaehle belegte Ports (einzelne Port-Indizes)
      const outPortsUsed=new Set(), inPortsUsed=new Set();
      connections.forEach(c=>{
        if(c.from===b.id)outPortsUsed.add(c.fromPort||0);
        if(c.to===b.id)inPortsUsed.add(c.toPort||0);
      });
      const outUsed=outPortsUsed.size;
      const inUsed=inPortsUsed.size;
      let html='';
      // Port-Zaehler Anzeige
      const needsIn=!d.isSink&&!d.isFurnace&&!d.isPortal&&!d.isLift&&!d.isInfo&&Object.keys(getEffectiveRecipe(b).in||{}).length>0;
      if(pc>1){
        html+=`<div style="display:flex;justify-content:space-between;padding:2px 8px 4px;font-size:calc(var(--u,1.25) * 10px);color:var(--text-secondary)"><span>📥 In: ${inUsed}/${pc}</span><span>📤 Out: ${outUsed}/${pc}</span><span>${pc>4?'↕ Box wächst mit der Anzahl':''}</span></div>`;
        if(needsIn&&inUsed<pc){ // V1.9.36 → V1.9.62 POOL: Ports sind Andock-Stellen — Maschinen teilen sich ALLE Lines
          const aPSx=(typeof __portSupply!=='undefined'&&__portSupply&&__portSupply.map[b.id])||null;
          const vfx=aPSx?machineRunFactor(aPSx,b.count||1):1;
          if((b.count||1)>1&&vfx>=0.9995)
            html+=`<div style="padding:0 8px 4px;font-size:calc(var(--u,1.25) * 10px);color:var(--accent-blue);font-weight:600" title="Alle Lines der Box speisen ALLE Maschinen gemeinsam — Spiel-Messung Sep 2026: 1 Säge + 3 Schleifer + 6 Fertigungseinheiten = sauber, kein Stau">ℹ️ Nicht alle Eingänge haben eine Line — die vorhandenen sättigen alle Maschinen (Pool)</div>`;
          else if((b.count||1)>1)
            html+=`<div style="padding:0 8px 4px;font-size:calc(var(--u,1.25) * 10px);color:var(--accent-red);font-weight:600" title="Alle Lines der Box speisen ALLE Maschinen gemeinsam (Pool) — zu wenig Zulauf heißt: alle Maschinen laufen langsamer">⚠️ Zulauf deckt nicht alle Maschinen — weitere Line oder stärkere Quelle nötig (Pool)</div>`;
          else
            html+=`<div style="padding:0 8px 4px;font-size:calc(var(--u,1.25) * 10px);color:var(--accent-red);font-weight:600" title="Ohne Zuleitung steht die Maschine im Spiel">⚠️ Keine Zuleitung — Maschine steht</div>`;
        }
      } else if(needsIn&&inUsed===0){
        html+=`<div style="padding:0 8px 4px;font-size:calc(var(--u,1.25) * 10px);color:var(--accent-red);font-weight:600">⚠️ Keine Zuleitung — Maschine steht</div>`;
      }
      // Input-Ports (links) - nummeriert,8%-92% damit sie nicht am Rand kleben
      const isLiftOutHalf=d.isLift&&liftRole(b)==='out'; // V1.3.16: dynamisch (Flussrichtung, nicht Etagennummer)
      if(!isLiftOutHalf)for(let i=0;i<pc;i++){
        const yPct=pc===1?50:(8+(i/(pc-1))*84);
        const isUsed=inPortsUsed.has(i);
        html+=`<div class="conn inp ${isUsed?'conn-used':'conn-unused'}" data-box-id="${b.id}" data-port="in:${i}" style="top:${yPct}%;transform:translateY(-50%)">${i+1}</div>`;
      }
      // Output-Ports (rechts) - nummeriert
      // V1.2: Verkaufsraum hat KEINE Ausgänge (Ware bleibt verkauft), Lager schon
      const liftInHalf=d.isLift&&liftRole(b)==='in'; // V1.3.16: dynamisch
      if(!d.isFurnace&&!liftInHalf&&!(d.isSink&&(d.sinkType==='sales'||d.sinkType==='trash'||d.sinkType==='potionRack'))){
        for(let i=0;i<pc;i++){
          const yPct=pc===1?50:(8+(i/(pc-1))*84);
          const isUsed=outPortsUsed.has(i);
          html+=`<div class="conn out ${isUsed?'conn-used':'conn-unused'}" data-box-id="${b.id}" data-port="out:${i}" style="top:${yPct}%;transform:translateY(-50%)" onmousedown="event.stopPropagation();event.preventDefault();startConn(${b.id},${i},event.clientX,event.clientY)">${i+1}</div>`;
        }
      }
      return html;
    })()}
  `;
}

function refreshAll(){
  __psStamp++; // V1.9.54: Port-Motor neu berechnen (Struktur kann sich geändert haben)
  // V1.9.56: WEICHEN-/MERGE-WAISEN — Verweise auf gelöschte Eltern-Linien sauber lösen
  // (Fallback = Box-Port; vorher blieb die tote ID im Datensatz stehen — Fremd-Audit-Fund)
  if(connections.some(x=>x.branchParentId!==undefined||x.mergeParentId!==undefined)){
    connections.forEach(c=>{if(!c.id)connId(c)});
    const live=new Set(connections.map(c=>c.id));
    connections.forEach(x=>{
      if(x.branchParentId!==undefined&&!live.has(x.branchParentId)){delete x.branchParentId;delete x.branchWpIdx}
      if(x.mergeParentId!==undefined&&!live.has(x.mergeParentId)){delete x.mergeParentId;delete x.mergeWpIdx}
    });
  }
  boxes.forEach(b=>refreshBox(b.id));updateStatus();
}
function syncDOM(){ // V1.9.2: erzwingt 1:1 zwischen Daten und DOM — Geisterboxen unmöglich
  const have=new Set(boxes.map(b=>b.id));
  document.querySelectorAll('#boxesContainer .mbox').forEach(el=>{
    const m=el.id.match(/^box-(\d+)$/);
    if(!m||!have.has(parseInt(m[1])))el.remove();
  });
  boxes.forEach(b=>{if(!document.getElementById('box-'+b.id))makeBoxEl(b)});
}
window.addEventListener('load',()=>{setTimeout(()=>{ // V1.9.6: Gesundheits-Check — weißer Bildschirm darf nie stumm sein
  try{
    let saved=null;try{saved=JSON.parse(localStorage.getItem('afp')||'null')}catch(e){}
    const domN=document.querySelectorAll('#boxesContainer .mbox').length;
    if(saved&&saved.boxes&&saved.boxes.length>0&&domN===0){
      userMsg('⚠️ Karte im Speicher ('+saved.boxes.length+' Boxen), aber nichts sichtbar — 🧰 → 🔍 Selbstdiagnose, Bericht einsenden!');
    }
  }catch(e){}
},1500)});
let __mapEdgeAt=0;
function mapEdgeHint(){ // V1.9.7: Fabrikrand erreicht — ehrlich sagen, wo es mehr Platz gibt
  const n=Date.now();if(n-__mapEdgeAt>4000){__mapEdgeAt=n;userMsg('🗺️ Hier endet das Fabrikgelände — es wächst automatisch nach rechts/unten mit. Mehr Platz oben/links: 🏢 höhere Etage + 🛗 Aufzug.')}
}
function userMsg(m){ // V1.9.3: lautes Feedback — Löschversuche dürfen nie stumm sein
  const st=document.getElementById('statBar');if(st)st.textContent=m;
  const ti=document.getElementById('topInfo');if(ti)ti.textContent=m;
}
function runSelfTest(){ // V1.9.3: 🔍 Selbstdiagnose — läuft im Browser des Nutzers, Ergebnis kopierbar
  const R=[];
  const domBoxes=document.querySelectorAll('#boxesContainer .mbox').length;
  R.push('Version: '+APP_VERSION);
  R.push('Browser: '+navigator.userAgent.slice(0,80));
  R.push('Boxen (Daten/DOM): '+boxes.length+' / '+domBoxes+(boxes.length===domBoxes?'  ✓':'  ❌ ABWEICHEND — Geisterboxen!'));
  R.push('Markiert: '+selectedIds.size+' Box(en)'+(selectedConn!=null?' + 1 Linie':''));
  const ae=document.activeElement;
  const aeTag=ae?String(ae.tagName):'?';
  R.push('Fokus-Element: '+aeTag+(ae&&(aeTag==='INPUT'||aeTag==='SELECT'||aeTag==='TEXTAREA')?'  ❌ Entf wird im Eingabefeld geschluckt — Karte anklicken!':'  ✓'));
  try{
    const probe={id:999999,device:'Table Saw',recipe:'Plank',count:1,floor:currentFloor,x:100,y:100};
    boxes.push(probe);makeBoxEl(probe);
    const vor=!!document.getElementById('box-999999');
    removeBox(999999);
    const domWeg=document.getElementById('box-999999')===null;
    const arrWeg=!boxes.some(b=>b.id===999999);
    R.push('Löschtest (Probe-Box): '+(vor&&domWeg&&arrWeg?'✓ funktioniert':'❌ FEHLER (vorher '+vor+' · DOM weg '+domWeg+' · Daten weg '+arrWeg+')'));
  }catch(e){R.push('Löschtest: ❌ EXCEPTION: '+e.message)}
  R.push('Theme: "'+document.body.className+'" (leer = dunkler Standard) · Etage: '+currentFloor+' · Zoom: '+Math.round(zoomLevel*100)+'% · Größe: '+UI_SCALE);
  try{
    const ca=document.getElementById('canvasArea'),bs2=document.getElementById('boxesContainer');
    if(ca&&bs2){const cs=getComputedStyle(ca),bc=getComputedStyle(bs2);
      R.push('Karte: Hintergrund='+cs.backgroundColor+' · Grid='+(bc.backgroundImage&&bc.backgroundImage!=='none'?'an ✓':'AUS ❌')+' · Boxen sichtbar: '+document.querySelectorAll('#boxesContainer .mbox:not([style*="none"])').length);}
    const ovl=[...document.querySelectorAll('.dlg')].map(d=>d.id).filter(Boolean);
    R.push('Offene Fenster: '+(ovl.join(', ')||'keine'));
    if(typeof canvas!=='undefined'&&canvas)R.push('Linien-Canvas: '+canvas.width+'×'+canvas.height+' px (Viewport-Modus)');
  }catch(e){R.push('Karten-Check: ❌ '+e.message)}
  if(window.__afeErrors&&__afeErrors.length)R.push('⚠️ FEHLER SEIT START ('+__afeErrors.length+'):\n  '+__afeErrors.slice(-5).join('\n  '));
  else R.push('Fehler seit Start: keine ✓');
  window.__entfSeen=false;
  document.dispatchEvent(new KeyboardEvent('keydown',{key:'Delete',bubbles:true}));
  R.push('Entf-Taste erreicht das Tool: '+(window.__entfSeen?'✓':'❌ Handler fehlt!'));
  const txt='🔍 SELBSTDIAGNOSE\n'+new Date().toLocaleString('de-DE')+'\n'+'─'.repeat(34)+'\n'+R.join('\n')+'\n'+'─'.repeat(34)+'\nWenn etwas ❌ zeigt: Diesen Text kopieren und melden — über ❓ Hilfe → „Über & Rechtliches“'+(GITHUB_URL?' ('+GITHUB_URL+')':'')+'.';
  const old=document.getElementById('selfTestDlg');if(old)old.remove();
  const ov=document.createElement('div');ov.className='dlg';ov.id='selfTestDlg';
  ov.innerHTML=`<div class="box" style="width:560px">
    <h3>🔍 Selbstdiagnose</h3>
    <textarea readonly style="width:100%;height:220px;background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;padding:10px;font-family:monospace;font-size:12.5px">${txt}</textarea>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button onclick="navigator.clipboard.writeText(document.querySelector('#selfTestDlg textarea').value);userMsg('📋 Diagnose kopiert — in der Nachricht an den Entwickler einfügen')" style="flex:1;padding:10px;background:rgba(88,166,255,.15);border:1px solid rgba(88,166,255,.4);border-radius:8px;color:var(--accent-blue);font-weight:700;cursor:pointer">📋 Bericht kopieren</button>
      <button onclick="document.getElementById('selfTestDlg').remove()" style="padding:10px 16px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer">✕</button>
    </div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function removeBox(id){
  // Lift-Partner mit entfernen (sonst bleibt beim ESC-Abbrechen eine Waise übrig)
  const rb=boxes.find(x=>x.id===id);
  if(rb&&rb.liftPartner){
    const pid=rb.liftPartner;
    connections=connections.filter(c=>c.from!==pid&&c.to!==pid);
    const pe=document.getElementById('box-'+pid);if(pe)pe.remove();
    boxes=boxes.filter(x=>x.id!==pid);
    delete portalConfig[pid];
  }
  // Wird ein Ofen entfernt, verlieren die darauf stehenden Maschinen ihren Platz -
  // sie bleiben als normale Boxen erhalten, aber nicht mehr "auf dem Ofen" markiert.
  boxes.forEach(b=>{if(b.furnaceId===id)delete b.furnaceId});
  boxes=boxes.filter(b=>b.id!==id);
  connections=connections.filter(c=>c.from!==id&&c.to!==id);
  delete portalConfig[id];
  selectedIds.delete(id);
  const el=document.getElementById('box-'+id);if(el)el.remove();
  // Recalculate all remaining boxes
  boxes.forEach(b=>refreshBox(b.id));
  drawConns();saveStorage();
}
function changeRecipe(id,r){const b=boxes.find(x=>x.id===id);if(b){b.recipe=r;refreshBox(id);drawConns();saveStorage()}}
function chgCnt(id,d){
  const b=boxes.find(x=>x.id===id);if(!b)return;
  const dv=DEVICES[b.device];
  if(dv&&dv.isLift){alert('Aufzüge bleiben einzeln — rauf = ein Aufzug, runter = ein zweiter. Für mehr Durchsatz einfach einen weiteren Aufzug bauen.');return} // V1.3.20
  const old=b.count||1;
  b.count=Math.max(1,Math.min(10,old+d)); // V1.3.20: maximal 10 Maschinen pro Box · V1.9.50: Stapel-Tiegel = 10 Fenster Spiel-max (Empfehlung 5)
  if(old===b.count)return;
  if(b.count<old){ // V1.3.23: Ports sind weg -> Verbindungen auf diesen Ports mit löschen (keine Geister-Linien)
    connections=connections.filter(c=>!((c.from===id&&(c.fromPort||0)>=b.count)||(c.to===id&&(c.toPort||0)>=b.count)));
  }
  refreshAll();drawConns();saveStorage(); // V1.9.56: Voll-Refresh — Port-Motor-Stempel + Statusleiste sofort aktuell (vorher nur refreshBox: Fremd-Audit-Fund Geister-Werte)
}
function startConn(id,portIdx,cx,cy){connecting={boxId:id,portIdx:portIdx!==undefined?portIdx:0,downX:cx,downY:cy,dragged:false,done:false};setConnModeBar();updateSelInfo();drawConns()} // V1.9.47: MENÜ (unten) schaltet beim KLICK auf den Anschluss um — wie bei jedem Item (User, 3. Wunsch) // V1.9.42: Menü schaltet beim KLICK auf den Anschluss um, nicht erst wenn die Line steht // V1.9.34: Klick-Klick — ohne Ziehen bleibt die Verbindung 'angezogen'

// Portal functions
function setPortalItem(id,item){
  if(!portalConfig[id])portalConfig[id]={item:'logs',rate:1};
  portalConfig[id].item=item;
  refreshAll();drawConns();refreshBox(id);drawConns();saveStorage();
}
function setPortalRate(id,rate){
  if(!portalConfig[id])portalConfig[id]={item:'logs',rate:1};
  portalConfig[id].rate=parseFloat(rate)||10;
  refreshAll();drawConns();refreshBox(id);drawConns();saveStorage();
}
function setPortalBatch(id,batch){
  if(!portalConfig[id])portalConfig[id]={item:'logs',rate:1};
  portalConfig[id].batch=parseInt(batch)||1;
  refreshAll();drawConns();refreshBox(id);saveStorage();
}
function setPortalCost(id,cost){
  if(!portalConfig[id])portalConfig[id]={item:'logs',rate:1};
  portalConfig[id].cost=parseInt(cost)||200;
  refreshAll();drawConns();refreshBox(id);saveStorage();
}
function setPortalCurrency(id,cur){
  if(!portalConfig[id])portalConfig[id]={item:'logs',rate:1};
  portalConfig[id].currency=cur;
  refreshAll();drawConns();refreshBox(id);saveStorage();
}

// Furnace slot functions
// Die tatsächlich auf dem Ofen stehenden Maschinen (boxes mit furnaceId===furnaceId)
// sind IMMER die einzige Wahrheitsquelle für die Slot-Anzahl - kein separater Zähler mehr,
// der aus dem Takt geraten könnte.
// ===== V1.3.11: Ofen-Bezug per LINIE ziehen =====
// Wie im Spiel gehört eine Hitze-Maschine (Schmelztiegel & Co.) AUF einen Ofen.
// Im Editor reicht dafuer jetzt: Linie von der Maschine zum Ofen ziehen.
// (Steht die Maschine woanders, egal — der BEZUG zaehlt, nicht die Position.)
function handleFurnaceDrop(srcId,furnId,fromPort,toPort){
  const s=boxes.find(x=>x.id===srcId),f=boxes.find(x=>x.id===furnId);
  if(!s||!f)return false;
  const sd=DEVICES[s.device],fd=DEVICES[f.device];
  if(!sd||!fd||!fd.isFurnace||!sd.heat||sd.isFurnace||sd.isPortal||sd.isSink)return false;
  const makesFuel=Object.keys(getEffectiveRecipe(s).out||{}).some(m=>FUEL_HEAT_TABLE[m]);
  if(makesFuel){promptFurnacePlacement(srcId,furnId,fromPort||0,toPort||0);return true;} // beides moeglich -> fragen
  placeOnFurnace(srcId,furnId);
  return true;
}
// V1.3.25: Brennstoff-Linie vom GEWAEHLTEN Anschluss liefern (nicht immer Port 0)
function deliverToFurnace(srcId,furnId,fromPort,toPort){
  const dup=connections.find(c=>c.from===srcId&&c.fromPort===(fromPort||0)&&c.to===furnId&&c.toPort===(toPort||0));
  if(!dup)connections.push({from:srcId,to:furnId,fromPort:fromPort||0,toPort:toPort||0});
  refreshAll();drawConns();saveStorage();
}
function placeOnFurnace(srcId,furnId){
  const s=boxes.find(x=>x.id===srcId),f=boxes.find(x=>x.id===furnId);
  if(!s||!f)return;
  const fd=DEVICES[f.device],sd=DEVICES[s.device];
  const placed=boxes.filter(b=>b.furnaceId===furnId&&b.id!==srcId);
  const fArea=furnaceAreaOf(f.device),used=usedFurnaceArea(placed);
  if(s.device==='Stackable Crucible'&&placed.filter(bo=>bo.device==='Stackable Crucible').length>=(STACK_CAP[f.device]||Math.floor(fArea/3))){alert(stackCapMsg(f.device));return} // V1.9.50: Hochofen 7 · Steinofen 3 (User-Realtest)
  const need=machineAreaOf(s.device)*(s.device==='Stackable Crucible'?1:(s.count||1)); // V1.9.49: Stapel zaehlt Basis-Flaeche einmal
  if(used+need>fArea){
    alert(fd.de+': Fläche überschritten!\nBelegt: '+used+'/'+fArea+' · '+devName(sd,s.device)+' braucht zusätzlich '+need+'.\n(Tipp: Werte in MACHINE_AREA anpassen, falls du im Sandbox andere misst.)');
    return;
  }
  s.furnaceId=furnId;
  refreshBox(srcId);refreshBox(furnId);
  drawConns();refreshAll();saveStorage();
  const ti=document.getElementById('topInfo');
  if(ti)ti.textContent='🔥 '+devName(sd,s.device)+' steht jetzt auf '+fd.de+' — Fläche '+(used+need)+'/'+fArea+' · Ofen braucht noch Brennstoff';
}
function promptFurnacePlacement(srcId,furnId,fromPort,toPort){
  const s=boxes.find(x=>x.id===srcId),f=boxes.find(x=>x.id===furnId);
  if(!s||!f)return;
  const sd=DEVICES[s.device],fd=DEVICES[f.device];
  const ov=document.createElement('div');ov.className='dlg';ov.id='furnDropDlg';
  ov.innerHTML=`<div class="box" style="width:440px">
    <h3>🔥 Auf den Ofen stellen — oder liefern?</h3>
    <div style="font-size:12.5px;color:var(--text-secondary);line-height:1.7;margin-bottom:12px">
      <b>${devName(sd,s.device)}</b> → <b>${fd.de}</b><br>
      Diese Maschine braucht Hitze vom Ofen — und ihr Erzeugnis wäre auch ein guter Brennstoff. Was willst du?
    </div>
    <div style="display:flex;gap:8px">
      <button onclick="document.getElementById('furnDropDlg').remove();placeOnFurnace(${srcId},${furnId})" style="flex:1;padding:10px;background:rgba(210,153,34,.15);border:1px solid rgba(210,153,34,.5);border-radius:8px;color:var(--accent-yellow);font-weight:700;cursor:pointer">🔥 Auf den Ofen stellen<br><small style="font-weight:400">bekommt Hitze — empfohlen</small></button>
      <button onclick="document.getElementById('furnDropDlg').remove();deliverToFurnace(${srcId},${furnId},${fromPort||0},${toPort||0})" style="flex:1;padding:10px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-weight:700;cursor:pointer">⛽ Erzeugnis liefern<br><small style="font-weight:400">als Brennstoff verbrennen (vom Anschluss ${ (fromPort||0)+1 })</small></button>
    </div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function addFurnaceSlot(furnaceId,deviceType){
  const furnaceBox=boxes.find(b=>b.id===furnaceId);
  const d=DEVICES[furnaceBox?.device];
  if(!d||!d.isFurnace)return;
  const md=DEVICES[deviceType];
  if(!md||!md.heat||md.isFurnace||md.isPortal)return;
  const placed=boxes.filter(b=>b.furnaceId===furnaceId);
  const totalOnFurnace=placed.reduce((s,bo)=>s+(bo.count||1),0);
  // FLÄCHEN-MODELL (Sandbox 31.08.2026): Ofen hat Fläche (Steinofen 9, Hochofen 42),
  // jede Maschine belegt Fläche (kleiner Tiegel 3, stapelbarer 4, ...).
  // Statt "maxSlots Maschinen" gilt: Summe der Flächen darf die Ofenfläche nicht
  // uebersteigen. Zaehlt inkl. "Anzahl"-Feld (eine Box mit Anzahl 10 = 10 Maschinen).
  const fArea=furnaceAreaOf(furnaceBox.device);   // FIX 1.1.1: Geräte-Namen uebergeben, nicht die Box-ID!
  if(deviceType==='Stackable Crucible'&&placed.filter(bo=>bo.device==='Stackable Crucible').length>=(STACK_CAP[furnaceBox.device]||Math.floor(fArea/3))){alert(stackCapMsg(furnaceBox.device));return} // V1.9.50: Hochofen 7 · Steinofen 3
  const usedArea=usedFurnaceArea(placed);
  const needArea=machineAreaOf(deviceType);
  if(usedArea+needArea>fArea){
    alert(`${d.de}: Fläche überschritten!\nBelegt: ${usedArea}/${fArea} Fläche · ${DEVICES[deviceType].de} braucht zusätzlich ${needArea}.\n(Tipp: Flächen-Werte oben bei MACHINE_AREA anpassen, falls du im Sandbox andere Werte misst.)`);
    return;
  }
  // Create a new machine on the furnace
  const offset=placed.length*80;
  const newBox={id:nextId++,device:deviceType,recipe:Object.keys(md.recipes)[0],count:1,
    floor:furnaceBox.floor||0, // V1.9.29: DER EG-BUG — der Ofen-Panel-Knopf war der EINZIGE Platzierweg ohne Etage: Tiegel vom Ofen-Menü landeten IMMER im EG, egal ob der Ofen auf E1 oder E10 stand
    x:furnaceBox.x+10,y:furnaceBox.y+140+offset,furnaceId:furnaceId};
  boxes.push(newBox);
  makeBoxEl(newBox);
  refreshBox(furnaceId);
  drawConns();refreshAll();saveStorage();
}
function removeFurnaceSlot(furnaceId){
  const onFurnace=boxes.filter(b=>b.furnaceId===furnaceId);
  if(onFurnace.length===0)return;
  const lastBox=onFurnace[onFurnace.length-1];
  removeBox(lastBox.id);
  refreshBox(furnaceId);
  drawConns();saveStorage();
}
function renderFurnaceSlots(furnaceId){
  const placed=boxes.filter(b=>b.furnaceId===furnaceId);
  if(placed.length===0) return '<div style="font-size:calc(var(--u,1.25) * 10.5px);color:var(--text-muted);margin-top:4px">Noch keine Maschinen platziert</div>';
  let html='<div style="display:flex;gap:3px;flex-wrap:wrap;margin-top:4px">';
  placed.forEach((bo,i)=>{
    const md=DEVICES[bo.device];
    const color=md?md.heat<=2?'#34d399':md.heat<=4?'#fbbf24':'#f87171':'var(--text-muted)';
    const countLabel=(bo.count||1)>1?`${i+1}×${bo.count}`:`${i+1}`;
        const titleTxt=`${md?md.de:bo.device} (${bo.count||1}x, ${(md?md.heat:0)*(bo.count||1)} Hitze/Sek, ${machineAreaOf(bo.device)*(bo.count||1)} Fläche)`;
    html+=`<div title="${titleTxt}" style="width:${(bo.count||1)>1?28:18}px;height:18px;border-radius:3px;background:${color};border:1px solid ${color};display:flex;align-items:center;justify-content:center;font-size:7px;color:#fff;cursor:pointer" onclick="removeBox(${bo.id})">${countLabel}</div>`;
  });
  html+='</div>';
  return html;
}

function updatePos(b){
  const el=document.getElementById('box-'+b.id);
  if(el){el.style.left=b.x+'px';el.style.top=b.y+'px'}
}

// Mehrere Verbindungen am selben Ein-/Ausgang werden vertikal aufgefächert,
// damit sie sich nicht exakt überlappen und man z.B. sieht, dass neben Holz
// auch noch Kohle an einen Ofen angeschlossen ist.
function fanOffset(i,n){ if(n<=1) return 0; const spread=Math.min(60,(n-1)*13); return -spread/2+i*(spread/(n-1)); }
function connGroups(){
  const outG={}, inG={};
  connections.forEach(c=>{ (outG[c.from]=outG[c.from]||[]).push(c); (inG[c.to]=inG[c.to]||[]).push(c); });
  return {outG,inG};
}
function connEndpoints(c,outG,inG){
  const fb=boxes.find(x=>x.id===c.from), tb=boxes.find(x=>x.id===c.to);
  if(!fb||!tb)return null;
  const fe=document.getElementById('box-'+fb.id), te=document.getElementById('box-'+tb.id);
  if(!fe||!te)return null;
  // Port-Index aus der Verbindung nehmen oder aus der Gruppen-Reihenfolge
  const pcOut=portCountOf(fb), pcIn=portCountOf(tb); // V1.9.15: gleiche Port-Zahl wie die Anzeige — Linien docken jetzt RICHTIG an
  const outIdx=c.fromPort!==undefined?c.fromPort:0;
  const inIdx=c.toPort!==undefined?c.toPort:0;
  let sx=fb.x+fe.offsetWidth+7;
  let ex=tb.x-7; // V1.9.51: let — Merge dockt am Eltern-Wegpunkt (ex wird ueberschrieben)
  // Port-Position berechnen (8%-92% wie in refreshBox)
  let sy, ey;
  if(pcOut<=1){ sy=fb.y+fe.offsetHeight/2; }
  else { const pct=0.08+(outIdx/(pcOut-1))*0.84; sy=fb.y+fe.offsetHeight*pct; }
  if(pcIn<=1){ ey=tb.y+te.offsetHeight/2; }
  else { const pct=0.08+(inIdx/(pcIn-1))*0.84; ey=tb.y+te.offsetHeight*pct; }
  if(c.branchParentId!==undefined){ // V1.9.48: WEICHE — Start ist der Abzweig-Punkt der Eltern-Linie (vorher: Box-Port -> Linie war fuer Klick/Farbe/Punkte an FALSER Stelle, User-Fund „starr dort")
    const pc=connections.find(x=>x.id===c.branchParentId);
    if(pc&&pc.waypoints&&pc.waypoints[c.branchWpIdx]){sx=pc.waypoints[c.branchWpIdx].x;sy=pc.waypoints[c.branchWpIdx].y}
  }
  if(c.mergeParentId!==undefined){ // V1.9.51: MERGE — Ende dockt am Punkt der Eltern-Linie (mehrere Quellen, ein Band)
    const pc=connections.find(x=>x.id===c.mergeParentId);
    if(pc&&pc.waypoints&&pc.waypoints[c.mergeWpIdx]){ex=pc.waypoints[c.mergeWpIdx].x;ey=pc.waypoints[c.mergeWpIdx].y}
  }
  return {fb,tb,fe,te,sx,sy,ex,ey};
}
// Bester-Versuch-Ausweichlogik: Wenn zwischen Quelle und Ziel eine ANDERE Box
// im direkten Weg der Linie liegt, wird die Kurve zusätzlich nach oben oder
// unten (je nachdem, was näher liegt) um diese Box herum gebogen, statt
// stur geradeaus mitten durch sie hindurchzulaufen. Funktioniert pro
// Verbindung einzeln und ist ein Näherungsverfahren, kein exaktes Routing -
// bei sehr dichten Layouts kann man betroffene Boxen weiterhin per Hand
// verschieben (siehe Gruppen-Verschieben).
function computeAvoidOffset(fb,tb,sx,sy,ex,ey){
  const minX=Math.min(sx,ex), maxX=Math.max(sx,ex);
  let maxNeeded=0, dir=1;
  boxes.forEach(b=>{
    if(b.id===fb.id||b.id===tb.id)return;
    const el=document.getElementById('box-'+b.id);
    if(!el)return;
    const w=el.offsetWidth||300, h=el.offsetHeight||100;
    if(b.x+w<minX||b.x>maxX)return;
    const t=maxX>minX?Math.max(0,Math.min(1,(b.x+w/2-minX)/(maxX-minX))):0.5;
    const lineY=sy+(ey-sy)*t;
    const top=b.y-15, bottom=b.y+h+15;
    if(lineY>top&&lineY<bottom){
      const distAbove=lineY-top, distBelow=bottom-lineY;
      const needed=Math.min(distAbove,distBelow)+(bottom-top)/2+15;
      if(needed>maxNeeded){maxNeeded=needed; dir=(lineY-(b.y+h/2))>=0?1:-1;}
    }
  });
  return maxNeeded*dir;
}
// Für Rückführungen über eine ganze Maschinenreihe hinweg: statt diagonal
// mitten durch alles zu schneiden, wird eine feste "Rückführ-Spur" unterhalb
// (oder oberhalb, je nachdem was näher liegt) ALLER betroffenen Boxen
// gesucht, auf der die Linie rechtwinklig mit abgerundeten Ecken entlangläuft
// - wie eine eigene Rücklauf-Gasse neben der Hauptreihe, nicht durch sie hindurch.
// Läuft mehr als eine Rückführung durch denselben Bereich (echte parallele
// "Bänder"), bekommt jede ihre EIGENE Spur im Abstand von einem vollen
// Rasterfeld (GRID_SIZE) - genau wie im Spiel, wo 4 Bänder auch 4 Feld
// Breite brauchen, nicht eines mit Farbcode.
function computeLoopbackLane(fb,tb,sx,sy,ex,ey,connIdx,allLoopbacks){
  const minX=Math.min(sx,ex), maxX=Math.max(sx,ex);
  let maxBottom=-Infinity, minTop=Infinity, anyInPath=false;
  boxes.forEach(b=>{
    if(b.id===fb.id||b.id===tb.id)return;
    const el=document.getElementById('box-'+b.id);
    if(!el)return;
    const w=el.offsetWidth||300, h=el.offsetHeight||100;
    if(b.x+w<minX||b.x>maxX)return;
    anyInPath=true;
    maxBottom=Math.max(maxBottom,b.y+h);
    minTop=Math.min(minTop,b.y);
  });
  if(!anyInPath)return null; // freie Strecke - normale Kurve reicht
  // Eigene Spurnummer unter allen Rückführungen, deren Strecke sich mit
  // dieser überschneidet (überlappender X-Bereich) - stabil sortiert nach
  // Verbindungsindex, damit jede Rückführung IMMER dieselbe Spur bekommt.
  const overlapping=allLoopbacks.filter(o=>!(Math.min(o.sx,o.ex)>maxX||Math.max(o.sx,o.ex)<minX)).sort((a,b)=>a.idx-b.idx);
  const laneIndex=overlapping.findIndex(o=>o.idx===connIdx);
  const laneOffset=(laneIndex>=0?laneIndex:0)*GRID_SIZE;
  if(overlapping.length>1){
    // Mehrere gleichzeitige Rückführungen teilen sich denselben Bereich ->
    // ALLE konsequent auf derselben Seite stapeln (unten), sonst würde jede
    // Linie für sich "optimieren" und manche oben, manche unten landen -
    // das sähe nicht nach parallelen Spuren aus, sondern nach Chaos.
    return maxBottom+50+laneOffset;
  }
  const belowY=maxBottom+50, aboveY=minTop-50, midY=(sy+ey)/2;
  return (Math.abs(belowY-midY)<=Math.abs(midY-aboveY))?belowY:aboveY;
}
// ===== WAYPOINT SYSTEM =====
// Verbindungen können Wegpunkte haben: [{x, y}, ...]
// Doppelklick auf eine Linie fügt einen Wegpunkt hinzu.
// Ziehen von Wegpunkten passt die Route an.
// Rechtsklick auf Wegpunkt löscht ihn.
let draggingWaypoint=null; // {connIdx, wpIdx}
let hoveredWaypoint=null;  // {connIdx, wpIdx}

function getConnWaypoints(c){return c.waypoints||(c.waypoints=[])}
function nearestWaypointToLine(sx,sy,ex,ey,mx,my){
  // Entfernung von Punkt (mx,my) zur Linie sx,sy -> ex,ey
  const dx=ex-sx,dy=ey-sy,len2=dx*dx+dy*dy;
  if(len2===0)return Math.sqrt((mx-sx)**2+(my-sy)**2);
  let t=((mx-sx)*dx+(my-sy)*dy)/len2;
  t=Math.max(0,Math.min(1,t));
  const px=sx+t*dx,py=sy+t*dy;
  return Math.sqrt((mx-px)**2+(my-py)**2);
}
const CONN_SWATCHES=[['Holz hellbraun','#b5651d'],['Eisen','#8fa3ad'],['Stein','#a8a29e'],['Sand','#d9c07a'],['Kupfer','#c0704a'],['Blau','#4aa3df'],['Lila','#a371f7'],['Pink','#d66a9e'],['Türkis','#2dd4bf'],['Weiß','#e6edf3']];
function showConnColorDialog(idx,ev){
  const c=connections[idx];if(!c)return;
  closeConnColorDialog();
  const d=document.createElement('div');d.className='hintpop';d.id='connColorDlg';
  d.innerHTML=`<div class="hintpop-drag" onmousedown="dragPop('connColorDlg',event)">🎨 Linie einfärben</div>
    <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">Eigene Farbe zur Unterscheidung (z.&nbsp;B. Holz = Braun, Eisen = Grau).<br><b>🚦 Rot / Orange / Grün bleiben dem System vorbehalten</b> — sobald eine Leitung nicht mehr stimmt, übersteuert das System deine Farbe.</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">${CONN_SWATCHES.map(s=>`<button onclick="setConnColor(${idx},'${s[1]}')" title="${s[0]}" style="width:36px;height:36px;border-radius:9px;background:${s[1]};border:3px solid ${c.color===s[1]?'#fff':'rgba(255,255,255,.15)'};cursor:pointer"></button>`).join('')}</div>
    <button onclick="setConnColor(${idx},null)" style="width:100%;margin-top:10px;padding:9px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer;font-size:13.5px;font-weight:700">🔁 Systemfarbe (automatisch)</button>`;
  document.body.appendChild(d);
  document.body.appendChild(d);
  // V1.9.5: IMMER komplett im Bild (vorher: landete unter der Leiste unten) + verschiebbar
  const w=d.offsetWidth||360,hh=d.offsetHeight||260;
  let x=Math.min((ev&&ev.clientX||300)+14,window.innerWidth-w-16);
  let y=Math.min(Math.max(60,(ev&&ev.clientY||300)-40),window.innerHeight-hh-110);
  d.style.left=Math.max(8,x)+'px';d.style.top=Math.max(8,y)+'px';
  setTimeout(()=>document.addEventListener('mousedown',function h(e){if(!d.contains(e.target)){d.remove();document.removeEventListener('mousedown',h)}}),0);
}
function closeConnColorDialog(){const d=document.getElementById('connColorDlg');if(d)d.remove()}
function dragPop(id,ev){ // V1.9.5: kleine Fenster an der Titelleiste verschieben
  const el=document.getElementById(id);if(!el)return;
  ev.preventDefault();
  const sx=ev.clientX-el.offsetLeft,sy=ev.clientY-el.offsetTop;
  const mv=e=>{el.style.left=Math.max(0,Math.min(window.innerWidth-el.offsetWidth,e.clientX-sx))+'px';el.style.top=Math.max(0,Math.min(window.innerHeight-60,e.clientY-sy))+'px'};
  const up=()=>{document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up)};
  document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);
}
function setConnColor(idx,col){
  const c=connections[idx];if(!c)return;
  if(col)c.color=col;else delete c.color;
  closeConnColorDialog();drawConns();saveStorage();
}
function findWaypointAt(mx,my){
  const {outG,inG}=connGroups();
  for(let ci=0;ci<connections.length;ci++){
    const c=connections[ci];
    if(!c.waypoints)continue;
    for(let wi=0;wi<c.waypoints.length;wi++){
      const wp=c.waypoints[wi];
      if(Math.sqrt((mx-wp.x)**2+(my-wp.y)**2)<15/zoomLevel)
        return{connIdx:ci,wpIdx:wi};
    }
  }
  return null;
}
function findConnAt(mx,my){
  const {outG,inG}=connGroups();
  let best=-1,bestDist=15/zoomLevel;
  connections.forEach((c,idx)=>{
    const pts=connEndpoints(c,outG,inG);
    if(!pts)return;
    // Prüfe alle Segmente (start->wp1->wp2->...->end)
    const wps=getConnWaypoints(c);
    const points=[{x:pts.sx,y:pts.sy},...wps,{x:pts.ex,y:pts.ey}];
    for(let i=0;i<points.length-1;i++){
      const d=nearestWaypointToLine(points[i].x,points[i].y,points[i+1].x,points[i+1].y,mx,my);
      if(d<bestDist){bestDist=d;best=idx;}
    }
  });
  return best;
}

// Prüft ob eine Verbindung hauptsächlich Flüssigkeit transportiert
function isLiquidConnection(c){
  const fb=boxes.find(x=>x.id===c.from);
  if(!fb)return false;
  const fr=getEffectiveRecipe(fb);
  // Prüfe ob irgendein Output ein flüssiges Material ist
  return Object.keys(fr.out||{}).some(m=>LIQUID_MATERIALS.has(m));
}
let beltAnimOffset=0;
let beltAnimRunning=false;
function startBeltAnimation(){
  if(beltAnimRunning)return;
  beltAnimRunning=true;
  function tick(){
    beltAnimOffset=(beltAnimOffset-0.4)%24; // V1.3.19: Bänder flüssen ZUR Ziel-Maschine (Pfad Quelle->Ziel, abnehmender Offset = Fluss nach vorn)
    drawConns();
    beltAnimId=requestAnimationFrame(tick);
  }
  tick();
}
let beltAnimId=0;
let __drawReq=null;
function drawConns(){ // V1.9.44: max. 1× pro Bildschirm-Frame zeichnen — 200 Maschinen flüssig scrollen/zoomen (vorher: jeder Maus-Schritt = Komplett-Zeichnung)
  if(__drawReq)return;
  if(typeof requestAnimationFrame==='undefined'){__drawConnsNow();return}
  __drawReq=requestAnimationFrame(()=>{__drawReq=null;__drawConnsNow()});
}
function __drawConnsNow(){
  if(!canvas||!ctx)return; // V1.9.8: ohne 2D-Kontext nie abstürzen
  document.body.classList.toggle('connmode',!!connecting); // V1.9.42: im Linien-Modus alle Eingänge aufleuchten lassen
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // V1.9.8: Welt-Koordinaten -> Bildschirm: Zoom + Scroll (Canvas liegt viewport-groß über der Karte)
  ctx.setTransform(zoomLevel,0,0,zoomLevel,-(canvasArea?canvasArea.scrollLeft:0),-(canvasArea?canvasArea.scrollTop:0));
  drawZoneHulls();drawWeicheMarkers(); // V1.9.46: Zonen-Rahmen + Weichen-Marken UNTER die Linien
  // V1.9.7: Fabrikgelände-Rand — pro Etage endlich, wächst nach rechts/unten automatisch mit
  if(typeof MAP_SIZE==='number'&&MAP_SIZE>0){
    ctx.strokeStyle='rgba(139,148,158,.4)';ctx.lineWidth=3;ctx.setLineDash([16,10]);
    ctx.strokeRect(1.5,1.5,MAP_SIZE-3,MAP_SIZE-3);ctx.setLineDash([]);
  }
  const {outG,inG}=connGroups();
  const allLoopbacks=[];
  connections.forEach((c,idx)=>{
    const pts=connEndpoints(c,outG,inG);
    if(!pts)return;
    if(pts.tb.x<pts.fb.x-40)allLoopbacks.push({idx,sx:pts.sx,ex:pts.ex});
  });
  connections.forEach((c,connIdx)=>{
    const pts=connEndpoints(c,outG,inG);
    if(!pts)return;
    const {fb,tb,sx,sy,ex,ey}=pts;
    // Etagen-Filter: nur Verbindungen der aktuell sichtbaren Etage zeichnen
    if((fb.floor||0)!==currentFloor||(tb.floor||0)!==currentFloor)return;
    const ok=connectionOk(fb,tb);
    const part=connPartial(fb,tb);
    const jammed=isBeltJammed(fb,tb,c);
    const isLoopback=tb.x<fb.x-40;
    // Aufzugs-Verbindung? Dann immer Violett + dick + durchgezogen
    const isLiftConn=(DEVICES[fb.device]&&DEVICES[fb.device].isLift)||(DEVICES[tb.device]&&DEVICES[tb.device].isLift);
    // Farbe wählen: Rückführungen in Violett/Purple, normal in Grün/Rot
    const isLiquid=isLiquidConnection(c);
    // Teillast (GELB): Ziel läuft im Spiel, bekommt aber zu wenig -> wie Bandstau
    let baseColor=isLiftConn?(ok?'#a371f7':'#f85149'):(part?'#e3b341':(isLiquid?(ok?'#0ea5e9':'#f85149'):(jammed?'#d29922':(isLoopback?(ok?'#a371f7':'#f85149'):(ok?'#3fb950':'#f85149')))));
    // V1.7.0: EIGENE Linienfarbe — nur sichtbar, solange alles OK ist.
    // Rot/Orange/Gelb (und Lift-Violett/Flüssig-Blau) bleiben dem System vorbehalten:
    // Sobald etwas nicht stimmt (zu wenig, Stau, falsches Material), übersteuert das System.
    if(c.color&&!isLiftConn&&!isLiquid&&ok&&!part&&!jammed)baseColor=c.color;
    const wps=getConnWaypoints(c);
    let allPts=[{x:sx,y:sy},...wps,{x:ex,y:ey}];
    if(c.branchParentId!==undefined){const pcx=connections.find(x=>x.id===c.branchParentId);if(pcx&&pcx.waypoints&&pcx.waypoints[c.branchWpIdx])allPts[0]={x:pcx.waypoints[c.branchWpIdx].x,y:pcx.waypoints[c.branchWpIdx].y} // V1.9.46: Weichen-Linie startet am Punkt der Eltern-Linie
    }
    // Breite Hintergrund-Linie
    ctx.beginPath();ctx.moveTo(allPts[0].x,allPts[0].y);
    for(let i=1;i<allPts.length;i++)ctx.lineTo(allPts[i].x,allPts[i].y);
    ctx.strokeStyle=baseColor;ctx.lineWidth=isLoopback?3:4;
    ctx.globalAlpha=.3;ctx.stroke();ctx.globalAlpha=1;
    if(isLiftConn){
      // Aufzug: dicke durchgezogene violette Leiter mit Lauf-Markierungen
      ctx.beginPath();ctx.moveTo(allPts[0].x,allPts[0].y);
      for(let i=1;i<allPts.length;i++)ctx.lineTo(allPts[i].x,allPts[i].y);
      ctx.strokeStyle=baseColor;ctx.lineWidth=6;ctx.stroke();
      ctx.setLineDash([4,10]);ctx.lineDashOffset=beltAnimOffset*1.5; // V1.3.19: gleiche Flussrichtung wie Bänder
      ctx.strokeStyle=ok?'#fff':'#fecaca';ctx.lineWidth=2;ctx.stroke();
      ctx.setLineDash([]);ctx.lineDashOffset=0;
    } else if(isLiquid){
      // Rohr: durchgezogene Linie mit Wellen-Animation (Fluessigkeiten)
      ctx.beginPath();ctx.moveTo(allPts[0].x,allPts[0].y);
      for(let i=1;i<allPts.length;i++){
        const dx=allPts[i].x-allPts[i-1].x,dy=allPts[i].y-allPts[i-1].y;
        const len=Math.sqrt(dx*dx+dy*dy)||1;
        const steps=Math.max(1,Math.floor(len/8));
        for(let s=1;s<=steps;s++){
          const t=s/steps;
          const px=allPts[i-1].x+dx*t;
          const py=allPts[i-1].y+dy*t;
          const nx=-dy/len,ny=dx/len;
          const wave=Math.sin((t*12+beltAnimOffset*0.4))*4;
          ctx.lineTo(px+nx*wave,py+ny*wave);
        }
      }
      ctx.strokeStyle=baseColor;ctx.lineWidth=3;ctx.stroke();
    } else {
      // Förderband: gestrichelte animierte Linie — laeuft in Flussrichtung,
      // bei Fehler (Rot) rueckwaerts! (Wiederhergestellt - Hotfix 1.0.1)
      ctx.beginPath();ctx.moveTo(allPts[0].x,allPts[0].y);
      for(let i=1;i<allPts.length;i++)ctx.lineTo(allPts[i].x,allPts[i].y);
      ctx.strokeStyle=baseColor;ctx.lineWidth=2.5;
      if(isLoopback){ctx.setLineDash([10,6]);ctx.lineDashOffset=beltAnimOffset}
      else{ctx.setLineDash([8,8]);ctx.lineDashOffset=beltAnimOffset*(ok?1:-1)}
      ctx.stroke();ctx.setLineDash([]);ctx.lineDashOffset=0;
    }
    // Pfeil am Ende
    const last=allPts[allPts.length-1],prev=allPts[allPts.length-2];
    const ang=Math.atan2(last.y-prev.y,last.x-prev.x);
    ctx.beginPath();ctx.fillStyle=baseColor;
    ctx.moveTo(ex,ey);
    ctx.lineTo(ex-10*Math.cos(ang-0.4),ey-10*Math.sin(ang-0.4));
    ctx.lineTo(ex-10*Math.cos(ang+0.4),ey-10*Math.sin(ang+0.4));ctx.fill();
    // Wegpunkte zeichnen
    wps.forEach((wp,wi)=>{
      const isH=hoveredWaypoint&&hoveredWaypoint.connIdx===connIdx&&hoveredWaypoint.wpIdx===wi;
      ctx.beginPath();ctx.arc(wp.x,wp.y,isH?7:5,0,Math.PI*2);
      ctx.fillStyle=isH?'#fbbf24':'#58a6ff';ctx.fill();
      ctx.strokeStyle='#fff';ctx.lineWidth=1.5;ctx.stroke();
    });
  });
  // Port-Farben aktualisieren basierend auf Verbindungsstatus
  document.querySelectorAll('.conn').forEach(el=>{el.classList.remove('conn-ok','conn-bad','conn-part','conn-liquid')});
  connections.forEach(c=>{
    const pts=connEndpoints(c,outG,inG);
    if(!pts)return;
    const ok=connectionOk(pts.fb,pts.tb);
    const part=connPartial(pts.fb,pts.tb);
    const isLiq=isLiquidConnection(c);
    // Output-Port markieren
    const outPorts=document.querySelectorAll(`#box-${c.from} .conn.out`);
    const oi=c.fromPort!==undefined?c.fromPort:0;
    if(outPorts[oi]){outPorts[oi].classList.add(ok?(part?'conn-part':'conn-ok'):'conn-bad');if(isLiq)outPorts[oi].classList.add('conn-liquid')}
    // Input-Port markieren
    const inPorts=document.querySelectorAll(`#box-${c.to} .conn.inp`);
    const ii=c.toPort!==undefined?c.toPort:0;
    if(inPorts[ii]){inPorts[ii].classList.add(ok?(part?'conn-part':'conn-ok'):'conn-bad');if(isLiq)inPorts[ii].classList.add('conn-liquid')}
  });
  if(connections.length>0&&!beltAnimRunning)startBeltAnimation();
}
// Prüft, ob der tatsächliche Materialfluss auf dieser Verbindung die
// eingestellte Band-Kapazität übersteigt (echter "Bandstau" wie im Spiel,
// unabhängig davon ob die Zielmaschine inhaltlich genug bekommt oder nicht).
function isBeltJammed(fb,tb,conn){
  // V1.9.55: Line zum LIFT cappt JETZT AUCH (User-Messung: "dies line gibt mir 60") —
  // nur der Lift-ABGANG selbst ist unbegrenzt ("unten 80 raus").
  if(DEVICES[fb.device]&&DEVICES[fb.device].isLift)return false;
  const fr=getEffectiveRecipe(fb), tr=getEffectiveRecipe(tb);
  const shared=Object.keys(fr.out||{}).filter(m=>tr.in&&tr.in[m]!==undefined);
  if(shared.length===0)return false;
  return shared.some(m=>{
    const cap=LIQUID_MATERIALS.has(m)?LIQUID_LINE_CAP:beltCapacity; // V1.9.56: Rohre cappen nicht bei 60 — sonst war jede Flüssigkeits-Line ab 60/Min gestaut
    const T=sourcePool(fb,m);
    if(T<=cap+0.5)return false;
    if(conn)return effLineVal(conn,m)>=cap-0.05; // DIESE Line ist voll und es will mehr fließen
    return connections.filter(x=>x.from===fb.id&&targetWant(x,m)>0).length===1;
  });
}
const FUEL_HEAT_TABLE={logs:2000,plank:20,coal:540,charcoal:40,coke:600,panacea_potion:320000};
// ===== OFEN-FLÄCHENMODELL (Sandbox-Vermessung 31.08.2026, Spiel v0.5.x) =====
// Gemessen: Hochofen = 42 Flächeneinheiten -> 14 kleine Schmelztiegel (je 3 Fläche),
// alle 14 per Förderband ansteuerbar; 21 Stk physisch platzierbar (Tiegel-Kettung),
// aber nur 14 versorgbar. Stapelbarer Tiegel = 3 Fläche (≈1×1,1 wie kleiner Tiegel — Realtest 16.09.:
// Steinofen fasst 3 Stapel, Hochofen 7 nebeneinander; Cap liegt bei STACK_CAP, nicht bei der Fläche).
// Steinofen = 9 Fläche -> 3 kleine Tiegel. Turm-Stapelung: Wärme kommt oben an,
// Ansteuerung nur per Lift/rundherum. Andere Geräte = SCHAETZWERTE ->
// bitte im Sandbox vermessen und hier anpassen!
const FURNACE_AREA={'Stone Furnace':9,'Blast Furnace':42};
const MACHINE_AREA={'Crucible':3,'Stackable Crucible':3,'Iron Smelter':4,'Kiln':6,'Alembic':1,'Athanor':6,'Advanced Alembic':6,'Advanced Athanor':6,'Thermal Extractor':6,'Paradox Crucible':9}; // V1.9.50: Stapelbarer = 3 (Grundfläche ≈1×1,1 wie kleiner Tiegel — Realtest: Steinofen fasst 3, Hochofen 7 nebeneinander)
// ===== V1.9.50: STAPEL-FENSTER-MODELL (User-Realtest + Recherche 16.09.) =====
// FENSTER = eine Schicht Tiegel nebeneinander (Hochofen 7, Steinofen 3).
// Platz-Nummer unten = "Tiegel N", darüber "Na, Nb, Nc …" — so heissen sie im Ofen-Fenster.
// KEINE feste Heat-Kappe im Spiel! Grenzen: (a) Wärme wandert nur nach OBEN und nur
// durch ARBEITENDE Tiegel (Steam-Bericht Okt 2025) — eine Lücke unten kühlt alles
// darüber ab => Band-Stau; (b) Brennstoff: 6 P/Sek je Tiegel + Ofen-Grundverbrauch
// (gemessen: Hochofen 8, Steinofen 5). 1 Holz-Band = 2000 P/Sek reicht für 10 Fenster —
// Empfehlung bleibt 5 Fenster à 7 = 35 Tiegel = 218 P/Sek.
const STACK_CAP={'Blast Furnace':7,'Stone Furnace':3}; // max Plätze (8. Platz am Hochofen bliebe geometrisch frei — bleibt weg, Ausgang frei)
const FURNACE_BASE_HEAT={'Blast Furnace':8,'Stone Furnace':5}; // Spiel-gemessen (Sandbox Sep 2026)
function furnaceFuelOK(fd,mat){ // V1.9.57: WAS darf in einen Ofen? — Dampfheizkissen frisst NUR DAMPF (Rohr), Öfen NUR Brennstoff. Steine kann man nicht verbrennen (User-Fund 18.09.: Steinbrecher-Line war grün)
  return fd&&fd.isSteamHeat?mat==='steam':!!FUEL_HEAT_TABLE[mat];
}
function stackCapMsg(furnDevice){const cap=STACK_CAP[furnDevice]||3;return (DEVICES[furnDevice]?DEVICES[furnDevice].de:furnDevice)+': max '+cap+' Stapel-Plätze'+(furnDevice==='Blast Furnace'?' (8. Platz am Ausgang bliebe frei — bleibt absichtlich weg)':'')+'.\nHöhe = Anzahl Fenster (×N) auf der Box — Spiel-max 10, Empfehlung 5 (5×7 = 35 Tiegel = 218 P/Sek).'}
function stackLevelNames(platz,count){const n=[];for(let k=0;k<Math.max(1,count||1);k++)n.push(k===0?String(platz):platz+String.fromCharCode(96+k));return n} // Platz 1 unten, darüber 1a, 1b, 1c …
function furnaceStackInfo(furnId){ // V1.9.50: Fenster-Modell — fenster=höchster Stapel, plaetze=Türme, heat inkl. Ofen-Grundverbrauch
  const f=boxes.find(b=>b.id===furnId);if(!f)return null;
  const stacks=boxes.filter(b=>b.furnaceId===furnId&&b.device==='Stackable Crucible');
  const fenster=stacks.reduce((m,b)=>Math.max(m,b.count||1),0);
  const tiegel=stacks.reduce((t,b)=>t+(b.count||1),0);
  const base=FURNACE_BASE_HEAT[f.device]!==undefined?FURNACE_BASE_HEAT[f.device]:0;
  return {fenster:fenster,plaetze:stacks.length,tiegel:tiegel,heat:Math.round(tiegel*6*(factoryEfficiency/100)+base),base:base,stacks:stacks}; // V1.9.56: Tiegel-Heat x Fabrik-Effizienz; Ofen-GRUNDVERBRAUCH (gemessen 8/5) bleibt fix
}
function fensterAmpel(n){return n<=3?{e:'🟢',t:'entspannt — Dauerbetrieb halten'}:n<=5?{e:'🟡',t:'OK — jede Ebene muss Dauerbetrieb halten'}:{e:'🔶',t:'logistisch heikel — eine Lücke unten kühlt ALLES darüber ab → Band-Stau!'}} // keine feste Heat-Kappe — Grenze ist Dauerbetrieb + Brennstoff
function furnaceStackHtml(b){ // V1.9.50: Fenster-Zeile im Ofen-Dialog (ersetzt den alten "bis 10"-Hinweis)
  const si=furnaceStackInfo(b.id);const cap=STACK_CAP[b.device]||Math.floor(furnaceAreaOf(b.device)/3);
  if(!si||si.plaetze===0)return '<div style="font-size:calc(var(--u,1.25) * 10.5px);color:var(--text-muted);margin-bottom:3px">💡 Band-Optimum Hochofen: 12 kleine Tiegel (3 Bänder à 4) · STAPELBARE: max '+cap+' Plätze je Ofen (Stapel-Tiegel ≈ 1×1,1 Grundfläche = 3 Quadrate) · Höhe = Anzahl FENSTER auf der Box — Spiel-max 10, Empfehlung 5 · Türme nur per Lift</div>';
  const amp=fensterAmpel(si.fenster);
  const names=si.stacks.map((st,i)=>'Platz '+(i+1)+': <b>Tiegel '+stackLevelNames(i+1,st.count||1).join(' · ')+'</b> ('+(st.count||1)+' Fenster)').join('<br>');
  return '<div style="font-size:calc(var(--u,1.25) * 11px);color:var(--accent-yellow);margin:2px 0 3px;background:rgba(251,191,36,.08);padding:4px 8px;border-radius:6px;border:1px solid rgba(251,191,36,.25)">🏗️ STAPEL-FENSTER: <b>'+si.fenster+' Fenster</b> · '+si.plaetze+' Platz'+(si.plaetze===1?'':'e')+' = <b>'+si.tiegel+' Tiegel</b> · 🔥 '+si.heat+' P/Sek ('+si.tiegel+'×6'+(Math.round(factoryEfficiency)!==100?' × '+(factoryEfficiency/100)+' Eff':'')+' + '+si.base+' Ofen) '+amp.e+' '+amp.t+'<br><span style="color:var(--text-secondary);font-size:calc(var(--u,1.25) * 10.5px)">'+names+'</span><br><span style="color:var(--text-muted);font-size:calc(var(--u,1.25) * 10.5px)">⚠️ Wärme wandert nur nach OBEN und nur durch ARBEITENDE Tiegel — Community-Trick: unten Dauer-Zulauf (z.B. Holz→Holzkohle). KEINE feste Heat-Kappe — Grenze ist Dauerbetrieb + Brennstoff (1 Holz-Band = 2000 P/Sek reicht für 10 Fenster).</span></div>';
}
// ===== V1.3.12: Ofen-Nummern & Ofen-Auswahlmenü =====
// Jeder Ofen bekommt automatisch eine Nummer je Sorte (Hochofen 1, Hochofen 2,
// Steinofen 1 ...), sichtbar im Box-Titel. Hitze-Maschinen waehlen ihren Ofen
// per Dropdown — volle Öfen sind gesperrt und als VOLL markiert.
function furnaceNo(b){
  const same=boxes.filter(x=>x.device===b.device&&DEVICES[x.device]&&DEVICES[x.device].isFurnace).sort((a,c)=>a.id-c.id);
  return same.findIndex(x=>x.id===b.id)+1;
}
function furnaceLabel(b){
  const d=DEVICES[b.device];
  return (d?devName(d,b.device):b.device)+' '+Math.max(1,furnaceNo(b))+((b.floor||0)>0?' (E'+(b.floor||0)+')':'');
}
function furnaceOptions(forBox){
  const furnaces=boxes.filter(x=>DEVICES[x.device]&&DEVICES[x.device].isFurnace).sort((a,c)=>a.id-c.id);
  let html='<option value="">— kein Ofen —</option>';
  furnaces.forEach(f=>{
    const placed=boxes.filter(x=>x.furnaceId===f.id&&x.id!==forBox.id);
    const fArea=furnaceAreaOf(f.device),used=usedFurnaceArea(placed);
    const need=machineAreaOf(forBox.device)*(forBox.count||1);
    const fits=used+need<=fArea;
    const sel=forBox.furnaceId===f.id?' selected':'';
    const tag=fits?('frei '+Math.max(0,fArea-used)):'VOLL ⛔';
    html+='<option value="'+f.id+'"'+sel+(fits?'':' disabled')+'>'+furnaceLabel(f)+' — '+tag+'</option>';
  });
  return html;
}
function setFurnaceFor(id,val){
  const b=boxes.find(x=>x.id===id);if(!b)return;
  if(val===''){delete b.furnaceId;refreshBox(id);refreshAll();saveStorage();return}
  const f=boxes.find(x=>x.id===+val);
  if(!f)return;
  const placed=boxes.filter(x=>x.furnaceId===f.id&&x.id!==id);
  const fArea=furnaceAreaOf(f.device),used=usedFurnaceArea(placed);
  const need=machineAreaOf(b.device)*(b.count||1);
  if(used+need>fArea){
    alert((DEVICES[f.device]?DEVICES[f.device].de:'Ofen')+': Fläche überschritten!\nBelegt: '+used+'/'+fArea+' · diese Maschine braucht '+need+'.\nWähle einen anderen Ofen oder räum Platz.');
    refreshBox(id); // Dropdown zuruecksetzen
    return;
  }
  b.furnaceId=f.id;
  refreshBox(id);refreshBox(f.id);
  drawConns();refreshAll();saveStorage();
}
function furnaceAreaOf(deviceKey){return FURNACE_AREA[deviceKey]||(DEVICES[deviceKey]&&DEVICES[deviceKey].maxSlots?DEVICES[deviceKey].maxSlots*3:12)}
function machineAreaOf(deviceKey){return MACHINE_AREA[deviceKey]!==undefined?MACHINE_AREA[deviceKey]:3}
function usedFurnaceArea(placed){return placed.reduce((s,bo)=>s+machineAreaOf(bo.device)*(bo.device==='Stackable Crucible'?1:(bo.count||1)),0)} // V1.9.49: Stapelhoehe kostet KEINE Flaeche — nur der Stapel (Basis) zaehlt (User: stapeln, durch Heat begrenzt)
// Flüssige Materialien – brauchen Rohre statt Förderbänder
const FERTILIZERS=new Set(['basic_fertilizer','advanced_fertilizer']); // V1.3.10: Beet/Gärtnerei nehmen JEDEN Dünger an (im Spiel gibt es noch 'Fertile Catalyst')
const LIQUID_MATERIALS=new Set(['steam','linseed_oil','limewater','sulfuric_acid','lavender_essential_oil','brine','healing_potion','vitality_potion','transformation_potion','growth_potion','blast_potion','fruit_wine','brandy','aqua_vitae','quicksilver','fairy_tear','panacea_potion']); // V1.9.56: +5 Codex-verifizierte Flüssigkeiten (Item-Seiten: Liquid) + Panacea — deren >60/Min-Spitzen (Fruchtwein 1200, Brandwein 1500!) gehören auf ROHRE, nie auf Bänder
const LIQUID_LINE_CAP=6000; // V1.9.56: Rohr-Durchsatz — Spiel-Patch 13.01.2026 hob den 6.000/Min-Liquid-Deckel => Rohre praktisch unbegrenzt; Bänder bleiben 60/Min (Logistics-Efficiency)

// V1.3.2: Lager-Regel (Projektleiter): FESTE Items gehen nur in die Lager-Box,
// FLÜSSIGKEITEN nur in die Kolben-Lager (per Rohr). Verkaufsraum & Muelltonne
// nehmen wie im Spiel alles an.
function sinkAccepts(d,mat){
  if(d.liquidOnly)return LIQUID_MATERIALS.has(mat);
  if(d.sinkType==='storage')return !LIQUID_MATERIALS.has(mat);
  return true;
}
// Prüft ob die Verbindung fb->tb OK ist:
// 1) Wenn die Quelle FALSCHES Material liefert -> ROT
// 2) Wenn die ZIEL-Maschine insgesamt zu wenig bekommt -> ROT
// 3) Sonst -> GRÜN
// Verbindungs-Zustand wie im Spiel:
// 'full'   = Ziel bekommt alles -> laeuft voll (GRUEN)
// 'partial'= Ziel bekommt etwas, aber zu wenig -> laeuft nur auf Teilast (GELB,
//            im Spiel sieht man genau das: Band liefert spaerlich, Maschine wartet)
// 'none'   = nichts kommt an oder falsches Material -> steht (ROT)
function connState(fb,tb){
  const dTb=DEVICES[tb.device];
  if(dTb.isLift)return 'full';
  if(dTb.isSink){
    // V1.3.2: FESTES ins Lager, FLÜSSIG in Kolben — sonst rot
    const frX=getEffectiveRecipe(fb);
    return Object.keys(frX.out||{}).some(m=>!sinkAccepts(dTb,m))?'none':'full';
  }
  if(dTb.isFurnace){
    // V1.9.57: MATERIAL-CHECK — ein Ofen nimmt NUR Brennstoff an (Dampfheizkissen: NUR Dampf).
    // User-Fund 18.09.: Steinbrecher→Ofen zeigte GRÜN, der Ofen meldete "kein Brennstoff" —
    // Steine zu verbrennen geht selbst im Spiel nicht. Quelle ohne passenden Stoff = ROT,
    // egal ob Maschinen auf dem Ofen stehen (vorher: ohne Maschinen pauschal GRÜN!).
    const frF=getEffectiveRecipe(fb);
    if(!Object.keys(frF.out||{}).some(m=>furnaceFuelOK(dTb,m)))return 'none';
    let heatPerSec=0;
    connections.filter(cc=>cc.to===tb.id).forEach(cc=>{
      const sfb=boxes.find(x=>x.id===cc.from);
      if(!sfb)return;
      const sfr=getEffectiveRecipe(sfb);
      Object.entries(sfr.out||{}).forEach(([m,q])=>{
        if(FUEL_HEAT_TABLE[m])heatPerSec+=FUEL_HEAT_TABLE[m]*effLineVal(cc,m)/60; // V1.9.56: echte Line-Werte wie im Ofen-Fenster — Portale kaufen NICHT schneller bei höherer Fabrik-Effizienz (vorher log calcRate die Portal-Rate mit)
      });
    });
    const placed=boxes.filter(b=>b.furnaceId===tb.id);
    const totalHeatNeeded=placed.reduce((s,bo)=>{const md=DEVICES[bo.device];return s+(md?md.heat:0)*(bo.count||1)},0)*(factoryEfficiency/100); // V1.9.56: Codex: Factory Efficiency = Device Production + HEAT CONSUMING SPEED — Turbo-Tiegel fressen proportional mehr Wärme (vorher blieb der Ofen bei 200 % fälschlich grün)
    if(totalHeatNeeded===0)return 'full';
    return heatPerSec>=totalHeatNeeded?'full':(heatPerSec>0?'partial':'none');
  }
  const fr=getEffectiveRecipe(fb);
  const tr=getEffectiveRecipe(tb);
  const srcMats=Object.keys(fr.out||{});
  const tgtNeeds=Object.keys(tr.in||{});
  const hasOverlap=srcMats.some(m=>tgtNeeds.includes(m)||(dTb.fertIn&&FERTILIZERS.has(m))); // V1.3.10: Dünger-Familie
  if(!hasOverlap&&srcMats.length>0&&tgtNeeds.length>0)return 'none';
  const incomingConns=connections.filter(c=>c.to===tb.id);
  if(incomingConns.length===0)return 'full';
  // V1.9.62: POOL — alle Lines der Box speisen ALLE Maschinen gemeinsam (Spiel-Messung
  // 18.09.: 3 Bänder à 10 versorgen 6 Fertigungseinheiten sauber, kein Stau).
  const needOne={};tgtNeeds.forEach(mat=>needOne[mat]=calcRate(tr.in[mat],tr.time));
  let worst=Infinity;
  tgtNeeds.forEach(mat=>{
    let provided=0;
    incomingConns.forEach(c=>{
      if(dTb.fertIn&&FERTILIZERS.has(mat)){FERTILIZERS.forEach(f=>provided+=effLineVal(c,f))}
      else provided+=effLineVal(c,mat);
    });
    const need=needOne[mat]*(tb.count||1);
    const ratio=need>0?provided/need:1;
    if(ratio<worst)worst=ratio;
  });
  if(worst===Infinity)worst=1;
  // V1.9.4: PORTAL-EHRLICHKEIT — ab 75 % Auslastung GELB (im Spiel streut der Geldzufluss,
  // 200 Gold/Stamm; deshalb baute der User im Spiel 12 Portale für 12 Sägen, nicht 1 Verteiler-Portal)
  {
    const pd=DEVICES[fb.device];
    if(pd&&pd.isPortal){
      const pc=portalConfig[fb.id];
      if(pc&&pc.rate>0){
        let bedarf=0;const seenPP={}; // V1.9.62: Pool — je ZIEL nur EINMAL den GESAMT-Bedarf zählen
        connections.forEach(c=>{
          if(c.from!==fb.id)return;
          const key=String(c.to);
          if(seenPP[key])return;seenPP[key]=1;
          const t2=boxes.find(x=>x.id===c.to);if(!t2)return;
          const r2=getEffectiveRecipe(t2);
          const q=(r2.in||{})[pc.item];
          if(q)bedarf+=calcRate(q,r2.time)*(t2.count||1);
        });
        const al=bedarf/(pc.rate*(fb.count||1)); // V1.9.36: Portal-Kapazität = Rate × Anzahl — sonst gelb bei ×N-Boxen ohne Grund
        if(al>0.75&&al<=1)return 'partial'; // knapp versorgt = gelb (Streuung + Anlauf-Puffer)
      }
    }
  }
  if(worst>=1-1e-4){ // V1.9.55c: Float-Toleranz 1e-4 — Pool-Motor rundet auf 1e-6, Ketten-Restfehler bleiben darunter (60 vs 59,9999999 = GRÜN)
    // V1.3.23 + V1.9.36: Viel zu viel Zulauf -> GELB (Band staut vor der Maschine).
    // Je PORT (=Maschine) prüfen — nicht über den ganzen Kasten summiert:
    // kompakt gebaut muss exakt wie einzeln gebaut rechnen.
    let over=false; // V1.9.62: Pool — geklemmte Line-Werte vs. GESAMT-Bedarf (Überfluss-Ehrlichkeit lebt in der ZU-VIEL-Warnung des Fensters)
    tgtNeeds.forEach(mat=>{
      const nd=needOne[mat]*(tb.count||1);
      let prov=0;incomingConns.forEach(c=>{prov+=effLineVal(c,mat)});
      if(nd>0.05&&prov>nd*3&&prov-nd>2)over=true;
    });
    return over?'partial':'full';
  }
  return worst>0.001?'partial':'none';
}
function connectionOk(fb,tb){return connState(fb,tb)!=='none'}
function connPartial(fb,tb){return connState(fb,tb)==='partial'}

function updateStatus(){
  // Fabrik-Bilanz berechnen (für Status-Fenster)
  const bal=computeFactoryBalance();
  const ti=document.getElementById('topInfo');
  if(ti)ti.textContent=bal.topline||'Baue Maschinen — 📊 Status (rechts) zeigt die Bilanz';
  const fl_boxes=boxes.filter(b=>(b.floor||0)===currentFloor).length;
  const sb=document.getElementById('statBar');
  if(sb)sb.textContent=`Etage: ${currentFloor===0?'EG':currentFloor} (${fl_boxes} Maschinen) | Gesamt: ${boxes.length} Maschinen | ${connections.length} Verbindungen`;
  refreshStatus();
  setConnModeBar(); // V1.9.37: Linien-Modus dauerhaft im unteren Menü anzeigen
}
function findSnapPort(cx,cy,excludeBoxId){ // V1.9.42: MAGNET — nächster EINGANG-Port im Umkreis, in SCREEN-Pixeln (zoom-unabhängig: auch bei 50 % Zoom trifft man jeden Port aus der Ferne)
  let best=null,bestD=64; // 64px Suchradius um den Zeiger
  boxes.forEach(b=>{
    if(b.id===excludeBoxId||(b.floor||0)!==currentFloor)return; // eigene Box & andere Etagen sind nie Ziel
    document.querySelectorAll('#box-'+b.id+' .conn.inp').forEach(p=>{
      const r=p.getBoundingClientRect();if(!r||(!r.width&&!r.height))return;
      const d=Math.hypot(cx-(r.left+r.width/2),cy-(r.top+r.height/2));
      if(d<bestD){bestD=d;best={boxId:b.id,portIdx:parseInt(String(p.dataset.port||'in:0').slice(3))||0,el:p,rect:r}}
    });
  });
  return best;
}
function setConnModeBar(){ // V1.9.37: das Menü weiß immer Bescheid — auch mitten im Verbinden
  document.body.classList.toggle('connmode',!!connecting); // V1.9.42/44: Leuchten synchron zum Menü (drawConns zeichnet jetzt gedrosselt)
  const sbm=document.getElementById('statBar');if(!sbm)return;
  if(connecting){
    const cb=boxes.find(x=>x.id===connecting.boxId);
    const cn=cb?((DEVICES[cb.device]&&DEVICES[cb.device].de)||cb.device):'?';
    sbm.textContent=`🔗 LINIEN-MODUS AKTIV — Quelle: ${cn} · Ausgang ${((connecting.portIdx||0)+1)} — ZIEL: Eingang anklicken, auf die BOX setzen oder NEBEN den Eingang zeigen (Magnet 🧲) · ESC / Rechtsklick = beenden`;
    sbm.style.background='rgba(88,166,255,.22)';sbm.style.fontWeight='700';sbm.style.color='var(--accent-blue)';
  } else {
    const fl=boxes.filter(b=>(b.floor||0)===currentFloor).length;
    sbm.textContent=`Etage: ${currentFloor===0?'EG':currentFloor} (${fl} Maschinen) | Gesamt: ${boxes.length} Maschinen | ${connections.length} Verbindungen`;
    sbm.style.background='';sbm.style.fontWeight='';sbm.style.color='';
  }
}
// ===== 📊 FABRIK-STATUS =====
// Netto-Bilanz je Material über die GESAMTE Fabrik (alle Etagen):
// erzeugt − verbraucht (inkl. Ofen-Brennstoff) = frei für Verkauf/Lager.
// V1.3.5: Läuft die Maschine überhaupt? 1=voll, 0.5=halbe Zufuhr, 0=kein Eingang.
// Grundlage für "effektiv erzeugt" in der 📊-Übersicht — eine Kreissage ohne
// Baumstämme produziert in Wirklichkeit KEINE Bretter, egal was die Rechnung sagt.
function machineSupplyRatio(b){
  const d=DEVICES[b.device];if(!d)return 1;
  if(d.isPortal||d.isLift||d.isSink||d.isFurnace||d.isInfo)return 1;
  const r=getEffectiveRecipe(b);
  const ins=Object.entries(r.in||{});
  if(ins.length===0)return 1;
  // V1.9.62: POOL — alle Lines der Box speisen alle Maschinen gemeinsam (Spiel-Messung
  // 18.09.: 3 Bänder à 10 versorgen 6 Fertigungseinheiten sauber). EIN Versorgungs-Grad.
  const conns=connections.filter(c=>c.to===b.id);
  if(conns.length===0)return 0;
  let vf=1;
  ins.forEach(([m,q])=>{
    const needOne=calcRate(q,r.time);
    if(needOne<=0.05)return;
    const needed=needOne*(b.count||1);
    let provided=0;conns.forEach(c=>{
      if(d.fertIn&&FERTILIZERS.has(m)){FERTILIZERS.forEach(f=>provided+=effLineVal(c,f))}
      else provided+=effLineVal(c,m);
    });
    vf=Math.min(vf,Math.min(1,provided/needed));
  });
  return Math.min(1,vf);
}
function computeFactoryBalance(){
  // V1.3.6: EHRLICHE Bilanz — stehende Maschinen produzieren UND verbrauchen nichts.
  // Es gibt keine Phantasie-Defizite mehr ("Bretter -300" obwohl alles steht).
  // Stattdessen: Wurzel-Ursache(n) suchen = Ware, die nirgendwo erzeugt wird.
  const P={},C={},S={},L={},effP={},waiting={},EXT={},CFUEL={};
  const rawOut={},rawNeed={},mach={};
  boxes.forEach(b=>{
    const d=DEVICES[b.device];if(!d)return;
    if(d.isPortal||d.isLift||d.isFurnace||d.isInfo)return; // Oefen & Infoboxen: keine Waren-Maschine (V1.9.35)
    mach[b.id]={d,b};
    const r=getEffectiveRecipe(b);
    const o={};
    Object.entries(r.out||{}).forEach(([m,q])=>{o[m]=calcRate(q,r.time)*(b.count||1)});
    const i={};
    if(!d.isSink)Object.entries(r.in||{}).forEach(([m,q])=>{i[m]=calcRate(q,r.time)*(b.count||1)});
    rawOut[b.id]=o;rawNeed[b.id]=i;
    Object.entries(o).forEach(([m,v])=>{P[m]=(P[m]||0)+v;effP[m]=effP[m]||0});
  });
  // Effektiver Anteil einer Quelle für EINEN Verbraucher (fair geteilt, dediziert)
  function effShareOf(fromId,mat,effOut,conn){
    if(conn)return effLineVal(conn,mat); // V1.9.54c: eine Formel für alle — 📊-Senken/Ofen/EXT zählen wie Fenster/Lager/Lift
    const fb=boxes.find(x=>x.id===fromId);if(!fb)return 0;
    const fd=DEVICES[fb.device];
    let outRate=0;
    if(fd&&fd.isPortal){const pc=portalConfig[fb.id]||{item:'logs',rate:1};if(pc.item===mat)outRate=(pc.batch||1)*pc.rate}
    else if(effOut[fromId])outRate=(effOut[fromId][mat]||0);
    if(outRate<=0)return 0;
    const outConns=connections.filter(c=>c.from===fromId);
    if(outConns.length===0)return 0;
    if(fd&&fd.isLift)return outRate/outConns.length; // Aufzug: unbegrenzt
    const ports=Math.min(fb.count||1,10); // V1.3.13: pro Anschluss 1 Maschinen-Anteil
    if(conn){const p=conn.fromPort||0;const samePort=outConns.filter(c=>(c.fromPort||0)===p);return (outRate/ports)/Math.max(1,samePort.length)} // V1.9.54: PER PORT — 📊 rechnet jetzt wie fairShareFromSource (vorher Box-÷-alles: zeigte 90 statt 30)
    return outRate/Math.max(1,outConns.length); // V1.9.55: Pool teilt sich auf alle Lines (wie der Motor)
  }
  // Versorgungs-Grad je Maschine iterativ verfeinern (liefert Kette in 4 Durchläufen)
  const ratio={};Object.keys(mach).forEach(id=>ratio[id]=1);
  const effOut={};
  for(let pass=0;pass<4;pass++){
    Object.keys(mach).forEach(id=>{effOut[id]={};Object.entries(rawOut[id]).forEach(([m,v])=>effOut[id][m]=v*ratio[id])});
    Object.keys(mach).forEach(id=>{
      const d=mach[id].d;if(d.isSink)return;
      const ins=Object.entries(rawNeed[id]);
      if(ins.length===0)return;
      let rt=1; // V1.9.62: POOL — alle Lines der Box speisen alle Maschinen gemeinsam (wie der Motor)
      const bb=mach[id].b;
      const myIn=connections.filter(c=>c.to===(+id));
      if(myIn.length===0){ratio[id]=0;return}
      let vf=1;
      ins.forEach(([m,need])=>{
        if(need<=0.05)return;
        const isFert=mach[id].d.fertIn&&FERTILIZERS.has(m);
        let prov=0;myIn.forEach(c=>{if(isFert)FERTILIZERS.forEach(f=>prov+=effLineVal(c,f));else prov+=effLineVal(c,m)});
        vf=Math.min(vf,Math.min(1,prov/need));
      });
      rt=vf;
      ratio[id]=rt;
    });
  }
  // Effektiv erzeugen/verbrauchen + stehende Maschinen + Wurzel-Ursachen sammeln
  const stoppedMachines={};const stoppedList=[];
  Object.keys(mach).forEach(id=>{
    const d=mach[id].d,b=mach[id].b;
    if(d.isSink){
      const seenS=new Set();
      // Senke: nur annehmen, was hereinkommt (effektiv) und was rein darf
      connections.filter(c=>c.to===(+id)).forEach(c=>{
        const sfb=boxes.find(x=>x.id===c.from);if(!sfb)return;
        const sfr=getEffectiveRecipe(sfb);
        Object.keys(sfr.out||{}).forEach(m=>{
          if(!sinkAccepts(d,m))return;
          const dk=c.from+':'+(c.fromPort||0)+'>'+m; // V1.9.54c: je PORT zählen — 2 Lines von 2 Maschinen = 2 Lieferungen (vorher flog die zweite weg)
          if(seenS.has(dk))return; // V1.3.6: Doppel-Band liefert nicht doppelt
          seenS.add(dk);
          const v=effShareOf(c.from,m,effOut,c);
          if(v<=0.005)return;
          if(d.sinkType==='sales')S[m]=(S[m]||0)+v;else L[m]=(L[m]||0)+v;
        });
      });
      return;
    }
    Object.entries(rawOut[id]).forEach(([m,v])=>{const e=v*ratio[id];effP[m]=(effP[m]||0)+e});
    Object.entries(rawNeed[id]).forEach(([m,v])=>{C[m]=(C[m]||0)+v*ratio[id]}); // V1.3.6: Verbrauch NUR effektiv (stehende Maschinen verbrauchen nichts)
    if(ratio[id]<0.05){
      const dn=devName(d,b.device);
      stoppedMachines[dn]=(stoppedMachines[dn]||0)+1;
      const missMats=[];
      Object.entries(rawNeed[id]).forEach(([m,need])=>{
        if(need<=0.05)return;
        let prov=0;connections.filter(c=>c.to===(+id)).forEach(c=>{prov+=effShareOf(c.from,m,effOut,c)});
        if(prov<need-0.05){
          missMats.push(m);
          if(!waiting[m])waiting[m]=new Set();
          waiting[m].add({n:dn,id:+id}); // V1.9.53: mit ID — daraus werden Sprung-Links
        }
      });
      stoppedList.push({name:dn,mats:missMats,id:+id}); // V1.9.53: mit ID für den Sprung-Link
    }
  });
  // Ofen-Brennstoff zählt als Verbrauch — aber nur der Anteil, der wirklich ankommt
  boxes.filter(b=>DEVICES[b.device]&&DEVICES[b.device].isFurnace).forEach(f=>{
    const seenF=new Set();
    connections.filter(c=>c.to===f.id).forEach(c=>{
      const sfb=boxes.find(x=>x.id===c.from);if(!sfb)return;
      const sfr=getEffectiveRecipe(sfb);
      Object.entries(sfr.out||{}).forEach(([m])=>{
        if(!FUEL_HEAT_TABLE[m])return;
        const fk=c.from+':'+(c.fromPort||0)+'>'+m; // V1.9.54c: je PORT (wie Senke)
        if(seenF.has(fk))return; // V1.3.6: 2 Bänder = 1 Lieferung (fair geteilt)
        seenF.add(fk);
        const fv=effShareOf(c.from,m,effOut,c);
        C[m]=(C[m]||0)+fv;
        CFUEL[m]=(CFUEL[m]||0)+fv;
      });
    });
  });
  // V1.3.8: Einkaufsportal = externer Zustrom — sonst sieht es wie ein Defizit aus
  const seenP=new Set();
  connections.forEach(c=>{
    const sfb=boxes.find(x=>x.id===c.from);if(!sfb)return;
    const fd=DEVICES[sfb.device];if(!fd||!fd.isPortal||fd.portalType!=='buy')return;
    const pc=portalConfig[sfb.id]||{item:'logs',rate:1};
    const m=pc.item;if(!m)return;
    const pk=sfb.id+':'+(c.fromPort||0)+'>'+m+'>'+c.to; // V1.9.54c: je PORT (wie Senke)
    if(seenP.has(pk))return; seenP.add(pk);
    let book=0;
    if(mach[c.to]){
      const need=(rawNeed[c.to]&&rawNeed[c.to][m]||0)*ratio[c.to];
      book=Math.min(effShareOf(c.from,m,effOut,c),need);
    } else {
      const tb=boxes.find(x=>x.id===c.to);
      const td=tb?DEVICES[tb.device]:null;
      if(td&&td.isFurnace)book=effShareOf(c.from,m,effOut,c);
    }
    if(book>0.005)EXT[m]=(EXT[m]||0)+book;
  });
  const mats=[...new Set([...Object.keys(P),...Object.keys(C),...Object.keys(S),...Object.keys(L),...Object.keys(EXT),...Object.keys(waiting)])];
  const net=m=>(effP[m]||0)+(EXT[m]||0)-(C[m]||0);
  mats.sort((a,b)=>Math.abs(net(b))-Math.abs(net(a)));
  // Wurzel: Ware, die KEINE Maschine erzeugen könnte → im Spiel kaufen / Portal
  const roots=Object.keys(waiting).filter(m=>(P[m]||0)<0.05);
  const rootStop=stoppedList.filter(s=>s.mats.some(m=>roots.indexOf(m)>=0)).length;
  roots.forEach(m=>mats.unshift(m));mats.unshift(...[]);
  const uniq=[...new Set(mats)];
  const topline=rootStop>0&&roots.length
    ?`⏸ ${rootStop} Maschine${rootStop===1?'':'n'} wartet — ${roots.slice(0,2).map(m=>matName(m)).join(' + ')} im Spiel kaufen / 🛒 Einkaufsportal`
    :(stoppedList.length?`🔍 ${stoppedList.length} Maschine${stoppedList.length===1?'':'n'} ohne Lieferung — 📊 Details: unten in der Leiste`
    :(()=>{const fl=uniq.filter(m=>Math.max(effP[m]||0,C[m]||0)>0.5).sort((a,b)=>Math.max(effP[b]||0,C[b]||0)-Math.max(effP[a]||0,C[a]||0));
      const plus=uniq.filter(m=>net(m)>0.05);
      if(fl.length)return `✅ Fabrik läuft — ${fl.slice(0,3).map(m=>`${matName(m)} ${Math.round(Math.max(effP[m]||0,C[m]||0))}/Min`).join(' · ')}${fl.length>3?' …':''}`;
      if(plus.length)return `➕ ${plus.slice(0,3).map(m=>`${matName(m)} +${net(m).toFixed(0)}`).join(' · ')}${plus.length>3?' …':''} — 📊 Details: unten in der Leiste`;
      return uniq.length?'Bilanz ausgeglichen — 📊 Details: unten in der Leiste':'Baue Maschinen — 📊 Status zeigt die Bilanz';})());
  return{P,effP,EXT,CFUEL,C,S,L,waiting,roots,stoppedList,mats:uniq,net,topline};
}
function jumpToBox(id){ // V1.9.53: STATUS-SPRUNG — Klick im Fabrik-Status holt die Maschine in den Blick: Etage wechseln, zentrieren, markieren
  const b=boxes.find(x=>x.id===id);if(!b)return;
  if((b.floor||0)!==currentFloor)setFloor(b.floor||0); // V1.9.45 räumt dabei alte Auswahl weg — deshalb DANACH neu markieren
  selectedIds=new Set([id]);selBox=null;selectedConn=null;selectedWaypoint=null;groupDragOffsets=null;
  if(typeof applySelectionClasses==='function')applySelectionClasses();
  updateSelInfo();
  const el=document.getElementById('box-'+id);
  const bw=el?el.offsetWidth:360,bh=el?el.offsetHeight:200;
  canvasArea.scrollLeft=Math.max(0,(b.x+bw/2)*zoomLevel-canvasArea.clientWidth/2);
  canvasArea.scrollTop=Math.max(0,(b.y+bh/2)*zoomLevel-canvasArea.clientHeight/2);
  syncCanvasPos();drawConns();
  if(el){el.style.outline='3px solid var(--accent-blue)';el.style.outlineOffset='3px';setTimeout(()=>{el.style.outline='';el.style.outlineOffset='';},1600)} // 1,6 s blau aufblitzen
  userMsg('🎯 '+devName(DEVICES[b.device],b.device)+' — Etage '+((b.floor||0)===0?'EG':'E'+(b.floor||0))+' — da bist du!');
  const sp=document.getElementById('statusPanel');if(sp)sp.remove(); // Fenster zu — freie Sicht auf die Maschine
}
function toggleStatus(){
  let sp=document.getElementById('statusPanel');
  if(sp){sp.remove();return}
  sp=document.createElement('div');sp.id='statusPanel';sp.className='zonepanel';sp.style.width='720px'; // V1.9.5 // V1.3.18: großes Status-Fenster
  sp.innerHTML=`<div class="zp-head" id="spHead"><b>📊 Fabrik-Status</b><span style="flex:1"></span>
    <button onclick="refreshStatus()" title="Aktualisieren" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);padding:4px 8px;cursor:pointer">🔄</button>
    <button onclick="document.getElementById('statusPanel').remove()" title="Schließen" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);padding:4px 8px;cursor:pointer">✕</button></div>
    <div class="zp-body" id="spBody"></div>`;
  document.body.appendChild(sp);
  makePanelDraggable(sp,'spHead');
  refreshStatus();
}
function makePanelDraggable(panel,headId){
  const head=document.getElementById(headId);if(!head)return;
  head.onmousedown=e=>{
    if(e.target.tagName==='BUTTON')return;
    const r=panel.getBoundingClientRect(),dx=e.clientX-r.left,dy=e.clientY-r.top;
    panel.style.right='auto';
    const mv=ev=>{panel.style.left=(ev.clientX-dx)+'px';panel.style.top=(ev.clientY-dy)+'px'};
    const up=()=>{document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up)};
    document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);
    e.preventDefault();
  };
}
function refreshStatus(){
  const body=document.getElementById('spBody');if(!body)return;
  const bal=computeFactoryBalance();
  if(bal.mats.length===0){body.innerHTML='<div style="color:var(--text-muted);font-size:calc(var(--u,1.25) * 12.5px);text-align:center;padding:14px">Noch keine Produktion.<br>Verbinde Maschinen und hänge ans Ende eine 🏪 Verkaufsraum- oder 📦 Lager-Box.</div>';return}
  let html=`<div style="font-size:calc(var(--u,1.25) * 12px);color:var(--text-muted);margin-bottom:8px">Ehrliche Bilanz: <b style="color:var(--accent-green)">erzeugt</b> − <b style="color:var(--accent-yellow)">verbraucht</b> — stehende Maschinen zählen nicht (alle Etagen, inkl. 🔥 Ofen)</div>`;
  // 🚀 Wurzel-Block: Ware, die nirgendwo erzeugt wird → kaufen/Portal
  if(bal.roots&&bal.roots.length){
    html+=`<div style="margin:2px 0 12px;padding:10px;background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.3);border-radius:10px">
      <div style="font-size:calc(var(--u,1.25) * 12.5px);font-weight:700;color:var(--accent-yellow);margin-bottom:6px">🚀 Damit es losläuft — im Spiel kaufen oder 🛒 Einkaufsportal davor:</div>`;
    bal.roots.forEach(m=>{
      const devs=[...(bal.waiting[m]||[])].map(x=>`<span class="jlink" onclick="jumpToBox(${x.id})" title="Klick = zur Maschine springen">${x.n}</span>`).join(', '); // V1.9.53: anklickbar
      html+=`<div style="font-size:calc(var(--u,1.25) * 12.5px);padding:3px 0">🛒 <b>${matName(m)}</b>${devs?`<br><small style="color:var(--text-muted)">wartet (anklicken!): ${devs}</small>`:''}</div>`;
    });
    html+=`</div>`;
  }
  // V1.9.53: ⏸ STEHT-Liste — jeder Eintrag ist ein SPRUNG-LINK (User: "ich darf die Maschine nicht selbst suchen müssen — 10 Etagen, 300+ Maschinen")
  if(bal.stoppedList&&bal.stoppedList.length){
    html+=`<div style="margin:2px 0 12px;padding:10px;background:rgba(248,81,73,.07);border:1px solid rgba(248,81,73,.3);border-radius:10px">
      <div style="font-size:calc(var(--u,1.25) * 12.5px);font-weight:700;color:var(--accent-red);margin-bottom:6px">⏸ Steht ohne Lieferung — <b>anklicken = zur Maschine springen:</b></div>`;
    bal.stoppedList.forEach(s=>{
      const fl=(boxes.find(x=>x.id===s.id)||{}).floor||0;
      html+=`<div style="font-size:calc(var(--u,1.25) * 12.5px);padding:3px 0">▸ <span class="jlink" onclick="jumpToBox(${s.id})" title="Klick = zur Maschine springen">${s.name}</span> <small style="color:var(--text-muted)">— fehlt: ${s.mats.map(matName).join(', ')||'?'} · ${fl===0?'EG':'E'+fl}</small></div>`;
    });
    html+=`</div>`;
  }
  // V1.9.15: Senken-Übersicht — Verkaufsraum & Lager mit eigener Zeile im Fabrik-Status (User-Wunsch)
  const sinks=boxes.filter(b=>DEVICES[b.device]&&DEVICES[b.device].isSink);
  if(sinks.length){
    const byType={};
    sinks.forEach(b=>{
      const t=DEVICES[b.device].sinkType||'storage';
      byType[t]=byType[t]||{n:0,items:{}};
      byType[t].n++;
      connections.filter(c=>c.to===b.id).forEach(c=>{
        const fb2=boxes.find(x=>x.id===c.from);if(!fb2)return;
        const fr2=getEffectiveRecipe(fb2);
        Object.entries(fr2.out||{}).forEach(([m,q])=>{
          byType[t].items[m]=(byType[t].items[m]||0)+effLineVal(c,m);
        });
      });
    });
    html+=`<div style="margin:2px 0 12px;padding:10px;background:rgba(88,166,255,.06);border:1px solid rgba(88,166,255,.25);border-radius:10px">`;
    Object.entries(byType).forEach(([t,v])=>{
      const icon2=t==='sales'?'🏪':(t==='trash'?'🗑️':'📦');
      const name2=t==='sales'?'Verkaufsraum':(t==='trash'?'Mülltonne':'Lager');
      const total=Object.values(v.items).reduce((s,x)=>s+x,0);
      const top=Object.entries(v.items).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([m,q])=>`${matName(m)} ${q.toFixed(1)}/Min`).join(' · ');
      html+=`<div style="font-size:calc(var(--u,1.25) * 12.5px);padding:3px 0">${icon2} <b>${name2}: ${v.n}×</b> ${total>0?`— <b style="color:var(--accent-green)">${total.toFixed(1)} Stück/Min</b> <small style="color:var(--text-muted)">(${top})</small>`:'— <i style="color:var(--text-muted)">noch keine Lieferung</i>'}</div>`;
    });
    html+=`</div>`;
  }
  const fuelMats=Object.entries(bal.CFUEL||{}).filter(x=>x[1]>0.05);
  const anyFurnace=boxes.some(b=>DEVICES[b.device]&&DEVICES[b.device].isFurnace);
  if(anyFurnace){
    const tot=fuelMats.reduce((s,x)=>s+x[1],0);
    html+=`<div class="zcard" style="border-left-color:${tot>0.05?'#fbbf24':'var(--accent-red)'}">
      <div class="zt">🔥 Ofen-Brennstoff<small style="margin-left:auto;font-weight:700;color:${tot>0.05?'#fbbf24':'var(--accent-red)'}">${tot>0.05?Math.round(tot)+'/Min brennt ✅':'ohne Brennstoff ⛔'}</small></div>
      ${fuelMats.map(([m,v])=>`<div class="zrow"><span>🔥 ${matName(m)} verbrennt</span><span class="zin">${v.toFixed(1)}</span></div>`).join('')||'<div class="zrow" style="color:var(--accent-red)">⚠️ Kein Brennstoff verbunden!</div>'}
    </div>`;
  }
  // V1.3.18: 🏪 Was kommt im Verkauf an? (pro Verkaufsbox + Gesamt)
  const salesBoxes=boxes.filter(x=>DEVICES[x.device]&&DEVICES[x.device].isSink&&DEVICES[x.device].sinkType==='sales');
  if(salesBoxes.length){
    const gesamt=(bal.S&&Object.values(bal.S).reduce((s,v)=>s+v,0))||0;
    let vh=`<div class="zcard" style="border-left-color:var(--accent-green)">
      <div class="zt">🏪 Lieferung an den Verkauf<small style="margin-left:auto;font-weight:700;color:var(--accent-green)">${gesamt.toFixed(1)}/Min Gesamt</small></div>`;
    salesBoxes.forEach(sb=>{
      const sr=getEffectiveRecipe(sb);
      const liefer=Object.entries(sr.in||{}).sort((a,x)=>x[1]-a[1]);
      vh+=`<div style="margin-top:5px;padding-top:5px;border-top:1px solid var(--border-light)"><b style="font-size:13px"><span class="jlink" onclick="jumpToBox(${sb.id})" title="Klick = zum Verkauf springen">Verkauf #${sinkNumber(sb)}${(sb.floor||0)>0?' (E'+(sb.floor||0)+')':''}</span></b>`; // V1.9.53: Sprung-Link
      vh+=liefer.length?liefer.map(([m,v])=>`<div class="zrow"><span>${matName(m)}</span><span class="zout">${v.toFixed(1)}/Min</span></div>`).join(''):'<div class="zrow" style="color:var(--text-muted)">noch keine Ware — Line anschließen</div>';
      vh+='</div>';
    });
    vh+='</div>';
    html+=vh;
  }
  const nrw=Object.keys(bal.waiting||{}).filter(m=>(bal.roots||[]).indexOf(m)<0);
  if(nrw.length){
    html+=`<div style="margin:2px 0 12px;padding:10px;background:rgba(88,166,255,.07);border:1px solid rgba(88,166,255,.3);border-radius:10px">
      <div style="font-size:calc(var(--u,1.25) * 12.5px);font-weight:700;color:var(--accent-blue);margin-bottom:6px">🔍 Ohne Lieferung — Verbindung prüfen:</div>`;
    nrw.forEach(m=>{
      const devs=[...(bal.waiting[m]||[])].join(', ');
      html+=`<div style="font-size:calc(var(--u,1.25) * 12.5px);padding:3px 0">🔌 <b>${matName(m)}</b>${devs?`<br><small style="color:var(--text-muted)">wartet: ${devs}</small>`:''}</div>`;
    });
    html+=`</div>`;
  }
  bal.mats.forEach(m=>{
    const p=bal.P[m]||0,e=bal.effP[m]||0,c=bal.C[m]||0,s=bal.S[m]||0,l=bal.L[m]||0,n=bal.net(m);
    const isRoot=(bal.roots||[]).includes(m);
    const stands=p>0.05&&e<p-0.05;
    const flag=isRoot?'🛒 fehlt — kaufen/Portal':(n>0.05?(!(s>0.05||l>0.05)?'⚠️ kein Abfluss — 🏪/📦 anhängen':'➡️ Abfluss offen'):(n<-0.05?'⚠️ Defizit — Zufuhr fehlt':(stands?'⏸ steht — siehe oben 🚀':'✅')));
    const col=isRoot?'var(--accent-yellow)':(n>0.05?'var(--accent-green)':(n<-0.05?'var(--accent-red)':(stands?'var(--accent-yellow)':'var(--text-secondary)')));
    html+=`<div class="zcard" style="border-left-color:${col}">
      <div class="zt">${matName(m)}<small style="margin-left:auto;font-weight:700;color:${col}">${Math.abs(n)<=0.05&&Math.max(e,c,s,l)>0.05?((Math.max(e,c,s,l)<1?Math.max(e,c,s,l).toFixed(1):Math.round(Math.max(e,c,s,l)))+'/Min im Umlauf '+flag):((n>0.05?'+':'')+n.toFixed(1)+'/Min '+flag)}</small></div>
      ${p>0.05?`<div class="zrow"><span>➕ erzeugt (läuft)</span><span style="color:var(--accent-green)">${e.toFixed(1)}</span></div>`:''}
      ${(bal.EXT&&bal.EXT[m]||0)>0.05?`<div class="zrow"><span>🛒 Einkaufsportal liefert</span><span style="color:var(--accent-green)">${bal.EXT[m].toFixed(2)}</span></div>`:''}
      ${stands?`<div class="zrow"><span>⏸ würde laufen, wenn beliefert</span><span style="color:var(--text-muted)">${p.toFixed(1)}</span></div>`:''}
      ${c>0.05?`<div class="zrow"><span>➖ verbraucht (inkl. 🔥 Ofen)</span><span class="zin">${c.toFixed(1)}</span></div>`:''}
      ${s>0.05?`<div class="zrow"><span>🏪 im Verkauf angekommen</span><span class="zout">${s.toFixed(1)}</span></div>`:''}
      ${l>0.05?`<div class="zrow"><span>📦 im Lager angekommen</span><span class="zout">${l.toFixed(1)}</span></div>`:''}
      ${n>0.05&&!(s>0.05||l>0.05)?`<div class="zrow" style="color:var(--accent-yellow)">⚠️ Überschuss ohne Abfluss → staut im Spiel!</div>`:''}
    </div>`;
  });
  html+=`<div style="font-size:calc(var(--u,1.25) * 11.5px);color:var(--text-muted);margin-top:6px;line-height:1.5">Zonen-Einzelbilanz: 🗂️ Zonen-Fenster (rechts). Etagen: 🏬 Übersicht.</div>`;
  body.innerHTML=html;
}

// Entfernt nur die Maschinen-Boxen aus dem Container, lässt aber den
// Verbindungs-Canvas unangetastet stehen (der liegt im selben Container!).
// Vorher wurde hier komplett innerHTML='' verwendet, was den Canvas mit
// zerstört hat -> danach wurden Verbindungen unsichtbar auf eine losgelöste,
// nicht mehr im DOM hängende Leinwand gezeichnet.
function clearBoxesDOM(){
  const bc=document.getElementById('boxesContainer');
  bc.querySelectorAll('.mbox').forEach(el=>el.remove());
  selectedIds.clear();
}

function clearAll(){
  if(!confirm('Alles löschen?'))return;
  boxes=[];connections=[];portalConfig={};centerPos=null;
  endPasteMode&&endPasteMode(); // V1.9.0
  selectedIds=new Set();selectedConn=null; // V1.9.0
  document.querySelectorAll('#boxesContainer .mbox').forEach(el=>el.remove()); // V1.9.0: Staubsauger — auch stray Elemente
  const gh=document.getElementById('pasteGhost');if(gh)gh.remove();
  drawConns();refreshAll();saveStorage();
  updateSelInfo&&updateSelInfo();
  syncDOM(); // V1.9.2
}

function showCustomDlg(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='cDlg';
  ov.innerHTML=`<div class="box">
    <h3>⚙️ Eigene Maschine</h3>
    <label>Name (deutsch)</label><input id="cN" placeholder="z.B. Meine Maschine">
    <label>Output Material (englisch)</label><input id="cOM" placeholder="z.B. stahl">
    <label>Output pro Zyklus</label><input id="cOQ" type="number" value="10" min="1">
    <label>Input Material (englisch)</label><input id="cIM" placeholder="z.B. eisen">
    <label>Input pro Zyklus</label><input id="cIQ" type="number" value="5" min="0">
    <label>Zykluszeit (Sekunden)</label><input id="cT" type="number" value="10" min="1">
    <div class="btns">
      <button class="ok" onclick="mkCustom()">Erstellen</button>
      <button class="no" onclick="document.getElementById('cDlg').remove()">Abbrechen</button>
    </div>
  </div>`;
  document.body.appendChild(ov);
}

function mkCustom(){
  const n=document.getElementById('cN').value||'Eigene Maschine';
  const om=document.getElementById('cOM').value||'output';
  const oq=parseFloat(document.getElementById('cOQ').value)||10;
  const im=document.getElementById('cIM').value;
  const iq=parseFloat(document.getElementById('cIQ').value)||0;
  const t=parseFloat(document.getElementById('cT').value)||10;
  const out={};out[om]=oq;
  const inp={};if(im)inp[im]=iq;
  const key='CUSTOM_'+Date.now();
  DEVICES[key]={de:n,heat:null,recipes:{Standard:{in:inp,out:out,time:t,note:`Custom: ${oq}x ${om} in ${t}s`}}};
  document.getElementById('cDlg').remove();
  const _si=document.getElementById('searchInput');if(_si)renderList(_si.value);
  addBox(key);
}

function exportJSON(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='expDlg';
  ov.innerHTML=`<div class="box" style="width:400px">
    <h3>💾 Blueprint Exportieren</h3>
    <label>Blueprint Name</label><input id="bpName" placeholder="z.B. Meine Holzkette">
    <label>Beschreibung (optional)</label><input id="bpDesc" placeholder="z.B. Produktion von Brett bis Sternenstaub">
    <div class="btns">
      <button class="ok" onclick="doExport()">Exportieren</button>
      <button class="no" onclick="document.getElementById('expDlg').remove()">Abbrechen</button>
    </div>
  </div>`;
  document.body.appendChild(ov);
}
function showCodex(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='codexDlg';
  ov.innerHTML=`<div class="box" style="width:96vw;max-width:1400px;max-height:90vh;overflow-y:auto;padding:24px 28px">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">
      <h3 style="margin:0;font-size:18px">📖 Rezept-Codex</h3>
      <button onclick="document.getElementById('codexDlg').remove()" style="margin-left:auto;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);padding:8px 14px;font-size:13px;cursor:pointer;font-weight:600">✕ Schließen <small style="color:var(--text-muted)">(ESC)</small></button>
    </div>
    <p style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-secondary);margin:0 0 12px">Alle Rezepte nachschlagen — nach Gerät gruppiert, aufklappbar, mit Mengen pro Vorgang <b>und</b> Rate pro Minute. Zum Bauen direkt „+ Platzieren" klicken.</p>
    <input id="codexSearch" placeholder="🔍  Gerät, Rezept oder Zutat suchen..." oninput="renderCodex()" style="width:100%;box-sizing:border-box;background:var(--bg-primary);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-bottom:10px;outline:none;font-size:13px">
    <div id="codexCats" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px"></div>
    <div id="codexList"></div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
  renderCodex();
}
let codexCat='all';
function setCodexCat(c){codexCat=c;renderCodex()}
function renderCodex(){
  const f=(document.getElementById('codexSearch')?.value||'').toLowerCase();
  const cats=['all','raw','processing','heat','alchemy','advanced','relics'];
  document.getElementById('codexCats').innerHTML=cats.map(c=>
    `<button onclick="setCodexCat('${c}')" style="padding:7px 14px;border-radius:20px;border:1px solid ${codexCat===c?'transparent':'var(--border)'};background:${codexCat===c?'var(--accent-blue)':'var(--bg-tertiary)'};color:${codexCat===c?'#fff':'var(--text-primary)'};font-size:12.5px;font-weight:600;cursor:pointer">${CATEGORY_INFO[c].icon} ${CATEGORY_INFO[c].label}</button>`
  ).join('');
  const searching=f.length>0||codexCat!=='all';
  let html='';
  const devEntries=Object.entries(DEVICES)
    .filter(([k,d])=>!d.isPortal&&!d.isLift)
    .sort((a,b)=>((DEVICE_CATEGORY[a[0]]||'zz')+(a[1].de||'')).localeCompare((DEVICE_CATEGORY[b[0]]||'zz')+(b[1].de||'')));
  devEntries.forEach(([devKey,d])=>{
    if(codexCat!=='all'&&(DEVICE_CATEGORY[devKey]||'')!==codexCat)return;
    let cards='';
    Object.entries(d.recipes).forEach(([recKey,r])=>{
      const ins=Object.entries(r.in||{});
      const outs=Object.entries(r.out||{});
      const inTxt=ins.map(([m,q])=>`<span style="white-space:nowrap"><b>${q}×</b> ${matName(m)}</span>`).join(' + ')||'<i style="color:var(--text-muted)">kein Input</i>';
      const outTxt=outs.map(([m,q])=>`<span style="white-space:nowrap"><b>${q}×</b> ${matName(m)}</span>`).join(' + ')||'<i style="color:var(--text-muted)">—</i>';
      const inRate=ins.map(([m,q])=>`${calcRate(q,r.time).toFixed(1)}/Min`).join(', ');
      const outRate=outs.map(([m,q])=>`${calcRate(q,r.time).toFixed(1)}/Min`).join(', ');
      const hay=(d.de+' '+devKey+' '+(recName(recKey))+' '+recKey+' '+ins.map(x=>MAT_DE[x[0]]||x[0]).join(' ')+' '+outs.map(x=>MAT_DE[x[0]]||x[0]).join(' ')).toLowerCase();
      if(f&&!hay.includes(f))return;
      cards+=`<div style="flex:1 1 300px;min-width:280px;background:var(--bg-primary);border:1px solid var(--border);border-radius:10px;padding:12px 14px;display:flex;flex-direction:column;gap:6px">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="color:var(--accent-yellow);font-weight:700;font-size:13.5px;flex:1">${recName(recKey)}</span>
          <span style="font-size:calc(var(--u,1.25) * 12px);color:var(--text-secondary);background:var(--bg-tertiary);padding:3px 8px;border-radius:10px;white-space:nowrap">⏱ ${r.time}s</span>
        </div>
        <div style="font-size:12.5px;color:var(--text-secondary)">📥 <b style="color:var(--accent-yellow)">${inTxt}</b><br><small style="color:var(--text-muted)">Verbrauch: ${inRate||'—'}</small></div>
        <div style="font-size:12.5px;color:var(--text-secondary)">📤 <b style="color:var(--accent-green)">${outTxt}</b><br><small style="color:var(--text-muted)">Output: ${outRate||'—'}</small></div>
        ${d.heat?`<div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--accent-yellow);font-weight:600">🔥 braucht ${d.heat} Hitze/Sek (Ofen nötig)</div>`:''}
        <button onclick="document.getElementById('codexDlg').remove();placeStarterChain('${devKey}','${recKey}')" style="align-self:flex-start;font-size:12.5px;padding:8px 14px;background:rgba(35,134,54,.18);border:1px solid rgba(63,185,80,.45);border-radius:8px;cursor:pointer;color:var(--accent-green);font-weight:700">🚀 Startkette platzieren</button>
        <button onclick="document.getElementById('codexDlg').remove();addBoxWithRecipe('${devKey}','${recKey}')" style="align-self:flex-start;font-size:calc(var(--u,1.25) * 12.5px);padding:6px 10px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;cursor:pointer;color:var(--text-secondary);font-weight:600">🔧 nur diese Maschine</button>
      </div>`;
    });
    if(!cards)return;
    const catIcon=(CATEGORY_INFO[DEVICE_CATEGORY[devKey]||'all']||{}).icon||'📋';
    html+=`<details ${searching?'open':''} style="border:1px solid var(--border);border-radius:10px;margin-bottom:10px;background:var(--bg-secondary)">
      <summary style="cursor:pointer;padding:12px 16px;font-size:14px;font-weight:700;color:var(--accent-blue);display:flex;align-items:center;gap:10px;list-style:none">
        <span style="font-size:16px">${catIcon}</span>${d.de}
        <small style="color:var(--text-muted);font-weight:400">(${devKey})</small>
        ${d.heat?`<span style="font-size:calc(var(--u,1.25) * 12px);color:var(--accent-yellow);background:rgba(210,153,34,.12);padding:3px 8px;border-radius:10px">🔥 ${d.heat} H/Sek</span>`:''}
        <span style="margin-left:auto;font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-secondary);font-weight:500">${Object.keys(d.recipes).length} Rezepte ▾</span>
      </summary>
      <div style="display:flex;flex-wrap:wrap;gap:10px;padding:12px 14px;border-top:1px solid var(--border-light)">${cards}</div>
    </details>`;
  });
  document.getElementById('codexList').innerHTML=html||'<div style="color:var(--text-muted);text-align:center;padding:30px;font-size:13px">Keine Treffer — anderes Suchwort probieren</div>';
}
function placeStarterChain(devKey,recKey){ // V1.9.5: Rezept → Startkette (Maschine + je Zutat EIN Zulieferer, Tiegel mit Ofen)
  const d=DEVICES[devKey];if(!d)return;
  const r=d.recipes[recKey];if(!r)return;
  let startX=2000,startY=2000;
  if(boxes.length>0){startX=Math.max(...boxes.map(b=>b.x))+520;startY=Math.min(...boxes.map(b=>b.y));}
  const main={id:nextId++,device:devKey,recipe:recKey,count:1,floor:currentFloor,x:startX,y:startY};
  boxes.push(main);makeBoxEl(main);
  const mats=Object.keys(r.in||{});
  let sx=startX;
  mats.forEach((m,mi)=>{
    let pd=null,pr=null;
    Object.entries(DEVICES).forEach(([dk,dd])=>{
      if(pd||dd.isPortal||dd.isSink||dd.isLift||dd.isFurnace)return;
      Object.entries(dd.recipes||{}).forEach(([rk,rr])=>{
        if(pd)return;
        if((rr.out||{})[m]!==undefined){pd=dk;pr=rk}
      });
    });
    if(!pd)return;
    sx-=620;
    const sup={id:nextId++,device:pd,recipe:pr,count:1,floor:currentFloor,x:sx,y:startY+mi*380};
    if(DEVICES[pd].heat){
      const furn={id:nextId++,device:'Blast Furnace',recipe:'Holz (Logs)',count:1,floor:currentFloor,x:sx+520,y:sup.y+60};
      boxes.push(furn);makeBoxEl(furn);
      sup.furnaceId=furn.id;
    }
    boxes.push(sup);makeBoxEl(sup);
    connections.push({from:sup.id,to:main.id,fromPort:0,toPort:0});
  });
  refreshAll();drawConns();saveStorage();fitViewToBoxes();
  userMsg('🚀 Startkette für „'+recName(recKey)+'“ platziert — Zulieferer + Maschine, Anschlüsse noch prüfen');
}
function addBoxWithRecipe(deviceKey,recipeKey){
  addBox(deviceKey);
  const b=boxes[boxes.length-1];
  if(b){b.recipe=recipeKey;refreshBox(b.id);drawConns();saveStorage()}
}

// ============ VORLAGEN (Starter-Ketten zum Einfügen) ============
// Ein paar häufig gebrauchte Grundketten als fertige Vorlage - direkt aus
// Heinz' eigenen Setups übernommen (Holz->Holzkohle->Ofen ist z.B. exakt
// seine eigene Standard-Kette).
const TEMPLATES={
  holzkohle:{
    label:'🪵 Holz → Holzkohle → Hochofen',
    desc:'1 Kreissage (30 Bretter/Min) → 2 Holzkohle-Tiegel (je 15 Kohle/Min — 1 Brett je 4s) auf dem Hochofen. Ein Teil der Kohle läuft als Brennstoff zurück.',
    boxes:[
      {device:'Table Saw',recipe:'Plank',count:1,dx:0,dy:160},
      {device:'Crucible',recipe:'Charcoal',count:2,dx:520,dy:160,furnace:'furnace'},
      {device:'Blast Furnace',recipe:'Holz (Logs)',count:1,dx:1080,dy:160,id:'furnace'}
    ],
    conns:[[0,1],[1,2]]
  },
  duenger:{
    label:'🌱 Dünger-Kette (Pflanzenasche + Schnellkalkpulver)',
    desc:'Saatbeet+Schmelztiegel (Plant Ash) und Steinknacker+Schmelztiegel+Schleifer (Quicklime Powder) laufen in einen Montagetisch.',
    boxes:[
      {device:'Seed Plot',recipe:'Sage Seeds → Sage',count:1,dx:0,dy:340},
      {device:'Blast Furnace',recipe:'Holz (Logs)',count:1,dx:1060,dy:-40,id:'furnace'},
      {device:'Crucible',recipe:'Plant Ash',count:1,dx:520,dy:340,furnace:'furnace'},
      {device:'Stone Crusher',recipe:'Stone',count:1,dx:0,dy:820},
      {device:'Crucible',recipe:'Quicklime',count:1,dx:520,dy:820,furnace:'furnace'},
      {device:'Grinder',recipe:'Quicklime Powder',count:1,dx:1060,dy:820},
      {device:'Assembler',recipe:'Basic Fertilizer',count:1,dx:1600,dy:580}
    ],
    conns:[[0,2],[2,6],[3,4],[4,5],[5,6]]
  }
};
function showTemplates(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='tplDlg';
  let tplName='';
  ov.innerHTML=`<div class="box" style="width:720px">
    <h3>📦 Vorlagen</h3>
    <p style="font-size:13px;color:var(--text-secondary);margin:0 0 12px">Fertige Grundketten mit einem Klick einfügen — danach frei anpassbar.</p>
    ${Object.entries(TEMPLATES).map(([key,t])=>`
      <div style="background:var(--bg-tertiary);border:1px solid rgba(48,54,61,.4);border-radius:8px;padding:14px;margin-bottom:8px">
        <div style="font-weight:700;font-size:15px;margin-bottom:3px">${t.label}</div>
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">${t.desc}</div>
        <button onclick="insertTemplate('${key}')" style="font-size:13px;padding:6px 12px">➕ Einfügen</button>
      </div>
    `).join('')}
    <div style="font-weight:700;font-size:15px;color:var(--accent-blue);margin:14px 0 6px">🧩 Eigene Vorlagen (im Browser gespeichert)</div>
    <div style="font-size:12.5px;color:var(--text-secondary);margin-bottom:8px">Maschinen markieren (Shift+Klick) → Name → speichern — dann beliebig oft stempeln. Eingebaute Vorlagen liegen im Quellcode (js/editor.js, TEMPLATES).</div>
    ${getMyTemplates().length?getMyTemplates().map((t,i)=>`
      <div style="background:var(--bg-tertiary);border:1px solid rgba(48,54,61,.4);border-radius:8px;padding:14px;margin-bottom:8px;display:flex;align-items:center;gap:10px">
        <div style="flex:1"><b style="font-size:14.5px">${t.name}</b> <span style="color:var(--text-secondary);font-size:12.5px">· ${t.clip.boxes.length} Maschine(n)</span></div>
        <button onclick="insertMyTemplate(${i})" style="font-size:13px;padding:6px 12px">📋 Einfügen (Stempel)</button>
        <button onclick="deleteMyTemplate(${i})" style="font-size:13px;padding:6px 12px;color:var(--accent-red)">🗑️</button>
      </div>
    `).join(''):'<div style="color:var(--text-secondary);font-size:13px;margin-bottom:8px">Noch keine eigenen Vorlagen.</div>'}
    <div style="display:flex;gap:8px;margin-top:10px">
      <input id="tplNameIn" placeholder="Name der neuen Vorlage …" style="flex:1;padding:9px 12px;background:var(--bg-primary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-size:13.5px;outline:none">
      <button onclick="saveMyTemplate(document.getElementById('tplNameIn').value)" style="padding:9px 14px;background:rgba(63,185,80,.15);border:1px solid rgba(63,185,80,.4);border-radius:8px;color:var(--accent-green);font-weight:700;font-size:13.5px;cursor:pointer">💾 Aus Auswahl speichern</button>
    </div>
    <button onclick="document.getElementById('tplDlg').remove()" style="width:100%;margin-top:6px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;color:var(--text-secondary);padding:10px;font-weight:600;font-size:13.5px">✕ Schließen</button>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function insertTemplate(key){
  const t=TEMPLATES[key];
  if(!t)return;
  let startX=2000,startY=2000;
  if(boxes.length>0){startX=Math.max(...boxes.map(b=>b.x))+500;startY=Math.min(...boxes.map(b=>b.y));}
  const idMap={};
  t.boxes.forEach((tb,i)=>{
    const boxId=nextId++;
    if(tb.id)idMap[tb.id]=boxId; idMap[i]=boxId;
    const newBox={id:boxId,device:tb.device,recipe:tb.recipe,count:tb.count,x:Math.round(startX+tb.dx),y:Math.round(startY+tb.dy)};
    boxes.push(newBox);
    makeBoxEl(newBox);
  });
  // V1.7.0: Ofen-Zuordnung ZWEI-PASS — die Reihenfolge in der Vorlage ist jetzt egal
  t.boxes.forEach((tb,i)=>{
    if(tb.furnace){const nb=boxes.find(b=>b.id===idMap[i]);if(nb&&idMap[tb.furnace])nb.furnaceId=idMap[tb.furnace];}
  });
  t.conns.forEach(([fi,ti])=>connections.push({from:idMap[fi],to:idMap[ti]}));
  const _td=document.getElementById('tplDlg');if(_td)_td.remove(); // V1.7.0: robust — Vorlage geht auch ohne offenen Dialog
  refreshAll();drawConns();saveStorage();fitViewToBoxes();
}

// ============ ZONEN ============
// Eine Zone ist einfach ein Name, den man mehreren Boxen zuweist (z.B. "Holz-
// Kohle"). Zonen lassen sich als Ganzes duplizieren (alle Boxen + interne
// Verbindungen werden geklont, inkl. Ofen-Zuordnung), und der Spickzettel
// gruppiert danach - so sieht man nicht nur "20 Holzmaschinen", sondern
// "Zone Holz-Kohle: 20 Holzmaschinen, 8 Schmelztiegel, ...".
const ZONE_PALETTE=['#60a5fa','#34d399','#fbbf24','#f472b6','#a78bfa','#38bdf8','#fb923c','#4ade80'];
function drawZoneHulls(){ // V1.9.46: gestreifte Zonen-Hülle + Label-Chip — UNTER den Linien, nur aktuelle Etage
  zoneLabelHits.length=0; // V1.9.48: neu füllen
  allZones().forEach(zn=>{
    const members=boxes.filter(b=>b.zone===zn&&(b.floor||0)===currentFloor);
    if(!members.length)return;
    let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
    members.forEach(b=>{
      const el=document.getElementById('box-'+b.id);
      const w=el?el.offsetWidth:460,h=el?el.offsetHeight:200;
      minX=Math.min(minX,b.x);minY=Math.min(minY,b.y);maxX=Math.max(maxX,b.x+w);maxY=Math.max(maxY,b.y+h);
    });
    const pad=36;minX-=pad;minY-=pad;maxX+=pad;maxY+=pad;
    const col=zoneColor(zn);
    const label='🗂️ '+((zoneConfig[zn]&&zoneConfig[zn].name)||zn)+' · '+members.length;
    const loff=(zoneConfig[zn]&&zoneConfig[zn].loff)||{x:0,y:0}; // V1.9.48: Label verschiebbar
    const lx=minX+loff.x, ly=minY+loff.y;
    ctx.save();
    ctx.setLineDash([14,8]);ctx.lineWidth=3;ctx.strokeStyle=col;ctx.globalAlpha=.85;
    ctx.strokeRect(minX,minY,maxX-minX,maxY-minY);
    if(!(zoneConfig[zn]&&zoneConfig[zn].bg===false)){ctx.globalAlpha=.05;ctx.fillStyle=col;ctx.fillRect(minX,minY,maxX-minX,maxY-minY)} // V1.9.47: Füllung abschaltbar (User: nur Rand oder Rand+Fläche)
    ctx.globalAlpha=1;ctx.setLineDash([]);
    ctx.font='700 15px system-ui';
    const tw=ctx.measureText(label).width;
    ctx.fillStyle=col;ctx.globalAlpha=.16;ctx.fillRect(lx,ly-26,tw+18,26);
    ctx.globalAlpha=1;ctx.fillText(label,lx+9,ly-8);
    ctx.restore();
    zoneLabelHits.push({x:lx,y:ly-26,w:tw+18,h:26,zn}); // V1.9.48: Klick-Fläche für Bearbeiten/Ziehen
  });
}
function drawWeicheMarkers(){ // V1.9.46: ⇄-Marke an jedem Punkt, von dem eine Weiche abzweigt
  connections.forEach(c=>{
    if(!c.branchParentId)return;
    const pc=connections.find(x=>x.id===c.branchParentId);
    if(!pc||!pc.waypoints||!pc.waypoints[c.branchWpIdx])return;
    const fb=boxes.find(b=>b.id===pc.from);
    if(!fb||(fb.floor||0)!==currentFloor)return;
    const wp=pc.waypoints[c.branchWpIdx];
    ctx.save();
    ctx.beginPath();ctx.fillStyle='#1f6feb';ctx.arc(wp.x,wp.y,11,0,Math.PI*2);ctx.fill();
    ctx.lineWidth=2.5;ctx.strokeStyle='#fff';ctx.stroke();
    ctx.font='700 13px system-ui';ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('⇄',wp.x,wp.y);
    ctx.restore();
  });
  connections.forEach(c=>{ // V1.9.51: MERGE-Marken — gruener Ring mit 🔗, dort muendet eine Quelle in diese Line
    if(!c.mergeParentId)return;
    const pc=connections.find(x=>x.id===c.mergeParentId);
    if(!pc||!pc.waypoints||!pc.waypoints[c.mergeWpIdx])return;
    const fb=boxes.find(b=>b.id===pc.from);
    if(!fb||(fb.floor||0)!==currentFloor)return;
    const wp=pc.waypoints[c.mergeWpIdx];
    ctx.save();
    ctx.beginPath();ctx.fillStyle='#1a7f37';ctx.arc(wp.x,wp.y,10,0,Math.PI*2);ctx.fill();
    ctx.lineWidth=2.5;ctx.strokeStyle='#d4f7dc';ctx.stroke();
    ctx.font='700 10px system-ui';ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🔗',wp.x,wp.y);
    ctx.restore();
  });
}
function zoneColor(name){
  if(zoneConfig[name]&&zoneConfig[name].color)return zoneConfig[name].color; // V1.9.46: User-Farbe zuerst
  let h=0;for(let i=0;i<name.length;i++)h=(h*31+name.charCodeAt(i))>>>0;
  return ZONE_PALETTE[h%ZONE_PALETTE.length];
}
function allZones(){
  const set=new Set();
  boxes.forEach(b=>{if(b.zone)set.add(b.zone)});
  return [...set].sort();
}
function createZoneFromSelection(){
  if(selectedIds.size===0){alert('Erst Maschinen auswählen (Umschalt+Klick oder Rahmen aufziehen), dann Zone erstellen.');return;}
  const name=prompt('Name für die neue Zone (z.B. "Holz-Kohle"):');
  if(!name)return;
  selectedIds.forEach(id=>{
    const b=boxes.find(x=>x.id===id);
    if(b){b.zone=name;refreshBox(id)}
  });
  saveStorage();
  const dlg=document.getElementById('zoneDlg');if(dlg){dlg.remove();showZones()}
}
function removeFromZone(id){
  const b=boxes.find(x=>x.id===id);
  if(b){delete b.zone;refreshBox(id);saveStorage()}
}
function duplicateZone(name){
  // V1.4.0: Zone als EINGEFRORENER Snapshot an die Maus nehmen — beliebig oft stempeln,
  // ohne dass die Kopien die Zone mit jedem Einfügen vergrößern (alter Bug: 2 Zonen -> 2x Kopie).
  // Ebenen 1:1 mitnehmen (V1.3.11), interne Verbindungen inkl. Anschlüsse+Wegpunkte, Ofen-/Aufzug-Paare.
  const members=boxes.filter(b=>b.zone===name);
  if(members.length===0)return;
  const minX=Math.min(...members.map(b=>b.x)),minY=Math.min(...members.map(b=>b.y));
  const ids=new Set(members.map(m=>m.id));
  const clip={
    boxes:members.map(b=>({device:b.device,recipe:b.recipe,count:b.count,dx:b.x-minX,dy:b.y-minY,origId:b.id,zone:name,floor:b.floor||0})),
    conns:connections.filter(c=>ids.has(c.from)&&ids.has(c.to)).map(c=>({from:c.from,to:c.to,fromPort:c.fromPort||0,toPort:c.toPort||0,origConnId:connId(c),branchParentId:c.branchParentId,branchWpIdx:c.branchWpIdx,mergeParentId:c.mergeParentId,mergeWpIdx:c.mergeWpIdx,waypoints:(c.waypoints&&c.waypoints.length)?c.waypoints.map(p=>({dx:p.x-minX,dy:p.y-minY})):undefined})), // V1.9.51: Wegpunkte RELATIV + Weiche/Merge-Remap (gleicher Fix wie copySelection)
    furnaceLinks:members.filter(b=>b.furnaceId&&ids.has(b.furnaceId)).map(b=>({boxId:b.id,furnaceId:b.furnaceId})),
    liftLinks:members.filter(b=>b.liftPartner&&ids.has(b.liftPartner)).map(b=>({boxId:b.id,partnerId:b.liftPartner}))
  };
  clip.portalConfig={};members.forEach(b=>{if(portalConfig[b.id])clip.portalConfig[b.id]=portalConfig[b.id]}); // V1.9.28
  const dlg=document.getElementById('zoneDlg');if(dlg)dlg.remove();
  startPasteMode(clip,`Zone „${name}“`,'keep'); // V1.9.27: 'keep' = Ebenen RELATIV zur aktuellen Etage — die Zone landet dort, wo du gerade stehst
}
function renameZone(oldName){
  const newName=prompt('Neuer Name für Zone \"'+oldName+'\":',oldName);
  if(!newName||newName===oldName)return;
  boxes.forEach(b=>{if(b.zone===oldName){b.zone=newName;refreshBox(b.id)}});
  if(zoneConfig[oldName]){zoneConfig[newName]=zoneConfig[oldName];delete zoneConfig[oldName]} // V1.9.46
  saveStorage();
  const dlg=document.getElementById('zoneDlg');if(dlg){dlg.remove();showZones()}
}
function dissolveZone(name){
  if(!confirm(`Zone \"${name}\" auflösen? Die Maschinen bleiben erhalten, verlieren nur die Zonen-Zuordnung.`))return;
  boxes.forEach(b=>{if(b.zone===name){delete b.zone;refreshBox(b.id)}});
  delete zoneConfig[name]; // V1.9.46
  saveStorage();
  const dlg=document.getElementById('zoneDlg');if(dlg){dlg.remove();showZones()}
}
function editZoneDialog(zn){ // V1.9.46: Zonen-Rahmen — Anzeigename + Farbe frei wählbar (Hülle, Label und Maschinen-Ränder folgen)
  const old=document.getElementById('zoneEditDlg');if(old)old.remove();
  const cfg=zoneConfig[zn]||{name:zn,color:zoneColor(zn)};
  const ov=document.createElement('div');ov.className='dlg';ov.id='zoneEditDlg';
  ov.innerHTML=`<div class="box" style="width:min(430px,94vw)">
    <h3>🗂️ Zone „${zn}“</h3>
    <div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-secondary);line-height:1.7">Der gestreifte Rahmen + Label auf der Karte folgen diesen Einstellungen — die Maschinen-Ränder in derselben Farbe.</div>
    <div style="margin:10px 0"><b>Anzeigename (Label):</b><br><input id="zeName" value="${(cfg.name||zn).replace(/"/g,'&quot;')}" style="width:100%;margin-top:4px;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:6px;padding:6px 8px"></div>
    <div style="margin:10px 0"><b>Rahmenfarbe:</b><br><input type="color" id="zeColor" value="${cfg.color||'#58a6ff'}" style="width:70px;height:36px;margin-top:4px;background:none;border:1px solid var(--border);border-radius:6px;cursor:pointer"></div>
    <div style="margin:10px 0;display:flex;align-items:center;gap:8px"><input type="checkbox" id="zeBg" ${cfg.bg!==false?'checked':''} style="width:18px;height:18px;cursor:pointer"><label for="zeBg" style="cursor:pointer">Hintergrund-Füllung zeigen (aus = nur gestreifter Rand + farbige Box-Ränder)</label></div>
    <div style="display:flex;gap:8px">
      <button onclick="saveZoneConfig('${zn.replace(/'/g,"\'")}')" style="flex:1;padding:9px;background:#238636;color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer">💾 Speichern</button>
      <button onclick="document.getElementById('zoneEditDlg').remove();dissolveZone('${zn.replace(/'/g,"\'")}')" style="padding:9px 14px;background:rgba(248,81,73,.12);border:1px solid rgba(248,81,73,.4);border-radius:8px;color:var(--accent-red);cursor:pointer;font-weight:700">✕ Auflösen</button>
      <button onclick="document.getElementById('zoneEditDlg').remove()" style="padding:9px 14px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer">Abbrechen</button>
    </div></div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function saveZoneConfig(zn){
  const nm=document.getElementById('zeName').value.trim()||zn;
  const col=document.getElementById('zeColor').value;
  const bgOn=document.getElementById('zeBg').checked;
  if(nm!==zn){boxes.forEach(b=>{if(b.zone===zn){b.zone=nm;refreshBox(b.id)}});zoneConfig[nm]={name:nm,color:col,bg:bgOn};delete zoneConfig[zn]}
  else zoneConfig[zn]={name:nm,color:col,bg:bgOn};
  document.getElementById('zoneEditDlg').remove();
  drawConns();refreshAll();saveStorage();
  const dlg=document.getElementById('zoneDlg');if(dlg){dlg.remove();showZones()}
  userMsg('🗂️ Zonen-Rahmen gespeichert — Hülle + Label auf der Karte sichtbar');
}
function showZones(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='zoneDlg';
  const zones=allZones();
  ov.innerHTML=`<div class="box" style="max-width:520px">
    <h3>🗂️ Zonen</h3>
    <p style="font-size:calc(var(--u,1.25) * 12px);color:var(--text-secondary);margin:0 0 10px">Maschinen auf der Karte per Umschalt+Klick oder Rahmen aufziehen auswählen, dann hier eine Zone daraus machen.</p>
    <button onclick="createZoneFromSelection()" style="width:100%;margin-bottom:14px">➕ Neue Zone aus aktueller Auswahl (${selectedIds.size} ausgewählt)</button>
    ${zones.length===0?'<div style="color:var(--text-muted);text-align:center;padding:10px">Noch keine Zonen angelegt.</div>':zones.map(z=>{
      const count=boxes.filter(b=>b.zone===z).reduce((s,b)=>s+(b.count||1),0);
      return `<div style="background:var(--bg-tertiary);border:1px solid rgba(48,54,61,.4);border-left:4px solid ${zoneColor(z)};border-radius:8px;padding:10px 12px;margin-bottom:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:6px">${z} <small style="color:var(--text-muted);font-weight:400">(${count} Maschinen)</small></div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button onclick="duplicateZone('${z}')" style="font-size:calc(var(--u,1.25) * 11px);padding:3px 8px">📋 Einfügen (Stempel)</button>
          <button onclick="renameZone('${z}')" style="font-size:calc(var(--u,1.25) * 11px);padding:3px 8px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:5px;color:var(--text-secondary);font-weight:600">✎ Umbenennen</button>
          <button onclick="editZoneDialog('${z}')" style="font-size:calc(var(--u,1.25) * 11px);padding:3px 8px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:5px;color:var(--text-secondary);font-weight:600">🎨 Rahmen</button>
          <button onclick="dissolveZone('${z}')" style="font-size:calc(var(--u,1.25) * 11px);padding:3px 8px;background:var(--bg-secondary);color:var(--accent-red);border:1px solid rgba(248,81,73,.2);border-radius:5px;font-weight:600">✕ Auflösen</button>
        </div>
      </div>`;
    }).join('')}
    <button onclick="document.getElementById('zoneDlg').remove()" style="width:100%;margin-top:6px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;color:var(--text-secondary);padding:8px;font-weight:600">✕ Schließen</button>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}

function showCheatSheet(){
  if(boxes.length===0){alert('Noch keine Maschinen im Setup.');return;}
  // Fasst Boxen nach Gerät + Rezept zusammen, gruppiert nach Zone (falls
  // vorhanden) - ergibt eine einfache Einkaufs-/Bauliste fürs Spiel, ohne
  // Roadmap-Grafik. Boxen ohne Zone landen am Ende unter "Ohne Zone".
  function groupBoxes(list){
    const groups={};
    list.forEach(b=>{
      const key=b.device+'|'+b.recipe;
      if(!groups[key])groups[key]={device:b.device,recipe:b.recipe,count:0,onFurnace:0};
      groups[key].count+=(b.count||1);
      if(b.furnaceId)groups[key].onFurnace+=(b.count||1);
    });
    return Object.values(groups).sort((a,b)=>b.count-a.count);
  }
  let txt=`SPICKZETTEL – Alchemy Factory (${new Date().toLocaleDateString('de-DE')})\n`;
  txt+='='.repeat(40)+'\n\n';
  const zones=allZones();
  zones.forEach(z=>{
    const members=boxes.filter(b=>b.zone===z);
    txt+=`ZONE: ${z}  (${members.reduce((s,b)=>s+(b.count||1),0)} Maschinen)\n`;
    txt+='-'.repeat(30)+'\n';
    groupBoxes(members).forEach(r=>{
      const d=DEVICES[r.device];
      txt+=`  ${r.count}x ${d?d.de:r.device} (${r.device}) – ${recName(r.recipe)}`+(r.onFurnace>0?`  [${r.onFurnace} auf Ofen]`:'')+'\n';
    });
    txt+='\n';
  });
  const unzoned=boxes.filter(b=>!b.zone);
  if(unzoned.length>0){
    txt+=(zones.length>0?'OHNE ZONE\n'+'-'.repeat(30)+'\n':'');
    groupBoxes(unzoned).forEach(r=>{
      const d=DEVICES[r.device];
      txt+=`${zones.length>0?'  ':''}${r.count}x ${d?d.de:r.device} (${r.device}) – ${recName(r.recipe)}`+(r.onFurnace>0?`  [${r.onFurnace} auf Ofen]`:'')+'\n';
    });
    txt+='\n';
  }
  txt+='-'.repeat(40)+'\n';
  txt+=`Maschinen insgesamt: ${boxes.reduce((s,b)=>s+(b.count||1),0)}\n`;
  txt+=`Verschiedene Gerätearten: ${new Set(boxes.map(b=>b.device)).size}\n`;

  const ov=document.createElement('div');ov.className='dlg';ov.id='cheatDlg';
  ov.innerHTML=`<div class="box" style="max-width:520px">
    <h3>📝 Spickzettel</h3>
    <p style="font-size:calc(var(--u,1.25) * 12px);color:var(--text-secondary);margin:0 0 8px">Zum Kopieren markieren oder als .txt herunterladen – zum Nachbauen im Spiel.</p>
    <textarea id="cheatTxt" style="width:100%;height:320px;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;padding:12px;font-family:'Fira Code','Cascadia Code',monospace;font-size:calc(var(--u,1.25) * 12.5px);box-sizing:border-box;outline:none;resize:vertical" readonly></textarea>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button onclick="copyCheatSheet()" style="flex:1">📋 Kopieren</button>
      <button onclick="downloadCheatSheet()" style="flex:1">⬇️ Als .txt speichern</button>
      <button onclick="document.getElementById('cheatDlg').remove()" style="flex:1;background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;color:var(--text-secondary);padding:8px;font-weight:600">✕ Schließen</button>
    </div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
  document.getElementById('cheatTxt').value=txt;
}
function copyCheatSheet(){
  const ta=document.getElementById('cheatTxt');
  ta.select();
  navigator.clipboard&&navigator.clipboard.writeText(ta.value).catch(()=>document.execCommand('copy'));
  if(!navigator.clipboard)document.execCommand('copy');
}
function downloadCheatSheet(){
  const txt=document.getElementById('cheatTxt').value;
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([txt],{type:'text/plain'}));
  a.download='spickzettel.txt';a.click();
}

function showFactorySettings(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='facDlg';
  ov.innerHTML=`<div class="box" style="max-width:420px">
    <h3>⚙️ Fabrikstufe</h3>
    <p style="font-size:calc(var(--u,1.25) * 12px);color:var(--text-secondary);margin:0 0 12px">
      Trage hier deine Werte aus dem Spiel ein (siehe "Tab"-Fenster → World-Tab
      im Spiel: "Factory Efficiency" und "Logistics Efficiency"). Alle
      Berechnungen im Tool werden entsprechend skaliert.
    </p>
    <label style="display:block;font-size:calc(var(--u,1.25) * 12.5px);margin-bottom:4px">🏭 Factory Efficiency (Maschinen-Tempo & Wärmeverbrauch)</label>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
      <input type="number" id="facEff" value="${factoryEfficiency}" min="100" max="400" step="25" style="width:90px;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:6px;padding:6px 8px;outline:none">
      <span style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-secondary)">%  (Spiel: 100 bis 400 % — 12 Stufen à +25 %)</span>
    </div>
    <label style="display:block;font-size:calc(var(--u,1.25) * 12.5px);margin-bottom:4px">📦 Logistics Efficiency (Band-Kapazität)</label>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
      <input type="number" id="facBelt" value="${beltCapacity}" min="60" max="240" step="15" style="width:90px;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:6px;padding:6px 8px;outline:none">
      <span style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-secondary)">Stück/Min pro Band (Spiel: 60 bis 240 — 12 Stufen à +15/Min)</span>
    </div>
    <p style="font-size:calc(var(--u,1.25) * 11px);color:var(--text-muted);margin:0 0 12px">Beide Forschungen haben im Spiel 12 Stufen: Factory Efficiency je Stufe +25 % (100 % → 400 % = ×4 Tempo) · Logistics je Stufe +15/Min (60 → 240/Min). Die Regler-Pfeile springen genau auf diese Stufen-Werte — jeden Wert kannst du aber auch frei eintippen.</p>
    <div style="display:flex;gap:8px">
      <button onclick="applyFactorySettings()" style="flex:1">✓ Übernehmen</button>
      <button onclick="factoryEfficiency=100;beltCapacity=60;applyFactorySettings()" style="flex:1;background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;color:var(--text-secondary);padding:8px;font-weight:600">↺ Zurücksetzen</button>
      <button onclick="document.getElementById('facDlg').remove()" style="flex:1;background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;color:var(--text-secondary);padding:8px;font-weight:600">✕ Abbrechen</button>
    </div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function applyFactorySettings(){
  const fe=document.getElementById('facEff'), fb=document.getElementById('facBelt');
  if(fe)factoryEfficiency=Math.min(400,Math.max(100,parseFloat(fe.value)||100));
  if(fb)beltCapacity=Math.min(240,Math.max(60,parseFloat(fb.value)||60));
  const dlg=document.getElementById('facDlg');if(dlg)dlg.remove();
  refreshAll();drawConns();saveStorage();
}

// ============ RÜCKWÄRTS-RECHNER (Ziel-Produktionsrechner) ============
// Ausgehend von einem gewünschten Zielprodukt + Wunsch-Menge/Min wird
// rückwärts durch den Rezeptbaum gerechnet: welches Gerät/Rezept stellt das
// her, wie viele Maschinen braucht es dafür, und was brauchen DIE wiederum
// als Input - rekursiv bis zu den Rohstoffen. Portale werden ausgeklammert
// (Rohstoff-Käufe zählen als "Ende der Kette").
function calculateTargetChain(targetItemKey, targetRatePerMin, visited){
  visited = visited || new Set();
  const node={itemKey:targetItemKey, ratePerMin:targetRatePerMin, machineCountNeeded:0, inputs:[]};
  if(visited.has(targetItemKey) || targetRatePerMin<=0){node.cycleCut=visited.has(targetItemKey);return node;} // V1.9.56: cycleCut = Rezept recycelt das Material selbst (Stahl+Eisen) — Rohstoff-Angabe ist OBERGRENZE
  const nextVisited=new Set(visited); nextVisited.add(targetItemKey);
  let foundDevice=null, foundRecipeName=null, foundRecipe=null;
  for(const [devKey,dev] of Object.entries(DEVICES)){
    if(dev.isPortal)continue;
    for(const [recKey,rec] of Object.entries(dev.recipes)){
      if(rec.out && rec.out[targetItemKey]>0){foundDevice=devKey;foundRecipeName=recKey;foundRecipe=rec;break;}
    }
    if(foundDevice)break;
  }
  if(!foundDevice||!foundRecipe)return node; // Rohstoff / nicht herstellbar -> Ende der Kette
  const baseRatePerMachine=calcRate(foundRecipe.out[targetItemKey],foundRecipe.time);
  if(baseRatePerMachine<=0)return node;
  const countNeeded=Math.ceil((targetRatePerMin/baseRatePerMachine)*100)/100;
  node.producerDevice=foundDevice; node.recipeName=foundRecipeName; node.machineCountNeeded=countNeeded;
  const devDef=DEVICES[foundDevice];
  if(devDef.heat && !devDef.isFurnace) node.heatNeededPerSec=devDef.heat*(factoryEfficiency/100)*countNeeded; // V1.9.56: Heat x Effizienz — Wärme je ITEM bleibt konstant (vorher halbierte der Bedarf bei 200 % fälschlich)
  if(foundRecipe.in){
    Object.entries(foundRecipe.in).forEach(([inKey,inQty])=>{
      const inputRateNeeded=calcRate(inQty,foundRecipe.time)*countNeeded;
      node.inputs.push(calculateTargetChain(inKey,inputRateNeeded,nextVisited));
    });
  }
  return node;
}
function allProducibleItems(){
  const set=new Set();
  Object.values(DEVICES).forEach(d=>{if(d.isPortal)return;Object.values(d.recipes).forEach(r=>Object.keys(r.out||{}).forEach(k=>set.add(k)))});
  return [...set].sort((a,b)=>(matName(a)).localeCompare(matName(b)));
}
function showReverseCalculator(){
  const items=allProducibleItems();
  const ov=document.createElement('div');ov.className='dlg';ov.id='revDlg';
  ov.innerHTML=`<div class="box" style="max-width:640px;max-height:85vh;overflow-y:auto">
    <h3>🎯 Rückwärts-Rechner (Ziel-Produktionskette)</h3>
    <p style="font-size:calc(var(--u,1.25) * 12px);color:var(--text-secondary);margin:0 0 12px">Zielprodukt + Wunschmenge/Min wählen - der Rechner ermittelt rückwärts den kompletten Maschinenbedarf bis zu den Rohstoffen.</p>
    <div style="display:flex;gap:8px;margin-bottom:14px">
      <select id="revItem" style="flex:2;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:6px;padding:6px 8px;outline:none">
        ${items.map(k=>`<option value="${k}">${matName(k)}</option>`).join('')}
      </select>
      <input type="number" id="revRate" value="10" min="0.1" step="1" style="flex:1;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:6px;padding:6px 8px;outline:none">
      <span style="align-self:center;font-size:calc(var(--u,1.25) * 12px);color:var(--text-secondary)">/Min</span>
    </div>
    <button onclick="runReverseCalc()" style="width:100%;margin-bottom:14px">Berechnen</button>
    <div id="revResult"></div>
    <div style="display:flex;gap:8px;margin-top:12px">
      <button id="revInsertBtn" onclick="insertReverseChain()" style="flex:1;display:none">➕ Kette in Karte einfügen</button>
      <button onclick="document.getElementById('revDlg').remove()" style="flex:1;background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;color:var(--text-secondary);padding:8px;font-weight:600">✕ Schließen</button>
    </div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
let lastReverseTree=null;
function runReverseCalc(){
  const itemKey=document.getElementById('revItem').value;
  const rate=Math.max(0.1,parseFloat(document.getElementById('revRate').value)||10);
  const tree=calculateTargetChain(itemKey,rate);
  lastReverseTree=tree;
  const machineCounts={}, rawInputs={}, cycRaw={};
  let totalHeat=0;
  (function traverse(node){
    if(node.producerDevice&&node.recipeName){
      const key=node.producerDevice+'|'+node.recipeName;
      if(!machineCounts[key])machineCounts[key]={device:node.producerDevice,recipe:node.recipeName,count:0};
      machineCounts[key].count+=node.machineCountNeeded;
      totalHeat+=(node.heatNeededPerSec||0);
    } else if(node.ratePerMin>0){
      rawInputs[node.itemKey]=(rawInputs[node.itemKey]||0)+node.ratePerMin;
      if(node.cycleCut)cycRaw[node.itemKey]=1; // V1.9.56: Zyklus-Rezept — Recycling senkt den echten Kaufbedarf
    }
    node.inputs.forEach(traverse);
  })(tree);
  let html='<div style="background:var(--bg-tertiary);border:1px solid rgba(48,54,61,.4);border-radius:10px;padding:12px;font-size:calc(var(--u,1.25) * 12.5px)">';
  html+='<div style="color:var(--accent-blue);font-weight:700;margin-bottom:6px">🏭 Benötigte Maschinen:</div>';
  Object.values(machineCounts).sort((a,b)=>b.count-a.count).forEach(m=>{
    const d=DEVICES[m.device];
    html+=`<div style="margin-bottom:3px">${Math.ceil(m.count)}x ${d?d.de:m.device} <small style="color:var(--text-muted)">(${m.device})</small> – ${recName(m.recipe)}</div>`;
  });
  if(Object.keys(rawInputs).length>0){
    html+='<div style="color:var(--accent-green);font-weight:700;margin:10px 0 6px">🌱 Benötigte Rohstoffe:</div>';
    Object.entries(rawInputs).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>{
      html+=`<div style="margin-bottom:3px">${(matName(k))}: ${v.toFixed(1)}/Min${cycRaw[k]?' <span style="color:var(--accent-yellow)">⚠️ Zyklus-Rezept — recycelt einen Teil zurück, echter Kaufbedarf ist NIEDRIGER</span>':''}</div>`;
    });
  }
  html+=`<div style="margin-top:10px;color:var(--text-muted);font-size:calc(var(--u,1.25) * 11px);line-height:1.7">💡 <b>Ehrlich heißt auch:</b> 1 Line = 1 Band = max ${beltCapacity}/Min (Flüssigkeiten per Rohr ≈ ${LIQUID_LINE_CAP}/Min — Maschinen mit &gt;60/Min FESTSTOFF-Bedarf, z.B. Shaper Jupiter 120/Min Plank, brauchen MERGE: mehrere Bänder auf einen Eingang). Bei mehreren Herstellern für dasselbe Item (z.B. Salz+Sand: Steinknacker ODER Athanor) nimmt der Rechner das erste passende Gerät. Nebenprodukte (z.B. Malachit bei Rohsplitter) bleiben ungenutzt — getrennt verwerten. Kessel-Zeiten sind Community-Näherungen — lieber 1–2 mehr bauen.</div>`;
  if(totalHeat>0)html+=`<div style="margin-top:10px;color:var(--accent-yellow);font-weight:600">🔥 Zusätzlicher Wärmebedarf (Nicht-Ofen-Geräte): ${totalHeat.toFixed(1)} H/s</div>`;
  html+='</div>';
  document.getElementById('revResult').innerHTML=html;
  document.getElementById('revInsertBtn').style.display='block';
}
function insertReverseChain(){
  if(!lastReverseTree)return;
  const levels=[];
  (function assignLevels(node,depth){
    if(!levels[depth])levels[depth]=[];
    levels[depth].push(node);
    node.inputs.forEach(c=>assignLevels(c,depth+1));
  })(lastReverseTree,0);
  const reversed=[...levels].reverse();
  // Rechts von allem bisher Vorhandenen platzieren, damit nichts überlagert wird
  let startX=2000, startY=2000;
  if(boxes.length>0){
    startX=Math.max(...boxes.map(b=>b.x))+500;
    startY=Math.min(...boxes.map(b=>b.y));
  }
  const nodeToBoxIds=new Map();
  reversed.forEach((levelNodes,colIndex)=>{
    levelNodes.forEach((node,rowIndex)=>{
      if(!node.producerDevice||!node.recipeName)return;
      // V1.9.56: SPIEL-MAX 10 Maschinen je Box — größere Mengen werden auf MEHRERE Boxen verteilt.
      // Vorher: EINE x30-Box — die Ports cappen bei 10, 20 Maschinen waren unsichtbar unversorgt!
      let remaining=Math.max(1,Math.ceil(node.machineCountNeeded));
      const ids=[];
      let part=0;
      while(remaining>0){
        const cnt=Math.min(10,remaining);
        const boxId=nextId++;
        const newBox={id:boxId,device:node.producerDevice,recipe:node.recipeName,count:cnt,x:Math.round(startX+colIndex*360),y:Math.round(startY+rowIndex*220+part*170)};
        boxes.push(newBox);
        makeBoxEl(newBox);
        ids.push(boxId);
        remaining-=cnt;part++;
      }
      nodeToBoxIds.set(node,ids);
    });
  });
  // V1.9.56: PORT-GERECHT verkabeln — JE Maschine (Eingang) bekommt ihre EIGENE Line (toPort 0..N-1).
  // Vorher landeten ALLE Lines auf Port 0 = nur Maschine 1 lief, der Rest stand rot!
  (function makeConns(node){
    const parentIds=nodeToBoxIds.get(node);
    node.inputs.forEach(child=>{
      const childIds=nodeToBoxIds.get(child);
      if(parentIds&&childIds){
        parentIds.forEach((pid,pi)=>{
          const pb=boxes.find(b=>b.id===pid);if(!pb)return;
          const pp=Math.min(pb.count||1,10);
          for(let port=0;port<pp;port++){
            const cid=childIds[(pi*pp+port)%childIds.length];
            const cb=boxes.find(b=>b.id===cid);if(!cb)continue;
            connections.push({from:cid,to:pid,fromPort:port%Math.min(cb.count||1,10),toPort:port});
          }
        });
      }
      makeConns(child);
    });
  })(lastReverseTree);
  const rd=document.getElementById('revDlg');if(rd)rd.remove(); // V1.9.56: robust — Insert funktioniert auch ohne offenen Dialog
  refreshAll();drawConns();saveStorage();
  fitViewToBoxes();
}

function doExport(){
  const name=document.getElementById('bpName').value||'Alchemy Blueprint';
  const desc=document.getElementById('bpDesc').value||'';
  const d={name,desc,boxes,connections,nextId,portalConfig,centerPos,centerLabel,version:1,exportDate:new Date().toISOString()};
  document.getElementById('expDlg').remove();
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(d,null,2)],{type:'application/json'}));
  a.download=name.replace(/[^a-zA-Z0-9äöüÄÖÜß]/g,'_')+'.json';a.click();
}

function offerMapImport(obj,name){ // V1.9.28: Karte laden — ERSETZEN oder auf aktueller Etage EINFÜGEN? (User: „bin auf E1 und es kommt immer noch im EG")
  if(boxes.length===0){applyState(obj);return}
  window.__importObj=obj;
  const ov=document.createElement('div');ov.className='dlg';ov.id='mapImportDlg';
  ov.innerHTML=`<div class="box" style="width:500px">
    <h3>📂 „${name}" laden</h3>
    <div style="font-size:12.5px;color:var(--text-secondary);line-height:1.7;margin-bottom:10px">Deine aktuelle Karte ist nicht leer (<b>${boxes.length} Maschinen</b>). Wie soll „${name}" geladen werden?</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button onclick="importMapReplace()" style="padding:10px 14px;background:#da3633;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700">🔄 Karte ersetzen<br><small style="font-weight:400">aktuelle Karte wird verworfen</small></button>
      <button onclick="importMapPaste()" style="padding:10px 14px;background:#238636;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700">📋 Auf Etage ${currentFloor===0?'EG':'E'+currentFloor} einfügen<br><small style="font-weight:400">hängt an der Maus — Klick platziert</small></button>
      <button onclick="document.getElementById('mapImportDlg').remove()" style="padding:10px 14px;background:var(--bg-tertiary);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;cursor:pointer;font-weight:700">Abbrechen</button>
    </div>
    <div style="font-size:calc(var(--u,1.25) * 11.5px);color:var(--text-muted);margin-top:10px;line-height:1.6">Einfügen: Die Karte hängt an der Maus, Ebenen landen RELATIV zu deiner aktuellen Etage (EG-Inhalt → komplett auf E1). Portal-Einstellungen werden mitgenommen. Mehrfaches Stempeln möglich.</div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function importMapReplace(){
  const o=window.__importObj;document.getElementById('mapImportDlg').remove();
  applyState(o);
}
function importMapPaste(){
  const o=window.__importObj;document.getElementById('mapImportDlg').remove();
  const minF=Math.min(...o.boxes.map(b=>b.floor||0));
  const minX=Math.min(...o.boxes.map(b=>b.x)),minY=Math.min(...o.boxes.map(b=>b.y));
  const ids=new Set(o.boxes.map(b=>b.id));
  const pconf={};Object.entries(o.portalConfig||{}).forEach(([k,v])=>{pconf[k]=v});
  const clip={
    boxes:o.boxes.map(b=>({device:b.device,recipe:b.recipe,count:b.count,dx:b.x-minX,dy:b.y-minY,origId:b.id,zone:b.zone,floor:(b.floor||0)-minF})),
    conns:(o.connections||[]).filter(c=>ids.has(c.from)&&ids.has(c.to)).map(c=>({from:c.from,to:c.to,fromPort:c.fromPort||0,toPort:c.toPort||0,waypoints:c.waypoints?JSON.parse(JSON.stringify(c.waypoints)):undefined})),
    furnaceLinks:o.boxes.filter(b=>b.furnaceId&&ids.has(b.furnaceId)).map(b=>({boxId:b.id,furnaceId:b.furnaceId})),
    liftLinks:o.boxes.filter(b=>b.liftPartner&&ids.has(b.liftPartner)).map(b=>({boxId:b.id,partnerId:b.liftPartner})),
    portalConfig:pconf
  };
  startPasteMode(clip,'Karte „'+(o.name||'Import')+'“','keep');
}
function importJSON(){
  const inp=document.createElement('input');inp.type='file';inp.accept='.json';
  inp.onchange=e=>{
    const reader=new FileReader();
    reader.onload=ev=>{
      try{
        const d=JSON.parse(ev.target.result);
        if(boxes.length>0){offerMapImport(d,String((e.target.files[0]&&e.target.files[0].name)||'Import').replace(/\.json$/i,''));return} // V1.9.28: fragen statt still ersetzen
        boxes=d.boxes||[];connections=d.connections||[];nextId=Math.max((d.nextId||0),(boxes.length?Math.max(...boxes.map(b=>b.id)):0)+1); // V1.9.44: ID-Kollision-Schutz auch hier
        portalConfig=d.portalConfig||{};zoneConfig=d.zoneConfig||{};centerPos=d.centerPos||null;centerLabel=d.centerLabel||'Zentrum';
        // Remove old center marker
        const oldCm=document.getElementById('centerMarker');if(oldCm)oldCm.remove();
        clearBoxesDOM();
        boxes.forEach(b=>makeBoxEl(b));
        drawConns();refreshAll();saveStorage();renderCenter();
        fitViewToBoxes();
        if(d.name)alert('Blueprint geladen: '+d.name+(d.desc?'\n'+d.desc:''));
      }catch(err){alert('Fehler: '+err.message)}
    };reader.readAsText(e.target.files[0]);
  };inp.click();
}

// Wird eine Quelle von mehreren Zielen gleichzeitig beliefert (Fan-Out), wird
// ihr Output GERECHT AUFGETEILT auf alle Abnehmer, die dieses Material auch
// wirklich brauchen - vorher wurde jedem Abnehmer der VOLLE Output der Quelle
// angerechnet, als hätte jeder sie exklusiv für sich. Das führte dazu, dass
// bei mehreren Abnehmern an derselben Quelle die Unterversorgung nicht erkannt
// wurde (z.B. 1 Schleifer-Pool beliefert 4 Montagetische -> jeder "sah" den
// vollen Pool, obwohl er sich sein Viertel teilen muss).
function portCountOf(b){ // V1.9.15: EINE Port-Zahl für Anzeige UND Linien-Andocken · V1.9.27: Senken NICHT mehr selbst wachsen lassen (User-Wunsch) — Slots folgen NUR der Anzahl, wie bei allen Maschinen. Mehrere Linien dürfen weiterhin auf denselben Eingang laufen (Merge).
  return Math.min(b.count||1,10);
}
function effOutSum(boxId,mat){ // V1.9.55: was TRÄGT wirklich auf den Lines (Pool ÷ Bedarf ÷ Band-Cap)
  return connections.filter(c=>c.from===boxId).reduce((s,c)=>s+effLineVal(c,mat),0);
}
// ===== V1.9.55: BAND-CAP-MOTOR — "1 Line = 1 Band = max beltCapacity/Min" =====
// SPIEL-REGELN (User-vermessen 17.09.2026 + Steam/Codex): Ein Förderband trägt
// 60/Min (Basis; Logistics-Efficiency steigert bis 240). Maschinen im Fenster-
// Kasten bleiben EINZELMASCHINEN (Eingang je Port = 1 Maschine), aber ihr
// Ausgang POOLT sich auf alle gezogenen Lines — EINE Line aus einem ×8-Kasten
// trägt max 60/Min, NICHT 80 (User-Messung: "dies line gibt mir 60").
// Maschinen-Ziele ziehen nur ihren Bedarf (voller Maschinen-Bedarf — keine
// Rückkopplung, sonst doppeldrosselt der Motor), Senken/Lifts nehmen alles bis
// zur Band-Cap. Was nicht abfließt = RÜCKSTAU (reine ANZEIGE: Potenzial −
// Fluss, ohne Feedback). Der LIFT selbst ist uncapped (User: "oben 80 an,
// unten 80 raus") — nur die Bänder hinein zählen.
let __portSupply=null,__psStamp=0,__computingPS=false;
function machineRunFactor(a,count){ // gemittelter Lauf-Faktor aller Maschinen (Input-Seite, je Port 1 Maschine)
  const n=Math.min(count||1,10);
  let s=0;for(let p=0;p<n;p++)s+=(a.ratio[p]===undefined?1:a.ratio[p]);
  const rest=Math.max(0,(count||1)-n);
  return (s+rest*(a.legacy===undefined?1:a.legacy))/Math.max(1,count||1);
}
function computePortSupplies(){
  if(__computingPS)return;__computingPS=true;
  __psStamp++;
  const map={},inIdx={};
  connections.forEach(c=>{(inIdx[c.to]=inIdx[c.to]||[]).push(c)});
  boxes.forEach(b=>{map[b.id]={ratio:[],legacy:1}});
  __portSupply={stamp:__psStamp,map};
  for(let pass=0;pass<4;pass++){
    boxes.forEach(b=>{
      const d=DEVICES[b.device];if(!d)return;
      if(d.isPortal||d.isSink||d.isFurnace||d.isLift||d.isInfo)return; // liefern immer voll
      const r=d.recipes[b.recipe];if(!r)return;
      const ins=Object.entries(r.in||{});if(ins.length===0)return;
      const n=Math.min(b.count||1,10);
      const myIn=inIdx[b.id]||[];
      // V1.9.62: POOL + FILL-ORDER — ALLE Lines der Box (über alle Ports) speisen die
      // Maschinen GEMEINSAM (Spiel-Messung 18.09.: 1 Säge + 3 Schleifer + 6 Fertigungs-
      // einheiten = sauber — 3 Bänder à 10 versorgen alle 6). Das Material füllt die
      // Maschinen der REIHE NACH: D×count Maschinen-Äquivalente laufen, Maschine p mit
      // clamp(D*count − p, 0, 1) — „N von M versorgt" bleibt die ehrliche Anzeige,
      // und „Ausgang i trägt Maschine i" (V1.9.59) bleibt erhalten.
      let D=1;
      ins.forEach(([m,q])=>{
        const needOne=calcRate(q,r.time);if(needOne<=0.05)return;
        const needed=needOne*(b.count||1);
        let prov=0;myIn.forEach(c=>{if(d.fertIn&&FERTILIZERS.has(m)){FERTILIZERS.forEach(f=>prov+=effLineVal(c,f))}else prov+=effLineVal(c,m)});
        D=Math.min(D,Math.min(1,prov/needed));
      });
      const ratio=[];
      for(let p=0;p<n;p++)ratio.push(Math.max(0,Math.min(1,D*(b.count||1)-p)));
      map[b.id]={ratio,legacy:D};
    });
  }
  __computingPS=false;
}
function targetWant(c,mat){ // V1.9.55: wie viel kann das Ziel über DIESE Line abnehmen? (Bedarf oder Cap)
  const tb=boxes.find(x=>x.id===c.to);if(!tb)return 0;
  const td=DEVICES[tb.device];if(!td)return 0;
  const liq=LIQUID_MATERIALS.has(mat); // V1.9.56: FLÜSSIGKEITEN reisen per ROHR — kein 60er Band-Cap (Codex: fruit_wine/brandy/aqua_vitae/quicksilver/fairy_tear = Liquid; Spiel-Patch Jan 2026: Liquid-Deckel 6.000/Min aufgehoben)
  const cap=liq?LIQUID_LINE_CAP:beltCapacity;
  if(td.isLift||td.isFurnace)return cap; // nehmen alles an — das BAND/ROHR ist der Limiter (User: Line zum Lift = 60)
  if(td.isSink)return sinkAccepts(td,mat)?cap:0; // Lager/Verkauf: alles, was rein passt
  if(td.isPortal)return td.portalType==='sell'?cap:0; // Versand-Portal nimmt alles
  if(td.fertIn)return FERTILIZERS.has(mat)?beltCapacity:0; // Samen per Hand, Dünger per Band (fest)
  const tr=td.recipes[tb.recipe];
  if(!tr||!tr.in||tr.in[mat]===undefined)return 0; // Ziel braucht dieses Material nicht
  const needOne=calcRate(tr.in[mat],tr.time);if(needOne<=0.05)return cap;
  // V1.9.62: POOL AM EINGANG (Spiel-Messung 18.09.: „1 Säge + 3 Schleifer + 6 Fertigungs-
  // einheiten laufen sauber durch" — 3 Bänder à 10 versorgen ALLE 6 Maschinen):
  // Die Box nimmt über JEDE Line bis zu ihrem GESAMT-Bedarf ab; alle Maschinen teilen sich
  // alles, was ankommt. Ports sind Andock-Stellen, KEINE Maschinen-Zuteilung mehr.
  // Ersetzt das V1.9.36-Modell „Eingang i = Maschine i" (war Konsistenz-Schluss, nie gemessen).
  // Der Band-Cap bleibt der Limiter je Line (Shaper Jupiter: 120/Min = 2 Bänder nötig).
  return Math.min(needOne*(tb.count||1),cap);
}
function sourcePool(b,mat){ // V1.9.55: effektiver Gesamt-Ausgang der Quelle für mat (VOR der Line-Verteilung)
  const fd=DEVICES[b.device];if(!fd)return 0;
  if(fd.isInfo)return 0;
  if(fd.isPortal){const pc=portalConfig[b.id]||{item:'logs',rate:1};if(pc.item!==mat)return 0;return (pc.batch||1)*pc.rate}
  const fr=getEffectiveRecipe(b);
  if(!fr.out||fr.out[mat]===undefined)return 0;
  if(fd.isSink||fd.isLift)return fr.out[mat]; // Lager/Lift: was angekommen ist, steht wieder ab (Lift: "unten 80 raus")
  const perMachine=calcRate(fr.out[mat],fr.time);
  const a=__portSupply&&__portSupply.map[b.id];
  if(!a)return perMachine*(b.count||1);
  return perMachine*(b.count||1)*machineRunFactor(a,b.count||1); // V1.9.55b: Input-seitiger Lauf-Faktor — Rückstau ist reine ANZEIGE (v−ls im Fenster)
}
function poolServe(T,caps){ // Wasserfüllung: jeder bekommt λ, bis sein Cap greift; Σ min(cap,λ)=T, Rest = Rückstau
  if(T<=0)return caps.map(()=>0);
  let lo=0,hi=T;
  for(let i=0;i<50;i++){const mid=(lo+hi)/2;let s=0;for(let k=0;k<caps.length;k++)s+=Math.min(caps[k],mid);if(s<T-1e-12)lo=mid;else hi=mid}
  const lam=(lo+hi)/2;
  return caps.map(cp=>Math.round(Math.min(cp,lam)*1e6)/1e6); // V1.9.55c: 1e-6-Rundung — Float-Kaskaden (0.99999999 je Hop) killten Ampel & Anzeige
}
function isPushTarget(c,mat){ // V1.9.55c: Senken/Lifts/Öfen/Beete/Verkauf nehmen ALLES an (bis Cap) — Maschinen ziehen nur ihren Bedarf
  const tb=boxes.find(x=>x.id===c.to);if(!tb)return false;
  const td=DEVICES[tb.device];if(!td)return false;
  if(td.isLift||td.isFurnace||td.isSink)return true;
  if(td.isPortal)return td.portalType==='sell';
  if(td.fertIn)return FERTILIZERS.has(mat);
  return false;
}
function effLineVal(c,mat){ // V1.9.55: EFFEKTIVER Wert EINER Line — Pool ÷ Ziel-Bedarf ÷ Band-Cap (60/Min)
  const v0=lineValRaw(c,mat);
  if(v0<=0)return 0;
  // V1.9.56: MERGE-GERECHTIGKEIT — mehrere Lines auf DEMSELBEN Maschinen-Eingang dürfen ZUSAMMEN nur
  // den Bedarf DIESER EINEN Maschine abnehmen. Vorher trug jede Line das VOLLE Bedarfspotenzial:
  // 4 fette Bänder auf 1 Eingang lieferten scheinbar 4x Bedarf und die over-Regel (prov>3x Bedarf)
  // schaltete die perfekt versorgte Line fälschlich auf GELB. Die Maschine nimmt nur ihren Bedarf —
  // der Rest staut an der QUELLE (RÜCKSTAU-Anzeige), er kommt nicht an.
  const tb=boxes.find(x=>x.id===c.to);
  if(!tb)return v0;
  const td=DEVICES[tb.device];
  if(!td||td.isLift||td.isFurnace||td.isSink||td.isPortal||td.fertIn)return v0; // nur Maschinen-Ziele ziehen begrenzt
  const tr=td.recipes[tb.recipe];
  if(!tr||!tr.in||tr.in[mat]===undefined)return v0;
  const needOne=calcRate(tr.in[mat],tr.time);
  if(needOne<=0.05)return v0;
  // V1.9.62: POOL — ALLE Lines auf die BOX (über alle Ports) teilen sich den GESAMT-Bedarf.
  // Vorher: Gruppe je Port = 1 Maschine — 3 Bänder à 10 an ×6-Box lieferten nur 15 statt 30.
  const grp=connections.filter(x=>x.to===c.to&&!isPushTarget(x,mat)&&targetWant(x,mat)>0);
  if(grp.length<=1)return v0;
  const gcap=needOne*(tb.count||1);
  let tot=0;grp.forEach(x=>{tot+=(x===c?v0:lineValRaw(x,mat))});
  if(tot<=gcap+1e-6)return v0;
  return Math.round(v0*gcap/tot*1e6)/1e6; // fairer Anteil — Summe über die Gruppe = exakt der Bedarf
}
function lineValRaw(c,mat){ // V1.9.59: 1 AUSGANG = 1 MASCHINE — Pool nur noch für Lager/Lift/Portal
  if(!c)return 0; // defensive: tote/gelöschte Line
  const fb=boxes.find(x=>x.id===c.from);if(!fb)return 0;
  const fd=DEVICES[fb.device];if(!fd)return 0;
  if(!__portSupply||__portSupply.stamp!==__psStamp)computePortSupplies();
  if(targetWant(c,mat)<=0)return 0; // Ziel nimmt dieses Material über diese Line nicht ab
  const srcIsLift=!!fd.isLift; // Lift-ABGÄNGE: uncapped (User-Messung: "unten 80 raus")
  // V1.9.59 "1 AUSGANG = 1 MASCHINE" (User-Messung 18.09.: 3 Schleifer in EINER Box
  // an 1 Ausgang -> Lager = 10/Min, NICHT 30!): Eine Maschinen-Box ist ein FENSTER
  // mit N Einzelmaschinen — Ausgang i trägt NUR Maschine i (perMachine x Lauf-Faktor).
  // Lines vom SELBEN Ausgang teilen sich diese EINE Maschine. Nur echte Einzel-Boxen
  // (Lager/Lift/Portal) poolen weiterhin ihren Gesamt-Bestand.
  if(!fd.isSink&&!srcIsLift&&!fd.isPortal&&!fd.isInfo){
    const frM=getEffectiveRecipe(fb);
    if(!frM||!frM.out||frM.out[mat]===undefined)return 0;
    const perMachine=calcRate(frM.out[mat],frM.time);
    if(perMachine<=0.0001)return 0;
    const port=c.fromPort||0;
    const nP=Math.min(fb.count||1,10);
    const aM=__portSupply.map[fb.id];
    let rf=1;
    if(aM)rf=port<nP?(aM.ratio[port]===undefined?1:aM.ratio[port]):(aM.legacy===undefined?1:aM.legacy);
    const capM=LIQUID_MATERIALS.has(mat)?LIQUID_LINE_CAP:beltCapacity;
    const pool=port<nP?perMachine*rf:perMachine*(fb.count||1)*rf; // Legacy-Port (alte Saves): Pool aller
    if(pool<=0.0001)return 0;
    const grp=connections.filter(x=>x.from===fb.id&&(x.fromPort||0)===port&&targetWant(x,mat)>0);
    const caps=grp.map(x=>Math.min(targetWant(x,mat),capM));
    const pv=poolServe(pool,caps);
    const gi=grp.indexOf(c);
    return gi>=0?pv[gi]:0;
  }
  const pulls=[],pullCaps=[],pushes=[],pushCaps=[];
  connections.forEach(x=>{
    if(x.from!==fb.id)return;
    const wv=targetWant(x,mat);if(wv<=0)return;
    if(isPushTarget(x,mat)){pushes.push(x);pushCaps.push(srcIsLift?Infinity:wv)}
    else{pulls.push(x);pullCaps.push(wv)}
  });
  const T=sourcePool(fb,mat);
  if(T<=0.0001)return 0;
  // V1.9.55c: ZUERST die Maschinen (ihr Band staucht sich im Spiel — sie bekommen Vorrang),
  // DER REST geht an Senken/Lifts. Sonst klaut eine Lager-Line den Maschinen den Pool
  // und ehrlich grüne Säge->Tiegel-Linien werden gelb (regall-R4/setup1-Fund).
  const pv=poolServe(T,pullCaps);
  const servedPull=pv.reduce((s,v)=>s+v,0);
  const rest=Math.max(0,T-servedPull);
  const sv=poolServe(rest,pushCaps);
  const i=pulls.indexOf(c);
  if(i>=0)return pv[i];
  const j=pushes.indexOf(c);
  return j>=0?sv[j]:0;
}
function fairShareFromSource(fromId,mat,conn){ // V1.9.55: EINE Formel für alle — der Band-Cap-Motor entscheidet
  if(conn)return effLineVal(conn,mat);
  return connections.filter(x=>x.from===fromId).reduce((s,x)=>s+effLineVal(x,mat),0);
}

function getEffectiveRecipe(b){
  const d=DEVICES[b.device];
  // Aufzug: Output = alles, was beim Partner-Rechteck ankommt (aggregiert,
  // pro Minute). Lift-ABGÄNGE ohne Band-Limit (User: "unten 80 raus") — die
  // Bänder HINEIN cappen bei 60/Min. Rekursionsschutz bei Lift-an-Lift-Ketten.
  if(d.isLift){
    if(getEffectiveRecipe._vis===undefined)getEffectiveRecipe._vis=new Set();
    const vis=getEffectiveRecipe._vis;
    if(vis.has(b.id))return{in:{},out:{},time:60,note:'Aufzug (Zirkel)'};
    vis.add(b.id);
    const out={};
    try{
      const partner=boxes.find(x=>x.id===b.liftPartner);
      if(partner){
        connections.filter(c=>c.to===partner.id).forEach(c=>{
          const sfb=boxes.find(x=>x.id===c.from);
          if(!sfb)return;
          const sfr=getEffectiveRecipe(sfb);
          Object.entries(sfr.out||{}).forEach(([m,q])=>{
            out[m]=(out[m]||0)+effLineVal(c,m); // V1.9.54: je LINE EFFEKTIV — vorher Potenzial×count JE LINE: 3 Lines vom ×8-Kasten zeigten 240 statt 30 (User-Fund)
          });
        });
      }
    }finally{vis.delete(b.id)}
    return{in:{},out,time:60,note:'Aufzug: '+Object.keys(out).length+' Materialien'};
  }
  if(d.isSink){
    if(getEffectiveRecipe._vis===undefined)getEffectiveRecipe._vis=new Set();
    const vis=getEffectiveRecipe._vis;
    if(vis.has(b.id))return{in:{},out:{},time:60,note:'Senke (Zirkel)'};
    vis.add(b.id);
    const inAgg={};
    const rej={};
    try{
      connections.filter(c=>c.to===b.id).forEach(c=>{
        const sfb=boxes.find(x=>x.id===c.from);
        if(!sfb)return;
        const sfr=getEffectiveRecipe(sfb);
        Object.keys(sfr.out||{}).forEach(m=>{
          if(!sinkAccepts(d,m)){rej[m]=1;return} // V1.3.2: passt nicht in dieses Lager
          inAgg[m]=(inAgg[m]||0)+effLineVal(c,m); // V1.9.54: effektive Ankunft — upstream-Ausfälle zählen sofort
        });
      });
    }finally{vis.delete(b.id)}
    // V1.2: Lager ist ein PUFFER — gibt alles wieder aus (Ein- UND Ausgang).
    // Verkaufsraum ist eine Endstation — nur Eingang, nichts verlässt ihn.
    const out=(d.sinkType==='storage')?Object.assign({},inAgg):{};
    const rejN=Object.keys(rej);
    return{in:inAgg,out,time:60,note:(d.sinkType==='storage'?(d.liquidOnly?'Kolben-Lager (Flüssigkeits-Puffer)':'Lager (Puffer)'):'Verkaufsraum')+(rejN.length?' — ⛔ gehört hier nicht rein: '+rejN.map(matName).join(', ')+(d.liquidOnly?' → Kolben nimmt NUR Flüssigkeiten!':' → Flüssigkeit gehört ins Kolben-Lager (Rohr)!'):'')};
  }
  let r=d.recipes[b.recipe];
  if(!r){ // V1.3.14: alter/ungültiger Rezept-Schluessel -> erstes Rezept, statt Absturz
    b.recipe=Object.keys(d.recipes)[0];
    r=d.recipes[b.recipe]||{in:{},out:{},time:60,note:'—'};
  }
  if(d.isPortal){
    const pc=portalConfig[b.id]||{item:'logs',rate:1};
    if(d.portalType==='buy'){
      r={in:{},out:{},time:60,note:`Kaufe ${matName(pc.item)} extern`};
      r.out[pc.item]=(pc.batch||1)*pc.rate;
    } else {
      r={in:{},out:{},time:60,note:`Verkaufe/versende ${matName(pc.item)}`};
      r.in[pc.item]=pc.rate;
    }
  }
  return r;
}

// Gruppiert Maschinen in unabhängige Produktionsketten (Zusammenhangskomponenten
// über die Verbindungen) und ordnet jede Kette in Stufen (Ebenen), damit die
// Roadmap parallele Ketten getrennt und in der richtigen Reihenfolge zeigt,
// statt einer bedeutungslosen flachen Liste.
function buildRoadmapChains(){
  const parent={};
  boxes.forEach(b=>{const dd=DEVICES[b.device];if(dd&&dd.isInfo)return;parent[b.id]=b.id;}); /* V1.9.35 */
  function find(x){while(parent[x]!==x){parent[x]=parent[parent[x]];x=parent[x];}return x;}
  function union(a,b){const ra=find(a),rb=find(b);if(ra!==rb)parent[ra]=rb;}
  connections.forEach(c=>{if(parent[c.from]!==undefined&&parent[c.to]!==undefined)union(c.from,c.to);});
  const groups={};
  boxes.forEach(b=>{if(parent[b.id]===undefined)return;const r=find(b.id);(groups[r]=groups[r]||[]).push(b);});

  return Object.values(groups).map(compBoxes=>{
    const ids=new Set(compBoxes.map(b=>b.id));
    const edges=connections.filter(c=>ids.has(c.from)&&ids.has(c.to));
    const inDeg={}; compBoxes.forEach(b=>inDeg[b.id]=0);
    edges.forEach(c=>inDeg[c.to]++);
    const levelOf={};
    let queue=compBoxes.filter(b=>inDeg[b.id]===0).map(b=>b.id);
    queue.forEach(id=>levelOf[id]=0);
    const remaining=new Map(compBoxes.map(b=>[b.id,inDeg[b.id]]));
    let head=0;
    while(head<queue.length){
      const id=queue[head++];
      edges.filter(c=>c.from===id).forEach(c=>{
        levelOf[c.to]=Math.max(levelOf[c.to]||0,levelOf[id]+1);
        remaining.set(c.to,remaining.get(c.to)-1);
        if(remaining.get(c.to)===0){queue.push(c.to);}
      });
    }
    // Falls ein Zyklus existiert (z.B. versehentliche Rückkopplung), landen
    // übrige Knoten sicher in der letzten bekannten Stufe statt in einer Endlosschleife.
    compBoxes.forEach(b=>{if(levelOf[b.id]===undefined)levelOf[b.id]=Math.max(0,...Object.values(levelOf).map(v=>v||0));});
    const maxLevel=Math.max(0,...compBoxes.map(b=>levelOf[b.id]));
    const levels=[];
    for(let l=0;l<=maxLevel;l++) levels.push(compBoxes.filter(b=>levelOf[b.id]===l));
    return {boxes:compBoxes, levels};
  }).sort((a,b)=>b.boxes.length-a.boxes.length);
}

function showRoadmap(){
  const ov=document.createElement('div');ov.className='roadmap';ov.id='rmDlg';

  let html=`<div class="rbox">
    <button class="rclose" onclick="document.getElementById('rmDlg').remove()">✕ Schließen</button>
    <h2>📋 Produktions-Roadmap</h2>`;

  if(boxes.length===0){
    html+=`<div style="color:var(--text-secondary);text-align:center;padding:40px;font-weight:500">Füge zuerst Maschinen hinzu um eine Roadmap zu sehen.</div>`;
  } else {
    html+=`<div class="rauto">
      <button onclick="autoChain()">🔗 Alle automatisch verketten</button>
      <button onclick="document.getElementById('rmDlg').remove();showRoadmap()" style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:8px;color:var(--text-secondary);padding:8px 16px;font-weight:600">🔄 Aktualisieren</button>
    </div>`;

    const chains=buildRoadmapChains();
    chains.forEach((chain,ci)=>{
      html+=`<div style="margin:18px 0 8px;padding-bottom:4px;border-bottom:1px solid rgba(48,54,61,.4);font-size:13px;color:var(--lift-accent);font-weight:700">🔗 Kette ${ci+1} <small style="color:var(--text-muted);font-weight:400">(${chain.boxes.length} Maschine${chain.boxes.length===1?'':'n'})</small></div>`;
      chain.levels.forEach((level,li)=>{
        html+=`<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:stretch">`;
        level.forEach(b=>{
          const d=DEVICES[b.device];
          const r=getEffectiveRecipe(b);
          const outRate={}, inRate={};
          Object.entries(r.out).forEach(([m,q])=>{outRate[m]=calcRate(q,r.time)*b.count});
          Object.entries(r.in).forEach(([m,q])=>{inRate[m]=calcRate(q,r.time)*b.count});
          const outgoing=connections.filter(c=>c.from===b.id);
          const onFurnace=b.furnaceId&&boxes.find(fb=>fb.id===b.furnaceId);
          html+=`<div class="rchain" style="flex:1;min-width:230px;border-left-color:${outgoing.length>0?'#34d399':'#fbbf24'}">
            <div class="rname">${d.de} <small style="color:var(--text-muted);font-weight:400">(${b.device}) ×${b.count}</small></div>
            <div class="rrecipe">${recName(b.recipe)}</div>
            ${onFurnace?`<div style="font-size:calc(var(--u,1.25) * 11px);color:var(--accent-yellow);margin:2px 0;font-weight:500">🔥 steht auf ${DEVICES[onFurnace.device].de}</div>`:''}
            <div class="riom">
              <div class="rin">📥 Input: ${Object.entries(inRate).map(([m,v])=>`${matName(m)}: ${v.toFixed(1)}/Min`).join(', ')||'Keiner'}</div>
              <div class="rout">📤 Output: ${Object.entries(outRate).map(([m,v])=>`${matName(m)}: ${v.toFixed(1)}/Min`).join(', ')||'Keiner'}</div>
            </div>
            <div class="rinfo">${r.note||''}</div>
          </div>`;
        });
        html+=`</div>`;
        if(li<chain.levels.length-1) html+=`<div class="rconn">⬇️</div>`;
      });
    });

    // Summary
    let total={};
    boxes.forEach(b=>{
      const r=getEffectiveRecipe(b);
      Object.entries(r.out).forEach(([m,q])=>{
        total[m]=(total[m]||0)+calcRate(q,r.time)*b.count;
      });
    });
    html+=`<div class="rsummary">
      <h3>📊 Gesamtproduktion (per Minute)</h3>`;
    Object.entries(total).sort((a,b)=>b[1]-a[1]).forEach(([m,v])=>{
      html+=`<div class="ritem"><span>${matName(m)}</span><span class="rval">${v.toFixed(1)}/Min</span></div>`;
    });
    html+=`</div>`;
  }

  html+=`</div>`;
  ov.innerHTML=html;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}

function autoChain(){
  // Verbindet Maschinen NUR dort automatisch, wo ein Output einer Maschine
  // tatsächlich als Input einer anderen gebraucht wird und dieser Input noch
  // nicht schon von einer anderen Maschine beliefert wird. Bestehende manuelle
  // Verbindungen bleiben erhalten (vorher wurden ALLE Verbindungen gelöscht und
  // stur nach Erstellungsreihenfolge verkettet, unabhängig davon ob das
  // überhaupt inhaltlich zusammenpasste).
  if(boxes.length<2){alert('Mindestens 2 Maschinen nötig!');return;}
  let added=0;
  boxes.forEach(from=>{
    const rFrom=getEffectiveRecipe(from);
    const outputs=Object.keys(rFrom.out||{});
    if(outputs.length===0)return;
    boxes.forEach(to=>{
      if(to.id===from.id)return;
      const rTo=getEffectiveRecipe(to);
      const needs=Object.keys(rTo.in||{});
      const matchedMats=outputs.filter(m=>needs.includes(m));
      if(matchedMats.length===0)return;
      if(connections.find(c=>c.from===from.id&&c.to===to.id))return;
      // Wird eines der passenden Materialien schon von woanders beliefert? Dann nichts tun.
      const stillOpen=matchedMats.some(m=>!connections.some(c=>{
        if(c.to!==to.id)return false;
        const src=boxes.find(bb=>bb.id===c.from);
        if(!src)return false;
        return Object.keys(getEffectiveRecipe(src).out||{}).includes(m);
      }));
      if(!stillOpen)return;
      connections.push({from:from.id,to:to.id});
      added++;
    });
  });
  refreshAll();drawConns();saveStorage();
  const rm=document.getElementById('rmDlg');if(rm)rm.remove();
  alert(added>0?`${added} neue automatische Verbindung(en) erstellt.`:'Keine neuen Verbindungen gefunden - entweder ist schon alles verbunden, oder kein offener Output passt zu einem offenen Input.');
  showRoadmap();
}

// ===== ZOOM =====
const UI_MIN=1,UI_MAX=2,UI_STEP=0.05; // V1.9.44: STUFENLOSE Größe — der USER entscheidet selbst (100–200 % in 5 %-Schritten), nicht mehr nur 4 Festwerte
function uiSizeIn(){setUIScale(UI_SCALE+UI_STEP)}
function uiSizeOut(){setUIScale(UI_SCALE-UI_STEP)}
function setUIScale(s){ // V1.9.44: wie Zoom: +/− bis es PASST — bleibt gespeichert. „Ich bin nicht die Mehrheit" (User) — jeder stellt selbst ein
  s=Math.round(Math.max(UI_MIN,Math.min(UI_MAX,s))*20)/20;
  UI_SCALE=s;
  document.body.style.setProperty('--u',s);
  try{localStorage.setItem('afe_uisz',String(s))}catch(e){}
  const ul=document.getElementById('uiLbl');if(ul)ul.textContent=Math.round(s*100)+'%';
  const hl=document.getElementById('hubUiLbl');if(hl)hl.textContent=Math.round(s*100)+'%';
  const ef=document.getElementById('eflyUi');if(ef)ef.textContent=Math.round(s*100)+'%';
  refreshAll();drawConns();
}
function zoomIn(){const r=canvasArea.getBoundingClientRect();setZoom(zoomLevel+ZOOM_STEP,r.width/2,r.height/2)}
function zoomOut(){const r=canvasArea.getBoundingClientRect();setZoom(zoomLevel-ZOOM_STEP,r.width/2,r.height/2)}
function zoomReset(){const r=canvasArea.getBoundingClientRect();setZoom(1,r.width/2,r.height/2)}
function setZoom(v, mx, my){
  mx=mx||0; my=my||0;
  const oldZ=zoomLevel;
  const newZ=Math.max(ZOOM_MIN,Math.min(ZOOM_MAX,v));
  if(newZ===oldZ)return;
  // Calculate world point under mouse before zoom
  const worldX=(mx+canvasArea.scrollLeft)/oldZ;
  const worldY=(my+canvasArea.scrollTop)/oldZ;
  zoomLevel=newZ;
  try{localStorage.setItem('afe_zoom2',String(zoomLevel))}catch(e){} // V1.4.3: Zoom separat zur UI-Größe merken
  const _zl=document.getElementById('zoomLevel');if(_zl)_zl.textContent=Math.round(zoomLevel*100)+'%';
  const bc=document.getElementById('boxesContainer');
  bc.style.transform=`scale(${zoomLevel})`;
  // Adjust scroll to keep point under mouse
  canvasArea.scrollLeft=worldX*zoomLevel-mx;
  canvasArea.scrollTop=worldY*zoomLevel-my;
  resizeCanvas();
  drawConns();
}

// ===== CENTER MARKER =====
function toggleCenter(){
  if(centerPos){
    // Remove center
    centerPos=null;
    const cm=document.getElementById('centerMarker');
    if(cm)cm.remove();
    saveStorage();
    return;
  }
  // Place center at middle of visible area
  const r=canvasArea.getBoundingClientRect();
  centerPos={
    x:(canvasArea.clientWidth/2+canvasArea.scrollLeft)/zoomLevel,
    y:(canvasArea.clientHeight/2+canvasArea.scrollTop)/zoomLevel
  };
  renderCenter();
  saveStorage();
}

function renderCenter(){
  let cm=document.getElementById('centerMarker');
  if(!cm){
    cm=document.createElement('div');
    cm.id='centerMarker';
    cm.className='center-marker';
    document.getElementById('boxesContainer').appendChild(cm);
  }
  if(!centerPos){cm.remove();return}
  cm.style.left=(centerPos.x-100)+'px';
  cm.style.top=(centerPos.y-100)+'px';
  cm.innerHTML=`<span class="clbl">⊕ ${centerLabel}</span>`;
  cm.style.display='';
}

function setCenterLabel(lbl){centerLabel=lbl;renderCenter();saveStorage()}

function showFloors(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='floorDlg';
  const fmap={};
  boxes.forEach(b=>{
    const f=b.floor||0;
    if(!fmap[f])fmap[f]={mach:0,lifts:0};
    const d=DEVICES[b.device];
    if(d&&d.isInfo)return; /* V1.9.35: Infobox ist keine Maschine */
    if(d&&d.isLift)fmap[f].lifts++;else fmap[f].mach+=(b.count||1);
  });
  const maxF=Math.max(currentFloor,...Object.keys(fmap).map(Number));
  let rows='';
  for(let f=maxF;f>=0;f--){
    const s=fmap[f]||{mach:0,lifts:0};
    const active=f===currentFloor;
    rows+=`<div style="display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid ${active?'var(--accent-blue)':'var(--border)'};border-radius:10px;margin-bottom:8px;background:${active?'rgba(88,166,255,.08)':'var(--bg-primary)'}">
      <div style="font-size:22px;width:36px;text-align:center">${f===0?'🏢':'⬆️'}</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:14px">${f===0?'Erdgeschoss':'Etage '+f} ${active?'<span style="color:var(--accent-blue);font-size:calc(var(--u,1.25) * 12px)">● du bist hier</span>':''}</div>
        <div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-secondary)">${s.mach} Maschinen · ${s.lifts} Aufzug${s.lifts===1?'':'e'}${s.mach===0&&s.lifts===0?' <i>(leer)</i>':''}</div>
      </div>
      <button onclick="jumpToFloor(${f});document.getElementById('floorDlg').remove()" style="padding:9px 16px;background:${active?'var(--bg-tertiary)':'#238636'};color:${active?'var(--text-secondary)':'#fff'};border:1px solid ${active?'var(--border)':'#238636'};border-radius:8px;cursor:pointer;font-size:12.5px;font-weight:700">${active?'● aktuell':'Hin ↗'}</button>
    </div>`;
  }
  ov.innerHTML=`<div class="box" style="width:480px">
    <h3>🏬 Etagen-Übersicht (dein Turm)</h3>
    <p style="font-size:12.5px;color:var(--text-secondary);margin-bottom:14px">Alle Stockwerke auf einen Blick — per Klick hin springen. Baue jede Etage wie eine eigene Ebene und verbinde sie mit 🛗 Aufzügen.</p>
    ${rows}
    <button onclick="document.getElementById('floorDlg').remove()" style="width:100%;margin-top:6px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);padding:9px;font-weight:600;cursor:pointer">✕ Schließen (ESC)</button>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
const APP_VERSION='1.9.66';
const GITHUB_URL=''; // V1.9.5: Hier deine GitHub-Projekt-Adresse eintragen — erscheint bei „Fehler melden“ und im Rechtliches-Block
function showBetaInfo(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='betaDlg';
  ov.innerHTML=`<div class="box" style="width:min(760px,94vw)">
    <h3>🧪 Beta-Version ${APP_VERSION}</h3>
    <div style="font-size:12.5px;color:var(--text-secondary);line-height:1.7">
      <b style="color:var(--accent-yellow)">Warum „Beta“?</b><br>
      Der Planer wird live gegen das echte Spiel geprüft (Early Access — das Spiel selbst ändert sich noch).
      Wenn etwas nicht stimmt: <b>melde es einfach</b> — jede Rückmeldung macht das Tool besser.
      <div style="margin-top:10px">📖 Details, Messwerte &amp; alle Änderungen: <b>readme.md / documentation.md</b> (im Download) bzw. CHANGELOG im Projekt.</div>
      <div style="margin-top:8px">🏷️ Rezept-Namen weichen ab? → <b>🧰 Werkzeuge → 🏷️ Namen prüfen</b>.</div>
      <div style="margin-top:8px;color:var(--text-muted);font-size:calc(var(--u,1.25) * 12.5px)">☕ Am meisten hilft: <b>das Spiel kaufen &amp; gut bewerten</b> — das hilft den Machern.</div>
    </div>
    <div class="cc"><button onclick="document.getElementById('betaDlg').remove()">Schließen</button></div>
  </div>`;
  document.body.appendChild(ov);
}
function showHelp(anchor){ // V1.9.34: optional direkt zu einem Abschnitt springen
  const ov=document.createElement('div');ov.className='dlg';ov.id='helpDlg';
  const sec=(t,b)=>`<div style="margin-bottom:16px"><div style="font-weight:700;font-size:15px;color:var(--accent-blue);margin-bottom:5px">${t}</div><div style="font-size:14px;color:var(--text-secondary);line-height:1.7">${b}</div></div>`;
  ov.innerHTML=`<div class="box" style="width:min(1100px,94vw)">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
      <h3 style="margin:0">❓ Hilfe — so funktioniert der Planer</h3><span style="flex:1"></span>
      <button onclick="document.getElementById('helpDlg').remove()" title="Schließen" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);padding:6px 12px;cursor:pointer;font-weight:700">✕</button>
    </div>
    <div style="font-size:calc(var(--u,1.25) * 12px);color:var(--accent-yellow);margin:-4px 0 8px">🧪 Wird live gegen das Spiel geprüft — Fehler einfach melden (Infos: Klick auf 🧪 oben).</div>
    ${sec('🏗️ Maschinen bauen',
      'Neu hier? 🚀 <b>Erste Schritte</b> in der 🧰-Tür (Werkzeuge) lädt eine fertige Beispiel-Kette: Portal → Säge → 3 Schleifer → Verkauf.<br>An jeder Maschine: <b>ℹ️</b> zeigt eine Kurz-Erklärung direkt neben der Box.<br>Unten in der Leiste eine Kategorie anklicken → Maschine wählen → sie hängt an der Maus → auf der Karte ablegen. Unten in der Box: <b>+ / −</b> für die Stückzahl (z.&nbsp;B. ×3 Schleifer = 1 Klick statt 3 Boxen).<br>Infos & Werkzeuge öffnen als <b>frei verschiebbare Fenster</b> (📊 🗂️ 🧰) — zuklappbar beim Bauen, jederzeit wieder da.')}
    ${sec('📝 Infoboxen — eigene Schilder',
      'Kategorie <b>🛗 Logistik &amp; Aufzug</b> → <b>📝 Infobox</b>: eine Box OHNE Funktion — per <b>✏️</b> (oben rechts in der Box oder ✏️ Text bearbeiten) schreibst du deinen eigenen Text hinein, auch mehrzeilig. Für <b>Abteilungs-Schilder je Stockwerk</b> (z. B. hier ist meine Abteilung Holz) oder Erklärungen vor Maschinen-Gruppen. Der gestrichelte Rand zeigt: kein Einfluss auf Bilanz, Statistik oder Verbindungen — die Infobox lässt sich nicht anschließen und zählt nirgends mit. Vorbild: die beschreibbaren Schilder im Spiel (deren Größe ist noch unvermessen).')}
    ${sec('🗺️ Fabrikgelände & Platz',
      'Jede Etage ist ein <b>endliches Fabrikgelände</b> — der gestrichelte Rand zeigt dir, wo es endet. Nach <b>rechts und unten wächst es automatisch mit</b>, sobald du dort baust; nur oben/links liegt der Fabrikrand (dorthin kann nicht gebaut werden — der Planer stoppt sauber am Rand). Faustregel: Pro Etage reichen grob <b>100–200 Maschinen</b> (je nach Anordnung). Wird es eng, ist der Weg wie im Spiel: <b>höhere Etage bauen + 🛗 Aufzug</b> dorthin — der Turm-Workflow (Etage kopieren, eine hoch, einfügen) macht das schnell.')}
    ${sec('🔬 Messwerte & Forschung (Labor-Logbuch)',
      `Alles was wir im echten Spiel gemessen haben — in den Boxen nur die Kurzfassung, ℹ️ öffnet je Maschine das Detail-Fenster:<br><br>
      <div id="hilfe-ofen"><b>🏭 Öfen & Feuer</b><br>${MACHINE_RESEARCH['Blast Furnace']}</div><br>
      <div id="hilfe-saege"><b>🪚 Kreissage</b><br>${MACHINE_RESEARCH['Table Saw']}</div><br>
      <div id="hilfe-tiegel"><b>⚱️ Schmelztiegel & Stapeltiegel</b><br>${MACHINE_RESEARCH['Crucible']}<br>${MACHINE_RESEARCH['Stackable Crucible']}</div><br>
      <div id="hilfe-rennen"><b>⚙️ Schleifer-Wettrennen</b><br>${MACHINE_RESEARCH['Grinder']}<br>${MACHINE_RESEARCH['Enhanced Grinder']}</div>`)}
    ${sec('⚖️ Über & Rechtliches',
      'Dieser Planer ist ein <b>inoffizielles, kostenloses Fan-Tool</b> zur Planung von Produktionsketten — <b>kein Produkt des Spiel-Herstellers</b> und in keiner Weise mit ihm verbunden. Alle Spiel-Werte nach bestem Wissen, ohne Gewähr. Lizenz: <b>MIT (Open Source, gratis)</b> — kein Verkauf, keine Werbung, keine Spenden im Tool.'+(GITHUB_URL?`<br>Projekt & Fehler melden: <b>${GITHUB_URL}</b>`:'<br>Projekt-Link folgt mit der Veröffentlichung auf GitHub.'))}
    ${sec('📋 Kopieren & Einfügen (Stempel-Modus)',
      '<b>Strg+C</b> kopiert die markierte Maschine(n) — <b>Strg+V</b> nimmt die Kopie an die Maus. <b>Jeder Klick stempelt eine weitere Kopie</b> an diese Stelle (für 3–4 gleiche Linien), <b>ESC oder rechte Maustaste</b> beendet. Ist beim Tragen etwas im Weg: <b>einfach bei aufgelegter Kopie die Karte ziehen</b> — die Kopie bleibt an der Maus, du verlierst nichts. Zonen: 🗂️ Zonen verwalten → <b>📋 Einfügen (Stempel)</b> — die Zone wird als eingefrorener Snapshot gestempelt und wächst dadurch NICHT mit jedem Einfügen (Ebenen landen RELATIV zu deiner aktuellen Etage — ein EG-Inhalt auf E1 gestempelt steht dann komplett auf E1). Strg+V fügt auf der aktuellen Etage ein (Turm-Workflow: Etage bauen, kopieren, eine hoch, einfügen).<br>🛒 <b>Portal = Durchsatz-Modell:</b> Die eingestellte Rate (z.&nbsp;B. 1 Stamm/Min) ist eine Annahme — im Spiel liefert das Portal nur, wenn 200 Gold je Stamm ankommen (Geldzufluss!). Ab <b>75 % Auslastung</b> wird die Portal-Linie deshalb <b>gelb</b>: Mehrere Maschinen an einem Portal brauchen Anlauf (Sägen × 3 Stämme Puffer) und echten Geldzufluss. Profi-Build: 1 Portal direkt je Maschine.<br>Die 🧰-Tür in der Maschinen-Leiste zeigt bei markierten Maschinen direkt die passenden Aktionen (Kopieren / Zur Zone / Löschen) — und sonst ALLES: Status, Vorlagen, Codex, Karte leeren … Die <b>Entf</b>-Taste löscht die Markierung.')},
    ${sec('🔗 Verbindungen ziehen',
      'Vom <b style="color:var(--accent-green)">grünen Kreis</b> (Ausgang, rechte Seite einer Box) mit gedrückter Maus zum <b style="color:var(--accent-blue)">blauen Kreis</b> (Eingang, linke Seite) der Zielmaschine ziehen. <b>Farben wie im Spiel:</b> Grün = voll versorgt · Gelb = läuft nur eingeschränkt (Teillast, Band &gt; 60/Min oder Überschuss/Stau) · Rot = steht oder falsches Material. 🟡 Teillast heißt: Die Maschine arbeitet im Spiel, wartet aber zwischendurch — z.&nbsp;B. 1 Sägewerk an 4 Schleifer = nur 75&nbsp;%.')}
    ${sec('🔢 Anzahl = Maschinen = Anschlüsse',
      'Die Anzahl (×N) einer Maschine erzeugt <b>N Ein- und N Ausgänge</b> — eine Kreissage ×10 hat 10 Anschlüsse und wird entsprechend lang (ab 5 wächst die Box mit, 1 Feld je Anschluss). <b>Eine Linie darf mehrfach abzweigen</b> wie im Spiel: 1 Kreissage (30 Bretter/Min) versorgt fair 3 Schleifer (Zahnrad, je 10/Min) mit 100 %. Mehr Abnehmer als Ware → Teillast (im Spiel läuft die Verteilung dann schlecht). <b>Aufzug:</b> bleibt immer einzeln (rauf = einer, runter = ein zweiter), darf aber beliebig viele Linien haben. Maximum: 10 Maschinen pro Box.')}
    ${sec('✏️ Linien selbst ausrichten (Wegpunkte)',
      '<b>Doppelklick auf eine Linie</b> = blauer Punkt (Wegpunkt) wird eingesetzt. Punkt <b>ziehen</b> = Linie verbiegen. <b>Rechtsklick auf den Punkt</b> = Punkt löschen. <b>Rechtsklick auf die Linie</b> = ganze Verbindung löschen.')}
    ${sec('🛗 Etagen & Aufzug — Schritt für Schritt',
      '1. Baue unten (EG) deine Maschinen wie gewohnt.<br>'+
      '2. Links Kategorie <b>„🛗 Logistik &amp; Aufzug"</b> → <b>Aufzug</b> anklicken und neben deine Maschine stellen. Es entstehen <b>automatisch zwei Aufzugs-Boxen</b>: eine im EG, das Gegenstück eine Etage höher.<br>'+
      '3. Verbinde deine Maschine per Band mit dem <b>Aufzug im EG</b> (er nimmt alles an).<br>'+
      '4. Oben in der Leiste rechts <b>▲</b> drücken (oder <b>Bild↑</b>) → du siehst Etage 1 mit dem Gegenstück an derselben Stelle.<br>'+
      '5. Vom Gegenstück weiterverbinden zu den Maschinen der Etage. <b>Aufzüge haben kein Band-Limit!</b><br>'+
      '6. Zum Runterkommen: <b>🏢▼</b> / <b>Bild↓</b>. Alle Etagen zeigt <b>🏬</b>. Im Aufzug-Panel kannst du die Ziel-Etage ändern und direkt „dorthin springen".')}
    ${sec('🏢 Ganze Etagen kopieren (Turm-Workflow)',
      'Etage fertig bauen → Boxen per <b>Shift+Klick</b> oder Rahmen auswählen → <b>Strg+C</b> → mit 🏢▲ eine Etage höher → <b>Strg+V</b> = identisches Stockwerk (Aufzug-Paare werden mitverkoppelt).')}
    ${sec('🔥 Öfen',
      'Ofen platzieren → im Ofen-Panel per Dropdown Maschine wählen und <b>+ Hinzufügen</b> (oder Maschine auf Ofen ziehen). Der Ofen zählt <b>Fläche</b> (Steinofen 9, Hochofen 42; kleiner Tiegel 3, stapelbarer 4). Brennstoff per Band/Zuleitung in den Ofen — gemischte Brennstoffe werden addiert.')}
    ${sec('⌨️ Tastenkürzel',
      '<b>Bild↑/Bild↓</b> Etage wechseln · <b>E</b> English / <b>D</b> Deutsch (Namen) · ☀️🌙 Hell/Dunkel per Klick · <b>Shift+Klick</b> Mehrfachauswahl · <b>Strg+C/V</b> kopieren/einfügen · <b>ESC</b> Dialog schließen/Abbrechen · Mausrad Zoom · Leere Fläche ziehen = Karte schieben')}
    ${sec('☕ Unterstützen — freiwillig & kostenlos',
      'Dieses Tool bleibt für immer kostenlos, ohne Login, ohne Tracking, ohne Spenden. Wenn du es unterstützen magst: <b>kauf dir das Spiel und hinterlasse eine gute Bewertung</b> — das hilft den Machern am meisten. ❤️')}
    <button onclick="document.getElementById('helpDlg').remove()" style="width:100%;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);padding:9px;font-weight:600;cursor:pointer">✕ Schließen (ESC)</button>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
  if(anchor){const el=ov.querySelector('#'+anchor);if(el&&el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'start'})} // V1.9.34: direkt zum gewünschten Abschnitt
}
let __saveT=null;
function saveStorage(force){ // V1.9.44: gebündelt speichern — viele Aufrufe in 400 ms = EIN Schreibvorgang (Flüssigkeit)
  if(force===true){if(__saveT){clearTimeout(__saveT);__saveT=null}__saveNow();return}
  if(__saveT)return;
  __saveT=setTimeout(()=>{__saveT=null;__saveNow()},400);
}
function __saveNow(){
  __saveT=null;
  try{localStorage.setItem('afp',JSON.stringify({boxes,connections,nextId,portalConfig,centerPos,centerLabel,factoryEfficiency,beltCapacity,snapEnabled,zoneConfig}))}catch(e){} // V1.9.46: zoneConfig mit
  const st=document.getElementById('saveStamp');
  if(st&&boxes&&boxes.length>0){const t=new Date();st.textContent='💾 '+String(t.getHours()).padStart(2,'0')+':'+String(t.getMinutes()).padStart(2,'0')} // V1.9.44: „Sind meine Daten gespeichert?" — auf einen Blick
}
(function(){const ss=document.createElement('div');ss.id='saveStamp';ss.title='Auto-Speicherstand im Browser — 📁 speichern bleibt trotzdem der sichere Weg';ss.style.cssText='position:fixed;bottom:8px;right:12px;z-index:200;font-size:12px;color:var(--text-muted);pointer-events:none;opacity:.9';document.body.appendChild(ss)})();
setInterval(()=>{if(typeof boxes!=='undefined'&&boxes&&boxes.length>0)saveStorage()},45000); // V1.9.44: Auto-Sicherung alle 45 s (User-Fund: „einzelne Verbindungen weg nach Browser-Neustart")
window.addEventListener('beforeunload',()=>{if(typeof boxes!=='undefined'&&boxes&&boxes.length>0)saveStorage(true)}); // V1.9.44: und beim Schließen des Tabs sofort sichern
function loadStorage(){
  try{
    const d=JSON.parse(localStorage.getItem('afp'));
    if(d){
      const seen=new Set(); // V1.9.2: Doppelte IDs raus (Kollisions-Schutz alter Speicher)
      boxes=(d.boxes||[]).filter(b=>b&&typeof b.id==='number'&&!seen.has(b.id)&&seen.add(b.id));
      nextId=Math.max(d.nextId||1,boxes.length?Math.max(...boxes.map(b=>b.id+1)):1); // V1.9.2: immer HINTER den größten IDs
      connections=d.connections||[];portalConfig=d.portalConfig||{};zoneConfig=d.zoneConfig||{};centerPos=d.centerPos||null;centerLabel=d.centerLabel||'Zentrum';
      // V1.9.7: Karten-Rand-Fix — Boxen zu nah am oberen/linken Rand (oder negativ) wieder erreichbar machen
      let mnx=Infinity,mny=Infinity;
      boxes.forEach(b=>{if(typeof b.x==='number'&&b.x<mnx)mnx=b.x;if(typeof b.y==='number'&&b.y<mny)mny=b.y});
      connections.forEach(c=>(c.waypoints||[]).forEach(w=>{if(w.x<mnx)mnx=w.x;if(w.y<mny)mny=w.y}));
      if(mnx<600||mny<600){
        const dx=mnx<600?600-mnx:0,dy=mny<600?600-mny:0;
        boxes.forEach(b=>{b.x+=dx;b.y+=dy});
        connections.forEach(c=>(c.waypoints||[]).forEach(w=>{w.x+=dx;w.y+=dy}));
        if(centerPos){centerPos.x=(centerPos.x||0)+dx;centerPos.y=(centerPos.y||0)+dy;}
      }
      factoryEfficiency=d.factoryEfficiency||100;beltCapacity=d.beltCapacity||60;
      snapEnabled=d.snapEnabled!==undefined?d.snapEnabled:true;
      // V1.9.5: KEINE Inline-Styles mehr — sie haben die .on-Klasse dauerhaft übermalt (Magnet schien „nicht ausgehen zu können“)
      document.querySelectorAll('#boxesContainer .mbox').forEach(el=>el.remove()); // V1.9.1: alten DOM-Stand keinesfalls doppelt aufbauen
      boxes.forEach(b=>makeBoxEl(b));drawConns();refreshAll();renderCenter()}
  }catch(e){__afeErrors.push('Karte laden: '+(e&&e.message||e));userMsg('⚠️ Karte konnte nicht geladen werden — 🧰 → 🔍 Selbstdiagnose zeigt den Grund');}
}

// ============================================================
// RELEASE-UI: Hotbar, Werkzeuge, Speichern (File System Access),
// Zonen-Info-Fenster, Header einklappen — Alchemy Factory Editor
// ============================================================
const DEVICE_ICON={
 'Table Saw':'🪚','Stone Crusher':'🪨','Seed Plot':'🌱','Nursery':'🌿','World Tree Nursery':'🌳','Infobox':'📝',
 'Grinder':'⚙️','Enhanced Grinder':'🛠️','Extractor':'🫗','Refiner':'💎','Processor':'🔧','Assembler':'🪛',
 'Iron Smelter':'🔩','Crucible':'⚱️','Stackable Crucible':'🏺','Thermal Extractor':'🌡️','Paradox Crucible':'♾️',
 'Kiln':'🧱','Alembic':'⚗️','Athanor':'🔥','Advanced Alembic':'⚗️✨','Advanced Athanor':'🔥✨',
 'Stone Furnace':'🧱🔥','Blast Furnace':'🏭','Cauldron':'🍲','Blender':'🌀','Advanced Blender':'🌀✨',
 'Advanced Assembler':'🪛✨','Shaper':'📐','Advanced Shaper':'📐✨','Arcane Processor':'🧿','Arcane Shaper':'🔮',
 'Purchasing Portal':'🛒','Bank Portal':'🏦','Dispatch Portal':'📤','Lift':'🛗','Sales Room':'🏪','Storage':'📦','Steam Boiler':'♨️','Steam Heating Pad':'🧯','Erlenmeyer Flask':'🧪','Spherical Flask':'🫧','Trash Bin':'🗑️'
};
const HOTBAR_CATS=['raw','processing','heat','alchemy','advanced','relics','portals','logistics'];
// ============ V1.6.0: DER SCHLAUE MENU-HUB — eine Tür für alles, kontextbewusst ============
function openToolsHub(){
  closePicker();closeMachineHint();
  const old=document.getElementById('toolsHub');if(old){old.remove();return}
  const mp=document.createElement('div');mp.id='toolsHub';mp.className='machine-picker';
  const sel=selectedIds.size>0;
  const card=(icon,label,fn,sub)=>`<div class="mp-item" onclick="${fn}"><span class="ic">${icon}</span><span class="nm">${label}</span>${sub?`<span class="ht">${sub}</span>`:''}</div>`;
  mp.innerHTML=`<div class="mp-head"><h4>🧰 Werkzeuge & Fabrik</h4><span style="flex:1"></span>
    <button onclick="closeToolsHub()" style="padding:9px 16px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer;font-size:14px;font-weight:700">Menü schließen</button></div>
    <div class="mp-grid" style="max-height:52vh">
      ${sel?`<div style="grid-column:1/-1;font-weight:700;font-size:14px;color:var(--accent-green);margin:2px 0">✔ MARKIERT: ${selectedIds.size} Maschine(n) — was willst du tun?</div>
      ${card('📋','Kopieren','hubCopy()','Strg+V stempelt sie')}
      ${card('🗂️','Zur Zone machen','hubZone()','als Baugruppe')}
      ${card('🗑️','Auswahl löschen','hubDelSel()','Entf-Taste geht auch')}
      <div style="grid-column:1/-1;height:8px"></div>`:''}
      ${card('📊','Fabrik-Status','hubGo(\'toggleStatus\')','Bilanz aller Materialien')}
      ${card('🗂️','Zonen','hubGo(\'toggleZonePanel\')')}
      ${card('📦','Vorlagen','hubGo(\'showTemplates\')','auch eigene speichern')}
      ${card('🚀','Erste Schritte','hubGo(\'showOnboarding\')','mit Beispiel-Kette')}
      ${card('📖','Rezept-Codex','hubGo(\'showCodex\')')}
      ${card('📋','Roadmap','hubGo(\'showRoadmap\')')}
      ${card('🎯','Rückwärts-Rechner','hubGo(\'showReverseCalculator\')')}
      ${card('📝','Spickzettel','hubGo(\'showCheatSheet\')')}
      ${card('❓','Hilfe','hubGo(\'showHelp\')')}
      ${card('🏷️','Namen prüfen','hubGo(\'showNameEditor\')')}
      ${card('⚙️','Fabrik-Einstellungen','hubGo(\'showFactorySettings\')')}
      ${card('🗑️','Karte leeren','hubClearMap()','fragt 1× nach')}
      ${card('🔍','Selbstdiagnose','hubGo(\'runSelfTest\')','Löschen live prüfen')}
      <div style="grid-column:1/-1;font-weight:700;font-size:14px;color:var(--accent-blue);margin:8px 0 2px">ANSICHT — Zoom aktuell: ${Math.round(zoomLevel*100)}%</div>
      <div style="grid-column:1/-1;display:flex;align-items:center;gap:10px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:12px;padding:10px 14px">
        <b style="color:var(--accent-blue)">Größe</b>
        <button onclick="uiSizeOut()" style="width:42px;height:38px;font-size:20px;font-weight:800;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;cursor:pointer">－</button>
        <b id="hubUiLbl" style="min-width:58px;text-align:center;font-size:16px">${Math.round(UI_SCALE*100)}%</b>
        <button onclick="uiSizeIn()" style="width:42px;height:38px;font-size:20px;font-weight:800;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;cursor:pointer">＋</button>
        <span style="font-size:12.5px;color:var(--text-muted)">du entscheidest — 100–200 %, bleibt gespeichert</span>
      </div>
      ${card('🔍＋','Hinein zoomen','hubZoom(0.1)')}
      ${card('🔍－','Heraus zoomen','hubZoom(-0.1)')}
      ${card('↺','Zoom 100 %','hubGo(\'zoomReset\')')}
      ${card('🧲','Raster-Einrasten','hubSnap()','an/aus')}
    </div>`;
  document.body.appendChild(mp);
}
function closeToolsHub(){const h=document.getElementById('toolsHub');if(h)h.remove()}
function hubGo(fn){closeToolsHub();try{window[fn]()}catch(e){}}
function hubCopy(){closeToolsHub();copySelection()}
function hubZone(){closeToolsHub();createZoneFromSelection()}
function hubDelSel(){closeToolsHub();deleteSelection()}
function hubClearMap(){closeToolsHub();clearAll()}
function hubSize(s){setUIScale(s)} // V1.6.1: Hub bleibt offen — Größe wechseln und direkt sehen
function hubZoom(d){const r=canvasArea.getBoundingClientRect();setZoom(zoomLevel+d,r.width/2,r.height/2)}
function hubSnap(){toggleSnap()}
function deleteSelection(){ // V1.9.0: kugelsicher — kein Stehenbleiben, falls eine Box beim Entfernen stolpert
  if(selectedIds.size===0){if(selectedConn!=null){userMsg('💡 Entf löscht Maschinen — für die LINIE nimm unten 🗑️ Linie löschen')}else{userMsg('💡 Entf: Nichts markiert — zuerst eine Maschine anklicken')}return;}
  const ids=new Set([...selectedIds]);
  selectedIds.forEach(id=>{const b=boxes.find(x=>x.id===id);if(b&&b.liftPartner)ids.add(b.liftPartner)}); // Partner-Hälfte mit raus
  // V1.9.44: BULK-Löschen — EINMAL filtern + EINMAL speichern statt pro Box Voll-Refresh + Voll-Save
  // (vorher: 20 Boxen löschen = 20× alles neu rechnen = die 5–10 Sekunden Wartezeit, User-Fund)
  boxes=boxes.filter(b=>!ids.has(b.id));
  boxes.forEach(b=>{if(b.furnaceId&&ids.has(b.furnaceId))delete b.furnaceId});
  connections=connections.filter(c=>!ids.has(c.from)&&!ids.has(c.to));
  ids.forEach(id=>{const el=document.getElementById('box-'+id);if(el)el.remove();delete portalConfig[id]});
  selectedIds=new Set();selectedConn=null;
  if(typeof applySelectionClasses==='function')applySelectionClasses();
  if(typeof updateSelInfo==='function')updateSelInfo();
  refreshAll();drawConns();saveStorage(true);
  syncDOM(); // V1.9.2: Daten<->DOM garantiert 1:1
  userMsg('🗑️ '+ids.size+' Maschine(n) gelöscht'); // V1.9.3: immer hörbares Feedback
}
// ============ V1.7.0: SCHLAUE SEITEN-ICONS — Aufklappmenüs nach LINKS ============
let edgeFlyOpen=null;
function toggleEdgeFly(name,btn){
  if(edgeFlyOpen===name){closeEdgeFly();return}
  closeEdgeFly();
  const fly=document.createElement('div');fly.className='edge-fly';fly.id='edgeFly';
  if(name==='ui'){
    fly.innerHTML=`<div class="fly-row" style="align-items:center;gap:8px">
      <button onclick="uiSizeOut()" style="font-size:21px;font-weight:800;width:46px">－</button>
      <b id="eflyUi" style="min-width:62px;text-align:center;font-size:16px">${Math.round(UI_SCALE*100)}%</b>
      <button onclick="uiSizeIn()" style="font-size:21px;font-weight:800;width:46px">＋</button>
      <button onclick="setUIScale(1.25)" style="font-weight:700">↺ 125 %</button>
    </div><div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-muted);text-align:center;line-height:1.6">Echte Größe, 100–200 % in 5 %-Schritten — bleibt gespeichert.<br>Karte bleibt gleich.</div>`;
  } else if(name==='zoom'){
    fly.innerHTML=`<div style="text-align:center;font-weight:700;font-size:15px;padding:4px" id="eflyZoom">${Math.round(zoomLevel*100)} %</div>
    <div class="fly-row">
      <button onclick="edgeZoom(-0.1)">－</button>
      <button onclick="edgeZoom(0.1)">＋</button>
      <button onclick="edgeZoomTo(1)">100 %</button>
      <button onclick="edgeZoomFit()">⛶ Alles</button>
    </div><div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-muted);text-align:center">Mausrad zoomet auch</div>`;
  } else if(name==='del'){
    const n=selectedIds.size;
    fly.innerHTML=`<button onclick="closeEdgeFly();deleteSelection()" style="${n===0?'opacity:.45;cursor:default':''}">🗑️ Auswahl löschen${n>0?' ('+n+')':''}</button>
    <button onclick="closeEdgeFly();clearAll()" style="color:var(--accent-red)">🧹 Ganze Karte leeren</button>
    <div style="font-size:calc(var(--u,1.25) * 12.5px);color:var(--text-muted);text-align:center">${n===0?'Nichts markiert — Box anklicken oder Shift+Klick für mehrere':'Entf-Taste löscht die Markierung auch'}</div>`;
  } else if(name==='info'){
    const st=document.getElementById('statBar'),ti=document.getElementById('topInfo');
    fly.innerHTML=`<div style="font-size:calc(var(--u,1.25) * 12px);color:var(--text-muted);font-weight:700">FABRIK-MELDUNG</div>
    <div class="fly-info">${(st&&st.textContent)||'Bereit'}</div>
    ${(ti&&ti.textContent)?`<div style="font-size:calc(var(--u,1.25) * 12px);color:var(--text-muted);font-weight:700;margin-top:4px">HINWEIS</div><div class="fly-info">${ti.textContent}</div>`:''}
    <button onclick="closeEdgeFly();toggleStatus()" style="margin-top:4px">📊 Großer Status</button>`;
  }
  document.body.appendChild(fly);
  const r=btn.getBoundingClientRect();
  fly.style.left=''+Math.max(8,r.left-fly.offsetWidth-12)+'px';
  fly.style.top=''+Math.min(r.top,window.innerHeight-fly.offsetHeight-8)+'px';
  edgeFlyOpen=name;
  setTimeout(()=>document.addEventListener('mousedown',function h(e){if(!fly.contains(e.target)&&e.target!==btn){closeEdgeFly();document.removeEventListener('mousedown',h)}}),0);
}
function closeEdgeFly(){const f=document.getElementById('edgeFly');if(f)f.remove();edgeFlyOpen=null}
function edgeUIScale(s){setUIScale(s);
  document.querySelectorAll('#edgeFly [data-u]').forEach(b=>b.classList.toggle('active-ui',parseFloat(b.dataset.u)===s));}
function edgeZoom(d){const r=canvasArea.getBoundingClientRect();setZoom(zoomLevel+d,r.width/2,r.height/2);
  const z=document.getElementById('eflyZoom');if(z)z.textContent=Math.round(zoomLevel*100)+' %';}
function edgeZoomTo(v){const r=canvasArea.getBoundingClientRect();setZoom(v,r.width/2,r.height/2);
  const z=document.getElementById('eflyZoom');if(z)z.textContent=Math.round(zoomLevel*100)+' %';}
function edgeZoomFit(){closeEdgeFly();fitViewToBoxes()}
let selectedConn=null; // V1.9.0: markierte Linie — die Leiste unten wird deren Menü
let selectedWaypoint=null; // V1.9.46: markierter Linien-Punkt (Weiche setzen / Punkt löschen)
let zoneLabelHits=[]; // V1.9.48: Klick-Flächen der Zonen-Labels (Welt-Koordinaten, gefüllt beim Zeichnen)
let zoneLabelDrag=null; // V1.9.48: {zn,moved,lx,ly} — Shift-Ziehen = Label-Position, Klick = Bearbeiten
let zoneMoveDrag=null; // V1.9.61: {zn,moved,lx,ly,boxes,start,ways} — Ziehen verschiebt die GANZE Zone
let zoneConfig={}; // V1.9.46: Zonen-Rahmen — {zonenName: {name, color}}
let __connSeq=0;
function connId(c){if(!c.id){c.id='c'+(++__connSeq);while(connections.some(x=>x!==c&&x.id===c.id))c.id='c'+(++__connSeq)}return c.id} // V1.9.46: stabile Linien-IDs für Weichen-Verweise
function selectConn(idx){
  selectedConn=idx;
  selectedIds=new Set(); // Box-Kontext ablösen
  if(typeof applySelectionClasses==='function')applySelectionClasses();
  updateSelInfo();
}
function ctxConnColor(ev){if(selectedConn!=null)showConnColorDialog(selectedConn,ev||{clientX:innerWidth-420,clientY:240})}
function ctxDeleteLine(){
  if(selectedConn==null)return;
  connections.splice(selectedConn,1);
  selectedConn=null;selectedWaypoint=null;
  updateSelInfo();refreshAll();drawConns();saveStorage();
}
function ctxInfo(){const b=boxes.find(x=>selectedIds.has(x.id));if(b)showMachineHint(b.id,{clientX:window.innerWidth-460,clientY:220})}
function ctxDuplicate(){copySelection();if(clipboardBoxes)startPasteMode(clipboardBoxes,'Kopie')} // V1.8.0: sofort an die Maus
function ctxCopy(){copySelection()}
function ctxZone(){createZoneFromSelection()}
function ctxDelete(){deleteSelection()}
function toggleMenuInfo(){ // V1.9.47: Titel-Button = Link — Infos öffnen sich als Fenster ÜBER dem Menü (statt die Leiste zu verbreitern)
  const ex=document.getElementById('menuInfoPop');
  if(ex){ex.remove();return}
  const hb=document.getElementById('hotbar');if(!hb)return;
  const pop=document.createElement('div');pop.id='menuInfoPop';pop.className='menu-info-pop';
  let html='';
  const nm2=b=>b?((DEVICES[b.device]&&DEVICES[b.device].de)||b.device):'?';
  if(connecting){
    const cb=boxes.find(x=>x.id===connecting.boxId);
    const fr=cb?getEffectiveRecipe(cb):null;
    const mk=fr?Object.keys(fr.out||{})[0]:null;
    const nL=mk?connections.filter(x=>x.from===connecting.boxId&&(x.fromPort||0)===(connecting.portIdx||0)).length:0;
    html=`<b>${connecting.branch?'🔀 Weiche':'🔗 Linie'} — ${nm2(cb)} · Ausgang ${((connecting.portIdx||0)+1)}</b>`;
    if(mk&&cb)html+=`<div>▶ ${matName(mk)}: insgesamt <b>${(calcRate(fr.out[mk],fr.time)*(cb.count||1)).toFixed(1)}/Min</b>${nL?` · schon ${nL} Linie(n) daraus`:''}</div>`;
    if(connecting.branch)html+=`<div class="mip-hint">🔀 Klicke das ZIEL DIREKT an (nicht zurück zum Punkt!) — die Linie startet am Abzweig-Punkt. Der Ausgang teilt sich fair: 2 Linien = 50/50.</div>`;
    else html+=`<div class="mip-hint">Mehrere Ziele nacheinander anklicken = Kette (der Ausgang bleibt aktiv).</div>`;
    html+=`<div class="mip-hint">Ziel anklicken · auf die BOX setzen · oder NEBEN den Eingang zeigen (Magnet \u{1F9F2}) — ESC / Rechtsklick = beenden</div>`;
  } else if(selectedConn!=null&&selectedIds.size===0){
    const c=connections[selectedConn];
    if(c){
      const fb=boxes.find(b=>b.id===c.from),tb=boxes.find(b=>b.id===c.to);
      const fr=fb?getEffectiveRecipe(fb):null;
      const mk=fr?Object.keys(fr.out||{})[0]:null;
      const nL=mk?connections.filter(x=>x.from===c.from&&targetWant(x,mk)>0).length:1;
      html=`<b>🔗 ${nm2(fb)} → ${nm2(tb)}</b>`;
      if(mk&&fb){const lv=effLineVal(c,mk);const T=sourcePool(fb,mk);const lcap=LIQUID_MATERIALS.has(mk)?LIQUID_LINE_CAP:beltCapacity;html+=`<div>▶ ${matName(mk)}: <b>${lv.toFixed(1)}/Min auf DIESER Linie</b> · Pool ${T.toFixed(1)}/Min auf ${nL} Line(s) · ⚡ Cap ${lcap}/Min je Line${(lv>=lcap-0.05&&T>lcap+0.5)?' — <b style="color:var(--accent-yellow)">VOLL, weitere Line nötig!</b>':''}</div>`;}
      html+=`<div class="mip-hint">Doppelklick auf die Linie = Punkt setzen · Punkt anklicken = 🔀 Weiche & ✖️ löschen · Punkte verschieben = ziehen</div>`;
    }
  } else if(selectedIds.size>0){
    const first=boxes.find(b=>selectedIds.has(b.id));
    if(first){
      const fd=DEVICES[first.device];
      const rr=getEffectiveRecipe(first);
      const q=first.count||1;
      const outs=Object.entries(rr.out||{}).map(([m,v])=>`▶ ${matName(m)} ${(calcRate(v,rr.time)*q).toFixed(1)}/Min`).join('<br>')||'—';
      const ins=Object.entries(rr.in||{}).map(([m,v])=>`📥 ${matName(m)} ${(calcRate(v,rr.time)*q).toFixed(1)}/Min`).join('<br>')||'—';
      html=`<b>${DEVICE_ICON[first.device]||'🔧'} ${fd?fd.de:first.device}${q>1?' ×'+q:''}</b>`;
      if(fd&&fd.isSink)html+=`<div>📥 <b>Bekommt:</b><br>${ins}</div><div class="mip-hint">Alles, was hier ankommt${fd.sinkType==='sales'?' (und verkauft wird)':''} — Lager/Verkauf stellen nichts her und brauchen nichts.</div>`;
      else if(fd&&fd.isLift)html+=`<div>${outs!=='—'?'▶ Gibt weiter:<br>'+outs+'<br><br>':''}🛗 Transporteur zwischen 2 Etagen — untere Hälfte = EINGANG, obere = AUSGANG. Ein Lift rauf, zweiter runter.</div><div class="mip-hint">⚡ JE Line max <b>${beltCapacity}</b>/Min (auch hinein) — der Lift selbst gibt alles weiter. ℹ️ in der Box zeigt Details.</div>`; // V1.9.61: Lift-Titel-Info war LEER (User-Fund) — Zahl als <b>-Fragment (I18N)
      else if(fd&&fd.isInfo)html+=`<div>📝 Beschriftungsschild — reiner Text, keine Funktion, keine Anschlüsse, zählt nicht in die Bilanz.</div><div class="mip-hint">✏️ in der Box schreibt den Text (mehrzeilig erlaubt).</div>`;
      else if(fd&&fd.isSteamHeat)html+=`<div>🧯 Dampf-Heizung — ersetzt den Ofen: Dampfkessel per ROHR anschließen (60 Dampf/std = 12 Heat, Platte 3×3, max 2 Maschinen)</div><div class="mip-hint">Rohre sind praktisch unbegrenzt (≈ 6.000/Min) — ℹ️ zeigt Details.</div>`;
      else if(fd&&fd.isFurnace)html+=`<div>🔥 Heiz-Gerät — stellt selbst nichts her: Schmelztiegel oben draufstellen (Fläche beachten).</div><div class="mip-hint">Brennstoff per Line · Grundverbrauch <b>${first.device==='Stone Furnace'?'5':'8'}</b> P/Sek auch ohne Maschinen · ℹ️ zeigt alle Messwerte.</div>`;
      else if(first.device==='Thermal Extractor')html+=`<div>🌡️ Thermo-Extraktor — hitzebetriebenes Gerät (braucht 80 Heat/Sek), Rezepte noch nicht vollständig bekannt (Platzhalter)</div>`;
      else if(first.device==='Knowledge Altar')html+=`<div>📜 Wissensaltar — Rezepte noch nicht vollständig bekannt (Platzhalter) — das Wiki ist lückenhaft</div>`;
      else html+=`<div>${outs}</div><div>${ins}</div>`;
      if(selectedIds.size>1)html+=`<div class="mip-hint">+${selectedIds.size-1} weitere Maschine(n) markiert — ziehen verschiebt alle.</div>`;
    }
  }
  if(!html)return;
  pop.innerHTML=html;
  document.body.appendChild(pop);
  const hr=hb.getBoundingClientRect();
  pop.style.left=Math.max(8,Math.min(window.innerWidth-pop.offsetWidth-8,hr.left))+'px';
  pop.style.bottom=(window.innerHeight-hr.top+10)+'px';
  setTimeout(()=>document.addEventListener('mousedown',function h(e){if(!pop.contains(e.target)&&!hb.contains(e.target)){pop.remove();document.removeEventListener('mousedown',h)}}),0);
}
function startBranchFromWaypoint(){ // V1.9.46: WEICHE — vom markierten Punkt abzweigen. Ausgang teilt sich fair: 2 Linien = 50/50 (fairShareFromSource per-Port seit 1.9.39)
  if(selectedWaypoint==null||selectedConn==null)return;
  const parent=connections[selectedConn];
  if(!parent)return;
  connecting={boxId:parent.from,portIdx:parent.fromPort||0,downX:0,downY:0,dragged:true,done:false,branch:{parentId:connId(parent),wpIdx:selectedWaypoint.wpIdx}};
  selectedConn=null;selectedWaypoint=null;updateSelInfo();
  setConnModeBar();drawConns();
  userMsg('🔀 WEICHE setzen — ZIEL DIREKT anklicken, die Linie startet automatisch am Abzweig-Punkt (Magnet \u{1F9F2} hilft) · ESC / Rechtsklick = abbrechen'); // V1.9.48: klarer (User: „dachte ich müsste zum Punkt zurück")
}
function deleteWaypoint(){ // V1.9.46: Punkt entfernen — Weichen-Verweise rutschen mit / fallen auf Port-Anschluss zurück
  if(selectedWaypoint==null||selectedConn==null)return;
  const c=connections[selectedConn];
  if(!c||!c.waypoints)return;
  const del=selectedWaypoint.wpIdx;
  c.waypoints.splice(del,1);
  if(!c.waypoints.length)delete c.waypoints;
  const pid=connId(c);
  connections.forEach(x=>{
    if(x.branchParentId===pid){
      if(x.branchWpIdx===del){delete x.branchParentId;delete x.branchWpIdx}
      else if(x.branchWpIdx>del)x.branchWpIdx--;
    }
    if(x.mergeParentId===pid){ // V1.9.51: MERGE-Docks rutschen mit / fallen auf Port-Anschluss zurueck
      if(x.mergeWpIdx===del){delete x.mergeParentId;delete x.mergeWpIdx}
      else if(x.mergeWpIdx>del)x.mergeWpIdx--;
    }
  });
  selectedWaypoint=null;selectedConn=null;updateSelInfo();drawConns();saveStorage();
  userMsg('✖️ Punkt gelöscht — Weichen dieser Linie rutschen mit');
}
function findOrInsertMergeWaypoint(parent,mx,my){ // V1.9.51: MERGE — Dock-Punkt auf der Eltern-Linie: vorhandener Wegpunkt (bis 15px) ODER neuer Punkt an nächster Stelle
  const wps=getConnWaypoints(parent);
  for(let i=0;i<wps.length;i++){if(Math.sqrt((mx-wps[i].x)**2+(my-wps[i].y)**2)<15/zoomLevel)return i}
  const {outG:om,inG:im}=connGroups();
  const pts=connEndpoints(parent,om,im);
  if(!pts)return -1;
  const allPts=[{x:pts.sx,y:pts.sy},...wps,{x:pts.ex,y:pts.ey}];
  let bestSeg=0,bestT=0.5,bestDist=Infinity;
  for(let i=0;i<allPts.length-1;i++){
    const dx=allPts[i+1].x-allPts[i].x,dy=allPts[i+1].y-allPts[i].y;
    const len2=dx*dx+dy*dy;
    if(len2===0)continue;
    let t=((mx-allPts[i].x)*dx+(my-allPts[i].y)*dy)/len2;
    t=Math.max(0,Math.min(1,t));
    const dist=Math.sqrt((mx-(allPts[i].x+t*dx))**2+(my-(allPts[i].y+t*dy))**2);
    if(dist<bestDist){bestDist=dist;bestSeg=i;bestT=t}
  }
  const np={x:allPts[bestSeg].x+bestT*(allPts[bestSeg+1].x-allPts[bestSeg].x),y:allPts[bestSeg].y+bestT*(allPts[bestSeg+1].y-allPts[bestSeg].y)};
  const insertAt=bestSeg; // Segment i liegt zwischen allPts[i] und allPts[i+1] => neuer Wegpunkt an Index i (der Startpunkt zählt nicht mit)
  parent.waypoints.splice(insertAt,0,np);
  const pid=connId(parent);
  connections.forEach(x=>{ // bestehende Weichen/Merges dieser Line rutschen mit (wie beim Punkt-Löschen, nur vorwärts)
    if(x.branchParentId===pid&&x.branchWpIdx>=insertAt)x.branchWpIdx++;
    if(x.mergeParentId===pid&&x.mergeWpIdx>=insertAt)x.mergeWpIdx++;
  });
  return insertAt;
}
function cancelConnecting(){ // V1.9.47: Menü-Button zum Beenden des Linien-Modus
  if(!connecting)return;
  connecting=null;drawConns();updateStatus();updateSelInfo();
  canvasArea.style.cursor='';
  userMsg('🔗 Verbindungs-Modus beendet');
}
function renderHotbar(){
  const hb=document.getElementById('hotbar');if(!hb)return;
  if(connecting){ // V1.9.47: LINIEN-BAU-MENÜ — ab dem KLICK auf den Anschluss, nicht erst wenn die Line steht (User-Wunsch: „wie bei jedem Item")
    const cb=boxes.find(x=>x.id===connecting.boxId);
    const cn=cb?((DEVICES[cb.device]&&DEVICES[cb.device].de)||cb.device):'?';
    const isBr=!!connecting.branch;
    hb.innerHTML=`<button class="ctx-title" onclick="toggleMenuInfo()" title="Werte & Bedienung — Klick öffnet">${isBr?'🔀 Weiche':'🔗 Linie'} — ${cn} · Ausg. ${((connecting.portIdx||0)+1)}</button> <!-- V1.9.64: kurz statt CAPS-Langtitel (User: Button schluckte Text) -->
      <button class="ctxb red" onclick="cancelConnecting()" title="Verbindungs-Modus beenden (ESC / Rechtsklick)">✖️<small>Abbrechen</small></button>
      <span class="ctx-stats" style="max-width:none;white-space:nowrap">${isBr?'Ziel DIREKT anklicken — Line startet am Abzweig':'Ziel anklicken (\u{1F9F2} Magnet hilft) · bestehende Line = \u{1F517} Merge · ESC = beenden'}</span>`;
    return;
  }
  // V1.9.0: LINIEN-MENÜ — Linie anklicken genügt: Farbe ändern, Wegpunkte, löschen
  if(selectedConn!=null&&selectedIds.size===0){
    const c=connections[selectedConn];
    if(!c){selectedConn=null}
    else{
      const fb=boxes.find(b=>b.id===c.from),tb=boxes.find(b=>b.id===c.to);
      const nm=b=>b?((DEVICES[b.device]&&DEVICES[b.device].de)||b.device):'?';
      const wpsel=selectedWaypoint&&selectedWaypoint.connIdx===selectedConn; // V1.9.46: Punkt markiert?
      const fr0=fb?getEffectiveRecipe(fb):null;
      const mk=fr0?Object.keys(fr0.out||{})[0]:null;
      const nLines=connections.filter(x=>x.from===c.from&&(x.fromPort||0)===(c.fromPort||0)).length;
      hb.innerHTML=`<button class="ctx-title" onclick="toggleMenuInfo()" title="Linien-Werte & Bedienung — Klick öffnet">🔗 ${nm(fb)} → ${nm(tb)}</button>
        ${wpsel?`<button class="ctxb green" onclick="startBranchFromWaypoint()" title="Abzweigung von diesem Punkt: weitere Linie startet HIER — der Ausgang teilt sich fair (2 Linien = 50/50)">🔀<small>Weiche</small></button>
        <button class="ctxb red" onclick="deleteWaypoint()" title="Diesen Punkt entfernen — Weichen rutschen mit">✖️<small>Punkt weg</small></button>`
        :`<button class="ctxb dim" title="Weiche: erst einen PUNKT anklicken — oder Doppelklick auf die Linie = Punkt setzen">🔀<small>Weiche*</small></button>`}
        <button class="ctxb purple" onclick="ctxConnColor(event)" title="Eigene Farbe für diese Linie (Systemfarben bleiben reserviert)">🎨<small>Farbe</small></button>
        <button class="ctxb red" onclick="ctxDeleteLine()" title="Diese Linie komplett entfernen">🗑️<small>Linie löschen</small></button>
        <button class="ctxb" onclick="selectedConn=null;selectedWaypoint=null;updateSelInfo()" title="Zurück zum Maschinen-Menü (ESC)">✔️<small>Fertig</small></button>${c.mergeParentId?`<span class="ctx-stats" style="max-width:none;white-space:nowrap">🔗 Merge — aus der ${nm(boxes.find(b=>b.id===(connections.find(x=>x.id===c.mergeParentId)||{}).from))}-Line · Punkt zieht mit</span>`:''}`;
      return;
    }
  }
  // V1.8.0: Kontext-Menü — ist eine Box markiert, WIRD die Leiste deren Menü
  // (wie beim Vorbild: ein Klick auf die Box genügt, das Menü weiß, was geht)
  if(selectedIds.size>0){
    const sel=boxes.filter(b=>selectedIds.has(b.id));
    const first=sel[0],fd=first?DEVICES[first.device]:null;
    const mehr=sel.length>1?` <small style="color:var(--text-muted);font-weight:600">+${sel.length-1} weitere</small>`:'';
    hb.innerHTML=`<button class="ctx-title" onclick="toggleMenuInfo()" title="Werte dieser Maschine — Klick öffnet (▶ liefert / 📥 braucht)">${fd?DEVICE_ICON[first.device]||'🔧':'🔧'} ${fd?fd.de:'Box'}${(first.count||1)>1?' ×'+first.count:''}${mehr}</button>
      <button class="ctxb blue" onclick="ctxInfo()" title="Kurz-Erklärung dieser Maschine">💡<small>Info</small></button>
      <button class="ctxb green" onclick="ctxDuplicate()" title="Kopie an die Maus nehmen und per Klick stempeln">🧬<small>Duplizieren</small></button>
      <button class="ctxb blue" onclick="ctxCopy()" title="Kopieren — Strg+V stempelt sie dann">📋<small>Kopieren</small></button>
      <button class="ctxb purple" onclick="ctxZone()" title="Alle markierten Maschinen als Zone zusammenfassen">🗂️<small>Zone</small></button>
      <button class="ctxb red" onclick="ctxDelete()" title="Markierte Maschinen löschen (Entf-Taste)">🗑️<small>Löschen</small></button>
      <button class="ctxb" onclick="clearSelection()" title="Zurück zum Maschinen-Menü (ESC)">✔️<small>Fertig</small></button>`;
    return;
  }
  hb.innerHTML=HOTBAR_CATS.map(c=>
    `<button id="hb-${c}" onclick="togglePicker('${c}')" title="${CATEGORY_INFO[c].label}">${CATEGORY_INFO[c].icon}<small>${CATEGORY_INFO[c].label}</small></button>`
  ).join('')+'<button id="hb-tools" onclick="openToolsHub()" title="Werkzeuge & Fabrik — ALLES in einem Fenster" style="border-color:rgba(88,166,255,.5)">🧰<small>Werkzeuge</small></button>'; // V1.6.0: die eine Tür
}
let openCat=null;
function togglePicker(cat){
  if(openCat===cat){closePicker();return}
  openCat=cat;
  document.querySelectorAll('.hotbar button').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('hb-'+cat);if(btn)btn.classList.add('active');
  let mp=document.getElementById('machinePicker');
  if(!mp){mp=document.createElement('div');mp.id='machinePicker';mp.className='machine-picker';document.body.appendChild(mp)}
  mp.style.display='';
  mp.innerHTML=`<div class="mp-head"><h4>${CATEGORY_INFO[cat].icon} ${CATEGORY_INFO[cat].label}</h4>
    <input id="mpSearch" placeholder="🔍 Suche Gerät..." oninput="fillPicker('${cat}')">
    <button onclick="closePicker()" style="padding:8px 12px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);cursor:pointer;font-size:calc(var(--u,1.25) * 12.5px);font-weight:600">✕</button></div>
    <div class="mp-grid" id="mpGrid"></div>`;
  fillPicker(cat);
  setTimeout(()=>{const s=document.getElementById('mpSearch');if(s)s.focus()},50);
}
function fillPicker(cat){
  const grid=document.getElementById('mpGrid');if(!grid)return;
  const f=(document.getElementById('mpSearch')?.value||'').toLowerCase();
  let html='';
  Object.entries(DEVICES)
    .filter(([k])=>(DEVICE_CATEGORY[k]||'')===cat)
    .sort((a,b)=>(a[1].de||'').localeCompare(b[1].de||''))
    .forEach(([k,d])=>{
      if(f&&!(d.de.toLowerCase().includes(f)||k.toLowerCase().includes(f)))return;
      html+=`<div class="mp-item" onclick="closePicker();addBox('${k}')" title="${k}">
        <span class="ic">${DEVICE_ICON[k]||'🔧'}</span>
        <span class="nm">${devName(d,k)}</span>
        ${d.heat?`<span class="ht">🔥${d.heat}</span>`:''}
      </div>`;
    });
  grid.innerHTML=html||'<div style="grid-column:1/-1;color:var(--text-muted);text-align:center;padding:14px;font-size:calc(var(--u,1.25) * 12.5px)">Kein Treffer</div>';
}
function closePicker(){
  openCat=null;
  const mp=document.getElementById('machinePicker');if(mp)mp.style.display='none';
  document.querySelectorAll('.hotbar button').forEach(b=>b.classList.remove('active'));
}
// ---------- Werkzeuge-Dialog ----------
function showTools(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='toolsDlg';
  ov.innerHTML=`<div class="box" style="width:680px">
    <h3>🧰 Werkzeuge</h3>
    <div class="tools-grid">
      <button onclick="document.getElementById('toolsDlg').remove();showOnboarding()">🚀 Erste Schritte / Beispiel-Kette</button>
      <button onclick="document.getElementById('toolsDlg').remove();showNameEditor()">🏷️ Namen prüfen</button>
      <button onclick="document.getElementById('toolsDlg').remove();showTemplates()">📦 Vorlagen</button>
      <button onclick="document.getElementById('toolsDlg').remove();showZones()">🗂️ Zonen verwalten</button>
      <button onclick="document.getElementById('toolsDlg').remove();showCheatSheet()">📝 Spickzettel</button>
      <button onclick="document.getElementById('toolsDlg').remove();showFactorySettings()">⚙️ Fabrik-Einstellungen</button>
      <button onclick="document.getElementById('toolsDlg').remove();showCodex()">📖 Rezept-Codex</button>
      <button onclick="document.getElementById('toolsDlg').remove();showRoadmap()">📋 Roadmap</button>
      <button onclick="document.getElementById('toolsDlg').remove();showReverseCalculator()">🎯 Rückwärts-Rechner</button>
      <button onclick="document.getElementById('toolsDlg').remove();toggleCenter()">⊕ Zentrum ein/aus</button>
      <button onclick="document.getElementById('toolsDlg').remove();runSelfTest()">🔍 Selbstdiagnose</button>
      <button class="danger" onclick="document.getElementById('toolsDlg').remove();clearAll()">🗑️ Alles löschen</button>
      <button onclick="document.getElementById('toolsDlg').remove();showHelp()">❓ Hilfe & Tasten</button>
    </div>
    <button onclick="document.getElementById('toolsDlg').remove()" style="width:100%;margin-top:10px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);padding:9px;font-weight:600;cursor:pointer">✕ Schließen (ESC)</button>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
function toggleHeader(){
  document.body.classList.toggle('nohdr');
  const t=document.getElementById('topInfo');
  if(t&& !document.body.classList.contains('nohdr'))t.textContent='Kategorie unten wählen';
}
// ---------- SPEICHERN: File System Access API ----------
const AFE={dir:null,maps:null,zones:null};
function fsSupported(){return 'showDirectoryPicker' in window}
async function pickSaveFolder(silent){
  if(!fsSupported()){if(!silent)alert('Direktes Speichern in einen Ordner braucht Chrome oder Edge.\n\nFallback: Beim Speichern einfach "Herunterladen" wählen – die Datei kannst du dann selbst in den saves-Ordner legen.');return false}
  try{
    AFE.dir=await window.showDirectoryPicker({mode:'readwrite',id:'afe'});
    let saves=AFE.dir;
    try{ saves=await AFE.dir.getDirectoryHandle('saves',{create:true});
         AFE.maps=await saves.getDirectoryHandle('maps',{create:true});
         AFE.zones=await saves.getDirectoryHandle('zonen',{create:true});
    }catch(e){ AFE.maps=await AFE.dir.getDirectoryHandle('maps',{create:true});AFE.zones=await AFE.dir.getDirectoryHandle('zonen',{create:true}) }
    try{localStorage.setItem('afeFolder',AFE.dir.name)}catch(e){}
    const i=document.getElementById('folderInfo');
    if(i)i.innerHTML=`<span class="folder-ok">📁 ${AFE.dir.name}/saves/ verbunden</span>`;
    return true;
  }catch(e){return false}
}
async function fsWrite(dirH,name,obj){
  const safe=name.replace(/[\/\?%*:|"<>]/g,'_');
  const fh=await dirH.getFileHandle(safe+'.json',{create:true});
  const w=await fh.createWritable();await w.write(JSON.stringify(obj,null,1));await w.close();
}
async function fsList(dirH){
  const out=[];if(!dirH)return out;
  for await(const [name,h] of dirH.entries()){if(h.kind==='file'&&name.toLowerCase().endsWith('.json'))out.push({name:name.replace(/\.json$/i,''),h})}
  return out.sort((a,b)=>a.name.localeCompare(b.name));
}
function collectState(name,desc){return{name:name||'Map',desc:desc||'',app:'AlchemyFactoryEditor',v:1,savedAt:new Date().toISOString(),nameOverrides:{mats:AFE_NAMES,devs:AFE_DEV_NAMES},
  boxes,connections,nextId,portalConfig,centerPos,centerLabel,factoryEfficiency,beltCapacity,snapEnabled,zoneConfig,floorCount:Math.max(0,...boxes.map(b=>b.floor||0))}}
function applyState(d){
  boxes=d.boxes||[];connections=d.connections||[];
  nextId=Math.max((d.nextId||0),(boxes.length?Math.max(...boxes.map(b=>b.id)):0)+1); // V1.9.44: ID-Kollisionen unmöglich — Datei-nextId kann KLEINER sein als vorhandene IDs → doppelte IDs → Verbindungen verschwinden still
  if(boxes.length!==new Set(boxes.map(b=>b.id)).size)userMsg('⚠️ Doppelte Maschinen-IDs in dieser Datei! Bitte einmal neu speichern — sonst können Verbindungen verschwinden.');
  portalConfig=d.portalConfig||{};zoneConfig=d.zoneConfig||{};centerPos=d.centerPos||null;centerLabel=d.centerLabel||'Zentrum';
  factoryEfficiency=d.factoryEfficiency||100;beltCapacity=d.beltCapacity||60;snapEnabled=d.snapEnabled!==undefined?d.snapEnabled:true;
  if(d.nameOverrides){AFE_NAMES=d.nameOverrides.mats||{};AFE_DEV_NAMES=d.nameOverrides.devs||{};saveNameOverrides()}
  const oldCm=document.getElementById('centerMarker');if(oldCm)oldCm.remove();
  clearBoxesDOM();boxes.forEach(b=>makeBoxEl(b));
  setFloor(0);drawConns();refreshAll();saveStorage();renderCenter();fitViewToBoxes();
}
function showSaveDialog(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='saveDlg';
  const zones=allZones();
  ov.innerHTML=`<div class="box" style="width:440px">
    <h3>💾 Setup speichern</h3>
    <div id="folderInfo" style="font-size:calc(var(--u,1.25) * 12.5px);margin-bottom:8px">${AFE.dir?`<span class="folder-ok">📁 ${AFE.dir.name}/saves/ verbunden</span>`:(fsSupported()?`<span class="folder-no">📁 Noch kein Ordner verbunden</span> — <a href="#" onclick="pickSaveFolder();return false" style="color:var(--accent-blue)">jetzt wählen…</a>`:`<span class="folder-no">⚠️ Browser kann nicht direkt speichern (Chrome/Edge nötig) — nutze "Herunterladen"</span>`)}</div>
    <label>Name</label><input id="saveName" placeholder="z.B. Kohle-Turm v1" value="${(centerLabel||'').replace(/"/g,'')}">
    <label>Beschreibung (optional)</label><input id="saveDesc" placeholder="z.B. 2 Etagen, selbstversorgend">
    <label>Was speichern?</label>
    <select id="saveWhat">
      <option value="map">🗺️ Ganze Map (alles: alle Etagen, Zonen, Portale)</option>
      ${zones.map(z=>`<option value="zone:${z.replace(/"/g,'&quot;')}">🧩 Nur Zone: ${z}</option>`).join('')}
    </select>
    <div class="btns">
      <button class="ok" onclick="doSave(true)">💾 In Ordner speichern</button>
      <button class="no" onclick="doSave(false)">⬇️ Herunterladen</button>
      <button class="no" onclick="document.getElementById('saveDlg').remove()">Abbrechen</button>
    </div>
    <div style="font-size:calc(var(--u,1.25) * 11.5px);color:var(--text-muted);margin-top:8px;line-height:1.5">Maps landen in <b>saves/maps/</b>, Zonen in <b>saves/zonen/</b> — nur Zonen zu tauschen ist der Trick, den das Spiel selbst nicht kann. 😉</div>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
}
async function doSave(toFolder){
  const name=(document.getElementById('saveName').value||'Setup').trim();
  const desc=document.getElementById('saveDesc').value||'';
  const what=document.getElementById('saveWhat').value;
  let data;
  if(what.startsWith('zone:')){
    data=collectZone(what.slice(5));
    if(!data){alert('Zone "'+what.slice(5)+'" hat keine Maschinen.');return}
  }else data=collectState(name,desc);
  if(toFolder){
    if(!AFE.maps&&!await pickSaveFolder())return;
    const dir=data.type==='zone'?AFE.zones:AFE.maps;
    await fsWrite(dir,name,data);
    alert('Gespeichert: saves/'+(data.type==='zone'?'zonen':'maps')+'/'+name+'.json ✅');
  }else{
    const a=document.createElement('a');
    a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,1)],{type:'application/json'}));
    a.download=name.replace(/[^a-z0-9_\-äöüß]/gi,'_')+'.json';a.click();
  }
  document.getElementById('saveDlg').remove();
}
function collectZone(zn){ // V1.9.43: Zonen-Export — endlich MIT Portal-Konfiguration (vorher verloren: Portale kamen ohne Item/Rate/Kosten zurück und lieferten nichts)
  const members=boxes.filter(b=>b.zone===zn);
  if(members.length===0)return null;
  const ids=new Set(members.map(b=>b.id));
  const zpc={};members.forEach(b=>{if(portalConfig[b.id])zpc[b.id]=JSON.parse(JSON.stringify(portalConfig[b.id]))});
  return {name:'',desc:'',app:'AlchemyFactoryEditor',v:1,type:'zone',zone:zn,savedAt:new Date().toISOString(),
    boxes:JSON.parse(JSON.stringify(members)),connections:connections.filter(c=>ids.has(c.from)&&ids.has(c.to)),
    portalConfig:zpc,
    zoneConfig:(zoneConfig[zn]?{[zn]:zoneConfig[zn]}:{}), // V1.9.46: Rahmen-Name/Farbe reist mit
    nextId:Math.max(...boxes.map(b=>b.id))+1};
}
function importZone(obj){ // V1.9.43: Zonen-Import — Portal-Konfig + Aufzugs-Paare auf NEUE IDs umschreiben (vorher: Portale leer, Lift-Partner zeigten auf tote IDs)
  const off=(boxes.length?Math.max(...boxes.map(b=>b.x))+400:400);
  const minx=Math.min(...obj.boxes.map(b=>b.x));
  const minF=Math.min(...obj.boxes.map(b=>b.floor||0)); // V1.9.44: Zone landet RELATIV zur aktuellen Etage — auf E2 gebaut, auf E1 eingefügt = landet auf E1 (User-Wunsch: „egal wo")
  const idm={};let nid=Math.max(nextId,(boxes.length?Math.max(...boxes.map(b=>b.id)):0)+1); // V1.9.44: nie bereits vergebene IDs erneut vergeben
  obj.boxes.forEach(cb=>{idm[cb.id]=nid++;});
  obj.boxes.forEach(cb=>{
    const nb=JSON.parse(JSON.stringify(cb));nb.id=idm[cb.id];nb.x=cb.x-minx+off;nb.floor=currentFloor+((cb.floor||0)-minF);
    if(nb.liftPartner!==undefined){if(idm[nb.liftPartner]!==undefined)nb.liftPartner=idm[nb.liftPartner];else{delete nb.liftPartner;delete nb.liftRole}}
    delete nb._liftTarget;
    const pc=(obj.portalConfig||{})[cb.id];
    if(pc)portalConfig[nb.id]=JSON.parse(JSON.stringify(pc));
    boxes.push(nb);makeBoxEl(nb);
  });
  (obj.connections||[]).forEach(c=>{if(idm[c.from]&&idm[c.to])connections.push({from:idm[c.from],to:idm[c.to],fromPort:c.fromPort,toPort:c.toPort})});
  if(obj.zoneConfig&&obj.zoneConfig[obj.zone])zoneConfig[obj.zone]=JSON.parse(JSON.stringify(obj.zoneConfig[obj.zone])); // V1.9.46: Zonen-Rahmen mitnehmen
  nextId=nid;drawConns();refreshAll();saveStorage();
  return 'Zone "'+obj.zone+'" eingefügt ✅';
}
function showLoadDialog(){
  const ov=document.createElement('div');ov.className='dlg';ov.id='loadDlg';
  ov.innerHTML=`<div class="box" style="width:460px">
    <h3>📂 Setup laden</h3>
    <div id="folderInfo2" style="font-size:calc(var(--u,1.25) * 12.5px);margin-bottom:8px">${AFE.dir?`<span class="folder-ok">📁 ${AFE.dir.name}/saves/</span>`:(fsSupported()?`<span class="folder-no">Ordner noch nicht verbunden</span> — <a href="#" onclick="pickSaveFolder().then(renderLoadList);return false" style="color:var(--accent-blue)">wählen…</a>`:`<span class="folder-no">⚠️ Direkter Zugriff nur in Chrome/Edge — Datei auswählen:</span>`)}</div>
    <div style="display:flex;gap:6px;margin-bottom:6px">
      <button onclick="renderLoadList('maps')" id="tabMaps" style="flex:1;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary);cursor:pointer;font-weight:700">🗺️ Maps</button>
      <button onclick="renderLoadList('zonen')" id="tabZones" style="flex:1;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary);cursor:pointer;font-weight:700">🧩 Zonen</button>
      <button onclick="importJSON()" style="flex:1;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary);cursor:pointer;font-weight:700">📄 Datei…</button>
    </div>
    <div class="save-list" id="loadList" style="max-height:40vh;overflow-y:auto"></div>
    <button onclick="document.getElementById('loadDlg').remove()" style="width:100%;margin-top:8px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);padding:9px;font-weight:600;cursor:pointer">✕ Schließen</button>
  </div>`;
  ov.onclick=e=>{if(e.target===ov)ov.remove()};
  document.body.appendChild(ov);
  renderLoadList('maps');
}
async function renderLoadList(kind){
  const list=document.getElementById('loadList');if(!list)return;
  document.getElementById('tabMaps').style.borderColor=kind==='maps'?'var(--accent-blue)':'var(--border)';
  document.getElementById('tabZones').style.borderColor=kind==='zonen'?'var(--accent-blue)':'var(--border)';
  if(!AFE.dir){list.innerHTML='<div style="color:var(--text-muted);font-size:calc(var(--u,1.25) * 12.5px);text-align:center;padding:14px">Erst Ordner verbinden — oder "Datei…" nutzen.</div>';return}
  const items=await fsList(kind==='maps'?(AFE.maps||AFE.dir):(AFE.zones||AFE.dir));
  if(items.length===0){list.innerHTML='<div style="color:var(--text-muted);font-size:calc(var(--u,1.25) * 12.5px);text-align:center;padding:14px">Noch nichts gespeichert.</div>';return}
  list.innerHTML='';
  for(const it of items){
    const b=document.createElement('button');
    b.innerHTML=`${kind==='maps'?'🗺️':'🧩'} <b>${it.name}</b> <span style="margin-left:auto;color:var(--text-muted)">laden →</span>`;
    b.onclick=async()=>{
      const d=await (await it.h.getFile()).text();
      const obj=JSON.parse(d);
      if(obj.type==='zone')alert(importZone(obj)); // V1.9.43: Portal-Konfig + Lift-Paare werden mitgenommen
      else offerMapImport(obj,it.name); // V1.9.28: fragen statt still ersetzen
      document.getElementById('loadDlg').remove();
    };
    list.appendChild(b);
  }
}
// ---------- Zonen-Info-Fenster (schwebend, verschiebbar) ----------
function toggleZonePanel(){
  let zp=document.getElementById('zonePanel');
  if(zp){zp.remove();return}
  zp=document.createElement('div');zp.id='zonePanel';zp.className='zonepanel';
  zp.innerHTML=`<div class="zp-head" id="zpHead"><b>🗂️ Zonen-Info</b><span style="flex:1"></span>
    <button onclick="refreshZonePanel()" title="Aktualisieren" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);padding:4px 8px;cursor:pointer">🔄</button>
    <button onclick="document.getElementById('zonePanel').remove()" title="Schließen" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);padding:4px 8px;cursor:pointer">✕</button></div>
    <div class="zp-body" id="zpBody"></div>`;
  document.body.appendChild(zp);
  // Verschieben
  const head=document.getElementById('zpHead');
  head.onmousedown=e=>{
    if(e.target.tagName==='BUTTON')return;
    const r=zp.getBoundingClientRect(),dx=e.clientX-r.left,dy=e.clientY-r.top;
    zp.style.right='auto';
    const mv=ev=>{zp.style.left=(ev.clientX-dx)+'px';zp.style.top=(ev.clientY-dy)+'px'};
    const up=()=>{document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up)};
    document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);
    e.preventDefault();
  };
  refreshZonePanel();
}
function refreshZonePanel(){
  const body=document.getElementById('zpBody');if(!body)return;
  const zs=allZones();
  if(zs.length===0){body.innerHTML='<div style="color:var(--text-muted);font-size:calc(var(--u,1.25) * 12.5px);text-align:center;padding:14px">Noch keine Zonen.<br>Maschine markieren → Zone zuweisen (🗂️ Zonen verwalten).</div>';return}
  let html='';
  zs.forEach(z=>{
    const members=boxes.filter(b=>b.zone===z);
    const net={};
    members.forEach(b=>{
      const d=DEVICES[b.device];if(!d)return;
      const r=getEffectiveRecipe(b);
      Object.entries(r.out||{}).forEach(([m,q])=>{const v=calcRate(q,r.time)*(b.count||1);net[m]=(net[m]||0)+v});
      Object.entries(r.in||{}).forEach(([m,q])=>{const v=calcRate(q,r.time)*(b.count||1);net[m]=(net[m]||0)-v});
    });
    const outs=Object.entries(net).filter(([m,v])=>v>0.05).sort((a,b)=>b[1]-a[1]).slice(0,7);
    const ins=Object.entries(net).filter(([m,v])=>v<-0.05).sort((a,b)=>a[1]-b[1]).slice(0,4);
    html+=`<div class="zcard" style="border-left-color:${zoneColor(z)}">
      <div class="zt"><span class="zdot" style="background:${zoneColor(z)}"></span>${z} <small style="margin-left:auto;color:var(--text-muted);font-weight:400">${members.reduce((s,b)=>s+(b.count||1),0)} Masch.</small></div>
      ${outs.map(([m,v])=>`<div class="zrow"><span>📤 ${matName(m)}</span><span class="zout">+${v.toFixed(1)}/Min</span></div>`).join('')}
      ${ins.map(([m,v])=>`<div class="zrow"><span>📥 braucht ${matName(m)}</span><span class="zin">${v.toFixed(1)}/Min</span></div>`).join('')}
      ${outs.length===0&&ins.length===0?'<div class="zrow" style="color:var(--text-muted)">(kein Materialfluss)</div>':''}
    </div>`;
  });
  body.innerHTML=html;
}

// Release-Init

renderHotbar();
const _bc0=document.getElementById('betaChip');if(_bc0)_bc0.textContent='🧪 Beta '+APP_VERSION;
const _lb0=document.getElementById('langBtn');if(_lb0)_lb0.innerHTML=uiLang==='de'?'🌐 EN':'🌐 DE';
const _ti0=document.getElementById('topInfo');if(_ti0)_ti0.textContent='Kategorie unten wählen ⬇';
const _sb0=document.getElementById('snapBtn');if(_sb0)_sb0.classList.toggle('on',snapEnabled);

// ===== V1.9.58: I18N — KOMPLETTE EN-Übersetzung der Fenster-Oberfläche =====
// Prinzip: DE bleibt Quelltext (deutsch-first). Erst wenn uiLang!=='de', übersetzt ein
// DOM-Pass jedes gerenderte Text-Fragment + title/placeholder über ein Lexikon
// (EXACT für statische Fragmente, RULES für dynamische mit Zahlen/Namen).
// Change-Log-Erklärungen gehören in readme/CHANGELOG — NICHT in Fenster (User 18.09.).
const I18N_EXACT={
  "Menü schließen":"Close menu",
  "Zonen":"Zones",
  "🌱 Rohstoffe & Anbau":"🌱 Raw materials & farming",
  "Rohstoffe & Anbau":"Raw materials & farming",
  "⚙️ Verarbeitung":"⚙️ Processing",
  "Verarbeitung":"Processing",
  "⭐ Fortgeschritten":"⭐ Advanced",
  "Fortgeschritten":"Advanced",
  "🔮 Relikte":"🔮 Relics",
  "Relikte":"Relics",
  "🚪 Portale":"🚪 Portals",
  "Portale":"Portals",
  "❓ Hilfe":"❓ Help",
  "❓ Hilfe & Tasten":"❓ Help & keys",
  "❓ Hilfe-Abschnitt":"❓ Help section",
  "📊 Fabrik-Status":"📊 Factory status",
  "auch eigene speichern":"or save your own",
  "mit Beispiel-Kette":"with demo chain",
  "Rezept-Codex":"Recipe codex",
  "Rückwärts-Rechner":"Reverse calculator",
  "Namen prüfen":"Check names",
  "fragt 1× nach":"asks once",
  "Löschen live prüfen":"Confirm deletions live",
  "Größe":"Size",
  "an/aus":"on/off",
  "🔍 Suche Gerät...":"🔍 Search device...",
  "Baue Maschinen — 📊 Status zeigt die Bilanz":"Build machines — 📊 status shows the balance",
  "Baue Maschinen — 📊 Status (rechts) zeigt die Bilanz":"Build machines — 📊 status (right) shows the balance",
  "Bilanz ausgeglichen — 📊 Details: unten in der Leiste":"Balance is even — 📊 details: in the bottom bar",
  "1 Baumstamm → 200 Bretter in 400s = 30 Bretter/Min · lädt bis zu 3 Stämme als PUFFER (ändert den Durchsatz nicht) · im Spiel: von Hand od…":"1 log → 200 planks in 400 s = 30 planks/min · loads up to 3 logs as BUFFER (does not change throughput) · in-game: by hand …",
  "WELTBAUM (Shop-Level 8): NÄHRWERT kommt aus DÜNGER — kein Band-Item! Stufen: Setzling 6M · kleiner Baum 5M · Max 3M (zusammen ~14M). Düng…":"WORLD TREE (shop level 8): NUTRITION comes from FERTILIZER — not a belt item! Stages: sapling 6M · small tree 5M · max 3M (≈14M total). Fer…",
  "200 gold coins je Stück":"200 gold coins each",
  "Kauft 1x logs für 200 gold coins":"Buys 1× logs for 200 gold coins",
  "…kommt auf Etage 0 heraus:":"…exits on floor 0:",
  "Floor: EG (44 Maschinen) | Gesamt: 44 Maschinen | 1 Verbindungen":"Floor: GF (44 machines) | Total: 44 machines | 1 connections",
  "⏸ 20 Maschinen wartet — logs + limestone im Spiel kaufen / 🛒 purchasing portal":"⏸ 20 machines idle — buy logs + limestone in-game / 🛒 purchasing portal",
  "🚀 Damit es losläuft — im Spiel kaufen oder 🛒 purchasing portal davor:":"🚀 To get started — buy in-game or place a 🛒 purchasing portal in front:",
  "🧪 Wird live gegen das Spiel geprüft — Fehler einfach melden (Infos: Klick auf 🧪 oben).":"🧪 Verified live against the game — simply report issues (info: click 🧪 at the top).",
  "für die Stückzahl (z. B. ×3 Schleifer = 1 Klick statt 3 Boxen).":"for the count (e.g. ×3 grinders = 1 click instead of 3 boxes).",
  "endliches Fabrikgelände":"infinite factory grounds",
  "Die eingestellte Rate (z. B. 1 Stamm/Min) ist eine Annahme — im Spiel liefert das Portal nur, wenn 200 Gold je Stamm ankommen (Geldzufluss!). Ab":"The configured rate (e.g. 1 log/min) is an assumption — in-game the portal only delivers if 200 gold per log actually arrives (money inflow). Fro",
  "Vitalitätstrank (Vitality Potion)":"Vitality Potion",
  "↺ Alle zurücksetzen":"↺ Reset all",
  "Eigene Farbe zur Unterscheidung (z. B. Holz = Braun, Eisen = Grau).":"Custom color for distinction (e.g. wood = brown, iron = gray).",
  "Türkis":"Turquoise",
  "Weiß":"White",
  "❓ Mehr in der Hilfe":"❓ More in the help",
  "(2 Maschinen)":"(2 machines)",
  "1 Baumstamm → 200 Bretter in 400s = 30 Bretter/Min · lädt bis zu 3 Stämme als PUFFER (ändert den Durchsatz nicht) · im Spiel: von Hand od…":"1 log → 200 planks in 400 s = 30 planks/min · loads up to 3 logs as BUFFER (does not change throughput) · in-game: by hand …",
  "WELTBAUM (Shop-Level 8): NÄHRWERT kommt aus DÜNGER — kein Band-Item! Stufen: Setzling 6M · kleiner Baum 5M · Max 3M (zusammen ~14M). Düng…":"WORLD TREE (shop level 8): NUTRITION comes from FERTILIZER — not a belt item! Stages: sapling 6M · small tree 5M · max 3M (≈14M total). Fer…",
  "📍 steht auf Etage EG (Erdgeschoss)":"📍 located on floor GF (ground floor)",
  " steht auf Etage EG":" located on floor EG",
  "200 gold coins je Stück":"200 gold coins each",
  "Kauft 1x logs für 200 gold coins":"Buys 1× logs for 200 gold coins",
  "…kommt auf Etage 0 heraus:":"…exits on floor 0:",
  "🔥 Benötigt: 9 Hitze/Sek — ⚠️ steht auf keinem Ofen!":"🔥 Needs: 9 heat/s — ⚠️ not placed on any furnace!",
  "Floor: EG (44 Maschinen) | Gesamt: 44 Maschinen | 1 Verbindungen":"Floor: GF (44 machines) | Total: 44 machines | 1 connections",
  "⏸ 20 Maschinen wartet — logs + limestone im Spiel kaufen / 🛒 purchasing portal":"⏸ 20 machines idle — buy logs + limestone in-game / 🛒 purchasing portal",
  "🚀 Damit es losläuft — im Spiel kaufen oder 🛒 purchasing portal davor:":"🚀 To get started — buy in-game or place a 🛒 purchasing portal in front:",
  "🧪 Wird live gegen das Spiel geprüft — Fehler einfach melden (Infos: Klick auf 🧪 oben).":"🧪 Verified live against the game — simply report issues (info: click 🧪 at the top).",
  "für die Stückzahl (z. B. ×3 Schleifer = 1 Klick statt 3 Boxen).":"for the count (e.g. ×3 grinders = 1 click instead of 3 boxes).",
  "endliches Fabrikgelände":"infinite factory grounds",
  "Die eingestellte Rate (z. B. 1 Stamm/Min) ist eine Annahme — im Spiel liefert das Portal nur, wenn 200 Gold je Stamm ankommen (Geldzufluss!). Ab":"The configured rate (e.g. 1 log/min) is an assumption — in-game the portal only delivers if 200 gold per log actually arrives (money inflow). Fro",
  "🗂️ Zone info":"🗂️ Zone info",
  "Vitalitätstrank (Vitality Potion)":"Vitality Potion",
  "↺ Alle zurücksetzen":"↺ Reset all",
  "Eigene Farbe zur Unterscheidung (z. B. Holz = Braun, Eisen = Grau).":"Custom color for distinction (e.g. wood = brown, iron = gray).",
  "Türkis":"Turquoise",
  "Weiß":"White",
  "❓ Mehr in der Hilfe":"❓ More in the help",
  "(2 Maschinen)":"(2 machines)",
  "(2 Maschine)":"(2 machine)",
  "Hilfe & Tastenkürzel":"Help & shortcuts",
  "Ofen-Nummer":"Furnace number",
  "volle Notiz im ℹ️-Fenster":"full note in the ℹ️ window",
  "Auto-Speicherstand im Browser — 📁 speichern bleibt trotzdem der sichere Weg":"Browser auto-save — 📁 saving is still the safe way",
  "Klick = zum Verkauf springen":"Click = jump to the sales room",
  "(Band 60/Min ÷ Verbrauch/Maschine)":"(belt 60/min ÷ consumption per machine)",
  "(Gärtnerei)":"(nursery)",
  "(Weltenbaum-Gärtnerei)":"(world tree nursery)",
  "(Lager)":"(storage)",
  "Der Planer wird live gegen das echte Spiel geprüft (Early Access — das Spiel selbst ändert sich noch).\n      Wenn etwas nicht stimmt:":"The planner is verified live against the real game (Early Access — the game itself is still changing).\n      If something looks wrong:",
  "— jede Rückmeldung macht das Tool besser.":"— every piece of feedback makes the tool better.",
  "📖 Details, Messwerte & alle Änderungen:":"📖 Details, measurements & all changes:",
  "🏷️ Rezept-Namen weichen ab? →":"🏷️ Recipe names differ? →",
  "🧰 Tools → 🏷️ Namen prüfen":"🧰 Tools → 🏷️ Check names",
  "— das hilft den Machern.":"— that helps the makers.",
  "das Spiel kaufen & gut bewerten":"buy the game & rate it well",
  "Währung:":"Currency:",
  "Goldmünze":"Gold coins",
  "Silbermünze":"Silver coins",
  "Kupfermünze":"Copper coins",
  "🏦 Bankportal - Münztausch":"🏦 Bank portal — coin exchange",
  "Kostenloser Münztausch":"Free coin exchange",
  "kaufen lassen (z. B. Stämme)":"have them purchased (e.g. logs)",
  "dranhängen — je 10 Bretter/Min, exakt 100 %":"attach — 10 planks/min each, exactly 100%",
  "zum":"to the",
  "grünen Kreis":"green circle",
  "Später":"Later",
  "— stehende Maschinen zählen nicht (alle Etagen, inkl. 🔥 Ofen)":"— stalled machines don’t count (all floors, incl. 🔥 furnaces)",
  "Lager: 3×":"Storage: 3×",
  "noch keine Lieferung":"no delivery yet",
  "Mülltonne: 1×":"Trash bin: 1×",
  "🔥 Ofen-Brennstoff":"🔥 Furnace fuel",
  "ohne Brennstoff ⛔":"without fuel ⛔",
  "🏪 Lieferung an den Verkauf":"🏪 Delivery to the sales room",
  "Verkauf #1":"Sales #1",
  "noch keine Ware — Line anschließen":"no goods yet — connect a line",
  "🔍 Ohne Lieferung — Verbindung prüfen:":"🔍 Without supply — check the connection:",
  "⚠️ Überschuss ohne Abfluss → staut im Spiel!":"⚠️ Surplus without drain → backs up in-game!",
  "⏸ würde laufen, wenn beliefert":"⏸ would run if supplied",
  "0.0/Min ⏸ steht — siehe oben 🚀":"0.0/min ⏸ idle — see 🚀 above",
  "Zonen-Einzelbilanz: 🗂️ Zonen-Fenster (rechts). Etagen: 🏬 Übersicht.":"Per-zone balance: 🗂️ zones panel (right). Floors: 🏬 overview.",
  "Säge + 3 kleine Schleifer =":"Saw + 3 small grinders =",
  "· Säge + 1 Verbesserte Schleifmaschine =":"· Saw + 1 improved grinder =",
  "Durchsatz schlägt Einzeltempo!":"Throughput beats individual speed!",
  "für die Stückzahl (z. B. ×3 Schleifer = 1 Klick statt 3 Boxen).":"for the count (e.g. ×3 grinders = 1 click instead of 3 boxes).",
  "und":"and",
  "💾 Setup speichern":"💾 Save setup",
  "⚠️ Browser kann nicht direkt speichern (Chrome/Edge nötig) — nutze \"Herunterladen\"":"⚠️ Browser cannot save directly (Chrome/Edge needed) — use \"Download\"",
  "Was speichern?":"What to save?",
  "🗺️ Ganze Map (alles: alle Etagen, Zonen, Portale)":"🗺️ Whole map (everything: all floors, zones, portals)",
  "💾 In Ordner speichern":"💾 Save to folder",
  ", Zonen in":", zones in",
  "— nur Zonen zu tauschen ist der Trick, den das Spiel selbst nicht kann. 😉":"— swapping zones only is the trick the game itself cannot do. 😉",
  "📂 Setup laden":"📂 Load setup",
  "⚠️ Direkter Zugriff nur in Chrome/Edge — Datei auswählen:":"⚠️ Direct access only in Chrome/Edge — pick a file:",
  "🧩 Zonen":"🧩 Zones",
  "Erst Ordner verbinden — oder \"Datei…\" nutzen.":"Connect a folder first — or use \"File…\".",
  "✕ Schließen":"✕ Close",
  "🏭 Factory Efficiency (Maschinen-Tempo & Wärmeverbrauch)":"🏭 Factory Efficiency (machine speed & heat consumption)",
  "📦 Logistics Efficiency (Band-Kapazität)":"📦 Logistics Efficiency (belt capacity)",
  "⚙️ Fabrikstufe":"⚙️ Factory level",
  "%  (Spiel: 100 bis 400 % — 12 Stufen à +25 %)":"%  (game: 100 to 400 % — 12 ranks of +25 % each)",
  "Stück/Min pro Band (Spiel: 60 bis 240 — 12 Stufen à +15/Min)":"Items/min per belt (game: 60 to 240 — 12 ranks of +15/min each)",
  "⚡ JE Line max":"⚡ Each line max",
  "/Min (auch hinein) — der Lift selbst gibt alles weiter. ℹ️ in der Box zeigt Details.":"/min (inbound too) — the lift itself passes everything on. ℹ️ in the box shows details.",
  "Brennstoff per Line · Grundverbrauch":"Fuel via line · base consumption",
  "P/Sek auch ohne Maschinen · ℹ️ zeigt alle Messwerte.":"p/s even with no machines on it · ℹ️ shows all measurements.",
  "🗂️ Zone verschoben — alle Maschinen mitgezogen, bleibt markiert (weiter ziehbar). Shift+Ziehen verschiebt nur das Label.":"🗂️ Zone moved — all machines moved along, stays selected (keep dragging to move again). Shift+drag moves only the label.",
  "🛗 Transporteur zwischen 2 Etagen — untere Hälfte = EINGANG, obere = AUSGANG. Ein Lift rauf, zweiter runter.":"🛗 Transporter between 2 floors — lower half = INPUT, upper half = OUTPUT. One lift up, a second one down.",
  "▶ Gibt weiter:":"▶ Passes on:",
  "📝 Beschriftungsschild — reiner Text, keine Funktion, keine Anschlüsse, zählt nicht in die Bilanz.":"📝 Label sign — pure text, no function, no connections, not counted in the balance.",
  "✏️ in der Box schreibt den Text (mehrzeilig erlaubt).":"✏️ in the box writes the text (multi-line allowed).",
  "🌿 AUTO-BEET (gemessen 19.09.): 6 Lein je 12s = 30/Min · 1 Dünger je 12s = 5/Min — Dünger-PFLICHT! Skaliert mit Fabrik-Effizienz":"🌿 AUTO-BED (measured Sep 2026): 6 flax per 12s = 30/min · 1 fertilizer per 12s = 5/min — fertilizer REQUIRED! Scales with factory efficiency",
  "🌿 AUTO-BEET (gemessen 19.09.): 4 Salbei je 12s = 20/Min · 1 Dünger je 12s = 5/Min — Dünger-PFLICHT! Skaliert mit Fabrik-Effizienz":"🌿 AUTO-BED (measured Sep 2026): 4 sage per 12s = 20/min · 1 fertilizer per 12s = 5/min — fertilizer REQUIRED! Scales with factory efficiency",
  "🌿 AUTO-BEET: 10 Johannisbeeren/Min · Dünger 1 je 12s wie Salbei/Lein (geschätzt)":"🌿 AUTO-BED: 10 redcurrants/min · fertilizer 1 per 12s like sage/flax (estimated)",
  "🌿 AUTO-BEET: 5 Lavendel/Min · Dünger 1 je 12s wie Salbei/Lein (geschätzt)":"🌿 AUTO-BED: 5 lavender/min · fertilizer 1 per 12s like sage/flax (estimated)",
  "🌿 AUTO-BEET: 7,5 Kamille/Min · Dünger 1 je 12s wie Salbei/Lein (geschätzt)":"🌿 AUTO-BED: 7.5 chamomile/min · fertilizer 1 per 12s like sage/flax (estimated)",
  "🌿 AUTO-BEET: Enzian+Nektar je 2,2/Min · Dünger 1 je 12s wie Salbei/Lein (geschätzt)":"🌿 AUTO-BED: gentian+nectar 2.2/min each · fertilizer 1 per 12s like sage/flax (estimated)",
  "SPIEL-BESTÄTIGT 19.09.: Fenster 60/60 — 6+6 je 6s = 10 Trank/Min (Stufe 2: 90/90 → 15/Min)":"CONFIRMED Sep 2026: window 60/60 — 6+6 per 6s = 10 potions/min (level 2: 90/90 → 15/min)",
  "SPIEL-BESTÄTIGT 19.09.: 1:1:1 — Stufe 2 live 22,5+22,5 → 22,5 Dünger/Min (Basis 15)":"CONFIRMED Sep 2026: 1:1:1 — level 2 live 22.5+22.5 → 22.5 fertilizer/min (base 15)",
  "SPIEL-BESTÄTIGT 19.09.: 1 Salbei → 1 Asche je 3s = 20/Min (Stufe 2: 30) — STAPELBAR gleich":"CONFIRMED Sep 2026: 1 sage → 1 ash per 3s = 20/min (level 2: 30) — STACKABLE same",
  "PFLANZBEET (normales Beet): Samen je Ernte von Hand — KEIN Dünger nötig, ~6-9 Min Erntezeit. Für Dauerlieferung ohne Samen-Kauf: die GÄRTNEREI (Dünger-Pflicht).":"SEED PLOT (normal bed): seeds by hand each harvest — NO fertilizer needed, ~6-9 min per harvest. For continuous supply without buying seeds: the NURSERY (fertilizer required).",
  "GÄRTNEREI = AUTO-BEET (Spiel-gemessen Sep 2026): 1 Samen EINMALIG von Hand, dann DÜNGER-PFLICHT — ohne Dünger keine Pflanze! Stufe 0: Salbei 20/Min · Lein 30/Min · je 1 Dünger/12s (5/Min); alles skaliert mit Fabrik-Effizienz (Stufe 2: 30/45/7,5). 3 Pufferplätze. Faustregel: 1 Dünger-Monteur (15/Min) versorgt 3 Gärtnereien — Salbei braucht zusätzlich Asche-Tiegel (1 Bett = 1 Tiegel bei 20/Min=20/Min).":"NURSERY = AUTO-BED (measured in-game Sep 2026): 1 seed ONCE by hand, then fertilizer REQUIRED — no fertilizer, no plant! Level 0: sage 20/min · flax 30/min · 1 fertilizer/12s each (5/min); everything scales with factory efficiency (level 2: 30/45/7.5). 3 buffer slots. Rule of thumb: 1 fertilizer assembler (15/min) feeds 3 nurseries — sage also needs ash crucibles (1 bed = 1 crucible at 20/min=20/min).",
  "🧯 Dampf-Heizung — ersetzt den Ofen: Dampfkessel per ROHR anschließen (60 Dampf/std = 12 Heat, Platte 3×3, max 2 Maschinen)":"🧯 Steam heater — replaces the furnace: connect the steam boiler via PIPE (60 steam/h = 12 heat, 3×3 plate, max 2 machines)",
  "Rohre sind praktisch unbegrenzt (≈ 6.000/Min) — ℹ️ zeigt Details.":"Pipes are practically unlimited (≈ 6,000/min) — ℹ️ shows details.",
  "🔥 Heiz-Gerät — stellt selbst nichts her: Schmelztiegel oben draufstellen (Fläche beachten).":"🔥 Heating device — produces nothing itself: place crucibles on top (mind the area).",
  "🌡️ Thermo-Extraktor — hitzebetriebenes Gerät (braucht 80 Heat/Sek), Rezepte noch nicht vollständig bekannt (Platzhalter)":"🌡️ Thermal extractor — heat-driven device (needs 80 heat/s), recipes not fully known yet (placeholder)",
  "📜 Wissensaltar — Rezepte noch nicht vollständig bekannt (Platzhalter) — das Wiki ist lückenhaft":"📜 Knowledge altar — recipes not fully known yet (placeholder) — the wiki has gaps",
  "🗂️ Label-Position verschoben — Klick öffnet Bearbeiten · Ziehen ohne Shift verschiebt die GANZE Zone":"🗂️ Label position moved — click opens editing · dragging without Shift moves the WHOLE zone",
  "Beide Forschungen haben im Spiel 12 Stufen: Factory Efficiency je Stufe +25 % (100 % → 400 % = ×4 Tempo) · Logistics je Stufe +15/Min (60 → 240/Min). Die Regler-Pfeile springen genau auf diese Stufen-Werte — jeden Wert kannst du aber auch frei eintippen.":"Both researches have 12 ranks in the game: Factory Efficiency +25 % per rank (100 % → 400 % = ×4 speed) · Logistics +15/min per rank (60 → 240/min). The input arrows snap exactly to these rank values — but you can type any value freely.",
  "✓ Übernehmen":"✓ Apply",
  "↺ Zurücksetzen":"↺ Reset",
  "🎯 Rückwärts-Rechner (Ziel-Produktionskette)":"🎯 Reverse calculator (target production chain)",
  "➕ Kette in Karte einfügen":"➕ Insert chain into map",
  "📖 Rezept-Codex":"📖 Recipe codex",
  "Alle Rezepte nachschlagen — nach Gerät gruppiert, aufklappbar, mit Mengen pro Vorgang":"Look up all recipes — grouped by device, expandable, with amounts per cycle",
  "Rate pro Minute. Zum Bauen direkt „+ Platzieren\" klicken.":"Rate per minute. To build, click \"+ Place\" directly.",
  "🔍  Gerät, Rezept oder Zutat suchen...":"🔍  Search device, recipe or ingredient...",
  "🔥 Wärme & Öfen":"🔥 Heat & Furnaces",
  "🔧 nur diese Maschine":"🔧 only this machine",
  "➕ Einfügen":"➕ Insert",
  "🌱 Dünger-Kette (Pflanzenasche + Schnellkalkpulver)":"🌱 Fertilizer chain (plant ash + quicklime powder)",
  "Kaufe Baumstämme extern":"Buy logs externally",
  "Aufzug":"Lift",
  "Lager":"Storage",
  "Gärtnerei":"Nursery",
  "Weltenbaum-Gärtnerei":"World tree nursery",
  "📊 Gesamtproduktion (per Minute)":"📊 Total production (per minute)",
  "Fläche":"Area",
  "⌨️ Tastenkürzel":"⌨️ Keyboard shortcuts",
  "kopieren/einfügen ·":"copy/paste ·",
  "☕ Unterstützen — freiwillig & kostenlos":"☕ Support — voluntary & free",
  "🏷️ Namen prüfen":"🏷️ Check names",
  "🎯 Rückwärts-Rechner":"🎯 Reverse calculator",
  "⊕ Zentrum ein/aus":"⊕ Toggle center",
  "z. B.: 📌 Abteilung HOLZ — Sägen & Zahnrad-Bau":"e.g.: 📌 WOOD department — saws & gear making",
  "Reine Beschriftung — keine Funktion, keine Anschlüsse, zählt nicht in die Bilanz. Ideal für Abteilungs-Schilder je Stockwerk oder Erklärungen vor Maschinen-Gruppen (wie die Schilder im Spiel). Mehrzeilig erlaubt, Zeilenumbrüche bleiben erhalten.":"Pure label — no function, no connections, not counted in the balance. Ideal for department signs per floor or explanations in front of machine groups (like the signs in the game). Multi-line allowed, line breaks are preserved.",
  "Das Spiel mischt selbst Sprachen (intern „Wood\", angezeigt „Logs\", deutsch „Holz\"). Trage hier ein, wie das Item":"The game mixes languages itself (internally „Wood\", displayed „Logs\", German „Holz\"). Enter here how the item",
  "🏭 Geräte":"🏭 Devices",
  "⚖️ Über & Rechtliches":"⚖️ About & legal",
  "📋 Kopieren & Einfügen (Stempel-Modus)":"📋 Copy & paste (stamp mode)",
  "📋 Einfügen (Stempel)":"📋 Paste (stamp)",
  ". Im Aufzug-Panel kannst du die Ziel-Etage ändern und direkt „dorthin springen\".":". In the lift panel you can change the target floor and \"jump there\" directly.",
  "„🛗 Logistik & Aufzug\"":"„🛗 Logistics & Lift\"",
  "📐 Spiel-bestätigt:":"📐 Game-confirmed:",
  "endloses Fabrikgelände":"endless factory grounds",
  "Basis-Dünger":"Basic Fertilizer",
  "Fortgeschrittener Dünger":"Advanced Fertilizer",
  "Lavendelöl":"Lavender Essential Oil",
  "+ Hinzufügen":"+ Add",
  "(Aufzug)":"(lift)",
  "📥 NUR EINGANG — Aufzug nach UNTEN ⬇":"📥 INPUT ONLY — lift going DOWN ⬇",
  "nimmt an:":"accepts:",
  "noch nichts":"nothing yet",
  "Ziel-Etage:":"Target floor:",
  "🛗 dorthin springen":"🛗 jump there",
  "Transportiert alles weiter:":"Passes everything on:",
  "(kein Lift-Limit) · ⚡ aber JE Band hinein/daraus trägt max 60/Min — für mehr Durchsatz mehrere Lines.":"(no lift limit) · ⚡ but EACH belt in/out carries max 60/min — use multiple lines for more throughput.",
  "Kolben-Lager (Flüssigkeits-Puffer)":"Piston storage (liquid buffer)",
  "Lager (Puffer)":"Storage (buffer)",
  "Eingang und Ausgang tauschen":"Swap input and output",
  "Ofen wählen:":"Choose furnace:",
  "— kein Ofen —":"— no furnace —",
  "(Potenzial — noch keine Line)":"(potential — no line yet)",
  "Wärme wandert nur nach OBEN durch ARBEITENDE Tiegel — unten Dauer-Zulauf halten!":"Heat only travels UPWARD through WORKING crucibles — keep a steady feed at the bottom!",
  "Noch keine Line angeschlossen — Verbinde das Ende deiner Kette mit dieser Box.":"No line connected yet — connect the end of your chain to this box.",
  "(kein Brennstoff!)":"(no fuel!)",
  "🔧 Gemischter Brennstoff – alle verbundenen Brennstoffe werden addiert":"🔧 Mixed fuel – all connected fuels are added together",
  "Kohle-Band heizt keinen vollen Ofen — zum Feuern HOLZ":"A coal belt won’t heat a full furnace — use WOOD for firing",
  "· alle Messwerte:":"· all measurements:",
  "oder ❓ Hilfe":"or ❓ Help",
  "- Letztes entfernen":"- Remove last",
  "✕ Auswahl aufheben":"✕ Clear selection",
  "(Platzhalter)":"(placeholder)",
  "Fenster (= Höhe)":"Windows (= height)",
  "Noch nicht vollständig":"Not yet complete",
  "Wärme & Öfen":"Heat & Furnaces",
  "Logistik & Aufzug":"Logistics & Lift",
  "Noch keine Maschinen platziert":"No machines placed yet",
  "Quadraten":"squares",
  "Stück je Kauf im Spiel":"Pieces per purchase in-game",
  "✅ Tausch ist kostenlos!":"✅ The exchange is free!",
  "Kein Input nötig":"No input needed",
  "✏️ Noch kein Text — klicke oben rechts auf ✏️ und schreibe deinen Text":"✏️ No text yet — click ✏️ top right and write your text",
  "✏️ Text bearbeiten":"✏️ Edit text",
  "Text bearbeiten":"Edit text",
  "📝 Reine Beschriftung — keine Funktion, keine Anschlüsse, zählt nicht in die Bilanz. Vorbild: die beschreibbaren Schilder im Spiel.":"📝 Pure label — no function, no connections, not counted in the balance. Modelled on the writable signs in the game.",
  "♨️ Dampfheizkissen — Dampfkessel per ROHR anschließen (60 Dampf/std = 12 Heat), Platte 3×3, ersetzt den Ofen":"♨️ Steam heating pad — connect the steam boiler via PIPE (60 steam/h = 12 heat), 3×3 plate, replaces the furnace",
  "Verkaufsraum":"Sales room",
  "Verkauf":"Sales",
  "🚀 Erste Schritte — so funktioniert der Planer":"🚀 First steps — how the planner works",
  "Tipp: An jeder Maschine gibt es jetzt ein":"Tip: every machine now has an",
  "mit Kurz-Erklärung. Mehr Hilfe: ❓ unten in der Leiste.":"with a short explanation. More help: ❓ in the bottom bar.",
  "(oder 📦 Lager) als Endstation — Linien dürfen zusammenlaufen":"(or 📦 storage) as the endpoint — lines may merge",
  "ziehen: 🟢 versorgt · 🟡 Teillast · 🔴 fehlt etwas":"pull: 🟢 supplied · 🟡 partial load · 🔴 something missing",
  "bis zu 3 Schleifer":"up to 3 grinders",
  "🚀 Beispiel-Kette laden und ansehen":"🚀 Load & explore the demo chain",
  "🚀 Damit es losläuft — im Spiel kaufen oder ":"🚀 To get started — buy in-game or ",
  "⏸ Steht ohne Lieferung —":"⏸ Idle without supply —",
  "anklicken = zur Maschine springen:":"click = jump to the machine:",
  "anklicken = zur Maschine springen":"click = jump to the machine",
  "Klick = zur Maschine springen":"Click = jump to the machine",
// --- Topbar / Leiste ---
'Fan-Planer · nicht das Spiel':'Fan planner · not the game',
'💾 Speichern':'💾 Save','📂 Laden':'📂 Load',
'Warum Beta? — Klick für Infos & Fehler melden':'Why beta? — click for info & to report issues',
'Map oder Zone speichern':'Save map or zone','Map oder Zone laden':'Load map or zone',
'Rezept-Codex: alle Rezepte nachschlagen':'Recipe codex: look up every recipe',
'▲ Menü schließen':'▲ Close menu','Menü ausblenden — mehr freie Karte (Wieder-Anzeigen: ☰ oben rechts)':'Hide the menu — more free map (show again: ☰ top right)','Menü wieder anzeigen':'Show menu again',
'Infos & Messwerte dieser Maschine (vollständiges Fenster)':'Info & measurements of this machine (full window)',
'Größe der Fenster — Klick öffnet +/- Auswahl':'Window size — click opens +/- selection',
'Zoom — Klick öffnet die Auswahl':'Zoom — click opens the selection',
'Eine Etage höher (Bild↑)':'One floor up (PgUp)','Eine Etage tiefer (Bild↓)':'One floor down (PgDown)','Eine Etage höher verschieben':'Move one floor up','Eine Etage tiefer verschieben':'Move one floor down','Etage dieser Maschine':'Floor of this machine',
'Etagen-Übersicht — klick auf die Etage, um sie anzuzeigen':'Floor overview — click a floor to show it',
'Fabrik-Status: Bilanz aller Materialien':'Factory status: balance of all materials',
'Meldungen & Hinweise der Fabrik':'Factory messages & notes',
'Löschen — Klick öffnet: Auswahl oder ganze Karte':'Delete — click opens: selection or whole map',
'Wärme & Öfen':'Heat & furnaces','Logistik & Aufzug':'Logistics & elevator','Werkzeuge & Fabrik — ALLES in einem Fenster':'Tools & factory — everything in one window',
'✕ Auswahl aufheben':'✕ Clear selection','Schließen':'Close','✕ Schließen (ESC)':'✕ Close (ESC)','Übernehmen':'Apply','Abbrechen':'Cancel','✕ Abbrechen':'✕ Cancel',
// --- Box-/Maschinen-Fenster ---
'(Potenzial — noch keine Line)':'(potential — no line yet)',
'Im Spiel: Ware von Hand liefern oder ein 🛒 Einkaufsportal davor setzen':'In-game: deliver goods by hand or put a 🛒 purchasing portal in front',
'(Band 60/Min ÷ Verbrauch/Maschine)':'(belt 60/min ÷ consumption per machine)',
'⚠️ Keine Zuleitung — Maschine steht':'⚠️ No feed — machine is stalled',
'braucht:':'needs:',
'⛔ nichts kommt an — Maschine steht!':'⛔ nothing arrives — machine is stalled!',
'Ofen wählen:':'Choose furnace:','— kein Ofen —':'— no furnace —',
'Nummer der Fenster':'Number of windows','Fenster (= Höhe)':'Windows (= height)',
'(Platzhalter)':'(placeholder)','Noch nicht vollständig':'Not yet complete','Benötigt Hitze-System':'Requires the heat system','kein Input':'no input',
'Samen von Hand einsetzen (kein Anschluss nötig)':'Insert seeds by hand (no connection needed)',
'Samen von Hand':'Seeds by hand','Dünger optional (jeder)':'fertilizer optional (any)',
'Samen EINMAL von Hand setzen, dann Dünger liefern (jeder Dünger zählt)':'Set seeds ONCE by hand, then deliver fertilizer (any kind counts)',
'Samen einmalig von Hand · Dünger liefern (jeder zählt)':'Seeds once by hand · then deliver fertilizer (any counts)',
'Samen EINMAL von Hand':'Seeds ONCE by hand',
'🌱 Dünger: JEDER wird angenommen (optional per Band) — Samen von Hand einsetzen':'🌱 Fertilizer: ANY kind is accepted (optional via belt) — insert seeds by hand',
'Stapelbar — gleiche Werte wie Schmelztiegel':'Stackable — same values as the crucible',
'Tiegel':'crucible','Fenster':'windows',
'— noch auf keinem Ofen (Platz-Nummerierung kommt vom Ofen)':'— not on a furnace yet (slot numbering comes from the furnace)',
'Wärme wandert nur nach OBEN durch ARBEITENDE Tiegel — unten Dauer-Zulauf halten!':'Heat only travels UPWARD through WORKING crucibles — keep a constant feed at the bottom!',
// --- Ofen-Dialog ---
'(kein Brennstoff!)':'(no fuel!)','Noch keine Maschinen platziert':'No machines placed yet',
'📥 Brennstoff Input:':'📥 Fuel input:','⚠️ Kein Brennstoff verbunden!':'⚠️ No fuel connected!',
'⚠️ Kein Brennstoff':'⚠️ No fuel','✅ Bereit':'✅ Ready','liefert nichts Brennbares':'delivers nothing burnable',
'- Letztes entfernen':'- Remove last','+ Hinzufügen':'+ Add','Noch':'None yet',
'Maschine hinzufügen':'Add machine',
'Quadraten':'squares','NICHT Stück!':'NOT pieces!',
'Gemischter Brennstoff – alle verbundenen Brennstoffe werden addiert':'Mixed fuel – all connected fuels add up',
'Alle Brennstoffe werden akzeptiert und addiert':'All fuels are accepted and added together',
'noch keine Wärme-Maschinen auf dem Ofen':'no heat machines on the furnace yet',
'Ofen-Grundverbrauch':'furnace base consumption','Ofen-Grundverbrauch)':'furnace base consumption)',
'alle Messwerte:':'all measured values:','oder ❓ Hilfe':'or ❓ Help',
'zum Feuern HOLZ':'burn WOOD','Kohle-Band heizt keinen vollen Ofen — zum Feuern HOLZ':'A coal belt cannot heat a full furnace — burn WOOD',
'Brennstoff-Zufuhren':'fuel feeds','Anschlüsse:':'Connections:',
// --- Lift ---
'(Aufzug)':'(elevator)','nimmt an:':'accepts:','gibt ab:':'releases:','noch nichts':'nothing yet',
'Ziel-Etage:':'Target floor:','🛗 dorthin springen':'🛗 jump there','⇄ tauschen':'⇄ swap','tauschen':'swap',
'Eingang und Ausgang tauschen':'Swap input and output','dorthin springen':'jump there',
'Transportiert alles weiter:':'Passes everything through:',
'(kein Lift-Limit) · ⚡ aber JE Band hinein/daraus trägt max 60/Min — für mehr Durchsatz mehrere Lines.':'(no lift limit) · ⚡ but EACH belt in or out carries max 60/min — use several lines for more throughput.',
'oben X an = unten X raus':'X in at the top = X out at the bottom',
'Aufzüge haben kein Band-Limit!':'Elevators have no belt limit!',
'Verbindet Etagen: transportiert wie ein Förderband — Tempo = Band-Tempo (steigt mit der Fabrik-Stufe), Basis 60/Min · 1 Band-Anschluss':'Connects floors: transports like a conveyor — speed = belt speed (rises with factory level), base 60/min · 1 belt connection',
'1 Kohle (540 Heat) → 54 Dampf — versorgt Dampfheizkissen über Rohre (unbegrenzter Durchsatz)':'1 coal (540 heat) → 54 steam — feeds steam heating pads via pipes (unlimited throughput)',
'Rohr-Anschluss statt Brennstoff: 60 Dampf/std = 12 Heat — Heizplatte 3×3, ersetzt den Ofen (Tier 6+)':'Pipe connection instead of fuel: 60 steam/h = 12 heat — 3×3 heating plate, replaces the furnace (tier 6+)',
'♨️ Dampfheizkissen — Dampfkessel per ROHR anschließen (60 Dampf/std = 12 Heat), Platte 3×3, ersetzt den Ofen':'♨️ Steam heating pad — connect the steam boiler via PIPE (60 steam/h = 12 heat), 3×3 plate, replaces the furnace',
// --- Senken / Lager / Verkauf ---
'Noch keine Line angeschlossen — Verbinde das Ende deiner Kette mit dieser Box.':'No line connected yet — connect the end of your chain to this box.',
'Kolben-Lager (Flüssigkeits-Puffer)':'Flask storage (liquid buffer)','Lager (Puffer)':'Storage (buffer)',
'erkennt selbst, was ankommt':'detects by itself what arrives',
'schluckt ALLES, auch Flüssigkeiten':'swallows EVERYTHING, including liquids',
'nimmt NUR Flüssigkeiten an (Rohr-Anbindung)':'accepts ONLY liquids (pipe connection)',
'nimmt NUR feste Items an — Flüssigkeiten gehören ins Kolben-Lager':'accepts ONLY solid items — liquids belong in the flask storage',
'im Spiel: Waren müssen zum Verkauf ins EG — per 🛗 Aufzug dorthin verbinden':'in-game: goods must reach the ground floor for sale — connect there via 🛗 elevator',
'gelieferte Ware':'delivered goods','eingelagerte Ware':'stored goods','Stück/Min':'items/min','Gesamt':'Total',
// --- Portale ---
'✅ Tausch ist kostenlos!':'✅ Exchanging is free!','Verkaufe/versende':'Sell / dispatch',
'Stück je Kauf im Spiel':'pieces per purchase in-game','Stück je Kauf':'pieces per purchase',
'Goldmünze':'gold coins','Silbermünze':'silver coins','Kupfermünze':'copper coins','je Stück':'per piece',
// --- Status-Leiste / Meldungen ---
'wartet':'waiting','Maschine wartet':'machine waiting','Maschinen wartet':'machines waiting',
'im Spiel kaufen / 🛒 Einkaufsportal':'buy in-game / 🛒 purchasing portal',
'Verbindungen':'connections','Maschinen':'machines','Maschine':'machine','Etage:':'Floor:','Gesamt:':'Total:',
'Bilanz ausgeglichen — 📊 Details: unten in der Leiste':'Balance is even — 📊 details: in the bar below',
'Fabrik läuft':'Factory is running',
'ohne Lieferung — 📊 Details: unten in der Leiste':'without delivery — 📊 details: in the bar below',
'Details: unten in der Leiste':'details: in the bar below',
// --- Floors / Übersicht ---
'🏬 Etagen-Übersicht (dein Turm)':'🏬 Floor overview (your tower)',
'Alle Stockwerke auf einen Blick — per Klick hin springen. Baue jede Etage wie eine eigene Ebene und verbinde sie mit 🛗 Aufzügen.':'All floors at a glance — click to jump there. Build each floor like its own level and connect them with 🛗 elevators.',
'● du bist hier':'● you are here','Maschinen ·':'machines ·',
// --- Templates / Zonen / Spickzettel ---
'Fertige Grundketten mit einem Klick einfügen — danach frei anpassbar.':'Insert ready-made base chains with one click — adjust freely afterwards.',
'1 Kreissage (30 Bretter/Min) → 2 Holzkohle-Tiegel (je 15 Kohle/Min — 1 Brett je 4s) auf dem Hochofen. Ein Teil der Kohle läuft als Brennstoff zurück.':'1 table saw (30 planks/min) → 2 charcoal crucibles (15 coal/min each — 1 plank every 4s) on the blast furnace. Part of the coal runs back as fuel.',
'Saatbeet+Schmelztiegel (Plant Ash) und Steinknacker+Schmelztiegel+Schleifer (Quicklime Powder) laufen in einen Montagetisch.':'Seed plot+crucible (plant ash) and stone crusher+crucible+grinder (quicklime powder) feed an assembler.',
'Maschinen markieren (Shift+Klick) → Name → speichern — dann beliebig oft stempeln. Eingebaute Vorlagen liegen im Quellcode (js/editor.js, TEMPLATES).':'Select machines (Shift+click) → name → save — then stamp as often as you like. Built-in templates live in the source (js/editor.js, TEMPLATES).',
'Noch keine eigenen Vorlagen.':'No custom templates yet.','Name der neuen Vorlage …':'Name of the new template …',
'💾 Aus Auswahl speichern':'💾 Save from selection',
'🗂️ Zonen':'🗂️ Zones','🗂️ Zonen verwalten':'🗂️ Manage zones','🗂️ Zonen-Info':'🗂️ Zone info','Noch keine Zonen.':'No zones yet.',
'Maschinen auf der Karte per Umschalt+Klick oder Rahmen aufziehen auswählen, dann hier eine Zone daraus machen.':'Select machines on the map with Shift+click or by dragging a frame, then turn them into a zone here.',
'➕ Neue Zone aus aktueller Auswahl':'➕ New zone from current selection','ausgewählt)':'selected)','Neue Zone aus Auswahl':'New zone from selection',
'Noch keine Zonen angelegt.':'No zones created yet.','Zone löschen':'Delete zone','Zone umbenennen':'Rename zone',
'Maschine markieren → Zone zuweisen (🗂️ Zonen verwalten).':'Select a machine → assign a zone (🗂️ Manage zones).',
'Zum Kopieren markieren oder als .txt herunterladen – zum Nachbauen im Spiel.':'Select to copy or download as .txt – to rebuild in-game.',
'⬇️ Als .txt speichern':'⬇️ Save as .txt','Als .txt speichern':'Save as .txt',
'📋 Alle Rezepte (volle Notizen)':'📋 All recipes (full notes)',
'Neue Zone':'New zone','Zone':'Zone',
// --- Rezept-Notizen (Fragmente, decken gekürzte + volle Fassung) ---
'1 Baumstamm → 200 Bretter in 400s = 30 Bretter/Min':'1 log → 200 planks in 400s = 30 planks/min',
'lädt bis zu 3 Stämme als PUFFER (ändert den Durchsatz nicht)':'buffers up to 3 logs (does not change throughput)',
'im Spiel: von Hand oder 🛒 Einkaufsportal':'in-game: by hand or 🛒 purchasing portal',
'SPIEL-BESTÄTIGT (Sandbox, Sep 2026)':'GAME-VERIFIED (sandbox, Sep 2026)',
'Anzeige 0,15 Stämme/Min · 0,5% Abbau je Vorgang':'display shows 0.15 logs/min · 0.5% progress per cycle',
'läuft nur DURCH, wenn ein Abnehmer (Lager/Verkauf) die Bretter abnimmt':'only RUNS when a consumer (storage/sales) takes the planks',
'Stufe 2: 37,5 Bretter/Min (1,6 Sek/Stück)':'Level 2: 37.5 planks/min (1.6 s/piece)',
'Stufe 12: 120 Bretter/Min (0,5 Sek/Stück · 0,6 Stämme/Min) = ×4':'Level 12: 120 planks/min (0.5 s/piece · 0.6 logs/min) = ×4',
'1 Stamm bleibt immer 200 Bretter':'1 log always stays 200 planks','1 Stamm bleibt IMMER 200 Bretter':'1 log ALWAYS stays 200 planks',
'STAPELBAR — gleiche Werte wie Schmelztiegel (User-Info Sep 2026):':'STACKABLE — same values as the crucible (user info Sep 2026):',
'STAPELBAR — gleiche Werte wie Schmelztiegel:':'STACKABLE — same values as the crucible:',
'STAPELBAR — gleiche Werte:':'STACKABLE — same values:',
'1 Baumstamm (2000 Heat)':'1 log (2000 heat)','1 Brett (20 Heat)':'1 plank (20 heat)','1 Steinkohle (540 Heat)':'1 coal (540 heat)','1 Holzkohle (40 Heat)':'1 charcoal (40 heat)','1 Koks (600 Heat)':'1 coke (600 heat)',
'WELTBAUM (Shop-Level 8): NÄHRWERT kommt aus DÜNGER — kein Band-Item!':'WORLD TREE (shop level 8): NUTRIENTS come from FERTILIZER — not a belt item!',
'Stufen: Setzling 6M · kleiner Baum 5M · Max 3M (zusammen ~14M).':'Stages: sapling 6M · small tree 5M · max 3M (about 14M total).',
'Dünger-Nährwerte (Codex 0.5.4471, offiziell)':'Fertilizer nutrient values (Codex 0.5.4471, official)',
'Setzling frisst 10.000/Sek, ausgewachsen ~200/Sek. Im Spiel nachmessen!':'Sapling eats 10,000/s, fully grown ~200/s. Please measure in-game!',
'Steinsystem':'stone system','Stein der Weisen (Philosopher\'s Stone)':'Philosopher\'s Stone',
// --- Hilfe-Fenster (Fragmente) ---
'❓ Hilfe — so funktioniert der Planer':'❓ Help — how the planner works',
'🏗️ Maschinen bauen':'🏗️ Building machines','Neu hier? 🚀':'New here? 🚀',
'🛗 Logistik & Aufzug':'🛗 Logistics & elevator','🗺️ Fabrikgelände & Platz':'🗺️ Factory grounds & space','🏭 Öfen & Feuer':'🏭 Furnaces & fire','🔗 Verbindungen ziehen':'🔗 Drawing connections','🔢 Anzahl = Maschinen = Anschlüsse':'🔢 Count = machines = ports','✏️ Linien selbst ausrichten (Wegpunkte)':'✏️ Shaping lines yourself (waypoints)','🛗 Etagen & Aufzug — Schritt für Schritt':'🛗 Floors & elevator — step by step','🏢 Ganze Etagen kopieren (Turm-Workflow)':'🏢 Copying whole floors (tower workflow)','🔥 Öfen':'🔥 Furnaces','🚀 Erste Schritte / Beispiel-Kette':'🚀 First steps / example chain','🎨 Linie einfärben':'🎨 Coloring a line','🏷️ Namen prüfen & ändern':'🏷️ Check & rename items',
'Unten in der Leiste eine Kategorie anklicken → Maschine wählen → sie hängt an der Maus → auf der Karte ablegen. Unten in der Box:':'Click a category in the bar at the bottom → pick a machine → it sticks to your cursor → place it on the map. In the box below:',
'für die Stückzahl (z. B. ×3 Schleifer = 1 Klick statt 3 Boxen).':'for the quantity (e.g. ×3 grinders = 1 click instead of 3 boxes).',
'An jeder Maschine:':'On every machine:',
'zeigt eine Kurz-Erklärung direkt neben der Box.':'shows a quick explanation right next to the box.',
'in der 🧰-Tür (Werkzeuge) lädt eine fertige Beispiel-Kette: Portal → Säge → 3 Schleifer → Verkauf.':'in the 🧰 door (tools) loads a ready-made example chain: portal → saw → 3 grinders → sales.',
'Infos & Werkzeuge öffnen als':'Info & tools open as','frei verschiebbare Fenster':'freely movable windows',
'(📊 🗂️ 🧰) — zuklappbar beim Bauen, jederzeit wieder da.':'(📊 🗂️ 🧰) — collapsible while building, back any time.',
': eine Box OHNE Funktion — per':': a box WITHOUT function — via',
'(oben rechts in der Box oder ✏️ Text bearbeiten) schreibst du deinen eigenen Text hinein, auch mehrzeilig. Für':'(top right in the box or ✏️ edit text) you write your own text into it, multiple lines allowed. For',
'(z. B. hier ist meine Abteilung Holz) oder Erklärungen vor Maschinen-Gruppen. Der gestrichelte Rand zeigt: kein Einfluss auf Bilanz, Statistik oder Verbindungen — die Infobox lässt sich nicht anschließen und zählt nirgends mit. Vorbild: die beschreibbaren Schilder im Spiel (deren Größe ist noch unvermessen).':'(e.g. “here is my wood department”) or explanations in front of machine groups. The dashed border means: no effect on balance, statistics or connections — the info box cannot be connected and never counts. Modelled after the writable signs in the game (their size is still unmeasured).',
'Jede Etage ist ein':'Every floor is a','— der gestrichelte Rand zeigt dir, wo es endet. Nach':'— the dashed border shows you where it ends. Towards',
'rechts und unten wächst es automatisch mit':'right and bottom it grows automatically',
', sobald du dort baust; nur oben/links liegt der Fabrikrand (dorthin kann nicht gebaut werden — der Planer stoppt sauber am Rand). Faustregel: Pro Etage reichen grob':', as soon as you build there; only top/left is the factory border (you cannot build there — the planner stops cleanly at the edge). Rule of thumb: per floor, roughly',
'(je nach Anordnung). Wird es eng, ist der Weg wie im Spiel:':'are enough (depending on layout). If it gets tight, the way is like in the game:',
'dorthin — der Turm-Workflow (Etage kopieren, eine hoch, einfügen) macht das schnell.':'up there — the tower workflow (copy floor, move up one, paste) makes it quick.',
'100–200 Maschinen':'100–200 machines','höhere Etage bauen + 🛗 Aufzug':'build a higher floor + 🛗 elevator',
'Alles was wir im echten Spiel gemessen haben — in den Boxen nur die Kurzfassung, ℹ️ öffnet je Maschine das Detail-Fenster:':'Everything we measured in the real game — boxes show only the short version, ℹ️ opens the detail window per machine:',
'— auch ohne jede Maschine darauf!':'— even without any machine on it!',
'• 1 Stamm (2000 P) = 250 Sek Feuer am Hochofen / 400 Sek am Steinofen — Test:':'• 1 log (2000 P) = 250 s of fire in the blast furnace / 400 s in the stone furnace — test:',
'(Hochofen) aus 1 Stamm, Rechnung ging exakt auf':'(blast furnace) from 1 log, the math checked out exactly',
'• Band = 1 Stück/Sek → EIN Kohle-Band (max 40 Heat/Sek) heizt KEINEN vollen Ofen (48+) — zum Feuern HOLZ':'• Belt = 1 item/s → ONE coal belt (max 40 heat/s) cannot heat a full furnace (48+) — burn WOOD',
'• Brennstoff-Plätze: Hochofen 4 · Steinofen 2 · Stämme werden GESPEICHERT (Puffer, 4 Stämme ≈ 2,7 Min)':'• Fuel slots: blast furnace 4 · stone furnace 2 · logs are STORED (buffer, 4 logs ≈ 2.7 min)',
'• ⚠️ Tiegel-Zuschlag UNKLAR: bei 1 Tiegel kein messbarer Verbrauch — Test: Hochofen + 12 Tiegel, Anzeige lesen → (Wert − 8) ÷ 12':'• ⚠️ Crucible surcharge UNCLEAR: no measurable consumption with 1 crucible — test: blast furnace + 12 crucibles, read the display → (value − 8) ÷ 12',
'• ❓ ANZEIGE-RÄTSEL: Stufe-12-Anzeige 17/20 P/Sek, real verbrannt nur ~7,8/9,0 (Rest-Stamm-Rückrechnung)':'• ❓ DISPLAY PUZZLE: level-12 display shows 17/20 P/s, actually burned only ~7.8/9.0 (remaining-log back-calculation)',
'Stufe 2 = +25 % (Säge 37,5/Min · Tiegel 3,2 s) · Stufe 12 = ×4 (Säge 120/Min · Tiegel 1 s) · Feuer wird BILLIGER: P je Kohle auf Stufe 12 nur 7,8/9,0 (Stufe 0: 20,2/32,8)':'Level 2 = +25 % (saw 37.5/min · crucible 3.2 s) · Level 12 = ×4 (saw 120/min · crucible 1 s) · fire gets CHEAPER: P per coal at level 12 only 7.8/9.0 (level 0: 20.2/32.8)',
'1 Stamm → 200 Bretter in 400 Sek = 30/Min · Anzeige 0,15 Stämme/Min · 0,5 % Abbau je Vorgang · läuft nur DURCH, wenn ein Abnehmer (Lager/Verkauf) die Bretter abnimmt · lädt bis 3 Stämme als Puffer · Stufe 2: 37,5/Min (1 Brett je 1,6 s) · Stufe 12: 120/Min (0,5 s · 0,6 Stämme/Min) — 1 Stamm bleibt IMMER 200 Bretter':'1 log → 200 planks in 400 s = 30/min · display 0.15 logs/min · 0.5 % progress per cycle · only RUNS when a consumer (storage/sales) takes the planks · buffers up to 3 logs · Level 2: 37.5/min (1 plank per 1.6 s) · Level 12: 120/min (0.5 s · 0.6 logs/min) — 1 log ALWAYS stays 200 planks',
'15er-Batch = 1 Stück je 4 Sek (15/Min) · 1-Stamm-Feuer-Test: 99 Kohle am Steinofen / 61 am Hochofen · Stufe 2: 18,8/Min (3,2 s) · Stufe 12: 60/Min (1 s, Puffer wächst 15→60)':'Batch of 15 = 1 piece per 4 s (15/min) · 1-log fire test: 99 coal in the stone furnace / 61 in the blast furnace · Level 2: 18.8/min (3.2 s) · Level 12: 60/min (1 s, buffer grows 15→60)',
'Wie Schmelztiegel (gleiche Rezepte) — Spiel-Test Sep 2026: Geschwindigkeit & Ausgabe IDENTISCH. Hunger 6/Sek je Tiegel BESTÄTIGT (User + Codex „Heat Speed 6“; normaler Tiegel 4/Sek). Platzbedarf ≈ 1×1,1 = 3 Quadrate — 7 nebeneinander auf dem Hochofen (8. Platz am Ausgang bliebe frei, bleibt absichtlich weg), 3 auf dem Steinofen. Höhe = Anzahl Fenster, Spiel-max 10, Empfehlung 5. ⚠️ Wärme wandert nur nach OBEN und nur, solange der TIEGEL DARUNTER arbeitet (Steam-Bericht Okt 2025: „no heat transfer when idle“) → unten ein Dauer-Zulauf-Rezept halten, sonst kühlt der Turm oben ab!':'Like the crucible (same recipes) — game test Sep 2026: speed & output IDENTICAL. Hunger 6/s per crucible CONFIRMED (user + Codex “Heat Speed 6”; normal crucible 4/s). Footprint ≈ 1×1.1 = 3 squares — 7 side by side on the blast furnace (the 8th slot at the exit would remain free, deliberately left out), 3 on the stone furnace. Height = number of windows, game max 10, recommended 5. ⚠️ Heat only travels UPWARD and only while the crucible BELOW is working (Steam report Oct 2025: “no heat transfer when idle”) → keep a constant-feed recipe at the bottom, otherwise the tower cools from the top!',
'(Vorhersage exakt — Bretter-Stau, sie braucht nur 20/Min) · Säge + 2 Verbesserte = schnellste Lösung ·':'(prediction exact — plank jam, it only needs 20/min) · saw + 2 enhanced = fastest solution ·',
'· 3 Felder lang · Stein→Sand 10/10 in 6 Sek (Datenblatt exakt bestätigt) · ~2× schneller als der Schleifer (Zahnrad: 3 s statt 6 s) · 🏁 Wettrennen: 1 Säge + 1 Verbesserte = 10:00 gegen 6:50 für 3 kleine — Stau am eigenen Appetit':'· 3 fields long · stone→sand 10/10 in 6 s (datasheet confirmed exactly) · ~2× faster than the grinder (gear: 3 s instead of 6 s) · 🏁 race: 1 saw + 1 enhanced = 10:00 vs 6:50 for 3 small ones — jamming on its own appetite',
'🏁 Wettrennen (Spiel, Sep 2026, je 1 Stamm → 200 Räder):':'🏁 Race (game, Sep 2026, 1 log each → 200 wheels):',
'Grün = voll versorgt · Gelb = läuft nur eingeschränkt (Teillast, Band > 60/Min oder Überschuss/Stau) · Rot = steht oder falsches Material. 🟡 Teillast heißt: Die Maschine arbeitet im Spiel, wartet aber zwischendurch — z. B. 1 Sägewerk an 4 Schleifer = nur 75 %.':'Green = fully supplied · Yellow = runs restricted (partial load, belt > 60/min or surplus/jam) · Red = stalled or wrong material. 🟡 Partial load means: the machine works in-game but waits in between — e.g. 1 saw feeding 4 grinders = only 75 %.',
'Farben wie im Spiel:':'Colors like in the game:',
'Die Anzahl (×N) einer Maschine erzeugt':'The count (×N) of a machine creates',
'— eine Kreissage ×10 hat 10 Anschlüsse und wird entsprechend lang (ab 5 wächst die Box mit, 1 Feld je Anschluss).':'— a table saw ×10 has 10 ports and grows accordingly long (from 5 the box grows, 1 field per port).',
'wie im Spiel: 1 Kreissage (30 Bretter/Min) versorgt fair 3 Schleifer (Zahnrad, je 10/Min) mit 100 %. Mehr Abnehmer als Ware → Teillast (im Spiel läuft die Verteilung dann schlecht).':'like in the game: 1 table saw (30 planks/min) fairly supplies 3 grinders (gear, 10/min each) at 100 %. More consumers than goods → partial load (distribution runs poorly in-game).',
'bleibt immer einzeln (rauf = einer, runter = ein zweiter), darf aber beliebig viele Linien haben. Maximum: 10 Maschinen pro Box.':'always stays single (up = one, down = a second), but may have any number of lines. Maximum: 10 machines per box.',
'N Ein- und N Ausgänge':'N inputs and N outputs','Eine Linie darf mehrfach abzweigen':'A line may branch multiple times','Aufzug:':'Elevator:',
'= blauer Punkt (Wegpunkt) wird eingesetzt. Punkt':'= a blue dot (waypoint) is inserted. Drag','= Linie verbiegen.':'= bend the line.','= Punkt löschen.':'= delete the dot.','= ganze Verbindung löschen.':'= delete the whole connection.',
'Doppelklick auf eine Linie':'Double-click on a line','ziehen':'drag','Rechtsklick auf den Punkt':'Right-click on the dot','Rechtsklick auf die Linie':'Right-click on the line',
'1. Baue unten (EG) deine Maschinen wie gewohnt.':'1. Build your machines at the bottom (ground floor) as usual.',
'anklicken und neben deine Maschine stellen. Es entstehen':'and place it next to your machine. This creates',
': eine im EG, das Gegenstück eine Etage höher.':': one on the ground floor, the counterpart one floor up.',
'3. Verbinde deine Maschine per Band mit dem':'3. Connect your machine with a belt to the','(er nimmt alles an).':'(it accepts everything).',
'4. Oben in der Leiste rechts':'4. In the bar at the top right','drücken (oder':'(or',') → du siehst Etage 1 mit dem Gegenstück an derselben Stelle.':') → you see floor 1 with the counterpart in the same place.',
'5. Vom Gegenstück weiterverbinden zu den Maschinen der Etage.':'5. Connect onward from the counterpart to the machines of that floor.',
'. Alle Etagen zeigt':'. All floors are shown by','. Im Aufzug-Panel kannst du die Ziel-Etage ändern und direkt „dorthin springen“.':'. In the elevator panel you can change the target floor and “jump there” directly.',
'„🛗 Logistik & Aufzug“':'“🛗 Logistics & elevator”','automatisch zwei Aufzugs-Boxen':'two elevator boxes automatically','Aufzug im EG':'elevator on the ground floor',
'Etage fertig bauen → Boxen per':'Finish a floor → select boxes via','oder Rahmen auswählen →':'or drag a frame →','→ mit 🏢▲ eine Etage höher →':'→ with 🏢▲ one floor up →','= identisches Stockwerk (Aufzug-Paare werden mitverkoppelt).':'= an identical floor (elevator pairs stay paired).',
'Ofen platzieren → im Ofen-Panel per Dropdown Maschine wählen und':'Place a furnace → in the furnace panel pick a machine via dropdown and','(oder Maschine auf Ofen ziehen). Der Ofen zählt':'(or drag a machine onto the furnace). The furnace counts',
'(Steinofen 9, Hochofen 42; kleiner Tiegel 3, stapelbarer 4). Brennstoff per Band/Zuleitung in den Ofen — gemischte Brennstoffe werden addiert.':'(stone furnace 9, blast furnace 42; small crucible 3, stackable 4). Fuel into the furnace via belt/line — mixed fuels add up.',
'Etage wechseln ·':'Switch floor ·','Dialog schließen/Abbrechen · Mausrad Zoom · Leere Fläche ziehen = Karte schieben':'Close dialog/cancel · mouse wheel zoom · drag empty space = pan the map',
'Dieses Tool bleibt für immer kostenlos, ohne Login, ohne Tracking, ohne Spenden. Wenn du es unterstützen magst:':'This tool stays free forever, no login, no tracking, no donations. If you want to support it:',
'— das hilft den Machern am meisten. ❤️':'— that helps the makers the most. ❤️',
'kauf dir das Spiel und hinterlasse eine gute Bewertung':'buy the game and leave a good review',
'— die Kopie bleibt an der Maus, du verlierst nichts. Zonen: 🗂️ Zonen verwalten →':'— the copy stays on your cursor, you lose nothing. Zones: 🗂️ Manage zones →',
'— die Zone wird als eingefrorener Snapshot gestempelt und wächst dadurch NICHT mit jedem Einfügen (Ebenen landen RELATIV zu deiner aktuellen Etage — ein EG-Inhalt auf E1 gestempelt steht dann komplett auf E1). Strg+V fügt auf der aktuellen Etage ein (Turm-Workflow: Etage bauen, kopieren, eine hoch, einfügen).':'— the zone is stamped as a frozen snapshot and does NOT grow with each paste (floors land RELATIVE to your current floor — ground-floor content stamped on F1 ends up entirely on F1). Ctrl+V pastes onto the current floor (tower workflow: build floor, copy, move up one, paste).',
'Die eingestellte Rate (z. B. 1 Stamm/Min) ist eine Annahme — im Spiel liefert das Portal nur, wenn 200 Gold je Stamm ankommen (Geldzufluss!). Ab':'The configured rate (e.g. 1 log/min) is an assumption — in-game the portal only delivers if 200 gold per log arrives (money inflow!). From',
'wird die Portal-Linie deshalb':'the portal line is therefore',
': Mehrere Maschinen an einem Portal brauchen Anlauf (Sägen × 3 Stämme Puffer) und echten Geldzufluss. Profi-Build: 1 Portal direkt je Maschine.':': several machines on one portal need ramp-up (saws × 3 logs buffer) and real money inflow. Pro build: 1 portal per machine.',
'Die 🧰-Tür in der Maschinen-Leiste zeigt bei markierten Maschinen direkt die passenden Aktionen (Kopieren / Zur Zone / Löschen) — und sonst ALLES: Status, Vorlagen, Codex, Karte leeren … Die':'The 🧰 door in the machine bar shows the matching actions for selected machines (copy / to zone / delete) — and otherwise EVERYTHING: status, templates, codex, clear map … The',
'-Taste löscht die Markierung.':'-key deletes the selection.',
'Jeder Klick stempelt eine weitere Kopie':'Every click stamps another copy','ESC oder rechte Maustaste':'ESC or right mouse button','einfach bei aufgelegter Kopie die Karte ziehen':'simply drag the map while holding the copy',
'(Ausgang, rechte Seite einer Box) mit gedrückter Maus zum':'(output, right side of a box) with the mouse held down to the','(Eingang, linke Seite) der Zielmaschine ziehen.':'(input, left side) of the target machine.',
'kopiert die markierte Maschine(n) —':'copies the selected machine(s) —','nimmt die Kopie an die Maus.':'takes the copy to your cursor.','an diese Stelle (für 3–4 gleiche Linien),':'to this spot (for 3–4 identical lines),','beendet. Ist beim Tragen etwas im Weg:':'to finish. If something is in the way while carrying:',
// --- Werkzeuge / Sonstiges ---
'🗑️ Alles löschen':'🗑️ Delete everything','Alles löschen':'Delete everything','Karte leeren':'Clear map',
'Eigene Farbe zur Unterscheidung (z. B. Holz = Braun, Eisen = Grau).':'Custom color for distinction (e.g. wood = brown, iron = gray).',
'— sobald eine Leitung nicht mehr stimmt, übersteuert das System deine Farbe.':'— as soon as a line is no longer correct, the system overrides your color.',
'🚦 Rot / Orange / Grün bleiben dem System vorbehalten':'🚦 Red / orange / green are reserved for the system',
'Das Spiel mischt selbst Sprachen (intern „Wood“, angezeigt „Logs“, deutsch „Holz“). Trage hier ein, wie das Item':'The game mixes languages itself (internally “Wood”, shown as “Logs”, German “Holz”). Enter here how the item',
'bei dir im Spiel heißt':'is called in your game','— gilt sofort, wird gespeichert und mit jedem Setup-Export mitgegeben.':': applies immediately, is saved and included in every setup export.',
'Dieser Planer ist ein':'This planner is an','zur Planung von Produktionsketten —':'for planning production chains —','und in keiner Weise mit ihm verbunden. Alle Spiel-Werte nach bestem Wissen, ohne Gewähr. Lizenz:':'and not affiliated with it in any way. All game values to the best of our knowledge, without warranty. License:',
'— kein Verkauf, keine Werbung, keine Spenden im Tool.':'— no sale, no ads, no donations in the tool.',
'Projekt-Link folgt mit der Veröffentlichung auf GitHub.':'Project link will follow with the GitHub release.',
'kein Produkt des Spiel-Herstellers':'not a product of the game\'s developer',
'Neu hier?':'New here?','Beispiel-Kette laden':'Load example chain',
'Ganzen Karte leeren?':'Clear the whole map?','wirklich':'really',
// --- Onboarding / Beta ---
'Dieses Tool wird live gegen das echte Spiel geprüft (Early Access — das Spiel selbst ändert sich noch).':'This tool is verified live against the real game (Early Access — the game itself still changes).',
'Zahlen können daher von Messung zu Messung leicht abweichen. Nichts davon ist ein Fehler von dir —':'Numbers may therefore vary slightly between measurements. None of that is your fault —',
'melde einfach, was dir auffällt':'simply report what you notice',', dann wird es korrigiert.':', and it will be fixed.',
'Warum „Beta“?':'Why “beta”?','Details & Änderungen:':'Details & changes:',
'Warum Beta?':'Why beta?'
};
const I18N_RULES_RAW=[
  ["Wie Schmelztiegel \\(gleiche Rezepte\\) — Spiel-Test Sep 2026: Geschwindigkeit & Ausgabe IDENTISCH\\. Hunger 6/Sek je Tiegel BESTÄTIGT \\(User \\+ Codex „Heat Speed 6\"; normaler Tiegel 4/Sek\\)\\. Platzbedarf ≈ 1×1,1 = 3 Quadrate — 7 nebeneinander auf dem Hochofen \\(8\\. Platz am Ausgang bliebe frei, bleibt absichtlich weg\\), 3 auf dem Steinofen\\. Höhe = Anzahl Fenster, Spiel-max 10, Empfehlung 5\\. ⚠️ Wärme wandert nur nach OBEN und nur, solange der TIEGEL DARUNTER arbeitet \\(Steam-Bericht Okt 2025: „no heat transfer when idle\"\\) → unten ein Dauer-Zulauf-Rezept halten, sonst kühlt der Turm oben ab!","Like the melting crucible (same recipes) — game test Sep 2026: speed & output IDENTICAL. Appetite 6/s per crucible CONFIRMED (user + codex „Heat Speed 6\"; normal crucible 4/s). Footprint ≈ 1×1.1 = 3 squares — 7 side by side on the blast furnace (8th slot at the output would stay free, deliberately left out), 3 on the stone furnace. Height = number of windows, game max 10, recommended 5. ⚠️ Heat only travels UPWARD and only while the crucible BELOW is working (Steam report Oct 2025: „no heat transfer when idle\") → keep a continuous-feed recipe at the bottom, otherwise the top of the tower cools down!"],
  ["1 Baumstamm → 200 Bretter in 400s = 30 Bretter/Min · lädt bis zu 3 Stämme als PUFFER \\(ändert den Durchsatz nicht\\) · im Spiel: von Hand oder 🛒 Einkaufsportal · SPIEL-BESTÄTIGT \\(Sandbox, Sep 2026\\): Anzeige 0,15 Stämme/Min · 0,5% Abbau je Vorgang · läuft nur DURCH, wenn ein Abnehmer \\(Lager/Verkauf\\) die Bretter abnimmt · Stufe 2: 37,5 Bretter/Min \\(1,6 Sek/Stück\\) · Stufe 12: 120 Bretter/Min \\(0,5 Sek/Stück · 0,6 Stämme/Min\\) = ×4 — 1 Stamm bleibt immer 200 Bretter","1 log → 200 planks in 400 s = 30 planks/min · loads up to 3 logs as BUFFER (does not change throughput) · in-game: by hand or 🛒 purchasing portal · GAME-CONFIRMED (sandbox, Sep 2026): display shows 0.15 logs/min · 0.5% decay per cycle · only runs THROUGH when a consumer (storage/sales) takes the planks · level 2: 37.5 planks/min (1.6 s/piece) · level 12: 120 planks/min (0.5 s/piece · 0.6 logs/min) = ×4 — 1 log always stays 200 planks"],
  ["WELTBAUM \\(Shop-Level 8\\): NÄHRWERT kommt aus DÜNGER — kein Band-Item! Stufen: Setzling 6M · kleiner Baum 5M · Max 3M \\(zusammen ~14M\\)\\. Dünger-Nährwerte \\(Codex 0\\.5\\.4471, offiziell\\): Basis 144V/12Vs · Fortgeschritten 720V/144Vs · Wachstums-Trank 6480V/2160Vs · Fruchtbarer Katalysator 24\\.000V/6000Vs · Allheilmittel 200\\.000V/20000Vs → 6M ≈ 41\\.667 Basis oder nur 250 Katalysatoren\\. Setzling frisst 10\\.000/Sek, ausgewachsen ~200/Sek\\. Im Spiel nachmessen!","WORLD TREE (shop level 8): NUTRITION comes from FERTILIZER — not a belt item! Stages: sapling 6M · small tree 5M · max 3M (≈14M total). Fertilizer nutrition (codex 0.5.4471, official): basic 144V/12Vs · advanced 720V/144Vs · growth potion 6480V/2160Vs · fertile catalyst 24,000V/6000Vs · panacea 200,000V/20,000Vs → 6M ≈ 41,667 basic or just 250 catalysts. Sapling consumes 10,000/s, fully grown ~200/s. Measure in-game!"],
  ["💡 Band-Optimum Hochofen: 12 kleine Tiegel \\(3 Bänder à 4\\) · STAPELBARE: max (\\d+) Plätze je Ofen \\(Stapel-Tiegel ≈ 1×1,1 Grundfläche = 3 Quadrate\\) · Höhe = Anzahl FENSTER auf der Box — Spiel-max 10, Empfehlung 5 · Türme nur per Lift","💡 Blast-furnace belt optimum: 12 small crucibles (3 belts of 4) · STACKABLE: max $1 slots per furnace (stack crucible ≈ 1×1.1 footprint = 3 squares) · height = number of WINDOWS on the box — game max 10, recommended 5 · towers only via lift"],
  ["📤 <b>(\\d+) Ausgänge ohne Line:</b> (\\d+) Maschinen machen zusammen ([\\d.]+)/Min (.*?) — die fließen nirgendwo hin\\. Lines an freie Ausgänge ziehen oder Maschinen-Anzahl senken","📤 <b>$1 outputs without a line:</b> $2 machines produce $3/min $4 in total — it flows nowhere. Draw lines to free outputs or reduce the machine count"],
  ["📤 <b>1 Ausgang ohne Line:</b> 1 Maschine macht zusammen ([\\d.]+)/Min (.*?) — die fließen nirgendwo hin\\. Lines an freie Ausgänge ziehen oder Maschinen-Anzahl senken","📤 <b>1 output without a line:</b> 1 machine produces $1/min $2 — it flows nowhere. Draw a line to the free output or reduce the machine count"],
  ["Die eingestellte Rate \\(z\\.[\\s\\u00A0]B\\. 1 Stamm/Min\\) ist eine Annahme — im Spiel liefert das Portal nur, wenn 200 Gold je Stamm ankommen \\(Geldzufluss!\\)\\. Ab","The configured rate (e.g. 1 log/min) is an assumption — in-game the portal only delivers if 200 gold per log actually arrives (money inflow). From"],
  ["Die eingestellte Rate \\(z\\.[\\s\\u00A0]B\\. 1 Stamm/Min\\) ist eine Annahme — im Spiel liefert das Portal nur, wenn 200 Gold je Stamm ankommen \\(Geldzufluss!\\)\\.","The configured rate (e.g. 1 log/min) is an assumption — in-game the portal only delivers if 200 gold per log actually arrives (money inflow!)."],
  ["🟡 Teillast heißt: Die Maschine arbeitet im Spiel, wartet aber zwischendurch — z\\.[\\s\\u00A0]B\\.[\\s\\u00A0]1 Sägewerk an 4 Schleifer = nur 75[\\s\\u00A0]%\\.","🟡 Partial load means: the machine works in-game but waits in between — e.g. 1 sawmill feeding 4 grinders = only 75%."],
  ["📤 <b>ÜBERSCHUSS:</b> \\+([\\d.]+)/Min (.*?) — Abnehmer nehmen nur ([\\d.]+) von ([\\d.]+)/Min ab — 📦 Lager / 🏪 Verkauf anschließen oder Anzahl senken","📤 <b>SURPLUS:</b> +$1/min $2 — consumers only take $3 of $4/min — attach 📦 storage / 🏪 sales or reduce the count"],
  ["Samen von Hand einsetzen \\(kein Anschluss nötig\\) → 200 Lein · JEDER Dünger per Band annehmbar \\(optional\\): besserer Dünger = besserer Ertrag","Sow seeds by hand (no connection needed) → 200 flax · ANY fertilizer accepted via belt (optional): better fertilizer = better yield"],
  ["Grün = voll versorgt · Gelb = läuft nur eingeschränkt \\(Teillast, Band > 60/Min oder Überschuss/Stau\\) · Rot = steht oder falsches Material\\.","Green = fully supplied · Yellow = restricted (partial load, belt > 60/min or surplus/backlog) · Red = idle or wrong material."],
  [" (\\d+) Maschinen machen zusammen ([\\d.]+)/Min (.*?) — die fließen nirgendwo hin\\. Lines an freie Ausgänge ziehen oder Maschinen-Anzahl senken"," $1 machines produce $2/min $3 in total — it flows nowhere. Draw lines to free outputs or reduce the machine count"],
  ["Verbindet Etagen: transportiert wie ein Förderband — Tempo = Band-Tempo \\(steigt mit der Fabrik-Stufe\\), Basis 60/Min · 1 Band-Anschluss","Connects floors: transports like a conveyor — speed = belt speed (rises with factory level), base 60/min · 1 belt connection"],
  [" 1 Maschine macht zusammen ([\\d.]+)/Min (.*?) — die fließen nirgendwo hin\\. Lines an freie Ausgänge ziehen oder Maschinen-Anzahl senken"," 1 machine produces $1/min $2 — it flows nowhere. Draw a line to the free output or reduce the machine count"],
  ["Das Portal liefert nur, wenn (\\d+) Gold da sind — die Rate (\\d+)/Min ist eine Annahme, KEIN Garant! Ohne Einkommen = 0 Lieferung\\.","The portal only delivers when $1 gold is available — the $2/min rate is an assumption, NOT a guarantee! Without income = 0 delivery."],
  ["RÜCKSTAU ([\\d.]+)/Min — (\\d+) Lines tragen nur ([\\d.]+)/Min \\(Cap ([\\d/]+\\w*), Quelle macht ([\\d.]+)/Min\\) — weitere Line nötig","BACKPRESSURE $1/min — $2 lines only carry $3/min (cap $4, source produces $5/min) — another line needed"],
  ["Zielprodukt \\+ Wunschmenge/Min wählen - der Rechner ermittelt rückwärts den kompletten Maschinenbedarf bis zu den Rohstoffen\\.","Pick a target product + desired amount/min — the calculator works backwards to the full machine requirement down to raw materials."],
  ["Samen EINMAL von Hand setzen, dann Dünger liefern \\(jeder Dünger zählt\\) → 200 Lein · Dünger-Menge geschätzt, im Spiel messen","Sow seeds ONCE by hand, then deliver fertilizer (any counts) → 200 flax · fertilizer amount estimated, measure in-game"],
  [" \\+([\\d.]+)/Min (.*?) — Abnehmer nehmen nur ([\\d.]+) von ([\\d.]+)/Min ab — 📦 Lager / 🏪 Verkauf anschließen oder Anzahl senken"," +$1/min $2 — consumers only take $3 of $4/min — attach 📦 storage / 🏪 sales or reduce the count"],
  ["RÜCKSTAU ([\\d.]+)/Min — 1 Line tragen nur ([\\d.]+)/Min \\(Cap ([\\d/]+\\w*), Quelle macht ([\\d.]+)/Min\\) — weitere Line nötig","BACKPRESSURE $1/min — 1 line only carries $2/min (cap $3, source produces $4/min) — another line needed"],
  ["📥 Eingang im Spiel: nur Münzen — das Portal sammelt (\\d+) Gold, DANN liefert es 1 Stück\\. Im Editor wird nichts bezahlt\\.","📥 In-game input: coins only — the portal collects $1 gold, THEN delivers 1 piece. Nothing is paid in the editor."],
  ["• Brennwerte: Allheilmittel 320\\.000 \\(König, 160× Holz!\\) · Holz 2000 · Koks 600 · Kohle 540 · Holzkohle 40 · Brett 20","• Fuel values: panacea 320,000 (king, 160× wood!) · wood 2000 · coke 600 · coal 540 · charcoal 40 · plank 20"],
  ["(\\d+) Säge\\(n\\) × 3 Stämme Puffer = (\\d+) Stämme, bis alle voll arbeiten — bei (\\d+)/Min = (\\d+) Minuten Anlaufzeit","$1 saw(s) × 3 log buffer = $2 logs until everything runs at full speed — at $3/min = $4 minutes ramp-up"],
  ["📐 Spiel-gemessen: Grundverbrauch (\\d+) P/Sek · Holz 2000 · Koks 600 · Kohle 540 · Holzkohle 40 Heat/Stück ·","📐 Measured in-game: base consumption $1 p/s · wood 2000 · coke 600 · coal 540 · charcoal 40 heat/piece ·"],
  ["\\(frei: (\\d+) Quadrate ≈ (\\d+) kleine Tiegel · kleiner Tiegel=3, stapelbarer=3 \\(≈1×1,1\\) — NICHT Stück!\\)","(free: $1 squares ≈ $2 small crucibles · small crucible=3, stackable=3 (≈1×1.1) — NOT pieces!)"],
  ["(\\d+) von (\\d+) Maschinen versorgt \\(([\\d.]+)/([\\d.]+) = (\\d+)%\\) — Line an einen freien Eingang ziehen","$1 of $2 machines supplied ($3/$4 = $5%) — draw a line to a free input"],
  ["1 Kohle \\((\\d+) Heat\\) → (\\d+) Dampf — versorgt Dampfheizkissen über Rohre \\(unbegrenzter Durchsatz\\)","1 coal ($1 Heat) → $2 steam — feeds steam heating pads via pipes (unlimited throughput)"],
  ["Abnehmer nehmen nur ([\\d.]+)/Min — Potenzial ([\\d.]+)/Min \\((\\d+) genutzte Ausgänge à 1 Maschine\\)","consumers only take $1/min — potential $2/min ($3 used outputs, 1 machine each)"],
  ["1 Baumstamm \\((\\d+) Heat\\) brennt (\\d+)s → (\\d+) Hitze/Sek\\. Max (\\d+) Maschine \\((\\d+) Hitze\\)","1 log ($1 Heat) burns $2 s → $3 heat/s. Max $4 machine ($5 heat)"],
  ["STAPELBAR — gleiche Werte wie Schmelztiegel \\(User-Info Sep 2026\\): 1 Brett → 1 Holzkohle in 4s","STACKABLE — same values as the melting crucible (user info, Sep 2026): 1 plank → 1 charcoal in 4 s"],
  ["(\\d+) Ausgänge an STEHENDER Maschinen — Lines liefern nichts \\(Input fehlt an dieser Maschine\\)","$1 outputs on IDLE machines — lines deliver nothing (these machines have no input)"],
  ["Abnehmer nehmen nur ([\\d.]+)/Min — Potenzial ([\\d.]+)/Min \\(1 genutzter Ausgang à 1 Maschine\\)","consumers only take $1/min — potential $2/min (1 used output, 1 machine)"],
  ["1 Portal DIREKT je Säge \\(kurzer Geld-Weg\\) statt (\\d+) Maschinen an einem Verteiler-Band\\.","1 portal DIRECTLY per saw (short money path) instead of $1 machines on one distributor belt."],
  ["Eigene Farbe zur Unterscheidung \\(z\\.[\\s\\u00A0]B\\.[\\s\\u00A0]Holz = Braun, Eisen = Grau\\)\\.","Custom color for distinction (e.g. wood = brown, iron = gray)."],
  ["1 Ausgang an STEHENDER Maschine — Lines liefern nichts \\(Input fehlt an dieser Maschine\\)","1 output on an IDLE machine — lines deliver nothing (this machine has no input)"],
  ["nimmt (.*?) NICHT an — diese Line liefert nichts! Rezept am Ziel wechseln oder Line lösen","does not accept $1 — this line delivers nothing! Change the recipe at the target or remove the line"],
  ["die fließen nirgendwo hin\\. Lines an freie Ausgänge ziehen oder Maschinen-Anzahl senken","it flows nowhere. Draw lines to free outputs or reduce the machine count"],
  ["für die Stückzahl \\(z\\.[\\s\\u00A0]B\\.[\\s\\u00A0]×3 Schleifer = 1 Klick statt 3 Boxen\\)\\.","for the count (e.g. ×3 grinders = 1 click instead of 3 boxes)."],
  ["Jede Linie endet an EINER Maschine — Maschinen ohne eigene Leitung stehen im Spiel","Every line ends at exactly ONE machine — machines without their own line stand idle in-game"],
  ["🌱 Dünger: JEDER wird angenommen \\(optional per Band\\) — Samen von Hand einsetzen","🌱 Fertilizer: ANY kind is accepted (optionally via belt) — sow seeds by hand"],
  ["Zyklus-Rezept — recycelt einen Teil zurück, echter Kaufbedarf ist NIEDRIGER","cycle recipe — recycles part of it back, real purchase demand is LOWER"],
  ["📦 Maschinen: (\\d+) \\(([\\d.]+) Hitze\\) \\| ⛽ Brennstoff: (\\d+) \\((\\d+) Heat\\)","📦 Machines: $1 ($2 heat) | ⛽ Fuel: $3 ($4 heat)"],
  ["im Spiel: Waren müssen zum Verkauf ins EG — per 🛗 Aufzug dorthin verbinden","in-game: goods for sale must reach the ground floor — connect them there via 🛗 lift"],
  ["(\\d+) Ausgänge ohne Line — jeder Ausgang trägt 1 Maschine \\(([\\d.]+)/Min\\)","$1 outputs without a line — each output carries 1 machine ($2/min)"],
  ["Tiegel (\\d+) — noch auf keinem Ofen \\(Platz-Nummerierung kommt vom Ofen\\)","Crucible $1 — not on any furnace yet (slot numbering comes from the furnace)"],
  ["^✏️ Noch kein Text — klicke oben rechts auf ✏️ und schreibe deinen Text$","✏️ No text yet — click ✏️ top right and write your text"],
  ["Im Spiel: Ware von Hand liefern oder ein 🛒 Einkaufsportal davor setzen","In-game: deliver goods by hand or place a 🛒 purchasing portal in front"],
  ["^\\(([\\d.]+)/([\\d.]+) = (\\d+)%\\) — Line an einen freien Eingang ziehen$","($1/$2 = $3%) — draw a line to a free input"],
  ["🔌 Anschlüsse: (\\d+) \\((\\d+) Maschinen \\+ (\\d+) Brennstoff-Zufuhren\\)","🔌 Connections: $1 ($2 machines + $3 fuel feeds)"],
  ["\\(([\\d.]+)/([\\d.]+) = (\\d+)%\\) — Line an einen freien Eingang ziehen","($1/$2 = $3%) — draw a line to a free input"],
  ["nimmt NUR feste Items an — Flüssigkeiten gehören ins 🧪 Kolben-Lager","accepts ONLY solid items — liquids belong in the 🧪 piston storage"],
  [", bis alle voll arbeiten — bei (\\d+)/Min = (\\d+) Minuten Anlaufzeit",", until everything runs at full speed — at $1/min = $2 minutes ramp-up"],
  ["max (\\d+)/Band \\(bei eingestellter Logistics-Effizienz (\\d+)/Min\\)","max $1/belt (at the configured logistics efficiency of $2/min)"],
  ["Maschinen-Heat × ([\\d.]+)% Effizienz \\+ (\\d+) Ofen-Grundverbrauch","machine heat × $1% efficiency + $2 furnace base consumption"],
  ["\\(Potenzial — noch keine Line · (\\d+) Maschinen à ([\\d.]+)/Min\\)","(potential — no line yet · $1 machines at $2/min each)"],
  ["^📤 (.+): Kein Abnehmer verbunden — im Spiel staut die Ware!$","📤 $1: no consumer connected — goods back up in-game!"],
  ["\\(Potenzial — noch keine Line · 1 Maschine à ([\\d.]+)/Min\\)","(potential — no line yet · 1 machine at $1/min)"],
  ["Alle\\s+Berechnungen im Tool werden entsprechend skaliert\\.","All calculations in the tool are scaled accordingly."],
  ["im Spiel: \"Factory Efficiency\" und \"Logistics Efficiency\"","in-game: \"Factory Efficiency\" and \"Logistics Efficiency\""],
  ["🔥 Hitze: braucht ([\\d.]+) · kommt ([\\d.]+) /Sek ✅ Bereit","🔥 Heat: needs $1 · gets $2 /s ✅ Ready"],
  ["🔥 Benötigt: (\\d+) Hitze/Sek — ⚠️ steht auf keinem Ofen!","🔥 Needs: $1 heat/s — ⚠️ not placed on any furnace!"],
  ["🟡 PORTAL (\\d+) % AUSGELASTET \\(([\\d.]+) von (\\d+)/Min\\)","🟡 PORTAL $1 % UTILIZED ($2 of $3/min)"],
  ["⚠️ (\\d+) Eingänge ohne Leitung — (\\d+) Maschinen stehen","⚠️ $1 inputs without a line — $1 machines are idle"],
  ["➕ Neue Zone aus aktueller Auswahl \\((\\d+) ausgewählt\\)","➕ New zone from current selection ($1 selected)"],
  ["⛔ ([a-z_]+): nichts kommt an — Maschine steht!","⛔ $1: nothing arrives — machine is idle!"],
  ["— Überschuss ([\\d.]+)/Min bleiben auf dem Band","— surplus of $1/min stays on the belt"],
  ["^(\\d+) Maschinen machen zusammen ([\\d.]+)/Min$","$1 machines produce $2/min"],
  ["nimmt NUR Flüssigkeiten an \\(Rohr-Anbindung\\)","accepts ONLY liquids (pipe connection)"],
  ["^⚠️ (.+): nichts kommt an — Maschine steht!$","⚠️ $1: nothing arrives — machine is stalled!"],
  ["🧱 Platz: (\\d+) Boxn? belegen (\\d+) von (\\d+)","🧱 Space: $1 boxes occupy $2 of $3"],
  ["(\\d+) Maschinen machen zusammen ([\\d.]+)/Min","$1 machines produce $2/min"],
  ["^⛔ (.+): nichts kommt an — Maschine steht!$","⛔ $1: nothing arrives — machine is stalled!"],
  ["STAPELBAR — gleiche Werte wie Schmelztiegel","STACKABLE — same values as the crucible"],
  ["— 💡 noch keine Wärme-Maschinen auf dem Ofen","— 💡 no heat machines on this furnace yet"],
  ["Gesäuberter Sand (\\d) \\(Refined Sand \\d\\)","Refined Sand $1"],
  ["kommt ([\\d.]+)/Min · braucht ([\\d.]+)/Min","gets $1/min · needs $2/min"],
  ["^📤 (.+): RÜCKSTAU — Ausgang überlastet!$","📤 $1: BACKPRESSURE — output overloaded!"],
  ["Trage hier deine Werte aus dem Spiel ein","Enter your values from the game here"],
  ["^1 Maschine macht zusammen ([\\d.]+)/Min$","1 machine produces $1/min"],
  ["Vitalitäts-Essenz \\(Vitality Essence\\)","Vitality Essence"],
  ["1 Maschine macht zusammen ([\\d.]+)/Min","1 machine produces $1/min"],
  ["^📥 NUR EINGANG — Aufzug nach UNTEN ⬇$","📥 INPUT ONLY — elevator DOWN ⬇"],
  ["Verkaufsraum #(\\d+) — gelieferte Ware","Sales room #$1 — delivered goods"],
  ["Kauft 1x (.+?) für ([\\d.]+) Goldmünze","Buys 1× $1 for $2 gold coins"],
  ["^📤 NUR AUSGANG — Aufzug nach OBEN ⬆$","📤 OUTPUT ONLY — elevator UP ⬆"],
  ["Großes Holzzahnrad \\(Large Wooden Gear\\)","Large Wooden Gear"],
  ["^(\\d+) von (\\d+) Maschinen versorgt$","$1 of $2 machines supplied"],
  ["⚠️ Keine Zuleitung — Maschine steht","⚠️ No supply line — machine is idle"],
  ["(\\d+) Säge\\(n\\) × 3 Stämme Puffer =","$1 saw(s) × 3 log buffer ="],
  ["schluckt ALLES, auch Flüssigkeiten","swallows EVERYTHING, liquids included"],
  ["steht auf Etage EG \\(Erdgeschoss\\)","located on floor GF (ground floor)"],
  ["im Spiel kaufen / 🛒 Einkaufsportal","buy in-game / 🛒 purchasing portal"],
  ["⚡ Lines voll \\(([\\d.]+)/([\\d.]+)\\)","⚡ lines full ($1/$2)"],
  ["^Im Spiel streut der Geldzufluss:$","In-game the money inflow varies:"],
  ["staut sich im Spiel auf dem Band","backs up on the belt in-game"],
  ["^Von Hand oder 🛒 Einkaufsportal$","By hand or 🛒 purchasing portal"],
  ["Lager #(\\d+) — eingelagerte Ware","Storage #$1 — stored goods"],
  ["Schwefelsäure \\(Sulfuric Acid\\)","Sulfuric Acid"],
  ["siehe \"Tab\"-Fenster → World-Tab","see the \"Tab\" window → World tab"],
  ["^1 Meteorite → alles in 3000s$","1 meteorite → everything in 3000s"],
  ["(\\d+) Maschinen · (\\d+) Aufzug","$1 machines · $2 lifts"],
  ["⚠️ kein Abfluss — 🏪/📦 anhängen","⚠️ no drain — attach 🏪/📦"],
  ["…kommt auf Etage (\\d+) heraus:","…exits on floor $1:"],
  ["🛒 Einkaufsportal - Ware kaufen","🛒 Purchasing portal — buy goods"],
  ["— erkennt selbst, was ankommt","— auto-detects whatever arrives"],
  ["Düstersporen \\(Gloom Spores\\)","Gloom Spores"],
  ["Düsterpilz \\(Gloom Fungus\\)","Gloom Fungus"],
  ["⏸ (\\d+) Maschinen wartet — ","⏸ $1 machines idle — "],
  ["([\\d.]+) Goldmünze je Stück","$1 gold coins each"],
  ["^(\\d+) Ausgänge ohne Line:$","$1 outputs without a line:"],
  ["Auslastung aktuell: (\\d+) %","Current utilization: $1 %"],
  ["\\| Gesamt: (\\d+) Maschinen","| Total: $1 machines"],
  ["⏸ (\\d+) Maschine wartet — ","⏸ $1 machine idle — "],
  ["^Kette in Karte einfügen$","Insert chain into map"],
  ["/Band \\(bei eingestellter","/belt (at the configured"],
  ["🔌 Connection calculator: ","🔌 Connection calculator: "],
  ["🔥 braucht (\\d+) Hitze/Sek","🔥 needs $1 heat/s"],
  ["Aufzug: (\\d+) Materialien","Lift: $1 materials"],
  ["Eisennägel \\(Iron Nails\\)","Iron Nails"],
  ["Kategorie unten wählen ⬇","Pick a category below ⬇"],
  ["Hitze/Sek \\(Ofen nötig\\)","heat/s (furnace required)"],
  ["([\\d.]+)/Min je Maschine","$1/min per machine"],
  ["Feenträne \\(Fairy Tear\\)","Fairy Tear"],
  ["^(\\d+) Maschinen machen$","$1 machines produce"],
  ["^Benötigte Maschinen:?$","Machines needed:"],
  ["^Benötigte Rohstoffe:?$","Raw materials needed:"],
  ["Mondträne \\(Moon Tear\\)","Moon Tear"],
  ["^⬇️ Eine Etage tiefer$","⬇️ One floor down"],
  ["^Fabrik-Einstellungen$","Factory settings"],
  ["Leinöl \\(Linseed Oil\\)","Linseed Oil"],
  ["Nährstoff \\(Nutrient\\)","Nutrient"],
  ["^1 Ausgang ohne Line:$","1 output without a line:"],
  ["^⬆️ Eine Etage höher$","⬆️ One floor up"],
  ["^Anschluss-Rechner: ","Connection calculator: "],
  ["^✏️ Text bearbeiten$","✏️ Edit text"],
  ["Türkis \\(Turquoise\\)","Turquoise"],
  ["📍 steht auf Etage EG","📍 located on floor EG"],
  ["Maschine(n)? wählen","Pick machine$1/"],
  ["Anschluss-Rechner: ","Connection calculator: "],
  ["📥 Brennstoff Input:","📥 Fuel input:"],
  ["\\((\\d+) Maschinen\\)","($1 machines)"],
  ["Bedarf: (\\d+) P/Sek","Demand: $1 p/s"],
  ["weitere Line nötig","another line needed"],
  ["^Speichern unter…$","Save as…"],
  ["\\((\\d+) Maschine\\)","($1 machine)"],
  ["(\\d+) Verbindungen","$1 connections"],
  ["Verkaufe/versende ","Sell / ship "],
  ["^1 Maschine macht$","1 machine produces"],
  ["^Text bearbeiten$","Edit text"],
  ["^Setup speichern$","Save setup"],
  ["Mörser \\(Mortar\\)","Mortar"],
  ["✅ Fabrik läuft — ","✅ Factory is running — "],
  ["🛒 Einkaufsportal","🛒 purchasing portal"],
  ["^Nur Zone: (.+)$","Only zone: $1"],
  ["Ehrliche Bilanz:","Honest balance:"],
  ["^Fabrik-Status$","Factory status"],
  [" \\(Ofen nötig\\)"," (furnace required)"],
  ["1 × Baumstämme","1 × logs"],
  ["^Profi-Build:$","Pro build:"],
  ["^(\\d+) Stämme$","$1 logs"],
  ["^ÜBERSCHUSS:$","SURPLUS:"],
  ["^Baumstämme$","logs"],
  ["Silbermünze","silver coin"],
  ["Kupfermünze","copper coin"],
  ["Erdgeschoss","ground floor"],
  ["^Map laden$","Load map"],
  ["^Berechnen$","Calculate"],
  ["^Werkzeuge$","Tools"],
  ["^💰 Kosten:$","💰 Cost:"],
  ["verbraucht","consumed"],
  ["Baumstämme","logs"],
  ["^Packung:$","Pack:"],
  ["Goldmünze","gold coins"],
  ["Werkzeuge","Tools"],
  ["braucht: ","needs: "],
  ["\\(läuft\\)","(running)"],
  ["^Kosten:$","Cost:"],
  ["^🛒 Kauf:$","🛒 Buy:"],
  ["^Anlauf:$","Ramp-up:"],
  ["Stück/Min","items/min"],
  ["Etage EG","floor GF"],
  ["je Stück","each"],
  ["^Anzahl$","Count"],
  ["erzeugt","produced"],
  ["Etage: ","Floor: "],
  ["^EG$","GF"],
  ["^Lager: ","Storage: "],
  ["steht \u2014 kein Zulauf","stalled \u2014 no inflow"],
  ["1 Stamm \u2192 200 Bretter = 30 Bretter/Min","1 log \u2192 200 planks = 30 planks/min"],
];
const I18N_RULES=I18N_RULES_RAW.map(r=>[new RegExp(r[0],"g"),r[1]]); // V1.9.58: JSON-Rohdaten, Regex zur Laufzeit — kein Literal-Escaping
function trText(s){
  if(typeof s!=='string'||uiLang==='de')return s;
  const t=s.trim();
  if(!t)return s;
  if(Object.prototype.hasOwnProperty.call(I18N_EXACT,t)){
    return s.match(/^\s*/)[0]+I18N_EXACT[t]+s.match(/\s*$/)[0];
  }
  let out=s;
  for(let i=0;i<I18N_RULES.length;i++){out=out.replace(I18N_RULES[i][0],I18N_RULES[i][1])}
  return out;
}
const __i18nUndo=[]; // V1.9.58: Originaltexte fuer Rueckschaltung EN->DE
function trNode(n){
  if(!n)return;
  if(n.nodeType===3){const v=n.nodeValue;if(v&&v.trim()){const t=trText(v);if(t!==v){__i18nUndo.push(['#text',n,v]);n.nodeValue=t}}return}
  if(n.nodeType!==1||n.tagName==='SCRIPT'||n.tagName==='STYLE')return;
  if(n.hasAttribute&&n.hasAttribute('title')){const v=n.getAttribute('title');const t=trText(v);if(t!==v){__i18nUndo.push(['title',n,v]);n.setAttribute('title',t)}}
  if(n.hasAttribute&&n.hasAttribute('placeholder')){const v=n.getAttribute('placeholder');const t=trText(v);if(t!==v){__i18nUndo.push(['placeholder',n,v]);n.setAttribute('placeholder',t)}}
  for(let i=0;i<n.childNodes.length;i++)trNode(n.childNodes[i]);
}
function trRestoreDoc(){ // V1.9.58: EN->DE live zurueckschalten
  for(let i=__i18nUndo.length-1;i>=0;i--){const u=__i18nUndo[i];
    try{if(!u[1].isConnected)continue;
      if(u[0]==='#text')u[1].nodeValue=u[2];else u[1].setAttribute(u[0],u[2]);
    }catch(e){}}
  __i18nUndo.length=0;
}
function trFullDoc(){if(uiLang==='de')return;trNode(document.body)}
const __i18nObs=new MutationObserver(ms=>{
  if(uiLang==='de')return;
  for(const m of ms){
    if(m.type==='characterData')trNode(m.target);
    else for(let i=0;i<m.addedNodes.length;i++)trNode(m.addedNodes[i]);
  }
});
try{__i18nObs.observe(document.body,{childList:true,subtree:true,characterData:true})}catch(e){}
if(uiLang!=='de'){trFullDoc();document.title='⚗️ Alchemy Factory Editor — Production Planner'}
(function(){const _a=window.alert&&window.alert.bind?window.alert.bind(window):window.alert;if(!_a)return;window.alert=function(m){_a(typeof m==='string'?trText(m):m)}})();

