---
layout: inventory
title: Log Perubahan
permalink: /inventory/changelog/id/
lang: id
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

## Log Perubahan

Lihat riwayat pembaruan aplikasi Inventory.

<details class="changelog-version" open>
<summary>
  <span class="version-title">v1.3.0 <small>2026-01-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Header Profil yang Dapat Diperluas
Area profil di bagian atas layar beranda telah didesain ulang sebagai panel laci.
- **Tarik untuk Memperluas**: Tarik bilah pegangan ke bawah atau ketuk nama pengguna untuk memperluas panel profil
- **Panel Terpadu**: Header dan konten profil (kartu profil, kode QR, info API) terintegrasi dalam satu panel
- **Animasi Halus**: Efek animasi alami saat memperluas/memperkecil
- **Konten Utama Tetap**: Grid inventaris tetap di tempatnya saat profil diperluas

#### Rebranding Pocket
Nama unit klasifikasi item telah diubah dari 'Partition' menjadi 'Pocket'.
- **Nama Intuitif**: Lebih baik menyampaikan konsep ruang untuk menyimpan item, seperti saku
- **UI Konsisten**: Terminologi terpadu sebagai 'Pocket' di seluruh aplikasi
- **Dukungan Multibahasa**: Diterjemahkan dengan tepat untuk setiap bahasa

#### Migrasi Data Otomatis
Data 'Partition' yang ada secara otomatis dikonversi ke 'Pocket'.
- **Migrasi Tanpa Kehilangan**: Partisi dan item yang ada dipertahankan dengan tepat
- **Pemrosesan Otomatis**: Migrasi terjadi secara otomatis saat Anda memperbarui aplikasi
- **Transisi Mulus**: Tidak diperlukan tindakan - cukup perbarui dan lanjutkan menggunakan

#### Perbaikan Bug
- **Perbaikan Header Ganda Toko**: Memperbaiki masalah di mana dua header ditampilkan di layar toko dalam kondisi tertentu.
  - Menyelesaikan ketidaksesuaian status mode Shell saat memilih tab toko setelah kembali ke layar beranda
  - Memastikan manajemen mode Shell yang stabil melalui penghitungan referensi

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.1 <small>2026-01-05</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Tata Letak Panel Reaksi Responsif
Panel reaksi gambar dalam layar detail item sekarang ditampilkan dengan benar di semua ukuran layar.
- **Tata Letak Responsif**: Tombol reaksi didistribusikan secara merata bahkan di layar sempit
- **Penggunaan Lebar Penuh**: Panel memanfaatkan lebar layar penuh terlepas dari ukuran gambar
- **Desain Ringkas**: Padding yang dioptimalkan mengurangi area gambar yang tersembunyi sambil mempertahankan area sentuh

#### Pencarian Template Bersama Infinite Scroll
Ketika ada lebih dari 20 hasil pencarian template bersama, Anda dapat scroll untuk memuat lebih banyak.
- **Infinite Scroll**: Secara otomatis memuat 20 hasil berikutnya saat mencapai bagian bawah
- **Indikator Loading**: Indikator kemajuan ditampilkan di bagian bawah saat memuat lebih banyak
- **Kompatibilitas Mundur**: Versi aplikasi sebelumnya tetap menampilkan 20 hasil seperti sebelumnya

#### Pembaruan Halaman Beranda
- **Dukungan Bahasa Cina (Sederhana)**: Menambahkan lokalisasi 中文(简体) ke halaman beranda (bahasa ke-8)
- **Tampilan Bahasa yang Didukung**: 8 ikon bendera bahasa ditampilkan di bawah ikon unduhan platform

#### Pengaturan Bahasa App Store
- **Penambahan Bahasa yang Didukung iOS/macOS**: Menambahkan bahasa Cina (zh) ke CFBundleLocalizations

#### Peningkatan Pemilihan Tanggal
- **Memperluas Jangkauan Pemilihan**: Sekarang dapat memilih dari tahun 1900 di UI pemilihan tanggal (sebelumnya tahun 2000)

#### Fitur Berbagi Dokumen
Salin konten ke clipboard atau kirim melalui email dari layar detail dokumen.
- **Salin ke Clipboard**: Salin sebagai teks murni dengan penanda laya kaya dihapus
- **Kirim Email**: Kirim dalam format HTML dengan pemformatan diterapkan
- **Pemilihan Selektif**: Pilih item yang ingin disertakan dari judul, konten, kata kunci, percakapan, dan log sistem
- **Dukungan Mode Clip**: Fitur yang sama tersedia di layar detail clip

#### Sinkronisasi Kunci Clip
Item dalam clip dapat dikunci bersama.
- **Kunci/Buka Kunci Bersama**: Mengunci item perwakilan clip mengunci semua item dalam clip
- **Sinkronisasi Kata Sandi**: Semua item dalam clip menggunakan kata sandi kunci yang sama
- **UI Kata Sandi Lepas Clip**: Dialog kata sandi lepas clip diperbarui ke desain neumorphic baru

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.2.0 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Drag Auto-Scroll
Saat menyeret item, layar secara otomatis scroll di tepi.
- **Zona Auto-Scroll**: Seret ke bagian atas/bawah 10% layar untuk auto-scroll
- **Berbasis Akselerasi**: Kecepatan scroll meningkat saat Anda semakin dekat ke tepi
- **Umpan Balik Haptic**: Notifikasi getaran ringan saat memasuki zona scroll
- **Navigasi Lintas Partisi**: Jelajahi banyak item atau banyak partisi dengan cepat

#### Navigasi Scroll
Lompat dengan cepat ke atas atau bawah di layar tampilan detail.
- **Tombol Navigasi**: Tombol scroll muncul di sebelah bilah pencarian saat ada banyak komentar
- **Tampilan Berbasis Posisi**: Hanya tombol bawah yang ditampilkan di atas, hanya tombol atas yang ditampilkan di bawah
- **Desain Neumorphic**: Gaya tombol konsisten dengan desain aplikasi

#### Animasi Transisi Halaman Dipulihkan
Animasi flip untuk bilah navigasi bawah dan layar penerimaan telah dipulihkan.
- **Efek Flip 3D**: Transisi halaman dengan rotasi 180 derajat pada sumbu Y
- **Halaman Log/Shop**: Animasi flip diterapkan
- **Layar Penerimaan**: Animasi flip diterapkan dari tombol kotak surat dan deep links notifikasi

#### Penyatuan Desain UI
Desain Neumorphic telah diterapkan ke layar Kirim, Terima, dan Toko, menyatukan seluruh aplikasi.
- **Layar Kirim/Terima**: Bayangan neumorphic diterapkan ke kartu dan dialog
- **Layar Toko**: Efek bersinar pada tombol tab, kartu produk gaya neumorphic
- **Desain Bidang Input**: Gaya inset dengan jelas membedakan area input

#### Animasi Pengurutan Ulang Log
Ketika item bergerak ke atas daftar log karena komentar baru, animasi halus diterapkan.
- **Efek Skala**: Item secara singkat diperbesar, kemudian kembali ke ukuran normal setelah diposisikan ulang
- **Pemrosesan Berurutan**: Beberapa item menganimasikan secara berurutan saat bergerak secara bersamaan
- **Penekanan Visual**: Dengan jelas menunjukkan item mana yang paling baru

#### Stabilisasi Database
Masalah kompatibilitas database yang dapat terjadi saat pembaruan aplikasi telah diselesaikan.
- **Pemulihan Otomatis**: Secara otomatis membuat ulang database saat terjadi ketidakcocokan versi
- **Pemeliharaan Data**: Tidak ada kehilangan data berkat sinkronisasi server otomatis
- **Semua Platform**: Perbaikan yang sama diterapkan ke iOS, Android, macOS, dan Windows

#### Peningkatan Password Lock
Keamanan dan kegunaan item yang dilindungi kata sandi telah ditingkatkan secara signifikan.
- **Overlay Blur**: Konten sepenuhnya tersembunyi saat memasuki item terkunci untuk keamanan yang ditingkatkan
- **Desain Neumorphic**: Dialog setel/buka kunci kata sandi sekarang menggunakan gaya neumorphic
- **Tampilan 16 Digit**: Lingkaran kecil (16 total) menampilkan status input kata sandi
- **Input Dua Baris**: Atur kata sandi dan konfirmasi pada layar yang sama

#### Peningkatan Pengaturan Notifikasi Push
Layar pengaturan notifikasi push telah diatur ulang berdasarkan kategori untuk manajemen yang lebih nyaman.
- **7 Kategori**: Diklasifikasikan menjadi Transaksi, Log, Kadaluarsa, Reaksi, Kata Kunci, Berbagi, dan Sistem
- **Toggle Grup**: Matikan atau hidupkan seluruh kategori sekaligus
- **Ciutkan/Perluas**: UI akordeon memungkinkan melihat hanya kategori yang diperlukan
- **Notifikasi Detail**: Menambahkan penerimaan/penolakan transaksi, reaksi, kata kunci, berbagi kadaluarsa/laporan, dan notifikasi sistem
- **Desain Neumorphic**: Gaya neumorphic diterapkan ke item notifikasi individual

#### Peningkatan Pengaturan Suara
Tombol bisu sekarang menampilkan desain neumorphic untuk representasi intuitif dari status yang ditekan.
- **Efek Tekan**: Tombol tampak tertekan ke dalam saat dibisukan
- **Bayangan Neumorphic**: Status default menampilkan bayangan cembung, status tertekan menampilkan bayangan cekung

#### Peningkatan Kinerja Loading Log
Kecepatan loading log bersama telah ditingkatkan.
- **Pemuatan Pertama Cache**: Log yang sebelumnya dilihat ditampilkan secara instan dari cache
- **Penghematan Data**: Tidak ada permintaan server saat mengunjungi kembali, menggunakan data lokal
- **Komentar Baru Real-time**: Komentar baru diterima secara real-time bahkan saat menggunakan cache

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.3 <small>2026-01-03</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Log Bersama Kertas
Buat dokumen log bersama menggunakan hanya kertas, tanpa stempel.
- **Pilih 2 atau lebih kertas** → Menu "Buat Item Baru (Log Bersama)" muncul
- **Pilih 1 kertas** → Menu "Buat Item Baru (Log Pribadi)" muncul
- Dokumen yang dibuat berbagi ruang komentar yang sama
- Kirim dokumen ke orang berbeda dan chat satu sama lain

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.2 <small>2025-12-31</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Fitur Pengeditan Lencana
Edit gambar dan kata kunci lencana yang diukir.
- **Menu Edit**: Menu "Edit Lencana" muncul saat memilih lencana yang diukir
- **Perubahan Gambar**: Ganti gambar lencana dengan yang baru
- **Manajemen Kata Kunci**: Tambah, hapus, atau ubah 5 jenis kata kunci

#### Optimasi Kinerja Gambar
Kecepatan loading gambar jaringan telah ditingkatkan secara signifikan.
- **Cache Lokal**: Setelah dimuat, gambar disimpan secara lokal untuk tampilan instan
- **Sinkronisasi Gambar Lencana**: Perubahan gambar lencana langsung tercermin di semua log

#### Autocomplete Penerima Terakhir
Pilih dengan cepat penerima terakhir di layar pengiriman.
- **Daftar Autocomplete**: Dropdown menampilkan hingga 30 penerima terakhir saat bidang input difokuskan
- **Pemilihan Cepat**: Secara otomatis mencari saat memilih penerima dari daftar
- **Pencarian Ulang**: Hapus pilihan dengan tombol X untuk mencari penerima lain
- **Penyimpanan Lokal**: Informasi penerima secara otomatis disimpan pada pengiriman yang berhasil

#### Peningkatan Batasan Pengiriman
Lencana yang dilengkapi dan stempel bersama sekarang dibatasi dari pengiriman.
- **Lencana Dilengkapi**: Lepaskan lencana untuk mengirimnya
- **Stempel Bersama**: Batalkan berbagi untuk mengirim stempel
- **Panduan Detail**: Menampilkan pesan khusus yang menjelaskan alasan pembatasan

#### Sistem Reaksi
Bereaksi terhadap item dengan ekspresi emosional.
- **12 Reaksi**: Berbagai ekspresi emosional termasuk Like, Love, Best, Congrats, dan lainnya
- **Toggle Reaksi**: Batalkan dengan mengklik reaksi yang dipilih lagi
- **Pencatatan Log**: Sistem log mencatat saat reaksi dipilih atau dibatalkan
- **Dukungan Multibahasa**: Nama reaksi ditampilkan dalam bahasa pengguna

#### Peningkatan Fungsi Pencarian
Pencarian real-time telah diperluas untuk mencakup nama item dan kata kunci.
- **Pencarian Nama Item**: Cari berdasarkan judul dokumen, deskripsi stempel, atau nama domain lencana
- **Pencarian Kata Kunci**: Cari berdasarkan kata kunci yang disimpan di stempel dan lencana
- **Pencarian Tag**: Cari berdasarkan tag template stempel

#### Peningkatan Notifikasi In-App
Notifikasi toast real-time telah ditingkatkan.
- **Tampilan Lencana Pengirim**: Gambar lencana pengirim ditampilkan inline dalam notifikasi
- **Gaya Dynamic Island**: Animasi toast yang elegan terinspirasi oleh gaya Dynamic Island iOS
- **Deteksi Real-time**: Dengan akurat mendeteksi notifikasi baru dan yang diperbarui berdasarkan ID+timestamp

#### Perbaikan Bug
- **Stabilisasi UI detail dokumen**: Memperbaiki masalah di mana bilah pencarian dan filter akan bergetar saat log bersama/solo berada di batas layar
- **Jitter Scroll Diperbaiki**: Diselesaikan dengan flickering layar saat scroll ke atas dalam dokumen/stempel dengan beberapa log
- **Scroll Atas Diperbaiki**: Diselesaikan masalah di mana informasi penulis tidak dapat dicapai dengan menggulir di item dengan log
- **Format Log Reaksi Ditingkatkan**: Emotikon dan nama sekarang ditampilkan bersama
- **Tampilan Nama Pengguna Diperbaiki**: Nama domain sekarang ditampilkan dengan benar saat mengenakan lencana
- **Notifikasi Log Bersama Pertama Diperbaiki**: Diselesaikan masalah di mana notifikasi toast pertama untuk log bersama tidak ditampilkan
- **Gambar Push Notification Diperbaiki**: Gambar dokumen sekarang diprioritaskan daripada gambar lencana dalam notifikasi push

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.1.0 <small>2025-12-29</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Terjemahan Otomatis Multibahasa
Dokumen, stempel, dan konten log secara otomatis diterjemahkan ke bahasa Anda.
- **Terjemahan Otomatis**: Terjemahan otomatis ke bahasa pengguna saat melihat dokumen, stempel, dan log
- **Bahasa yang Didukung**: Korea, Inggris, Jepang, Spanyol, Prancis, Jerman, Portugis
- **Toggle Asli**: Beralih antara asli dan terjemahan dengan tombol [Tampilkan Asli]
- **Caching Terjemahan**: Cache server dan lokal mencegah permintaan re-terjemahan
- **Cache Spesifik Bahasa**: Secara instan menggunakan terjemahan cache saat mengganti bahasa

#### Sistem Tutorial
Tutorial langkah demi langkah telah ditambahkan untuk memandu Anda menggunakan aplikasi.
- **Layar Inventory**: Pemilihan item, pergerakan partisi, penggunaan menu bawah (8 langkah)
- **Layar Kirim/Terima**: Input penerima, pemindaian QR, metode transfer/penerimaan
- **Layar Toko**: Penjelajahan kategori produk dan metode pembelian
- **Layar Profil**: Informasi akun dan pengaturan
- **Layar Pengaturan**: Pengaturan aplikasi dan perubahan tema
- **Template Stempel**: Proses pembuatan template lengkap (9 langkah)
- **Fitur Pencarian**: Penggunaan filter dan penyimpanan istilah pencarian
- Ditampilkan hanya pada penggunaan pertama; dapat dilihat lagi di Pengaturan

#### Optimasi Kinerja Log
Kecepatan loading dan penggunaan data untuk log bersama/independen telah ditingkatkan secara signifikan.
- **Loading Cepat**: Muat hanya 100 komentar terbaru terlebih dahulu
- **Infinite Scroll**: Scroll untuk memuat 50 komentar lebih lama di satu waktu
- **Caching Lokal**: Tampilan instan menggunakan cache pada kunjungan ulang
- **Sinkronisasi Real-time**: Secara efisien menerima hanya komentar baru
- **Penghematan Data**: Mencegah pengunduhan ulang yang tidak perlu

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.4 <small>2025-12-25</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Kartu Link Media
URL yang dimasukkan dalam log secara otomatis ditampilkan sebagai **kartu kaya**.
- **YouTube**: Thumbnail + judul + nama saluran
- **Spotify**: Sampul album + judul + artis
- **Google Drive**: Thumbnail file + nama file (file publik)
- **Dropbox**: Ikon + nama file
- **OneDrive**: Ikon + nama layanan
- **Halaman Web**: Gambar pratinjau + judul halaman
- Ketuk untuk membuka di aplikasi eksternal/browser
- Tekan lama untuk menyalin URL ke clipboard

#### Peningkatan Pencarian Template Bersama
- **Pemeriksaan Kertas**: Tombol klon menunjukkan jumlah kertas yang tersisa (Kertas:10)
- **Kertas Diperlukan**: Klon dinonaktifkan saat tidak ada kertas yang tersedia
- **Desain Neumorphic**: Layar pencarian sekarang menggunakan gaya UI neumorphic

#### Peningkatan Sistem Efek Editor Gambar
UI pemilihan efek khusus telah disederhanakan.
- **Pemilihan Tunggal**: Pilih satu dari 5 efek sekaligus
- **Daftar Efek**: Tidak Ada / Hapus Latar Belakang / Bokeh / Bloom / Monokrom
- **Transisi Halus**: Indikator kemajuan ditampilkan selama pemrosesan efek
- **Peningkatan Kinerja**: Filter Bloom/Monochrome diproses di latar belakang

#### Kinerja & Stabilitas
Struktur internal aplikasi telah dioptimalkan.
- **Optimasi Query**: Pemrosesan paralel untuk loading klip/filter lebih cepat
- **Pembersihan Kode**: Menghapus 12 modul kode yang tidak digunakan
- **Pembersihan Dependensi**: Menghapus 7 perpustakaan yang tidak digunakan
- **Pembersihan Aset**: Menghapus font/gambar yang tidak digunakan (pengurangan ~16MB)

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.3 <small>2025-12-23</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Fitur Klip
Bundel beberapa dokumen bersama untuk manajemen yang lebih mudah.
- **Buat Klip**: Pilih 2+ dokumen dan ketuk "Klip Bersama"
- **Ikon Klip**: Dokumen yang dikliping menampilkan ikon klip di sudut atas kanan
- **Detail Klip**: Lihat item internal melalui tombol "Info Klip" di layar detail item
- **Urutan Ulang**: Seret untuk mengurutkan ulang item dalam klip (kecuali sampul)
- **Kecualikan Item**: Hapus item tertentu dari klip (kecuali sampul)
- **Buka Klip**: Sepenuhnya bubarkan klip menjadi dokumen individual
- **Pembubaran Otomatis**: Klip secara otomatis bubar saat berkurang menjadi 1 item
- **Transfer**: Klip dikirim/diterima sebagai bundel

#### Peningkatan Pencarian Template Bersama
Peningkatan kegunaan untuk layar pencarian template bersama.
- **Kartu Inline**: Hasil pencarian ditampilkan dalam format daftar kompak
- **Tampilan Gambar Lengkap**: Thumbnail ditampilkan dalam rasio aspek asli tanpa cropping
- **Detail Diperluas**: Lihat konten, kata kunci, dan tanggal kadaluarsa dalam lembar detail template
- **Pratinjau Kata Kunci**: Lihat kata kunci default yang ditetapkan untuk template
- **Tanggal Kadaluarsa**: Periksa kapan template bersama kadaluarsa

#### Peningkatan Pembukaan Kunci Kata Sandi
- Memasukkan kata sandi yang benar sekarang **secara permanen membuka kunci** dokumen
- Sebelumnya: Hanya melihat, kunci tetap → Sekarang: Sepenuhnya membuka kunci

#### Perbaikan Bug
- Memperbaiki item klip dihitung secara individual di layar penerima
- Memperbaiki lencana bilah navigasi penerimaan termasuk item internal klip
- Memperbaiki lencana (Nameplate) tidak dilepas saat dikembalikan/dihapus
- Memperbaiki domain tetap ditempati setelah penghapusan lencana

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.2 <small>2025-12-22</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Indikator Unread Log Bersama
Ketika komentar baru ditambahkan ke log bersama, batas item **berdenyut**.
- Mudah mengenali log bersama yang belum dibaca di inventory Anda
- Denyutan berhenti saat Anda membuka dokumen
- Status baca disinkronkan di semua perangkat

#### Panduan Penggunaan Stempel
Ketika Anda memilih stempel yang diukir, kertas yang tersedia **berdenyut** untuk memandu Anda.
- Peningkatan UX untuk duplikasi template
- Panduan langkah berikutnya yang intuitif

#### Peningkatan Partisi
- **Ciutkan/Perluas**: Toggle partisi dengan tombol panah (▼/▲)
- **Pilih Semua**: Ketuk header partisi untuk memilih/membatalkan pilihan semua item
- Indikator status pilihan (○/◐/●)
- Seret dan lepas ke partisi yang diatur

#### Kenyamanan Toko
Checkout yang disederhanakan untuk pembelian berturut-turut item yang sama.
- Lewati dialog konfirmasi dalam 10 menit pembelian terakhir
- Pembelian massal yang lebih cepat

#### Peningkatan UI
- Keterbacaan yang ditingkatkan dengan font judul baru
- Kartu stempel menampilkan pratinjau template di latar belakang (opacity 33%)
- Kartu lencana menampilkan pratinjau gambar yang diukir
- Menu bawah menampilkan lencana jumlah tindakan yang tersedia
- Penyesuaian warna tema tinta hitam (keterbacaan teks yang ditingkatkan)
- Gambar produk yang dioptimalkan (ukuran berkurang, loading lebih cepat)

#### Perbaikan Bug
- Memperbaiki efek denyutan pada komentar Anda sendiri
- Memperbaiki pemangkasan bidang input dengan navigasi gestur
- Memperbaiki layar abu-abu saat mengatur partisi
- Peningkatan penanganan izin notifikasi push

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.1 <small>2025-12-16</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

#### Fitur Kunci Dokumen
- Atur kata sandi numerik pada dokumen (hingga 16 digit)
- Dokumen terkunci menampilkan grayscale + ikon kunci
- Buka dengan kata sandi yang benar (satu kali)
- Status kunci bertahan setelah transfer item
- Dokumen terkunci dikecualikan dari hasil pencarian

#### Sistem Input Cepat
Dengan mudah input informasi khusus melalui tombol `+` saat menulis log:
- **Keyword:Value** - Kartu kata kunci umum
- **Date Alarm** - Kartu tanggal (perhitungan D-Day otomatis, pengaturan alarm)
- **Phone Number** - Pemformatan otomatis khusus negara
- **Location/Address** - Integrasi aplikasi peta
- **Amount** - Tampilan simbol mata uang otomatis

#### Tindakan Kartu Khusus
**Tekan lama** informasi khusus dalam log untuk mengaktifkan fitur tambahan:
- **Kartu Tanggal**: Atur/batalkan alarm
- **Kartu Telepon**: Panggil langsung / Salin ke clipboard
- **Kartu Lokasi**: Buka di aplikasi peta / Salin ke clipboard
- **Kartu Jumlah**: Salin ke clipboard

#### Peningkatan UI
- Desain neumorphic chip filter
- Peningkatan scroll bilah pencarian
- AppBar layar detail item menampilkan nama item

</div>
</details>

<details class="changelog-version">
<summary>
  <span class="version-title">v1.0.0 <small>2025-12-13</small></span>
  <button class="copy-btn" onclick="copyVersionContent(this, event)" title="Salin">
    <svg class="copy-icon" viewBox="0 0 24 24" width="10" height="10"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    <svg class="check-icon" viewBox="0 0 24 24" width="10" height="10" style="display:none;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
  </button>
</summary>
<div class="version-content" markdown="1">

**Rilis Resmi Pertama**

#### Sistem Kertas
- Memperkenalkan sistem mata uang yang diperlukan untuk pembuatan dokumen
- 10 lembar Kertas diberikan saat pendaftaran baru
- 10 lembar tambahan untuk setiap tautan akun Google/Apple
- Kertas tersedia untuk dibeli di toko

#### Pembuatan Dokumen
- Buat dokumen menggunakan Kertas
- Tambah judul, konten, dan gambar
- Atur opsi tanggal mulai/tanggal kadaluarsa

#### Sistem Lencana
- Fitur ukiran nama domain unik
- Nama domain yang diukir digunakan sebagai identitas pengguna
- Manajemen aktivasi melalui lengkap/lepas
- Opsi lampiran gambar 128x128

#### Sistem Stempel
- Fitur pembuatan template
- Pemilihan mode log solo/log bersama
- Fitur duplikasi template
- Pengaturan tanggal mulai/tanggal kadaluarsa

#### Fitur Log
- Catat log pada dokumen/stempel
- Log solo: Catatan khusus pribadi
- Log bersama: Bagikan dengan pemilik duplikat
- Dukungan kartu info format key:value

#### Sistem Tinta
- Fitur perubahan warna tema aplikasi
- Tinta Hitam, Tinta Emas

#### Transfer Item
- Kirim item melalui alamat email
- Auto-fill email dengan pemindaian kode QR
- Terima atau kembalikan item yang diterima
- Kirim beberapa item sekaligus

#### Partisi
- Fitur pengelompokan item
- Penyimpanan lokal khusus perangkat

#### Fitur Pencarian
- Penyaringan pencarian real-time
- Simpan istilah pencarian sebagai filter
- Auto-save pencarian terakhir (hingga 5)

#### Toko
- Beli Kertas, Stempel, Lencana, Tinta
- Tersedia di semua platform

#### Akun
- Login Google, Apple, Email
- Dapatkan Kertas tambahan dengan menautkan akun media sosial

#### Dukungan Multi-bahasa
- 한국어, English, 日本語
- Deutsch, Français, Español, Português

</div>
</details>

<div class="changelog-footer">
<strong>Sarankan fitur baru!</strong> Bagikan ide Anda di <a href="/inventory/suggest/id/">Saran</a> dan kami akan secara aktif meninjau mereka.
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
