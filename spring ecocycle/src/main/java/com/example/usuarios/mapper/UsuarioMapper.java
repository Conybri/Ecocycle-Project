package com.example.usuarios.mapper;

import com.example.usuarios.dto.request.UsuarioRequest;
import com.example.usuarios.dto.response.UsuarioResponse;
import com.example.usuarios.model.Usuario;

public class UsuarioMapper {

    public static Usuario toEntity(UsuarioRequest req) {
        if (req == null) return null;
        return new Usuario(
                req.nombre(),
                req.apellido(),
                req.email(),
                req.password(),
                req.ciudad(),
                req.puntosTotales() != null ? req.puntosTotales() : 0,
                req.role() != null ? req.role() : "USER"
        );
    }

    public static void updateEntity(Usuario entity, UsuarioRequest req) {
        if (req.nombre() != null) entity.setNombre(req.nombre());
        if (req.apellido() != null) entity.setApellido(req.apellido());
        if (req.email() != null) entity.setEmail(req.email());
        if (req.password() != null) entity.setPassword(req.password()); // Se codifica en el service
        if (req.ciudad() != null) entity.setCiudad(req.ciudad());
        if (req.role() != null) entity.setRole(req.role());
        if (req.puntosTotales() != null) entity.setPuntosTotales(req.puntosTotales());
    }

    public static UsuarioResponse toResponse(Usuario entity) {
        if (entity == null) return null;
        return new UsuarioResponse(
                entity.getId(),
                entity.getNombre(),
                entity.getApellido(),
                entity.getEmail(),
                entity.getCiudad(),
                entity.getPuntosTotales(),
                entity.getFechaRegistro(),
                entity.getRole()
        );
    }
}