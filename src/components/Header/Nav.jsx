import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Header/header.css";
import logo from "../../assets/Images/logo.png";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/what-we-do", label: "What We Do" },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/scholar-stories", label: "Scholar Stories" },
  { path: "/donate", label: "Donate" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""} ${
        mobileOpen ? "mobile-open" : ""
      }`}
    >
      <div className="header-inner">

        {/* Logo */}
        <div className="site-branding">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="Kashmir Education Initiative" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="site-navigation">
          <ul className="menu">
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;
