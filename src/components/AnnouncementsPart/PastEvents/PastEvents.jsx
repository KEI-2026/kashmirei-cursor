import React, { useState } from "react";
import "../../../styles/Announcements/announcements.css";

const pastEvents = [
  {
    year: 2025,
    events: [
      {
        id: 101, date: "Nov 15, 2025", title: "KEI Fundraising Gala — Boston 2025",
        location: "Boston, MA, USA", type: "In-Person",
        recap: "Over 150 supporters gathered and raised $85,400 — our most successful gala yet.",
      },
      {
        id: 102, date: "Sep 20, 2025", title: "Digital Smart Learning Lab Inauguration — Baramulla",
        location: "Baramulla, Kashmir", type: "In-Person",
        recap: "A new DSLE lab was officially opened, providing 80 students with devices and connectivity.",
      },
      {
        id: 103, date: "Jul 10, 2025", title: "Summer Career Awareness Workshop",
        location: "Srinagar, Kashmir", type: "In-Person",
        recap: "120 scholars participated in a 3-day workshop covering career pathways in medicine, engineering, and business.",
      },
      {
        id: 104, date: "Mar 22, 2025", title: "Global Mentorship Cohort Kickoff Webinar",
        location: "Online — Zoom", type: "Online",
        recap: "45 mentor-scholar pairs met for the first time in a live virtual session with 200+ attendees.",
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        id: 201, date: "Nov 9, 2024", title: "KEI Fundraising Gala — Boston 2024",
        location: "Boston, MA, USA", type: "In-Person",
        recap: "An inspiring evening raising $66,500 in support of KEI's scholarship and digital learning programmes.",
      },
      {
        id: 202, date: "Aug 5, 2024", title: "CMI Leadership Training — Srinagar",
        location: "Srinagar, Kashmir", type: "In-Person",
        recap: "30 senior scholars completed a 2-day leadership certification workshop in partnership with CMI UK.",
      },
      {
        id: 203, date: "Jun 14, 2024", title: "Experiential Learning Day — Hospital Visit",
        location: "Srinagar, Kashmir", type: "In-Person",
        recap: "Scholars visited SKIMS Medical College for a behind-the-scenes look at careers in healthcare.",
      },
      {
        id: 204, date: "Feb 18, 2024", title: "Annual Volunteer Appreciation Night",
        location: "Online — Zoom", type: "Online",
        recap: "KEI celebrated 60+ volunteers from around the world with recognition awards and impact highlights.",
      },
    ],
  },
];

const TYPE_COLORS = {
  "In-Person": "#2E7D32",
  "Online":    "#1B4F8A",
  "Hybrid":    "#E8A020",
};

const PastEvents = () => {
  const [openRecap, setOpenRecap] = useState(null);

  return (
    <section className="section-past-events">
      <div className="events-container">

        <div className="events-header">
          <span className="ann-label">PAST EVENTS</span>
          <h2>A Look Back.</h2>
          <p className="events-sub">
            Every event is a chapter in our story of impact.
          </p>
        </div>

        {pastEvents.map((yearGroup) => (
          <div className="past-year-group" key={yearGroup.year}>

            {/* Year separator */}
            <div className="past-year-separator">
              <span className="past-year-label">{yearGroup.year}</span>
              <div className="past-year-rule" />
            </div>

            {/* Cards grid */}
            <div className="past-events-grid">
              {yearGroup.events.map((ev) => (
                <div className="past-event-card" key={ev.id}>
                  {/* Image placeholder */}
                  <div className="past-event-img-placeholder">
                    <span>📷</span>
                    <p>Photo Coming Soon</p>
                  </div>

                  <div className="past-event-body">
                    <div className="past-event-meta">
                      <span className="event-type-badge event-type-badge--sm"
                        style={{ background: TYPE_COLORS[ev.type] }}>
                        {ev.type}
                      </span>
                      <span className="past-event-date">{ev.date}</span>
                    </div>
                    <h4 className="past-event-title">{ev.title}</h4>
                    <p className="past-event-location">📍 {ev.location}</p>
                  </div>

                  <button
                    className="past-event-recap-btn"
                    onClick={() => setOpenRecap(ev)}
                  >
                    View Recap →
                  </button>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

      {/* Recap mini-modal */}
      {openRecap && (
        <div className="ann-modal-backdrop" onClick={() => setOpenRecap(null)}>
          <div className="ann-modal-drawer ann-modal-drawer--sm"
            onClick={(e) => e.stopPropagation()}>
            <button className="ann-modal-close" onClick={() => setOpenRecap(null)}>✕</button>
            <div className="ann-modal-header" style={{ borderColor: TYPE_COLORS[openRecap.type] }}>
              <span className="ann-cat-pill"
                style={{ background: TYPE_COLORS[openRecap.type] }}>
                {openRecap.type}
              </span>
              <p className="ann-modal-date">{openRecap.date} · {openRecap.location}</p>
              <h2 className="ann-modal-title">{openRecap.title}</h2>
            </div>
            <div className="ann-modal-body">
              <p>{openRecap.recap}</p>
              <p className="ann-modal-placeholder-note">
                Full event recap, photos, and videos will be added here shortly.
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default PastEvents;
