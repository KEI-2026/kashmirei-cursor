import React from "react";
import "../../../../styles/Events/events-hero.css";
import heroBg from "../../../../assets/Images/home-about.JPG";

const EventsHero = () => {
  return (
    <section
      className="section-ann-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="ann-hero-overlay" />
      <div className="ann-hero-content">
        <span className="ann-hero-label">DISCOVER & PARTICIPATE</span>
        <h1>
          Our Events &<br />
          <span>Gatherings.</span>
        </h1>
      </div>
    </section>
  );
};

export default EventsHero;
