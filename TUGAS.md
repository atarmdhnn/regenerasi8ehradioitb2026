# Tugas Regenerasi 8EH Radio ITB 2026

Selamat datang di tim Teknik 8EH! 👋

Repo ini adalah salinan website **8EH Radio ITB** (https://www.8ehradioitb.com). Dua halaman sengaja dikosongkan, dan **tim kalian** bertugas membangun ulang kedua halaman itu:

| Halaman | File yang dikerjakan | Buka di browser |
| --- | --- | --- |
| Our Programs | `app/programs/page.jsx` | http://localhost:3000/programs |
| About Us | `app/about-us/page.jsx` | http://localhost:3000/about-us |

Setiap halaman punya **lima fitur**, jadi totalnya **sepuluh fitur** per tim. Navbar dan Footer sudah ada; kalian mengisi bagian di antaranya yang ditandai `TODO`.

Setiap tim bekerja di branch-nya sendiri, misalnya `tim-1/main`, dan setiap anggota membuat branch fitur dari situ.

---

## 1. Siapkan alat

Pasang dulu:

- **Git**: https://git-scm.com/downloads
- **Bun**: https://bun.sh (dipakai untuk menjalankan proyek)
- **Code editor**: disarankan VS Code (https://code.visualstudio.com)
- **Akun GitHub**, lalu kirim username-mu ke pengurus supaya diundang ke repo. Terima undangannya lewat email atau https://github.com/notifications.

Cek instalasi di terminal:

```bash
git --version
bun --version
```

## 2. Clone repo dan masuk ke branch tim

Contoh di bawah memakai **tim 1**. Ganti `tim-1` dengan nomor timmu.

**Ketua tim** (sekali saja) membuat branch tim dari `main`:

```bash
git clone https://github.com/atarmdhnn/regenerasi8ehradioitb2026.git
cd regenerasi8ehradioitb2026
git checkout -b tim-1/main
git push -u origin tim-1/main
```

**Anggota tim** (setelah ketua selesai):

```bash
git clone https://github.com/atarmdhnn/regenerasi8ehradioitb2026.git
cd regenerasi8ehradioitb2026
git checkout tim-1/main
```

> ⚠️ Jangan pernah push atau merge ke `main`. Semua pekerjaan tim ada di branch `tim-<nomor>/...`.

## 3. Jalankan website

```bash
bun install
bun dev
```

Tidak perlu menyiapkan file `.env`. Langsung buka:

- http://localhost:3000/programs
- http://localhost:3000/about-us

Kedua halaman masih kosong, hanya ada Navbar dan Footer. Setiap kali kamu menyimpan file, browser otomatis ter-update.

> Tanpa `.env`, website tidak tersambung ke database. Karena itu **beranda (`/`), blog, podcast, login, dan pemutar radio tidak berfungsi**. Ini normal dan tidak perlu diperbaiki: tugas kalian hanya di dua halaman di atas.

Untuk menghentikan server, tekan `Ctrl + C` di terminal.

## 4. Bagi tugas di tim

Bagi sepuluh fitur ke semua anggota. Contoh pembagian:

| Jumlah anggota | Contoh pembagian |
| --- | --- |
| 5 orang | Masing-masing 2 fitur: P1+P2, P3+P4, P5+A1, A2+A3, A4+A5 |
| 4 orang | 3 + 3 + 2 + 2 fitur |
| 3 orang | 4 + 3 + 3 fitur |

Semua fitur satu halaman ada di file `page.jsx` yang sama, jadi beberapa anggota akan mengedit file yang sama. Supaya tidak sering conflict:

- Buat setiap fitur sebagai komponen sendiri **di dalam** `page.jsx` (misalnya `function ProgramList() { ... }`), lalu panggil berurutan di bagian `return` halaman.
- Sepakati dulu urutan fitur dan nama komponennya sebelum mulai, lalu ketua tim memasang kerangkanya (komponen kosong) di branch tim.
- Sering `git pull` dari branch tim, dan merge PR yang sudah siap secepatnya.

Tombol Learn More di A1 menggulir ke bagian A2, jadi bagian A2 harus memakai `id="our-journey"`.

## 5. Kerjakan fiturmu

Desain dan tata letak bebas dikreasikan, asal semua fitur ada dan berfungsi. Sepakati gaya bersama di tim (warna, font, jarak antarbagian) supaya halaman terlihat menyatu. Kalian boleh melihat website asli sebagai inspirasi, tapi **tulis kodenya sendiri**.

### Daftar fitur

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

### Detail fitur: Our Programs

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

### Detail fitur: About Us

#### A1. Hero dengan tombol Learn More

- **Isi:** bagian pembuka layar penuh dengan judul "8EH Radio ITB", tagline singkat (misalnya tentang menyatukan komunitas ITB lewat konten kreatif), dan tombol "Learn More".
- **Selesai jika:** tombol "Learn More" menggulir halaman dengan halus ke bagian timeline (A2), dan judul tetap terbaca di HP.
- **Bahan:** bagian A2 memakai `id="our-journey"`, jadi tombolnya cukup memanggil `document.getElementById("our-journey").scrollIntoView({ behavior: "smooth" })`. Komponen `ButtonPrimary` dan gambar `vstock-aboutus-*.svg` bisa dipakai.

#### A2. Timeline sejarah interaktif

- **Isi:** bagian "Our Journey" dengan tiga tombol tahun: **1963** (8EH didirikan mahasiswa Teknik Elektro ITB dan mendapat call sign "8EH"), **1978** (stasiun disegel karena aktivitas kritis pada masa Orde Baru), dan **1999** (8EH kembali mengudara di 107.9 FM).
- **Selesai jika:** mengklik satu tahun mengganti teks cerita yang tampil, tombol tahun yang aktif terlihat berbeda, dan bagian ini memakai `id="our-journey"` (dituju tombol Learn More di A1).
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

Kalau masih ada waktu, tambahkan bagian testimoni "Student Voices" di About Us: kartu berisi kutipan, nama, foto, dan bintang lima. Letakkan sebelum bagian Kontak dan lokasi (A5).

### Aturan

- ✅ Kerjakan fitur di `app/programs/page.jsx` dan `app/about-us/page.jsx`.
- ✅ Boleh membuat komponen pendukung di file terpisah, simpan di `app/components/programs/` atau `app/components/about-us/`.
- ✅ Boleh menambah gambar baru ke folder `public/`.
- ❌ Jangan mengubah `Navbar`, `FooterSection`, `app/layout.js`, atau file lain di luar tugas.
- ❌ Jangan menghapus atau mengubah bagian fitur milik anggota lain tanpa izinnya.
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

## 6. Alur Git untuk setiap fitur

Ulangi langkah ini untuk setiap fitur yang kamu kerjakan. Contoh: fitur P2 di tim 1.

1. **Ambil versi terbaru branch tim**, lalu buat branch fitur:

   ```bash
   git checkout tim-1/main
   git pull
   git checkout -b tim-1/p2-slider
   ```

2. **Kerjakan dan commit sedikit-sedikit:**

   ```bash
   git add app/programs/page.jsx
   git commit -m "feat(P2): tambah kartu program"
   ```

3. **Push branch fiturmu:**

   ```bash
   git push -u origin tim-1/p2-slider
   ```

4. **Buka pull request ke branch tim.** Di GitHub, klik **Compare & pull request**. Pastikan **base** = `tim-1/main` (bukan `main`!) dan **compare** = `tim-1/p2-slider`. Judul: `P2: Slider tujuh program`.
5. **Minta review** ke minimal satu anggota tim. Setelah disetujui, klik **Merge pull request**.
6. Lanjut ke fitur berikutnya dari langkah 1.

**Sebelum membuka PR**, gabungkan dulu perubahan terbaru dari branch tim ke branch fiturmu, supaya conflict diselesaikan di branch-mu sendiri:

   ```bash
   git pull origin tim-1/main
   ```

**Kalau terjadi conflict**, Git akan menandai bagian yang bentrok di `page.jsx`. Pertahankan kode milikmu dan kode anggota lain, hapus tanda `<<<<<<<`, `=======`, `>>>>>>>`, lalu commit. Kalau ragu, selesaikan bersama anggota yang kodenya bentrok, atau tanya pengurus.

**Sebelum membuka PR**, pastikan proyek bisa di-build tanpa error (hentikan `bun dev` dulu dengan `Ctrl + C`):

```bash
bun run build
```

Kalau build gagal dengan error soal `next/font/google`, biasanya internet putus saat mengunduh font. Cek koneksi lalu jalankan ulang.

## 7. Kumpulkan

Setelah kesepuluh fitur sudah di-merge ke `tim-1/main`, **ketua tim** membuka pull request pengumpulan:

1. Di GitHub, buka tab **Pull requests → New pull request**.
2. Pilih **base** = `main` dan **compare** = `tim-1/main`.
3. Judul: `Tim 1 - Tugas Regenerasi`.
4. Di deskripsi PR, sertakan:
   - Daftar anggota tim dan fitur yang dikerjakan masing-masing
   - Screenshot kedua halaman (desktop dan HP)
   - Kendala yang ditemui tim, kalau ada

PR ini **tidak akan di-merge**. PR dipakai pengurus untuk review dan feedback. Riwayat PR fitur di branch tim juga ikut dinilai, jadi pastikan setiap anggota membuka PR untuk fiturnya sendiri.

## Checklist sebelum mengumpulkan

- [ ] Halaman `/programs` dan `/about-us` tampil tanpa error
- [ ] Kesepuluh fitur (5 per halaman) ada dan memenuhi kriteria "Selesai jika"
- [ ] Setiap anggota punya minimal satu PR fitur yang sudah di-merge
- [ ] Setiap fitur masuk lewat PR ke `tim-<nomor>/main` dan sudah di-review anggota lain
- [ ] Navbar dan Footer tetap ada di kedua halaman
- [ ] Tampilan rapi di desktop dan HP
- [ ] Tidak ada file di luar tugas yang berubah
- [ ] `bun run build` berhasil di branch `tim-<nomor>/main`
- [ ] PR pengumpulan `tim-<nomor>/main` → `main` sudah dibuat dengan screenshot

## Butuh bantuan?

- Dokumentasi Next.js: https://nextjs.org/docs
- Dokumentasi Tailwind CSS: https://tailwindcss.com/docs
- Belajar Git dasar: https://docs.github.com/en/get-started/using-git
- Belajar pull request: https://docs.github.com/en/pull-requests
- Kalau mentok, tanya ke pengurus Teknik 8EH. Bertanya itu bagian dari belajar!

Semangat! 📻

---

## Catatan untuk pengurus

- Undang semua peserta sebagai collaborator: **Settings → Collaborators → Add people**.
- Lindungi branch `main` supaya peserta tidak bisa push atau merge ke sana: **Settings → Rules → Rulesets → New branch ruleset**, target `main`, aktifkan **Restrict updates** dan **Restrict deletions**, lalu tambahkan dirimu ke **Bypass list**.
- Umumkan nomor tim dan ketua tim masing-masing.
- Saat menilai, buka PR `tim-<nomor>/main → main` setiap tim, dan cek PR fitur di branch tim untuk melihat kontribusi tiap anggota.
