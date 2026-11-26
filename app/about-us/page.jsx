import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* TODO: Bangun ulang halaman "About Us" di sini. */}
      <section className="min-h-screen" />


      {/* Get In Touch. */}
      <section className="relative py-24 bg-gradient-to-b from-white via-yellow-100 to-orange-200">
        {/* Teks Awal. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl text-gray-800 tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="font-body text-gray-600 mb-16">
          We'd love to hear from you! Reach out for inquiries or collaborations.
        </p>
        </div>

        {/* List kontak, dibuat grid. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600">

              </div>

            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600">
                
              </div>

            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600">
                
              </div>

            </div>
          </div>
        </div>
        {/* google map. */}
        <div className="google-maps"></div>
      </section>

      <FooterSection />
    </div>
  );
}