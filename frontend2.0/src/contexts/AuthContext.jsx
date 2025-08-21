import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../modules/auth/services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userString = localStorage.getItem('user');
    if (token && userString) {
      try {
        setUser(JSON.parse(userString));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const response = await authService.login(credentials);
    if (response.jwt) {
      localStorage.setItem('authToken', response.jwt);
      localStorage.setItem('user', JSON.stringify(response.usuario));
      setUser(response.usuario);
    }
    return response;
  };

  const register = async (userData) => {
    const response = await authService.register(userData);
    return response;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
  };

  const forgotPassword = async (email) => {
    const response = await authService.forgotPassword(email);
    return response;
  };

  const resetPassword = async (token, newPassword) => {
    const response = await authService.resetPassword(token, newPassword);
    return response;
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};