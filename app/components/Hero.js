import Navbar from "./Navbar";
import CyberButton from "./CyberButton";

const platforms = ["◉ XBOX SERIES X|S", "PS5", "PC", "SWITCH 2", "MAC"];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img
        className="hero-art"
        src="/assets/hero-art.jpg"
        alt="Cyberpunk 2077 characters"
      />
      <div className="hero-yellow" />
      <div className="hero-noise" />
      <Navbar />
      <div className="hero-content">
        <div className="reviews">
          <div className="review">
            “BETTER THAN EVER”
            <small className="block font-normal">PUSH SQUARE</small>
          </div>
          <div className="review">
            “A STELLAR RPG”<small className="block font-normal">GAMESPOT</small>
          </div>
          <div className="review">
            “HARD REBOOT”<small className="block font-normal">EUROGAMER</small>
          </div>
        </div>
        <h1 className="hero-title cyber-display">
          Get the ultimate
          <br />
          Cyberpunk 2077
          <br />
          experience
        </h1>
        <div className="hero-actions">
          <CyberButton href="#buy">Buy now</CyberButton>
          <CyberButton href="#trailer">Watch trailer</CyberButton>
        </div>
        <div className="platforms">
          {platforms.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
