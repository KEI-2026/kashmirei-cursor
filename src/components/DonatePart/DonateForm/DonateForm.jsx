import React, { useState } from "react";
import "../../../styles/Donate/donate-form.css";

const DonateForm = () => {
  const [frequency, setFrequency] = useState("one-time"); // one-time / monthly
  const [selectedAmount, setSelectedAmount] = useState(100); // 25, 50, 100, 250, custom
  const [customAmount, setCustomAmount] = useState("");
  const [givingTier, setGivingTier] = useState("general");
  const [scholarshipType, setScholarshipType] = useState("general");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isTribute, setIsTribute] = useState(false);
  const [tributeType, setTributeType] = useState("Honor");
  const [tributeHonoreeName, setTributeHonoreeName] = useState("");

  // Extract sf_campaign_id from URL if present
  const queryParams = new URLSearchParams(window.location.search);
  const sfCampaignId = queryParams.get("sf_campaign_id") || "";

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const presetAmounts = [25, 50, 100, 250];

  const handleGivingTierChange = (e) => {
    const tier = e.target.value;
    setGivingTier(tier);
    
    // Auto-update amount and preset selection if appropriate
    if (tier === "hs-full") {
      setSelectedAmount("custom");
      setCustomAmount("660");
      setScholarshipType("hssp");
    } else if (tier === "hs-partial") {
      setSelectedAmount("custom");
      setCustomAmount("360");
      setScholarshipType("hssp");
    } else if (tier === "ty-full") {
      setSelectedAmount("custom");
      setCustomAmount("500");
      setScholarshipType("psp");
    } else if (tier === "ty-partial") {
      setSelectedAmount("custom");
      setCustomAmount("300");
      setScholarshipType("psp");
    } else if (tier === "pd-full") {
      setSelectedAmount("custom");
      setCustomAmount("700");
      setScholarshipType("gap");
    } else if (tier === "pd-partial") {
      setSelectedAmount("custom");
      setCustomAmount("300");
      setScholarshipType("gap");
    } else if (tier === "general") {
      setSelectedAmount(100);
      setCustomAmount("");
      setScholarshipType("general");
    }
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^\d+$/.test(val)) {
      setCustomAmount(val);
      setSelectedAmount("custom");
    }
  };

  const getFinalAmount = () => {
    if (selectedAmount === "custom") {
      return Number(customAmount) || 0;
    }
    return selectedAmount;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const amount = getFinalAmount();
    if (amount <= 0) {
      setErrorMsg("Please select or enter a valid donation amount.");
      return;
    }
    if (!firstName || !lastName || !email) {
      setErrorMsg("Please fill out your personal information.");
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch("/api/create-checkout-session.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          frequency,
          email,
          firstName,
          lastName,
          givingTier,
          scholarshipType,
          sf_campaign_id: sfCampaignId,
          ...(isTribute && {
            tributeType,
            tributeHonoreeName,
          })
        }),
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        console.error("Non-JSON Server Response:", responseText);
        throw new Error("Server response was invalid. Please check your cPanel API file.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to initiate payment session.");
      }

      if (data.url) {
        // Redirect to Stripe Checkout page
        window.location.href = data.url;
      } else {
        throw new Error("Invalid response from checkout service.");
      }
    } catch (err) {
      console.error("Stripe Redirect Error:", err);
      setErrorMsg(err.message || "An error occurred while connecting to Stripe. Please try again.");
      setIsProcessing(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setCustomAmount("");
    setSelectedAmount(100);
    setGivingTier("general");
    setScholarshipType("general");
    setIsTribute(false);
    setTributeType("Honor");
    setTributeHonoreeName("");
  };

  if (isSuccess) {
    return (
      <section className="section-donate-form" id="cc">
        <div className="donate-form-inner" style={{ maxWidth: "600px" }}>
          <div className="donate-success-card">
            <div className="success-icon-wrap">✓</div>
            <h2 style={{ color: "#2E7D32", fontSize: "28px", marginBottom: "16px" }}>Thank You For Your Support!</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#444", marginBottom: "28px" }}>
              Your donation of <strong>${getFinalAmount()}</strong> ({frequency === "monthly" ? "Monthly Recurring" : "One-Time"}) 
              has been successfully processed. 
              {givingTier !== "general" && (
                <>
                  <br />
                  Sponsorship Tier: <strong>{givingTier === "hs-full" ? "High School Full" : givingTier === "hs-partial" ? "High School Partial" : givingTier === "ty-full" ? "Transition Year Full" : givingTier === "ty-partial" ? "Transition Year Partial" : givingTier === "pd-full" ? "Pre-Doctoral Full" : "Pre-Doctoral Partial"} Sponsor</strong>
                </>
              )}
              {scholarshipType !== "general" && (
                <>
                  <br />
                  Scholarship Designation: <strong>{scholarshipType === "hssp" ? "High School Support Program (HSSP)" : scholarshipType === "psp" ? "Professional Support Program (PSP)" : scholarshipType === "gap" ? "Graduate Abroad Program (GAP)" : "International Bridge Scholarship Program (IBSP)"}</strong>
                </>
              )}
            </p>
            <p style={{ fontSize: "14.5px", color: "#555", marginBottom: "32px" }}>
              A tax receipt has been emailed to <strong>{email}</strong>. The scholars and community of Kashmir 
              gratefully appreciate your investment in their potential.
            </p>
            <button className="button" onClick={resetForm} style={{ backgroundColor: "#47BFDA", color: "#fff" }}>
              Make Another Donation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-donate-form" id="cc">
      <div className="donate-form-inner">

        <div className="donate-form-header">
          <span className="donate-section-label">SECURE PAYMENT</span>
          <h2>Donate by Credit or Debit Card</h2>
          <p>
            Choose your contribution details and fill in payment data. All cards are securely processed 
            using Stripe encryption. A tax receipt will be emailed to you.
          </p>
        </div>

        <div className="donate-form-card">
          <form onSubmit={handleSubmit}>
            
            {/* Giving Tier & Scholarship Fields */}
            <div className="donate-tier-selects" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
              <div>
                <label className="form-group-label" htmlFor="giving-tier">Giving Tier</label>
                <select 
                  id="giving-tier" 
                  value={givingTier} 
                  onChange={handleGivingTierChange}
                  className="input"
                  style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1.5px solid #e4eef4", fontSize: "14px", backgroundColor: "#fff", outline: "none", height: "48px" }}
                >
                  <option value="general">General Supporter</option>
                  <option value="hs-full">High School Full Sponsor ($660)</option>
                  <option value="hs-partial">High School Partial Sponsor ($360)</option>
                  <option value="ty-full">Transition Year Full Sponsor ($500)</option>
                  <option value="ty-partial">Transition Year Partial Sponsor ($300)</option>
                  <option value="pd-full">Pre-Doctoral Full Sponsor ($700)</option>
                  <option value="pd-partial">Pre-Doctoral Partial Sponsor ($300)</option>
                </select>
              </div>
              
              <div>
                <label className="form-group-label" htmlFor="scholarship-type">Type of Scholarship</label>
                <select 
                  id="scholarship-type" 
                  value={scholarshipType} 
                  onChange={(e) => setScholarshipType(e.target.value)}
                  className="input"
                  style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1.5px solid #e4eef4", fontSize: "14px", backgroundColor: "#fff", outline: "none", height: "48px" }}
                >
                  <option value="general">General/Undesignated Scholarship</option>
                  <option value="hssp">High School Support Program (HSSP)</option>
                  <option value="psp">Professional Support Program (PSP)</option>
                  <option value="gap">Graduate Abroad Program (GAP)</option>
                  <option value="ibsp">International Bridge Scholarship Program (IBSP)</option>
                </select>
              </div>
            </div>

            {/* Frequency Toggle */}
            <div style={{ marginBottom: "24px" }}>
              <span className="form-group-label">Donation Frequency</span>
              <div className="donate-toggle-buttons">
                <button
                  type="button"
                  className={`donate-opt-btn ${frequency === "one-time" ? "active" : ""}`}
                  onClick={() => setFrequency("one-time")}
                >
                  Give One-Time
                </button>
                <button
                  type="button"
                  className={`donate-opt-btn ${frequency === "monthly" ? "active" : ""}`}
                  onClick={() => setFrequency("monthly")}
                >
                  Give Monthly (Recurring)
                </button>
              </div>
            </div>

            {/* Presets Grid */}
            <div style={{ marginBottom: "16px" }}>
              <span className="form-group-label">Select Amount (USD)</span>
              <div className="donate-amount-grid">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`donate-opt-btn ${selectedAmount === amt ? "active" : ""}`}
                    onClick={() => handleAmountClick(amt)}
                  >
                    ${amt}
                  </button>
                ))}
                <button
                  type="button"
                  className={`donate-opt-btn ${selectedAmount === "custom" ? "active" : ""}`}
                  onClick={() => setSelectedAmount("custom")}
                >
                  Custom
                </button>
              </div>
            </div>

            {/* Custom Amount Field */}
            {selectedAmount === "custom" && (
              <div className="custom-amount-input">
                <span>$</span>
                <input
                  type="text"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="input"
                  required
                />
              </div>
            )}

            {/* Personal Details */}
            <div style={{ marginBottom: "24px" }}>
              <span className="form-group-label">Billing & Receipt Information</span>
              <div className="donor-info-grid">
                <div>
                  <label htmlFor="first-name" className="sr-only" style={{ display: "none" }}>First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only" style={{ display: "none" }}>Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Tribute Information */}
            <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#f9fbfd", borderRadius: "8px", border: "1px solid #e4eef4" }}>
              <label style={{ display: "flex", alignItems: "center", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#333", marginBottom: isTribute ? "16px" : "0" }}>
                <input 
                  type="checkbox" 
                  checked={isTribute}
                  onChange={(e) => setIsTribute(e.target.checked)}
                  style={{ marginRight: "10px", width: "18px", height: "18px" }}
                />
                Dedicate this donation in honor or in memory of someone
              </label>

              {isTribute && (
                <div className="donor-info-grid" style={{ marginTop: "12px" }}>
                  <div>
                    <label className="form-group-label" htmlFor="tribute-type">Tribute Type</label>
                    <select 
                      id="tribute-type" 
                      value={tributeType} 
                      onChange={(e) => setTributeType(e.target.value)}
                      className="input"
                      style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1.5px solid #e4eef4", fontSize: "14px", backgroundColor: "#fff", outline: "none", height: "48px" }}
                    >
                      <option value="Honor">In Honor Of</option>
                      <option value="Memory">In Memory Of</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-group-label" htmlFor="honoree-name">Honoree Name</label>
                    <input
                      id="honoree-name"
                      type="text"
                      placeholder="Name of Honoree"
                      value={tributeHonoreeName}
                      onChange={(e) => setTributeHonoreeName(e.target.value)}
                      required={isTribute}
                      style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1.5px solid #e4eef4", fontSize: "14px", outline: "none", height: "48px", boxSizing: "border-box" }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="donor-info-grid donor-info-grid-full">
              <div>
                  <label htmlFor="email-address" className="sr-only" style={{ display: "none" }}>Email Address</label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address (for Tax Receipt)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

            {/* Stripe Secure Redirect Notice */}
            <div style={{ marginBottom: "24px" }}>
              <div className="stripe-branding-line" style={{ display: "flex", justifyContent: "center", borderTop: "1.5px solid #e4eef4", paddingTop: "20px", marginTop: "10px" }}>
                <span>🔒 Secure checkout powered by </span>
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="stripe-logo-icon" style={{ marginLeft: "6px", display: "inline-block", verticalAlign: "middle", height: "16px" }} />
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "#666", textAlign: "center", marginTop: "8px", lineHeight: "1.5" }}>
                You will be securely redirected to Stripe to enter your payment credentials. We do not store or process card details on our servers.
              </p>
            </div>

            {/* Errors */}
            {errorMsg && (
              <div style={{ color: "#D32F2F", marginBottom: "16px", fontSize: "14px", fontWeight: "700" }}>
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isProcessing}
              className="button btn-primary"
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "16px",
                backgroundColor: "#47BFDA",
                color: "#ffffff"
              }}
            >
              {isProcessing ? "Processing Secure Payment..." : `Donate $${getFinalAmount() || "0"} Now`}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default DonateForm;
