import React from "react";
import AboutVision from "../AboutPart/AboutVision/AboutVision";
import AboutValues from "../AboutPart/AboutValues/AboutValues";
import AboutQuickResources from "../AboutPart/AboutQuickResources/AboutQuickResources";
import AboutTeam from "../AboutPart/AboutTeam/AboutTeam";
import AboutFinancials from "../AboutPart/AboutFinancials/AboutFinancials";

const About = () => {
  return (
    <>
      <AboutVision />
      <AboutValues />
      <AboutTeam />
      {/* <AboutFinancials /> */}
      <AboutQuickResources />
    </>
  );
};

export default About;
