package com.example.tenismesa.controller;

import com.example.tenismesa.models.Participante;
import com.example.tenismesa.models.Partido;
import com.example.tenismesa.models.Torneo;
import com.example.tenismesa.repository.RepositoryPartido;
import com.example.tenismesa.repository.RepositoryTorneo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/partido/")
public class partidoController {
    private RepositoryPartido repoPartido;
    public partidoController(RepositoryPartido repoPartido){
        this.repoPartido = repoPartido;
    }
    @PostMapping("add")
    public void agregar(@RequestBody Partido p){
        repoPartido.save(p);

    }

}
