package com.example.demo.service;

import com.example.demo.dto.MaterialCreationDTO;
import com.example.demo.dto.MaterialResponseDTO;
import com.example.demo.model.Material;
import com.example.demo.repository.MaterialRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Servicio para la gestión de materiales reciclables.
 * Proporciona la lógica de negocio para operaciones CRUD sobre las entidades de Material.
 */
@Service
public class MaterialService {

    private final MaterialRepository materialRepository;

    public MaterialService(MaterialRepository materialRepository) {
        this.materialRepository = materialRepository;
    }

    public MaterialResponseDTO save(MaterialCreationDTO materialDTO) {
        Material material = new Material();
        material.setNombre(materialDTO.getNombre());
        material.setCategoria(materialDTO.getCategoria());
        material.setDescripcion(materialDTO.getDescripcion());
        material.setPuntos(materialDTO.getPuntos());
        return convertToDTO(materialRepository.save(material));
    }

    public Optional<MaterialResponseDTO> findById(Long id) {
        return materialRepository.findById(id).map(this::convertToDTO);
    }

    public List<MaterialResponseDTO> findAll() {
        return materialRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public MaterialResponseDTO update(Long id, MaterialCreationDTO materialDTO) {
        return materialRepository.findById(id).map(material -> {
            material.setNombre(materialDTO.getNombre());
            material.setCategoria(materialDTO.getCategoria());
            material.setDescripcion(materialDTO.getDescripcion());
            material.setPuntos(materialDTO.getPuntos());
            return convertToDTO(materialRepository.save(material));
        }).orElseThrow(() -> new RuntimeException("Material no encontrado con ID " + id));
    }

    public void deleteById(Long id) {
        materialRepository.deleteById(id);
    }

    private MaterialResponseDTO convertToDTO(Material material) {
        MaterialResponseDTO dto = new MaterialResponseDTO();
        dto.setId(material.getId());
        dto.setNombre(material.getNombre());
        dto.setCategoria(material.getCategoria());
        dto.setDescripcion(material.getDescripcion());
        dto.setPuntos(material.getPuntos());
        return dto;
    }
}
