import React, { useEffect, useRef } from "react";

const Donate3 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inject the HTML
    if (containerRef.current && !containerRef.current.innerHTML) {
      containerRef.current.innerHTML = '<clickandpledge-payquickly class="CnPPayQuickly" data-guid="2170aa0a-eb61-457d-9700-76cb11cf4c0a"></clickandpledge-payquickly>';
      
      // Load the script
      const scriptId = "cnp-payquickly-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://payquickly.clickandpledge.com/v3/v3.min.js";
        script.async = false; // load synchronously relative to DOM
        document.body.appendChild(script);
      } else {
        // If script is already there, it might need re-initialization, but reloading it is safer if it's a dynamic form
        // Some forms don't auto-initialize if DOM changes after script load
      }
    }
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "120px auto 40px", padding: "0 20px" }}>
      <style dangerouslySetInnerHTML={{__html: `
        clickandpledge-payquickly, .CnPPayQuickly {
          display: flex !important;
          justify-content: center !important;
          margin: 0 auto !important;
          width: 100% !important;
          padding-bottom: 50px;
        }
        clickandpledge-payquickly iframe {
          transform: scale(1.15) !important;
          transform-origin: top center !important;
          margin: 0 auto !important;
          display: block !important;
        }
      `}} />
      <div ref={containerRef} style={{ display: "flex", justifyContent: "center", width: "100%" }}></div>
    </div>
  );
};

export default Donate3;
