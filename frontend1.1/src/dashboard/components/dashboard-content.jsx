import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Progress } from "../../components/ui/progress"
import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Plus,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  DollarSign,
  Activity,
  CreditCard,
  UserPlus,
  BarChart3,
  PieChart,
  CheckCircle,
  XCircle,
  Heart,
  Star,
  Truck,
  Calendar,
} from "lucide-react"

import { useState, useEffect } from "react"
import { useAuth } from "../../auth/AuthContext"
import apiClient from "../../services/api"

// Dynamic dashboard stats that will be fetched from backend
const getDashboardStats = (userRole, dashboardData) => {
  if (userRole === 'ADMIN') {
    return [
      { title: "Total Ventas", value: dashboardData?.adminStats?.totalSales || "$0", change: dashboardData?.adminStats?.salesGrowth || "+0%", icon: TrendingUp },
      { title: "Órdenes", value: dashboardData?.adminStats?.totalOrders || "0", change: dashboardData?.adminStats?.ordersGrowth || "+0%", icon: ShoppingCart },
      { title: "Usuarios", value: dashboardData?.adminStats?.totalUsers || "0", change: dashboardData?.adminStats?.usersGrowth || "+0%", icon: Users },
      { title: "Productos", value: dashboardData?.adminStats?.totalProducts || "0", change: dashboardData?.adminStats?.productsGrowth || "+0%", icon: Package },
    ]
  } else {
    return [
      { title: "Mis Órdenes", value: dashboardData?.userStats?.myOrders || "0", change: dashboardData?.userStats?.ordersChange || "+0", icon: ShoppingCart },
      { title: "Favoritos", value: dashboardData?.userStats?.favorites || "0", change: dashboardData?.userStats?.favoritesChange || "+0", icon: Package },
    ]
  }
}

// Backend data fetching functions
const fetchDashboardStats = async () => {
  try {
    const response = await apiClient.get('/dashboard/stats')
    return response.data
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return null
  }
}

const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products')
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

const fetchUsers = async () => {
  try {
    const response = await apiClient.get('/users')
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}

const fetchOrders = async () => {
  try {
    const response = await apiClient.get('/orders')
    return response.data
  } catch (error) {
    console.error('Error fetching orders:', error)
    return []
  }
}

const recentOrders = [
  { id: "#001", customer: "Ana García", total: "$299.00", status: "Completado" },
  { id: "#002", customer: "Carlos López", total: "$159.00", status: "Pendiente" },
  { id: "#003", customer: "María Rodríguez", total: "$89.00", status: "Enviado" },
]

const extendedProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: "$999",
    cost: "$750",
    stock: 45,
    category: "Electrónicos",
    status: "Activo",
    sales: 234,
    rating: 4.8,
    image: "/modern-smartphone.png",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: "$1,199",
    cost: "$900",
    stock: 23,
    category: "Computadoras",
    status: "Activo",
    sales: 156,
    rating: 4.9,
    image: "/silver-macbook-pro.png",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: "$249",
    cost: "$180",
    stock: 67,
    category: "Accesorios",
    status: "Activo",
    sales: 445,
    rating: 4.7,
    image: "/generic-wireless-earbuds.png",
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    price: "$899",
    cost: "$650",
    stock: 0,
    category: "Electrónicos",
    status: "Agotado",
    sales: 89,
    rating: 4.6,
    image: "/samsung-products.png",
  },
]

const extendedUsers = [
  {
    id: 1,
    name: "Ana García",
    email: "ana@email.com",
    role: "USUARIO",
    status: "Activo",
    orders: 12,
    totalSpent: "$2,340",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Carlos López",
    email: "carlos@email.com",
    role: "USUARIO",
    status: "Activo",
    orders: 8,
    totalSpent: "$1,560",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "María Rodríguez",
    email: "maria@email.com",
    role: "ADMIN",
    status: "Activo",
    orders: 3,
    totalSpent: "$890",
    joinDate: "2024-01-10",
  },
  {
    id: 4,
    name: "Pedro Martín",
    email: "pedro@email.com",
    role: "USUARIO",
    status: "Inactivo",
    orders: 0,
    totalSpent: "$0",
    joinDate: "2024-03-05",
  },
]

const extendedOrders = [
  {
    id: "#001",
    customer: "Ana García",
    email: "ana@email.com",
    total: "$299.00",
    status: "Completado",
    date: "2024-01-20",
    items: 3,
    payment: "Tarjeta",
  },
  {
    id: "#002",
    customer: "Carlos López",
    email: "carlos@email.com",
    total: "$159.00",
    status: "Pendiente",
    date: "2024-01-19",
    items: 1,
    payment: "PayPal",
  },
  {
    id: "#003",
    customer: "María Rodríguez",
    email: "maria@email.com",
    total: "$89.00",
    status: "Enviado",
    date: "2024-01-18",
    items: 2,
    payment: "Transferencia",
  },
  {
    id: "#004",
    customer: "Pedro Martín",
    email: "pedro@email.com",
    total: "$450.00",
    status: "Cancelado",
    date: "2024-01-17",
    items: 4,
    payment: "Tarjeta",
  },
]

const analyticsData = {
  revenue: {
    current: "$45,231",
    previous: "$37,649",
    growth: "+20.1%",
  },
  orders: {
    current: "1,234",
    previous: "1,072",
    growth: "+15.1%",
  },
  customers: {
    current: "856",
    previous: "791",
    growth: "+8.2%",
  },
  conversion: {
    current: "3.2%",
    previous: "2.8%",
    growth: "+0.4%",
  },
}

const userOrderHistory = [
  {
    id: "#001",
    date: "2024-01-20",
    total: "$299.00",
    status: "Entregado",
    items: [
      { name: "iPhone 14 Pro", quantity: 1, price: "$999.00" },
      { name: "Funda Protectora", quantity: 1, price: "$29.00" },
    ],
    tracking: "TRK123456789",
    estimatedDelivery: "2024-01-22",
  },
  {
    id: "#002",
    date: "2024-01-15",
    total: "$159.00",
    status: "En Tránsito",
    items: [{ name: "AirPods Pro", quantity: 1, price: "$249.00" }],
    tracking: "TRK987654321",
    estimatedDelivery: "2024-01-25",
  },
  {
    id: "#003",
    date: "2024-01-10",
    total: "$89.00",
    status: "Procesando",
    items: [
      { name: "Cable USB-C", quantity: 2, price: "$25.00" },
      { name: "Cargador Inalámbrico", quantity: 1, price: "$39.00" },
    ],
    tracking: null,
    estimatedDelivery: "2024-01-28",
  },
]

const userFavorites = [
  {
    id: 1,
    name: "MacBook Air M2",
    price: "$1,199.00",
    originalPrice: "$1,299.00",
    discount: "8%",
    rating: 4.9,
    reviews: 156,
    image: "/silver-macbook-pro.png",
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: "$899.00",
    originalPrice: "$999.00",
    discount: "10%",
    rating: 4.6,
    reviews: 89,
    image: "/samsung-products.png",
    inStock: false,
  },
  {
    id: 3,
    name: "iPad Pro 12.9",
    price: "$1,099.00",
    originalPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 234,
    image: "/modern-smartphone.png",
    inStock: true,
  },
]

const storeProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: "$999.00",
    originalPrice: "$1,099.00",
    discount: "9%",
    rating: 4.8,
    reviews: 234,
    image: "/modern-smartphone.png",
    category: "Smartphones",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: "$1,199.00",
    originalPrice: "$1,299.00",
    discount: "8%",
    rating: 4.9,
    reviews: 156,
    image: "/silver-macbook-pro.png",
    category: "Laptops",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: "$249.00",
    originalPrice: null,
    discount: null,
    rating: 4.7,
    reviews: 445,
    image: "/generic-wireless-earbuds.png",
    category: "Audio",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    price: "$899.00",
    originalPrice: "$999.00",
    discount: "10%",
    rating: 4.6,
    reviews: 89,
    image: "/samsung-products.png",
    category: "Smartphones",
    inStock: false,
    featured: false,
  },
]

const userProfile = {
  name: "Juan Pérez",
  email: "juan@ejemplo.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "Calle Principal 123",
    city: "Ciudad",
    state: "Estado",
    zipCode: "12345",
    country: "País",
  },
  preferences: {
    newsletter: true,
    promotions: true,
    orderUpdates: true,
  },
}

export default function DashboardContent({ activeSection, userRole }) {
  const { user } = useAuth()
  const [dashboardData, setDashboardData] = useState(null)
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  // Load dashboard data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        
        // Always fetch dashboard stats
        const statsData = await fetchDashboardStats()
        setDashboardData(statsData)

        // If admin, fetch additional data
        if (userRole === 'ADMIN') {
          const [productsData, usersData, ordersData] = await Promise.all([
            fetchProducts(),
            fetchUsers(), 
            fetchOrders()
          ])
          
          setProducts(productsData || extendedProducts) // Fallback to mock data
          setUsers(usersData || extendedUsers)
          setOrders(ordersData || extendedOrders)
        }
      } catch (error) {
        console.error('Error loading dashboard data:', error)
        // Use mock data as fallback
        setProducts(extendedProducts)
        setUsers(extendedUsers)
        setOrders(extendedOrders)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [userRole])

  const stats = getDashboardStats(userRole, dashboardData)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-primary mx-auto"></div>
          <p className="text-gray-600">Cargando datos del dashboard...</p>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return userRole === "USUARIO" ? (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Mi Dashboard</h1>
              <p className="text-gray-600">Bienvenido de vuelta, aquí tienes un resumen de tu actividad.</p>
            </div>

            {/* User Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-gray-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-gray-600">
                        <span className="text-green-600">{stat.change}</span> este mes
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Puntos de Fidelidad</CardTitle>
                  <Star className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,250</div>
                  <p className="text-xs text-gray-600">
                    <span className="text-green-600">+150</span> este mes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Gastado</CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2,340</div>
                  <p className="text-xs text-gray-600">
                    <span className="text-green-600">+$299</span> este mes
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders and Favorites */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Órdenes Recientes</CardTitle>
                  <CardDescription>Tus últimas compras</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userOrderHistory.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.total}</p>
                          <Badge
                            variant={
                              order.status === "Entregado"
                                ? "default"
                                : order.status === "En Tránsito"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Ver Todas las Órdenes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Productos Favoritos</CardTitle>
                  <CardDescription>Artículos que te interesan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userFavorites.slice(0, 3).map((product) => (
                      <div key={product.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-gray-600">★ {product.rating}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-sm">{product.price}</p>
                          <Badge variant={product.inStock ? "default" : "secondary"}>
                            {product.inStock ? "Disponible" : "Agotado"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Ver Todos los Favoritos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          // ... existing code for ADMIN dashboard ...
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-gray-600">
                Bienvenido de vuelta, aquí tienes un resumen de tu {userRole === "ADMIN" ? "negocio" : "actividad"}.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-gray-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-gray-600">
                        <span className="text-green-600">{stat.change}</span> desde el mes pasado
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Recent Activity */}
            {userRole === "ADMIN" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Órdenes Recientes</CardTitle>
                    <CardDescription>Últimas transacciones de tu tienda</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.customer}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{order.total}</p>
                            <Badge variant={order.status === "Completado" ? "default" : "secondary"}>
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Productos Destacados</CardTitle>
                    <CardDescription>Productos más vendidos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {extendedProducts.slice(0, 3).map((product) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-600">{product.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{product.price}</p>
                            <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )

      case "products":
        return userRole === "ADMIN" ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Gestión de Productos</h1>
                <p className="text-gray-600">Administra tu catálogo de productos</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Importar
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nuevo Producto
                </Button>
              </div>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-4 w-4" />
                      <Input placeholder="Buscar productos..." className="pl-10" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="electronics">Electrónicos</SelectItem>
                      <SelectItem value="computers">Computadoras</SelectItem>
                      <SelectItem value="accessories">Accesorios</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="active">Activo</SelectItem>
                      <SelectItem value="inactive">Inactivo</SelectItem>
                      <SelectItem value="out-of-stock">Agotado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Products Table */}
            <Card>
              <CardHeader>
                <CardTitle>Lista de Productos ({products.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{product.nombre || product.name}</h3>
                          <p className="text-sm text-gray-600">{product.categoria || product.category}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={product.status === "Activo" ? "default" : "secondary"}>
                              {product.status}
                            </Badge>
                            <span className="text-xs text-gray-600">★ {product.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="font-medium">${product.precio || product.price || '0'}</p>
                          <p className="text-sm text-gray-600">Costo: ${product.costo || product.cost || '0'}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">Stock: {product.stock || 0}</p>
                          <p className="text-sm text-gray-600">{product.ventas || product.sales || 0} vendidos</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-600">Acceso Denegado</h2>
            <p className="text-gray-600 mt-2">No tienes permisos para ver esta sección</p>
          </div>
        )

      case "users":
        return userRole === "ADMIN" ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Gestión de Usuarios</h1>
                <p className="text-gray-600">Administra los usuarios de tu plataforma</p>
              </div>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Invitar Usuario
              </Button>
            </div>

            {/* User Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">856</div>
                  <p className="text-xs text-gray-600">Total Usuarios</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-gray-600">Nuevos este mes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-gray-600">Administradores</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">94.2%</div>
                  <p className="text-xs text-gray-600">Usuarios Activos</p>
                </CardContent>
              </Card>
            </div>

            {/* Users Table */}
            <Card>
              <CardHeader>
                <CardTitle>Lista de Usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium">
                          {(user.nombre || user.name || 'U').charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-medium">{user.nombre || user.name} {user.apellido || ''}</h3>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-xs text-gray-600">Miembro desde {user.fechaRegistro || user.joinDate || 'N/A'}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <Badge variant={user.role === "ADMIN" ? "default" : "secondary"}>{user.role}</Badge>
                          <p className="text-sm text-gray-600 mt-1">
                            {(user.activo || user.status === "Activo") ? (
                              <CheckCircle className="inline h-3 w-3 text-green-500 mr-1" />
                            ) : (
                              <XCircle className="inline h-3 w-3 text-red-500 mr-1" />
                            )}
                            {user.activo ? 'Activo' : (user.status || 'Inactivo')}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{user.ordenes || user.orders || 0} órdenes</p>
                          <p className="text-sm text-gray-600">${user.totalGastado || user.totalSpent || '0'} gastado</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-600">Acceso Denegado</h2>
            <p className="text-gray-600 mt-2">No tienes permisos para ver esta sección</p>
          </div>
        )

      case "orders":
        return userRole === "ADMIN" ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Gestión de Órdenes</h1>
                <p className="text-gray-600">Administra todas las órdenes de la tienda</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar
                </Button>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtros
                </Button>
              </div>
            </div>

            {/* Order Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-gray-600">Total Órdenes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-gray-600">Pendientes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">1,045</div>
                  <p className="text-xs text-gray-600">Completadas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">$45,231</div>
                  <p className="text-xs text-gray-600">Ingresos Totales</p>
                </CardContent>
              </Card>
            </div>

            {/* Orders Table */}
            <Card>
              <CardHeader>
                <CardTitle>Lista de Órdenes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-medium">#{order.id}</h3>
                          <p className="text-sm text-gray-600">{order.cliente || order.customer}</p>
                          <p className="text-xs text-gray-600">{order.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="font-medium">${order.total || '0.00'}</p>
                          <p className="text-sm text-gray-600">{order.articulos || order.items || 0} artículos</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{order.fecha || order.date}</p>
                          <p className="text-xs text-gray-600">{order.metodoPago || order.payment}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              (order.estado === "Completado" || order.status === "Completado")
                                ? "default"
                                : (order.estado === "Cancelado" || order.status === "Cancelado")
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {order.estado || order.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-600">Acceso Denegado</h2>
            <p className="text-gray-600 mt-2">No tienes permisos para ver esta sección</p>
          </div>
        )

      case "analytics":
        return userRole === "ADMIN" ? (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
              <p className="text-gray-600">Análisis detallado del rendimiento de tu negocio</p>
            </div>

            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.revenue.current}</div>
                  <p className="text-xs text-gray-600">
                    <span className="text-green-600">{analyticsData.revenue.growth}</span> vs mes anterior
                  </p>
                  <Progress value={75} className="mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Órdenes</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.orders.current}</div>
                  <p className="text-xs text-gray-600">
                    <span className="text-green-600">{analyticsData.orders.growth}</span> vs mes anterior
                  </p>
                  <Progress value={60} className="mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clientes</CardTitle>
                  <Users className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.customers.current}</div>
                  <p className="text-xs text-gray-600">
                    <span className="text-green-600">{analyticsData.customers.growth}</span> vs mes anterior
                  </p>
                  <Progress value={45} className="mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversión</CardTitle>
                  <Activity className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.conversion.current}</div>
                  <p className="text-xs text-gray-600">
                    <span className="text-green-600">{analyticsData.conversion.growth}</span> vs mes anterior
                  </p>
                  <Progress value={32} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ventas por Mes</CardTitle>
                  <CardDescription>Tendencia de ingresos en los últimos 12 meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-600 mx-auto mb-2" />
                      <p className="text-gray-600">Gráfico de barras aquí</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Productos Más Vendidos</CardTitle>
                  <CardDescription>Distribución de ventas por categoría</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 text-gray-600 mx-auto mb-2" />
                      <p className="text-gray-600">Gráfico circular aquí</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-600">Acceso Denegado</h2>
            <p className="text-gray-600 mt-2">No tienes permisos para ver esta sección</p>
          </div>
        )

      case "settings":
        return userRole === "ADMIN" ? (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Configuración</h1>
              <p className="text-gray-600">Administra la configuración de tu tienda</p>
            </div>

            <Tabs defaultValue="general" className="space-y-4">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="payments">Pagos</TabsTrigger>
                <TabsTrigger value="shipping">Envíos</TabsTrigger>
                <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de la Tienda</CardTitle>
                    <CardDescription>Configura los datos básicos de tu tienda</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="store-name">Nombre de la Tienda</Label>
                        <Input id="store-name" defaultValue="Mi ECommerce" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="store-email">Email de Contacto</Label>
                        <Input id="store-email" type="email" defaultValue="contacto@miecommerce.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="store-description">Descripción</Label>
                      <Textarea
                        id="store-description"
                        defaultValue="La mejor tienda online para productos de tecnología"
                      />
                    </div>
                    <Button>Guardar Cambios</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Métodos de Pago</CardTitle>
                    <CardDescription>Configura los métodos de pago disponibles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-5 w-5" />
                          <div>
                            <p className="font-medium">Tarjetas de Crédito</p>
                            <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
                          </div>
                        </div>
                        <Badge>Activo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <DollarSign className="h-5 w-5" />
                          <div>
                            <p className="font-medium">PayPal</p>
                            <p className="text-sm text-gray-600">Pagos seguros con PayPal</p>
                          </div>
                        </div>
                        <Badge>Activo</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shipping" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Opciones de Envío</CardTitle>
                    <CardDescription>Configura las opciones de envío disponibles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Configuración de envíos próximamente...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Notificaciones</CardTitle>
                    <CardDescription>Configura las notificaciones del sistema</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Configuración de notificaciones próximamente...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-600">Acceso Denegado</h2>
            <p className="text-gray-600 mt-2">No tienes permisos para ver esta sección</p>
          </div>
        )

      case "my-orders":
        return userRole === "USUARIO" ? (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Mis Órdenes</h1>
              <p className="text-gray-600">Revisa el estado y historial de tus pedidos</p>
            </div>

            {/* Order Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-gray-600">Total Órdenes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-gray-600">En Proceso</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">10</div>
                  <p className="text-xs text-gray-600">Entregadas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">$2,340</div>
                  <p className="text-xs text-gray-600">Total Gastado</p>
                </CardContent>
              </Card>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {userOrderHistory.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Orden {order.id}</CardTitle>
                        <CardDescription>Realizada el {order.date}</CardDescription>
                      </div>
                      <Badge
                        variant={
                          order.status === "Entregado"
                            ? "default"
                            : order.status === "En Tránsito"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Order Items */}
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                            </div>
                            <p className="font-medium">{item.price}</p>
                          </div>
                        ))}
                      </div>

                      {/* Order Details */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Total:</span>
                          <span className="font-bold text-lg">{order.total}</span>
                        </div>
                        {order.tracking && (
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Truck className="h-4 w-4" />
                            <span>Tracking: {order.tracking}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                          <Calendar className="h-4 w-4" />
                          <span>Entrega estimada: {order.estimatedDelivery}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Detalles
                        </Button>
                        {order.status === "Entregado" && (
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Factura
                          </Button>
                        )}
                        {order.tracking && (
                          <Button variant="outline" size="sm">
                            <Truck className="mr-2 h-4 w-4" />
                            Rastrear
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : null

      case "profile":
        return userRole === "USUARIO" ? (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Mi Perfil</h1>
              <p className="text-gray-600">Gestiona tu información personal y preferencias</p>
            </div>

            <Tabs defaultValue="personal" className="space-y-4">
              <TabsList>
                <TabsTrigger value="personal">Información Personal</TabsTrigger>
                <TabsTrigger value="address">Direcciones</TabsTrigger>
                <TabsTrigger value="preferences">Preferencias</TabsTrigger>
                <TabsTrigger value="security">Seguridad</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>Actualiza tu información de contacto</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input id="name" defaultValue={userProfile.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userProfile.email} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" defaultValue={userProfile.phone} />
                    </div>
                    <Button>Guardar Cambios</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="address" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Direcciones de Envío</CardTitle>
                    <CardDescription>Gestiona tus direcciones de entrega</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">Dirección Principal</p>
                          <Badge variant="outline">Predeterminada</Badge>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{userProfile.address.street}</p>
                        <p>
                          {userProfile.address.city}, {userProfile.address.state} {userProfile.address.zipCode}
                        </p>
                        <p>{userProfile.address.country}</p>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Agregar Nueva Dirección
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferencias de Notificación</CardTitle>
                    <CardDescription>Controla qué notificaciones quieres recibir</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Newsletter</p>
                          <p className="text-sm text-gray-600">Recibe noticias y ofertas especiales</p>
                        </div>
                        <input type="checkbox" defaultChecked={userProfile.preferences.newsletter} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Promociones</p>
                          <p className="text-sm text-gray-600">Notificaciones sobre descuentos y ofertas</p>
                        </div>
                        <input type="checkbox" defaultChecked={userProfile.preferences.promotions} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Actualizaciones de Órdenes</p>
                          <p className="text-sm text-gray-600">Estado de envío y entrega</p>
                        </div>
                        <input type="checkbox" defaultChecked={userProfile.preferences.orderUpdates} />
                      </div>
                    </div>
                    <Button>Guardar Preferencias</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Seguridad de la Cuenta</CardTitle>
                    <CardDescription>Gestiona la seguridad de tu cuenta</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Contraseña Actual</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nueva Contraseña</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button>Cambiar Contraseña</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        ) : null

      case "store":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Tienda</h1>
                <p className="text-gray-600">Descubre nuestros productos</p>
              </div>
              {userRole === "USUARIO" && (
                <Button variant="outline">
                  <Heart className="mr-2 h-4 w-4" />
                  Mis Favoritos ({userFavorites.length})
                </Button>
              )}
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-4 w-4" />
                      <Input placeholder="Buscar productos..." className="pl-10" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="smartphones">Smartphones</SelectItem>
                      <SelectItem value="laptops">Laptops</SelectItem>
                      <SelectItem value="audio">Audio</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Precio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="0-500">$0 - $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1000</SelectItem>
                      <SelectItem value="1000+">$1000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Featured Products */}
            {userRole === "USUARIO" && (
              <Card>
                <CardHeader>
                  <CardTitle>Productos Destacados</CardTitle>
                  <CardDescription>Los más populares de la semana</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {storeProducts
                      .filter((product) => product.featured)
                      .map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 space-y-3">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-medium">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.category}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs">{product.rating}</span>
                              <span className="text-xs text-gray-600">({product.reviews})</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-bold">{product.price}</p>
                              {product.originalPrice && (
                                <p className="text-sm text-gray-600 line-through">{product.originalPrice}</p>
                              )}
                            </div>
                            {product.discount && <Badge variant="secondary">{product.discount} OFF</Badge>}
                          </div>
                          <div className="flex space-x-2">
                            <Button className="flex-1" disabled={!product.inStock}>
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              {product.inStock ? "Agregar" : "Agotado"}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* All Products */}
            <Card>
              <CardHeader>
                <CardTitle>Todos los Productos ({storeProducts.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {storeProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 space-y-3">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.category}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{product.rating}</span>
                          <span className="text-xs text-gray-600">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold">{product.price}</p>
                          {product.originalPrice && (
                            <p className="text-sm text-gray-600 line-through">{product.originalPrice}</p>
                          )}
                        </div>
                        {product.discount && <Badge variant="secondary">{product.discount} OFF</Badge>}
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1" disabled={!product.inStock}>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {product.inStock ? "Agregar" : "Agotado"}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </h1>
              <p className="text-gray-600">Esta sección está en desarrollo</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-gray-600">Contenido para {activeSection} próximamente...</p>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return renderContent()
}
