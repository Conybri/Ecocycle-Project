package com.example.usuarios.dto.response;

public record LoginResponse(String jwt, UsuarioResponse usuario) {
}
