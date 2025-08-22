// Layout.jsx

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../../../../contexts/useTheme";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LogoutModal from "./LogoutModal"; // Importa el nuevo componente

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoutModalChange = (isOpen) => {
    setIsLogoutModalOpen(isOpen);
  };

  if (!mounted) {
    return (
      <div
        className={`flex h-screen items-center justify-center ${
          isDarkMode
            ? "bg-gray-900 text-gray-100"
            : "bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 text-gray-900"
        }`}
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#30BF6E] to-[#8CBF3F] rounded-2xl flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <p className="font-medium opacity-80">Cargando EcoCommerce...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Contenedor principal con blur condicional */}
      <div
        className={`flex h-screen overflow-hidden ${
          isDarkMode
            ? "bg-gray-900 text-gray-100"
            : "bg-gradient-to-br from-green-50/50 via-blue-50/30 to-purple-50/20 text-gray-900"
        } ${isLogoutModalOpen ? "blur-sm" : ""} transition-all duration-300`}
      >
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-72">
          <Header
            onMenuClick={() => setSidebarOpen(true)}
            onLogoutModalChange={handleLogoutModalChange}
          />

          {/* Page content */}
          <main
            className={`flex-1 overflow-y-auto backdrop-blur-sm ${
              isDarkMode
                ? "bg-gray-900/40"
                : "bg-gradient-to-br from-white/30 via-green-50/20 to-blue-50/20"
            }`}
          >
            <div className="min-h-full">
              {/* Content container */}
              <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Breadcrumb area */}
                <div className="mb-6">
                  <nav className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      EcoCommerce
                    </span>
                    <span className="text-gray-400">/</span>
                    <span className="text-[#30BF6E] font-semibold">
                      Dashboard
                    </span>
                  </nav>
                </div>

                {/* Page content with animations */}
                <div className="animate-slideIn">{children}</div>
              </div>

              {/* Floating action button for mobile */}
              <div className="fixed bottom-6 right-6 lg:hidden">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="w-14 h-14 bg-gradient-to-br from-[#30BF6E] to-[#8CBF3F] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 animate-bounce"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Background decorative elements */}
              <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div
                  className={`${
                    isDarkMode
                      ? "from-gray-700/30 to-gray-600/30"
                      : "from-[#30BF6E]/10 to-[#8CBF3F]/10"
                  } absolute top-20 right-10 w-32 h-32 bg-gradient-to-br rounded-full blur-3xl animate-float`}
                ></div>
                <div
                  className={`${
                    isDarkMode
                      ? "from-gray-700/30 to-gray-600/30"
                      : "from-[#1F82BF]/10 to-[#30BF6E]/10"
                  } absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br rounded-full blur-3xl animate-float-delayed`}
                ></div>
                <div
                  className={`${
                    isDarkMode
                      ? "from-gray-700/20 to-gray-600/20"
                      : "from-[#F2A341]/5 to-[#F28241]/5"
                  } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br rounded-full blur-3xl animate-pulse`}
                ></div>
              </div>
            </div>
          </main>
        </div>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>

      {/* Renderiza el modal de logout FUERA del contenedor que se desenfoca */}
      <LogoutModal
        show={isLogoutModalOpen}
        onClose={() => handleLogoutModalChange(false)}
      />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        * {
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
      `}</style>
    </>
  );
}

export default Layout;
