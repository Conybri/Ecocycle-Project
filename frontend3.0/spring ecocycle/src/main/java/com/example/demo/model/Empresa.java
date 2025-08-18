package com.example.demo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

/**
 * Entidad que representa una empresa en el sistema.
 * Almacena información detallada sobre la empresa, incluyendo datos de contacto y capacidad.
 */
@Entity
@Table(name = "empresas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 255)
    @Column(name = "nombre_empresa", nullable = false)
    private String nombreEmpresa;

    @NotBlank
    @Size(max = 12)
    @Column(nullable = false, unique = true, length = 12)
    private String rut;

    @NotBlank
    @Size(max = 100)
    @Column(name = "nombre_contacto", nullable = false, length = 100)
    private String nombreContacto;

    @NotBlank
    @Size(max = 50)
    @Column(name = "cargo_contacto", nullable = false, length = 50)
    private String cargoContacto;

    @NotBlank
    @Email
    @Size(max = 255)
    @Column(name = "email_corporativo", nullable = false, unique = true)
    private String emailCorporativo;

    @Size(max = 20)
    @Column(length = 20)
    private String telefono;

    @Size(max = 255)
    private String direccion;

    @Size(max = 50)
    @Column(name = "capacidad_mensual", length = 50)
    private String capacidadMensual;

    @Lob
    private String descripcion;

    @Column(name = "fecha_registro", nullable = false, updatable = false)
    private Instant fechaRegistro;
}