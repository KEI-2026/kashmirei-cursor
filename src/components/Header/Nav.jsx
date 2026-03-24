import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/Header/header.css";
import logo from "../../assets/Images/logo.png";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/what-we-do", label: "What We Do" },
  { path: "/get-involved", label: "Get Involved" },
  {
    label: "Our Impact",
    dropdown: [
      { path: "/impact-by-numbers", label: "Impact By Number" },
      { path: "/scholar-stories", label: "Scholar Stories" },
      { path: "/alumni-stories", label: "Alumni Stories" },
    ],
  },
  { path: "/donate", label: "Donate" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setImpactOpen(false);
  };

  const isImpactActive = ["/impact-by-numbers", "/scholar-stories", "/alumni-stories"].includes(
    location.pathname
  );

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""} ${
        mobileOpen ? "mobile-open" : ""
      }`}
    >
      <div className="header-inner">
        <div className="site-branding">
          <NavLink to="/" onClick={closeMenus}>
            <img src={logo} alt="Kashmir Education Initiative" />
          </NavLink>
        </div>

        <nav className="site-navigation">
          <ul className="menu">
            {NAV_LINKS.map((item, index) => (
              <li
                key={item.path || item.label || index}
                className={item.dropdown ? "menu-item has-dropdown" : "menu-item"}
              >
                {item.dropdown ? (
                  <>
                    <span
                      className={`nav-link-like dropdown-toggle ${
                        isImpactActive ? "active-link" : ""
                      }`}
                      onClick={() => setImpactOpen(!impactOpen)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setImpactOpen(!impactOpen);
                        }
                      }}
                    >
                      {item.label}
                    </span>

                    <ul
                      className={`dropdown-menu ${impactOpen ? "show-dropdown" : ""}`}
                    >
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.path}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              isActive ? "active-link dropdown-link" : "dropdown-link"
                            }
                            onClick={closeMenus}
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                    onClick={closeMenus}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

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