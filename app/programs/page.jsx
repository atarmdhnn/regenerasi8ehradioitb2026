import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import HeroPrograms from "@/app/components/programs/HeroPrograms"

export default function ProgramsPage() {
  return (
    <main className="bg-[#FEFBF8] overflow-x-hidden font-sans">
      <Navbar />

      <section className="hero-programs">
      <HeroPrograms/>
      </section>

      <section className="our-programs">

      </section>

      <section className="deretan-video">

      </section>

      <section className="featured-programs">

      </section>


<<<<<<< HEAD
      <section className="join-us w-full bg-[#FEFBF8] px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

          {/* Left Content */}
          <div className="w-full flex-1 text-center md:text-left">

            <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold tracking-wide text-red-600">
              8EH RADIO ITB
            </span>

            <h2 className="mb-4 text-3xl font-bold text-[#222222] md:text-4xl lg:text-5xl">
              Join Us on <span className="italic">YouTube</span>
            </h2>

            <p className="mb-6 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
              Get closer to 8EH Radio ITB! Explore our videos, discover exciting
              content, and enjoy every moment with us through our YouTube channel.
            </p>

            <a
              href="https://www.youtube.com/@8EHRadioITB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Visit Our YouTube
            </a>

            <p className="mt-4 text-sm text-gray-500">
              Stay tuned and be part of our journey!
            </p>

          </div>

          {/* Right Content: Image to Video */}
          <div className="flex w-full flex-1 justify-center md:justify-end">
            <div className="w-full max-w-sm rounded-3xl border border-white/60 bg-white/30 p-4 shadow-xl shadow-gray-400/10 backdrop-blur-md">

             <details className="group overflow-hidden rounded-2xl">

                {/* YouTube Image */}
                <summary className="relative block cursor-pointer list-none">
                  <img
                    src="/youtube.png"
                    alt="8EH Radio ITB YouTube"
                    className="w-full object-contain"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-lg transition duration-300 group-hover:scale-110">
                      ▶
                    </div>
                  </div>
                </summary>

                {/* YouTube Video */}
                <div className="hidden group-open:block">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/IZvpWoAoPyc?autoplay=1"
                    title="8EH Radio ITB YouTube Video"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

              </details>
            </div>
          </div>

        </div>
      </section>
=======
<section className="join-us w-full bg-[#FEFBF8] px-6 py-10 md:px-12 lg:px-20">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

    {/* Left Content */}
    <div className="w-full flex-1 text-center md:text-left">

      <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold tracking-wide text-red-600">
        8EH RADIO ITB
      </span>

      <h2 className="mb-4 text-3xl font-bold text-[#222222] md:text-4xl lg:text-5xl">
        Join Us on <span className="italic">YouTube</span>
      </h2>

      <p className="mb-6 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
        Get closer to 8EH Radio ITB! Explore our videos, discover exciting
        content, and enjoy every moment with us through our YouTube channel.
      </p>

      <a
        href="https://www.youtube.com/@8EHRadioITB"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700"
      >
        Visit Our YouTube
      </a>

      <p className="mt-4 text-sm text-gray-500">
        Stay tuned and be part of our journey!
      </p>

    </div>

    {/* Right Content: Image to Video */}
    <div className="flex w-full flex-1 justify-center md:justify-end">
      <div className="w-full max-w-sm rounded-3xl border border-white/60 bg-white/30 p-4 shadow-xl shadow-gray-400/10 backdrop-blur-md">

        <details className="group overflow-hidden rounded-2xl">

          {/* YouTube Image */}
          <summary className="relative block cursor-pointer list-none">
            <img
              src="/youtube.png"
              alt="8EH Radio ITB YouTube"
              className="w-full object-contain"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-lg transition duration-300 group-hover:scale-110">
                ▶
              </div>
            </div>
          </summary>

          {/* YouTube Video */}
          <div className="hidden group-open:block">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/IZvpWoAoPyc?autoplay=1"
              title="8EH Radio ITB YouTube Video"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

        </details>
      </div>
    </div>

  </div>
</section>

>>>>>>> tim-2


      <FooterSection />
    </main>
  );
}
