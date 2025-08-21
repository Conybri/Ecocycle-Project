import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Logo from "../../assets/img/Logo.webp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e, targetId) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false); // Cerrar menú móvil también
  };

  const navLinks = [
    {
      to: "/",
      text: "Inicio",
      action: (e) => handleNavClick(e, ".hero-section"),
    },
    {
      to: "/",
      text: "Cómo Funciona",
      action: (e) => handleNavClick(e, "#how-it-works"),
    },
    { to: "/catalogo", text: "Catálogo" },
    { to: "/comunidad", text: "Comunidad" },
    { to: "/blog", text: "Blog" },
  ];

  const NavLinksComponent = ({ isMobile }) => (
    <nav
      className={
        isMobile ? "flex flex-col gap-4" : "hidden lg:flex items-center gap-8"
      }
    >
      {navLinks.map((link) => (
        <Link
          key={link.text}
          to={link.to}
          onClick={link.action}
          className="font-semibold text-gray-600 hover:text-green-600 transition-colors p-2 rounded-md"
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/50 shadow-md backdrop-blur-sm"
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <Link to="/">
          <img src={Logo} alt="EcoCycle Logo" className="h-25" />
        </Link>

        <NavLinksComponent />

        {/* Menú de escritorio */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="px-6 py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                {user.nombre || user.email || "Usuario"}
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <button
                    onClick={() => {
                      setShowLogoutModal(true);
                      setIsUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>

        {/* Botón menú móvil */}
        <button
          className="lg:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm px-4 pb-4">
          <NavLinksComponent isMobile />
          <div className="pt-4 mt-4 border-t border-gray-200 flex flex-col gap-4">
            {user ? (
              <div className="flex flex-col gap-4">
                {/* Mostrar nombre del usuario en móvil */}
                <div className="text-center py-2 px-4 bg-green-50 rounded-lg">
                  <span className="text-green-700 font-semibold">
                    👋 Hola, {user.nombre || user.email || "Usuario"}
                  </span>
                </div>
                <Link
                  to="/dashboard"
                  className="w-full text-center font-semibold text-green-600 p-2 rounded-md hover:bg-green-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="w-full text-center font-semibold text-green-600 p-2 rounded-md hover:bg-green-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Perfil
                </Link>
                <button
                  onClick={() => {
                    setShowLogoutModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-center px-6 py-2 bg-red-500 text-white font-bold rounded-full hover:bg-red-600"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full text-center font-semibold text-green-600 p-2 rounded-md hover:bg-green-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center px-6 py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal de confirmación de logout */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
          <div className="w-11/12 max-w-sm bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-4">
              ¿Quieres cerrar sesión?
            </h3>
            <p className="text-gray-600 mb-6">
              Tu sesión se cerrará y volverás a la pantalla de inicio de sesión.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 font-semibold"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
