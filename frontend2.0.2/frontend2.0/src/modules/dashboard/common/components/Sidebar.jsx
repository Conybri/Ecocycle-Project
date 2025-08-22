"use client";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { useTheme } from "../../../../contexts/useTheme";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Store,
  User,
  X,
  Leaf,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    roles: ["ROLE_ADMIN", "ROLE_USER"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Productos",
    icon: Package,
    path: "/dashboard/products",
    roles: ["ROLE_ADMIN"],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Usuarios",
    icon: Users,
    path: "/dashboard/users",
    roles: ["ROLE_ADMIN"],
    color: "from-lime-500 to-lime-600",
  },
  {
    title: "Órdenes",
    icon: ShoppingCart,
    path: "/dashboard/orders",
    roles: ["ROLE_ADMIN"],
    color: "from-orange-400 to-orange-500",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/dashboard/analytics",
    roles: ["ROLE_ADMIN"],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Configuración",
    icon: Settings,
    path: "/dashboard/settings",
    roles: ["ROLE_ADMIN"],
    color: "from-gray-500 to-gray-600",
  },
  {
    title: "Tienda",
    icon: Store,
    path: "/dashboard/store",
    roles: ["ROLE_USER"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Mis Órdenes",
    icon: ShoppingCart,
    path: "/dashboard/my-orders",
    roles: ["ROLE_USER"],
    color: "from-orange-400 to-orange-500",
  },
  {
    title: "Mi Perfil",
    icon: User,
    path: "/dashboard/profile",
    roles: ["ROLE_ADMIN", "ROLE_USER"],
    color: "from-indigo-500 to-indigo-600",
  },
];

function Sidebar({ isOpen, onClose }) {
  const { user } = useAuth();
  const { isDarkMode } = useTheme();
  const location = useLocation();

  const filteredMenuItems = menuItems.filter((item) =>
    item.roles.includes(user?.role)
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 backdrop-blur-xl border-r shadow-2xl ${
          isDarkMode
            ? "bg-gray-900/95 border-gray-700/50"
            : "bg-gradient-to-b from-white via-green-50/30 to-blue-50/30 border-green-200/50"
        }`}
      >
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo */}
          <div
            className={`flex items-center h-20 px-8 border-b bg-gradient-to-r from-[#30BF6E] to-[#8CBF3F] shadow-lg ${
              isDarkMode ? "border-gray-700/50" : "border-green-200/30"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Leaf className="w-8 h-8 text-white drop-shadow-lg" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white drop-shadow-md">
                  EcoCommerce
                </h1>
                <p className="text-xs text-green-100 font-medium">
                  Transformando el futuro
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 pb-6 space-y-2 overflow-y-auto pt-5">
            <p
              className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Navegación Principal
            </p>
            {filteredMenuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isActive
                      ? "bg-gradient-to-r from-[#30BF6E] to-[#8CBF3F] text-white shadow-lg scale-105"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-800/50 hover:text-gray-100"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-gray-900"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: "slideInLeft 0.5s ease-out forwards",
                  }}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl mr-4 transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 backdrop-blur-sm"
                        : `bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110`
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="flex-1">{item.title}</span>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-white/80" />
                  )}

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full shadow-lg"></div>
                  )}

                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        : "bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    }`}
                  ></div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div
            className={`p-6 border-t ${
              isDarkMode ? "border-gray-700/50" : "border-green-200/30"
            }`}
          >
            <div
              className={`rounded-2xl p-4 text-center border ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#F2A341]/20 to-[#F28241]/20 border-gray-600/50"
                  : "bg-gradient-to-r from-[#F2A341]/10 to-[#F28241]/10 border-orange-200/50"
              }`}
            >
              <Leaf className="w-8 h-8 text-[#30BF6E] mx-auto mb-2" />
              <p
                className={`text-xs font-semibold mb-1 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Impacto Ambiental
              </p>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                2.5M kg CO₂ evitados
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 backdrop-blur-xl border-r shadow-2xl transform transition-all duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isDarkMode
            ? "bg-gray-900/95 border-gray-700/50"
            : "bg-gradient-to-b from-white via-green-50/50 to-blue-50/50 border-green-200/50"
        }`}
      >
        <div className="flex flex-col flex-1 min-h-0">
          {/* Header with close button */}
          <div
            className={`flex items-center justify-between h-20 px-6 border-b bg-gradient-to-r from-[#30BF6E] to-[#8CBF3F] ${
              isDarkMode ? "border-gray-700/50" : "border-green-200/30"
            }`}
          >
            <div className="flex items-center space-x-3">
              <Leaf className="w-8 h-8 text-white drop-shadow-lg" />
              <div>
                <h1 className="text-xl font-bold text-white drop-shadow-md">
                  EcoCommerce
                </h1>
                <p className="text-xs text-green-100">
                  Transformando el futuro
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-6">
            <div
              className={`rounded-2xl p-4 border ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#1F82BF]/20 to-[#30BF6E]/20 border-gray-600/50"
                  : "bg-gradient-to-r from-[#1F82BF]/10 to-[#30BF6E]/10 border-green-200/50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={user?.avatar || "/diverse-user-avatars.png"}
                  alt={user?.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                />
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {user?.name}
                  </p>
                  <p
                    className={`text-xs ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {user?.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 pb-6 space-y-2 overflow-y-auto">
            {filteredMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "bg-gradient-to-r from-[#30BF6E] to-[#8CBF3F] text-white shadow-lg"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-800/50 hover:text-gray-100"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-gray-900"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl mr-4 transition-all duration-300 ${
                      isActive
                        ? "bg-white/20"
                        : `bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl`
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default Sidebar;
