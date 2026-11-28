import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import HeroPrograms from "@/app/components/programs/HeroPrograms";

export default function ProgramsPage() {
  return (
    <main className="bg-[#FEFBF8] overflow-x-hidden font-sans">
      <Navbar />

      <HeroPrograms />
      {/* Nanti fitur anggota Tim 2 lainnya ditaruh di bawah baris ini */}

      <FooterSection />
    </main>
  );
}