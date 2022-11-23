package com.example.tenismesa.repository;

import com.example.tenismesa.models.Torneo;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RepositoryTorneo extends JpaRepository<Torneo,Long> {
}
