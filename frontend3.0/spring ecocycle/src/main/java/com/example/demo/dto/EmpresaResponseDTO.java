package com.example.demo.dto;

import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * DTO (Data Transfer Object) para la respuesta de una empresa.
 * Contiene los campos que se envían como respuesta al cliente al consultar o crear una empresa.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmpresaResponseDTO {

    private Long id;
    private String nombreEmpresa;
    private String rut;
    private String nombreContacto;
    private String cargoContacto;
    private String emailCorporativo;
    private String telefono;
    private String direccion;
    private String capacidadMensual;
    private String descripcion;
    private Instant fechaRegistro;
}
    
