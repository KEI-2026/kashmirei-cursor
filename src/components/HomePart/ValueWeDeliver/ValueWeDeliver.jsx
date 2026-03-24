import React from "react";
import "../../../styles/Home/value-we-deliver.css";
import valueImage from "../../../assets/Images/valuewe-deliver.png";

const ValueWeDeliver = () => {
  return (
    <section className="value-we-deliver">

      <div className="value-container">
        <h2 className="value-title">Value We Deliver</h2>

        <div className="value-image-wrapper">
          <img
            src={valueImage}
            alt="Value We Deliver"
            className="value-image"
          />
        </div>
      </div>

    </section>
  );
};

export default ValueWeDeliver;
