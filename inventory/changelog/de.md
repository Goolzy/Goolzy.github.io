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

## Änderungsprotokoll

Sehen Sie sich den Update-Verlauf der Inventory-App an.

---

### v1.1.2 <small style="color:#6b7280;">2025-12-31</small>

#### 🆕 Autovervollständigung für Letzte Empfänger
Wählen Sie kürzliche Empfänger auf dem Sendebildschirm schnell aus.
- **Autovervollständigungsliste**: Dropdown mit bis zu 30 letzten Empfängern bei Eingabefeld-Fokus
- **Schnellauswahl**: Automatische Suche bei Auswahl eines Empfängers aus der Liste
- **Neusuche**: Auswahl mit X-Button löschen, um nach einem anderen Empfänger zu suchen
- **Lokale Speicherung**: Empfängerinformationen werden bei erfolgreicher Sendung automatisch gespeichert

#### 🐛 Fehlerbehebungen
- **Scroll-Zittern behoben**: Bildschirmflackern beim Hochscrollen in Dokumenten/Stempeln mit wenigen Protokollen behoben
- **Top-Scroll behoben**: Problem behoben, bei dem Autoreninformationen in Elementen mit Protokollen nicht durch Scrollen erreicht werden konnten

---

### v1.1.0 <small style="color:#6b7280;">2025-12-29</small>

#### Automatische Mehrsprachige Übersetzung
Dokumente, Stempel und Protokollinhalte werden automatisch in Ihre Sprache übersetzt.
- **Auto-Übersetzung**: Automatische Übersetzung in die Benutzersprache beim Anzeigen von Dokumenten, Stempeln und Protokollen
- **Unterstützte Sprachen**: Koreanisch, Englisch, Japanisch, Spanisch, Französisch, Deutsch, Portugiesisch
- **Original-Toggle**: Wechseln Sie zwischen Original und Übersetzung mit der Schaltfläche [Original anzeigen]
- **Übersetzungs-Caching**: Server- und lokales Caching verhindert erneute Übersetzungsanfragen
- **Sprachspezifischer Cache**: Verwendet sofort den gespeicherten Cache beim Sprachwechsel

#### Tutorial-System
Schritt-für-Schritt-Tutorials wurden hinzugefügt, um Sie durch die App-Nutzung zu führen.
- **Inventar-Bildschirm**: Artikelauswahl, Partitionsbewegung, Nutzung des unteren Menüs (8 Schritte)
- **Senden/Empfangen-Bildschirm**: Empfängereingabe, QR-Scan, Übertragungs-/Empfangsmethoden
- **Shop-Bildschirm**: Produktkategorie-Durchsuchen und Kaufmethoden
- **Profil-Bildschirm**: Kontoinformationen und Einstellungen
- **Einstellungen-Bildschirm**: App-Einstellungen und Themenwechsel
- **Stempel-Vorlage**: Vollständiger Vorlagenerstellungsprozess (9 Schritte)
- **Suchfunktion**: Filternutzung und Suchbegriffspeicherung
- Wird nur beim ersten Mal angezeigt; kann in den Einstellungen erneut angesehen werden

#### Log-Leistungsoptimierung
Ladegeschwindigkeit und Datenverbrauch für gemeinsame/unabhängige Logs wurden deutlich verbessert.
- **Schnelles Laden**: Zuerst nur die neuesten 100 Kommentare laden
- **Unendliches Scrollen**: Beim Scrollen 50 ältere Kommentare nachladen
- **Lokales Caching**: Sofortige Anzeige durch Cache bei erneutem Besuch
- **Echtzeit-Sync**: Nur neue Kommentare effizient empfangen
- **Datensparend**: Verhindert unnötige Neudownloads

---

### v1.0.4 <small style="color:#6b7280;">2025-12-25</small>

#### Medienlink-Karten
In Protokollen eingegebene URLs werden automatisch als **Rich Cards** angezeigt.
- **YouTube**: Vorschaubild + Titel + Kanalname
- **Spotify**: Albumcover + Titel + Künstler
- **Google Drive**: Dateivorschau + Dateiname (öffentliche Dateien)
- **Dropbox**: Symbol + Dateiname
- **OneDrive**: Symbol + Dienstname
- **Webseiten**: Vorschaubild + Seitentitel
- Tippen zum Öffnen in externer App/Browser
- Lange drücken zum Kopieren der URL in die Zwischenablage

#### Verbesserungen bei der Geteilten Vorlagensuche
- **Papierprüfung**: Klonen-Button zeigt verbleibende Papieranzahl (Papier:10)
- **Papier erforderlich**: Klonen ist deaktiviert wenn kein Papier verfügbar
- **Neumorphes Design**: Suchbildschirm verwendet jetzt neumorphen UI-Stil

#### Verbesserungen des Bildeditor-Effektsystems
Die Spezialeffekt-Auswahl-UI wurde vereinfacht.
- **Einzelauswahl**: Wählen Sie jeweils einen von 5 Effekten
- **Effektliste**: Original / Hintergrund entfernen / Bokeh / Bloom / Monochrom
- **Sanfte Übergänge**: Fortschrittsanzeige während der Effektverarbeitung
- **Leistungssteigerung**: Bloom/Monochrom-Filter werden im Hintergrund verarbeitet

#### Leistung und Stabilität
Die interne App-Struktur wurde optimiert.
- **Abfrage-Optimierung**: Parallele Verarbeitung für schnelleres Clip/Filter-Laden
- **Code-Bereinigung**: 12 ungenutzte Code-Module entfernt
- **Abhängigkeits-Bereinigung**: 7 ungenutzte Bibliotheken entfernt
- **Asset-Bereinigung**: Ungenutzte Schriftarten/Bilder entfernt (ca. 16MB Reduktion)

---

### v1.0.3 <small style="color:#6b7280;">2025-12-23</small>

#### Clip-Funktion
Bündeln Sie mehrere Dokumente zur einfacheren Verwaltung zusammen.
- **Clip erstellen**: Wählen Sie 2+ Dokumente und tippen Sie auf "Zusammenclipsen"
- **Clip-Symbol**: Geclipste Dokumente zeigen ein Clip-Symbol in der oberen rechten Ecke
- **Clip-Details**: Interne Elemente über die Schaltfläche "Clip-Info" im Elementdetailbildschirm anzeigen
- **Neu anordnen**: Elemente innerhalb eines Clips per Drag & Drop neu anordnen (außer Cover)
- **Elemente ausschließen**: Bestimmte Elemente aus einem Clip entfernen (außer Cover)
- **Clip auflösen**: Einen Clip vollständig in einzelne Dokumente auflösen
- **Automatische Auflösung**: Clip löst sich automatisch auf, wenn nur noch 1 Element übrig ist
- **Übertragung**: Clips werden als Bündel gesendet/empfangen

#### Verbesserungen bei der Geteilten Vorlagensuche
Verbesserte Benutzerfreundlichkeit für den Suchbildschirm für geteilte Vorlagen.
- **Inline-Karten**: Suchergebnisse werden in einem kompakten Listenformat angezeigt
- **Vollständige Bildanzeige**: Vorschaubilder werden im Originalverhältnis ohne Zuschneiden angezeigt
- **Erweiterte Details**: Inhalt, Schlüsselwörter und Ablaufdatum im Vorlagendetailblatt anzeigen
- **Schlüsselwort-Vorschau**: Standardmäßig festgelegte Schlüsselwörter für die Vorlage anzeigen
- **Ablaufdatum**: Überprüfen Sie, wann die geteilte Vorlage abläuft

#### Verbesserung der Passwort-Entsperrung
- Die Eingabe des richtigen Passworts **entsperrt das Dokument dauerhaft**
- Vorher: Nur Ansicht, Sperre blieb → Jetzt: Vollständig entsperrt

#### Fehlerbehebungen
- Clip-Elemente wurden im Empfangsbildschirm einzeln gezählt - behoben
- Navigationsleisten-Empfangsabzeichen enthielt interne Clip-Elemente - behoben
- Abzeichen (Nametag) wurde bei Rückerstattung/Löschung nicht abgelegt - behoben
- Domain blieb nach Löschung des Abzeichens belegt - behoben

---

### v1.0.2 <small style="color:#6b7280;">2025-12-22</small>

#### Geteiltes Protokoll Ungelesen-Anzeige
Wenn neue Kommentare zu geteilten Protokollen hinzugefügt werden, **pulsiert** der Rahmen des Elements.
- Ungelesene geteilte Protokolle im Inventar leicht erkennen
- Pulsieren stoppt, wenn Sie das Dokument öffnen
- Lesestatus wird auf allen Geräten synchronisiert

#### Stempel-Nutzungsführung
Wenn Sie einen gravierten Stempel auswählen, **pulsieren** verfügbare Papiere zur Führung.
- Verbesserte UX für Vorlagen-Duplizierung
- Intuitive Anleitung für nächsten Schritt

#### Partitionsverbesserungen
- **Einklappen/Ausklappen**: Partitionen mit Pfeiltasten umschalten (▼/▲)
- **Alle auswählen**: Partitionsheader antippen, um alle Elemente auszuwählen/abzuwählen
- Auswahlstatusanzeigen (○/◐/●)
- Drag & Drop zu eingeklappten Partitionen

#### Shop-Komfort
Vereinfachter Checkout bei aufeinanderfolgenden Käufen desselben Artikels.
- Bestätigungsdialoge innerhalb von 10 Minuten nach dem letzten Kauf überspringen
- Schnellerer Massenkauf

#### UI-Verbesserungen
- Verbesserte Lesbarkeit mit neuer Überschriftenschrift
- Stempelkarten zeigen Vorlagenvorschau im Hintergrund (33% Deckkraft)
- Abzeichen-Karten zeigen gravierte Bildvorschau
- Unteres Menü zeigt verfügbare Aktionsanzahl-Badge
- Schwarze Tinte Themenfarbanpassung (verbesserte Textlesbarkeit)
- Optimierte Produktbilder (reduzierte Größe, schnelleres Laden)

#### Fehlerbehebungen
- Pulsierungseffekt bei eigenen Kommentaren behoben
- Eingabefeld-Abschneidung bei Gestennavigation behoben
- Grauer Bildschirm beim Einklappen von Partitionen behoben
- Push-Benachrichtigungsberechtigung verbessert

---

### v1.0.1 <small style="color:#6b7280;">2025-12-16</small>

#### Dokumentsperre-Funktion
- Numerisches Passwort für Dokumente festlegen (bis zu 16 Ziffern)
- Gesperrte Dokumente zeigen Graustufen + Schloss-Symbol
- Mit korrektem Passwort entsperren (einmalig)
- Sperrstatus bleibt nach Gegenstandsübertragung erhalten
- Gesperrte Dokumente werden aus Suchergebnissen ausgeschlossen

---

### v1.0.0 <small style="color:#6b7280;">2025-12-13</small>

**Erste offizielle Veröffentlichung**

#### Papier-System
- Währungssystem für die Dokumenterstellung eingeführt
- 10 Blatt Papier bei Neuanmeldung
- Zusätzlich je 10 Blatt für Google/Apple-Kontoverknüpfung
- Papier im Shop erhältlich

#### Dokumenterstellung
- Dokumente mit Papier erstellen
- Titel, Inhalt und Bilder hinzufügen
- Startdatum/Ablaufdatum-Optionen

#### Abzeichen-System
- Einzigartige Domainnamen-Gravurfunktion
- Gravierter Domainname als Benutzeridentität
- Aktivierungsverwaltung durch Anlegen/Ablegen
- 128x128 Bildanhang-Option

#### Stempel-System
- Vorlagenerstellungsfunktion
- Einzelprotokoll/Geteiltes Protokoll Modusauswahl
- Vorlagenduplizierungsfunktion
- Startdatum/Ablaufdatum-Einstellungen

#### Protokollfunktion
- Protokolle auf Dokumenten/Stempeln aufzeichnen
- Einzelprotokoll: Nur persönliche Aufzeichnungen
- Geteiltes Protokoll: Mit Duplikatbesitzern teilen
- Schlüssel:Wert Format Info-Kartenunterstützung

#### Tinten-System
- App-Themenfarben-Änderungsfunktion
- Schwarze Tinte, Goldene Tinte

#### Gegenstandsübertragung
- Gegenstände per E-Mail-Adresse senden
- E-Mail automatisch durch QR-Code-Scan ausfüllen
- Empfangene Gegenstände annehmen oder zurücksenden
- Mehrere Gegenstände gleichzeitig senden

#### Partition
- Gegenstandsgruppierungsfunktion
- Gerätespezifischer lokaler Speicher

#### Suchfunktion
- Echtzeit-Suchfilterung
- Suchbegriffe als Filter speichern
- Letzte Suchen automatisch speichern (bis zu 5)

#### Shop
- Papier, Stempel, Abzeichen, Tinte kaufen
- Auf allen Plattformen verfügbar

#### Konto
- Google, Apple, E-Mail-Anmeldung
- Zusätzliches Papier durch Social-Account-Verknüpfung

#### Mehrsprachige Unterstützung
- 한국어, English, 日本語
- Deutsch, Français, Español, Português


---

> **Schlagen Sie neue Funktionen vor!** Teilen Sie Ihre Ideen unter [Vorschläge](/inventory/suggest/de/) und wir werden sie aktiv prüfen.

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
