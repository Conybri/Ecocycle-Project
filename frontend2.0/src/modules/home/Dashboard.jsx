import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardContent from '../dashboard/components/dashboard-content';
import '../dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // TODOS LOS HOOKS DEBEN IR ANTES DE CUALQUIER RETURN CONDICIONAL
  useEffect(() => {
    const savedTheme = localStorage.getItem("dashboard-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Redirigir si no está autenticado
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Acceso Denegado
          </h2>
          <p className="text-gray-600 mb-4">
            Necesitas iniciar sesión para acceder al dashboard.
          </p>
          <a 
            href="/login" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    );
  }

  // Adaptar el usuario del contexto principal al formato del dashboard
  const dashboardUser = {
    id: user.id,
    email: user.email,
    name: user.nombre || user.name || 'Usuario',
    role: user.tipo === 'admin' ? 'ADMIN' : 'USUARIO',
    avatar: "/diverse-user-avatars.png",
    permissions: user.tipo === 'admin' ? ["read", "write", "delete", "admin"] : ["read"],
    loginTime: new Date().toISOString(),
  };

  const handleSectionChange = (newSection) => {
    // Validate if user has access to the requested section
    const adminSections = ["products", "users", "orders", "analytics", "payments", "settings"];
    const userSections = ["dashboard", "my-orders", "profile", "store"];

    if (dashboardUser.role === "ADMIN") {
      // Admin can access all sections
      setActiveSection(newSection);
    } else if (dashboardUser.role === "USUARIO") {
      // Users can only access user sections
      if (userSections.includes(newSection)) {
        setActiveSection(newSection);
      } else {
        console.warn(`Access denied: User role cannot access ${newSection}`);
        // Redirect to dashboard if trying to access restricted section
        setActiveSection("dashboard");
      }
    } else {
      // Unknown role, redirect to dashboard
      setActiveSection("dashboard");
    }
  };

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dashboard-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dashboard-theme", "light");
    }
  };

  const hasRole = (requiredRole) => {
    if (!dashboardUser) return false;
    if (requiredRole === "USUARIO") return true; // Todos pueden acceder a funciones de usuario
    return dashboardUser.role === requiredRole;
  };

  return (
    <div className="dashboard-wrapper min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar */}
        <DashboardSidebar
          userRole={dashboardUser.role}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          hasRole={hasRole}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <DashboardHeader 
            user={dashboardUser} 
            onThemeToggle={handleThemeToggle} 
            isDark={isDark}
            onLogout={logout}
          />

          {/* Content Area */}
          <main className="flex-1 overflow-y-auto">
            <div className="p-6">
              <DashboardContent
                activeSection={activeSection}
                userRole={dashboardUser.role}
                hasRole={hasRole}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}