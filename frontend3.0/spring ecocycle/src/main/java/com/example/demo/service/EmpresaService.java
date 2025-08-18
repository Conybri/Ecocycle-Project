package com.example.demo.service;

import com.example.demo.dto.EmpresaCreationDTO;
import com.example.demo.dto.EmpresaResponseDTO;
import com.example.demo.model.Empresa;
import com.example.demo.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Servicio para la gestión de empresas.
 * Proporciona la lógica de negocio para operaciones CRUD sobre las entidades de Empresa.
 */
@Service
public class EmpresaService {

    private final EmpresaRepository empresaRepository;

    public EmpresaService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public EmpresaResponseDTO save(EmpresaCreationDTO empresaDTO) {
        Empresa empresa = new Empresa();
        empresa.setNombreEmpresa(empresaDTO.getNombreEmpresa());
        empresa.setRut(empresaDTO.getRut());
        empresa.setNombreContacto(empresaDTO.getNombreContacto());
        empresa.setCargoContacto(empresaDTO.getCargoContacto());
        empresa.setEmailCorporativo(empresaDTO.getEmailCorporativo());
        empresa.setTelefono(empresaDTO.getTelefono());
        empresa.setDireccion(empresaDTO.getDireccion());
        empresa.setCapacidadMensual(empresaDTO.getCapacidadMensual());
        empresa.setDescripcion(empresaDTO.getDescripcion());
        empresa.setFechaRegistro(Instant.now());
        return convertToDTO(empresaRepository.save(empresa));
    }

    public Optional<EmpresaResponseDTO> findById(Long id) {
        return empresaRepository.findById(id).map(this::convertToDTO);
    }

    public List<EmpresaResponseDTO> findAll() {
        return empresaRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public EmpresaResponseDTO update(Long id, EmpresaCreationDTO empresaDTO) {
        return empresaRepository.findById(id).map(empresa -> {
            empresa.setNombreEmpresa(empresaDTO.getNombreEmpresa());
            empresa.setRut(empresaDTO.getRut());
            empresa.setNombreContacto(empresaDTO.getNombreContacto());
            empresa.setCargoContacto(empresaDTO.getCargoContacto());
            empresa.setEmailCorporativo(empresaDTO.getEmailCorporativo());
            empresa.setTelefono(empresaDTO.getTelefono());
            empresa.setDireccion(empresaDTO.getDireccion());
            empresa.setCapacidadMensual(empresaDTO.getCapacidadMensual());
            empresa.setDescripcion(empresaDTO.getDescripcion());
            return convertToDTO(empresaRepository.save(empresa));
        }).orElseThrow(() -> new RuntimeException("Empresa no encontrada con ID " + id));
    }

    public void deleteById(Long id) {
        empresaRepository.deleteById(id);
    }

    private EmpresaResponseDTO convertToDTO(Empresa empresa) {
        EmpresaResponseDTO dto = new EmpresaResponseDTO();
        dto.setId(empresa.getId());
        dto.setNombreEmpresa(empresa.getNombreEmpresa());
        dto.setRut(empresa.getRut());
        dto.setNombreContacto(empresa.getNombreContacto());
        dto.setCargoContacto(empresa.getCargoContacto());
        dto.setEmailCorporativo(empresa.getEmailCorporativo());
        dto.setTelefono(empresa.getTelefono());
        dto.setDireccion(empresa.getDireccion());
        dto.setCapacidadMensual(empresa.getCapacidadMensual());
        dto.setDescripcion(empresa.getDescripcion());
        dto.setFechaRegistro(empresa.getFechaRegistro());
        return dto;
    }
}
