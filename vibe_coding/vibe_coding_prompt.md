Bạn là Senior Developer.

Dựa trên toàn bộ thông tin tôi cung cấp bên dưới, hãy viết code hoàn chỉnh để thực hiện đúng theo sơ đồ luồng đăng nhập.

=== INPUT START ===

1. Sơ đồ luồng:
Actor: Người dùng truy cập trang đăng nhập, nhập email/mật khẩu.

- Login Page (FE): Hiển thị form, validate input, gửi credentials (JSON) lên Server API, hiển thị trạng thái loading, nhận kết quả, xử lý redirect hoặc hiển thị lỗi.

- Server API: Nhận request, kiểm tra thông tin đăng nhập, xác thực với DB, trả về token nếu thành công hoặc lỗi nếu thất bại.

- Database: Lưu thông tin user, kiểm tra email, mật khẩu, trạng thái tài khoản, số lần đăng nhập sai.

2. Dữ liệu (Models/DB/Interfaces):
- Bảng users với các trường: id, email, password_hash, full_name, is_active, failed_login_attempts, created_at, updated_at.

- DTO: LoginRequestDto, LoginSuccessResponse, LoginErrorResponse.
- Entity User (TypeORM).

3. API liên quan:
- POST /auth/login
Request: LoginRequestDto
Response: 200 OK (LoginSuccessResponse), 401/423/403 (LoginErrorResponse)

4. Các function hiện có:
- verifyPassword(plainPassword, passwordHash)
- generateAccessToken(user)
- increaseFailedLoginAttempts(user)
- resetFailedLoginAttempts(user)

5. Công nghệ/Frameworks bắt buộc:
- Backend: NestJS, TypeORM, PostgreSQL, JWT
- Frontend: React, Axios, React Router
=== INPUT END ===

=== OUTPUT REQUIREMENTS ===

1. Sinh code hoàn chỉnh cho flow đăng nhập, mapping từng bước code ↔ step trong sơ đồ (comment rõ ràng).
2. Đặt tên biến rõ nghĩa, thêm comment giải thích từng bước.
3. Xử lý đầy đủ các trường hợp lỗi (validate input, user không tồn tại, sai mật khẩu, user bị khóa, quá số lần thử).
4. Tách file/module theo best practice NestJS (controller, service, module, entity, dto).
5. Ví dụ code React FE cho form login, gọi API, xử lý redirect/error.
6. Liệt kê rõ các endpoint backend mà frontend sẽ gọi.
7. Gợi ý test cases (unit test cho AuthService, e2e test cho /auth/login) và checklist review cuối cùng.

Hãy output theo format:

CODE
[code]

GIẢI THÍCH LOGIC
[text]

CHECKLIST REVIEW
[bullet list]

TEST CASE GỢI Ý
[list]

=== END ===