import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Donate/donate-cta.css";

const scrollToMethods = () => {
  const el = document.querySelector(".section-donate-methods");
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const DonateCallToAction = () => {
  return (
    <section className="section-donate-cta">
      <div className="donate-cta-inner">
        <span className="donate-section-label">GET INVOLVED</span>
        <h2>Join Us in Empowering the<br />Next Generation.</h2>
        <p>
          This is your invitation to engage — by mentoring, volunteering, donating,
          or simply sharing our story. Every action helps us expand access to
          education across Kashmir.
        </p>
        <div className="donate-cta-buttons">
          <button className="cta-btn-primary" onClick={scrollToMethods}>
            Donate Now
          </button>
          <Link to="/get-involved" className="cta-btn-outline">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateCallToAction;
