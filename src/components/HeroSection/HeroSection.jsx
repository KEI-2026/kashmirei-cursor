import React from "react";
import "../../styles/hero.css";
import heroImage from "../../assets/images/hero-home.jpg";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className="section-hero" aria-label="Hero Section">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>
            Empowering Bright
            <br />
            Futures in <span>Kashmir</span>
          </h1>

          <h2 className="hero-subheading">
            Every Dream Deserves a Chance
          </h2>

          <p>
            Our mission is to empower extraordinary but financially
            challenged students to realize their full potential with a
            leadership-focused education, through mentoring, training
            opportunities, and financial support.
          </p>

          <div className="hero-marquee">
  <Link to="/apply" className="marquee-link">
    <div className="marquee-track">
      <span>
        Apply Now • Applications Open • Become a KEI Scholar • Your Future Starts Here •
      </span>
      <span>
        Apply Now • Applications Open • Become a KEI Scholar • Your Future Starts Here •
      </span>
    </div>
  </Link>
</div>


        </div>

        {/* RIGHT IMAGE */}
        <figure className="hero-image">
          <img
            src={heroImage}
            alt="Kashmir Education Initiative Hero"
          />
        </figure>

      </div>
    </section>
  );
};

export default HeroSection;
