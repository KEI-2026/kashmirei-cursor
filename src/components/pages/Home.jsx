import React from "react";

import HeroSection from "../HomePart/HeroSection/HeroSection";
import AnnouncementSection from "../AnnouncementSection/AnnouncementSection";
import StatsSection from "../HomePart/StatsSection/StatsSection";
import ValueWeDeliver from "../HomePart/ValueWeDeliver/ValueWeDeliver";
import MissionSection from "../HomePart/MissionSection/MissionSection";
import TrustBar from "../common/TrustBar";

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
      <section style={{ padding: "36px 0 48px", background: "#f4f8fb" }}>
        <TrustBar />
      </section>
    </>
  );
};

export default Home;
