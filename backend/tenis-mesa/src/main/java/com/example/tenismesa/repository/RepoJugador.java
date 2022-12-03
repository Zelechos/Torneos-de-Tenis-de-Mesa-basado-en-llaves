package com.example.tenismesa.repository;

import com.example.tenismesa.models.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface RepoJugador extends JpaRepository<Jugador,Long> {
    @Query(value= "select new com.example.tenismesa.models.Jugador(ju.altura,ju.apellidos,ju.fecha_nacimiento,p.nombre, p.ranking, ju.sexo, ju.mano_habil, ju.nacionalidad, ju.peso, ju.id) from jugador ju inner join participante p on ju.id = p.id")
    List<Jugador> jugadores();
}
