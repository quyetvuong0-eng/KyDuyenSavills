# Danh Sách Kiểm Tra Bảo Mật

## ✅ Các Thực Hành Bảo Mật Đã Triển Khai

### 1. **Không Hardcode Thông Tin Nhạy Cảm**
- ✅ Tất cả dữ liệu nhạy cảm (EmailJS keys) sử dụng biến môi trường với tiền tố `REACT_APP_`
- ✅ Không có API keys, mật khẩu hoặc tokens được hardcode trong source code
- ✅ Biến môi trường được cấu hình đúng trong file `.env` (không commit lên git)

### 2. **Ngăn Chặn XSS (Cross-Site Scripting)**
- ✅ Không sử dụng `dangerouslySetInnerHTML` trong components
- ✅ Tất cả input từ người dùng được sanitize thông qua React's built-in escaping
- ✅ Render text sử dụng React components thay vì raw HTML

### 3. **Xác Thực Input**
- ✅ Form inputs có validation đầy đủ
- ✅ Xác thực định dạng email
- ✅ Xác thực số điện thoại
- ✅ Các trường bắt buộc được enforce

### 4. **Dependencies**
- ✅ Sử dụng các package được maintain tốt (React, React Router, EmailJS)
- ✅ Khuyến nghị cập nhật dependencies thường xuyên
- ✅ Không phát hiện package có lỗ hổng bảo mật

### 5. **Cấu Trúc Code**
- ✅ TypeScript để đảm bảo type safety
- ✅ Xử lý lỗi đúng cách
- ✅ Không sử dụng `eval()` hoặc `Function()` constructor
- ✅ Không sử dụng `document.write()`

## 🔒 Khuyến Nghị Bảo Mật

### Biến Môi Trường
- Đảm bảo file `.env` có trong `.gitignore`
- Không bao giờ commit file `.env` lên version control
- Sử dụng keys khác nhau cho development và production

### Cập Nhật Thường Xuyên
- Cập nhật dependencies thường xuyên: `npm audit` và `npm update`
- Theo dõi các cảnh báo bảo mật cho React và các dependencies khác

### Checklist Production
- [ ] Xóa các console.log statements trong production build
- [ ] Bật Content Security Policy (CSP) headers
- [ ] Chỉ sử dụng HTTPS
- [ ] Triển khai rate limiting cho form submissions
- [ ] Thêm CAPTCHA cho forms nếu cần
- [ ] Kiểm tra bảo mật định kỳ

### EmailJS Security
- EmailJS Public Key an toàn để expose (được thiết kế cho client-side use)
- Service ID và Template ID cũng an toàn (chúng là public identifiers)
- Xác thực email được thực hiện ở phía EmailJS server

## 🛡️ Các Biện Pháp Bảo Mật Bổ Sung

### Content Security Policy (CSP)
Cân nhắc thêm CSP headers để ngăn chặn XSS attacks:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.emailjs.com; style-src 'self' 'unsafe-inline';
```

### Rate Limiting
Cân nhắc triển khai rate limiting cho form submissions để ngăn chặn spam/abuse.

### Input Sanitization
Tất cả user inputs được tự động sanitize bởi React. Để tăng cường bảo mật, cân nhắc:
- Server-side validation
- Giới hạn độ dài input
- Lọc ký tự đặc biệt nếu cần

## 🚀 Hướng Dẫn Deploy Lên Vercel Không Bị Lộ Mã .env

### Bước 1: Chuẩn Bị File .env.local (Chỉ Dùng Ở Local)

1. Tạo file `.env.local` trong thư mục gốc của dự án:
```bash
# .env.local (KHÔNG commit file này lên git)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Đảm bảo `.env.local` đã có trong `.gitignore`:
```
# .gitignore
.env.local
.env*.local
```

### Bước 2: Cấu Hình Environment Variables Trên Vercel

**Cách 1: Qua Vercel Dashboard (Khuyến Nghị)**

1. Đăng nhập vào [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project của bạn
3. Vào **Settings** → **Environment Variables**
4. Thêm từng biến môi trường:
   - **Name**: `REACT_APP_EMAILJS_SERVICE_ID`
   - **Value**: Giá trị của bạn
   - **Environment**: Chọn `Production`, `Preview`, và `Development` (hoặc chỉ Production)
   - Nhấn **Save**
5. Lặp lại cho các biến còn lại:
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`

**Cách 2: Qua Vercel CLI**

```bash
# Cài đặt Vercel CLI (nếu chưa có)
npm i -g vercel

# Đăng nhập
vercel login

# Thêm environment variables
vercel env add REACT_APP_EMAILJS_SERVICE_ID
vercel env add REACT_APP_EMAILJS_TEMPLATE_ID
vercel env add REACT_APP_EMAILJS_PUBLIC_KEY

# Hoặc thêm tất cả cùng lúc từ file
vercel env pull .env.local
```

### Bước 3: Deploy Lên Vercel

**Cách 1: Qua GitHub Integration (Khuyến Nghị)**

1. Push code lên GitHub repository
2. Vào Vercel Dashboard → **Add New Project**
3. Import repository từ GitHub
4. Vercel sẽ tự động detect React app
5. Trong phần **Environment Variables**, thêm các biến đã cấu hình ở Bước 2
6. Nhấn **Deploy**

**Cách 2: Qua Vercel CLI**

```bash
# Deploy
vercel

# Deploy production
vercel --prod
```

### Bước 4: Kiểm Tra Sau Khi Deploy

1. Sau khi deploy xong, vào **Settings** → **Environment Variables** trên Vercel
2. Kiểm tra các biến đã được thêm đúng chưa
3. Vào **Deployments** → chọn deployment mới nhất → **View Function Logs** để xem logs
4. Test form trên production để đảm bảo EmailJS hoạt động

### ⚠️ Lưu Ý Quan Trọng

1. **KHÔNG BAO GIỜ** commit file `.env.local` hoặc `.env` lên git
2. **KHÔNG BAO GIỜ** hardcode các giá trị này trong source code
3. Vercel sẽ tự động inject các biến môi trường vào build process
4. Các biến môi trường chỉ có thể truy cập ở phía client với tiền tố `REACT_APP_`
5. Sau khi thêm environment variables trên Vercel, cần **redeploy** để áp dụng thay đổi

### 🔐 Bảo Mật Bổ Sung Trên Vercel

1. **Sử dụng Environment Variables riêng cho từng môi trường:**
   - Production: Giá trị thật
   - Preview: Giá trị test
   - Development: Giá trị local

2. **Kiểm tra lại sau mỗi lần deploy:**
   - Xem logs để đảm bảo không có lỗi
   - Test các chức năng sử dụng environment variables

3. **Rotate keys định kỳ:**
   - Thay đổi keys sau một khoảng thời gian nhất định
   - Cập nhật trên cả Vercel và EmailJS

### 📝 Checklist Deploy Vercel

- [ ] File `.env.local` đã có trong `.gitignore`
- [ ] Đã thêm tất cả environment variables trên Vercel Dashboard
- [ ] Đã chọn đúng environment (Production/Preview/Development)
- [ ] Đã redeploy sau khi thêm environment variables
- [ ] Đã test form trên production
- [ ] Đã kiểm tra logs không có lỗi
- [ ] Đã xác nhận không có thông tin nhạy cảm trong source code

