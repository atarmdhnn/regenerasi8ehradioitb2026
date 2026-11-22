import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import ProgramsHero from "@/app/components/programs/ProgramsHero";
import ProgramList from "@/app/components/programs/ProgramList";
import ProgramVideos from "@/app/components/programs/ProgramVideos";
import FeaturedPrograms from "@/app/components/programs/FeaturedPrograms";
import YoutubeCTA from "@/app/components/programs/YoutubeCTA";

// Halaman ini sudah disiapkan. Kerjakan fiturmu di file komponennya masing-masing
// (folder app/components/programs/), bukan di file ini.
export default function ProgramsPage() {
  return (
    <main className="bg-[#FEFBF8] overflow-x-hidden font-sans">
      <Navbar />

      <ProgramsHero /> {/* P1 */}
      <ProgramList /> {/* P2 */}
      <ProgramVideos /> {/* P3 */}
      <FeaturedPrograms /> {/* P4 */}
      <YoutubeCTA /> {/* P5 */}

      <FooterSection />
    </main>
  );
}
