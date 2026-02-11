import React from "react";
import "../../styles/stats.css";
import statsImage from "../../assets/Images/about-home.jpg"; 
// ⚠️ adjust case if folder is images

const StatsSection = () => {
  return (
    <section className="section-stats">
      <div className="stats-container">

        {/* LEFT TEXT */}
        <div className="stats-content">
          <span className="stats-label">IMAGINE THIS</span>

          <h3>Why KEI Support Matters</h3>

          <p>
            We believe that every young person has the potential to
            change the world, regardless of their background or
            circumstances. KEI ensures a supportive structure of
            financial scholarships, mentors and digital resources
            are provided to students to succeed.
          </p>

          <blockquote>
            “Donating to KEI creates a lasting, force multiplier impact.
            These students represent our future.”
            <br />
            <span>– KEI Donor</span>
          </blockquote>

          <a href="/donate" className="button">
            Donate Now
          </a>
        </div>

        {/* CENTER IMAGE */}
        <figure className="stats-image">
          <img src={statsImage} alt="Why Support KEI" />
        </figure>

        {/* RIGHT STATS COLUMN */}
        <div className="stats-column">
  <div className="stat-item"><h3>2,500+</h3><p>Scholarships Awarded</p></div>
  <div className="stat-item"><h3>100+</h3><p>Digital Devices Provided</p></div>
  <div className="stat-item"><h3>100+</h3><p>Career Workshops Conducted</p></div>
  <div className="stat-item"><h3>96%</h3><p>Scholars Graduate With Distinction</p></div>
  <div className="stat-item"><h3>200+</h3><p>Alumni Professionals</p></div>
        </div>


      </div>
    </section>
  );
};

export default StatsSection;
