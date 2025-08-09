package com.example.demo.controller;

import com.example.demo.dto.EmpresaCreationDTO;
import com.example.demo.dto.EmpresaResponseDTO;
import com.example.demo.service.EmpresaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para la gestión de empresas.
 * Expone endpoints para realizar operaciones CRUD sobre las empresas.
 */
@RestController
@RequestMapping("/empresas")
public class EmpresaController {

    private final EmpresaService empresaService;

    public EmpresaController(EmpresaService empresaService) {
        this.empresaService = empresaService;
    }

    @GetMapping
    public ResponseEntity<List<EmpresaResponseDTO>> getAllEmpresas() {
        List<EmpresaResponseDTO> empresas = empresaService.findAll();
        return ResponseEntity.ok(empresas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmpresaResponseDTO> getEmpresaById(@PathVariable Long id) {
        return empresaService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<EmpresaResponseDTO> createEmpresa(@Valid @RequestBody EmpresaCreationDTO empresaDTO) {
        EmpresaResponseDTO createdEmpresa = empresaService.save(empresaDTO);
        return new ResponseEntity<>(createdEmpresa, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmpresaResponseDTO> updateEmpresa(@PathVariable Long id, @Valid @RequestBody EmpresaCreationDTO empresaDTO) {
        try {
            EmpresaResponseDTO updatedEmpresa = empresaService.update(id, empresaDTO);
            return ResponseEntity.ok(updatedEmpresa);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmpresa(@PathVariable Long id) {
        empresaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
