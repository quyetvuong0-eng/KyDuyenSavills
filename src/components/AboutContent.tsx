import React from "react";
import { useTranslation } from "../i18n";

const AboutContent: React.FC = () => {
  const { t } = useTranslation();
  const aboutData = t.pages.about;

  // Helper function to safely render text with highlighted keywords
  const renderTextWithHighlights = (
    text: string,
    keywords: { [key: string]: string },
    highlightClass: string = "text-[#d4af37]"
  ) => {
    // Replace placeholders with actual values first
    let currentText = text;
    Object.entries(keywords).forEach(([placeholder, value]) => {
      currentText = currentText.replace(`{${placeholder}}`, value);
    });

    // Split by keywords and highlight them
    const keywordValues = Object.values(keywords);
    const escapedKeywords = keywordValues.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const parts = currentText.split(new RegExp(`(${escapedKeywords.join('|')})`, 'g'));

    return parts.map((part, index) => {
      const isKeyword = keywordValues.includes(part);
      return isKeyword ? (
        <strong key={index} className={highlightClass}>
          {part}
        </strong>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      );
    });
  };

  return (
    <div className="mb-12">
      {/* Professional Layout with Avatar and Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Avatar Section */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#d4af37]/20">
              <img
                src={aboutData.avatar}
                alt={aboutData.avatarAlt}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#d4af37] opacity-10 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#d4af37] mb-2">
              {aboutData.title}
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mb-6"></div>
          </div>

          {/* Introduction Paragraph */}
          <div className="space-y-4">
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              {renderTextWithHighlights(aboutData.introduction, {
                name: aboutData.introductionName,
                years: aboutData.introductionYears
              })}
            </p>

            {/* Strengths Section */}
            <div className="bg-gradient-to-r from-[#d4af37]/5 to-transparent p-6 rounded-lg border-l-4 border-[#d4af37]">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-3">
                {aboutData.strengths.title}
              </h3>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {aboutData.strengths.description}
              </p>
            </div>

            {/* Partnership Section */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-3">
                {aboutData.partnership.title}
              </h3>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {renderTextWithHighlights(aboutData.partnership.description, {
                  professional: aboutData.partnership.professional,
                  transparent: aboutData.partnership.transparent,
                  accompany: aboutData.partnership.accompany
                }, "text-gray-800")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

