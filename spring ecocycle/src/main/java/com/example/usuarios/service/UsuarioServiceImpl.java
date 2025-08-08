package com.example.usuarios.service;

import com.example.usuarios.dto.request.UsuarioFilterRequest;
import com.example.usuarios.dto.request.UsuarioRequest;
import com.example.usuarios.dto.response.UsuarioResponse;
import com.example.usuarios.mapper.UsuarioMapper;
import com.example.usuarios.model.Usuario;
import com.example.usuarios.repository.UsuarioRepository;
import com.example.usuarios.repository.spec.UsuarioSpecifications;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service @Transactional
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioServiceImpl(UsuarioRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UsuarioResponse crear(UsuarioRequest request) {
        if (repository.existsByEmail(request.email())) {
            throw new DataIntegrityViolationException("El email ya está registrado");
        }
        Usuario entity = UsuarioMapper.toEntity(request);
        entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        Usuario saved = repository.save(entity);
        return UsuarioMapper.toResponse(saved);
    }

    @Override
    public UsuarioResponse actualizar(Long id, UsuarioRequest request) {
        Usuario entity = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado"));

        boolean cambiaEmail = request.email() != null && !request.email().equalsIgnoreCase(entity.getEmail());
        if (cambiaEmail && repository.existsByEmail(request.email())) {
            throw new DataIntegrityViolationException("El email ya está registrado");
        }

        UsuarioMapper.updateEntity(entity, request);
        if (request.password() != null) {
            entity.setPassword(passwordEncoder.encode(request.password()));
        }
        Usuario updated = repository.save(entity);
        return UsuarioMapper.toResponse(updated);
    }

    @Override
    public void eliminar(Long id) {
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Usuario no encontrado");
        }
        repository.deleteById(id);
    }

    @Override @Transactional(readOnly = true)
    public UsuarioResponse obtenerPorId(Long id) {
        return repository.findById(id)
                .map(UsuarioMapper::toResponse)
                .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado"));
    }

    @Override @Transactional(readOnly = true)
    public Page<UsuarioResponse> buscar(UsuarioFilterRequest filter, Pageable pageable) {
        return repository.findAll(UsuarioSpecifications.build(filter), pageable)
                .map(UsuarioMapper::toResponse);
    }
}