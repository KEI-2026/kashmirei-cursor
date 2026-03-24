import { useNavigate } from "react-router-dom";
import "../../../styles/Get-Involved/sponsor-a-scholar.css";

const Sponsor = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="sponsor-page">
      <div className="container">
        

        <h1>Sponsor a Scholar</h1>
        <p>
          Support a scholar’s journey by funding programs, resources, and
          opportunities that create lasting impact.
        </p>

        <button className="back-button" onClick={handleBackClick}>
          ← Back to Previous Page
        </button>
      </div>
    </section>
  );
};

export default Sponsor;