// Shared programs data for KEI website
import impactStats from "./impactStats";
import imgHSP    from "../assets/Images/what-we-do-hssp.JPG";
import imgCAP    from "../assets/Images/what-we-do-cap.webp";
import imgMentor from "../assets/Images/what-we-do-mentor.JPG";
import imgEL     from "../assets/Images/what-we-do-elp.jpg";
import imgGooru  from "../assets/Images/what-we-do-gooru.JPG";
import imgDSLE   from "../assets/Images/what-we-do-dsle.png";
import imgIBSP   from "../assets/Images/what-we-do-5.png";
import imgGAP    from "../assets/Images/what-we-do-gap.JPG";

export const programs = [
  {
    id: "hsp",
    number: "01",
    color: "#1B4F8A",
    title: "High School Support Program",
    subtitle: "Building the foundation for academic excellence",
    description:
      "The High School Support Program (HSSP) is designed to empower academically bright yet financially at-risk students by offering a structured, multi-dimensional support system. The program aims to foster holistic student development, focusing on academic excellence, personal growth, and community contribution. HSSP provides a dynamic learning ecosystem and mentorship opportunities to help students succeed academically and become responsible community leaders.",
    stats: [
      { value: "3,000+", label: "Scholars Supported" },
      { value: "99.9%", label: "High School Graduates" },
      { value: "18+", label: "Years Running" },
    ],
    image: imgHSP,
    overview: "The High School Support Program (HSSP) is designed to empower academically bright yet financially at-risk students by offering a structured, multi-dimensional support system. The program aims to foster holistic student development, focusing on academic excellence, personal growth, and community contribution. HSSP provides a dynamic learning ecosystem and mentorship opportunities to help students succeed academically and become responsible community leaders.",
    goals: [
      { title: "Academic Empowerment", desc: "To provide academically gifted students from low-income families with the resources and guidance to excel in high school." },
      { title: "Holistic Development", desc: "To equip students with the skills, confidence, and emotional resilience to navigate academic and personal challenges." },
      { title: "Community Engagement", desc: "To encourage scholars to actively contribute to their communities, building leadership qualities and fostering a sense of social responsibility." }
    ],
    eligibility: {
      academic: "Applicants must have secured at least 70% in their Grade 8 Term Ist results.",
      financial: "The applicant's family annual household income must not exceed INR 5 lakhs."
    },
    selectionProcess: [
      { step: "1", title: "KEI Entrance Examination", desc: "A standardized exam held across 10 districts to evaluate the applicant’s aptitude, critical thinking, and academic readiness. The exam is administered on the same day and time across all locations for fairness." },
      { step: "2", title: "Academic Merit", desc: "Grade 8 results will be verified to ensure the applicant meets the minimum 75% requirement." },
      { step: "3", title: "Field Verification", desc: "A comprehensive verification of key factors such as family income, sibling status, and orphan status. Income verification ensures only those with a verified family income below INR 5 lakhs are considered. Special consideration is given to applicants facing heightened vulnerabilities such as orphan status." },
      { step: "4", title: "Holistic Consideration", desc: "Additional factors such as socio-economic background, personal motivation, and growth potential will be assessed through written statements and interviews. The cumulative selection score will incorporate all these factors to identify the most deserving candidates." }
    ],
    entranceExam: "A standardized exam held across 10 districts to evaluate the applicant’s aptitude, critical thinking, and academic readiness. The exam is administered on the same day and time across all locations for fairness.",
    durationAndSupport: {
      duration: "The program will support selected scholars for 4 years, from class 9 to class 12.",
      supportStructure: [
        { name: "Digital Smart Learning Ecosystem (DSLE)", desc: "A structured and interconnected environment of digital tools and online platforms, integrated to enhance scholars' learning." },
        { name: "Gooru Navigator Program", desc: "GPS-aided adaptive learning platform designed to support scholars in mastering science and mathematics." },
        { name: "Experiential Learning Program", desc: "Hands-on learning opportunities to enhance personal development." },
        { name: "Mentorship Program", desc: "Each scholar is paired with a mentor to provide academic and career guidance." },
        { name: "Comprehensive Academic and Career Counseling", desc: "Regular counseling sessions to assist students in their academic and professional journey." }
      ]
    }
  },
  {
    id: "dsle",
    number: "02",
    color: "#8B2E2E",
    title: "Digital Smart Learning Ecosystem",
    subtitle: "Bringing world-class digital tools to Kashmir",
    description:
      "The Digital Smart Learning Ecosystem (DSLE) program is a structured and interconnected environment of digital tools and online platforms, integrated to enhance scholars' learning. It equips scholars with devices, internet connectivity, and digital literacy skills to eliminate the digital divide in Kashmir.",
    stats: [
      { value: impactStats.devices, label: "Devices Distributed" },
      { value: "100%", label: "Digital Literacy Focus" },
    ],
    image: imgDSLE,
    overview: "The Digital Smart Learning Ecosystem (DSLE) program is a structured and interconnected environment of digital tools and online platforms, integrated to enhance scholars' learning. By establishing smart learning labs in schools and providing tablets and laptops to selected scholars, KEI eliminates the digital divide that holds back so many talented students, allowing them to harness technology for research, collaboration, and creative problem-solving.",
    goals: [
      { title: "Digital Integration", desc: "Build a structured and interconnected environment of digital tools and online platforms to enhance scholars' learning." },
      { title: "Bridge the Divide", desc: "Equip students with smart devices, internet connectivity, and computer literacy skills to provide equal educational opportunities." },
      { title: "Active Competencies", desc: "Enable scholars to leverage technology for deep research, cooperative learning, and 21st-century problem solving." }
    ],
    eligibility: {
      academic: "Available to active high school scholars (Grades 9-12) seeking to enhance their learning with digital curriculum tools.",
      financial: "Automatic inclusion upon qualifying for KEI's core academic support programs."
    },
    selectionProcess: [
      { step: "1", title: "Targeted Cohort Mapping", desc: "Identify active high school scholars who require digital access or personal learning devices for their curriculum." },
      { step: "2", title: "Hardware Integration & Setup", desc: "Configure and allocate tablets or laptops equipped with safe learning apps and tracking software." }
    ],
    entranceExam: null,
    durationAndSupport: {
      duration: "Spans 4 years, supporting scholars from class 9 through class 12.",
      supportStructure: [
        { name: "Device Provision", desc: "Disbursement of personal learning tablets and laptops to facilitate remote studies." },
        { name: "Orientation & Training", desc: "Structured onboarding sessions teaching safe internet use, search strategies, and study applications." }
      ]
    }
  },
  {
    id: "gooru",
    number: "03",
    color: "#9E9E9E",
    title: "Gooru Navigator Program",
    subtitle: "Personalised digital learning at every pace",
    description:
      "Gooru Navigator Program is a competency-based predictive learning platform that is focused on transferring the agency of learning to the learner, designed on a framework of self-driven curated learning and assessment for scholars in grades 9 and 10.",
    stats: [
      { value: "1200+", label: "Users" },
      { value: "5,000+", label: "Learning Resources" },
      { value: "Personalised", label: "Learning Paths" },
    ],
    image: imgGooru,
    overview: "Gooru Navigator Program is a competency-based predictive learning platform designed on a framework of self-driven curated learning and assessment for scholars in grades 9 and 10. The learning platform operates like a GPS for learning: it locates each learner, maps a personalized route for mastery in Science and Math, and provides real-time rerouting suggestions based on automated performance reviews.",
    goals: [
      { title: "Agency Transfer", desc: "Transfer the agency of learning directly to the learner through a customized interface of self-driven learning and predictive analytics." },
      { title: "Competency Mastery", desc: "Build and verify competencies in Science and Mathematics across key areas such as core knowledge and analytical thinking." },
      { title: "Hybrid Instruction", desc: "Implement a hybrid education model combining autonomous platform-based practice with virtual doubt-clearing sessions led by expert instructors." }
    ],
    eligibility: {
      academic: "Open to KEI scholars currently studying in Grade 9 and Grade 10.",
      financial: "Automatic eligibility upon selection into the High School Support Program (HSSP)."
    },
    selectionProcess: [
      { step: "1", title: "Rostering & Credentials", desc: "Generate unique Gooru usernames and passwords for each scholar. Organize them into district-specific digital class cards with a maximum of 25 scholars per class for close progress monitoring." },
      { step: "2", title: "Diagnostic testing", desc: "Administer comprehensive baseline diagnostic tests in Science and Mathematics to assess starting proficiency levels and map baseline strengths." },
      { step: "3", title: "Orientation & Onboarding", desc: "Onboard scholars to the platform within 15 days. Conduct orientation sessions (locally accessible in remote districts) where parental attendance is required to understand program goals." }
    ],
    entranceExam: null,
    durationAndSupport: {
      duration: "Spans 2 academic years (covering Grade 9 and Grade 10 cycles).",
      supportStructure: [
        { name: "Adaptive GPS Routing", desc: "Continuous mapping of learning routes with dynamic rerouting based on scholar test responses and learning speed." },
        { name: "Content Delivery", desc: "Weekly dissemination of 2-3 subject competencies (Science & Math) based on relative topic complexity." },
        { name: "Doubt Clearance & Remedial Help", desc: "Minimum of 2 online doubt-clearing sessions per week per subject, supplemented by one-on-one remedial sessions for scholars needing extra help." },
        { name: "Progress Tracking", desc: "Daily dashboard reviews by instructors and follow-up calls to support scholars in progressing from red/orange KPIs to green KPIs." }
      ]
    }
  },
  {
    id: "experiential",
    number: "04",
    color: "#E8C020",
    title: "Experiential Learning Program",
    subtitle: "Learning by doing — beyond the textbook",
    description:
      "KEI offers capacity-building workshops to equip scholars with operational and character competencies to help them excel in all aspects of their lives. The program provides essential life skills needed to thrive in the 21st century and builds a collaborative 'KEI Scholar' identity.",
    stats: [
      { value: impactStats.careerWorkshops, label: "Workshops Conducted" },
      { value: impactStats.alumni, label: "Scholars Engaged" },
      { value: "21st Century", label: "Skill Development" },
    ],
    image: imgEL,
    overview: "The Experiential Learning Program is designed to equip KEI scholars with the operational and character competencies needed to navigate the complexities of the present-day world. Academic merit alone is not enough; this program hosts capacity-building workshops focused on life skills, building self-esteem, fostering collaborative learning, and developing a unified 'KEI Scholar' identity.",
    goals: [
      { title: "Operational Competencies", desc: "Build capacity in practical skills such as critical thinking, communication (spoken/written), executive functioning, problem solving, decision making, metacognition, and financial literacy." },
      { title: "Character Building", desc: "Foster character traits including initiative, time management, grit, persistence, leadership, conflict management, psychosocial wellbeing, and stress management." },
      { title: "Active Application", desc: "Encourage scholars to apply the learned frameworks in their daily lives and document their progress using tools like 'Taruk'." }
    ],
    selectionProcess: [
      { step: "1", title: "Automatic Onboarding", desc: "Scholars selected for core KEI support programs (such as HSSP) are automatically enrolled in the Experiential Learning Program." },
      { step: "2", title: "Calendar Mapping", desc: "Scholars are assigned to workshop groups based on their school grade levels and district locations." },
      { step: "3", title: "Baseline Assessment", desc: "Pre-workshop evaluations are conducted to determine competency baselines and allocate resources accordingly." }
    ],
    entranceExam: null,
    durationAndSupport: {
      duration: "Spans 4 years, supporting scholars from class 9 through class 12.",
      supportStructure: [
        { name: "Workshop Sessions", desc: "Scholars attend 2-3 sessions per academic year (Class 9: 2 sessions, Class 10: 3 sessions, Class 11: 3 sessions, Class 12: 2 sessions)." },
        { name: "Diverse Techniques", desc: "Workshops utilize modern, interactive exercises, games, group tasks, and case studies to ensure active engagement." },
        { name: "Certification & Tracking", desc: "Scholars receive certificates of participation for every session completed, and progress is monitored via double feedback loops." }
      ]
    }
  },
  {
    id: "cap",
    number: "05",
    color: "#47BFDA",
    title: "Career Awareness Program",
    subtitle: "Opening windows to a world of possibilities",
    description:
      "Many students in Kashmir have never been exposed to the breadth of career pathways available to them. The Career Awareness Program bridges this gap through interactive sessions with professionals, industry visits, career fairs, and AI-assisted career mapping tools. Scholars gain clarity about their strengths, interests, and the steps required to pursue rewarding careers — turning ambition into actionable plans.",
    stats: [
      { value: impactStats.careerWorkshops, label: "Career Sessions Held" },
      { value: "30+", label: "Professional Coaches" },
      { value: "50+", label: "Career Domains Covered" },
    ],
    image: imgCAP,
    overview: "Scholars are evaluated through a robust selection procedure and provided with holistic resources to achieve their absolute potential.",
    selectionProcess: null,
  },
  {
    id: "mentorship",
    number: "06",
    color: "#D4860B",
    title: "Mentorship Program",
    subtitle: "Guiding scholars with real-world wisdom",
    description:
      "Our Mentorship Program pairs each scholar with a dedicated mentor from the global professional community to bridge the academic and career guidance gap, empowering scholars to excel, set targets, and build character.",
    stats: [
      { value: impactStats.mentors, label: "Active Mentors" },
      { value: "4,000+", label: "Mentorship Sessions/Year" },
    ],
    image: imgMentor,
    overview: "The Mentorship Program is designed to bridge the guidance gap for scholars who lack academic and career counseling within their families. By connecting scholars with dedicated mentors who act as positive role models, the program provides dependable support channels for sharing academic thoughts, personal concerns, and long-term ambition.",
    goals: [
      { title: "Academic Excellence", desc: "Guide scholars toward strong academic results and help them cultivate effective learning habits and timetables." },
      { title: "Career Formulation", desc: "Assist scholars in exploring diverse career options and formulating clear, actionable professional trajectories." },
      { title: "Character & Life Skills", desc: "Impart critical life skills, enhance scholars' self-esteem, promote self-reliance, and foster social responsibility." }
    ],
    eligibility: null,
    selectionProcess: [
      { step: "1", title: "Pre-Assessment & Profiling", desc: "Class 10 scholars fill pre-assessment forms detailing academic performance, career interests, and guidance needs. Mentors confirmatory availability." },
      { step: "2", title: "Orientation & Training", desc: "Conduct one-on-one orientations for scholars and their parents. Hold online onboarding seminars for mentors covering interactives guidelines." },
      { step: "3", title: "Gender-Based Pairing", desc: "Construct pairing documents based on gender (to ensure comfort), academic interests, and career goals before distributing contact details via email." }
    ],
    entranceExam: null,
    durationAndSupport: {
      duration: "Runs primarily across Class 11, with preparatory touchpoints in Class 10 and wrap-up reviews in Class 12.",
      supportStructure: [
        { name: "Biweekly Interactions", desc: "Mentors and mentees engage in at least 2 structured online interactions per month using Microsoft Teams." },
        { name: "Monthly Themes", desc: "Structured progression covering trust building (Month 1), timetable mapping (Month 2), learning styles (Month 3), career mapping (Month 4), self-esteem stories (Month 5), extracurriculars (Month 6), creative reflection (Month 7), feedback reviews (Month 8), and peer family mentoring (Month 9)." },
        { name: "Feedback Loops & In-Person Meets", desc: "Monthly feedback submissions gathered from both parties, complemented by quarterly reviews and an annual in-person meeting to strengthen rapport." }
      ]
    }
  },
  {
    id: "gap",
    number: "07",
    color: "#2E6B3A",
    title: "Graduate Abroad Program",
    subtitle: "Launching scholars onto the global stage",
    description:
      "The Graduate Abroad Program (GAP) is a two-phase program designed to guide aspiring scholars pursuing advanced degrees, primarily focusing on MS/Ph.D. studies. Emphasis is placed on selecting motivated individuals with a strong potential for advanced academic pursuits.",
    stats: [
      { value: "10+", label: "Graduate Scholars" },
      { value: "20+", label: "Countries" },
      { value: "100%", label: "Programme Completion" },
    ],
    image: imgGAP,
    overview: "The Graduate Abroad Program (GAP) is structured as a two-phase roadmap to prepare, guide, and support scholars aiming for postgraduate MS/Ph.D. programs at global universities. We target highly driven individuals, ensuring programmatic barriers do not stand between exceptional Kashmiri talent and international graduate education.",
    goals: [
      { title: "Academic Placement", desc: "Identify exceptional academic talent in Kashmir and guide them to secure admissions in competitive MS and Ph.D. positions globally." },
      { title: "Standardized Prep & Mentoring", desc: "Prepare scholars for critical test requirements (GRE, IELTS, TOEFL) and align them with experienced mentors for application documentation (SOPs, LORs, CVs)." },
      { title: "Global Leadership Development", desc: "Equip scholars with professional networking capability, communication expertise, and technical skills to excel in international academic environments." }
    ],
    eligibility: {
      academic: "Open to B.Tech/professional stream students (enrolled in sem 6-8 or recent graduates, excluding MBBS) and postgraduate M.Sc/M.Tech scholars (preferably in sem 2-3)."
    },
    selectionProcess: [
      { step: "1", title: "Sorting and Shortlisting", desc: "Shortlist eligible candidates who demonstrate outstanding academic performance, research potential, and strong motivation for overseas research." },
      { step: "2", title: "In-Person Registration", desc: "Organize an onboarding seminar and official registration marking the start of the scholar's 14-month cohort cycle." },
      { step: "3", title: "Phase 1 Gateway Assessment", desc: "Conduct a rigorous evaluation of Phase 1 task achievements (test preparation and university research) to select 10 scholars for the fully-supported Growth Phase." }
    ],
    entranceExam: null,
    durationAndSupport: {
      duration: "A total cohort cycle of 14 months (new batch onboarded after 12 months, with overlapping gap-year and application support for the prior batch).",
      supportStructure: [
        { name: "Phase 1: Research & Preparatory", desc: "Biweekly online sessions covering academic goal-setting, specialization scoping, target university listing, timeline construction, and test practice resources." },
        { name: "Phase 2: Growth Phase Support (Max 10 Seats)", desc: "Includes registration guidance for GRE/IELTS/TOEFL exams, customized alumni mentorship (for SOP, LOR, and portfolio design), and university application assistance for up to 6 targets." },
        { name: "Logistical and Device Support", desc: "Provision of smart devices to support research and application drafting, along with logistical facilitation for test center travel." }
      ]
    }
  },
  {
    id: "ibsp",
    number: "08",
    color: "#6B7C3A",
    title: "International Bridge Scholarship Program",
    subtitle: "Connecting Kashmiri scholars to global institutions",
    description:
      "The Kashmir Education Initiative offers financial assistance under the IBSP program to students from Kashmir who have been accepted for admission to UG/PG/Ph.D. programs in reputed universities abroad, helping outstanding academic minds meet transitioning costs.",
    stats: [
      { value: "10-14", label: "Annual Scholars" },
      { value: "Honor Loan", label: "Pledge Program" },
    ],
    image: imgIBSP,
    overview: "The Kashmir Education Initiative offers financial assistance under the IBSP program to students from Kashmir who have been accepted for admission for UG/PG/Ph.D programs in reputed universities abroad. This assistance is provided to students who have gone through the admission process and have made it to the selection list purely with the help of outstanding academic potential but have financial challenges to meet some of the costs associated with it.",
    goals: [
      { title: "Transition Support", desc: "To provide financial assistance to students who have been selected for top international universities and support them in their settling phase (mostly)." },
      { title: "Leadership Nurturing", desc: "To facilitate scholarship opportunities aimed at nurturing leadership qualities and cultivating exemplary scholars poised to advance the objectives of the Kashmir Education Initiative." },
      { title: "Societal Impact", desc: "Fostering substantial societal impact and meaningful contributions to the community." }
    ],
    eligibility: {
      academic: "Proof of selection/admission for UG/PG/Ph.D. program in a reputed university abroad, evidenced by an official acceptance/funding letter and published rankings of the university/program.",
      financial: "Verified financial need with annual household income <= 20 Lakhs (above 20 Lakhs no application will be accepted)."
    },
    selectionProcess: [
      { step: "1", title: "Transparent Admission Check", desc: "Assistance is granted via a transparent and competitive selection process. The invitation for scholarships remains open until the allocated number of 10-14 students are covered, balanced between UG and PG/Ph.D. programs depending on applications." },
      { step: "2", title: "Income Evaluation (Max 20 Points)", desc: "Scoring based on documented household income: <=5 Lakh = 20 pts; 5-10 Lakh = 10 pts; 10-20 Lakh = 5 pts. Household income above 20 Lakh is not accepted." },
      { step: "3", title: "Funding & University Tier Check (Max 40 Points)", desc: "For UG: 75%+ funding: Top tier (0-200 rank) = 40 pts, Mid tier (201-350) = 30 pts, Low tier (351+) = 15 pts. 50%-74% funding: Top = 20, Mid = 10, Low = 5. 0%-49% funding: Top = 10, Mid = 0, Low = 0. For PG/Ph.D.: 75%+ funding: Top = 40, Mid = 20, Low = 10." },
      { step: "4", title: "KEI Alumni & Allocation (Max 20 Points)", desc: "Active past KEI alumni are awarded 20 points. Cumulative scores are tallied out of 80 points to prioritize assistance allocation." }
    ],
    entranceExam: null,
    durationAndSupport: {
      duration: "One-time disbursement or within one year.",
      supportStructure: [
        { name: "Direct Fee Coverage", desc: "Financial assistance is paid directly to the university for tuition or accommodation fees. No amount will be reimbursed to the personal account of the beneficiary." },
        { name: "Travel Ticket Assistance", desc: "Beneficiaries who have received full scholarships for tuition fees but require assistance with travel expenses can be provided with flight tickets." },
        { name: "Honor Loan Pledge", desc: "All grants are considered 'Honor Loans' which the beneficiary pledges to pay back once they are established in their careers or if their financial need is satisfied through alternate sources." },
        { name: "Progress Tracking & Monitoring", desc: "Beneficiaries must submit proof of enrollment and satisfactory academic progress for each completed semester. Six-monthly online interactions are conducted to monitor progress." },
        { name: "Mentoring & Community Contribution", desc: "Encourage beneficiaries to actively participate in the organization's structured mentoring program as a form of community contribution." },
        { name: "Operational Optimization", desc: "Systematic documentation of records (beneficiary info, amounts granted, universities) on the Taruk platform." }
      ]
    }
  },
];
