import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/Images/logo.png"; // use your local logo if available

const FOOTER_QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/scholar-stories", label: "Scholar Stories" },
  { href: "/media", label: "Media" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/kashmirei.org", label: "Facebook" },
  { href: "https://www.instagram.com/kashmireducationinitiative", label: "Instagram" },
  { href: "https://www.youtube.com/kashmireiorg", label: "Youtube" },
];

const Footer = () => {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* Column 1 - Logo + Disclaimer */}
        <div className="footer-col footer-about">
          <a href="/">
            <img src={logo} alt="Kashmir Education Initiative Logo" />
          </a>
          <p>
            KEI does not accept funds raised at political events.
            All donations must come through official channels.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {FOOTER_QUICK_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
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

        {/* Column 4 - Contact */}
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
