package com.example.demo.model;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 15)
    private String nombre;

    @Column(nullable = false, length = 15)
    private String apellido;

    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @Column(nullable = false, length = 15)
    private String password;

    @Column(length = 50)
    private String ciudad;

    @Column(name = "puntos_totales")
    private Integer puntosTotales = 0;

    @Column(name = "fecha_registro", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp fechaRegistro;

    // Getters and setters
}
