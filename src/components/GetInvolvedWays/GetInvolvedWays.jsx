import "../../styles/Get-Involved/getinvolved-ways.css";

import donateIcon from "../../assets/Images/donate-icon.webp";
import mentorIcon from "../../assets/Images/mentorshipp.webp";
import volunteerIcon from "../../assets/Images/devicee.webp";
import sponsorIcon from "../../assets/Images/scholarshipp.webp";

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
            <img src={donateIcon} alt="Donate" />
            <h3>Donate Today</h3>
            <p>Every contribution creates a ripple effect of opportunity.</p>
            <a href="/donate">DONATE NOW</a>
          </div>

          <div className="gi-card">
            <img src={mentorIcon} alt="Mentor" />
            <h3>Mentor</h3>
            <p>Guide a scholar’s journey and be part of their transformation.</p>
            <a href="#">BECOME A MENTOR</a>
          </div>

          <div className="gi-card">
            <img src={volunteerIcon} alt="Volunteer" />
            <h3>Volunteer</h3>
            <p>Join hands with us in operations, training, or outreach.</p>
            <a href="#">VOLUNTEER WITH US</a>
          </div>

          <div className="gi-card">
            <img src={sponsorIcon} alt="Sponsor" />
            <h3>Sponsor a Program</h3>
            <p>Fund a specific initiative like career workshops or digital learning.</p>
            <a href="#">SPONSOR A PROGRAM</a>
          </div>

        </div>

        <blockquote className="gi-quote">
          “Supporting KEI is like investing in the future of humanity—and it’s the best investment I’ve made.”
          <span>– KEI Supporter</span>
        </blockquote>

      </div>
    </section>
  );
};

export default GetInvolvedWays;
