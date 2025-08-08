package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * DTO (Data Transfer Object) para la respuesta de un material reciclable.
 * Contiene los campos que se envían como respuesta al cliente al consultar o crear un material.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MaterialResponseDTO {

    private Long id;
    private String nombre;
    private String categoria;
    private String descripcion;
    private Integer puntos;
}
