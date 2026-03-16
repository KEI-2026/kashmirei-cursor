import React from "react";

import ScholarStoriesHero from "../ScholarStoriesHero/ScholarStoriesHero";
import ScholarStoriesGrid from "../ScholarStoriesGrid/ScholarStoriesGrid";
import ScholarStoriesVideos from "../ScholarStoriesVideos/ScholarStoriesVideos";
import ScholarStorySection from "../ScholarStorySection/ScholarStorySection";

const ScholarStories = () => {
  return (
    <>
      <ScholarStoriesHero />
      <ScholarStoriesGrid />
      <ScholarStoriesVideos />
      <ScholarStorySection />
    </>
  );
};

export default ScholarStories;
