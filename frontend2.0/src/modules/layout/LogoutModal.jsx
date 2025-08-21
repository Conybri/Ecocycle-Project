import React from "react";
import { useAuth } from "../../auth/AuthContext";

const LogoutModal = ({ show, onClose }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-11/12 max-w-sm bg-white rounded-xl shadow-2xl border border-gray-200 p-8 transform transition-all duration-300 scale-100 opacity-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          ¿Quieres cerrar sesión?
        </h3>
        <p className="text-gray-700 mb-6 text-center">
          Tu sesión se cerrará y volverás a la pantalla de inicio de sesión.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Cancelar
          </button>
          <button
            onClick={handleLogout}
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
