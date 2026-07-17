import React from "react";

const ICON_PATHS = {
  volunteer: (
    <>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
      <path d="M12.5 15.5l2 2" />
      <path d="M15 13l2 2" />
    </>
  ),
  mentor: (
    <>
      <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 3l0 2" />
      <path d="M12 19l0 2" />
      <path d="M3 12l2 0" />
      <path d="M19 12l2 0" />
    </>
  ),
  partners: (
    <>
      <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
      <path d="M13 7l0 .01" />
      <path d="M17 7l0 .01" />
      <path d="M17 11l0 .01" />
      <path d="M17 15l0 .01" />
    </>
  ),
  donate: (
    <>
      <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
      <path d="M12 8l0 13" />
      <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
    </>
  ),
  identity: (
    <>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
      <path d="M15 21v-2a4 4 0 0 0 -4 -4h-.5" />
      <path d="M11.645 20.91l-.645 -5.91l5.659 -5.659a2 2 0 1 1 2.829 2.829l-5.659 5.659l-5.91 .645l.645 -5.91l5.659 -5.659" />
    </>
  ),
  tools: (
    <>
      <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
      <path d="M14.5 5.5l4 4" />
      <path d="M12 8l-4 -4" />
    </>
  ),
  tribe: (
    <>
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M8 21v-1a4 4 0 0 1 4 -4h0a4 4 0 0 1 4 4v1" />
      <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M17 10h0a2 2 0 0 1 2 2v1" />
      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M3 10v1a2 2 0 0 0 2 2h0" />
    </>
  ),
  school: (
    <>
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
      <path d="M6 10.6v5.4a6 6 0 0 0 12 0v-5.4" />
    </>
  ),
  heart: (
    <>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M9 8h1" />
      <path d="M9 12h1" />
      <path d="M9 16h1" />
      <path d="M14 8h1" />
      <path d="M14 12h1" />
      <path d="M14 16h1" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
    </>
  ),
  "heart-handshake": (
    <>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
      <path d="M12.5 15.5l2 2" />
      <path d="M15 13l2 2" />
    </>
  ),
};

const CardIcon = ({ name, className = "card-icon" }) => {
  const paths = ICON_PATHS[name];

  if (!paths) {
    return null;
  }

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
};

export default CardIcon;
