import React from "react";
import "../../../styles/What-We-Do/whatwedo-programs.css";

import rainbowImg from "../../../assets/Images/Value-deliver-rainbow picture.png";

// Program images
import imgHSP    from "../../../assets/Images/Copy-of-Solo-Pic-Kei-Exam.jpg";
import imgCAP    from "../../../assets/Images/career-counselling.webp";
import imgMentor from "../../../assets/Images/Male-mentor-pair_FAI8504.JPG";
import imgEL     from "../../../assets/Images/experiential-learning.webp";
import imgGooru  from "../../../assets/Images/Three-girls-with-devices-Copy-of-7E4A9580.JPG";
import imgDSLE   from "../../../assets/Images/Young-girl-with-device-DSLE.jpg";
import imgIBSP   from "../../../assets/Images/Scholar-Communication.JPG";
import imgGAP    from "../../../assets/Images/Group-Photo-CMI.jpg";

// ─── Data ───────────────────────────────────────────────────────────────────

const programs = [
  {
    id: "hsp",
    number: "01",
    color: "#1B4F8A",
    title: "High School Preparedness Program",
    subtitle: "Building the foundation for academic excellence",
    description:
      "The High School Preparedness Program equips students from underserved communities with the academic skills and confidence needed to succeed in competitive high school entrance exams. Through structured coaching, mock tests, and dedicated tutors, we close the gap between potential and opportunity — ensuring every gifted student in Kashmir has a fair shot at quality secondary education.",
    stats: [
      { value: "2,500+", label: "Scholars Supported" },
      { value: "85%", label: "Exam Pass Rate" },
      { value: "10+", label: "Years Running" },
    ],
    image: imgHSP,
  },
  {
    id: "cap",
    number: "02",
    color: "#48BEDA",
    title: "Career Awareness Program",
    subtitle: "Opening windows to a world of possibilities",
    description:
      "Many students in Kashmir have never been exposed to the breadth of career pathways available to them. The Career Awareness Program bridges this gap through interactive sessions with professionals, industry visits, career fairs, and AI-assisted career mapping tools. Scholars gain clarity about their strengths, interests, and the steps required to pursue rewarding careers — turning ambition into actionable plans.",
    stats: [
      { value: "500+", label: "Career Sessions Held" },
      { value: "40+", label: "Industry Professionals" },
      { value: "8", label: "Career Domains Covered" },
    ],
    image: imgCAP,
  },
  {
    id: "mentorship",
    number: "03",
    color: "#D4860B",
    title: "Mentorship Program",
    subtitle: "Guiding scholars with real-world wisdom",
    description:
      "Our Mentorship Program pairs each scholar with a dedicated mentor from the global Kashmiri diaspora and broader professional community. Through regular one-on-one sessions, scholars receive personalised guidance on academics, career planning, and personal growth. With additional Supercoach sessions and leadership training in partnership with the Chartered Management Institute (CMI, UK), scholars develop the mindset and skills of future leaders.",
    stats: [
      { value: "300+", label: "Active Mentors" },
      { value: "1,000+", label: "Mentorship Sessions/Year" },
      { value: "CMI", label: "UK Partnership" },
    ],
    image: imgMentor,
  },
  {
    id: "experiential",
    number: "04",
    color: "#E8C020",
    title: "Experiential Learning Program",
    subtitle: "Learning by doing — beyond the textbook",
    description:
      "The Experiential Learning Program takes scholars out of the classroom and into real environments where knowledge comes alive. From hospital and laboratory visits to entrepreneurship workshops and community projects, scholars experience how education translates into action. These hands-on experiences deepen curiosity, sharpen critical thinking, and help scholars connect classroom learning to real-world challenges.",
    stats: [
      { value: "60+", label: "Workshops Conducted" },
      { value: "25+", label: "Partner Organisations" },
      { value: "1,200+", label: "Scholars Engaged" },
    ],
    image: imgEL,
  },
  {
    id: "gooru",
    number: "05",
    color: "#9E9E9E",
    title: "Gooru Navigator Program",
    subtitle: "Personalised digital learning at every pace",
    description:
      "Through our partnership with Gooru — a non-profit learning science organisation — scholars gain access to the Gooru Navigator platform, a personalised learning tool that adapts to each student's unique pace and style. The platform maps competency levels, recommends curated resources, and tracks progress over time, enabling scholars to strengthen core subjects and prepare for standardised assessments with targeted, data-driven support.",
    stats: [
      { value: "800+", label: "Active Users" },
      { value: "5,000+", label: "Learning Resources" },
      { value: "Personalised", label: "Learning Paths" },
    ],
    image: imgGooru,
  },
  {
    id: "dsle",
    number: "06",
    color: "#8B2E2E",
    title: "Digital Smart Learning Environment",
    subtitle: "Bringing world-class digital tools to Kashmir",
    description:
      "The Digital Smart Learning Environment (DSLE) program equips scholars with devices, internet connectivity, and digital literacy skills. By establishing smart learning labs in schools and providing tablets and laptops to selected scholars, KEI eliminates the digital divide that holds back so many talented students. Scholars learn to harness technology for research, collaboration, and creative problem-solving — essential competencies for the 21st century.",
    stats: [
      { value: "1,000+", label: "Devices Distributed" },
      { value: "15+", label: "Smart Labs Set Up" },
      { value: "100%", label: "Digital Literacy Focus" },
    ],
    image: imgDSLE,
  },
  {
    id: "ibsp",
    number: "07",
    color: "#6B7C3A",
    title: "International Bridge Scholarship Program",
    subtitle: "Connecting Kashmiri scholars to global institutions",
    description:
      "The International Bridge Scholarship Program (IBSP) is designed for academically outstanding scholars who aspire to pursue undergraduate or postgraduate studies at reputed international universities. KEI provides financial support, application guidance, test preparation, and visa assistance to help scholars navigate complex international admissions processes. This program ensures that geography and finances are never a barrier to a world-class education.",
    stats: [
      { value: "50+", label: "International Scholars" },
      { value: "15+", label: "Countries Reached" },
      { value: "Top 100", label: "Ranked Universities" },
    ],
    image: imgIBSP,
  },
  {
    id: "gap",
    number: "08",
    color: "#2E6B3A",
    title: "Graduate Abroad Program",
    subtitle: "Launching scholars onto the global stage",
    description:
      "The Graduate Abroad Program (GAP) supports exceptional scholars in pursuing masters and doctoral degrees at prestigious universities worldwide. Beyond financial scholarships, KEI provides mentorship from alumni who have walked the same path, assistance with research proposals, and post-study career guidance. GAP alumni go on to become doctors, engineers, researchers, and leaders who return their success to Kashmir through impact and inspiration.",
    stats: [
      { value: "30+", label: "Graduate Scholars" },
      { value: "10+", label: "Countries" },
      { value: "100%", label: "Programme Completion" },
    ],
    image: imgGAP,
  },
];

// ─── Rainbow clickable overlay positions (% of image width/height) ──────────
// Each entry: { id, label, left, top, width, height }
const rainbowHotspots = [
  { id: "hsp",         label: "High School\nPreparedness",     left: "3%",  top: "52%", width: "14%", height: "40%" },
  { id: "cap",         label: "Career\nAwareness",             left: "11%", top: "28%", width: "14%", height: "40%" },
  { id: "mentorship",  label: "Mentorship\nProgram",           left: "23%", top: "8%",  width: "14%", height: "38%" },
  { id: "experiential",label: "Experiential\nLearning",        left: "37%", top: "0%",  width: "14%", height: "35%" },
  { id: "gooru",       label: "Gooru\nNavigator",              left: "51%", top: "0%",  width: "14%", height: "35%" },
  { id: "dsle",        label: "Digital Smart\nLearning",       left: "64%", top: "5%",  width: "15%", height: "38%" },
  { id: "ibsp",        label: "International\nBridge",         left: "75%", top: "26%", width: "14%", height: "40%" },
  { id: "gap",         label: "Graduate\nAbroad",              left: "84%", top: "50%", width: "14%", height: "42%" },
];

// ─── Smooth scroll helper ────────────────────────────────────────────────────
const scrollToProgram = (id) => {
  const el = document.getElementById(`program-${id}`);
  if (el) {
    const offset = 80; // header height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

// ─── Component ───────────────────────────────────────────────────────────────

const WhatWeDoPrograms = () => {
  return (
    <>
      {/* ── Rainbow Navigator ─────────────────────────────────────── */}
      <section className="wwd-rainbow-section">
        <div className="wwd-rainbow-inner">
          <span className="wwd-section-label">EXPLORE OUR PROGRAMS</span>
          <h2 className="wwd-rainbow-heading">Click a Program to Learn More</h2>
          <p className="wwd-rainbow-sub">
            Eight programs working together to guide every scholar from
            their first classroom to their first career milestone.
          </p>

          <div className="wwd-rainbow-wrap">
            <img
              src={rainbowImg}
              alt="KEI Programs Rainbow Diagram"
              className="wwd-rainbow-img"
              draggable={false}
            />
            {rainbowHotspots.map((spot) => (
              <button
                key={spot.id}
                className="wwd-rainbow-hotspot"
                style={{
                  left: spot.left,
                  top: spot.top,
                  width: spot.width,
                  height: spot.height,
                }}
                onClick={() => scrollToProgram(spot.id)}
                aria-label={`Scroll to ${spot.label.replace("\n", " ")}`}
                title={spot.label.replace("\n", " ")}
              />
            ))}
          </div>

          {/* Pill links below the diagram for accessibility / mobile */}
          <div className="wwd-rainbow-pills">
            {programs.map((p) => (
              <button
                key={p.id}
                className="wwd-rainbow-pill"
                style={{ "--pill-color": p.color }}
                onClick={() => scrollToProgram(p.id)}
              >
                <span className="pill-num">{p.number}</span>
                {p.title.replace(" Program", "").replace(" Environment", "")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 Program Sections ────────────────────────────────────── */}
      {programs.map((prog, i) => {
        const isEven = i % 2 === 1; // even index → flip layout
        return (
          <section
            key={prog.id}
            id={`program-${prog.id}`}
            className={`wwd-prog-section ${isEven ? "wwd-prog-flip" : ""}`}
          >
            <div className="wwd-prog-container">

              {/* Image column */}
              <div className="wwd-prog-image-col">
                <div
                  className="wwd-prog-img-wrap"
                  style={{ "--prog-color": prog.color }}
                >
                  <img src={prog.image} alt={prog.title} />
                </div>
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
                <h3 className="wwd-prog-title">{prog.title}</h3>
                <p className="wwd-prog-subtitle">{prog.subtitle}</p>
                <p className="wwd-prog-desc">{prog.description}</p>

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
    </>
  );
};

export default WhatWeDoPrograms;
