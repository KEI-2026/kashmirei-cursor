import React from "react";
import "../../styles/ourmission.css";
import missionImage from "../../assets/Images/programs-image1.jpg"; // use your image

const OurMissionSection = () => {
  return (
    <section className="section-mission">

      {/* Background Big Text */}
      <div className="mission-bg-text">
        ABOUT KEI
      </div>

      <div className="mission-container">

        {/* LEFT CONTENT */}
        <div className="mission-content">

          <span className="mission-label">About KEI</span>

          <h2>Our Mission</h2>

          <h3>Brief Emotional Introduction</h3>

          <p className="mission-quote">
            “KEI scholars form a community of resilience and purpose.
            Supporting them means investing in a brighter Kashmir—and
            a better world.”
            <br />
            <span>– KEI Donor</span>
          </p>

          <h4>Why KEI Matters</h4>

          <p>
            We believe that every young person has the potential to change
            the world, regardless of their background or circumstances.
            KEI ensures a supportive structure of financial scholarships,
            mentors and digital resource are provided to students to succeed.
          </p>

          <a href="#" className="mission-btn">
            DOWNLOAD ANNUAL REPORT
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="mission-image">
          <img src={missionImage} alt="KEI Scholars" />
        </div>

      </div>
    </section>
  );
};

export default OurMissionSection;
