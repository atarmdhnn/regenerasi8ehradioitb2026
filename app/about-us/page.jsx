import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import LearnMoreButton from "./LearnMoreButton";

const decorations = [
  { src: "/vstock-aboutus-1.svg", className: "hidden md:block right-[10%] top-8 w-28 -rotate-12" },
  { src: "/vstock-aboutus-2.svg", className: "-right-10 bottom-[12%] w-32 rotate-12 md:-right-12 md:w-52" },
  { src: "/vstock-aboutus-3.svg", className: "-left-12 top-4 w-36 -scale-x-100 md:-left-10 md:w-60" },
  { src: "/vstock-aboutus-4.svg", className: "hidden md:block left-[14%] bottom-12 w-16 -rotate-12" },
];
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>

        {/* TODO: Bangun ulang halaman "About Us" di sini. */}
        <section className="min-h-screen" />

        <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 text-center">
          {decorations.map(({ src, className }) => (
            <Image key={src} src={src} alt="" aria-hidden="true" width={400} height={400} className={`pointer-events-none absolute z-0 h-auto select-none ${className}`} />
          ))}

          <div className="relative z-10 max-w-5xl">
            <h1 className="font-accent text-6xl sm:text-7xl md:text-9xl">
              8EH Radio ITB
            </h1>
            <p className="font-body mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Menyatukan komunitas ITB lewat konten kreatif.
            </p>
            <div className="mt-8 flex justify-center">
              <LearnMoreButton />
            </div>
          </div>
        </section>

        <section id="our-journey" className="flex h-screen items-center justify-center">
          Test
        </section>


      {/* Get In Touch. */}
      <section className="relative py-24 bg-gradient-to-b from-white via-yellow-100 to-orange-200">
          {/* Teks Awal. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl text-gray-800 tracking-tight mb-4">
          Get in Touch</h2>
          <p className="font-body text-gray-600 mb-16">
          We'd love to hear from you! Reach out for inquiries or collaborations.</p>

          {/* List kontak, dibuat grid. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600">

                </div>
                <div>
                  <h3 className="font-body font-bold text-lg text-gray-900 mb-1">Email</h3>
                  <a href="mailto:8eh_itb@km.itb.ac.id" className="font-body text-gray-700 hover:underline">8eh_itb@km.itb.ac.id</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600">
                  
                </div>
                <div>
                  <h3 className="font-body font-bold text-lg text-gray-900 mb-1">Phone</h3>
                  <a href="https://wa.me/6281584225370" target="_blank" rel="noopener noreferrer" className="font-body text-gray-700 hover:underline">+6281584225370</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600">
                  
                </div>
                <div>
                  <h3 className="font-body font-bold text-lg text-gray-900 mb-1">Office</h3>
                  <p className="font-body text-gray-700">Jl. Ganesha No. 10, Bandung, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="peta-lokasi">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0148092434033!2d107.60949991669142!3d-6.8888290166063415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6578d4253e7%3A0x136b7b51bcb1002d!2sSunken%20Court%2C%20ITB!5e0!3m2!1sid!2sid!4v1795771797679!5m2!1sid!2sid"
            className="w-full h-100"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
            <style>{`
              .peta-lokasi {
              margin-top: 48px;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
              transition: all 0.3s;
              }

              .peta-lokasi:hover {
              transform: translateY(-8px);
              box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
              }
              `}</style>
          </div>
        </div>
      </section>
      </main>
      <FooterSection />
    </div>
  );
}