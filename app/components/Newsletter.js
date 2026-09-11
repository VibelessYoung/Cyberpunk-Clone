"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!consent) return;

    setSent(true);
  };

  return (
    <section className="newsletter" id="community">
      <div className="newsletter-grid" />

      <div className="newsletter-scanlines" />

      <div className="newsletter-container">
        {/* HEADER */}

        <div className="newsletter-meta">
          <span>// NETRUNNER CHANNEL_2077</span>

          <span className="newsletter-status">
            <i />
            SYSTEM ONLINE
          </span>
        </div>

        {/* MAIN */}

        <div className="newsletter-content">
          <div className="newsletter-index">07</div>

          <div className="newsletter-copy">
            <div className="newsletter-label">
              <span />
              SECURE TRANSMISSION
            </div>

            <h2 className="cyber-display">
              CONNECT TO
              <br />
              NIGHT CITY
            </h2>

            <p>
              Get the latest Cyberpunk 2077 news, updates, announcements, events
              and special offers directly to your inbox.
            </p>
          </div>

          {/* FORM */}

          <div className="newsletter-terminal">
            <div className="terminal-header">
              <span>NEWSLETTER_ACCESS</span>
              <span>ENCRYPTED</span>
            </div>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-wrapper">
                <span className="input-prefix">&gt;_</span>

                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSent(false);
                  }}
                  type="email"
                  required
                  placeholder="ENTER_EMAIL_ADDRESS"
                  aria-label="Email address"
                />
              </div>

              <button
                type="submit"
                disabled={!consent}
                className={sent ? "submitted" : ""}
              >
                {sent ? "TRANSMISSION SENT" : "INITIALIZE"}
              </button>
            </form>

            {/* CONSENT */}

            <div className="consent">
              <label className="consent-check">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />

                <span className="custom-checkbox">{consent && "✓"}</span>

                <span>
                  I would like to receive news, special offers and other
                  information from CD PROJEKT RED and I confirm that I am 17
                  years old or older.
                </span>
              </label>

              <div className="consent-info">
                <p>
                  CD PROJEKT RED will be responsible for your personal data.
                  Please check our Privacy Policy for more information.
                </p>

                <p>
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER STATUS */}

        <div className="newsletter-footer">
          <span>CHANNEL: CP2077_NC</span>

          <span>SECURE CONNECTION</span>

          <span>
            STATUS: <b>{sent ? "TRANSMITTED" : "WAITING"}</b>
          </span>
        </div>
      </div>
    </section>
  );
}
