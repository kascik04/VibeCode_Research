import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LoginSuccessResponse, LoginErrorResponse, UserInfo } from '../types/auth';
import { login, getMe, logout } from '../api/authApi';

interface AuthContextType {
  user: UserInfo | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  fetchUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response: LoginSuccessResponse | LoginErrorResponse = await login({ email, password });
      if ('accessToken' in response) {
        setToken(response.accessToken);
        setUser(response.user);
        localStorage.setItem('token', response.accessToken); // Save token to localStorage
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const response: UserInfo | LoginErrorResponse = await getMe(token);
      if ('id' in response) {
        setUser(response);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      await logout(token);
      setUser(null);
      setToken(null);
      localStorage.removeItem('token'); // Remove token from localStorage
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, error, loginUser, logoutUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};