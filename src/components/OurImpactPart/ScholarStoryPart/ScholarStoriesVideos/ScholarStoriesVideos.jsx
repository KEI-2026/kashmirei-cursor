import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/Scholar-Page/scholar-videos.css";
import scholarVideos from "../../../../data/ScholarVideos";

const ScholarStoriesVideos = () => {
  const [showAll, setShowAll] = useState(false);

  const videosToShow = showAll
    ? scholarVideos
    : scholarVideos.slice(0, 3);

  const toggleVideos = () => {
    setShowAll(!showAll);

    if (showAll) {
      setTimeout(() => {
        const section = document.getElementById("scholar-videos-section");
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
    <section id="scholar-videos-section" className="section-ss-videos">
      <div className="container">
        <span className="ss-label">KEI ALUMNI SUCCESS</span>
        <h2>
          KEI didn’t just help me study; <br />
          they helped me dream.
        </h2>

        <div className="ss-video-grid">
          {videosToShow.map((story) => (
            <Link
              key={story.id}
              to={`/scholar-video/${story.slug}`}
              className="ss-video-card"
            >
              <div className="ss-video-thumb-wrap">
                <img
                  src={story.thumbnail}
                  alt={story.name}
                  className="ss-video-thumbnail"
                />
              </div>

              <div className="ss-video-info">
                <img
                  src={story.image}
                  alt={story.name}
                  className="ss-video-avatar"
                />

                <div className="ss-video-text">
                  <h4>{story.name}</h4>
                  <p>{story.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {scholarVideos.length > 3 && (
          <button className="btn-primary ss-bottom-btn" onClick={toggleVideos}>
            {showAll
              ? "SHOW LESS VIDEOS"
              : "EXPLORE MORE SCHOLAR VIDEOS"}
          </button>
        )}
      </div>
    </section>
  );
};

export default ScholarStoriesVideos;