import {
  Home,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Store,
  CreditCard,
  UserCheck,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { cn } from "../../lib/utils";
import { useAuth } from "../../auth/AuthContext";
import Logo from "../../assets/img/Logo.webp";

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
    {
      icon: Store,
      label: "Tienda",
      key: "store",
      description: "Explorar productos",
    },
  ],
};

const validateUserAccess = (userRole, sectionKey) => {
  const allowedSections = menuItems[userRole]?.map((item) => item.key) || [];
  return allowedSections.includes(sectionKey);
};

export default function Sidebar({
  userRole = "ADMIN",
  activeSection,
  onSectionChange,
  collapsed,
  onToggleCollapse,
}) {
  const { hasRole } = useAuth();

  const items = menuItems[userRole] || menuItems.USUARIO;
  const isValidRole = hasRole(userRole);

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
      className={cn(
        "bg-white border-r border-green-200 transition-all duration-300 flex flex-col h-full shadow-sm",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-green-200 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="EcoCycle Logo" className="h-24" />
            {!isValidRole && (
              <AlertTriangle
                className="h-4 w-4 text-red-500"
                title="Rol no válido"
              />
            )}
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          className="text-green-600 hover:bg-green-100"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Role Badge */}
      {!collapsed && (
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <Badge
              variant={userRole === "ADMIN" ? "default" : "secondary"}
              className={cn(
                "flex items-center space-x-1",
                userRole === "ADMIN" && "bg-primary text-primary-foreground",
                userRole === "USUARIO" &&
                  "bg-secondary text-secondary-foreground"
              )}
            >
              <Shield className="h-3 w-3" />
              <span>{userRole}</span>
            </Badge>
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
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200",
                    isActive &&
                      "bg-blue-primary text-white hover:bg-blue-600 shadow-sm",
                    collapsed && "justify-center px-2",
                    !hasAccess && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={() => hasAccess && handleSectionChange(item.key)}
                  disabled={!hasAccess}
                  title={collapsed ? item.label : item.description}
                >
                  <Icon className={cn("h-4 w-4", !collapsed && "mr-3")} />
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
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              © 2025 ECommerce Dashboard
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
              <span>Sesión segura</span>
              <div className="w-1 h-1 bg-green-500 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
