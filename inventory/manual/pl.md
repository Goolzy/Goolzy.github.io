---
layout: inventory
title: Podręcznik użytkownika
permalink: /inventory/manual/pl/
lang: pl
translations:
  ko: /inventory/manual/
  en: /inventory/manual/en/
  ja: /inventory/manual/ja/
  de: /inventory/manual/de/
  fr: /inventory/manual/fr/
  es: /inventory/manual/es/
  pt: /inventory/manual/pt/
  zh: /inventory/manual/zh/
  ar: /inventory/manual/ar/
  hi: /inventory/manual/hi/
  id: /inventory/manual/id/
  ru: /inventory/manual/ru/
  it: /inventory/manual/it/
  tr: /inventory/manual/tr/
  vi: /inventory/manual/vi/
  th: /inventory/manual/th/
  pl: /inventory/manual/pl/
---

## 📖 Podręcznik użytkownika

Pełne odkrycie wszystkich funkcji aplikacji Inventory.

---

<details open>
<summary><h3 id="paper">📦 System papieru</h3></summary>
<div class="manual-content" markdown="1">

W aplikacji Inventory **papier** jest podstawową walutą używaną do tworzenia elementów.

#### Co to jest papier?
- **1 papier** jest zużywany podczas tworzenia elementu
- Nie możesz tworzyć nowych elementów bez papieru

#### Jak zdobyć papier

| Metoda | Ilość | Uwaga |
|--------|--------|------|
| Nowa rejestracja | 10 papieru + 3 pieczęcie | Tylko pierwszy raz |
| Połączenie Google | +10 arkuszy | Dla istniejących użytkowników |
| Połączenie Apple | +10 arkuszy | Dla istniejących użytkowników |
| Zakup w sklepie | 10 arkuszy | Zakup w aplikacji |

> 💡 **Wskazówka**: Istniejący użytkownicy mogą uzyskać dodatkowy papier, łącząc nowe konta społeczne!

</div>
</details>

---

<details>
<summary><h3 id="create-item">📄 Tworzenie elementów</h3></summary>
<div class="manual-content" markdown="1">

Wybierz papier, aby utworzyć dokumenty dziennika dziennego. W zależności od liczby wybranych papierów możesz tworzyć dzienniki prywatne lub wspólne.

| Typ dziennika | Papiery | Cel |
|----------|--------|---------|
| **Dziennik prywatny** | 1 | Notatki osobiste, dziennik, wiadomości jednokierunkowe |
| **Dziennik wspólny** | 2 lub więcej | Konwersacja dwukierunkowa, komunikacja |

<h4 id="private-log">Tworzenie elementów dziennika prywatnego</h4>

1. Wybierz **1 papier** na ekranie głównym
2. Wybierz **"Utwórz nowy element (dziennik prywatny)"** z menu dolnego
3. Wprowadź informacje o elemencie:
   - Tytuł (wymagany)
   - Zawartość
   - Obraz (opcjonalnie)
   - Data początkowa (opcjonalnie)
   - Data wygaśnięcia (opcjonalnie)
4. Naciśnij **Zapisz** i 1 papier zostanie zużyty do utworzenia dokumentu

> 💡 **Dziennik prywatny**: Tylko ty możesz zobaczyć dzienniki, które napiszesz. Po wysłaniu komuś, tylko odbiorca może dodawać dzienniki.

<h4 id="shared-log">Tworzenie elementów dziennika wspólnego</h4>

1. Wybierz **2 lub więcej papierów** na ekranie głównym
2. Wybierz **"Utwórz nowy element (dziennik wspólny)"** z menu dolnego
3. Wprowadź informacje o elemencie:
   - Tytuł (wymagany)
   - Zawartość
   - Obraz (opcjonalnie)
   - Data początkowa (opcjonalnie)
   - Data wygaśnięcia (opcjonalnie)
4. Naciśnij **Zapisz** i dokumenty równe liczbie wybranych papierów zostaną utworzone

> 💡 **Dziennik wspólny**: Utworzone dokumenty dzielą ten sam pokój komentarzy. Wysyłaj dokumenty różnym osobom, aby zobaczyć dzienniki siebie nawzajem w czasie rzeczywistym, jak czat.

<h4 id="dates">Data początkowa i data wygaśnięcia</h4>

| Ustawienie | Opis |
|---------|-------------|
| **Data początkowa** | Zawartość będzie rozmyta do tej daty |
| **Data wygaśnięcia** | Zawartość będzie rozmyta i dodawanie dziennika wyłączone po tej dacie |

Jeśli nie jest ustawiona, będzie natychmiast widoczna i trwała.

</div>
</details>

---

<details>
<summary><h3 id="lock">🔒 Blokada dokumentu</h3></summary>
<div class="manual-content" markdown="1">

Możesz chronić elementy dokumentu, ustawiając hasło.

#### Co to jest blokada dokumentu?

Zablokowany dokument można przeglądać tylko po wprowadzeniu prawidłowego hasła.

| Status | Opis |
|--------|-------------|
| **Odblokowane** | Każdy może zobaczyć zawartość |
| **Zablokowane** | Zawartość widoczna tylko z hasłem |

#### Jak zablokować

1. Wybierz **dokumenty**, które chcesz zablokować na ekranie głównym (możliwy wybór wielokrotny)
2. Wybierz **"Zablokuj elementy"** z menu dolnego
3. Wprowadź numeryczne hasło (do 16 cyfr)
4. Wprowadź to samo hasło ponownie, aby potwierdzić
5. Po zablokowaniu elementy wyświetlą **ikonę blokady** i efekt **skali szarości**

#### Jak odblokować

1. Naciśnij zablokowany dokument, aby wejść na ekran szczegółów
2. Pojawi się okno dialogowe wprowadzania hasła
3. Wprowadź prawidłowe hasło, aby odblokować
4. Po odblokowaniu blokada jest trwale usunięta (zalock ponownie, ustawiając nowe hasło)

> ⚠️ **Ostrzeżenie**: Jeśli zapomnisz hasła, nie będzie go można odzyskać. Zablokowane dokumenty mogą być tylko **usunięte**.

#### Funkcje blokady

- Hasła blokady są **przechowywane w chmurze**
- Stan blokady jest utrzymywany nawet podczas transferu elementów do innych osób
- Zablokowane dokumenty nie pojawiają się w wynikach wyszukiwania
- Zablokowane elementy mogą być nadal usuwane

</div>
</details>

---

<details>
<summary><h3 id="clip">📎 System klipu</h3></summary>
<div class="manual-content" markdown="1">

**Klip** to funkcja, która wiąże wiele dokumentów razem, aby ułatwić zarządzanie.

#### Co to jest klip?

Klipy pozwalają zarządzać powiązanymi dokumentami jako jeden pakiet.

| Stan | Opis |
|-------|-------------|
| **Pojedyncze dokumenty** | Dokumenty zarządzane osobno |
| **Dokumenty w klipu** | Zarządzane jako pakiet, przenoszone/transferowane razem |

#### Tworzenie klipu

1. Wybierz **2 lub więcej dokumentów** na ekranie głównym
2. Naciśnij **"Klip razem"** w menu dolnym
3. Wybrane dokumenty są wiązane w jeden klip
4. Dokumenty w klipu wyświetlają **ikonę klipu (📎)** w górnym prawym rogu

> 💡 **Wskazówka**: Pierwszy wybrany dokument staje się **okładką** klipu!

#### Przeglądanie informacji o klipu

1. Wejdź na **ekran szczegółów** dokumentu w klipu
2. Naciśnij przycisk **"Informacje o klipu"**
3. Przeglądaj listę wszystkich elementów w klipu

#### Zmiana kolejności elementów w klipu

Możesz zmienić kolejność elementów na ekranie informacji o klipu:

1. Długo naciśnij **uchwyt przeciągania (⋮⋮)** elementu, który chcesz przenieść
2. Przeciągnij na żądaną pozycję
3. Zwolnij, aby zapisać kolejność

> ⚠️ **Uwaga**: Okładka (pierwszy element) nie może być zmieniana.

#### Wykluczanie elementów z klipu

Możesz usunąć określone elementy z klipu na ekranie informacji o klipu:

1. Naciśnij przycisk **"Wyklucz"** obok elementu
2. Potwierdź usunięcie elementu z klipu
3. Usunięty element staje się osobnym dokumentem

> ⚠️ **Uwaga**: Okładka nie może być wykluczona. Jeśli zostaną tylko 2 elementy i wykluczysz 1, klip automatycznie się rozpakuje.

#### Rozpakowanie

1. Wybierz dokument w klipu
2. Naciśnij **"Rozpakuj"** w menu dolnym
3. Wszystkie dokumenty są oddzielone na osobne dokumenty

#### Transfer klipu

- Gdy wysyłasz dokument w klipu, **cały pakiet** jest transferowany razem
- Odbiorcy akceptują/odrzucają klipy jako **pakiet**
- Poszczególne elementy w klipu nie mogą być wysyłane osobno

#### Funkcje klipu

- Dokumenty w klipu są **przenoszone/transferowane razem**
- Ustawienie blokady na okładce chroni cały klip
- Ikona klipu (📎) ułatwia identyfikację stanu klipu
- Do utrzymania klipu wymagane są co najmniej 2 dokumenty

</div>
</details>

---

<details>
<summary><h3 id="badge">🏷️ System odznak</h3></summary>
<div class="manual-content" markdown="1">

**Odznaka** to unikalna tożsamość, którą możesz użyć w aplikacji.

#### Co to jest odznaka?

Po grawerowaniu nazwy domeny na odznace, wszystkie Twoje działania w aplikacji będą wyświetlane z Twoją **grawerowaną nazwą domeny** zamiast e-maila.

Przykłady: `MyBrand`, `JohnDoe`, `Company2025`

#### Grawerowanie odznaki

1. Kup odznakę ze sklepu (stan nieużywany)
2. Naciśnij odznakę na ekranie głównym → Wybierz menu **"Graweruj"**
3. Wprowadź żądaną nazwę domeny (maks. 32 znaki)
   - Znaki i liczby ze wszystkich języków są dozwolone
   - Znaki specjalne i emotikoniki nie są dozwolone
4. Kliknij **"Sprawdź dostępność domeny"**, aby zweryfikować dostępność
5. Opcjonalnie załącz obraz 128x128
6. Kliknij **"Graweruj"**, aby zakończyć

> ⚠️ **Ostrzeżenie**: Po grawerowaniu nazwa domeny i obraz **nie mogą być zmieniane na stałe**. Wybieraj ostrożnie!

#### Wyposażanie/wyposażanie odznaki

- **Wyposażona**: Twoja grawerowana nazwa domeny będzie wyświetlana dla wszystkich działań w aplikacji
- **Niewyposażona**: Twój domyślny e-mail będzie ponownie wyświetlany
- Nawet jeśli posiadasz wiele odznak, tylko jedna może być wyposażona na raz

#### Wyświetlanie karty inwentarza

Grawerowane odznaki (stan aktywny) pokazują podgląd grawerowanego obrazu w górnym prawym rogu karty inwentarza.
To pozwala szybko zidentyfikować, do której domeny należy odznaka.

</div>
</details>

---

<details>
<summary><h3 id="stamp">🔖 System pieczęci</h3></summary>
<div class="manual-content" markdown="1">

**Pieczęć** to element, który umożliwia tworzenie szablonów i dzielenie się nimi z innymi.

#### Wyświetlanie karty inwentarza

Pieczęcie z szablonami (stan aktywny) są wyświetlane specjalnie w inwentarzu:
- **Tło**: Obraz szablonu wyświetlany z przezroczystością 33%
- **Pierwszy plan**: Grawerowany obraz pieczęci

To pozwala szybko zidentyfikować, który szablon to jest.

#### Tworzenie szablonu pieczęci

1. Kup pieczęć ze sklepu (stan nieużywany)
2. Naciśnij pieczęć na ekranie głównym → Wybierz menu **"Utwórz nowy szablon"**
3. Wprowadź informacje o szablonie:
   - **Obraz** (wymagany)
   - **Tytuł** (maks. 32 znaki)
   - **Zawartość** (maks. 1024 znaki)
   - **Data początkowa** (opcjonalnie) - Zawartość ukryta do tej daty
   - **Data wygaśnięcia** (opcjonalnie) - Dodawanie dziennika wyłączone po tej dacie
   - **Tryb dziennika** - Dziennik solo lub wspólny
4. Kliknij **"Utwórz szablon"**, aby zakończyć

#### Duplikowanie pieczęci

Gdy wybierzesz aktywną pieczęć (szablon) i papier razem, pojawi się menu **"Duplikuj szablon"**.

- 1 papier jest zużywany
- Nowy element z tym samym szablorem jest tworzony
- Jeśli jest w trybie dziennika wspólnego, używa tej samej wspólnej przestrzeni co oryginał

#### Udostępnianie szablonu

Możesz udostępnić szablon pieczęci, aby inni użytkownicy mogли go wyszukiwać i klonować.

1. Naciśnij aktywną pieczęć (szablon) → Wybierz menu **"Ustawienia udostępniania"**
2. Wprowadź informacje o udostępnianiu:
   - **Opis** - Krótka fraza opisująca szablon
   - **Tagi** - Słowa kluczowe do wyszukiwania (oddzielone przecinkami)
   - **Czas trwania udostępniania** - Jak długo będzie aktywne udostępnianie
3. Kliknij **"Rozpocznij udostępnianie"**, aby zakończyć

Udostępniane szablony mogą być wyszukiwane i klonowane przez innych użytkowników za pośrednictwem wyszukiwania tagów.

> 💡 **Wskazówka**: Aby zatrzymać udostępnianie, wybierz **"Zatrzymaj udostępnianie"** z tego samego menu.

#### Wyszukiwanie udostępnionych szablonów

Możesz wyszukiwać i klonować szablony udostępniane przez innych użytkowników.

1. Przejdź do ekranu profilu i wybierz **"Wyszukaj udostępniane szablony"**
2. Wpisz tagi do wyszukiwania lub naciśnij popularne/najnowsze tagi
3. Naciśnij szablon z wyników wyszukiwania, aby wyświetlić szczegóły
4. Kliknij przycisk **"Klonuj"**, aby sklonować szablon

- Klonowanie zużywa 1 papier
- Przycisk klonowania jest wyłączony, jeśli nie masz papieru
- Sklonowane elementy mają te same informacje o szablonie, co oryginał

</div>
</details>

---

<details>
<summary><h3 id="quick-input">⚡ Szybkie wejście</h3></summary>
<div class="manual-content" markdown="1">

Podczas dodawania dzienników, naciśnij przycisk `+`, aby otworzyć menu **Szybkie wejście** do łatwego wprowadzania specjalnych informacji.

#### Typy szybkiego wejścia

| Typ | Opis | Przykład |
|------|-------------|---------|
| **Słowo kluczowe** | Format klucz:wartość | `Status:Dobrze` |
| **Data** | Daty z obliczeniem D-Day | D-5, D-Day, D+3 |
| **Telefon** | Numer telefonu | Może dzwonić bezpośrednio |
| **Lokalizacja** | Adres/współrzędne | Otwiera się w aplikacji map |
| **Kwota** | Format waluty | Auto-formatowanie |

#### Akcje długiego naciśnięcia

| Typ karty | Akcja długiego naciśnięcia |
|-----------|------------------|
| **📅 Data** | Ustaw/Usuń alarm |
| **📞 Telefon** | Mobilne: dzwoń bezpośrednio, Komputer: kopiuj |
| **📍 Lokalizacja** | Mobilne: otwórz na mapie, Komputer: kopiuj |
| **💰 Kwota** | Kopiuj do schowka |

<h4 id="alarm">Ustawienie alarmu daty</h4>

Długo naciśnij kartę daty, aby ustawić alarm:

1. **Długo naciśnij** kartę daty
2. Wybierz **Ustaw** w oknie dialogowym potwierdzenia
3. Po ustawieniu kolor karty się zmienia i pojawia się ikona 🔔
4. Długo naciśnij ponownie, aby usunąć alarm

> 💡 **Wskazówka**: Karty daty automatycznie wyświetlają obliczenia D-Day (np. D-5, D-Day, D+3)

</div>
</details>

---

<details>
<summary><h3 id="log">📝 System dziennika</h3></summary>
<div class="manual-content" markdown="1">

**Dzienniki** to rekordy, które możesz dodawać do elementów lub szablonów pieczęci.

#### Tryby dziennika

| Tryb | Dziennik solo | Dziennik wspólny |
|------|----------|------------|
| **Lokalizacja przechowywania** | Każdej osoby prywatna przestrzeń | Wspólna przestrzeń oparta na oryginalnej pieczęci |
| **Widoczne dzienniki** | Tylko Twoje własne dzienniki | Dzienniki wszystkich właścicieli |
| **Przypadki użytku** | Osobisty dziennik, notatki | Współpraca, społeczność |
| **Jeśli oryginalny usunięty** | Nie dotyczy | Nie można dodawać dzienników (tylko do odczytu) |

#### Formaty dziennika

Możesz używać różnych formatów podczas pisania dzienników.

**Formaty podstawowe:**

| Format | Opis | Przykład |
|--------|-------------|---------|
| Zwykły tekst | Wyświetlany jako bąbelek czatu | `Inspekcja ukończona dzisiaj!` |
| `klucz:wartość` | Wyświetlany jako karta informacyjna (klucz 1-8 znaków) | `status:dobrze` |
| `---` | Wyświetlany jako separator | `---` |

Użycie tego samego klucza wiele razy wyświetla jako porównanie `poprzednia wartość → nowa wartość`.

**Stylowanie tekstu:**

| Format | Efekt | Przykład |
|--------|--------|---------|
| `{[tekst]}` | Karta koloru głównego (tło + tekst) | `{[Ważne]}` |
| `[{tekst}]` | Szara karta + główny tekst koloru | `[{Ostrożnie}]` |
| `[tekst]` | Szara karta | `[Uwaga]` |
| `{tekst}` | Główny tekst koloru | `{Nacisk}` |
| `(tekst)` | Tekst koloru pomocniczego | `(Dodatkowe informacje)` |
| `"tekst"` | **Pogrubienie** | `"Ważna zawartość"` |
| `'tekst'` | <u>Podkreślenie</u> | `'Wyróżniona część'` |
| `<tekst>` | ~~Przekreślenie~~ | `<Usunięta zawartość>` |

> 💡 Style mogą być zagnieżdżone do 3 poziomów. Przykład: `{["Pogrubienie głównego koloru"]}`

**Linki mediów (karty adresów URL):**

Gdy wprowadzisz adres URL w dzienniku, automatycznie wyświetla się jako **bogate karty**.

| Platforma | Wyświetlana zawartość | Przykład |
|----------|----------------|---------|
| **YouTube** | Miniatura + tytuł + kanał | `https://youtube.com/watch?v=...` |
| **Spotify** | Okładka albumu + tytuł + artysta | `https://open.spotify.com/track/...` |
| **Google Drive** | Miniatura pliku + nazwa pliku | `https://drive.google.com/file/d/...` |
| **Dropbox** | Ikona + nazwa pliku | `https://dropbox.com/s/...` |
| **OneDrive** | Ikona + nazwa usługi | `https://1drv.ms/...` |
| **Strony internetowe** | Miniatura + tytuł strony | `https://example.com` |

- Użyj formatu `klucz:URL`, aby wyświetlić ze słowem kluczowym (np. `docs:https://youtube.com/...`)
- **Naciśnij** kartę, aby otworzyć w aplikacji/przeglądarce zewnętrznej
- **Długo naciśnij** kartę, aby skopiować adres URL do schowka

> 💡 **Wskazówka**: Pliki Google Drive muszą być **publicznie udostępniane**, aby wyświetlać miniatury.

**Dzienniki automatyczne:**

Gdy element jest transferowany, dziennik transferu jest automatycznie rejestrowany:
- Wyświetlany jako format `Nadawca → Odbiorca`
- Jeśli odznaka jest wyposażona, nazwa domeny jest wyświetlana

#### Warunki zakończenia dziennika wspólnego

- **Oryginalna pieczęć usunięta**: Nie można dodawać dzienników wspólnych (tylko do odczytu)
- **Przeszła data wygaśnięcia**: Nie można dodawać dzienników wspólnych (tylko do odczytu)

#### 🔔 Wskaźnik nieprzeczytanego

Gdy nowe komentarze są dodawane do dziennika wspólnego, krawędź elementu **pulsuje** w widoku inwentarza.

- Pulsowanie rozpoczyna się natychmiast, gdy inny użytkownik doda komentarz
- Pulsowanie zatrzymuje się, gdy otworzysz i przejrzysz dokument
- Stan przeczytania jest zapisywany w chmurze i synchronizowany na wszystkich urządzeniach

> 💡 **Wskazówka**: Sprawdzaj pulsujące elementy, aby nigdy nie pominąć nowych komentarzy!

</div>
</details>

---

<details>
<summary><h3 id="ink">🎨 System atramentu</h3></summary>
<div class="manual-content" markdown="1">

**Atrament** to element, który zmienia kolor motywu aplikacji.

#### Jak używać

1. Naciśnij atrament, aby wejść na ekran szczegółów
2. Kliknij przycisk **"Zmień motyw"**
3. Cały kolor aplikacji zmienia się natychmiast

#### Typy atramentu

| Atrament | Kolor |
|-----|-------|
| **Czarny atrament** | Domyślny czarny motyw |
| **Złoty atrament** | Luksusowy złoty motyw |

</div>
</details>

---

<details>
<summary><h3 id="search">🔍 Funkcja wyszukiwania</h3></summary>
<div class="manual-content" markdown="1">

#### Podstawowe wyszukiwanie

Naciśnij pasek wyszukiwania u góry, aby aktywować tryb wyszukiwania.

- Wyniki są filtrowane **w czasie rzeczywistym** w miarę wpisywania
- Naciśnij przycisk X, aby wyjść z trybu wyszukiwania

#### Ostatnie wyszukiwania

- Zapisane są do 5 ostatnich wyszukiwań
- Naciśnij ostatnie wyszukiwanie, aby auto-wypełnić pasek wyszukiwania
- Usuń indywidualnie przyciskiem X

#### Zapisz jako filtr

Gdy zapiszesz termin wyszukiwania za pomocą przycisku **"Ustaw jako filtr"**:

- Pojawia się jako tag filtra poniżej paska wyszukiwania
- Naciśnij tag, aby natychmiast filtrować podle tego terminu wyszukiwania
- Usuń filtr przyciskiem X

<h4 id="keyword">Agregacja słów kluczowych</h4>

Gdy filtr jest ustawiony i wybierzesz elementy, **wartości słów kluczowych wybranych elementów są automatycznie agregowane**.

**Agregacja wartości numerycznych:**
- **Suma** i **średnia** są obliczane dla wartości numerycznych z tym samym słowem kluczowym
- Przykład: Wybranie `cena:1000`, `cena:2000`, `cena:3000`
- Wynik: `Suma: 6000  Średnia: 2000`

**Agregacja wartości ciągów:**
- Wartości ciągów z tym samym słowem kluczowym są **łączone z spacjami**
- Przykład: Wybranie `tag:A`, `tag:B`, `tag:C`
- Wynik: `A B C`

**Kopiowanie wartości:**
- **Długo naciśnij** kartę wyniku agregacji, aby skopiować wartość do schowka
- Powiadomienie pojawia się po ukończeniu kopii

> 💡 **Przykład użytku**: Szybko oblicz całkowitą cenę wielu elementów lub skopiuj powiązane tagi na raz.

</div>
</details>

---

<details>
<summary><h3 id="bottom-menu">📱 Pasek dolny menu</h3></summary>
<div class="manual-content" markdown="1">

Czerwone odznaki na ikonach menu dolnego pokazują aktualny stan.

| Menu | Znaczenie odznaki |
|------|---------------|
| **Wyślij** | Liczba elementów, które można wysłać (elementy transferowalne wśród wybranych) |
| **Odbierz** | Liczba oczekujących transakcji (wymagających zaakceptowania/zwrócenia) |
| **Akcja** | Liczba akcji dostępnych z wybranymi elementami |

> 💡 Liczby odznak animują się efektem bąbelka, gdy się zmieniają.

</div>
</details>

---

<details>
<summary><h3 id="transfer">📤 Wysyłanie elementów</h3></summary>
<div class="manual-content" markdown="1">

Możesz transferować elementy podczas sprzedaży używanych przedmiotów lub dania prezentów.

#### Jak wysłać

1. Wybierz **Wyślij** z karty dolnej
2. **Zaznacz** elementy do transferu (możliwy wybór wielokrotny)
3. Wprowadź adres e-mail odbiorcy
4. Kliknij przycisk **Wyślij**

#### Wprowadzanie e-maila za pośrednictwem kodu QR

Zamiast wpisywania adresu e-mail odbiorcy, możesz użyć kodu QR:

1. Odbiorca wyświetla swój kod QR z ekranu **profilu**
2. Nadawca naciska przycisk **Skanuj kod QR**
3. Skanuj kod QR aparatem
4. Adres e-mail jest automatycznie wprowadzony

> ⚠️ **Ważne**: Transferowane elementy **natychmiast znikają** z Twojego inwentarza. Transfery nie mogą być cofnięte.

</div>
</details>

---

<details>
<summary><h3 id="receive">📥 Odbieranie elementów</h3></summary>
<div class="manual-content" markdown="1">

Możesz odbierać elementy wysyłane przez inne osoby.

#### Jak odbierać

1. Wybierz **Odbierz** z karty dolnej
2. Wyświetlana jest lista odebranych elementów
3. Dla każdego elementu:
   - **Zaakceptuj**: Dodano do Twojego inwentarza
   - **Zwróć**: Wysłano z powrotem do nadawcy

#### Powiadomienia

- Otrzymujesz powiadomienia push, gdy przychodzą nowe elementy (jeśli powiadomienia są włączone)
- Karta odbierania pokazuje liczbę niezaakceptowanych elementów

</div>
</details>

---

<details>
<summary><h3 id="shop">🛒 Korzystanie ze sklepu</h3></summary>
<div class="manual-content" markdown="1">

Możesz kupować różne elementy ze sklepu.

#### Dostępne produkty

| Produkt | Użycie |
|---------|-----|
| **Papier** | Do tworzenia elementów (zużywany) |
| **Pieczęć** | Do tworzenia szablonów |
| **Odznaka** | Do grawerowania unikalnej domeny |
| **Atrament** | Do zmiany koloru motywu |

#### Jak kupować

1. Wybierz **Sklep** z karty dolnej
2. Naciśnij żądany produkt
3. Postępuj z płatnością (App Store / Google Play)
4. Automatycznie dostarczane po ukończeniu płatności

> 💡 Sklep jest dostępny na wszystkich platformach (iOS, Android, Windows, macOS).

</div>
</details>

---

<details>
<summary><h3 id="pocket">📂 Funkcja partycji</h3></summary>
<div class="manual-content" markdown="1">

Możesz grupować elementy za pomocą partycji, gdy masz wiele elementów.

#### Tworzenie partycji

1. Wybierz elementy
2. Wybierz **"Utwórz partycję"** z menu dolnego
3. Wprowadź nazwę partycji (maks. 16 znaków)

#### Charakterystyka partycji

- Partycje są **zapisywane tylko na urządzeniu**
- Struktura partycji nie jest widoczna na innych urządzeniach
- Samych elementy są przechowywane w chmurze i widoczne na wszystkich urządzeniach

#### Zwijanie/Rozwijanie partycji

Użyj przycisku strzałki (▼/▲) po prawej stronie nagłówka partycji, aby zwinąć lub rozwinąć partycje.

- Stan zawinięcia jest utrzymywany po ponownym uruchomieniu aplikacji
- Wszystkie partycje automatycznie się rozwijają podczas wyszukiwania
- Możesz przeciągać elementy do zwiniętych partycji

#### Zaznacz wszystko w partycji

Naciśnij nagłówek partycji, aby zaznaczyć/odznaczyć wszystkie elementy w tej partycji.

| Wskaźnik | Znaczenie |
|-----------|---------|
| ○ (Puste koło) | Żaden nie wybrany |
| ◐ (Półkoło) | Niektóre wybrane |
| ● (Wypełnione koło) | Wszystkie wybrane |

</div>
</details>

---

<details>
<summary><h3 id="language">🌍 Zmiana języka</h3></summary>
<div class="manual-content" markdown="1">

Obsługiwanych jest 7 języków:
- 🇰🇷 한국어
- 🇺🇸 English
- 🇯🇵 日本語
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español
- 🇧🇷 Português

**Jak zmienić:**
Ustawienia → Język → Wybierz żądany język

</div>
</details>

---

> 📚 **Masz więcej pytań?** Sprawdź [FAQ](/inventory/faq/pl/) lub skontaktuj się z nami poprzez [Sugestie](/inventory/suggest/pl/).

<style>
details {
  background: rgba(21, 10, 40, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  padding: 0;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

details:hover {
  border-color: rgba(168, 85, 247, 0.5);
  background: rgba(21, 10, 40, 0.5);
  box-shadow: 0 6px 24px rgba(168, 85, 247, 0.2);
  transform: translateY(-2px);
}

details[open] {
  border-color: rgba(168, 85, 247, 0.6);
  background: rgba(21, 10, 40, 0.6);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
}

summary {
  padding: 1rem 1.25rem;
  cursor: pointer;
  user-select: none;
  outline: none;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary::before {
  content: '▶';
  display: inline-block;
  margin-right: .5rem;
  color: #a855f7;
  transition: transform 0.2s;
  font-size: 0.9rem;
}

details[open] summary::before {
  transform: rotate(90deg);
}

summary h3 {
  display: inline;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.05rem;
  font-weight: 600;
}

details[open] summary {
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

.manual-content {
  padding: 1rem 1.25rem 1.25rem;
  background: rgba(10, 6, 20, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0 0 10px 10px;
  color: rgba(255, 255, 255, 0.9);
}

.manual-content h4 {
  color: #14b8a6;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: .75rem;
}

.manual-content strong {
  color: #14b8a6;
}

.manual-content ul,
.manual-content ol {
  line-height: 1.8;
  margin-top: .75rem;
  color: rgba(255, 255, 255, 0.85);
}

.manual-content li {
  margin-bottom: .5rem;
}

.manual-content a {
  color: #a855f7;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.manual-content a:hover {
  color: #14b8a6;
  text-decoration: underline;
}

.manual-content table {
  width: 100%;
  border-collapse: collapse;
  margin: .75rem 0;
}

.manual-content th,
.manual-content td {
  padding: .5rem .75rem;
  border: 1px solid rgba(168, 85, 247, 0.3);
  text-align: left;
}

.manual-content th {
  background: rgba(168, 85, 247, 0.2);
  color: rgba(255, 255, 255, 0.95);
}

.manual-content td {
  color: rgba(255, 255, 255, 0.85);
}

.manual-content code {
  background: rgba(168, 85, 247, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  color: #a855f7;
}

.manual-content blockquote {
  background: rgba(20, 184, 166, 0.15);
  border-left: 4px solid #14b8a6;
  padding: 1rem 1.25rem;
  margin: 1rem 0;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
}

.manual-content p {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
}
</style>
