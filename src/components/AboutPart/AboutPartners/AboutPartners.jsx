import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/About/about.css";

const partners = [
  /*
  {
    initials: "IMT",
    color: "#1B4F8A",
    name: "Iqbal Memorial Trust",
    desc: "Standardised testing frameworks and experiential learning opportunities for KEI scholars across Kashmir.",
  },
  */
  {
    initials: "PW",
    color: "#1A1D20",
    name: "Physics Wallah (PW)",
    desc: "Provides scholars with free access to PW's premium Power Batch courses, offering comprehensive coaching, interactive doubt-solving, and study materials for Medical (NEET) and Non-Medical (JEE) aspirants.",
    url: "https://www.pw.live/",
  },
  {
    initials: "CMI",
    color: "#2E7D32",
    name: "Competitiveness Mindset Institute (CMI)",
    desc: "Fosters critical non-cognitive skills—such as conscientiousness, perseverance, initiative, and problem-solving—through the 'Finding the Leader in You' (FLY) program to enhance scholars' leadership and personal effectiveness.",
    url: "https://www.competitivenessmindset.org",
  },
  {
    initials: "MDR",
    color: "#F39C12",
    name: "Mindler",
    desc: "Empowers scholars through 5-dimensional psychometric career assessments, virtual career simulators, and personalized coaching to navigate academic streams and build successful career pathways.",
    url: "https://www.mindler.com/",
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
            We partner with global education and leadership organisations
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
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-partner-link"
                >
                  Visit Website →
                </a>
              )}
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
              partner with. Reach out to explore a partnership.
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
