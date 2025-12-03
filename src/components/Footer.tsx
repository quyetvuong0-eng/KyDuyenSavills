import React from "react";
import { useTranslation } from "../i18n";
import Logo from "./common/Logo";
import NavigationLinks from "./common/NavigationLinks";
import ContactInfo from "./common/ContactInfo";
import SocialLinks from "./common/SocialLinks";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t.footer.quickLinks.title}
            </h3>
            <NavigationLinks variant="footer" />
          </div>

          {/* Contact Info */}
          <ContactInfo variant="footer" showSocial={false} />

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t.footer.social.title}
            </h3>
            <SocialLinks variant="footer" />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

