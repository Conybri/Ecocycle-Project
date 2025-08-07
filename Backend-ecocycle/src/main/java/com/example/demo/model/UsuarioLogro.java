package com.example.demo.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "usuario_logros")
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

    public UsuarioLogroId getId() {
        return id;
    }

    public void setId(UsuarioLogroId id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Logro getLogro() {
        return logro;
    }

    public void setLogro(Logro logro) {
        this.logro = logro;
    }

    public Instant getFechaObtenido() {
        return fechaObtenido;
    }

    public void setFechaObtenido(Instant fechaObtenido) {
        this.fechaObtenido = fechaObtenido;
    }
}