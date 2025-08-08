package com.example.usuarios.repository;

import com.example.usuarios.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

/**
 * Repositorio JPA para la entidad `Usuario`.
 * Proporciona métodos para realizar operaciones de persistencia sobre los usuarios,
 * incluyendo la búsqueda por email y la verificación de existencia de email.
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Long>, JpaSpecificationExecutor<Usuario> {
    Optional<Usuario> findByEmail(String email);
    boolean existsByEmail(String email);
}