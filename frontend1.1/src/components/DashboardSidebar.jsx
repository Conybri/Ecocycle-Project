import React from "react";
import Logo from "../assets/img/Logo.webp";
import {
  Home,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Shield,
  AlertTriangle,
} from "lucide-react";

const menuItems = {
  ADMIN: [
    {
      icon: Home,
      label: "Dashboard",
      key: "dashboard",
      description: "Resumen general del negocio",
    },
    {
      icon: Package,
      label: "Productos",
      key: "products",
      description: "Gestionar catálogo de productos",
    },
    {
      icon: Users,
      label: "Usuarios",
      key: "users",
      description: "Administrar usuarios del sistema",
    },
    {
      icon: ShoppingCart,
      label: "Órdenes",
      key: "orders",
      description: "Gestionar pedidos y ventas",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      key: "analytics",
      description: "Análisis y reportes",
    },

    {
      icon: Settings,
      label: "Configuración",
      key: "settings",
      description: "Configuración del sistema",
    },
  ],
  USUARIO: [
    {
      icon: Home,
      label: "Dashboard",
      key: "dashboard",
      description: "Mi resumen personal",
    },
    {
      icon: ShoppingCart,
      label: "Mis Órdenes",
      key: "my-orders",
      description: "Historial de pedidos",
    },
    {
      icon: UserCheck,
      label: "Mi Perfil",
      key: "profile",
      description: "Información personal",
    },
  ],
};

const validateUserAccess = (userRole, sectionKey) => {
  const allowedSections = menuItems[userRole]?.map((item) => item.key) || [];
  return allowedSections.includes(sectionKey);
};

export default function DashboardSidebar({
  userRole = "ADMIN",
  activeSection,
  onSectionChange,
  collapsed,
  onToggleCollapse,
  hasRole,
}) {
  const items = menuItems[userRole] || menuItems.USUARIO;
  const isValidRole = hasRole ? hasRole(userRole) : true;

  const handleSectionChange = (sectionKey) => {
    if (validateUserAccess(userRole, sectionKey)) {
      onSectionChange(sectionKey);
    } else {
      console.warn(
        `Access denied to section: ${sectionKey} for role: ${userRole}`
      );
    }
  };

  return (
    <div
      className={`bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-800 border-r border-green-200 dark:border-green-700 transition-all duration-300 flex flex-col h-full shadow-lg ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-green-200 dark:border-green-700 flex items-center justify-between bg-white/50 dark:bg-gray-800/50">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="EcoCycle Logo" className="h-25" />
            {!isValidRole && (
              <AlertTriangle
                className="h-4 w-4 text-red-500"
                title="Rol no válido"
              />
            )}
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-100 dark:hover:bg-green-800 rounded-full transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Role Badge */}
      {!collapsed && (
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <span
              className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold ${
                userRole === "ADMIN"
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200"
              }`}
            >
              <Shield className="h-3 w-3" />
              <span>{userRole}</span>
            </span>
            {isValidRole && (
              <div
                className="w-2 h-2 bg-green-500 rounded-full"
                title="Acceso autorizado"
              />
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-2 overflow-y-auto">
        <ul className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.key;
            const hasAccess = validateUserAccess(userRole, item.key);

            return (
              <li key={item.key}>
                <button
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 font-medium ${
                    collapsed ? "justify-center px-2" : "justify-start"
                  } ${
                    isActive
                      ? "bg-green-600 text-white shadow-lg transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-800 hover:text-green-700 dark:hover:text-green-200"
                  } ${!hasAccess ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => hasAccess && handleSectionChange(item.key)}
                  disabled={!hasAccess}
                  title={collapsed ? item.label : item.description}
                >
                  <Icon className={`h-4 w-4 ${!collapsed ? "mr-3" : ""}`} />
                  {!collapsed && (
                    <div className="flex-1 text-left">
                      <span className="block">{item.label}</span>
                      {isActive && (
                        <span className="text-xs opacity-75 block">
                          {item.description}
                        </span>
                      )}
                    </div>
                  )}
                  {!collapsed && isActive && (
                    <div className="w-2 h-2 bg-current rounded-full ml-2" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 ECommerce Dashboard
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
              <span>Sesión segura</span>
              <div className="w-1 h-1 bg-green-500 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
