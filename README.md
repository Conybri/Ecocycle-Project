<div align="center">

*Plataforma Tecnológica Avanzada para Sostenibilidad Ambiental*
</div>

<div align="center">

![Ecocycle Banner](https://capsule-render.vercel.app/api?type=waving&color=0:228B22,50:32CD32,100:90EE90&height=300&section=header&text=ECOCYCLE&fontSize=80&fontColor=ffffff&animation=twinkling&fontAlignY=38&desc=Innovación%20Sostenible%20para%20un%20Futuro%20Verde&descAlignY=55&descSize=20)


<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=228B22&center=true&vCenter=true&width=600&lines=🌱+Revolucionando+el+Reciclaje;🔬+Tecnología+Avanzada+de+IA;🎮+Gamificación+Inteligente;🌍+Impacto+Ambiental+Real;📊+Analytics+de+Sostenibilidad" alt="Typing SVG" />



![EcoCycle Banner](https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80)

**Una plataforma innovadora para promover el reciclaje y la sostenibilidad ambiental a través de soluciones tecnológicas.**

[![GitHub Stars](https://img.shields.io/github/stars/Conybri/Ecocycle-Project?style=for-the-badge&logo=github&color=green)](https://github.com/Conybri/Ecocycle-Project/stargazers)
[![License](https://img.shields.io/github/license/Conybri/Ecocycle-Project?style=for-the-badge&color=blue)](https://github.com/Conybri/Ecocycle-Project/blob/main/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/Conybri/Ecocycle-Project?style=for-the-badge&color=orange)](https://github.com/Conybri/Ecocycle-Project/network)
[![GitHub issues](https://img.shields.io/github/issues/Conybri/Ecocycle-Project?style=for-the-badge&color=red)](https://github.com/Conybri/Ecocycle-Project/issues)

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[🚀 Demo en Vivo](https://ecocycle-demo.vercel.app) • 
[📖 Documentación](https://github.com/Conybri/Ecocycle-Project/wiki) • 
[🐛 Reportar Bug](https://github.com/Conybri/Ecocycle-Project/issues) • 
[💡 Solicitar Feature](https://github.com/Conybri/Ecocycle-Project/issues/new?template=feature_request.md)

</div>

---

## 🌍 Acerca del Proyecto

**EcoCycle** es una aplicación web diseñada para revolucionar la forma en que las personas se relacionan con el reciclaje. A través de gamificación, educación y tecnología, creamos una comunidad comprometida con la sostenibilidad ambiental.

### 🎯 Misión
Facilitar y gamificar el proceso de reciclaje para crear conciencia ambiental y promover prácticas sostenibles en nuestras comunidades.

### ⚡ Estadísticas del Proyecto
<div align="center">

| 📊 Métrica | 🔢 Valor |
|------------|----------|
| 🌱 Usuarios Registrados | 1,250+ |
| ♻️ Materiales Reciclados | 15.2 toneladas |
| 🏆 Puntos de Reciclaje | 340+ |
| 🌎 CO2 Reducido | 8.7 toneladas |

</div>

---

## ✨ Características Principales

<div align="center">

### 🗺️ **Mapa Interactivo**
Encuentra puntos de reciclaje cercanos con filtros avanzados

### 🏆 **Sistema de Gamificación**
Gana puntos, desbloquea logros y compite en rankings

### 📚 **Centro Educativo**
Aprende sobre reciclaje con contenido interactivo

### 📱 **Diseño Responsivo**
Experiencia optimizada en todos los dispositivos

### 📊 **Analytics Personal**
Visualiza tu impacto ambiental en tiempo real

### 🔔 **Notificaciones Smart**
Recordatorios personalizados para maximizar tu impacto

</div>

---

## 🛠️ Stack Tecnológico

### Frontend
```javascript
{
  "framework": "React 18.2.0",
  "language": "TypeScript 5.0+",
  "styling": "Tailwind CSS",
  "routing": "React Router v6",
  "state": "React Query + Context",
  "forms": "React Hook Form",
  "charts": "Chart.js"
}
```

### Backend
```javascript
{
  "runtime": "Node.js 18+",
  "framework": "Vite",
  "database": "MySQL",
  "adm": "User",
  "auth": "JWT + Bcrypt",
  "validation": "Joi",
  "testing": "Jest + Supertest"
}
```

### DevOps & Tools
```yaml
deployment:
  - Docker
  - GitHub Actions
  - Vercel
  - MySQL

development:
  - ESLint + Prettier
  - Husky (Git Hooks)
  - Conventional Commits
  - SonarQube
```

---

## 🚀 Inicio Rápido

### 📋 Prerequisitos

- [Node.js](https://nodejs.org/) (v18.0 o superior)
- [MySQL](https://www.mysql.com/) (v6.0 o superior)
- [Git](https://git-scm.com/)

### 📥 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Conybri/Ecocycle-Project.git
   cd Ecocycle-Project
   ```

2. **Instala las dependencias**
   ```bash
   # Backend
   cd backend && npm install
   
   # Frontend
   cd ../frontend && npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   # Crea el archivo .env en la carpeta backend
   cp backend/.env.example backend/.env
   ```
   
   Edita el archivo `.env`:
   ```env
   # 🗄️ Database
   MySQL_URI=MySQL://localhost:3057/ecocycle
   DB_NAME=ecocycle
   
   # 🔐 JWT Configuration
   JWT_SECRET=tu_super_secreto_jwt_aqui
   JWT_EXPIRE=7d
   
   # 🗺️ External APIs
   GOOGLE_MAPS_API_KEY=tu_google_maps_api_key
   EMAIL_SERVICE_API_KEY=tu_email_service_key
   
   # 🌐 Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

4. **Inicializa la base de datos**
   ```bash
   cd backend && npm run seed
   ```

5. **Inicia el proyecto**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev
   
   # Terminal 2 - Frontend  
   cd frontend && npm start
   ```

6. **¡Listo!** 🎉
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Docs: http://localhost:5000/api-docs

---

## 📖 Documentación de API

### 🔐 Autenticación
```http
POST /api/auth/register     # Registro de usuario
POST /api/auth/login        # Inicio de sesión  
POST /api/auth/logout       # Cerrar sesión
POST /api/auth/refresh      # Renovar token
GET  /api/auth/verify       # Verificar token
```

### 👤 Usuario
```http
GET    /api/users/profile      # Obtener perfil
PUT    /api/users/profile      # Actualizar perfil
GET    /api/users/stats        # Estadísticas del usuario
DELETE /api/users/account      # Eliminar cuenta
```

### 🗺️ Puntos de Reciclaje
```http
GET  /api/recycling-points           # Listar todos los puntos
POST /api/recycling-points           # Crear nuevo punto
GET  /api/recycling-points/:id       # Obtener punto específico
GET  /api/recycling-points/nearby    # Puntos cercanos
PUT  /api/recycling-points/:id       # Actualizar punto
```

### 📊 Actividades
```http
POST /api/activities                    # Registrar actividad
GET  /api/activities/user/:userId       # Actividades del usuario
GET  /api/activities/leaderboard        # Tabla de líderes
GET  /api/activities/stats/global       # Estadísticas globales
```

### 💡 Ejemplo de Uso
```javascript
// Obtener puntos de reciclaje cercanos
const response = await fetch('/api/recycling-points/nearby?lat=-33.4489&lng=-70.6693&radius=5000', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

const nearbyPoints = await response.json();
console.log(`Encontrados ${nearbyPoints.length} puntos cercanos`);
```

---

## 🏗️ Estructura del Proyecto

```
🌿 Ecocycle-Project/
├── 🎨 frontend/
│   ├── 📁 public/
│   │   ├── 🖼️ images/
│   │   ├── 🌐 icons/
│   │   └── 📄 index.html
│   ├── 📁 src/
│   │   ├── 🧩 components/
│   │   │   ├── 🔄 common/
│   │   │   ├── 🗺️ map/
│   │   │   ├── 👤 user/
│   │   │   └── 📊 dashboard/
│   │   ├── 📄 pages/
│   │   ├── 🪝 hooks/
│   │   ├── 🔧 services/
│   │   ├── 🛠️ utils/
│   │   ├── 🎨 styles/
│   │   └── 🧪 __tests__/
│   ├── 📦 package.json
│   └── ⚙️ tailwind.config.js
├── ⚙️ backend/
│   ├── 📁 src/
│   │   ├── 🎮 controllers/
│   │   ├── 📊 models/
│   │   ├── 🛣️ routes/
│   │   ├── 🛡️ middleware/
│   │   ├── 🔧 services/
│   │   ├── 🛠️ utils/
│   │   └── ⚙️ config/
│   ├── 🧪 tests/
│   ├── 📊 seeds/
│   └── 📦 package.json
├── 🐳 docker/
├── 📚 docs/
├── 🔧 scripts/
├── 🐳 docker-compose.yml
├── 📋 CHANGELOG.md
└── 📖 README.md
```

---

## 🤝 Contribuir

¡Las contribuciones son lo que hacen que la comunidad open source sea un lugar increíble para aprender, inspirar y crear! Cualquier contribución que hagas será **muy apreciada**.

### 🚀 Cómo Contribuir

1. **Fork el Proyecto**
   ```bash
   # Haz fork desde GitHub o usa la CLI
   gh repo fork Conybri/Ecocycle-Project
   ```

2. **Crea tu Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Realiza tus Cambios**
   ```bash
   # Sigue las convenciones de commit
   git commit -m "feat: add some AmazingFeature"
   ```

4. **Push a la Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Abre un Pull Request**
   - Usa nuestras [plantillas de PR](https://github.com/Conybri/Ecocycle-Project/blob/main/.github/pull_request_template.md)
   - Describe los cambios realizados
   - Incluye screenshots si aplica

### 📝 Guías de Contribución

- 📏 Sigue el [estilo de código](https://github.com/Conybri/Ecocycle-Project/wiki/Code-Style) existente
- 🧪 Escribe tests para nuevas funcionalidades
- 📚 Actualiza la documentación cuando sea necesario
- 📋 Usa [Conventional Commits](https://conventionalcommits.org/)
- ✅ Asegúrate de que todos los tests pasen

### 🏷️ Tipos de Contribución

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| 🐛 `fix` | Corrección de bugs | `fix: resolve map loading issue` |
| ✨ `feat` | Nueva funcionalidad | `feat: add dark mode support` |
| 📚 `docs` | Documentación | `docs: update installation guide` |
| 🎨 `style` | UI/UX improvements | `style: improve button hover effects` |
| ⚡ `perf` | Optimizaciones | `perf: optimize image loading` |
| 🧪 `test` | Tests | `test: add user registration tests` |

---

## 🗺️ Roadmap

### ✅ Fase 1 - MVP (Completada)
- [x] Sistema de autenticación
- [x] Mapa de puntos de reciclaje
- [x] Sistema básico de recompensas
- [x] Perfil de usuario
- [x] Dashboard administrativo

### 🚧 Fase 2 - En Desarrollo
- [ ] 📱 App móvil (React Native)
- [ ] 🎮 Sistema avanzado de gamificación
- [ ] 🔗 Integración con redes sociales
- [ ] 🛒 Marketplace de recompensas
- [ ] 🔔 Notificaciones push

### 🔮 Fase 3 - Futuro
- [ ] 🤖 AI para reconocimiento de residuos
- [ ] ⛓️ Blockchain para transparencia
- [ ] 🌐 API pública v2
- [ ] 📊 Dashboard administrativo avanzado
- [ ] 🌍 Expansión internacional

### 💡 Ideas en Evaluación
- [ ] 🏢 Integración con empresas
- [ ] 📈 Métricas de impacto ambiental avanzadas
- [ ] 🎓 Programa educativo para escuelas
- [ ] 🤝 Partnerships con ONGs

---

## 📊 Métricas y Analytics

<div align="center">

### 📈 Actividad del Repositorio
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Conybri/Ecocycle-Project?style=for-the-badge&color=green)
![GitHub last commit](https://img.shields.io/github/last-commit/Conybri/Ecocycle-Project?style=for-the-badge&color=blue)

### 👥 Comunidad
![GitHub contributors](https://img.shields.io/github/contributors/Conybri/Ecocycle-Project?style=for-the-badge&color=orange)
![GitHub watchers](https://img.shields.io/github/watchers/Conybri/Ecocycle-Project?style=for-the-badge&color=red)

### 💻 Código
![GitHub code size](https://img.shields.io/github/languages/code-size/Conybri/Ecocycle-Project?style=for-the-badge&color=purple)
![Lines of code](https://img.shields.io/tokei/lines/github/Conybri/Ecocycle-Project?style=for-the-badge&color=yellow)

</div>

---

## 🏆 Reconocimientos

### 👨‍💻 Core Team

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/Arkanabytes">
        <img src="https://github.com/Arkanabytes.png" width="100px;" alt="Consuelo Alejandra Pinto Toro"/><br />
        <sub><b>Consuelo Alejandra Pinto Toro</b></sub>
      </a><br />
      <sub>🎯 Project Lead & Full Stack</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Conybri">
        <img src="https://github.com/Conybri.png" width="100px;" alt="Constanza Badilla"/><br />
        <sub><b>Constanza Badilla</b></sub>
      </a><br />
      <sub>🎨 Frontend & UX/UI</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Carlosssantonio">
        <img src="https://github.com/Carlosssantonio.png" width="100px;" alt="Carlos Peña"/><br />
        <sub><b>Carlos Peña</b></sub>
      </a><br />
      <sub>⚙️ Backend & Database</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/Pilishijam-23">
        <img src="https://github.com/Pilishijam-23.png" width="100px;" alt="Jose Luis Lillo"/><br />
        <sub><b>Jose Luis Lillo</b></sub>
      </a><br />
      <sub>🧪 Testing & QA</sub>
    </td>
    <td align="center">
      <a href="https://github.com/galdamesf">
        <img src="https://github.com/galdamesf.png" width="100px;" alt="Jose Luis Lillo"/><br />
        <sub><b>Jose Luis Lillo</b></sub>
      </a><br />
      <sub>🗺️ Maps & Geolocation</sub>
    </td>
    <td align="center">
      <strong>¿Tu foto aquí?</strong><br />
      <sub><a href="#-contribuir">¡Únete al equipo!</a></sub>
    </td>
  </tr>
</table>

### 🙏 Agradecimientos Especiales

- 🎨 **Iconos**: [Lucide](https://lucide.dev/) por los increíbles iconos
- 🌍 **Mapas**: [Google Maps API](https://developers.google.com/maps) por la funcionalidad de mapas
- 📚 **Documentación**: [Shields.io](https://shields.io/) por los badges dinámicos
- 🌱 **Inspiración**: Comunidad open source y proyectos de sostenibilidad
- ☕ **Motivación**: Café y la pasión por un mundo más verde

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - consulta el archivo [LICENSE](https://github.com/Conybri/Ecocycle-Project/blob/main/LICENSE) para más detalles.

```
MIT License - Copyright (c) 2024 EcoCycle Project Contributors

Se concede permiso para usar, copiar, modificar y distribuir este software
con fines comerciales y no comerciales, siempre que se incluya este aviso.
```

---

## 📞 Contacto

<div align="center">

### 🌐 Enlaces Oficiales
[![Website](https://img.shields.io/badge/Website-ecocycle.dev-green?style=for-the-badge&logo=google-chrome)](https://ecocycle-demo.vercel.app)
[![Documentation](https://img.shields.io/badge/Docs-Wiki-blue?style=for-the-badge&logo=gitbook)](https://github.com/Conybri/Ecocycle-Project/wiki)

### 💌 Comunicación
[![Email](https://img.shields.io/badge/Email-contacto@arkanabytes.com-red?style=for-the-badge&logo=gmail)](mailto:contacto@arkanabytes.com)
[![Discord](https://img.shields.io/badge/Discord-EcoCycle-7289DA?style=for-the-badge&logo=discord)](https://discord.gg/ecocycle)

### 🔗 Síguenos
[![GitHub](https://img.shields.io/badge/GitHub-Ecocycle--Project-black?style=for-the-badge&logo=github)](https://github.com/Conybri/Ecocycle-Project)
[![Twitter](https://img.shields.io/badge/Twitter-@EcoCycleApp-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/EcoCycleApp)

</div>

---

<div align="center">

## 🌱 Juntos por un Mundo Más Verde

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**

*Cada estrella nos motiva a seguir desarrollando herramientas para un futuro más sostenible* 🌍💚

[![Star History Chart](https://api.star-history.com/svg?repos=Conybri/Ecocycle-Project&type=Date)](https://star-history.com/#Conybri/Ecocycle-Project&Date)

---

<sub>Hecho con 💚 por el equipo de EcoCycle • © 2024 Todos los derechos reservados</sub>

</div>
