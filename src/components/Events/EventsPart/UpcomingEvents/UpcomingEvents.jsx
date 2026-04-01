import React from "react";
import "../../../../styles/Events/upcoming-events.css";

const TYPE_COLORS = {
  "In-Person": "#2E7D32",
  "Online":    "#1B4F8A",
  "Hybrid":    "#E8A020",
};

const upcomingEvents = [
  {
    id: 1,
    month: "APR",
    day: "15",
    year: "2026",
    title: "KEI Annual Fundraising Dinner 2026",
    location: "Boston, MA, USA",
    time: "6:30 PM EDT",
    type: "In-Person",
    description: "Join us for an evening of inspiration, celebration, and community as we raise funds for KEI's 2026 scholarship and mentorship programmes.",
    actionLabel: "Register Interest",
    actionHref: "/donate",
  },
  {
    id: 2,
    month: "MAR",
    day: "30",
    year: "2026",
    title: "Scholar Orientation Day — Spring 2026",
    location: "Srinagar, Jammu & Kashmir",
    time: "9:00 AM IST",
    type: "In-Person",
    description: "New scholars joining the 2026 cohort are welcomed into the KEI family with a full day of orientation, introductions, and programme briefings.",
    actionLabel: "Learn More",
    actionHref: "#",
  },
  {
    id: 3,
    month: "APR",
    day: "05",
    year: "2026",
    title: "Global Mentorship Kickoff Webinar",
    location: "Online — Zoom",
    time: "7:00 PM EDT / 4:30 AM IST",
    type: "Online",
    description: "Mentors and scholars from the Spring 2026 cohort meet for the first time. Guest address by a KEI alumnus and overview of the mentorship framework.",
    actionLabel: "Get the Link",
    actionHref: "/get-involved",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="section-upcoming-events">
      <div className="events-container">

        <div className="events-header">
          <span className="events-label">UPCOMING EVENTS</span>
          <h2>Mark Your Calendar.</h2>
          <p className="events-sub">
            Join us at our next events — in Kashmir, across the USA, and online.
          </p>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="events-empty">
            <span className="events-empty-icon">📅</span>
            <p>No upcoming events right now. Check back soon or subscribe below for updates.</p>
          </div>
        ) : (
          <div className="events-list">
            {upcomingEvents.map((ev) => (
              <div className="event-row" key={ev.id}>

                {/* Date box */}
                <div className="event-date-box">
                  <span className="event-month">{ev.month}</span>
                  <span className="event-day">{ev.day}</span>
                  <span className="event-year">{ev.year}</span>
                </div>

                {/* Details */}
                <div className="event-details">
                  <div className="event-meta">
                    <span className="event-type-badge"
                      style={{ background: TYPE_COLORS[ev.type] }}>
                      {ev.type}
                    </span>
                    <span className="event-location">📍 {ev.location}</span>
                    <span className="event-time">🕐 {ev.time}</span>
                  </div>
                  <h3 className="event-title">{ev.title}</h3>
                  <p className="event-desc">{ev.description}</p>
                </div>

                {/* Action */}
                <div className="event-action">
                  <a href={ev.actionHref} className="event-action-btn">
                    {ev.actionLabel} →
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default UpcomingEvents;
