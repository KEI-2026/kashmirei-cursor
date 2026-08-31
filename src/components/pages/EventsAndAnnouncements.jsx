import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GOOGLE_SHEET_CSV_URL } from "../../config";
import { fetchEventsAndAnnouncements } from "../../utils/csvParser";

// Styles
import "../../styles/Events/events-hero.css";
import "../../styles/Announcements/announcements.css";

// Components
import NewsletterStrip from "../Events/AnnouncementsPart/NewsletterStrip/NewsletterStrip";

// Assets
import heroBg from "../../assets/Images/announcements-section-alumni-interaction.jpg";

const EventsAndAnnouncements = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  
  // Filter state
  const [filterType, setFilterType] = useState("All");

  // Get unique types from loaded data dynamically to show correct filters
  const uniqueTypes = ["All", ...new Set(items.map((item) => item.type).filter(Boolean))];

  const getRowClass = (type) => {
    if (!type) return "row-default";
    const t = type.toLowerCase();
    if (t.includes("event")) return "row-event";
    if (t.includes("workshop")) return "row-workshop";
    if (t.includes("announcement")) return "row-announcement";
    return "row-default";
  };

  const getBadgeClass = (type) => {
    if (!type) return "badge-default";
    const t = type.toLowerCase();
    if (t.includes("event")) return "badge-event";
    if (t.includes("workshop")) return "badge-workshop";
    if (t.includes("announcement")) return "badge-announcement";
    return "badge-default";
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      if (!GOOGLE_SHEET_CSV_URL) {
        setItems([]);
        setLoading(false);
        return;
      }

      try {
        const parsedData = await fetchEventsAndAnnouncements(GOOGLE_SHEET_CSV_URL);
        setItems(parsedData || []);
      } catch (err) {
        console.error("Failed to fetch Google Sheet data:", err);
        setError("Could not load updates from the Google Sheet. Please check the sheet configuration.");
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filtered items
  const filteredItems = items.filter((item) => {
    return filterType === "All" || item.type === filterType;
  });

  return (
    <>
      {/* ── Table Layout Styles ─────────────────────────────────── */}
      <style>{`
        .table-section-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 22px 24px;
        }

        .table-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 22px;
        }

        .filter-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .filter-btn {
          border: 2px solid #d0dde6;
          background: transparent;
          color: #555;
          font-family: "Franklin Gothic Demi", sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          outline: none;
        }
        
        /* All Items (Default / Teal) hover & active */
        .filter-btn-all:hover {
          border-color: #47BFDA;
          color: #47BFDA;
          background: rgba(71, 191, 218, 0.06);
        }
        .filter-btn-all.active {
          background: #47BFDA;
          border-color: #47BFDA;
          color: #ffffff;
          box-shadow: 0 6px 16px rgba(71, 191, 218, 0.25);
        }

        /* Event (Green) hover & active */
        .filter-btn-event:hover {
          border-color: #2E7D32;
          color: #2E7D32;
          background: rgba(46, 125, 50, 0.06);
        }
        .filter-btn-event.active {
          background: #2E7D32;
          border-color: #2E7D32;
          color: #ffffff;
          box-shadow: 0 6px 16px rgba(46, 125, 50, 0.25);
        }

        /* Announcements (Blue) hover & active */
        .filter-btn-announcements:hover,
        .filter-btn-announcement:hover {
          border-color: #1B4F8A;
          color: #1B4F8A;
          background: rgba(27, 79, 138, 0.06);
        }
        .filter-btn-announcements.active,
        .filter-btn-announcement.active {
          background: #1B4F8A;
          border-color: #1B4F8A;
          color: #ffffff;
          box-shadow: 0 6px 16px rgba(27, 79, 138, 0.25);
        }

        /* Workshop (Amber) hover & active */
        .filter-btn-workshop:hover,
        .filter-btn-workshops:hover {
          border-color: #E8A020;
          color: #E8A020;
          background: rgba(232, 160, 32, 0.06);
        }
        .filter-btn-workshop.active,
        .filter-btn-workshops.active {
          background: #E8A020;
          border-color: #E8A020;
          color: #ffffff;
          box-shadow: 0 6px 16px rgba(232, 160, 32, 0.25);
        }

        /* Generic Fallback for other dynamic types */
        .filter-btn:hover {
          border-color: #47BFDA;
          color: #47BFDA;
          background: rgba(71, 191, 218, 0.06);
        }
        .filter-btn:active {
          transform: scale(0.97);
        }

        /* Responsive Table styling */
        .table-responsive-wrapper {
          width: 100%;
          overflow-x: auto;
          border-radius: 12px;
          border: 1.5px solid #e4eef4;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
        }
        .events-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          background: #ffffff;
        }
        .events-table th {
          background: #f4f8fb;
          color: #0f1b24;
          font-family: "Franklin Gothic Medium", sans-serif;
          font-weight: 600;
          font-size: 14.5px;
          padding: 18px 24px;
          border-bottom: 1.5px solid #e4eef4;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .events-table td {
          padding: 20px 24px;
          border-bottom: 1px solid #f0f4f8;
          font-size: 14.5px;
          color: #444;
          line-height: 1.6;
          vertical-align: top;
        }
        .events-table tbody tr:last-child td {
          border-bottom: none;
        }
        /* Event row backgrounds */
        .events-table tbody tr.row-event {
          background-color: #f6faf7; /* Soft premium green-ish tint */
        }
        .events-table tbody tr.row-event:hover {
          background-color: #eef7f0;
        }

        /* Workshop row backgrounds */
        .events-table tbody tr.row-workshop {
          background-color: #fdfbf7; /* Soft premium warm gold/amber tint */
        }
        .events-table tbody tr.row-workshop:hover {
          background-color: #f9f4ea;
        }

        /* Announcement row backgrounds */
        .events-table tbody tr.row-announcement {
          background-color: #f7faff; /* Soft premium blue-ish tint */
        }
        .events-table tbody tr.row-announcement:hover {
          background-color: #edf3fa;
        }

        /* Default row backgrounds */
        .events-table tbody tr.row-default {
          background-color: #ffffff;
        }
        .events-table tbody tr.row-default:hover {
          background-color: #f7f9fa;
        }

        /* Type badges */
        .type-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #ffffff;
          white-space: nowrap;
        }
        .type-badge.badge-event {
          background: #2E7D32; /* Soft Green */
        }
        .type-badge.badge-workshop {
          background: #E8A020; /* Amber/Orange */
        }
        .type-badge.badge-announcement {
          background: #1B4F8A; /* Soft Blue */
        }
        .type-badge.badge-default {
          background: #47BFDA; /* Default Teal */
        }

        .item-name {
          font-weight: 600;
          color: #0f1b24;
          font-size: 15px;
        }

        .item-desc {
          color: #555;
          max-width: 480px;
        }

        .item-date {
          font-weight: 500;
          color: #666;
          white-space: nowrap;
        }

        .signup-btn {
          display: inline-block;
          padding: 10px 22px;
          background: #47BFDA;
          color: #ffffff;
          border-radius: 6px;
          font-family: "Franklin Gothic Demi", sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: none;
          white-space: nowrap;
          cursor: pointer;
          border: none;
        }
        .signup-btn:hover {
          background: #3aa9c4;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(72, 190, 218, 0.3);
        }
        .signup-btn:active {
          background: #2ea3c4;
          color: #ffffff !important;
          transform: scale(0.97);
          box-shadow: 0 4px 12px rgba(72, 190, 218, 0.2);
          outline: none;
        }

        .no-link-text {
          color: #aaa;
          font-style: italic;
          font-size: 13px;
        }

        .empty-table-state {
          text-align: center;
          padding: 60px 40px;
          background: #ffffff;
        }
        .empty-icon {
          font-size: 40px;
          margin-bottom: 12px;
          display: block;
        }
        .empty-table-state p {
          margin: 0;
          color: #888;
          font-size: 15px;
        }

        .admin-info-banner {
          max-width: 1100px;
          margin: 30px auto -30px;
          padding: 16px 24px;
          background: #fffdf0;
          border-left: 4px solid #e8a020;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(232, 160, 32, 0.08);
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .admin-info-badge {
          background: #e8a020;
          color: #ffffff;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 12px;
          white-space: nowrap;
        }
        .admin-info-banner p {
          margin: 0;
          font-size: 13.5px;
          color: #665533;
          line-height: 1.5;
        }
        .admin-info-banner code {
          background: rgba(0, 0, 0, 0.05);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
        }

        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 40px;
          background: #ffffff;
          min-height: 300px;
        }
        .spinner {
          width: 48px;
          height: 48px;
          border: 4px solid #f0f4f8;
          border-top-color: #47BFDA;
          border-radius: 50%;
          animation: spin 1s infinite linear;
          margin-bottom: 20px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .table-controls {
            margin-bottom: 24px;
          }
          .filter-buttons {
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px;
            width: 100%;
          }
          .filter-btn {
            font-size: 13px;
            padding: 8px 18px;
          }
          .admin-info-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin: 20px 20px -10px;
          }
          
          /* Turn Table into stacked Cards */
          .table-responsive-wrapper {
            border: none;
            box-shadow: none;
          }
          .events-table, 
          .events-table thead, 
          .events-table tbody, 
          .events-table th, 
          .events-table td, 
          .events-table tr {
            display: block;
          }
          .events-table thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }
          .events-table tbody tr {
            background: #ffffff;
            border: 1.5px solid #e4eef4;
            border-radius: 12px;
            margin-bottom: 18px;
            padding: 16px 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            transition: transform 0.2s ease;
          }
          .events-table tbody tr:hover {
            transform: translateY(-2px);
          }
          .events-table td {
            border: none;
            padding: 8px 0;
            position: relative;
            padding-left: 35%;
            text-align: left;
            min-height: 36px;
          }
          .events-table td:before {
            content: attr(data-label);
            position: absolute;
            left: 0;
            top: 8px;
            width: 30%;
            font-weight: 700;
            color: #8c9ba5;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          /* Special overrides for mobile column structure */
          .events-table td.cell-action-empty {
            display: none;
          }
          .events-table td.cell-type {
            padding-left: 0;
          }
          .events-table td.cell-type:before {
            display: none;
          }
          .events-table td.cell-action {
            margin-top: 10px;
            border-top: 1px solid #f0f4f8;
            padding-top: 14px;
            padding-left: 0;
          }
          .events-table td.cell-action:before {
            display: none;
          }
          .events-table td.cell-desc {
            padding-left: 0;
          }
          .events-table td.cell-desc:before {
            position: static;
            display: block;
            margin-bottom: 4px;
            width: 100%;
          }
          .item-desc {
            max-width: 100%;
          }
        }
      `}</style>
      
      {/* ── Hero Section ────────────────────────────────────────── */}
      <section
        className="section-ann-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="ann-hero-overlay" />
        <div className="ann-hero-content">
          <span className="ann-hero-label">stay updated</span>
          <h1>
            Events &amp;<br />
            <span>Announcements.</span>
          </h1>
        </div>
      </section>

      {/* ── Error Indicator ────────────────────────────────────── */}
      {error && !loading && (
        <div className="admin-info-banner" style={{ borderColor: '#d32f2f', background: '#fdf3f2' }}>
          <div className="admin-info-badge" style={{ background: '#d32f2f' }}>Connection Error</div>
          <p style={{ color: '#c62828' }}>{error}</p>
        </div>
      )}

      {/* ── Main Layout Body ────────────────────────────────────── */}
      <div className="table-section-container">
        
        {/* Table Filters Controls */}
        <div className="table-controls">
          <div className="filter-buttons">
            {uniqueTypes.map((type) => {
              const typeClass = type === "All" ? "all" : type.toLowerCase().replace(/\s+/g, '-');
              return (
                <button
                  key={type}
                  className={`filter-btn filter-btn-${typeClass} ${filterType === type ? "active" : ""}`}
                  onClick={() => setFilterType(type)}
                >
                  {type === "All" ? "All Items" : type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Table Output */}
        {loading ? (
          <div className="loader-container">
            <div className="spinner" />
            <p style={{ color: "#888", fontWeight: 500 }}>Fetching latest updates...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="empty-table-state">
            <span className="empty-icon">📅</span>
            {items.length === 0 ? (
              <p>No events or workshops scheduled at this time. Check back soon for updates!</p>
            ) : (
              <p>No matches found. Try refining your search or filter options.</p>
            )}
          </div>
        ) : (
          <div className="table-responsive-wrapper">
            <table className="events-table">
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>Type</th>
                  <th style={{ width: "25%" }}>Name</th>
                  <th style={{ width: "35%" }}>Description</th>
                  <th style={{ width: "13%" }}>Date</th>
                  <th style={{ width: "12%", textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => {
                  return (
                    <tr key={item.id} className={getRowClass(item.type)}>
                    
                    {/* Column 1: Type */}
                    <td className="cell-type" data-label="Type">
                      <span className={`type-badge ${getBadgeClass(item.type)}`}>
                        {item.type}
                      </span>
                    </td>

                    {/* Column 2: Name */}
                    <td className="cell-name" data-label="Name">
                      <span className="item-name">{item.name}</span>
                    </td>

                    {/* Column 3: Description */}
                    <td className="cell-desc" data-label="Description">
                      <p className="item-desc">{item.description}</p>
                    </td>

                    {/* Column 4: Date */}
                    <td className="cell-date" data-label="Date">
                      <span className="item-date">{item.date || "N/A"}</span>
                    </td>

                    {/* Column 5: Action Link */}
                    <td 
                      className={`cell-action ${item.signUpLink ? "" : "cell-action-empty"}`} 
                      data-label="Action" 
                      style={{ textAlign: "center" }}
                    >
                      {item.signUpLink ? (
                        item.signUpLink.startsWith("/") ? (
                          <Link to={item.signUpLink} className="signup-btn">
                            Click Here
                          </Link>
                        ) : (
                          <a
                            href={item.signUpLink}
                            target="_blank"
                            rel="noreferrer"
                            className="signup-btn"
                          >
                            Click Here
                          </a>
                        )
                      ) : (
                        <span className="no-link-text">--</span>
                      )}
                    </td>

                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* ── Footer Newsletter Strip ────────────────────────────── */}
      {/* <NewsletterStrip /> */}
    </>
  );
};

export default EventsAndAnnouncements;
