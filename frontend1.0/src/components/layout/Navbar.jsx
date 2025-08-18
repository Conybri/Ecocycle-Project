import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";
import Logo from "../../assets/img/Logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    // Solo hacer scroll si estamos en la página de inicio
    if (location.pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="nav-brand">
          <span>
            <img src={Logo} alt="EcoCycle Logo" className="logo" />
          </span>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={(e) => handleNavClick(e, ".hero-section")}
          >
            Inicio
          </Link>
          <Link
            to="/"
            className="nav-link"
            onClick={(e) => handleNavClick(e, ".how-it-works-section")}
          >
            Cómo Funciona
          </Link>
          <Link to="/catalogo" className="nav-link">
            Catálogo
          </Link>
          <Link to="/comunidad" className="nav-link">
            Comunidad
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          
          <Link to="/perfil" className="nav-link">
            Perfil
          </Link>
        </nav>

        <div className="nav-buttons">
          <Link to="/login" className="btn btn-outline">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="btn btn-primary">
            Registrarse
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
