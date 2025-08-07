package com.example.demo.service;

import com.example.demo.dto.HistorialReciclajeCreationDTO;
import com.example.demo.dto.HistorialReciclajeResponseDTO;
import com.example.demo.model.Empresa;
import com.example.demo.model.HistorialReciclaje;
import com.example.demo.model.Material;
import com.example.demo.model.Usuario;
import com.example.demo.repository.EmpresaRepository;
import com.example.demo.repository.HistorialReciclajeRepository;
import com.example.demo.repository.MaterialRepository;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HistorialReciclajeService {

    private final HistorialReciclajeRepository historialReciclajeRepository;
    private final UsuarioRepository usuarioRepository;
    private final MaterialRepository materialRepository;
    private final EmpresaRepository empresaRepository;

    public HistorialReciclajeService(HistorialReciclajeRepository historialReciclajeRepository,
                                     UsuarioRepository usuarioRepository,
                                     MaterialRepository materialRepository,
                                     EmpresaRepository empresaRepository) {
        this.historialReciclajeRepository = historialReciclajeRepository;
        this.usuarioRepository = usuarioRepository;
        this.materialRepository = materialRepository;
        this.empresaRepository = empresaRepository;
    }

    public HistorialReciclajeResponseDTO save(HistorialReciclajeCreationDTO dto) {
        Usuario usuario = usuarioRepository.findById(dto.getUsuarioId())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        Material material = materialRepository.findById(dto.getMaterialId())
                .orElseThrow(() -> new RuntimeException("Material no encontrado"));
        Empresa empresa = empresaRepository.findById(dto.getEmpresaId())
                .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        HistorialReciclaje historial = new HistorialReciclaje();
        historial.setUsuario(usuario);
        historial.setMaterial(material);
        historial.setEmpresa(empresa);
        historial.setCantidadKg(dto.getCantidadKg());
        // Calcular puntos ganados (ejemplo: 10 puntos por kg)
        historial.setPuntosGanados(dto.getCantidadKg().multiply(new java.math.BigDecimal(10)).intValue());
        historial.setFechaReciclaje(Instant.now());
        historial.setEstado(dto.getEstado() != null ? dto.getEstado() : "Completado");

        HistorialReciclaje savedHistorial = historialReciclajeRepository.save(historial);

        // Actualizar puntos totales del usuario
        usuario.setPuntosTotales(usuario.getPuntosTotales() + savedHistorial.getPuntosGanados());
        usuarioRepository.save(usuario);

        return convertToDTO(savedHistorial);
    }

    public Optional<HistorialReciclajeResponseDTO> findById(Long id) {
        return historialReciclajeRepository.findById(id).map(this::convertToDTO);
    }

    public List<HistorialReciclajeResponseDTO> findAll() {
        return historialReciclajeRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public HistorialReciclajeResponseDTO update(Long id, HistorialReciclajeCreationDTO dto) {
        return historialReciclajeRepository.findById(id).map(historial -> {
            Usuario usuario = usuarioRepository.findById(dto.getUsuarioId())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            Material material = materialRepository.findById(dto.getMaterialId())
                    .orElseThrow(() -> new RuntimeException("Material no encontrado"));
            Empresa empresa = empresaRepository.findById(dto.getEmpresaId())
                    .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

            historial.setUsuario(usuario);
            historial.setMaterial(material);
            historial.setEmpresa(empresa);
            historial.setCantidadKg(dto.getCantidadKg());
            historial.setPuntosGanados(dto.getCantidadKg().multiply(new java.math.BigDecimal(10)).intValue()); // Recalcular puntos
            historial.setEstado(dto.getEstado() != null ? dto.getEstado() : historial.getEstado());

            return convertToDTO(historialReciclajeRepository.save(historial));
        }).orElseThrow(() -> new RuntimeException("Historial de Reciclaje no encontrado con ID " + id));
    }

    public void deleteById(Long id) {
        historialReciclajeRepository.deleteById(id);
    }

    private HistorialReciclajeResponseDTO convertToDTO(HistorialReciclaje historial) {
        HistorialReciclajeResponseDTO dto = new HistorialReciclajeResponseDTO();
        dto.setId(historial.getId());
        dto.setUsuarioId(historial.getUsuario().getId());
        dto.setUsuarioNombre(historial.getUsuario().getNombre() + " " + historial.getUsuario().getApellido());
        dto.setMaterialId(historial.getMaterial().getId());
        dto.setMaterialNombre(historial.getMaterial().getNombre());
        dto.setEmpresaId(historial.getEmpresa().getId());
        dto.setEmpresaNombre(historial.getEmpresa().getNombreEmpresa());
        dto.setCantidadKg(historial.getCantidadKg());
        dto.setPuntosGanados(historial.getPuntosGanados());
        dto.setFechaReciclaje(historial.getFechaReciclaje());
        dto.setEstado(historial.getEstado());
        return dto;
    }
}
