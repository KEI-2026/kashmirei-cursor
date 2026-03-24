import React from "react";

import HeroSection from "../HomePart/HeroSection/HeroSection";
import StatsSection from "../HomePart/StatsSection/StatsSection";
import ProgramsSection from "../HomePart/ProgramsSection/ProgramsSection";
import MissionSection from "../HomePart/MissionSection/MissionSection";
import ValueWeDeliver from "../HomePart/ValueWeDeliver/ValueWeDeliver";
import ImpactSection from "../HomePart/ImpactSection/ImpactSection";
import OurMissionSection from "../HomePart/OurMissionSection/OurMissionSection";
import AnnouncementSection from "../AnnouncementSection/AnnouncementSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <AnnouncementSection />
      <ValueWeDeliver />
      <StatsSection />
      <ProgramsSection />
      <MissionSection />
      <ImpactSection />
      <OurMissionSection />
    </>
  );
};

export default Home;
