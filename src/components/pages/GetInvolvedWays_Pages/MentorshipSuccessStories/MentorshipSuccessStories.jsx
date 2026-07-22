import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/Get-Involved/mentorship-stories.css";
import mentorshipStories from "../../../../data/MentorshipStories";

const MentorshipSuccessStories = () => {
  const [showAll, setShowAll] = useState(false);

  const storiesToShow = showAll
    ? mentorshipStories
    : mentorshipStories.slice(0, 3);

  const toggleStories = () => {
    setShowAll((prev) => !prev);

    if (showAll) {
      setTimeout(() => {
        const section = document.querySelector(".section-ms-grid");
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
    <section className="section-ms-grid">
      <div className="container">

        <h1>Mentorship Success Stories</h1>

        <p className="intro">
          Real stories of transformation, guidance, and growth through mentorship.
        </p>

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

        {/* Buttons */}
        <div className="ms-buttons">
          <button className="btn-primary" onClick={toggleStories}>
            {showAll ? "SHOW LESS STORIES" : "EXPLORE MORE STORIES"}
          </button>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKvVgYMBk7IyH-rIR43V9B-3ZQUyZunFZxMWYi2Wq3VZu4Lg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            BECOME A MENTOR
          </a>
        </div>

      </div>
    </section>
  );
};

export default MentorshipSuccessStories;