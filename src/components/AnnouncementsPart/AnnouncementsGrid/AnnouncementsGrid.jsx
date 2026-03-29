import React, { useState, useEffect } from "react";
import "../../../styles/Announcements/announcements.css";

const CATEGORIES = ["All", "Scholarships", "Programmes", "Events", "Press", "Community"];

const CATEGORY_COLORS = {
  Scholarships: "#1B4F8A",
  Programmes:   "#48BEDA",
  Events:       "#E8A020",
  Press:        "#2E7D32",
  Community:    "#6D1ED4",
};

const announcements = [
  {
    id: 1,
    category: "Scholarships",
    date: "March 15, 2026",
    title: "KEI Opens Applications for the 2026 High School Preparedness Programme",
    summary: "Eligible students across the Kashmir Valley are invited to apply for the upcoming HSP cohort. Applications open April 1st and close May 15th, 2026.",
    body: `KEI is proud to announce the opening of applications for the 2026 High School Preparedness Programme (HSP). This programme provides structured academic coaching, mock examinations, and dedicated mentorship to students preparing for competitive high school entrance exams across the Kashmir Valley.\n\nEligibility: Students currently in Grade 7 or 8 with demonstrated academic potential and financial need.\n\nHow to Apply: Applications will be available through the KEI Kashmir office and partner schools from April 1st, 2026. The deadline for submission is May 15th, 2026.\n\nFor more information, contact info@kashmirei.org or call our Kashmir office at +0194 2458153.`,
    cta: { label: "Learn About HSP", href: "/what-we-do#hsp" },
  },
  {
    id: 2,
    category: "Programmes",
    date: "February 28, 2026",
    title: "New Mentorship Cohort: 50 Scholars Matched with Global Professionals",
    summary: "KEI has successfully matched 50 high-achieving scholars with mentors from the USA, UK, Canada, and the Gulf — our largest cohort to date.",
    body: `We are thrilled to announce the launch of KEI's Spring 2026 Mentorship Cohort — our largest to date. Fifty scholars from across the KEI network have been matched with dedicated mentors representing diverse industries including medicine, engineering, technology, finance, and education.\n\nThis cohort builds on the success of our 2025 programme, which saw over 85% of participating scholars report measurable improvement in career clarity and academic confidence.\n\nMentors come from the USA, UK, Canada, UAE, and other parts of the global Kashmiri diaspora. Each mentor-scholar pair will meet bi-weekly via video call, with quarterly group sessions facilitated by KEI programme staff.\n\nIf you are interested in becoming a mentor for future cohorts, visit our Get Involved page.`,
    cta: { label: "Become a Mentor", href: "/get-involved" },
  },
  {
    id: 3,
    category: "Press",
    date: "January 10, 2026",
    title: "KEI Annual Report 2025 — Now Available",
    summary: "Our 2025 Annual Report is now published. Read about our impact, financials, programme highlights, and the scholars whose lives were transformed last year.",
    body: `KEI's Annual Report for 2025 is now available for download. The report covers:\n\n• Programme reach: 2,500+ scholars supported across 8 programmes\n• Financial summary: 91 cents of every dollar raised goes directly to programmes\n• Highlights: Expansion of the Digital Smart Learning Environment to 5 new schools\n• Scholar spotlights: Stories from 6 scholars across different programmes\n• Governance update: New Board member appointments and committee reports\n\nAs a 501(c)(3) registered charity (EIN: 42-1733906), KEI is committed to full financial transparency. The complete audited financial statements are included in the report.\n\nThank you to every donor, volunteer, and partner whose support made 2025 possible.`,
    cta: { label: "Download Report", href: "#" },
  },
  {
    id: 4,
    category: "Programmes",
    date: "December 5, 2025",
    title: "Gooru Navigator Partnership Expanded to 5 New Schools in Kashmir",
    summary: "KEI and Gooru have extended their digital learning partnership to reach students in five additional schools across the Srinagar and Baramulla districts.",
    body: `KEI is pleased to announce the expansion of its Gooru Navigator Programme to five additional partner schools across the Srinagar and Baramulla districts of Kashmir. This expansion brings personalised digital learning tools to approximately 400 new students.\n\nGooru Navigator is an adaptive learning platform that maps each student's competency level, recommends curated resources, and tracks their progress over time. Since the pilot launch in 2023, participating scholars have shown an average 22% improvement in standardised assessment scores.\n\nThe expansion was made possible through generous contributions from KEI's donor community and a renewed partnership agreement with Gooru (gooru.org).\n\nFor schools interested in joining the programme, please contact our Kashmir office.`,
    cta: null,
  },
  {
    id: 5,
    category: "Events",
    date: "November 20, 2025",
    title: "KEI Fundraising Gala — Boston 2025: A Night to Remember",
    summary: "Over 150 supporters gathered in Boston for KEI's annual fundraising gala. Together, we raised over $85,000 — our most successful gala yet.",
    body: `KEI's Annual Fundraising Gala took place on November 15th, 2025, at the Westin Copley Place in Boston, MA. The evening brought together over 150 donors, alumni, scholars, and community supporters for a night of inspiration and celebration.\n\nHighlights of the evening:\n• Keynote address by KEI alumna Dr. Seerat Shah, now a practising physician in Boston\n• Scholar spotlight video featuring voices from the 2025 cohort\n• Live auction raising $32,000 for the Graduate Abroad Programme\n• Total funds raised: $85,400 — a 28% increase over 2024\n\nWe are deeply grateful to every guest, sponsor, and volunteer who made the evening possible. Funds raised will directly support scholarships, mentorship, and digital learning programmes for the 2026 academic year.\n\nPhotos from the event are available on request. Contact info@kashmirei.org.`,
    cta: null,
  },
  {
    id: 6,
    category: "Scholarships",
    date: "October 15, 2025",
    title: "Graduate Abroad Programme: 8 Scholars Awarded International Scholarships",
    summary: "KEI is proud to announce that eight scholars have been awarded full and partial scholarships to pursue graduate studies in the USA, UK, Canada, and Germany.",
    body: `KEI's Graduate Abroad Programme (GAP) has awarded scholarships to eight outstanding scholars for the 2025–2026 academic year. These scholars will pursue master's and doctoral degrees at universities in the United States, United Kingdom, Canada, and Germany.\n\nScholar destinations include:\n• University of Massachusetts, Amherst — MS Computer Science\n• University of Edinburgh — MSc Global Health\n• University of Toronto — MA Education Policy\n• Technical University of Munich — MSc Engineering\n• And four additional placements across the USA and UK\n\nEach scholar receives financial support, pre-departure mentorship, and ongoing guidance from KEI alumni networks in their destination country.\n\nWe congratulate all eight scholars and thank the donors whose contributions made these opportunities possible.`,
    cta: { label: "Support GAP", href: "/donate" },
  },
];

// ── Modal Component ───────────────────────────────────────────────────────────
const AnnouncementModal = ({ item, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const color = CATEGORY_COLORS[item.category] || "#48BEDA";

  return (
    <div className="ann-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="ann-modal-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="ann-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="ann-modal-header" style={{ borderColor: color }}>
          <span className="ann-cat-pill" style={{ background: color }}>
            {item.category}
          </span>
          <p className="ann-modal-date">{item.date}</p>
          <h2 className="ann-modal-title">{item.title}</h2>
        </div>
        <div className="ann-modal-body">
          {item.body.split("\n").map((line, i) =>
            line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>
          )}
        </div>
        {item.cta && (
          <div className="ann-modal-footer">
            <a href={item.cta.href} className="ann-modal-cta" onClick={onClose}>
              {item.cta.label} →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────
const AnnouncementsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openItem, setOpenItem] = useState(null);

  const filtered = activeFilter === "All"
    ? announcements
    : announcements.filter((a) => a.category === activeFilter);

  return (
    <section className="section-ann-grid">
      <div className="ann-grid-container">

        <div className="ann-grid-header">
          <span className="ann-label">LATEST ANNOUNCEMENTS</span>
          <h2>What's New at KEI.</h2>
        </div>

        {/* Filter pills */}
        <div className="ann-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`ann-filter-pill ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              style={activeFilter === cat && cat !== "All"
                ? { background: CATEGORY_COLORS[cat], borderColor: CATEGORY_COLORS[cat] }
                : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="ann-cards-grid">
          {filtered.map((item) => {
            const color = CATEGORY_COLORS[item.category] || "#48BEDA";
            return (
              <div
                key={item.id}
                className="ann-card"
                style={{ "--ann-color": color }}
              >
                <div className="ann-card-top-bar" />
                <div className="ann-card-body">
                  <div className="ann-card-meta">
                    <span className="ann-cat-pill" style={{ background: color }}>
                      {item.category}
                    </span>
                    <span className="ann-card-date">{item.date}</span>
                  </div>
                  <h3 className="ann-card-title">{item.title}</h3>
                  <p className="ann-card-summary">{item.summary}</p>
                </div>
                <button
                  className="ann-card-readmore"
                  onClick={() => setOpenItem(item)}
                >
                  Read More →
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {openItem && (
        <AnnouncementModal item={openItem} onClose={() => setOpenItem(null)} />
      )}
    </section>
  );
};

export default AnnouncementsGrid;
