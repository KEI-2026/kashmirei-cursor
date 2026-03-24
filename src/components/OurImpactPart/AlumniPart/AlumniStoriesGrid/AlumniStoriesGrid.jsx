import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/Alumni-Page/alumni-grid.css";

import alumniStories from "../../../../data/AlumniStories";

const AlumniStoriesGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const storiesToShow = showAll
    ? alumniStories
    : alumniStories.slice(0, 10);

  const toggleStories = () => {
    setShowAll(!showAll);

    if (showAll) {
      setTimeout(() => {
        const section = document.getElementById("scholar-stories-grid");
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
    <section id="scholar-stories-grid" className="section-ss-grid">
      <div className="container">
        <div className="ss-grid">
          {storiesToShow.map((story) => {
            const preview =
              story?.paragraphs?.length
                ? story.paragraphs
                    .slice(0, 2)
                    .join(" ")
                    .slice(0, 400)
                    .replace(/\s+\S*$/, "") + "..."
                : "";

            return (
              <div className="ss-card" key={story.id}>
                <img src={story.thumbnail} alt={story.name} />

                <p>“{preview}”</p>

                <h4>{story.name}</h4>

                <Link
                  to={`/blog/${story.slug}`}
                  className="ss-read-more"
                  onClick={() => {
                    sessionStorage.setItem("scrollToScholarGrid", "true");
                    sessionStorage.setItem("clickedStoryId", story.id);
                  }}
                >
                  Read More →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="ss-buttons">
          <button className="btn-primary" onClick={toggleStories}>
            {showAll
              ? "SHOW LESS STORIES"
              : "EXPLORE MORE SCHOLAR STORIES"}
          </button>

          <button className="btn-outline">
            SUPPORT A SCHOLAR'S JOURNEY
          </button>
        </div>

        <div className="ss-back-top">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlumniStoriesGrid;