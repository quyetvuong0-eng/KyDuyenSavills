import React from "react";
import CompanyIntro from "../components/CompanyIntro";
import ServicesSection from "../components/ServicesSection";

const HomePage: React.FC = () => {
  return (
    <main>
      <CompanyIntro />
      <ServicesSection />
    </main>
  );
};

export default HomePage;


