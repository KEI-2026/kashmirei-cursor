import React from "react";

import DonateHero from "../DonatePart/DonateHero/DonateHero";
import DonateInfo from "../DonatePart/DonateInfo/DonateInfo";
import DonatePayment from "../DonatePart/DonatePayment/DonatePayment";
import DonateForm from "../DonatePart/DonateForm/DonateForm";

const Donate = () => {
  return (
    <>
      <DonateHero />
      {/* <DonateInfo /> */}
      <DonateForm />
      <DonatePayment />
    </>
  );
};

export default Donate;
