import React from "react";
import "../../../styles/About/about.css";

const values = [
  {
    num: "01",
    color: "#48BEDA",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L6 10v10c0 8.3 6 16.1 14 18 8-1.9 14-9.7 14-18V10L20 4z"
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Transparency & Integrity",
    desc: "Accountability in every process, partnership, and financial decision. Our donors and scholars deserve nothing less.",
  },
  {
    num: "02",
    color: "#1B4F8A",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="20" cy="20" rx="6" ry="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 20h28M8 13h24M8 27h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Non-Political & Non-Religious",
    desc: "Inclusive and focused purely on education. We serve every student, regardless of background, belief, or affiliation.",
  },
  {
    num: "03",
    color: "#E8A020",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8v8M20 24v8M8 20h8M24 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M11 11l4 4M25 25l4 4M11 29l4-4M25 15l4-4"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Continuous Improvement",
    desc: "We constantly refine our programmes with feedback, data, and new thinking to serve our students better every year.",
  },
  {
    num: "04",
    color: "#2E7D32",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="26" cy="14" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 34c0-5 3.6-8 8-8s8 3 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 34c0-5 3.6-8 8-8s8 3 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Open Governance",
    desc: "Collaborative decision-making and full transparency across teams, from our Board of Directors to our Kashmir-based staff.",
  },
];

const AboutValues = () => {
  return (
    <section className="section-about-values">
      <div className="about-values-container">
        <div className="about-values-header">
          <div className="about-section-num">03</div>
          <span className="about-label">WHAT GUIDES US</span>
          <h2>Four Values.<br />One Purpose.</h2>
          <p className="about-values-sub">
            These principles shape every programme we build, every
            partnership we form, and every decision we make.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((v) => (
            <div
              key={v.num}
              className="about-value-card"
              style={{ "--val-color": v.color }}
            >
              <div className="about-value-num">{v.num}</div>
              <div className="about-value-icon" style={{ color: v.color }}>
                {v.icon}
              </div>
              <h4 className="about-value-title">{v.title}</h4>
              <p className="about-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
