import React from "react";

export default function HeroPrograms() {
  return (
    <section className="relative w-full bg-gradient-to-br from-neutral-950 via-red-950 to-orange-950 text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Bagian Kiri: Teks Utama */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full">
            8EH Radio ITB • On Air & Digital
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Explore <span className="text-orange-500">Our Programs</span>
          </h1>

          <p className="text-neutral-300 text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            Temukan berbagai program siaran unggulan, bincang santai, musik pilihan, hingga podcast kreatif khas kampus yang menemani harimu di 8EH Radio ITB.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#our-program"
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold transition shadow-lg shadow-orange-600/30"
            >
              Lihat Daftar Program
            </a>
            <a
              href="https://www.youtube.com/@8EHRadioITB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/15 transition"
            >
              Tonton di YouTube
            </a>
          </div>
        </div>

        {/* Bagian Kanan: Visual / Kartu Highlight */}
        <div className="flex-1 w-full max-w-md">
          <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-300">
                Edutainment & Campus Vibes
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Tune In to Your Favorite Show
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Dari informasi terkini seputar mahasiswa, obrolan musik lintas generasi, hingga segmen hiburan interaktif setiap minggunya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}