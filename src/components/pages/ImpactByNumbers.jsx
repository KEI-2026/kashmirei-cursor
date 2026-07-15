import React from "react";
import ImpactSection from "../OurImpactPart/ImpactByNumbers/ImpactByNumbers";
import "../../styles/Scholar-Page/scholar-hero.css";

const ImpactByNumbers = () => {
  return (
    <>
      <section className="section-ss-hero our-impact-hero our-impact-hero--compact">
        <div className="container">
          <span className="our-impact-hero-label">Impact by Numbers</span>
          <p className="ss-subtitle">
            Measurable outcomes across scholarships, mentorship, digital access,
            and scholar success.
          </p>
        </div>
      </section>
      <ImpactSection />
    </>
  );
};

export default ImpactByNumbers;
