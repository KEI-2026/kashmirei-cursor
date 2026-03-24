import React from "react";
import InvolvementOptionsList from "./InvolvementOptionsList";
import TestimonialsStories from "./TestimonialsStories";

const TestimonialsSection = () => (
  <section className="section-testimonials" aria-label="Testimonials and Get Involved">
    <header className="testimonials-intro">
      <h2>Join Our Mission</h2>
      <p>
        Together, we can empower young leaders who will shape the future of Kashmir. Here’s how you can get involved:
      </p>
      <img
        src="https://kashmirei.com/wp-content/uploads/2025/05/DSC_3995-1024x505.jpg"
        alt="Get Involved KEI"
        width="800"
        height="395"
      />
    </header>
    <InvolvementOptionsList />
    <a className="button" href="#">
      Donate Now
    </a>
    <TestimonialsStories />
  </section>
);

export default TestimonialsSection;