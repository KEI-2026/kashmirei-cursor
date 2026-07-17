import React from "react";

import HeroSection from "../HomePart/HeroSection/HeroSection";
import AnnouncementSection from "../AnnouncementSection/AnnouncementSection";
import WhyKeiExists from "../HomePart/WhyKeiExists/WhyKeiExists";
import OurModel from "../HomePart/OurModel/OurModel";
import StatsSection from "../HomePart/StatsSection/StatsSection";
import ImpactSection from "../HomePart/ImpactSection/ImpactSection";
import MissionSection from "../HomePart/MissionSection/MissionSection";
import "../../styles/Home/home-sections.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AnnouncementSection />
      <WhyKeiExists />
      <OurModel />
      <StatsSection />
      <hr className="home-section-divider" />
      <MissionSection />
      <ImpactSection />
    </>
  );
};

export default Home;
