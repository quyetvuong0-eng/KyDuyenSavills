import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Bạn cần tạo tài khoản tại https://www.emailjs.com/
// Sau đó lấy các thông tin sau và thêm vào file .env hoặc thay thế trực tiếp:
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

// Email nhận thông tin
const RECIPIENT_EMAIL = 'ducdungdhd@gmail.com';

export interface EmailData {
  name: string;
  phone: string;
  email: string;
  purpose?: string; // "Để ở" hoặc "Để đầu tư"
  message: string;
  formType?: string; // "contactApartment" hoặc "collaborator"
}

/**
 * Gửi email thông qua EmailJS
 * @param data - Dữ liệu form cần gửi
 * @returns Promise<boolean> - true nếu gửi thành công, false nếu thất bại
 */
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Kiểm tra xem đã cấu hình EmailJS chưa
    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      console.error('EmailJS chưa được cấu hình. Vui lòng thêm thông tin vào file .env');
      return false;
    }

    // Khởi tạo EmailJS với Public Key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Lấy thời gian hiện tại theo giờ Việt Nam (UTC+7)
    const now = new Date();
    const formattedTime = now.toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    // Lấy tên miền trang web
    const websiteDomain = typeof window !== 'undefined' 
      ? window.location.origin 
      : 'https://davidnguyen.com'; // Fallback domain

    // Chuẩn bị template parameters
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      purpose: data.purpose || 'N/A',
      message: data.message,
      form_type: data.formType || 'Contact Form',
      reply_to: data.email,
      time: formattedTime,
      nameweb: websiteDomain,
    };

    // Gửi email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      console.log('Email sent successfully:', response);
      return true;
    } else {
      console.error('Failed to send email:', response);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

