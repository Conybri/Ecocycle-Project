// ============================================
// ESTRUCTURA DE CARPETAS FINAL:

// src/
// ├── contexts/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
// ├── modules/
│   └── auth/
│       ├── components/
│       │   ├── AuthLayout.jsx
│       │   ├── FormInput.jsx
│       │   ├── FormSelect.jsx
│       │   └── SubmitButton.jsx
│       ├── hooks/
│       │   └── useAuthForm.js
│       ├── pages/
│       │   ├── LoginPage.jsx
│       │   ├── RegisterPage.jsx
│       │   └── ForgotPasswordPage.jsx
│       ├── services/
│       │   └── authService.js
│       ├── utils/
│       │   └── constants.js
│       └── index.js
// ├── App.jsx
// └── main.jsx


# Estructura Modular del Dashboard

## 📁 Estructura de Carpetas

```
src/
├── contexts/
│   ├── AuthContext.jsx         ✅ (ya existe)
│   └── ThemeContext.jsx        ✅ (ya existe)
├── modules/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── FormInput.jsx
│   │   │   ├── FormSelect.jsx
│   │   │   └── SubmitButton.jsx
│   │   ├── hooks/
│   │   │   └── useAuthForm.js
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── ForgotPasswordPage.jsx
│   │   ├── services/
│   │   │   └── authService.js
│   │   ├── utils/
│   │   │   └── constants.js
│   │   └── index.js
│   └── dashboard/
│   │   ├── common/             ✅ (ya existe)
│   │   │   ├── components/
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   └── hooks/
│   │   │   │   └── useDashboard.js
│   │   ├── admin/
│   │   │   ├── components/
│   │   │   │   ├── AdminStats.jsx
│   │   │   │   ├── AdminProductCard.jsx
│   │   │   │   ├── AdminUserCard.jsx
│   │   │   │   ├── AdminOrderCard.jsx
│   │   │   │   └── AdminAnalytics.jsx
│   │   │   ├── pages/
│   │   │   │   ├── AdminDashboardPage.jsx
│   │   │   │   ├── ProductsPage.jsx
│   │   │   │   ├── UsersPage.jsx
│   │   │   │   ├── OrdersPage.jsx
│   │   │   │   ├── AnalyticsPage.jsx
│   │   │   │   └── SettingsPage.jsx
│   │   │   ├── services/
│   │   │   │   ├── adminService.js
│   │   │   │   ├── productService.js
│   │   │   │   ├── userService.js
│   │   │   │   └── orderService.js
│   │   │   └── hooks/
│   │   │       ├── useAdminStats.js
│   │   │       ├── useProducts.js
│   │   │       ├── useUsers.js
│   │   │       └── useOrders.js
│   │   └── user/
│   │       ├── components/
│   │       │   ├── UserStats.jsx
│   │       │   ├── OrderCard.jsx
│   │       │   ├── ProductCard.jsx
│   │       │   └── ActivityCard.jsx
│   │       ├── pages/
│   │       │   ├── UserDashboardPage.jsx
│   │       │   ├── MyOrdersPage.jsx
│   │       │   ├── StorePage.jsx
│   │       │   └── ProfilePage.jsx
│   │       ├── services/
│   │       │   ├── userService.js
│   │       │   ├── orderService.js
│   │       │   └── storeService.js
│   │       └── hooks/
│   │           ├── useUserStats.js
│               ├── useMyOrders.js
│               └── useStore.js
└── App.jsx
```

## 🎯 Características de la Estructura

### Common (Compartido)
- **Layout, Header, Sidebar**: Componentes base del dashboard
- **Hooks compartidos**: Lógica común para ambos roles

### Admin Module
- **Gestión completa**: Productos, usuarios, órdenes, analytics
- **Servicios específicos**: APIs para funciones administrativas
- **Hooks especializados**: Manejo de estado para datos administrativos

### User Module
- **Vista de cliente**: Órdenes, tienda, perfil
- **Servicios de usuario**: APIs para funciones del cliente
- **Hooks de usuario**: Estado específico del cliente

## 🔄 Flujo de Navegación

1. **App.jsx** → Rutas principales
2. **AuthContext** → Manejo de autenticación
3. **ThemeContext** → Manejo de temas
4. **Dashboard Layout** → Estructura común
5. **Role-based routing** → Páginas específicas por rol