package com.example.tenismesa.repository;

import com.example.tenismesa.models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepoCategoria extends JpaRepository<Categoria,Long> {
}
