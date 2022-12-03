package com.example.tenismesa.repository;

import com.example.tenismesa.models.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepoJugador extends JpaRepository<Jugador,Long> {
    Jugador findByNombre(String nombre);
}
