import React from "react";

const IMPACT_STORIES = [
    {
      img: "https://kashmirei.com/wp-content/uploads/2025/04/image-3.webp",
      alt: "Mehak Fayaz",
      quote:
        "Coming from an underprivileged family, Mehak received financial support from KEI, enabling her to pursue an MBBS degree at Government Medical College, Anantnag. KEI's skill development workshops were instrumental in her academic journey.",
      meta: <><strong>Mehak Fayaz</strong> – Pursuing Medicine</>,
    },
    {
      img: "https://kashmirei.com/wp-content/uploads/2025/05/kaira.png",
      alt: "Kaira Zainab",
      quote:
        "Kaira's association with KEI began in grade 9. With KEI's support, she earned a B. Pharm degree and secured admission to China Medical University, Taiwan, for postgraduate studies.",
      meta: <><strong>Kaira Zainab</strong> – Academic Excellence</>,
    },
    {
      img: "https://kashmirei.com/wp-content/uploads/2025/04/image-1.png",
      alt: "Anayat Yousuf",
      quote:
        "Anayat's transformative journey began at United World Colleges (UWC), leading to enrollment at the University of Oklahoma and later securing a scholarship at UWC RBC Germany. KEI's career counseling workshops played a pivotal role in his success.",
      meta: <><strong>Anayat Yousuf</strong> – From Kashmir to Germany</>,
    },
  ];
  
  const TestimonialsStories = () => (
    <aside className="testimonials-stories">
      <header>
        <h2>Impact Stories</h2>
        <h3>Real Stories of Transformation</h3>
        <p>
          Our scholars’ journeys are a testament to the power of education and mentorship. Here are some inspiring stories:
        </p>
      </header>
      <div className="stories-list">
        {IMPACT_STORIES.map((story) => (
          <article className="story" key={story.alt}>
            <img src={story.img} alt={story.alt} />
            <blockquote>{story.quote}</blockquote>
            <footer>
              <p className="story-meta">{story.meta}</p>
            </footer>
          </article>
        ))}
      </div>
    </aside>
  );
  
  export default TestimonialsStories;