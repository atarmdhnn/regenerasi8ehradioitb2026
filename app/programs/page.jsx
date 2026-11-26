import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";

export default function ProgramsPage() {
  return (
    <main className="bg-[#FEFBF8] overflow-x-hidden font-sans">
      <Navbar />
      <style>{`
      .h1 {
      font-size: 10rem;
      font-weight:bold}
      `}<style></style></style>
      {/* TODO: Bangun ulang halaman "Our Programs" di sini. */}
      <section className="min-h-screen" />
      <h1>Mari temukan program yang sesuai dengan keinginanmu!</h1>

      <FooterSection />
    </main>
  );
}
