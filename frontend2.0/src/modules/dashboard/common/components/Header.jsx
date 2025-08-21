"use client"

import { useState } from "react"
import { useAuth } from "../../../../contexts/AuthContext"
import { useTheme } from "../../../../contexts/useTheme"
import { useNavigate } from "react-router-dom"
import { 
  Menu, 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  House, 
  Settings, 
  LogOut, 
  ChevronDown,
  Leaf,
  Trophy,
  Gift,
  Zap
} from "lucide-react"

function Header({ onMenuClick }) {
  const { user, logout } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  // Navigation handlers
  const handleNavigateHome = () => {
    navigate("/")
    setShowUserMenu(false)
  }

  const handleNavigateSettings = () => {
    navigate("/dashboard/settings")
    setShowUserMenu(false)
  }

  const handleNavigateRewards = () => {
    navigate("/dashboard/rewards")
    setShowUserMenu(false)
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const notifications = [
    {
      id: 1,
      title: "¡Nueva recompensa disponible!",
      message: "Has ganado 50 EcoPoints por tu último reciclaje",
      time: "hace 5 min",
      type: "reward",
      unread: true
    },
    {
      id: 2,
      title: "Orden completada",
      message: "Tu orden #1234 ha sido procesada exitosamente",
      time: "hace 1 hora",
      type: "order",
      unread: true
    },
    {
      id: 3,
      title: "Nuevo producto eco-friendly",
      message: "Descubre nuestra nueva línea de productos sostenibles",
      time: "hace 2 horas",
      type: "product",
      unread: false
    }
  ]

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header className={`h-20 flex items-center justify-between px-8 shadow-lg relative z-30 backdrop-blur-xl border-b ${
      isDarkMode 
        ? 'bg-gray-900/95 border-gray-700/50 text-gray-100' 
        : 'bg-gradient-to-r from-white via-green-50/30 to-blue-50/30 border-green-200/50'
    }`}>
      {/* Left side */}
      <div className="flex items-center space-x-6">
        <button 
          onClick={onMenuClick} 
          className="p-3 rounded-2xl bg-gradient-to-br from-[#30BF6E] to-[#8CBF3F] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div className="relative hidden md:block group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#30BF6E]/20 to-[#8CBF3F]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className={`relative rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-gray-800/80 border-gray-600/50' 
              : 'bg-white/80 border-green-200/50'
          }`}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#30BF6E]" />
            <input
              type="text"
              placeholder="Buscar productos, órdenes..."
              className={`pl-12 pr-6 py-4 w-80 bg-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#30BF6E]/50 font-medium ${
                isDarkMode 
                  ? 'placeholder-gray-400 text-gray-200' 
                  : 'placeholder-gray-500 text-gray-700'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Center - Eco Stats */}
      <div className="hidden lg:flex items-center space-x-6">
        <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${
          isDarkMode 
            ? 'bg-gradient-to-r from-[#30BF6E]/20 to-[#8CBF3F]/20 border-gray-600/50' 
            : 'bg-gradient-to-r from-[#30BF6E]/10 to-[#8CBF3F]/10 border-green-200/50'
        }`}>
          <Leaf className="w-4 h-4 text-[#30BF6E]" />
          <span className={`text-sm font-semibold ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>2.5M kg CO₂ evitados</span>
        </div>
        
        <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${
          isDarkMode 
            ? 'bg-gradient-to-r from-[#F2A341]/20 to-[#F28241]/20 border-gray-600/50' 
            : 'bg-gradient-to-r from-[#F2A341]/10 to-[#F28241]/10 border-orange-200/50'
        }`}>
          <Trophy className="w-4 h-4 text-[#F2A341]" />
          <span className={`text-sm font-semibold ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>Nivel Eco: Gold</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <button 
          onClick={toggleTheme} 
          className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* EcoPoints */}
        <div className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full border ${
          isDarkMode 
            ? 'bg-gradient-to-r from-[#1F82BF]/20 to-[#30BF6E]/20 border-gray-600/50' 
            : 'bg-gradient-to-r from-[#1F82BF]/10 to-[#30BF6E]/10 border-blue-200/50'
        }`}>
          <Zap className="w-4 h-4 text-[#1F82BF]" />
          <span className={`text-sm font-bold ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>1,250 EcoPoints</span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`p-3 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative group backdrop-blur-sm ${
              isDarkMode 
                ? 'bg-gray-800/80 border-gray-600/50' 
                : 'bg-white/80 border-green-200/50'
            }`}
          >
            <Bell className={`w-5 h-5 group-hover:text-[#30BF6E] transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications dropdown */}
          {showNotifications && (
            <div className={`absolute right-0 mt-3 w-80 border rounded-2xl shadow-2xl z-50 backdrop-blur-xl ${
              isDarkMode 
                ? 'bg-gray-800/95 border-gray-600/50' 
                : 'bg-white/95 border-green-200/50'
            }`}>
              <div className={`p-4 border-b ${
                isDarkMode ? 'border-gray-600/50' : 'border-green-200/30'
              }`}>
                <h3 className={`text-lg font-bold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>Notificaciones</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-4 border-b transition-colors duration-200 ${
                    isDarkMode 
                      ? `border-gray-600/50 hover:bg-gray-700/50 ${notification.unread ? 'bg-gray-700/30' : ''}` 
                      : `border-green-100/50 hover:bg-green-50/50 ${notification.unread ? 'bg-blue-50/30' : ''}`
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-[#30BF6E]' : 'bg-gray-300'}`}></div>
                      <div className="flex-1">
                        <p className={`text-sm font-semibold ${
                          isDarkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}>{notification.title}</p>
                        <p className={`text-xs mt-1 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center">
                <button className="text-sm font-semibold text-[#30BF6E] hover:text-[#8CBF3F] transition-colors duration-200">
                  Ver todas las notificaciones
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className={`flex items-center space-x-3 p-2 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group backdrop-blur-sm ${
              isDarkMode 
                ? 'bg-gray-800/80 border-gray-600/50' 
                : 'bg-white/80 border-green-200/50'
            }`}
          >
            <div className="relative">
              <img 
                src={user?.avatar || "/diverse-user-avatars.png"} 
                alt={user?.name} 
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover" 
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="hidden md:block text-left">
              <p className={`text-sm font-semibold group-hover:text-[#30BF6E] transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>{user?.name}</p>
              <p className={`text-xs font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{user?.role}</p>
            </div>
            <ChevronDown className={`w-4 h-4 group-hover:text-[#30BF6E] transition-all duration-300 group-hover:rotate-180 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`} />
          </button>

          {/* User dropdown */}
          {showUserMenu && (
            <div className={`absolute right-0 mt-3 w-64 border rounded-2xl shadow-2xl z-50 backdrop-blur-xl ${
              isDarkMode 
                ? 'bg-gray-800/95 border-gray-600/50' 
                : 'bg-white/95 border-green-200/50'
            }`}>
              <div className={`p-4 border-b ${
                isDarkMode ? 'border-gray-600/50' : 'border-green-200/30'
              }`}>
                <div className="flex items-center space-x-3">
                  <img 
                    src={user?.avatar || "/diverse-user-avatars.png"} 
                    alt={user?.name} 
                    className="w-12 h-12 rounded-full border-2 border-white shadow-lg" 
                  />
                  <div>
                    <p className={`text-sm font-semibold ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>{user?.name}</p>
                    <p className={`text-xs ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{user?.role}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Gift className="w-3 h-3 text-[#F2A341]" />
                      <span className="text-xs font-semibold text-[#F2A341]">1,250 EcoPoints</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="py-2">
                <button 
                  onClick={handleNavigateHome}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium transition-all duration-200 group ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700/50 hover:text-[#30BF6E]' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-[#30BF6E]'
                  }`}
                >
                  <House className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                  Volver al inicio
                </button>

                <button 
                  onClick={handleNavigateSettings}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium transition-all duration-200 group ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700/50 hover:text-[#30BF6E]' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-[#30BF6E]'
                  }`}
                >
                  <Settings className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                  Configuración
                </button>

                <button 
                  onClick={handleNavigateRewards}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium transition-all duration-200 group ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700/50 hover:text-[#30BF6E]' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-[#30BF6E]'
                  }`}
                >
                  <Trophy className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                  Mis Recompensas
                </button>

                <hr className={`my-2 ${
                  isDarkMode ? 'border-gray-600/50' : 'border-green-200/50'
                }`} />

                <button
                  onClick={handleLogout}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 transition-all duration-200 group ${
                    isDarkMode ? 'hover:bg-red-900/20' : 'hover:bg-red-50'
                  } hover:text-red-700`}
                >
                  <LogOut className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close menus */}
      {(showUserMenu || showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowUserMenu(false)
            setShowNotifications(false)
          }} 
        />
      )}
    </header>
  )
}

export default Header