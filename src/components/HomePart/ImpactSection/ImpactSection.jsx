import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/impact.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import scholarStories from "../../../data/ScholarStories";
import impactBg from "../../../assets/Images/impact-bg.jpg";
import impactFrame from "../../../assets/Images/impact-frame.png";

const ImpactSection = () => {
  const stories = [...scholarStories].sort((a, b) => (b.year || 0) - (a.year || 0));

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

                    {/* Teal badge with frame icon — top right */}
                    <div className="impact-card-badge">
                      <img src={impactFrame} alt="" />
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
