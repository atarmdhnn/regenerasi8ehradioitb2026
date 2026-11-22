# Tugas Regenerasi 8EH Radio ITB 2026

Selamat datang di tim Teknik 8EH! 👋

Repo ini adalah salinan website **8EH Radio ITB** (https://www.8ehradioitb.com). Dua halaman sengaja dikosongkan, dan tugasmu adalah **membangun ulang kedua halaman itu**:

| Halaman | File yang dikerjakan | Buka di browser |
| --- | --- | --- |
| Our Programs | `app/programs/page.jsx` | http://localhost:3000/programs |
| About Us | `app/about-us/page.jsx` | http://localhost:3000/about-us |

Navbar (header) dan Footer sudah ada. Kamu cukup mengisi bagian di antaranya (yang ditandai `TODO`).

---

## 1. Siapkan alat

Pasang dulu:

- **Git**: https://git-scm.com/downloads
- **Bun**: https://bun.sh (dipakai untuk menjalankan proyek)
- **Code editor**: disarankan VS Code (https://code.visualstudio.com)
- **Akun GitHub**

Cek instalasi di terminal:

```bash
git --version
bun --version
```

## 2. Fork lalu clone repo

1. Buka https://github.com/atarmdhnn/regenerasi8ehradioitb2026
2. Klik tombol **Fork** (kanan atas). Sekarang kamu punya salinan sendiri di akunmu.
3. Clone fork milikmu (ganti `USERNAME-KAMU`):

```bash
git clone https://github.com/USERNAME-KAMU/regenerasi8ehradioitb2026.git
cd regenerasi8ehradioitb2026
```

Kamu bekerja langsung di branch `main` milik fork-mu. Tidak perlu membuat branch.

## 3. Jalankan website

```bash
bun install
bun dev
```

Tidak perlu menyiapkan file `.env`. Langsung buka:

- http://localhost:3000/programs
- http://localhost:3000/about-us

Kedua halaman masih kosong, hanya ada Navbar dan Footer. Setiap kali kamu menyimpan file, browser otomatis ter-update.

> Tanpa `.env`, website tidak tersambung ke database. Karena itu **beranda (`/`), blog, podcast, login, dan pemutar radio tidak berfungsi**. Ini normal dan tidak perlu diperbaiki: tugasmu hanya di dua halaman di atas.

Untuk menghentikan server, tekan `Ctrl + C` di terminal.

## 4. Kerjakan tugasnya

Setiap halaman punya lima fitur wajib, jadi totalnya sepuluh fitur. Desain dan tata letak bebas dikreasikan, asal semua fitur ada dan berfungsi. Kamu boleh melihat website asli sebagai inspirasi, tapi **tulis kodenya sendiri**.

### Ringkasan fitur

| No | Fitur | Halaman | Konsep yang dilatih |
| --- | --- | --- | --- |
| P1 | Hero halaman Programs | Our Programs | Layout, gambar dekorasi dengan `position: absolute` |
| P2 | Slider tujuh program | Our Programs | Data array, `.map()`, komponen kartu, slider |
| P3 | Deretan video program | Our Programs | Scroll horizontal, `useRef` + `scrollBy` |
| P4 | Featured Programs | Our Programs | Grid responsif, background image, link keluar |
| P5 | Ajakan Join Us on YouTube | Our Programs | Layout dua kolom, tombol link |
| A1 | Hero dengan tombol Learn More | About Us | Layout layar penuh, `useRef`, smooth scroll |
| A2 | Timeline sejarah interaktif | About Us | `useState`, `onClick`, tampilan kondisional |
| A3 | Management Board | About Us | Import data JSON, data bertingkat |
| A4 | Discover 8EH | About Us | Kartu dengan ikon, efek hover |
| A5 | Kontak dan lokasi | About Us | `mailto:`, link WhatsApp, embed Google Maps |

### Halaman Our Programs

#### P1. Hero halaman Programs

- **Isi:** judul pembuka halaman (misalnya "Our Programs" dengan subjudul "Explore 8EH Radio ITB") dan beberapa gambar dekorasi di sisi kiri/kanan.
- **Selesai jika:** judul tampil jelas di tengah, gambar dekorasi tidak menutupi teks, dan tampilan tetap rapi di HP.
- **Bahan:** `vstock-programs-1.png` sampai `vstock-programs-13.png` di `public/`.

#### P2. Slider tujuh program

- **Isi:** kartu untuk tujuh program: CTRL (Coba Tanya Radio Lo!), GWS (Gather With Us), WAVE, KisKasKus, OKB (Obrolan Kalcer ITB), KELAM (Kelana Malam), dan ONAIR. Tiap kartu berisi logo, nama, dan deskripsi singkat.
- **Selesai jika:** kartu bisa digeser dengan tombol kiri/kanan (di HP boleh digeser pakai jari), dan data program disimpan di satu array lalu ditampilkan dengan `.map()`.
- **Bahan:** `ctrl-logo.png`, `gws-logo.png`, `logo-wave.webp`, `logo-kiskaskus.webp`, `logo-okb.webp`, `logo-kelam.webp`, `logo-onair.webp` di `public/`. Library `swiper` sudah terpasang kalau mau dipakai.

#### P3. Deretan video program

- **Isi:** judul bagian (misalnya "Discover Our Exciting Programs at 8EH Radio ITB") dan minimal empat kartu video dari kanal YouTube 8EH (https://www.youtube.com/@8EHRadioITB). Tiap kartu berisi thumbnail dan judul video.
- **Selesai jika:** kartu berjajar menyamping, bisa digulir dengan tombol panah kiri/kanan, dan klik kartu membuka videonya di YouTube pada tab baru.
- **Bahan:** di website asli data video diambil dari database. Di tugas ini, tulis datanya sendiri di array. Thumbnail bisa diambil dari `https://img.youtube.com/vi/<ID_VIDEO>/hqdefault.jpg`; pakai tag `<img>` biasa, bukan `next/image`, karena domain itu belum diizinkan di konfigurasi.

#### P4. Featured Programs

- **Isi:** bagian berjudul "Featured Programs" dengan latar gambar dan tiga kartu gambar highlight. Tiap kartu membuka postingan di Instagram 8EH (https://instagram.com/8ehradioitb).
- **Selesai jika:** kartu berjajar di desktop dan menumpuk di HP, ada efek saat kursor diarahkan (hover), dan link terbuka di tab baru.
- **Bahan:** `highlights-bg.png`, `highlight-1.jpg`, `highlight-2.png`, `highlight-3.jpg` di `public/`.

#### P5. Ajakan Join Us on YouTube

- **Isi:** kotak ajakan berjudul "Join Us on Youtube" dengan kalimat singkat dan tombol ke https://www.youtube.com/@8EHRadioITB.
- **Selesai jika:** teks di kiri dan tombol di kanan pada desktop, bertumpuk di HP, dan tombol mengarah ke kanal yang benar.
- **Bahan:** `youtube.png` di `public/`.

### Halaman About Us

#### A1. Hero dengan tombol Learn More

- **Isi:** bagian pembuka layar penuh dengan judul besar "8EH Radio ITB", tagline singkat (misalnya tentang menyatukan komunitas ITB lewat konten kreatif), dan tombol "Learn More".
- **Selesai jika:** tombol "Learn More" menggulir halaman dengan halus ke bagian timeline (A2), dan judul tetap terbaca di HP.
- **Bahan:** `useRef` + `scrollIntoView({ behavior: "smooth" })`, komponen `ButtonPrimary`, gambar `vstock-aboutus-*.svg`.

#### A2. Timeline sejarah interaktif

- **Isi:** bagian "Our Journey" dengan tiga tombol tahun: **1963** (8EH didirikan mahasiswa Teknik Elektro ITB dan mendapat call sign "8EH"), **1978** (stasiun disegel karena aktivitas kritis pada masa Orde Baru), dan **1999** (8EH kembali mengudara di 107.9 FM).
- **Selesai jika:** mengklik satu tahun mengganti teks cerita yang tampil, dan tombol tahun yang aktif terlihat berbeda.
- **Bahan:** `useState` untuk tahun yang dipilih, gambar `mic-vstock.png`. Tambahkan `"use client";` di baris paling atas.

#### A3. Management Board

- **Isi:** bagian "Management Board" (subjudul: "Temui para personel keren dibalik 8EH Radio ITB") yang menampilkan pengurus: nama, jabatan, dan angkatan, plus link Instagram/LinkedIn kalau ada.
- **Selesai jika:** data diambil dari file JSON (bukan diketik ulang), semua pengurus tampil termasuk yang ada di dalam `children`, dan tampilan rapi di HP.
- **Bahan:** `public/data/management-board.json`, bisa di-import langsung: `import boardData from "@/public/data/management-board.json";`. Datanya bertingkat (General Manager, lalu `children` berisi divisi di bawahnya). Foto pengurus tidak tersedia tanpa `.env`, jadi pakai placeholder, misalnya lingkaran berisi inisial nama.

#### A4. Discover 8EH

- **Isi:** bagian "Discover the vibrant world of 8EH Radio ITB" dengan tiga kartu: **Creative Content Hub**, **Production Excellence**, dan **Interactive Community**. Tiap kartu berisi ikon, judul, dan deskripsi singkat.
- **Selesai jika:** tiga kartu berjajar di desktop dan menumpuk di HP, ada efek hover (misalnya kartu sedikit naik atau judul berubah warna), dan data kartu disimpan di array.
- **Bahan:** ikon bisa SVG dari https://heroicons.com atau emoji; gambar `vstock-3.png` dan `vstock-4.png` untuk dekorasi.

#### A5. Kontak dan lokasi

- **Isi:** bagian "Get in Touch" berisi email (`8eh_itb@km.itb.ac.id`), WhatsApp, alamat studio, dan peta lokasi studio di ITB.
- **Selesai jika:** klik email membuka aplikasi email (`mailto:`), klik WhatsApp membuka chat (`https://wa.me/...`), dan peta Google Maps tampil lewat `<iframe>`.
- **Bahan:** buka Google Maps, cari lokasi studio, pilih **Share → Embed a map**, lalu salin kode `<iframe>`-nya.

### Bonus (tidak wajib)

Kalau masih ada waktu, tambahkan bagian testimoni "Student Voices" di About Us: kartu berisi kutipan, nama, foto, dan bintang lima.

### Aturan

- ✅ Ubah `app/programs/page.jsx` dan `app/about-us/page.jsx`.
- ✅ Boleh membuat komponen baru, simpan di `app/components/programs/` atau `app/components/about-us/`.
- ✅ Boleh menambah gambar baru ke folder `public/`.
- ❌ Jangan mengubah `Navbar`, `FooterSection`, `app/layout.js`, atau file lain di luar tugas.
- Pertahankan `<Navbar />` di atas dan `<FooterSection />` di bawah.
- Tampilan harus rapi di **desktop dan HP** (cek pakai DevTools browser → toggle device toolbar).

### Bahan yang sudah tersedia

- **Styling:** proyek ini memakai **Tailwind CSS**. Tulis class langsung di `className`, contoh: `className="text-2xl font-bold text-center"`. Dokumentasi: https://tailwindcss.com/docs
- **Gambar:** sudah ada di folder `public/`, misalnya `vstock-programs-*.png`, `vstock-aboutus-*.svg`, `mic-vstock.png`, `youtube.png`. Panggil dengan path diawali `/`, contoh `/mic-vstock.png`.
- **Komponen gambar:** pakai `Image` dari `next/image`:

  ```jsx
  import Image from "next/image";

  <Image src="/mic-vstock.png" alt="Mikrofon" width={400} height={300} />
  ```

- **Komponen siap pakai** di `app/components/`, misalnya `ButtonPrimary.jsx`. Buka filenya untuk melihat cara pakainya.
- **Contoh halaman lain** untuk referensi gaya: `app/page.jsx` (beranda), `app/faq/`, `app/agency/`.
- Kalau memakai `useState`, `useEffect`, atau event seperti `onClick`, tambahkan `"use client";` di baris paling atas file.

### Tips

- Kerjakan per bagian (section) dan cek di browser setiap selesai satu bagian.
- Commit sedikit-sedikit, jangan menunggu semua selesai:

  ```bash
  git add app/programs app/about-us app/components public
  git commit -m "feat(programs): tambah hero section"
  git push
  ```

- Sebelum menyerahkan, pastikan proyek bisa di-build tanpa error (hentikan `bun dev` dulu dengan `Ctrl + C`):

  ```bash
  bun run build
  ```

  Kalau build gagal dengan error soal `next/font/google`, biasanya karena internet putus saat mengunduh font. Cek koneksi lalu jalankan ulang.

## 5. Kumpulkan

1. Pastikan semua perubahan sudah di-`push` ke fork-mu.
2. Buka fork-mu di GitHub, klik **Contribute → Open pull request**. Pastikan arahnya ke `atarmdhnn/regenerasi8ehradioitb2026` branch `main`.
3. Judul PR: `Tugas Regenerasi - Nama Lengkap`
4. Di deskripsi PR, sertakan:
   - Screenshot kedua halaman (desktop dan HP)
   - Penjelasan singkat apa saja yang kamu buat
   - Kendala yang kamu temui (kalau ada)

PR tidak akan di-merge. PR dipakai untuk review dan feedback dari pengurus.

## Checklist sebelum mengumpulkan

- [ ] Halaman `/programs` sudah terisi dan tampil tanpa error
- [ ] Halaman `/about-us` sudah terisi dan tampil tanpa error
- [ ] Kesepuluh fitur (5 per halaman) ada dan memenuhi kriteria "Selesai jika"
- [ ] Navbar dan Footer tetap ada di kedua halaman
- [ ] Tampilan rapi di desktop dan HP
- [ ] Tidak ada file di luar tugas yang berubah
- [ ] `bun run build` berhasil
- [ ] PR sudah dibuat dengan screenshot

## Butuh bantuan?

- Dokumentasi Next.js: https://nextjs.org/docs
- Dokumentasi Tailwind CSS: https://tailwindcss.com/docs
- Belajar Git dasar: https://docs.github.com/en/get-started/using-git
- Kalau mentok, tanya ke pengurus Teknik 8EH. Bertanya itu bagian dari belajar!

Semangat! 📻
