import React from "react";
import AboutContent from "../components/AboutContent";
import ContactSocialSection from "../components/ContactSocialSection";

const GioiThieuPage: React.FC = () => {
  return (
    <main className="px-6 lg:px-0 y-10 max-w-5xl mx-auto mt-16">
      <AboutContent />
      <ContactSocialSection />
    </main>
  );
};

export default GioiThieuPage;


