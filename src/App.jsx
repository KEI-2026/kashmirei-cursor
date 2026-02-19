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
          <Route path="/scholar-stories" element={<ScholarStories />} /> {/* ✅ NEW */}
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
