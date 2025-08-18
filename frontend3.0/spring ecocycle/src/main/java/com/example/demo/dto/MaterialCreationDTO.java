package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * DTO (Data Transfer Object) para la creación de un nuevo material reciclable.
 * Contiene los campos necesarios para registrar un material en el sistema.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MaterialCreationDTO {

    @NotBlank
    @Size(max = 100)
    private String nombre;

    @NotBlank
    @Size(max = 50)
    private String categoria;

    private String descripcion;

    @NotNull
    private Integer puntos;
}
    
