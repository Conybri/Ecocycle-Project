package com.example.demo.repository;

import com.example.demo.model.Recompensa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio JPA para la entidad `Recompensa`.
 * Proporciona métodos para realizar operaciones de persistencia sobre las recompensas.
 */
@Repository
public interface RecompensaRepository extends JpaRepository<Recompensa, Long> {
}
