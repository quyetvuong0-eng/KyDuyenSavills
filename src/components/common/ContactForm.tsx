import React, { useState } from "react";
import { useTranslation } from "../../i18n";
import { sendEmail, EmailData } from "../../services/emailService";

interface ContactFormProps {
  formKey: "contactApartment" | "collaborator";
  onSubmit?: (data: FormData) => void;
  className?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  purpose: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formKey,
  onSubmit,
  className = "",
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Nếu có custom onSubmit handler, sử dụng nó
      if (onSubmit) {
        onSubmit(formData);
        setFormData({ name: "", phone: "", email: "", purpose: "", message: "" });
        setIsSubmitting(false);
        return;
      }

      // Gửi email qua EmailJS
      const emailData: EmailData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        purpose: formData.purpose,
        message: formData.message,
        formType: formKey === "contactApartment" ? "Liên hệ tìm căn hộ" : "Liên hệ làm cộng tác viên",
      };

      const success = await sendEmail(emailData);

      if (success) {
        alert(t.pages[formKey].successMessage);
        setFormData({ name: "", phone: "", email: "", purpose: "", message: "" });
      } else {
        alert("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua số điện thoại.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua số điện thoại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formLabels = t.pages[formKey].form;

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {formLabels.name}
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {formLabels.phone}
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {formLabels.email}
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {formKey === "contactApartment" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {formLabels.purpose}
          </label>
          <select
            required
            value={formData.purpose}
            onChange={(e) =>
              setFormData({ ...formData, purpose: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">{formLabels.purposePlaceholder}</option>
            <option value={formLabels.purposeOptions.living}>{formLabels.purposeOptions.living}</option>
            <option value={formLabels.purposeOptions.investment}>{formLabels.purposeOptions.investment}</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {formLabels.message}
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
      >
        {isSubmitting ? "Đang gửi..." : formLabels.submit}
      </button>
    </form>
  );
};

export default ContactForm;

