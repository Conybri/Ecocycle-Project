package com.example.demo.dto;

import java.math.BigDecimal;
import java.time.Instant;

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

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public String getUsuarioNombre() {
        return usuarioNombre;
    }

    public void setUsuarioNombre(String usuarioNombre) {
        this.usuarioNombre = usuarioNombre;
    }

    public Long getMaterialId() {
        return materialId;
    }

    public void setMaterialId(Long materialId) {
        this.materialId = materialId;
    }

    public String getMaterialNombre() {
        return materialNombre;
    }

    public void setMaterialNombre(String materialNombre) {
        this.materialNombre = materialNombre;
    }

    public Long getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(Long empresaId) {
        this.empresaId = empresaId;
    }

    public String getEmpresaNombre() {
        return empresaNombre;
    }

    public void setEmpresaNombre(String empresaNombre) {
        this.empresaNombre = empresaNombre;
    }

    public BigDecimal getCantidadKg() {
        return cantidadKg;
    }

    public void setCantidadKg(BigDecimal cantidadKg) {
        this.cantidadKg = cantidadKg;
    }

    public Integer getPuntosGanados() {
        return puntosGanados;
    }

    public void setPuntosGanados(Integer puntosGanados) {
        this.puntosGanados = puntosGanados;
    }

    public Instant getFechaReciclaje() {
        return fechaReciclaje;
    }

    public void setFechaReciclaje(Instant fechaReciclaje) {
        this.fechaReciclaje = fechaReciclaje;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
