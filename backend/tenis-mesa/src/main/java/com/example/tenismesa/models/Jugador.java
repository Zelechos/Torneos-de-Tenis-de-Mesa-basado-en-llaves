package com.example.tenismesa.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.time.LocalDate;

@Entity(name="jugador")
@Data
@AllArgsConstructor
public class Jugador {
    @Id
    private Long id;
    private String apellido;
    private LocalDate fechaNac;
    private Double altura;
    private Double peso;
    private String nacionalidad;
    private Character mano_habil;
    private Character sexo;
    @Transient
    private String nombre;
    public Jugador(){};
}
