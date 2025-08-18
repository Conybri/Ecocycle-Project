package com.example.usuarios.dto.response;

import java.time.Instant;

/**
 * Record DTO (Data Transfer Object) para la respuesta de un usuario.
 * Contiene los campos que se envían como respuesta al cliente al consultar o crear un usuario.
 */
public record UsuarioResponse(
        Long id, // ID único del usuario
        String nombre, // Nombre del usuario
        String apellido, // Apellido del usuario
        String email, // Email del usuario
        String ciudad, // Ciudad de residencia del usuario
        Integer puntosTotales, // Puntos totales acumulados por el usuario
        Instant fechaRegistro, // Fecha y hora de registro del usuario
        String role // Rol del usuario (ej. "USER", "ADMIN")
) {}