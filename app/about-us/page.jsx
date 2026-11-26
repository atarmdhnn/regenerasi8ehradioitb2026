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
      </main>

      <FooterSection />
    </div>
  );
}
