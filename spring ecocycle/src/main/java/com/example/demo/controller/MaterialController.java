package com.example.demo.controller;

import com.example.demo.dto.MaterialCreationDTO;
import com.example.demo.dto.MaterialResponseDTO;
import com.example.demo.service.MaterialService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para la gestión de materiales reciclables.
 * Expone endpoints para realizar operaciones CRUD sobre los materiales.
 */
@RestController
@RequestMapping("/materiales")
public class MaterialController {

    private final MaterialService materialService;

    public MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }

    @GetMapping
    public ResponseEntity<List<MaterialResponseDTO>> getAllMateriales() {
        List<MaterialResponseDTO> materiales = materialService.findAll();
        return ResponseEntity.ok(materiales);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MaterialResponseDTO> getMaterialById(@PathVariable Long id) {
        return materialService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MaterialResponseDTO> createMaterial(@Valid @RequestBody MaterialCreationDTO materialDTO) {
        MaterialResponseDTO createdMaterial = materialService.save(materialDTO);
        return new ResponseEntity<>(createdMaterial, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MaterialResponseDTO> updateMaterial(@PathVariable Long id, @Valid @RequestBody MaterialCreationDTO materialDTO) {
        try {
            MaterialResponseDTO updatedMaterial = materialService.update(id, materialDTO);
            return ResponseEntity.ok(updatedMaterial);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMaterial(@PathVariable Long id) {
        materialService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
