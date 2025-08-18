package com.example.demo.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

/**
 * Clase de clave primaria compuesta para la entidad `EmpresaMaterial`.
 * Representa la combinación de `empresaId` y `materialId` como una clave única.
 */
@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class EmpresaMaterialId implements Serializable {
    private long empresaId;
    private long materialId;
}
