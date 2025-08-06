package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Table(name = "HistorialReciclaje")
public class HistorialReciclaje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "material_id")
    private Material material;

    @ManyToOne
    @JoinColumn(name = "empresa_id")
    private Empresa empresa;

    @Column(name = "cantidad_kg", precision = 10, scale = 2)
    private BigDecimal cantidadKg;

    @Column(name = "puntos_ganados")
    private Integer puntosGanados;

    @Column(name = "fecha_reciclaje", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp fechaReciclaje;

    @Column(length = 255)
    private String estado;

    // Getters and setters
}
