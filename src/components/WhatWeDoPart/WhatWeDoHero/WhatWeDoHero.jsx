import React from "react";
import "../../../styles/What-We-Do/whatwedo-hero.css";
import heroBg from "../../../assets/Images/what-we-do-hero.jpg";

const WhatWeDoHero = () => {
  return (
    <section
      className="section-wwd-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="wwd-hero-overlay" />
      <div className="wwd-hero-content">
        <span className="wwd-hero-label">OUR PROGRAMS</span>
        <h1>
          Empowering Scholars <br />
          <span>Every Step of the Way</span>
        </h1>
        <p>
          Eight interconnected programs — from high school readiness to
          graduate studies abroad — designed to unlock every scholar's potential.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoHero;
