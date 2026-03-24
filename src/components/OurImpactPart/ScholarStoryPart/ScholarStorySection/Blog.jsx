import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import scholarStories from "../../../../data/ScholarStories";
import "../../../../styles/Scholar-Page/story-section.css";

const Blog = () => {

  const { slug } = useParams();
  const navigate = useNavigate();

  const story = scholarStories.find(
    s => s.slug === slug
  );

  if (!story) {
    return <div>Story not found</div>;
  }

  const handleBackClick = () => {
    navigate(-1); // 🔥 go back one step
  };

  return (
    <section className="story-section">

      <div className="story-container">

        


        {/* Back button */} 
        {/* <button className="back-button" 
        onClick={handleBackClick} > 
          ← Back to Scholar Stories 
          </button> */}

        <div className="story-date">{story.date}</div>

        <h1 className="story-title">{story.title}</h1>

        <div className="story-text">

          <div className="story-image">
            <img src={story.image} alt={story.name} />
          </div>

          {story.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

        </div>

        {/* Back button */}
        <button
          className="back-button"
          onClick={handleBackClick}
        >
          ← Back to Scholar Stories
        </button>

      </div>

    </section>
  );
};

export default Blog;