Bạn là Senior Developer.

Mục tiêu: Viết mã front‑end hoàn chỉnh cho tính năng ĐĂNG NHẬP dựa trên sơ đồ luồng và contract API mà tôi cung cấp. Bạn không viết backend; chỉ cần gọi các endpoint theo đúng contract.

=== INPUT START ===

1. Sơ đồ luồng đăng nhập:
- Người dùng (User) truy cập trang đăng nhập (/login), nhập email và mật khẩu.
- Login Page (FE) hiển thị form, validate input (định dạng email, mật khẩu không rỗng), hiển thị trạng thái loading khi gửi request.
- Login Page gửi credentials (JSON) lên Server API.
- Server API kiểm tra thông tin đăng nhập với Database, trả về token nếu thành công hoặc trả về lỗi nếu thất bại.
- FE nhận kết quả:
  - Nếu thành công: lưu token, redirect sang trang dashboard (/dashboard).
  - Nếu thất bại: hiển thị thông báo lỗi, xoá trường mật khẩu, cho người dùng nhập lại.

2. Dữ liệu (Models/DB/Interfaces) – tham khảo cho contract:
- Bảng `users` gồm: id, email, password_hash, full_name, is_active, failed_login_attempts, created_at, updated_at.
- DTO cho login:
  - `LoginRequestDto` { email: string; password: string }
  - `LoginSuccessResponse` { accessToken: string; refreshToken?: string; user: { id, email, fullName } }
  - `LoginErrorResponse` { errorCode: 'INVALID_CREDENTIALS' | 'USER_INACTIVE' | 'TOO_MANY_ATTEMPTS' | 'UNKNOWN_ERROR'; message: string }

3. API liên quan (endpoint giả định backend):
- **POST /api/auth/login**
  - Request: `LoginRequestDto`
  - Response success (HTTP 200): `LoginSuccessResponse`
  - Response error (HTTP 400/401/403/423): `LoginErrorResponse`
- **GET /api/auth/me**
  - Header: `Authorization: Bearer <ACCESS_TOKEN>`
  - Response success (HTTP 200): `{ id, email, fullName }`
  - Response error (HTTP 401): `{ errorCode: 'UNAUTHORIZED', message: 'Token không hợp lệ hoặc đã hết hạn' }`
- **POST /api/auth/logout** (tùy chọn): Header `Authorization: Bearer <ACCESS_TOKEN>`, body rỗng, trả về `{ success: true }`.
- **POST /api/auth/refresh** (tùy chọn): body `{ refreshToken }`, trả về `{ accessToken }`.

4. Các function/backend hiện có (tham khảo):
- verifyPassword(plainPassword, passwordHash)
- generateAccessToken(user)
- increaseFailedLoginAttempts(user)
- resetFailedLoginAttempts(user)

5. Công nghệ/Frameworks bắt buộc cho frontend:
- React + TypeScript
- React Router v6
- Axios để gọi API
- Có thể dùng React Hook Form hoặc tự quản lý state
- Lưu accessToken tạm vào localStorage hoặc memory.

=== INPUT END ===

=== OUTPUT REQUIREMENTS ===
1. Sinh **mã front‑end hoàn chỉnh** theo đúng sơ đồ đăng nhập:
   - Tạo component/form LoginPage với validation, loading state, xử lý submit.
   - Gọi đúng endpoint `/api/auth/login`, nhận và xử lý response.
   - Sau login thành công: lưu token, redirect đến `/dashboard`, gọi `/api/auth/me` để lấy user info (nếu cần).
   - Thêm route bảo vệ (ProtectedRoute) để chặn truy cập khi chưa đăng nhập.
2. Tên biến, hàm, component rõ nghĩa; thêm comment giải thích từng bước và mapping với step trong sơ đồ (ví dụ `// Step 3: FE gửi credentials lên API`).
3. Xử lý đầy đủ các trường hợp lỗi: validate input, email/mật khẩu không đúng, tài khoản bị khóa, quá số lần thử, token hết hạn.
4. Tách file/module theo best practice React + TS:
   - `api/authApi.ts` chứa hàm gọi login, me, logout, refresh.
   - `pages/LoginPage.tsx` chứa giao diện và xử lý login.
   - `routes/ProtectedRoute.tsx` để kiểm tra token và redirect.
   - (Tuỳ chọn) `context/AuthContext` hoặc custom hook để quản lý trạng thái auth.
5. Liệt kê rõ **tất cả endpoint** mà FE gọi và contract của chúng trong phần giải thích.
6. Gợi ý test cases (unit test cho authApi, component LoginPage, ProtectedRoute) và checklist review cuối cùng.

Hãy output theo format sau:

## CODE
[code]

## GIẢI THÍCH LOGIC
[giải thích ngắn gọn về flow xử lý, mapping step sơ đồ ↔ code; liệt kê endpoint đã dùng; nêu rõ mọi giả định]

## CHECKLIST REVIEW
- [ ] Form login hiển thị và validate đúng?
- [ ] Gọi đúng endpoint `/api/auth/login`?
- [ ] Xử lý success và error đầy đủ?
- [ ] Lưu token và redirect hợp lý?
- [ ] Có ProtectedRoute kiểm tra token?
- [ ] Comment/mapping step rõ ràng?
- [ ] Tách file/module chuẩn React?

## TEST CASE GỢI Ý
- Đăng nhập thành công với email/mật khẩu hợp lệ → nhận token, redirect /dashboard.
- Đăng nhập sai mật khẩu → hiển thị lỗi, xoá field password.
- Đăng nhập khi tài khoản bị khóa (`USER_INACTIVE`) → hiển thị thông báo tương ứng.
- Vào trang /dashboard khi chưa đăng nhập → bị redirect về /login.
- Giả lập token hết hạn khi gọi `/api/auth/me` → clear token và redirect /login.
- Kiểm tra validation client-side (email sai định dạng, mật khẩu quá ngắn) không gửi request.

=== END ===
