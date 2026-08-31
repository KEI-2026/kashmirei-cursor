import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./styles/base.css";
import "./styles/Header/header.css";
import "./styles/Footer/footer.css";

import SkipLink from "./components/SkipLink";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

// Eagerly load main pages so navigation between them is INSTANT
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import EventsAndAnnouncements from "./components/pages/EventsAndAnnouncements";
import ForScholars from "./components/pages/ForScholars";
import AllPrograms from "./components/pages/AllPrograms";
import HowToApplyPage from "./components/pages/HowToApplyPage";
import ProgramDetail from "./components/pages/ProgramDetail";
import Donate from "./components/pages/Donate";
import Donate2 from "./components/pages/Donate2";
import Donate3 from "./components/pages/Donate3";
import ScholarApplication from "./components/pages/ScholarApplication";
import GetInvolved from "./components/pages/GetInvolved";
import FAQ from "./components/pages/FAQ";
import ScholarStories from "./components/pages/ScholarStories";
import ImpactByNumbers from "./components/pages/ImpactByNumbers";
import MentorSignupPage from "./components/pages/MentorSignupPage";

// Keep lazy loading only for very heavy/deep routes (like Stripe/Video players)
const MentorshipStoryPage = lazy(() => import("./components/pages/GetInvolvedWays_Pages/MentorshipStoryPage"));
const Blog = lazy(() => import("./components/OurImpactPart/ScholarStoryPart/ScholarStorySection/Blog"));
const AlumniVideoPlayer = lazy(() => import("./components/OurImpactPart/AlumniPart/AlumniStorySection/AlumniVideoPlayer"));
const StripePayment = lazy(() => import("./components/pages/StripePayment"));

// A simple loading fallback for the lazy components
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid #f3f3f3', borderTop: '3px solid #47BFDA', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <Header />

      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Eager Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/for-scholars" element={<ForScholars />} />
            <Route path="/for-scholars/programs" element={<AllPrograms />} />
            <Route path="/for-scholars/how-to-apply" element={<HowToApplyPage />} />
            <Route path="/for-scholars/:id" element={<ProgramDetail />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donate2" element={<Donate2 />} />
            <Route path="/donate3" element={<Donate3 />} />
            <Route path="/scholar-application" element={<ScholarApplication />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/our-impact" element={<ScholarStories />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/events-and-announcements" element={<EventsAndAnnouncements />} />
            <Route path="/impact-by-numbers" element={<ImpactByNumbers />} />
            <Route path="/mentor-signup" element={<MentorSignupPage />} />

            {/* Redirects */}
            <Route path="/mentorship-success-stories" element={<Navigate to="/our-impact#mentorship-success" replace />} />
            <Route path="/announcements" element={<Navigate to="/events-and-announcements" replace />} />
            <Route path="/events" element={<Navigate to="/events-and-announcements" replace />} />
            <Route path="/scholar-stories" element={<Navigate to="/our-impact" replace />} />

            {/* Lazy Loaded Routes */}
            <Route path="/mentorship/:slug" element={<MentorshipStoryPage />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/alumni-video/:slug" element={<AlumniVideoPlayer />} />
            <Route path="/stripe-payment" element={<StripePayment />} />
            <Route path="/donate/stripe-confirm" element={<StripePayment />} />
            <Route path="/donate2/stripe-confirm" element={<StripePayment />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default App;
