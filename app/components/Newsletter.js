"use client";
import { useState } from "react";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="newsletter" id="community">
      <h2 className="cyber-display">
        Sign up for the official Cyberpunk 2077 newsletter!
      </h2>
      <p>
        From games to beyond, keep your feed up to date with the latest news and
        announcements on all things Cyberpunk 2077!
      </p>
      <form
        className="newsletter-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Enter your email address"
          aria-label="Email address"
        />
        <button type="submit">{sent ? "SUBMITTED" : "SUBMIT"}</button>
      </form>
      <div className="consent">
        <label>
          <input type="checkbox" className="mr-1" /> I would like to receive
          news, special offers and other information from CD PROJEKT RED and I
          am 17 years old or older.
        </label>
        <p>
          CD PROJEKT RED will be responsible for your personal data. For more
          information please check our Privacy Policy.
        </p>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </section>
  );
}
