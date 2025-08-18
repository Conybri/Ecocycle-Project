package com.example.usuarios.controller;

import com.example.usuarios.dto.request.UsuarioFilterRequest;
import com.example.usuarios.dto.request.UsuarioRequest;
import com.example.usuarios.dto.response.UsuarioResponse;
import com.example.usuarios.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * Controlador REST para la gestión de usuarios.
 * Expone endpoints para realizar operaciones CRUD sobre los usuarios.
 */
 @RestController @RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @PostMapping @ResponseStatus(HttpStatus.CREATED)
    public UsuarioResponse crear( @Valid @RequestBody UsuarioRequest request) {
        return service.crear(request);
    }

    @PutMapping("/{id}")
    public UsuarioResponse actualizar( @PathVariable Long id, @Valid @RequestBody UsuarioRequest request) {
        return service.actualizar(id, request);
    }

    @GetMapping("/{id}")
    public UsuarioResponse obtenerPorId( @PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    @DeleteMapping("/{id}") @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminar( @PathVariable Long id) {
        service.eliminar(id);
    }

    @GetMapping
    public Page<UsuarioResponse> buscar(
            UsuarioFilterRequest filter,
            @PageableDefault(size = 20)
            @SortDefault.SortDefaults({ @SortDefault(sort = "fechaRegistro"),
                    @SortDefault(sort = "id")
            }) Pageable pageable
    ) {
        return service.buscar(filter, pageable);
    }
}