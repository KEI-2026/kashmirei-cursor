import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/About/about.css";

const PersonIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-placeholder-icon">
    <circle cx="40" cy="30" r="16" fill="#c8d6e0"/>
    <path d="M10 72c0-16.6 13.4-30 30-30s30 13.4 30 30" fill="#c8d6e0"/>
  </svg>
);

const boardMembers = [
  { name: "—", title: "Board Chair" },
  { name: "—", title: "Vice Chair" },
  { name: "—", title: "Secretary" },
  { name: "—", title: "Treasurer" },
  { name: "—", title: "Director" },
  { name: "—", title: "Director" },
];

const opsTeam = [
  { name: "—", title: "Programme Director, Kashmir" },
  { name: "—", title: "Scholar Coordinator" },
  { name: "—", title: "Outreach Officer" },
  { name: "—", title: "Digital Learning Lead" },
];

const volunteerQuotes = [
  { quote: "Volunteering with KEI has been the most rewarding work of my career.", role: "Mentor Volunteer, USA" },
  { quote: "Seeing scholars grow from nervous students into confident leaders is extraordinary.", role: "Programme Volunteer, Kashmir" },
  { quote: "KEI gave me the chance to give back to the community that shaped me.", role: "Alumni Volunteer" },
];

const AboutTeam = () => {
  return (
    <section className="section-about-team">
      <div className="about-team-container">

        <div className="about-team-header">
          <div className="about-section-num">05</div>
          <span className="about-label">THE PEOPLE BEHIND KEI</span>
          <h2>Meet the Team.</h2>
          <p className="about-team-sub">
            Our strength lies in the people who dedicate their time and
            expertise to building a brighter future for Kashmiri youth.
          </p>
        </div>

        {/* Board of Directors */}
        <div className="about-team-tier">
          <h3 className="about-team-tier-title">Board of Directors &amp; Officers</h3>
          <div className="about-team-grid">
            {boardMembers.map((m, i) => (
              <div className="about-team-card" key={i}>
                <div className="about-avatar-wrap">
                  <PersonIcon />
                </div>
                <p className="about-team-name">Name Coming Soon</p>
                <p className="about-team-role">{m.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operations Team */}
        <div className="about-team-tier">
          <h3 className="about-team-tier-title">Operations Team — Kashmir</h3>
          <div className="about-team-grid about-team-grid--sm">
            {opsTeam.map((m, i) => (
              <div className="about-team-card" key={i}>
                <div className="about-avatar-wrap">
                  <PersonIcon />
                </div>
                <p className="about-team-name">Name Coming Soon</p>
                <p className="about-team-role">{m.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteers */}
        <div className="about-team-tier">
          <h3 className="about-team-tier-title">Our Volunteers</h3>
          <div className="about-volunteers-grid">
            {volunteerQuotes.map((v, i) => (
              <div className="about-volunteer-card" key={i}>
                <span className="about-volunteer-quote-mark">"</span>
                <p className="about-volunteer-quote">{v.quote}</p>
                <span className="about-volunteer-role">{v.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-team-cta">
          <Link to="/get-involved" className="about-outline-btn">
            Join the Team →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
