import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import LearnMoreButton from "./LearnMoreButton";

{/* function SVG buat icon vector */}
function Icon({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
{/* function tambahan buat icon vector stroke dalam path*/}
function Path(props) {
  return (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} {...props} />
  );
}

{/* Icon email */}
const IconEmail = () => (
  <Icon>
    <Path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </Icon>
);
{/* Icon telfon */}
const IconTelfon = () => (
  <Icon>
    <Path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </Icon>
);
{/* Icon lokasi */}
const IconLokasi = () => (
  <Icon>
    <Path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <Path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </Icon>
);

const decorations = [
  { src: "/vstock-aboutus-1.svg", className: "hidden md:block right-[10%] top-8 w-28 -rotate-12" },
  { src: "/vstock-aboutus-2.svg", className: "-right-10 bottom-[12%] w-32 rotate-12 md:-right-12 md:w-52" },
  { src: "/vstock-aboutus-3.svg", className: "-left-12 top-4 w-36 -scale-x-100 md:-left-10 md:w-60" },
  { src: "/vstock-aboutus-4.svg", className: "hidden md:block left-[14%] bottom-12 w-16 -rotate-12" },
];

//icons discover
const phoneicon = ({ className }) => (
  <svg 
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
</svg>
);

// bagian discover 8eh
const discover8eh = [
  {
    num: 1,
    icon: phoneicon,
    title: "Creative Content Hub",
    description: "Sebagai radio mahasiswa pertama di ITB, 8EH Radio hadir untuk menghadirkan konten yang tidak hanya menghibur, tapi juga menggugah pikiran dan menyuarakan aspirasi kampus.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>

        {/* TODO: Bangun ulang halaman "About Us" di sini. */}

        <section className="min-h-screen" />

        <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 text-center text-white bg-[radial-gradient(ellipse_at_50%_40%,#F7931E_0%,#F15A24_40%,#ffffff_85%)]">
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





        
{/* MANAGEMENT BOARD SECTION */}
<section id="management-board" className="bg-white py-24 px-6">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="font-accent text-4xl md:text-5xl font-bold tracking-wide text-gray-900">
        MANAGEMENT BOARD
      </h2>

      <p className="font-body text-sm md:text-base text-gray-500 mt-3">
        Temui para personel keren dibalik 8EH Radio ITB
      </p>
    </div>

    {/* Organization Chart */}
    <div className="flex flex-col items-center">

      {/* General Manager */}
      <div className="bg-red-600 text-white rounded-xl px-10 py-5 text-center shadow-md hover:-translate-y-1 transition duration-300">
        <h3 className="font-bold text-sm">
          General Manager
        </h3>
      </div>

      {/* Connector */}
      <div className="w-0.5 h-10 bg-red-300"></div>

      {/* Division Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">

        {[
          "General Secretary",
          "Human Resource Development Director",
          "Research & Development Director",
          "Brand Awareness Director",
          "Station Director",
          "Public Relations Director",
        ].map((division, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center"
          >

            {/* Small connector */}
            <div className="w-0.5 h-5 bg-red-300"></div>

            {/* Division Card */}
            <div className="w-full min-h-24 flex items-center justify-center text-center bg-red-600 text-white rounded-xl p-4 shadow-md hover:bg-red-700 hover:-translate-y-2 transition-all duration-300 cursor-pointer">

              <h3 className="font-body font-semibold text-xs md:text-sm">
                {division}
              </h3>

            </div>
          </div>
        ))}

      </div>

    </div>
  </div>
</section>

        


        



      


        {/* Bagian discover */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx auto">

            <h2 className="text-3xl font-bold text-center mb-12">
              Discover the vibrant world of 8EH Radio ITB

              <div className="grid grid=cols-1 md:grid-cols-3 gap-8">

                {discover8eh.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.num}
                      className="p-8 rounded-2xl border-gray-200 hover:-translate-y-3 hover:shadow-xl transition-all duration-300"
                    >
                      <icon className="w-10 h-10 mb-6 text orange-500" />
                      <h3 className="text-xl font-bold mb-3">
                        {card.title}
                      </h3>

                      <p className="text-gray-600">
                        {card.description}
                      </p>
                    </div>
                  );
                })}

              </div>
            </h2>
          </div>
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
                <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600"><IconEmail/></div>
                <div>
                  <h3 className="font-body font-bold text-lg text-gray-900 mb-1">Email</h3>
                  <a href="mailto:8eh_itb@km.itb.ac.id" className="font-body text-gray-700 hover:underline">8eh_itb@km.itb.ac.id</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600"><IconTelfon/></div>
                <div>
                  <h3 className="font-body font-bold text-lg text-gray-900 mb-1">Phone</h3>
                  <a href="https://wa.me/6281584225370" target="_blank" rel="noopener noreferrer" className="font-body text-gray-700 hover:underline">+6281584225370</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600"><IconLokasi/></div>
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
