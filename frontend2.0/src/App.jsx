import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop"; // Import the new component

import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import Comunidad from "./pages/Comunidad";
import Blog from "./pages/Blog";
import Empresas from "./pages/Empresas";
import Login from "./auth/Login"; // Correct import for Login
import Signup from "./auth/Signup"; // Import for Signup
import Profile from "./pages/Profile"; // Import for Profile
import ForgotPassword from "./auth/ForgotPassword"; // Import for ForgotPassword
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/common/ScrollToTopButton"; // Import the new component
import "./styles/App.css";

// Componentes temporales para las páginas faltantes
const ComoFunciona = () => (
  <div style={{ padding: "100px 20px", textAlign: "center" }}>
    <h1>¿Cómo Funciona?</h1>
    <p>Esta página estará disponible pronto. Por ahora, puedes ver la información en la página principal.</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Add the ScrollToTopButton component here */}
    </Router>
  );
}

export default App;
