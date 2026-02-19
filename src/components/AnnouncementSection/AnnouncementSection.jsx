import React, { useState, useEffect } from "react";
import "../../styles/Announcement/announcement.css";

const PASSWORD = "KEI@2026";

/* Replace with your real sheet ID */
const SHEET_ID = "1pkRPOAK3yRGemROpSIOAFQOozKZWQDM-ZiR24RNhKkc";

/* GVIZ endpoint for public sheet JSON */
const SHEET_JSON_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

const EDIT_LINK =
  "https://docs.google.com/spreadsheets/d/1pkRPOAK3yRGemROpSIOAFQOozKZWQDM-ZiR24RNhKkc/edit";

const AnnouncementSection = () => {
  const [content, setContent] = useState("Loading announcements...");
  const [clickCount, setClickCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch(SHEET_JSON_URL)
      .then((res) => res.text())
      .then((data) => {
        // Extract valid JSON from Google’s wrapper
        const jsonMatch = data.match(
          /google\.visualization\.Query\.setResponse\((.*)\);/
        );

        if (!jsonMatch) {
          throw new Error("Invalid sheet response format");
        }

        const json = JSON.parse(jsonMatch[1]);
        const rows = json.table.rows;

        if (rows.length > 0 && rows[0].c[0]?.v) {
          setContent(rows[0].c[0].v);
        } else {
          setContent("No announcements available.");
        }
      })
      .catch((err) => {
        console.error("Error loading announcements:", err);
        setContent("Unable to load announcements.");
      });
  }, []);

  /* =========================
     SECRET 4-CLICK LOGIN
  ========================= */
  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 4) {
      setShowLogin(true);
      setClickCount(0);
    }
  };

  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      setShowLogin(false);
      window.open(EDIT_LINK, "_blank");
      setPasswordInput("");
    } else {
      alert("Incorrect password");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <section className="section-announcement" onClick={handleSecretClick}>
        <div className="announcement-track">
          <div
            className="announcement-item"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div
            className="announcement-item"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>

      {/* PASSWORD MODAL */}
      {showLogin && (
        <div className="announcement-modal">
          <div className="announcement-modal-box">
            <h3>Enter Password</h3>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementSection;
