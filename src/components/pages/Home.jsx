import React from "react";

import HeroSection from "../HeroSection/HeroSection";
import StatsSection from "../StatsSection/StatsSection";
import ProgramsSection from "../ProgramsSection/ProgramsSection";
import MissionSection from "../MissionSection/MissionSection";
import ImpactSection from "../ImpactSection/ImpactSection";
import OurMissionSection from "../OurMissionSection/OurMissionSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <MissionSection />
      <ImpactSection />
      <OurMissionSection />
    </>
  );
};

export default Home;
