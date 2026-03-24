import { useNavigate } from "react-router-dom";
import "../../../styles/Get-Involved/volunteer-with-us.css";

const Volunteer = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="volunteer-page">
      <div className="container">
        

        <h1>Volunteer With Us</h1>
        <p>
          Contribute your time and skills to support our initiatives and help
          expand our impact across communities.
        </p>

        <button className="back-button" onClick={handleBackClick}>
          ← Back to Previous Page
        </button>
      </div>
    </section>
  );
};

export default Volunteer;