import React, { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import "../../styles/Announcement/announcement.css";

/* Replace with your real sheet ID */
const SHEET_ID = "1F7c2BGPfPTL1yyOzBhaMvr-2duLGBSEgkEKSCSPzIHI";

/* GVIZ endpoint for public sheet JSON */
const SHEET_JSON_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

const AnnouncementSection = () => {
  const [content, setContent] = useState("Loading announcements...");
  const trackRef = useRef(null);
  const firstItemRef = useRef(null);

  useEffect(() => {
    fetch(SHEET_JSON_URL)
      .then((res) => res.text())
      .then((data) => {
        // Extract valid JSON from Google’s wrapper
        const jsonMatch = data.match(
          /google\.visualization\.Query\.setResponse\((.*)\);/
        );
        if (jsonMatch) {
          const json = JSON.parse(jsonMatch[1]);
          const rows = json.table?.rows || [];

          // Extract all announcement rows if multiple exist
          const items = rows
            .map((r) => r.c?.[0]?.v)
            .filter(Boolean)
            .map((raw) => DOMPurify.sanitize(raw));

          if (items.length > 0) {
            const singleBlock = items.join(
              " &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; "
            );
            // Repeat to ensure continuous seamless coverage across any screen resolution
            const repeated = `${Array(4)
              .fill(singleBlock)
              .join(
                " &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; "
              )} &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;`;
            setContent(repeated);
          } else {
            setContent("No current announcements.");
          }
        }
      })
      .catch((err) => {
        console.error("Error fetching announcements:", err);
        setContent("Unable to load announcements.");
      });
  }, []);

  // Dynamically compute marquee duration so speed is brisk, consistent, and completes fully without cutting off
  useEffect(() => {
    const updateSpeed = () => {
      if (!firstItemRef.current || !trackRef.current) return;
      const itemWidth =
        firstItemRef.current.offsetWidth || firstItemRef.current.scrollWidth;
      if (itemWidth > 0) {
        // ~55px/sec creates a comfortable, easily readable, and smooth ticker speed
        const SPEED_PX_PER_SEC = 55;
        const durationSec = Math.max(12, itemWidth / SPEED_PX_PER_SEC);
        trackRef.current.style.setProperty(
          "--marquee-duration",
          `${durationSec.toFixed(2)}s`
        );
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, [content]);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <section
        className="section-announcement"
        aria-label="Announcements ticker"
      >
        <div className="announcement-track" ref={trackRef}>
          <div
            ref={firstItemRef}
            className="announcement-item"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div
            className="announcement-item"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </>
  );
};

export default AnnouncementSection;
