import React from "react";
import "../../styles/Scholar-Page/scholar-videos.css";

import Fiza from "../../assets/Images/Fiza.jpg";
import umerabdullah from "../../assets/Images/umerabdullah.jpg";
import mahak from "../../assets/Images/mahak.jpg";

const ScholarStoriesVideos = () => {
  return (
    <section className="section-ss-videos">
      <div className="container">

        <span className="ss-label">KEI ALUMNI SUCCESS</span>
        <h2>KEI didn’t just help me study; <br /> they helped me dream.</h2>

        <div className="ss-video-grid">

          <div className="ss-video-card">
            <img src={Fiza} alt="Fiza" />
            <div className="play-btn">▶</div>
            <h4>Fiza Jan’s Journey with KEI</h4>
            <p>Pursuing BSc in Anesthesia</p>
          </div>

          <div className="ss-video-card">
            <img src={umerabdullah} alt="Umer" />
            <div className="play-btn">▶</div>
            <h4>Umer Abdullah’s Journey</h4>
            <p>Aspiring Chartered Accountant</p>
          </div>

          <div className="ss-video-card">
            <img src={mahak} alt="Mehak" />
            <div className="play-btn">▶</div>
            <h4>Mehak’s Journey with KEI</h4>
            <p>Pursuing Medicine</p>
          </div>

        </div>

        <button className="btn-primary ss-bottom-btn">
          EXPLORE MORE SCHOLAR STORIES
        </button>

      </div>
    </section>
  );
};

export default ScholarStoriesVideos;
