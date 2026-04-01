import React from "react";
import EventsHero from "../Events/EventsPart/EventsHero/EventsHero";
import EventsGrid from "../Events/EventsPart/EventsGrid/EventsGrid";
import UpcomingEvents from "../Events/EventsPart/UpcomingEvents/UpcomingEvents";
import PastEvents from "../Events/EventsPart/PastEvents/PastEvents";
import NewsletterStrip from "../Events/AnnouncementsPart/NewsletterStrip/NewsletterStrip";

const Events = () => {
  return (
    <>
      <EventsHero />
      <EventsGrid />
      <UpcomingEvents />
      <PastEvents />
      <NewsletterStrip />
    </>
  );
};

export default Events;
