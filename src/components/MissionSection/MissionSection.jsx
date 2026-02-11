import React from "react";
import "../../styles/mission.css";
import missionImage from "../../assets/Images/about-home.jpg";

const MissionSection = () => {
  return (
    <section className="section-mission">
      <div className="mission-container">

        {/* LEFT SIDE */}
        <div className="mission-left">
          <span className="mission-label">GET INVOLVED</span>

          <h2>Join Our Mission</h2>

          <p>
            Together, we can empower young leaders who will shape the future
            of Kashmir. Here’s how you can get involved:
          </p>

          <div className="mission-image">
            <img src={missionImage} alt="KEI Scholars" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="mission-right">

          <div className="mission-item">
            <span className="mission-number">01</span>
            <div className="mission-content">
              <div className="mission-icon">✔</div>
              <h4>Donate</h4>
              <p>
                Fund a scholarship, provide digital learning tools, or support
                leadership training.
              </p>
            </div>
          </div>

          <div className="mission-item">
            <span className="mission-number">02</span>
            <div className="mission-content">
              <div className="mission-icon">✔</div>
              <h4>Mentor</h4>
              <p>Help guide a student’s career.</p>
            </div>
          </div>

          <div className="mission-item">
            <span className="mission-number">03</span>
            <div className="mission-content">
              <div className="mission-icon">✔</div>
              <h4>Volunteer</h4>
              <p>Assist with outreach, events, or programs.</p>
            </div>
          </div>

          <a href="/donate" className="mission-button">
            DONATE NOW
          </a>

        </div>

      </div>
    </section>
  );
};

export default MissionSection;
