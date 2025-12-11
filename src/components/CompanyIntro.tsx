import React from "react";
import { useTranslation } from "../i18n";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CompanyIntro: React.FC = () => {
  const { t } = useTranslation();
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: partnersRef, isVisible: partnersVisible } = useScrollAnimation();

  return (
    <div className="bg-white">
      {/* Company Introduction Section */}
      <section 
        ref={introRef}
        className={`px-6 lg:px-16 py-12 my-4 rounded-lg transition-all duration-[1200ms] ease-out ${
          introVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Title - Full width */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#d4af37] mb-3">
            {t.pages.home.title}
          </h1>
          <div className="w-16 h-1 bg-[#d4af37]"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Image Section */}
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#d4af37]/20 transition-transform duration-300 hover:scale-105">
              <img
                src="/images/about/about-nb-2.jpg"
                alt="David Nguyen - Chuyên viên tư vấn bất động sản"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Company Description */}
          <div className="lg:w-2/3">
            <p className="text-gray-700 mb-4 text-xl leading-relaxed text-justify">
              {t.pages.home.paragraph1}
            </p>
            <p className="text-gray-700 mb-4 text-xl leading-relaxed text-justify">
              {t.pages.home.paragraph2}
            </p>
            <p className="text-gray-700 mb-4 text-xl leading-relaxed text-justify">
              {t.pages.home.paragraph3}
            </p>
            <p className="text-gray-700 text-xl leading-relaxed text-justify">
              {t.pages.home.paragraph4}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section 
        ref={partnersRef}
        className={`relative overflow-hidden px-6 lg:px-16 py-12 rounded-lg transition-all duration-[1200ms] ease-out ${
          partnersVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%), url("/images/about/about-nb-3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20" aria-hidden="true" />
        <div className="relative">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center lg:text-left drop-shadow-lg">
          {t.pages.home.partners.title}
        </h2>
        <div className="space-y-6">
          {/* Top row - 6 logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {t.pages.home.partners.developers.slice(0, 6).map((developer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 lg:p-6 flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[120px] backdrop-blur-sm"
              >
                <div className="text-center w-full h-full flex items-center justify-center">
                  {developer.logo ? (
                    <img
                      src={developer.logo}
                      alt={developer.name}
                      className="max-w-full max-h-16 lg:max-h-20 w-auto h-auto object-contain transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-[#d4af37] font-semibold text-sm lg:text-base drop-shadow">
                      {developer.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Bottom row - 2 centered logos */}
          {t.pages.home.partners.developers.length > 6 && (
            <div className="flex justify-center gap-4 lg:gap-6">
              {t.pages.home.partners.developers.slice(6).map((developer: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 lg:p-6 flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[120px] w-full max-w-[200px] backdrop-blur-sm"
                >
                  <div className="text-center w-full h-full flex items-center justify-center">
                    {developer.logo ? (
                      <img
                        src={developer.logo}
                        alt={developer.name}
                        className="max-w-full max-h-16 lg:max-h-20 w-auto h-auto object-contain transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                    <div className="text-[#d4af37] font-semibold text-sm lg:text-base drop-shadow">
                        {developer.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyIntro;

