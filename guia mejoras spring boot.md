# Guía Completa para Mejorar un Proyecto Spring Boot: De Básico a Empresarial

Esta guía detallada combina las mejores prácticas y mejoras descritas en los documentos proporcionados, transformando un proyecto Spring Boot básico en una **API RESTful robusta, segura y escalable**. Está diseñada para ser un recurso completo y explicativo que facilite el estudio y la implementación de las mejoras, siguiendo una estructura clara y organizada.

---

## 🎯 Objetivo General
Transformar un proyecto Spring Boot en una aplicación empresarial que cumpla con:
- **Escalabilidad**: Preparada para entornos de producción.
- **Seguridad**: Protección de datos sensibles y autenticación robusta.
- **Mantenibilidad**: Código limpio, modular y bien documentado.
- **Eficiencia**: Optimización de consultas y carga de datos.
- **Flexibilidad**: Configuración adaptable a diferentes entornos (dev, test, prod).

---

## 📋 Preparación Inicial
Antes de implementar las mejoras, asegúrate de:
1. **Abrir el proyecto** en un IDE como IntelliJ IDEA, VS Code o Eclipse.
2. **Sincronizar Maven** después de cada cambio en `pom.xml` (`mvn clean install`).
3. **Reiniciar la aplicación** tras cada sección importante para validar los cambios.
4. **Hacer un respaldo** del proyecto para evitar pérdida de datos.
5. **Configurar una base de datos PostgreSQL** (o MySQL, según prefieras) y verificar su conexión.

**Ubicación del proyecto (ejemplo):** `C:\Users\carlo\Desktop\ecocyclejs1\spring base\demo1`

---

## 🔧 1. Configuración de Variables de Entorno
Centralizar y proteger las configuraciones sensibles utilizando variables de entorno para facilitar la gestión entre entornos (desarrollo, pruebas, producción).

### Problema Original
- Configuraciones sensibles (credenciales, URLs) hardcodeadas en el código.
- Falta de flexibilidad para cambiar configuraciones entre entornos.
- Riesgo de seguridad al exponer datos sensibles en el control de versiones.

### Solución Implementada
1. **Agregar dependencia `spring-dotenv`** para cargar variables desde un archivo `.env`.
2. Crear un archivo `.env` en la raíz del proyecto.
3. Actualizar la configuración en `application.yml` para usar las variables de entorno.

#### 1.1 Agregar Dependencia
Actualiza el archivo `pom.xml`:

```xml
<dependency>
    <groupId>me.paulschwarz</groupId>
    <artifactId>spring-dotenv</artifactId>
    <version>4.0.0</version>
</dependency>
```

#### 1.2 Crear Archivo `.env`
En la raíz del proyecto, crea un archivo `.env`:

```env
# Base de datos
DB_URL=jdbc:postgresql://localhost:5432/ecocycle_db
DB_USERNAME=admin
DB_PASSWORD=secure_password
# Puerto
PORT=8081
# JWT (para autenticación futura)
JWT_SECRET=your_very_long_secret_key_here
```

**Nota:** No incluyas el archivo `.env` en el control de versiones (agrega `.env` al `.gitignore`).

#### 1.3 Configurar `application.yml`
Reemplaza `application.properties` con `application.yml` para una configuración más legible:

```yaml
spring:
  datasource:
    url: ${DB_URL}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update  # Usa 'validate' o 'none' en producción
    show-sql: true
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
server:
  port: ${PORT:8081}
jwt:
  secret: ${JWT_SECRET}
```

### Beneficios
- **Seguridad**: Credenciales fuera del código y del control de versiones.
- **Flexibilidad**: Configuración adaptable sin modificar el código.
- **Centralización**: Un único archivo para todas las configuraciones sensibles.

---

## 🏗️ 2. Refactorización de Modelos (Entidades JPA)
Mejorar las entidades JPA para garantizar robustez, seguridad y eficiencia en la gestión de datos.

### 2.1 Estructura de la Entidad `Usuario`
Crea una entidad optimizada con validaciones, tipos modernos y manejo automático de fechas.

**Archivo:** `src/main/java/com/example/demo/model/Usuario.java`

```java
package com.example.demo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.Instant;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    @Size(min = 2, max = 15, message = "El nombre debe tener entre 2 y 15 caracteres")
    @Column(nullable = false, length = 15)
    private String nombre;

    @NotBlank(message = "El apellido es obligatorio")
    @Size(min = 2, max = 15, message = "El apellido debe tener entre 2 y 15 caracteres")
    @Column(nullable = false, length = 15)
    private String apellido;

    @Email(message = "El email debe tener formato válido")
    @NotBlank(message = "El email es obligatorio")
    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @NotBlank(message = "La contraseña es obligatoria")
    @Column(nullable = false, length = 255) // Para hash BCrypt
    private String password;

    @Size(max = 50, message = "La ciudad no puede exceder los 50 caracteres")
    @Column(length = 50)
    private String ciudad;

    @Column(name = "puntos_totales")
    private Integer puntosTotales;

    @NotNull(message = "La fecha de registro es obligatoria")
    @Column(name = "fecha_registro", nullable = false)
    private Instant fechaRegistro;

    @Column(name = "fecha_actualizacion")
    private Instant fechaActualizacion;

    @PrePersist
    protected void onCreate() {
        fechaRegistro = Instant.now();
        fechaActualizacion = Instant.now();
    }

    @PreUpdate
    protected void onUpdate() {
        fechaActualizacion = Instant.now();
    }

    // Constructores
    public Usuario() {}

    public Usuario(String nombre, String apellido, String email, String password, String ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.puntosTotales = 0;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getCiudad() { return ciudad; }
    public void setCiudad(String ciudad) { this.ciudad = ciudad; }
    public Integer getPuntosTotales() { return puntosTotales; }
    public void setPuntosTotales(Integer puntosTotales) { this.puntosTotales = puntosTotales; }
    public Instant getFechaRegistro() { return fechaRegistro; }
    public void setFechaRegistro(Instant fechaRegistro) { this.fechaRegistro = fechaRegistro; }
    public Instant getFechaActualizacion() { return fechaActualizacion; }
    public void setFechaActualizacion(Instant fechaActualizacion) { this.fechaActualizacion = fechaActualizacion; }
}
```

### 2.2 Claves Compuestas (Opcional)
Para entidades con relaciones complejas (ej. `EmpresaMaterial`), usa claves compuestas con `@EmbeddedId`.

**Archivo:** `src/main/java/com/example/demo/model/EmpresaMaterialId.java`

```java
package com.example.demo.model;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class EmpresaMaterialId implements Serializable {
    @Column(name = "empresa_id")
    private Long empresaId;

    @Column(name = "material_id")
    private Long materialId;

    // Constructores
    public EmpresaMaterialId() {}

    public EmpresaMaterialId(Long empresaId, Long materialId) {
        this.empresaId = empresaId;
        this.materialId = materialId;
    }

    // Getters y Setters
    public Long getEmpresaId() { return empresaId; }
    public void setEmpresaId(Long empresaId) { this.empresaId = empresaId; }
    public Long getMaterialId() { return materialId; }
    public void setMaterialId(Long materialId) { this.materialId = materialId; }

    // equals() y hashCode()
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmpresaMaterialId that = (EmpresaMaterialId) o;
        return Objects.equals(empresaId, that.empresaId) &&
               Objects.equals(materialId, that.materialId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(empresaId, materialId);
    }
}
```

**Archivo:** `src/main/java/com/example/demo/model/EmpresaMaterial.java`

```java
package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "empresa_material")
public class EmpresaMaterial {

    @EmbeddedId
    private EmpresaMaterialId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("empresaId")
    @JoinColumn(name = "empresa_id")
    private Empresa empresa;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("materialId")
    @JoinColumn(name = "material_id")
    private Material material;

    // Constructores
    public EmpresaMaterial() {}

    public EmpresaMaterial(Empresa empresa, Material material) {
        this.empresa = empresa;
        this.material = material;
        this.id = new EmpresaMaterialId(empresa.getId(), material.getId());
    }

    // Getters y Setters
    public EmpresaMaterialId getId() { return id; }
    public void setId(EmpresaMaterialId id) { this.id = id; }
    public Empresa getEmpresa() { return empresa; }
    public void setEmpresa(Empresa empresa) { this.empresa = empresa; }
    public Material getMaterial() { return material; }
    public void setMaterial(Material material) { this.material = material; }
}
```

### Beneficios
- **Validaciones**: Aseguran datos consistentes con Jakarta Validation.
- **Tipos Modernos**: Uso de `Instant` para fechas, más seguro y compatible con JSON.
- **Lazy Loading**: Optimización de consultas con `FetchType.LAZY`.
- **Claves Compuestas**: Soporte para relaciones complejas con `@EmbeddedId`.
- **Auditoría**: Registro automático de fechas de creación y actualización.

---

## 📊 3. Capa de Repositorio
Crear repositorios JPA optimizados con métodos de consulta derivados y personalizados.

**Archivo:** `src/main/java/com/example/demo/repository/UsuarioRepository.java`

```java
package com.example.demo.repository;

import com.example.demo.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    boolean existsByEmail(String email);

    List<Usuario> findByNombreContainingIgnoreCase(String nombre);

    @Query("SELECT u FROM Usuario u WHERE u.fechaRegistro >= :fecha")
    List<Usuario> findUsuariosCreatedAfter(@Param("fecha") Instant fecha);
}
```

**Archivo (Opcional):** `src/main/java/com/example/demo/repository/EmpresaMaterialRepository.java`

```java
package com.example.demo.repository;

import com.example.demo.model.EmpresaMaterial;
import com.example.demo.model.EmpresaMaterialId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpresaMaterialRepository extends JpaRepository<EmpresaMaterial, EmpresaMaterialId> {

    List<EmpresaMaterial> findByIdEmpresaId(Long empresaId);

    List<EmpresaMaterial> findByIdMaterialId(Long materialId);
}
```

### Beneficios
- **Consultas Derivadas**: Métodos automáticos generados por Spring Data JPA.
- **Consultas Personalizadas**: Uso de `@Query` para consultas específicas.
- **Type-Safe**: Evita errores en consultas gracias a la interfaz `JpaRepository`.
- **Soporte para Claves Compuestas**: Gestión eficiente de entidades con `@EmbeddedId`.

---

## 🔄 4. Data Transfer Objects (DTOs)
Usar DTOs para controlar la entrada y salida de datos, mejorando la seguridad y flexibilidad.

### 4.1 DTO para Creación
**Archivo:** `src/main/java/com/example/demo/dto/UsuarioCreationDTO.java`

```java
package com.example.demo.dto;

import jakarta.validation.constraints.*;

public class UsuarioCreationDTO {

    @NotBlank(message = "El nombre es obligatorio")
    @Size(min = 2, max = 15, message = "El nombre debe tener entre 2 y 15 caracteres")
    private String nombre;

    @NotBlank(message = "El apellido es obligatorio")
    @Size(min = 2, max = 15, message = "El apellido debe tener entre 2 y 15 caracteres")
    private String apellido;

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "El email debe ser válido")
    @Size(max = 50, message = "El email no puede exceder los 50 caracteres")
    private String email;

    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, max = 255, message = "La contraseña debe tener entre 8 y 255 caracteres")
    private String password;

    @Size(max = 50, message = "La ciudad no puede exceder los 50 caracteres")
    private String ciudad;

    // Getters y Setters
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getCiudad() { return ciudad; }
    public void setCiudad(String ciudad) { this.ciudad = ciudad; }
}
```

### 4.2 DTO para Respuesta
**Archivo:** `src/main/java/com/example/demo/dto/UsuarioResponseDTO.java`

```java
package com.example.demo.dto;

import java.time.Instant;

public class UsuarioResponseDTO {

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String ciudad;
    private Integer puntosTotales;
    private Instant fechaRegistro;

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getCiudad() { return ciudad; }
    public void setCiudad(String ciudad) { this.ciudad = ciudad; }
    public Integer getPuntosTotales() { return puntosTotales; }
    public void setPuntosTotales(Integer puntosTotales) { this.puntosTotales = puntosTotales; }
    public Instant getFechaRegistro() { return fechaRegistro; }
    public void setFechaRegistro(Instant fechaRegistro) { this.fechaRegistro = fechaRegistro; }
}
```

### 4.3 DTO para Login
**Archivo:** `src/main/java/com/example/demo/dto/LoginDTO.java`

```java
package com.example.demo.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class LoginDTO {

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "El email debe ser válido")
    private String email;

    @NotBlank(message = "La contraseña es obligatoria")
    private String password;

    // Getters y Setters
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
```

### 4.4 DTO para Actualización
**Archivo:** `src/main/java/com/example/demo/dto/UsuarioUpdateDTO.java`

```java
package com.example.demo.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public class UsuarioUpdateDTO {

    @Size(min = 2, max = 15, message = "El nombre debe tener entre 2 y 15 caracteres")
    private String nombre;

    @Size(min = 2, max = 15, message = "El apellido debe tener entre 2 y 15 caracteres")
    private String apellido;

    @Email(message = "El email debe ser válido")
    private String email;

    @Size(min = 8, max = 255, message = "La contraseña debe tener entre 8 y 255 caracteres")
    private String password;

    @Size(max = 50, message = "La ciudad no puede exceder los 50 caracteres")
    private String ciudad;

    // Getters y Setters
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getCiudad() { return ciudad; }
    public void setCiudad(String ciudad) { this.ciudad = ciudad; }
}
```

### Beneficios
- **Seguridad**: Excluye datos sensibles (como contraseñas) en respuestas.
- **Flexibilidad**: Permite estructuras específicas para entrada y salida.
- **Validación**: Aplica reglas específicas en DTOs de entrada.
- **Versionado**: Facilita cambios en la API sin romper contratos.

---

## ⚙️ 5. Capa de Servicio
Implementar la lógica de negocio con transacciones, encriptación de contraseñas y manejo de excepciones.

**Archivo:** `src/main/java/com/example/demo/service/UsuarioService.java`

```java
package com.example.demo.service;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UsuarioCreationDTO;
import com.example.demo.dto.UsuarioResponseDTO;
import com.example.demo.dto.UsuarioUpdateDTO;
import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, BCryptPasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UsuarioResponseDTO save(UsuarioCreationDTO usuarioDTO) {
        if (usuarioRepository.existsByEmail(usuarioDTO.getEmail())) {
            throw new RuntimeException("El email ya está registrado");
        }

        Usuario usuario = new Usuario();
        usuario.setNombre(usuarioDTO.getNombre());
        usuario.setApellido(usuarioDTO.getApellido());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setPassword(passwordEncoder.encode(usuarioDTO.getPassword()));
        usuario.setCiudad(usuarioDTO.getCiudad());
        usuario.setPuntosTotales(0);
        usuario.setFechaRegistro(Instant.now());

        return convertToDTO(usuarioRepository.save(usuario));
    }

    @Transactional(readOnly = true)
    public Optional<UsuarioResponseDTO> findById(Long id) {
        return usuarioRepository.findById(id).map(this::convertToDTO);
    }

    @Transactional(readOnly = true)
    public List<UsuarioResponseDTO> findAll() {
        return usuarioRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public void deleteById(Long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new RuntimeException("Usuario no encontrado");
        }
        usuarioRepository.deleteById(id);
    }

    public UsuarioResponseDTO update(Long id, UsuarioUpdateDTO usuarioDTO) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (usuarioDTO.getNombre() != null) {
            usuario.setNombre(usuarioDTO.getNombre());
        }
        if (usuarioDTO.getApellido() != null) {
            usuario.setApellido(usuarioDTO.getApellido());
        }
        if (usuarioDTO.getEmail() != null) {
            if (usuarioRepository.existsByEmail(usuarioDTO.getEmail()) &&
                !usuarioRepository.findByEmail(usuarioDTO.getEmail()).get().getId().equals(id)) {
                throw new RuntimeException("El email ya está en uso");
            }
            usuario.setEmail(usuarioDTO.getEmail());
        }
        if (usuarioDTO.getPassword() != null) {
            usuario.setPassword(passwordEncoder.encode(usuarioDTO.getPassword()));
        }
        if (usuarioDTO.getCiudad() != null) {
            usuario.setCiudad(usuarioDTO.getCiudad());
        }

        return convertToDTO(usuarioRepository.save(usuario));
    }

    public Optional<UsuarioResponseDTO> login(LoginDTO loginDTO) {
        return usuarioRepository.findByEmail(loginDTO.getEmail())
                .filter(user -> passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()))
                .map(this::convertToDTO);
    }

    private UsuarioResponseDTO convertToDTO(Usuario usuario) {
        UsuarioResponseDTO dto = new UsuarioResponseDTO();
        dto.setId(usuario.getId());
        dto.setNombre(usuario.getNombre());
        dto.setApellido(usuario.getApellido());
        dto.setEmail(usuario.getEmail());
        dto.setCiudad(usuario.getCiudad());
        dto.setPuntosTotales(usuario.getPuntosTotales());
        dto.setFechaRegistro(usuario.getFechaRegistro());
        return dto;
    }
}
```

### Beneficios
- **Transacciones**: Uso de `@Transactional` para consistencia de datos.
- **Seguridad**: Contraseñas encriptadas con BCrypt.
- **Manejo de Excepciones**: Validaciones para evitar correos duplicados.
- **Conversión**: Uso de DTOs para entrada y salida.
- **Eficiencia**: Consultas de solo lectura optimizadas con `readOnly = true`.

---

## 🌐 6. Capa de Controlador
Implementar endpoints RESTful con validaciones automáticas y respuestas HTTP adecuadas.

**Archivo:** `src/main/java/com/example/demo/controller/UsuarioController.java`

```java
package com.example.demo.controller;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UsuarioCreationDTO;
import com.example.demo.dto.UsuarioResponseDTO;
import com.example.demo.dto.UsuarioUpdateDTO;
import com.example.demo.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public ResponseEntity<List<UsuarioResponseDTO>> getAllUsuarios() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioResponseDTO> getUsuarioById(@PathVariable Long id) {
        return usuarioService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UsuarioResponseDTO> createUsuario(@Valid @RequestBody UsuarioCreationDTO usuarioDTO) {
        try {
            UsuarioResponseDTO created = usuarioService.save(usuarioDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsuarioResponseDTO> updateUsuario(@PathVariable Long id, @Valid @RequestBody UsuarioUpdateDTO usuarioDTO) {
        try {
            UsuarioResponseDTO updated = usuarioService.update(id, usuarioDTO);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<UsuarioResponseDTO> loginUsuario(@Valid @RequestBody LoginDTO loginDTO) {
        return usuarioService.login(loginDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        try {
            usuarioService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
```

### Endpoints Implementados
| Método | Endpoint | Descripción | Códigos de Respuesta |
|--------|----------|-------------|----------------------|
| GET    | `/api/usuarios` | Obtener todos los usuarios | 200 OK |
| GET    | `/api/usuarios/{id}` | Obtener usuario por ID | 200 OK, 404 Not Found |
| POST   | `/api/usuarios` | Crear nuevo usuario | 201 Created, 400 Bad Request |
| PUT    | `/api/usuarios/{id}` | Actualizar usuario | 200 OK, 404 Not Found |
| POST   | `/api/usuarios/login` | Autenticar usuario | 200 OK, 401 Unauthorized |
| DELETE | `/api/usuarios/{id}` | Eliminar usuario | 204 No Content, 404 Not Found |

### Beneficios
- **RESTful**: Cumple con estándares REST.
- **Validación Automática**: Uso de `@Valid` para DTOs.
- **Códigos HTTP**: Respuestas adecuadas para cada caso.
- **Manejo de Errores**: Gestión de excepciones en el controlador.

---

## ⚠️ 7. Manejo de Excepciones
Implementar un manejador global de excepciones para respuestas consistentes.

**Archivo:** `src/main/java/com/example/demo/exception/GlobalExceptionHandler.java`

```java
package com.example.demo.exception;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        return new ResponseEntity<>("El correo electrónico ya está en uso.", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
                errors.put(error.getField(), error.getDefaultMessage()));
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(RuntimeException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGenericException(Exception ex) {
        return new ResponseEntity<>("Error interno del servidor", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

### Beneficios
- **Consistencia**: Respuestas uniformes para errores.
- **Claridad**: Mensajes específicos para violaciones de integridad y validaciones.
- **Escalabilidad**: Fácil de extender para nuevos tipos de excepciones.

---

## 🔐 8. Configuración de Seguridad
Configurar seguridad básica y CORS para permitir la comunicación con el frontend.

**Archivo:** `src/main/java/com/example/demo/config/WebConfig.java`

```java
package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("*") // Cambiar a orígenes específicos en producción
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(false)
                .maxAge(3600);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/usuarios/**").permitAll()
                .anyRequest().authenticated()
            );
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### Beneficios
- **CORS**: Permite comunicación con frontends (como Next.js).
- **Seguridad**: Contraseñas encriptadas con BCrypt.
- **Flexibilidad**: Configuración inicial para endpoints públicos.

---

## 📦 9. Dependencias Adicionales
Actualiza `pom.xml` con las dependencias necesarias:

```xml
<dependencies>
    <!-- Spring Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- PostgreSQL -->
    <dependency>
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Spring Security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>

    <!-- Validación -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>

    <!-- Variables de Entorno -->
    <dependency>
        <groupId>me.paulschwarz</groupId>
        <artifactId>spring-dotenv</artifactId>
        <version>4.0.0</version>
    </dependency>
</dependencies>
```

---

## 🚀 10. Verificación y Pruebas
### 10.1 Compilar el Proyecto
```bash
cd C:\Users\carlo\Desktop\ecocyclejs1\spring base\demo1
mvn clean install
```

### 10.2 Ejecutar la Aplicación
- Ejecuta `DemoApplication.java` desde el IDE.
- Verifica que no haya errores en la consola.
- Confirma que Hibernate crea la tabla `usuarios`.

### 10.3 Probar los Endpoints
Usa un cliente REST como Postman o Bruno:

#### Crear Usuario
```http
POST http://localhost:8081/api/usuarios
Content-Type: application/json

{
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan@example.com",
    "password": "password123",
    "ciudad": "Santiago"
}
```

**Respuesta Esperada**: 201 Created

#### Login
```http
POST http://localhost:8081/api/usuarios/login
Content-Type: application/json

{
    "email": "juan@example.com",
    "password": "password123"
}
```

**Respuesta Esperada**: 200 OK o 401 Unauthorized

#### Listar Usuarios
```http
GET http://localhost:8081/api/usuarios
```

**Respuesta Esperada**: 200 OK

#### Actualizar Usuario
```http
PUT http://localhost:8081/api/usuarios/1
Content-Type: application/json

{
    "nombre": "Juan Carlos",
    "ciudad": "Valparaíso"
}
```

**Respuesta Esperada**: 200 OK o 404 Not Found

#### Eliminar Usuario
```http
DELETE http://localhost:8081/api/usuarios/1
```

**Respuesta Esperada**: 204 No Content o 404 Not Found

### 10.4 Conectar con el Frontend
Actualiza las URLs en tu frontend (ej. Next.js) en archivos como `app/register/page.jsx` y `app/login/page.jsx`:

```javascript
fetch('http://localhost:8081/api/usuarios', ...)
```

---

## 📝 Estructura Final del Proyecto
```
src/main/java/com/example/demo/
├── DemoApplication.java
├── config/
│   └── WebConfig.java
├── controller/
│   └── UsuarioController.java
├── dto/
│   ├── LoginDTO.java
│   ├── UsuarioCreationDTO.java
│   ├── UsuarioResponseDTO.java
│   └── UsuarioUpdateDTO.java
├── exception/
│   └── GlobalExceptionHandler.java
├── model/
│   ├── EmpresaMaterial.java
│   ├── EmpresaMaterialId.java
│   └── Usuario.java
├── repository/
│   ├── EmpresaMaterialRepository.java
│   └── UsuarioRepository.java
├── service/
│   └── UsuarioService.java
src/main/resources/
├── application.yml
└── .env
```

---

## 🎉 Resultado Final
La aplicación ahora cuenta con:
- **Configuración Externa**: Variables de entorno con `spring-dotenv`.
- **Seguridad**: Contraseñas encriptadas con BCrypt y endpoints públicos/privados.
- **Validación**: Reglas robustas con Jakarta Validation.
- **Arquitectura Limpia**: Separación de responsabilidades (modelos, repositorios, servicios, controladores).
- **DTOs**: Control de entrada/salida de datos.
- **Endpoints RESTful**: CRUD completo con autenticación.
- **Manejo de Errores**: Respuestas HTTP consistentes.
- **Optimización**: Lazy loading, tipos modernos y consultas eficientes.

---

## 🚀 Próximos Pasos Recomendados
### Mejoras Intermedias
1. **Documentación API**: Implementar Swagger/OpenAPI.
2. **Paginación y Filtrado**: Agregar soporte en endpoints GET.
3. **Pruebas**: Añadir tests unitarios y de integración con JUnit y Mockito.
4. **Manejo Avanzado de Excepciones**: Personalizar más respuestas de error.

### Mejoras Avanzadas
1. **Autenticación JWT**: Implementar tokens para autenticación segura.
2. **Caching**: Usar Redis o Caffeine para mejorar el rendimiento.
3. **Monitoreo**: Integrar Spring Boot Actuator y Micrometer.
4. **Rate Limiting**: Proteger la API contra abusos.

---

## 📚 Consejos para el Estudio
- **Paso a Paso**: Implementa cada sección en orden y prueba los cambios.
- **Documentación**: Revisa la documentación oficial de Spring Boot y Spring Security.
- **Pruebas**: Usa Postman para probar cada endpoint y entender las respuestas.
- **Código Limpio**: Mantén la estructura de paquetes y nomenclatura consistente.
- **Seguridad en Producción**: Reemplaza el CORS de `allowedOrigins="*"` por orígenes específicos y usa `ddl-auto=validate`.

Esta guía te proporciona una base sólida para construir una API Spring Boot profesional. ¡Sigue estudiando y experimentando con las mejoras propuestas!