package com.example.security.controller;

import com.example.usuarios.dto.response.LoginResponse;
import com.example.security.jwt.JwtUtil;
import com.example.security.service.CustomUserDetailsService;
import com.example.security.dto.request.LoginRequest;
import com.example.usuarios.dto.request.UsuarioRequest;
import com.example.usuarios.dto.response.UsuarioResponse;
import com.example.usuarios.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador REST para la autenticación de usuarios (registro y login).
 * Expone endpoints para que los usuarios puedan registrarse y obtener tokens JWT para acceder a recursos protegidos.
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final UsuarioService usuarioService;

    public AuthController(AuthenticationManager authenticationManager, CustomUserDetailsService userDetailsService, JwtUtil jwtUtil, UsuarioService usuarioService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
        this.usuarioService = usuarioService;
    }

    @PostMapping("/register")
    public ResponseEntity<UsuarioResponse> registerUser(@RequestBody UsuarioRequest usuarioRequest) {
        UsuarioResponse newUser = usuarioService.crear(usuarioRequest);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> createAuthenticationToken(@RequestBody LoginRequest loginRequest) throws Exception {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.email(), loginRequest.password())
        );
        final UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.email());
        final String jwt = jwtUtil.generateToken(userDetails);
        final UsuarioResponse usuario = usuarioService.obtenerPorEmail(loginRequest.email());
        return ResponseEntity.ok(new LoginResponse(jwt, usuario));
    }
}
