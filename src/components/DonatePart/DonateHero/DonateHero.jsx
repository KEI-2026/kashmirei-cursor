import React from "react";
import "../../../styles/Donate/donate-hero.css";
import heroBg from "../../../assets/Images/Donate-1-boys2.jpeg";

const DonateHero = () => {
  return (
    <section
      className="section-donate-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="donate-hero-overlay" />
      <div className="donate-hero-content">
        <span className="donate-hero-label">MAKE A DIFFERENCE</span>
        <h1>
          Give Today,<br />
          <span>Change Tomorrow.</span>
        </h1>
        <p>
          Your generosity fuels education and hope across Kashmir.
          Join us in helping students reach their full potential.
        </p>
      </div>
    </section>
  );
};

export default DonateHero;
