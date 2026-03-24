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

// Blog Page
import Blog from "./components/OurImpactPart/ScholarStoryPart/ScholarStorySection/Blog";

// Video Player Page
import ScholarVideoPlayer from "./components/OurImpactPart/ScholarStoryPart/ScholarStorySection/ScholarVideoPlayer";

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

          {/* Our Impact dropdown pages */}
          <Route path="/impact-by-numbers" element={<ImpactByNumbers />} />
          <Route path="/scholar-stories" element={<ScholarStories />} />
          <Route path="/alumni-stories" element={<AlumniStories />} />

          {/* Blog route for individual scholar stories */}
          <Route path="/blog/:slug" element={<Blog />} />

          {/* Video route for scholar/alumni videos */}
          <Route path="/scholar-video/:slug" element={<ScholarVideoPlayer />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;