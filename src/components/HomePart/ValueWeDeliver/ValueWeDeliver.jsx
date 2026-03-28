import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/value-we-deliver.css";
import valueImage from "../../../assets/Images/Value-deliver-rainbow picture.png";

const ValueWeDeliver = () => {
  return (
    <section className="value-we-deliver">

      <div className="value-container">
        <span className="section-label value-label">OUR PROGRAMS</span>
        <h2 className="value-title">Empowering Every Step of the Scholar Journey</h2>
        <p className="value-subtitle">We support the scholar journey from their first classroom to their first career milestone.</p>
        <p className="value-blurb">
          At KEI, we walk alongside every scholar — from their first classroom to their first career milestone.
          Through a holistic ecosystem of support, we provide financial scholarships, dedicated mentorship,
          digital learning tools, and hands-on career experiences. Our eight programs — spanning High School
          Preparedness, Career Awareness, Mentorship, Experiential Learning, Gooru Navigator, Digital Smart
          Learning, International Bridge Scholarship, and Graduate Abroad — work together to ensure no gifted
          student in Kashmir is held back by circumstance.
        </p>

        <div className="value-image-wrapper">
          <img
            src={valueImage}
            alt="KEI Programs Rainbow"
            className="value-image"
          />
        </div>

        <div className="value-cta">
          <p className="value-cta-text">Want to learn more about these programs?</p>
          <Link to="/what-we-do" className="value-btn-primary">
            EXPLORE OUR PROGRAMS
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ValueWeDeliver;
