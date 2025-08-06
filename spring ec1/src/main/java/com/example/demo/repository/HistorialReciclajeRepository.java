package com.example.demo.repository;

import com.example.demo.model.HistorialReciclaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistorialReciclajeRepository extends JpaRepository<HistorialReciclaje, Long> {
}
