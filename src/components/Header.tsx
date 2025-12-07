import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../i18n";
import Logo from "./common/Logo";
import NavigationLinks from "./common/NavigationLinks";
import SocialLinks from "./common/SocialLinks";
import LanguageDropdown from "./common/LanguageDropdown";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileLinks = [
    { to: "/", label: t.header.nav.home, end: true },
    { to: "/gioi-thieu", label: t.header.nav.about },
    { to: "/lien-he-tim-can-ho", label: t.header.nav.contactApartment },
    { to: "/cong-tac-vien", label: t.header.nav.collaborator },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
      <div className="flex items-center justify-between px-6 lg:px-12 xl:px-16 py-4">
        <Logo variant="header" />
        
        {/* Desktop Navigation */}
        <NavigationLinks variant="header" />
        
        {/* Desktop Social & Language */}
        <div className="hidden lg:flex items-center gap-4">
          <SocialLinks variant="header" />
          <LanguageDropdown />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top rounded-b-lg">
          <div className="px-6 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              {mobileLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="pt-4 border-t border-gray-200">
              <SocialLinks variant="footer" showLabels={true} />
            </div>
            <div className="pt-2">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


