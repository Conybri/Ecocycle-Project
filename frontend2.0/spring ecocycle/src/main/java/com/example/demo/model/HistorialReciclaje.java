package com.example.demo.model;

import com.example.usuarios.model.Usuario;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

/**
 * Entidad que representa un registro en el historial de reciclaje.
 * Almacena información sobre la cantidad de material reciclado, el usuario, el material, la empresa,
 * los puntos ganados y la fecha de reciclaje.
 */
@Entity
@Table(name = "historial_reciclaje")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HistorialReciclaje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "material_id", nullable = false)
    private Material material;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "empresa_id", nullable = false)
    private Empresa empresa;

    @NotNull
    @Column(name = "cantidad_kg", nullable = false, precision = 10, scale = 2)
    private BigDecimal cantidadKg;

    @NotNull
    @Column(name = "puntos_ganados", nullable = false)
    private Integer puntosGanados;

    @Column(name = "fecha_reciclaje", nullable = false, updatable = false)
    private Instant fechaReciclaje;

    @Size(max = 255)
    private String estado;
}

    
