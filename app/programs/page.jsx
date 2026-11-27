import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import OurPrograms from "../components/programs/OurPrograms";

export default function ProgramsPage() {
  return (
    <main className="bg-[#FEFBF8] overflow-x-hidden font-sans">
      <Navbar />

      <section className="hero-programs">
      </section>

      <section className="our-programs">
        <OurPrograms />
      </section>

      <section className="deretan-video">
      </section>

      <section className="featured-programs">
      </section>

      <section className="join-us">
      </section>

      <FooterSection />
    </main>
  );
}