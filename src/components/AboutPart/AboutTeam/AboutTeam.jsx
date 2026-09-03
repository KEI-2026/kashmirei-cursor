import React, { useState } from "react";
import "../../../styles/About/about.css";

const PersonIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-placeholder-icon">
    <circle cx="40" cy="30" r="16" fill="#c8d6e0" />
    <path d="M10 72c0-16.6 13.4-30 30-30s30 13.4 30 30" fill="#c8d6e0" />
  </svg>
);

const TeamMemberAvatar = ({ name }) => {
  const [errorName, setErrorName] = useState("");

  const formattedName = name ? name.trim().toLowerCase().replace(/\s+/g, "_") : "";
  const isPlaceholder = !name || name.trim() === "—" || name.toLowerCase().includes("coming soon");
  const hasError = errorName === name;

  if (isPlaceholder || hasError) {
    return <PersonIcon />;
  }

  const imgUrl = new URL(`../../../assets/Images/Team/${formattedName}.png`, import.meta.url).href;

  return (
    <img 
      src={imgUrl} 
      alt={name} 
      onError={() => setErrorName(name)} 
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%"
      }}
    />
  );
};

const defaultBoardMembers = [
  { name: "Faisal Farooq", title: "President" },
  { name: "Irfan Banihali", title: "Treasurer" },
  { name: "Suhel Shah", title: "Board Member" },
  { name: "Yunis Fazili", title: "Board Member" },
  { name: "Imran Amin", title: "Board Member" },
  { name: "Maheen Akram", title: "Secretary" },
  { name: "Sidra Sheikh", title: "Coordinator" },
  { name: "Name Coming Soon", title: "Officer" },
];

const defaultOpsTeam = [
  { name: "Yasir Khanyari", title: "Operation's Director" },
  { name: "Kousar Khan", title: "Program Officer" },
  { name: "Firdous Hussain", title: "Program Officer" },
  { name: "Danish Munshi", title: "Program Officer" },
  { name: "Tayaba Khan", title: "Program Officer" },
  { name: "Syed Uzma", title: "Assistant Program Officer" },
  { name: "Raja Adil", title: "Senior Field Officer" },
  { name: "Qamran Latief", title: "Field Officer" },
  { name: "Mir Amaan", title: "IT Admin" },
  { name: "Mohammad Daniyal", title: "IT Admin" },
];

const AboutTeam = () => {
  const board = defaultBoardMembers;
  const ops = defaultOpsTeam;

  return (
    <section className="section-about-team">
      <div className="about-team-container">

        <div className="about-team-header">
          <span className="about-label">THE PEOPLE BEHIND KEI</span>
        </div>

        {/* Board of Directors */}
        <div className="about-team-tier">
          <h3 className="about-team-tier-title">Board of Directors &amp; Officers</h3>
          <div className="about-team-grid">
            {board.map((m, i) => (
              <div className="about-team-card" key={i}>
                <div className="about-avatar-wrap">
                  <TeamMemberAvatar name={m.name} />
                </div>
                <h4 className="about-team-name" style={{ margin: "16px 0 4px", fontSize: "16px", color: "#0f1b24" }}>
                  {m.name}
                </h4>
                <p className="about-team-role">{m.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operations Team */}
        <div className="about-team-tier">
          <h3 className="about-team-tier-title">Operations Team — Kashmir</h3>
          <div className="about-team-grid about-team-grid--sm">
            {ops.map((m, i) => (
              <div className="about-team-card" key={i}>
                <div className="about-avatar-wrap">
                  <TeamMemberAvatar name={m.name} />
                </div>
                <h4 className="about-team-name" style={{ margin: "16px 0 4px", fontSize: "15px", color: "#0f1b24" }}>
                  {m.name}
                </h4>
                <p className="about-team-role">{m.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
