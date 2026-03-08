---
layout: inventory
title: Kullanım Kılavuzu
permalink: /inventory/manual/tr/
lang: tr
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

## 📖 Kullanım Kılavuzu

Inventory uygulamasının tüm özelliklerini ayrıntılı olarak keşfedin.

---

<details open>
<summary><h3 id="paper">📦 Kağıt Sistemi</h3></summary>
<div class="manual-content" markdown="1">

Inventory'de **Kağıt** öğe oluşturmak için kullanılan temel para birimdir.

#### Kağıt Nedir?
- **1 Kağıt** bir öğe oluştururken tüketilir
- Kağıt olmadan yeni öğe oluşturamazsınız

#### Kağıt Nasıl Alınır

| Yöntem | Miktar | Not |
|--------|--------|------|
| Yeni Kaydolma | 10 Kağıt + 3 Damga | Sadece ilk kez |
| Google Bağlantısı | +10 Kağıt | Mevcut kullanıcılar için |
| Apple Bağlantısı | +10 Kağıt | Mevcut kullanıcılar için |
| Mağaza Satın Alımı | 10 Kağıt | Uygulama içi satın alma |

> 💡 **İpucu**: Mevcut kullanıcılar yeni sosyal hesapları bağlayarak ekstra Kağıt alabilirler!

</div>
</details>

---

<details>
<summary><h3 id="create-item">📄 Öğe Oluşturma</h3></summary>
<div class="manual-content" markdown="1">

Günlük belgesi oluşturmak için kağıt seçin. Seçilen kağıt sayısına bağlı olarak, özel günlükler veya paylaşılan günlükler oluşturabilirsiniz.

| Günlük Türü | Kağıtlar | Amaç |
|----------|--------|---------|
| **Özel Günlük** | 1 | Kişisel notlar, günlük, tek yönlü mesajlar |
| **Paylaşılan Günlük** | 2 veya daha fazla | İki yönlü sohbet, iletişim |

<h4 id="private-log">Özel Günlük Öğeleri Oluşturma</h4>

1. Ana ekranda **1 Kağıt** seçin
2. Alt menüden **"Yeni Öğe Oluştur (Özel Günlük)"** seçin
3. Öğe bilgilerini girin:
   - Başlık (gerekli)
   - İçerik
   - Görüntü (isteğe bağlı)
   - Başlama Tarihi (isteğe bağlı)
   - Bitiş Tarihi (isteğe bağlı)
4. **Kaydet** düğmesine basın ve belgeyi oluşturmak için 1 Kağıt tüketilecek

> 💡 **Özel Günlük**: Yalnızca yazdığınız günlükleri görebilirsiniz. Başka birine gönderdikten sonra, sadece alıcı günlük ekleyebilir.

<h4 id="shared-log">Paylaşılan Günlük Öğeleri Oluşturma</h4>

1. Ana ekranda **2 veya daha fazla Kağıt** seçin
2. Alt menüden **"Yeni Öğe Oluştur (Paylaşılan Günlük)"** seçin
3. Öğe bilgilerini girin:
   - Başlık (gerekli)
   - İçerik
   - Görüntü (isteğe bağlı)
   - Başlama Tarihi (isteğe bağlı)
   - Bitiş Tarihi (isteğe bağlı)
4. **Kaydet** düğmesine basın ve seçilen kağıt sayısına eşit belgeler oluşturulacak

> 💡 **Paylaşılan Günlük**: Oluşturulan belgeler aynı yorum odasını paylaşır. Belgeleri farklı kişilere göndererek birbirlerinizin günlüklerini sohbet gibi gerçek zamanlı olarak görebilirsiniz.

<h4 id="dates">Başlama Tarihi ve Bitiş Tarihi</h4>

| Ayar | Açıklama |
|---------|-------------|
| **Başlama Tarihi** | İçerik bu tarihe kadar bulanık olacak |
| **Bitiş Tarihi** | İçerik bu tarihten sonra bulanık olacak ve günlük eklemesi devre dışı bırakılacak |

Ayarlanmadığında, hemen görülebilir ve kalıcı olacaktır.

</div>
</details>

---

<details>
<summary><h3 id="lock">🔒 Belge Kilidi</h3></summary>
<div class="manual-content" markdown="1">

Parola ayarlayarak belge öğelerini koruyabilirsiniz.

#### Belge Kilidi Nedir?

Kilitli belgeler yalnızca doğru parolanın girişinden sonra görüntülenebilir.

| Durum | Açıklama |
|--------|-------------|
| **Kilitlenmemiş** | Herkes içeriği görebilir |
| **Kilitli** | İçerik yalnızca parolayla görüntülenebilir |

#### Nasıl Kilitlenir

1. Ana ekranda kilitlemek istediğiniz **belgeleri** seçin (çoklu seçim mümkün)
2. Alt menüden **"Öğeleri Kilitle"** seçin
3. Sayısal parola girin (16 basamağa kadar)
4. Aynı parolayı onay için tekrar girin
5. Kilitlendiğinde, öğeler **kilit simgesi** ve **gri tonlama** efekti gösterir

#### Nasıl Kilit Açılır

1. Kilitli bir belgeye dokunarak ayrıntı ekranına girin
2. Parola giriş diyaloğu görünecek
3. Kilit açmak için doğru parolayı girin
4. Kilit açıldıktan sonra, kilit kalıcı olarak kaldırılır (yeni parola ayarlayarak tekrar kilitleyebilirsiniz)

> ⚠️ **Uyarı**: Parolanızı unutursanız, kurtarılamaz. Kilitli belgeler yalnızca **silinebilir**.

#### Kilit Özellikleri

- Kilit parolaları **bulutta depolanır**
- Kilit durumu öğeleri başkasına aktarırken korunur
- Kilitli belgeler arama sonuçlarında görünmez
- Kilitli öğeler yine de silinebilir

</div>
</details>

---

<details>
<summary><h3 id="clip">📎 Klip Sistemi</h3></summary>
<div class="manual-content" markdown="1">

**Klip** birden fazla belgeyi daha kolay yönetim için bir paket halinde birleştiren bir özelliktir.

#### Klip Nedir?

Kliplar ilişkili belgeleri tek bir paket olarak yönetmenizi sağlar.

| Durum | Açıklama |
|-------|-------------|
| **Bağımsız Belgeler** | Belgeler ayrı ayrı yönetilir |
| **Kliplenen Belgeler** | Bir paket olarak yönetilir, birlikte taşınır/aktarılır |

#### Klip Oluşturma

1. Ana ekranda **2 veya daha fazla belge** seçin
2. Alt menüde **"Birlikte Kliple"** düğmesine dokunun
3. Seçilen belgeler tek bir klip halinde birleştirilir
4. Kliplenen belgeler sağ üst köşede **klip simgesi (📎)** gösterir

> 💡 **İpucu**: İlk seçilen belge klipnin **kapağı** olur!

#### Klip Bilgisini Görüntüleme

1. Kliplenen belgenin **ayrıntı ekranına** girin
2. **"Klip Bilgisi"** düğmesine dokunun
3. Klipteki tüm öğelerin listesini görüntüleyin

#### Klipteki Öğeleri Yeniden Sıralama

Klip bilgisi ekranında öğelerin sırasını değiştirebilirsiniz:

1. Taşımak istediğiniz öğenin **sürükleme kolunu (⋮⋮)** uzun basın
2. İstediğiniz konuma sürükleyin
3. Sırayı kaydetmek için bırakın

> ⚠️ **Not**: Kapak (ilk öğe) yeniden sıralanmaz.

#### Öğeleri Klipten Hariç Tutma

Klip bilgisi ekranında klipten belirli öğeleri kaldırabilirsiniz:

1. Öğenin yanındaki **"Hariç Tut"** düğmesine dokunun
2. Öğeyi klipten kaldırmak için onaylayın
3. Kaldırılan öğe yeniden bağımsız belge haline gelir

> ⚠️ **Not**: Kapak hariç tutulamaz. Yalnızca 2 öğe kalırsa ve 1'i hariç tutarsanız, klip otomatik olarak ayrılır.

#### Klip Açma

1. Kliplenen belgeyi seçin
2. Alt menüde **"Klip Aç"** düğmesine dokunun
3. Tüm belgeler bağımsız belgelere ayrılır

#### Klipleri Aktarma

- Kliplenen belgeyi gönderdiğinizde, **tüm paket** birlikte aktarılır
- Alıcılar klipleri **paket olarak** kabul eder/geri döndürür
- Klip içindeki bireysel öğeler ayrı ayrı gönderilemez

#### Klip Özellikleri

- Kliplenen belgeler **birlikte taşınır/aktarılır**
- Kapta bir kilit ayarlamak tüm klipi korur
- Klip simgesi (📎) klip durumunu kolayca tanımlamayı sağlar
- Klibi korumak için en az 2 belge gerekir

</div>
</details>

---

<details>
<summary><h3 id="badge">🏷️ Rozet Sistemi</h3></summary>
<div class="manual-content" markdown="1">

**Rozet** uygulama içinde kullanabileceğiniz benzersiz bir kimlik numarasıdır.

#### Rozet Nedir?

Bir rozete alan adı oyduğunuzda, uygulamadaki tüm aktiviteleriniz **oyulmuş alan adınız** yerine e-postanız yerine görüntülenir.

Örnekler: `MyBrand`, `JohnDoe`, `Company2025`

#### Rozeti Oyma

1. Mağazadan bir rozet satın alın (kullanılmamış durum)
2. Ana Sayfa → rozete dokunun ve **"Oyma"** menüsünü seçin
3. İstediğiniz alan adını girin (en çok 32 karakter)
   - Tüm dillerden karakterler ve sayılar izin verilir
   - Özel karakterler ve emojiler izin verilmez
4. Alan adı kullanılabilirliğini kontrol etmek için **"Alan Adı Uygunluğunu Kontrol Et"** düğmesine tıklayın
5. İsteğe bağlı olarak 128x128 görüntü ekleyin
6. Oyma işlemini tamamlamak için **"Oyma"** düğmesine tıklayın

> ⚠️ **Uyarı**: Oyunduktan sonra, alan adı ve görüntü **kalıcı olarak değiştirilemez**. Dikkatli seçin!

#### Rozeti Donanma/Çıkarma

- **Donanmış**: Oyulmuş alan adınız uygulamadaki tüm aktiviteler için görüntülenir
- **Çıkarılmış**: Varsayılan e-postanız yeniden görüntülenir
- Birden fazla rozetiniz olsa da, bir seferde yalnızca bir tane donanabilir

#### Envanter Kartı Görüntüsü

Oyulmuş rozetler (etkin durum) envanter kartının sağ üst köşesinde oyulmuş görüntüyü gösterir.
Bu, rozerin hangi alan adına ait olduğunu hızlı bir şekilde belirlemenize olanak tanır.

</div>
</details>

---

<details>
<summary><h3 id="stamp">🔖 Damga Sistemi</h3></summary>
<div class="manual-content" markdown="1">

**Damga** şablonlar oluşturmanızı ve başkalarıyla paylaşmanızı sağlayan bir öğedir.

#### Envanter Kartı Görüntüsü

Şablon içeren damgalar (etkin durum) envanterinde özel olarak görüntülenir:
- **Arka Plan**: Şablon görüntüsü %33 opaklıkta gösterilir
- **Ön Plan**: Oyulmuş damga görüntüsü

Bu, çabucak hangi şablona ait olduğunu belirlemenize olanak tanır.

#### Damga Şablonu Oluşturma

1. Mağazadan bir damga satın alın (kullanılmamış durum)
2. Ana Sayfa → damgaya dokunun ve **"Yeni Şablon Oluştur"** menüsünü seçin
3. Şablon bilgisini girin:
   - **Görüntü** (gerekli)
   - **Başlık** (en çok 32 karakter)
   - **İçerik** (en çok 1024 karakter)
   - **Başlama Tarihi** (isteğe bağlı) - İçerik bu tarihe kadar gizli
   - **Bitiş Tarihi** (isteğe bağlı) - Günlük eklemesi bu tarihten sonra devre dışı
   - **Günlük Modu** - Solo günlük veya Paylaşılan günlük
4. Şablon oluşturmayı tamamlamak için **"Şablon Oluştur"** düğmesine tıklayın

#### Damgayı Çoğaltma

Etkinleştirilmiş (şablonlu) damgayı kağıtla seçtiğinizde, **"Şablon Çoğalt"** menüsü görünür.

- 1 Kağıt tüketilir
- Aynı şablona sahip yeni bir öğe oluşturulur
- Paylaşılan günlük modundaysa, orijinal ile aynı paylaşılan alanı kullanır

#### Şablonunuzu Paylaşma

Damga şablonunuzu diğer kullanıcıların arayabilmesi ve kopyalayabilmesi için paylaşabilirsiniz.

1. Etkinleştirilmiş damgaya (şablon) → **"Paylaşım Ayarları"** menüsünü seçin
2. Paylaşım bilgisini girin:
   - **Açıklama** - Şablonu açıklayan kısa bir ifade
   - **Etiketler** - Arama için anahtar kelimeler (virgülle ayrılmış)
   - **Paylaşım Süresi** - Paylaşımın ne kadar süre etkin kalacağı
3. Paylaşımı tamamlamak için **"Paylaşımı Başlat"** düğmesine tıklayın

Paylaşılan şablonlar etiket araması aracılığıyla diğer kullanıcılar tarafından bulunabilir ve kopyalanabilir.

> 💡 **İpucu**: Paylaşımı durdurmak için aynı menüden **"Paylaşımı Durdur"** seçeneğini seçin.

#### Paylaşılan Şablonları Arama

Diğer kullanıcılar tarafından paylaşılan şablonları arayabilir ve kopyalayabilirsiniz.

1. Profil ekranına gidin ve **"Paylaşılan Şablonları Ara"**
2. Aramak için etiketleri girin veya popüler/son etiketlere dokunun
3. Arama sonuçlarından şablona dokunarak ayrıntıları görüntüleyin
4. Şablonu kopyalamak için **"Kopyala"** düğmesine tıklayın

- Kopyalama 1 Kağıt tüketir
- Kağıt yoksa kopyala düğmesi devre dışı bırakılır
- Kopyalanan öğeler orijinal ile aynı şablon bilgisine sahiptir

</div>
</details>

---

<details>
<summary><h3 id="quick-input">⚡ Hızlı Giriş</h3></summary>
<div class="manual-content" markdown="1">

Günlük eklerken, **Hızlı Giriş** menüsünü açmak için `+` düğmesine dokunun ve özel bilgileri kolayca girin.

#### Hızlı Giriş Türleri

| Tür | Açıklama | Örnek |
|------|-------------|---------|
| **Anahtar Kelime** | Anahtar:Değer biçimi | `Status:Good` |
| **Tarih** | Gün-Sayısı hesplamasıyla tarihler | D-5, D-Günü, D+3 |
| **Telefon** | Telefon numarası | Doğrudan arayabilir |
| **Konum** | Adres/koordinatlar | Harita uygulamasında açılır |
| **Tutar** | Para birimi biçimi | Otomatik biçimlendirilir |

#### Uzun Basma İşlemleri

| Kart Türü | Uzun Basma İşlemi |
|-----------|------------------|
| **📅 Tarih** | Alarm ayarla/Kaldır |
| **📞 Telefon** | Mobil: Doğrudan ara, Masaüstü: Kopyala |
| **📍 Konum** | Mobil: Harita'da aç, Masaüstü: Kopyala |
| **💰 Tutar** | Panoya kopyala |

<h4 id="alarm">Tarih Alarmı Ayarlama</h4>

Alarm ayarlamak için tarih kartına uzun basın:

1. **Uzun basın** tarih kartına
2. Onay diyalogunda **Ayarla** seçeneğini seçin
3. Ayarlandığında, kart rengi değişir ve 🔔 simgesi görünür
4. Alarmı kaldırmak için tekrar uzun basın

> 💡 **İpucu**: Tarih kartları otomatik olarak Gün-Sayısı hesaplamalarını gösterir (ör. D-5, D-Günü, D+3)

</div>
</details>

---

<details>
<summary><h3 id="log">📝 Günlük Sistemi</h3></summary>
<div class="manual-content" markdown="1">

**Günlükler** öğelere veya damga şablonlarına ekleyebileceğiniz kayıtlardır.

#### Günlük Modları

| Modu | Solo Günlük | Paylaşılan Günlük |
|------|----------|------------|
| **Depolama Konumu** | Her kişinin özel alanı | Orijinal damgaya dayalı paylaşılan alan |
| **Görünen Günlükler** | Yalnızca kendi günlükleriniz | Tüm sahiplerin günlükleri |
| **Kullanım Alanları** | Kişisel günlük, notlar | İşbirliği, topluluk |
| **Orijinal Silinirse** | Etkilenmez | Günlük eklenemez (salt okunur) |

#### Günlük Biçimleri

Günlük yazarken çeşitli biçimleri kullanabilirsiniz.

**Temel Biçimler:**

| Biçim | Açıklama | Örnek |
|--------|-------------|---------|
| Düz metin | Sohbet balonu olarak görüntülenir | `Bugün denetim tamamlandı!` |
| `anahtar:değer` | Bilgi kartı olarak görüntülenir (anahtar 1-8 karakter) | `durum:iyi` |
Aynı anahtarı birden fazla kez kullanmak `önceki değer → yeni değer` karşılaştırması olarak görüntülenir.

**Metin Stillendirmesi:**

| Biçim | Efekt | Örnek |
|--------|--------|---------|
| `{[metin]}` | Ana renk kartı (arka plan + metin) | `{[Önemli]}` |
| `[{metin}]` | Gri kart + ana renk metni | `[{Dikkat}]` |
| `[metin]` | Gri kart | `[Not]` |
| `{metin}` | Ana renk metni | `{Vurgu}` |
| `(metin)` | Alt renk metni | `(Ek bilgi)` |
| `"metin"` | **Kalın** | `"Önemli içerik"` |
| `'metin'` | <u>Altını çiz</u> | `'Vurgulanan kısım'` |
| `<metin>` | ~~Üzeri çizili~~ | `<Silinen içerik>` |

> 💡 Stiller 3 seviyeye kadar iç içe olabilir. Örnek: `{["Kalın ana renk"]}`

**Medya Bağlantıları (URL Kartları):**

Günlüğe bir URL girdiğinizde, otomatik olarak **zengin kart** olarak görüntülenir.

| Platform | Görüntü İçeriği | Örnek |
|----------|----------------|---------|
| **YouTube** | Küçük resim + Başlık + Kanal | `https://youtube.com/watch?v=...` |
| **Spotify** | Albüm Sanatı + Başlık + Sanatçı | `https://open.spotify.com/track/...` |
| **Google Drive** | Dosya Küçük Resmi + Dosya Adı | `https://drive.google.com/file/d/...` |
| **Dropbox** | Simge + Dosya Adı | `https://dropbox.com/s/...` |
| **OneDrive** | Simge + Hizmet Adı | `https://1drv.ms/...` |
| **Web Sayfaları** | Küçük Resim + Sayfa Başlığı | `https://example.com` |

- Anahtar kelimeyle görüntülemek için `anahtar:URL` biçimini kullanın (ör. `belgeler:https://youtube.com/...`)
- Harici uygulamada/tarayıcıda açmak için **dokunun**
- URL'yi panoya kopyalamak için **uzun basın**

> 💡 **İpucu**: Google Drive dosyaları küçük resimlerin görüntülenmesi için **herkese açık** olarak paylaşılmalıdır.

**Otomatik Günlükler:**

Bir öğe aktarıldığında, bir aktarım günlüğü otomatik olarak kaydedilir:
- `Gönderici → Alıcı` biçiminde görüntülenir
- Rozet donanmışsa, alan adı görüntülenir

#### Paylaşılan Günlük Sonlandırma Koşulları

- **Orijinal damga silindi**: Paylaşılan günlük eklenemez (salt okunur)
- **Bitiş tarihi geçti**: Paylaşılan günlük eklenemez (salt okunur)

#### 🔔 Okunmamış Göstergesi

Paylaşılan günlüğe yeni açıklamalar eklendiğinde, öğe kenarlığı envanter görünümünde **titrer**.

- Titreşme başka bir kullanıcı açıklama eklediğinde hemen başlar
- Belgeyi açıp görüntülediğinizde titreşme durur
- Okuma durumu buluttan kaydedilir ve tüm cihazlar arasında eşitlenir

> 💡 **İpucu**: Yeni açıklamaları asla kaçırmamak için titreyen öğeleri kontrol edin!

</div>
</details>

---

<details>
<summary><h3 id="ink">🎨 Mürekkep Sistemi</h3></summary>
<div class="manual-content" markdown="1">

**Mürekkep** uygulamanın tema rengini değiştiren bir öğedir.

#### Nasıl Kullanılır

1. Ayrıntı ekranına girmek için bir mürekkepe dokunun
2. **"Temayı Değiştir"** düğmesine tıklayın
3. Tüm uygulama rengi hemen değişir

#### Mürekkep Türleri

| Mürekkep | Renk |
|-----|-------|
| **Siyah Mürekkep** | Varsayılan siyah tema |
| **Altın Mürekkep** | Lüks altın tema |

</div>
</details>

---

<details>
<summary><h3 id="search">🔍 Arama İşlevi</h3></summary>
<div class="manual-content" markdown="1">

#### Temel Arama

Arama modunu etkinleştirmek için üstteki arama çubuğuna dokunun.

- Sonuçlar yazarken **gerçek zamanlı** olarak filtrelenir
- Arama modundan çıkmak için X düğmesine dokunun

#### Son Aramalar

- En son 5 arama kaydedilir
- Son aramaya dokunarak arama çubuğunu otomatik doldur
- X düğmesiyle ayrı ayrı silin

#### Filtre Olarak Kaydet

**"Filtre Olarak Ayarla"** düğmesiyle bir arama terimini kaydettiğinizde:

- Arama çubuğunun altında filtre etiketi olarak görünür
- O arama terimine göre anında filtrelemek için etikete dokunun
- X düğmesiyle filtreyi silin

<h4 id="keyword">Anahtar Kelime Toplama</h4>

Filtre ayarlanmış ve öğe seçtiğinizde, **seçili öğelerin anahtar kelime değerleri otomatik olarak toplanır**.

**Sayısal Değer Toplama:**
- **Toplam** ve **ortalama** aynı anahtar kelimenin sayısal değerleri için hesaplanır
- Örnek: `fiyat:1000`, `fiyat:2000`, `fiyat:3000` seçme
- Sonuç: `Toplam: 6000  Ortalama: 2000`

**Metin Değeri Toplama:**
- Aynı anahtar kelimenin metin değerleri **boşlukla birleştirilir**
- Örnek: `etiket:A`, `etiket:B`, `etiket:C` seçme
- Sonuç: `A B C`

**Değerleri Kopyalama:**
- Değeri panoya kopyalamak için toplama sonucu kartına **uzun basın**
- Kopyalama tamamlandığında bir bildirim görünür

> 💡 **Örnek Kullanım**: Birden fazla öğenin toplam fiyatını hızlı hesapla veya ilgili etiketleri bir kerede kopyala.

</div>
</details>

---

<details>
<summary><h3 id="bottom-menu">📱 Alt Menü Rozeti</h3></summary>
<div class="manual-content" markdown="1">

Alt menü simgeleri üzerindeki kırmızı rozetler mevcut durumu gösterir.

| Menü | Rozet Anlamı |
|------|---------------|
| **Gönder** | Gönderilebilecek öğe sayısı (seçilmiş arasında aktarılabilir öğeler) |
| **Al** | Beklemede olan işlemler sayısı (kabul/döndürme gerektiren) |
| **İşlem** | Seçili öğelerle kullanılabilir eylemler sayısı |

> 💡 Rozet numaraları değiştiğinde kabarcık efektiyle canlandırılır.

</div>
</details>

---

<details>
<summary><h3 id="transfer">📤 Öğeleri Gönderme</h3></summary>
<div class="manual-content" markdown="1">

İkinci el satışında veya hediye verirken öğeleri aktarabilirsiniz.

#### Nasıl Gönderilir

1. Alt sekmeleri **Gönder** seçeneğini seçin
2. Aktarılacak öğeleri **kontrol edin** (çoklu seçim mümkün)
3. Alıcının e-postasını girin
4. **Gönder** düğmesine tıklayın

#### QR Kodu Aracılığıyla E-posta Girme

Alıcının e-postasını yazmak yerine, QR kodu kullanabilirsiniz:

1. Alıcı **Profil** ekranından QR kodunu görüntüler
2. Gönderici **QR Taraması** düğmesine basar
3. Kameraya QR kodunu tarayın
4. E-posta otomatik olarak girilir

> ⚠️ **Önemli**: Aktarılan öğeler **hemen envanterinizden kaybolur**. Aktarımlar geri alınamaz.

</div>
</details>

---

<details>
<summary><h3 id="receive">📥 Öğeleri Alma</h3></summary>
<div class="manual-content" markdown="1">

Başkaları tarafından gönderilen öğeleri alabilirsiniz.

#### Nasıl Alınır

1. Alt sekmeleri **Al** seçeneğini seçin
2. Alınan öğelerin listesi görüntülenir
3. Her öğe için:
   - **Kabul Et**: Envanterinize eklenir
   - **Döndür**: Göndericiye geri gönderilir

#### Bildirimler

- Yeni öğeler geldiğinde anında bildirim alırsınız (bildirimler etkinleştirilmişse)
- Al sekmesi kabul edilmeyen öğelerin sayısını gösterir

</div>
</details>

---

<details>
<summary><h3 id="shop">🛒 Mağazayı Kullanma</h3></summary>
<div class="manual-content" markdown="1">

Mağazadan çeşitli öğeler satın alabilirsiniz.

#### Mevcut Ürünler

| Ürün | Kullanım |
|---------|-----|
| **Kağıt** | Öğe oluşturmak için (tüketilebilir) |
| **Damga** | Şablonlar oluşturmak için |
| **Rozet** | Benzersiz alan adı oyması için |
| **Mürekkep** | Tema rengi değiştirmek için |

#### Nasıl Satın Alınır

1. Alt sekmeleri **Mağaza** seçeneğini seçin
2. İstediğiniz ürüne dokunun
3. Ödemeyi gerçekleştirin (App Store / Google Play)
4. Ödeme tamamlandıktan sonra otomatik olarak teslim edilir

> 💡 Mağaza tüm platformlarda kullanılabilir (iOS, Android, Windows, macOS).

</div>
</details>

---

<details>
<summary><h3 id="pocket">📂 Bölüm Özelliği</h3></summary>
<div class="manual-content" markdown="1">

Birden fazla öğeleriniz olduğunda, öğeleri bölümlerle gruplandırabilirsiniz.

#### Bölüm Oluşturma

1. Öğeleri seçin
2. Alt menüden **"Bölüm Oluştur"** seçeneğini seçin
3. Bölüm adını girin (en çok 16 karakter)

#### Bölüm Özellikleri

- Bölümler **yalnızca cihazda kaydedilir**
- Bölüm yapısı diğer cihazlarda görünmez
- Öğelerin kendileri bulutta depolanır ve tüm cihazlarda görünür

#### Bölümleri Daralt/Genişlet

Bölüm başlığının sağ tarafındaki ok düğmesini (▼/▲) kullanarak bölümleri daraltın veya genişletin.

- Daraltılmış durum uygulama yeniden başladıktan sonra korunur
- Arama sırasında tüm bölümler otomatik olarak genişlenir
- Daraltılmış bölümlere sürükle ve bırak yapabilirsiniz

#### Bölümde Tümünü Seçme

Bölümdeki tüm öğeleri seçmek/seçimi kaldırmak için bölüm başlığına dokunun.

| Gösterge | Anlamı |
|-----------|---------|
| ○ (Boş daire) | Hiçbiri seçilmedi |
| ◐ (Yarım daire) | Bazıları seçildi |
| ● (Dolu daire) | Tümü seçildi |

</div>
</details>

---

<details>
<summary><h3 id="language">🌍 Dil Değiştirme</h3></summary>
<div class="manual-content" markdown="1">

7 dil desteklenir:
- 🇰🇷 한국어
- 🇺🇸 English
- 🇯🇵 日本語
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español
- 🇧🇷 Português

**Nasıl Değiştirilir:**
Ayarlar → Dil → İstediğiniz dili seçin

</div>
</details>

---

> 📚 **Daha fazla sorunuz var mı?** [SSS](/inventory/faq/tr/) bölümünü kontrol edin veya [Öneriler](/inventory/suggest/tr/) aracılığıyla bize ulaşın.

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
