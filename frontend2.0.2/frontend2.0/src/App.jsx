import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './contexts/AuthContext';

// Layout components for main site
import Navbar from "./modules/layout/Navbar";
import Footer from "./modules/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Main site pages
import HomePage from "./modules/home/HomePage";
import Catalogo from "./modules/home/Catalogo";
import Comunidad from "./modules/home/Comunidad";
import Blog from "./modules/home/Blog";
import Empresas from "./modules/home/Empresas";

// Importar módulos de auth
import { 
  LoginPage, 
  RegisterPage, 
  ForgotPasswordPage 
} from './modules/auth';

// Dashboard Layout and Pages
import DashboardLayout from "./modules/dashboard/common/components/Layout";
import DashboardPage from "./modules/dashboard/common/pages/DashboardPage";
import AdminDashboardPage from "./modules/dashboard/admin/pages/AdminDashboardPage";
import UserDashboardPage from "./modules/dashboard/user/pages/UserDashboardPage";

// Componente para rutas protegidas por autenticación
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Componente para rutas protegidas por rol
const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

// Componente para rutas públicas (redirige si ya está autenticado)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }
  
  return !isAuthenticated ? children : <Navigate to="/" replace />;
};

// Layout para páginas principales (con Navbar y Footer)
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

function App() {
  return (
    <Routes>
      {/* Rutas públicas principales - con Navbar y Footer */}
      <Route path="/" element={
        <MainLayout>
          <HomePage />
        </MainLayout>
      } />
      <Route path="/catalogo" element={
        <MainLayout>
          <Catalogo />
        </MainLayout>
      } />
      <Route path="/comunidad" element={
        <MainLayout>
          <Comunidad />
        </MainLayout>
      } />
      <Route path="/blog" element={
        <MainLayout>
          <Blog />
        </MainLayout>
      } />
      <Route path="/empresas" element={
        <MainLayout>
          <Empresas />
        </MainLayout>
      } />
      
      {/* Rutas de autenticación - sin layout principal */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } 
      />
      <Route 
        path="/register" 
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } 
      />
      <Route 
        path="/forgot-password" 
        element={
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        } 
      />
      

      
      {/* DASHBOARD ROUTES - Con Layout propio (sin Navbar/Footer) */}
      <Route path="/dashboard/*" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Routes>
              {/* Dashboard principal */}
              <Route index element={<DashboardPage />} />
              
              {/* Dashboard específico para admins */}
              <Route 
                path="admin" 
                element={
                  <RoleProtectedRoute allowedRoles={['admin', 'ADMIN']}>
                    <AdminDashboardPage />
                  </RoleProtectedRoute>
                } 
              />
              
              {/* Dashboard específico para usuarios */}
              <Route 
                path="user" 
                element={
                  <RoleProtectedRoute allowedRoles={['user', 'USER', 'USUARIO']}>
                    <UserDashboardPage />
                  </RoleProtectedRoute>
                } 
              />
              
              {/* Rutas adicionales del dashboard que tengas en el Sidebar */}
              <Route 
                path="products" 
                element={
                  <RoleProtectedRoute allowedRoles={['admin', 'ADMIN']}>
                    <div>Productos Page (Admin)</div>
                  </RoleProtectedRoute>
                } 
              />
              
              <Route 
                path="users" 
                element={
                  <RoleProtectedRoute allowedRoles={['admin', 'ADMIN']}>
                    <div>Usuarios Page (Admin)</div>
                  </RoleProtectedRoute>
                } 
              />
              
              <Route 
                path="orders" 
                element={
                  <RoleProtectedRoute allowedRoles={['admin', 'ADMIN']}>
                    <div>Órdenes Page (Admin)</div>
                  </RoleProtectedRoute>
                } 
              />
              
              <Route 
                path="analytics" 
                element={
                  <RoleProtectedRoute allowedRoles={['admin', 'ADMIN']}>
                    <div>Analytics Page (Admin)</div>
                  </RoleProtectedRoute>
                } 
              />
              
              <Route 
                path="settings" 
                element={
                  <RoleProtectedRoute allowedRoles={['admin', 'ADMIN']}>
                    <div>Settings Page (Admin)</div>
                  </RoleProtectedRoute>
                } 
              />
              
              <Route 
                path="store" 
                element={
                  <RoleProtectedRoute allowedRoles={['user', 'USER', 'USUARIO']}>
                    <div>Tienda Page (User)</div>
                  </RoleProtectedRoute>
                } 
              />
              
              <Route 
                path="my-orders" 
                element={
                  <RoleProtectedRoute allowedRoles={['user', 'USER', 'USUARIO']}>
                    <div>Mis Órdenes Page (User)</div>
                  </RoleProtectedRoute>
                } 
              />
              
              <Route 
                path="profile" 
                element={
                  <RoleProtectedRoute allowedRoles={['admin', 'ADMIN', 'user', 'USER', 'USUARIO']}>
                    <div>Profile Dashboard Page</div>
                  </RoleProtectedRoute>
                } 
              />
              
              {/* Compatibilidad con rutas anteriores */}
              <Route 
                path="clientes" 
                element={<Navigate to="/dashboard/user" replace />} 
              />
            </Routes>
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      {/* Ruta 404 - Página no encontrada */}
      <Route 
        path="*" 
        element={
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-8">Página no encontrada</p>
            <Navigate to="/" replace />
          </div>
        } 
      />
    </Routes>
  );
}

export default App;