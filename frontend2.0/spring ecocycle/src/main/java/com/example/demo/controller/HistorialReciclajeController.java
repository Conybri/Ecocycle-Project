package com.example.demo.controller;

import com.example.demo.dto.HistorialReciclajeCreationDTO;
import com.example.demo.dto.HistorialReciclajeResponseDTO;
import com.example.demo.service.HistorialReciclajeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para la gestión del historial de reciclaje.
 * Expone endpoints para realizar operaciones CRUD sobre los registros de reciclaje.
 */
@RestController
@RequestMapping("/historial-reciclaje")
public class HistorialReciclajeController {

    private final HistorialReciclajeService historialReciclajeService;

    public HistorialReciclajeController(HistorialReciclajeService historialReciclajeService) {
        this.historialReciclajeService = historialReciclajeService;
    }

    @GetMapping
    public ResponseEntity<List<HistorialReciclajeResponseDTO>> getAllHistorialReciclaje() {
        List<HistorialReciclajeResponseDTO> historial = historialReciclajeService.findAll();
        return ResponseEntity.ok(historial);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HistorialReciclajeResponseDTO> getHistorialReciclajeById(@PathVariable Long id) {
        return historialReciclajeService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<HistorialReciclajeResponseDTO> createHistorialReciclaje(@Valid @RequestBody HistorialReciclajeCreationDTO dto) {
        HistorialReciclajeResponseDTO createdHistorial = historialReciclajeService.save(dto);
        return new ResponseEntity<>(createdHistorial, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HistorialReciclajeResponseDTO> updateHistorialReciclaje(@PathVariable Long id, @Valid @RequestBody HistorialReciclajeCreationDTO dto) {
        try {
            HistorialReciclajeResponseDTO updatedHistorial = historialReciclajeService.update(id, dto);
            return ResponseEntity.ok(updatedHistorial);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHistorialReciclaje(@PathVariable Long id) {
        historialReciclajeService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
