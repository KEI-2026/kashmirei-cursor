/**
 * Form URLs, fallbacks, and response-time copy.
 *
 * TODO(go-live): Confirm real form URLs and response SLA with the team before launch.
 */

export const FORM_RESPONSE_SLA =
  "We review every submission and respond within 5 days.";

// TODO(go-live): Replace with the real volunteer interest Google Form URL.
export const VOLUNTEER_FORM_URL = null;

export const VOLUNTEER_FORM_FALLBACK =
  "mailto:info@kashmirei.org?subject=Volunteering%20with%20KEI";

// TODO(go-live): Replace with the real scholar application Google Form URL.
export const SCHOLAR_APPLICATION_FORM_URL = null;

export const SCHOLAR_APPLICATION_FORM_FALLBACK =
  "mailto:info@kashmirei.org?subject=Scholarship%20Application%20Inquiry";

export function isPlaceholderFormUrl(url) {
  return !url || String(url).includes("YOUR_FORM_LINK");
}

export function getVolunteerFormHref() {
  return isPlaceholderFormUrl(VOLUNTEER_FORM_URL)
    ? VOLUNTEER_FORM_FALLBACK
    : VOLUNTEER_FORM_URL;
}

export function getScholarApplicationFormHref() {
  return isPlaceholderFormUrl(SCHOLAR_APPLICATION_FORM_URL)
    ? SCHOLAR_APPLICATION_FORM_FALLBACK
    : SCHOLAR_APPLICATION_FORM_URL;
}

export function externalLinkProps(href) {
  if (href.startsWith("http")) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}
