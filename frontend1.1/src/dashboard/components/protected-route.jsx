"use client"

import { useAuth } from "@/contexts/auth-context"
import { AlertTriangle, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProtectedRoute({ children, requiredRole = null, fallbackMessage = null }) {
  const { user, hasRole, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <div className="space-y-2">
            <p className="text-lg font-medium">Verificando acceso...</p>
            <p className="text-sm text-muted-foreground">Validando permisos de usuario</p>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // El componente padre manejará la redirección al login
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-destructive/10 rounded-full">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
            </div>
            <CardTitle className="text-2xl">Acceso Denegado</CardTitle>
            <CardDescription>
              {fallbackMessage || `No tienes permisos para acceder a esta sección. Se requiere rol: ${requiredRole}`}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Shield className="h-4 w-4" />
                <span>
                  Tu rol actual: <strong>{user.role}</strong>
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Si crees que esto es un error, contacta al administrador del sistema.
            </p>
            <Button variant="outline" onClick={() => window.history.back()} className="w-full">
              Volver Atrás
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return children
}
