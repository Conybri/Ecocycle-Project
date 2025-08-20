"use client"

import { useAuth } from "@/contexts/auth-context"
import DashboardLayout from "@/components/dashboard-layout"
import DashboardContent from "@/components/dashboard-content"
import LoginForm from "@/components/login-form"

export default function HomePage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <div className="space-y-2">
            <p className="text-lg font-medium">Cargando Dashboard...</p>
            <p className="text-sm text-muted-foreground">Inicializando aplicación</p>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  return (
    <DashboardLayout user={user}>
      {({ activeSection, userRole, hasRole }) => (
        <DashboardContent activeSection={activeSection} userRole={userRole} hasRole={hasRole} />
      )}
    </DashboardLayout>
  )
}
