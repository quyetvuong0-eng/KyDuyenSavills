import React from "react";
import { useTranslation } from "../../i18n";
import { IconZalo, PhoneIcon, EmailIcon } from "./icons";

const FloatingActionButtons: React.FC = () => {
  const { t } = useTranslation();
  const contactData = t.pages.contactApartment?.contact || t.pages.collaborator?.contact;

  const handlePhoneClick = () => {
    const phone = contactData?.phoneValue?.replace(/\s/g, '');
    window.location.href = `tel:${phone}`;
  };

  const handleZaloClick = () => {
    const zaloPhone = t.pages.contactApartment?.social?.zaloPhone || t.pages.collaborator?.social?.zaloPhone;
    window.open(`https://zalo.me/${zaloPhone}`, '_blank');
  };

  const handleEmailClick = () => {
    const email = contactData?.emailValue || 'ducdungdhd@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Zalo Button */}
      <button
        onClick={handleZaloClick}
        className="group relative bg-[#0068FF] hover:bg-[#0052CC] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Zalo"
        title="Chat Zalo"
      >
        <IconZalo
          width={24}
          height={24}
          primaryColor="#0068FF"
          secondaryColor="#FFFFFF"
        />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat Zalo
        </span>
      </button>

      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="group relative bg-[#d4af37] hover:bg-[#b8941f] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Phone"
        title="Gọi điện"
      >
        <PhoneIcon className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Gọi điện
        </span>
      </button>

      {/* Email Button */}
      <button
        onClick={handleEmailClick}
        className="group relative bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Email"
        title="Gửi email"
      >
        <EmailIcon className="w-6 h-6" variant="stroke" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Gửi email
        </span>
      </button>
    </div>
  );
};

export default FloatingActionButtons;

