package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuración web para la aplicación Spring Boot.
 * Habilita CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde diferentes orígenes.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Aplica la configuración CORS a todas las rutas (endpoints)
              //  .allowedOrigins("http://localhost:8080", "http://localhost:4200") // Restringe a los orígenes de tu frontend en desarrollo. ¡CAMBIA ESTO EN PRODUCCIÓN!
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Permite los métodos HTTP especificados
                .allowedHeaders("*") // Permite todos los encabezados en las solicitudes CORS
                .allowCredentials(false).maxAge(3600); // No permite el envío de credenciales (cookies, encabezados de autorización) y establece el tiempo máximo de caché para las respuestas preflight
    }
}
