package com.example.usuarios.dto.request;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.Instant;

public record UsuarioFilterRequest(
        String nombre,
        String apellido,
        String email,
        String ciudad,
        String role,
        Integer puntosMin,
        Integer puntosMax,
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fechaDesde,
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fechaHasta
) {}