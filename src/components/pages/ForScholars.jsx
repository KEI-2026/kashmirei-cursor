import React from "react";
import { Link } from "react-router-dom";
import ForScholarsProgramIntro from "../ForScholarsPart/ForScholarsProgramIntro";
import ForScholarsPrograms from "../ForScholarsPart/ForScholarsPrograms";
import ApplicationFormLink from "../shared/ApplicationFormLink";
import "../../styles/For-Scholars/forscholars.css";

const ForScholars = () => {
  const applySteps = [
    {
      step: "01",
      title: "Application Form",
      desc: (
        <>
          Complete the <Link to="/scholar-application" style={{ color: "var(--kei-accent-text)", textDecoration: "underline", fontWeight: "600" }}>online application form</Link>. Alternatively, offline application forms are present at your respective schools, or you can visit the KEI office for the same.
        </>
      )
    },
    {
      step: "02",
      title: "Contact for Examination Date",
      desc: "Contact the KEI office directly to get the official schedule and details regarding the upcoming entrance examination date."
    },
    {
      step: "03",
      title: "Roll Slip & Center Details",
      desc: "Contact the KEI office to receive your roll slip, center allotment details, and other instructions for the examination."
    }
  ];

  const applicationDates = [
    {
      program: "High School Support Program (HSSP)",
      status: "Upcoming",
      statusColor: "#f39c12",
      timeline: [
        { label: "Applications Open", date: "August 14, 2026" },
        { label: "Application Submission Deadline", date: "September 30, 2026" },
        { label: "Release of Admit Cards / Roll Numbers", date: "November 25, 2026" },
        { label: "KEI HSSP Test", date: "December 06, 2026" },
        
        // { label: "Results & Document Verification", date: "December 20, 2026" }
      ]
    }
    /*
    {
      program: "Professional Support Program (PSP)",
      open: "September 15, 2026",
      deadline: "October 30, 2026",
      status: "Upcoming",
      statusColor: "#f39c12"
    },
    {
      program: "Graduate Abroad Program (GAP)",
      open: "February 01, 2026",
      deadline: "March 31, 2026",
      status: "Closed",
      statusColor: "#e74c3c"
    }
    */
  ];

  return (
    <div className="forscholars-page-wrapper">
      <ForScholarsProgramIntro />

      {/* ── Rainbow Navigator ───────────────────────────────────── */}
      <ForScholarsPrograms />

      {/* ── Dates for Application Section ────────────────────────── */}
      <section className="forscholars-dates-section">
        <div className="forscholars-container">
          <div className="forscholars-header">
            <span className="forscholars-label font-teal"> DATES FOR APPLICATION</span>
            <h2>Application Timelines.</h2>
            <p className="forscholars-sub">
              Mark your calendars with the schedule for current and upcoming admission cycles for our core scholar programs.
            </p>
          </div>

          <div className="forscholars-dates-grid" style={{ display: "flex", justifyContent: "center" }}>
            {applicationDates.map((item, idx) => (
              <div key={idx} className="forscholars-date-card" style={{ maxWidth: "600px", width: "100%" }}>
                <div className="date-card-header" style={{ alignItems: "center", textAlign: "center" }}>
                  <span className="status-badge" style={{ backgroundColor: item.statusColor }}>
                    {item.status}
                  </span>
                  <h3>{item.program} Exam Form Timeline (2027 Batch)</h3>
                </div>
                <div className="date-card-body" style={{ marginTop: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", paddingLeft: "24px", borderLeft: "2px solid #e4eef4", textAlign: "left" }}>
                    {item.timeline && item.timeline.map((step, sIdx) => (
                      <div key={sIdx} style={{ position: "relative" }}>
                        <div style={{
                          position: "absolute",
                          left: "-33px",
                          top: "4px",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          backgroundColor: sIdx === 0 ? "#f39c12" : "#47BFDA",
                          border: "3px solid #ffffff",
                          boxShadow: "0 0 0 2px #e4eef4"
                        }} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "10px" }}>
                          <strong style={{ fontSize: "14.5px", color: "#0f1b24", fontWeight: "700" }}>{step.label}</strong>
                          <span style={{ fontSize: "13.5px", color: "#666", fontWeight: "600" }}>{step.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligibility Criteria Section ────────────────────────── */}
      <section className="forscholars-eligibility-section">
        <div className="forscholars-container">
          <div className="forscholars-header">
            <h2>Eligibility Criteria.</h2>
            <p className="forscholars-sub">
              To apply for the High School Support Program (HSSP), applicants must meet the following eligibility requirements:
            </p>
          </div>

          <div className="forscholars-eligibility-list-wrap">
            <ul className="forscholars-eligibility-list">
              <li>
                <strong>Academic Performance:</strong> Applicants must have secured at least 70% in their Grade 8 Term Ist results.
              </li>
              <li>
                <strong>Financial Need:</strong> The applicant's annual family income must not exceed INR 5 lakhs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── How to Apply Section ────────────────────────────────── */}
      <section className="forscholars-apply-section">
        <div className="forscholars-container">
          <div className="forscholars-header">
            <h2>How to Apply.</h2>
            <p className="forscholars-sub">
              Our application process is structured to be transparent, fair, and accessible to students across Kashmir.
            </p>
          </div>

          <div className="forscholars-steps-list-wrap">
            <ul className="forscholars-steps-list">
              {applySteps.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          <div className="forscholars-apply-cta">
            <Link to="/for-scholars/how-to-apply" className="button-outline cta-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForScholars;
