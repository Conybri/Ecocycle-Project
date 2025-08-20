import React, { createContext, useState, useContext, useEffect } from 'react';
import apiClient from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userString = localStorage.getItem('user');
    if (token && userString) {
      setUser(JSON.parse(userString));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    if (response.data.jwt) {
      const { jwt, usuario } = response.data;
      localStorage.setItem('authToken', jwt);
      // Solo almacenar datos básicos del usuario, sin información sensible
      const safeUserData = {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        ciudad: usuario.ciudad,
        role: usuario.role || 'USUARIO'
      };
      localStorage.setItem('user', JSON.stringify(safeUserData));
      setUser(safeUserData);
    }
    return response.data;
  };

  const register = async (userData) => {
    return apiClient.post('/auth/register', userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
  };

  const hasRole = (requiredRole) => {
    if (!user) return false;
    if (requiredRole === 'USUARIO') return true; // Todos pueden acceder a funciones de usuario
    return user.role === requiredRole;
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    // Para compatibilidad básica, los ADMIN tienen todos los permisos
    return user.role === 'ADMIN';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading, hasRole, hasPermission, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
