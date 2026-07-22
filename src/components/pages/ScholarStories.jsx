import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScholarStoriesHero from "../OurImpactPart/ScholarStoryPart/ScholarStoriesHero/ScholarStoriesHero";
import AlumniStoriesVideos from "../OurImpactPart/AlumniPart/AlumniStoriesVideos/AlumniStoriesVideos";
import MentorshipSuccessStories from "../OurImpactPart/MentorshipPart/MentorshipSuccessStories";
import scholarStories from "../../data/ScholarStories";
import impactStats from "../../data/impactStats";
import "../../styles/Scholar-Page/scholar-grid.css";
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

const ScholarStories = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Relying on ScrollToTop component and hash routing
  }, []);

  // Sort stories by year DESC
  const sortedStories = [...scholarStories].sort(
    (a, b) => (b.year || 0) - (a.year || 0)
  );

  // Show 6 initially in the 2-column list, rest on "Explore More"
  const storiesToShow = showAll
    ? sortedStories
    : sortedStories.slice(0, 6);

  const toggleStories = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <ScholarStoriesHero />

      <section id="our-impact-section" className="section-ss-grid" style={{ backgroundColor: "#f2f3f5", padding: "60px 0 22px" }}>
        <div className="container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
          
          {/* Main layout */}
          <div className="our-impact-layout">
            
            {/* Columns 1 & 2: Scholar Stories Grid */}
            <div className="our-impact-stories-col">
              <div style={{ marginBottom: "32px" }}>
                <span className="our-impact-hero-label">Real Journeys. Real Results.</span>
              </div>

              <div className="ss-grid our-impact-ss-grid">
                {storiesToShow.map((story) => {
                  const preview = story?.paragraphs?.join(" ") || "";
                  const truncatedPreview = preview.length > 200 ? preview.substring(0, 200) + "..." : preview;

                  return (
                    <div className="ss-card" key={story.id} style={{ 
                      background: "#ffffff", 
                      padding: "65px 28px 30px",
                      borderRadius: "14px",
                      minHeight: "280px"
                    }}>
                      <img src={story.thumbnail} alt={story.name} style={{ width: "76px", height: "76px", top: "-38px" }} />
                      <p className="ss-preview" style={{ fontSize: "13.5px", lineHeight: "1.7", minHeight: "130px" }}>
                        “{truncatedPreview}”
                      </p>
                      <h4 style={{ fontSize: "15px", fontWeight: "700" }}>{story.name}</h4>
                      <Link
                        to={`/blog/${story.slug}`}
                        className="ss-read-more"
                        style={{ textDecoration: "none", fontSize: "13px", fontWeight: "600", display: "inline-block", marginTop: "10px" }}
                      >
                        Read Full Story →
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div className="ss-buttons" style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={toggleStories} style={{ padding: "12px 24px", fontSize: "13px" }}>
                  {showAll ? "SHOW LESS STORIES" : "EXPLORE MORE STORIES"}
                </button>
                <Link to="/donate" className="btn-outline" style={{ padding: "12px 24px", fontSize: "13px", display: "inline-block", textAlign: "center" }}>
                  SUPPORT A SCHOLAR'S JOURNEY
                </Link>
              </div>
            </div>

            {/* Column 3: Scholar Stats Sidebar */}
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

      <AlumniStoriesVideos />
      <MentorshipSuccessStories />
    </>
  );
};

export default ScholarStories;
