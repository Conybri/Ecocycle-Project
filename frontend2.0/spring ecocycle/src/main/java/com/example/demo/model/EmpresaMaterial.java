package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

/**
 * Entidad que representa la relación entre una empresa y un material.
 * Utiliza una clave primaria compuesta definida por `EmpresaMaterialId`.
 */
@Entity
@Table(name = "empresa_materiales")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmpresaMaterial {

    @EmbeddedId
    private EmpresaMaterialId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("empresaId")
    @JoinColumn(name = "empresa_id", nullable = false)
    private Empresa empresa;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("materialId")
    @JoinColumn(name = "material_id", nullable = false)
    private Material material;
}

    