# Strategi Penghematan, Meminimalisir Fraud, dan Goals

**Divisi:** IT  
**Nama:** Andri Rosandi  
**Posisi:** IT Support & Fullstack Developer  
**Tanggal:** 14 Desember 2025

---

## 1. Strategi Penghematan Perusahaan

### 1.1 Jalankan Orlansoft Web

**Kondisi Saat Ini:**

Perusahaan saat ini masih menggunakan Orlansoft versi desktop yang dirilis pada tahun 2008 dan sudah tidak lagi mendapatkan dukungan resmi dari pengembang. Pengoperasiannya mengharuskan user untuk mengakses sistem melalui Remote Desktop, sehingga menambah beban infrastruktur, memperlambat proses kerja, dan meningkatkan risiko gangguan operasional.

Padahal, perusahaan sudah memiliki lisensi resmi Orlansoft Web - versi terbaru yang masih didukung penuh serta memiliki fitur dan keamanan yang lebih modern.

**Dampak Penghematan:**

| Aspek | Dampak |
|-------|--------|
| **Infrastruktur** | Menghilangkan ketergantungan pada Remote Desktop - user dapat mengakses langsung melalui browser, lebih cepat dan lebih ringan |
| **Dukungan** | Mendapat update fitur dan patch keamanan terbaru dari pengembang |
| **Keamanan** | Sistem berbasis web memiliki keamanan modern, berbeda dengan versi desktop lama yang tidak di-support |
| **Operasional** | Mengurangi risiko gangguan operasional - tidak ada lagi masalah session RDP putus, server lambat, atau remote error |
| **Fleksibilitas** | Akses lebih fleksibel dan tidak bergantung pada PC tertentu - cukup browser, tanpa instalasi aplikasi |
| **Investasi** | Pemanfaatan lisensi Orlansoft Web yang sudah dibayar menjadi optimal |

**Fitur Tambahan yang Bisa Dimanfaatkan:**

- **Fitur DO (Delivery Order):** Mendukung alur SO → DO → Shipment, kontrol barang keluar lebih terstruktur, pengiriman lebih cepat dan risiko retur menurun
- **Export ke Template DJP/Coretax:** Input pajak lebih cepat, minim risiko kesalahan manual, pelaporan pajak lebih tepat waktu
- **Fitur Akses Gudang:** Kontrol user yang dapat mengakses gudang lebih terstruktur
- **Workflow Terintegrasi:** Memungkinkan integrasi ke sistem lain seperti WhatsApp atau aplikasi penunjang lainnya

**Status:** Divisi IT sudah menyediakan dan men-setting Orlansoft Web. Saat ini sedang dalam proses input data oleh tim magang.

---

### 1.2 Gabungkan Lokasi Server

**Kondisi Saat Ini:**

Saat ini server perusahaan ditempatkan di dua lokasi, yaitu di rumah PIK dan di kantor TPI. Kondisi ini menimbulkan kebutuhan perawatan ganda, potensi hambatan koneksi, serta biaya operasional yang lebih tinggi.

**Rekomendasi:**

Memusatkan seluruh server ke satu lokasi di ruang server TPI yang sudah memiliki fasilitas listrik dan genset yang memadai.

**Dampak Penghematan:**

| Aspek | Dampak |
|-------|--------|
| **Listrik** | Penghematan listrik karena hanya satu lokasi yang beroperasi |
| **Waktu** | Penghematan waktu dalam perawatan, monitoring, dan troubleshooting |
| **Biaya Operasional** | Penghematan biaya operasional dan peralatan pendukung |
| **Jaringan** | Traffic jaringan menjadi lebih lancar dan minim delay |
| **Stabilitas** | Penggunaan infrastruktur listrik lebih stabil berkat ketersediaan genset di TPI |
| **UPS** | UPS dapat digunakan lebih efektif karena dapat menjadi backup untuk seluruh server |
| **Ruang Server** | Pemanfaatan ruang server di kantor TPI yang lebih proper dan aman |
| **IP Public** | Jika server pindah ke office TPI maka tidak ada biaya penyewaan IP Public |

![Ilustrasi Konsolidasi Server](../public/server_consolidation.png)

---

### 1.3 Investasi Server Besar (Penghematan Jangka Panjang)

**Kondisi Saat Ini:**

Saat ini beberapa layanan perusahaan masih berjalan menggunakan komputer biasa yang difungsikan sebagai server. Penggunaan perangkat non-server ini membuat performa, keandalan, dan keamanan kurang optimal.

**Rekomendasi:**

Berinvestasi pada satu server besar berspesifikasi enterprise, sehingga seluruh sistem dapat dipusatkan dalam infrastruktur yang lebih kuat, stabil, dan sesuai standar operasional.

Server besar juga memungkinkan penggunaan virtual server (VM) dan multi-container (Docker/Podman), sehingga satu perangkat dapat menjalankan banyak layanan secara terpisah, terkontrol, dan lebih aman.

**Dampak Penghematan:**

| Aspek | Dampak |
|-------|--------|
| **Keandalan** | Jauh lebih tinggi karena server enterprise dirancang untuk beban kerja 24/7 |
| **Performa** | Meningkat signifikan, memungkinkan aplikasi berjalan lebih cepat dan responsif |
| **Down-time** | Risiko berkurang karena komponen yang lebih stabil (RAID, ECC RAM, hot-swap, dll) |
| **Listrik** | Penghematan karena menggantikan banyak komputer kecil dengan satu perangkat efisien |
| **Keamanan** | Lebih terjamin, tidak tersebar di banyak komputer yang rentan |
| **Maintenance** | Lebih mudah, cukup fokus pada 1 server saja |
| **Backup & Monitoring** | Lebih terpusat, mengurangi risiko data hilang |
| **Skalabilitas** | Lebih siap untuk upgrade dan menampung lebih banyak aplikasi ke depan |

---

## 2. Strategi Meminimalisir Fraud

### 2.1 Menjalankan Struktur Organisasi Sesuai Fungsinya

**Kondisi Saat Ini:**

Masih sering terjadi pemberian tugas langsung ke staf atau bahkan yang berbeda fungsi/divisi tanpa melalui atasan atau koordinator, sehingga pengawasan menjadi sulit dan penanggung jawab tidak jelas.

**Rekomendasi:**

Menjalankan struktur organisasi sesuai fungsinya, dimana setiap tugas disalurkan melalui jalur yang benar sehingga pembagian pekerjaan, monitoring, dan akuntabilitas menjadi lebih tertata dan terkendali.

**Dampak:**

| Aspek | Dampak |
|-------|--------|
| **Alokasi Pekerjaan** | Mengurangi potensi kesalahan, karena tugas dibagikan melalui jalur struktural |
| **Pengawasan** | Meningkat karena setiap tugas dipantau oleh koordinator atau pimpinan yang bertanggung jawab |
| **Akuntabilitas** | Lebih jelas, mudah mengetahui siapa memberi instruksi dan siapa wajib melapor |
| **Beban Kerja** | Menghindari overload pada staf tertentu karena koordinator dapat membagi tugas merata |
| **Efektivitas** | Meningkat karena staf fokus pada tugas yang tepat dan prioritas yang jelas |
| **Konflik Internal** | Berkurang karena tidak ada tugas yang datang tiba-tiba dari berbagai arah |
| **Fraud** | Diminimalisir karena tidak ada proses yang berjalan di luar pengetahuan atasan |
| **Budaya Kerja** | Mendukung budaya kerja profesional dan terstruktur |

**Pendukung Implementasi:**

Dapat dipertimbangkan penggunaan **software task management** untuk membantu monitoring progress tugas dan meningkatkan visibility antar level. Penggunaan software ini memungkinkan:
- Setiap tugas tercatat dan bisa dilacak progressnya
- Atasan dapat melihat status pekerjaan tim secara real-time
- Tidak ada tugas yang terlewat atau tidak diketahui

*Catatan: Perlu dilakukan riset, uji coba, dan evaluasi dengan beberapa divisi terlebih dahulu untuk menentukan software yang paling sesuai dengan kebutuhan perusahaan.*

---

### 2.2 Sistem Notifikasi Anomali Transaksi

**Konsep:**

Membangun sistem yang dapat mengirimkan peringatan otomatis kepada atasan apabila terjadi transaksi atau aktivitas yang tidak wajar (anomali) di sistem.

![Ilustrasi Sistem Notifikasi Anomali](../public/anomaly_notification.png)

**Contoh Anomali yang Dapat Dideteksi:**

| Jenis Anomali | Contoh |
|---------------|--------|
| Transaksi di luar jam kerja | Ada transaksi di waktu yang seharusnya tidak ada aktivitas |
| Void berulang | Pembatalan transaksi berkali-kali dalam waktu singkat |
| Perubahan data master | Pengubahan harga atau data penting secara mendadak |
| Saldo kas kecil tidak wajar | Saldo kas kecil yang terlalu besar atau tidak sesuai ketentuan |

**Dampak:**

| Sebelum | Sesudah |
|---------|---------|
| Anomali baru diketahui saat audit berkala | Anomali terdeteksi lebih dini, bahkan real-time |
| Atasan tidak tahu aktivitas di lapangan | Atasan mendapat notifikasi otomatis |
| Investigasi sulit karena sudah lama | Bisa langsung ditindaklanjuti saat kejadian |
| Potensi kerugian bisa membesar | Kerugian dapat diminimalisir sejak awal |

**Syarat dan Ketentuan Implementasi:**

1. **Migrasi ke Orlansoft Web** harus berjalan terlebih dahulu agar integrasi data dapat dilakukan dengan lebih mudah dan stabil
2. **Konsultasi dengan ahli/profesional** untuk mendapatkan insight mengenai:
   - Kelayakan dan kemungkinan implementasi sistem ini
   - Kondisi-kondisi apa saja yang perlu dipantau dan menjadi kriteria anomali
   - Best practice dalam penerapan sistem deteksi anomali
3. **Diskusi dengan divisi-divisi terkait** (Accounting, Sales, Warehouse, dll) untuk menentukan kriteria anomali yang relevan dengan kondisi perusahaan
4. **Uji kemapanan dan kelayakan sistem** sebelum penerapan penuh untuk memastikan akurasi deteksi dan menghindari false alarm

*Catatan: Implementasi sistem notifikasi anomali merupakan inisiatif yang cukup besar dan kompleks. Oleh karena itu, diperlukan kesiapan yang matang dari berbagai aspek - baik teknis, organisasi, maupun sumber daya - sebelum dapat dijalankan. Ini bukan proyek yang bisa dilakukan secara terburu-buru, melainkan perlu perencanaan dan eksekusi yang bertahap.*

---

## 3. Goals

### 3.1 Goals Sebagai Karyawan

Sebagai bagian dari divisi IT, berikut adalah goals yang ingin dicapai untuk mendukung kemajuan perusahaan:

#### Mempercepat Transformasi Digital Perusahaan

IT menyediakan dan mengimplementasikan sistem yang membuat proses bisnis lebih efisien dan otomatis. Termasuk di dalamnya:
- Migrasi dari Orlansoft Desktop ke Orlansoft Web
- Digitalisasi proses yang masih manual
- Penerapan paperless untuk efisiensi dokumentasi

#### Membuat Aplikasi Terintegrasi Sistem

Membangun aplikasi-aplikasi yang terintegrasi dengan ERP dan sistem lainnya untuk mendukung operasional sehari-hari. Contoh yang sudah berjalan:
- Aplikasi Barcode pada Shipment - untuk verifikasi pengiriman oleh security gudang
- Aplikasi Seal/Unseal - tracking aktivitas buka tutup gudang dan armada
- Aplikasi Reminder - notifikasi terjadwal untuk berbagai kebutuhan

#### Membangun Automation Penunjang Sistem

Membuat proses-proses otomatis yang mengurangi pekerjaan manual dan meminimalisir human error, seperti:
- Notifikasi otomatis
- Report terjadwal
- Integrasi antar sistem

#### Menyiapkan Infrastruktur Server yang Proper dan Handal

Memastikan infrastruktur IT berjalan stabil, aman, dan siap mendukung kebutuhan bisnis jangka panjang. Termasuk:
- Konsolidasi server ke satu lokasi
- Upgrade ke server enterprise
- Implementasi backup dan monitoring yang terpusat

---

### 3.2 Goals Sebagai Pribadi

Di luar tanggung jawab profesional, saya juga memiliki impian dan goals pribadi yang ingin dicapai:

#### Impian Jangka Panjang

Impian saya adalah **pensiun muda dan memiliki kesibukan berkebun bersama istri**. Ini adalah visi hidup yang sudah saya dan istri sepakati bersama. Sebuah kehidupan yang sederhana, bermakna, dan dekat dengan alam.

![Ilustrasi Impian Berkebun](../public/dream_gardening.png)

#### Fondasi Menuju Impian

Untuk mencapai impian tersebut, saya menyadari bahwa **fondasi financial harus dibangun dengan kuat terlebih dahulu**. Tidak ada jalan pintas - perlu kerja keras, pengembangan skill, dan perencanaan yang matang.

#### Pengembangan Skill

Untuk mempersiapkan masa depan, saya fokus mengembangkan skill yang lebih dari sekadar teknis:

| Skill | Penjelasan |
|-------|------------|
| **Business & Product Development** | Kemampuan membangun produk dari ide hingga implementasi, memahami kebutuhan user, dan menciptakan solusi yang bernilai |
| **Entrepreneurial Mindset** | Berpikir seperti pemilik bisnis - mempertimbangkan value, sustainability, dan dampak dari setiap keputusan |
| **SaaS Development** | Kemampuan membangun software sebagai layanan yang bisa berjalan secara mandiri dan scalable |

#### Hubungan dengan Kontribusi ke Perusahaan

**Goals pribadi dan goals sebagai karyawan tidak bertentangan, justru saling mendukung.**

Mindset entrepreneurial dan business thinking yang saya kembangkan justru membuat kontribusi ke perusahaan menjadi lebih valuable:

- Saya tidak hanya berpikir sebagai executor teknis, tapi juga mempertimbangkan value bisnis dari setiap solusi yang dibangun
- Setiap sistem yang dikembangkan dirancang dengan mempertimbangkan efisiensi, sustainability, dan dampak jangka panjang
- Pengalaman membangun produk membuat saya lebih memahami kebutuhan user dan bagaimana teknologi bisa menjawab masalah nyata

**Selama di perusahaan ini, saya akan memberikan yang terbaik.** Karena semakin besar kontribusi saya ke perusahaan, semakin banyak yang saya pelajari. Semakin perusahaan maju, semakin saya berkembang. Kesuksesan perusahaan adalah bagian dari perjalanan menuju impian saya.

---

## Penutup

Dokumen ini disusun sebagai bentuk pemikiran dan kontribusi untuk kemajuan perusahaan, sekaligus refleksi terhadap goals pribadi dan profesional. 

Strategi penghematan dan pencegahan fraud yang diusulkan bukan sekadar teori, melainkan berdasarkan observasi langsung terhadap kondisi perusahaan dan kapabilitas yang dimiliki oleh divisi IT.

Semoga dokumen ini dapat menjadi bahan diskusi dan pertimbangan untuk perbaikan bersama.

---

*Disusun oleh: Andri Rosandi*  
*IT Support & Fullstack Developer*  
*Desember 2025*
