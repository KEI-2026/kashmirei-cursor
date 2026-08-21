import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../styles/StripePayment/stripe-payment.css";

const StripePayment = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // Scroll to top on component load
    window.scrollTo(0, 0);

    // Prevent search engine indexing for this confirmation page
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      // Clean up metadata tag on unmount
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="stripe-payment-page">
      <div className="stripe-payment-container">
        {sessionId ? (
          /* Success Page Layout */
          <div className="stripe-payment-card">
            <span className="test-badge">TEST MODE</span>
            <div className="success-icon-container" style={{ backgroundColor: "#e8f5e9", color: "#2E7D32" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#2E7D32"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h1 style={{ color: "#2E7D32", marginTop: "16px" }}>Thank You For Your Support!</h1>
            <p className="sub-title" style={{ fontSize: "16px", lineHeight: "1.75", color: "#444" }}>
              Your donation has been successfully submitted and processed. The scholars and community of Kashmir
              gratefully appreciate your investment in their potential.
            </p>

            <div className="session-info-box" style={{ margin: "20px 0" }}>
              <span className="label">Transaction Reference ID</span>
              <span className="value">{sessionId}</span>
            </div>

            <p style={{ fontSize: "14.5px", color: "#555", marginBottom: "30px", lineHeight: "1.6" }}>
              ✉️ A confirmation email and tax receipt have been sent to your email address.
            </p>

            <div className="action-buttons">
              <Link to="/donate2" className="btn-stripe-confirm btn-primary-stripe" style={{ backgroundColor: "#47BFDA", borderColor: "#47BFDA" }}>
                Make Another Donation
              </Link>
              <Link to="/" className="btn-stripe-confirm btn-secondary-stripe">
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          /* Missing Session ID Error/Fallback Layout */
          <div className="stripe-payment-card no-session-card">
            <span className="error-badge">VERIFICATION REQUIRED</span>
            <div className="warning-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <h1>No Payment Session Detected</h1>
            <p className="sub-title">
              This page requires a valid payment session parameter to verify the status of your transaction.
            </p>

            <p style={{ fontSize: "14.5px", color: "#666", marginBottom: "30px", lineHeight: "1.6" }}>
              If you intended to make a donation or payment, please use our secure checkout forms or contact
              us if you believe this is an error.
            </p>

            <div className="action-buttons">
              <Link to="/donate" className="btn-stripe-confirm btn-primary-stripe">
                Go to Donate Page
              </Link>
              <Link to="/" className="btn-stripe-confirm btn-secondary-stripe">
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StripePayment;
