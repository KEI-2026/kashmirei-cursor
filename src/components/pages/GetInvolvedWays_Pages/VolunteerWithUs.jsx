import { useNavigate } from "react-router-dom";
import "../../../styles/Get-Involved/volunteer-with-us.css";
import {
  getVolunteerFormHref,
  externalLinkProps,
} from "../../../config/formLinks";

const volunteerFormHref = getVolunteerFormHref();
const volunteerFormLinkProps = externalLinkProps(volunteerFormHref);

const Volunteer = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="volunteer-page">
      <div className="container">

        <h1>Volunteer With Us</h1>

        <p className="intro">
          KEI is a volunteer-driven organization, and we offer a wide range of 
          opportunities for individuals who are passionate about creating impact.
        </p>

        <div className="content-card">

          <h2>How can you help?</h2>

          <p>
            You can contribute your time and skills by supporting specific ongoing 
            projects or by assisting in our broader organizational efforts.
          </p>

          <p>
            Our volunteers and interns actively engage in a variety of initiatives, 
            including managing scholarship programs, mentoring students across 
            primary, secondary, undergraduate, and graduate levels, and delivering 
            guest lectures at educational institutions.
          </p>

          <p>
            In addition, volunteers support outreach initiatives, enhance our 
            digital presence, conduct research and field studies, and contribute 
            to fundraising efforts that sustain our mission.
          </p>

          <p>
            We are always open to fresh ideas and innovative approaches. If you have 
            a vision or initiative you would like to contribute, we would love to 
            hear from you.
          </p>

          <p className="cta-text">
            To get started, click the button below and share your details with us.
          </p>

          {/* Google Form Button */}
          <a
            href={volunteerFormHref}
            {...volunteerFormLinkProps}
            className="apply-button"
          >
            Fill Volunteer Information Form
          </a>

        </div>

        {/* Back Button at Bottom */}
        <button className="back-button" onClick={handleBackClick}>
          ← Back to Previous Page
        </button>

      </div>
    </section>
  );
};

export default Volunteer;