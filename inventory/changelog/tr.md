---
layout: inventory
title: Değişiklik Günlüğü
permalink: /inventory/changelog/tr/
lang: tr
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

## Değişiklik Günlüğü

Inventory uygulamasının güncelleme geçmişini kontrol edin.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Tepki Paneli Duyarlı Düzen
Öğe ayrıntı görünümünde görüntü tepki paneli tüm ekran boyutlarında doğru şekilde görüntülenir.
- **Duyarlı Düzen**: Dar ekranlarda bile tepki düğmeleri eşit şekilde dağılır
- **Tam Genişlik Kullanımı**: Görüntü boyutu ne olursa olsun panel ekranın tam genişliğini kullanır
- **Kompakt Tasarım**: Dolgu optimizasyonu fotoğrafı daha az gizlerken dokunma alanını korur

#### Paylaşılan Şablon Arama Sonsuz Kaydırma
Paylaşılan şablon arama sonucu 20'den fazla olduğunda, daha fazla sonucu yüklemek için kaydırabilirsiniz.
- **Sonsuz Kaydırma**: Arama sonuçları alt kısmına ulaştığında otomatik olarak sonraki 20 sonucu yükler
- **Yükleme Göstergesi**: Ek yükleme sırasında alt kısımda ilerleme göstergesi gösterilir
- **Geriye Doğru Uyumluluk**: Önceki sürüm uygulamada daha önce olduğu gibi 20 sonuç gösterilir

#### Ana Sayfa Güncellemeleri
- **Çince (Basitleştirilmiş) Desteği**: Ana sayfaya 中文(简体) yerelleştirmesi eklendi (8. dil)
- **Desteklenen Diller Görüntüsü**: Platform indirme simgeleri altında 8 dil bayrağı simgesi gösterilir

#### App Store Dil Ayarları
- **iOS/macOS Desteklenen Diller Eklendi**: CFBundleLocalizations'a Çince (zh) eklendi

#### Tarih Seçimi İyileştirmesi
- **Seçim Aralığı Genişletildi**: Tarih seçim arayüzünde 1900 yılından seçim yapılabilir (önceki 2000 yıl)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Sürükleme Otomatik Kaydırması
Öğeler sürüklenirken ekran kenarlarında otomatik olarak kaydırılır.
- **Otomatik Kaydırma Bölgesi**: Ekranın üst/alt %10'una sürüklemek için otomatik kaydır
- **Hızlanma Tabanlı**: Kaydırma hızı kenara yaklaştıkça artar
- **Dokunsal Geri Bildirim**: Kaydırma bölgesine girerken hafif titreşim bildirimi
- **Çapraz Bölüm Navigasyonu**: Hızlı bir şekilde birçok öğeyi veya birden fazla bölümü göz atın

#### Kaydırma Navigasyonu
Ayrıntı görünümü ekranında hızlı bir şekilde üste veya alta atlayın.
- **Navigasyon Düğmeleri**: Birçok yorum olduğunda kaydırma düğmeleri arama çubuğunun yanında görünür
- **Konuma Dayalı Görüntüleme**: Üstte sadece alt düğmesi gösterilir, altta sadece üst düğmesi gösterilir
- **Neumorfik Tasarım**: Düğme stili uygulama tasarımıyla tutarlı

#### Sayfa Geçiş Animasyonu Geri Yüklendi
Alt navigasyon çubuğu ve alım ekranı için çevirme animasyonu geri yüklendi.
- **3B Çevirme Efekti**: Sayfa geçişleri Y ekseni üzerinde 180 derecelik dönerme ile
- **Log/Mağaza Sayfaları**: Çevirme animasyonu uygulandı
- **Alım Ekranı**: Posta kutusu düğmesi ve bildirimi derin bağlantılarından çevirme animasyonu uygulandı

#### Kullanıcı Arabirimi Tasarımı Birleştirildi
Neumorfik tasarım, Gönder, Al ve Mağaza ekranlarına uygulanarak tüm uygulamayı birleştirdi.
- **Gönder/Al Ekranları**: Kartlar ve diyaloglar için neumorfik gölgeler uygulandı
- **Mağaza Ekranı**: Sekme düğmelerine parlama efektleri, neumorfik stil ürün kartları
- **Giriş Alanı Tasarımı**: İç stil, giriş alanlarını açıkça ayırır

#### Günlük Yeniden Sıralama Animasyonu
Öğeler yeni yorumlar nedeniyle günlük listenin başına taşındığında yumuşak animasyonlar uygulanır.
- **Ölçek Efekti**: Öğeler kısaca ölçeklendirilir, sonra yeniden konumlandırıldıktan sonra normal boyuta döner
- **Sıralı İşleme**: Aynı anda taşınan birden fazla öğe sırayla animasyon yapar
- **Görsel Vurgu**: En son öğelerin hangisi olduğunu açıkça gösterir

#### Veritabanı İstikrarlandırılması
Uygulama güncellemeleri sırasında oluşabilecek veritabanı uyumluluk sorunları çözüldü.
- **Otomatik Kurtarma**: Sürüm uyumsuzluğu oluştuğunda veritabanını otomatik olarak yeniden oluşturur
- **Veri Koruma**: Otomatik sunucu senkronizasyonu sayesinde veri kaybı olmaz
- **Tüm Platformlar**: iOS, Android, macOS ve Windows için aynı düzeltme uygulandı

#### Parola Kilit İyileştirmesi
Parola korumalı öğelerin güvenliği ve kullanılabilirliği önemli ölçüde iyileştirildi.
- **Bulanıklık Yer Paylaşımı**: Giriş yapılan kilitli öğelerde içerik tamamen gizlenir ve güvenlik artırılır
- **Neumorfik Tasarım**: Parola ayarla/kilit aç diyalogları artık neumorfik stili kullanır
- **16 Haneli Görüntü**: Küçük daireler (toplam 16) parola giriş durumunu gösterir
- **İki Satır Giriş**: Parolayı ayarla ve aynı ekranda onay yapın

#### Anında Bildirim Ayarları İyileştirmesi
Anında bildirim ayarları ekranı kategori olarak yeniden organize edilmiştir.
- **7 Kategori**: İşlem, Günlük, Son Kullanma, Tepki, Anahtar Kelime, Paylaşım ve Sistem olarak sınıflandırılmıştır
- **Grup Geçiş**: Tüm kategoriyi bir kerede açıp kapatın
- **Daralt/Genişlet**: Akordeon kullanıcı arabirimi yalnızca gerekli kategorileri görmeyi sağlar
- **Ayrıntılı Bildirimler**: İşlem kabul/reddet, tepki, anahtar kelime, paylaşım sona erme/rapor ve sistem bildirimleri eklendi
- **Neumorfik Tasarım**: Neumorfik stil bireysel bildirim öğelerine uygulandı

#### Ses Ayarları İyileştirmesi
Sessiz düğmesi artık basılı durumun sezgisel temsili için neumorfik tasarım içerir.
- **Basma Efekti**: Sessize alındığında düğme içeri doğru basılmış görünür
- **Neumorfik Gölge**: Varsayılan durum dışbükey gölge gösterir, basılı durum içbükey gölge gösterir

#### Günlük Yükleme Performans İyileştirmesi
Paylaşılan günlük yükleme hızı iyileştirildi.
- **Önbellek İlk Yükleme**: Daha önce görüntülenen günlükler anında önbellekten görüntülenir
- **Veri Tasarrufu**: Yeniden ziyaret edilirken sunucu istekleri yok, yerel veriler kullanılır
- **Gerçek Zamanlı Yeni Yorumlar**: Önbellek kullanırken bile yeni yorumlar gerçek zamanlı olarak alınır

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Kağıt Paylaşılan Günlükleri
Damgalar olmadan yalnızca kağıt kullanarak paylaşılan günlük belgeleri oluşturun.
- **2 veya daha fazla kağıt seçin** → "Yeni Öğe Oluştur (Paylaşılan Günlük)" menüsü görünür
- **1 kağıt seçin** → "Yeni Öğe Oluştur (Özel Günlük)" menüsü görünür
- Oluşturulan belgeler aynı yorum odasını paylaşır
- Belgeleri farklı kişilere gönderin ve birbirinizle sohbet edin

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Rozet Düzenleme Özelliği
Oyulmuş rozetlerin görüntüsünü ve anahtar kelimelerini düzenleyin.
- **Düzenleme Menüsü**: Oyulmuş bir rozet seçildiğinde "Rozeti Düzenle" menüsü görünür
- **Görüntü Değişikliği**: Rozet görüntüsünü yeni bir görselle değiştirin
- **Anahtar Kelime Yönetimi**: 5 tür anahtar kelimeyi ekleyin, silin veya değiştirin

#### Görüntü Performans Optimizasyonu
Ağ görüntü yükleme hızı önemli ölçüde iyileştirildi.
- **Yerel Önbellek**: Yüklendikten sonra görüntüler anında görüntülenmesi için yerel olarak kaydedilir
- **Rozet Görüntüsü Senkronizasyonu**: Rozet görüntü değişiklikleri tüm günlüklere anında yansıtılır

#### Son Alıcılar Otomatik Tamamlama
Gönder ekranında hızlı bir şekilde son alıcıları seçin.
- **Otomatik Tamamlama Listesi**: Giriş alanı odaklandığında en son 30 alıcıyı gösteren açılır liste
- **Hızlı Seçim**: Listeden alıcı seçildiğinde otomatik olarak arar
- **Yeniden Ara**: X düğmesiyle seçimi temizleyerek başka bir alıcı arayın
- **Yerel Depolama**: Alıcı bilgileri başarılı gönderinde otomatik olarak kaydedilir

#### Gönder Kısıtlamaları İyileştirmesi
Donanmış rozetler ve paylaşılan damgalar artık gönderilemez.
- **Donanmış Rozetler**: Göndermek için rozeti çıkarın
- **Paylaşılan Damgalar**: Damgayı göndermek için paylaşım iptalini geri alın
- **Ayrıntılı Rehberlik**: Kısıtlama nedenini açıklayan belirli mesajları görüntüler

#### Tepki Sistemi
Öğeleri duygusal ifadelerle yanıtlayın.
- **12 Tepki**: Beğenme, Sevme, En İyi, Tebrikler ve daha fazlası dahil çeşitli duygusal ifadeler
- **Tepki Geçişi**: Seçilen tepkiye tekrar tıklayarak iptal edin
- **Günlük Kaydı**: Sistem günlüğü tepkiler seçildiğinde veya iptal edildiğinde kaydeder
- **Çok Dilli Destek**: Tepki adları kullanıcının dilinde görüntülenir

#### Arama İşlevi İyileştirmesi
Gerçek zamanlı arama, öğe adlarını ve anahtar kelimeleri içerecek şekilde genişletilmiştir.
- **Öğe Adı Arama**: Belge başlığı, damga açıklaması veya rozet alan adına göre ara
- **Anahtar Kelime Arama**: Damgalarda ve rozetlerde kaydedilen anahtar kelimelere göre ara
- **Etiket Arama**: Damga şablonu etiketlerine göre ara

#### Uygulama İçi Bildirim İyileştirmesi
Gerçek zamanlı bildirimler iyileştirilmiştir.
- **Gönderici Rozet Görüntüsü**: Gönderici rozet görüntüsü bildirimd satır içine gösterilir
- **Dinamik Ada Stili**: iOS Dinamik Ada stili tarafından ilham alan şık bildirim animasyonu
- **Gerçek Zamanlı Algılama**: Kimlik+zaman damgasına göre yeni ve güncellenmiş bildirimleri doğru bir şekilde algılar

#### Hata Düzeltmeleri
- **Belge ayrıntı kullanıcı arabirimi istikrarlaştırması**: Paylaşılan/solo günlüklerin ekran sınırında olduğunda arama çubuğu ve filtrelerin titreşmesi sorunu düzeltildi
- **Kaydırma Titremesi Düzeltildi**: Az sayıda günlüğü olan belgelerde/damgalarda yukarı doğru kaydırırken ekran titremesi sorunu çözüldü
- **Üst Kaydırma Düzeltildi**: Günlüğü olan öğelerde yukarı kaydırarak yazar bilgisine ulaşılamayan sorun çözüldü
- **Tepki Günlüğü Formatı İyileştirildi**: Emojiler ve adlar artık birlikte gösterilir
- **Kullanıcı Adı Görüntüsü Düzeltildi**: Rozet takılıdır
ken alan adı artık doğru şekilde görüntülenir
- **Paylaşılan Günlük İlk Bildirim Düzeltildi**: Paylaşılan günlüklerin ilk bildirim görüntülenmeme sorunu çözüldü
- **Anında Bildirim Görüntüsü Düzeltildi**: Anında bildirimlerde rozet görüntüsü yerine belge görüntüsü artık önceliklidir

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Otomatik Çok Dilli Çeviri
Belgeler, damgalar ve günlük içeriği sizin dilinize otomatik olarak çevrilir.
- **Otomatik Çeviri**: Belgeleri, damgaları ve günlükleri görüntülerken kullanıcının diline otomatik çeviri
- **Desteklenen Diller**: Korece, İngilizce, Japonca, İspanyolca, Fransızca, Almanca, Portekizce
- **Orijinal Geçişi**: [Orijinali Göster] düğmesiyle orijinal ve çeviri arasında geçiş yapın
- **Çeviri Önbelleği**: Sunucu ve yerel önbellekleme yeniden çeviri isteklerini engeller
- **Dile Özgü Önbellek**: Diller değiştirildiğinde anında önbelleğe alınmış çeviriyi kullanın

#### Öğretici Sistem
Uygulama kullanımında size rehberlik etmek için adım adım öğreticiler eklenmiştir.
- **Envanter Ekranı**: Öğe seçimi, bölüm hareketi, alt menü kullanımı (8 adım)
- **Gönder/Al Ekranı**: Alıcı girişi, QR tarama, aktarım/alma yöntemleri
- **Mağaza Ekranı**: Ürün kategorisi göz atması ve satın alma yöntemleri
- **Profil Ekranı**: Hesap bilgileri ve ayarları
- **Ayarlar Ekranı**: Uygulama ayarları ve tema değişiklikleri
- **Damga Şablonu**: Tam şablon oluşturma süreci (9 adım)
- **Arama Özelliği**: Filtre kullanımı ve arama terimi kaydetme
- İlk kullanımda gösterilir; Ayarlar'da tekrar görüntülenebilir

#### Günlük Performans Optimizasyonu
Paylaşılan/bağımsız günlükler için yükleme hızı ve veri kullanımı önemli ölçüde iyileştirildi.
- **Hızlı Yükleme**: Önce en son 100 yorumu yükle
- **Sonsuz Kaydırma**: Bir seferde 50 eski yorumu yüklemeyi kaydır
- **Yerel Önbellekleme**: Yeniden ziyaret edildiğinde anında önbellekten görüntülenir
- **Gerçek Zamanlı Sinkronizasyon**: Yalnızca yeni yorumları verimli şekilde al
- **Veri Tasarrufu**: Gereksiz yeniden indirmeleri engeller

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Medya Bağlantısı Kartları
Günlüklere girilen URL'ler otomatik olarak **zengin kartlar** olarak görüntülenir.
- **YouTube**: Küçük resim + Başlık + Kanal adı
- **Spotify**: Albüm sanatı + Başlık + Sanatçı
- **Google Drive**: Dosya küçük resmi + Dosya adı (genel dosyalar)
- **Dropbox**: Simge + Dosya adı
- **OneDrive**: Simge + Hizmet adı
- **Web Sayfaları**: Önizleme görüntüsü + Sayfa başlığı
- Harici uygulamada/tarayıcıda açmak için dokunun
- URL'yi panoya kopyalamak için uzun basın

#### Paylaşılan Şablon Arama İyileştirmeleri
- **Kağıt Kontrolü**: Klonla düğmesi kalan kağıt sayısını gösterir (Kağıt:10)
- **Kağıt Gerekli**: Kağıt olmadığında klonla devre dışı bırakılır
- **Neumorfik Tasarım**: Arama ekranı artık neumorfik stilini kullanır

#### Görüntü Düzenleyici Efekt Sistem İyileştirmeleri
Özel efektler seçim arayüzü basitleştirilmiştir.
- **Tek Seçim**: Bir seferde 5 efekten birini seçin
- **Efekt Listesi**: Yok / Arka Planı Kaldır / Bokeh / Bloom / Monokrom
- **Yumuşak Geçişler**: Efekt işleme sırasında ilerleme göstergesi gösterilir
- **Performans Artışı**: Bloom/Monokrom filtreleri arka planda işlenir

#### Performans ve İstikrar
İç uygulama yapısı optimize edilmiştir.
- **Sorgu Optimizasyonu**: Daha hızlı klip/filtre yüklemesi için paralel işleme
- **Kod Temizleme**: 12 kullanılmayan kod modülü kaldırıldı
- **Bağımlılık Temizliği**: 7 kullanılmayan kütüphane kaldırıldı
- **Varlık Temizliği**: Kullanılmayan yazı tipleri/görüntüler kaldırıldı (yaklaşık 16MB azalma)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Klip Özelliği
Daha kolay yönetim için birden fazla belgeyi bir araya getirin.
- **Klip Oluştur**: 2+ belge seçin ve "Birlikte Kliple" düğmesine dokunun
- **Klip Simgesi**: Kliplenen belgeler sağ üst köşede klip simgesi gösterir
- **Klip Ayrıntıları**: Öğe ayrıntı ekranında "Klip Bilgisi" düğmesiyle iç öğeleri görüntüleyin
- **Yeniden Sırala**: Bir klip içindeki öğeleri yeniden sıralamak için sürükleyin (kapak hariç)
- **Öğeleri Hariç Tut**: Bir klipten belirli öğeleri kaldırın (kapak hariç)
- **Klip Aç**: Bir klibi tamamen bağımsız belgelere ayırın
- **Otomatik Ayrılma**: Klip 1 öğeye düşürüldüğünde otomatik olarak ayrılır
- **Aktarım**: Kliplar bir paket olarak gönderilir/alınır

#### Paylaşılan Şablon Arama İyileştirmeleri
Paylaşılan şablon arama ekranı için kullanılabilirlik iyileştirilmiştir.
- **Satır İçi Kartlar**: Arama sonuçları kompakt liste formatında görüntülenir
- **Tam Görüntü Görüntüsü**: Küçük resimler orijinal en boy oranında kırpılmadan gösterilir
- **Genişletilmiş Ayrıntılar**: Şablon ayrıntı sayfasında içeriği, anahtar kelimeleri ve son kullanma tarihini görüntüleyin
- **Anahtar Kelime Önizlemesi**: Şablon için ayarlanan varsayılan anahtar kelimeleri görüntüleyin
- **Son Kullanma Tarihi**: Paylaşılan şablonun ne zaman sona erdiğini kontrol edin

#### Parola Kilit Açma İyileştirmesi
- Doğru parolayı girmek artık belgeyi **kalıcı olarak açar**
- Önce: Yalnızca görüntüleme, kilit kalıyor → Şimdi: Tamamen açılmış

#### Hata Düzeltmeleri
- Klip öğelerinin alım ekranında ayrı ayrı sayılması sorunu düzeltildi
- Navigasyon çubuğu alım rozeti klip içi öğeleri dahil etme sorunu düzeltildi
- İade/silinme sırasında rozet (İsimlik) çıkarılmama sorunu düzeltildi
- Rozet silindikten sonra alan adının işgal durumda kalması sorunu düzeltildi

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Paylaşılan Günlük Okunmamış Göstergesi
Paylaşılan günlüklere yeni açıklamalar eklendiğinde, öğe kenarlığı **titrer**.
- Envanterinizde okunmamış paylaşılan günlükleri kolayca fark edin
- Belgeyi açtığınızda titreşme durur
- Okuma durumu tüm cihazlarda eşitlenir

#### Damga Kullanım Rehberi
Oyulmuş bir damga seçtiğinizde, mevcut kağıtlar **titrer** ve rehberlik sağlar.
- Şablon çoğaltma için geliştirilmiş kullanıcı deneyimi
- Sezgisel sonraki adım rehberliği

#### Bölüm İyileştirmeleri
- **Daralt/Genişlet**: Ok düğmeleriyle bölümleri açıp kapatın (▼/▲)
- **Tümünü Seç**: Tüm öğeleri seçmek/seçimi kaldırmak için bölüm başlığına dokunun
- Seçim durumu göstergeleri (○/◐/●)
- Daraltılmış bölümlere sürükle ve bırak

#### Mağaza Kolaylığı
Aynı öğenin art arda satın alınması için kolaylaştırılmış ödeme.
- Son satın alma işleminin 10 dakika içinde onay diyaloglarını atlayın
- Daha hızlı toplu satın alma

#### Kullanıcı Arabirimi İyileştirmeleri
- Yeni başlık yazı tipi ile okunabilirliği iyileştirdi
- Damga kartları arka planda şablon önizlemesi gösterir (%33 opaklık)
- Rozet kartları oyulmuş görüntü önizlemesi gösterir
- Alt menü kullanılabilir eylem sayısı rozetini gösterir
- Siyah mürekkep tema rengi ayarlaması (geliştirilmiş metin okunabilirliği)
- Optimize edilmiş ürün görüntüleri (küçültülmüş boyut, daha hızlı yükleme)

#### Hata Düzeltmeleri
- Kendi yorumlarında titreşme efekti sorunu düzeltildi
- Hareket navigasyonunda giriş alanı kırpılması sorunu düzeltildi
- Bölümleri daraltırken gri ekran sorunu düzeltildi
- Anında bildirim izni işlemesi iyileştirildi

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Belge Kilit Özelliği
- Belgelere sayısal parola ayarlayın (16 basamağa kadar)
- Kilitli belgeler gri tonlama + kilit simgesi gösterir
- Doğru parolayla kilit aç (tek sefer)
- Kilit durumu öğe aktarımından sonra kalıcı kalır
- Kilitli belgeler arama sonuçlarından hariç tutulur

#### Hızlı Giriş Sistemi
Günlük yazarken `+` düğmesi aracılığıyla özel bilgileri kolayca girin:
- **Anahtar Kelime:Değer** - Genel anahtar kelime kartı
- **Tarih Alarmı** - Tarih kartı (otomatik Gün-Sayısı hesaplaması, alarm ayarları)
- **Telefon Numarası** - Ülkeye özel otomatik biçimlendirme
- **Konum/Adres** - Harita uygulaması entegrasyonu
- **Tutar** - Otomatik para birimi simgesi görüntüsü

#### Özel Kart İşlemleri
**Uzun basın** günlüklerdeki özel bilgilere ek özellikleri etkinleştirmek için:
- **Tarih Kartı**: Alarm ayarla/iptal et
- **Telefon Kartı**: Doğrudan ara / Panoya kopyala
- **Konum Kartı**: Harita uygulamasında aç / Panoya kopyala
- **Tutar Kartı**: Panoya kopyala

#### Kullanıcı Arabirimi İyileştirmeleri
- Filtre fişi neumorfik tasarım
- Arama çubuğu kaydırma iyileştirmesi
- Öğe ayrıntı ekranı Uygulama Çubuğu öğe adını gösterir

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Kopyala">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**İlk Resmi Sürüm**

#### Kağıt Sistemi
- Belge oluşturmak için gerekli para birimi sistemi tanıtıldı
- Yeni kaydolmada 10 Kağıt verilir
- Her Google/Apple hesap bağlantısı için ek 10 kağıt
- Mağazada satın alınabilir kağıt

#### Belge Oluşturma
- Kağıt kullanarak belge oluşturun
- Başlık, içerik ve görüntüler ekleyin
- Başlama tarihi/bitiş tarihi seçeneklerini ayarlayın

#### Rozet Sistemi
- Benzersiz alan adı oyma özelliği
- Oyulmuş alan adı kullanıcı kimliği olarak kullanılır
- Donanmış/çıkarıldı yönetimi aracılığıyla etkinleştirme yönetimi
- 128x128 görüntü ekleme seçeneği

#### Damga Sistemi
- Şablon oluşturma özelliği
- Solo günlük/Paylaşılan günlük modu seçimi
- Şablon çoğaltma özelliği
- Başlama tarihi/bitiş tarihi ayarları

#### Günlük Özelliği
- Belgelere/damgalara günlük kaydetme
- Solo günlük: Yalnızca kişisel kayıtlar
- Paylaşılan günlük: Çoğaltma sahipleriyle paylaş
- Anahtar:değer biçimi bilgi kartı desteği

#### Mürekkep Sistemi
- Uygulama tema rengi değiştirme özelliği
- Siyah Mürekkep, Altın Mürekkep

#### Öğe Aktarımı
- E-posta adresi aracılığıyla öğeler gönder
- QR kodu taraması ile otomatik e-posta doldur
- Alınan öğeleri kabul et veya geri döndür
- Bir seferde birden fazla öğe gönder

#### Bölüm
- Öğe gruplandırma özelliği
- Cihaza özgü yerel depolama

#### Arama Özelliği
- Gerçek zamanlı arama filtreleme
- Arama terimlerini filtre olarak kaydet
- Son aramaları otomatik kaydet (5'e kadar)

#### Mağaza
- Kağıt, Damga, Rozet, Mürekkep satın alın
- Tüm platformlarda kullanılabilir

#### Hesap
- Google, Apple, E-posta girişi
- Sosyal hesapları bağlayarak ek Kağıt kazanın

#### Çok Dilli Destek
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>Yeni özellikler önerilmek!</strong> Fikirlerinizi <a href="/inventory/suggest/tr/">Öneriler</a>'de paylaşın ve aktif olarak gözden geçireceğiz.
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
