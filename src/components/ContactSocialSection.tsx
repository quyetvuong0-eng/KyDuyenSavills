import React from "react";
import { useTranslation } from "../i18n";
import ContactInfo from "./common/ContactInfo";
import SocialLinks from "./common/SocialLinks";

interface ContactSocialSectionProps {
  className?: string;
  showBorder?: boolean;
}

const ContactSocialSection: React.FC<ContactSocialSectionProps> = ({
  className = "",
  showBorder = true,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`mt-12 pt-8 ${showBorder ? "border-t border-gray-200" : ""} ${className}`}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6">
            {t.pages.contactApartment.contact.title}
          </h2>
          <ContactInfo variant="page" showSocial={false} />
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6">
            {t.pages.contactApartment.social.title}
          </h2>
          <SocialLinks variant="page" showLabels={true} />
        </div>
      </div>
    </div>
  );
};

export default ContactSocialSection;

