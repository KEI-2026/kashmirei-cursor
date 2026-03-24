import { useNavigate } from "react-router-dom";
import "../../../styles/Get-Involved/become-mentor.css";

const BecomeMentor = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back one page
  };

  return (
    <section className="gi-page">
      <div className="container">
        

        <h1>Become a Mentor</h1>
        <p>
          Share your knowledge and guide scholars towards a brighter future.
          Your mentorship can shape careers and transform lives.
        </p>

        {/* Back button */}
        <button className="back-button" onClick={handleBackClick}>
          ← Back to Previous Page
        </button>
      </div>
    </section>
  );
};

export default BecomeMentor;