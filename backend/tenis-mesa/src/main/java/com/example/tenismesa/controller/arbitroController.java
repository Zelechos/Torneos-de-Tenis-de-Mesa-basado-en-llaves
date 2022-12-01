package com.example.tenismesa.controller;

import com.example.tenismesa.models.Arbitro;
import com.example.tenismesa.repository.RepoArbitro;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/arbitro/")
public class arbitroController {
    private RepoArbitro repoArbitro;
    public arbitroController(RepoArbitro repoArbitro) {
        this.repoArbitro=repoArbitro;
    }
    @PostMapping("add")
    public void agregar(@RequestBody Arbitro arbitro){
        this.repoArbitro.save(arbitro);
    }
}
