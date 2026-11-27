import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import HeroPrograms from "../components/programs/HeroPrograms";


export default function ProgramsPage() {
  return (
    <main className="bg-[#FEFBF8] overflow-x-hidden font-sans">
      <Navbar />

      <section className="hero-programs">
  <HeroPrograms />
</section>

      <section className="our-programs">

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
