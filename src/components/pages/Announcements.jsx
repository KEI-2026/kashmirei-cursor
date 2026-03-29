import React from "react";
import AnnouncementsHero from "../AnnouncementsPart/AnnouncementsHero/AnnouncementsHero";
import AnnouncementsGrid from "../AnnouncementsPart/AnnouncementsGrid/AnnouncementsGrid";
import UpcomingEvents    from "../AnnouncementsPart/UpcomingEvents/UpcomingEvents";
import PastEvents        from "../AnnouncementsPart/PastEvents/PastEvents";
import NewsletterStrip   from "../AnnouncementsPart/NewsletterStrip/NewsletterStrip";

const Announcements = () => {
  return (
    <>
      <AnnouncementsHero />
      <AnnouncementsGrid />
      <UpcomingEvents />
      <PastEvents />
      <NewsletterStrip />
    </>
  );
};

export default Announcements;
