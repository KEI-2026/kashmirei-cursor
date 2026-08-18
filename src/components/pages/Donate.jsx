import React from "react";

const Donate = () => {
  return (
    <div style={{ maxWidth: "1050px", margin: "120px auto 40px", padding: "20px", fontFamily: "sans-serif", color: "#555" }}>
      <style dangerouslySetInnerHTML={{__html: `
        .donate-options-title {
          text-align: center;
          font-weight: bold;
          font-size: 18px;
          margin-top: 40px;
          margin-bottom: 25px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .embed-container { 
          position: relative; 
          padding-bottom: 56.25%; 
          height: 0; 
          overflow: auto; 
          -webkit-overflow-scrolling:touch; 
          max-width: 100%; 
          height: 1950px; 
          margin-top: 30px;
        } 
        .embed-container iframe, .embed-container object, .embed-container embed { 
          position: absolute; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
        }
        .nav-btn {
          background-color: #47BFDA;
          color: white;
          padding: 10px 22px;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          margin: 6px 8px;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s ease, transform 0.15s ease;
          box-shadow: 0 2px 6px rgba(71, 191, 218, 0.25);
        }
        .nav-btn:hover {
          background-color: #3aa9c4;
          color: white;
        }
        .check-address-card {
          text-align: center;
          max-width: 760px;
          margin: 20px auto 35px;
          padding: 18px 24px;
          background: #f8fafc;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
        }
      `}} />

      <div style={{ textAlign: "center", marginBottom: "35px", lineHeight: "1.6" }}>
        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          Your donations catalyze transformation for high-potential, economically vulnerable youth through modern education and essential resources—from digital tools to soft skills—shaping the next generation of doers, thinkers, and leaders. Young scholars are supported throughout their high school journey and often beyond.
        </p>
      </div>

      <div className="donate-options-title">
        CONVENIENTLY DONATE USING ONE OF THE SECURE OPTIONS BELOW
      </div>

      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <a href="#cc" className="nav-btn">Credit Card</a>
        <a href="https://www.paypal.com/donate?hosted_button_id=X96DRCSXP9K5G" target="_blank" rel="noopener noreferrer" className="nav-btn">Paypal</a>
        <a href="#check-address" className="nav-btn">Zelle: Zelle@kashmirei.org</a>
        <a href="#check-address" className="nav-btn">Check</a>
      </div>

      <div id="check-address" className="check-address-card">
        <strong>Donations by Check:</strong> Please make it out to <strong>"Kashmir Education Initiative"</strong> and mail it to:
        <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px", margin: "6px 0" }}>
          KEI, 113 West Plain St, Wayland, MA 01778, USA
        </div>
        <div style={{ fontSize: "13.5px", color: "#64748b" }}>
          (Please add your email and phone # in the check memo section)
        </div>
      </div>

      <div id="cc" className="embed-container">
        <iframe src="https://connect.clickandpledge.com/w/Form/b47876eb-7004-44d4-8d6e-e85eca06e133" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Donate;
