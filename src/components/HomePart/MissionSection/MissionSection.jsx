import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/mission.css";
import "../../../styles/For-Scholars/forscholars-programs.css";
import "../../../styles/Get-Involved/getinvolved-ways.css";
import "../../../styles/Home/home-sections.css";
import CardIcon from "../../shared/CardIcon";

const pathways = [
  {
    id: "mentor",
    icon: "mentor",
    title: "Give your experience",
    description: "Mentor one scholar for 2 hours a month.",
    button: "Become a Mentor",
    to: "/get-involved",
  },
  {
    id: "volunteer",
    icon: "heart-handshake",
    title: "Give your time",
    description:
      "Volunteer with us, help with programs, outreach and research.",
    button: "Volunteer",
    to: "/get-involved",
  },
  {
    id: "donate",
    icon: "donate",
    title: "Give your support",
    description: "Fund the programs that support our Scholars.",
    button: "Donate",
    to: "/donate",
  },
];

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <span className="wwd-section-label home-section-eyebrow">Get Involved</span>
        <h2 className="home-section-heading">There&apos;s a place for you here</h2>

        <div className="mission-grid">
          {pathways.map((pathway) => (
            <article key={pathway.id} className="mission-card">
              <CardIcon name={pathway.icon} className="mission-card-icon" />
              <h3 className="home-box-title">{pathway.title}</h3>
              <p className="home-box-text">{pathway.description}</p>
              <Link to={pathway.to} className="gi-modal-btn mission-card-btn">
                {pathway.button}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
