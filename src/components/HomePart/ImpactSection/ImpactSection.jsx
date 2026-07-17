import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home/impact.css";
import "../../../styles/For-Scholars/forscholars-programs.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import scholarStories from "../../../data/ScholarStories";
import {
  getStoryOutcome,
  getStoryQuotePreview,
  truncateText,
} from "../../../utils/scholarStoryDisplay";
import impactBg from "../../../assets/Images/home-impact-bg.jpg";

const ImpactSection = () => {
  const stories = [...scholarStories]
    .sort((a, b) => (b.year || 0) - (a.year || 0))
    .slice(0, 5);

  return (
    <section
      className="section-impact-stories"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      <div className="impact-bg-overlay" />

      <div className="impact-inner">
        <div className="impact-header-wrap">
          <span className="wwd-section-label impact-section-label home-section-eyebrow">
            Scholar Stories
          </span>
          <h2 className="home-section-heading home-section-heading--light">
            Potential, transformed
          </h2>
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
                const outcome = truncateText(getStoryOutcome(story), 52);
                const preview = getStoryQuotePreview(story, 130);

                return (
                  <SwiperSlide key={`${story.id}-${idx}`}>
                    <div className="impact-card-wrap">
                      <div className="impact-card-badge">
                        <svg
                          style={{ transform: "rotate(180deg)" }}
                          viewBox="0 0 24 24"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8h4v10h-9.983zM0 18L0 10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8h4v10H0z" />
                        </svg>
                      </div>

                      <div className="impact-author-area">
                        <div className="impact-avatar">
                          <img src={story.thumbnail} alt={story.name} />
                        </div>
                        <div className="impact-author-details">
                          <p className="impact-card-outcome">{outcome}</p>
                          <h3 className="impact-card-name">{story.name}</h3>
                        </div>
                      </div>

                      <div className="impact-card-body">
                        <p className="impact-card-quote">&ldquo;{preview}&rdquo;</p>
                        <div className="impact-card-footer">
                          <Link
                            to={`/blog/${story.slug}`}
                            className="impact-card-link"
                            onClick={() => {
                              sessionStorage.setItem(
                                "scrollToScholarGrid",
                                "true"
                              );
                              sessionStorage.setItem(
                                "clickedStoryId",
                                story.id
                              );
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
            Read more stories →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
