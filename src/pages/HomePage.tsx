import React from "react";
import HeroSlider from "../components/HeroSlider";
import CompanyIntro from "../components/CompanyIntro";
import ServicesSection from "../components/ServicesSection";

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSlider />
      <CompanyIntro />
      <ServicesSection />
    </main>
  );
};

export default HomePage;


