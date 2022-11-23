package com.example.tenismesa.controller;


import com.example.tenismesa.models.Torneo;
import com.example.tenismesa.repository.RepositoryTorneo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/torneo/")
public class torneoController {
    private RepositoryTorneo repoTorneo;
    public torneoController(RepositoryTorneo repoTorneo){
        this.repoTorneo = repoTorneo;
    }
    @PostMapping("add")
    public void agregar(@RequestBody Torneo p){
        repoTorneo.save(p);
    }
}
