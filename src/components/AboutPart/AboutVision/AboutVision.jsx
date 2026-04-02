import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/About/about.css";

const AboutVision = () => {
  return (
    <section className="section-about-vision">
      <div className="about-vision-watermark">KEI</div>
      <div className="about-vision-container">

        <div className="about-vision-col">
          <span className="about-label about-label--light">OUR VISION</span>
          <blockquote className="about-vision-quote">
            "To make education the primary imperative in the empowerment
            and development of individuals, institutions, and communities
            in the conflict-ridden regions of the world."
          </blockquote>
        </div>

        <div className="about-vision-divider" />

        <div className="about-vision-col">
          <span className="about-label about-label--light">OUR MISSION</span>
          <p className="about-vision-mission">
            "To provide bright but at-risk scholars in conflict-ridden
            regions like Kashmir a supportive and leadership-oriented
            educational environment through mentorship, experiential
            opportunities, and financial assistance."
          </p>
          <p className="about-vision-sub">
            Education is not charity — it's empowerment. By nurturing
            skills, ethics, and leadership, KEI helps students shape
            their communities and their futures.
          </p>
          <Link to="/what-we-do" className="about-vision-btn">
            Explore Our Programmes →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutVision;
