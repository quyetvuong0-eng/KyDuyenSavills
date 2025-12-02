import React from "react";
import { useTranslation } from "../i18n";

const GioiThieuPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="px-6 lg:px-16 py-10 max-w-4xl">
      <h1 className="text-2xl font-semibold text-dark mb-4">
        {t.pages.about.title}
      </h1>
      <p className="text-gray-700 mb-4">
        {t.pages.about.paragraph1}
      </p>
      <p className="text-gray-700 mb-4">
        {t.pages.about.paragraph2}
      </p>
      <p className="text-gray-700">
        {t.pages.about.paragraph3}
      </p>
    </main>
  );
};

export default GioiThieuPage;


