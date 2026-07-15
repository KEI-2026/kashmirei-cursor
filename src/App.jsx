import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./styles/base.css";
import "./styles/Header/header.css";
import "./styles/Footer/footer.css";

import SkipLink from "./components/SkipLink";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import EventsAndAnnouncements from "./components/pages/EventsAndAnnouncements";
import ForScholars from "./components/pages/ForScholars";
import AllPrograms from "./components/pages/AllPrograms";
import HowToApplyPage from "./components/pages/HowToApplyPage";
import ProgramDetail from "./components/pages/ProgramDetail";
import Donate from "./components/pages/Donate";
import GetInvolved from "./components/pages/GetInvolved";
import FAQ from "./components/pages/FAQ";
import ScholarStories from "./components/pages/ScholarStories";
import ImpactByNumbers from "./components/pages/ImpactByNumbers";
import MentorshipSuccessStories from "./components/pages/GetInvolvedWays_Pages/MentorshipSuccessStories/MentorshipSuccessStories";
import MentorshipStoryPage from "./components/pages/GetInvolvedWays_Pages/MentorshipStoryPage";
import Blog from "./components/OurImpactPart/ScholarStoryPart/ScholarStorySection/Blog";
import AlumniVideoPlayer from "./components/OurImpactPart/AlumniPart/AlumniStorySection/AlumniVideoPlayer";
import StripePayment from "./components/pages/StripePayment";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-scholars" element={<ForScholars />} />
          <Route path="/for-scholars/programs" element={<AllPrograms />} />
          <Route path="/for-scholars/how-to-apply" element={<HowToApplyPage />} />
          <Route path="/for-scholars/:id" element={<ProgramDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/our-impact" element={<ScholarStories />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/mentorship-success-stories"
            element={<MentorshipSuccessStories />}
          />
          <Route path="/mentorship/:slug" element={<MentorshipStoryPage />} />
          <Route path="/events-and-announcements" element={<EventsAndAnnouncements />} />
          <Route path="/announcements" element={<Navigate to="/events-and-announcements" replace />} />
          <Route path="/events" element={<Navigate to="/events-and-announcements" replace />} />
          <Route path="/impact-by-numbers" element={<ImpactByNumbers />} />
          <Route path="/scholar-stories" element={<Navigate to="/our-impact" replace />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/alumni-video/:slug" element={<AlumniVideoPlayer />} />
          <Route path="/stripe-payment" element={<StripePayment />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
