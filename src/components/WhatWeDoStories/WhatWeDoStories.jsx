import React from "react";
import "../../styles/whatwedo-stories.css";

import mehak from "../../assets/Images/mehak.png";
import anayat from "../../assets/Images/anayat.png";
import kaira from "../../assets/Images/kaira.png";

const WhatWeDoStories = () => {
  return (
    <section className="section-wwd-stories">
      <div className="wwd-container">

        <div className="wwd-stories-header">
          <span className="wwd-stories-label">
            STUDENT SUCCESS STORIES
          </span>
          <h2>How These Programs Impact Lives</h2>
        </div>

        <div className="wwd-stories-grid">

          <div className="wwd-story-card">
            <img src={mehak} alt="Mehak Mohiudin" />
            <p>“Thanks to the Gooru Navigator Program…”</p>
            <h4>Mehak Mohiudin</h4>
            <span>Grade 10 Topper (96%)</span>
          </div>

          <div className="wwd-story-card">
            <img src={anayat} alt="Farhat Shabir" />
            <p>“Mindler was a game-changer!…”</p>
            <h4>Farhat Shabir</h4>
            <span>Science Student Turned Career Explorer</span>
          </div>

          <div className="wwd-story-card">
            <img src={kaira} alt="Aijaz Maqbool" />
            <p>“The Graduate Abroad Program…”</p>
            <h4>Aijaz Maqbool</h4>
            <span>Global PhD Scholar</span>
          </div>

        </div>

        <div className="wwd-stories-grid">

          <div className="wwd-story-card">
            <img src={mehak} alt="Mehak Mohiudin" />
            <p>“Thanks to the Gooru Navigator Program…”</p>
            <h4>Mehak Mohiudin</h4>
            <span>Grade 10 Topper (96%)</span>
          </div>

          <div className="wwd-story-card">
            <img src={anayat} alt="Farhat Shabir" />
            <p>“Mindler was a game-changer!…”</p>
            <h4>Farhat Shabir</h4>
            <span>Science Student Turned Career Explorer</span>
          </div>

          <div className="wwd-story-card">
            <img src={kaira} alt="Aijaz Maqbool" />
            <p>“The Graduate Abroad Program…”</p>
            <h4>Aijaz Maqbool</h4>
            <span>Global PhD Scholar</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeDoStories;
