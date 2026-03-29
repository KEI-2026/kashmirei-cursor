import React, { useState } from "react";
import "../../../styles/Donate/donate-cards.css";

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const ZelleIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg-icon">
    <rect width="60" height="60" rx="12" fill="#6D1ED4" />
    <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
      fontSize="26" fontWeight="800" fill="#ffffff" fontFamily="Arial, sans-serif">Z</text>
  </svg>
);

const PayPalIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg-icon">
    <rect width="60" height="60" rx="12" fill="#003087" />
    <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
      fontSize="14" fontWeight="800" fill="#009CDE" fontFamily="Arial, sans-serif">Pay</text>
    <text x="50%" y="76%" dominantBaseline="middle" textAnchor="middle"
      fontSize="14" fontWeight="800" fill="#ffffff" fontFamily="Arial, sans-serif">Pal</text>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg-icon">
    <rect width="60" height="60" rx="12" fill="#2E7D32" />
    <path d="M14 20h32v24H14z" stroke="#fff" strokeWidth="2" fill="none" rx="2" />
    <path d="M14 28h32M20 24h6M20 34h20M20 38h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CardIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="method-svg-icon">
    <rect width="60" height="60" rx="12" fill="#1565C0" />
    <rect x="10" y="17" width="40" height="26" rx="4" stroke="#fff" strokeWidth="2" fill="none" />
    <rect x="10" y="24" width="40" height="8" fill="#fff" opacity="0.3" />
    <rect x="14" y="35" width="10" height="4" rx="1" fill="#fff" opacity="0.8" />
    <rect x="28" y="35" width="18" height="4" rx="1" fill="#fff" opacity="0.5" />
  </svg>
);

// ─── Scroll helper ────────────────────────────────────────────────────────────
const scrollToForm = () => {
  const el = document.getElementById("cc");
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

// ─── Methods data ─────────────────────────────────────────────────────────────
const methods = [
  {
    id: "zelle",
    Icon: ZelleIcon,
    title: "Zelle",
    blurb: "Instant, fee-free bank-to-bank transfer. 100% of your gift reaches KEI — no processing fees deducted.",
    buttonLabel: "Donate via Zelle",
    accentColor: "#6D1ED4",
  },
  {
    id: "paypal",
    Icon: PayPalIcon,
    title: "PayPal",
    blurb: "Donate securely through your PayPal account or as a guest using any card — fast and trusted worldwide.",
    buttonLabel: "Donate via PayPal",
    accentColor: "#003087",
  },
  {
    id: "check",
    Icon: CheckIcon,
    title: "Cheque",
    blurb: "Prefer the traditional route? Mail a cheque — a personal and meaningful way to support our scholars.",
    buttonLabel: "See Mailing Details",
    accentColor: "#2E7D32",
  },
  {
    id: "card",
    Icon: CardIcon,
    title: "Credit Card",
    blurb: "Donate directly with Visa, Mastercard, Amex or Discover via our secure payment processor.",
    buttonLabel: "Donate by Card",
    accentColor: "#1565C0",
    scrollsToForm: true,
  },
];

// ─── Expanded content per method ─────────────────────────────────────────────
const ExpandedContent = ({ id }) => {
  switch (id) {
    case "zelle":
      return (
        <div className="method-expanded">
          <p className="expanded-instruction">Open your banking app and send to:</p>
          <div className="expanded-detail-box">
            <span className="detail-label">Zelle Email</span>
            <strong className="detail-value">Zelle@kashmirei.org</strong>
          </div>
          <p className="expanded-note">
            No fees — your full donation goes directly to KEI. Please include your name
            and email in the payment note so we can send a tax receipt.
          </p>
        </div>
      );

    case "paypal":
      return (
        <div className="method-expanded">
          <p className="expanded-instruction">Click below to donate securely via PayPal:</p>
          <a
            href="https://www.paypal.com/donate/?business=info%40kashmirei.org&no_recurring=0&currency_code=USD"
            target="_blank"
            rel="noopener noreferrer"
            className="paypal-donate-btn"
          >
            <img
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              alt="Donate with PayPal"
            />
          </a>
          <p className="expanded-note">
            You will be redirected to PayPal's secure site. You can donate as a guest
            without creating a PayPal account.
          </p>
        </div>
      );

    case "check":
      return (
        <div className="method-expanded">
          <p className="expanded-instruction">Make your cheque payable to:</p>
          <div className="expanded-detail-box">
            <strong className="detail-value">Kashmir Education Initiative</strong>
          </div>
          <p className="expanded-instruction" style={{ marginTop: "16px" }}>Mail to:</p>
          <div className="expanded-detail-box">
            <strong className="detail-value">
              KEI, 113 West Plain St<br />
              Wayland, MA 01778, USA
            </strong>
          </div>
          <p className="expanded-note">
            Please write your email address and phone number in the memo section of the
            cheque so we can send your tax receipt.
          </p>
        </div>
      );

    default:
      return null;
  }
};

// ─── Component ────────────────────────────────────────────────────────────────

const DonateMethodCards = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (method) => {
    if (method.scrollsToForm) {
      scrollToForm();
      return;
    }
    setActive((prev) => (prev === method.id ? null : method.id));
  };

  return (
    <section className="section-donate-methods">
      <div className="donate-methods-inner">
        <span className="donate-section-label">WAYS TO GIVE</span>
        <h2 className="donate-methods-heading">Choose How You'd Like to Donate</h2>
        <p className="donate-methods-sub">
          Every donation — large or small — directly supports a scholar in Kashmir.
          Select the payment method that works best for you.
        </p>

        <div className="donate-cards-grid">
          {methods.map((method) => {
            const isOpen = active === method.id;
            return (
              <div
                key={method.id}
                className={`donate-method-card ${isOpen ? "is-open" : ""}`}
                style={{ "--card-accent": method.accentColor }}
              >
                <div className="method-card-top">
                  <method.Icon />
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-blurb">{method.blurb}</p>
                  <button
                    className="method-btn"
                    onClick={() => handleToggle(method)}
                    style={{ background: method.accentColor }}
                  >
                    {method.scrollsToForm
                      ? "Donate by Card ↓"
                      : isOpen
                      ? "Close ✕"
                      : method.buttonLabel + " →"}
                  </button>
                </div>

                {isOpen && !method.scrollsToForm && (
                  <div className="method-card-expanded">
                    <ExpandedContent id={method.id} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonateMethodCards;
