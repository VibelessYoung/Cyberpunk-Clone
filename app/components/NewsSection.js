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
        <div className="news-head">
          <span>/// NEWS MODULE_HIGHLIGHT</span>
          <span>11.08.2026</span>
          <span>NEWS_</span>
        </div>
        <div className="news-grid">
          <article className="news-feature bracket">
            <img
              src="/assets/news-main.jpg"
              alt="CD PROJEKT RED Creators and Ambassadors Program"
            />
            <div className="news-feature-title">
              Introducing the CD Projekt Red Creators &amp; Ambassadors Program!
            </div>
            <div className="news-feature-sub">
              Create. Connect. Grow Together.
            </div>
          </article>
          <div className="news-side">
            {cards.map(([image, title]) => (
              <NewsCard key={title} image={image} title={title} />
            ))}
          </div>
        </div>
        <div className="more-news">
          <CyberButton dark href="#news">
            More news
          </CyberButton>
        </div>
      </div>
    </section>
  );
}
