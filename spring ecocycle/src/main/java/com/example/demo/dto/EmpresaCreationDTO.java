package com.example.demo.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * DTO (Data Transfer Object) para la creación de una nueva empresa.
 * Contiene los campos necesarios para registrar una empresa en el sistema.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmpresaCreationDTO {

    @NotBlank
    @Size(max = 255)
    private String nombreEmpresa;

    @NotBlank
    @Size(max = 12)
    private String rut;

    @NotBlank
    @Size(max = 100)
    private String nombreContacto;

    @NotBlank
    @Size(max = 50)
    private String cargoContacto;

    @NotBlank
    @Email
    @Size(max = 255)
    private String emailCorporativo;

    @Size(max = 20)
    private String telefono;

    @Size(max = 255)
    private String direccion;

    @Size(max = 50)
    private String capacidadMensual;

    private String descripcion;
}
    
