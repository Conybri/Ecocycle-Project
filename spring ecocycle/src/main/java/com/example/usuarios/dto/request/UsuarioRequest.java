package com.example.usuarios.dto.request;

import jakarta.validation.constraints.*;

/**
 * Record DTO (Data Transfer Object) para las solicitudes de creación y actualización de usuarios.
 * Contiene los campos necesarios para registrar o modificar la información de un usuario.
 */
public record UsuarioRequest(
        @NotBlank @Size(max = 15) String nombre, // Nombre del usuario
        @NotBlank @Size(max = 15) String apellido, // Apellido del usuario
        @NotBlank @Email @Size(max = 50) String email, // Email del usuario (debe ser único y válido)
        @NotBlank @Size(min = 8, max = 255) String password, // Contraseña del usuario (se encriptará antes de guardar)
        @Size(max = 50) String ciudad, // Ciudad de residencia del usuario
        String role, // Rol del usuario (ej. "USER", "ADMIN"), por defecto "USER"
        Integer puntosTotales // Puntos totales acumulados por el usuario
) {}