// LogoutModal.jsx

"use client";

import React from "react";
// Importaciones de los hooks de contexto reales
import { useAuth } from "../../../../contexts/AuthContext";
import { useTheme } from "../../../../contexts/useTheme";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const LogoutModal = ({ show, onClose }) => {
  // Ahora se utilizan los hooks reales
  const { logout } = useAuth();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  // Función para manejar la acción de cerrar sesión
  const handleConfirmLogout = () => {
    // La función logout del contexto se llama y la sesión se cierra correctamente
    logout();
    // Se cierra el modal
    onClose();
    // Se redirige al usuario a la página de inicio de sesión o a la página de inicio
    navigate("/");
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1001] flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50"></div>

      {/* Contenido del modal */}
      <div
        className={`relative z-[1002] w-11/12 max-w-sm rounded-xl shadow-2xl p-8 transform transition-all duration-300 scale-100 opacity-100 ${
          isDarkMode
            ? "bg-gray-800 border border-gray-600"
            : "bg-white border border-gray-200"
        }`}
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-red-500 rounded-full text-white">
            <LogOut className="w-8 h-8" />
          </div>
        </div>
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
            className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-red-700 shadow-md"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
