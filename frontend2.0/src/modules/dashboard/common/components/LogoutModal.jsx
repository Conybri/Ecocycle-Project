// LogoutModal.jsx

"use client";

import React from "react";
// Se asume que el contexto de autenticación existe
// import { useAuth } from "../../../../contexts/AuthContext";
// Se asume que el contexto de tema existe
// import { useTheme } from "../../../../contexts/useTheme";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ show, onClose }) => {
  // Simular los hooks de contexto para que el componente sea funcional de forma independiente
  const useAuth = () => ({
    logout: () => console.log("Logout triggered"),
  });
  const useTheme = () => ({
    isDarkMode: false,
  });

  const { logout } = useAuth();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  // Función para manejar la acción de cerrar sesión
  const handleConfirmLogout = () => {
    logout();
    onClose();
    navigate("/");
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1001] flex items-center justify-center">
      {/* Overlay - Esta capa es semitransparente, pero no tiene blur */}
      <div className="fixed inset-0 bg-black/50"></div>

      {/* Contenido del modal - Este div es el que está por encima de todo */}
      <div
        className={`relative z-[1002] w-11/12 max-w-sm rounded-xl shadow-2xl p-8 transform transition-all duration-300 scale-100 opacity-100 ${
          isDarkMode
            ? "bg-gray-800 border border-gray-600"
            : "bg-white border border-gray-200"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-4 text-center ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          ¿Quieres cerrar sesión?
        </h3>
        <p
          className={`mb-6 text-center ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Tu sesión se cerrará y volverás a la pantalla de inicio.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 ${
              isDarkMode
                ? "bg-gray-600 text-gray-100 hover:bg-gray-500"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirmLogout}
            className="px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 font-bold transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
