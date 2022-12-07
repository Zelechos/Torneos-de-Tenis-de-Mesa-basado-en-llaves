package com.example.tenismesa;

import com.example.tenismesa.models.Categoria;
import com.example.tenismesa.repository.RepoCategoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
public class CreateCategories implements ApplicationRunner {
    @Autowired
    private RepoCategoria repoCategoria;


    @Override
    public void run(ApplicationArguments arg0) throws Exception {
      /*  Categoria c= new Categoria();
        c.setNombre("Individuaels");
        Categoria c1= new Categoria();
        c1.setNombre("Dobles");
        Categoria c2= new Categoria();
        c2.setNombre("Dobles mixtos");
        Categoria c3= new Categoria();
        c3.setNombre("Competicion en silla de ruedas");
        Categoria c4= new Categoria();
        c4.setNombre("Torneo Individual de Destrezas");
        Categoria c5= new Categoria();
        c5.setNombre("Deportes Unificados Dobles");
        Categoria c6= new Categoria();
        c6.setNombre("Deportes Unificados Dobles Mixtos");
        Categoria c7= new Categoria();
        c7.setNombre("Equipos");
        repoCategoria.save(c);
        repoCategoria.save(c1);
        repoCategoria.save(c2);
        repoCategoria.save(c3);
        repoCategoria.save(c4);
        repoCategoria.save(c5);
        repoCategoria.save(c6);
        repoCategoria.save(c7);*/
        System.out.println("ApplicationRunnerBean");
    }
}
