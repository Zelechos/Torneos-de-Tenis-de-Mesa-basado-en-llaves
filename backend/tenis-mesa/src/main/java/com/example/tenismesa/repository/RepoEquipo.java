package com.example.tenismesa.repository;

import com.example.tenismesa.models.Equipo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepoEquipo extends JpaRepository<Equipo,Long> {
}
