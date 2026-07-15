import React from "react";
import DonateHero from "../DonatePart/DonateHero/DonateHero";
import DonateMethodCards from "../DonatePart/DonateMethodCards/DonateMethodCards";
import DonateForm from "../DonatePart/DonateForm/DonateForm";
import DonateCompliance from "../DonatePart/DonateCompliance/DonateCompliance";

const Donate = () => {
  return (
    <>
      <DonateHero />
      <DonateMethodCards />
      <DonateForm />
      <DonateCompliance />
    </>
  );
};

export default Donate;
