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
  <span class="version-title">v1.3.0 <small>2026-01-27</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Shop-Artikel-Layout-Verbesserung
Das Shop-Artikel-Layout wurde fur bessere Sichtbarkeit auf mobilen Bildschirmen verbessert.
- **3-Zeilen-Struktur**: Artikelinformationen und Preis sind getrennt und werden auch auf schmalen Bildschirmen ohne Abschneiden angezeigt
- **Rechtsbundiger Preis**: Preisinformationen werden ordentlich in einer separaten Zeile rechtsbundig platziert
- **Ausreichend Platz fur Rabatt-Tags**: Artikelname und Beschreibung werden vollstandig angezeigt, auch mit Rabatt-Badges

#### Erweiterbarer Profil-Header
Der Profilbereich oben auf dem Startbildschirm wurde zu einem Drawer-Panel umgestaltet.
- **Zum Erweitern ziehen**: Ziehen Sie die Griffleiste nach unten oder tippen Sie auf den Benutzernamen, um das Profilpanel zu erweitern
- **Einheitliches Panel**: Header und Profilinhalt (Profilkarte, QR-Code, API-Info) in einem Panel integriert
- **Flüssige Animation**: Natürliche Animationseffekte beim Erweitern/Zusammenklappen
- **Fixierter Hauptinhalt**: Das Inventar-Raster bleibt an Ort und Stelle, wenn das Profil erweitert wird

#### Pocket Rebranding
Der Name für Artikelklassifizierungseinheiten wurde von 'Partition' zu 'Pocket' geändert.
- **Intuitiver Name**: Vermittelt besser das Konzept eines Raums zum Aufbewahren von Artikeln, wie eine Tasche
- **Einheitliche UI**: Einheitliche Terminologie als 'Pocket' in der gesamten App
- **Mehrsprachige Unterstützung**: Angemessen übersetzt für verschiedene Sprachen

#### Automatische Datenmigration
Bestehende 'Partition'-Daten werden automatisch in 'Pocket' konvertiert.
- **Verlustfreie Migration**: Ihre bestehenden Partitionen und Artikel bleiben genau so erhalten
- **Automatische Verarbeitung**: Migration erfolgt automatisch bei App-Update
- **Nahtloser Übergang**: Keine Aktion erforderlich - einfach aktualisieren und weiter nutzen

#### Action Speed Dial FAB
Verfügbare Aktionen werden als schwebende Schaltfläche angezeigt, wenn Artikel ausgewählt sind.
- **Floating Action Button**: Ein Blitz-FAB erscheint unten rechts, wenn Artikel ausgewählt sind
- **Speed Dial**: Tippen Sie auf den FAB, um nach oben zu erweitern und verfügbare Aktionsschaltflächen anzuzeigen
- **Aktionszähler-Badge**: Die Anzahl der verfügbaren Aktionen wird als Badge auf dem FAB angezeigt
- **Flüssige Animationen**: Skalierungsanimation für FAB-Erscheinen/Verschwinden, Pop-Effekt bei Änderung der Aktionsanzahl

#### Postfach-Verknüpfung
Sie können jetzt direkt über die untere Navigationsleiste auf das Postfach (Empfangsbildschirm) zugreifen.
- **Schneller Zugriff**: Empfangene Artikel direkt vom Startbildschirm aus überprüfen
- **Intuitives Symbol**: Brief-Symbol repräsentiert die Postfachfunktion

#### Standard-Tasche
Die erste Tasche funktioniert jetzt als Standard-Tasche ohne Kopfzeile.
- **Versteckte Kopfzeile**: Die Standard-Tasche wird ohne Taschen-Kopfzeile für eine sauberere Benutzeroberfläche angezeigt
- **Immer oben**: Die Standard-Tasche befindet sich immer am Anfang des Inventars
- **Kann nicht eingeklappt werden**: Die Standard-Tasche bleibt jederzeit ausgeklappt
- **Automatischer Artikelempfang**: Neu gekaufte oder erhaltene Artikel werden automatisch in die Standard-Tasche verschoben

#### Shop-Bildschirm UI-Vereinfachung
Der Header-Bereich des Shop-Bildschirms wurde optimiert.
- **Doppelter Titel entfernt**: Der 'Shop'-Titel, der im Shell-Modus mit dem Navbar-Titel redundant war, wurde entfernt
- **Beschreibung entfernt**: Unnötiger Beschreibungstext wurde entfernt, um sich auf die Produktliste zu konzentrieren
- **Hinweis oben**: Firebase-Hinweisnachricht wird jetzt ganz oben über der Tab-Leiste angezeigt

#### Inventar-Home-Eröffnungsanimation
Der Inventar-Home-Bildschirm hat jetzt die gleiche Eröffnungsanimation wie andere Tabs.
- **Header Slide-In**: Profil-Header gleitet sanft nach unten, wenn die App startet
- **Tab-Wechsel-Animation**: Gleiche Animation beim Zurückkehren von anderen Tabs zum Home
- **Konsistente UX**: Einheitliche Benutzererfahrung mit dem gleichen Eröffnungseffekt über alle Tabs

#### Einstellungsbildschirm-Neugestaltung
Der Einstellungsbildschirm wurde in 5 einklappbare Gruppen reorganisiert.
- **5 Gruppen**: Einstellungen kategorisiert in Farbe, Schrift, Sound, Push-Benachrichtigungen und System
- **Erweitern/Zusammenklappen**: Akkordeon-UI zum Tippen auf jede Gruppe zum Erweitern oder Zusammenklappen
- **Push-Benachrichtigungen vereinfacht**: 7 Kategorien in 3 zusammengefasst (Handel, Protokoll, Ablauf)
- **Tastaturzugänglichkeit**: Pfeiltasten-Unterstützung für Gruppen-Erweitern/Zusammenklappen und Element-Navigation

#### Fehlerbehebungen
- **Benachrichtigungspanel-Anzeige behoben**: Ein Problem wurde behoben, bei dem Benachrichtigungen im Benachrichtigungspanel des Profilheaders nicht korrekt angezeigt wurden.
  - Benachrichtigungssymbole und -farben werden jetzt basierend auf dem Benachrichtigungstyp korrekt angezeigt
  - Benachrichtigungstitel und -inhalte werden jetzt in mehreren Sprachen korrekt angezeigt
  - Abgerundete Ecken der Benachrichtigungselemente sind jetzt mit dem Menüschaltflächenstil vereinheitlicht
- **Shop-Doppelheader behoben**: Ein Problem wurde behoben, bei dem unter bestimmten Umständen zwei Header auf dem Shop-Bildschirm angezeigt wurden.
  - Shell-Modus-Statuskonflikt beim Auswählen des Shop-Tabs nach Rückkehr zum Startbildschirm behoben
  - Stabile Shell-Modus-Verwaltung durch Referenzzählung sichergestellt

#### Verbesserungen der geteilten Vorlagensuche
Die Suchfunktion des Bildschirms für geteilte Vorlagen wurde verbessert.
- **Sofortiges Durchsuchen**: Kürzlich geteilte Vorlagen werden sofort beim Öffnen des Bildschirms angezeigt (keine Suche erforderlich)
- **Menüname aktualisiert**: 'Geteilte Vorlagen' zu 'Geteilte Vorlagen suchen' geändert für klarere Navigation
- **Schnelleres Laden**: 3 API-Aufrufe zu 1 zusammengefasst, was die Ladegeschwindigkeit erheblich verbessert
- **Tag-Themenfarben**: Beliebte/neueste Tags werden jetzt in App-Themenfarben statt festen Farben angezeigt

#### Designverbesserung des Detailbildschirms für geteilte Vorlagen
Der Detailbildschirm für geteilte Vorlagen wurde mit einem neumorphen Design neu gestaltet.
- **Neumorphes Design**: Einheitlich mit dem app-weiten neumorphen Stil
- **2-Spalten-Keyword-Anzeige**: Keywords werden in einem 'Label:Wert'-2-Spalten-Layout für bessere Lesbarkeit organisiert
- **Tag-Design-Aktualisierung**: Tag-Chips im neumorphen Stil für visuelle Konsistenz neu gestaltet

#### Vereinheitlichte Log-Navigation
Das Antippen eines Clip-Elements im Log öffnet jetzt den Clip-Detailbildschirm, wie im Raster.
- **Clip-Detail-Einstieg**: Das Antippen eines Clip-Elements im Log navigiert jetzt zum Clip-Detailbildschirm, wo Sie durch alle Clip-Seiten wischen können
- **Korrekte Seitenposition**: Öffnet auf der genauen Seite, die der Position des angetippten Elements innerhalb des Clips entspricht
- **Vereinheitlichter Pfad**: Raster-, Log- und Tastaturnavigation verwenden alle den gleichen Detailbildschirm-Ablauf

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.3 <small>2026-01-21</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Verbesserungen beim Laden von Abzeichen-Bildern
Das Problem, dass Abzeichen-Bilder beim Neustart der App flackerten, wurde behoben.
- **Persistenter Cache**: Abzeichen-Bild-URLs werden lokal gespeichert und bleiben nach App-Neustarts erhalten
- **Vorladen**: Alle zwischengespeicherten Abzeichen-Bilder werden während des Splash-Screens vorgeladen
- **Hintergrundaktualisierung**: Abzeichen-Bilder werden automatisch im Hintergrund aktualisiert, wenn sie auf dem Server geändert wurden

#### Emoticon-System-Verbesserungen
Die Emoticon-Anhang-Funktion für Protokolle wurde verbessert.
- **Cache-Wiederherstellung behoben**: Emoticons werden nach erneutem Öffnen korrekt angezeigt
- **Optimierte Boxgröße**: Sprechblasen mit nur Emoticons sind jetzt angemessen dimensioniert
- **Auswahlvorschau**: Vorschau des ausgewählten Emoticons über dem Eingabefeld

#### Chat-Eingabefeld-Fokus-Verbesserungen
Fokus-Probleme im Eingabefeld auf iPad wurden behoben.
- **iPad-Kompatibilität**: Eingabefeld-Fokus funktioniert korrekt beim Erscheinen der Tastatur
- **Stabile Eingabe**: Konsistente Eingabeerfahrung auf allen iOS-Geräten

#### Benachrichtigungsfilter-Verbesserungen
Benachrichtigungen für den aktuell angezeigten Bildschirm werden gefiltert.
- **Push-Benachrichtigungsfilter**: Push-Benachrichtigungen für das aktuelle Element werden nicht angezeigt
- **In-App-Benachrichtigungsfilter**: In-App-Benachrichtigungs-Toasts für das aktuelle Element werden nicht angezeigt

#### Benachrichtigungs-Toast-Gesten
Sie können jetzt mit In-App-Benachrichtigungs-Toasts über Gesten interagieren.
- **Tippen zum Navigieren**: Tippen Sie auf die Benachrichtigung, um direkt zum zugehörigen Dokument zu gelangen
- **Wischen zum Schließen**: Wischen Sie nach oben, um die Benachrichtigung schnell zu schließen
- **Haptisches Feedback**: Haptisches Feedback wird bei Touch-Interaktionen bereitgestellt

#### Fehlerbehebungen
- emoticonId-Fehlen bei Emoticon-Cache-Wiederherstellung behoben
- Cloud Functions In-App-Benachrichtigungserstellungsfehler behoben

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.2 <small>2026-01-10</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopieren">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Schriftgröße anpassen
Sie können die Schriftgröße der App in 3 Stufen in den Einstellungen anpassen.
- **3 Stufen**: Wählen Sie zwischen Standard (1.0x), Mittel (1.3x) oder Groß (1.5x)
- **Sofortige Anwendung**: Änderungen werden sofort in der gesamten App übernommen
- **Einstellungen speichern**: Ihre Einstellung bleibt auch nach dem Neustart der App erhalten

#### Automatisches Ausblenden der Tastatur
Beim Tippen außerhalb des Log-Eingabefeldes in der Artikeldetailansicht wird die Tastatur automatisch geschlossen.
- **Tippen zum Schließen**: Berühren Sie einen Bereich außerhalb des Eingabefeldes, um die Tastatur zu schließen
- **iOS-Unterstützung**: Bequeme Nutzung auf dem iPhone ohne Schließen-Taste

#### Hintergrundmusik beibehalten
Bei App-Start wird die auf dem Gerät abgespielte Musik (Spotify, YouTube Music, Apple Music usw.) nicht unterbrochen.
- **Musikwiedergabe läuft weiter**: Die Hintergrundmusik anderer Apps wird weiterhin abgespielt, auch wenn Sie die App öffnen
- **App-Soundeffekte gemischt**: App-Soundeffekte werden zusammen mit der Hintergrundmusik abgespielt
- **Stummschalter-Integration**: Im Stummschaltermodus werden auch App-Soundeffekte stummgeschaltet

#### Verbesserungen bei Suchverlauf und Filtern
Die Super-Suchleiste speichert jetzt den Suchverlauf und die Filterfunktion wurde verbessert.
- **Suchverlauf speichern**: Suchbegriffe werden automatisch beim Hinzufügen von Filtern oder beim Suchen nach geteilten Vorlagen gespeichert
- **Letzte Suchen anzeigen**: Zeigt 5 letzte Suchen beim Fokussieren der Suchleiste an
- **Schnellfilter hinzufügen**: Tippen Sie auf eine letzte Suche, um sie sofort als Filter hinzuzufügen
- **Button-UI-Verbesserung**: Die Schaltflächen Filter hinzufügen und Geteilte Vorlagen sind jetzt kompakt in einer Zeile angeordnet

#### Verbesserungen der Pocketsverwaltung
Neues neomorphes Design für den Pocketsnamen-Dialog und Drag-to-Reorder-Funktion.
- **Neomorphes Dialog**: Schönes neues Design mit Unterstützung für Dunkel-/Hellmodus
- **Drag-Neuordnung**: Halten Sie das Griffsymbol gedrückt, um Pocketen per Drag-and-Drop neu zu ordnen
- **Name bei Erstellung**: Legen Sie beim Erstellen einer neuen Pocket einen benutzerdefinierten Namen fest

#### Link-Vorschau mit Beschreibung anzeigen
In Protokollen angefügte Link-Karten zeigen nun die Webseiten-Beschreibung (OpenGraph-Beschreibung) an.
- **Beschreibung automatisch extrahieren**: Beschreibung aus dem og:description Meta-Tag der Webseite extrahiert
- **Verbessertes Karten-UI**: Beschreibung wird unter dem Titel mit maximal 2 Zeilen angezeigt
- **Unterstützte Plattformen**: YouTube, Spotify, allgemeine Webseiten und alle anderen Link-Typen

#### Änderung der Textstil-Markierer
Der Textstil-Markierer für die Hauptfarbe wurde von `<Text>` zu `{Text}` geändert.
- **Konflikt mit Zitaten behoben**: Verhindert Konflikte mit der Zitierungsfunktion, die das `>`-Zeichen verwendet
- **Einheitliches Markierungssystem**: Vereinheitlichung auf Klammertypen-Markierer (`{}`, `[]`, `()`)

#### Unterstützung für mehrfache Zitate
In Protokollen können mehrere Zitate gleichzeitig angezeigt werden.
- **Mehrfaches Zitat-Rendering**: Zwei oder mehr `>`-Zitate werden jeweils als separate Zitat-Widgets angezeigt
- **Reihenfolge beibehalten**: Zitate werden in der Reihenfolge angezeigt, in der sie eingegeben wurden

#### Verbesserte E-Mail-Versand-Validierung
Die Versandfunktion validiert E-Mail-Adressen genauer.
- **MX-Record-Validierung**: Überprüfung der Existenz von Mailservern in der Domäne des Empfängers
- **Fehlerprävention**: Blockierung von Versandversuchen an nicht existierende Domänen

#### Verbesserungen der Drag-Bedienung
Sie können ausgewählte Elemente ohne langes Drücken direkt ziehen.
- **Sofortiges Ziehen**: Nach der Auswahl sofort ziehen (kein langes Drücken erforderlich)
- **Wackel-Animation**: Ausgewählte Elemente wackeln leicht, um den ziehbaren Zustand anzuzeigen
- **Intuitive Bedienung**: Vertraute UX ähnlich dem iOS-Startbildschirm-Bearbeitungsmodus

#### Dropbox-Dateianhänge
Verbinden Sie Dropbox, um Dateien an Ihre Logs anzuhängen.
- **Mehrere Dateitypen**: Bilder, Videos, PDFs, Musik und Textdateien anhängen
- **Unterstützung für geteilte Logs**: Anhänge in geteilten Element-Logs anzeigen und herunterladen
- **Integrierte Viewer**: Dateien direkt in der App anzeigen (Bilder zoomen, PDF-Seiten blättern, Videos abspielen usw.)
- **Sichere Speicherung**: OAuth-Token werden verschlüsselt im sicheren Speicher des Geräts gespeichert

#### Erstellung von geteilten Protokollen (Papier-Detailansicht)
Erstellen Sie geteilte Protokollelemente direkt aus der leeren Papier-Detailansicht.
- **Einzel-/Geteiltes Protokoll wählen**: Wählen Sie zwischen einem einzelnen Element oder einem geteilten Protokoll mit mehreren Papieren
- **Anzahl per Schieberegler wählen**: Wählen Sie von 2 bis zur Gesamtzahl Ihrer Papiere per Schieberegler
- **Automatische Papierauswahl**: Aktuelles Papier + älteste gekaufte Papiere werden automatisch ausgewählt

#### Tastaturzugänglichkeit
Verbesserte Bedienung auf Desktop und mit extern angeschlossener Tastatur – vollständige Steuerung ohne Maus ist möglich.
- **Dropbox-Dateiauswahl**: Verwenden Sie Pfeiltasten zum Navigieren in Dateien, Enter zum Auswählen, Entfernen zum Löschen und ESC zum Schließen
- **Dokumentfreigabe-Menü**: Nutzen Sie Ctrl+1/2/3 zum Umschalten von Elementen, Pfeiltasten links/rechts zum Navigieren zwischen Schaltflächen und Enter zur Bestätigung
- **Fokusvisualisierung**: Mit der Tastatur ausgewählte Elemente werden durch Rahmen und Glüheffekt deutlich hervorgehoben

#### Fehlerbehebungen
- **Aktions-Badge-Anzahl**: Ein Problem wurde behoben, bei dem das Badge auf der Aktionsschaltfläche die Anzahl der verfügbaren Aktionen für ausgewählte Elemente nicht korrekt anzeigte
- **Fehler bei Dateianhängen behoben**: Ein Fehler wurde behoben, der beim Anhängen von Musik-/Textdateien aus Dropbox auftrat
- **Verbesserung der Audio-Swipe-Wiedergabe**: Caching und automatische Wiedergabe funktionieren jetzt korrekt beim Wischen zwischen Audiodateien im Medien-Viewer

</div>
</details>

<details class="changelog-version">
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

#### Android 15 Unteren Abstands-Korrektur
Das Problem wurde behoben, bei dem die untere Systemnavigationsleiste auf Android 15 und höher Inhalte verdeckt.
- **Bildschirme ohne untere Navigationsleiste**: Elementdetail, Dokumenterstellung, Stempelerstellung und 6 weitere Bildschirme
- **Automatische Inset-Verarbeitung**: Unteres Padding wird automatisch um den Bereich der Systemnavigationsleiste erhöht
- **Abwärtskompatibilität beibehalten**: Android 14 und älter funktionieren wie zuvor

#### Verbesserungen bei Suchverlauf und Filter
Die Super-Suchleiste speichert jetzt den Suchverlauf und die Filterfunktion wurde verbessert.
- **Suchverlauf speichern**: Suchbegriffe werden automatisch gespeichert beim Hinzufügen von Filtern oder bei der Suche nach geteilten Vorlagen
- **Letzte Suchen anzeigen**: Zeigt 5 letzte Suchbegriffe beim Fokussieren der Suchleiste
- **Schnelles Filter hinzufügen**: Tippen Sie auf eine letzte Suche, um sie sofort als Filter hinzuzufügen
- **Button-UI-Verbesserung**: Filter hinzufügen und Geteilte Vorlagen Buttons sind jetzt kompakt in einer Zeile angeordnet

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
- **Pocketsübergreifende Bewegung**: Schnelles Durchsuchen vieler Elemente oder mehrerer Pocketen

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
- **Inventar-Bildschirm**: Artikelauswahl, Pocketsbewegung, Nutzung des unteren Menüs (8 Schritte)
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

#### Pocketsverbesserungen
- **Einklappen/Ausklappen**: Pocketen mit Pfeiltasten umschalten (▼/▲)
- **Alle auswählen**: Pocketsheader antippen, um alle Elemente auszuwählen/abzuwählen
- Auswahlstatusanzeigen (○/◐/●)
- Drag & Drop zu eingeklappten Pocketen

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
- Grauer Bildschirm beim Einklappen von Pocketen behoben
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

#### Pocket
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
