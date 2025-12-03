import React from "react";
import { useTranslation } from "../../i18n";

interface SocialLinksProps {
  variant?: "header" | "footer" | "page";
  showLabels?: boolean;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "header",
  showLabels = false,
  className = "",
}) => {
  const { t } = useTranslation();

  const getSocialData = () => {
    if (variant === "page") {
      return {
        linkedin: t.pages.contactApartment.social.linkedinUrl,
        facebook: t.pages.contactApartment.social.facebookUrl,
        zaloPhone: t.pages.contactApartment.social.zaloPhone,
        linkedinLabel: t.pages.contactApartment.social.linkedin,
        facebookLabel: t.pages.contactApartment.social.facebook,
        zaloLabel: t.pages.contactApartment.social.zalo,
      };
    }
    return {
      linkedin: t.header.social.linkedinUrl,
      facebook: t.header.social.facebookUrl,
      zaloPhone: t.header.social.zaloPhone,
      linkedinLabel: variant === "footer" ? t.footer.social.linkedin : t.header.social.linkedin,
      facebookLabel: variant === "footer" ? t.footer.social.facebook : t.header.social.facebook,
      zaloLabel: variant === "footer" ? t.footer.social.zalo : t.header.social.zalo,
    };
  };

  const socialData = getSocialData();

  const containerClasses = {
    header: "hidden lg:flex items-center gap-3",
    footer: "flex flex-col gap-3",
    page: "flex flex-col gap-2",
  };

  const linkClasses = {
    header: "text-gray-600 hover:text-primary transition-colors",
    footer: "text-gray-400 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2",
    page: "text-primary hover:text-primary/80 flex items-center gap-2",
  };

  const iconSize = variant === "header" ? "w-5 h-5" : "w-5 h-5";

  return (
    <div className={`${containerClasses[variant]} ${className}`}>
      <a
        href={socialData.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses[variant]}
        aria-label={socialData.linkedinLabel}
      >
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        {(showLabels || variant !== "header") && <span>{socialData.linkedinLabel}</span>}
      </a>
      <a
        href={socialData.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses[variant]}
        aria-label={socialData.facebookLabel}
      >
        <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        {(showLabels || variant !== "header") && <span>{socialData.facebookLabel}</span>}
      </a>
      <a
        href={`tel:${socialData.zaloPhone}`}
        className={linkClasses[variant]}
        aria-label={socialData.zaloLabel}
      >
        <svg className={iconSize} fill="currentColor" viewBox="0 0 512 512">
          <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/>
        </svg>
        {(showLabels || variant !== "header") && <span>{socialData.zaloLabel}</span>}
      </a>
    </div>
  );
};

export default SocialLinks;

