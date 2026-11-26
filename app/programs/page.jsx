import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";

export default function ProgramsPage() {
  return (
    <main className="bg-[#FEFBF8] overflow-x-hidden font-sans">
      <Navbar />

      <section className="featured-programs">
        <style>{`
          .featured-programs {
            font-family: var(--font-plus-jakarta-sans), sans-serif;
            padding: 60px;
            justify-content: center;
            background-image:
              linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 1.0) 100%), 
              url('/highlights-bg.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            .featured-container {
              margin: 0 auto;
              justify-content: center;
            }
            .featured-container h2 {
              text-align: center;
              font-family: var(--font-instrument-serif), serif;
              font-size: 2.75rem;
              font-weight: 400;
              margin: 0 0 3.5rem 0;
              color: #f8f8f8;
            }
            .featured-grid {
              display: grid;
              grid-template-columns: repeat(3, auto);
              gap: 32px;
              align-items: center;
              gap: 36px;
              justify-items: center;
              place-content: center;
            }

            /* card base buat ana */
            .featured-card { 
              aspect-ratio: 3/4;
              width: 244px;
              border-radius: 18px;
              background: rgba(255, 255, 255, 0.06);
              border: 2px dashed rgba(255, 255, 255, 0.25);
              align-items: center;
              justify-items: center;
              display: flex;
              justify-content: center;
              color: rgba(255, 255, 255, 0.6);
              font-size: 0.95rem;
              box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
              transition: all 0.25s ease-in-out;
            }  
            .featured-card:hover {
              transform: scale(1.05); 
            }
            @media  (max-width: 900px) {
              .featured-grid {
                grid-template-columns: repeat(2, auto);
                gap: 28px;
                max-width: 360px;
                margin: 0 auto;
              }
            }
            @media  (max-width: 600px) {
              .featured-grid {
                grid-template-columns: 1fr;
                max-width: 360px;
                margin: 0 auto;
              }
            }
          }
        `}</style>
        <div className="featured-container">
          <h2>Featured Programs</h2>
          <div className="featured-grid">
            <div className="featured-card">
              <span>Poster1</span>
            </div>
            <div className="featured-card">
              <span>Poster2</span>
            </div>
            <div className="featured-card">
              <span>Poster3</span>
            </div>
          </div>
        </div>  
      </section>
      <FooterSection />
    </main>
  );
}
