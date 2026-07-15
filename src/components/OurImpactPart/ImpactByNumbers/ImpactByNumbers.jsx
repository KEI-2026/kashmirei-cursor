import React from "react";
import "../../../styles/ImpactByNumbers/impact-by-numbers.css";
import impactStats from "../../../data/impactStats";

const ImpactSection = () => {
  const impactCards = [
    {
      number: impactStats.scholarships,
      title: "Scholarships Awarded",
      description:
        "Financial support enabling students to pursue education without barriers.",
    },
    {
      number: impactStats.devices,
      title: "Digital Devices Provided",
      description:
        "Tools that keep scholars connected and learning effectively.",
    },
    {
      number: impactStats.careerWorkshops,
      title: "Career Workshops Conducted",
      description:
        "Sessions for career planning, skill-building, and academic decisions.",
    },
    {
      number: impactStats.distinction,
      title: "Scholars Graduate With Distinction",
      description:
        "Reflecting academic excellence across KEI-supported scholars.",
    },
    {
      number: impactStats.alumni,
      title: "Alumni Network",
      description:
        "Alumni who inspire, mentor, and give back to the ecosystem.",
    },
    {
      number: "Countless",
      title: "Lives Transformed",
      description:
        "Confidence, growth, and success beyond what numbers alone capture.",
    },
    {
      number: "600+",
      title: "Career Guidance Sessions (Mindler)",
      description:
        "AI-powered guidance for academic and professional choices.",
    },
    {
      number: impactStats.mentorSessions,
      title: "Mentorship Sessions",
      description:
        "One-on-one sessions connecting scholars with expert mentors.",
    },
    {
      number: "82,000+",
      title: "Navigator Competencies Gained",
      description:
        "Skills built through structured learning and career readiness.",
    },
    {
      number: "10+",
      title: "Graduate Abroad Readiness Programs",
      description:
        "Preparing scholars for international education opportunities.",
    },
    {
      number: "24+",
      title: "FLY Competitiveness Workshops",
      description:
        "Building competitiveness, confidence, and essential skills.",
    },
    {
      number: "50+",
      title: "International Bridge Scholarships",
      description:
        "Supporting access to global academic pathways.",
    },
  ];

  const scholarStats = [
    {
      number: "829",
      label: "Scholars (Grades 9–12)",
      desc: "Actively supported across multiple academic levels.",
    },
    {
      number: "70%",
      label: "First-Generation Graduates",
      desc: "Breaking barriers in access to education.",
    },
    {
      number: "21%",
      label: "Orphans",
      desc: "Receiving structured academic and emotional support.",
    },
    {
      number: "$1.2K",
      label: "Average Annual Income",
      desc: "Supporting students from economically challenged backgrounds.",
    },
    {
      number: "10",
      label: "Districts Covered",
      desc: "Extending reach across the Kashmir Valley.",
    },
    {
      number: impactStats.distinction,
      label: "Passed with Distinction",
      desc: "Reflecting strong academic excellence.",
    },
    {
      number: "42:58",
      label: "Male–Female Ratio",
      desc: "Ensuring inclusive and balanced representation.",
    },
    {
      number: "$1.8K",
      label: "Spent Per Scholar",
      desc: "Digital access, mentoring, 21st century skills, AI career guidance, etc.",
    },
  ];

  const alumniStats = [
    {
      number: "2200+",
      label: "High School Program Graduated",
      desc: "Successfully transitioned into higher education paths.",
    },
    {
      number: "11:9",
      label: "Female:Male Ratio",
      desc: "Maintaining gender diversity across alumni.",
    },
    {
      number: "70%",
      label: "First-Gen Graduates",
      desc: "Continuing the impact beyond school education.",
    },
    {
      number: "70%",
      label: "Pursuing Higher Education",
      desc: "Enrolled in colleges and universities.",
    },
    {
      number: "30%",
      label: "Preparing for Professional Exams",
      desc: "Focused on competitive career pathways.",
    },
  ];

  return (
    <section className="impact-by-numbers-page">
      <div className="impact-container">
        <div className="impact-by-numbers-block">
          <div className="impact-by-numbers-block-header">
            <span className="section-label our-impact-section-label">Key Metrics</span>
          </div>
          <div className="impact-stats-grid">
            {impactCards.map((item, index) => (
              <div className="impact-stat-card" key={index}>
                <h3>{item.number}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-by-numbers-block scholar-section">
          <div className="impact-by-numbers-block-header">
            <span className="section-label our-impact-section-label">
              2025 Scholar Profile
            </span>
          </div>
          <div className="profile-grid">
            {scholarStats.map((item, index) => (
              <div className="profile-card" key={index}>
                <h3>{item.number}</h3>
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-by-numbers-block alumni-section">
          <div className="impact-by-numbers-block-header">
            <span className="section-label our-impact-section-label">
              2008–2022 Alumni Profile
            </span>
          </div>
          <div className="profile-grid">
            {alumniStats.map((item, index) => (
              <div className="profile-card" key={index}>
                <h3>{item.number}</h3>
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
