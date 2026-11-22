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

## 3. Siapkan file `.env`

Salin contoh file environment:

```bash
cp .env.example .env
```

Lalu isi nilainya. **Nilai `.env` minta ke pengurus**, akan dibagikan lewat jalur privat.

> ⚠️ Jangan pernah commit atau membagikan file `.env` ke siapa pun. File ini berisi kunci rahasia dan sudah otomatis diabaikan Git.

## 4. Jalankan website

```bash
bun install
bun dev
```

Buka http://localhost:3000. Coba klik ke **Programs** dan **About Us**: halamannya masih kosong, hanya ada Navbar dan Footer. Setiap kali kamu menyimpan file, browser otomatis ter-update.

Untuk menghentikan server, tekan `Ctrl + C` di terminal.

## 5. Kerjakan tugasnya

### Yang harus dibuat

**Our Programs** (`app/programs/page.jsx`): halaman yang memperkenalkan program-program siaran 8EH, misalnya:
- Hero / judul halaman
- Daftar program (podcast, siaran, dll.)
- Highlight atau dokumentasi kegiatan
- Ajakan (CTA) untuk menonton YouTube 8EH: https://www.youtube.com/@8EHRadioITB

**About Us** (`app/about-us/page.jsx`): halaman tentang 8EH, misalnya:
- Hero / perkenalan 8EH Radio ITB
- Sejarah singkat 8EH (berdiri 1963, call sign "8EH", kembali mengudara 1999)
- Visi / nilai organisasi
- Lokasi studio (bisa pakai embed Google Maps)

Isi dan desain bebas dikreasikan. Kamu boleh melihat website asli sebagai inspirasi, tapi **tulis kodenya sendiri**.

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

## 6. Kumpulkan

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
- [ ] Navbar dan Footer tetap ada di kedua halaman
- [ ] Tampilan rapi di desktop dan HP
- [ ] Tidak ada file di luar tugas yang berubah
- [ ] File `.env` **tidak** ikut ter-commit
- [ ] `bun run build` berhasil
- [ ] PR sudah dibuat dengan screenshot

## Butuh bantuan?

- Dokumentasi Next.js: https://nextjs.org/docs
- Dokumentasi Tailwind CSS: https://tailwindcss.com/docs
- Belajar Git dasar: https://docs.github.com/en/get-started/using-git
- Kalau mentok, tanya ke pengurus Teknik 8EH. Bertanya itu bagian dari belajar!

Semangat! 📻
