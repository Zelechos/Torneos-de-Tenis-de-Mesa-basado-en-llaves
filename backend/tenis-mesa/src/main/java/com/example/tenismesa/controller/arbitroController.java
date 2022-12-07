package com.example.tenismesa.controller;

import com.example.tenismesa.models.Arbitro;
import com.example.tenismesa.models.Participante;
import com.example.tenismesa.repository.RepoArbitro;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/arbitro/")
public class arbitroController {
    public RepoArbitro repoArbitro;
    public arbitroController(RepoArbitro repoArbitro) {
        this.repoArbitro=repoArbitro;
    }
    @PostMapping("add")
    public void agregar(@RequestBody Arbitro arbitro){
        arbitro.setAcreditar(Boolean.FALSE);
        repoArbitro.save(arbitro);
    }
    @PutMapping("{id}")
    public void editar(@RequestBody Arbitro arbitro, @PathVariable("id") Long id){
        arbitro.setId(id);
        repoArbitro.save(arbitro);
    }
    @DeleteMapping("{id}")
    public void eliminar(@PathVariable("id") Long id){
        Arbitro a = this.repoArbitro.findById(id).get();
        repoArbitro.delete(a);
    }
    @PutMapping("acreditar/{id}")
    public void acreditar(@PathVariable("id") Long id){
        Arbitro a = repoArbitro.findById(id).get();
        a.setAcreditar(Boolean.TRUE);
        repoArbitro.save(a);
    }
    @GetMapping("mostrar")
    public ResponseEntity<List<Arbitro>> mostrar(){
        return new ResponseEntity(repoArbitro.findAll(), HttpStatus.OK);
    }
}
