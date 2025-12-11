import React from "react";
import { useTranslation } from "../../i18n";
import { LinkedInIcon, FacebookIcon, PhoneIcon } from "./icons";
import IconZalo from "./icons/IconZalo";

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
        hotlinePhone: t.pages.contactApartment.contact.phoneValue,
        zaloPhone: t.pages.contactApartment.social.zaloPhone,
        linkedinLabel: t.pages.contactApartment.social.linkedin,
        facebookLabel: t.pages.contactApartment.social.facebook,
        hotlineLabel: t.pages.contactApartment.social.hotline || "Hotline",
        zaloLabel: t.pages.contactApartment.social.zalo,
      };
    }
    return {
      linkedin: t.header.social.linkedinUrl,
      facebook: t.header.social.facebookUrl,
      hotlinePhone: variant === "footer" ? t.footer.contact.phoneValue : t.header.topBar.hotline.split(": ")[1] || "0936 818 105",
      zaloPhone: t.header.social.zaloPhone,
      linkedinLabel: variant === "footer" ? t.footer.social.linkedin : t.header.social.linkedin,
      facebookLabel: variant === "footer" ? t.footer.social.facebook : t.header.social.facebook,
      hotlineLabel: variant === "footer" ? (t.footer.social.hotline || "Hotline") : (t.header.social.hotline || "Hotline"),
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
        <LinkedInIcon className={iconSize} />
        {(showLabels || variant !== "header") && <span>{socialData.linkedinLabel}</span>}
      </a>
      <a
        href={socialData.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses[variant]}
        aria-label={socialData.facebookLabel}
      >
        <FacebookIcon className={iconSize} />
        {(showLabels || variant !== "header") && <span>{socialData.facebookLabel}</span>}
      </a>
      <a
        href={`tel:${socialData.hotlinePhone.replace(/\s/g, "")}`}
        className={linkClasses[variant]}
        aria-label={socialData.hotlineLabel}
      >
        <PhoneIcon className={iconSize} />
        {(showLabels || variant !== "header") && <span>{socialData.hotlineLabel}</span>}
      </a>
      <a
        href={`https://zalo.me/${socialData.zaloPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClasses[variant]} group`}
        aria-label={socialData.zaloLabel}
      >
        <IconZalo 
          width={20} 
          height={20} 
          className={`${iconSize} transition-all duration-300 group-hover:scale-110`}
          primaryColor="currentColor"
          secondaryColor="currentColor"
        />
        {(showLabels || variant !== "header") && <span>{socialData.zaloLabel}</span>}
      </a>
    </div>
  );
};

export default SocialLinks;

