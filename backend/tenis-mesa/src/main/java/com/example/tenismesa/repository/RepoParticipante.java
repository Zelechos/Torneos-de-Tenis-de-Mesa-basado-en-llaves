package com.example.tenismesa.repository;

import com.example.tenismesa.models.Jugador;
import com.example.tenismesa.models.Participante;
import com.example.tenismesa.models.Torneo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepoParticipante extends JpaRepository<Participante,Long> {
    List<Participante> findByTorneo(Torneo t);
}
