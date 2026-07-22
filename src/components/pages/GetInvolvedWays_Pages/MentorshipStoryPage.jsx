import { useParams, useNavigate } from "react-router-dom";
import mentorshipStories from "../../../data/MentorshipStories";
import "../../../styles/Get-Involved/mentorship-story-page.css";

const MentorshipStoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const story = mentorshipStories.find((s) => s.slug === slug);

  if (!story) return <div>Story not found</div>;

  return (
    <section className="ms-story-page">
      <div className="story-container">

        

        {/* Title */}
        <h1 className="story-title">{story.title}</h1>

        {/* Mentor ↔ Mentee Header */}
        <div className="story-people">
          <div>
            <img src={story.menteeImage} alt={story.menteeName} />
            <p>{story.menteeName}</p>
          </div>

          <div className="connector">↔</div>

          <div>
            <img src={story.mentorImage} alt={story.mentorName} />
            <p>{story.mentorName}</p>
          </div>
        </div>

        {/* ================= TEXT FLOW ================= */}

        <div className="story-text">

          {/* Mentor Image Float */}
          <div className="story-image">
            <img src={story.mentorImage} alt={story.mentorName} />
          </div>

          <h3 className="section-heading">Mentor: {story.mentorName}</h3>

          {story.mentorParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {/* Mentee Image Float */}
          <div className="story-image">
            <img src={story.menteeImage} alt={story.menteeName} />
          </div>

          <h3 className="section-heading">Mentee: {story.menteeName}</h3>

          {story.menteeParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

        </div>

        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    </section>
  );
};

export default MentorshipStoryPage;