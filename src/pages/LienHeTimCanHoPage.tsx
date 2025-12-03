import React from "react";
import { useTranslation } from "../i18n";
import ContactForm from "../components/common/ContactForm";
import ContactInfo from "../components/common/ContactInfo";

const LienHeTimCanHoPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="px-6 lg:px-16 py-10 max-w-4xl mx-auto mt-16">
      <h1 className="text-3xl font-semibold text-dark mb-4">
        {t.pages.contactApartment.title}
      </h1>
      <p className="text-gray-700 mb-8">
        {t.pages.contactApartment.intro}
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <ContactForm formKey="contactApartment" />
        <ContactInfo variant="page" showSocial={true} />
      </div>
    </main>
  );
};

export default LienHeTimCanHoPage;

