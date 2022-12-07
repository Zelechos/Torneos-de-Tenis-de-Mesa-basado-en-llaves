package com.example.tenismesa.controller;

import com.example.tenismesa.models.Categoria;
import com.example.tenismesa.repository.RepoCategoria;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categoria/")
public class categoriaController {
    public RepoCategoria repoCategoria;
    public categoriaController(RepoCategoria repoCategoria){
        this.repoCategoria=repoCategoria;
    }
    @GetMapping("mostrar")
    public ResponseEntity<List<Categoria>> mostrar(){
        return new ResponseEntity<>(repoCategoria.findAll(), HttpStatus.OK);
    }
}
