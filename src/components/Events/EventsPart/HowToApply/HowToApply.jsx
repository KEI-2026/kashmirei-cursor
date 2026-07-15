import React from "react";
import "../../../../styles/Events/upcoming-events.css"; // Reuse events styling for consistency
import ApplicationFormLink from "../../../shared/ApplicationFormLink";

const HowToApply = () => {
  const steps = [
    {
      num: "01",
      title: "Application Form",
      desc: (
        <>
          Complete the <ApplicationFormLink />. Alternatively, offline application forms are present at your respective schools, or you can visit the KEI office for the same.
        </>
      )
    },
    {
      num: "02",
      title: "Contact for Examination Date",
      desc: "Contact the KEI office directly to get the official schedule and details regarding the upcoming entrance examination date."
    },
    {
      num: "03",
      title: "Roll Slip & Center Details",
      desc: "Contact the KEI office to receive your roll slip, center allotment details, and other instructions for the examination day."
    }
  ];

  return (
    <section className="section-how-to-apply" style={{ padding: "22px 40px", backgroundColor: "#ffffff" }}>
      <div className="events-container">
        
        <div className="events-header" style={{ marginBottom: "22px", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", color: "#0f1b24", marginTop: "12px" }}>How to Apply.</h2>
          <p className="events-sub" style={{ maxWidth: "600px", margin: "10px auto 0" }}>
            A transparent, merit-based selection process to ensure support reaches the most deserving and high-potential students in Kashmir.
          </p>
        </div>

        <div className="apply-steps-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "28px",
          marginTop: "30px"
        }}>
          {steps.map((step, index) => (
            <div className="apply-step-card" key={index} style={{
              background: "#f4f8fb",
              padding: "35px 24px",
              borderRadius: "12px",
              border: "1.5px solid #e4eef4",
              position: "relative",
              transition: "transform 0.25s ease, box-shadow 0.25s ease"
            }}>
              <span className="step-number" style={{
                fontSize: "44px",
                fontWeight: "900",
                color: "#47BFDA",
                opacity: "0.2",
                position: "absolute",
                top: "15px",
                right: "20px",
                lineHeight: "1"
              }}>{step.num}</span>
              
              <h3 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#0f1b24",
                marginBottom: "12px",
                paddingRight: "40px"
              }}>{step.title}</h3>
              
              <p style={{
                fontSize: "14px",
                color: "#555",
                lineHeight: "1.75",
                margin: "0"
              }}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToApply;
