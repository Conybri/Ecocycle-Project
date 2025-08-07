package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

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

    // Getters y Setters
    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getMaterialId() {
        return materialId;
    }

    public void setMaterialId(Long materialId) {
        this.materialId = materialId;
    }

    public Long getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(Long empresaId) {
        this.empresaId = empresaId;
    }

    public BigDecimal getCantidadKg() {
        return cantidadKg;
    }

    public void setCantidadKg(BigDecimal cantidadKg) {
        this.cantidadKg = cantidadKg;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
