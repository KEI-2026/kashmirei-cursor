import React from "react";
import DonateHero from "../DonatePart/DonateHero/DonateHero";
import DonateMethodCards from "../DonatePart/DonateMethodCards/DonateMethodCards";
import DonateForm from "../DonatePart/DonateForm/DonateForm";
import DonateCompliance from "../DonatePart/DonateCompliance/DonateCompliance";
import DonateCallToAction from "../DonatePart/DonateCallToAction/DonateCallToAction";

const Donate = () => {
  return (
    <>
      <DonateHero />
      <DonateMethodCards />
      <DonateForm />
      <DonateCompliance />
      <DonateCallToAction />
    </>
  );
};

export default Donate;
