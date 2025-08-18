package com.example.usuarios.repository.spec;

import com.example.usuarios.dto.request.UsuarioFilterRequest;
import com.example.usuarios.model.Usuario;
import org.springframework.data.jpa.domain.Specification;

/**
 * Clase de utilidad para construir especificaciones JPA dinámicas para la entidad `Usuario`.
 * Permite filtrar usuarios basándose en varios criterios definidos en `UsuarioFilterRequest`.
 */
public class UsuarioSpecifications {

    public static Specification<Usuario> build(UsuarioFilterRequest f) {
        return Specification.where(nombreLike(f.nombre()))
                .and(apellidoLike(f.apellido()))
                .and(emailLike(f.email()))
                .and(ciudadLike(f.ciudad()))
                .and(roleEq(f.role()))
                .and(puntosGte(f.puntosMin()))
                .and(puntosLte(f.puntosMax()))
                .and(fechaDesde(f.fechaDesde()))
                .and(fechaHasta(f.fechaHasta()));
    }

    private static Specification<Usuario> nombreLike(String v) {
        return (root, q, cb) -> v == null || v.isBlank() ? null : cb.like(cb.lower(root.get("nombre")), "%" + v.toLowerCase() + "%");
    }

    private static Specification<Usuario> apellidoLike(String v) {
        return (root, q, cb) -> v == null || v.isBlank() ? null : cb.like(cb.lower(root.get("apellido")), "%" + v.toLowerCase() + "%");
    }

    private static Specification<Usuario> emailLike(String v) {
        return (root, q, cb) -> v == null || v.isBlank() ? null : cb.like(cb.lower(root.get("email")), "%" + v.toLowerCase() + "%");
    }

    private static Specification<Usuario> ciudadLike(String v) {
        return (root, q, cb) -> v == null || v.isBlank() ? null : cb.like(cb.lower(root.get("ciudad")), "%" + v.toLowerCase() + "%");
    }

    private static Specification<Usuario> roleEq(String v) {
        return (root, q, cb) -> v == null || v.isBlank() ? null : cb.equal(root.get("role"), v);
    }

    private static Specification<Usuario> puntosGte(Integer v) {
        return (root, q, cb) -> v == null ? null : cb.greaterThanOrEqualTo(root.get("puntosTotales"), v);
    }

    private static Specification<Usuario> puntosLte(Integer v) {
        return (root, q, cb) -> v == null ? null : cb.lessThanOrEqualTo(root.get("puntosTotales"), v);
    }

    private static Specification<Usuario> fechaDesde(java.time.Instant v) {
        return (root, q, cb) -> v == null ? null : cb.greaterThanOrEqualTo(root.get("fechaRegistro"), v);
    }

    private static Specification<Usuario> fechaHasta(java.time.Instant v) {
        return (root, q, cb) -> v == null ? null : cb.lessThanOrEqualTo(root.get("fechaRegistro"), v);
    }
}