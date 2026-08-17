import { Link } from "react-router-dom";
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
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link to={href} className={className} style={style}>
        {children}
      </Link>
    );
  }

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
