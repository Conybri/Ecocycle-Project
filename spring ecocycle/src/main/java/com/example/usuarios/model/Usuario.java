package com.example.usuarios.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.Instant;
import java.util.Collection;
import java.util.List;

@Entity @Table(name = "usuarios")
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

    @NotBlank @Size(max = 20)
    @Column(name = "role", nullable = false, length = 20)
    private String role = "USER"; // Default role

    public Usuario() {
    }

    public Usuario(Long id, String nombre, String apellido, String email, String password, String ciudad, Integer puntosTotales, Instant fechaRegistro, String role) {
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

    public Usuario(String nombre, String apellido, String email, String password, String ciudad, Integer puntosTotales, String role) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.puntosTotales = puntosTotales;
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
        return List.of(new SimpleGrantedAuthority("ROLE_" + role));
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public Integer getPuntosTotales() {
        return puntosTotales;
    }

    public void setPuntosTotales(Integer puntosTotales) {
        this.puntosTotales = puntosTotales;
    }

    public Instant getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Instant fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}