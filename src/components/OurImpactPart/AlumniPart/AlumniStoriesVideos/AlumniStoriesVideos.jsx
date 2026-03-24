import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/Alumni-Page/alumni-videos.css";
import alumniVideos from "../../../../data/AlumniVideos";

const AlumniStoriesVideos = () => {
  const [showAll, setShowAll] = useState(false);

  const videosToShow = showAll ? alumniVideos : alumniVideos.slice(0, 3);

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
              <h4 className="ss-video-name">{story.name}</h4>

              <div className="ss-video-thumb-wrap">
                <img
                  src={story.thumbnail}
                  alt={story.name}
                  className="ss-video-thumbnail"
                />
              </div>

              <div className="ss-video-bottom">
                <img
                  src={story.image}
                  alt={story.name}
                  className="ss-video-avatar"
                />
                <p className="ss-video-subtitle">{story.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {alumniVideos.length > 3 && (
          <button className="btn-primary ss-bottom-btn" onClick={toggleVideos}>
            {showAll ? "SHOW LESS VIDEOS" : "EXPLORE MORE SCHOLAR VIDEOS"}
          </button>
        )}
      </div>
    </section>
  );
};

export default AlumniStoriesVideos;