import React, { useEffect, useRef } from "react";

const Donate3 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inject the Click&Pledge Custom Element
    if (containerRef.current && !containerRef.current.innerHTML) {
      containerRef.current.innerHTML = '<clickandpledge-payquickly class="CnPPayQuickly" data-guid="2170aa0a-eb61-457d-9700-76cb11cf4c0a" data-btype="inline"></clickandpledge-payquickly>';
    }

    // Load the Click&Pledge script
    const scriptId = "cnp-payquickly-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://payquickly.clickandpledge.com/v3/v3.min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // CSS injected directly into Click&Pledge's Shadow Root
    const shadowStyles = `
      :host {
        display: block !important;
        width: 100% !important;
        --clickie-trigger-bg: #47BFDA !important;
        --clickie-trigger-color: #ffffff !important;
        --clickie-amount-btn-bg: #f8fafc !important;
        --clickie-amount-btn-color: #1e293b !important;
        --clickie-amount-btn-active-bg: #47BFDA !important;
        --clickie-amount-btn-active-color: #ffffff !important;
        --clickie-amount-btn-active-border-color: #47BFDA !important;
        --clickie-type-btn-active-bg: #47BFDA !important;
        --clickie-type-btn-active-color: #ffffff !important;
        --cnp-primary: #47BFDA !important;
      }
      :host([data-resolved-btype="inline"]) {
        display: block !important;
        width: 100% !important;
      }
      .clickie-shell,
      .clickie-shell.placement-inline {
        position: relative !important;
        width: 100% !important;
        max-width: 920px !important;
        margin: 0 auto !important;
        display: flex !important;
        justify-content: center !important;
      }
      .chat-window,
      .clickie-shell.placement-inline .chat-window,
      .chat-window.height-fixed,
      .chat-window.height-auto {
        position: relative !important;
        width: 100% !important;
        max-width: 880px !important;
        height: auto !important;
        min-height: auto !important;
        max-height: none !important;
        overflow: visible !important;
        box-shadow: 0 4px 25px rgba(0, 0, 0, 0.06) !important;
        border: 1px solid #e2e8f0 !important;
        border-radius: 16px !important;
        margin: 0 auto !important;
        background: #ffffff !important;
      }
      .donation-unified-screen,
      .donation-screen,
      .payment-info-screen,
      .payment-methods-screen,
      .chat-content,
      .chat-messages,
      [style*="overflow"],
      :host [style*="overflow"] {
        overflow: visible !important;
        overflow-y: visible !important;
        max-height: none !important;
        height: auto !important;
        flex: none !important;
        padding: 24px 32px !important;
      }
      .chat-header {
        border-radius: 16px 16px 0 0 !important;
        background: #f8fafc !important;
        border-bottom: 1px solid #e2e8f0 !important;
        height: 38px !important;
        min-height: 38px !important;
        padding: 0 16px !important;
      }

      /* Sections Spacing */
      .cnp-recurring-section,
      .cnp-amount-section,
      .cnp-payment-section {
        margin-top: 4px !important;
        margin-bottom: 10px !important;
      }
      .progress-section,
      .cnp-progress-meter {
        margin-bottom: 10px !important;
        padding-bottom: 10px !important;
      }
      .donation-type {
        margin-bottom: 10px !important;
        gap: 10px !important;
      }
      .freq-toggle-wrap {
        margin-bottom: 10px !important;
        padding: 3px !important;
        border-radius: 8px !important;
      }
      .freq-btn {
        height: 36px !important;
        font-size: 13px !important;
      }
      .amount-section-label,
      .cnp-section-label,
      .payment-method-section-label,
      .extra-fields-label {
        margin-bottom: 8px !important;
        margin-top: 8px !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        color: #475569 !important;
        text-align: left !important;
        text-transform: uppercase !important;
        letter-spacing: 0.5px !important;
      }

      /* Payment method buttons */
      .payment-methods-grid {
        margin-bottom: 12px !important;
      }
      .payment-method-grid-btn {
        height: 44px !important;
        border-radius: 8px !important;
      }

      /* Amount button grid */
      .amount-grid,
      .cnp-amount-grid {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(95px, 1fr)) !important;
        gap: 10px !important;
        margin-bottom: 10px !important;
      }
      .amount-btn,
      .cnp-recurring-btn,
      .type-btn {
        height: 38px !important;
        min-height: 38px !important;
        border-radius: 8px !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        transition: all 0.2s ease !important;
      }
      .custom-amount-wrap {
        height: 38px !important;
        margin-top: 4px !important;
        margin-bottom: 8px !important;
        border-radius: 8px !important;
      }
      .custom-amount {
        height: 38px !important;
        font-size: 14px !important;
      }
      .amount-btn.active,
      .cnp-recurring-btn.active,
      .type-btn.active {
        background: #47BFDA !important;
        border-color: #47BFDA !important;
        color: #ffffff !important;
      }

      /* 2-Column Arranged Form Layout */
      .payment-info-form {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        column-gap: 28px !important;
        row-gap: 12px !important;
        align-items: start !important;
        margin-bottom: 12px !important;
      }

      .form-row {
        display: flex !important;
        gap: 10px !important;
        width: 100% !important;
      }
      .form-row > .form-field {
        flex: 1 !important;
      }
      .form-row--city {
        display: grid !important;
        grid-template-columns: 2fr 1.5fr 1fr !important;
        gap: 10px !important;
        width: 100% !important;
      }

      .form-field {
        position: relative !important;
        width: 100% !important;
        margin-top: 4px !important;
      }
      .form-field input,
      .form-field select {
        width: 100% !important;
        height: 38px !important;
        border: 1.5px solid #cbd5e1 !important;
        border-radius: 6px !important;
        padding: 0 12px !important;
        font-size: 13px !important;
        color: #0f172a !important;
        background-color: #ffffff !important;
        box-sizing: border-box !important;
        outline: none !important;
        transition: border-color 0.2s ease !important;
      }
      .form-field select {
        padding-right: 28px !important;
        cursor: pointer !important;
      }
      .form-field input:focus,
      .form-field select:focus {
        border-color: #47BFDA !important;
      }

      /* Default label in center */
      .form-field label {
        position: absolute !important;
        left: 10px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        color: #94a3b8 !important;
        pointer-events: none !important;
        transition: all 0.15s ease !important;
        background-color: transparent !important;
        padding: 0 !important;
        line-height: 1 !important;
        margin: 0 !important;
        z-index: 2 !important;
      }

      /* Floating label at top border when active, focused, or has value (Selects, Country, State) */
      .form-field input:focus + label,
      .form-field select:focus + label,
      .form-field input:not(:placeholder-shown) + label,
      .form-field select + label,
      .form-field.cnp-has-value label {
        top: 0px !important;
        transform: translateY(-50%) !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        color: #47BFDA !important;
        background-color: #ffffff !important;
        padding: 0 4px !important;
      }

      .form-field input:not(:focus):not(:placeholder-shown) + label,
      .form-field select:not(:focus) + label,
      .form-field.cnp-has-value:not(:focus-within) label {
        color: #64748b !important;
      }

      .stripe-card-element {
        padding: 8px 12px !important;
        min-height: 38px !important;
        border: 1.5px solid #cbd5e1 !important;
        border-radius: 6px !important;
      }
      .chat-inline-payment-wrapper {
        padding: 10px 14px !important;
        margin-top: 6px !important;
        border-radius: 8px !important;
      }
      .extra-fields-wrap {
        padding: 10px 12px !important;
        margin-bottom: 8px !important;
        border-radius: 8px !important;
        gap: 6px !important;
      }
      .fees-label-wrap {
        padding: 8px 12px !important;
        border-radius: 6px !important;
        margin-top: 6px !important;
      }
      .cnp-terms-section {
        margin-top: 8px !important;
      }
      .chat-footer {
        padding: 6px 0 2px !important;
        font-size: 10px !important;
      }

      /* Submit Donation & CTA Buttons */
      .submit-donate-btn,
      .submit-donate-btn.ready,
      .proceed-payment-btn,
      .next-step-btn,
      .donate-btn,
      .cq-nav-btn--next {
        background: #47BFDA !important;
        background-color: #47BFDA !important;
        color: #ffffff !important;
        border: 1px solid transparent !important;
        border-radius: 8px !important;
        height: 46px !important;
        min-height: 46px !important;
        max-height: 46px !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease !important;
        box-shadow: 0 4px 12px rgba(71, 191, 218, 0.25) !important;
        margin-top: 14px !important;
        width: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      .submit-donate-btn:hover,
      .submit-donate-btn.ready:not(:disabled):hover,
      .proceed-payment-btn:hover,
      .next-step-btn:hover,
      .donate-btn:hover,
      .cq-nav-btn--next:not(:disabled):hover {
        background: #3aa9c4 !important;
        background-color: #3aa9c4 !important;
        border-color: #1B4F8A !important;
        color: #ffffff !important;
        box-shadow: 0 6px 16px rgba(71, 191, 218, 0.35) !important;
      }

      .submit-donate-btn:disabled,
      .submit-donate-btn.ready:disabled {
        opacity: 0.6 !important;
        cursor: not-allowed !important;
        box-shadow: none !important;
      }

      @media (max-width: 650px) {
        .payment-info-form {
          grid-template-columns: 1fr !important;
        }
        .form-row--city {
          grid-template-columns: 1fr !important;
        }
        .form-row {
          flex-direction: column !important;
        }
      }
    `;

    const arrangeFormFields = (root) => {
      const form = root.querySelector(".payment-info-form");
      if (!form) return;

      Array.from(form.children).forEach((child) => {
        const text = child.textContent.toLowerCase();

        if (text.includes("card details")) {
          child.style.gridColumn = "1 / 2";
          child.style.order = "1";
        } else if (text.includes("billing information")) {
          child.style.gridColumn = "2 / 3";
          child.style.order = "1";
        } else if (text.includes("card number")) {
          child.style.gridColumn = "1 / 2";
          child.style.order = "2";
        } else if (text.includes("expiry") || text.includes("cvv") || text.includes("mm/yy")) {
          child.style.gridColumn = "1 / 2";
          child.style.order = "3";
        } else if (text.includes("first name") || text.includes("last name")) {
          child.style.gridColumn = "2 / 3";
          child.style.order = "2";
        } else if (text.includes("email")) {
          child.style.gridColumn = "2 / 3";
          child.style.order = "3";
        } else if (text.includes("phone")) {
          child.style.gridColumn = "2 / 3";
          child.style.order = "4";
        } else if (text.includes("country")) {
          child.style.gridColumn = "1 / 2";
          child.style.order = "4";
        } else if (text.includes("street address 1") || (text.includes("address 1") && !text.includes("address 2"))) {
          child.style.gridColumn = "2 / 3";
          child.style.order = "5";
        } else if (text.includes("street address 2") || text.includes("address 2")) {
          child.style.gridColumn = "1 / 2";
          child.style.order = "5";
        } else if (text.includes("city") || text.includes("state") || text.includes("zip") || child.classList.contains("form-row--city")) {
          child.style.gridColumn = "1 / -1";
          child.style.order = "6";
        }
      });
    };

    const injectStylesIntoShadowRoot = () => {
      const el = containerRef.current?.querySelector("clickandpledge-payquickly, .CnPPayQuickly");
      if (el && el.shadowRoot) {
        let styleTag = el.shadowRoot.getElementById("cnp-custom-overrides");
        if (!styleTag) {
          styleTag = document.createElement("style");
          styleTag.id = "cnp-custom-overrides";
          styleTag.textContent = shadowStyles;
          el.shadowRoot.appendChild(styleTag);
        } else if (styleTag.textContent !== shadowStyles) {
          styleTag.textContent = shadowStyles;
        }

        // Apply dynamic grid placement for fields
        arrangeFormFields(el.shadowRoot);
      }
    };

    // Keep checking as Click&Pledge mounts and updates its Shadow DOM
    const interval = setInterval(injectStylesIntoShadowRoot, 100);

    let observer = null;
    if (containerRef.current) {
      observer = new MutationObserver(() => {
        injectStylesIntoShadowRoot();
      });
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    return () => {
      clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div style={{ maxWidth: "1140px", margin: "90px auto 30px", padding: "0 20px", fontFamily: "sans-serif" }}>
      <style dangerouslySetInnerHTML={{__html: `
        clickandpledge-payquickly, .CnPPayQuickly {
          display: flex !important;
          justify-content: center !important;
          margin: 0 auto !important;
          width: 100% !important;
        }
        clickandpledge-payquickly iframe {
          width: 100% !important;
          max-width: 880px !important;
          height: auto !important;
          margin: 0 auto !important;
          border: none !important;
          overflow: hidden !important;
          display: block !important;
        }
      `}} />
      <div 
        ref={containerRef} 
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          width: "100%",
          minHeight: "150px" 
        }}
      />
    </div>
  );
};

export default Donate3;
