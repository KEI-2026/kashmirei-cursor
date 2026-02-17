import React, { useState, useEffect } from "react";
import "../../styles/announcement.css";

const PASSWORD = "KEI@2026";

const AnnouncementSection = () => {
  const defaultContent = `
    <strong>Project Update</strong> – New features added. &nbsp;&nbsp; • &nbsp;&nbsp;
    <strong>Meeting Reminder</strong> – Weekly sync at 10 AM.
  `;

  const [content, setContent] = useState(defaultContent);
  const [clickCount, setClickCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  // Load saved content
  useEffect(() => {
    const saved = localStorage.getItem("announcementContent");
    if (saved) {
      setContent(saved);
    }
  }, []);

  // Hidden 4-click trigger
  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 4) {
      setShowLogin(true);
      setClickCount(0);
    }
  };

  // Login handler
  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      setShowLogin(false);
      setShowEditor(true);
      setEditorContent(content);
      setPasswordInput("");
    } else {
      alert("Incorrect password");
    }
  };

  // Save content
  const handleSave = () => {
    localStorage.setItem("announcementContent", editorContent);
    setContent(editorContent);
    setShowEditor(false);
  };

  // Trigger login on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      {/* ANNOUNCEMENT MARQUEE */}
      <section
        className="section-announcement"
        onClick={handleSecretClick}
      >
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

      {/* EDITOR MODAL */}
      {showEditor && (
        <div className="announcement-modal">
          <div className="announcement-modal-box large">
            <h3>Edit Announcement (HTML allowed)</h3>

            <textarea
              value={editorContent}
              onChange={(e) => setEditorContent(e.target.value)}
            />

            <div className="editor-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowEditor(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementSection;
