# Ecocycle-Project

# 🌱 Ecocycle Project

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Arkanabytes/Ecocycle-Project.svg)](https://github.com/Arkanabytes/Ecocycle-Project/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Arkanabytes/Ecocycle-Project.svg)](https://github.com/Arkanabytes/Ecocycle-Project/issues)
[![GitHub forks](https://img.shields.io/github/forks/Arkanabytes/Ecocycle-Project.svg)](https://github.com/Arkanabytes/Ecocycle-Project/network)

> Una plataforma innovadora para promover el reciclaje y la sostenibilidad ambiental a través de soluciones tecnológicas.

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Demo](#-demo)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API](#-api)
- [Contribuir](#-contribuir)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

## 🌍 Descripción

Ecocycle es una aplicación web diseñada para facilitar y gamificar el proceso de reciclaje, conectando usuarios con puntos de reciclaje, proporcionando información educativa y recompensando las acciones ecológicas. El proyecto tiene como objetivo crear conciencia ambiental y promover prácticas sostenibles en la comunidad.

### ✨ Motivación

El proyecto nace de la necesidad de:
- Facilitar el acceso a información sobre reciclaje
- Conectar a los usuarios con puntos de recolección cercanos
- Gamificar el proceso de reciclaje para aumentar la participación
- Educar sobre prácticas sostenibles y su impacto ambiental

## 🚀 Características

- **🗺️ Mapa Interactivo**: Localiza puntos de reciclaje cercanos
- **📊 Sistema de Recompensas**: Gana puntos por actividades de reciclaje
- **📚 Centro Educativo**: Aprende sobre diferentes tipos de residuos y su tratamiento
- **👤 Perfil de Usuario**: Sigue tu progreso y logros ambientales
- **📱 Responsive Design**: Optimizado para dispositivos móviles y desktop
- **🔔 Notificaciones**: Recordatorios para actividades de reciclaje
- **📈 Analytics**: Visualiza tu impacto ambiental personal

## 🎯 Demo

![Ecocycle Demo](screenshots/demo.gif)

🔗 **Demo en vivo**: [https://ecocycle-demo.vercel.app](https://ecocycle-demo.vercel.app)

## 🛠️ Instalación

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- MongoDB (v4.4 o superior)
- Git

### Clonar el Repositorio

```bash
git clone https://github.com/Arkanabytes/Ecocycle-Project.git
cd Ecocycle-Project
```

### Instalación del Backend

```bash
cd backend
npm install
```

### Instalación del Frontend

```bash
cd ../frontend
npm install
```

### Variables de Entorno

Crea un archivo `.env` en la carpeta del backend:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/ecocycle
DB_NAME=ecocycle

# JWT
JWT_SECRET=tu_jwt_secret_aqui
JWT_EXPIRE=7d

# API Keys
GOOGLE_MAPS_API_KEY=tu_google_maps_api_key
EMAIL_SERVICE_API_KEY=tu_email_service_key

# Server
PORT=5000
NODE_ENV=development
```

### Inicializar Base de Datos

```bash
cd backend
npm run seed
```

## 🎮 Uso

### Desarrollo

1. **Iniciar el backend**:
```bash
cd backend
npm run dev
```

2. **Iniciar el frontend**:
```bash
cd frontend
npm start
```

3. Abre tu navegador en `http://localhost:3000`

### Producción

```bash
# Construir el frontend
cd frontend
npm run build

# Iniciar el servidor de producción
cd ../backend
npm start
```

## 💻 Tecnologías

### Frontend
- **React.js** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **React Router** - Navegación
- **Axios** - Cliente HTTP
- **React Query** - Gestión de estado del servidor
- **React Hook Form** - Gestión de formularios

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación
- **Bcrypt** - Hash de contraseñas
- **Joi** - Validación de datos

### Herramientas y DevOps
- **Docker** - Containerización
- **GitHub Actions** - CI/CD
- **ESLint** - Linting
- **Prettier** - Formateo de código
- **Jest** - Testing

## 📁 Estructura del Proyecto

```
Ecocycle-Project/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   └── styles/
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── utils/
│   ├── tests/
│   └── package.json
├── docs/
├── docker-compose.yml
└── README.md
```

## 🔧 API

### Endpoints Principales

#### Autenticación
```
POST /api/auth/register     # Registro de usuario
POST /api/auth/login        # Inicio de sesión
POST /api/auth/logout       # Cerrar sesión
POST /api/auth/refresh      # Renovar token
```

#### Usuarios
```
GET    /api/users/profile   # Obtener perfil
PUT    /api/users/profile   # Actualizar perfil
GET    /api/users/stats     # Estadísticas del usuario
```

#### Puntos de Reciclaje
```
GET    /api/recycling-points          # Listar puntos
POST   /api/recycling-points          # Crear punto
GET    /api/recycling-points/:id      # Obtener punto específico
GET    /api/recycling-points/nearby   # Puntos cercanos
```

#### Actividades
```
POST   /api/activities                # Registrar actividad
GET    /api/activities/user/:userId   # Actividades del usuario
GET    /api/activities/leaderboard    # Tabla de líderes
```

### Ejemplo de Uso

```javascript
// Obtener puntos de reciclaje cercanos
const response = await fetch('/api/recycling-points/nearby?lat=-33.4489&lng=-70.6693&radius=5000');
const nearbyPoints = await response.json();
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Guías de Contribución

- Sigue el estilo de código existente
- Escribe tests para nuevas funcionalidades
- Actualiza la documentación cuando sea necesario
- Usa commits descriptivos siguiendo [Conventional Commits](https://conventionalcommits.org/)

### Tipos de Contribuciones

- 🐛 **Bug fixes**
- ✨ **Nuevas características**
- 📚 **Documentación**
- 🎨 **Mejoras de UI/UX**
- ⚡ **Optimizaciones de rendimiento**
- 🧪 **Tests**

## 🗺️ Roadmap

### Versión 1.0 ✅
- [x] Sistema de autenticación
- [x] Mapa de puntos de reciclaje
- [x] Sistema básico de recompensas
- [x] Perfil de usuario

### Versión 2.0 🚧
- [ ] App móvil (React Native)
- [ ] Sistema avanzado de gamificación
- [ ] Integración con redes sociales
- [ ] Marketplace de recompensas

### Versión 3.0 📋
- [ ] AI para reconocimiento de residuos
- [ ] Blockchain para transparencia
- [ ] API pública
- [ ] Dashboard administrativo avanzado

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2024 Arkanabytes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👨‍💻 Contacto

[*Consuelo Alejandra Pinto Toro*](https://github.com/Arkanabytes)
[*Constanza Badilla*](https://github.com/Conybri)
[*Carlos Peña*](https://github.com/Carlosssantonio)
[*Jose Lui Lillo*](https://github.com/Pilishijam-23)
[*Jose Lui Lillo*](https://github.com/galdamesf)


📧 Email: contacto@arkanabytes.com

🔗 Proyecto: [https://github.com/Arkanabytes/Ecocycle-Project](https://github.com/Arkanabytes/Ecocycle-Project)

---

### 🌟 Agradecimientos

- Iconos por [Lucide](https://lucide.dev/)
- Inspiración en proyectos de sostenibilidad
- Comunidad open source

### 📊 Estadísticas del Proyecto

![GitHub repo size](https://img.shields.io/github/repo-size/Arkanabytes/Ecocycle-Project)
![GitHub last commit](https://img.shields.io/github/last-commit/Arkanabytes/Ecocycle-Project)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Arkanabytes/Ecocycle-Project)

---

⭐ ¡No olvides darle una estrella al proyecto si te resulta útil!

🌱 **Juntos podemos hacer la diferencia por un mundo más sostenible** 🌱
