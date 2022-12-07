package com.example.tenismesa.controller;


import com.example.tenismesa.models.*;
import com.example.tenismesa.repository.RepoJugador;
import com.example.tenismesa.repository.RepoParticipante;
import com.example.tenismesa.repository.RepositoryPartido;
import com.example.tenismesa.repository.RepositoryTorneo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/api/torneo/")
public class torneoController {
    private RepositoryTorneo repoTorneo;
    private RepoJugador repoJugador;
    private RepoParticipante repoParticipante;
    public torneoController(RepositoryTorneo repoTorneo, RepoJugador repoJugador, RepoParticipante repoParticipante){
        this.repoTorneo = repoTorneo;
        this.repoJugador = repoJugador;
        this.repoParticipante = repoParticipante;
    }
    @PostMapping("add")
    public void agregar(@RequestBody Torneo p){
        repoTorneo.save(p);
    }
    @GetMapping("mostrar")
    public ResponseEntity<List<Torneo>> mostrar(){

        return new ResponseEntity<>(repoTorneo.findAll(), HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Long id){
        Torneo t = repoTorneo.findById(id).get();
        repoTorneo.delete(t);
    }
    @GetMapping("crearLlaves")
    public ResponseEntity<List<DTOParticipantePartido>> crearLlaves(){
        //Torneo t = repoTorneo.findById(id).get();
        List<Participante> participanteList = repoParticipante.findAll();//repoParticipante.findByTorneo(t);
        participanteList.sort(Comparator.comparing(Participante::getRanking,Comparator.reverseOrder()));
        int matches = participanteList.size();
        if(matches%2!=0){
            Participante p = new Participante();
            p.setNombre("BYE");
            p.setRanking(-1);
            participanteList.add(p);
            matches+=1;
        }
        matches=matches/2;
        DTOParticipantePartido[] dto = new DTOParticipantePartido[matches];
        int par=0;
        int impar=matches-1;
        for(int i=0;i<matches;i++){
            Participante p1 = participanteList.get(0);
            Participante p2=participanteList.get(participanteList.size()-1);
            DTOParticipantePartido dpp = new DTOParticipantePartido(p1,p2);
            participanteList.remove(p1);
            participanteList.remove(p2);
            if(i%2==0){
                dto[par]=dpp;
                par++;
            }else{
                dto[impar]=dpp;
                impar--;
            }
        }
        List<DTOParticipantePartido> enviar = List.of(dto);
       return new ResponseEntity<>(enviar,HttpStatus.OK);
    }
/* for(Participante participante: participanteList) {
            rankings.add(participante.getRanking());
        }
        int matchs = rankings.size()/2;
        if(rankings.size()%2!=0){
            matchs=(rankings.size()/2)+1;
        }
        List<Participante> matchs_data = new ArrayList<>();
        int [][] data = new int[matchs][2];
//
        for (int index = 0 ; matchs > index; index++){
            if (rankings.size() % 2 != 0){
                int maximo = Collections.max(rankings);
                current_match.add(maximo);
                current_match.add(-1);
                rankings.remove(maximo);
            } else {
                current_match.add(Collections.max(rankings));
                current_match.add(Collections.min(rankings));
                rankings.remove(Collections.max(rankings));
                rankings.remove(Collections.min(rankings));
            }
            matchs_data.add(current_match);

        }
//        PARA ORDENAR POR PARTIDO
        int impar = matchs_data.size() - 1;
        int par = 0;
        for (int index = 0 ; matchs > index; index++){
            int [] c = new int[2];
            c[0] = (int)matchs_data.get(index).toArray()[0];
            c[1] = (int)matchs_data.get(index).toArray()[1];

            if (index % 2 != 0) {
                data[impar] = c;
                impar--;
            } else{
                data[par] = c;
                par++;
            }
        }

        for (int index = 0 ; data.length > index; index++){
            System.out.println("["+data[index][0]+" , "+data[index][1]+"]");
        }
        List<Participante> mandar = new ArrayList<>();
        for(Participante p: participanteList){
            int rank = p.getRanking();
            for(int i=0;i<data.length;i++){
                    int rank1=
            }
        }*/

}
