import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Navbar.css";
import Logo from "../../assets/img/Logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user, logout } = useAuth();
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

  const handleLogout = () => {
    logout();
    setShowModal(false);
  };

  const handleNavClick = (e, targetId) => {
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
        </nav>

        <div className="nav-buttons">
          {user ? (
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {user.nombre}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/perfil">
                  Perfil
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowModal(true)}>
                  Cerrar Sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="btn btn-primary">
                Registrarse
              </Link>
            </>
          )}
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

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>¿Quieres cerrar sesión?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tu sesión se cerrará y volverás a la pantalla de inicio de sesión.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Navbar;
