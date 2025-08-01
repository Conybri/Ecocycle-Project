# 🌱 Ecocycle Project

Una plataforma innovadora para promover el reciclaje y la sostenibilidad ambiental a través de soluciones tecnológicas.

![Ecocycle Banner](https://via.placeholder.com/800x200/4ade80/ffffff?text=🌱+Ecocycle+Project)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%5E4.4-green)](https://www.mongodb.com/)

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

## 📝 Descripción

Ecocycle es una aplicación web diseñada para facilitar y gamificar el proceso de reciclaje, conectando usuarios con puntos de reciclaje, proporcionando información educativa y recompensando las acciones ecológicas. El proyecto tiene como objetivo crear conciencia ambiental y promover prácticas sostenibles en la comunidad.

### 🎯 Motivación

El proyecto nace de la necesidad de:

- **Facilitar el acceso** a información sobre reciclaje
- **Conectar** a los usuarios con puntos de recolección cercanos
- **Gamificar** el proceso de reciclaje para aumentar la participación
- **Educar** sobre prácticas sostenibles y su impacto ambiental

## ✨ Características

- 🗺️ **Mapa Interactivo**: Localiza puntos de reciclaje cercanos
- 📊 **Sistema de Recompensas**: Gana puntos por actividades de reciclaje
- 📚 **Centro Educativo**: Aprende sobre diferentes tipos de residuos y su tratamiento
- 👤 **Perfil de Usuario**: Sigue tu progreso y logros ambientales
- 📱 **Responsive Design**: Optimizado para dispositivos móviles y desktop
- 🔔 **Notificaciones**: Recordatorios para actividades de reciclaje
- 📈 **Analytics**: Visualiza tu impacto ambiental personal

## 🚀 Demo

🔗 **Demo en vivo**: [https://ecocycle-demo.vercel.app](https://ecocycle-demo.vercel.app)

## 📦 Instalación

### Prerrequisitos

Asegúrate de tener instalado:

- Node.js (v14 o superior)
- npm o yarn
- MongoDB (v4.4 o superior)
- Git

### Configuración Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/Conybri/Ecocycle-Project.git
cd Ecocycle-Project
```

2. **Instalar dependencias**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. **Configurar variables de entorno**

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

4. **Inicializar la base de datos**
```bash
cd backend
npm run seed
```

## 🔧 Uso

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

3. **Abrir en el navegador**: `http://localhost:3000`

### Producción

```bash
# Construir el frontend
cd frontend
npm run build

# Iniciar el servidor de producción
cd ../backend
npm start
```

## 🛠️ Tecnologías

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

### DevOps y Herramientas
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

## 🔌 API

### Endpoints de Autenticación
```http
POST /api/auth/register    # Registro de usuario
POST /api/auth/login       # Inicio de sesión
POST /api/auth/logout      # Cerrar sesión
POST /api/auth/refresh     # Renovar token
```

### Endpoints de Usuario
```http
GET  /api/users/profile    # Obtener perfil
PUT  /api/users/profile    # Actualizar perfil
GET  /api/users/stats      # Estadísticas del usuario
```

### Endpoints de Puntos de Reciclaje
```http
GET  /api/recycling-points         # Listar puntos
POST /api/recycling-points         # Crear punto
GET  /api/recycling-points/:id     # Obtener punto específico
GET  /api/recycling-points/nearby  # Puntos cercanos
```

### Endpoints de Actividades
```http
POST /api/activities                    # Registrar actividad
GET  /api/activities/user/:userId       # Actividades del usuario
GET  /api/activities/leaderboard        # Tabla de líderes
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
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Directrices para Contribuir

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

### ✅ Fase 1 - Completada
- Sistema de autenticación
- Mapa de puntos de reciclaje
- Sistema básico de recompensas
- Perfil de usuario

### 🚧 Fase 2 - En Desarrollo
- App móvil (React Native)
- Sistema avanzado de gamificación
- Integración con redes sociales

### 📋 Fase 3 - Planificada
- Marketplace de recompensas
- AI para reconocimiento de residuos
- Blockchain para transparencia
- API pública
- Dashboard administrativo avanzado

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2024 Ecocycle Project Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👥 Equipo

- [Carlos Peña](https://github.com/Carlosssantonio) - Desarrollo Full Stack 
- [Consuelo Alejandra Pinto Toro](https://github.com/Arkanabytes) - Backend & DevOps
- [Constanza Badilla](https://github.com/Conybri) - Frontend & UI/UX
- [Jose Luis Lillo](https://github.com/Pilishijam-23) - QA & Testing
- [Felipe Galdames](https://github.com/galdamesf) - Mobile Development

## 📞 Contacto

- 📧 **Email**: [contacto@arkanabytes.com](mailto:contacto@arkanabytes.com)
- 🔗 **Proyecto**: [https://github.com/Conybri/Ecocycle-Project](https://github.com/Conybri/Ecocycle-Project)
- 💬 **Discusiones**: [GitHub Discussions](https://github.com/Conybri/Ecocycle-Project/discussions)

## 🙏 Agradecimientos

- Iconos por [Lucide](https://lucide.dev/)
- Inspiración en proyectos de sostenibilidad
- Comunidad open source

---

⭐ **¡No olvides darle una estrella al proyecto si te resulta útil!**

🌱 **Juntos podemos hacer la diferencia por un mundo más sostenible** 🌱
---

⭐ ¡No olvides darle una estrella al proyecto si te resulta útil!

🌱 **Juntos podemos hacer la diferencia por un mundo más sostenible** 🌱
