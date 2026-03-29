import React from "react";
import "../../../styles/Donate/donate-compliance.css";

const DonateCompliance = () => {
  return (
    <section className="section-donate-compliance">
      <div className="compliance-inner">

        <div className="compliance-col">
          <span className="compliance-icon">✦</span>
          <h3>Transparency &amp; Compliance</h3>
          <p>
            KEI operates entirely on your generous donations. We are a non-political,
            non-religious 501(c)(3) tax-exempt charity incorporated in Massachusetts,
            United States. All donations are tax-deductible under US federal law.
          </p>
          <div className="compliance-ein">
            <span className="ein-label">EIN</span>
            <strong>42-1733906</strong>
          </div>
        </div>

        <div className="compliance-divider" />

        <div className="compliance-col">
          <span className="compliance-icon">⚠</span>
          <h3>Important Notice</h3>
          <p>
            KEI cannot accept funds raised at political events or for political purposes.
            Please donate only through our official website or KEI-authorised fundraisers
            approved by our Board of Directors.
          </p>
          <p className="compliance-contact">
            Questions? Email us at{" "}
            <a href="mailto:info@kashmirei.org">info@kashmirei.org</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default DonateCompliance;
