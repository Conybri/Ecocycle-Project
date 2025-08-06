package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Materiales")
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, length = 50)
    private String categoria;

    @Lob
    private String descripcion;

    private Integer puntos;

    // Getters and setters
}
