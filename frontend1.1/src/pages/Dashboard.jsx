import React from 'react';
import { useAuth } from '../auth/AuthContext';
import DashboardLayout from '../dashboard/components/dashboard-layout';
import DashboardContent from '../dashboard/components/dashboard-content';

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-light">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-primary mx-auto"></div>
          <div className="space-y-2">
            <p className="text-lg font-medium">Cargando Dashboard...</p>
            <p className="text-sm text-gray-text">Inicializando aplicación</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-light">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Acceso denegado</h1>
          <p className="text-gray-text">Debes iniciar sesión para acceder al dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout user={user}>
      {({ activeSection, userRole, hasRole }) => (
        <DashboardContent activeSection={activeSection} userRole={userRole} hasRole={hasRole} />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;