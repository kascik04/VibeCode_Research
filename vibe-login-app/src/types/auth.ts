// src/types/auth.ts

export interface LoginRequestDto {
    email: string;
    password: string;
}

export interface LoginSuccessResponse {
    accessToken: string;
    refreshToken?: string;
    user: {
        id: string;
        email: string;
        fullName: string;
    };
}

export interface LoginErrorResponse {
    errorCode: 'INVALID_CREDENTIALS' | 'USER_INACTIVE' | 'TOO_MANY_ATTEMPTS' | 'UNKNOWN_ERROR';
    message: string;
}

export interface UserInfo {
    id: string;
    email: string;
    fullName: string;
}