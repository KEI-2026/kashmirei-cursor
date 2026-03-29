import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/About/about.css";

const AboutCTA = () => {
  return (
    <section className="section-about-cta">
      <div className="about-cta-inner">
        <h2>Join Our Mission.</h2>
        <p>
          Your support fuels education and empowerment for students
          across Kashmir. Every action — however small — creates ripples
          that last a lifetime.
        </p>
        <div className="about-cta-btns">
          <Link to="/get-involved" className="about-cta-btn-primary">
            Get Involved
          </Link>
          <Link to="/donate" className="about-cta-btn-ghost">
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
