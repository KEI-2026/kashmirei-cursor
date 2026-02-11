import React from "react";
import { Routes, Route } from "react-router-dom";

// Global Styles
import "./styles/base.css";
import "./styles/header.css";
import "./styles/footer.css";

// Layout Components
import SkipLink from "./components/SkipLink";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./components/pages/Home";
import WhatWeDo from "./components/pages/WhatWeDo";

const App = () => {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
