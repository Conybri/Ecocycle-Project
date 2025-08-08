package com.example.demo.repository;

import com.example.demo.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio JPA para la entidad `Empresa`.
 * Proporciona métodos para realizar operaciones de persistencia sobre las empresas.
 */
@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {
}
