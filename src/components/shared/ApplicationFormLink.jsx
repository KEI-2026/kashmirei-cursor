import {
  getScholarApplicationFormHref,
  externalLinkProps,
} from "../../config/formLinks";

const defaultStyle = {
  color: "var(--kei-accent-text)",
  textDecoration: "underline",
  fontWeight: "600",
};

const ApplicationFormLink = ({
  children = "online application form",
  className,
  style = defaultStyle,
}) => {
  const href = getScholarApplicationFormHref();

  return (
    <a
      href={href}
      className={className}
      style={style}
      {...externalLinkProps(href)}
    >
      {children}
    </a>
  );
};

export default ApplicationFormLink;
