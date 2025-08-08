package com.example.usuarios.service;

import com.example.usuarios.dto.request.UsuarioRequest;
import com.example.usuarios.dto.response.UsuarioResponse;
import com.example.usuarios.mapper.UsuarioMapper;
import com.example.usuarios.model.Usuario;
import com.example.usuarios.repository.UsuarioRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UsuarioServiceTest {

    @Mock
    private UsuarioRepository usuarioRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UsuarioServiceImpl usuarioService;

    private Usuario usuario;
    private UsuarioRequest usuarioRequest;

    @BeforeEach
    void setUp() {
        usuario = new Usuario("Test", "User", "test@example.com", "password123", "City", 0, "USER");
        usuario.setId(1L);
        usuarioRequest = new UsuarioRequest("Test", "User", "test@example.com", "password123", "City", "USER", 0);
    }

    @Test
    void crear_Success() {
        when(usuarioRepository.existsByEmail(anyString())).thenReturn(false);
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");
        when(usuarioRepository.save(any(Usuario.class))).thenReturn(usuario);

        UsuarioResponse response = usuarioService.crear(usuarioRequest);

        assertNotNull(response);
        assertEquals(usuario.getEmail(), response.email());
        verify(usuarioRepository, times(1)).save(any(Usuario.class));
    }

    @Test
    void crear_EmailAlreadyExists_ThrowsException() {
        when(usuarioRepository.existsByEmail(anyString())).thenReturn(true);

        assertThrows(DataIntegrityViolationException.class, () -> usuarioService.crear(usuarioRequest));
        verify(usuarioRepository, never()).save(any(Usuario.class));
    }

    @Test
    void actualizar_Success() {
        when(usuarioRepository.findById(anyLong())).thenReturn(Optional.of(usuario));
        when(usuarioRepository.existsByEmail(anyString())).thenReturn(false);
        when(passwordEncoder.encode(anyString())).thenReturn("newEncodedPassword");
        when(usuarioRepository.save(any(Usuario.class))).thenReturn(usuario);

        UsuarioRequest updatedRequest = new UsuarioRequest("Updated", "User", "updated@example.com", "newPassword", "NewCity", "USER", 10);
        UsuarioResponse response = usuarioService.actualizar(1L, updatedRequest);

        assertNotNull(response);
        assertEquals(updatedRequest.email(), response.email());
        verify(usuarioRepository, times(1)).save(any(Usuario.class));
    }

    @Test
    void actualizar_UserNotFound_ThrowsException() {
        when(usuarioRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(IllegalArgumentException.class, () -> usuarioService.actualizar(1L, usuarioRequest));
        verify(usuarioRepository, never()).save(any(Usuario.class));
    }

    @Test
    void actualizar_EmailAlreadyExists_ThrowsException() {
        Usuario existingUser = new Usuario("Existing", "User", "existing@example.com", "pass", "City", 0, "USER");
        existingUser.setId(2L);

        when(usuarioRepository.findById(anyLong())).thenReturn(Optional.of(usuario));
        when(usuarioRepository.existsByEmail(anyString())).thenReturn(true);

        UsuarioRequest updatedRequest = new UsuarioRequest("Updated", "User", "existing@example.com", "newPassword", "NewCity", "USER", 10);
        assertThrows(DataIntegrityViolationException.class, () -> usuarioService.actualizar(1L, updatedRequest));
        verify(usuarioRepository, never()).save(any(Usuario.class));
    }

    @Test
    void eliminar_Success() {
        when(usuarioRepository.existsById(anyLong())).thenReturn(true);
        doNothing().when(usuarioRepository).deleteById(anyLong());

        usuarioService.eliminar(1L);

        verify(usuarioRepository, times(1)).deleteById(anyLong());
    }

    @Test
    void eliminar_UserNotFound_ThrowsException() {
        when(usuarioRepository.existsById(anyLong())).thenReturn(false);

        assertThrows(IllegalArgumentException.class, () -> usuarioService.eliminar(1L));
        verify(usuarioRepository, never()).deleteById(anyLong());
    }

    @Test
    void obtenerPorId_Success() {
        when(usuarioRepository.findById(anyLong())).thenReturn(Optional.of(usuario));

        UsuarioResponse response = usuarioService.obtenerPorId(1L);

        assertNotNull(response);
        assertEquals(usuario.getId(), response.id());
    }

    @Test
    void obtenerPorId_UserNotFound_ThrowsException() {
        when(usuarioRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(IllegalArgumentException.class, () -> usuarioService.obtenerPorId(1L));
    }

    // TODO: Add tests for the 'buscar' method (requires mocking Page and Specification)
}
