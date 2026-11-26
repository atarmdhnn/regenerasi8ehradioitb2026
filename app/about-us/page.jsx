import LearnMoreButton from "./LearnMoreButton";

function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      {/* Opsional: gambar dekorasi vstock-aboutus-*.svg
          taruh di sini dengan "absolute z-0" dan "pointer-events-none" */}

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-7xl">
          8EH Radio ITB
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-2xl">
          Menyatukan komunitas ITB lewat konten kreatif.
        </p>
        <div className="mt-8 flex justify-center">
          <LearnMoreButton />
        </div>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />

      {/* SEMENTARA untuk tes, hapus sebelum commit */}
      <section id="our-journey" className="flex h-screen items-center justify-center">
        Test
      </section>
    </main>
  );
}