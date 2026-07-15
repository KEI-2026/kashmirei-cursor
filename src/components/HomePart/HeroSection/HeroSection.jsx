import React from "react";
import "../../../styles/Home/hero.css";
import heroImage1 from "../../../assets/Images/Hero-Home-1-seerat.jpg";
import heroImage2 from "../../../assets/Images/Hero-Home-2-twokids.jpeg";
import heroImage3 from "../../../assets/Images/Hero-Home-3-schoolboys.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <section className="section-hero">
      <Swiper
        modules={[Pagination, Keyboard, Autoplay]}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
                challenged students to realize their full potential.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${heroImage2})`, background: "contain" }}
          >
            <div className="hero-overlay" />
            <div className="hero-slide-content">
              <h1>
                Education for <span>Stronger Communities</span>
              </h1>
              <h2 className="hero-subheading">Every Community Deserves to Rise</h2>
              <p>
                We invest in Kashmiri scholars so they can lead positive change in their families and strengthen the communities they serve.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),
                url(${heroImage3})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center center"
            }}

            
          >
            <div className="hero-overlay" />
            <div className="hero-slide-content">
              <h1>
                Where potential meets <span>opportunity</span>
              </h1>
              <h2 className="hero-subheading">Every Scholar Deserves a Path Forward</h2>
              <p>
                We provide scholarships, mentorship, and leadership development for bright but at-risk students in Kashmir
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default HeroSection;
