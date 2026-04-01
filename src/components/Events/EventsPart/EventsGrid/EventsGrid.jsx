import React, { useState, useEffect } from "react";
import "../../../../styles/Events/events-grid.css";

const CATEGORIES = ["All", "Fundraising", "Workshop", "Webinar", "Community", "Conference"];

const CATEGORY_COLORS = {
  Fundraising: "#1B4F8A",
  Workshop:    "#E8A020",
  Webinar:     "#47BFDA",
  Community:   "#6D1ED4",
  Conference:  "#2E7D32",
};

const events = [
  {
    id: 1,
    category: "Fundraising",
    date: "April 15, 2026",
    title: "KEI Annual Fundraising Dinner 2026 — Boston",
    summary: "Join 200+ supporters for an evening of celebration, scholar spotlights, and community-building as we raise funds for KEI's 2026–2027 programmes.",
    body: `KEI's signature annual event returns to the Westin Copley Place in Boston, MA. This year's gala promises to be our most impactful yet.\n\nEvening Schedule:\n• 6:30 PM — Cocktails & Networking\n• 7:30 PM — Dinner & Welcome Address\n• 8:15 PM — Keynote by Dr. Seerat Shah (KEI Alumna)\n• 8:45 PM — Scholar Spotlight Video\n• 9:15 PM — Live Auction for the Graduate Abroad Programme\n• 10:00 PM — Closing Remarks and Dessert\n\nAll proceeds from the evening go directly to supporting KEI's scholarship, mentorship, and digital learning programmes for 2026–2027.\n\nDress Code: Business Formal\n\nFor sponsorship opportunities, contact events@kashmirei.org.`,
    cta: { label: "Reserve Your Seat", href: "/donate" },
  },
  {
    id: 2,
    category: "Workshop",
    date: "March 28, 2026",
    title: "Career Pathways Workshop — STEM Edition",
    summary: "A full-day interactive workshop for KEI scholars exploring careers in Science, Technology, Engineering, and Mathematics with real-world professionals.",
    body: `KEI's Career Pathways Workshop returns for its 5th edition — this time focused exclusively on STEM careers. The workshop is designed for current KEI scholars in grades 10–12 and undergraduate students.\n\nWorkshop Tracks:\n• Track A: Computer Science & AI — led by industry professionals from top tech companies\n• Track B: Medicine & Biotech — led by practising physicians and biotech researchers\n• Track C: Engineering & Sustainable Design — led by engineers from infrastructure and clean energy sectors\n\nEach track includes:\n• Career overview presentations\n• Hands-on activities and mini-challenges\n• Q&A and mentorship matching sessions\n\nVenue: KEI Kashmir Office, Srinagar\nTime: 9:00 AM – 5:00 PM IST\nLunch and materials provided.`,
    cta: { label: "Register for Workshop", href: "/get-involved" },
  },
  {
    id: 3,
    category: "Webinar",
    date: "March 10, 2026",
    title: "Applying Abroad: Tips from KEI Alumni",
    summary: "An online panel discussion featuring 5 KEI alumni who secured graduate scholarships at top universities in the USA, UK, and Canada.",
    body: `Navigating the graduate admissions process can be overwhelming — but you don't have to do it alone. Join five KEI alumni as they share their personal journeys, strategies, and hard-won advice on applying to graduate programmes abroad.\n\nPanelists:\n• Aisha Malik — MSc Computer Science, UMass Amherst\n• Farhan Wani — MA Education Policy, University of Toronto\n• Sana Dar — MSc Global Health, University of Edinburgh\n• Irfan Bhat — PhD Mechanical Engineering, TU Munich\n• Rafia Shah — MBA, Boston University\n\nTopics Covered:\n• Choosing the right programme and university\n• Writing compelling personal statements\n• Securing funding and scholarships\n• Visa and pre-departure preparation\n• Adjusting to life abroad\n\nPlatform: Zoom (link sent upon registration)\nTime: 7:00 PM EDT / 4:30 AM IST`,
    cta: { label: "Register for Webinar", href: "#" },
  },
  {
    id: 4,
    category: "Community",
    date: "February 14, 2026",
    title: "KEI Kashmir Alumni Reunion & Cricket Match",
    summary: "A day of reconnection, fun, and friendly competition as KEI alumni come together for the annual reunion and cricket tournament in Srinagar.",
    body: `The KEI Kashmir Alumni Network invites all past and current scholars to the Annual Alumni Reunion — a beloved tradition that brings the KEI family together every February.\n\nEvent Highlights:\n• Alumni registration and welcome tea (9:00 AM)\n• "Where Are They Now?" — alumni career spotlight presentations\n• Friendly cricket match: Scholars XI vs Alumni XI\n• BBQ lunch and informal networking\n• Group photo session and memorabilia\n• Evening chai and open mic\n\nVenue: SK Stadium grounds, Srinagar\nTime: 9:00 AM – 6:00 PM IST\n\nThis event is open to all KEI scholars, alumni, mentors, and their families. There is no cost to attend.\n\nRSVP by February 7th to alumni@kashmirei.org.`,
    cta: null,
  },
  {
    id: 5,
    category: "Conference",
    date: "January 20, 2026",
    title: "Kashmiri Diaspora Education Summit — New York",
    summary: "A one-day summit bringing together educators, philanthropists, and diaspora leaders to discuss the future of education support for Kashmiri students.",
    body: `KEI is proud to co-host the inaugural Kashmiri Diaspora Education Summit in partnership with Kashmiri American Council and the Kashmir Education Foundation.\n\nThe summit will tackle critical questions:\n• How can the diaspora more effectively support education in Kashmir?\n• What models of digital learning are working — and what's next?\n• How do we scale mentorship programmes internationally?\n• Building sustainable funding pipelines for long-term impact\n\nSpeakers include:\n• Dr. Faisal Qadri — Founder, KEI\n• Prof. Nusrat Jahan — Columbia University\n• Mr. Tariq Rather — Kashmiri American Council\n• Ms. Priya Kapoor — Gooru.org\n\nVenue: Columbia University Faculty House, New York, NY\nTime: 10:00 AM – 5:00 PM EST\nRegistration Fee: $25 (includes lunch and materials)\n\nAll proceeds donated to KEI's Digital Smart Learning Environment programme.`,
    cta: { label: "Register for Summit", href: "#" },
  },
  {
    id: 6,
    category: "Fundraising",
    date: "December 12, 2025",
    title: "Year-End Giving Campaign: 'Light a Future'",
    summary: "KEI's annual online fundraising drive matching every donation dollar-for-dollar thanks to a generous matching grant from the Darwish Foundation.",
    body: `Every December, KEI launches its year-end giving campaign — and this year, every dollar you give will be matched dollar-for-dollar by the Darwish Foundation, up to $50,000.\n\nHow It Works:\n• Donate any amount between Dec 1–31 through kashmirei.org/donate\n• Your gift is automatically doubled by the matching grant\n• 100% of matched funds go to scholar support programmes\n\n2025 Campaign Goals:\n• Raise $100,000 (including match)\n• Fund 40 new scholarships for the 2026 cohort\n• Expand the DSLE programme to 3 more schools\n\nEvery gift — no matter the size — lights a future. A $50 donation becomes $100. A $500 donation becomes $1,000.\n\nSpread the word: Share our campaign on social media using #LightAFutureKEI.`,
    cta: { label: "Donate Now", href: "/donate" },
  },
  {
    id: 7,
    category: "Workshop",
    date: "November 5, 2025",
    title: "English Language & Communication Skills Bootcamp",
    summary: "A 3-day intensive bootcamp for KEI scholars to improve their English proficiency, public speaking, and professional communication skills.",
    body: `Strong communication skills are essential for academic and career success. KEI's Communication Bootcamp gives scholars the tools and confidence they need.\n\nBootcamp Schedule (3 days):\n\nDay 1: Writing Skills\n• Academic essay structure\n• Email etiquette and professional writing\n• Personal statement drafting workshop\n\nDay 2: Speaking & Presentation\n• Public speaking fundamentals\n• Presentation design using Canva and PowerPoint\n• Mock presentations with peer feedback\n\nDay 3: Interview Preparation\n• University interview simulation\n• Job interview techniques\n• Confidence-building exercises\n\nFacilitators: KEI alumni and volunteer professionals from the USA and UK\nVenue: KEI Kashmir Office, Srinagar\nTime: 10:00 AM – 4:00 PM IST each day\n\nOpen to all current KEI scholars. No fee.`,
    cta: null,
  },
  {
    id: 8,
    category: "Webinar",
    date: "October 18, 2025",
    title: "Mental Health & Academic Wellbeing Webinar",
    summary: "A candid online session on managing stress, mental health, and academic pressure — led by psychologists and KEI alumni who've navigated these challenges.",
    body: `Academic excellence should never come at the cost of mental health. KEI is committed to supporting the holistic wellbeing of every scholar.\n\nThis webinar features:\n• Dr. Sara Andrabi — Clinical Psychologist, Srinagar\n• Bilal Ahmad — KEI Alumnus & Mental Health Advocate\n• Moderated by KEI Programme Manager\n\nTopics:\n• Recognizing signs of burnout and anxiety\n• Practical coping strategies for exam pressure\n• Building a support network\n• When and how to seek professional help\n• Balancing ambition with self-care\n\nThis session is confidential and designed as a safe space for open conversation.\n\nPlatform: Zoom\nTime: 6:00 PM IST / 8:30 AM EDT\n\nOpen to all KEI scholars, alumni, and mentors.`,
    cta: null,
  },
  {
    id: 9,
    category: "Community",
    date: "September 15, 2025",
    title: "KEI Volunteer Appreciation Night",
    summary: "An online celebration honouring the 60+ volunteers who donated their time and expertise to KEI programmes throughout 2025.",
    body: `KEI's success is built on the generosity of our volunteers — mentors, tutors, workshop facilitators, event organisers, and more.\n\nThis virtual event celebrates YOU.\n\nEvent Highlights:\n• Welcome address by KEI Board Chair\n• Volunteer Impact Report 2025\n• Recognition awards in 5 categories:\n  - Mentor of the Year\n  - Most Hours Contributed\n  - Rising Star Volunteer\n  - Global Reach Award\n  - Scholar's Choice Award\n• Surprise guest speaker\n• Interactive trivia and fun activities\n\nPlatform: Zoom\nTime: 7:00 PM EDT\n\nAll current and past KEI volunteers are invited. Invitations will be sent via email.`,
    cta: { label: "Nominate a Volunteer", href: "/get-involved" },
  },
];

// ── Modal Component ───────────────────────────────────────────────────────────
const EventModal = ({ item, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const color = CATEGORY_COLORS[item.category] || "#47BFDA";

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
const EventsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openItem, setOpenItem] = useState(null);

  const filtered = activeFilter === "All"
    ? events
    : events.filter((e) => e.category === activeFilter);

  return (
    <section className="section-ann-grid">
      <div className="ann-grid-container">

        <div className="ann-grid-header">
          <span className="ann-label">ALL EVENTS</span>
          <h2>What's Happening at KEI.</h2>
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
            const color = CATEGORY_COLORS[item.category] || "#47BFDA";
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
                  View Details →
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {openItem && (
        <EventModal item={openItem} onClose={() => setOpenItem(null)} />
      )}
    </section>
  );
};

export default EventsGrid;
