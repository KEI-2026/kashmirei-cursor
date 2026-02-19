import React from "react";
import "../../styles/Home/mission.css";
import missionImage from "../../assets/Images/mission.jpg";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* LEFT SIDE */}
        <div className="mission-left">
          <p className="mission-subtitle">GET INVOLVED</p>
          <h2 className="mission-title">Join Our Mission</h2>
          <p className="mission-description">
            Together, we can empower young leaders who will shape the future of
            Kashmir. Here's how you can get involved:
          </p>

          <div className="mission-image-wrapper">
            <img src={missionImage} alt="Young Leaders" />
          </div>
        </div>

        {/* RIGHT SIDE */}
<div className="mission-right">
  <div className="mission-item">
    <span className="mission-number">01</span>
    <div className="mission-content">
      <div className="mission-check">✓</div>
      <div className="mission-text">
        <h4>Donate</h4>
        <p>
          Fund a scholarship, provide digital learning tools, or support
          leadership training.
        </p>
      </div>
    </div>
  </div>

  <div className="mission-item">
    <span className="mission-number">02</span>
    <div className="mission-content">
      <div className="mission-check">✓</div>
      <div className="mission-text">
        <h4>Mentor</h4>
        <p>Help guide a student's career.</p>
      </div>
    </div>
  </div>

  <div className="mission-item">
    <span className="mission-number">03</span>
    <div className="mission-content">
      <div className="mission-check">✓</div>
      <div className="mission-text">
        <h4>Volunteer</h4>
        <p>Assist with outreach, events, or programs.</p>
      </div>
    </div>
  </div>

  <button className="mission-btn">DONATE NOW</button>
</div>


      </div>
    </section>
  );
};

export default MissionSection;
