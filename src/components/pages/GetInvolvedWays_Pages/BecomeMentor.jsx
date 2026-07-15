import { useNavigate, Link } from "react-router-dom";
import "../../../styles/Get-Involved/become-mentor.css";

const BecomeMentor = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="gi-page">
      <div className="container">

        <h1>Become a Mentor</h1>

        <p className="intro">
          Share your knowledge and guide scholars towards a brighter future.
          Your mentorship can shape careers and transform lives.
        </p>

        <div className="content-card">
          <h2>Kashmir Education Initiative</h2>
          <h3>Mentorship Program – Volunteer as a Mentor</h3>

          <div className="highlight-box">
            <h4>One Mentor, One Scholar</h4>
            <p>
              Support a high school scholar by volunteering <strong>2 hours per month</strong> 
              for a minimum of <strong>one year</strong>. Help guide their academic journey 
              and future goals.
            </p>
          </div>

          <hr />

          <h3>Mentorship Sign-Up</h3>

          <p><strong>Dear Mentor,</strong></p>
          <p>
            Thank you for your interest in supporting KEI scholars.
          </p>

          <p>Before applying, please confirm that you:</p>

          <ol className="criteria-list">
            <li>
              Have completed higher secondary education and are currently in college or hold a degree.
            </li>
            <li>
              Can commit <strong>2–4 hours per month</strong> for at least <strong>a year</strong>.
            </li>
            <li>
              Are willing to mentor a student and guide them in their academic and long-term goals 
              (no tutoring required).
            </li>
          </ol>

          <p className="cta-text">
            If you meet these criteria, please proceed to the application form.
          </p>

          {/* Apply Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKvVgYMBk7IyH-rIR43V9B-3ZQUyZunFZxMWYi2Wq3VZu4Lg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="apply-button"
          >
            Sign up / Apply Online
          </a>
        </div>

        {/* Success Stories Button (OUTSIDE CARD) */}
        <div className="stories-btn-wrapper">
          <Link
            to="/our-impact"
            className="apply-button secondary-btn"
          >
            Read Our Impact
          </Link>
        </div>

        {/* Back button */}
        <button className="back-button" onClick={handleBackClick}>
          ← Back to Previous Page
        </button>

      </div>
    </section>
  );
};

export default BecomeMentor;