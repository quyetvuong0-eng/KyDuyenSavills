import React from "react";
import { useTranslation } from "../i18n";
import HeroSlider from "../components/HeroSlider";
import ServicesSection from "../components/ServicesSection";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Content Section */}
      <section className="px-6 lg:px-16 py-10">
        <h1 className="text-2xl font-semibold text-dark mb-4">
          {t.pages.home.title}
        </h1>
        <p className="text-gray-700 mb-4 max-w-3xl">
          {t.pages.home.paragraph1}
        </p>
        <p className="text-gray-700 max-w-3xl">
          {t.pages.home.paragraph2}
        </p>
      </section>

      {/* Services Section */}
      <ServicesSection />
    </main>
  );
};

export default HomePage;


