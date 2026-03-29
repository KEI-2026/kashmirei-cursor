import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/Header/header.css";
import logo from "../../assets/Images/logo.png";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/what-we-do", label: "What We Do" },
  {
    label: "Our Impact",
    dropdown: [
      { path: "/impact-by-numbers", label: "Impact by Numbers" },
      { path: "/scholar-stories", label: "Scholar Stories" },
      { path: "/alumni-videos", label: "Alumni Videos" },
    ],
  },
  {
    label: "Events",
    dropdown: [
      { path: "/announcements", label: "Announcements" },
      { path: "/events", label: "Events" },
    ],
  },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/donate", label: "Donate" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // stores the label of open dropdown
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const isDropdownActive = (dropdown) =>
    dropdown.some((item) => item.path === location.pathname);

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
                        isDropdownActive(item.dropdown) ? "active-link" : ""
                      }`}
                      onClick={() => toggleDropdown(item.label)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleDropdown(item.label);
                        }
                      }}
                    >
                      {item.label}
                    </span>

                    <ul
                      className={`dropdown-menu ${
                        openDropdown === item.label ? "show-dropdown" : ""
                      }`}
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
