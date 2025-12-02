import React from "react";
import { useTranslation } from "../i18n";

const CongTacVienPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="px-6 lg:px-16 py-10 max-w-3xl">
      <h1 className="text-2xl font-semibold text-dark mb-4">
        {t.pages.collaborator.title}
      </h1>
      <p className="text-gray-700 mb-4">
        {t.pages.collaborator.intro}
      </p>
      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">
            {t.pages.collaborator.formLabel}
          </span>{" "}
          {t.pages.collaborator.formValue}
        </p>
        <p>
          <span className="font-semibold">
            {t.pages.collaborator.directLabel}
          </span>{" "}
          {t.pages.collaborator.directValue}
        </p>
      </div>
    </main>
  );
};

export default CongTacVienPage;


