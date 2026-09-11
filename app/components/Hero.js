import Navbar from "./Navbar";
import CyberButton from "./CyberButton";

const platforms = ["XBOX SERIES X|S", "PLAYSTATION 5", "PC", "SWITCH 2", "MAC"];

export default function Hero() {
  return (
    <section id="top" className="hero">
      {/* BACKGROUND */}

      <img
        className="hero-art"
        src="/assets/hero-art.jpg"
        alt="Cyberpunk 2077 characters"
      />

      <div className="hero-vignette" />
      <div className="hero-yellow" />
      <div className="hero-noise" />
      <div className="hero-scanlines" />

      <Navbar />

      {/* HERO CONTENT */}

      <div className="hero-content">
        {/* REVIEWS */}

        <div className="reviews">
          <div className="review">
            <span className="review-mark">“</span>
            <span className="review-text">BETTER THAN EVER</span>

            <small>PUSH SQUARE</small>
          </div>

          <div className="review">
            <span className="review-mark">“</span>
            <span className="review-text">A STELLAR RPG</span>

            <small>GAMESPOT</small>
          </div>

          <div className="review">
            <span className="review-mark">“</span>
            <span className="review-text">HARD REBOOT</span>

            <small>EUROGAMER</small>
          </div>
        </div>

        {/* TITLE */}

        <div className="hero-heading">
          <span className="hero-eyebrow">
            <i />
            NIGHT CITY // 2077
          </span>

          <h1 className="hero-title cyber-display">
            GET THE ULTIMATE
            <br />
            <span>CYBERPUNK 2077</span>
            <br />
            EXPERIENCE
          </h1>

          <div className="hero-title-meta">
            <span>OPEN WORLD ACTION RPG</span>
            <span>/// CD PROJEKT RED</span>
          </div>
        </div>

        {/* ACTIONS */}

        <div className="hero-actions">
          <CyberButton href="#buy">BUY NOW</CyberButton>

          <CyberButton href="#trailer" dark>
            WATCH TRAILER
          </CyberButton>
        </div>

        {/* PLATFORMS */}

        <div className="platforms">
          <span className="platforms-label">AVAILABLE ON</span>

          <div className="platform-list">
            {platforms.map((platform, index) => (
              <span key={platform}>
                {platform}

                {index < platforms.length - 1 && <b>///</b>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CORNER DATA */}

      <div className="hero-data hero-data-left">
        <span>NC_01</span>
        <span>LIVE_FEED</span>
      </div>

      <div className="hero-data hero-data-right">
        <span>LAT 50.045</span>
        <span>LONG 19.945</span>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </section>
  );
}
