import React from "react";
import "../../styles/Donate/donate-hero.css";

const DonateHero = () => {
  return (
    <section className="section-donate-hero">
      <div className="container donate-hero-content">

        <div className="donate-title-wrapper">
          <h1 className="donate-title">
            Donate
          </h1>

          {/* SVG Animated Circle */}
          <svg
            className="donate-circle"
            viewBox="0 0 200 80"
            preserveAspectRatio="none"
          >
            <ellipse
              cx="100"
              cy="40"
              rx="95"
              ry="30"
            />
          </svg>
        </div>

        <p>
          Conveniently donate using one of the secure options below
        </p>

      </div>
    </section>
  );
};

export default DonateHero;
