import React from "react";

const INVOLVEMENT_OPTIONS = [
  {
    title: "Donate",
    desc: "Fund a scholarship, provide digital learning tools, or support leadership training.",
  },
  {
    title: "Mentor",
    desc: "Help guide a student’s career.",
  },
  {
    title: "Volunteer",
    desc: "Assist with outreach, events, or programs.",
  },
];

const InvolvementOptionsList = () => (
  <ul className="involvement-options-list">
    {INVOLVEMENT_OPTIONS.map((opt) => (
      <li className="option" key={opt.title}>
        <img
          src="https://kashmirei.com/wp-content/uploads/2025/04/check.png"
          alt=""
          width="28"
          height="23"
        />
        <h3>{opt.title}</h3>
        <p>{opt.desc}</p>
      </li>
    ))}
  </ul>
);

export default InvolvementOptionsList;
