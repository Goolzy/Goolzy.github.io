---
layout: inventory
title: Registro delle modifiche
permalink: /inventory/changelog/it/
lang: it
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

## Registro delle modifiche

Consulta la cronologia degli aggiornamenti dell'app Inventory.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Layout reattivo del pannello di reazione
Il pannello di reazione dell'immagine nella vista dettagli dell'elemento viene visualizzato correttamente su tutti i formati di schermo.
- **Layout reattivo**: I pulsanti di reazione si distribuiscono equamente anche su schermi stretti
- **Utilizzo della larghezza completa**: Il pannello utilizza la larghezza dello schermo completa indipendentemente dalle dimensioni dell'immagine
- **Design compatto**: Ottimizzazione del riempimento per nascondere meno la foto mantenendo l'area tattile

#### Scorrimento infinito nella ricerca di modelli condivisi
Quando i risultati della ricerca di modelli condivisi superano i 20 elementi, puoi scorrere per caricare altri risultati.
- **Scorrimento infinito**: Carica automaticamente i prossimi 20 risultati quando raggiungi il fondo della pagina
- **Indicatore di caricamento**: Viene visualizzato un indicatore di avanzamento in basso durante il caricamento di altri risultati
- **Compatibilità retroattiva**: Le versioni precedenti dell'app continuano a visualizzare 20 risultati come prima

#### Aggiornamenti della homepage
- **Supporto cinese (semplificato)**: Aggiunta localizzazione 中文(简体) alla homepage (8ª lingua)
- **Visualizzazione lingue supportate**: 8 bandiere delle lingue visualizzate sotto le icone di download della piattaforma

#### Configurazione lingue App Store
- **Lingue supportate iOS/macOS**: Aggiunto cinese (zh) a CFBundleLocalizations

#### Miglioramenti della selezione delle date
- **Intervallo di selezione esteso**: Selezione data UI ora disponibile dal 1900 (precedentemente 2000)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Scorrimento automatico durante il trascinamento
Lo schermo scorre automaticamente ai bordi quando trascini gli elementi.
- **Zona di scorrimento automatico**: Trascina il 10% superiore/inferiore dello schermo per attivare lo scorrimento automatico
- **Basato sull'accelerazione**: La velocità di scorrimento aumenta man mano che ti avvicini al bordo
- **Feedback aptico**: Vibrazione leggera quando entri nella zona di scorrimento
- **Navigazione tra partizioni**: Sfoglia rapidamente molti elementi o più partizioni

#### Navigazione a scorrimento
Vai rapidamente all'inizio o alla fine nella schermata di visualizzazione dei dettagli.
- **Pulsanti di navigazione**: I pulsanti di scorrimento appaiono accanto alla barra di ricerca quando ci sono molti commenti
- **Visualizzazione in base alla posizione**: Solo il pulsante inferiore appare in alto, solo il pulsante superiore appare in basso
- **Design neomorfico**: Lo stile del pulsante è coerente con il design dell'app

#### Animazione di transizione pagina ripristinata
L'animazione di capovolgimento per la barra di navigazione inferiore e la schermata di ricezione è stata ripristinata.
- **Effetto 3D Flip**: Le transizioni di pagina con rotazione a 180 gradi sull'asse Y
- **Pagine Log/Shop**: Applicata animazione di capovolgimento
- **Schermata di ricezione**: Applicata animazione di capovolgimento da pulsante casella postale e link di notifica approfonditi

#### Unificazione del design dell'interfaccia utente
Il design neomorfico è stato applicato alle schermate Invia, Ricevi e Negozio, unificando l'intera app.
- **Schermate Invia/Ricevi**: Ombre neomoriche applicate a schede e dialoghi
- **Schermata Negozio**: Effetti luminosi sui pulsanti delle schede, schede di prodotto in stile neomorfico
- **Design campo di input**: Lo stile di inserimento distingue chiaramente le aree di input

#### Animazione di riordino del log
Quando gli elementi si spostano in cima all'elenco dei log a causa di nuovi commenti, vengono applicate animazioni fluide.
- **Effetto scala**: Gli elementi si ingrandiscono brevemente, quindi tornano alle dimensioni normali dopo il riposizionamento
- **Elaborazione sequenziale**: Più elementi si animano in ordine quando spostati contemporaneamente
- **Enfasi visiva**: Indica chiaramente quali elementi sono i più recenti

#### Stabilizzazione del database
I problemi di compatibilità del database che potevano verificarsi durante gli aggiornamenti dell'app sono stati risolti.
- **Recupero automatico**: Ricrea automaticamente il database quando si verifica una mancata corrispondenza di versione
- **Preservazione dei dati**: Nessuna perdita di dati grazie alla sincronizzazione automatica del server
- **Tutte le piattaforme**: La stessa correzione applicata a iOS, Android, macOS e Windows

#### Miglioramento del blocco della password
La sicurezza e l'usabilità degli elementi protetti da password sono state significativamente migliorate.
- **Overlay sfocato**: Il contenuto è completamente nascosto quando accedi a elementi bloccati per una maggiore sicurezza
- **Design neomorfico**: I dialoghi di impostazione/sblocco della password utilizzano ora lo stile neomorfico
- **Visualizzazione a 16 cifre**: I cerchi piccoli (16 totali) mostrano lo stato di immissione della password
- **Input a due linee**: Imposta password e conferma sulla stessa schermata

#### Miglioramento delle impostazioni di notifica push
La schermata delle impostazioni di notifica push è stata riorganizzata per categoria per una gestione più comoda.
- **7 categorie**: Classificate in Transazione, Log, Scadenza, Reazione, Parola chiave, Condivisione e Sistema
- **Interruttore di gruppo**: Attiva o disattiva l'intera categoria contemporaneamente
- **Comprimi/Espandi**: L'interfaccia utente dell'accordion consente di visualizzare solo le categorie necessarie
- **Notifiche dettagliate**: Aggiunta accettazione/rifiuto transazione, reazione, parola chiave, scadenza condivisione/segnalazione e notifiche di sistema
- **Design neomorfico**: Lo stile neomorfico è stato applicato ai singoli elementi di notifica

#### Miglioramento delle impostazioni del suono
Il pulsante di disattivazione del suono presenta ora un design neomorfico per una rappresentazione intuitiva dello stato premuto.
- **Effetto pressione**: Il pulsante appare premuto verso l'interno quando disattivato
- **Ombra neomorfica**: Lo stato predefinito mostra ombra convessa, lo stato premuto mostra ombra concava

#### Miglioramento delle prestazioni di caricamento dei log
La velocità di caricamento dei log condivisi è stata migliorata.
- **Caricamento con priorità della cache**: I log visualizzati in precedenza vengono visualizzati istantaneamente dalla cache
- **Risparmio di dati**: Nessuna richiesta del server durante la revisione, utilizza dati locali
- **Nuovi commenti in tempo reale**: I nuovi commenti vengono ricevuti in tempo reale anche quando si utilizza la cache

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Log condivisi su carta
Crea documenti di log condivisi utilizzando solo carta, senza timbri.
- **Seleziona 2 o più carte** → Appare il menu "Crea nuovo elemento (log condiviso)"
- **Seleziona 1 carta** → Appare il menu "Crea nuovo elemento (log privato)"
- I documenti creati condividono la stessa chat room
- Invia documenti a persone diverse e chatta tra loro

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Funzione di modifica del badge
Modifica l'immagine e le parole chiave dei badge incisi.
- **Menu di modifica**: Appare il menu "Modifica badge" quando si seleziona un badge inciso
- **Cambio immagine**: Sostituisci l'immagine del badge con una nuova
- **Gestione parole chiave**: Aggiungi, elimina o modifica 5 tipi di parole chiave

#### Ottimizzazione delle prestazioni delle immagini
La velocità di caricamento delle immagini di rete è stata significativamente migliorata.
- **Cache locale**: Una volta caricate, le immagini vengono salvate localmente per una visualizzazione istantanea
- **Sincronizzazione immagine badge**: I cambiamenti dell'immagine del badge si riflettono immediatamente in tutti i log

#### Completamento automatico dei destinatari recenti
Seleziona rapidamente i destinatari recenti nella schermata di invio.
- **Elenco di completamento automatico**: Elenco a discesa che mostra fino a 30 destinatari recenti quando il campo di input è attivo
- **Selezione rapida**: Ricerca automatica quando si seleziona un destinatario dall'elenco
- **Ricerca di nuovo**: Deseleziona con il pulsante X per cercare un altro destinatario
- **Archiviazione locale**: Le informazioni del destinatario vengono salvate automaticamente al completamento dell'invio con successo

#### Miglioramento delle restrizioni di invio
I badge equipaggiati e i timbri condivisi sono ora limitati e non possono essere inviati.
- **Badge equipaggiati**: Scollega il badge per inviarlo
- **Timbri condivisi**: Revoca la condivisione per inviare il timbro
- **Guida dettagliata**: Visualizza messaggi specifici che spiegano il motivo della restrizione

#### Sistema di reazione
Reagisci agli elementi con espressioni emotive.
- **12 reazioni**: Varie espressioni emotive tra cui Mi piace, Amo, Migliore, Congratulazioni e altro
- **Commutazione reazione**: Cancella facendo clic di nuovo sulla reazione selezionata
- **Registrazione nei log**: I log di sistema registrano quando le reazioni vengono selezionate o annullate
- **Supporto multilingue**: I nomi delle reazioni vengono visualizzati nella lingua dell'utente

#### Miglioramento della funzionalità di ricerca
La ricerca in tempo reale è stata estesa per includere nomi di elementi e parole chiave.
- **Ricerca per nome elemento**: Ricerca per titolo documento, descrizione timbro o nome dominio badge
- **Ricerca per parola chiave**: Ricerca per parole chiave salvate in timbri e badge
- **Ricerca per tag**: Ricerca per tag modello timbro

#### Miglioramento della notifica in-app
Le notifiche di avviso in tempo reale sono state migliorate.
- **Visualizzazione badge del mittente**: L'immagine del badge del mittente viene visualizzata in linea nella notifica
- **Stile Dynamic Island**: Animazione di avviso elegante ispirata allo stile Dynamic Island di iOS
- **Rilevamento in tempo reale**: Rileva accuratamente notifiche nuove e aggiornate in base a ID + timestamp

#### Correzione di bug
- **Stabilizzazione dell'interfaccia utente dei dettagli del documento**: Risolto il problema per cui la barra di ricerca e i filtri tremavano quando i log condivisi/solo si trovavano al confine dello schermo
- **Scorrimento tremante fisso**: Risolto lo sfarfallio dello schermo quando si scorre verso l'alto in documenti/timbri con pochi log
- **Scorrimento superiore fisso**: Risolto il problema in cui le informazioni dell'autore non potevano essere raggiunte scorrendo in elementi con log
- **Formato log di reazione migliorato**: Le emoticon e i nomi vengono ora visualizzati insieme
- **Visualizzazione nome utente corretta**: Il nome dominio viene ora visualizzato correttamente quando si indossa un badge
- **Notifica log condiviso prima corretta**: Risolto il problema per cui la prima notifica di avviso per log condivisi non veniva visualizzata
- **Immagine notifica push corretta**: L'immagine del documento ha ora priorità sull'immagine del badge nelle notifiche push

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Traduzione multilingue automatica
I documenti, i timbri e il contenuto dei log vengono tradotti automaticamente nella tua lingua.
- **Traduzione automatica**: Traduzione automatica nella lingua dell'utente quando si visualizzano documenti, timbri e log
- **Lingue supportate**: Coreano, inglese, giapponese, spagnolo, francese, tedesco, portoghese
- **Commutazione originale**: Passa tra originale e traduzione con il pulsante [Mostra originale]
- **Memorizzazione nella cache della traduzione**: La memorizzazione nel server e locale impedisce le richieste di ritraduzione
- **Cache specifica della lingua**: Utilizza istantaneamente la traduzione in cache quando si cambiano lingue

#### Sistema di tutorial
I tutorial passo dopo passo sono stati aggiunti per guidarti nell'uso dell'app.
- **Schermata Inventory**: Selezione elemento, movimento partizione, utilizzo del menu inferiore (8 passaggi)
- **Schermata Invia/Ricevi**: Input destinatario, scansione QR, metodi di trasferimento/ricezione
- **Schermata Negozio**: Sfoglia categoria prodotto e metodi di acquisto
- **Schermata profilo**: Informazioni account e impostazioni
- **Schermata impostazioni**: Impostazioni app e cambio tema
- **Modello timbro**: Processo completo di creazione del modello (9 passaggi)
- **Funzione di ricerca**: Utilizzo filtro e salvataggio termine di ricerca
- Visualizzato solo al primo utilizzo; può essere visualizzato di nuovo in Impostazioni

#### Ottimizzazione delle prestazioni dei log
La velocità di caricamento e l'utilizzo dei dati per log condivisi/indipendenti sono stati significativamente migliorati.
- **Caricamento veloce**: Carica prima solo gli ultimi 100 commenti
- **Scorrimento infinito**: Scorri per caricare 50 commenti più vecchi alla volta
- **Memorizzazione nella cache locale**: Visualizzazione istantanea utilizzando la cache al revisione
- **Sincronizzazione in tempo reale**: Ricevi in modo efficiente solo nuovi commenti
- **Risparmio di dati**: Previene download non necessari

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Schede di collegamento multimediale
Gli URL immessi nei log vengono visualizzati automaticamente come **schede ricche**.
- **YouTube**: Miniatura + titolo + nome canale
- **Spotify**: Copertina album + titolo + artista
- **Google Drive**: Miniatura file + nome file (file pubblici)
- **Dropbox**: Icona + nome file
- **OneDrive**: Icona + nome servizio
- **Pagine web**: Immagine di anteprima + titolo pagina
- Tocca per aprire in app/browser esterno
- Premi a lungo per copiare l'URL negli appunti

#### Miglioramenti della ricerca del modello condiviso
- **Controllo carta**: Il pulsante clona mostra il numero di fogli rimasti (Carta:10)
- **Carta obbligatoria**: La clonazione è disabilitata quando non è disponibile carta
- **Design neomorfico**: La schermata di ricerca ora utilizza lo stile dell'interfaccia utente neomorfica

#### Miglioramenti del sistema di effetti dell'editor di immagini
L'interfaccia utente di selezione degli effetti speciali è stata semplificata.
- **Selezione singola**: Scegli uno dei 5 effetti alla volta
- **Elenco effetti**: Nessuno / Rimuovi sfondo / Bokeh / Bloom / Monocromatico
- **Transizioni fluide**: Viene visualizzato un indicatore di avanzamento durante l'elaborazione degli effetti
- **Aumento delle prestazioni**: I filtri Bloom/Monocromatico elaborati in background

#### Prestazioni e stabilità
La struttura interna dell'app è stata ottimizzata.
- **Ottimizzazione delle query**: Elaborazione parallela per caricamento clip/filtro più veloce
- **Pulizia del codice**: Rimossi 12 moduli di codice inutilizzati
- **Pulizia della dipendenza**: Rimosse 7 librerie inutilizzate
- **Pulizia delle risorse**: Rimosse font/immagini non utilizzati (riduzione di circa 16 MB)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Funzione di clip
Raggruppa più documenti insieme per una gestione più facile.
- **Crea clip**: Seleziona 2+ documenti e tocca "Clip insieme"
- **Icona clip**: I documenti ritagliati visualizzano un'icona clip nell'angolo in alto a destra
- **Dettagli clip**: Visualizza elementi interni tramite il pulsante "Informazioni clip" nella schermata dei dettagli dell'elemento
- **Riordino**: Trascina per riordinare gli elementi all'interno di un clip (tranne copertina)
- **Escludi elementi**: Rimuovi elementi specifici da un clip (tranne copertina)
- **Scollega**: Dissolvi completamente un clip in documenti individuali
- **Dissoluzione automatica**: Il clip si dissolve automaticamente quando ridotto a 1 elemento
- **Trasferimento**: I clip vengono inviati/ricevuti come pacchetto

#### Miglioramenti della ricerca del modello condiviso
Migliora l'usabilità per la schermata di ricerca del modello condiviso.
- **Schede in linea**: I risultati della ricerca visualizzati in un formato elenco compatto
- **Visualizzazione immagine completa**: Le miniature visualizzate nelle proporzioni originali senza ritaglio
- **Dettagli espansi**: Visualizza contenuto, parole chiave e data di scadenza nel foglio dei dettagli del modello
- **Anteprima parola chiave**: Vedi le parole chiave predefinite impostate per il modello
- **Data di scadenza**: Controlla quando scade il modello condiviso

#### Miglioramento dello sblocco della password
- Immettere la password corretta ora **sblocca permanentemente** il documento
- Prima: Solo visualizzazione, il blocco è rimasto → Ora: Completamente sbloccato

#### Correzione di bug
- Corretto il conteggio degli elementi della clip singolarmente nella schermata di ricezione
- Corretto il badge ricevuto della barra di navigazione che include elementi interni della clip
- Corretto il badge (Nametag) non non equipaggiato quando rimborsato/eliminato
- Dominio rimanente occupato corretto dopo l'eliminazione del badge

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Indicatore di non letto del log condiviso
Quando vengono aggiunti nuovi commenti ai log condivisi, il bordo dell'elemento **pulsa**.
- Individua facilmente i log condivisi non letti nel tuo inventario
- L'impulso si ferma quando apri il documento
- Lo stato di lettura si sincronizza su tutti i dispositivi

#### Guida all'utilizzo del timbro
Quando selezioni un timbro inciso, le carte disponibili **pulsano** per guidarti.
- Migliora l'esperienza utente per la duplicazione del modello
- Guida intuitiva al passo successivo

#### Miglioramenti della partizione
- **Comprimi/Espandi**: Attiva/disattiva le partizioni con i pulsanti freccia (▼/▲)
- **Seleziona tutto**: Tocca l'intestazione della partizione per selezionare/deselezionare tutti gli elementi
- Indicatori dello stato di selezione (○/◐/●)
- Trascina e rilascia sulle partizioni compresse

#### Convenienza del negozio
Processo di pagamento semplificato per acquisti consecutivi dello stesso elemento.
- Salta i dialoghi di conferma entro 10 minuti dall'ultimo acquisto
- Acquisti in blocco più veloci

#### Miglioramenti dell'interfaccia utente
- Migliorata la leggibilità con il nuovo carattere per il titolo
- Le schede dei timbri mostrano l'anteprima del modello in background (33% di opacità)
- Le schede di badge mostrano l'anteprima dell'immagine incisa
- Il menu inferiore visualizza il badge del numero di azioni disponibili
- Regolazione del colore del tema dell'inchiostro nero (miglioramento della leggibilità del testo)
- Immagini di prodotto ottimizzate (dimensioni ridotte, caricamento più veloce)

#### Correzione di bug
- Corretto l'effetto di impulso sui propri commenti
- Corretto il ritaglio del campo di input con la navigazione di gesto
- Schermata grigia corretta quando si comprimono le partizioni
- Gestione migliorata del permesso di notifica push

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Funzione di blocco del documento
- Imposta password numerica sui documenti (fino a 16 cifre)
- I documenti bloccati visualizzano scala di grigi + icona di blocco
- Sblocca con la password corretta (una volta)
- Lo stato di blocco persiste dopo il trasferimento dell'elemento
- I documenti bloccati esclusi dai risultati di ricerca

#### Sistema di input rapido
Inserisci facilmente informazioni speciali tramite il pulsante `+` quando scrivi log:
- **Parola chiave:valore** - Scheda parola chiave generale
- **Allarme data** - Scheda data (calcolo automatico D-Day, impostazioni allarme)
- **Numero di telefono** - Formattazione automatica specifica del paese
- **Posizione/Indirizzo** - Integrazione app mappe
- **Importo** - Visualizzazione automatica simbolo valuta

#### Azioni della scheda speciale
**Premi a lungo** informazioni speciali nei log per attivare funzioni aggiuntive:
- **Scheda data**: Imposta/annulla allarme
- **Scheda telefono**: Chiama direttamente / Copia negli appunti
- **Scheda posizione**: Apri in app mappe / Copia negli appunti
- **Scheda importo**: Copia negli appunti

#### Miglioramenti dell'interfaccia utente
- Design neomorfico chip filtro
- Miglioramento dello scorrimento della barra di ricerca
- La barra delle app della schermata dei dettagli dell'elemento mostra il nome dell'elemento

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Copia">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**Primo rilascio ufficiale**

#### Sistema carta
- Introdotto il sistema di valuta necessario per la creazione di documenti
- 10 fogli di carta dati su nuova iscrizione
- 10 fogli aggiuntivi per ogni collegamento account Google/Apple
- Carta disponibile per l'acquisto nel negozio

#### Creazione di documenti
- Crea documenti utilizzando Carta
- Aggiungi titolo, contenuto e immagini
- Imposta opzioni data di inizio/data di scadenza

#### Sistema badge
- Funzione di incisione del nome dominio unico
- Nome dominio inciso utilizzato come identità dell'utente
- Gestione dell'attivazione tramite equipaggiamento/scollega
- Opzione di allegato immagine 128x128

#### Sistema timbro
- Funzione di creazione del modello
- Selezione modalità log solo/log condiviso
- Funzione di duplicazione del modello
- Impostazioni data di inizio/data di scadenza

#### Funzione di log
- Registra log su documenti/timbri
- Log solo: Record solo personali
- Log condiviso: Condividi con proprietari duplicati
- Supporto scheda info in formato Key:value

#### Sistema di inchiostro
- Funzione di cambio colore tema app
- Inchiostro nero, inchiostro d'oro

#### Trasferimento di elementi
- Invia elementi tramite indirizzo email
- Auto-compilazione email tramite scansione codice QR
- Accetta o rifiuta elementi ricevuti
- Invia più elementi contemporaneamente

#### Partizione
- Funzione di raggruppamento elemento
- Archiviazione locale specifica del dispositivo

#### Funzione di ricerca
- Filtro ricerca in tempo reale
- Salva termini di ricerca come filtri
- Ricerche recenti salvate automaticamente (fino a 5)

#### Negozio
- Acquista Carta, Timbri, Badge, Inchiostro
- Disponibile su tutte le piattaforme

#### Conto
- Accesso Google, Apple, Email
- Guadagna carta aggiuntiva collegando account social

#### Supporto multilingue
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>Suggerisci nuove funzioni!</strong> Condividi le tue idee con <a href="/inventory/suggest/it/">Suggerimenti</a> e le esamineremo attivamente.
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
