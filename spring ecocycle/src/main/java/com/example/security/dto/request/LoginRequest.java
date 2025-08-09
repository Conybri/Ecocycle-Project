package com.example.security.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * Record DTO (Data Transfer Object) para las solicitudes de inicio de sesión.
 * Contiene el email y la contraseña del usuario para autenticación.
 */
public record LoginRequest(
        @NotBlank @Email @Size(max = 50) String email, // Email del usuario para iniciar sesión
        @NotBlank @Size(min = 8, max = 255) String password // Contraseña del usuario
) {}