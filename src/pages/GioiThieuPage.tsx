import React from "react";
import { useTranslation } from "../i18n";
import AboutContent from "../components/AboutContent";
import ContactSocialSection from "../components/ContactSocialSection";

const GioiThieuPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="px-6 lg:px-16 py-10 max-w-4xl mx-auto mt-16">
      <h1 className="text-3xl lg:text-4xl font-bold text-[#d4af37] mb-6">
        {t.pages.about.title}
      </h1>
      <AboutContent />
      <ContactSocialSection />
    </main>
  );
};

export default GioiThieuPage;


