package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

/**
 * DTO (Data Transfer Object) para la creación de un nuevo registro de historial de reciclaje.
 * Contiene los campos necesarios para registrar una acción de reciclaje.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HistorialReciclajeCreationDTO {

    @NotNull
    private Long usuarioId;

    @NotNull
    private Long materialId;

    @NotNull
    private Long empresaId;

    @NotNull
    private BigDecimal cantidadKg;

    private String estado;
}
    
