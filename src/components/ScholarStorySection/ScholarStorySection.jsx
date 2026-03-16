import React from "react";
import { Link } from "react-router-dom";
import scholarStories from "../../data/ScholarStories";
import "../../styles/Scholar-Page/story-grid.css";

const ScholarStorySection = () => {

  // Get unique years automatically
  const years = [...new Set(scholarStories.map(story => story.year))];

  // Sort newest year first
  years.sort((a, b) => b - a);

  return (
    <section className="story-archive">

      {years.map(year => {

        const storiesByYear = scholarStories.filter(
          story => story.year === year
        );

        return (

          <div key={year} className="year-section">

            <h2 className="year-heading">{year}</h2>

            <div className="story-grid">

              {storiesByYear.map(story => (

                <Link
                  key={story.id}
                  to={`/blog/${story.slug}`}   // ✅ Correct navigation
                  className="story-card"
                >

                  <img src={story.thumbnail} alt={story.name} />  {/* ✅ Thumbnail */}

                  <p className="story-name">{story.name}</p>

                </Link>

              ))}

            </div>

          </div>

        );

      })}

    </section>
  );
};

export default ScholarStorySection;