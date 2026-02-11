import React from "react";
import "../../styles/impact.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import mehak from "../../assets/Images/mehak.png";
import kaira from "../../assets/Images/kaira.png";
import anayat from "../../assets/Images/anayat.png";

const ImpactSection = () => {
  return (
    <section className="section-impact">

      <div className="impact-container">

        {/* HEADER */}
        <div className="impact-header">
          <span className="impact-label">IMPACT STORIES</span>
          <h2>Real Stories of Transformation</h2>
          <p>
            Our scholars’ journeys are a testament to the power of education
            and mentorship. Here are some inspiring stories.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={2}
          spaceBetween={40}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
          }}
          className="impact-swiper"
        >

          <SwiperSlide>
            <div className="impact-card">
              <div className="quote-icon">”</div>
              <div className="impact-user">
                <img src={mehak} alt="Mehak Fayaz" />
                <div>
                  <h4>Mehak Fayaz</h4>
                  <span>Pursuing Medicine</span>
                </div>
              </div>
              <p>
                Coming from an underprivileged background, Mehak received
                financial and mentoring support from KEI, enabling her to
                pursue an MBBS degree and excel academically.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="impact-card">
              <div className="quote-icon">”</div>
              <div className="impact-user">
                <img src={kaira} alt="Kaira Scholar" />
                <div>
                  <h4>Kaira</h4>
                  <span>Leadership Scholar</span>
                </div>
              </div>
              <p>
                Through KEI’s leadership workshops and mentorship programs,
                Kaira developed the confidence and clarity to pursue her
                long-term academic and professional aspirations.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="impact-card">
              <div className="quote-icon">”</div>
              <div className="impact-user">
                <img src={anayat} alt="Anayat Scholar" />
                <div>
                  <h4>Anayat</h4>
                  <span>Engineering Aspirant</span>
                </div>
              </div>
              <p>
                Azhar’s journey reflects resilience and determination.
                With KEI’s scholarship and career guidance support, he is
                now pursuing engineering with renewed purpose.
              </p>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
};

export default ImpactSection;
