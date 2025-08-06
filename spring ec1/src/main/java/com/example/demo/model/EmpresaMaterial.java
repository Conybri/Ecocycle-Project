package com.example.demo.model;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "EmpresaMateriales")
public class EmpresaMaterial {

    @EmbeddedId
    private EmpresaMaterialId id;

    @ManyToOne
    @MapsId("empresaId")
    @JoinColumn(name = "empresa_id")
    private Empresa empresa;

    @ManyToOne
    @MapsId("materialId")
    @JoinColumn(name = "material_id")
    private Material material;

    // Getters and setters
}

@Embeddable
class EmpresaMaterialId implements Serializable {
    private Long empresaId;
    private Long materialId;

    // equals and hashCode
}
