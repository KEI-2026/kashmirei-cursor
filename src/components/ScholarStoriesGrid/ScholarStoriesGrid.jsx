import React from "react";
import "../../styles/Scholar-Page/scholar-grid.css";

import mehak from "../../assets/Images/mehak.png";
import anayat from "../../assets/Images/anayat.png";
import kaira from "../../assets/Images/kaira.png";

const ScholarStoriesGrid = () => {
  return (
    <section className="section-ss-grid">
      <div className="container">

        <div className="ss-grid">

          {/* Card 1 */}
          <div className="ss-card">
            <img src={mehak} alt="Mehak" />
            <p>“Thanks to the Gooru Navigator Program…”</p>
            <h4>Mehak Mohiudin</h4>
            <span>Grade 10 Topper (96%)</span>
          </div>

          {/* Card 2 */}
          <div className="ss-card">
            <img src={anayat} alt="Anayat" />
            <p>“Mindler was a game-changer!…”</p>
            <h4>Farhat Shabir</h4>
            <span>Science Student Turned Career Explorer</span>
          </div>

          {/* Card 3 */}
          <div className="ss-card">
            <img src={kaira} alt="Kaira" />
            <p>“The Graduate Abroad Program…”</p>
            <h4>Aijaz Maqbool</h4>
            <span>Global PhD Scholar</span>
          </div>

          {/* Duplicate for layout (like live site 6 grid) */}
          <div className="ss-card">
            <img src={anayat} alt="Donor" />
            <p>“I’ve supported KEI for years…”</p>
            <h4>Donor Reflection</h4>
            <span>Long-term Donor</span>
          </div>

          <div className="ss-card">
            <img src={mehak} alt="Mehak" />
            <p>“KEI gave me everything I needed…”</p>
            <h4>Mehak Mohiudin</h4>
            <span>Grade 10 Topper (96%)</span>
          </div>

          <div className="ss-card">
            <img src={kaira} alt="Farhat" />
            <p>“KEI didn’t just help me study…”</p>
            <h4>Farhat Shabir</h4>
            <span>Science Student Turned Career Explorer</span>
          </div>

        </div>

        <div className="ss-buttons">
          <button className="btn-primary">READ MORE SCHOLAR STORIES</button>
          <button className="btn-outline">SUPPORT A SCHOLAR'S JOURNEY</button>
        </div>

      </div>
    </section>
  );
};

export default ScholarStoriesGrid;
