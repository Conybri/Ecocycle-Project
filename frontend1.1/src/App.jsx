import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

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
import Dashboard from './pages/Dashboard'; // Importa el nuevo dashboard
import ProtectedRoute from './components/ProtectedRoute'; // Importa el componente de ruta protegida

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  
  // Verificar si estamos en el dashboard
  const isDashboard = location.pathname === '/dashboard';

  return (
    <>
      {/* Solo mostrar Navbar si NO estamos en el dashboard */}
      {!isDashboard && <Navbar />}
      
      <main className={isDashboard ? "" : "pt-20 sm:pt-24 lg:pt-32"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* La página de perfil ahora vive en la ruta /dashboard y está protegida */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      
      {/* Solo mostrar Footer si NO estamos en el dashboard */}
      {!isDashboard && <Footer />}
      
      <ScrollToTop />
    </>
  );
}

export default App;