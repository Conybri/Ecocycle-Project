import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import Comunidad from "./pages/Comunidad";
import Blog from "./pages/Blog";
import Empresas from "./pages/Empresas";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import Profile from "./pages/Profile";
import LogoutModal from "./components/layout/LogoutModal"; // Importa el modal

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <Navbar setShowLogoutModal={setShowLogoutModal} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      {/* Renderiza el modal aquí, fuera del Navbar, y pásale el estado y la función para cerrarlo */}
      <LogoutModal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      />
    </>
  );
}

export default App;
