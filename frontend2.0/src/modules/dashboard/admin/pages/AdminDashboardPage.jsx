import React from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import { useAdminDashboard } from '../hooks/useAdminDashboard';
import StatCard from '../components/StatCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { TrendingUp, Users, Package, ShoppingCart, DollarSign, Activity } from 'lucide-react';

const AdminDashboardPage = () => {
  const { user } = useAuth();
  const { stats, loading, error, refetch } = useAdminDashboard();

  if (loading) return <LoadingSpinner size="lg" />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} />;

  // Default stats if no data from backend
  const defaultStats = [
    {
      title: "Ventas Totales",
      value: "$45,231.89",
      change: "+20.1%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Usuarios Activos",
      value: "2,350",
      change: "+180.1%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Productos",
      value: "12,234",
      change: "+19%",
      icon: Package,
      color: "text-purple-600",
    },
    {
      title: "Órdenes",
      value: "573",
      change: "+201",
      icon: ShoppingCart,
      color: "text-orange-600",
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">¡Bienvenido, {user?.name}!</h1>
        <p className="opacity-90">
          Gestiona tu ecommerce desde este panel de administración
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm">Nueva orden #1234 recibida</p>
              <span className="text-xs text-muted-foreground ml-auto">hace 5 min</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-sm">Usuario nuevo registrado</p>
              <span className="text-xs text-muted-foreground ml-auto">hace 15 min</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <p className="text-sm">Producto agotado: iPhone 15</p>
              <span className="text-xs text-muted-foreground ml-auto">hace 1 hora</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold mb-4">Productos Populares</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/modern-smartphone.png" alt="iPhone" className="w-10 h-10 rounded object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium">iPhone 15 Pro</p>
                <p className="text-xs text-muted-foreground">234 vendidos</p>
              </div>
              <span className="text-sm font-medium">$999</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/silver-macbook-pro.png" alt="MacBook" className="w-10 h-10 rounded object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium">MacBook Pro</p>
                <p className="text-xs text-muted-foreground">156 vendidos</p>
              </div>
              <span className="text-sm font-medium">$1,999</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/generic-wireless-earbuds.png" alt="AirPods" className="w-10 h-10 rounded object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium">AirPods Pro</p>
                <p className="text-xs text-muted-foreground">89 vendidos</p>
              </div>
              <span className="text-sm font-medium">$249</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;