package service;

import com.example.tenismesa.models.Partido;
import com.example.tenismesa.repository.RepositoryPartido;
import org.springframework.stereotype.Service;

@Service
public class PartidoService {
    private RepositoryPartido repositoryPartido;
    public PartidoService(RepositoryPartido repositoryPartido){
        this.repositoryPartido = repositoryPartido;
    }
    public void agregar(Partido p){
        this.repositoryPartido.save(p);
    }
}
