import React from "react";
import "../../../styles/Home/why-kei-exists.css";
import "../../../styles/Home/home-sections.css";
import whyKeiExistsImage from "../../../assets/Images/why-kei-exists.jpg";

const WhyKeiExists = () => {
  return (
    <section className="why-kei-exists">
      <div className="why-kei-exists-container">
        <div className="why-kei-exists-content">
          <span className="wwd-section-label home-section-eyebrow">Why KEI Exists</span>
          <h2 className="home-section-heading">Talent is everywhere in Kashmir. Opportunity isn&apos;t.</h2>
          <p>
            Every year, thousands of Kashmir&apos;s brightest students are forced to
            abandon their education — not for lack of ability, but due to economic
            challenges. KEI exists to ensure talent gets an opportunity.
          </p>
          <p>
            Since 2008, we have found these students — bright, determined, and at
            risk of being left behind — and stood beside them from high school
            classrooms to universities around the world. And the same scholars return
            as mentors for the next generation.
          </p>
          <p>
            That&apos;s the cycle of giving we are building. And there is a place in
            it for you!
          </p>
        </div>

        <div className="why-kei-exists-media">
          <img
            src={whyKeiExistsImage}
            alt="KEI scholars reading together at a community bookshelf in Kashmir"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyKeiExists;
