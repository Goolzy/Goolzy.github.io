---
layout: inventory
title: Änderungsprotokoll
permalink: /inventory/changelog/de/
lang: de
translations:
  ko: /inventory/changelog/
  en: /inventory/changelog/en/
  ja: /inventory/changelog/ja/
  de: /inventory/changelog/de/
  fr: /inventory/changelog/fr/
  es: /inventory/changelog/es/
  pt: /inventory/changelog/pt/
---

## 📋 Änderungsprotokoll

Sehen Sie sich den Update-Verlauf der Inventory-App an.

---

### ✨ v1.0.2 <small style="color:#6b7280;">2025-01</small>

#### 🔔 Geteiltes Protokoll Ungelesen-Anzeige
Wenn neue Kommentare zu geteilten Protokollen hinzugefügt werden, **pulsiert** der Rahmen des Elements.
- Ungelesene geteilte Protokolle im Inventar leicht erkennen
- Pulsieren stoppt, wenn Sie das Dokument öffnen
- Lesestatus wird auf allen Geräten synchronisiert

#### 🔖 Stempel-Nutzungsführung
Wenn Sie einen gravierten Stempel auswählen, **pulsieren** verfügbare Papiere zur Führung.
- Verbesserte UX für Vorlagen-Duplizierung
- Intuitive Anleitung für nächsten Schritt

#### 📂 Partitionsverbesserungen
- **Einklappen/Ausklappen**: Partitionen mit Pfeiltasten umschalten (▼/▲)
- **Alle auswählen**: Partitionsheader antippen, um alle Elemente auszuwählen/abzuwählen
- Auswahlstatusanzeigen (○/◐/●)
- Drag & Drop zu eingeklappten Partitionen

#### 🛒 Shop-Komfort
Vereinfachter Checkout bei aufeinanderfolgenden Käufen desselben Artikels.
- Bestätigungsdialoge innerhalb von 10 Minuten nach dem letzten Kauf überspringen
- Schnellerer Massenkauf

#### 🎨 UI-Verbesserungen
- Verbesserte Lesbarkeit mit neuer Überschriftenschrift
- Stempelkarten zeigen Vorlagenvorschau im Hintergrund (33% Deckkraft)
- Abzeichen-Karten zeigen gravierte Bildvorschau
- Unteres Menü zeigt verfügbare Aktionsanzahl-Badge
- Schwarze Tinte Themenfarbanpassung (verbesserte Textlesbarkeit)
- Optimierte Produktbilder (reduzierte Größe, schnelleres Laden)

#### 🐛 Fehlerbehebungen
- Pulsierungseffekt bei eigenen Kommentaren behoben
- Eingabefeld-Abschneidung bei Android-Gestennavigation behoben
- Grauer Bildschirm beim Einklappen von Partitionen behoben
- Android 13+ Push-Benachrichtigungsberechtigung verbessert

---

### 🔒 v1.0.1 <small style="color:#6b7280;">2025-01</small>

#### 🔒 Dokumentsperre-Funktion
- Numerisches Passwort für Dokumente festlegen (bis zu 16 Ziffern)
- Gesperrte Dokumente zeigen Graustufen + Schloss-Symbol
- Mit korrektem Passwort entsperren (einmalig)
- Sperrstatus bleibt nach Gegenstandsübertragung erhalten
- Gesperrte Dokumente werden aus Suchergebnissen ausgeschlossen

---

### 🎉 v1.0.0 <small style="color:#6b7280;">2025-01</small>

**Erste offizielle Veröffentlichung**

#### 📦 Papier-System
- Währungssystem für die Dokumenterstellung eingeführt
- 10 Blatt Papier bei Neuanmeldung
- Zusätzlich je 10 Blatt für Google/Apple-Kontoverknüpfung
- Papier im Shop erhältlich

#### 📄 Dokumenterstellung
- Dokumente mit Papier erstellen
- Titel, Inhalt und Bilder hinzufügen
- Startdatum/Ablaufdatum-Optionen

#### 🏷️ Abzeichen-System
- Einzigartige Domainnamen-Gravurfunktion
- Gravierter Domainname als Benutzeridentität
- Aktivierungsverwaltung durch Anlegen/Ablegen
- 128x128 Bildanhang-Option

#### 🔖 Stempel-System
- Vorlagenerstellungsfunktion
- Einzelprotokoll/Geteiltes Protokoll Modusauswahl
- Vorlagenduplizierungsfunktion
- Startdatum/Ablaufdatum-Einstellungen

#### 📝 Protokollfunktion
- Protokolle auf Dokumenten/Stempeln aufzeichnen
- Einzelprotokoll: Nur persönliche Aufzeichnungen
- Geteiltes Protokoll: Mit Duplikatbesitzern teilen
- Schlüssel:Wert Format Info-Kartenunterstützung

#### 🎨 Tinten-System
- App-Themenfarben-Änderungsfunktion
- Schwarze Tinte, Goldene Tinte

#### 🤝 Gegenstandsübertragung
- Gegenstände per E-Mail-Adresse senden
- E-Mail automatisch durch QR-Code-Scan ausfüllen
- Empfangene Gegenstände annehmen oder zurücksenden
- Mehrere Gegenstände gleichzeitig senden

#### 📂 Partition
- Gegenstandsgruppierungsfunktion
- Gerätespezifischer lokaler Speicher

#### 🔍 Suchfunktion
- Echtzeit-Suchfilterung
- Suchbegriffe als Filter speichern
- Letzte Suchen automatisch speichern (bis zu 5)

#### 🛒 Shop
- Papier, Stempel, Abzeichen, Tinte kaufen
- Auf allen Plattformen verfügbar

#### 🔐 Konto
- Google, Apple, E-Mail-Anmeldung
- Zusätzliches Papier durch Social-Account-Verknüpfung

#### 🌍 Mehrsprachige Unterstützung
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

#### 📱 Unterstützte Plattformen
- iOS (iPhone, iPad)
- Android (Smartphones, Tablets)
- macOS, Windows

---

> 💡 **Schlagen Sie neue Funktionen vor!** Teilen Sie Ihre Ideen unter [Vorschläge](/inventory/suggest/de/) und wir werden sie aktiv prüfen.

<style>
h2 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: .5rem; margin-bottom: 1.5rem; }
h3 { color: #374151; margin-top: 2rem; margin-bottom: 1rem; }
h4 { color: #4b5563; font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: .75rem; }
ul { line-height: 1.8; }
li { margin-bottom: .5rem; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0; }
blockquote { background: #f9fafb; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 4px; }
small { font-size: .85rem; }
</style>
