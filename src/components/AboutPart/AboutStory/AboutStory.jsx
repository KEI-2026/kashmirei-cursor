import React from "react";
import "../../../styles/About/about.css";

const timelineItems = [
  {
    year: "2008",
    title: "The Beginning",
    body: "Barriers to education in conflict-affected Kashmir inspired a group of Kashmiri professionals to act. What began as a small scholarship effort gave a handful of bright but at-risk students a chance they would never have had.",
  },
  {
    year: "2012 – 2016",
    title: "The Mission Takes Shape",
    body: "Scholarships alone were not enough. KEI expanded into mentorship, career awareness, leadership development, and digital learning — building an ecosystem rather than just a safety net.",
  },
  {
    year: "Today",
    title: "A Movement, Not Just a Programme",
    body: "Eight interconnected programmes, 2,500+ scholars supported, and a global diaspora network united by one belief: education is the most powerful force for change in a conflict-affected society.",
  },
];

const AboutStory = () => {
  return (
    <section className="section-about-story">
      <div className="about-story-container">

        {/* Left sticky column */}
        <div className="about-story-left">
          <div className="about-section-num">01</div>
          <span className="about-label">OUR STORY</span>
          <h2>How KEI<br />Began.</h2>
          <p className="about-story-intro">
            What started in 2008 as a small scholarship effort has grown into
            a movement for equitable education — founded by Kashmiri
            professionals who believed that learning could transform lives
            in conflict-affected regions.
          </p>
        </div>

        {/* Right timeline */}
        <div className="about-story-right">
          <div className="about-timeline">
            {timelineItems.map((item, i) => (
              <div className="about-timeline-item" key={i}>
                <div className="about-timeline-node">
                  <div className="about-timeline-dot" />
                  {i < timelineItems.length - 1 && (
                    <div className="about-timeline-line" />
                  )}
                </div>
                <div className="about-timeline-body">
                  <span className="about-timeline-year">{item.year}</span>
                  <h4 className="about-timeline-title">{item.title}</h4>
                  <p className="about-timeline-text">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
