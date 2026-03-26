import "../../../styles/Get-Involved/getinvolved-hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// ✅ NEW IMAGES
import giImage1 from "../../../assets/Images/I-am.jpg";
import giImage2 from "../../../assets/Images/getinvolved1.png";
import giImage3 from "../../../assets/Images/getinvolved2.png";
import giImage4 from "../../../assets/Images/getinvolved3.png";
import giImage5 from "../../../assets/Images/getinvolved4.png";
import giImage6 from "../../../assets/Images/getinvolved5.png";
import giImage7 from "../../../assets/Images/getinvolved6.png";
import giImage8 from "../../../assets/Images/getinvolved7.png";
import giImage9 from "../../../assets/Images/getinvolved8.png";
// import giImage10 from "../../../assets/Images/getinvolved9.png";

const GetInvolvedHero = () => {
  return (
    <section className="gi-hero" tabIndex={0}>

      <Swiper
        modules={[Pagination, Keyboard]}
        loop={true}
        pagination={{ clickable: true }}

        keyboard={{
          enabled: true,
          onlyInViewport: false,
          pageUpDown: false,
        }}

        speed={800}
        slidesPerView={1}
        spaceBetween={0}
        className="gi-swiper"
      >

        {[
          giImage1, 
          giImage2,
          giImage3,
          giImage4,
          giImage5,
          giImage6,
          giImage7,
          giImage8,
          giImage9
        ].map((img, index) => (
          <SwiperSlide key={index}>
  <div className="gi-slide">
    <img src={img} alt={`slide-${index}`} className="gi-image" />
  </div>
</SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
};

export default GetInvolvedHero;