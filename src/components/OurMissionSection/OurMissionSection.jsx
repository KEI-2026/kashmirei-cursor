import React from "react";
import "../../styles/Home/ourmission.css";
import missionImage from "../../assets/Images/programs-image1.jpg";

const OurMissionSection = () => {
  return (
    <section className="section-our-mission">

      {/* Background Big Text */}
      <div className="ourmission-bg-text">
        ABOUT KEI
      </div>

      <div className="ourmission-container">

        {/* LEFT CONTENT */}
        <div className="ourmission-content">

          <span className="ourmission-label">About KEI</span>

          <h2>Our Mission</h2>

          <h3>Brief Emotional Introduction</h3>

          <p className="ourmission-quote">
            “KEI scholars form a community of resilience and purpose.
            Supporting them means investing in a brighter Kashmir—and
            a better world.”
          </p>

          <div className="ourmission-donor">– KEI Donor</div>

          <h4>Why KEI Matters</h4>

          <p>
            We believe that every young person has the potential to change
            the world, regardless of their background or circumstances.
            KEI ensures a supportive structure of financial scholarships,
            mentors and digital resources provided to students to succeed.
          </p>

          <a href="#" className="ourmission-btn">
            DOWNLOAD ANNUAL REPORT
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="ourmission-image">
          <img src={missionImage} alt="KEI Scholars" />
        </div>

      </div>

    </section>
  );
};

export default OurMissionSection;
