package com.example.demo.repository;

import com.example.demo.model.EmpresaMaterial;
import com.example.demo.model.EmpresaMaterialId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio JPA para la entidad `EmpresaMaterial`.
 * Proporciona métodos para realizar operaciones de persistencia sobre la relación entre empresas y materiales.
 */
@Repository
public interface EmpresaMaterialRepository extends JpaRepository<EmpresaMaterial, EmpresaMaterialId> {
}
