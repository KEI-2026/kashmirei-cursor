import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../styles/For-Scholars/forscholars-programs.css";
import { programs } from "../../data/programs";

const scrollToProgram = (id) => {
  const el = document.getElementById(`program-${id}`);
  if (el) {
    const offset = 90; // header height offset
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const objectives = [
  "Empower students with 21st-century skills and global competitiveness.",
  "Provide academic, and strategic mentorship checkpoints.",
  "Bridge the geographical and economic divide in secondary and tertiary education.",
  "Cultivate a lifelong network of leadership-driven professionals returning value to Kashmir."
];

const AllPrograms = () => {
  const location = useLocation();
  const [activeProgram, setActiveProgram] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#program-", "");
      // Wait for DOM rendering
      const timer = setTimeout(() => {
        scrollToProgram(id);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="all-programs-page">
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="wwd-rainbow-section" style={{ padding: "140px 40px 40px" }}>
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
          <span className="wwd-section-label">OUR PROGRAMS</span>
          <h1 className="wwd-rainbow-heading" style={{ fontSize: "36px", fontWeight: "700", color: "#ffffff", marginTop: "10px" }}>
            Empowering Kashmir's Scholars
          </h1>
          <p className="wwd-rainbow-sub" style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.85)", marginTop: "12px", lineHeight: "1.8" }}>
            Explore our eight specialized programs working together to support every scholar from high school to university and beyond.
          </p>
        </div>
      </section>

      {/* ── 8 Program Sections ────────────────────────────────────── */}
      <div className="programs-list-wrap">
        {programs.map((prog, i) => {
          const isEven = i % 2 === 1; // alternating layouts
          return (
            <section
              key={prog.id}
              id={`program-${prog.id}`}
              className={`wwd-prog-section ${isEven ? "wwd-prog-flip" : ""}`}
              style={{ padding: "80px 40px", borderBottom: "1px solid #eef2f5" }}
            >
              <div className="wwd-prog-container">
                {/* Image column */}
                <div className="wwd-prog-image-col">
                  <button
                    type="button"
                    onClick={() => setActiveProgram(prog)}
                    className="wwd-prog-section-link"
                  >
                    <div
                      className="wwd-prog-img-wrap"
                      style={{ "--prog-color": prog.color }}
                    >
                      <img src={prog.image} alt={prog.title} />
                    </div>
                  </button>
                </div>

                {/* Content column */}
                <div className="wwd-prog-content-col">
                  <div className="wwd-prog-number" style={{ color: prog.color }}>
                    {prog.number}
                  </div>
                  <span
                    className="wwd-prog-badge"
                    style={{ background: prog.color }}
                  />
                  
                  {/* Clickable Title */}
                  <button
                    type="button"
                    onClick={() => setActiveProgram(prog)}
                    className="wwd-prog-section-link"
                  >
                    <h3 className="wwd-prog-title" style={{ transition: "color 0.2s" }}>
                      {prog.title}
                    </h3>
                  </button>

                  <p className="wwd-prog-subtitle">{prog.subtitle}</p>
                  <p className="wwd-prog-desc">{prog.description}</p>

                  {/* View Details Link */}
                  <div style={{ marginBottom: "28px" }}>
                    <button
                      type="button"
                      onClick={() => setActiveProgram(prog)}
                      className="button-outline"
                      style={{
                        backgroundColor: prog.color,
                        borderColor: prog.color,
                        color: "#fff",
                        padding: "8px 20px",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                    >
                      View Program Details →
                    </button>
                  </div>

                  {/* Program stats */}
                  <div className="wwd-prog-stats">
                    {prog.stats.map((s) => (
                      <div
                        key={s.label}
                        className="wwd-prog-stat"
                        style={{ "--stat-color": prog.color }}
                      >
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Program Details Side Drawer ────────────────────────────────── */}
      {activeProgram && (
        <div className="prog-modal-backdrop" onClick={() => setActiveProgram(null)}>
          <div className="prog-modal-drawer" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="prog-modal-close"
              aria-label="Close program details"
              onClick={() => setActiveProgram(null)}
            >
              ✕
            </button>
            
            <div 
              className="prog-modal-header" 
              style={{ 
                background: `linear-gradient(135deg, ${activeProgram.color}dd 0%, #0f1b24 100%)`,
              }}
            >
              <span className="prog-modal-number" style={{ color: activeProgram.color }}>
                Program {activeProgram.number}
              </span>
              <h2 className="prog-modal-title">{activeProgram.title}</h2>
              <p className="prog-modal-subtitle">{activeProgram.subtitle}</p>
            </div>
            
            <div className="prog-modal-body">
              {/* Program Overview */}
              <div className="prog-modal-section">
                <h3>Program Overview</h3>
                <p>{activeProgram.overview || activeProgram.description}</p>
                {!activeProgram.overview && (
                  <p>
                    Scholars are evaluated through a robust selection procedure and provided with holistic 
                    resources to achieve their absolute potential.
                  </p>
                )}
              </div>

              {/* Program Goals */}
              <div className="prog-modal-section">
                <h3>Program Goals</h3>
                {activeProgram.goals ? (
                  <ul className="prog-modal-list">
                    {activeProgram.goals.map((g, idx) => (
                      <li key={idx}>
                        <strong>{g.title}:</strong> {g.desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="prog-modal-list">
                    {objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Eligibility Criteria */}
              {activeProgram.eligibility && (
                <div className="prog-modal-section">
                  <h3>Eligibility Criteria</h3>
                  <ul className="prog-modal-list">
                    {activeProgram.eligibility.academic && (
                      <li>
                        <strong>Academic Performance:</strong> {activeProgram.eligibility.academic}
                      </li>
                    )}
                    {activeProgram.eligibility.financial && (
                      <li>
                        <strong>Financial Need:</strong> {activeProgram.eligibility.financial}
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Selection Process */}
              {activeProgram.selectionProcess !== null && (
                <div className="prog-modal-section">
                  <h3>Selection Process</h3>
                  {activeProgram.selectionProcess ? (
                    <div className="prog-modal-timeline">
                      {activeProgram.selectionProcess.map((step, idx) => (
                        <div className="prog-modal-timeline-item" key={idx}>
                          <div className="prog-modal-timeline-dot" style={{ backgroundColor: activeProgram.color }} />
                          <h4>{step.step || idx + 1}. {step.title}</h4>
                          <p>{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="prog-modal-timeline">
                      <div className="prog-modal-timeline-item">
                        <div className="prog-modal-timeline-dot" style={{ backgroundColor: activeProgram.color }} />
                        <h4>1. Selection & Identification</h4>
                        <p>Applications are opened annually, followed by competitive evaluation and strict financial audits.</p>
                      </div>
                      <div className="prog-modal-timeline-item">
                        <div className="prog-modal-timeline-dot" style={{ backgroundColor: activeProgram.color }} />
                        <h4>2. Onboarding & Resource Mapping</h4>
                        <p>Selected scholars are assigned mentors, smart devices, learning modules, or scholarship funds.</p>
                      </div>
                      <div className="prog-modal-timeline-item">
                        <div className="prog-modal-timeline-dot" style={{ backgroundColor: activeProgram.color }} />
                        <h4>3. Milestones & Progress Tracking</h4>
                        <p>Regular check-ins, workshops, and exam trials are conducted to track and optimize outcomes.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Entrance Exam (HSSP only) */}
              {activeProgram.entranceExam && (
                <div className="prog-modal-section">
                  <h3>Entrance Exam</h3>
                  <div style={{
                    background: "#f4f8fb",
                    borderLeft: `4px solid ${activeProgram.color}`,
                    padding: "16px",
                    borderRadius: "0 12px 12px 0"
                  }}>
                    <p style={{ margin: 0, fontSize: "14.5px", lineHeight: "1.6", color: "#444" }}>
                      {activeProgram.entranceExam}
                    </p>
                  </div>
                </div>
              )}

              {/* Program Duration & Support Structure */}
              {activeProgram.durationAndSupport && (
                <div className="prog-modal-section">
                  <h3>Program Duration & Support Structure</h3>
                  <p><strong>Duration:</strong> {activeProgram.durationAndSupport.duration}</p>
                  <h4 style={{ marginTop: "20px", fontSize: "15.5px", fontWeight: "700", color: "#0f1b24", marginBottom: "12px" }}>Support Structure:</h4>
                  <ul className="prog-modal-list">
                    {activeProgram.durationAndSupport.supportStructure.map((s, idx) => (
                      <li key={idx}>
                        <strong>{s.name}:</strong> {s.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Performance Metrics */}
              <div className="prog-modal-section">
                <h3>Key Performance Metrics</h3>
                <div className="prog-modal-stats-list">
                  {activeProgram.stats.map((stat, i) => (
                    <div className="prog-modal-stat-item" key={i}>
                      <strong style={{ color: activeProgram.color }}>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="prog-modal-footer">
              <div className="prog-modal-actions">
                <Link 
                  to="/donate" 
                  className="prog-modal-btn btn-primary" 
                  style={{ backgroundColor: activeProgram.color }}
                  onClick={() => setActiveProgram(null)}
                >
                  Donate Now
                </Link>
                <Link 
                  to="/get-involved" 
                  className="prog-modal-btn btn-secondary"
                  onClick={() => setActiveProgram(null)}
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPrograms;
