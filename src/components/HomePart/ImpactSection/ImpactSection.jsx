import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/impact.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import scholarStories from "../../../data/ScholarStories";
import impactBg from "../../../assets/Images/impact-bg.jpg";

const ImpactSection = () => {
  const stories = [...scholarStories].sort((a, b) => (b.year || 0) - (a.year || 0)).slice(0, 5);

  return (
    <section
      className="section-impact-stories"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      {/* Dark overlay over background image */}
      <div className="impact-bg-overlay" />

      <div className="impact-inner">
        <div className="impact-header-wrap">
          <span className="impact-label">IMPACT STORIES</span>
          <h2>Real Stories of Transformation</h2>
          <p>
            Our scholars' journeys are a testament to the power of education
            and mentorship. Here are some inspiring stories.
          </p>
        </div>

        <div className="impact-swiper-wrap">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView="auto"
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            allowTouchMove={true}
            className="impact-swiper"
          >
            {stories.map((story) => {
              const preview = story?.paragraphs?.[0] || "";
              return (
                <SwiperSlide key={story.id}>
                  <div className="impact-card-wrap">

                    {/* Teal badge — top right */}
                    <div className="impact-card-badge">
                      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                        <path d="M8 12C8 10.3 9.3 9 11 9h5c0 3.3-2 6-5 7v-4zm12 0C20 10.3 21.3 9 23 9h5c0 3.3-2 6-5 7v-4z" fill="white" opacity="0.9"/>
                      </svg>
                    </div>

                    {/* Avatar — top left, overlapping card */}
                    <div className="impact-avatar">
                      <img src={story.thumbnail} alt={story.name} />
                    </div>

                    <div className="impact-card-body">
                      <p className="impact-card-quote">
                        &ldquo;{preview}&rdquo;
                      </p>
                      <div className="impact-card-footer">
                        <h4 className="impact-card-name">{story.name}</h4>
                        <Link
                          to={`/blog/${story.slug}`}
                          className="impact-card-link"
                          onClick={() => {
                            sessionStorage.setItem("scrollToScholarGrid", "true");
                            sessionStorage.setItem("clickedStoryId", story.id);
                          }}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="impact-cta">
          <Link to="/scholar-stories" className="impact-cta-btn">
            EXPLORE ALL SCHOLAR STORIES
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ImpactSection;
