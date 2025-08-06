package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Logros")
public class Logro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String titulo;

    @Lob
    private String descripcion;

    // Getters and setters
}
