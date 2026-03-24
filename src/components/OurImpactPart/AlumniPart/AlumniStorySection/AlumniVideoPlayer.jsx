import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import alumniVideos from "../../../../data/AlumniVideos";
import "../../../../styles/Alumni-Page/alumni-video-player.css";

const AlumniVideoPlayer = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const videoStory = alumniVideos.find((item) => item.slug === slug);

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    const startVideo = async () => {
      try {
        video.focus();
        video.muted = false;
        video.load();

        const onLoaded = async () => {
          try {
            if (video.currentTime === 0) {
              video.currentTime = 0.01;
            }
            await video.play();
          } catch (error) {
            // autoplay with sound may still be blocked by browser
          }
        };

        if (video.readyState >= 2) {
          onLoaded();
        } else {
          video.addEventListener("loadeddata", onLoaded, { once: true });
        }
      } catch (error) {
        // do nothing
      }
    };

    const timer = setTimeout(startVideo, 120);
    return () => clearTimeout(timer);
  }, [slug]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const video = videoRef.current;
      if (!video) return;

      const activeTag = document.activeElement?.tagName?.toLowerCase();
      const isTyping =
        activeTag === "input" ||
        activeTag === "textarea" ||
        document.activeElement?.isContentEditable;

      if (isTyping) return;

      if (e.code === "Space") {
        e.preventDefault();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }

      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        handleFullscreen();
      }

      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        video.muted = !video.muted;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        video.currentTime = Math.min(
          video.duration || 0,
          video.currentTime + 5
        );
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        video.currentTime = Math.max(0, video.currentTime - 5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              preload="auto"
              tabIndex="0"
              className="scholar-video-element"
            >
              <source src={videoStory.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="scholar-video-shortcuts">
            <span>Space = Play/Pause</span>
            <span>F = Fullscreen</span>
            <span>M = Mute</span>
            <span>← / → = Seek 5s</span>
          </div>

          <button
            className="video-back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back to Scholar Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlumniVideoPlayer;