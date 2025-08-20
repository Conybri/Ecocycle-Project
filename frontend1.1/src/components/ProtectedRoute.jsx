import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Muestra un indicador de carga mientras se verifica el estado de autenticación
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Cargando...</div>;
  }

  // Si no hay usuario después de cargar, redirige al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si hay un usuario, muestra el contenido protegido
  return children;
};

export default ProtectedRoute;
