package com.example.tenismesa.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Entity(name="historialPartido")
@Data
@AllArgsConstructor

public class HistorialPartido {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Integer puntos;
    @ManyToOne
    @JoinColumn(name="partido_fk")
    private Partido partido;
    @ManyToOne
    @JoinColumn(name="participante_fk")
    private Participante participante;
    public HistorialPartido(){};
}
