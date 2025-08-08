package com.example.demo.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

/**
 * Clase de clave primaria compuesta para la entidad `UsuarioLogro`.
 * Representa la combinación de `usuarioId` y `logroId` como una clave única.
 */
@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class UsuarioLogroId implements Serializable {
    private long usuarioId;
    private long logroId;
}
