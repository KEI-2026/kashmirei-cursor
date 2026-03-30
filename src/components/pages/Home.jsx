import React from "react";

import HeroSection from "../HomePart/HeroSection/HeroSection";
import AnnouncementSection from "../AnnouncementSection/AnnouncementSection";
import StatsSection from "../HomePart/StatsSection/StatsSection";
import ValueWeDeliver from "../HomePart/ValueWeDeliver/ValueWeDeliver";
import MissionSection from "../HomePart/MissionSection/MissionSection";

import ImpactSection from "../HomePart/ImpactSection/ImpactSection";
import OurMissionSection from "../HomePart/OurMissionSection/OurMissionSection";



const Home = () => {
  return (
    <>
      <HeroSection />
      <AnnouncementSection />
      <ValueWeDeliver />
      <StatsSection />
      <ImpactSection />
      <OurMissionSection />

      <MissionSection />
    </>
  );
};

export default Home;
