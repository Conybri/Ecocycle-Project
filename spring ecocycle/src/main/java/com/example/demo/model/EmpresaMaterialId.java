package com.example.demo.model;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class EmpresaMaterialId implements Serializable {
    private long empresaId;
    private long materialId;

    public EmpresaMaterialId() {
    }

    public EmpresaMaterialId(long empresaId, long materialId) {
        this.empresaId = empresaId;
        this.materialId = materialId;
    }

    public long getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(long empresaId) {
        this.empresaId = empresaId;
    }

    public long getMaterialId() {
        return materialId;
    }

    public void setMaterialId(long materialId) {
        this.materialId = materialId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmpresaMaterialId that = (EmpresaMaterialId) o;
        return empresaId == that.empresaId && materialId == that.materialId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(empresaId, materialId);
    }
}
