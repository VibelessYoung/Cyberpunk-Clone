import {
  siDiscord,
  siFacebook,
  siInstagram,
  siTiktok,
  siTwitch,
  siYoutube,
  siX,
  siNvidia,
  siAlienware,
  siAmd,
  siCdprojekt,
} from "simple-icons";

const socials = [
  { name: "Discord", icon: siDiscord },
  { name: "Facebook", icon: siFacebook },
  { name: "X", icon: siX },
  { name: "Instagram", icon: siInstagram },
  { name: "YouTube", icon: siYoutube },
  { name: "Twitch", icon: siTwitch },
  { name: "TikTok", icon: siTiktok },
];

const partners = [
  {
    name: "NVIDIA",
    icon: siNvidia,
    text: "GEFORCE RTX",
  },
  {
    name: "ALIENWARE",
    icon: siAlienware,
  },
  {
    name: "AMD",
    icon: siAmd,
    text: "RYZEN",
  },
  {
    name: "ESRB",
    text: "TEEN",
    esrb: true,
  },
];

const footerLinks = [
  "Terms of Use & Privacy Policy",
  "Careers",
  "User Agreement",
  "Fan Content Guidelines",
  "Cookie Declaration",
  "REDmod",
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP */}
      <div className="footer-top">
        {/* SOCIALS */}
        <div className="socials">
          <span className="social-title">FIND US ON</span>

          <div className="social-icons">
            {socials.map(({ name, icon }) => (
              <a
                key={name}
                href="#"
                className="social-icon"
                aria-label={name}
                title={name}
              >
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* PARTNERS */}
        <div className="partners">
          {partners.map(({ name, icon, text, esrb }) => (
            <div className="partner" key={name}>
              {esrb ? (
                <div className="esrb-logo">
                  <strong>ESRB</strong>
                  <span>TEEN</span>
                </div>
              ) : (
                <svg
                  className="partner-icon"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                >
                  <path d={icon.path} />
                </svg>
              )}

              <div className="partner-info">
                <strong>{name}</strong>

                {text && !esrb && <small>{text}</small>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LINKS */}
      <div className="footer-links">
        {footerLinks.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}

        <button className="language-selector">
          <span>◉</span>
          English
          <span className="language-arrow">⌄</span>
        </button>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        {/* BRAND */}
        <div className="footer-brand">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={siCdprojekt.path} />
          </svg>

          <span>CD PROJEKT RED</span>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copyright">
          <p>© 2026 CD PROJEKT RED S.A. All rights reserved.</p>

          <p>
            Cyberpunk 2077 and related logos, characters and marks are
            trademarks of CD PROJEKT RED S.A. in the US and/or other countries.
          </p>
        </div>

        {/* OTHER GAMES */}
        <div className="footer-games">
          <a href="#">
            <strong>THE WITCHER</strong>
            <span>thewitcher.com</span>
          </a>

          <a href="#">
            <strong>GWENT</strong>
            <span>playgwent.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
