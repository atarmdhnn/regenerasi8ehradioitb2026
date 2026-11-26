export default function YoutubePrograms() {
    return (
        <section className="yt-programs-section">
            <style>{`
        .yt-programs-section {
          max-width: 1100px;
          margin: 60px auto;
          padding: 0 24px;
        }

        .yt-programs-title {
          font-size: 28px;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 8px;
          text-align: center;
        }

        .yt-programs-subtitle {
          font-size: 16px;
          color: #666666;
          margin-bottom: 32px;
          text-align: center;
        }

        .yt-programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .yt-video-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .yt-video-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        }

        .yt-video-frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          border: none;
          display: block;
        }

        .yt-video-info {
          padding: 16px;
        }

        .yt-video-info h3 {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 6px;
          color: #111827;
        }

        .yt-video-info p {
          font-size: 14px;
          color: #4b5563;
          margin: 0;
        }
      `}</style>

            <h2 className="yt-programs-title">8EH Radio ITB on YouTube</h2>
            <p className="yt-programs-subtitle">
                Tonton keseruan siaran, bincang-bincang, dan program unggulan kami.
            </p>

            <div className="yt-programs-grid">
                {/* Video 1 */}
                <div className="yt-video-card">
                    <iframe
                        className="yt-video-frame"
                        src="https://www.youtube.com/embed/ID_VIDEO_1"
                        title="Program 8EH 1"
                        allowFullScreen
                    ></iframe>
                    <div className="yt-video-info">
                        <h3>Judul Program Video 1</h3>
                        <p>Deskripsi singkat mengenai isi video program 8EH ini.</p>
                    </div>
                </div>

                {/* Video 2 */}
                <div className="yt-video-card">
                    <iframe
                        className="yt-video-frame"
                        src="https://www.youtube.com/embed/ID_VIDEO_2"
                        title="Program 8EH 2"
                        allowFullScreen
                    ></iframe>
                    <div className="yt-video-info">
                        <h3>Judul Program Video 2</h3>
                        <p>Deskripsi singkat mengenai isi video program 8EH ini.</p>
                    </div>
                </div>

                {/* Video 3 */}
                <div className="yt-video-card">
                    <iframe
                        className="yt-video-frame"
                        src="https://www.youtube.com/embed/ID_VIDEO_3"
                        title="Program 8EH 3"
                        allowFullScreen
                    ></iframe>
                    <div className="yt-video-info">
                        <h3>Judul Program Video 3</h3>
                        <p>Deskripsi singkat mengenai isi video program 8EH ini.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}