import React from "react";
import { Link } from "react-router-dom";
import scholarStories from "../../../data/ScholarStories";
import "../../../styles/Scholar-Page/story-grid.css";

const ScholarStorySection = () => {

  const years = [...new Set(scholarStories.map(story => story.year))];

  // Sort newest year first
  years.sort((a, b) => b - a);

  const handleClick = (storyId) => {
    sessionStorage.setItem("scrollToScholarGrid", "true");
    sessionStorage.setItem("clickedStoryId", storyId);
  };

  return (
    <section id="scholar-stories-grid" className="story-archive">

      <div className="story-wrapper">

        {years.map((year) => {

          const storiesByYear = scholarStories
            .filter((story) => story.year === year)
            .sort((a, b) => b.id - a.id);

          return (

            <div key={year} className="year-section">

              <h2 className="year-heading">{year}</h2>

              <div className="story-grid">

                {storiesByYear.map((story) => (

                  <Link
                    key={story.id}
                    id={`story-card-${story.id}`}
                    data-story-id={story.id}
                    to={`/blog/${story.slug}`}
                    className="story-card"
                    onClick={() => handleClick(story.id)}
                  >

                    <div className="story-thumb">
                      <img
                        src={story.thumbnail}
                        alt={story.name}
                        loading="lazy"
                      />
                    </div>

                    <p className="story-name">
                      {story.name}
                    </p>

                  </Link>

                ))}

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
};

export default ScholarStorySection;