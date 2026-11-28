import React from "react";

export default function HeroPrograms() {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center bg-[#FEFBF8] pt-28 pb-20 px-6 overflow-hidden">
      {/* Ambient Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-300/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-red-300/20 blur-3xl"
      />

      {/* ================= DEKORASI SISI KIRI ================= */}
      {/* Bintang Kiri Atas */}
      <img
        src="/vstock-programs-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-16 -left-8 sm:-left-4 md:left-0 w-36 sm:w-48 md:w-60 lg:w-64 object-contain opacity-95"
      />
      {/* vstock-programs-2 dirotasi 180 derajat dan ditempel rapat ke tepi kiri */}
      <img
        src="/vstock-programs-2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-4 -left-6 sm:-left-4 md:left-0 w-36 sm:w-48 md:w-56 lg:w-64 object-contain rotate-180 opacity-90"
      />

      {/* ================= DEKORASI SISI KANAN ================= */}
      {/* vstock-programs-4 dirotasi 180 derajat dan ditempel rapat ke tepi kanan */}
      <img
        src="/vstock-programs-4.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-12 -right-6 sm:-right-4 md:right-0 w-40 sm:w-52 md:w-64 lg:w-72 object-contain rotate-180 opacity-90"
      />
      {/* vstock-programs-6 ditempel rapat ke tepi kanan bawah dan diperbesar sedikit */}
      <img
        src="/vstock-programs-6.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-6 -right-6 sm:-right-4 md:right-0 w-36 sm:w-44 md:w-52 lg:w-60 object-contain opacity-95"
      />

      {/* ================= KONTEN UTAMA DI TENGAH ================= */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200/80 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-700">
            Explore 8EH Radio ITB
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-neutral-900 tracking-tight leading-[1.1]">
          Our{" "}
          <span className="italic bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent pr-1">
            Programs
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed font-normal">
          Suara kreatif mahasiswa ITB dalam beragam program siaran, bincang santai, kurasi musik, hingga podcast inspiratif setiap minggunya.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#programs-list"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-orange-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-neutral-900/15 hover:shadow-orange-600/25 transition-all duration-300"
          >
            <span>Jelajahi Program</span>
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}