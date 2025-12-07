import React from "react";
import { useTranslation } from "../i18n";
import ContactForm from "./common/ContactForm";

interface ContactFormSectionProps {
  formKey: "contactApartment" | "collaborator";
  className?: string;
  showBorder?: boolean;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  formKey,
  className = "",
  showBorder = true,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`mt-12 pt-8 ${showBorder ? "border-t border-gray-200" : ""} ${className}`}
    >
      <h2 className="text-2xl font-bold text-[#d4af37] mb-4">
        {t.pages[formKey].title}
      </h2>
      <p className="text-gray-700 mb-6">
        {t.pages[formKey].intro}
      </p>
      <ContactForm formKey={formKey} />
    </div>
  );
};

export default ContactFormSection;

