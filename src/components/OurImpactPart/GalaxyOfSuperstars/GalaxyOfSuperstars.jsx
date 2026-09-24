import React, { useState } from "react";
import { Link } from "react-router-dom";
import superstars2026 from "../../../data/galaxySuperstars2026";
import impactStats from "../../../data/impactStats";
import "../../../styles/Scholar-Page/scholar-grid.css";

const scholarStats = [
  {
    number: "829",
    label: "Scholars (Grades 9–12)",
    desc: "Actively supported across multiple academic levels.",
  },
  {
    number: "70%",
    label: "First-Generation Graduates",
    desc: "Breaking barriers in access to education.",
  },
  {
    number: "21%",
    label: "Orphans",
    desc: "Receiving structured academic and emotional support.",
  },
  {
    number: "$1.2K",
    label: "Average Annual Income",
    desc: "Supporting students from economically challenged backgrounds.",
  },
  {
    number: "10",
    label: "Districts Covered",
    desc: "Extending reach across the Kashmir Valley.",
  },
  {
    number: impactStats.distinction,
    label: "Passed with Distinction",
    desc: "Reflecting strong academic excellence.",
  },
  {
    number: "42:58",
    label: "Male–Female Ratio",
    desc: "Ensuring inclusive and balanced representation.",
  },
  {
    number: "$1.8K",
    label: "Spent Per Scholar",
    desc: "Digital access, mentoring, 21ᵗʰ century skills, AI career guidance, etc.",
  },
];
const GalaxyOfSuperstars = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const storiesToShow = showAll ? superstars2026 : superstars2026.slice(0, 6);

  const toggleStories = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="section-ss-grid" style={{ backgroundColor: "#f2f3f5", padding: "20px 0 22px" }}>
      <div className="container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
        
        <div className="our-impact-layout">
          <div className="our-impact-stories-col">
            <div style={{ marginBottom: "40px", textAlign: "center" }}>
              <h2 style={{ 
                color: "#47BFDA",
                fontWeight: "800",
                fontSize: "36px",
                textTransform: "uppercase",
                margin: 0
               }}>Galaxy Of Superstars - 2026</h2>
            </div>
            <div className="ss-grid our-impact-ss-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
              {storiesToShow.map((story) => {
                const preview = story.description || "";
                const isExpanded = expandedId === story.id;
                const shouldTruncate = preview.length > 130;
                
                let truncatedText = preview;
                if (shouldTruncate && !isExpanded) {
                  let sub = preview.substring(0, 130);
                  let lastSpace = sub.lastIndexOf(" ");
                  if (lastSpace > 0) {
                    truncatedText = sub.substring(0, lastSpace) + "...";
                  } else {
                    truncatedText = sub + "...";
                  }
                }
                
                const displayText = isExpanded ? preview : truncatedText;

                const parts = story.qualifier.split(" | ");
                const examAndMarks = parts.length >= 2 ? `${parts[0]} | ${parts[1]}` : story.qualifier;
                const institution = parts.length > 2 ? parts.slice(2).join(" | ") : "";
                
                return (
                  <div className="ss-card" key={story.id} style={{ 
                    background: "#ffffff", 
                    padding: "65px 28px 30px",
                    borderRadius: "14px",
                    minHeight: "240px",
                    height: "100%"
                  }}>
                    <img 
                      src={story.thumbnail} 
                      alt={story.name} 
                      style={{ 
                        width: "76px", 
                        height: "76px", 
                        borderRadius: "50%",
                        position: "absolute",
                        top: "-38px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        border: "4px solid #ffffff",
                        objectFit: "cover",
                        backgroundColor: "#e0e0e0"
                      }} 
                    />
                    
                    <p style={{ fontSize: "13.5px", lineHeight: "1.7", minHeight: "80px", marginBottom: "20px", flexGrow: 1, fontStyle: "italic", color: "#444" }}>
                      “{displayText}”
                      {shouldTruncate && (
                        <span 
                          onClick={() => setExpandedId(isExpanded ? null : story.id)}
                          style={{ color: "#47BFDA", cursor: "pointer", fontWeight: "600", marginLeft: "4px" }}
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </span>
                      )}
                    </p>
                    <div style={{ marginTop: "auto" }}>
                      <h4 style={{ fontSize: "15px", fontWeight: "700", marginBottom: "4px" }}>{story.name}</h4>
                      <p style={{ fontSize: "13px", color: "#47BFDA", fontWeight: "600", margin: "0 0 2px 0" }}>
                        {examAndMarks}
                        {institution && (
                          <>
                            <br />
                            {institution}
                          </>
                        )}
                      </p>
                      <p style={{ fontSize: "12px", color: "#666", margin: "0" }}>{story.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="ss-buttons" style={{ marginTop: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
              <button className="btn-primary" onClick={toggleStories} style={{ padding: "12px 24px", fontSize: "13px" }}>
                {showAll ? "SHOW LESS" : "EXPLORE MORE"}
              </button>
            </div>
          </div>

          <aside className="our-impact-stats-sidebar" style={{
            background: "#ffffff",
            border: "1.5px solid #e4eef4",
            borderRadius: "14px",
            padding: "32px 24px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
            position: "sticky",
            top: "100px"
          }}>
            <div className="our-impact-sidebar-label-row">
              <span className="section-label our-impact-section-label">
                Cohort Profile
              </span>
              <Link
                to="/impact-by-numbers"
                className="section-label our-impact-section-label our-impact-numbers-link"
              >
                Impact by Numbers →
              </Link>
            </div>
            <h3 style={{ fontSize: "20px", color: "#0f1b24", marginTop: "6px", marginBottom: "24px", borderBottom: "2px solid #f4f8fb", paddingBottom: "12px", fontFamily: "Franklin Gothic Demi, sans-serif" }}>
              2025 Scholar Stats
            </h3>

            <div className="sidebar-stats-flow" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {scholarStats.map((item, index) => (
                <div className="sidebar-stat-row" key={index} style={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: index !== scholarStats.length - 1 ? "1px solid #f0f4f8" : "none",
                  paddingBottom: index !== scholarStats.length - 1 ? "16px" : "0"
                }}>
                  <strong style={{ fontSize: "26px", color: "#47BFDA", fontWeight: "800", lineHeight: "1" }}>
                    {item.number}
                  </strong>
                  <span style={{ fontSize: "13.5px", fontWeight: "700", color: "#0f1b24", marginTop: "4px" }}>
                    {item.label}
                  </span>
                  <p style={{ fontSize: "12px", color: "#666", margin: "4px 0 0", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

      </div>
    </section>
  );
};

export default GalaxyOfSuperstars;
