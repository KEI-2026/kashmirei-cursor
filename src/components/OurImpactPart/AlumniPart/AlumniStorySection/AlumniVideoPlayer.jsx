import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import alumniVideos from "../../../../data/AlumniVideos";
import "../../../../styles/Alumni-Page/alumni-video-player.css";

const AlumniVideoPlayer = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const videoStory = alumniVideos.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [slug]);

  if (!videoStory) {
    return <div className="video-not-found">Video not found</div>;
  }

  return (
    <section className="section-scholar-video-player">
      <div className="container">
        <div className="scholar-video-content">
          <div className="scholar-video-header">
            <img src={videoStory.image} alt={videoStory.name} />
            <h1>{videoStory.name}</h1>
            <p>{videoStory.subtitle}</p>
          </div>

          <div className="scholar-video-wrapper">
            <iframe
              src={videoStory.video}
              title={videoStory.name}
              className="scholar-video-element"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="scholar-video-shortcuts">
            <span>Use YouTube controls for playback</span>
          </div>

          <button
            className="video-back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back to Alumni Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlumniVideoPlayer;