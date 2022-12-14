package com.example.tenismesa.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Entity(name="participante")
@Data
@AllArgsConstructor
public class Participante {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Integer ranking;
    private String nombreCategoria;
    private Boolean acreditar;
    private String nombre;
    @ManyToOne()
    @JoinColumn(name="torneo_id")
    private Torneo torneo;
    public Participante(){};
}
