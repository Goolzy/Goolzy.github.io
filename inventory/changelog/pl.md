---
layout: inventory
title: Historia zmian
permalink: /inventory/changelog/pl/
lang: pl
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

## Historia zmian

Sprawdź historię aktualizacji aplikacji Inventory.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Responsywny układ panelu reakcji
Panel reaktywności obrazu wyświetla się prawidłowo na wszystkich rozmiarach ekranu w widoku szczegółów elementu.
- **Układ responsywny**: Przyciski reaktywności są równomiernie rozłożone nawet na wąskich ekranach
- **Pełna szerokość**: Panel wykorzystuje całą szerokość ekranu niezależnie od rozmiaru obrazu
- **Kompaktowy projekt**: Optymalizacja wypełnienia zmniejsza zagorzałość fotografii przy zachowaniu obszaru dotyku

#### Nieskończone przewijanie wyszukiwania szablonów udostępnionych
Gdy wyników wyszukiwania szablonów udostępnionych jest więcej niż 20, możesz przewijać, aby załadować więcej wyników.
- **Nieskończone przewijanie**: Automatycznie ładuje następne 20 wyników po osiągnięciu dna
- **Wskaźnik ładowania**: Wskaźnik postępu wyświetlany u dołu podczas ładowania więcej
- **Zgodność wstecz**: Poprzednie wersje aplikacji nadal wyświetlają 20 wyników jak wcześniej

#### Aktualizacje strony głównej
- **Obsługa chińskiego (uproszczonego)**: Dodana lokalizacja 中文(简体) do strony głównej (8. język)
- **Wyświetlanie obsługiwanych języków**: 8 ikon flag języków wyświetlanych poniżej ikon pobierania platformy

#### Ustawienia języka App Store
- **Dodane obsługiwane języki iOS/macOS**: Dodany chiński (zh) do CFBundleLocalizations

#### Ulepszenie wyboru daty
- **Rozszerzony zakres wyboru**: Wybieranie dat od 1900 roku w interfejsie wyboru daty (wcześniej od 2000 roku)

#### Funkcja udostępniania dokumentów
Na ekranie szczegółów dokumentu możesz skopiować zawartość do schowka lub wysłać je pocztą elektroniczną.
- **Kopiowanie do schowka**: Kopiowanie jako czysty tekst z usunięciem bogatych znaczników tekstowych
- **Wysyłanie e-mailem**: Wysłanie w sformatowanym formacie HTML z zastosowaniem formatowania
- **Selektywne włączanie**: Wybór tylko żądanych elementów spośród tytułu, zawartości, słów kluczowych, rozmowy i dziennika systemowego
- **Obsługa trybu klipu**: Dostępne również w widoku szczegółów klipu

#### Synchronizacja blokady klipu
Stan blokady elementów należących do klipu jest synchronizowany.
- **Zbiorcze blokowanie/odblokowywanie**: Blokowanie elementu reprezentatywnego klipu powoduje blokowanie również wszystkich podrzędnych elementów
- **Synchronizacja hasła**: Wszystkie elementy w klipu używają tego samego hasła blokady

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Przewijanie automatyczne podczas przeciągania
Ekran automatycznie przewija się podczas przeciągania elementów.
- **Strefa automatycznego przewijania**: Przeciągnij do górnej/dolnej 10% ekranu, aby włączyć automatyczne przewijanie
- **Oparte na przyspieszeniu**: Prędkość przewijania zwiększa się w miarę zbliżania się do krawędzi
- **Sprzężenie haptyczne**: Lekka wibracja przy wejściu w strefę przewijania
- **Nawigacja między partycjami**: Szybko przeglądaj wiele elementów lub wiele partycji

#### Nawigacja przewijania
Szybko przejdź na górę lub dół ekranu widoku szczegółów.
- **Przyciski nawigacji**: Przyciski przewijania pojawiają się obok paska wyszukiwania, gdy jest wiele komentarzy
- **Wyświetlanie oparte na pozycji**: Na górze wyświetlany jest tylko przycisk dolny, na dnie tylko przycisk górny
- **Projekt Neumorficzny**: Styl przycisku zgodny z projektem aplikacji

#### Przywrócona animacja przejścia strony
Animacja przerzucania paska nawigacji dolnej i ekranu otrzymywania została przywrócona.
- **Efekt 3D**: Przejścia stron z obrotem 180 stopni na osi Y
- **Strony dziennika/sklepu**: Animacja przerzucania zastosowana
- **Ekran otrzymywania**: Animacja przerzucania zastosowana ze zmian przycisków skrzynki pocztowej i głębokich linków powiadomień

#### Ujednolicenie projektu interfejsu
Projekt neumorficzny został zastosowany do ekranów Wyślij, Odbierz i Sklep, ujednolicając całą aplikację.
- **Ekrany Wyślij/Odbierz**: Cienie neumorficzne zastosowane do kart i okien dialogowych
- **Ekran sklepu**: Efekty świecenia na przyciskach kart, karty produktów w stylu neumorficznym
- **Projekt pola wejściowego**: Styl wstawienia wyraźnie odróżnia obszary wejściowe

#### Animacja zmiany kolejności dziennika
Gdy pozycje przesuwają się na górę listy dziennika ze względu na nowe komentarze, stosowane są płynne animacje.
- **Efekt skali**: Elementy krótko się powiększają, a następnie wracają do normalnego rozmiaru po zmienionej pozycji
- **Przetwarzanie sekwencyjne**: Wiele elementów animuje się w kolejności przy jednoczesnym przesunięciu
- **Nacisk wizualny**: Wyraźnie wskazuje, które elementy są najbardziej aktualne

#### Stabilizacja bazy danych
Problemy z kompatybilnością bazy danych, które mogły wystąpić podczas aktualizacji aplikacji, zostały rozwiązane.
- **Automatyczne odzyskiwanie**: Automatycznie odtwarza bazę danych w przypadku niezgodności wersji
- **Zachowanie danych**: Brak utraty danych dzięki automatycznej synchronizacji serwera
- **Wszystkie platformy**: Ta sama poprawka zastosowana do iOS, Android, macOS i Windows

#### Ulepszona blokada hasłem
Bezpieczeństwo i użyteczność elementów chronionych hasłem zostały znacznie ulepszone.
- **Rozmitoś rozmycia**: Zawartość jest całkowicie ukryta podczas wchodzenia do elementów zablokowanych w celu zwiększenia bezpieczeństwa
- **Projekt Neumorficzny**: Okna dialogowe ustawiania/odblokowania hasła używają teraz stylizacji neumorficznej
- **Wyświetlanie 16 cyfr**: Małe koła (16 łącznie) pokazują stan wprowadzania hasła
- **Dwuliniowe wprowadzanie**: Ustaw hasło i potwierdź na tym samym ekranie

#### Ulepszenie ustawień powiadomień push
Ekran ustawień powiadomień push został zreorganizowany wg kategorii, aby ułatwić zarządzanie.
- **7 kategorii**: Podzielone na Transakcję, Dziennik, Wygaśnięcie, Reakcję, Słowo kluczowe, Udostępnianie i System
- **Przełącznik grupy**: Włącz całą kategorię na raz lub wyłącz
- **Zwijanie/rozwijanie**: Interfejs akordeonowy umożliwia wyświetlanie tylko niezbędnych kategorii
- **Szczegółowe powiadomienia**: Dodano powiadomienia o zaakceptowaniu/odrzuceniu transakcji, reakcji, słowach kluczowych, wygaśnięciu udostępniania/raporcie i powiadomienia systemowe
- **Projekt Neumorficzny**: Styl neumorficzny zastosowany do poszczególnych elementów powiadomień

#### Ulepszenie ustawień dźwięku
Przycisk wyciszenia ma teraz projekt neumorficzny dla intuicyjnej reprezentacji stanu wciśnięcia.
- **Efekt nacisku**: Przycisk wydaje się być wciśnięty do wewnątrz po wyciszeniu
- **Cień neumorficzny**: Stan domyślny pokazuje cień wypukły, stan wciśnięty pokazuje cień wklęsły

#### Ulepszenie wydajności ładowania dziennika
Prędkość ładowania dziennika udostępnianego została ulepszona.
- **Ładowanie z priorytetem pamięci podręcznej**: Wcześniej przeglądane dzienniki są wyświetlane natychmiast z pamięci podręcznej
- **Oszczędność danych**: Brak żądań serwera przy ponownym odwiedzeniu, używa danych lokalnych
- **Nowe komentarze w czasie rzeczywistym**: Nowe komentarze są odbierane w czasie rzeczywistym nawet przy korzystaniu z pamięci podręcznej

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Dzienniki wspólne z papieru
Twórz dokumenty dziennika wspólnego, używając tylko papieru, bez pieczęci.
- **Wybierz 2 lub więcej papierów** → pojawia się menu "Utwórz nowy element (wspólny dziennik)"
- **Wybierz 1 papier** → pojawia się menu "Utwórz nowy element (prywatny dziennik)"
- Utworzone dokumenty dzielą ten sam pokój komentarzy
- Wyślij dokumenty różnym osobom i konwersuj z sobą nawzajem

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Funkcja edycji odznaki
Edytuj obraz i słowa kluczowe grawerowanych odznak.
- **Menu edycji**: Menu "Edytuj odznakę" pojawia się przy wyborze grawerowanej odznaki
- **Zmiana obrazu**: Zastąp obraz odznaki nowym
- **Zarządzanie słowami kluczowymi**: Dodaj, usuń lub modyfikuj 5 typów słów kluczowych

#### Optymalizacja wydajności obrazu
Prędkość ładowania obrazu sieciowego została znacznie ulepszona.
- **Lokalna pamięć podręczna**: Po załadowaniu obrazy są zapisywane lokalnie do natychmiastowego wyświetlenia
- **Synchronizacja obrazu odznaki**: Zmiany obrazu odznaki są natychmiast odzwierciedlane we wszystkich dziennikach

#### Autouzupełnianie ostatnich odbiorców
Szybko wybierz ostatnich odbiorców na ekranie wysyłania.
- **Lista autouzupełniania**: Lista rozwijająca się pokazująca do 30 ostatnich odbiorców, gdy pole wejściowe jest fokusowane
- **Szybki wybór**: Automatycznie wyszukuje przy wyborze odbiorcy z listy
- **Ponowne wyszukiwanie**: Wyczyść wybór przyciskiem X, aby wyszukać innego odborcę
- **Magazyn lokalny**: Informacje odbiorcy automatycznie zapisywane przy pomyślnym wysłaniu

#### Ulepszenie ograniczeń wysyłania
Wyposażone odznaki i udostępniane pieczęcie są teraz ograniczone przed wysłaniem.
- **Wyposażone odznaki**: Usuń odznakę, aby ją wysłać
- **Udostępniane pieczęcie**: Wycofaj udostępnianie, aby wysłać pieczęć
- **Szczegółowe wskazówki**: Wyświetla konkretne wiadomości wyjaśniające przyczynę ograniczenia

#### System reakcji
Reaguj na elementy za pomocą emocjonalnych wyrażeń.
- **12 reakcji**: Różne emocjonalne wyrażenia, w tym Podobnie, Kocham, Najlepsze, Gratulacje i wiele więcej
- **Przełącznik reakcji**: Anuluj, klikając wybraną reakcję ponownie
- **Nagranie dziennika**: Rejestr dziennika systemowego, kiedy są wybierane lub anulowane reakcje
- **Obsługa wielojęzyczna**: Nazwy reaktywności wyświetlane w języku użytkownika

#### Ulepszenie funkcjonalności wyszukiwania
Wyszukiwanie w czasie rzeczywistym zostało rozszerzone o nazwy elementów i słowa kluczowe.
- **Wyszukiwanie nazwy elementu**: Wyszukaj po tytule dokumentu, opisie pieczęci lub nazwie domeny odznaki
- **Wyszukiwanie słów kluczowych**: Wyszukaj po słowach kluczowych zapisanych w pieczęciach i odznakach
- **Wyszukiwanie tagów**: Wyszukaj po tagach szablonów pieczęci

#### Ulepszenie powiadomień w aplikacji
Powiadomienia typu toast w czasie rzeczywistym zostały ulepszone.
- **Wyświetlanie odznaki nadawcy**: Obraz odznaki nadawcy jest wyświetlany wbudowany w powiadomienie
- **Styl Dynamic Island**: Elegancka animacja powiadomienia typu toast inspirowana stylem iOS Dynamic Island
- **Wykrywanie w czasie rzeczywistym**: Dokładnie wykrywa nowe i zaktualizowane powiadomienia na podstawie ID+sygnatury czasowej

#### Poprawki błędów
- **Stabilizacja interfejsu szczegółów dokumentu**: Naprawiony problem, w którym pasek wyszukiwania i filtry drżały, gdy dzienniki wspólne/solo były na granicy ekranu
- **Naprawiony migotanie przewijania**: Rozwiązany problem migotania ekranu podczas przewijania w górę w dokumentach/pieczęciach z kilkoma dziennikami
- **Naprawiono przewijanie do góry**: Rozwiązany problem, w którym nie można było dotrzeć do informacji autora przewijaniem w elementach z dziennikami
- **Ulepszony format dziennika reakcji**: Emotikony i nazwy są teraz wyświetlane razem
- **Naprawiono wyświetlanie nazwy użytkownika**: Nazwa domeny jest teraz prawidłowo wyświetlana podczas noszenia odznaki
- **Naprawiono pierwsze powiadomienie dziennika wspólnego**: Rozwiązany problem, w którym pierwsze powiadomienie typu toast dla dzienników wspólnych nie było wyświetlane
- **Naprawiono obraz powiadomienia push**: Obraz dokumentu jest teraz priorytetowy w stosunku do obrazu odznaki w powiadomieniach push

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Automatyczne tłumaczenie wielojęzyczne
Dokumenty, pieczęcie i zawartość dziennika są automatycznie tłumaczone na Twój język.
- **Automatyczne tłumaczenie**: Automatyczne tłumaczenie na język użytkownika podczas wyświetlania dokumentów, pieczęci i dzienników
- **Obsługiwane języki**: koreański, angielski, japoński, hiszpański, francuski, niemiecki, portugalski
- **Przełącznik oryginału**: Przełączaj się między oryginałem a tłumaczeniem za pomocą przycisku [Pokaż oryginał]
- **Buforowanie tłumaczenia**: Buforowanie na serwerze i lokalnie zapobiega ponownym żądaniom tłumaczenia
- **Pamięć podręczna specyficzna dla języka**: Natychmiast używa buforowanego tłumaczenia podczas przełączania języków

#### System poradnika
Przewodniki krok po kroku były dodane, aby poprowadzić Cię przez korzystanie z aplikacji.
- **Ekran inwentarza**: Wybór elementu, ruch partycji, użycie menu dolnego (8 kroków)
- **Ekran wysyłania/odbierania**: Wprowadzanie odbiorcy, skanowanie kodu QR, metody transferu/odboru
- **Ekran sklepu**: Przeglądanie kategorii produktów i metody zakupu
- **Ekran profilu**: Informacje o koncie i ustawienia
- **Ekran ustawień**: Ustawienia aplikacji i zmiany motywu
- **Szablon pieczęci**: Kompletny proces tworzenia szablonu (9 kroków)
- **Funkcja wyszukiwania**: Użycie filtru i zapis terminu wyszukiwania
- Wyświetlane tylko przy pierwszym użyciu; można je wyświetlić ponownie w Ustawieniach

#### Optymalizacja wydajności dziennika
Prędkość ładowania i użycie danych dla dzienników wspólnych/niezależnych zostały znacznie ulepszone.
- **Szybkie ładowanie**: Najpierw załaduj tylko ostatnie 100 komentarzy
- **Nieskończone przewijanie**: Przewijaj, aby załadować po 50 starszych komentarzy na raz
- **Lokalne buforowanie**: Natychmiastowe wyświetlanie przy ponownym odwiedzeniu za pomocą pamięci podręcznej
- **Synchronizacja w czasie rzeczywistym**: Efektywnie odbieraj tylko nowe komentarze
- **Oszczędność danych**: Zapobiega niepotrzebnym ponownym pobieranym

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Karty linków do mediów
Adresy URL wprowadzone w dziennikach są automatycznie wyświetlane jako **bogate karty**.
- **YouTube**: Miniatura + tytuł + nazwa kanału
- **Spotify**: Okładka albumu + tytuł + artysta
- **Google Drive**: Miniatura pliku + nazwa pliku (pliki publiczne)
- **Dropbox**: Ikona + nazwa pliku
- **OneDrive**: Ikona + nazwa usługi
- **Strony internetowe**: Obraz podglądu + tytuł strony
- Naciśnij, aby otworzyć w aplikacji zewnętrznej/przeglądarce
- Długie naciśnięcie, aby skopiować adres URL do schowka

#### Ulepszenie wyszukiwania szablonów udostępnionych
- **Sprawdzanie papieru**: Przycisk klonowania pokazuje pozostałą liczbę papieru (Papier:10)
- **Papier wymagany**: Klonowanie jest wyłączone, gdy nie ma dostępnego papieru
- **Projekt Neumorficzny**: Ekran wyszukiwania używa teraz stylu interfejsu neumorficznego

#### Ulepszenia systemu efektów edytora obrazu
Interfejs wyboru efektów specjalnych został uproszczony.
- **Pojedynczy wybór**: Wybierz jeden z 5 efektów na raz
- **Lista efektów**: Brak / Usuń tło / Bokeh / Bloom / Monochromatyczne
- **Płynne przejścia**: Wskaźnik postępu wyświetlany podczas przetwarzania efektu
- **Wzmocnienie wydajności**: Filtry Bloom/Monochromatyczne przetwarzane w tle

#### Wydajność i stabilność
Wewnętrzna struktura aplikacji została zoptymalizowana.
- **Optymalizacja zapytań**: Przetwarzanie równoległe dla szybszego ładowania klipu/filtra
- **Czyszczenie kodu**: Usunięto 12 nieużywanych modułów kodu
- **Czyszczenie zależności**: Usunięto 7 nieużywanych bibliotek
- **Czyszczenie zasobów**: Usunięto nieużywane czcionki/obrazy (ok. 16MB redukcji)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Funkcja klipu
Wiązz wiele dokumentów razem, aby ułatwić zarządzanie.
- **Utwórz klip**: Wybierz 2+ dokumenty i naciśnij "Klip razem"
- **Ikona klipu**: Dokumenty w klipu wyświetlają ikonę klipu w górnym prawym rogu
- **Szczegóły klipu**: Wyświetl elementy wewnętrzne za pomocą przycisku "Informacje o klipu" na ekranie szczegółów elementu
- **Zmiana kolejności**: Przeciągnij, aby zmienić kolejność elementów w klipu (z wyjątkiem okładki)
- **Wykluczanie elementów**: Usuń określone elementy z klipu (z wyjątkiem okładki)
- **Rozpakowanie**: Całkowicie rozpakuj klip na osobne dokumenty
- **Automatyczne rozpakowanie**: Klip automatycznie się rozpakuje, gdy zostanie zmniejszony do 1 elementu
- **Transfer**: Klipy są wysyłane/odbierane jako pakiet

#### Ulepszenie wyszukiwania szablonów udostępnionych
Ulepszona użyteczność dla ekranu wyszukiwania szablonów udostępnionych.
- **Karty wbudowane**: Wyniki wyszukiwania wyświetlane w zwartym formacie listy
- **Pełny wyświetlacz obrazu**: Miniatury wyświetlane w oryginalnym stosunku stron bez przycinania
- **Rozszerzone szczegóły**: Wyświetlaj zawartość, słowa kluczowe i datę wygaśnięcia w arkuszu szczegółów szablonu
- **Podgląd słów kluczowych**: Wyświetl domyślne słowa kluczowe ustawione dla szablonu
- **Data wygaśnięcia**: Sprawdź, kiedy udostępniony szablon wygasa

#### Ulepszenie odblokowywania hasłem
- Wprowadzenie prawidłowego hasła teraz **na stałe odblokowuje** dokument
- Przed: Tylko wyświetlanie, blokada pozostała → Teraz: W pełni odblokowane

#### Poprawki błędów
- Naprawiono liczenie elementów klipu oddzielnie na ekranie odbierania
- Naprawiono pasek powiadomień na pasku nawigacyjnym zawierający elementy wewnętrzne klipu
- Naprawiono odznakę (nametag) nie będącą wyposażoną w zwrot/usunięcie
- Naprawiono pozostałą domenę zajętą po usunięciu odznaki

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Wskaźnik nieprzeczytanego dziennika wspólnego
Gdy nowe komentarze są dodawane do dzienników wspólnych, krawędź elementu **pulsuje**.
- Łatwo zaobserwuj nieprzeczytane dzienniki wspólne w swoim inwentarzu
- Pulsowanie zatrzymuje się, gdy otworzysz dokument
- Stan przeczytania synchronizuje się na wszystkich urządzeniach

#### Przewodnik użycia pieczęci
Po wybraniu grawerowanej pieczęci dostępne papiery **pulsują**, aby poprowadzić Cię.
- Ulepszone UX dla duplikacji szablonu
- Intuicyjne wskazówki następnego kroku

#### Ulepszenia partycji
- **Zwijanie/rozwijanie**: Przełączaj partycje za pomocą przycisków strzałek (▼/▲)
- **Zaznacz wszystko**: Naciśnij nagłówek partycji, aby zaznaczyć/odznaczyć wszystkie elementy
- Wskaźniki stanu zaznaczenia (○/◐/●)
- Przeciągnij i upuść do zwiniętych partycji

#### Wygoda sklepu
Usprawniony proces kasowania dla kolejnych zakupów tego samego elementu.
- Pomiń okna dialogowe potwierdzenia w ciągu 10 minut od ostatniego zakupu
- Szybsze zakupy zbiorcze

#### Ulepszenia interfejsu
- Ulepszona czytelność dzięki nowej czcionce nagłówka
- Karty pieczęci pokazują podgląd szablonu w tle (przezroczystość 33%)
- Karty odznak pokazują podgląd grawerowanego obrazu
- Menu dolne wyświetla dostępny licznik akcji
- Dopasowanie koloru motywu czarnego atramentu (ulepszona czytelność tekstu)
- Zoptymalizowane obrazy produktów (zmniejszony rozmiar, szybsze ładowanie)

#### Poprawki błędów
- Naprawiono efekt pulsowania na własnych komentarzach
- Naprawiono przycinanie pola wejściowego za pomocą gestury nawigacji
- Naprawiono szary ekran podczas zwijania partycji
- Ulepszone obsługa uprawnień powiadomień push

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Funkcja blokady dokumentu
- Ustaw numeryczne hasło na dokumentach (do 16 cyfr)
- Zablokowane dokumenty wyświetlają skalę szarości + ikonę blokady
- Odblokuj prawidłowym hasłem (jednorazowo)
- Stan blokady utrzymuje się po przesyłaniu elementu
- Zablokowane dokumenty wykluczone z wyników wyszukiwania

#### System szybkiego wejścia
Łatwo wprowadzaj specjalne informacje za pomocą przycisku `+` podczas pisania dzienników:
- **Słowo kluczowe:wartość** - Ogólna karta słowa kluczowego
- **Alarm daty** - Karta daty (automatyczne obliczenie D-Day, ustawienia alarmu)
- **Numer telefonu** - Auto-formatowanie specyficzne dla kraju
- **Lokalizacja/adres** - Integracja z aplikacją map
- **Kwota** - Automatyczne wyświetlanie symbolu waluty

#### Akcje specjalnych kart
**Długie naciśnięcie** specjalnych informacji w dziennikach, aby aktywować dodatkowe funkcje:
- **Karta daty**: Ustaw/anuluj alarm
- **Karta telefonu**: Zadzwoń bezpośrednio / Kopiuj do schowka
- **Karta lokalizacji**: Otwórz w aplikacji map / Kopiuj do schowka
- **Karta kwoty**: Kopiuj do schowka

#### Ulepszenia interfejsu
- Projekt neumorficzny chipsa filtra
- Ulepszenie przewijania paska wyszukiwania
- Pasek aplikacji ekranu szczegółów elementu pokazuje nazwę elementu

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopiuj">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**Pierwsza oficjalna wersja**

#### System papieru
- Wprowadzony system waluty wymagany do tworzenia dokumentów
- 10 arkuszy papieru danych przy nowej rejestracji
- Dodatkowe 10 arkuszy dla każdego połączenia konta Google/Apple
- Papier dostępny do zakupu w sklepie

#### Tworzenie dokumentów
- Twórz dokumenty za pomocą papieru
- Dodaj tytuł, zawartość i obrazy
- Ustaw opcje daty początkowej/daty wygaśnięcia

#### System odznak
- Funkcja grawerowania unikalnej nazwy domeny
- Grawerowana nazwa domeny używana jako tożsamość użytkownika
- Zarządzanie aktywacją poprzez wyposażenie/wyposażenie
- Opcja załącznika obrazu 128x128

#### System pieczęci
- Funkcja tworzenia szablonów
- Wybór trybu dziennika solo/wspólnego
- Funkcja duplikacji szablonu
- Ustawienia daty początkowej/daty wygaśnięcia

#### Funkcja dziennika
- Rejestr dzienników na dokumentach/pieczęciach
- Dziennik solo: Rekordy tylko dla Ciebie
- Dziennik wspólny: Udostępnij z właścicielami duplikatów
- Obsługa karty informacji w formacie klucz:wartość

#### System atramentu
- Funkcja zmiany koloru motywu aplikacji
- Czarny atrament, złoty atrament

#### Transfer elementów
- Wyślij elementy za pośrednictwem adresu e-mail
- Auto-wypełnianie wiadomości e-mail przez skanowanie kodu QR
- Zaakceptuj lub zwróć otrzymane elementy
- Wyślij wiele elementów naraz

#### Partycja
- Funkcja grupowania elementów
- Magazyn lokalny na urządzeniu

#### Funkcja wyszukiwania
- Filtrowanie wyszukiwania w czasie rzeczywistym
- Zapis warunków wyszukiwania jako filtry
- Auto-zapis ostatnich wyszukiwań (do 5)

#### Sklep
- Zakup papieru, pieczęci, odznak, atramentu
- Dostępne na wszystkich platformach

#### Konto
- Logowanie za pomocą Google, Apple, e-mail
- Zarabiaj dodatkowy papier, łącząc konta społeczne

#### Obsługa wielojęzyczności
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>Zaproponuj nowe funkcje!</strong> Podziel się pomysłami na <a href="/inventory/suggest/pl/">Sugestie</a> i aktywnie je przejrzymy.
</div>

<style>
/* Version Container */
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

/* Summary Header */
details.changelog-version summary {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

details.changelog-version summary::-webkit-details-marker { display: none; }

/* Arrow Icon */
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

/* Version Title */
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

/* Copy Button */
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

/* Version Content */
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

/* Footer */
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
