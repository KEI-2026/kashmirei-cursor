import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/our-model.css";
import "../../../styles/For-Scholars/forscholars-programs.css";
import "../../../styles/Home/home-sections.css";
import CardIcon from "../../shared/CardIcon";
import impactBg from "../../../assets/Images/home-impact-bg.jpg";

const pillars = [
  {
    id: "identity",
    icon: "identity",
    title: "Identity",
    description: "Develop competent and confident contributors",
  },
  {
    id: "tools",
    icon: "tools",
    title: "Tools",
    description: "Provide access to academics and develop competencies",
  },
  {
    id: "tribe",
    icon: "tribe",
    title: "Tribe",
    description: "Provide a sense of tribe and mentorship",
  },
];

const OurModel = () => {
  return (
    <section
      className="our-model our-model--dark"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      <div className="our-model-bg-overlay" aria-hidden="true" />
      <div className="our-model-container">
        <span className="wwd-section-label home-section-eyebrow">How We Create Change</span>
        <h2 className="home-section-heading home-section-heading--light">
          More than academic support
        </h2>
        <p className="our-model-intro">
          We call our students Scholars and give them an identity. Our programs follow
          each Scholar across their full educational journey — from high school through
          graduate study abroad — combining academics, mentorship, 21st-century skills,
          and career guidance. Together they reflect our model of Identity, Tools, and
          Tribe: helping Scholars become competent, confident contributors, equipped with
          the right skills and surrounded by a community that keeps them together.
        </p>

        <div className="our-model-grid">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="our-model-card">
              <CardIcon name={pillar.icon} className="our-model-card-icon" />
              <h3 className="home-box-title">{pillar.title}</h3>
              <p className="home-box-text">{pillar.description}</p>
            </article>
          ))}
        </div>

        <Link to="/for-scholars" className="our-model-cta">
          I am a student, I want to learn more about the programs →
        </Link>
      </div>
    </section>
  );
};

export default OurModel;
