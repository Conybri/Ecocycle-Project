# 🌱 Ecocycle Project

<div align="center">

<h1>
  🌍 ECOCYCLE 
  <br>
  <sub>🌱 Reciclaje Inteligente • Futuro Sostenible 🌱</sub>
</h1>

```
         ♻️  E C O C Y C L E  ♻️
     ╭─────────────────────────────╮
     │  🌿 Plataforma de Reciclaje 🌿  │
     │   🌎 Sostenibilidad Digital 🌎   │
     ╰─────────────────────────────╯
```

**💚 Una plataforma innovadora que revoluciona el reciclaje a través de la tecnología 💚**

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://ecocycle-demo.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green.svg)](https://mongodb.com/)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Demo](#-demo)
- [Tecnologías](#️-tecnologías)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Uso](#-uso)
- [API Documentation](#-api-documentation)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribuir](#-contribuir)
- [Roadmap](#-roadmap)
- [Equipo](#-equipo)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🌍 Acerca del Proyecto

**Ecocycle** es una aplicación web full-stack diseñada para revolucionar la forma en que las personas interactúan con el reciclaje. Nuestra plataforma combina gamificación, educación ambiental y tecnología para crear una experiencia única que motiva a los usuarios a adoptar prácticas más sostenibles.

### 🎯 Objetivos

El proyecto nace de la necesidad urgente de abordar la crisis ambiental a través de:

- 🏃‍♂️ **Facilitar el acceso** a información sobre reciclaje y puntos de recolección
- 🗺️ **Conectar usuarios** con puntos de reciclaje cercanos mediante geolocalización
- 🎮 **Gamificar el proceso** para aumentar la participación y crear hábitos sostenibles
- 📚 **Educar sobre prácticas** ambientales y su impacto en el ecosistema
- 📊 **Medir el impacto** personal y colectivo en la sostenibilidad

---

## ✨ Características Principales

<div align="center">

| Característica | Descripción | Estado |
|---|---|:---:|
| 🗺️ **Mapa Interactivo** | Localiza puntos de reciclaje cercanos con filtros por tipo de residuo | ✅ |
| 📊 **Sistema de Recompensas** | Gana puntos, badges y sube en el ranking por actividades ecológicas | ✅ |
| 📚 **Centro Educativo** | Aprende sobre clasificación de residuos y su tratamiento | ✅ |
| 👤 **Perfil Personalizado** | Sigue tu progreso, logros e impacto ambiental | ✅ |
| 📱 **Diseño Responsive** | Optimizado para móviles, tablets y escritorio | ✅ |
| 🔔 **Notificaciones Smart** | Recordatorios personalizados para actividades de reciclaje | 🔄 |
| 📈 **Analytics Avanzado** | Visualiza tu impacto ambiental con gráficos interactivos | 🔄 |
| 🤖 **IA para Reconocimiento** | Identifica tipos de residuos usando visión artificial | 🔜 |

</div>

*✅ Completado • 🔄 En desarrollo • 🔜 Planificado*

---

## 🚀 Demo

<div align="center">

### [🔗 Ver Demo en Vivo](https://ecocycle-demo.vercel.app)

*Explora todas las funcionalidades de Ecocycle en nuestro entorno de demostración*

</div>

---

## ⚡️ Tecnologías

### Frontend
```
React 18+          TypeScript 4.9+       Tailwind CSS 3+
React Router 6     Axios                  React Query
React Hook Form    Framer Motion          Chart.js
```

### Backend
```
Node.js 14+        Express.js 4+          MongoDB 4.4+
Mongoose 6+        JWT                    Bcrypt
Joi Validation     Nodemailer             Socket.io
```

### DevOps & Herramientas
```
Docker             GitHub Actions         ESLint
Prettier           Jest                   Supertest
Postman            Vercel                 MongoDB Atlas
```

---

## 📦 Instalación

### Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** (v14 o superior) - [Descargar](https://nodejs.org/)
- **npm** o **yarn** - Incluido con Node.js
- **MongoDB** (v4.4 o superior) - [Descargar](https://mongodb.com/try/download/community)
- **Git** - [Descargar](https://git-scm.com/)

### Instalación Rápida

```bash
# 1. Clonar el repositorio
git clone https://github.com/Conybri/Ecocycle-Project.git
cd Ecocycle-Project

# 2. Instalar dependencias del backend
cd backend
npm install

# 3. Instalar dependencias del frontend
cd ../frontend
npm install

# 4. Volver al directorio raíz
cd ..
```

---

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la carpeta `backend/` con las siguientes variables:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/ecocycle
DB_NAME=ecocycle

# JWT Configuration
JWT_SECRET=tu_jwt_secret_super_seguro_aqui
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=tu_refresh_secret_aqui
JWT_REFRESH_EXPIRE=30d

# API Keys
GOOGLE_MAPS_API_KEY=tu_google_maps_api_key
EMAIL_SERVICE_API_KEY=tu_email_service_key
CLOUDINARY_CLOUD_NAME=tu_cloudinary_name
CLOUDINARY_API_KEY=tu_cloudinary_api_key
CLOUDINARY_API_SECRET=tu_cloudinary_secret

# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Base de Datos

```bash
# Inicializar la base de datos con datos de prueba
cd backend
npm run seed

# O usar Docker para MongoDB
docker run --name ecocycle-mongo -p 27017:27017 -d mongo:4.4
```

---

## 🎮 Uso

### Desarrollo

```bash
# Terminal 1 - Iniciar el backend
cd backend
npm run dev
# Servidor corriendo en http://localhost:5000

# Terminal 2 - Iniciar el frontend
cd frontend
npm start
# Aplicación disponible en http://localhost:3000
```

### Producción

```bash
# Construir el frontend
cd frontend
npm run build

# Iniciar el servidor de producción
cd ../backend
npm start
```

### Docker (Opcional)

```bash
# Iniciar toda la aplicación con Docker Compose
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

---

## 📡 API Documentation

### Autenticación

```http
POST /api/auth/register    # Registro de usuario
POST /api/auth/login       # Inicio de sesión
POST /api/auth/logout      # Cerrar sesión
POST /api/auth/refresh     # Renovar token
POST /api/auth/forgot      # Recuperar contraseña
POST /api/auth/reset       # Restablecer contraseña
```

### Usuarios

```http
GET    /api/users/profile       # Obtener perfil del usuario
PUT    /api/users/profile       # Actualizar perfil
GET    /api/users/stats         # Estadísticas personales
GET    /api/users/achievements  # Logros del usuario
DELETE /api/users/account       # Eliminar cuenta
```

### Puntos de Reciclaje

```http
GET  /api/recycling-points              # Listar todos los puntos
POST /api/recycling-points              # Crear nuevo punto
GET  /api/recycling-points/:id          # Obtener punto específico
PUT  /api/recycling-points/:id          # Actualizar punto
GET  /api/recycling-points/nearby       # Puntos cercanos
GET  /api/recycling-points/search       # Buscar puntos
```

### Actividades

```http
POST /api/activities              # Registrar nueva actividad
GET  /api/activities/user/:id     # Actividades de un usuario
GET  /api/activities/leaderboard  # Tabla de clasificación
GET  /api/activities/stats        # Estadísticas globales
```

### Ejemplo de Uso

```javascript
// Obtener puntos de reciclaje cercanos
const response = await fetch('/api/recycling-points/nearby?lat=-33.4489&lng=-70.6693&radius=5000');
const nearbyPoints = await response.json();

// Registrar actividad de reciclaje
const activity = await fetch('/api/activities', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    type: 'recycling',
    points: 50,
    description: 'Reciclé 5 botellas de plástico'
  })
});
```

---

## 📁 Estructura del Proyecto

```
Ecocycle-Project/
├── 📁 frontend/
│   ├── 📁 public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── 📁 src/
│   │   ├── 📁 components/       # Componentes reutilizables
│   │   │   ├── common/
│   │   │   ├── forms/
│   │   │   └── layout/
│   │   ├── 📁 pages/           # Páginas principales
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   └── map/
│   │   ├── 📁 hooks/           # Custom hooks
│   │   ├── 📁 services/        # API calls
│   │   ├── 📁 utils/           # Utilidades
│   │   ├── 📁 styles/          # Estilos globales
│   │   └── 📁 types/           # TypeScript types
│   ├── package.json
│   └── tailwind.config.js
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # Lógica de controladores
│   │   ├── 📁 models/          # Modelos de MongoDB
│   │   ├── 📁 routes/          # Definición de rutas
│   │   ├── 📁 middleware/      # Middleware personalizado
│   │   ├── 📁 services/        # Lógica de negocio
│   │   ├── 📁 utils/           # Utilidades del servidor
│   │   └── 📁 config/          # Configuraciones
│   ├── 📁 tests/               # Tests unitarios e integración
│   └── package.json
├── 📁 docs/                    # Documentación adicional
├── 📁 scripts/                 # Scripts de automatización
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🤝 Contribuir

¡Las contribuciones son lo que hace que la comunidad open source sea un lugar increíble para aprender, inspirar y crear! Cualquier contribución que hagas será **muy apreciada**.

### Proceso de Contribución

1. **Fork** el proyecto
2. **Clona** tu fork (`git clone https://github.com/tu-usuario/Ecocycle-Project.git`)
3. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
4. **Commit** tus cambios (`git commit -m 'Add: amazing new feature'`)
5. **Push** a la rama (`git push origin feature/AmazingFeature`)
6. **Abre** un Pull Request

### Guías de Contribución

- 📝 **Código**: Sigue el estilo de código existente y las convenciones
- 🧪 **Testing**: Escribe tests para nuevas funcionalidades
- 📚 **Documentación**: Actualiza la documentación cuando sea necesario
- 💬 **Commits**: Usa [Conventional Commits](https://conventionalcommits.org/)

### Tipos de Contribuciones

- 🐛 **Bug fixes** - Corrección de errores
- ✨ **Features** - Nuevas características
- 📚 **Documentation** - Mejoras en documentación
- 🎨 **UI/UX** - Mejoras de interfaz y experiencia
- ⚡ **Performance** - Optimizaciones de rendimiento
- 🧪 **Testing** - Mejoras en tests
- 🔧 **Refactoring** - Mejoras en el código

---

## 🗺️ Roadmap

### ✅ Fase 1 - MVP (Completado)
- [x] Sistema de autenticación de usuarios
- [x] Mapa interactivo de puntos de reciclaje
- [x] Sistema básico de recompensas y puntos
- [x] Perfil de usuario con estadísticas
- [x] Diseño responsive

### 🔄 Fase 2 - Gamificación Avanzada (En Desarrollo)
- [ ] Sistema de badges y logros avanzado
- [ ] Desafíos semanales y mensuales
- [ ] Rankings y tablas de líderes por región
- [ ] Sistema de notificaciones push

### 🔜 Fase 3 - Expansión (Planificado)
- [ ] App móvil nativa (React Native)
- [ ] Integración con redes sociales
- [ ] Marketplace de recompensas y canjes
- [ ] Dashboard administrativo avanzado

### 🚀 Fase 4 - Innovación (Futuro)
- [ ] IA para reconocimiento automático de residuos
- [ ] Blockchain para transparencia de impacto
- [ ] API pública para desarrolladores
- [ ] Integración con IoT y sensores inteligentes

---

## 👥 Equipo

<div align="center">

<table>
<tr>
<td align="center">
<a href="https://github.com/Arkanabytes">
<img src="https://github.com/Arkanabytes.png" width="100px;" alt="Consuelo"/>
<br />
<sub><b>Consuelo Alejandra Pinto</b></sub>
</a>
<br />
<sub>🚀 Project Lead & Full Stack</sub>
</td>
<td align="center">
<a href="https://github.com/Conybri">
<img src="https://github.com/Conybri.png" width="100px;" alt="Constanza"/>
<br />
<sub><b>Constanza Badilla</b></sub>
</a>
<br />
<sub>🎨 Frontend & UX/UI</sub>
</td>
<td align="center">
<a href="https://github.com/Carlosssantonio">
<img src="https://github.com/Carlosssantonio.png" width="100px;" alt="Carlos"/>
<br />
<sub><b>Carlos Peña</b></sub>
</a>
<br />
<sub>⚙️ Backend & DevOps</sub>
</td>
<td align="center">
<a href="https://github.com/Pilishijam-23">
<img src="https://github.com/Pilishijam-23.png" width="100px;" alt="Jose Luis"/>
<br />
<sub><b>Jose Luis Lillo</b></sub>
</a>
<br />
<sub>📊 Data & Analytics</sub>
</td>
<td align="center">
<a href="https://github.com/galdamesf">
<img src="https://github.com/galdamesf.png" width="100px;" alt="Galdames"/>
<br />
<sub><b>Felipe Galdames</b></sub>
</a>
<br />
<sub>🧪 QA & Testing</sub>
</td>
</tr>
</table>

</div>

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License - Copyright (c) 2024 Ecocycle Team

Se concede permiso, libre de cargos, a cualquier persona que obtenga una copia
de este software para usar, copiar, modificar, fusionar, publicar, distribuir,
sublicenciar, y/o vender copias del Software.
```

---

## 📞 Contacto

<div align="center">

### 💬 ¡Conecta con Nosotros!

[![Email](https://img.shields.io/badge/Email-contacto@ecocycle.com-blue?style=for-the-badge&logo=gmail)](mailto:contacto@arkanabytes.com)
[![GitHub](https://img.shields.io/badge/GitHub-Ecocycle--Project-black?style=for-the-badge&logo=github)](https://github.com/Conybri/Ecocycle-Project)
[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen?style=for-the-badge&logo=vercel)](https://ecocycle-demo.vercel.app)

</div>

---

## 🙏 Agradecimientos

- 🎨 **Iconos** por [Lucide Icons](https://lucide.dev/)
- 🌍 **Inspiración** en proyectos de sostenibilidad global
- 👥 **Comunidad Open Source** por su apoyo constante
- 🌱 **Activistas ambientales** que luchan por un mundo mejor

---

<div align="center">

### ⭐ ¡No olvides darle una estrella al proyecto si te resulta útil!

### 🌱 Juntos podemos hacer la diferencia por un mundo más sostenible 🌱

*Hecho con 💚 por el equipo de Ecocycle*

</div>
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
