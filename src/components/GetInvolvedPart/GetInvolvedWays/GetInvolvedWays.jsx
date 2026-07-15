import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Get-Involved/getinvolved-ways.css";
import impactStats from "../../../data/impactStats";
import TrustBar from "../../common/TrustBar";
import {
  FORM_RESPONSE_SLA,
  getVolunteerFormHref,
  externalLinkProps,
} from "../../../config/formLinks";

const volunteerFormHref = getVolunteerFormHref();
const volunteerFormLinkProps = externalLinkProps(volunteerFormHref);

const MENTOR_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfKvVgYMBk7IyH-rIR43V9B-3ZQUyZunFZxMWYi2Wq3VZu4Lg/viewform?usp=sf_link";

const CardIcon = ({ name }) => {
  const paths = {
    volunteer: (
      <>
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
        <path d="M12.5 15.5l2 2" />
        <path d="M15 13l2 2" />
      </>
    ),
    mentor: (
      <>
        <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 3l0 2" />
        <path d="M12 19l0 2" />
        <path d="M3 12l2 0" />
        <path d="M19 12l2 0" />
      </>
    ),
    partners: (
      <>
        <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
        <path d="M13 7l0 .01" />
        <path d="M17 7l0 .01" />
        <path d="M17 11l0 .01" />
        <path d="M17 15l0 .01" />
      </>
    ),
    donate: (
      <>
        <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
        <path d="M12 8l0 13" />
        <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
      </>
    ),
  };
  return (
    <svg
      className="gi-card-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const partners = [
  {
    initials: "PW",
    color: "#1A1D20",
    name: "Physics Wallah (PW)",
    desc: "Through KEI's partnership with Physics Wallah (PW), KEI scholars receive access to PW's Premium Power Batch, providing specialized preparation for competitive examinations such as NEET, JEE, CLAT, and other national-level entrance exams. The initiative supports Class 11 and 12 scholars by equipping them with the resources and guidance needed to excel in these highly competitive examinations and pursue their academic aspirations.",
    url: "https://www.pw.live/",
  },
  {
    initials: "CMI",
    color: "#2E7D32",
    name: "Competitiveness Mindset Institute (CMI)",
    desc: "Competitiveness Mindset Institute (CMI) is a US 501(c)(3) and India 80(G) certified non-profit organization founded in 2017 in Princeton, New Jersey, USA. It is committed to providing world-class training aimed at making Indian professionals a globally competitive and ethical workforce. CMI produces original, research-backed training content in the areas of competitiveness and ethical leadership. CMI provides this training through its FLY Training programs, using the latest Active Learning methodologies.",
    url: "https://www.competitivenessmindset.org",
  },
  {
    initials: "MDR",
    color: "#F39C12",
    name: "Mindler",
    desc: "KEI's partnership with Mindler equips scholars with the knowledge and guidance needed to make informed academic and career decisions. Through this partnership, scholars explore diverse career opportunities and educational streams, understand the pathways to achieve their goals, and develop personalized career plans along with alternate options to navigate their future with confidence and clarity.",
    url: "https://www.mindler.com/",
  },
];

const cards = [
  {
    id: "volunteer",
    title: "Volunteer With Us",
    tagline: "Give your time",
    summary: "A few hours a month, from anywhere in the world.",
    cta: "SEE HOW YOU CAN HELP",
  },
  {
    id: "mentor",
    title: "Mentor a Scholar",
    tagline: "Give your experience",
    summary: "2 hours a month, one scholar, one year.",
    cta: "SEE HOW MENTORSHIP WORKS",
  },
  {
    id: "partners",
    title: "Build With Us",
    tagline: "Give your network",
    summary: "Program, technology, CSR, or institutional partnerships.",
    cta: "SEE HOW WE PARTNER",
  },
  {
    id: "donate",
    title: "Donate",
    tagline: "Give your support",
    summary: `${impactStats.programAllocation} of every dollar goes directly to programs.`,
    cta: "SEE WAYS TO GIVE",
  },
];

const GetInvolvedWays = () => {
  const [activeSection, setActiveSection] = useState(null);
  const panelRef = useRef(null);

  const toggleSection = (id) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (activeSection && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeSection]);

  return (
    <section className="gi-ways">
      <div className="container">
        <div className="gi-ways-header">
          <span className="gi-section-label">WAYS TO GET INVOLVED</span>
          <p className="gi-ways-intro">
            KEI is powered by people — volunteers who run our programs, mentors
            who guide our scholars, partners who extend our reach, and donors
            who make it all possible. Choose the way that fits you.
          </p>
        </div>

        <div className="gi-impact-strip">
          <span>{impactStats.scholarships} scholarships awarded</span>
          <span>{impactStats.mentors} active mentors</span>
          <span>{impactStats.devices} digital devices provided</span>
          <span>{impactStats.programAllocation} of every dollar to programs</span>
        </div>

        <div className="gi-ways-grid gi-ways-grid-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`gi-card ${activeSection === card.id ? "gi-card-active" : ""}`}
              onClick={() => toggleSection(card.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSection(card.id);
                }
              }}
              aria-expanded={activeSection === card.id}
            >
              <span style={{ display: "block" }}>
                <CardIcon name={card.id} />
              </span>
              <h3>{card.title}</h3>
              <p>
                <strong className="gi-card-tagline">{card.tagline}</strong>
                {card.summary}
              </p>
              <button
                className="gi-card-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection(card.id);
                }}
              >
                {activeSection === card.id ? "HIDE DETAILS ▲" : `${card.cta} ▼`}
              </button>
            </div>
          ))}
        </div>

        {activeSection && (
          <div className="gi-detail-panel" ref={panelRef}>
            {activeSection === "volunteer" && (
              <div className="gi-detail-inner">
                <div className="gi-detail-header">
                  <span className="gi-detail-label">GET INVOLVED / VOLUNTEER</span>
                  <h3>Volunteer With Us</h3>
                </div>
                <p className="gi-detail-lead">
                  KEI is a volunteer-driven organization. From Srinagar to San
                  Francisco, volunteers keep every program running — on their
                  own schedule, mostly remotely.
                </p>
                <h4>Where you can plug in</h4>
                <div className="gi-role-grid">
                  <div className="gi-role-item">
                    <h5>Program Operations</h5>
                    <p>Manage scholarship cycles, applicant screening, and scholar records.</p>
                  </div>
                  <div className="gi-role-item">
                    <h5>Teaching &amp; Training</h5>
                    <p>Deliver guest lectures, exam coaching, and skill workshops.</p>
                  </div>
                  <div className="gi-role-item">
                    <h5>Outreach &amp; Communications</h5>
                    <p>Grow our digital presence, tell scholar stories, support community events.</p>
                  </div>
                  <div className="gi-role-item">
                    <h5>Research &amp; Field Work</h5>
                    <p>Conduct field studies and impact assessments that shape our programs.</p>
                  </div>
                  <div className="gi-role-item">
                    <h5>Fundraising</h5>
                    <p>Help organize campaigns and diaspora events that sustain our mission.</p>
                  </div>
                  <div className="gi-role-item">
                    <h5>Your Idea</h5>
                    <p>Have an initiative we haven&apos;t listed? We&apos;re always open to fresh ideas — pitch it to us.</p>
                  </div>
                </div>
                <div className="gi-detail-cta-row">
                  <a
                    href={volunteerFormHref}
                    {...volunteerFormLinkProps}
                    className="gi-modal-btn gi-detail-btn"
                  >
                    Fill the Volunteer Interest Form
                  </a>
                </div>
                <p className="gi-detail-note">{FORM_RESPONSE_SLA}</p>
              </div>
            )}

            {activeSection === "mentor" && (
              <div className="gi-detail-inner">
                <div className="gi-detail-header">
                  <span className="gi-detail-label">GET INVOLVED / MENTOR</span>
                  <h3>Mentor a Scholar</h3>
                </div>
                <p className="gi-detail-lead">
                  Our scholars are talented and driven — many are the first in
                  their families to aim for university. What they need
                  isn&apos;t tutoring; it&apos;s someone who has walked the
                  path before.
                </p>
                <div className="gi-callout">
                  <h4>One Mentor, One Scholar</h4>
                  <p>
                    You&apos;re matched with one high school scholar and meet
                    virtually about <strong>2 hours a month</strong> for at
                    least <strong>one year</strong> — guiding their academic
                    choices, career direction, and confidence.
                  </p>
                </div>
                <div className="gi-detail-columns">
                  <div>
                    <h4>You&apos;re a fit if you:</h4>
                    <ol className="gi-detail-list">
                      <li>
                        Have completed higher secondary education and are in
                        college or hold a degree.
                      </li>
                      <li>
                        Can commit 2–4 hours per month for at least a year.
                      </li>
                      <li>
                        Are willing to guide a scholar&apos;s academic and
                        long-term goals — no tutoring required.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4>What happens next</h4>
                    <ol className="gi-detail-list">
                      <li>Apply online and complete a short orientation.</li>
                      <li>We match you with a scholar based on interests and goals.</li>
                      <li>
                        Our mentorship team supports you throughout, with
                        resources and Supercoach sessions.
                      </li>
                    </ol>
                  </div>
                </div>
                <p className="gi-proof-line">
                  {impactStats.mentors} active mentors · {impactStats.mentorSessions} mentorship sessions every year
                </p>
                <div className="gi-detail-cta-row">
                  <a
                    href={MENTOR_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gi-modal-btn gi-detail-btn"
                  >
                    Apply to Become a Mentor
                  </a>
                  <Link
                    to="/mentorship-success-stories"
                    className="gi-modal-btn gi-detail-btn gi-detail-btn-outline"
                  >
                    Read Our Impact →
                  </Link>
                </div>
                <p className="gi-detail-note">{FORM_RESPONSE_SLA}</p>
              </div>
            )}

            {activeSection === "partners" && (
              <div className="gi-detail-inner">
                <div className="gi-detail-header">
                  <span className="gi-detail-label">GET INVOLVED / PARTNER</span>
                  <h3>Partner With Us</h3>
                </div>
                <p className="gi-detail-lead">
                  Some of KEI&apos;s biggest leaps came through partnership.
                  If your organization believes talent should never be limited
                  by circumstance, let&apos;s partner together.
                </p>
                <h4>Ways to partner</h4>
                <div className="gi-role-grid">
                  <div className="gi-role-item">
                    <h5>Program Partnerships</h5>
                    <p>Bring your curriculum or platform to scholars — as Physics Wallah does with exam prep and Mindler with career guidance.</p>
                  </div>
                  <div className="gi-role-item">
                    <h5>Leadership &amp; Skills Training</h5>
                    <p>Deliver workshops and training, as CMI does through its FLY leadership program.</p>
                  </div>
                  <div className="gi-role-item">
                    <h5>Technology &amp; Learning Tools</h5>
                    <p>Power digital learning, as Gooru does with the Navigator adaptive learning platform.</p>
                  </div>
                  <div className="gi-role-item">
                    <h5>Corporate &amp; CSR</h5>
                    <p>Sponsor programs, fund devices, or engage your employees as mentors and volunteers.</p>
                  </div>
                </div>
                <h4>Our partners</h4>
                <div className="gi-modal-partners-list">
                  {partners.map((p) => (
                    <div className="gi-partner-item" key={p.name}>
                      <div
                        className="gi-partner-avatar"
                        style={{ backgroundColor: p.color }}
                      >
                        {p.initials}
                      </div>
                      <div className="gi-partner-info">
                        <h5>{p.name}</h5>
                        <span className="gi-partner-tag">KEI Partner</span>
                        <p>{p.desc}</p>
                        {p.url && (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gi-partner-link"
                          >
                            Visit Website →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="gi-detail-cta-row">
                  <a
                    href="mailto:info@kashmirei.org?subject=Partnership%20with%20KEI"
                    className="gi-modal-btn gi-detail-btn"
                  >
                    Start a Partnership Conversation →
                  </a>
                </div>
              </div>
            )}

            {activeSection === "donate" && (
              <div className="gi-detail-inner">
                <div className="gi-detail-header">
                  <span className="gi-detail-label">GET INVOLVED / DONATE</span>
                  <h3>Donate</h3>
                </div>
                <p className="gi-detail-lead">
                  Every scholarship changes the trajectory of an entire family.
                  KEI is a registered 501(c)(3) public charity (EIN
                  42-1733906), and <strong>{impactStats.programAllocation} of every dollar goes directly
                  to programs</strong>. U.S. donations are tax-deductible.
                </p>
                <h4>Give Any Amount</h4>
                <p className="gi-detail-note">
                  One-time or recurring — whichever works for you:
                </p>
                <ul className="gi-detail-list gi-detail-list-plain gi-detail-list-narrow">
                  <li><strong>Zelle</strong> — zelle@kashmirei.org</li>
                  <li><strong>PayPal or credit card</strong> — via our secure donate page</li>
                  <li>
                    <strong>Cheque</strong> — payable to Kashmir Education
                    Initiative
                  </li>
                </ul>
                <p className="gi-proof-line">
                  CPA-audited financials · non-political &amp; non-religious ·
                  donations accepted only through official channels
                </p>
                <div className="gi-detail-cta-row">
                  <Link to="/donate" className="gi-modal-btn gi-detail-btn">
                    Donate Now →
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        <TrustBar />
        <div className="gi-closing">
          <p className="gi-closing-line">
            Not sure where to start? Write to us at{" "}
            <a href="mailto:info@kashmirei.org">info@kashmirei.org</a> — tell us
            who you are and what you care about, and we&apos;ll find the right
            fit together.
          </p>
          <blockquote className="gi-quote">
            &ldquo;Supporting KEI is like investing in the future of
            humanity.&rdquo;
            <span>– KEI Supporter</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedWays;
