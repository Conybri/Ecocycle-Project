package com.example.usuarios.dto.request;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.Instant;

/**
 * Record DTO (Data Transfer Object) para filtrar solicitudes de búsqueda de usuarios.
 * Permite buscar usuarios por varios criterios como nombre, email, ciudad, rol, puntos y rango de fechas de registro.
 */
public record UsuarioFilterRequest(
        String nombre, // Filtro por nombre del usuario
        String apellido, // Filtro por apellido del usuario
        String email, // Filtro por email del usuario
        String ciudad, // Filtro por ciudad del usuario
        String role, // Filtro por rol del usuario (ej. "USER", "ADMIN")
        Integer puntosMin, // Filtro por puntos totales mínimos del usuario
        Integer puntosMax, // Filtro por puntos totales máximos del usuario
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fechaDesde, // Filtro por fecha de registro desde (ISO 8601)
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fechaHasta // Filtro por fecha de registro hasta (ISO 8601)
) {}