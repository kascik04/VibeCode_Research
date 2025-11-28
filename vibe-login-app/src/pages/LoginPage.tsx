import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/authApi';
import { LoginRequestDto, LoginErrorResponse } from '../types/auth';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null); // Reset error state
        setLoading(true); // Step 2: Hiển thị trạng thái loading khi gửi request

        // Step 3: FE gửi credentials lên API
        const credentials: LoginRequestDto = { email, password };
        try {
            const response = await login(credentials);
            // Step 4: Xử lý response thành công
            if ('accessToken' in response) {
                localStorage.setItem('accessToken', response.accessToken); // Lưu token
                navigate('/dashboard'); // Redirect đến dashboard
            } else {
                // Step 5: Xử lý lỗi từ server
                setError(response.message); // Hiển thị thông báo lỗi
                setPassword(''); // Xoá trường mật khẩu
            }
        } catch (err) {
            // Step 6: Xử lý lỗi không mong muốn
            setError('Đã xảy ra lỗi, vui lòng thử lại sau.');
        } finally {
            setLoading(false); // Bỏ trạng thái loading
        }
    };

    return (
        <div>
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hiển thị thông báo lỗi */}
                <button type="submit" disabled={loading}>
                    {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;