import React, { useState } from "react";
import { useTranslation } from "../../i18n";
import ContactForm from "./ContactForm";
import { sendEmail, EmailData } from "../../services/emailService";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultForm?: "contactApartment" | "collaborator";
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultForm,
}) => {
  const { t } = useTranslation();
  const [activeForm, setActiveForm] = useState<"contactApartment" | "collaborator">(
    defaultForm || "contactApartment"
  );

  if (!isOpen) return null;

  const handleSubmit = async (data: any) => {
    try {
      // Gửi email qua EmailJS
      const emailData: EmailData = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        purpose: data.purpose || undefined,
        message: data.message,
        formType: activeForm === "contactApartment" ? "Liên hệ tìm căn hộ" : "Liên hệ làm cộng tác viên",
      };

      const success = await sendEmail(emailData);

      if (success) {
        alert(t.pages[activeForm].successMessage);
        onClose();
      } else {
        alert("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua số điện thoại.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua số điện thoại.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveForm("contactApartment")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeForm === "contactApartment"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.pages.contactApartment.title}
            </button>
            <button
              onClick={() => setActiveForm("collaborator")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeForm === "collaborator"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.pages.collaborator.title}
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="text-gray-600 mb-6">
            {t.pages[activeForm].intro}
          </p>
          <ContactForm formKey={activeForm} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

