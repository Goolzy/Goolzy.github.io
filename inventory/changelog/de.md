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
  zh: /inventory/changelog/zh/
  ar: /inventory/changelog/ar/
  hi: /inventory/changelog/hi/
  id: /inventory/changelog/id/
  ru: /inventory/changelog/ru/
  it: /inventory/changelog/it/
  tr: /inventory/changelog/tr/
  vi: /inventory/changelog/vi/
  th: /inventory/changelog/th/
  pl: /inventory/changelog/pl/
---

## Änderungsprotokoll

Sehen Sie sich den Update-Verlauf der Inventory-App an.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Reaktives Panel für responsives Layout
Das Bild-Reaktionspanel in der Elementdetailansicht wird auf allen Bildschirmgrößen korrekt angezeigt.
- **Responsive Layout**: Reaktionsschaltflächen werden auf schmalen Bildschirmen gleichmäßig verteilt
- **Volle Breite verwenden**: Das Panel nutzt die gesamte Bildschirmbreite, unabhängig von der Bildgröße
- **Kompaktes Design**: Optimierte Abstände reduzieren Überlagerung des Fotos bei Aufrechterhaltung des Touch-Bereichs

#### Unendliches Scrollen bei der Suche nach geteilten Vorlagen
Wenn die Suchergebnisse für geteilte Vorlagen mehr als 20 Einträge umfassen, können Sie scrollen, um weitere Ergebnisse zu laden.
- **Unendliches Scrollen**: Automatisches Laden der nächsten 20 Ergebnisse beim Erreichen des unteren Bereichs
- **Ladeanzeige**: Fortschrittsanzeige am unteren Rand während des zusätzlichen Ladens
- **Abwärtskompatibilität**: Ältere App-Versionen zeigen weiterhin 20 Ergebnisse an

#### Homepage-Updates
- **Chinesisch (vereinfacht) Unterstützung**: 中文(简体) Lokalisierung zur Homepage hinzugefügt (8. Sprache)
- **Unterstützte Sprachen anzeigen**: 8 Sprachflaggensymbole unter den Plattform-Download-Symbolen

#### App Store Spracheinstellungen
- **iOS/macOS unterstützte Sprachen**: Chinesisch (zh) zu CFBundleLocalizations hinzugefügt

#### Datumsauswahl verbessert
- **Auswahlbereich erweitert**: Datumsauswahl-UI ermöglicht nun die Auswahl ab 1900 (vorher 2000)

#### Dokumentfreigabe-Funktion
Kopieren oder versenden Sie Inhalte aus der Dokumentdetailansicht in die Zwischenablage oder per E-Mail.
- **In Zwischenablage kopieren**: Kopieren als reiner Text mit entfernten Rich-Text-Markern
- **Per E-Mail versenden**: Versand in HTML-Format mit angewendeter Formatierung
- **Optionale Auswahl**: Titel, Inhalt, Schlüsselwörter, Konversation und Systemprotokoll einzeln auswählen
- **Clip-Modus-Unterstützung**: Gleiche Funktionalität in der Clip-Detailansicht

#### Clip-Sperrungssynchronisierung
Der Sperrzustand von Elementen, die zu einem Clip gehören, wird synchronisiert.
- **Massensperre/-entsperrung**: Beim Sperren des Clip-Repräsentantenelements werden auch alle untergeordneten Elemente gesperrt
- **Passwort-Synchronisierung**: Alle Elemente im Clip verwenden dasselbe Sperrpasswort

#### Rich-Text-Editor-Verbesserungen
Die Anwendung von Textstilen beim Verfassen von Stempel-Vorlagen wurde intuitiver gestaltet.
- **6 grundlegende Stile**: Fett, Unterstrichen, Durchgestrichen, Primärfarbe, Sekundärfarbe, Box
- **Verschachtelte Stile**: Mehrere Stile können nacheinander angewendet werden (z. B. Fett + Unterstrichen)
- **Saubere Bearbeitung**: Markierungen sind nicht sichtbar, nur Stile werden angezeigt
- **Dynamische Symbolleiste**: Symbolleiste positioniert sich automatisch unter dem ausgewählten Bereich

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Drag-Auto-Scroll
Beim Ziehen von Elementen scrollt der Bildschirm automatisch am Rand.
- **Auto-Scroll-Bereich**: Automatisches Scrollen beim Ziehen in den oberen/unteren 10% des Bildschirms
- **Beschleunigungsbasiert**: Scroll-Geschwindigkeit erhöht sich näher am Rand
- **Haptisches Feedback**: Leichte Vibration beim Betreten des Scroll-Bereichs
- **Partitionsübergreifende Bewegung**: Schnelles Durchsuchen vieler Elemente oder mehrerer Partitionen

#### Scroll-Navigation
Schnelle Navigation zum Anfang/Ende im Detailansichtsfenster.
- **Navigationsbuttons**: Navigationsbuttons werden neben der Suchleiste angezeigt, wenn viele Kommentare vorhanden sind
- **Positionsabhängige Anzeige**: Am oberen Rand nur der Button nach unten, am unteren Rand nur der Button nach oben
- **Neumorphes Design**: Buttonstil passend zum App-Design

#### Seitenwechsel-Animation wiederhergestellt
Die Flip-Animation der unteren Navigationsleiste und des Empfangsbildschirms wurde wiederhergestellt.
- **3D-Flip-Effekt**: Seitenwechsel durch 180-Grad-Drehung um die Y-Achse
- **Log-/Shop-Seiten**: Flip-Animation angewendet
- **Empfangsbildschirm**: Flip-Animation bei Postfach-Button und Benachrichtigungs-Deeplink angewendet

#### UI-Design-Vereinheitlichung
Neumorphes Design wurde auf die Senden-, Empfangen- und Shop-Bildschirme angewendet und vereinheitlicht die gesamte App.
- **Senden/Empfangen-Bildschirme**: Neumorphe Schatten auf Karten und Dialoge angewendet
- **Shop-Bildschirm**: Glow-Effekte auf Tab-Buttons, neumorphe Produktkarten
- **Eingabefeld-Design**: Vertiefter Stil unterscheidet Eingabebereiche deutlich

#### Log-Neuanordnungs-Animation
Wenn ein Element aufgrund neuer Kommentare in der Log-Liste nach oben verschoben wird, wird eine fließende Animation angewendet.
- **Skalierungseffekt**: Element wird leicht vergrößert und kehrt nach der Bewegung zur Originalgröße zurück
- **Sequenzielle Verarbeitung**: Bei gleichzeitiger Bewegung mehrerer Elemente werden Animationen nacheinander abgespielt
- **Visuelle Hervorhebung**: Klare Erkennbarkeit, welches Element das aktuellste ist

#### Datenbank-Stabilisierung
Datenbankkompatibilitätsprobleme, die bei App-Updates auftreten konnten, wurden behoben.
- **Automatische Wiederherstellung**: Datenbank wird bei Versionskonflikt automatisch neu erstellt
- **Datenerhaltung**: Kein Datenverlust dank automatischer Server-Synchronisation
- **Alle Plattformen**: Gleiche Lösung für iOS, Android, macOS und Windows

#### Passwortsperre verbessert
Sicherheit und Benutzerfreundlichkeit von passwortgeschützten Elementen wurden erheblich verbessert.
- **Unschärfe-Overlay**: Inhalte werden beim Zugriff auf gesperrte Elemente vollständig verborgen
- **Neumorphes Design**: Dialoge zum Setzen/Entsperren von Passwörtern im neumorphen Stil
- **16-stellige Anzeige**: 16 kleine Kreise zeigen den Passworteingabestatus an
- **Zweizeilige Eingabe**: Passwort eingeben und bestätigen auf einem Bildschirm

#### Verbesserung der Push-Benachrichtigungseinstellungen
Der Bildschirm für Push-Benachrichtigungseinstellungen wurde nach Kategorien neu organisiert, um eine einfachere Verwaltung zu ermöglichen.
- **7 Kategorien**: Unterteilt in Transaktion, Log, Ablaufdatum, Reaktion, Schlüsselwort, Freigabe und System
- **Gruppen-Toggle**: Alle Benachrichtigungen einer Kategorie auf einmal ein- oder ausschalten
- **Akkordeon-UI**: Nur relevante Kategorien ausklappen und anzeigen
- **Zusätzliche Detailbenachrichtigungen**: Neue Benachrichtigungen für Transaktionsannahme/-ablehnung, Reaktion, Schlüsselwort, Freigabe-Ablaufdatum/-Melding und Systembenachrichtigungen
- **Neumorphes Design**: Neumorphe Stilisierung auf einzelnen Benachrichtigungselementen angewendet

#### Verbesserung der Soundeinstellungen
Der Stummschalter-Button wurde mit neumorphem Design versehen, das den Druckzustand intuitiv darstellt.
- **Druckeffekt**: Beim Stummschalten wird der Button nach innen gedrückt aussehen
- **Neumorphe Schatten**: Im Standardzustand gewölbt, im gedrückten Zustand konkav mit Schatten

#### Verbesserung der Log-Ladegeschwindigkeit
Die Ladegeschwindigkeit von geteilten Logs wurde verbessert.
- **Cache-First-Laden**: Zuvor angesehene Logs werden sofort aus dem Cache angezeigt
- **Datenersparnis**: Bei erneuten Besuchen keine Serveranfragen, lokale Daten werden verwendet
- **Echtzeit-Neue-Kommentare**: Neue Kommentare werden auch bei Cache-Nutzung in Echtzeit empfangen

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Papier-Gemeinsame Logs
Erstellen Sie gemeinsame Log-Dokumente nur mit Papier, ohne Stempel.
- **2 oder mehr Papiere auswählen** → Menü "Neuen Artikel erstellen (Gemeinsames Log)" erscheint
- **1 Papier auswählen** → Menü "Neuen Artikel erstellen (Privates Log)" erscheint
- Erstellte Dokumente teilen denselben Kommentarbereich
- Senden Sie Dokumente an verschiedene Personen und chatten Sie miteinander

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Badge-Bearbeitungsfunktion
Bearbeiten Sie das Bild und die Schlüsselwörter von gravierten Badges.
- **Bearbeitungsmenü**: "Badge bearbeiten"-Menü wird bei Auswahl eines gravierten Badges angezeigt
- **Bildänderung**: Badge-Bild durch ein neues ersetzen
- **Schlüsselwortverwaltung**: 5 Arten von Schlüsselwörtern hinzufügen, löschen oder ändern

#### Bildleistungsoptimierung
Die Ladegeschwindigkeit von Netzwerkbildern wurde erheblich verbessert.
- **Lokaler Cache**: Einmal geladene Bilder werden lokal gespeichert und sofort angezeigt
- **Badge-Bildsynchronisation**: Badge-Bildänderungen werden sofort in allen Protokollen übernommen

#### Autovervollständigung für letzte Empfänger
Wählen Sie kürzlich versendete Empfänger auf dem Sendebildschirm schnell aus.
- **Autovervollständigungsliste**: Dropdown mit bis zu 30 letzten Empfängern bei Eingabefeld-Fokus
- **Schnellauswahl**: Automatische Suche bei Auswahl eines Empfängers aus der Liste
- **Neusuche**: Auswahl mit X-Button löschen, um nach einem anderen Empfänger zu suchen
- **Lokale Speicherung**: Empfängerinformationen werden bei erfolgreicher Sendung automatisch gespeichert

#### Verbesserung der Sendebeschränkungen
Ausgerüstete Badges und gemeinsame Stempel können nicht gesendet werden.
- **Ausgerüstete Badges**: Badge ablegen, um es zu senden
- **Gemeinsame Stempel**: Freigabe widerrufen, um den Stempel zu senden
- **Detaillierte Anleitung**: Zeigt spezifische Nachrichten an, die den Grund für die Einschränkung erklären

#### Emotionale Reaktionssystem
Reagieren Sie auf Elemente mit emotionalen Ausdrücken.
- **12 Reaktionen**: Verschiedene emotionale Ausdrücke wie Gefällt mir, Liebe, Großartig, Glückwunsch und mehr
- **Reaktions-Toggle**: Abbrechen durch erneutes Klicken auf die ausgewählte Reaktion
- **Protokollierung**: Systemprotokolle zeichnen auf, wenn Reaktionen ausgewählt oder abgebrochen werden
- **Mehrsprachige Unterstützung**: Reaktionsnamen werden in der Sprache des Benutzers angezeigt

#### Verbesserung der Suchfunktion
Die Echtzeitsuche wurde erweitert, um Elementnamen und Schlüsselwörter einzubeziehen.
- **Elementname-Suche**: Suche nach Dokumenttitel, Stempel-Beschreibung, Badge-Domainname
- **Schlüsselwort-Suche**: Suche nach Schlüsselwörtern, die in Stempeln und Badges gespeichert sind
- **Tag-Suche**: Suche auch nach Stempel-Template-Tags möglich

#### Verbesserung der In-App-Benachrichtigungen
Echtzeit-Toast-Benachrichtigungen wurden verbessert.
- **Absender-Badge-Anzeige**: Das Badge-Bild des Absenders wird inline in der Benachrichtigung angezeigt
- **Dynamic Island-Stil**: Elegante Toast-Animationen im iOS Dynamic Island-Stil
- **Echtzeit-Erkennung**: Neue und aktualisierte Benachrichtigungen werden präzise anhand von ID und Zeitstempel erkannt
- **Automatisches Löschen**: Beim Zugriff auf den Artikel-Detailbildschirm werden Benachrichtigungen im Zusammenhang mit diesem Artikel automatisch gelöscht

#### Fehlerbehebungen
- **Stabilisierung der Dokumentdetail-UI**: Problem behoben, bei dem die Suchleiste und Filter zitterten, wenn geteilte/einzelne Protokolle am Bildschirmrand waren
- **Scroll-Zittern behoben**: Bildschirmflackern beim Hochscrollen in Dokumenten/Stempeln mit wenigen Protokollen behoben
- **Erreichbarkeit des obersten Bereichs behoben**: Problem behoben, bei dem Autoreninformationen in Elementen mit Protokollen nicht durch Scrollen erreicht werden konnten
- **Reaktionsprotokoll-Format verbessert**: Emoticons und Namen werden jetzt zusammen angezeigt
- **Benutzernamensanzeige behoben**: Domainname wird jetzt korrekt angezeigt, wenn ein Badge getragen wird
- **Erste Benachrichtigung für geteilte Protokolle behoben**: Problem behoben, bei dem der erste Toast für geteilte Protokolle nicht angezeigt wurde
- **Push-Benachrichtigungsbild behoben**: Dokumentbild wird bevorzugt angezeigt (statt Badge-Bild)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

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

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

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

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

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

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

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

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Dokumentsperre-Funktion
- Numerisches Passwort für Dokumente festlegen (bis zu 16 Ziffern)
- Gesperrte Dokumente zeigen Graustufen + Schloss-Symbol
- Mit korrektem Passwort entsperren (einmalig)
- Sperrstatus bleibt nach Gegenstandsübertragung erhalten
- Gesperrte Dokumente werden aus Suchergebnissen ausgeschlossen

#### Schnelleingabe-System
Spezielle Informationen einfach über die `+`-Taste beim Log-Schreiben eingeben:
- **Schlüsselwort:Wert** - Allgemeine Schlüsselwortkarte
- **Datumsalarm** - Datumskarte (automatische D-Day-Berechnung, Alarmeinstellungen)
- **Telefonnummer** - Länderspezifische Auto-Formatierung
- **Standort/Adresse** - Karten-App-Integration
- **Betrag** - Automatische Währungssymbol-Anzeige

#### Spezielle Kartenaktionen
**Lange drücken** auf spezielle Informationen in Logs aktiviert zusätzliche Funktionen:
- **Datumskarte**: Alarm setzen/abbrechen
- **Telefonkarte**: Direkt anrufen / In Zwischenablage kopieren
- **Standortkarte**: In Karten-App öffnen / In Zwischenablage kopieren
- **Betragskarte**: In Zwischenablage kopieren

#### UI-Verbesserungen
- Filter-Chip neumorphes Design
- Suchleisten-Scroll-Verbesserung
- Artikeldetailbildschirm AppBar zeigt Artikelnamen

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

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

</div>
</details>

<div class="changelog-footer">
<strong>Schlagen Sie neue Funktionen vor!</strong> Teilen Sie Ihre Ideen unter <a href="/inventory/suggest/de/">Vorschläge</a> und wir werden sie aktiv prüfen.
</div>

<style>
/* Versionscontainer */
details.changelog-version {
  background: rgba(21, 10, 40, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

details.changelog-version:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-2px);
}

details.changelog-version[open] {
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
}

/* Summary-Header */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* Pfeil-Symbol */
details.changelog-version summary::before {
  content: '▶';
  margin-right: 0.75rem;
  color: #a855f7;
  transition: transform 0.25s ease;
  font-size: 0.85rem;
}

details.changelog-version[open] summary::before {
  transform: rotate(90deg);
}

details.changelog-version[open] summary {
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

/* Versionstitel */
.version-title {
  flex: 1;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.15rem;
  font-weight: 600;
}

.version-title small {
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 400;
  margin-left: 0.5rem;
}

/* Kopier-Button */
.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(168, 85, 247, 0.25);
  transform: scale(1.1);
}

.copy-btn svg { fill: #a855f7; }
.copy-btn:hover svg { fill: #14b8a6; }
.copy-btn.copied { background: rgba(20, 184, 166, 0.2); }
.copy-btn.copied svg { fill: #14b8a6; }

/* Versionsinhalt */
.version-content {
  padding: 1.25rem 1.5rem;
  background: rgba(10, 6, 20, 0.4);
  color: rgba(255, 255, 255, 0.9);
}

.version-content h4 {
  color: #14b8a6;
  font-size: 1.05rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.version-content h4:first-child { margin-top: 0; }
.version-content ul { line-height: 1.8; }
.version-content li { margin-bottom: 0.5rem; }
.version-content strong { color: #14b8a6; }

/* Fußzeile */
.changelog-footer {
  background: rgba(20, 184, 166, 0.15);
  border-left: 4px solid #14b8a6;
  padding: 1rem 1.25rem;
  margin-top: 2rem;
  border-radius: 0 8px 8px 0;
  color: rgba(255, 255, 255, 0.9);
}

.changelog-footer a { color: #a855f7; }
.changelog-footer a:hover { color: #14b8a6; }

h2 {
  color: rgba(255, 255, 255, 0.95);
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>

<script>
function copyVersionContent(button, event) {
  event.stopPropagation();
  event.preventDefault();

  const details = button.closest('details.changelog-version');
  const versionContent = details.querySelector('.version-content');
  const versionTitle = details.querySelector('.version-title');

  const titleText = versionTitle ? versionTitle.textContent.trim() : '';
  const contentClone = versionContent.cloneNode(true);

  contentClone.querySelectorAll('h4').forEach(h4 => {
    h4.textContent = '\n## ' + h4.textContent.trim() + '\n';
  });
  contentClone.querySelectorAll('li').forEach(li => {
    li.textContent = '- ' + li.textContent.trim();
  });

  const text = '# ' + titleText + '\n' + contentClone.textContent
    .replace(/\n{3,}/g, '\n\n').trim();

  navigator.clipboard.writeText(text).then(() => {
    const copyIcon = button.querySelector('.copy-icon');
    const checkIcon = button.querySelector('.check-icon');
    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    button.classList.add('copied');
    setTimeout(() => {
      copyIcon.style.display = 'block';
      checkIcon.style.display = 'none';
      button.classList.remove('copied');
    }, 2000);
  });
}
</script>
