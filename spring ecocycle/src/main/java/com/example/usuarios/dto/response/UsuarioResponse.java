package com.example.usuarios.dto.response;

import java.time.Instant;

public record UsuarioResponse(
        Long id,
        String nombre,
        String apellido,
        String email,
        String ciudad,
        Integer puntosTotales,
        Instant fechaRegistro,
        String role
) {}