import NewsCard from "./NewsCard";
import CyberButton from "./CyberButton";

export default function NewsSection() {
  const cards = [
    ["/assets/news-1.jpg", "Cyberpunk is coming to Apex Legends!"],
    ["/assets/news-2.jpg", "Just Released — Cyberpunk: Edgerunners 2"],
    ["/assets/news-3.jpg", "It’s All About You! — Night City Legends"],
    ["/assets/news-4.jpg", "PlayStation®5 Pro Update Is Live!"],
  ];

  return (
    <section id="news" className="section-dark cyber-grid">
      <div className="news-wrap">
        {/* HEADER */}

        <div className="news-head">
          <div className="news-head-main">
            <span className="news-head-line" />
            <span>NEWS_MODULE</span>
            <strong>HIGHLIGHT</strong>
          </div>

          <div className="news-head-meta">
            <span>11.08.2026</span>
            <span>NC_//NEWS</span>
          </div>
        </div>

        {/* NEWS GRID */}

        <div className="news-grid">
          {/* FEATURE */}

          <article className="news-feature bracket">
            <img
              src="/assets/news-main.jpg"
              alt="CD PROJEKT RED Creators and Ambassadors Program"
            />

            <div className="news-feature-overlay" />

            <div className="news-feature-index">01</div>

            <div className="news-feature-content">
              {/* <span className="news-feature-label">// LATEST TRANSMISSION</span>
              
              <div className="news-feature-title">
                Introducing the CD Projekt Red Creators &amp; Ambassadors
                Program!
              </div> */}

              <div className="news-feature-sub">
                Create. Connect. Grow Together.
              </div>

              <div className="news-feature-meta">
                <span>CDPR // COMMUNITY</span>
                <span>READ MORE →</span>
              </div>
            </div>
          </article>

          {/* SIDE NEWS */}

          <div className="news-side">
            {cards.map(([image, title], index) => (
              <NewsCard
                key={title}
                image={image}
                title={title}
                number={String(index + 2).padStart(2, "0")}
              />
            ))}
          </div>
        </div>

        {/* FOOTER */}

        <div className="more-news">
          <div className="more-news-line" />

          <CyberButton dark href="#news">
            MORE NEWS
          </CyberButton>

          <div className="more-news-line" />
        </div>
      </div>
    </section>
  );
}
