import React from "react";

import ScholarStoriesHero from "../OurImpactPart/ScholarStoryPart/ScholarStoriesHero/ScholarStoriesHero";
import ScholarStoriesGrid from "../OurImpactPart/ScholarStoryPart/ScholarStoriesGrid/ScholarStoriesGrid";
import ScholarStoriesVideos from "../OurImpactPart/ScholarStoryPart/ScholarStoriesVideos/ScholarStoriesVideos";
// import ScholarStorySection from "../ScholarStorySection/ScholarStorySection";

const ScholarStories = () => {
  return (
    <>
      <ScholarStoriesHero />
      <ScholarStoriesGrid />
      <ScholarStoriesVideos />
      {/* <ScholarStorySection /> */}
    </>
  );
};

export default ScholarStories;
