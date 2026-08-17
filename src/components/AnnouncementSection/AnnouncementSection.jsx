import React, { useState, useEffect } from "react";
import "../../styles/Announcement/announcement.css";

/* Replace with your real sheet ID */
const SHEET_ID = "1pkRPOAK3yRGemROpSIOAFQOozKZWQDM-ZiR24RNhKkc";

/* GVIZ endpoint for public sheet JSON */
const SHEET_JSON_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

const AnnouncementSection = () => {
  const [content, setContent] = useState("Loading announcements...");

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
          const rawContent = rows[0].c[0].v;
          // Repeat the text 10 times with a nice dot separator so it appears frequently in the ticker
          const repeated = Array(10).fill(rawContent).join(' &nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&nbsp; ');
          setContent(repeated);
        } else {
          setContent("No announcements available.");
        }
      })
      .catch((err) => {
        console.error("Error loading announcements:", err);
        setContent("Unable to load announcements.");
      });
  }, []);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <section className="section-announcement">
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
    </>
  );
};

export default AnnouncementSection;
