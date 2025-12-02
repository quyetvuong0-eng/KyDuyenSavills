import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation, Language } from "../i18n";
import VietnamFlag from "./flags/VietnamFlag";
import ChinaFlag from "./flags/ChinaFlag";
import UKFlag from "./flags/UKFlag";

const Header: React.FC = () => {
  const { t, lang, setLang } = useTranslation();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; flag: React.ReactNode }[] = [
    { code: "vi", flag: <VietnamFlag className="w-5 h-5" /> },
    { code: "en", flag: <UKFlag className="w-5 h-5" /> },
    { code: "tq", flag: <ChinaFlag className="w-5 h-5" /> },
  ];

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
      {/* Main nav */}
      <div className="flex items-center justify-between px-6 lg:px-12 xl:px-16 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs tracking-wider text-gray-600 font-light">
              {t.header.logo.line1}
            </span>
            <span className="text-base font-semibold text-dark tracking-tight">
              {t.header.logo.line2}
            </span>
          </div>
        </NavLink>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium text-gray-900 hover:text-primary transition-colors duration-200 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            {t.header.nav.home}
          </NavLink>

          <NavLink
            to="/gioi-thieu"
            className={({ isActive }) =>
              `text-sm font-medium text-gray-900 hover:text-primary transition-colors duration-200 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            {t.header.nav.about}
          </NavLink>

          <NavLink
            to="/lien-he-tu-van"
            className={({ isActive }) =>
              `text-sm font-medium text-gray-900 hover:text-primary transition-colors duration-200 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            {t.header.nav.contactConsult}
          </NavLink>

          <NavLink
            to="/cong-tac-vien"
            className={({ isActive }) =>
              `text-sm font-medium text-gray-900 hover:text-primary transition-colors duration-200 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            {t.header.nav.collaborator}
          </NavLink>
        </nav>

        {/* Right side - Language & Mobile menu */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="hover:scale-110 transition-transform duration-200 cursor-pointer flex items-center justify-center"
              aria-label="Select language"
            >
              {currentLanguage.flag}
            </button>

            {/* Dropdown Menu */}
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLang(language.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-sm flex items-center gap-2 transition-colors duration-150 ${
                        lang === language.code
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center">{language.flag}</span>
                      {lang === language.code && (
                        <svg
                          className="w-3 h-3 ml-auto text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


