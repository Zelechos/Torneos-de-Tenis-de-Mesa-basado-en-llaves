package com.example.tenismesa.controller;

import com.example.tenismesa.models.HistorialPartido;
import com.example.tenismesa.repository.RepoHistorialPartido;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/historialPartido")
public class historialPartidoController {
    private RepoHistorialPartido repoHistorialPartido;
    public historialPartidoController(RepoHistorialPartido repoHistorialPartido) {
        this.repoHistorialPartido = repoHistorialPartido;
    };
    @PostMapping("add")
    public void agregar(@RequestBody HistorialPartido historialPartido){
        this.repoHistorialPartido.save(historialPartido);
    }

}
