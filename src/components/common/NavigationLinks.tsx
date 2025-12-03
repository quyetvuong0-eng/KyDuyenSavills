import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../i18n";

interface NavigationLinksProps {
  variant?: "header" | "footer";
  className?: string;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  variant = "header",
  className = "",
}) => {
  const { t } = useTranslation();

  const linkClasses = {
    header: ({ isActive }: { isActive: boolean }) =>
      `text-sm font-medium text-gray-900 hover:text-primary transition-colors duration-200 ${
        isActive ? "text-primary" : ""
      }`,
    footer: "text-gray-400 hover:text-primary transition-colors duration-200 text-sm",
  };

  const containerClasses = {
    header: "hidden md:flex items-center gap-6 lg:gap-8",
    footer: "space-y-2",
  };

  const links = [
    { to: "/", label: t.header.nav.home, end: true },
    { to: "/gioi-thieu", label: t.header.nav.about },
    { to: "/lien-he-tim-can-ho", label: t.header.nav.contactApartment },
    { to: "/cong-tac-vien", label: t.header.nav.collaborator },
  ];

  if (variant === "footer") {
    return (
      <ul className={`${containerClasses.footer} ${className}`}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.end} className={linkClasses.footer}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav className={`${containerClasses.header} ${className}`}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={linkClasses.header}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationLinks;

