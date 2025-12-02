import React from "react";
import { useTranslation } from "../i18n";

const LienHeTuVanPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="px-6 lg:px-16 py-10 max-w-3xl">
      <h1 className="text-2xl font-semibold text-dark mb-4">
        {t.pages.contactConsult.title}
      </h1>
      <p className="text-gray-700 mb-6">
        {t.pages.contactConsult.intro}
      </p>
      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">
            {t.pages.contactConsult.hotlineLabel}
          </span>{" "}
          (+84) 969 075 829
        </p>
        <p>
          <span className="font-semibold">
            {t.pages.contactConsult.emailLabel}
          </span>{" "}
          daviddungsavills@gmail.com
        </p>
      </div>
    </main>
  );
};

export default LienHeTuVanPage;


