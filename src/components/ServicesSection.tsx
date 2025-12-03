import React from "react";
import { useTranslation } from "../i18n";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 lg:px-16 py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
        {/* Left Side - Title Section */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <div className="w-16 h-1 bg-[#D4AF37] mb-4"></div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#8B4513] mb-3">
            {t.pages.home.services.title}
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            {t.pages.home.services.subtitle}
          </p>
        </div>

        {/* Right Side - Services Grid */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {t.pages.home.services.items.map((service, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon Circle with Checkmark */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#D4AF37] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-[#8B4513] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

