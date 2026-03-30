import React from "react";
import "../../../styles/Announcements/announcements.css";
import heroBg from "../../../assets/Images/announcements-section-alumni-interaction.jpg";

const AnnouncementsHero = () => {
  return (
    <section
      className="section-ann-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="ann-hero-overlay" />
      <div className="ann-hero-content">
        <span className="ann-hero-label">STAY INFORMED</span>
        <h1>
          News, Updates &amp;<br />
          <span>Announcements.</span>
        </h1>
      </div>
    </section>
  );
};

export default AnnouncementsHero;
