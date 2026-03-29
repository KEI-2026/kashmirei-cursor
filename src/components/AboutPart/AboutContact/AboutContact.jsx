import React, { useState } from "react";
import "../../../styles/About/about.css";

const offices = [
  {
    flag: "🇺🇸",
    region: "KEI — United States",
    lines: [
      "113 West Plain St, Wayland, MA 01778, USA",
      "Phone: 508-733-7304",
      "Fax: 508-651-1951",
      "Email: info@kashmirei.org",
    ],
    email: "info@kashmirei.org",
    phone: "tel:+15087337304",
  },
  {
    flag: "🇮🇳",
    region: "KEI — Kashmir",
    lines: [
      "Dr. Ali Jan's House, Magarmal Bagh",
      "Srinagar, Jammu & Kashmir, 190008",
      "Phone: +0194 2458153",
      "Email: info@kashmirei.org",
    ],
    email: "info@kashmirei.org",
    phone: "tel:+01942458153",
  },
];

const AboutContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checked) return;
    // Form submission logic to be wired to backend
    setSubmitted(true);
  };

  return (
    <section className="section-about-contact">
      <div className="about-contact-container">

        {/* Left — Office info */}
        <div className="about-contact-info">
          <span className="about-label">GET IN TOUCH</span>
          <h2>We'd Love to<br />Hear From You.</h2>
          <p className="about-contact-intro">
            Reach out to our teams in the USA or Kashmir using the details
            below, or send us a message through the form.
          </p>

          <div className="about-offices">
            {offices.map((o) => (
              <div className="about-office-card" key={o.region}>
                <div className="about-office-flag">{o.flag}</div>
                <div className="about-office-body">
                  <h4>{o.region}</h4>
                  {o.lines.map((line, i) => {
                    if (line.startsWith("Email:")) {
                      return (
                        <p key={i}>
                          Email:{" "}
                          <a href={`mailto:${o.email}`}>{o.email}</a>
                        </p>
                      );
                    }
                    if (line.startsWith("Phone:")) {
                      return (
                        <p key={i}>
                          <a href={o.phone}>{line}</a>
                        </p>
                      );
                    }
                    return <p key={i}>{line}</p>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Contact form */}
        <div className="about-contact-form-wrap">
          <h3 className="about-form-heading">Send Us a Message.</h3>
          <p className="about-form-sub">
            Fill out the form below and a member of our team will get
            back to you as soon as possible.
          </p>

          {submitted ? (
            <div className="about-form-success">
              <span className="about-form-success-icon">✓</span>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="about-contact-form" onSubmit={handleSubmit} noValidate>

              <div className="about-form-row">
                <div className="about-form-group">
                  <label htmlFor="name">Full Name <span>*</span></label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="about-form-group">
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="about-form-group">
                <label htmlFor="phone">Phone Number <em>(optional)</em></label>
                <input
                  id="phone" name="phone" type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="about-form-group">
                <label htmlFor="message">Message <span>*</span></label>
                <textarea
                  id="message" name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Simple captcha placeholder */}
              <div className="about-captcha">
                <label className="about-captcha-label">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <span>I'm not a robot</span>
                </label>
                <div className="about-captcha-logo">
                  <div className="captcha-recaptcha-icon">reCAPTCHA</div>
                  <div className="captcha-recaptcha-sub">Privacy · Terms</div>
                </div>
              </div>

              <button
                type="submit"
                className="about-form-submit"
                disabled={!checked}
              >
                Send Message
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default AboutContact;
