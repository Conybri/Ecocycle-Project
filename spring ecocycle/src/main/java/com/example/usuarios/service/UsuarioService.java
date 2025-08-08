package com.example.usuarios.service;

import com.example.usuarios.dto.request.UsuarioFilterRequest;
import com.example.usuarios.dto.request.UsuarioRequest;
import com.example.usuarios.dto.response.UsuarioResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UsuarioService {
    UsuarioResponse crear(UsuarioRequest request);
    UsuarioResponse actualizar(Long id, UsuarioRequest request);
    void eliminar(Long id);
    UsuarioResponse obtenerPorId(Long id);
    Page<UsuarioResponse> buscar(UsuarioFilterRequest filter, Pageable pageable);
}