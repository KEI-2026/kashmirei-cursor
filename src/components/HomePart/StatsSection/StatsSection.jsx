import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/stats.css";
import "../../../styles/For-Scholars/forscholars-programs.css";
import impactStats from "../../../data/impactStats";

const stats = [
  {
    value: impactStats.scholarships,
    label: "Scholarships Awarded",
    meaning: "one family's trajectory at a time",
  },
  {
    value: impactStats.distinction,
    label: "Graduate With Distinction",
    meaning: "support works when it's more than money",
  },
  {
    value: impactStats.mentors,
    label: "Active Mentors",
    meaning: "the Kashmiri diaspora giving back",
  },
  {
    value: impactStats.countries,
    label: "Countries",
    meaning: "scholars at universities worldwide",
  },
];

const StatsSection = () => {
  return (
    <section className="section-stats">
      <div className="stats-inner">
        <span className="wwd-section-label home-section-eyebrow">Our Impact</span>
        <h2 className="home-section-heading">Eighteen years. One promise kept.</h2>

        <div className="stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="stats-card">
              <p className="stats-value">{item.value}</p>
              <h3 className="stats-label">{item.label}</h3>
              <p className="stats-meaning">{item.meaning}</p>
            </article>
          ))}
        </div>

        <Link to="/impact-by-numbers" className="stats-cta-link">
          See the full impact →
        </Link>
      </div>
    </section>
  );
};

export default StatsSection;
