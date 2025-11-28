import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC = () => {
    const { token } = useAuth(); // Step 1: Lấy token từ context

    // Step 2: Kiểm tra xem token có tồn tại không
    if (!token) {
        return <Navigate to="/login" replace />; // Step 3: Nếu không có token, redirect về trang đăng nhập
    }

    return <Outlet />; // Step 4: Nếu có token, render các component con
};

export default ProtectedRoute;