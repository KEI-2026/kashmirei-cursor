import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScholarStoriesHero from "../OurImpactPart/ScholarStoryPart/ScholarStoriesHero/ScholarStoriesHero";
import AlumniStoriesVideos from "../OurImpactPart/AlumniPart/AlumniStoriesVideos/AlumniStoriesVideos";
import MentorshipSuccessStories from "../OurImpactPart/MentorshipPart/MentorshipSuccessStories";
import GalaxyOfSuperstars from "../OurImpactPart/GalaxyOfSuperstars/GalaxyOfSuperstars";
import scholarStories from "../../data/ScholarStories";
import "../../styles/Scholar-Page/scholar-grid.css";

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

      <GalaxyOfSuperstars />

      <section id="our-impact-section" className="section-ss-grid" style={{ backgroundColor: "#f2f3f5", padding: "20px 0 22px" }}>
        <div className="container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
          
          {/* Main layout */}
          <div className="our-impact-layout" style={{ display: "block" }}>
            
            {/* Columns 1 & 2: Scholar Stories Grid */}
            <div className="our-impact-stories-col" style={{ width: "100%" }}>
              <div style={{ marginBottom: "32px" }}>
                <span className="our-impact-hero-label">Real Journeys. Real Results.</span>
              </div>

              <div className="ss-grid our-impact-ss-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
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

          </div>

        </div>
      </section>

      <AlumniStoriesVideos />
      <MentorshipSuccessStories />
    </>
  );
};

export default ScholarStories;
