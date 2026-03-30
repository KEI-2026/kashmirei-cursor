import { Link } from "react-router-dom";
import "../../../styles/Get-Involved/getinvolved-ways.css";

import donateIcon from "../../../assets/Images/GetInvolved-icon/getinvolved-donate-icon.webp";
import mentorIcon from "../../../assets/Images/GetInvolved-icon/getinvolved-mentor.webp";
import volunteerIcon from "../../../assets/Images/GetInvolved-icon/getinvolved-volunteer.webp";
import sponsorIcon from "../../../assets/Images/GetInvolved-icon/getinvolved-sponsor.webp";

const GetInvolvedWays = () => {
  return (
    <section className="gi-ways">
      <div className="container">

        <div className="gi-ways-header">
          <span>GET INVOLVED</span>
          <h2>Ways to Get Involved</h2>
        </div>

        <div className="gi-ways-grid">

          <div className="gi-card">
            <Link to="/donate">
              <img src={donateIcon} alt="Donate" />
            </Link>
            <h3>Donate Today</h3>
            <p>Every contribution creates a ripple effect of opportunity.</p>
            <Link to="/donate">DONATE NOW</Link>
          </div>

          <div className="gi-card">
            <Link to="/become-a-mentor">
              <img src={mentorIcon} alt="Mentor" />
            </Link>
            <h3>Mentor</h3>
            <p>Guide a scholar’s journey and be part of their transformation.</p>
            <Link to="/become-a-mentor">BECOME A MENTOR</Link>
          </div>

          <div className="gi-card">
            <Link to="/volunteer-with-us">
              <img src={volunteerIcon} alt="Volunteer" />
            </Link>
            <h3>Volunteer</h3>
            <p>Join hands with us in operations, training, or outreach.</p>
            <Link to="/volunteer-with-us">VOLUNTEER WITH US</Link>
          </div>

          <div className="gi-card">
            <Link to="/sponsor-a-scholar">
              <img src={sponsorIcon} alt="Sponsor" />
            </Link>
            <h3>Sponsor a Scholar</h3>
            <p>Fund a specific initiative like career workshops or digital learning.</p>
            <Link to="/sponsor-a-scholar">SPONSOR A SCHOLAR</Link>
          </div>

        </div>

        <blockquote className="gi-quote">
          “Supporting KEI is like investing in the future of humanity.”
          <span>– KEI Supporter</span>
        </blockquote>

      </div>
    </section>
  );
};

export default GetInvolvedWays;