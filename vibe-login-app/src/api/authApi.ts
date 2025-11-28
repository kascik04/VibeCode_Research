// src/api/authApi.ts

import axios from 'axios';
import { LoginRequestDto, LoginSuccessResponse, LoginErrorResponse, UserInfo } from '../types/auth';

// Define the base URL for the API
const API_BASE_URL = '/api/auth';

// Function to log in the user
export const login = async (credentials: LoginRequestDto): Promise<LoginSuccessResponse | LoginErrorResponse> => {
    try {
        const response = await axios.post<LoginSuccessResponse>(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        // Handle error response
        return error.response?.data as LoginErrorResponse;
    }
};

// Function to get user information
export const getMe = async (token: string): Promise<UserInfo | LoginErrorResponse> => {
    try {
        const response = await axios.get<UserInfo>(`${API_BASE_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        // Handle error response
        return error.response?.data as LoginErrorResponse;
    }
};

// Function to log out the user
export const logout = async (token: string): Promise<{ success: boolean }> => {
    try {
        const response = await axios.post<{ success: boolean }>(`${API_BASE_URL}/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        // Handle error response
        throw new Error('Logout failed');
    }
};

// Function to refresh the access token
export const refreshToken = async (refreshToken: string): Promise<{ accessToken: string }> => {
    try {
        const response = await axios.post<{ accessToken: string }>(`${API_BASE_URL}/refresh`, { refreshToken });
        return response.data;
    } catch (error) {
        // Handle error response
        throw new Error('Token refresh failed');
    }
};