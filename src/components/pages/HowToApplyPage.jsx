import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplicationFormLink from "../shared/ApplicationFormLink";

const HowToApplyPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    {
      num: "01",
      title: "Application Form",
      desc: (
        <>
          Complete the <ApplicationFormLink /> to submit your application digitally. Alternatively, offline application forms are present at your respective schools, or you can visit the KEI office to obtain and fill out a physical form.
        </>
      ),
      details: [
        "Online submission: Fill out and submit via the active admissions portal.",
        "School collection: Offline packets are distributed directly to partner schools.",
        "Office collection: Collect physical forms from the main KEI office in Srinagar."
      ]
    },
    {
      num: "02",
      title: "Contact for Examination Date",
      desc: "Contact the KEI office directly to get the official schedule and details regarding the upcoming entrance examination date.",
      details: [
        "Inquiries: Call or visit the KEI Srinagar office or local coordinators.",
        "Admissions dashboard: Stay updated by reviewing calendar dates on our website.",
        "SMS/Email alerts: Registered applicants receive notifications on their registered coordinates."
      ]
    },
    {
      num: "03",
      title: "Roll Slip & Center Details",
      desc: "Contact the KEI office to receive your roll slip, center allotment details, and other instructions for the examination day.",
      details: [
        "Roll slips: Disbursed through our online network.",
        "Center allotment: Check details mapped on your roll slip carefully.",
        "Examination day: Bring your printed or physical roll slip to the center."
      ]
    }
  ];

  const faqs = [
    {
      q: "When do applications open for KEI programs?",
      a: "Application timelines vary. High School Support Program (HSSP) applications typically open in July. Professional Support Program (PSP) applications open in September. Check the 'Important Dates' section on the main Scholars page regularly for active cycles."
    },
    {
      q: "Is there an application fee?",
      a: "No, applying to any Kashmir Education Initiative (KEI) program is completely free of charge."
    },
    {
      q: "Can I apply offline if I don't have internet access?",
      a: "Yes! You can collect physical application forms from our main office in Srinagar or contact local district representatives. Physical forms must be returned with paper copies of the required documents before the application deadline."
    },
    {
      q: "What is the family income limit for eligibility?",
      a: "For the HSSP scholarship, the family's annual household income should generally not exceed 3,00,000 INR from all sources. Verification certificates issued by the competent authority (Tehsildar) are required."
    },
    {
      q: "How will I be notified about my application status?",
      a: "KEI notifies shortlisted candidates via SMS and email. The list of selected candidates is also published on our website and social media platforms. Please ensure your contact details are written correctly on the form."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="how-to-apply-page" style={{ backgroundColor: "#ffffff" }}>
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="wwd-rainbow-section" style={{ padding: "100px 40px 22px" }}>
        <div className="wwd-rainbow-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "24px" }}>
            <Link 
              to="/for-scholars" 
              className="button-outline"
              style={{
                backgroundColor: "transparent",
                borderColor: "#47BFDA",
                borderWidth: "1.5px",
                borderStyle: "solid",
                color: "#47BFDA",
                padding: "8px 20px",
                fontSize: "13px",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "600",
                textDecoration: "none"
              }}
            >
              ← Back to For Scholars
            </Link>
          </div>
          <h1 className="wwd-rainbow-heading" style={{ fontSize: "36px", fontWeight: "700", color: "#ffffff", marginTop: "10px" }}>
            Detailed Application Process
          </h1>
          <p className="wwd-rainbow-sub" style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.85)", marginTop: "12px", lineHeight: "1.8" }}>
            Learn about our transparent, merit-cum-means selection methodology and find the checklists required for a successful application.
          </p>
        </div>
      </section>

      {/* ── Steps Section ────────────────────────────────────────── */}
      <section style={{ padding: "22px 40px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", color: "#0f1b24", marginBottom: "22px", textAlign: "center" }}>
            Three Steps to Secure Your Scholarship
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="step-card-detailed"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #e4eef4",
                  borderRadius: "16px",
                  padding: "40px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.02)",
                  display: "flex",
                  gap: "30px",
                  position: "relative"
                }}
              >
                <div style={{
                  fontSize: "52px",
                  fontWeight: "900",
                  color: "#47BFDA",
                  opacity: "0.25",
                  lineHeight: "1",
                  fontFamily: "monospace"
                }}>
                  {step.num}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "20px", color: "#0f1b24", fontWeight: "700", marginBottom: "16px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "20px" }}>
                    {step.desc}
                  </p>
                  
                  <div style={{
                    background: "#f8fbfd",
                    borderLeft: "4px solid #47BFDA",
                    padding: "20px 24px",
                    borderRadius: "0 8px 8px 0"
                  }}>
                    <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0f1b24", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Key Information / Requirements:
                    </h4>
                    <ul style={{ paddingLeft: "18px", margin: 0, fontSize: "14px", color: "#444", lineHeight: "1.7" }}>
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ marginBottom: "6px" }}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ─────────────────────────────────────────── */}
      <section style={{ padding: "22px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", color: "#0f1b24", marginBottom: "22px", textAlign: "center" }}>
            Admissions FAQs
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{
                    border: "1.5px solid #e4eef4",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "border-color 0.2s"
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: isOpen ? "#f8fbfd" : "#ffffff",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: "inherit"
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: "700", color: "#0f1b24" }}>{faq.q}</span>
                    <span style={{ fontSize: "18px", color: "#47BFDA", transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "22px 24px", fontSize: "14.5px", color: "#555", lineHeight: "1.7", borderTop: "1.5px solid #e4eef4", backgroundColor: "#ffffff" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer / CTA ────────────────────────────────────────── */}
      <section style={{ padding: "22px 40px", backgroundColor: "#f4f8fb", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "22px", color: "#0f1b24", marginBottom: "12px" }}>Still Have Questions?</h3>
          <p style={{ fontSize: "15px", color: "#555", marginBottom: "24px" }}>
            If you need assistance with application forms or eligibility determinations, contact our admissions help desk.
          </p>
          <a 
            href="mailto:info@kashmirei.org" 
            className="button-outline"
            style={{
              backgroundColor: "#47BFDA",
              borderColor: "#47BFDA",
              color: "#fff",
              padding: "10px 24px",
              fontSize: "14px",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block"
            }}
          >
            Email Helpdesk
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowToApplyPage;
