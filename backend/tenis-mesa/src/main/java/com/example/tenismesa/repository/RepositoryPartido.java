package com.example.tenismesa.repository;

import com.example.tenismesa.models.Partido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface RepositoryPartido extends JpaRepository<Partido, Long> {
}
