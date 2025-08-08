package com.example.demo.model;

import com.example.usuarios.model.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

/**
 * Entidad que representa la relación entre un usuario y un logro.
 * Utiliza una clave primaria compuesta definida por `UsuarioLogroId`.
 */
@Entity
@Table(name = "usuario_logros")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioLogro {

    @EmbeddedId
    private UsuarioLogroId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("usuarioId")
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("logroId")
    @JoinColumn(name = "logro_id", nullable = false)
    private Logro logro;

    @Column(name = "fecha_obtenido", nullable = false, updatable = false)
    private Instant fechaObtenido;
}

    