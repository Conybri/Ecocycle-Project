package com.example.demo.model;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class UsuarioLogroId implements Serializable {
    private long usuarioId;
    private long logroId;

    public UsuarioLogroId() {
    }

    public UsuarioLogroId(long usuarioId, long logroId) {
        this.usuarioId = usuarioId;
        this.logroId = logroId;
    }

    public long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public long getLogroId() {
        return logroId;
    }

    public void setLogroId(long logroId) {
        this.logroId = logroId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsuarioLogroId that = (UsuarioLogroId) o;
        return usuarioId == that.usuarioId && logroId == that.logroId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(usuarioId, logroId);
    }
}
