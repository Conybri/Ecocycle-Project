package com.example.demo.model;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Empresas")
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre_empresa", nullable = false, length = 255)
    private String nombreEmpresa;

    @Column(nullable = false, unique = true, length = 12)
    private String rut;

    @Column(name = "nombre_contacto", nullable = false, length = 100)
    private String nombreContacto;

    @Column(name = "cargo_contacto", nullable = false, length = 50)
    private String cargoContacto;

    @Column(name = "email_corporativo", nullable = false, unique = true, length = 255)
    private String emailCorporativo;

    @Column(length = 20)
    private String telefono;

    @Column(length = 255)
    private String direccion;

    @Column(name = "capacidad_mensual", length = 50)
    private String capacidadMensual;

    @Lob
    private String descripcion;

    @Column(name = "fecha_registro", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp fechaRegistro;

    // Getters and setters
}
