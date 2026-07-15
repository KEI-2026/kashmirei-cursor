import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/impact.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import scholarStories from "../../../data/ScholarStories";
import impactBg from "../../../assets/Images/home-impact-bg.jpg";

const ImpactSection = () => {
  let stories = [...scholarStories].sort((a, b) => (b.year || 0) - (a.year || 0)).slice(0, 5);

  return (
    <section
      className="section-impact-stories"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      {/* Dark overlay over background image */}
      <div className="impact-bg-overlay" />

      <div className="impact-inner">
        <div className="impact-header-wrap">
            <span className="impact-label">OUR IMPACT</span>
          <h2>Real Stories of Transformation</h2>
          <p>
            Our scholars' journeys are a testament to the power of education
            and mentorship. Here are some inspiring stories.
          </p>
        </div>

        <div className="impact-swiper-outer-container">
          <div className="impact-swiper-wrap">
            <Swiper
              modules={[Autoplay, Pagination, Keyboard]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  centeredSlides: false,
                  spaceBetween: 16,
                  loop: false,
                },
                640: {
                  slidesPerView: 2,
                  centeredSlides: false,
                  spaceBetween: 20,
                  loop: false,
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  spaceBetween: 24,
                  loop: true,
                },
              }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              loop={false}
              speed={700}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              allowTouchMove={true}
              className="impact-swiper"
            >
              {stories.map((story, idx) => {
                // Smart truncate: ensures we don't split a word and targets a consistent length
                const truncateText = (text, limit) => {
                  if (!text || text.length <= limit) return text;
                  const lastSpace = text.lastIndexOf(" ", limit);
                  return text.slice(0, lastSpace > 0 ? lastSpace : limit) + "...";
                };

                const fullText = story?.paragraphs?.[0] || "";
                const preview = truncateText(fullText, 130);
                
                const fullSubtitle = story.subtitle || "Scholar Excellence";
                // Setting subtitle limit to 40 to accommodate "at least 35" characters safely
                const displaySubtitle = truncateText(fullSubtitle, 40);

                return (
                  <SwiperSlide key={`${story.id}-${idx}`}>
                    <div className="impact-card-wrap">

                      {/* Teal badge — top right */}
                      <div className="impact-card-badge">
                        <svg style={{ transform: "rotate(180deg)" }} width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8h4v10h-9.983zM0 18L0 10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8h4v10H0z"/>
                        </svg>
                      </div>

                      <div className="impact-author-area">
                        {/* Avatar — top left, overlapping card */}
                        <div className="impact-avatar">
                          <img src={story.thumbnail} alt={story.name} />
                        </div>
                        <div className="impact-author-details">
                          <h4 className="impact-card-name">{story.name}</h4>
                          <span className="impact-card-subtitle">{displaySubtitle}</span>
                        </div>
                      </div>

                      <div className="impact-card-body">
                        <p className="impact-card-quote">
                          {preview}
                        </p>
                        <div className="impact-card-footer">
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
        </div>

        <div className="impact-cta">
          <Link to="/our-impact" className="impact-cta-btn">
            EXPLORE OUR IMPACT
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ImpactSection;
