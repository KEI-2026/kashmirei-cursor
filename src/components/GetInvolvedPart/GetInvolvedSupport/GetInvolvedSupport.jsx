import React from "react";
import "../../../styles/Get-Involved/getinvolved-support.css";

import supportImage from "../../../assets/Images/getinvoled-support.jpg";

const GetInvolvedSupport = () => {
  return (
    <section className="section-gi-support">
      <div className="container gi-support-grid">

        <div className="gi-support-left">
          <span>SUPPORT</span>
          <h2>The Power of Your Support</h2>

          <p>“Because of KEI, I am now in university.”</p>
          <p>“Without KEI’s laptop donation, I wouldn’t have studied during lockdown.”</p>

          <a href="#" className="gi-button">JOIN US TODAY</a>
        </div>

        <div className="gi-support-image">
          <img src={supportImage} alt="Support" />
        </div>

        <div className="gi-support-stats">
          <div>
            <h3>10,000+</h3>
            <p>scholarships funded</p>
          </div>
          <div>
            <h3>500+</h3>
            <p>career awareness sessions</p>
          </div>
          <div>
            <h3>1,600+</h3>
            <p>students equipped with digital devices</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInvolvedSupport;
