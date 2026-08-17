import React from "react";

const Donate = () => {
  return (
    <div style={{ maxWidth: "1050px", margin: "120px auto 40px", padding: "20px", fontFamily: "sans-serif", color: "#555" }}>
      <style dangerouslySetInnerHTML={{__html: `
        .donate-box {
          display: inline-block;
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          border-radius: 3px;
          padding: 10px 15px;
          margin: 0 5px;
          text-align: center;
          font-size: 14px;
          color: #999;
          white-space: pre-wrap;
        }
        .donate-options-title {
          text-align: center;
          font-weight: bold;
          font-size: 18px;
          margin-top: 40px;
          margin-bottom: 30px;
          color: #666;
          text-transform: uppercase;
        }
        .option-text {
          font-size: 16px;
          margin-bottom: 20px;
          color: #555;
        }
        .option-text b {
          color: #333;
        }
        .embed-container { 
          position: relative; 
          padding-bottom: 56.25%; 
          height: 0; 
          overflow: auto; 
          -webkit-overflow-scrolling:touch; 
          max-width: 100%; 
          height: 1950px; 
          margin-top: 40px;
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
          padding: 10px 25px;
          border: none;
          border-radius: 4px;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          margin: 5px 10px;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s ease;
        }
        .nav-btn:hover {
          background-color: #3aa9c4;
        }
      `}} />

      <div style={{ textAlign: "center", marginBottom: "40px", lineHeight: "1.6" }}>
        <p style={{ fontSize: "16px", marginBottom: "30px" }}>
          Your donations catalyze transformation for high-potential, economically vulnerable youth through modern education and essential resources—from digital tools to soft skills—shaping the next generation of doers, thinkers, and leaders. Young scholars are supported throughout their high school journey and often beyond.
        </p>
      </div>

      <div className="donate-options-title">
        CONVENIENTLY DONATE USING ONE OF THE SECURE OPTIONS BELOW
      </div>

      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <a href="#cc" className="nav-btn">Credit Card</a>
        <a href="https://www.paypal.com/donate?hosted_button_id=X96DRCSXP9K5G" target="_blank" rel="noopener noreferrer" className="nav-btn">Paypal</a>
        <a href="#zelle" className="nav-btn">Zelle: Zelle@kashmirei.org</a>
      </div>

      <div style={{ padding: "0 20px" }}>
        <div className="option-text">
          <b>Option 1:</b> Credit Card (Form Below)
        </div>

        <div className="option-text" style={{ marginBottom: "5px" }}>
          <b>Option 2:</b> PayPal
        </div>
        
        <form id="paypal" action="https://www.paypal.com/donate" method="post" target="_blank" style={{ marginBottom: "30px", marginLeft: "20px" }}>
          <input type="hidden" name="hosted_button_id" value="X96DRCSXP9K5G" />
          <input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style={{ width: "200px", height: "auto" }} />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

        <div id="zelle" className="option-text">
          <b>Option 3:</b> Zelle: <i>Zelle@kashmirei.org</i>
        </div>

        <div className="option-text">
          <b>Option 4:</b> Check. Please make it out to "Kashmir Education Initiative" and mail it to KEI, 113 West Plain St, Wayland, MA 01778, USA. Please add your email and phone # in the check memo section.
        </div>
      </div>

      <div id="cc" className="embed-container">
        <iframe src="https://connect.clickandpledge.com/w/Form/b47876eb-7004-44d4-8d6e-e85eca06e133" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Donate;
