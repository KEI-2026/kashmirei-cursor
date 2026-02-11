import React from "react";
import "../../styles/whatwedo-programs.css";

import scholarship from "../../assets/Images/scholarshipp.webp";
import mentorship from "../../assets/Images/mentorshipp.webp";
import device from "../../assets/Images/devicee.webp";

const WhatWeDoPrograms = () => {
  return (
    <section className="section-wwd-programs">
      <div className="wwd-container">

        <div className="wwd-programs-grid">

          <div className="wwd-program-card">
            <div className="wwd-program-icon">
              <img src={scholarship} alt="Scholarships" />
            </div>

            <h3>Scholarships</h3>

            <p>
              High School, UG & PG <br />
              Graduate Abroad (GAP) <br />
              IBSP (International Bridge)
            </p>

            <strong>2,500+ High School Scholars</strong>
          </div>

          <div className="wwd-program-card">
            <div className="wwd-program-icon">
              <img src={mentorship} alt="Mentorship" />
            </div>

            <h3>Mentorship</h3>

            <p>
              1-on-1 Mentoring <br />
              Supercoach Sessions <br />
              Leadership with CMI
            </p>
          </div>

          <div className="wwd-program-card">
            <div className="wwd-program-icon">
              <img src={device} alt="Experiential Learning" />
            </div>

            <h3>Experiential Learning</h3>

            <p>
              AI Career Mapping <br />
              Workshops <br />
              Career Awareness Events
            </p>
          </div>

        </div>

        

      </div>
    </section>
  );
};

export default WhatWeDoPrograms;
