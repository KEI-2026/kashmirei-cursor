import React from "react";
import heroBg from "../../../assets/Images/about-hero.jpg";
import "../../../styles/About/about-hero.css";

const AboutHero = () => {
  return (
    <section
      className="section-about-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="about-hero-overlay" />
      <div className="about-hero-content">
        <span className="about-hero-label">ABOUT KEI</span>
        <h1>
          Transforming Lives<br />
          <span>Through Education.</span>
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
