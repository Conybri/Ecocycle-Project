package com.example.demo.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "UsuarioLogros")
public class UsuarioLogro {

    @EmbeddedId
    private UsuarioLogroId id;

    @ManyToOne
    @MapsId("usuarioId")
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @MapsId("logroId")
    @JoinColumn(name = "logro_id")
    private Logro logro;

    @Column(name = "fecha_obtenido", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp fechaObtenido;

    // Getters and setters
}

@Embeddable
class UsuarioLogroId implements Serializable {
    private Long usuarioId;
    private Long logroId;

    // equals and hashCode
}
