package com.example.demo.repository;

import com.example.demo.model.UsuarioLogro;
import com.example.demo.model.UsuarioLogroId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioLogroRepository extends JpaRepository<UsuarioLogro, UsuarioLogroId> {
}
