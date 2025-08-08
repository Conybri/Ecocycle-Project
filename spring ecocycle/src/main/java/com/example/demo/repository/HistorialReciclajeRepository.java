package com.example.demo.repository;

import com.example.demo.model.HistorialReciclaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio JPA para la entidad `HistorialReciclaje`.
 * Proporciona métodos para realizar operaciones de persistencia sobre los registros de historial de reciclaje.
 */
@Repository
public interface HistorialReciclajeRepository extends JpaRepository<HistorialReciclaje, Long> {
}
