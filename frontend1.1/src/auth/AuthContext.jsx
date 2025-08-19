import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginUser, registerUser } from '../services/api';

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
    const response = await loginUser(credentials);
    if (response.jwt) {
      localStorage.setItem('authToken', response.jwt);
      localStorage.setItem('user', JSON.stringify(response.usuario));
      setUser(response.usuario);
    }
    return response;
  };

  const register = async (userData) => {
    const response = await registerUser(userData);
    // Assuming the register endpoint does not automatically log the user in
    return response;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
