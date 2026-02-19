import React from "react";
import "../../styles/Home/hero.css";
import heroImage from "../../assets/Images/hero-home.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="hero-container">

        {/* LEFT TEXT */}
        <div className="hero-content">

          <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{ clickable: true }}
            className="hero-text-swiper"
          >

            <SwiperSlide>
              <div className="hero-slide">
                <h1>
                  Empowering Bright <br />
                  Futures in <span>Kashmir</span>
                </h1>

                <h2 className="hero-subheading">
                  Every Dream Deserves a Chance
                </h2>

                <p>
                  Our mission is to empower extraordinary but financially
                  challenged students to realize their full potential through
                  mentoring, training opportunities, and financial support.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="hero-slide">
                <h1>
                  Empowering Bright <br />
                  Futures in <span>Kashmir</span>
                </h1>

                <h2 className="hero-subheading">
                  Every Dream Deserves a Chance
                </h2>

                <p>
                  Our mission is to empower extraordinary but financially
                  challenged students to realize their full potential through
                  mentoring, training opportunities, and financial support.
                </p>
              </div>
            </SwiperSlide>

          </Swiper>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={heroImage} alt="KEI Scholars" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
