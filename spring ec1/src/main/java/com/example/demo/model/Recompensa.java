package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Recompensas")
public class Recompensa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String titulo;

    @Lob
    private String descripcion;

    @Column(name = "puntos_necesarios")
    private Integer puntosNecesarios;

    // Getters and setters
}
