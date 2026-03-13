import React from "react";
import "../../styles/Home/hero.css";
import heroImage1 from "../../assets/Images/hero-home-seerat.jpg";
import heroImage2 from "../../assets/Images/two-kids-cover.jpeg";
import heroImage3 from "../../assets/Images/girls-cover.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <section className="section-hero">
      <Swiper
        modules={[Pagination, Keyboard]}
        loop={true}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        className="hero-swiper-full"
      >

        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${heroImage1})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-slide-content">
              <h1>
                Empowering Bright <br />
                Futures in <span>Kashmir</span>
              </h1>
              <h2 className="hero-subheading">Every Dream Deserves a Chance</h2>
              <p>
                Our mission is to empower extraordinary but financially
                challenged students to realize their full potential through
                mentoring, training opportunities, and financial support.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${heroImage2})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-slide-content">
              <h1>
                Kashmir Education Initiative: <br />
                Where potential meets <span>opportunity</span>
              </h1>
              <p>
                We support academically gifted but financially vulnerable
                students in Kashmir with the resources, mentorship, and skills
                they need to thrive.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `
              linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),
              url(${heroImage3})`, backgroundPosition: "center 50px" }}
          >
            <div className="hero-overlay" />
            <div className="hero-slide-content">
              <h1>
                Kashmir Education <br />
                Initiative <span>(KEI)</span>
              </h1>
              <p>
                A USA-based non-profit that supports the education of
                underprivileged children in Kashmir through programs
                and projects.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default HeroSection;
