import React from "react";
import { useTranslation } from "../i18n";

const AboutContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 mb-12">
      <p className="text-gray-700 text-base leading-relaxed">
        {t.pages.about.paragraph1}
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        {t.pages.about.paragraph2}
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        {t.pages.about.paragraph3}
      </p>
    </div>
  );
};

export default AboutContent;

