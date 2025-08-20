import React from 'react';
import { Bell, Search, User, Moon, Sun, LogOut, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function DashboardHeader({ user, onThemeToggle, isDark, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-white to-green-50 dark:from-gray-800 dark:to-green-900 border-b border-green-200 dark:border-green-700 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex items-center space-x-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input 
              placeholder="Buscar productos, usuarios, órdenes..." 
              className="pl-10 w-full px-3 py-2 border border-green-300 dark:border-green-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-100 dark:hover:bg-green-800 rounded-full transition-colors"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-100 dark:hover:bg-green-800 rounded-full transition-colors">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-green-600 text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
          </button>

          {/* User Menu */}
          <div className="relative group">
            <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition-colors">
              <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                <span className="text-sm">
                  {user?.name?.charAt(0) || "U"}
                </span>
              </div>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name || "Usuario"}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email || "usuario@ejemplo.com"}</p>
                <span className="inline-block mt-1 px-3 py-1 text-xs bg-green-600 text-white font-bold rounded-full shadow-sm">
                  {user?.role || "USUARIO"}
                </span>
              </div>
              <div className="py-2">
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-800 hover:text-green-700 dark:hover:text-green-200 transition-colors">
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </button>
                <button 
                  onClick={handleBackToHome}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-800 hover:text-green-700 dark:hover:text-green-200 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span>Volver a la página</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-800 hover:text-red-700 dark:hover:text-red-200 transition-colors"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}