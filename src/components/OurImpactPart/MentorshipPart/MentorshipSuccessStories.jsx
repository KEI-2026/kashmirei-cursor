import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Get-Involved/mentorship-stories.css";
import mentorshipStories from "../../../data/MentorshipStories";

const MentorshipSuccessStories = () => {
  const [showAll, setShowAll] = useState(false);

  const storiesToShow = showAll
    ? mentorshipStories
    : mentorshipStories.slice(0, 3);

  const toggleStories = () => {
    setShowAll((prev) => !prev);

    if (showAll) {
      setTimeout(() => {
        const section = document.getElementById("mentorship-success");
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <section id="mentorship-success" className="section-ms-grid" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">

        <span className="our-impact-hero-label">Mentorship Success Stories</span>
        
        <h2>Real stories of transformation, guidance, and growth through mentorship.</h2>

        <div className="ms-grid">
          {storiesToShow.map((story) => {

            // ✅ Clean preview (NO slicing — CSS handles it)
            const preview =
              story?.mentorParagraphs?.length
                ? story.mentorParagraphs.slice(0, 2).join(" ")
                : "";

            return (
              <div className="ms-card" key={story.id}>

                {/* Avatars */}
                <div className="ms-avatars">
                  <div className="avatar">
                    <img src={story.menteeImage} alt={story.menteeName} />
                  </div>
                  <div className="avatar">
                    <img src={story.mentorImage} alt={story.mentorName} />
                  </div>
                </div>

                {/* Text */}
                <p>“{preview}”</p>

                {/* Names */}
                <h4>{story.menteeName}</h4>
                <span className="mentor-name">
                  Mentored by {story.mentorName}
                </span>

                {/* Read More */}
                <Link
                  to={`/mentorship/${story.slug}`}
                  className="ms-read-more"
                >
                  Read More →
                </Link>
              </div>
            );
          })}
        </div>

        {mentorshipStories.length > 3 && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button className="btn-primary" onClick={toggleStories} style={{ padding: "12px 24px", fontSize: "13px" }}>
              {showAll ? "SHOW LESS STORIES" : "SHOW MORE MENTORSHIP STORIES"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MentorshipSuccessStories;
