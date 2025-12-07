# Hướng dẫn cấu hình EmailJS

## Bước 1: Đăng ký tài khoản EmailJS
1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí (có thể gửi 200 email/tháng)

## Bước 2: Tạo Email Service
1. Vào Dashboard > Email Services
2. Click "Add New Service"
3. Chọn "Gmail" (hoặc email service khác)
4. Kết nối với tài khoản Gmail của bạn (ducdungdhd@gmail.com)
5. Lưu lại **Service ID**

## Bước 3: Tạo Email Template
1. Vào Dashboard > Email Templates
2. Click "Create New Template"
3. Sử dụng template sau:

**Subject:**
```
Liên hệ mới từ {{form_type}} - {{from_name}}
```

**Content:**
```
Bạn có một liên hệ mới từ website:

═══════════════════════════════════════
THÔNG TIN LIÊN HỆ
═══════════════════════════════════════

Loại form: {{form_type}}
Tên: {{from_name}}
Email: {{from_email}}
Số điện thoại: {{phone}}
Mục đích: {{purpose}}
Thời gian gửi: {{time}}
Trang web: {{nameweb}}

═══════════════════════════════════════
NỘI DUNG TIN NHẮN
═══════════════════════════════════════

{{message}}

═══════════════════════════════════════
Email này được gửi tự động từ website.
Reply to: {{reply_to}}
```

**Lưu ý quan trọng:**
- Đảm bảo tất cả các biến sau đều được thêm vào template:
  - {{form_type}} - Loại form
  - {{from_name}} - Tên người gửi
  - {{from_email}} - Email người gửi
  - {{phone}} - Số điện thoại
  - {{purpose}} - Mục đích (Để ở/Để đầu tư)
  - {{message}} - Nội dung tin nhắn
  - {{time}} - Thời gian gửi (giờ Việt Nam)
  - {{nameweb}} - Tên miền trang web
  - {{reply_to}} - Email để reply
- Nếu form "collaborator" không có purpose, sẽ hiển thị "N/A" (đã được xử lý trong code)
- Thời gian sẽ tự động được chuyển đổi sang giờ Việt Nam (UTC+7)

4. Trong phần "To Email", nhập: `ducdungdhd@gmail.com`
5. Trong phần "Reply To", chọn: `{{reply_to}}`
6. Lưu lại **Template ID**

## Bước 4: Lấy Public Key
1. Vào Dashboard > Account > General
2. Copy **Public Key**

## Bước 5: Cấu hình trong dự án
1. Tạo file `.env` trong thư mục gốc của dự án
2. Thêm các thông tin sau:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

3. Khởi động lại ứng dụng: `npm start`

## Lưu ý:
- File `.env` không nên commit lên Git (đã có trong .gitignore)
- Nếu không cấu hình, form vẫn hoạt động nhưng sẽ không gửi email
- Bạn có thể test bằng cách submit form và kiểm tra email inbox

