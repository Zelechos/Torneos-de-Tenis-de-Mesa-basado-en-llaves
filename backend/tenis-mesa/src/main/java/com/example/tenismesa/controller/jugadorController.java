package com.example.tenismesa.controller;

import com.example.tenismesa.models.Jugador;
import com.example.tenismesa.models.Participante;
import com.example.tenismesa.models.Partido;
import com.example.tenismesa.models.Torneo;
import com.example.tenismesa.repository.RepoJugador;
import com.example.tenismesa.repository.RepoParticipante;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

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
        p.setRanking(jugador.getRanking());
        p.setAcreditar(Boolean.FALSE);
        Participante pR = repoParticipante.save(p);
        jugador.setId(pR.getId());
        repoJugador.save(jugador);
    }
    @PutMapping("{id}")
    public void editar(@RequestBody Jugador jugador,@PathVariable("id") Long id){
        Participante p = new Participante();
        p.setNombre(jugador.getNombre());
        p.setRanking(jugador.getRanking());
        p.setAcreditar(jugador.getAcreditar());
        p.setId(id);
        Participante pR = repoParticipante.save(p);
        jugador.setId(pR.getId());
        jugador.setId(id);
        repoJugador.save(jugador);
    }
    @PutMapping("acreditar/{id}")
    public void acreditar(@PathVariable("id") Long id){
       Participante p = repoParticipante.findById(id).get();
       p.setAcreditar(Boolean.TRUE);
       repoParticipante.save(p);
    }
    @DeleteMapping("{id}")
    public void eliminar(@PathVariable("id") Long id){
        Jugador j = repoJugador.findById(id).get();
        Participante p = repoParticipante.findById(id).get();
        repoJugador.delete(j);
        repoParticipante.delete(p);
    }
    @GetMapping("mostrar")
    public ResponseEntity<List<Jugador>> mostrarJugadores(){

        return new ResponseEntity<>(repoJugador.jugadores(), HttpStatus.OK);
    }
    @PostMapping("crearT")
    public void cr(@RequestBody() List<Jugador> j){
        for(Jugador jugador:j){
            Participante p = new Participante();
            p.setNombre(jugador.getNombre());
            p.setRanking(jugador.getRanking());
            p.setAcreditar(Boolean.FALSE);
            Participante pR = repoParticipante.save(p);
            jugador.setId(pR.getId());
            repoJugador.save(jugador);
        }
    }
    @GetMapping("ordenar")
    public ResponseEntity<List> ordenar(){
        List<Jugador> p = repoJugador.jugadores();
        List<Integer> rankings=new ArrayList<>();
        for(Jugador j :p){
            rankings.add(j.getRanking());
        }
        Collections.sort(rankings,Collections.reverseOrder());
        int limite=rankings.size();
        if(limite%2!=0){
            limite+=1;
        }
        limite=limite/2;
        List<List<Integer>> partidos = new ArrayList<>();
        for(int i = 0;i<limite;i++){
            partidos.get(i).add(rankings.get(i));
        }
        return new ResponseEntity<>(rankings,HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<Jugador> byId(@PathVariable("id") Long id){
        Participante p = repoParticipante.findById(id).get();
        Jugador j = repoJugador.findById(id).get();
        j.setRanking(p.getRanking());
        j.setNombre(p.getNombre());
        return new ResponseEntity<>(j,HttpStatus.OK);
    }
}
