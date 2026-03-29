import React from "react";
import AboutHero     from "../AboutPart/AboutHero/AboutHero";
import AboutStory    from "../AboutPart/AboutStory/AboutStory";
import AboutVision   from "../AboutPart/AboutVision/AboutVision";
import AboutValues   from "../AboutPart/AboutValues/AboutValues";
import AboutPartners from "../AboutPart/AboutPartners/AboutPartners";
import AboutTeam     from "../AboutPart/AboutTeam/AboutTeam";
import AboutCTA      from "../AboutPart/AboutCTA/AboutCTA";
import AboutContact  from "../AboutPart/AboutContact/AboutContact";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutVision />
      <AboutValues />
      <AboutPartners />
      <AboutTeam />
      <AboutCTA />
      <AboutContact />
    </>
  );
};

export default About;
