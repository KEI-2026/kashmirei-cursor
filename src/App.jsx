import React from "react";
import { Routes, Route } from "react-router-dom";

// Global Styles
import "./styles/base.css";
import "./styles/Header/header.css";
import "./styles/Footer/footer.css";

// Layout Components
import SkipLink from "./components/SkipLink";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./components/pages/Home";
import WhatWeDo from "./components/pages/WhatWeDo";
import Donate from "./components/pages/Donate";
import GetInvolved from "./components/pages/GetInvolved";
import ScholarStories from "./components/pages/ScholarStories";
import ImpactByNumbers from "./components/pages/ImpactByNumbers";
import AlumniStories from "./components/pages/AlumniStories";

// ✅ NEW PAGES
import BecomeMentor from "./components/pages/GetInvolvedWays_Pages/BecomeMentor";
import Volunteer from "./components/pages/GetInvolvedWays_Pages/VolunteerWithUs";
import Sponsor from "./components/pages/GetInvolvedWays_Pages/SponsorAScholar";

// Blog Page
import Blog from "./components/OurImpactPart/ScholarStoryPart/ScholarStorySection/Blog";

// Video Player Page
import ScholarVideoPlayer from "./components/OurImpactPart/ScholarStoryPart/ScholarStorySection/ScholarVideoPlayer";
import AlumniVideoPlayer from "./components/OurImpactPart/AlumniPart/AlumniStorySection/AlumniVideoPlayer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />

          {/* ✅ NEW ROUTES */}
          <Route path="/become-a-mentor" element={<BecomeMentor />} />
          <Route path="/volunteer-with-us" element={<Volunteer />} />
          <Route path="/sponsor-a-scholar" element={<Sponsor />} />

          {/* Our Impact dropdown pages */}
          <Route path="/impact-by-numbers" element={<ImpactByNumbers />} />
          <Route path="/scholar-stories" element={<ScholarStories />} />
          <Route path="/alumni-stories" element={<AlumniStories />} />

          {/* Blog */}
          <Route path="/blog/:slug" element={<Blog />} />

          {/* Videos */}
          <Route path="/scholar-video/:slug" element={<ScholarVideoPlayer />} />
          <Route path="/alumni-video/:slug" element={<AlumniVideoPlayer />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;