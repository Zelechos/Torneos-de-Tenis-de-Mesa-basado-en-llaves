package com.example.tenismesa.controller;


import com.example.tenismesa.models.Torneo;
import com.example.tenismesa.repository.RepositoryTorneo;
import org.springframework.web.bind.annotation.*;

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
    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Long id){
        Torneo t = repoTorneo.findById(id).get();
        repoTorneo.delete(t);
    }
}
