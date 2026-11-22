import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import AboutHero from "@/app/components/about-us/AboutHero";
import JourneyTimeline from "@/app/components/about-us/JourneyTimeline";
import ManagementBoard from "@/app/components/about-us/ManagementBoard";
import DiscoverSection from "@/app/components/about-us/DiscoverSection";
import ContactSection from "@/app/components/about-us/ContactSection";

// Halaman ini sudah disiapkan. Kerjakan fiturmu di file komponennya masing-masing
// (folder app/components/about-us/), bukan di file ini.
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <AboutHero /> {/* A1 */}
      <JourneyTimeline /> {/* A2 */}
      <ManagementBoard /> {/* A3 */}
      <DiscoverSection /> {/* A4 */}
      <ContactSection /> {/* A5 */}

      <FooterSection />
    </div>
  );
}
