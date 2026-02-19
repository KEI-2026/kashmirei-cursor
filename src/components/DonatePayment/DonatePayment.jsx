import React from "react";
import "../../styles/Donate/donate-payment.css";

const DonatePayment = () => {
  return (
    <section className="section-donate-payment">
      <div className="container donate-payment-wrapper">

        {/* PayPal Button */}
        <div className="paypal-button">
          <img
            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
            alt="Checkout with PayPal"
          />
        </div>

        {/* Zelle */}
        <p className="donate-zelle">
          <strong>Zelle:</strong>{" "}
          <span>Zelle@kashmirei.org</span>
        </p>

        {/* Check Info */}
        <p className="donate-check">
          <strong>Check:</strong> Please make it out to
          "Kashmir Education Initiative" and mail it to KEI,
          113 West Plain St, Wayland, MA 01778, USA.
          Please add your email and phone # in the check memo section.
        </p>

      </div>
    </section>
  );
};

export default DonatePayment;
