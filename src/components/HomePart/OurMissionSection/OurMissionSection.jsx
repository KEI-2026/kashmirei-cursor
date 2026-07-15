import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/ourmission.css";
import missionImage from "../../../assets/Images/home-about.JPG";

const ANNUAL_REPORT_URL =
  "mailto:info@kashmirei.org?subject=Annual%20Report%20Request";

const OurMissionSection = () => {
  return (
    <section className="section-our-mission">

      {/* Background Big Text */}
      <div className="ourmission-bg-text">
        ABOUT KEI
      </div>

      <div className="ourmission-container">

        {/* CONTENT */}
        <div className="ourmission-content">

          <span className="ourmission-label">About KEI</span>

          <h2>We Believe</h2>

          <p className="ourmission-believe">
            Every young person has the potential to change the world,
            regardless of their background or circumstances.
          </p>

          <div className="ourmission-vm">
            <div className="ourmission-vm-item">
              <h5>OUR VISION</h5>
              <p>
                To make education the primary imperative in the empowerment
                and development of individuals, institutions, and communities.
              </p>
            </div>
            <div className="ourmission-vm-item">
              <h5>OUR MISSION</h5>
              <p>
                To provide bright but at risk students a supportive and leadership oriented
                educational environment so that these scholars can bring about a positive 
                change in their families and communities.
              </p>
            </div>
          </div>

          <a href={ANNUAL_REPORT_URL} className="ourmission-btn">
            DOWNLOAD ANNUAL REPORT
          </a>

        </div>

        {/* IMAGE */}
        <div className="ourmission-image">
          <img src={missionImage} alt="KEI Scholars" />
        </div>

      </div>

    </section>
  );
};

export default OurMissionSection;
