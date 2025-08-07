package com.example.demo.service;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UsuarioCreationDTO;
import com.example.demo.dto.UsuarioResponseDTO;
import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UsuarioResponseDTO save(UsuarioCreationDTO usuarioDTO) {
        Usuario usuario = new Usuario();
        usuario.setNombre(usuarioDTO.getNombre());
        usuario.setApellido(usuarioDTO.getApellido());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setPassword(passwordEncoder.encode(usuarioDTO.getPassword())); // Hashear la contraseña
        usuario.setCiudad(usuarioDTO.getCiudad());
        usuario.setPuntosTotales(0);
        usuario.setFechaRegistro(Instant.now());
        return convertToDTO(usuarioRepository.save(usuario));
    }

    public Optional<UsuarioResponseDTO> findById(Long id) {
        return usuarioRepository.findById(id).map(this::convertToDTO);
    }

    public List<UsuarioResponseDTO> findAll() {
        return usuarioRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public void deleteById(Long id) {
        usuarioRepository.deleteById(id);
    }

    public Optional<UsuarioResponseDTO> login(LoginDTO loginDTO) {
        return usuarioRepository.findByEmail(loginDTO.getEmail())
                .filter(user -> passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) // Verificar contraseña hasheada
                .map(this::convertToDTO);
    }

    private UsuarioResponseDTO convertToDTO(Usuario usuario) {
        UsuarioResponseDTO dto = new UsuarioResponseDTO();
        dto.setId(usuario.getId());
        dto.setNombre(usuario.getNombre());
        dto.setApellido(usuario.getApellido());
        dto.setEmail(usuario.getEmail());
        dto.setCiudad(usuario.getCiudad());
        dto.setPuntosTotales(usuario.getPuntosTotales());
        dto.setFechaRegistro(usuario.getFechaRegistro());
        return dto;
    }
}