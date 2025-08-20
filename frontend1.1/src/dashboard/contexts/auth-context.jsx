"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

// Mock users database - en producción esto vendría de una API/base de datos
const mockUsers = [
  {
    id: 1,
    email: "admin@ecommerce.com",
    password: "admin123",
    name: "Administrador",
    role: "ADMIN",
    avatar: "/diverse-user-avatars.png",
    permissions: ["read", "write", "delete", "admin"],
  },
  {
    id: 2,
    email: "usuario@ecommerce.com",
    password: "user123",
    name: "Juan Pérez",
    role: "USUARIO",
    avatar: "/diverse-user-avatars.png",
    permissions: ["read"],
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar si hay una sesión guardada al cargar
  useEffect(() => {
    const savedUser = localStorage.getItem("ecommerce_user");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser && parsedUser.id && parsedUser.role) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem("ecommerce_user");
        }
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("ecommerce_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simular llamada a API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const foundUser = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error("Credenciales inválidas");
      }

      const userSession = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        avatar: foundUser.avatar,
        permissions: foundUser.permissions,
        loginTime: new Date().toISOString(),
      };

      setUser(userSession);
      localStorage.setItem("ecommerce_user", JSON.stringify(userSession));

      return { success: true, user: userSession };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ecommerce_user");
    localStorage.removeItem("dashboard-theme");
    document.documentElement.classList.remove("dark");
  };

  const hasRole = (requiredRole) => {
    if (!user) return false;
    if (requiredRole === "USUARIO") return true; // Todos pueden acceder a funciones de usuario
    return user.role === requiredRole;
  };

  const hasPermission = (permission) => {
    if (!user || !user.permissions) return false;
    return (
      user.permissions.includes(permission) ||
      user.permissions.includes("admin")
    );
  };

  const validateSession = () => {
    if (!user) return false;

    try {
      const loginTime = new Date(user.loginTime);
      const now = new Date();
      const hoursDiff = (now - loginTime) / (1000 * 60 * 60);

      // Session expires after 24 hours
      if (hoursDiff > 24) {
        logout();
        return false;
      }

      return true;
    } catch (error) {
      logout();
      return false;
    }
  };

  const value = {
    user,
    login,
    logout,
    hasRole,
    hasPermission,
    validateSession,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}
