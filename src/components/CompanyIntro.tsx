import React from "react";
import { useTranslation } from "../i18n";

const CompanyIntro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Company Introduction Section */}
      <section className="px-6 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Company Name */}
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#8B4513] mb-3">
              {t.pages.home.title}
            </h1>
            <div className="w-16 h-1 bg-[#8B4513]"></div>
          </div>

          {/* Company Description */}
          <div className="lg:w-2/3">
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              {t.pages.home.paragraph1}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t.pages.home.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#8B4513] px-6 lg:px-16 py-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center lg:text-left">
          {t.pages.home.partners.title}
        </h2>
        <div className="space-y-6">
          {/* Top row - 6 logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {t.pages.home.partners.developers.slice(0, 6).map((developer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 lg:p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 min-h-[120px]"
              >
                <div className="text-center">
                  {developer.logo ? (
                    <img
                      src={developer.logo}
                      alt={developer.name}
                      className="max-w-full h-auto mx-auto"
                    />
                  ) : (
                    <div className="text-[#8B4513] font-semibold text-sm lg:text-base">
                      {developer.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Bottom row - 1 centered logo */}
          {t.pages.home.partners.developers.length > 6 && (
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 lg:p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 min-h-[120px] w-full max-w-[200px]">
                <div className="text-center">
                  {t.pages.home.partners.developers[6].logo ? (
                    <img
                      src={t.pages.home.partners.developers[6].logo}
                      alt={t.pages.home.partners.developers[6].name}
                      className="max-w-full h-auto mx-auto"
                    />
                  ) : (
                    <div className="text-[#8B4513] font-semibold text-sm lg:text-base">
                      {t.pages.home.partners.developers[6].name}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CompanyIntro;

