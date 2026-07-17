export const truncateText = (text, limit) => {
  if (!text || text.length <= limit) return text;
  const lastSpace = text.lastIndexOf(" ", limit);
  return `${text.slice(0, lastSpace > 0 ? lastSpace : limit)}...`;
};

/** Outcome headline for cards — prefers explicit outcome, then subtitle, then title. */
export const getStoryOutcome = (story) =>
  story?.outcome || story?.subtitle || story?.title || "Scholar success story";

export const getStoryQuotePreview = (story, limit = 130) =>
  truncateText(story?.paragraphs?.[0] || "", limit);
