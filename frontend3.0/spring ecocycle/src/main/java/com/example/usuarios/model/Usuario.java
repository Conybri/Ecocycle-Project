package com.example.usuarios.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import com.example.security.model.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.Instant;
import java.util.Collection;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entidad que representa un usuario en el sistema.
 * Implementa `UserDetails` de Spring Security para la autenticación y autorización.
 */
@Entity @Table(name = "usuarios")
@Getter
@Setter
@NoArgsConstructor
public class Usuario implements UserDetails {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank @Size(max = 15)
    @Column(name = "nombre", nullable = false, length = 15)
    private String nombre;

    @NotBlank @Size(max = 15)
    @Column(name = "apellido", nullable = false, length = 15)
    private String apellido;

    @NotBlank @Email @Size(max = 50)
    @Column(name = "email", nullable = false, unique = true, length = 50)
    private String email;

    @NotBlank @Size(min = 8, max = 255)
    @Column(name = "password", nullable = false)
    private String password;

    @Size(max = 50)
    @Column(name = "ciudad", length = 50)
    private String ciudad;

    @NotNull @Column(name = "puntos_totales", nullable = false)
    private Integer puntosTotales = 0;

    @Column(name = "fecha_registro", nullable = false, updatable = false)
    private Instant fechaRegistro;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false, length = 20)
    private Role role = Role.ROLE_USER; // Default role

    // Constructor para el mapper y creación de usuarios
    public Usuario(String nombre, String apellido, String email, String password, String ciudad, Integer puntosTotales, Role role) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.puntosTotales = puntosTotales;
        this.role = role;
    }

    // Constructor para la carga desde la base de datos (puede ser usado por JPA)
    public Usuario(Long id, String nombre, String apellido, String email, String password, String ciudad, Integer puntosTotales, Instant fechaRegistro, Role role) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.puntosTotales = puntosTotales;
        this.fechaRegistro = fechaRegistro;
        this.role = role;
    }

    @PrePersist
    public void prePersist() {
        if (fechaRegistro == null) {
            fechaRegistro = Instant.now();
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(this.role);
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() { return true; }

    @Override
    public boolean isAccountNonLocked() { return true; }

    @Override
    public boolean isCredentialsNonExpired() { return true; }

    @Override
    public boolean isEnabled() { return true; }
}