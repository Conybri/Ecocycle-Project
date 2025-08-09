package com.example.security.jwt;

import com.example.security.service.CustomUserDetailsService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Filtro de solicitud JWT para autenticar usuarios en cada petición.
 * Intercepta las solicitudes HTTP, extrae el token JWT y valida su autenticidad.
 */
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
   //Servicio para cargar detalles del usuario
    private final CustomUserDetailsService customUserDetailsService;
    private final JwtUtil jwtUtil;

    //Constructor que inyecta las dependencias
    public JwtRequestFilter(CustomUserDetailsService customUserDetailsService, JwtUtil jwtUtil) {
        this.customUserDetailsService = customUserDetailsService;
        this.jwtUtil = jwtUtil;
    }

    // Metodo que procesa cada solicutud
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization");
        // Variables para almacenar el nombre de usuario y el token JWT
        String username =null;
        String jwt = null;
        // Verifica si el encabezado existe y comienza con "Bearer "
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }
        // Si se extrajo un usuario y no hay autenticación previa en el contexto
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            // Carga los detalles del usuario desde el servicio
            UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(username);
            // Valida el token contra los detalles del usuario
            if (jwtUtil.validateToken(jwt, userDetails)) {
                // Crea un objeto de autenticación con los detalles del usuario y sus autoridades
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                // Asocia detalles de la solicitud (como IP y sesión) al objeto de autenticación
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                // Establece la autenticación en el contexto de seguridad
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        // Pasa la solicitud al siguiente filtro o controlador en la cadena
        chain.doFilter(request, response);
    }
}
