package com.example.demo.repository;

import com.example.demo.model.Logro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio JPA para la entidad `Logro`.
 * Proporciona métodos para realizar operaciones de persistencia sobre los logros.
 */
@Repository
public interface LogroRepository extends JpaRepository<Logro, Long> {
}
