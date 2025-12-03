import React from "react";
import { useTranslation } from "../../i18n";
import SocialLinks from "./SocialLinks";

interface ContactInfoProps {
  variant?: "footer" | "page";
  formKey?: "contactApartment" | "collaborator";
  showSocial?: boolean;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  variant = "page",
  formKey = "contactApartment",
  showSocial = true,
  className = "",
}) => {
  const { t } = useTranslation();

  const getContactData = () => {
    if (variant === "footer") {
      return {
        title: t.footer.contact.title,
        phone: t.footer.contact.phone,
        email: t.footer.contact.email,
        address: t.footer.contact.address,
        phoneValue: t.footer.contact.phoneValue,
        emailValue: t.footer.contact.emailValue,
        addressValue: t.footer.contact.addressValue,
        socialTitle: t.footer.social.title,
      };
    }
    return {
      title: t.pages[formKey].contact.title,
      phone: t.pages[formKey].contact.phone,
      email: t.pages[formKey].contact.email,
      address: t.pages[formKey].contact.address,
      phoneValue: t.pages[formKey].contact.phoneValue,
      emailValue: t.pages[formKey].contact.emailValue,
      addressValue: t.pages[formKey].contact.addressValue,
      socialTitle: t.pages[formKey].social.title,
    };
  };

  const contactData = getContactData();

  const titleClasses = {
    footer: "text-lg font-semibold mb-4",
    page: "text-xl font-semibold text-dark mb-4",
  };

  const textClasses = {
    footer: "space-y-2 text-gray-400 text-sm",
    page: "space-y-3 text-gray-700",
  };

  const labelClasses = {
    footer: "font-semibold text-white",
    page: "font-semibold",
  };

  return (
    <div className={className}>
      <h2 className={titleClasses[variant]}>
        {contactData.title}
      </h2>
      <div className={textClasses[variant]}>
        <p>
          <span className={labelClasses[variant]}>
            {contactData.phone}
          </span>{" "}
          {contactData.phoneValue}
        </p>
        <p>
          <span className={labelClasses[variant]}>
            {contactData.email}
          </span>{" "}
          {variant === "footer" ? (
            <a
              href={`mailto:${contactData.emailValue}`}
              className="hover:text-primary transition-colors"
            >
              {contactData.emailValue}
            </a>
          ) : (
            contactData.emailValue
          )}
        </p>
        <p>
          <span className={labelClasses[variant]}>
            {contactData.address}
          </span>{" "}
          {variant === "footer" && <br />}
          <span className={variant === "footer" ? "text-gray-400" : ""}>
            {contactData.addressValue}
          </span>
        </p>
      </div>

      {showSocial && variant === "page" && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-dark mb-3">
            {contactData.socialTitle}
          </h3>
          <SocialLinks variant="page" />
        </div>
      )}
    </div>
  );
};

export default ContactInfo;

