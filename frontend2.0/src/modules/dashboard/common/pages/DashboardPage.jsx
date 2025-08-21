"use client"
import { useAuth } from "../../../../contexts/AuthContext"
import { useTheme } from "../../../../contexts/useTheme"
import { 
  TrendingUp, 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  Activity,
  Leaf,
  Recycle,
  Target,
  Award,
  Globe,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Gift,
  Star,
  Heart,
  Clock,
  TrendingDown,
  Plus,
  Eye,
  Download,
  Share2
} from "lucide-react"

function DashboardPage() {
  const { user } = useAuth()
const { isDarkMode } = useTheme()
  // Stats data based on user role
  const adminStats = [
    {
      title: "Ventas Totales",
      value: "$45,231.89",
      change: "+20.1%",
      changeType: "positive",
      icon: DollarSign,
      color: "from-[#30BF6E] to-[#8CBF3F]",
      bgColor: "from-green-500/10 to-lime-500/10",
      description: "vs mes anterior"
    },
    {
      title: "Usuarios Activos",
      value: "2,350",
      change: "+180.1%",
      changeType: "positive",
      icon: Users,
      color: "from-[#1F82BF] to-[#30BF6E]",
      bgColor: "from-blue-500/10 to-green-500/10",
      description: "usuarios únicos"
    },
    {
      title: "Productos Eco",
      value: "12,234",
      change: "+19%",
      changeType: "positive",
      icon: Package,
      color: "from-[#8CBF3F] to-[#F2A341]",
      bgColor: "from-lime-500/10 to-orange-400/10",
      description: "en catálogo"
    },
    {
      title: "Órdenes",
      value: "573",
      change: "+201",
      changeType: "positive",
      icon: ShoppingCart,
      color: "from-[#F2A341] to-[#F28241]",
      bgColor: "from-orange-400/10 to-orange-500/10",
      description: "este mes"
    },
  ]

  const userStats = [
    {
      title: "Mis Compras",
      value: "23",
      change: "+3 este mes",
      changeType: "positive",
      icon: ShoppingCart,
      color: "from-[#1F82BF] to-[#30BF6E]",
      bgColor: "from-blue-500/10 to-green-500/10",
      description: "productos adquiridos"
    },
    {
      title: "EcoPoints",
      value: "1,250",
      change: "+150 puntos",
      changeType: "positive",
      icon: Zap,
      color: "from-[#F2A341] to-[#F28241]",
      bgColor: "from-orange-400/10 to-orange-500/10",
      description: "disponibles para canjear"
    },
    {
      title: "Productos Favoritos",
      value: "8",
      change: "+2 nuevos",
      changeType: "positive",
      icon: Heart,
      color: "from-[#30BF6E] to-[#8CBF3F]",
      bgColor: "from-green-500/10 to-lime-500/10",
      description: "en wishlist"
    },
    {
      title: "Impacto CO₂",
      value: "2.5kg",
      change: "CO₂ evitado",
      changeType: "positive",
      icon: Leaf,
      color: "from-[#8CBF3F] to-[#30BF6E]",
      bgColor: "from-lime-500/10 to-green-500/10",
      description: "con tus compras"
    },
  ]

  const stats = user?.role === "ADMIN" ? adminStats : userStats

  const ecoImpactData = [
    { 
      title: "CO₂ Evitado", 
      value: "2,500 kg", 
      icon: Leaf, 
      color: "text-green-600",
      bgColor: "from-green-500/10 to-emerald-500/10",
      description: "Equivale a plantar 113 árboles"
    },
    { 
      title: "Materiales Reciclados", 
      value: "500 Ton", 
      icon: Recycle, 
      color: "text-blue-600",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      description: "Residuos procesados correctamente"
    },
    { 
      title: "Usuarios Eco", 
      value: "50,000+", 
      icon: Users, 
      color: "text-purple-600",
      bgColor: "from-purple-500/10 to-pink-500/10",
      description: "Comunidad comprometida"
    },
    { 
      title: "Empresas Aliadas", 
      value: "1,200+", 
      icon: Globe, 
      color: "text-orange-600",
      bgColor: "from-orange-500/10 to-red-500/10",
      description: "Red de reciclaje global"
    }
  ]

  const recentActivities = user?.role === "ADMIN" ? [
    {
      id: 1,
      title: "Nueva orden #1234 recibida",
      description: "Producto eco-friendly - iPhone 15 Reacondicionado",
      time: "hace 5 min",
      type: "order",
      color: "green",
      icon: ShoppingCart,
      value: "$999"
    },
    {
      id: 2,
      title: "Nuevo usuario EcoFriendly registrado",
      description: "María González se unió a la comunidad",
      time: "hace 15 min",
      type: "user",
      color: "blue",
      icon: Users,
      value: "+1"
    },
    {
      id: 3,
      title: "Stock bajo: iPhone 15 Reacondicionado",
      description: "Quedan 5 unidades disponibles",
      time: "hace 1 hora",
      type: "warning",
      color: "orange",
      icon: Package,
      value: "5 units"
    },
    {
      id: 4,
      title: "Meta mensual alcanzada",
      description: "Objetivo de ventas superado en 20%",
      time: "hace 2 horas",
      type: "achievement",
      color: "purple",
      icon: Target,
      value: "120%"
    }
  ] : [
    {
      id: 1,
      title: "iPhone 15 Pro Reacondicionado",
      description: "Compra exitosa • +50 EcoPoints ganados",
      time: "hace 2 días",
      type: "purchase",
      color: "green",
      icon: ShoppingCart,
      value: "$999"
    },
    {
      id: 2,
      title: "AirPods Pro Reacondicionados",
      description: "Producto entregado • +25 EcoPoints ganados",
      time: "hace 1 semana",
      type: "delivery",
      color: "blue",
      icon: Package,
      value: "$249"
    },
    {
      id: 3,
      title: "MacBook Air Reacondicionado",
      description: "Reseña pendiente • +100 EcoPoints ganados",
      time: "hace 2 semanas",
      type: "review",
      color: "purple",
      icon: Star,
      value: "$1,199"
    },
    {
      id: 4,
      title: "Nivel Eco actualizado",
      description: "¡Felicidades! Ahora eres nivel Gold",
      time: "hace 3 semanas",
      type: "achievement",
      color: "orange",
      icon: Award,
      value: "Gold"
    }
  ]

  const popularProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Reacondicionado",
      image: "/modern-smartphone.png",
      price: "$999",
      originalPrice: "$1,299",
      rating: 4.9,
      reviews: 234,
      ecoPoints: 50,
      discount: "23%",
      sustainability: "95% menos CO₂",
      inStock: true,
      trending: true
    },
    {
      id: 2,
      name: "MacBook Pro Reacondicionado",
      image: "/silver-macbook-pro.png",
      price: "$1,999",
      originalPrice: "$2,499",
      rating: 4.8,
      reviews: 156,
      ecoPoints: 100,
      discount: "20%",
      sustainability: "Certificado Gold",
      inStock: true,
      trending: false
    },
    {
      id: 3,
      name: "AirPods Pro Reacondicionados",
      image: "/generic-wireless-earbuds.png",
      price: "$249",
      originalPrice: "$329",
      rating: 4.7,
      reviews: 89,
      ecoPoints: 25,
      discount: "24%",
      sustainability: "Packaging 100% reciclable",
      inStock: true,
      trending: true
    }
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case 'order': return ShoppingCart
      case 'user': return Users
      case 'warning': return Package
      case 'achievement': return Award
      case 'purchase': return ShoppingCart
      case 'delivery': return Package
      case 'review': return Star
      default: return Activity
    }
  }

  const getActivityColor = (color) => {
    switch (color) {
      case 'green': return 'from-green-50 to-emerald-50 border-green-200'
      case 'blue': return 'from-blue-50 to-cyan-50 border-blue-200'
      case 'orange': return 'from-orange-50 to-amber-50 border-orange-200'
      case 'purple': return 'from-purple-50 to-pink-50 border-purple-200'
      default: return 'from-gray-50 to-slate-50 border-gray-200'
    }
  }

  return (
     <div className={`space-y-8 animate-fadeIn ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Welcome section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#30BF6E] via-[#8CBF3F] to-[#F2A341] rounded-3xl p-8 text-white shadow-2xl">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">¡Bienvenido, {user?.name}! 🌱</h1>
                <p className="text-lg opacity-90">
                  {user?.role === "ADMIN"
                    ? "Gestiona tu ecommerce sostenible desde este panel"
                    : "Continúa tu viaje hacia un futuro más verde"}
                </p>
              </div>
            </div>
            
            {/* Quick actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                <Plus className="w-4 h-4" />
                <span>{user?.role === "ADMIN" ? "Nuevo Producto" : "Explorar Tienda"}</span>
              </button>
              <button className="flex items-center space-x-2 bg-white text-[#30BF6E] hover:bg-gray-100 px-4 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                <Eye className="w-4 h-4" />
                <span>Ver Reportes</span>
              </button>
            </div>
          </div>
          
          {/* User status indicators */}
          {user?.role === "USUARIO" && (
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Nivel Eco: Gold</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Meta: 85% completada</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">1,250 EcoPoints</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div 
              key={index} 
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {stat.changeType === "positive" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-semibold ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{stat.description}</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-shimmer"></div>
            </div>
          )
        })}
      </div>

      {/* Eco Impact Section */}
      <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl p-8 border border-green-200/50 dark:border-gray-600/50 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">🌍 Nuestro Impacto Ambiental</h2>
          <p className="text-gray-600 dark:text-gray-400">Juntos estamos transformando el futuro del planeta</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecoImpactData.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="group text-center">
                <div className={`relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${item.bgColor} dark:bg-gradient-to-br dark:from-gray-700/50 dark:to-gray-600/50 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 cursor-pointer`}>
                  <Icon className={`w-8 h-8 ${item.color}`} />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{item.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">{item.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Activity and Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
              <Activity className="w-5 h-5 text-[#30BF6E]" />
              <span>{user?.role === "ADMIN" ? "🔥 Actividad Reciente" : "🛍️ Mis Últimas Compras"}</span>
            </h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200">
                <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="text-sm font-semibold text-[#30BF6E] hover:text-[#8CBF3F] transition-colors duration-200">
                Ver todo
              </button>
            </div>
          </div>
          
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {recentActivities.map((activity) => {
              const Icon = getActivityIcon(activity.type)
              return (
                <div key={activity.id} className={`flex items-center space-x-4 p-4 bg-gradient-to-r ${getActivityColor(activity.color)} dark:bg-gradient-to-r dark:from-gray-700/50 dark:to-gray-600/50 rounded-2xl hover:shadow-md transition-all duration-200 cursor-pointer group border dark:border-gray-600/50`}>
                  <div className={`w-10 h-10 bg-gradient-to-br from-${activity.color}-500 to-${activity.color}-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#30BF6E] transition-colors duration-200 truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{activity.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500 dark:text-gray-500 font-medium flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{activity.time}</span>
                      </span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{activity.value}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Popular Products */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
              <Package className="w-5 h-5 text-[#30BF6E]" />
              <span>{user?.role === "ADMIN" ? "🏆 Productos Populares" : "✨ Recomendaciones Eco"}</span>
            </h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200">
                <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="text-sm font-semibold text-[#30BF6E] hover:text-[#8CBF3F] transition-colors duration-200">
                Ver catálogo
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {popularProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:bg-gradient-to-r dark:from-gray-700/50 dark:to-gray-600/50 rounded-2xl hover:shadow-md transition-all duration-200 group cursor-pointer border border-green-100 dark:border-gray-600/50">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:scale-110 transition-transform duration-200" 
                  />
                  {product.trending && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#30BF6E] transition-colors duration-200 truncate">
                      {product.name}
                    </p>
                    {product.inStock ? (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">En stock</span>
                    ) : (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">Agotado</span>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 truncate">
                    {user?.role === "ADMIN" 
                      ? `${product.reviews} vendidos • ${product.sustainability}` 
                      : `${product.sustainability} • +${product.ecoPoints} EcoPoints`
                    }
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-xs text-gray-500 dark:text-gray-500 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{product.price}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      <p className="text-xs text-red-500 font-semibold">-{product.discount} descuento</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action for Users */}
      {user?.role === "USUARIO" && (
        <div className="bg-gradient-to-br from-[#30BF6E] via-[#8CBF3F] to-[#F2A341] rounded-3xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 animate-bounce"></div>
          
          <div className="relative z-10">
            <Gift className="w-16 h-16 mx-auto mb-4 opacity-90 animate-bounce" />
            <h3 className="text-2xl font-bold mb-2">🎁 ¡Canjea tus EcoPoints!</h3>
            <p className="text-lg opacity-90 mb-6">Tienes 1,250 EcoPoints listos para usar en productos sostenibles</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                <Gift className="w-4 h-4" />
                <span>Ver Recompensas</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-[#30BF6E] hover:bg-gray-100 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                <ShoppingCart className="w-4 h-4" />
                <span>Explorar Tienda</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }

        /* Custom scrollbar for activity section */
        .space-y-4::-webkit-scrollbar {
          width: 4px;
        }
        
        .space-y-4::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        
        .space-y-4::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #30BF6E, #8CBF3F);
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default DashboardPage