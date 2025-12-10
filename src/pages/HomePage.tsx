import React from "react";
import CompanyIntro from "../components/CompanyIntro";
import ServicesSection from "../components/ServicesSection";

const HomePage: React.FC = () => {
  return (
    <main className="w-full mx-auto md:w-[80%] lg:w-[65%]">
      <CompanyIntro />
      <ServicesSection />
    </main>
  );
};

export default HomePage;


