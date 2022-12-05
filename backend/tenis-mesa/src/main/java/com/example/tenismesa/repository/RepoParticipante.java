package com.example.tenismesa.repository;

import com.example.tenismesa.models.Participante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepoParticipante extends JpaRepository<Participante,Long> {
}
