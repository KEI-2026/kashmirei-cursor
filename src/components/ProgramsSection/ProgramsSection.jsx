import React from "react";
import "../../styles/Programs/programs.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../assets/Images/programs-image1.jpg";
import image2 from "../../assets/Images/programs-image2.jpg";
import image3 from "../../assets/Images/programs-image3.jpg";
import image4 from "../../assets/Images/programs-image4.jpg";

const ProgramsSection = () => {
  return (
    <section className="section-programs">

      {/* ================= HEADER ================= */}
      <div className="programs-container">
        <div className="programs-top">
          <div>
            <span className="programs-label">PROGRAMS</span>
            <h2>How We Create Change</h2>
          </div>

          <a href="#" className="button-outline">
            VIEW ALL PROGRAMS
          </a>
        </div>
      </div>

      {/* ================= FULL WIDTH SLIDER ================= */}
      <div className="programs-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={40}
          centeredSlides={false}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="programs-swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="program-card">
              <img src={image1} alt="Mentorship Program" />
              <div className="program-overlay">
                <h4>Mentorship</h4>
                <p>
                  1-on-1 Mentoring, Supercoach Sessions, Leadership with CMI
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="program-card">
              <img src={image2} alt="Scholarships Program" />
              <div className="program-overlay">
                <h4>Scholarships</h4>
                <p>
                  High School, UG & PG, Graduate Abroad (GAP) / IBSP
                </p>
                <p>
                  <strong>2,500+ High School Scholars</strong>
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="program-card">
              <img src={image3} alt="Experiential Learning Program" />
              <div className="program-overlay">
                <h4>Experiential Learning</h4>
                <p>
                  AI Career Mapping, Workshops, Career Awareness Events
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="program-card">
              <img src={image4} alt="Career Awareness Program" />
              <div className="program-overlay">
                <h4>Career Awareness</h4>
                <p>
                  Career Exploration, Industry Exposure & Internships
                </p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

    </section>
  );
};

export default ProgramsSection;
