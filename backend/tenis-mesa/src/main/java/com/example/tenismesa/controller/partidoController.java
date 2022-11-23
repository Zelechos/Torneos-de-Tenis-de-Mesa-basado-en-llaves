package com.example.tenismesa.controller;

import com.example.tenismesa.models.Partido;
import com.example.tenismesa.models.Torneo;
import com.example.tenismesa.repository.RepositoryPartido;
import com.example.tenismesa.repository.RepositoryTorneo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
