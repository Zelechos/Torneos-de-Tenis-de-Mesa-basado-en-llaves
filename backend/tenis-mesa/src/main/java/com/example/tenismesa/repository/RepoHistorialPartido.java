package com.example.tenismesa.repository;

import com.example.tenismesa.models.HistorialPartido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepoHistorialPartido extends JpaRepository<HistorialPartido, Long> {
}
