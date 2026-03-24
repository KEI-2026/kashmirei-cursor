import React from "react";
import "../../../styles/ImpactByNumbers/impact-by-numbers.css";

const ImpactSection = () => {
  const impactStats = [
    {
      number: "2,800+",
      title: "High School Scholars",
      description:
        "Students supported through KEI’s scholarship programs, helping young learners continue their education with confidence and consistency.",
    },
    {
      number: "1-on-1",
      title: "Mentorship Support",
      description:
        "Personalized mentoring that helps scholars navigate academics, careers, leadership growth, and long-term life decisions.",
    },
    {
      number: "3+",
      title: "Core Program Areas",
      description:
        "KEI focuses on scholarships, mentorship, and experiential learning to create a strong and holistic support system for scholars.",
    },
    {
      number: "100s",
      title: "Workshops & Sessions",
      description:
        "Scholars benefit from regular career awareness sessions, supercoach support, workshops, and leadership development opportunities.",
    },
    {
      number: "Years of",
      title: "Community Impact",
      description:
        "KEI continues to build lasting educational impact by supporting resilient students and investing in their long-term growth.",
    },
    {
      number: "Countless",
      title: "Dreams Strengthened",
      description:
        "Behind every number is a scholar, a family, and a story of determination made stronger through opportunity and support.",
    },
  ];

  return (
    <section className="section-impact">
      <div className="impact-container">
        <div className="impact-header">
          <span className="impact-label">IMPACT BY NUMBERS</span>
          <h2>Measuring Change, One Scholar at a Time</h2>
          <p>
            Every number reflects a real journey of resilience, opportunity,
            and transformation made possible through KEI’s support.
          </p>
        </div>

        <div className="impact-stats-grid">
          {impactStats.map((item, index) => (
            <div className="impact-stat-card" key={index}>
              <h3>{item.number}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;