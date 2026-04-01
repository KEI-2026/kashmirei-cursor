import React from "react";
import AnnouncementsHero from "../Events/AnnouncementsPart/AnnouncementsHero/AnnouncementsHero";
import AnnouncementsGrid from "../Events/AnnouncementsPart/AnnouncementsGrid/AnnouncementsGrid";
import NewsletterStrip   from "../Events/AnnouncementsPart/NewsletterStrip/NewsletterStrip";

const Announcements = () => {
  return (
    <>
      <AnnouncementsHero />
      <AnnouncementsGrid />
      <NewsletterStrip />
    </>
  );
};

export default Announcements;
