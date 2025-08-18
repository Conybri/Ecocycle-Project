import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import Comunidad from "./pages/Comunidad";
import Blog from "./pages/Blog";
import Empresas from "./pages/Empresas";
import Login from "./auth/Login"; // Correct import for Login
import Signup from "./auth/Signup"; // Import for Signup
import Footer from "./components/layout/Footer";
import "./App.css";

// Componentes temporales para las páginas faltantes
const ComoFunciona = () => (
  <div style={{ padding: "100px 20px", textAlign: "center" }}>
    <h1>¿Cómo Funciona?</h1>
    <p>Esta página estará disponible pronto. Por ahora, puedes ver la información en la página principal.</p>
  </div>
);

const Perfil = () => (
  <div style={{ padding: "100px 20px", textAlign: "center" }}>
    <h1>Mi Perfil</h1>
    <p>Gestiona tu cuenta y ve tus estadísticas de reciclaje.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
