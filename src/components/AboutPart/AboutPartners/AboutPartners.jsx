import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/About/about.css";

const partners = [
  {
    initials: "IMT",
    color: "#1B4F8A",
    name: "Iqbal Memorial Trust",
    desc: "Standardised testing frameworks and experiential learning opportunities for KEI scholars across Kashmir.",
  },
  {
    initials: "MCW",
    color: "#48BEDA",
    name: "MCW Global",
    desc: "Access to the Young Leaders Access Programme — connecting KEI scholars with global leadership networks.",
  },
  {
    initials: "CMI",
    color: "#2E7D32",
    name: "Chartered Management Institute",
    desc: "Leadership certification and professional development training for high-achieving KEI mentorship scholars.",
  },
];

const AboutPartners = () => {
  return (
    <section className="section-about-partners">
      <div className="about-partners-container">

        <div className="about-partners-header">
          <div className="about-section-num">04</div>
          <span className="about-label">OUR PARTNERS</span>
          <h2>Working Together<br />for Lasting Change.</h2>
          <p className="about-partners-sub">
            We collaborate with global education and leadership organisations
            to expand access and opportunity for every scholar we serve.
          </p>
        </div>

        <div className="about-partners-grid">
          {partners.map((p) => (
            <div className="about-partner-card" key={p.name}>
              <div
                className="about-partner-logo"
                style={{ background: p.color }}
              >
                {p.initials}
              </div>
              <h4 className="about-partner-name">{p.name}</h4>
              <p className="about-partner-desc">{p.desc}</p>
            </div>
          ))}

          {/* Placeholder for future partners */}
          <div className="about-partner-card about-partner-card--placeholder">
            <div className="about-partner-logo about-partner-logo--placeholder">
              +
            </div>
            <h4 className="about-partner-name">More Partners</h4>
            <p className="about-partner-desc">
              We are always looking for mission-aligned organisations to
              collaborate with. Reach out to explore a partnership.
            </p>
          </div>
        </div>

        <div className="about-partners-cta">
          <Link to="/get-involved" className="about-outline-btn">
            Become a Partner →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutPartners;
