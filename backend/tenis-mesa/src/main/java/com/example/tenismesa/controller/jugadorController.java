package com.example.tenismesa.controller;

import com.example.tenismesa.models.Jugador;
import com.example.tenismesa.models.Participante;
import com.example.tenismesa.repository.RepoJugador;
import com.example.tenismesa.repository.RepoParticipante;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jugador/")
public class jugadorController {
    private RepoJugador repoJugador;
    private RepoParticipante repoParticipante;
    public jugadorController(RepoJugador repoJugador, RepoParticipante repoParticipante) {
        this.repoJugador = repoJugador;
        this.repoParticipante = repoParticipante;
    }
    @PostMapping("add")
    public void agregar(@RequestBody Jugador jugador){
        Participante p = new Participante();
        p.setNombre(jugador.getNombre());
        Participante pR = repoParticipante.save(p);
        jugador.setId(pR.getId());
        repoJugador.save(jugador);
    }
}
