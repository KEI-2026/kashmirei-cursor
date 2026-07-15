import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer/footer.css";
import logo from "../../assets/Images/KEI-new-logo/Logos-03.svg";
import { NEWSLETTER_API_ENDPOINT } from "../../config/newsletter";

const SITEMAP_LINKS = [
  { path: "/", label: "Home" },
  { path: "/for-scholars", label: "For Scholars" },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/our-impact", label: "Our Impact" },
  { path: "/about", label: "About" },
  { path: "/donate", label: "Donate" },
  { path: "/events-and-announcements", label: "Events & Announcements" },
  { path: "/faq", label: "FAQ" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/kashmirei.org", label: "Facebook" },
  { href: "https://www.instagram.com/kashmireducationinitiative", label: "Instagram" },
  { href: "https://www.youtube.com/kashmireiorg", label: "Youtube" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      return;
    }

    // TODO(go-live): Replace this stub with a real mailing-list integration
    // (e.g. Mailchimp, Buttondown, or POST to NEWSLETTER_API_ENDPOINT).
    if (NEWSLETTER_API_ENDPOINT) {
      try {
        const response = await fetch(NEWSLETTER_API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmedEmail }),
        });

        if (!response.ok) {
          throw new Error("Newsletter subscribe failed");
        }

        setSubscribeStatus("success");
        setEmail("");
        return;
      } catch {
        setSubscribeStatus("error");
        return;
      }
    }

    setSubscribeStatus("success");
    setEmail("");
  };

  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* Column 1 - Logo + Disclaimer */}
        <div className="footer-col footer-about">
          <Link to="/">
            <img src={logo} alt="Kashmir Education Initiative Logo" />
          </Link>
          <p>A registered 501(c)(3) tax-exempt charity in the United States (incorporated in Massachusetts).</p>
          <p>
            KEI does not accept funds raised at political events.
            All donations must come through official channels.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4>Sitemap</h4>
          <ul>
            {SITEMAP_LINKS.map((item, index) => {
              if (item.dropdown) {
                return (
                  <li key={index} className="footer-sitemap-dropdown">
                    <span className="footer-sitemap-parent">{item.label}</span>
                    <ul className="footer-sitemap-sub">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.path}>
                          <Link to={subItem.path}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3 - Social */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            {SOCIAL_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Stay Connected */}
        <div className="footer-col footer-newsletter">
          <h4>Stay Connected</h4>
          <p className="footer-newsletter-copy">
            Get updates on scholars, programs, and events.
          </p>
          <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="footer-newsletter-email" className="footer-newsletter-label">
              Email address
            </label>
            <div className="footer-newsletter-fields">
              <input
                id="footer-newsletter-email"
                type="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (subscribeStatus) {
                    setSubscribeStatus(null);
                  }
                }}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          {subscribeStatus === "success" && (
            <p className="footer-newsletter-message footer-newsletter-message-success">
              Thanks for subscribing. We&apos;ll be in touch soon.
            </p>
          )}
          {subscribeStatus === "error" && (
            <p className="footer-newsletter-message footer-newsletter-message-error">
              Something went wrong. Email{" "}
              <a href="mailto:info@kashmirei.org?subject=Newsletter%20Signup">
                info@kashmirei.org
              </a>{" "}
              to join our list.
            </p>
          )}
        </div>

        {/* Column 5 - Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <address>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@kashmirei.org">info@kashmirei.org</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:5087337304">508-733-7304</a>
            </p>
            <p>
              113 West Plain St.<br />
              Wayland, MA 01778<br />
              USA
            </p>
          </address>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Kashmir Education Initiative. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
