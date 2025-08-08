package com.example.demo.repository;

import com.example.demo.model.UsuarioLogro;
import com.example.demo.model.UsuarioLogroId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio JPA para la entidad `UsuarioLogro`.
 * Proporciona métodos para realizar operaciones de persistencia sobre la relación entre usuarios y logros.
 */
@Repository
public interface UsuarioLogroRepository extends JpaRepository<UsuarioLogro, UsuarioLogroId> {
}
