import React from "react";
import "../../styles/common/trust-bar.css";
import impactStats from "../../data/impactStats";

const TrustBar = () => {
  return (
    <div className="trust-bar" aria-label="Organization credentials">
      <div className="trust-bar-inner">
        <span>Registered 501(c)(3)</span>
        <span>EIN 42-1733906</span>
        <span>{impactStats.programAllocation} of every dollar to programs</span>
        <span>CPA-audited</span>
      </div>
    </div>
  );
};

export default TrustBar;
