import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import Logo from "../../assets/img/Logo.webp";

const Navbar = ({ setShowLogoutModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const userMenuRef = useRef(null);

  // Efecto para manejar el cambio de color al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto para cerrar el menú de usuario al hacer clic fuera de él
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
        isMobile
          ? "flex flex-col gap-4"
          : "hidden lg:flex items-center gap-4 xl:gap-8"
      }
    >
      {navLinks.map((link) => (
        <Link
          key={link.text}
          to={link.to}
          onClick={link.action}
          className={`font-semibold transition-colors rounded-md ${
            isScrolled
              ? "text-sm lg:text-base p-2"
              : "text-base lg:text-lg p-2 lg:p-3"
          } ${
            location.pathname === link.to
              ? "text-green-600 bg-green-50/80"
              : "text-gray-600 hover:text-green-600 hover:bg-green-50/50"
          }`}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-b from-white/95 via-white/75 to-transparent backdrop-blur-[1px]"
      } ${isScrolled ? "h-16 sm:h-20 lg:h-24" : "h-20 sm:h-24 lg:h-32"}`}
    >
      <div
        className={`container mx-auto px-4 flex justify-between items-center h-full transition-all duration-500`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="EcoCycle Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "h-12 sm:h-16 lg:h-20" : "h-16 sm:h-20 lg:h-24"
            }`}
          />
        </Link>

        <NavLinksComponent />

        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="px-6 py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md"
              >
                {user.nombre}
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 py-1 border border-gray-100">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <button
                    onClick={() => {
                      setShowLogoutModal(true);
                      setIsUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
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
                className="text-xs sm:text-sm lg:text-base font-semibold text-green-600 hover:text-green-700 transition-colors px-1.5 py-1"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="text-xs sm:text-sm lg:text-base px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-transform transform hover:scale-105 min-w-fit"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>

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

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm px-4 pb-4">
          <NavLinksComponent isMobile />
          <div className="pt-4 mt-4 border-t border-gray-200 flex flex-col gap-4">
            {user ? (
              <div className="flex flex-col gap-4 items-center">
                <Link
                  to="/profile"
                  className="w-fit text-center font-semibold text-green-600 p-2 rounded-md hover:bg-green-100 transition-colors"
                >
                  Perfil
                </Link>
                <button
                  onClick={() => {
                    setShowLogoutModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-fit text-center px-6 py-2 bg-red-500 text-white font-bold rounded-full hover:bg-red-600"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mx-auto max-w-[140px] text-center font-semibold text-green-600 p-1.5 text-sm rounded-md hover:bg-green-100 transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="mx-auto max-w-[140px] text-center px-3 py-1.5 text-sm bg-green-600 text-white font-bold rounded-full hover:bg-green-700"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
