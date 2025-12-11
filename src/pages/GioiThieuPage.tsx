import React from "react";
import { useTranslation } from "../i18n";
import AboutContent from "../components/AboutContent";
import ContactSocialSection from "../components/ContactSocialSection";

const GioiThieuPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="px-6 lg:px-0 y-10 max-w-4xl mx-auto mt-16">
      <AboutContent />
      <ContactSocialSection />
    </main>
  );
};

export default GioiThieuPage;


