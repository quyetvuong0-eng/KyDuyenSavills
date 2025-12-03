import React, { useState, useRef, useEffect } from "react";
import { useTranslation, Language } from "../../i18n";
import VietnamFlag from "../flags/VietnamFlag";
import ChinaFlag from "../flags/ChinaFlag";
import UKFlag from "../flags/UKFlag";

const LanguageDropdown: React.FC = () => {
  const { lang, setLang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:scale-110 transition-transform duration-200 cursor-pointer flex items-center justify-center"
        aria-label="Select language"
      >
        {currentLanguage.flag}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-auto bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setLang(language.code);
                  setIsOpen(false);
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
  );
};

export default LanguageDropdown;

