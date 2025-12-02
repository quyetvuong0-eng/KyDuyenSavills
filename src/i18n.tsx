import React, { createContext, useContext, useState, ReactNode } from "react";
import vi from "./locales/vi.json";
import en from "./locales/en.json";
import tq from "./locales/tq.json";

export type Language = "vi" | "en" | "tq";

const translations = {
  vi,
  en,
  tq,
} as const;

type TranslationType = typeof vi;

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>("vi");

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return ctx;
};


