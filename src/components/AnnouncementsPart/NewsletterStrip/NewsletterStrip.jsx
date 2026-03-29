import React, { useState } from "react";
import "../../../styles/Announcements/announcements.css";

const NewsletterStrip = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <section className="section-newsletter-strip">
      <div className="newsletter-inner">

        <div className="newsletter-text">
          <h3>Never miss an announcement.</h3>
          <p>Subscribe to receive KEI updates directly in your inbox.</p>
        </div>

        {done ? (
          <div className="newsletter-success">
            ✓ You're subscribed! Thank you for staying connected.
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        )}

      </div>
    </section>
  );
};

export default NewsletterStrip;
