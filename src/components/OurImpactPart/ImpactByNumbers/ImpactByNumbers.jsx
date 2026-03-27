import React from "react";
import "../../../styles/ImpactByNumbers/impact-by-numbers.css";

const ImpactSection = () => {
  const impactStats = [
    {
      number: "8,000+",
      title: "Scholarships Awarded",
      description:
        "Thousands of students have received financial support through KEI, enabling them to pursue their education without barriers.",
    },
    {
      number: "1600+",
      title: "Digital Devices Provided",
      description:
        "Access to digital learning tools has empowered students to stay connected, learn effectively, and thrive in a modern academic environment.",
    },
    {
      number: "500+",
      title: "Career Workshops Conducted",
      description:
        "Workshops and sessions designed to guide students in career planning, skill-building, and making informed academic decisions.",
    },
    {
      number: "96%",
      title: "Scholars Graduate With Distinction",
      description:
        "A remarkable success rate showcasing the academic excellence and dedication of KEI-supported scholars.",
    },
    {
      number: "2000+",
      title: "Alumni Network",
      description:
        "A growing community of alumni who continue to inspire, mentor, and contribute back to the ecosystem.",
    },
    {
      number: "Countless",
      title: "Lives Transformed",
      description:
        "Beyond numbers, KEI’s impact is reflected in the confidence, growth, and success stories of every scholar supported.",
    },
    {
      number: "600+",
      title: "Career Guidance Sessions (Mindler)",
      description:
        "Students received personalized career guidance through AI-powered tools to make informed academic and professional choices.",
    },
    {
      number: "1000+",
      title: "Mentorship Sessions",
      description:
        "One-on-one mentorship sessions connecting students with experts to guide their academic and career journeys.",
    },
    {
      number: "82,000+",
      title: "Navigator Competencies Gained",
      description:
        "Students developed critical skills and competencies through structured learning and career readiness programs.",
    },
    {
      number: "10+",
      title: "Graduate Abroad Readiness Programs",
      description:
        "Specialized programs preparing students for international education opportunities and global exposure.",
    },
    {
      number: "24+",
      title: "FLY Competitiveness Workshops",
      description:
        "Workshops focused on building competitiveness, confidence, and essential skills for future success.",
    },
    {
      number: "50+",
      title: "International Bridge Scholarships",
      description:
        "Scholarships supporting students in accessing global academic opportunities and international pathways.",
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
      number: "$1.4K",
      label: "Average Annual Income",
      desc: "Supporting students from economically challenged backgrounds.",
    },
    {
      number: "10",
      label: "Districts Covered",
      desc: "Extending reach across the Kashmir Valley.",
    },
    {
      number: "96%",
      label: "Passed with Distinction",
      desc: "Reflecting strong academic excellence.",
    },
    {
      number: "42:58",
      label: "Male–Female Ratio",
      desc: "Ensuring inclusive and balanced representation.",
    },
  ];

  const alumniStats = [
    {
      number: "200",
      label: "Scholars Graduated",
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
      label: "Preparing for Exams",
      desc: "Focused on competitive career pathways.",
    },
  ];

  return (
    <>
      {/* IMPACT */}
      <section className="section-impact">
        <div className="impact-container">
          <div className="impact-header">
            <span className="impact-label">IMPACT BY NUMBERS</span>
            <h2>Measuring Change, One Scholar at a Time</h2>
            <p>
              Every number reflects a real journey of resilience, opportunity,
              and transformation made possible through KEI’s support.
            </p>
          </div>

          <div className="impact-stats-grid">
            {impactStats.map((item, index) => (
              <div className="impact-stat-card" key={index}>
                <h3>{item.number}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLAR */}
      <section className="profile-section scholar-section">
        <div className="impact-container">
          <h2 className="profile-title">2025 Scholar Profile</h2>

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
      </section>

      {/* ALUMNI */}
      <section className="profile-section alumni-section">
        <div className="impact-container">
          <h2 className="profile-title">2025 Alumni Profile</h2>

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
      </section>
    </>
  );
};

export default ImpactSection;