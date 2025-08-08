package com.example.usuarios.dto.request;

import jakarta.validation.constraints.*;

public record UsuarioRequest(
        @NotBlank @Size(max = 15) String nombre,
        @NotBlank @Size(max = 15) String apellido,
        @NotBlank @Email @Size(max = 50) String email,
        @NotBlank @Size(min = 8, max = 255) String password,
        @Size(max = 50) String ciudad,
        @Size(max = 20) String role,
        Integer puntosTotales
) {}