package com.example.demo.dto;

import java.math.BigDecimal;
import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * DTO (Data Transfer Object) para la respuesta de un registro de historial de reciclaje.
 * Contiene los campos que se envían como respuesta al cliente al consultar o crear un historial de reciclaje.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HistorialReciclajeResponseDTO {

    private Long id;
    private Long usuarioId;
    private String usuarioNombre;
    private Long materialId;
    private String materialNombre;
    private Long empresaId;
    private String empresaNombre;
    private BigDecimal cantidadKg;
    private Integer puntosGanados;
    private Instant fechaReciclaje;
    private String estado;
}
    
