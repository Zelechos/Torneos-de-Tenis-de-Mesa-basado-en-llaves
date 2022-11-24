package service;

import com.example.tenismesa.models.Partido;
import com.example.tenismesa.repository.RepositoryPartido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartidoService {
    @Autowired
    private RepositoryPartido repositoryPartido;
    public PartidoService(RepositoryPartido repositoryPartido){
        this.repositoryPartido = repositoryPartido;
    }
    public void agregar(Partido p){
        this.repositoryPartido.save(p);

    }
}
